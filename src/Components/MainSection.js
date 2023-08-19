import React from 'react';
import Cards from './Cards';
import img1 from '../images/V360.webp';
import img2 from '../images/Acc-Img.webp';
import img3 from '../images/Acc_Img_2.webp';
import img4 from '../images/accenture-Accenture-Img_3.png';
import img5 from '../images/accenture-ImgGrid.png';
import img6 from '../images/accenture-Img_5.png';
import img7 from '../images/accenture-Img_6.png';
import img8 from '../images/accenture-Img_7.png';
import img9 from '../images/accenture-Img_8.png';
import img10 from '../images/accenture-Img_9.png';
import img11 from '../images/accenture-Card.png';
import img12 from '../images/accenture-card-portrait.png';
import img13 from '../images/accenture-grid.png';
import img14 from '../images/accenture-demoImg.png';


const MainSection = () => {
  return (
    <main className="container responsivegrid">
            <div id="main" data-barba="container" data-barba-namespace="container-be4b5e8654"
              data-pagedata='{"pageData":{"pageTagging":{"careers":{"careerLevel":"","skill2":"","pageCategory":"","skill1":""},"blogs":{"blogName":"","blogTopic":""},"theme":"","growthPriority":"n/a","contentFormat":"image (static)","contentType":"n/a","primaryBuyerFunction":"","entityL1":"","entityL2":"","entityL3":"","entityL4":"","industry":""},"authorInfo":{"author":""},"target":{"blockDynamicContent":false},"pageProperties":{"contentDate":"","siteId":"acn","templateName":"atp:rad homepage","publishDate":"2023-08-16T05:36:45.098Z","guid":"f7476441e7495011983c21cc81416858","countryLanguage":"us-en","siteBranch":"core","subFolder":"","tertiaryFolder":"","pageName":"acn:page:homepage"},"analytics-module-name":"radicalaccenturedesign-4","@type":"cio-sites/components/page-components/radicalaccenturedesign"}}'
              data-pageid="page-f3f3debf6f" className="cmp-container">

              <div className="frontpagehero">
                <div className="rad-frontpage-hero" id="redesign-home-front-page"
                  data-cmp-data-layer='{"redesign-home-front-page":{"@type":"cio-sites/components/rad/modules/frontpagehero","analytics-module-name":"frontpagehero-1"}}'
                  data-autoplay-start-frame="1" data-autoplay-end-frame="64" data-hover-start-frame="65" data-hover-end-frame="120"
                  data-animation-for-mobile="/content/dam/accenture/final/images/lottie/Accenture_BuildUp_Mobil_Hover_009_Linear.json"
                  data-animation-for-tablet="/content/dam/accenture/final/images/lottie/Accenture_BuildUp_Tablet_Hover_009_Linear.json"
                  data-animation-for-desktop="/content/dam/accenture/final/images/lottie/Accenture_BuildUp_Desktop_Hover_010_Linear.json"
                >REINVENT WHAT YOUR   
                BUSINESS COULD BE 
                  <div className="rad-frontpage-hero__lottie-wrapper" style= {{ fontSize : 40 , fontWeight: 380, paddingTop: 50 }}></div>
                </div>
              </div>
              <div className="tilegrid">
                <div className="rad-tile-grid" id="redesign-tile">
                  <div className="rad-tile-grid__cards-container" data-template-zone="block-tilegrid">

                    <Cards 
                        Category="CASE STUDY" 
                        title="V360 Awards: Celebrating innovation with clients" 
                        content="Our global V360 Awards showcase how we embrace
                        change to deliver on the promise of technology
                        and human ingenuity. See the winners." 
                        image= {img1}
                    />

                    <Cards 
                        Category="Research Report" 
                        title="Strategy at the pace of technology" 
                        content="Technology is increasing the complexity and
                        speed of business strategy. Separating noise
                        from relevance is hard. A cohort of leaders
                        are outperforming their peers by using tech to
                        both inform and execute on their strategy." 
                        image= {img2}
                    />

                    <Cards 
                        Category="CASE STUDY" 
                        title="MQDC: Bringing wellbeing to the metaverse" 
                        content="With a virtual universe that connects an
                        online land of creativity to physical
                        properties&mdash;real estate developer MQDC is
                        bringing the real and digital worlds
                        together&mdash;and rewarding positive actions
                        for real-world impact." 
                        image= {img3}
                    />

                    <Cards 
                        Category="Blog" 
                        title="How to build a unified travel experience" 
                        content="A patchwork of technology solutions have led
                        to a fragmented traveler journey and mean that
                        travel companies are missing out on
                        opportunities. How can travel companies
                        increase their value of and for the Traveler?" 
                        image= {img4}
                    />

                    <Cards 
                        Category="Perspective" 
                        title="Shopping without shopping" 
                        content="Imagine a world where shopping is so
                        convenient that people don&rsquo;t have to do
                        it themselves&mdash;or even think about it.
                        This profound shift in commerce challenges how
                        customers are defined and what it takes to
                        serve them." 
                        image= {img5}
                    />

                    <Cards 
                        Category="Case Study" 
                        title="DaVita: Boosting confidence on the clinic floor" 
                        content="Helping kidney-care company DaVita create
                        digital-twin training in the metaverse, where
                        staff learn dialysis machines virtually before
                        working with real patients." 
                        image= {img6}
                    />

                    <Cards 
                        Category="Research Report" 
                        title="Accelerating Sustainability Transformation" 
                        content=" Accenture explores how responsible leaders can
                        profitably embed sustainability without
                        completely tearing up the traditional business
                        case." 
                        image= {img7}
                    />

                    <Cards 
                        Category="Perspective" 
                        title="AI for everyone" 
                        content="With innovations like ChatGPT dominating
                        headlines, the world is waking up to the
                        transformative potential of generative AI.
                        Find out how AI working side-by-side with
                        people will impact science, business and
                        society itself." 
                        image= {img8}
                    />
                    
                    <Cards 
                        Category="Research Report" 
                        title="State of Cybersecurity Resilience 2023" 
                        content="Cyber transformers are excelling at both
                        business resilience and business
                        outcomes&mdash;with high-performing
                        cybersecurity propelling their digital
                        transformations forward." 
                        image= {img9}
                    />

                    <Cards 
                        Category="Research Report" 
                        title="More than hype&mdash;here's how to embrace the metaverse today" 
                        content="The metaverse is already revolutionizing how
                        we work and play, opening new doors for value
                        generation across industries. Here's how
                        businesses can pair technology with creativity
                        to tap into its (almost) limitless potential." 
                        image= {img10}
                    />

                    <Cards 
                        Category="Perspective" 
                        title="The five key forces of change" 
                        content="The pace of disruption today can open an
                        exciting period of positive change for
                        businesses. But to navigate this complex and
                        dynamic environment, leaders will need to
                        harness the Five Key Forces of Change." 
                        image= {img11}
                    />

                    <Cards 
                        Category="Research Report" 
                        title="Total Enterprise Reinvention: Setting a new
                        performance frontier" 
                        content=" A handful of organizations are embracing a
                        deliberate strategy of continuous reinvention.
                        The results? Improved financials and more
                        innovation, resilience and value for all
                        stakeholders." 
                        image= {img12}
                    />

                    <Cards 
                        Category="Research Report" 
                        title="The next billion consumers" 
                        content="Meet 1 billion digital-first consumers in 8
                        growing countries. Our research describes who
                        they are, how they&rsquo;re different, and
                        what to do to win their hearts,
                        minds&mdash;and wallets." 
                        image= {img13}
                    />

                    <Cards 
                        Category="Case Study" 
                        title="Insurance claims in the cloud" 
                        content="AXA, one of Europe&rsquo;s largest insurers,
                        now offers customers accurate claims
                        processing in seconds, not days&mdash;and has
                        the insights it needs to make smarter business
                        decisions." 
                        image= {img14}
                    />

                    <Cards 
                        Category="Research Report" 
                        title="Reinventing Enterprise Operations" 
                        content="See how operations reinventors are rising to
                        the challenges of disruption, capturing new
                        paths for growth, and setting new performance
                        frontiers." 
                        image= {img8}
                    />

                    <Cards 
                        Category="Research Report" 
                        title="The CHRO as a growth executive" 
                        content="A new type of CHRO is leading their C-suite
                        peers in connecting data, technology and
                        people and cultivating collaboration. These
                        &ldquo;High-Res&rdquo; CHROs bring growth and
                        exceptional experiences into higher
                        resolution.&nbsp;" 
                        image= {img13}
                    />

                  </div>

                  <div className="rad-tile-grid__slider-container">
                    <input
                      className="rad__range-input-slider-for-carousel rad-tile-grid__slider" max="500" min="0"
                      name="carousel slider" value="1" type="range"
                    />
                  </div>
                </div>
              </div>
              <div className="rad-360-value-title rad-spacing-vertical-md">

                <div
                  className="rad-360-value-title__header" aria-label="360 Value"
                  data-cmp-data-layer='{"valuetitle-621c3211a4":{"@type":"cio-sites/components/rad/valuetitle","analytics-module-name":"valuetitle-1","analytics-template-zone":"block-360-value-in-action"}}'
                  id="valuetitle-621c3211a4"
                >
                  <div className="rad-360-value-title__header-first-line">
                    <div className="rad-360-value-title__header-360-wrapper">
                      <svg
                        className="rad-360-value-title__header-360" viewbox="0 0 225 89" fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M34.7005 88.32C23.7405 88.32 15.4605 85.76 9.86047 80.64C4.34047 75.44 1.38047 68.48 0.980469 59.76H18.5005C18.9005 63.92 20.2605 67.36 22.5805 70.08C24.9805 72.72 28.7805 74.04 33.9805 74.04C38.8605 74.04 42.4605 72.96 44.7805 70.8C47.1005 68.56 48.2605 65.52 48.2605 61.68C48.2605 57.52 47.1005 54.44 44.7805 52.44C42.5405 50.36 39.1005 49.32 34.4605 49.32H27.7405V36.36H33.9805C38.5405 36.36 41.8605 35.4 43.9405 33.48C46.0205 31.48 47.0605 28.64 47.0605 24.96C47.0605 21.92 46.0605 19.4 44.0605 17.4C42.1405 15.32 39.1805 14.28 35.1805 14.28C31.1005 14.28 27.8205 15.44 25.3405 17.76C22.9405 20 21.5005 23.16 21.0205 27.24H3.86047C4.10047 23.32 4.94047 19.72 6.38047 16.44C7.90047 13.08 10.0205 10.16 12.7405 7.68C15.3805 5.28 18.6205 3.4 22.4605 2.04C26.3005 0.680001 30.6605 0 35.5405 0C40.2605 0 44.4605 0.599999 48.1405 1.8C51.8205 2.92 54.9405 4.52 57.5005 6.6C60.0605 8.68 62.0205 11.16 63.3805 14.04C64.7405 16.84 65.4205 19.92 65.4205 23.28C65.4205 28.08 64.1405 32 61.5805 35.04C59.0205 38.08 55.5805 40.36 51.2605 41.88C56.3005 43 60.3405 45.28 63.3805 48.72C66.4205 52.08 67.9405 56.52 67.9405 62.04C67.9405 70.12 65.0205 76.52 59.1805 81.24C53.3405 85.96 45.1805 88.32 34.7005 88.32Z"
                          fill="currentcolor"
                        ></path>
                        <path
                          d="M110.716 88.32C104.236 88.32 98.7558 87.28 94.2758 85.2C89.7958 83.12 86.1558 80.24 83.3558 76.56C80.5558 72.96 78.5158 68.68 77.2358 63.72C76.0358 58.68 75.4358 53.24 75.4358 47.4V45.24C75.4358 37.96 76.3558 31.52 78.1958 25.92C80.0358 20.32 82.5958 15.6 85.8758 11.76C89.1558 7.92 93.0358 5 97.5158 3C101.996 0.999999 106.876 0 112.156 0C120.716 0 127.556 2 132.676 6C137.876 9.92 140.956 15.84 141.916 23.76H123.916C123.276 20.96 122.116 18.76 120.436 17.16C118.836 15.48 116.156 14.64 112.396 14.64C107.036 14.64 102.796 16.92 99.6758 21.48C96.5558 26.04 94.8758 32.76 94.6358 41.64C96.6358 38.44 99.2758 35.88 102.556 33.96C105.916 31.96 110.196 30.96 115.396 30.96C119.476 30.96 123.236 31.6 126.676 32.88C130.116 34.16 133.116 36 135.676 38.4C138.156 40.8 140.116 43.72 141.556 47.16C142.996 50.6 143.716 54.48 143.716 58.8C143.716 63.2 142.956 67.24 141.436 70.92C139.916 74.52 137.756 77.6 134.956 80.16C132.076 82.72 128.596 84.72 124.516 86.16C120.436 87.6 115.836 88.32 110.716 88.32ZM110.476 74.28C114.796 74.28 118.236 72.88 120.796 70.08C123.356 67.28 124.636 63.6 124.636 59.04C124.636 54.48 123.356 50.8 120.796 48C118.316 45.2 114.876 43.8 110.476 43.8C108.316 43.8 106.316 44.16 104.476 44.88C102.716 45.6 101.196 46.6 99.9158 47.88C98.6358 49.24 97.6358 50.8 96.9158 52.56C96.1958 54.32 95.8358 56.28 95.8358 58.44C95.8358 63.4 97.1958 67.28 99.9158 70.08C102.636 72.88 106.156 74.28 110.476 74.28Z"
                          fill="currentcolor"
                        ></path>
                        <path
                          d="M187.772 73.08C193.852 73.08 198.292 70.8 201.092 66.24C203.972 61.68 205.412 54.88 205.412 45.84V42C205.412 33.28 203.932 26.6 200.972 21.96C198.012 17.32 193.532 15 187.532 15C181.532 15 177.012 17.28 173.972 21.84C170.932 26.32 169.412 33.04 169.412 42V46.08C169.412 55.12 170.972 61.88 174.092 66.36C177.212 70.84 181.772 73.08 187.772 73.08ZM187.292 88.32C181.612 88.32 176.452 87.36 171.812 85.44C167.252 83.52 163.372 80.72 160.172 77.04C156.892 73.44 154.372 69.04 152.612 63.84C150.852 58.64 149.972 52.76 149.972 46.2V42.12C149.972 35.56 150.892 29.68 152.732 24.48C154.572 19.2 157.132 14.76 160.412 11.16C163.692 7.56 167.612 4.8 172.172 2.88C176.812 0.96 181.892 0 187.412 0C192.932 0 197.972 0.92 202.532 2.76C207.092 4.6 211.052 7.28 214.412 10.8C217.692 14.4 220.212 18.8 221.972 24C223.812 29.2 224.732 35.12 224.732 41.76V45.72C224.732 52.28 223.852 58.2 222.092 63.48C220.412 68.76 217.972 73.24 214.772 76.92C211.492 80.6 207.532 83.44 202.892 85.44C198.252 87.36 193.052 88.32 187.292 88.32Z"
                          fill="currentcolor"
                        ></path>
                      </svg>
                    </div>
                    <div className="rad-360-value-title__header-circle-placeholder">
                      <svg
                        className="rad-360-value-title__header-circle"
                        viewbox="0 0 400 400" fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          className="rad-360-value-title__header-circle-path"
                          cx="200" cy="200" r="167" stroke="currentcolor"
                          stroke-width="66" stroke-dasharray="1050" stroke-dashoffset="0"
                        ></circle>
                      </svg>
                    </div>
                  </div>
                  <div className="rad-360-value-title__header-second-line">
                    <div className="rad-360-value-title__header-value-wrapper">
                      <svg
                        className="rad-360-value-title__header-value" viewbox="0 0 367 88" fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.0292969 0.599854H20.5493L40.9493 66.4799L61.3493 0.599854H79.5893L51.0293 86.3999H28.7093L0.0292969 0.599854Z"
                          fill="currentcolor"
                        ></path>
                        <path
                          d="M100.193 0.599854H125.513L153.353 86.3999H133.073L127.193 67.3199H96.1127L90.2328 86.3999H71.9927L100.193 0.599854ZM100.313 53.5199H122.993L111.713 16.4399L100.313 53.5199Z"
                          fill="currentcolor"
                        ></path>
                        <path
                          d="M161.803 0.599854H181.243V71.1599H216.163V86.3999H161.803V0.599854Z"
                          fill="currentcolor"
                        ></path>
                        <path
                          d="M258.011 87.7199C246.651 87.7199 237.891 84.7999 231.731 78.9599C225.651 73.0399 222.611 64.3599 222.611 52.9199V0.599854H242.171V51.7199C242.171 58.9199 243.331 64.1599 245.651 67.4399C248.051 70.6399 252.211 72.2399 258.131 72.2399C263.891 72.2399 268.091 70.6799 270.731 67.5599C273.371 64.3599 274.691 58.8399 274.691 50.9999V0.599854H294.251V52.1999C294.251 63.9599 291.131 72.8399 284.891 78.8399C278.651 84.7599 269.691 87.7199 258.011 87.7199Z"
                          fill="currentcolor"
                        ></path>
                        <path
                          d="M308.649 0.599854H364.569V15.7199H327.969V35.7599H357.249V49.9199H327.969V71.2799H366.489V86.3999H308.649V0.599854Z"
                          fill="currentcolor"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <h3 className="rad-360-value-title__sub-header">
                  Every day, we embrace change and create value for all our
                  stakeholders, in every part of the world.
                </h3>

              </div>
              <div className="client-carousel">
                <div
                  id="carousel-05344ff24c"
                  data-placeholder-text="false"
                  data-play-button-datalayer='{"carousel-05344ff24c-play":{"xdm:linkURL":"/us-en","analytics-engagement":"false","analytics-link-type":"cta","analytics-link-name":"play: featured-client","analytics-module-name":"featured client block","analytics-template-zone":"block-carousel-1"}}'
                  data-pause-button-datalayer='{"carousel-05344ff24c-pause":{"xdm:linkURL":"/us-en","analytics-engagement":"false","analytics-link-type":"cta","analytics-link-name":"pause: featured-client","analytics-module-name":"featured client block","analytics-template-zone":"block-carousel-1"}}'
                  data-carousel-indicator-datalayer='{"carousel-05344ff24c-carousel-indicator":{"xdm:linkURL":"/us-en","analytics-engagement":"true","analytics-link-type":"nav/paginate","analytics-link-name":"ellipsis button {0}-featured-client","analytics-module-name":"featured client block","analytics-template-zone":"block-carousel-1"}}'
                  data-cmp-data-layer='{"carousel-05344ff24c":{"@type":"cio-sites/components/rad/carousel","analytics-module-name":"carousel-1","analytics-template-zone":"block-carousel-1"}}'
                  className="rad-client-carousel"
                >
                  <div className="rad-client-carousel__container">
                    <div className="rad-client-carousel__left">
                      <div className="rad-client-carousel__cell rad-client-carousel__slides-left">
                        <div id="carouselslide-ed445264d3"
                          data-cmp-data-layer='{"carouselslide-ed445264d3":{"@type":"cio-sites/components/rad/modules/carouselslide","analytics-module-name":"carouselslide-1","analytics-template-zone":"body"}}'
                          className="rad-client-carousel__image-container"
                        >
                          <img
                            className="rad-client-carousel__image"
                            src="images/accenture-Space%3Arad-3x2" alt="Satellite"
                          />
                        </div>
                      </div>
                      <div className="rad-client-carousel__cell rad-client-carousel__slides-left">
                        <div
                          id="carouselslide-03347c7043"
                          data-cmp-data-layer='{"carouselslide-03347c7043":{"@type":"cio-sites/components/rad/modules/carouselslide","analytics-module-name":"carouselslide-2","analytics-template-zone":"body"}}'
                          className="rad-client-carousel__image-container"
                        >
                          <img
                            className="rad-client-carousel__image"
                            src="images/accenture-MicrosoftTeams-image%20(40)%3Arad-3x2" alt="c"
                          />
                        </div>
                      </div>
                      <div className="rad-client-carousel__cell rad-client-carousel__slides-left">
                        <div
                          id="carouselslide-dfbb507690"
                          data-cmp-data-layer='{"carouselslide-dfbb507690":{"@type":"cio-sites/components/rad/modules/carouselslide","analytics-module-name":"carouselslide-3","analytics-template-zone":"body"}}'
                          className="rad-client-carousel__image-container"
                        >
                          <img
                            className="rad-client-carousel__image"
                            src="images/accenture-Netflix_Image1_3820x1912%3Arad-3x2" alt="Visual effect of a monster in flames"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="rad-client-carousel__right">
                      <div className="rad-client-carousel__cell">
                        <div id="carouselslide-ed445264d3-slide" className="rad-client-carousel__content">
                          <h4 className="rad-client-carousel__title">
                            Space data, decoded
                          </h4>
                          <div className="rad-client-carousel__info">
                            <p>
                              The sky is full of satellites&hellip;but how to
                              harness the data? e-GEOS&rsquo; solution is an
                              AI-powered product that makes geoinformation data
                              accessible through a simple user interface.
                            </p>
                          </div>
                          <a
                            href="e-geos-summary.html" target="_self" data-barba-transition
                            data-cmp-data-layer='{"carouselslide-ed445264d3-cta":{"@type":"cio-sites/components/rad/modules/carouselslide","xdm:linkURL":"/content/acom/us-en/case-studies/aerospace-defense/e-geos-summary","analytics-engagement":"true","analytics-link-type":"engagement","analytics-link-name":"Read more:Space data, decoded","analytics-module-name":"client story card button"}}'
                            data-cmp-clickable="" className="rad-client-carousel__read rad-button rad-button--tertiary"
                          >
                            <div className="rad-button__text">Read more</div>
                            <div className="rad-button__icon-right rad-icon rad-icon__chevron-right rad-icon--compact"></div>
                          </a>
                        </div>
                      </div>
                      <div className="rad-client-carousel__cell">
                        <div id="carouselslide-03347c7043-slide" className="rad-client-carousel__content">
                          <h4 className="rad-client-carousel__title">
                            Machine learning dives deep to save our coral reefs
                          </h4>
                          <div className="rad-client-carousel__info">
                            <p>
                              Coral reefs, like rainforests, are severely
                              threatened by climate change and pollution. But a
                              new cloud-based AI tool is revolutionizing marine
                              conservation around the world.
                            </p>
                          </div>
                          <a
                            href="reefcloud-marine-monitoring-summary.html" target="_self" data-barba-transition
                            data-cmp-data-layer='{"carouselslide-03347c7043-cta":{"@type":"cio-sites/components/rad/modules/carouselslide","xdm:linkURL":"/content/acom/us-en/case-studies/song/reefcloud-marine-monitoring-summary","analytics-engagement":"true","analytics-link-type":"engagement","analytics-link-name":"Read more:Machine learning dives deep to save our coral reefs","analytics-module-name":"client story card button"}}'
                            data-cmp-clickable="" className="rad-client-carousel__read rad-button rad-button--tertiary"
                          >
                            <div className="rad-button__text">Read more</div>
                            <div className="rad-button__icon-right rad-icon rad-icon__chevron-right rad-icon--compact"></div>
                          </a>
                        </div>
                      </div>
                      <div className="rad-client-carousel__cell">
                        <div id="carouselslide-dfbb507690-slide" className="rad-client-carousel__content">
                          <h4 className="rad-client-carousel__title">
                            Creating pixel perfection with Netflix
                          </h4>
                          <div className="rad-client-carousel__info">
                            <p>
                              We bring mythical creatures and surreal
                              surroundings to life for Netflix, through visual
                              effects (VFX) that suspend disbelief and empower
                              imagination.
                            </p>
                          </div>
                          <a
                            href="netflix-visual-effects-summary.html"
                            target="_self" data-barba-transition
                            data-cmp-data-layer='{"carouselslide-dfbb507690-cta":{"@type":"cio-sites/components/rad/modules/carouselslide","xdm:linkURL":"/content/acom/us-en/case-studies/song/netflix-visual-effects-summary","analytics-engagement":"true","analytics-link-type":"engagement","analytics-link-name":"Read more:Creating pixel perfection with Netflix","analytics-module-name":"client story card button"}}'
                            data-cmp-clickable="" className="rad-client-carousel__read rad-button rad-button--tertiary"
                          >
                            <div className="rad-button__text">Read more</div>
                            <div className="rad-button__icon-right rad-icon rad-icon__chevron-right rad-icon--compact"></div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rad-client-carousel__controllers rad-carousel--six-plus-cells__hidden">
                    <button
                      className="rad-client-carousel-play__pause" type="button"
                      data-cmp-data-layer='{"carousel-05344ff24c-pause":{"xdm:linkURL":"/us-en","analytics-engagement":"false","analytics-link-type":"cta","analytics-link-name":"pause: featured-client","analytics-module-name":"featured client block","analytics-template-zone":"block-carousel-1"}}'
                      data-cmp-clickable="" aria-expanded="false" aria-label="pause"
                    ></button>
                    <button
                      className="rad-client-carousel__btn rad-icon rad-icon__left rad-client-carousel__previous"
                      data-cmp-data-layer='{"carousel-05344ff24c-previous":{"xdm:linkURL":"/us-en","analytics-engagement":"true","analytics-link-type":"nav/paginate","analytics-link-name":"scroll left: featured-client","analytics-module-name":"featured client block","analytics-template-zone":"block-carousel-1"}}'
                      data-cmp-clickable="" type="button" aria-expanded="false" aria-label="previous"
                    ></button>
                    <button
                      className="rad-client-carousel__btn rad-icon rad-icon__right rad-client-carousel__next"
                      data-cmp-data-layer='{"carousel-05344ff24c-next":{"xdm:linkURL":"/us-en","analytics-engagement":"true","analytics-link-type":"nav/paginate","analytics-link-name":"scroll right: featured-client","analytics-module-name":"featured client block","analytics-template-zone":"block-carousel-1"}}'
                      data-cmp-clickable="" type="button" aria-expanded="false" aria-label="next"
                    ></button>
                  </div>
                  <div className="rad__range-input-slider-container rad-carousel--six-plus-cells__only">
                    <input
                      className="rad__range-input-slider-for-carousel"
                      max="500" min="0" name="carousel slider" value="1" type="range"
                    />
                  </div>
                </div>
              </div>
              <div className="floatingcardblock">
                <div
                  id="floatingcardblock-db5a7076ff" className="rad-awards"
                  data-cmp-data-layer='{"floatingcardblock-db5a7076ff":{"@type":"cio-sites/components/rad/blocks/floatingcardblock","analytics-module-name":"floatingcardblock-1","analytics-template-zone":"block-global-recognition-and-awards"}}'
                >
                  <div className="rad-awards__stage">
                    <h2 className="rad-awards__headline">
                      Global recognition and awards
                    </h2>
                  </div>
                  <div className="rad-awards-cards__presenter">
                    <div className="cmp-floating-awards-card">
                      <div
                        id="floatingawardcards-1da42e566f"
                        data-cmp-data-layer='{"floatingawardcards-1da42e566f":{"analytics-module-name":"floatingawardcards-1"}}'
                        className="rad-awards-card rad-awards-card--purple" data-speed="0.8"
                      >
                        <div className="rad-awards-card__cover" tabindex="0" aria-expanded="false" role="button">
                          <div className="rad-awards-card__motion-bg">
                            <lottie-player
                              preserveaspectratio="xMidYMid slice"
                              className="rad-awards-card__lp" aria-hidden="true"
                              src="/content/dam/accenture/final/images/lottie/awards/Accenture_CardIllu_Anim_001_Timed_Alpha_violet.json"
                            ></lottie-player>
                          </div>
                          <h3 className="rad-awards-card__title">
                            We&rsquo;re one of Fortune&rsquo;s World&rsquo;s
                            Most Admired Companies
                          </h3>
                        </div>
                        <div className="rad-awards-card__detail" tabindex="-1">
                          <p className="rad-awards-card__description">
                            We are celebrating our 21st consecutive year on the
                            list&#8239;and 10th consecutive year as No. 1 in IT
                            Services.
                          </p>
                          <a
                            href="https://fortune.com/ranking/worlds-most-admired-companies/" data-cmp-clickable
                            data-cmp-data-layer='{"floatingawardcards-1da42e566f-cta":{"xdm:linkURL":"https://fortune.com/ranking/worlds-most-admired-companies/","analytics-engagement":"true","analytics-link-type":"engagement","analytics-link-name":"Expand: We&rsquo;re one of Fortune&rsquo;s World&rsquo;s Most Admired Companies"}}'
                            className="rad-button rad-button--ghost" tabindex="-1"
                          >
                            <div className="rad-button__text">Expand</div>
                            <div
                              className="rad-button__icon-right rad-icon rad-icon__chevron-right rad-icon--compact"
                              aria-hidden="true"
                            ></div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="cmp-floating-awards-card">
                      <div
                        id="floatingawardcards-f31e5d9a9a"
                        data-cmp-data-layer='{"floatingawardcards-f31e5d9a9a":{"analytics-module-name":"floatingawardcards-2"}}'
                        className="rad-awards-card rad-awards-card--red" data-speed="0.8"
                      >
                        <div className="rad-awards-card__cover" tabindex="0" aria-expanded="false" role="button">
                          <div className="rad-awards-card__motion-bg">
                            <lottie-player
                              preserveaspectratio="xMidYMid slice"
                              className="rad-awards-card__lp" aria-hidden="true"
                              src="/content/dam/accenture/final/images/lottie/awards/Accenture_CardIllu_Anim_002_Timed_Alpha_red.json"
                            ></lottie-player>
                          </div>
                          <h3 className="rad-awards-card__title">
                            Fortune &amp; Great Place to Work&reg; World&rsquo;s
                            Best Workplaces&trade;
                          </h3>
                        </div>
                        <div className="rad-awards-card__detail" tabindex="-1">
                          <p className="rad-awards-card__description">
                            We&rsquo;re celebrating our first year among the
                            World&rsquo;s Best Workplaces&trade;, and continued
                            recognition in several countries, including No. 1 in
                            Argentina, No. 2 in Mexico and the Philippines, and
                            No. 5 in Brazil and the U.S.
                          </p>
                          <a
                            href="https://www.greatplacetowork.com/worlds-best-workplaces"
                            data-cmp-clickable
                            data-cmp-data-layer='{"floatingawardcards-f31e5d9a9a-cta":{"xdm:linkURL":"https://www.greatplacetowork.com/worlds-best-workplaces","analytics-engagement":"true","analytics-link-type":"engagement","analytics-link-name":"Expand: Fortune &amp; Great Place to Work&reg; World&rsquo;s Best Workplaces&trade; "}}'
                            className="rad-button rad-button--ghost" tabindex="-1"
                          >
                            <div className="rad-button__text">Expand</div>
                            <div
                              className="rad-button__icon-right rad-icon rad-icon__chevron-right rad-icon--compact"
                              aria-hidden="true"
                            ></div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="cmp-floating-awards-card">
                      <div
                        id="floatingawardcards-93d774216a"
                        data-cmp-data-layer='{"floatingawardcards-93d774216a":{"analytics-module-name":"floatingawardcards-3"}}'
                        className="rad-awards-card rad-awards-card--blue" data-speed="0.8"
                      >
                        <div className="rad-awards-card__cover" tabindex="0" aria-expanded="false" role="button">
                          <div className="rad-awards-card__motion-bg">
                            <lottie-player
                              preserveaspectratio="xMidYMid slice" className="rad-awards-card__lp" aria-hidden="true"
                              src="/content/dam/accenture/final/images/lottie/awards/Accenture_CardIllu_Anim_003_Timed_Alpha_blue.json"
                            ></lottie-player>
                          </div>
                          <h3 className="rad-awards-card__title">
                            Among Ethisphere&rsquo;s World&rsquo;s Most Ethical
                            Companies
                          </h3>
                        </div>
                        <div className="rad-awards-card__detail" tabindex="-1">
                          <p className="rad-awards-card__description">
                            For 16 consecutive years, we have been recognized
                            for operating with integrity in everything we do.
                          </p>
                          <a
                            href="https://worldsmostethicalcompanies.com/honorees/"
                            data-cmp-clickable
                            data-cmp-data-layer='{"floatingawardcards-93d774216a-cta":{"xdm:linkURL":"https://worldsmostethicalcompanies.com/honorees/","analytics-engagement":"true","analytics-link-type":"engagement","analytics-link-name":"Expand: Among Ethisphere&rsquo;s World&rsquo;s Most Ethical Companies"}}'
                            className="rad-button rad-button--ghost" tabindex="-1"
                          >
                            <div className="rad-button__text">Expand</div>
                            <div
                              className="rad-button__icon-right rad-icon rad-icon__chevron-right rad-icon--compact"
                              aria-hidden="true"
                            ></div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mixedmediatextblock">
                <div
                  className="rad-mixed-media-and-text rad-mixed-media-and-text--with-optional rad-spacing-vertical-md"
                  id="mixedmediatextblock-178a5a195b"
                  data-cmp-data-layer='{"mixedmediatextblock-178a5a195b":{"@type":"cio-sites/components/rad/blocks/mixedmediatextblock","analytics-module-name":"mixedmediatextblock-1","analytics-template-zone":"block-we-make-change-together"}}'
                >
                  <div className="rad-mixed-media-and-text__media">
                    <img
                      className="rad-mixed-media-and-text__primary-media rad-mixed-media-and-text__primary-image"
                      src="images/Acc-Img.webp" alt="At Office"
                    />
                    <img className="rad-mixed-media-and-text__secondary-media" src="images/join_us.svg" alt="Join us"/>
                  </div>
                  <div className="rad-mixed-media-and-text__text">
                    <div className="rad-mixed-media-and-text__label">
                      Our culture
                    </div>

                    <h3 className="rad-mixed-media-and-text__title">
                      We make change, together
                    </h3>

                    <p className="rad-mixed-media-and-text__description">
                      We combine technology with human ingenuity to solve some
                      of the world's biggest challenges. When you work with us,
                      the possibilities are endless.
                    </p>

                    <a
                      href="careers.html" className="rad-button rad-button--tertiary" data-cmp-clickable
                      data-cmp-data-layer='{"mixedmediatextblock-178a5a195b-joinus-cta":{"xdm:linkURL":"/us-en/careers","analytics-engagement":"true","analytics-link-type":"engagement","analytics-link-name":"Join us: We make change, together ","analytics-module-name":"mixedmediatextblock-1"}}'
                      target="_self" aria-label="Join us" title="Join us"
                    >
                      <div className="rad-button__text">Join us</div>
                      <div
                        className="rad-button__icon-right rad-icon rad-icon__chevron-right rad-icon--compact"
                        aria-hidden="true"
                      ></div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="custom-html">
                <div>
                  <div className="cmp-custom__html__wrapper" id="custom-code">
                    <div
                      className="html_content"
                      htmlcontent="&lt;style&gt;
    .mixedmediatextblock {
        padding-bottom: 5%;
    }
&lt;/style&gt;"
 ></div>
                  </div>
                </div>
              </div>
              <div className="rad-news">
                <div
                  id="news-f8be55a909" className="rad-news-container" data-placeholder-text="false" data-cmp-delay="5000"
                  data-play-button-datalayer='{"news_copy_copy_copy_-play-f8be55a909":{"xdm:linkURL":"/us-en","analytics-engagement":"false","analytics-link-type":"cta","analytics-link-name":"play:Accenture news","analytics-module-name":"news-1","analytics-template-zone":"block-accenture-news"}}'
                  data-pause-button-datalayer='{"news_copy_copy_copy_-pause-f8be55a909":{"xdm:linkURL":"/us-en","analytics-engagement":"false","analytics-link-type":"cta","analytics-link-name":"pause:Accenture news","analytics-module-name":"news-1","analytics-template-zone":"block-accenture-news"}}'
                  data-carousel-indicator-datalayer='{"news_copy_copy_copy_-carousel-indicator-f8be55a909":{"xdm:linkURL":"/us-en","analytics-engagement":"true","analytics-link-type":"nav/paginate","analytics-link-name":"Accenture news","analytics-module-name":"news-1","analytics-template-zone":"block-accenture-news"}}'
                  data-cmp-data-layer='{"news-f8be55a909":{"@type":"cio-sites/components/rad/blocks/news","analytics-module-name":"news-1","analytics-template-zone":"block-accenture-news"}}'
                >
                  <div className="rad-news-header">Accenture news</div>
                  <div className="rad-news-carousel rad-news-slideshow" id="news-f8be55a909-items" tabindex="-1">
                    <div className="rad-news-carousel-cell">

                      <a
                        className="rad-news-card"
                        href="https://newsroom.accenture.com/news/bira-91-collaborates-with-accenture-to-accelerate-enterprise-reinvention-journey.htm"
                        title=" "
                      >
                        <p className="rad-news-eyebrow">2023 July 18</p>

                        <h3
                          className="rad-news-title" data-cmp-clickable
                          data-cmp-data-layer='{"news_copy_copy_copy_-card-title-f0f336d005":{"xdm:linkURL":"https://newsroom.accenture.com/news/bira-91-collaborates-with-accenture-to-accelerate-enterprise-reinvention-journey.htm","analytics-engagement":"true","analytics-link-type":"engagement","analytics-link-name":"Bira 91 Collaborates with Accenture to Accelerate Enterprise Reinvention Journey","analytics-module-name":"newscard-1","analytics-template-zone":"block-accenture-news"}}'
                        >
                          Bira 91 Collaborates with Accenture to Accelerate
                          Enterprise Reinvention Journey
                        </h3>
                      </a>
                    </div>
                    <div className="rad-news-carousel-cell">

                      <a
                        className="rad-news-card"
                        href="https://newsroom.accenture.com/news/accenture-song-wins-dan-wieden-titanium-grand-prix-for-tuvalu-the-first-digital-nation.htm"
                      >
                        <p className="rad-news-eyebrow">2023 June 28</p>

                        <h3
                          className="rad-news-title" data-cmp-clickable
                          data-cmp-data-layer='{"news_copy_copy_copy_-card-title-bfddbfceaa":{"xdm:linkURL":"https://newsroom.accenture.com/news/accenture-song-wins-dan-wieden-titanium-grand-prix-for-tuvalu-the-first-digital-nation.htm","analytics-engagement":"true","analytics-link-type":"engagement","analytics-link-name":"Accenture Song Wins Dan Wieden Titanium Grand Prix for Tuvalu &ldquo;The First Digital Nation&rdquo;","analytics-module-name":"newscard-2","analytics-template-zone":"block-accenture-news"}}'
                        >
                          Accenture Song Wins Dan Wieden Titanium Grand Prix for
                          Tuvalu &ldquo;The First Digital Nation&rdquo;
                        </h3>
                      </a>
                    </div>
                    <div className="rad-news-carousel-cell">

                      <a
                        className="rad-news-card"
                        href="https://newsroom.accenture.com/news/accenture-reports-strong-third-quarter-fiscal-2023-results.htm"
                      >
                        <p className="rad-news-eyebrow">2023 June 22</p>

                        <h3
                          className="rad-news-title" data-cmp-clickable
                          data-cmp-data-layer='{"news_copy_copy_copy_-card-title-08d48058bb":{"xdm:linkURL":"https://newsroom.accenture.com/news/accenture-reports-strong-third-quarter-fiscal-2023-results.htm","analytics-engagement":"true","analytics-link-type":"engagement","analytics-link-name":"Accenture Reports Strong Third-Quarter Fiscal 2023 Results","analytics-module-name":"newscard-3","analytics-template-zone":"block-accenture-news"}}'
                        >
                          Accenture Reports Strong Third-Quarter Fiscal 2023
                          Results
                        </h3>
                      </a>
                    </div>
                    <div className="rad-news-carousel-cell">

                      <a
                        className="rad-news-card"
                        href="https://newsroom.accenture.com/news/accenture-invests-in-spideroak-to-elevate-satellite-communications-security-in-space.htm"
                        title="Accenture Invests in SpiderOak to Elevate Satellite Communications Security in Space"
                      >
                        <p className="rad-news-eyebrow">2023 May 18</p>

                        <h3 className="rad-news-title" data-cmp-clickable
                          data-cmp-data-layer='{"news_copy_copy_copy_-card-title-d56039c81e":{"xdm:linkURL":"https://newsroom.accenture.com/news/accenture-invests-in-spideroak-to-elevate-satellite-communications-security-in-space.htm","analytics-engagement":"true","analytics-link-type":"engagement","analytics-link-name":"Accenture Invests in SpiderOak to Elevate Satellite Communications Security in Space","analytics-module-name":"newscard-4","analytics-template-zone":"block-accenture-news"}}'>
                          Accenture Invests in SpiderOak to Elevate Satellite
                          Communications Security in Space
                        </h3>
                      </a>
                    </div>
                  </div>

                  <button
                    type="button" aria-expanded="false" aria-label="play pause" className="rad-news-play-pause rad-carousel--six-plus-cells__hidden"></button>
                  <div className="rad__range-input-slider-container rad-carousel--six-plus-cells__only">
                    <input className="rad__range-input-slider-for-carousel" max="500" min="0" name="carousel slider" value="1" type="range"/>
                  </div>
                </div>
              </div>
            </div>
          </main>
  )
}

export default MainSection;
