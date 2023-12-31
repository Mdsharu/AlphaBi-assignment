(function (a) {
  "object" === typeof module && module.exports
    ? (module.exports = a())
    : ((window.Granite = window.Granite || {}).Sling = a());
})(function () {
  return {
    SELECTOR_INFINITY: ".infinity",
    CHARSET: "_charset_",
    STATUS: ":status",
    STATUS_BROWSER: "browser",
    OPERATION: ":operation",
    OPERATION_DELETE: "delete",
    OPERATION_MOVE: "move",
    DELETE_SUFFIX: "@Delete",
    TYPEHINT_SUFFIX: "@TypeHint",
    COPY_SUFFIX: "@CopyFrom",
    MOVE_SUFFIX: "@MoveFrom",
    ORDER: ":order",
    REPLACE: ":replace",
    DESTINATION: ":dest",
    SAVE_PARAM_PREFIX: ":saveParamPrefix",
    IGNORE_PARAM: ":ignore",
    REQUEST_LOGIN_PARAM: "sling:authRequestLogin",
    LOGIN_URL: "/system/sling/login.html",
    LOGOUT_URL: "/system/sling/logout.html",
  };
});
(function (a) {
  "object" === typeof module && module.exports
    ? (module.exports = a())
    : ((window.Granite = window.Granite || {}).Util = a());
})(function () {
  return {
    patchText: function (a, e) {
      if (e)
        if ("[object Array]" !== Object.prototype.toString.call(e))
          a = a.replace("{0}", e);
        else
          for (var c = 0; c < e.length; c++) a = a.replace("{" + c + "}", e[c]);
      return a;
    },
    getTopWindow: function () {
      var a = window;
      if (this.iFrameTopWindow) return this.iFrameTopWindow;
      try {
        for (; a.parent && a !== a.parent && a.parent.location.href; )
          a = a.parent;
      } catch (e) {}
      return a;
    },
    setIFrameMode: function (a) {
      this.iFrameTopWindow = a || window;
    },
    applyDefaults: function () {
      for (var a, e = arguments[0] || {}, c = 1; c < arguments.length; c++) {
        a = arguments[c];
        for (var f in a) {
          var g = a[f];
          a.hasOwnProperty(f) &&
            void 0 !== g &&
            (e[f] =
              null === g || "object" !== typeof g || g instanceof Array
                ? g instanceof Array
                  ? g.slice(0)
                  : g
                : this.applyDefaults(e[f], g));
        }
      }
      return e;
    },
    getKeyCode: function (a) {
      return a.keyCode ? a.keyCode : a.which;
    },
  };
});
(function (a) {
  "object" === typeof module && module.exports
    ? (module.exports = a(require("@granite/util"), require("jquery")))
    : (window.Granite.HTTP = a(Granite.Util, jQuery));
})(function (a, e) {
  return (function () {
    var c = null,
      f =
        /^(?:http|https):\/\/[^/]+(\/.*)\/(?:etc\.clientlibs|etc(\/.*)*\/clientlibs|libs(\/.*)*\/clientlibs|apps(\/.*)*\/clientlibs|etc\/designs).*\.js(\?.*)?$/,
      g = /[^\w-.~%:/?[\]@!$&'()*+,;=]/,
      l = /^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,
      k = !1,
      d = {
        getSchemeAndAuthority: function (b) {
          if (!b) return "";
          b = l.exec(b);
          return null === b ? "" : [b[1], b[3]].join("");
        },
        getContextPath: function () {
          null === c && (c = d.detectContextPath());
          return c;
        },
        detectContextPath: function () {
          try {
            if (window.CQURLInfo) c = CQURLInfo.contextPath || "";
            else {
              for (
                var b = document.getElementsByTagName("script"), a = 0;
                a < b.length;
                a++
              ) {
                var h = f.exec(b[a].src);
                if (h) return (c = h[1]);
              }
              c = "";
            }
          } catch (n) {}
          return c;
        },
        externalize: function (b) {
          try {
            0 === b.indexOf("/") &&
              d.getContextPath() &&
              0 !== b.indexOf(d.getContextPath() + "/") &&
              (b = d.getContextPath() + b);
          } catch (m) {}
          return b;
        },
        internalize: function (b, a) {
          if ("/" === b.charAt(0))
            return c === b
              ? ""
              : c && 0 === b.indexOf(c + "/")
              ? b.substring(c.length)
              : b;
          a || (a = document);
          a = d.getSchemeAndAuthority(a.location.href);
          var h = d.getSchemeAndAuthority(b);
          return a === h ? b.substring(h.length + (c ? c.length : 0)) : b;
        },
        getPath: function (b) {
          if (b) (b = d.removeParameters(b)), (b = d.removeAnchor(b));
          else {
            if (window.CQURLInfo && CQURLInfo.requestPath)
              return CQURLInfo.requestPath;
            b = window.location.pathname;
          }
          b = d.internalize(b);
          var a = b.indexOf(".", b.lastIndexOf("/"));
          -1 !== a && (b = b.substring(0, a));
          return b;
        },
        removeAnchor: function (b) {
          var a = b.indexOf("#");
          return 0 <= a ? b.substring(0, a) : b;
        },
        removeParameters: function (b) {
          var a = b.indexOf("?");
          return 0 <= a ? b.substring(0, a) : b;
        },
        encodePathOfURI: function (a) {
          for (var b = ["?", "#"], h = [a], c, e = 0, f = b.length; e < f; e++)
            if (((c = b[e]), 0 <= a.indexOf(c))) {
              h = a.split(c);
              break;
            }
          g.test(h[0]) && (h[0] = d.encodePath(h[0]));
          return h.join(c);
        },
        encodePath: function (a) {
          a = encodeURI(a);
          a = a.replace(/%5B/g, "[").replace(/%5D/g, "]");
          a = a.replace(/\?/g, "%3F");
          return (a = a.replace(/#/g, "%23"));
        },
        handleLoginRedirect: function () {
          if (!k) {
            k = !0;
            alert(
              Granite.I18n.get(
                "Your request could not be completed because you have been signed out."
              )
            );
            var b = a.getTopWindow().document.location;
            b.href =
              d.externalize("/") +
              "?resource\x3d" +
              encodeURIComponent(b.pathname + b.search + b.hash);
          }
        },
        getXhrHook: function (a, d, h) {
          return window.G_XHR_HOOK && "function" === typeof G_XHR_HOOK
            ? ((a = { url: a, method: d || "GET" }),
              h && (a.params = h),
              G_XHR_HOOK(a))
            : null;
        },
        eval: function (a) {
          "object" !== typeof a &&
            (a = e.ajax({ url: a, type: "get", async: !1 }));
          try {
            return JSON.parse(a.body ? a.body : a.responseText);
          } catch (m) {}
          return null;
        },
      };
    return d;
  })();
});
(function (a) {
  "object" === typeof module && module.exports
    ? (module.exports = a(require("@granite/http")))
    : (window.Granite.I18n = a(window.Granite.HTTP));
})(function (a) {
  return (function () {
    var e = {},
      c = "/libs/cq/i18n/dict.",
      f = ".json",
      g = void 0,
      l = !1,
      k = null,
      d = {},
      b = !1,
      m = function (a) {
        if (b) return c + a + f;
        var h,
          d = document.querySelector("html");
        d && (h = d.getAttribute("data-i18n-dictionary-src"));
        return h
          ? h.replace("{locale}", encodeURIComponent(a)).replace("{+locale}", a)
          : c + a + f;
      };
    d.LOCALE_DEFAULT = "en";
    d.PSEUDO_LANGUAGE = "zz";
    d.PSEUDO_PATTERN_KEY = "_pseudoPattern_";
    d.init = function (a) {
      a = a || {};
      this.setLocale(a.locale);
      this.setUrlPrefix(a.urlPrefix);
      this.setUrlSuffix(a.urlSuffix);
    };
    d.setLocale = function (a) {
      a && (g = a);
    };
    d.getLocale = function () {
      "function" === typeof g && (g = g());
      return g || document.documentElement.lang || d.LOCALE_DEFAULT;
    };
    d.setUrlPrefix = function (a) {
      a && ((c = a), (b = !0));
    };
    d.setUrlSuffix = function (a) {
      a && ((f = a), (b = !0));
    };
    d.getDictionary = function (b) {
      b = b || d.getLocale();
      if (!e[b]) {
        l = 0 === b.indexOf(d.PSEUDO_LANGUAGE);
        try {
          var c = new XMLHttpRequest();
          c.open("GET", a.externalize(m(b)), !1);
          c.send();
          e[b] = JSON.parse(c.responseText);
        } catch (p) {}
        e[b] || (e[b] = {});
      }
      return e[b];
    };
    d.get = function (a, b, c) {
      var e;
      var g = d.getDictionary();
      var h = l ? d.PSEUDO_PATTERN_KEY : c ? a + " ((" + c + "))" : a;
      g && (e = g[h]);
      e || (e = a);
      l && (e = e.replace("{string}", a).replace("{comment}", c ? c : ""));
      a = e;
      if (b)
        if (Array.isArray(b))
          for (c = 0; c < b.length; c++) a = a.replace("{" + c + "}", b[c]);
        else a = a.replace("{0}", b);
      return a;
    };
    d.getVar = function (a, b) {
      return a ? d.get(a, null, b) : null;
    };
    d.getLanguages = function () {
      if (!k)
        try {
          var b = a.externalize(
              "/libs/wcm/core/resources/languages.overlay.infinity.json"
            ),
            c = new XMLHttpRequest();
          c.open("GET", b, !1);
          c.send();
          var e = JSON.parse(c.responseText);
          Object.keys(e).forEach(function (a) {
            a = e[a];
            a.language && (a.title = d.getVar(a.language));
            a.title &&
              a.country &&
              "*" !== a.country &&
              (a.title += " (" + d.getVar(a.country) + ")");
          });
          k = e;
        } catch (q) {
          k = {};
        }
      return k;
    };
    d.parseLocale = function (a) {
      if (!a) return null;
      var b = a.indexOf("_");
      0 > b && (b = a.indexOf("-"));
      if (0 > b) {
        var c = a;
        b = null;
      } else (c = a.substring(0, b)), (b = a.substring(b + 1));
      return { code: a, language: c, country: b };
    };
    return d;
  })();
});
(function (a) {
  "object" === typeof module && module.exports
    ? (module.exports = a())
    : ((window.Granite = window.Granite || {}).TouchIndicator = a());
})(function () {
  var a = {},
    e = [];
  return {
    debugWithMouse: !1,
    init: function () {
      var a = this,
        e = function (c) {
          a.update(c.touches);
          return !0;
        };
      document.addEventListener("touchstart", e);
      document.addEventListener("touchmove", e);
      document.addEventListener("touchend", e);
      this.debugWithMouse &&
        document.addEventListener("mousemove", function (c) {
          c.identifer = "fake";
          a.update([c]);
          return !0;
        });
    },
    update: function (c) {
      for (var f = {}, g = 0; g < c.length; g++) {
        var l = c[g],
          k = l.identifier,
          d = a[k];
        d ||
          ((d = e.pop()),
          d ||
            ((d = document.createElement("div")),
            (d.style.visibility = "hidden"),
            (d.style.position = "absolute"),
            (d.style.width = "30px"),
            (d.style.height = "30px"),
            (d.style.borderRadius = "20px"),
            (d.style.border = "5px solid orange"),
            (d.style.userSelect = "none"),
            (d.style.opacity = "0.5"),
            (d.style.zIndex = "2000"),
            (d.style.pointerEvents = "none"),
            document.body.appendChild(d)));
        f[k] = d;
        d.style.left = l.pageX - 20 + "px";
        d.style.top = l.pageY - 20 + "px";
        d.style.visibility = "visible";
      }
      for (k in a)
        a.hasOwnProperty(k) &&
          !f[k] &&
          ((d = a[k]), (d.style.visibility = "hidden"), e.push(d));
      a = f;
    },
  };
});
(function (a) {
  "object" === typeof module && module.exports
    ? (module.exports = a())
    : ((window.Granite = window.Granite || {}).OptOutUtil = a());
})(function (a) {
  return (function () {
    var a = {},
      c = [],
      f = [];
    a.init = function (a) {
      a
        ? ((c = a.cookieNames || []), (f = a.whitelistCookieNames || []))
        : ((c = []), (f = []));
    };
    a.getCookieNames = function () {
      return c;
    };
    a.getWhitelistCookieNames = function () {
      return f;
    };
    a.isOptedOut = function () {
      for (var c = document.cookie.split(";"), e = 0; e < c.length; e++) {
        var f = c[e].split("\x3d")[0];
        f = String.prototype.trim
          ? f.trim()
          : f.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
        if (0 <= a.getCookieNames().indexOf(f)) return !0;
      }
      return !1;
    };
    a.maySetCookie = function (c) {
      return !(a.isOptedOut() && -1 === a.getWhitelistCookieNames().indexOf(c));
    };
    return a;
  })();
});
(function (a) {
  "object" === typeof module && module.exports
    ? (module.exports = a())
    : ((window.Granite = window.Granite || {}).Toggles = a());
})(function () {
  var a = null;
  return {
    isEnabled: function (e) {
      var c;
      (c = a) ||
        ((c = new XMLHttpRequest()),
        c.open(
          "GET",
          Granite.HTTP.externalize("/etc.clientlibs/toggles.json"),
          !1
        ),
        c.send(null),
        (c = 200 === c.status ? JSON.parse(c.responseText) : null));
      a = c;
      return (a || { enabled: [] }).enabled.includes(e);
    },
  };
});
Granite.OptOutUtil.init(window.GraniteOptOutConfig);
Granite.HTTP.detectContextPath();
