(function (f, d) {
  d.Granite = d.Granite || {};
  d.Granite.$ = d.Granite.$ || f;
  d._g = d._g || {};
  d._g.$ = d._g.$ || f;
  var g = Granite.HTTP;
  f.ajaxSetup({
    externalize: !0,
    encodePath: !0,
    hook: !0,
    beforeSend: function (d, c) {
      ("undefined" !== typeof G_IS_HOOKED && G_IS_HOOKED(c.url)) ||
        (c.externalize && (c.url = g.externalize(c.url)),
        c.encodePath && (c.url = g.encodePathOfURI(c.url)));
      c.hook &&
        (d = g.getXhrHook(c.url, c.type, c.data)) &&
        ((c.url = d.url),
        d.params &&
          ("GET" === c.type.toUpperCase()
            ? (c.url += "?" + f.param(d.params))
            : (c.data = f.param(d.params))));
    },
    statusCode: {
      403: function (d) {
        "Authentication Failed" === d.getResponseHeader("X-Reason") &&
          g.handleLoginRedirect();
      },
    },
  });
  f.ajaxSettings.traditional = !0;
})(jQuery, this);
(function (f) {
  window.Granite.csrf || (window.Granite.csrf = f(window.Granite.HTTP));
})(function (f) {
  function d() {
    this._handler = [];
  }
  function g(a) {
    var b = "//" + document.location.host,
      c = document.location.protocol + b;
    return (
      a === c ||
      a.slice(0, c.length + 1) === c + "/" ||
      a === b ||
      a.slice(0, b.length + 1) === b + "/" ||
      !/^(\/\/|http:|https:).*/.test(a)
    );
  }
  function k(a) {
    window.console &&
      console.warn(
        "CSRF data not available;The data may be unavailable by design, such as during non-authenticated requests: " +
          a
      );
  }
  function c() {
    var a = new d();
    l = a;
    var b = new XMLHttpRequest();
    b.onreadystatechange = function () {
      if (4 === b.readyState)
        try {
          (e = JSON.parse(b.responseText).token), a.resolve(e);
        } catch (r) {
          k(r), a.reject(b.responseText);
        }
    };
    b.open("GET", m, !0);
    b.send();
    return a;
  }
  function n() {
    var a = new XMLHttpRequest();
    a.open("GET", m, !1);
    a.send();
    try {
      return (e = JSON.parse(a.responseText).token);
    } catch (b) {
      k(b);
    }
  }
  function p(a) {
    var b = a.getAttribute("action");
    "GET" === a.method.toUpperCase() ||
      (b && !g(b)) ||
      (e || n(),
      e &&
        ((b = a.querySelector('input[name\x3d":cq_csrf_token"]')),
        b ||
          ((b = document.createElement("input")),
          b.setAttribute("type", "hidden"),
          b.setAttribute("name", ":cq_csrf_token"),
          a.appendChild(b)),
        b.setAttribute("value", e)));
  }
  function q(a) {
    var b = function (a) {
      a = a.target;
      "FORM" === a.nodeName && p(a);
    };
    a.addEventListener
      ? a.addEventListener("submit", b, !0)
      : a.attachEvent && a.attachEvent("submit", b);
  }
  d.prototype = {
    then: function (a, b) {
      this._handler.push({ resolve: a, reject: b });
    },
    resolve: function () {
      this._execute("resolve", arguments);
    },
    reject: function () {
      this._execute("reject", arguments);
    },
    _execute: function (a, b) {
      if (null === this._handler) throw Error("Promise already completed.");
      for (var c = 0, d = this._handler.length; c < d; c++)
        this._handler[c][a].apply(window, b);
      this.then = function (c, d) {
        ("resolve" === a ? c : d).apply(window, b);
      };
      this._handler = null;
    },
  };
  var m = f.externalize("/libs/granite/csrf/token.json"),
    l,
    e;
  q(document);
  var t = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function (a, b, c) {
    "get" !== a.toLowerCase() && g(b) && ((this._csrf = !0), (this._async = c));
    return t.apply(this, arguments);
  };
  var h = XMLHttpRequest.prototype.send;
  XMLHttpRequest.prototype.send = function () {
    if (this._csrf)
      if (e) this.setRequestHeader("CSRF-Token", e), h.apply(this, arguments);
      else if (!1 === this._async)
        n(),
          e && this.setRequestHeader("CSRF-Token", e),
          h.apply(this, arguments);
      else {
        var a = this,
          b = Array.prototype.slice.call(arguments);
        l.then(
          function (c) {
            a.setRequestHeader("CSRF-Token", c);
            h.apply(a, b);
          },
          function () {
            h.apply(a, b);
          }
        );
      }
    else h.apply(this, arguments);
  };
  var u = HTMLFormElement.prototype.submit;
  HTMLFormElement.prototype.submit = function () {
    p(this);
    return u.apply(this, arguments);
  };
  if (window.Node) {
    var v = Node.prototype.appendChild;
    Node.prototype.appendChild = function () {
      var a = v.apply(this, arguments);
      if ("IFRAME" === a.nodeName)
        try {
          a.contentWindow &&
            !a._csrf &&
            ((a._csrf = !0), q(a.contentWindow.document));
        } catch (b) {
          a.src &&
            a.src.length &&
            g(a.src) &&
            window.console &&
            console.error(
              "Unable to attach CSRF token to an iframe element on the same origin"
            );
        }
      return a;
    };
  }
  c();
  setInterval(function () {
    c();
  }, 3e5);
  return {
    initialised: !1,
    refreshToken: c,
    _clearToken: function () {
      e = void 0;
      c();
    },
  };
});
