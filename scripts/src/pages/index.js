import { Link, navigate } from 'gatsby';
import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import ContactForm from '../components/contact';
import Layout from '../components/layout';
import News from '../components/news';
import SEO from '../components/seo';
import SideMenu from '../components/sidemenu';
import Social from '../components/social';

export default function Home() {
  const heroRef = React.createRef();
  const fundedRef = React.createRef();
  const newsRef = React.createRef();
  const tweetsRef = React.createRef();
  const contactRef = React.createRef();

  const menu = [
    { target: heroRef, title: 'About', url: 'about' },
    { target: fundedRef, title: 'Funded by', url: 'funded' },
    { target: tweetsRef, title: 'Latest tweets', url: 'tweets' },
    { target: newsRef, title: 'News', url: 'news' },
    { target: contactRef, title: 'Contact us', url: 'contact' },
  ];

  return (
    <Layout withContainer={false}>
      <SEO title="Home" />

      <SideMenu targets={menu} />
      <Social />

      <section id="about" className="hero hero-row is-medium" ref={heroRef}>
        <div className="hero-body">
          <div className="container content">
            <h1 className="title">Welcome to RAKI</h1>
            <p className="hero-text">
              RAKI kombiniert erstmalig induktives logisches Programmieren mit
              Reinforcement Learning um skalierbare nachvollziehbare Machine
              Learning-Verfahren mit „humans in the loop“ zu entwickeln.
            </p>
            <button
              onClick={() => navigate('/news/')}
              className="button is-link action-button"
            >
              Learn more
            </button>
          </div>
        </div>
      </section>

      <section
        id="funded"
        className="hero has-background-light is-medium"
        ref={fundedRef}
      >
        <div className="hero-body">
          <div className="container content">
            <div className="section-header">
              <h1 className="title">Research areas</h1>
            </div>

            <div className="research-areas-list">
              <div className="research-area-item research-area-rep">
                Representation
              </div>
              <div className="research-area-item research-area-cnm">
                Construction <br /> and <br /> Maintenance
              </div>
              <div className="research-area-item research-area-op">
                Operation
              </div>
              <div className="research-area-item research-area-expl">
                Exploitation
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="tweets"
        className="hero has-background-white is-medium"
        ref={tweetsRef}
      >
        <div className="hero-body">
          <div className="container content">
            <div className="section-header">
              <h1 className="title">Latest tweets</h1>
              <a className="link-more" href="https://twitter.com/raki-project">
                Follow →
              </a>
            </div>

            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="raki-project"
              noFooter
              noHeader
              noScrollbar
              autoHeight
              options={{ tweetLimit: 3, dnt: true }}
            />
          </div>
        </div>
      </section>

      <section
        id="news"
        className="hero has-background-light is-medium"
        ref={newsRef}
      >
        <div className="hero-body">
          <div className="container content">
            <div className="section-header">
              <h1 className="title">News</h1>
              <Link className="link-more" to="/news/">
                More news →
              </Link>
            </div>

            <News paginate={false} />
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="hero has-background-white is-medium"
        ref={contactRef}
      >
        <div className="hero-body">
          <div className="container contact-section">
            <div className="section-header">
              <h1 className="title">Contact us</h1>
              <Link className="link-more" to="/contact/">
                More contact information →
              </Link>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </Layout>
  );
}
