import React from 'react';


const Navbar = () => {
    var origin = window.location.origin.toLowerCase();
    var otScript = document.createElement("script");
    otScript.setAttribute("type", "text/javascript");
    otScript.setAttribute("data-document-language", "true");
    otScript.setAttribute("charset", "UTF-8");

    if (origin.indexOf(".cdnsvc") > 1) {
    otScript.setAttribute(
        "src",
        "/apps/cio-sites/clientlibs/onetrust/ot-s/scripttemplates/otSDKStub.js"
    );
    otScript.setAttribute(
        "data-domain-script",
        "447538ad-b6bf-4dce-a2c6-6517ede21fc1-test"
    );
    } else if (origin.indexOf(".cn") > 1) {
    otScript.setAttribute(
        "src",
        "/apps/cio-sites/clientlibs/onetrust/ot-p/scripttemplates/otSDKStub.js"
    );
    otScript.setAttribute(
        "data-domain-script",
        "447538ad-b6bf-4dce-a2c6-6517ede21fc1"
    );
    } else {
    otScript.setAttribute(
        "src",
        "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js"
    );
    otScript.setAttribute(
        "data-domain-script",
        "d6e38d3c-2419-4258-8e8d-d1a7d3972604"
    );
    }
    document.head.appendChild(otScript);

    window.addEventListener("DOMContentLoaded", () => {
        const form = document.querySelectorAll("form");
        if (form.length > 0) {
          var rcScript = document.createElement("script");
          rcScript.setAttribute("type", "text/javascript");
          rcScript.setAttribute("data-document-language", "true");
          rcScript.setAttribute("charset", "UTF-8");
          rcScript.setAttribute(
            "src",
            "https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit"
          );
          document.body.appendChild(rcScript);
        }
    });

    window.adobeDataLayer = window.adobeDataLayer || [];
      

  return (
    <div className="radicalaccenturedesign generic page basicpage" id="page-f3f3debf6f" data-barba="wrapper" data-cmp-data-layer-enabled>

        <div role="region" aria-label="skip navigation">
            <a href="#main" className="cmp-skip-link">Skip to main content</a>
            <a href="#footer" className="cmp-skip-link">Skip to footer</a>
        </div>

    <div data-mark-component="Accenture" data-mark-resource="/content/acom/us-en/jcr:content">
      <div className="root container responsivegrid">
        <div id="container-1309251dc9" className="cmp-container">
          <header className="customexperiencefragment experiencefragment">
            <div id="header" className="cmp-experiencefragment cmp-experiencefragment--global-header">
              <div id="container-84b50968ae" className="cmp-container">
                <div className="aem-Grid aem-Grid--12 aem-Grid--default--12">
                  <div className="globalheader has-tooltip aem-GridColumn aem-GridColumn--default--12">

                    <div className="cmp-global-header" data-cmp-data-layer='{"globalheader-5e05389bdf":{"@type":"cio-sites/components/blocks/b.001/globalheader","analytics-module-name":"global header","analytics-template-zone":"global header"}}' id="globalheader-5e05389bdf">
                      <nav aria-label="global">
                        <div className="cmp-global-header__navbar-container">
                          <div className="cmp-global-header__primary-nav">
                            <div className="cmp-global-header__menu">
                              <button
                                className="cmp-global-header__menu-button"
                                type="button" aria-expanded="false" aria-label="menu"
                                data-cmp-data-layer='{"hamburger":{"xdm:linkURL":"/us-en","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"menu","analytics-module-name":"top nav","analytics-template-zone":"global header"}}'
                              >
                                <div>
                                  <span></span>
                                  <span></span>
                                  <span></span>
                                </div>
                              </button>
                            </div>
                            <div
                              className="cmp-global-header__logo"
                              data-cmp-data-layer='{"globalheader-logo-0c000cd312":{"xdm:linkURL":"/us-en","analytics-engagement":"false","analytics-link-type":"logo","analytics-link-name":"accenture logo - header","analytics-module-name":"top nav"}}'
                            >
                              <a href="us-en.html" className="cmp-logo" data-cmp-clickable alt="Accenture Home">
                                <div className="cmp-logo__svg-wrapper">
                                  <svg height="100%" viewbox="0 0 153 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <title></title>
                                    <path className="cmp-logo__greater-than" d="M0 28.75L22.07 20.54L0 11.92V0.5L37.8 15.72V25.19L0 40.5V28.75Z"></path>
                                    <path
                                      className="cmp-logo__text" transform="translate(0, 24)"
                                    ></path>
                                  </svg>
                                </div>
                              </a>
                            </div>

                            <div className="cmp-global-header__content" role="toolbar">
                              <ul className="cmp-global-header__nav-menu">
                                <li className="cmp-global-header__nav-menu-item" id="globalheader-primarynavlinks-item0-a649bbb634" data-cmp-data-layer='{"globalheader-primarynavlinks-item0-a649bbb634":{"xdm:linkURL":"/us-en","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"Insights","analytics-module-name":"primary nav"}}'>
                                  <button className="cmp-global-header__nav-menu-label-button" type="button" aria-expanded="false" aria-haspopup="true" aria-label="Insights">
                                    Insights
                                  </button>
                                  <div className="cmp-global-header__nav-menu-item-content">
                                    <div className="xfpage page basicpage">
                                      <div id="container-23ddb5a4de" className="cmp-container">
                                        <div className="aem-Grid aem-Grid--12 aem-Grid--default--12">
                                          <div className="navcontainer container responsivegrid aem-GridColumn aem-GridColumn--default--12">
                                             {/* Begin Nav Container  */}
                                            <div className="cmp-global-header__drawer">
                                              <div className="cmp-global-header__drawer-content">
                                                <div className="cmp-global-header__drawer-two-columns">
                                                  {/* Begin Two Container  */}
                                                  <div className="cmp-global-header__drawer-left-column">
                                                    <div className="responsivegrid">
                                                      <div className="aem-Grid aem-Grid--12 aem-Grid--default--12">
                                                        <div className="teaser cmp-header-featured-content aem-GridColumn aem-GridColumn--default--12">
                                                          <div id="navteaser-434d636eed" className="cmp-teaser" data-cmp-data-layer='{"navteaser-434d636eed":{"@type":"cio-sites/components/blocks/b.001/globalheader/modules/navteaser","xdm:linkURL":"/us-en/insights/voices","analytics-module-name":"navteaser-1"}}'>
                                                            <div className="cmp-teaser__content">
                                                              <div className="cmp-teaser__pretitle">
                                                                FEATURED CONTENT
                                                              </div>

                                                              <h2 className="cmp-teaser__title">
                                                                <a className="cmp-teaser__title-link" href="voices.html" target="_self" aria-label="Voices of change"
                                                                  data-cmp-data-layer='{"navteaser-434d636eed-title":{"xdm:linkURL":"/us-en/insights/voices","analytics-link-name":"Voices of Change","tooltip":"Voices of change"}}'
                                                                  data-cmp-clickable> 
                                                                  Voices of Change</a
                                                                >
                                                              </h2>

                                                              <div className="cmp-teaser__description">
                                                                <p>
                                                                  <span className="cmp-text__paragraph-medium">The path to
                                                                    360&deg; value starts here&mdash;featuring our most provocative thinking,
                                                                    extensive research and compelling stories of shared success.</span
                                                                  >
                                                                </p>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="cmp-global-header__drawer-right-column">
                                                    <div className="cmp-global-header__group-link-list">
                                                      <div className="responsivegrid">
                                                        <div className="aem-Grid aem-Grid--12 aem-Grid--default--12">
                                                          <div className="cmp-global-header__link-list aem-GridColumn aem-GridColumn--default--12">
                                                            <div id="linklistteaser-56d8af4989" className="cmp-global-header__link-list" data-cmp-data-layer='{"linklistteaser-56d8af4989":{"@type":"cio-sites/components/blocks/b.001/globalheader/modules/linklistteaser","analytics-engagement":"true","analytics-module-name":"secondary nav","analytics-template-zone":"global header"}}'>
                                                              <div className="cmp-global-header__link-list__content">
                                                                <div>
                                                                  <ul className="cmp-global-header__inner-link-list" role="menu" aria-label="Insights">
                                                                    <li role="none">
                                                                      <a href="5g-index.html" aria-label="5G" data-cmp-data-layer='{"linklistteaser-item0-6fda68ed03":{"xdm:linkURL":"/content/acom/us-en/insights/5g-index","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"insights:5g","tooltip":"5G"}}'
                                                                        role="menuitem" data-cmp-clickable>5G
                                                                      </a>
                                                                    </li>

                                                                    <li role="none">
                                                                      <a
                                                                        href="artificial-intelligence-summary-index.html"
                                                                        aria-label="Artificial Intelligence"
                                                                        data-cmp-data-layer='{"linklistteaser-item1-2249889e25":{"xdm:linkURL":"/content/acom/us-en/insights/artificial-intelligence-summary-index","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"insights:artificial intelligence","tooltip":"Artificial Intelligence"}}'
                                                                        role="menuitem"
                                                                        data-cmp-clickable
                                                                        >Artificial Intelligence
                                                                      </a>
                                                                    </li>

                                                                    <li role="none">
                                                                      <a
                                                                        href="blockchain-index.html"
                                                                        aria-label="Blockchain"
                                                                        data-cmp-data-layer='{"linklistteaser-item2-fb977a4737":{"xdm:linkURL":"/content/acom/us-en/insights/blockchain-index","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"insights:blockchain","tooltip":"Blockchain"}}'
                                                                        role="menuitem"
                                                                        data-cmp-clickable
                                                                        >Blockchain
                                                                      </a>
                                                                    </li>

                                                                    <li role="none">
                                                                      <a
                                                                        href="cloud-insights.html"
                                                                        aria-label="Cloud"
                                                                        data-cmp-data-layer='{"linklistteaser-item3-4a5bce647a":{"xdm:linkURL":"/content/acom/us-en/insights/cloud-insights","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"insights:cloud ","tooltip":"Cloud "}}'
                                                                        role="menuitem"
                                                                        data-cmp-clickable
                                                                        >Cloud
                                                                      </a>
                                                                    </li>

                                                                    <li role="none">
                                                                      <a
                                                                        href="customer-experience-index.html"
                                                                        aria-label="CX"
                                                                        data-cmp-data-layer='{"linklistteaser-item4-777b9a6974":{"xdm:linkURL":"/content/acom/us-en/insights/song/customer-experience-index","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"insights:customer experience","tooltip":"Customer Experience"}}'
                                                                        role="menuitem"
                                                                        data-cmp-clickable
                                                                        >Customer Experience
                                                                      </a>
                                                                    </li>

                                                                    <li role="none">
                                                                      <a
                                                                        href="cyber-security-index.html"
                                                                        aria-label="cyber security"
                                                                        data-cmp-data-layer='{"linklistteaser-item5-6c4d72c3f7":{"xdm:linkURL":"/content/acom/us-en/insights/cyber-security-index","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"insights:cybersecurity","tooltip":"Cybersecurity"}}'
                                                                        role="menuitem"
                                                                        data-cmp-clickable
                                                                        >Cybersecurity
                                                                      </a>
                                                                    </li>

                                                                    <li role="none">
                                                                      <a
                                                                        href="industry-x-index.html"
                                                                        aria-label="Digital Engineering &amp; Manufacturing"
                                                                        data-cmp-data-layer='{"linklistteaser-item6-52564b1b8a":{"xdm:linkURL":"/content/acom/us-en/insights/industry-x-index","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"insights:digital engineering &amp; manufacturing","tooltip":"Digital Engineering &amp; Manufacturing"}}'
                                                                        role="menuitem"
                                                                        data-cmp-clickable
                                                                        >Digital Engineering
                                                                        &amp;
                                                                        Manufacturing
                                                                      </a>
                                                                    </li>

                                                                    <li role="none">
                                                                      <a
                                                                        href="digital-transformation-index.html"
                                                                        aria-label="digital transformation"
                                                                        data-cmp-data-layer='{"linklistteaser-item7-57bdc79afb":{"xdm:linkURL":"/content/acom/us-en/insights/digital-transformation-index","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"insights:digital transformation","tooltip":"Digital Transformation"}}'
                                                                        role="menuitem"
                                                                        data-cmp-clickable
                                                                        >Digital Transformation
                                                                      </a>
                                                                    </li>

                                                                    <li role="none">
                                                                      <a
                                                                        href="edge-computing-index.html"
                                                                        aria-label="Edge Computing"
                                                                        data-cmp-data-layer='{"linklistteaser-item8-56fc89a268":{"xdm:linkURL":"/content/acom/us-en/insights/cloud/edge-computing-index","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"insights:edge computing","tooltip":"Edge Computing"}}'
                                                                        role="menuitem"
                                                                        data-cmp-clickable
                                                                        >Edge Computing
                                                                      </a>
                                                                    </li>

                                                                    <li role="none">
                                                                      <a
                                                                        href="future-workforce-index.html"
                                                                        aria-label="Future of Work"
                                                                        data-cmp-data-layer='{"linklistteaser-item9-812ee8e08f":{"xdm:linkURL":"/content/acom/us-en/insightsnew/future-workforce-index","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"insights:future of work","tooltip":"Future of Work"}}'
                                                                        role="menuitem"
                                                                        data-cmp-clickable
                                                                        >Future of Work
                                                                      </a>
                                                                    </li>

                                                                    <li role="none">
                                                                      <a
                                                                        href="generative-ai.html"
                                                                        aria-label="Generative AI"
                                                                        data-cmp-data-layer='{"linklistteaser-item10-2c42decc0b":{"xdm:linkURL":"/content/acom/us-en/insights/generative-ai","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"insights:generative ai","tooltip":"Generative AI"}}'
                                                                        role="menuitem"
                                                                        data-cmp-clickable
                                                                        >Generative AI
                                                                      </a>
                                                                    </li>

                                                                    <li role="none">
                                                                      <a
                                                                        href="metaverse.html"
                                                                        aria-label="Metaverse&nbsp;"
                                                                        data-cmp-data-layer='{"linklistteaser-item11-006b1827d8":{"xdm:linkURL":"/content/acom/us-en/insights/metaverse","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"insights:metaverse&nbsp;","tooltip":"Metaverse&nbsp;"}}'
                                                                        role="menuitem"
                                                                        data-cmp-clickable
                                                                        >Metaverse&nbsp;
                                                                      </a>
                                                                    </li>

                                                                    <li role="none">
                                                                      <a
                                                                        href="supply-chain-management-operations-index.html"
                                                                        aria-label="Supply Chain Insights"
                                                                        data-cmp-data-layer='{"linklistteaser-item12-2d25313d11":{"xdm:linkURL":"/content/acom/us-en/insights/supply-chain-operations/supply-chain-management-operations-index","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"insights:supply chain","tooltip":"Supply Chain"}}'
                                                                        role="menuitem"
                                                                        data-cmp-clickable
                                                                        >Supply Chain
                                                                      </a>
                                                                    </li>

                                                                    <li role="none">
                                                                      <a
                                                                        href="sustainability-index.html"
                                                                        aria-label="Sustainability"
                                                                        data-cmp-data-layer='{"linklistteaser-item13-3580c06fc6":{"xdm:linkURL":"/content/acom/us-en/insights/consulting/sustainability-index","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"insights:sustainability","tooltip":"Sustainability"}}'
                                                                        role="menuitem"
                                                                        data-cmp-clickable
                                                                        >Sustainability
                                                                      </a>
                                                                    </li>

                                                                    <li role="none">
                                                                      <a
                                                                        href="podcast-index.html"
                                                                        aria-label="pod"
                                                                        data-cmp-data-layer='{"linklistteaser-item14-e0847e07c8":{"xdm:linkURL":"/content/acom/us-en/insights/podcast-index","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"insights:podcasts","tooltip":"Podcasts"}}'
                                                                        role="menuitem"
                                                                        data-cmp-clickable
                                                                        >Podcasts
                                                                      </a>
                                                                    </li>

                                                                    <li role="none">
                                                                      <a
                                                                        href="blogs-index.html"
                                                                        aria-label="blogs"
                                                                        data-cmp-data-layer='{"linklistteaser-item15-919d3704a6":{"xdm:linkURL":"/content/acom/us-en/insights/blogs-index","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"insights:blogs","tooltip":"Blogs"}}'
                                                                        role="menuitem"
                                                                        data-cmp-clickable
                                                                        >Blogs
                                                                      </a>
                                                                    </li>
                                                                  </ul>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </li>

                                <li className="cmp-global-header__nav-menu-item" id="globalheader-primarynavlinks-item1-95c28713f3" data-cmp-data-layer='{"globalheader-primarynavlinks-item1-95c28713f3":{"xdm:linkURL":"/us-en","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"Services","analytics-module-name":"primary nav"}}'>
                                  <button
                                    className="cmp-global-header__nav-menu-label-button" type="button"
                                    aria-expanded="false" aria-haspopup="true" aria-label="Services"
                                  >
                                    Services
                                  </button>
                                  <div className="cmp-global-header__nav-menu-item-content">
                                    <div className="xfpage page basicpage">
                                      <div id="container-da8404e04f" className="cmp-container">
                                        <div className="aem-Grid aem-Grid--12 aem-Grid--default--12">
                                          <div className="navcontainer container responsivegrid aem-GridColumn aem-GridColumn--default--12">
                                            <div className="cmp-global-header__drawer">
                                              <div className="cmp-global-header__drawer-content">
                                                <div className="cmp-global-header__drawer-one-column">
                                                  <div className="cmp-global-header__group-link-list">
                                                    <div className="responsivegrid">
                                                      <div className="aem-Grid aem-Grid--12 aem-Grid--default--12">
                                                        <div className="cmp-global-header__link-list aem-GridColumn aem-GridColumn--default--12">
                                                          <div id="linklistteaser-a9a5370ec0" className="cmp-global-header__link-list"
                                                            data-cmp-data-layer='{"linklistteaser-a9a5370ec0":{"@type":"cio-sites/components/blocks/b.001/globalheader/modules/linklistteaser","analytics-engagement":"true","analytics-module-name":"secondary nav","analytics-template-zone":"global header"}}'>
                                                            <div className="cmp-global-header__link-list__content">
                                                              <div>
                                                                <ul className="cmp-global-header__inner-link-list" role="menu" aria-label="Services">
                                                                  <li role="none">
                                                                    <a
                                                                      href="application-services.html" aria-label="Application Services"
                                                                      data-cmp-data-layer='{"linklistteaser-item0-dfddd700f8":{"xdm:linkURL":"/content/acom/us-en/services/technology/application-services","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"services:application services","tooltip":"Application Services"}}'
                                                                      role="menuitem" data-cmp-clickable
                                                                      >Application Services
                                                                    </a>
                                                                  </li>

                                                                  <li role="none">
                                                                    <a
                                                                      href="ai-artificial-intelligence-index.html" aria-label="Artificial Intelligence"
                                                                      data-cmp-data-layer='{"linklistteaser-item1-8c6d9a0482":{"xdm:linkURL":"/content/acom/us-en/services/ai-artificial-intelligence-index","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"services:artificial intelligence","tooltip":"Artificial Intelligence"}}'
                                                                      role="menuitem" data-cmp-clickable
                                                                      >Artificial Intelligence
                                                                    </a>
                                                                  </li>

                                                                  <li role="none">
                                                                    <a
                                                                      href="intelligent-automation-index.html" aria-label="Automation"
                                                                      data-cmp-data-layer='{"linklistteaser-item2-392a4f17d4":{"xdm:linkURL":"/content/acom/us-en/services/intelligent-automation-index","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"services:automation","tooltip":"Automation"}}'
                                                                      role="menuitem" data-cmp-clickable
                                                                      >Automation
                                                                    </a>
                                                                  </li>

                                                                  <li role="none">
                                                                    <a
                                                                      href="business-process-outsourcing-index.html" aria-label="Business Process Outsourcing"
                                                                      data-cmp-data-layer='{"linklistteaser-item3-160f001d45":{"xdm:linkURL":"/content/acom/us-en/services/business-process-outsourcing-index","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"services:business process outsourcing","tooltip":"Business Process Outsourcing"}}'
                                                                      role="menuitem" data-cmp-clickable
                                                                      >Business Process Outsourcing
                                                                    </a>
                                                                  </li>

                                                                  <li role="none">
                                                                    <a
                                                                      href="strategy-index.html" aria-label="Business Strategy"
                                                                      data-cmp-data-layer='{"linklistteaser-item4-ca28017ce7":{"xdm:linkURL":"/content/acom/us-en/about/strategy-index","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"services:business strategy","tooltip":"Business Strategy"}}'
                                                                      role="menuitem" data-cmp-clickable
                                                                      >Business Strategy
                                                                    </a>
                                                                  </li>

                                                                  <li role="none">
                                                                    <a
                                                                      href="talent-organization-human-potential-index.html" aria-label="Change Management"
                                                                      data-cmp-data-layer='{"linklistteaser-item5-7459c21c7c":{"xdm:linkURL":"/content/acom/us-en/services/talent-organization-human-potential-index","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"services:change management","tooltip":"Change Management"}}'
                                                                      role="menuitem" data-cmp-clickable
                                                                      >Change Management
                                                                    </a>
                                                                  </li>

                                                                  <li role="none">
                                                                    <a
                                                                      href="services-index.html" aria-label="Cloud"
                                                                      data-cmp-data-layer='{"linklistteaser-item6-a8568420fc":{"xdm:linkURL":"/content/acom/us-en/cloud/services-index","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"services:cloud","tooltip":"Cloud"}}'
                                                                      role="menuitem" data-cmp-clickable
                                                                      >Cloud
                                                                    </a>
                                                                  </li>

                                                                  <li role="none">
                                                                    <a
                                                                      href="song-company-index.html" aria-label="Customer Experience"
                                                                      data-cmp-data-layer='{"linklistteaser-item7-ef816433e8":{"xdm:linkURL":"/content/acom/us-en/about/song-company-index","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"services:customer experience","tooltip":"Customer Experience"}}'
                                                                      role="menuitem" data-cmp-clickable
                                                                      >Customer Experience
                                                                    </a>
                                                                  </li>

                                                                  <li role="none">
                                                                    <a
                                                                      href="data-analytics-index.html" aria-label="Data &amp; Analytics"
                                                                      data-cmp-data-layer='{"linklistteaser-item8-3559be347b":{"xdm:linkURL":"/content/acom/us-en/services/data-analytics-index","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"services:data &amp; analytics","tooltip":"Data &amp; Analytics"}}'
                                                                      role="menuitem" data-cmp-clickable
                                                                      >Data &amp; Analytics
                                                                    </a>
                                                                  </li>

                                                                  <li
                                                                    role="none"
                                                                  >
                                                                    <a
                                                                      href="commerce-transformation.html" aria-label="Digital Commerce"
                                                                      data-cmp-data-layer='{"linklistteaser-item9-0f5946b3f5":{"xdm:linkURL":"/content/acom/us-en/services/song/commerce-transformation","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"services:digital commerce","tooltip":"Digital Commerce"}}'
                                                                      role="menuitem" data-cmp-clickable
                                                                      >Digital Commerce
                                                                    </a>
                                                                  </li>

                                                                  <li
                                                                    role="none"
                                                                  >
                                                                    <a
                                                                      href="digital-engineering-manufacturing-index.html" aria-label="Digital Engineering &amp; Manufacturing"
                                                                      data-cmp-data-layer='{"linklistteaser-item10-db524fc199":{"xdm:linkURL":"/content/acom/us-en/services/digital-engineering-manufacturing-index","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"services:digital engineering &amp; manufacturing","tooltip":"Digital Engineering &amp; Manufacturing"}}'
                                                                      role="menuitem" data-cmp-clickable
                                                                      >Digital Engineering &amp; Manufacturing
                                                                    </a>
                                                                  </li>

                                                                  <li role="none">
                                                                    <a
                                                                      href="enterprise-industry-technologies.html" aria-label="Enterprise Platforms"
                                                                      data-cmp-data-layer='{"linklistteaser-item11-4bed802622":{"xdm:linkURL":"/content/acom/us-en/services/technology/enterprise-industry-technologies","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"services:enterprise platforms","tooltip":"Enterprise Platforms"}}'
                                                                      role="menuitem" data-cmp-clickable
                                                                      >Enterprise Platforms
                                                                    </a>
                                                                  </li>

                                                                  <li role="none">
                                                                    <a
                                                                      href="cfo-and-enterprise-value-index.html" aria-label="Finance Consulting"
                                                                      data-cmp-data-layer='{"linklistteaser-item12-32f9b89aa3":{"xdm:linkURL":"/content/acom/us-en/services/cfo-and-enterprise-value-index","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"services:finance consulting","tooltip":"Finance Consulting"}}'
                                                                      role="menuitem" data-cmp-clickable
                                                                      >Finance Consulting
                                                                    </a>
                                                                  </li>

                                                                  <li role="none">
                                                                    <a
                                                                      href="infrastructure-index.html" aria-label="Infrastructure"
                                                                      data-cmp-data-layer='{"linklistteaser-item13-5e7e78e0c2":{"xdm:linkURL":"/content/acom/us-en/cloud/services/infrastructure-index","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"services:infrastructure","tooltip":"Infrastructure"}}'
                                                                      role="menuitem" data-cmp-clickable
                                                                      >Infrastructure
                                                                    </a>
                                                                  </li>

                                                                  <li role="none">
                                                                    <a
                                                                      href="marketing-transformation.html" aria-label="Marketing"
                                                                      data-cmp-data-layer='{"linklistteaser-item14-813995d886":{"xdm:linkURL":"/content/acom/us-en/services/song/marketing-transformation","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"services:marketing","tooltip":"Marketing"}}'
                                                                      role="menuitem" data-cmp-clickable
                                                                      >Marketing
                                                                    </a>
                                                                  </li>

                                                                  <li role="none">
                                                                    <a
                                                                      href="mergers-acquisitions-index.html" aria-label="Mergers &amp; Acquisitions (M&amp;A)"
                                                                      data-cmp-data-layer='{"linklistteaser-item15-2d83199549":{"xdm:linkURL":"/content/acom/us-en/services/mergers-acquisitions-index","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"services:mergers &amp; acquisitions (m&amp;a)","tooltip":"Mergers &amp; Acquisitions (M&amp;A)"}}'
                                                                      role="menuitem" data-cmp-clickable
                                                                      >Mergers &amp; Acquisitions
                                                                      (M&amp;A)
                                                                    </a>
                                                                  </li>

                                                                  <li role="none">
                                                                    <a
                                                                      href="metaverse-index.html" aria-label="Metaverse"
                                                                      data-cmp-data-layer='{"linklistteaser-item16-9728d4ef91":{"xdm:linkURL":"/content/acom/us-en/services/metaverse-index","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"services:metaverse","tooltip":"Metaverse"}}'
                                                                      role="menuitem" data-cmp-clickable
                                                                      >Metaverse
                                                                    </a>
                                                                  </li>

                                                                  <li role="none">
                                                                    <a
                                                                      href="future-organization.html" aria-label="Operating Models"
                                                                      data-cmp-data-layer='{"linklistteaser-item17-5f7ef61293":{"xdm:linkURL":"/content/acom/us-en/services/talent-organization/future-organization","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"services:operating models","tooltip":"Operating Models"}}'
                                                                      role="menuitem" data-cmp-clickable
                                                                      >Operating Models
                                                                    </a>
                                                                  </li>

                                                                  <li role="none">
                                                                    <a
                                                                      href="security-index.html" aria-label="Security"
                                                                      data-cmp-data-layer='{"linklistteaser-item18-f67ecc4d35":{"xdm:linkURL":"/content/acom/us-en/services/security-index","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"services:security","tooltip":"Security"}}'
                                                                      role="menuitem" data-cmp-clickable
                                                                      >Security
                                                                    </a>
                                                                  </li>

                                                                  <li role="none">
                                                                    <a
                                                                      href="supply-chain-management-and-operations-index.html" aria-label="Supply Chain Management"
                                                                      data-cmp-data-layer='{"linklistteaser-item19-ff9a66563c":{"xdm:linkURL":"/content/acom/us-en/services/supply-chain-management-and-operations-index","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"services:supply chain management","tooltip":"Supply Chain Management"}}'
                                                                      role="menuitem" data-cmp-clickable
                                                                      >Supply Chain Management
                                                                    </a>
                                                                  </li>

                                                                  <li role="none">
                                                                    <a
                                                                      href="sustainability-index.html" aria-label="Sustainability"
                                                                      data-cmp-data-layer='{"linklistteaser-item20-b4f7c1476a":{"xdm:linkURL":"/content/acom/us-en/services/sustainability-index","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"services:sustainability","tooltip":"Sustainability"}}'
                                                                      role="menuitem" data-cmp-clickable
                                                                      >Sustainability
                                                                    </a>
                                                                  </li>

                                                                  <li role="none">
                                                                    <a
                                                                      href="technology-consulting.html" aria-label="Technology ConsultingTechnology Consulting"
                                                                      data-cmp-data-layer='{"linklistteaser-item21-418295f4eb":{"xdm:linkURL":"/content/acom/us-en/services/consulting/technology-consulting","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"services:technology consulting","tooltip":"Technology Consulting"}}'
                                                                      role="menuitem" data-cmp-clickable
                                                                      >Technology Consulting
                                                                    </a>
                                                                  </li>

                                                                  <li role="none">
                                                                    <a
                                                                      href="technology-innovation-index.html" aria-label="Technology Innovation"
                                                                      data-cmp-data-layer='{"linklistteaser-item22-7ffaaaa2c6":{"xdm:linkURL":"/content/acom/us-en/services/technology-innovation-index","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"services:technology innovation","tooltip":"Technology Innovation"}}'
                                                                      role="menuitem" data-cmp-clickable
                                                                      >Technology Innovation
                                                                    </a>
                                                                  </li>

                                                                  <li role="none">
                                                                    <a
                                                                      href="zero-based-budgeting-index.html" aria-label="Zero-Based Transformation"
                                                                      data-cmp-data-layer='{"linklistteaser-item23-a62355303a":{"xdm:linkURL":"/content/acom/us-en/services/zero-based-budgeting-index","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"services:zero-based transformation","tooltip":"Zero-Based Transformation"}}'
                                                                      role="menuitem" data-cmp-clickable
                                                                      >Zero-Based Transformation
                                                                    </a>
                                                                  </li>
                                                                </ul>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </li>

                                <li
                                  className="cmp-global-header__nav-menu-item" id="globalheader-primarynavlinks-item2-db34eabe1e"
                                  data-cmp-data-layer='{"globalheader-primarynavlinks-item2-db34eabe1e":{"xdm:linkURL":"/us-en","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"Industries","analytics-module-name":"primary nav"}}'
                                >
                                  <button className="cmp-global-header__nav-menu-label-button" type="button" aria-expanded="false" aria-haspopup="true" aria-label="Industries">
                                    Industries
                                  </button>
                                  <div className="cmp-global-header__nav-menu-item-content">
                                    <div className="xfpage page basicpage">
                                      <div id="container-fce7b4a8fe" className="cmp-container">
                                        <div className="aem-Grid aem-Grid--12 aem-Grid--default--12">
                                          <div className="navcontainer container responsivegrid aem-GridColumn aem-GridColumn--default--12">
                                            <div className="cmp-global-header__drawer">
                                              <div className="cmp-global-header__drawer-content">
                                                <div className="cmp-global-header__drawer-one-column">
                                                  <div className="cmp-global-header__group-link-list">
                                                    <div className="responsivegrid">
                                                      <div className="aem-Grid aem-Grid--12 aem-Grid--default--12">
                                                        <div className="cmp-global-header__link-list aem-GridColumn aem-GridColumn--default--12">
                                                          <div id="linklistteaser-50c2633ea9" className="cmp-global-header__link-list"
                                                            data-cmp-data-layer='{"linklistteaser-50c2633ea9":{"@type":"cio-sites/components/blocks/b.001/globalheader/modules/linklistteaser","analytics-engagement":"true","analytics-module-name":"secondary nav","analytics-template-zone":"global header"}}'>
                                                            <div className="cmp-global-header__link-list__content">
                                                              <div>
                                                                <ul className="cmp-global-header__inner-link-list" role="menu" aria-label="Industries">
                                                                  <li role="none">
                                                                    <a
                                                                      href="aerospace-defense-index.html" aria-label="Utilities"
                                                                      data-cmp-data-layer='{"linklistteaser-item0-d468081cb3":{"xdm:linkURL":"/content/acom/us-en/industries/aerospace-defense-index","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"industries:aerospace and defense","tooltip":"Aerospace &amp; Defense"}}'
                                                                      role="menuitem" data-cmp-clickable
                                                                      >Aerospace and Defense
                                                                    </a>
                                                                  </li>

                                                                  <li role="none" >
                                                                    <a
                                                                      href="automotive-index.html" aria-label="Automotive"
                                                                      data-cmp-data-layer='{"linklistteaser-item1-0e0719f65c":{"xdm:linkURL":"/content/acom/us-en/industries/automotive-index","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"industries:automotive","tooltip":"Automotive"}}'
                                                                      role="menuitem" data-cmp-clickable
                                                                      >Automotive
                                                                    </a>
                                                                  </li>

                                                                  <li role="none">
                                                                    <a
                                                                      href="banking-index.html" aria-label=" Banking"
                                                                      data-cmp-data-layer='{"linklistteaser-item2-b02905f170":{"xdm:linkURL":"/content/acom/us-en/industries/banking-index","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"industries: banking","tooltip":" Banking"}}'
                                                                      role="menuitem" data-cmp-clickable
                                                                    > Banking
                                                                    </a>
                                                                  </li>

                                                                  <li role="none">
                                                                    <a
                                                                      href="capital-markets-index.html" aria-label=" Capital Markets"
                                                                      data-cmp-data-layer='{"linklistteaser-item3-cd55229f7c":{"xdm:linkURL":"/content/acom/us-en/industries/capital-markets-index","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"industries: capital markets","tooltip":" Capital Markets"}}'
                                                                      role="menuitem" data-cmp-clickable
                                                                    >
                                                                      Capital Markets
                                                                    </a>
                                                                  </li>

                                                                  <li role="none">
                                                                    <a
                                                                      href="chemicals-index.html" aria-label="Chemicals"
                                                                      data-cmp-data-layer='{"linklistteaser-item4-8c801cf62e":{"xdm:linkURL":"/content/acom/us-en/industries/chemicals-index","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"industries:chemicals","tooltip":"Chemicals"}}'
                                                                      role="menuitem" data-cmp-clickable
                                                                      >Chemicals
                                                                    </a>
                                                                  </li>

                                                                  <li role="none">
                                                                    <a
                                                                      href="communications-and-media-index.html" aria-label=" Communications and Media"
                                                                      data-cmp-data-layer='{"linklistteaser-item5-574e0523d1":{"xdm:linkURL":"/content/acom/us-en/industries/communications-and-media-index","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"industries: communications and media","tooltip":" Communications and Media"}}'
                                                                      role="menuitem" data-cmp-clickable
                                                                    >
                                                                      Communications and Media
                                                                    </a>
                                                                  </li>

                                                                  <li role="none">
                                                                    <a
                                                                      href="consumer-goods-and-services-index.html" aria-label=" Consumer Goods and Services"
                                                                      data-cmp-data-layer='{"linklistteaser-item6-b27f5ac1b4":{"xdm:linkURL":"/content/acom/us-en/industries/consumer-goods-and-services-index","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"industries: consumer goods and services","tooltip":" Consumer Goods and Services"}}'
                                                                      role="menuitem" data-cmp-clickable
                                                                    >
                                                                      Consumer Goods and Services
                                                                    </a>
                                                                  </li>

                                                                  <li role="none">
                                                                    <a
                                                                      href="energy-index.html" aria-label=" Energy"
                                                                      data-cmp-data-layer='{"linklistteaser-item7-083100b2dd":{"xdm:linkURL":"/content/acom/us-en/industries/energy-index","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"industries: energy","tooltip":" Energy"}}'
                                                                      role="menuitem" data-cmp-clickable
                                                                    >
                                                                      Energy
                                                                    </a>
                                                                  </li>

                                                                  <li role="none">
                                                                    <a
                                                                      href="health-index.html" aria-label="Health"
                                                                      data-cmp-data-layer='{"linklistteaser-item8-78ef10acfa":{"xdm:linkURL":"/content/acom/us-en/industries/health-index","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"industries:health","tooltip":"Health"}}'
                                                                      role="menuitem" data-cmp-clickable
                                                                      >Health
                                                                    </a>
                                                                  </li>

                                                                  <li role="none">
                                                                    <a
                                                                      href="high-tech-index.html" aria-label=" High Tech"
                                                                      data-cmp-data-layer='{"linklistteaser-item9-4fa15f0a6d":{"xdm:linkURL":"/content/acom/us-en/industries/high-tech-index","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"industries: high tech","tooltip":" High Tech"}}'
                                                                      role="menuitem" data-cmp-clickable
                                                                    >
                                                                      High Tech
                                                                    </a>
                                                                  </li>

                                                                  <li role="none">
                                                                    <a
                                                                      href="industrial-equipment-index.html" aria-label=" Industrial"
                                                                      data-cmp-data-layer='{"linklistteaser-item10-96402e2eaf":{"xdm:linkURL":"/content/acom/us-en/industries/industrial-equipment-index","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"industries: industrial","tooltip":" Industrial"}}'
                                                                      role="menuitem" data-cmp-clickable
                                                                    >
                                                                      Industrial
                                                                    </a>
                                                                  </li>

                                                                  <li role="none">
                                                                    <a
                                                                      href="insurance-index.html" aria-label=" Insurance"
                                                                      data-cmp-data-layer='{"linklistteaser-item11-c883ce119b":{"xdm:linkURL":"/content/acom/us-en/industries/insurance-index","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"industries: insurance","tooltip":" Insurance"}}'
                                                                      role="menuitem" data-cmp-clickable
                                                                    >
                                                                      Insurance
                                                                    </a>
                                                                  </li>

                                                                  <li role="none">
                                                                    <a
                                                                      href="life-sciences-index.html" aria-label="Life Sciences"
                                                                      data-cmp-data-layer='{"linklistteaser-item12-6c4c282475":{"xdm:linkURL":"/content/acom/us-en/industries/life-sciences-index","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"industries:life sciences","tooltip":"Life Sciences"}}'
                                                                      role="menuitem" data-cmp-clickable
                                                                      >Life Sciences
                                                                    </a>
                                                                  </li>

                                                                  <li role="none">
                                                                    <a
                                                                      href="natural-resources-index.html" aria-label="Natural Resources"
                                                                      data-cmp-data-layer='{"linklistteaser-item13-bcfa4c1917":{"xdm:linkURL":"/content/acom/us-en/industries/natural-resources-index","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"industries:natural resources","tooltip":"Natural Resources"}}'
                                                                      role="menuitem" data-cmp-clickable
                                                                      >Natural Resources
                                                                    </a>
                                                                  </li>

                                                                  <li role="none">
                                                                    <a
                                                                      href="public-service-index.html" aria-label=" Public Service"
                                                                      data-cmp-data-layer='{"linklistteaser-item14-167ae6356b":{"xdm:linkURL":"/content/acom/us-en/industries/public-service-index","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"industries: public service","tooltip":" Public Service"}}'
                                                                      role="menuitem" data-cmp-clickable
                                                                    > Public Service
                                                                    </a>
                                                                  </li>

                                                                  <li role="none">
                                                                    <a
                                                                      href="retail-index.html"
                                                                      aria-label=" Retail"
                                                                      data-cmp-data-layer='{"linklistteaser-item15-71c5d6d4cc":{"xdm:linkURL":"/content/acom/us-en/industries/retail-index","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"industries: retail","tooltip":" Retail"}}'
                                                                      role="menuitem"
                                                                      data-cmp-clickable
                                                                    > Retail
                                                                    </a>
                                                                  </li>

                                                                  <li role="none">
                                                                    <a
                                                                      href="software-and-platforms-index.html"
                                                                      aria-label="Software and Platforms"
                                                                      data-cmp-data-layer='{"linklistteaser-item16-0f8a6fa771":{"xdm:linkURL":"/content/acom/us-en/industries/software-and-platforms-index","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"industries:software and platforms","tooltip":"Software and Platforms"}}'
                                                                      role="menuitem"
                                                                      data-cmp-clickable
                                                                      >Software and Platforms
                                                                    </a>
                                                                  </li>

                                                                  <li role="none">
                                                                    <a
                                                                      href="travel-index.html"
                                                                      aria-label=" Travel"
                                                                      data-cmp-data-layer='{"linklistteaser-item17-154db2b31b":{"xdm:linkURL":"/content/acom/us-en/industries/travel-index","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"industries: travel","tooltip":" Travel"}}'
                                                                      role="menuitem"
                                                                      data-cmp-clickable
                                                                    >
                                                                      Travel
                                                                    </a>
                                                                  </li>

                                                                  <li role="none">
                                                                    <a
                                                                      href="afs-index.html"
                                                                      aria-label="US Federal Government"
                                                                      data-cmp-data-layer='{"linklistteaser-item18-588296021f":{"xdm:linkURL":"/content/acom/us-en/industries/afs-index","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"industries:us federal government","tooltip":"US Federal Government"}}'
                                                                      role="menuitem"
                                                                      data-cmp-clickable
                                                                      >US Federal Government
                                                                    </a>
                                                                  </li>

                                                                  <li role="none">
                                                                    <a
                                                                      href="utilities-index.html"
                                                                      aria-label="Utilities"
                                                                      data-cmp-data-layer='{"linklistteaser-item19-3f02af62d9":{"xdm:linkURL":"/content/acom/us-en/industries/utilities-index","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"industries:utilities","tooltip":"Utilities"}}'
                                                                      role="menuitem"
                                                                      data-cmp-clickable
                                                                      >Utilities
                                                                    </a>
                                                                  </li>
                                                                </ul>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </li>

                                <li
                                  className="cmp-global-header__nav-menu-item"
                                  id="globalheader-primarynavlinks-item3-519d750ac5"
                                  data-cmp-data-layer='{"globalheader-primarynavlinks-item3-519d750ac5":{"xdm:linkURL":"/us-en","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"Careers","analytics-module-name":"primary nav"}}'
                                >
                                  <button
                                    className="cmp-global-header__nav-menu-label-button" type="button"
                                    aria-expanded="false" aria-haspopup="true" aria-label="Careers"
                                  > Careers
                                  </button>
                                  <div className="cmp-global-header__nav-menu-item-content">
                                    <div className="xfpage page basicpage">
                                      <div id="container-3a5b3a6443" className="cmp-container">
                                        <div className="aem-Grid aem-Grid--12 aem-Grid--default--12">
                                          <div className="navcontainer container responsivegrid aem-GridColumn aem-GridColumn--default--12">
                                            <div className="cmp-global-header__drawer">
                                              <div className="cmp-global-header__drawer-content">
                                                <div className="cmp-global-header__drawer-one-column">
                                                  <div className="cmp-global-header__group-link-list">
                                                    <div className="responsivegrid">
                                                      <div className="aem-Grid aem-Grid--12 aem-Grid--default--12">
                                                        <div className="cmp-global-header__link-list cmp-global-header__link-list--with-arrows aem-GridColumn aem-GridColumn--default--12">
                                                          <div
                                                            id="linklistteaser-9bf27c97fe" className="cmp-global-header__link-list"
                                                            data-cmp-data-layer='{"linklistteaser-9bf27c97fe":{"@type":"cio-sites/components/blocks/b.001/globalheader/modules/linklistteaser","analytics-engagement":"true","analytics-module-name":"secondary nav","analytics-template-zone":"global header"}}'>
                                                            <div className="cmp-global-header__link-list__content">
                                                              <div>
                                                                <ul className="cmp-global-header__inner-link-list" role="menu" aria-label="Careers">
                                                                  <li role="none">
                                                                    <a
                                                                      href="careers.html" aria-label="Careers Home"
                                                                      data-cmp-data-layer='{"linklistteaser-item0-b8682ccf2c":{"xdm:linkURL":"/content/acom/us-en/careers","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"careers:careers home","tooltip":"Careers Home"}}'
                                                                      role="menuitem" data-cmp-clickable
                                                                      >Careers Home
                                                                    </a>
                                                                  </li>

                                                                  <li role="none">
                                                                    <a
                                                                      href="jobsearch.html"
                                                                      aria-label="Search Jobs" data-cmp-data-layer='{"linklistteaser-item1-0bbea7dba2":{"xdm:linkURL":"/content/acom/us-en/careers/jobsearch","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"careers:search jobs","tooltip":"Search Jobs"}}'
                                                                      role="menuitem" data-cmp-clickable
                                                                      >Search Jobs
                                                                    </a>
                                                                  </li>
                                                                </ul>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div className="cmp-global-header__link-list aem-GridColumn aem-GridColumn--default--12">
                                                          <div
                                                            id="linklistteaser-2dcdd7ef2e" className="cmp-global-header__title-link-list"
                                                            data-cmp-data-layer='{"linklistteaser-2dcdd7ef2e":{"@type":"cio-sites/components/blocks/b.001/globalheader/modules/linklistteaser","analytics-engagement":"true","analytics-module-name":"secondary nav","analytics-template-zone":"global header"}}'
                                                          >
                                                            <div className="cmp-global-header__title-link-list__menu">
                                                              <p className="cmp-global-header__title-link-list__menu-label">
                                                                JOIN US
                                                              </p>
                                                              <button className="cmp-global-header__title-link-list__menu-button" type="button">
                                                                JOIN US
                                                              </button>

                                                              <div className="cmp-global-header__title-link-list__content">
                                                                <button className="cmp-global-header__title-link-list__content-button" type="button">
                                                                  Careers
                                                                </button>
                                                                <ul className="cmp-global-header__inner-link-list" role="menu" aria-label="Careers">
                                                                  <li role="none">
                                                                    <a
                                                                      href="leadership-careers.html" aria-label="Search and Apply"
                                                                      data-cmp-data-layer='{"linklistteaser_417516962-item0-edc67ebfa0":{"xdm:linkURL":"/content/acom/us-en/careers/life-at-accenture/leadership-careers","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"careers:executive leaders","tooltip":"Executive Leaders"}}'
                                                                      role="menuitem" data-cmp-clickable
                                                                      >Executive Leaders
                                                                    </a>
                                                                  </li>
                                                                  <li role="none">
                                                                    <a
                                                                      href="experienced.html" aria-label="Experienced Professionals"
                                                                      data-cmp-data-layer='{"linklistteaser_417516962-item1-1d1911d086":{"xdm:linkURL":"/content/acom/us-en/careers/life-at-accenture/experienced","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"careers:experienced professionals","tooltip":"Experienced Professionals"}}'
                                                                      role="menuitem" data-cmp-clickable
                                                                      >Experienced Professionals
                                                                    </a>
                                                                  </li>

                                                                  <li role="none">
                                                                    <a
                                                                      href="entry-level.html" aria-label="Entry-level Jobs &amp; Internships"
                                                                      data-cmp-data-layer='{"linklistteaser_417516962-item2-612b07eab9":{"xdm:linkURL":"/content/acom/us-en/careers/life-at-accenture/entry-level","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"careers:entry-level jobs &amp; internships","tooltip":"Entry-level Jobs &amp; Internships"}}'
                                                                      role="menuitem" data-cmp-clickable
                                                                      >Entry-level Jobs &amp; Internships
                                                                    </a>
                                                                  </li>

                                                                  <li role="none" >
                                                                    <a
                                                                      href="military-veterans.html"
                                                                      data-cmp-data-layer='{"linklistteaser_417516962-item3-accfbc75a4":{"xdm:linkURL":"/content/acom/us-en/careers/local/military-veterans","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"careers:military and veterans","tooltip":"Military and Veterans"}}'
                                                                      role="menuitem" data-cmp-clickable
                                                                      >Military and Veterans
                                                                    </a>
                                                                  </li>

                                                                  <li role="none">
                                                                    <a
                                                                      href="training-counseling.html" aria-label="Training &amp; Development"
                                                                      data-cmp-data-layer='{"linklistteaser_417516962-item4-377bfdce2c":{"xdm:linkURL":"/content/acom/us-en/careers/life-at-accenture/training-counseling","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"careers:training &amp; development","tooltip":"Training &amp; Development"}}'
                                                                      role="menuitem" data-cmp-clickable
                                                                      >Training &amp; Development
                                                                    </a>
                                                                  </li>

                                                                  <li role="none">
                                                                    <a
                                                                      href="journey-to-accenture.html" aria-label="Work Environment"
                                                                      data-cmp-data-layer='{"linklistteaser_417516962-item5-e9ebe38407":{"xdm:linkURL":"/content/acom/us-en/careers/explore-careers/area-of-interest/journey-to-accenture","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"careers:recruiting process","tooltip":"Recruiting Process"}}'
                                                                      role="menuitem" data-cmp-clickable
                                                                      >Recruiting Process
                                                                    </a>
                                                                  </li>

                                                                  <li role="none">
                                                                    <a
                                                                      href="total-rewards.html"
                                                                      data-cmp-data-layer='{"linklistteaser_417516962-item6-fec4382ed4":{"xdm:linkURL":"/content/acom/us-en/careers/local/total-rewards","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"careers:rewards &amp; benefits","tooltip":"Rewards &amp; Benefits"}}'
                                                                      role="menuitem" data-cmp-clickable
                                                                      >Rewards &amp; Benefits
                                                                    </a>
                                                                  </li>
                                                                </ul>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div className="cmp-global-header__link-list cmp-global-header__link-list--full-width-li aem-GridColumn aem-GridColumn--default--12">
                                                          <div
                                                            id="linklistteaser-1ed0939758" className="cmp-global-header__title-link-list"
                                                            data-cmp-data-layer='{"linklistteaser-1ed0939758":{"@type":"cio-sites/components/blocks/b.001/globalheader/modules/linklistteaser","analytics-engagement":"true","analytics-module-name":"secondary nav","analytics-template-zone":"global header"}}'
                                                          >
                                                            <div className="cmp-global-header__title-link-list__menu">
                                                              <p className="cmp-global-header__title-link-list__menu-label">
                                                                EXPLORE JOBS
                                                              </p>
                                                              <button className="cmp-global-header__title-link-list__menu-button" type="button">
                                                                EXPLORE JOBS
                                                              </button>

                                                              <div className="cmp-global-header__title-link-list__content">
                                                                <button className="cmp-global-header__title-link-list__content-button" type="button">
                                                                  Careers
                                                                </button>
                                                                <ul className="cmp-global-header__inner-link-list" role="menu" aria-label="Careers">
                                                                  <li role="none">
                                                                    <a
                                                                      href="areas-expertise.html"
                                                                      aria-label="Search Jobs by Areas of Expertise"
                                                                      data-cmp-data-layer='{"linklistteaser_159490398-item0-c2c57152cb":{"xdm:linkURL":"/content/acom/us-en/careers/explore-careers/areas-of-interest/areas-expertise","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"careers:search jobs by areas of expertise","tooltip":"Search Jobs by Areas of Expertise"}}'
                                                                      role="menuitem" data-cmp-clickable
                                                                      >Search Jobs by Areas of Expertise
                                                                    </a>
                                                                  </li>

                                                                  <li role="none">
                                                                    <a
                                                                      href="consulting-careers.html" aria-label="Consulting Jobs"
                                                                      data-cmp-data-layer='{"linklistteaser_159490398-item1-06c80aa552":{"xdm:linkURL":"/content/acom/us-en/careers/explore-careers/area-of-interest/consulting-careers","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"careers:consulting jobs","tooltip":"Consulting Jobs"}}'
                                                                      role="menuitem" data-cmp-clickable
                                                                      >Consulting Jobs
                                                                    </a>
                                                                  </li>

                                                                  <li role="none">
                                                                    <a
                                                                      href="corporate-functions-careers.html" aria-label="Corporate Jobs"
                                                                      data-cmp-data-layer='{"linklistteaser_159490398-item2-dceb40a0f5":{"xdm:linkURL":"/content/acom/us-en/careers/explore-careers/area-of-interest/corporate-functions-careers","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"careers:corporate jobs","tooltip":"Corporate Jobs"}}'
                                                                      role="menuitem" data-cmp-clickable
                                                                      >Corporate Jobs
                                                                    </a>
                                                                  </li>

                                                                  <li role="none">
                                                                    <a
                                                                      href="interactive-careers.html" aria-label="Digital Jobs"
                                                                      data-cmp-data-layer='{"linklistteaser_159490398-item3-b6086af03a":{"xdm:linkURL":"/content/acom/us-en/careers/explore-careers/area-of-interest/interactive-careers","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"careers:digital jobs","tooltip":"Digital Jobs"}}'
                                                                      role="menuitem" data-cmp-clickable
                                                                      >Digital Jobs
                                                                    </a>
                                                                  </li>

                                                                  <li role="none">
                                                                    <a
                                                                      href="industryx-careers.html"
                                                                      aria-label="Digital Engineering and Manufacturing Jobs"
                                                                      data-cmp-data-layer='{"linklistteaser_159490398-item4-3f683bc333":{"xdm:linkURL":"/content/acom/us-en/careers/explore-careers/area-of-interest/industryx-careers","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"careers:digital engineering and manufacturing jobs","tooltip":"Digital Engineering and Manufacturing Jobs"}}'
                                                                      role="menuitem" data-cmp-clickable
                                                                      >Digital Engineering and Manufacturing Jobs
                                                                    </a>
                                                                  </li>

                                                                  <li role="none" >
                                                                    <a
                                                                      href="operations-careers.html"
                                                                      aria-label="Operations Jobs"
                                                                      data-cmp-data-layer='{"linklistteaser_159490398-item5-611efcbdf9":{"xdm:linkURL":"/content/acom/us-en/careers/explore-careers/area-of-interest/operations-careers","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"careers:operations jobs","tooltip":"Operations Jobs"}}'
                                                                      role="menuitem" data-cmp-clickable
                                                                      >Operations Jobs
                                                                    </a>
                                                                  </li>

                                                                  <li role="none">
                                                                    <a
                                                                      href="strategy-careers.html"
                                                                      aria-label="Strategy Jobs"
                                                                      data-cmp-data-layer='{"linklistteaser_159490398-item6-608ef1f2a3":{"xdm:linkURL":"/content/acom/us-en/careers/explore-careers/area-of-interest/strategy-careers","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"careers:strategy jobs","tooltip":"Strategy Jobs"}}'
                                                                      role="menuitem" data-cmp-clickable
                                                                      >Strategy Jobs
                                                                    </a>
                                                                  </li>

                                                                  <li role="none">
                                                                    <a
                                                                      href="metaverse-careers.html"
                                                                      aria-label="Metaverse Jobs"
                                                                      data-cmp-data-layer='{"linklistteaser_159490398-item7-3dec1b7d3e":{"xdm:linkURL":"/content/acom/us-en/careers/explore-careers/area-of-interest/metaverse-careers","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"careers:metaverse jobs","tooltip":"Metaverse Jobs"}}'
                                                                      role="menuitem" data-cmp-clickable
                                                                      >Metaverse Jobs
                                                                    </a>
                                                                  </li>

                                                                  <li role="none">
                                                                    <a
                                                                      href="technology-careers.html"
                                                                      aria-label="Technology Jobs"
                                                                      data-cmp-data-layer='{"linklistteaser_159490398-item8-1145baf19a":{"xdm:linkURL":"/content/acom/us-en/careers/explore-careers/area-of-interest/technology-careers","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"careers:technology jobs","tooltip":"Technology Jobs"}}'
                                                                      role="menuitem" data-cmp-clickable
                                                                      >Technology Jobs
                                                                    </a>
                                                                  </li>

                                                                  <li role="none">
                                                                    <a
                                                                      href="ai-and-analytics-careers.html"
                                                                      aria-label="AI Jobs"
                                                                      data-cmp-data-layer='{"linklistteaser_159490398-item9-588ff53e70":{"xdm:linkURL":"/content/acom/us-en/careers/explore-careers/area-of-interest/ai-and-analytics-careers","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"careers:ai jobs","tooltip":"AI Jobs"}}'
                                                                      role="menuitem" data-cmp-clickable
                                                                      >AI Jobs
                                                                    </a>
                                                                  </li>

                                                                  <li role="none">
                                                                    <a
                                                                      href="cloud-careers.html"
                                                                      aria-label="Cloud Jobs"
                                                                      data-cmp-data-layer='{"linklistteaser_159490398-item10-f8f099b5bf":{"xdm:linkURL":"/content/acom/us-en/careers/explore-careers/area-of-interest/cloud-careers","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"careers:cloud jobs","tooltip":"Cloud Jobs"}}'
                                                                      role="menuitem"
                                                                      data-cmp-clickable
                                                                      >Cloud Jobs
                                                                    </a>
                                                                  </li>

                                                                  <li role="none">
                                                                    <a
                                                                      href="cybersecurity-careers.html"
                                                                      aria-label="Cybersecurity Jobs"
                                                                      data-cmp-data-layer='{"linklistteaser_159490398-item11-8f26da3e03":{"xdm:linkURL":"/content/acom/us-en/careers/explore-careers/area-of-interest/cybersecurity-careers","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"careers:cybersecurity jobs","tooltip":"Cybersecurity Jobs"}}'
                                                                      role="menuitem"
                                                                      data-cmp-clickable
                                                                      >Cybersecurity Jobs
                                                                    </a>
                                                                  </li>

                                                                  <li role="none">
                                                                    <a
                                                                      href="federal-careers.html"
                                                                      aria-label="Federal Jobs"
                                                                      data-cmp-data-layer='{"linklistteaser_159490398-item12-c946264c57":{"xdm:linkURL":"/content/acom/us-en/careers/local/federal-careers","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"careers:federal jobs","tooltip":"Federal Jobs"}}'
                                                                      role="menuitem"
                                                                      data-cmp-clickable
                                                                      >Federal Jobs
                                                                    </a>
                                                                  </li>

                                                                  <li role="none">
                                                                    <a
                                                                      href="sap-careers.html" aria-label="SAP Jobs"
                                                                      data-cmp-data-layer='{"linklistteaser_159490398-item13-7bd7774f59":{"xdm:linkURL":"/content/acom/us-en/careers/explore-careers/area-of-interest/sap-careers","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"careers:sap jobs","tooltip":"SAP Jobs"}}'
                                                                      role="menuitem" data-cmp-clickable
                                                                      >SAP Jobs
                                                                    </a>
                                                                  </li>

                                                                  <li role="none">
                                                                    <a
                                                                      href="salesforce-careers.html"
                                                                      aria-label="Salesforce Jobs"
                                                                      data-cmp-data-layer='{"linklistteaser_159490398-item14-8356e02bc9":{"xdm:linkURL":"/content/acom/us-en/careers/explore-careers/area-of-interest/salesforce-careers","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"careers:salesforce jobs","tooltip":"Salesforce Jobs"}}'
                                                                      role="menuitem" data-cmp-clickable
                                                                      >Salesforce Jobs
                                                                    </a>
                                                                  </li>
                                                                </ul>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </li>

                                <li
                                  className="cmp-global-header__nav-menu-item"
                                  id="globalheader-primarynavlinks-item4-53ae6b4c47"
                                  data-cmp-data-layer='{"globalheader-primarynavlinks-item4-53ae6b4c47":{"xdm:linkURL":"/us-en","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"About","analytics-module-name":"primary nav"}}'
                                >
                                  <button
                                    className="cmp-global-header__nav-menu-label-button"
                                    type="button" aria-expanded="false" aria-haspopup="true" aria-label="About"
                                  >
                                    About
                                  </button>
                                  <div className="cmp-global-header__nav-menu-item-content">
                                    <div className="xfpage page basicpage">
                                      <div id="container-7b24db8b77" className="cmp-container" >
                                        <div className="aem-Grid aem-Grid--12 aem-Grid--default--12">
                                          <div className="navcontainer container responsivegrid aem-GridColumn aem-GridColumn--default--12">
                                            <div className="cmp-global-header__drawer">
                                              <div className="cmp-global-header__drawer-content">
                                                <div className="cmp-global-header__drawer-one-column">
                                                  <div className="cmp-global-header__group-link-list">
                                                    <div className="responsivegrid">
                                                      <div className="aem-Grid aem-Grid--12 aem-Grid--default--12">
                                                        <div className="cmp-global-header__link-list aem-GridColumn aem-GridColumn--default--12">
                                                          <div
                                                            id="linklistteaser-71906014ee" className="cmp-global-header__title-link-list"
                                                            data-cmp-data-layer='{"linklistteaser-71906014ee":{"@type":"cio-sites/components/blocks/b.001/globalheader/modules/linklistteaser","analytics-engagement":"true","analytics-module-name":"secondary nav","analytics-template-zone":"global header"}}'
                                                          >
                                                            <div className="cmp-global-header__title-link-list__menu">
                                                              <p className="cmp-global-header__title-link-list__menu-label">
                                                                WHO WE ARE
                                                              </p>
                                                              <button className="cmp-global-header__title-link-list__menu-button" type="button">
                                                                WHO WE ARE
                                                              </button>

                                                              <div className="cmp-global-header__title-link-list__content">
                                                                <button className="cmp-global-header__title-link-list__content-button" type="button">
                                                                  About Accenture
                                                                </button>
                                                                <ul className="cmp-global-header__inner-link-list" role="menu"aria-label="About Accenture">
                                                                  <li role="none">
                                                                    <a
                                                                      href="company-index.html" aria-label="About Accenture"
                                                                      data-cmp-data-layer='{"linklistteaser-item0-04e3d9ccbd":{"xdm:linkURL":"/content/acom/us-en/about/company-index","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"about accenture:about accenture","tooltip":"About Accenture"}}'
                                                                      role="menuitem" data-cmp-clickable
                                                                      >About Accenture
                                                                    </a>
                                                                  </li>

                                                                  <li role="none">
                                                                    <a
                                                                      href="leadership-index.html" aria-label="Leadership"
                                                                      data-cmp-data-layer='{"linklistteaser-item1-e19d944147":{"xdm:linkURL":"/content/acom/us-en/about/leadership/leadership-index","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"about accenture:leadership","tooltip":"Leadership"}}'
                                                                      role="menuitem" data-cmp-clickable
                                                                      >Leadership
                                                                    </a>
                                                                  </li>

                                                                  <li role="none">
                                                                    <a
                                                                      href="how-we-serve-index.html"
                                                                      aria-label="How We Work with Clients"
                                                                      data-cmp-data-layer='{"linklistteaser-item2-a839c586aa":{"xdm:linkURL":"/content/acom/us-en/about/company/how-we-serve-index","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"about accenture:how we work with clients","tooltip":"How We Work with Clients"}}'
                                                                      role="menuitem"
                                                                      data-cmp-clickable
                                                                      >How We Work with Clients
                                                                    </a>
                                                                  </li>

                                                                  <li role="none">
                                                                    <a
                                                                      href="all-stories.html" aria-label="Case Studies"
                                                                      data-cmp-data-layer='{"linklistteaser-item3-86a0c3ec46":{"xdm:linkURL":"/content/acom/us-en/about/company/all-stories","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"about accenture:case studies","tooltip":"Case Studies"}}'
                                                                      role="menuitem" data-cmp-clickable
                                                                      >Case Studies
                                                                    </a>
                                                                  </li>

                                                                  <li role="none">
                                                                    <a
                                                                      href="https://newsroom.accenture.com" aria-label="Newsroom"
                                                                      data-cmp-data-layer='{"linklistteaser-item4-7050f1c29d":{"xdm:linkURL":"https://newsroom.accenture.com","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"about accenture:newsroom","tooltip":"Newsroom"}}'
                                                                      role="menuitem" data-cmp-clickable
                                                                      >Newsroom
                                                                    </a>
                                                                  </li>

                                                                  <li role="none">
                                                                    <a
                                                                      href="https://investor.accenture.com/"
                                                                      aria-label="Investor Relations"
                                                                      data-cmp-data-layer='{"linklistteaser-item5-4129f44256":{"xdm:linkURL":"https://investor.accenture.com/","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"about accenture:investor relations","tooltip":"Investor Relations"}}'
                                                                      role="menuitem" data-cmp-clickable
                                                                      >Investor Relations
                                                                    </a>
                                                                  </li>

                                                                  <li role="none">
                                                                    <a
                                                                      href="inclusion-diversity-index.html" aria-label="Inclusion &amp; Diversity"
                                                                      data-cmp-data-layer='{"linklistteaser-item6-5b4d1087f4":{"xdm:linkURL":"/content/acom/us-en/about/inclusion-diversity-index","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"about accenture:inclusion &amp; diversity","tooltip":"Inclusion &amp; Diversity"}}'
                                                                      role="menuitem" data-cmp-clickable
                                                                      >Inclusion &amp; Diversity
                                                                    </a>
                                                                  </li>

                                                                  <li role="none">
                                                                    <a
                                                                      href="sustainability-value-promise.html" aria-label="Responsible Business"
                                                                      data-cmp-data-layer='{"linklistteaser-item7-bf2f4c9d36":{"xdm:linkURL":"/content/acom/us-en/about/sustainability/sustainability-value-promise","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"about accenture:sustainability","tooltip":"Sustainability"}}'
                                                                      role="menuitem" data-cmp-clickable
                                                                      >Sustainability
                                                                    </a>
                                                                  </li>
                                                                </ul>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div className="cmp-global-header__link-list aem-GridColumn aem-GridColumn--default--12">
                                                          <div
                                                            id="linklistteaser-ae8fdd7278" className="cmp-global-header__title-link-list"
                                                            data-cmp-data-layer='{"linklistteaser-ae8fdd7278":{"@type":"cio-sites/components/blocks/b.001/globalheader/modules/linklistteaser","analytics-engagement":"true","analytics-module-name":"secondary nav","analytics-template-zone":"global header"}}'
                                                          >
                                                            <div className="cmp-global-header__title-link-list__menu">
                                                              <p className="cmp-global-header__title-link-list__menu-label">
                                                                HOW WE'RE ORGANIZED
                                                              </p>
                                                              <button className="cmp-global-header__title-link-list__menu-button" type="button">
                                                                HOW WE'RE ORGANIZED
                                                              </button>

                                                              <div className="cmp-global-header__title-link-list__content">
                                                                <button className="cmp-global-header__title-link-list__content-button" type="button">
                                                                  About Accenture
                                                                </button>
                                                                <ul className="cmp-global-header__inner-link-list" role="menu" aria-label="About Accenture">
                                                                  <li role="none">
                                                                    <a
                                                                      href="consulting-index.html" aria-label="Strategy &amp; Consulting"
                                                                      data-cmp-data-layer='{"linklistteaser_1748804336-item0-5f8c59aca6":{"xdm:linkURL":"/content/acom/us-en/about/consulting-index","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"about accenture:strategy &amp; consulting","tooltip":"Strategy &amp; Consulting"}}'
                                                                      role="menuitem" data-cmp-clickable
                                                                      >Strategy &amp; Consulting
                                                                    </a>
                                                                  </li>

                                                                  <li role="none">
                                                                    <a
                                                                      href="accenture-song-index.html"
                                                                      aria-label="Song"
                                                                      data-cmp-data-layer='{"linklistteaser_1748804336-item1-b084beaaf6":{"xdm:linkURL":"/content/acom/us-en/about/accenture-song-index","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"about accenture:song","tooltip":"Song"}}'
                                                                      role="menuitem"
                                                                      data-cmp-clickable
                                                                      >Song
                                                                    </a>
                                                                  </li>

                                                                  <li
                                                                    role="none"
                                                                  >
                                                                    <a
                                                                      href="technology-index.html"
                                                                      aria-label="Technology"
                                                                      data-cmp-data-layer='{"linklistteaser_1748804336-item2-46ab75b355":{"xdm:linkURL":"/content/acom/us-en/about/technology-index","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"about accenture:technology","tooltip":"Technology"}}'
                                                                      role="menuitem"
                                                                      data-cmp-clickable
                                                                      >Technology
                                                                    </a>
                                                                  </li>

                                                                  <li
                                                                    role="none"
                                                                  >
                                                                    <a
                                                                      href="operations-index.html"
                                                                      aria-label="Operations"
                                                                      data-cmp-data-layer='{"linklistteaser_1748804336-item3-66f7a4a89a":{"xdm:linkURL":"/content/acom/us-en/about/operations-index","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"about accenture:operations","tooltip":"Operations"}}'
                                                                      role="menuitem"
                                                                      data-cmp-clickable
                                                                      >Operations
                                                                    </a>
                                                                  </li>

                                                                  <li
                                                                    role="none"
                                                                  >
                                                                    <a
                                                                      href="industry-x-index.html"
                                                                      aria-label="Industry X"
                                                                      data-cmp-data-layer='{"linklistteaser_1748804336-item4-94dc8f5582":{"xdm:linkURL":"/content/acom/us-en/about/industry-x-index","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"about accenture:industry x","tooltip":"Industry X"}}'
                                                                      role="menuitem"
                                                                      data-cmp-clickable
                                                                      >Industry
                                                                      X
                                                                    </a>
                                                                  </li>
                                                                </ul>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div
                                                          className="cmp-global-header__link-list aem-GridColumn aem-GridColumn--default--12"
                                                        >
                                                          <div
                                                            id="linklistteaser-67b8616e1b"
                                                            className="cmp-global-header__title-link-list"
                                                            data-cmp-data-layer='{"linklistteaser-67b8616e1b":{"@type":"cio-sites/components/blocks/b.001/globalheader/modules/linklistteaser","analytics-engagement":"true","analytics-module-name":"secondary nav","analytics-template-zone":"global header"}}'
                                                          >
                                                            <div
                                                              className="cmp-global-header__title-link-list__menu"
                                                            >
                                                              <p
                                                                className="cmp-global-header__title-link-list__menu-label"
                                                              >
                                                                IN THE U.S.
                                                              </p>
                                                              <button
                                                                className="cmp-global-header__title-link-list__menu-button"
                                                                type="button"
                                                              >
                                                                IN THE U.S.
                                                              </button>

                                                              <div
                                                                className="cmp-global-header__title-link-list__content"
                                                              >
                                                                <button
                                                                  className="cmp-global-header__title-link-list__content-button"
                                                                  type="button"
                                                                >
                                                                  About
                                                                  Accenture
                                                                </button>
                                                                <ul
                                                                  className="cmp-global-header__inner-link-list"
                                                                  role="menu"
                                                                  aria-label="About Accenture"
                                                                >
                                                                  <li
                                                                    role="none"
                                                                  >
                                                                    <a
                                                                      href="united-states.html"
                                                                      aria-label="About Accenture In India"
                                                                      data-cmp-data-layer='{"linklistteaser_537779873-item0-f04dd95c84":{"xdm:linkURL":"/content/acom/us-en/about/company/united-states","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"about accenture:about accenture in the u.s.","tooltip":"About Accenture In the U.S."}}'
                                                                      role="menuitem"
                                                                      data-cmp-clickable
                                                                      >About
                                                                      Accenture
                                                                      In the
                                                                      U.S.
                                                                    </a>
                                                                  </li>

                                                                  <li
                                                                    role="none"
                                                                  >
                                                                    <a
                                                                      href="us-workforce.html"
                                                                      aria-label="Inclusion &amp; Diversity in the U.S."
                                                                      data-cmp-data-layer='{"linklistteaser_537779873-item1-dbd540816f":{"xdm:linkURL":"/content/acom/us-en/about/inclusion-diversity/us-workforce","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"about accenture:inclusion &amp; diversity in the u.s.","tooltip":"Inclusion &amp; Diversity in the U.S."}}'
                                                                      role="menuitem"
                                                                      data-cmp-clickable
                                                                      >Inclusion
                                                                      &amp;
                                                                      Diversity
                                                                      in the
                                                                      U.S.
                                                                    </a>
                                                                  </li>
                                                                </ul>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div
                                                          className="cmp-global-header__link-list aem-GridColumn aem-GridColumn--default--12"
                                                        ></div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                 {/* End One Container  */}
                                              </div>
                                            </div>
                                             {/* end:   */}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                              <div className="cmp-global-header__menu-footer">
                                <ul className="cmp-global-header__utility-links">
                                  <li
                                    data-cmp-data-layer='{"globalheader-megamenufooterlinks-item0-5834a45b0f":{"xdm:linkURL":"/us-en/about/contact-us","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"Contact Us","analytics-module-name":"top nav"}}'
                                  >
                                    <a
                                      href="contact-us.html"
                                      aria-label="Contact Us"
                                      data-cmp-clickable
                                      >Contact Us</a
                                    >
                                  </li>

                                  <li
                                    data-cmp-data-layer='{"globalheader-megamenufooterlinks-item1-7bb8dde92d":{"xdm:linkURL":"/us-en/careers","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"Careers","analytics-module-name":"top nav"}}'
                                  >
                                    <a
                                      href="careers.html"
                                      aria-label="Careers"
                                      data-cmp-clickable
                                      >Careers</a
                                    >
                                  </li>

                                  <li
                                    data-cmp-data-layer='{"globalheader-megamenufooterlinks-item2-4b4c462324":{"xdm:linkURL":"/us-en/about/location-index","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"Locations","analytics-module-name":"top nav"}}'
                                  >
                                    <a
                                      href="location-index.html"
                                      aria-label="Locations"
                                      data-cmp-clickable
                                      >Locations</a
                                    >
                                  </li>
                                </ul>
                                <div
                                  className="cmp-global-header__action-container"
                                ></div>

                                <ul className="cmp-global-header__social-icons">
                                  <li
                                    data-cmp-data-layer='{"globalheader-megamenusociallinks-item0-1d3e2b0252":{"xdm:linkURL":"https://www.linkedin.com/company/accenture","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"linkedin","analytics-module-name":"top nav"}}'
                                  >
                                    <a
                                      href="https://www.linkedin.com/company/accenture"
                                      rel="noopener"
                                      title="linkedin"
                                      className="cmp-global-header__icon--linkedin"
                                      aria-label="linkedin"
                                      data-cmp-clickable
                                    >
                                    </a>
                                  </li>

                                  <li
                                    data-cmp-data-layer='{"globalheader-megamenusociallinks-item1-a7085fddab":{"xdm:linkURL":"https://twitter.com/Accenture_US","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"twitter","analytics-module-name":"top nav"}}'
                                  >
                                    <a
                                      href="https://twitter.com/Accenture_US"
                                      rel="noopener"
                                      title="twitter"
                                      className="cmp-global-header__icon--twitter"
                                      aria-label="twitter"
                                      data-cmp-clickable
                                    >
                                    </a>
                                  </li>

                                  <li
                                    data-cmp-data-layer='{"globalheader-megamenusociallinks-item2-49fe792e7d":{"xdm:linkURL":"https://www.facebook.com/accenture","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"facebook","analytics-module-name":"top nav"}}'
                                  >
                                    <a
                                      href="https://www.facebook.com/accenture"
                                      rel="noopener"
                                      title="facebook"
                                      className="cmp-global-header__icon--facebook"
                                      aria-label="facebook"
                                      data-cmp-clickable
                                    >
                                    </a>
                                  </li>

                                  <li
                                    data-cmp-data-layer='{"globalheader-megamenusociallinks-item3-b8d6cfcf70":{"xdm:linkURL":"https://www.instagram.com/accenture/","analytics-engagement":"false","analytics-link-type":"nav/paginate","analytics-link-name":"instagram","analytics-module-name":"top nav"}}'
                                  >
                                    <a
                                      href="https://www.instagram.com/accenture/"
                                      rel="noopener"
                                      title="instagram"
                                      className="cmp-global-header__icon--instagram"
                                      aria-label="instagram"
                                      data-cmp-clickable
                                    >
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="cmp-global-header__utility-nav">
                            <div
                              className="cmp-global-header__search"
                              data-cmp-data-layer='{"globalheader-searchLink-ff8d05c6c8":{"xdm:linkURL":"/us-en/search/results","analytics-engagement":"false","analytics-link-type":"search activity","analytics-link-name":"initiated search - click/tap","analytics-module-name":"top nav"}}'
                            >
                              {/* <a
                                href="results.html"
                                aria-label="search-aria"
                                data-cmp-clickable=""
                              ></a> */}
                            </div>

                            <div
                              className="cmp-global-header__action-container"
                            ></div>

                            <div className="cmp-global-header__language-container">
                              <button
                                className="cmp-global-header__language-selector"
                                aria-expanded="false"
                                aria-haspopup="listbox"
                                aria-describedby="cmp-global-header__current-country"
                                aria-label="Country and language selector"
                              >
                                <span className="current-country-text">USA</span>
                                <span className="icon-down-caret"></span>
                              </button>

                              <p id="cmp-global-header__current-country">
                                Current Country: United States
                              </p>

                              <div className="cmp-global-header__language-options">
                                <span className="arrow-up"></span>
                                <div className="input-group"></div>
                                <div className="country-list">
                                  <ul
                                    className="cmp-global-header__language-menu"
                                    role="menu"
                                    aria-labelledby="cmp-global-header__current-country"
                                  >
                                    <li className="default">Default (English)</li>
                                    <li className="dropdown-header ucase">
                                      All COUNTRIES &amp; LANGUAGES
                                    </li>
                                    <li
                                      role="none"
                                      data-cmp-data-layer='{"globalheader-sitelinks-item1-235de0112d":{"xdm:linkURL":"/ar-es","analytics-engagement":"false","analytics-link-type":"language","analytics-link-name":"Argentina (Spanish)","analytics-module-name":"top nav"}}'
                                    >
                                      <a
                                        href="ar-es.html"
                                        role="menuitem"
                                        aria-label="Argentina (Spanish)"
                                        data-cmp-clickable
                                        >Argentina (Spanish)</a
                                      >
                                    </li>
                                    <li
                                      role="none"
                                      data-cmp-data-layer='{"globalheader-sitelinks-item2-235de0112d":{"xdm:linkURL":"/au-en","analytics-engagement":"false","analytics-link-type":"language","analytics-link-name":"Australia (English)","analytics-module-name":"top nav"}}'
                                    >
                                      <a
                                        href="au-en.html"
                                        role="menuitem"
                                        aria-label="Australia (English)"
                                        data-cmp-clickable
                                        >Australia (English)</a
                                      >
                                    </li>
                                    <li
                                      role="none"
                                      data-cmp-data-layer='{"globalheader-sitelinks-item3-235de0112d":{"xdm:linkURL":"/at-de","analytics-engagement":"false","analytics-link-type":"language","analytics-link-name":"Austria (German)","analytics-module-name":"top nav"}}'
                                    >
                                      <a
                                        href="at-de.html"
                                        role="menuitem"
                                        aria-label="Austria (German)"
                                        data-cmp-clickable
                                        >Austria (German)</a
                                      >
                                    </li>
                                    <li
                                      role="none"
                                      data-cmp-data-layer='{"globalheader-sitelinks-item4-235de0112d":{"xdm:linkURL":"/be-en","analytics-engagement":"false","analytics-link-type":"language","analytics-link-name":"Belgium (English)","analytics-module-name":"top nav"}}'
                                    >
                                      <a
                                        href="be-en.html"
                                        role="menuitem"
                                        aria-label="Belgium (English)"
                                        data-cmp-clickable
                                        >Belgium (English)</a
                                      >
                                    </li>
                                    <li
                                      role="none"
                                      data-cmp-data-layer='{"globalheader-sitelinks-item5-235de0112d":{"xdm:linkURL":"/br-pt","analytics-engagement":"false","analytics-link-type":"language","analytics-link-name":"Brazil (Portuguese)","analytics-module-name":"top nav"}}'
                                    >
                                      <a
                                        href="br-pt.html"
                                        role="menuitem"
                                        aria-label="Brazil (Portuguese)"
                                        data-cmp-clickable
                                        >Brazil (Portuguese)</a
                                      >
                                    </li>
                                    <li
                                      role="none"
                                      data-cmp-data-layer='{"globalheader-sitelinks-item6-235de0112d":{"xdm:linkURL":"/bg-en","analytics-engagement":"false","analytics-link-type":"language","analytics-link-name":"Bulgaria (English)","analytics-module-name":"top nav"}}'
                                    >
                                      <a
                                        href="bg-en.html"
                                        role="menuitem"
                                        aria-label="Bulgaria (English)"
                                        data-cmp-clickable
                                        >Bulgaria (English)</a
                                      >
                                    </li>
                                    <li
                                      role="none"
                                      data-cmp-data-layer='{"globalheader-sitelinks-item7-235de0112d":{"xdm:linkURL":"/ca-fr","analytics-engagement":"false","analytics-link-type":"language","analytics-link-name":"Canada (French)","analytics-module-name":"top nav"}}'
                                    >
                                      <a
                                        href="ca-fr.html"
                                        role="menuitem"
                                        aria-label="Canada (French)"
                                        data-cmp-clickable
                                        >Canada (French)</a
                                      >
                                    </li>
                                    <li
                                      role="none"
                                      data-cmp-data-layer='{"globalheader-sitelinks-item8-235de0112d":{"xdm:linkURL":"/ca-en","analytics-engagement":"false","analytics-link-type":"language","analytics-link-name":"Canada (English)","analytics-module-name":"top nav"}}'
                                    >
                                      <a
                                        href="ca-en.html"
                                        role="menuitem"
                                        aria-label="Canada (English)"
                                        data-cmp-clickable
                                        >Canada (English)</a
                                      >
                                    </li>
                                    <li
                                      role="none"
                                      data-cmp-data-layer='{"globalheader-sitelinks-item9-235de0112d":{"xdm:linkURL":"/cl-es","analytics-engagement":"false","analytics-link-type":"language","analytics-link-name":"Chile (Spanish)","analytics-module-name":"top nav"}}'
                                    >
                                      <a
                                        href="cl-es.html"
                                        role="menuitem"
                                        aria-label="Chile (Spanish)"
                                        data-cmp-clickable
                                        >Chile (Spanish)</a
                                      >
                                    </li>
                                    <li
                                      role="none"
                                      data-cmp-data-layer='{"globalheader-sitelinks-item10-235de0112d":{"xdm:linkURL":"/hk-en","analytics-engagement":"false","analytics-link-type":"language","analytics-link-name":"China/Hong Kong SAR (English)","analytics-module-name":"top nav"}}'
                                    >
                                      <a
                                        href="hk-en.html"
                                        role="menuitem"
                                        aria-label="China/Hong Kong SAR (English)"
                                        data-cmp-clickable
                                        >China/Hong Kong SAR (English)</a
                                      >
                                    </li>
                                    <li
                                      role="none"
                                      data-cmp-data-layer='{"globalheader-sitelinks-item11-235de0112d":{"xdm:linkURL":"https://www.accenture.cn/cn-zh","analytics-engagement":"false","analytics-link-type":"language","analytics-link-name":"China/Mainland (Chinese)","analytics-module-name":"top nav"}}'
                                    >
                                      <a
                                        href="https://www.accenture.cn/cn-zh"
                                        role="menuitem"
                                        aria-label="China/Mainland (Chinese)"
                                        data-cmp-clickable
                                        >China/Mainland (Chinese)</a
                                      >
                                    </li>
                                    <li
                                      role="none"
                                      data-cmp-data-layer='{"globalheader-sitelinks-item12-235de0112d":{"xdm:linkURL":"/cn-en","analytics-engagement":"false","analytics-link-type":"language","analytics-link-name":"China/Mainland (English)","analytics-module-name":"top nav"}}'
                                    >
                                      <a
                                        href="cn-en.html"
                                        role="menuitem"
                                        aria-label="China/Mainland (English)"
                                        data-cmp-clickable
                                        >China/Mainland (English)</a
                                      >
                                    </li>
                                    <li
                                      role="none"
                                      data-cmp-data-layer='{"globalheader-sitelinks-item13-235de0112d":{"xdm:linkURL":"/co-es","analytics-engagement":"false","analytics-link-type":"language","analytics-link-name":"Colombia (Spanish)","analytics-module-name":"top nav"}}'
                                    >
                                      <a
                                        href="co-es.html"
                                        role="menuitem"
                                        aria-label="Colombia (Spanish)"
                                        data-cmp-clickable
                                        >Colombia (Spanish)</a
                                      >
                                    </li>
                                    <li
                                      role="none"
                                      data-cmp-data-layer='{"globalheader-sitelinks-item14-235de0112d":{"xdm:linkURL":"/cr-en","analytics-engagement":"false","analytics-link-type":"language","analytics-link-name":"Costa Rica (English)","analytics-module-name":"top nav"}}'
                                    >
                                      <a
                                        href="cr-en.html"
                                        role="menuitem"
                                        aria-label="Costa Rica (English)"
                                        data-cmp-clickable
                                        >Costa Rica (English)</a
                                      >
                                    </li>
                                    <li
                                      role="none"
                                      data-cmp-data-layer='{"globalheader-sitelinks-item15-235de0112d":{"xdm:linkURL":"/cz-en","analytics-engagement":"false","analytics-link-type":"language","analytics-link-name":"Czech Republic (English)","analytics-module-name":"top nav"}}'
                                    >
                                      <a
                                        href="cz-en.html"
                                        role="menuitem"
                                        aria-label="Czech Republic (English)"
                                        data-cmp-clickable
                                        >Czech Republic (English)</a
                                      >
                                    </li>
                                    <li
                                      role="none"
                                      data-cmp-data-layer='{"globalheader-sitelinks-item16-235de0112d":{"xdm:linkURL":"/dk-en","analytics-engagement":"false","analytics-link-type":"language","analytics-link-name":"Denmark (English)","analytics-module-name":"top nav"}}'
                                    >
                                      <a
                                        href="dk-en.html"
                                        role="menuitem"
                                        aria-label="Denmark (English)"
                                        data-cmp-clickable
                                        >Denmark (English)</a
                                      >
                                    </li>
                                    <li
                                      role="none"
                                      data-cmp-data-layer='{"globalheader-sitelinks-item18-235de0112d":{"xdm:linkURL":"/fi-en","analytics-engagement":"false","analytics-link-type":"language","analytics-link-name":"Finland (English)","analytics-module-name":"top nav"}}'
                                    >
                                      <a
                                        href="fi-en.html"
                                        role="menuitem"
                                        aria-label="Finland (English)"
                                        data-cmp-clickable
                                        >Finland (English)</a
                                      >
                                    </li>
                                    <li
                                      role="none"
                                      data-cmp-data-layer='{"globalheader-sitelinks-item19-235de0112d":{"xdm:linkURL":"/fr-fr","analytics-engagement":"false","analytics-link-type":"language","analytics-link-name":"France (French)","analytics-module-name":"top nav"}}'
                                    >
                                      <a
                                        href="fr-fr.html"
                                        role="menuitem"
                                        aria-label="France (French)"
                                        data-cmp-clickable
                                        >France (French)</a
                                      >
                                    </li>
                                    <li
                                      role="none"
                                      data-cmp-data-layer='{"globalheader-sitelinks-item20-235de0112d":{"xdm:linkURL":"/de-de","analytics-engagement":"false","analytics-link-type":"language","analytics-link-name":"Germany (German)","analytics-module-name":"top nav"}}'
                                    >
                                      <a
                                        href="de-de.html"
                                        role="menuitem"
                                        aria-label="Germany (German)"
                                        data-cmp-clickable
                                        >Germany (German)</a
                                      >
                                    </li>
                                    <li
                                      role="none"
                                      data-cmp-data-layer='{"globalheader-sitelinks-item21-235de0112d":{"xdm:linkURL":"/gr-en","analytics-engagement":"false","analytics-link-type":"language","analytics-link-name":"Greece (English)","analytics-module-name":"top nav"}}'
                                    >
                                      <a
                                        href="gr-en.html"
                                        role="menuitem"
                                        aria-label="Greece (English)"
                                        data-cmp-clickable
                                        >Greece (English)</a
                                      >
                                    </li>
                                    <li
                                      role="none"
                                      data-cmp-data-layer='{"globalheader-sitelinks-item22-235de0112d":{"xdm:linkURL":"/hu-en","analytics-engagement":"false","analytics-link-type":"language","analytics-link-name":"Hungary (English)","analytics-module-name":"top nav"}}'
                                    >
                                      <a
                                        href="hu-en.html"
                                        role="menuitem"
                                        aria-label="Hungary (English)"
                                        data-cmp-clickable
                                        >Hungary (English)</a
                                      >
                                    </li>
                                    <li
                                      role="none"
                                      data-cmp-data-layer='{"globalheader-sitelinks-item23-235de0112d":{"xdm:linkURL":"/in-en","analytics-engagement":"false","analytics-link-type":"language","analytics-link-name":"India (English)","analytics-module-name":"top nav"}}'
                                    >
                                      <a
                                        href="in-en.html"
                                        role="menuitem"
                                        aria-label="India (English)"
                                        data-cmp-clickable
                                        >India (English)</a
                                      >
                                    </li>
                                    <li
                                      role="none"
                                      data-cmp-data-layer='{"globalheader-sitelinks-item24-235de0112d":{"xdm:linkURL":"/id-en","analytics-engagement":"false","analytics-link-type":"language","analytics-link-name":"Indonesia (English)","analytics-module-name":"top nav"}}'
                                    >
                                      <a
                                        href="id-en.html"
                                        role="menuitem"
                                        aria-label="Indonesia (English)"
                                        data-cmp-clickable
                                        >Indonesia (English)</a
                                      >
                                    </li>
                                    <li
                                      role="none"
                                      data-cmp-data-layer='{"globalheader-sitelinks-item25-235de0112d":{"xdm:linkURL":"/ie-en","analytics-engagement":"false","analytics-link-type":"language","analytics-link-name":"Ireland (English)","analytics-module-name":"top nav"}}'
                                    >
                                      <a
                                        href="ie-en.html"
                                        role="menuitem"
                                        aria-label="Ireland (English)"
                                        data-cmp-clickable
                                        >Ireland (English)</a
                                      >
                                    </li>
                                    <li
                                      role="none"
                                      data-cmp-data-layer='{"globalheader-sitelinks-item26-235de0112d":{"xdm:linkURL":"/il-en","analytics-engagement":"false","analytics-link-type":"language","analytics-link-name":"Israel (English)","analytics-module-name":"top nav"}}'
                                    >
                                      <a
                                        href="il-en.html"
                                        role="menuitem"
                                        aria-label="Israel (English)"
                                        data-cmp-clickable
                                        >Israel (English)</a
                                      >
                                    </li>
                                    <li
                                      role="none"
                                      data-cmp-data-layer='{"globalheader-sitelinks-item27-235de0112d":{"xdm:linkURL":"/it-it","analytics-engagement":"false","analytics-link-type":"language","analytics-link-name":"Italy (Italian)","analytics-module-name":"top nav"}}'
                                    >
                                      <a
                                        href="it-it.html"
                                        role="menuitem"
                                        aria-label="Italy (Italian)"
                                        data-cmp-clickable
                                        >Italy (Italian)</a
                                      >
                                    </li>
                                    <li
                                      role="none"
                                      data-cmp-data-layer='{"globalheader-sitelinks-item28-235de0112d":{"xdm:linkURL":"/jp-ja","analytics-engagement":"false","analytics-link-type":"language","analytics-link-name":"Japan (Japanese)","analytics-module-name":"top nav"}}'
                                    >
                                      <a
                                        href="jp-ja.html"
                                        role="menuitem"
                                        aria-label="Japan (Japanese)"
                                        data-cmp-clickable
                                        >Japan (Japanese)</a
                                      >
                                    </li>
                                    <li
                                      role="none"
                                      data-cmp-data-layer='{"globalheader-sitelinks-item30-235de0112d":{"xdm:linkURL":"/lv-en","analytics-engagement":"false","analytics-link-type":"language","analytics-link-name":"Latvia (English)","analytics-module-name":"top nav"}}'
                                    >
                                      <a
                                        href="lv-en.html"
                                        role="menuitem"
                                        aria-label="Latvia (English)"
                                        data-cmp-clickable
                                        >Latvia (English)</a
                                      >
                                    </li>
                                    <li
                                      role="none"
                                      data-cmp-data-layer='{"globalheader-sitelinks-item32-235de0112d":{"xdm:linkURL":"/lu-en","analytics-engagement":"false","analytics-link-type":"language","analytics-link-name":"Luxembourg (English)","analytics-module-name":"top nav"}}'
                                    >
                                      <a
                                        href="lu-en.html"
                                        role="menuitem"
                                        aria-label="Luxembourg (English)"
                                        data-cmp-clickable
                                        >Luxembourg (English)</a
                                      >
                                    </li>
                                    <li
                                      role="none"
                                      data-cmp-data-layer='{"globalheader-sitelinks-item33-235de0112d":{"xdm:linkURL":"/my-en","analytics-engagement":"false","analytics-link-type":"language","analytics-link-name":"Malaysia (English)","analytics-module-name":"top nav"}}'
                                    >
                                      <a
                                        href="my-en.html"
                                        role="menuitem"
                                        aria-label="Malaysia (English)"
                                        data-cmp-clickable
                                        >Malaysia (English)</a
                                      >
                                    </li>
                                    <li
                                      role="none"
                                      data-cmp-data-layer='{"globalheader-sitelinks-item34-235de0112d":{"xdm:linkURL":"/mu-en","analytics-engagement":"false","analytics-link-type":"language","analytics-link-name":"Mauritius (English)","analytics-module-name":"top nav"}}'
                                    >
                                      <a
                                        href="mu-en.html"
                                        role="menuitem"
                                        aria-label="Mauritius (English)"
                                        data-cmp-clickable
                                        >Mauritius (English)</a
                                      >
                                    </li>
                                    <li
                                      role="none"
                                      data-cmp-data-layer='{"globalheader-sitelinks-item35-235de0112d":{"xdm:linkURL":"/mx-es","analytics-engagement":"false","analytics-link-type":"language","analytics-link-name":"Mexico (Spanish)","analytics-module-name":"top nav"}}'
                                    >
                                      <a
                                        href="mx-es.html"
                                        role="menuitem"
                                        aria-label="Mexico (Spanish)"
                                        data-cmp-clickable
                                        >Mexico (Spanish)</a
                                      >
                                    </li>
                                    <li
                                      role="none"
                                      data-cmp-data-layer='{"globalheader-sitelinks-item36-235de0112d":{"xdm:linkURL":"/ma-en","analytics-engagement":"false","analytics-link-type":"language","analytics-link-name":"Morocco (English)","analytics-module-name":"top nav"}}'
                                    >
                                      <a
                                        href="ma-en.html"
                                        role="menuitem"
                                        aria-label="Morocco (English)"
                                        data-cmp-clickable
                                        >Morocco (English)</a
                                      >
                                    </li>
                                    <li
                                      role="none"
                                      data-cmp-data-layer='{"globalheader-sitelinks-item38-235de0112d":{"xdm:linkURL":"/nl-en","analytics-engagement":"false","analytics-link-type":"language","analytics-link-name":"Netherlands (English)","analytics-module-name":"top nav"}}'
                                    >
                                      <a
                                        href="nl-en.html"
                                        role="menuitem"
                                        aria-label="Netherlands (English)"
                                        data-cmp-clickable
                                        >Netherlands (English)</a
                                      >
                                    </li>
                                    <li
                                      role="none"
                                      data-cmp-data-layer='{"globalheader-sitelinks-item39-235de0112d":{"xdm:linkURL":"/nz-en","analytics-engagement":"false","analytics-link-type":"language","analytics-link-name":"New Zealand (English)","analytics-module-name":"top nav"}}'
                                    >
                                      <a
                                        href="nz-en.html"
                                        role="menuitem"
                                        aria-label="New Zealand (English)"
                                        data-cmp-clickable
                                        >New Zealand (English)</a
                                      >
                                    </li>
                                    <li
                                      role="none"
                                      data-cmp-data-layer='{"globalheader-sitelinks-item40-235de0112d":{"xdm:linkURL":"/no-en","analytics-engagement":"false","analytics-link-type":"language","analytics-link-name":"Norway (English)","analytics-module-name":"top nav"}}'
                                    >
                                      <a
                                        href="no-en.html"
                                        role="menuitem"
                                        aria-label="Norway (English)"
                                        data-cmp-clickable
                                        >Norway (English)</a
                                      >
                                    </li>
                                    <li
                                      role="none"
                                      data-cmp-data-layer='{"globalheader-sitelinks-item41-235de0112d":{"xdm:linkURL":"/ph-en","analytics-engagement":"false","analytics-link-type":"language","analytics-link-name":"Philippines (English)","analytics-module-name":"top nav"}}'
                                    >
                                      <a
                                        href="ph-en.html"
                                        role="menuitem"
                                        aria-label="Philippines (English)"
                                        data-cmp-clickable
                                        >Philippines (English)</a
                                      >
                                    </li>
                                    <li
                                      role="none"
                                      data-cmp-data-layer='{"globalheader-sitelinks-item42-235de0112d":{"xdm:linkURL":"/pl-pl","analytics-engagement":"false","analytics-link-type":"language","analytics-link-name":"Poland (Polish)","analytics-module-name":"top nav"}}'
                                    >
                                      <a
                                        href="pl-pl.html"
                                        role="menuitem"
                                        aria-label="Poland (Polish)"
                                        data-cmp-clickable
                                        >Poland (Polish)</a
                                      >
                                    </li>
                                    <li
                                      role="none"
                                      data-cmp-data-layer='{"globalheader-sitelinks-item44-235de0112d":{"xdm:linkURL":"/pt-pt","analytics-engagement":"false","analytics-link-type":"language","analytics-link-name":"Portugal (Portuguese)","analytics-module-name":"top nav"}}'
                                    >
                                      <a
                                        href="pt-pt.html"
                                        role="menuitem"
                                        aria-label="Portugal (Portuguese)"
                                        data-cmp-clickable
                                        >Portugal (Portuguese)</a
                                      >
                                    </li>
                                    <li
                                      role="none"
                                      data-cmp-data-layer='{"globalheader-sitelinks-item46-235de0112d":{"xdm:linkURL":"/ro-en","analytics-engagement":"false","analytics-link-type":"language","analytics-link-name":"Romania (English)","analytics-module-name":"top nav"}}'
                                    >
                                      <a
                                        href="ro-en.html"
                                        role="menuitem"
                                        aria-label="Romania (English)"
                                        data-cmp-clickable
                                        >Romania (English)</a
                                      >
                                    </li>
                                    <li
                                      role="none"
                                      data-cmp-data-layer='{"globalheader-sitelinks-item47-235de0112d":{"xdm:linkURL":"/sa-en","analytics-engagement":"false","analytics-link-type":"language","analytics-link-name":"Saudi Arabia (English)","analytics-module-name":"top nav"}}'
                                    >
                                      <a
                                        href="sa-en.html"
                                        role="menuitem"
                                        aria-label="Saudi Arabia (English)"
                                        data-cmp-clickable
                                        >Saudi Arabia (English)</a
                                      >
                                    </li>
                                    <li
                                      role="none"
                                      data-cmp-data-layer='{"globalheader-sitelinks-item49-235de0112d":{"xdm:linkURL":"/sg-en","analytics-engagement":"false","analytics-link-type":"language","analytics-link-name":"Singapore (English)","analytics-module-name":"top nav"}}'
                                    >
                                      <a
                                        href="sg-en.html"
                                        role="menuitem"
                                        aria-label="Singapore (English)"
                                        data-cmp-clickable
                                        >Singapore (English)</a
                                      >
                                    </li>
                                    <li
                                      role="none"
                                      data-cmp-data-layer='{"globalheader-sitelinks-item51-235de0112d":{"xdm:linkURL":"/sk-en","analytics-engagement":"false","analytics-link-type":"language","analytics-link-name":"Slovakia (English)","analytics-module-name":"top nav"}}'
                                    >
                                      <a
                                        href="sk-en.html"
                                        role="menuitem"
                                        aria-label="Slovakia (English)"
                                        data-cmp-clickable
                                        >Slovakia (English)</a
                                      >
                                    </li>
                                    <li
                                      role="none"
                                      data-cmp-data-layer='{"globalheader-sitelinks-item52-235de0112d":{"xdm:linkURL":"/za-en","analytics-engagement":"false","analytics-link-type":"language","analytics-link-name":"South Africa (English)","analytics-module-name":"top nav"}}'
                                    >
                                      <a
                                        href="za-en.html"
                                        role="menuitem"
                                        aria-label="South Africa (English)"
                                        data-cmp-clickable
                                        >South Africa (English)</a
                                      >
                                    </li>
                                    <li
                                      role="none"
                                      data-cmp-data-layer='{"globalheader-sitelinks-item53-235de0112d":{"xdm:linkURL":"/es-es","analytics-engagement":"false","analytics-link-type":"language","analytics-link-name":"Spain (Spanish)","analytics-module-name":"top nav"}}'
                                    >
                                      <a
                                        href="es-es.html"
                                        role="menuitem"
                                        aria-label="Spain (Spanish)"
                                        data-cmp-clickable
                                        >Spain (Spanish)</a
                                      >
                                    </li>
                                    <li
                                      role="none"
                                      data-cmp-data-layer='{"globalheader-sitelinks-item55-235de0112d":{"xdm:linkURL":"/se-en","analytics-engagement":"false","analytics-link-type":"language","analytics-link-name":"Sweden (English)","analytics-module-name":"top nav"}}'
                                    >
                                      <a
                                        href="se-en.html"
                                        role="menuitem"
                                        aria-label="Sweden (English)"
                                        data-cmp-clickable
                                        >Sweden (English)</a
                                      >
                                    </li>
                                    <li
                                      role="none"
                                      data-cmp-data-layer='{"globalheader-sitelinks-item56-235de0112d":{"xdm:linkURL":"/ch-en","analytics-engagement":"false","analytics-link-type":"language","analytics-link-name":"Switzerland (English)","analytics-module-name":"top nav"}}'
                                    >
                                      <a
                                        href="ch-en.html"
                                        role="menuitem"
                                        aria-label="Switzerland (English)"
                                        data-cmp-clickable
                                        >Switzerland (English)</a
                                      >
                                    </li>
                                    <li
                                      role="none"
                                      data-cmp-data-layer='{"globalheader-sitelinks-item58-235de0112d":{"xdm:linkURL":"/th-en","analytics-engagement":"false","analytics-link-type":"language","analytics-link-name":"Thailand (English)","analytics-module-name":"top nav"}}'
                                    >
                                      <a
                                        href="th-en.html"
                                        role="menuitem"
                                        aria-label="Thailand (English)"
                                        data-cmp-clickable
                                        >Thailand (English)</a
                                      >
                                    </li>
                                    <li
                                      role="none"
                                      data-cmp-data-layer='{"globalheader-sitelinks-item60-235de0112d":{"xdm:linkURL":"/ae-en","analytics-engagement":"false","analytics-link-type":"language","analytics-link-name":"UAE (English)","analytics-module-name":"top nav"}}'
                                    >
                                      <a
                                        href="ae-en.html"
                                        role="menuitem"
                                        aria-label="UAE (English)"
                                        data-cmp-clickable
                                        >UAE (English)</a
                                      >
                                    </li>
                                    <li
                                      role="none"
                                      data-cmp-data-layer='{"globalheader-sitelinks-item61-235de0112d":{"xdm:linkURL":"/gb-en","analytics-engagement":"false","analytics-link-type":"language","analytics-link-name":"United Kingdom (English)","analytics-module-name":"top nav"}}'
                                    >
                                      <a
                                        href="gb-en.html"
                                        role="menuitem"
                                        aria-label="United Kingdom (English)"
                                        data-cmp-clickable
                                        >United Kingdom (English)</a
                                      >
                                    </li>
                                    <li role="none" data-cmp-data-layer='{"globalheader-sitelinks-item62-235de0112d":{"xdm:linkURL":"/us-en","analytics-engagement":"false","analytics-link-type":"language","analytics-link-name":"USA (English)","analytics-module-name":"top nav"}}'>
                                      <a
                                        href="us-en.html"
                                        role="menuitem"
                                        aria-label="USA (English)"
                                        data-cmp-clickable
                                        >USA (English)</a
                                      >
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </nav>
                      <div className="cmp-global-header__menu-overlay"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Navbar;
