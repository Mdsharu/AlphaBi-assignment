import React from 'react';
import { useEffect } from 'react';

const Cards = (props) => {

    const { Category, title, content, image } = props;

    const [values, setValues] = useEffect("");

  return (
    <>
        <div className="rad-card" data-cta-title="Expand" data-card-title="V360 Awards: Celebrating innovation with clients"
            data-cta-link="/content/acom/us-en/case-studies/about/v360-awards.html" data-content-type="caseStudy" data-analytics-asset-id="card-d8ba28edef" data-cs-override-id="card-d8ba28edef">
            <div className="rad-card-inner__min-height">
            <div className="rad-card-inner">
                <div className="rad-card__top-content">
                <button className="rad-card__close-btn" aria-label="Close">
                    <div className="rad-icon rad-icon__close" aria-hidden="true"></div>
                </button>
                <p className="rad-card__pretitle"> {Category} </p>
                <div className="rad-card__top-content-inner-row">
                    <h3 className="rad-card__title">
                        {title}
                    </h3>
                    <div className="rad-card__description">
                        <p>
                            {content}
                        </p>
                    </div>
                </div>
                </div>
                <div className="rad-card-feature rad-card-feature--image-only">
                <div className="rad-card-feature__cover-img">
                    <div className="image radimage">
                    <div
                        data-cmp-is="image" data-cmp-lazy data-cmp-lazythreshold="0"
                        data-cmp-src="https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Case-Study-V360-Awards-glance-image%3A16x9-hd?ts=1692154524485&amp;fit=constrain&amp;dpr=off"
                        data-cmp-dmimage data-cmp-smartcroprendition="16x9-hd"
                        data-asset="/content/dam/accenture/final/accenture-com/imagery-2/Accenture-Case-Study-V360-Awards-glance-image.png"
                        data-asset-id="ab8a0534-122e-4c91-bf00-6f0d319a2858" id="radimage-a6c1a94739"
                        data-cmp-data-layer='{"radimage-a6c1a94739":{"@type":"cio-sites/components/rad/radimage","analytics-engagement":"true","analytics-link-type":"engagement","analytics-link-name":"Accenture-Case-Study-V360-Awards-glance-image.png","analytics-module-name":"radimage-1"}}'
                        className="cmp-image" itemscope itemtype="http://schema.org/ImageObject"
                    >
                        <noscript data-cmp-hook-image="noscript">
                            <img src= {image} className="cmp-image__image" itemprop="contentUrl" data-cmp-hook-image="image" alt=""/>
                        </noscript>
                    </div>
                    </div>
                </div>
                </div>
                <div className="rad-card__cta">
                <a href="v360-awards.html" target="_self" aria-label="Expand: V360 Awards: Celebrating innovation with clients "
                    className="rad-button rad-button--ghost" data-barba-transition>
                    <div className="rad-button__text">Expand</div>
                    <div className="rad-button__icon-right rad-icon rad-icon__chevron-right rad-icon--compact" aria-hidden="true"></div>
                </a>
                </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default Cards;
