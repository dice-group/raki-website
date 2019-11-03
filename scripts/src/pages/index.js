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
    { target: heroRef, title: 'Über uns', url: 'about' },
    { target: fundedRef, title: 'Gefördert durch', url: 'funded' },
    { target: tweetsRef, title: 'Tweets', url: 'tweets' },
    { target: newsRef, title: 'Neuigkeiten', url: 'news' },
    { target: contactRef, title: 'Kontakt us', url: 'contact' },
  ];

  return (
    <Layout withContainer={false}>
      <SEO title="Home" />

      <SideMenu targets={menu} />
      <Social />

      <section id="about" className="hero hero-row is-medium" ref={heroRef}>
        <div className="hero-body">
          <div className="container content">
            <h1 className="title">
              RAKI - Rapide Erklärbare Künstliche Intelligenz für
              Industrieanlagen
            </h1>
            <h3 className="title">Willkommen bei RAKI</h3>

            <p className="hero-text">
              RAKI kombiniert erstmalig induktives logisches Programmieren mit
              Reinforcement Learning um skalierbare nachvollziehbare Machine
              Learning-Verfahren mit „humans in the loop“ zu entwickeln.
            </p>

            <p className="hero-text">
              Im Fokus des Projekts steht die skalierbare KI-getriebene
              Optimierung der Konfiguration und des Betriebs von
              Industrieanlagen sowie der notwendigen Produktionslogistik.
            </p>
            <p className="hero-text">
              Verteilte Implementierungen ermöglichen die Verarbeitung großer
              Datenmengen für die automatische Generierung von Erklärungen. Die
              Entwicklungs- und Anwendungspartner AI4BD und Siemens planen die
              Verwendung von wesentlichen Teilen des RAKI-Frameworks nach der
              Produktisierung in ihre Plattformen CBR und Mindsphere. Das
              Ergebnis von RAKI bildet die Grundlage für neuartige Datenprodukte
              wie KI-getriebene interaktive Konfigurationssoftware für
              Industrieanlagen, die eine skalierbare Entwicklung von Smart
              Services in der industriellen Produktion ermöglicht.
            </p>

            <button
              onClick={() => navigate('/news/')}
              className="button is-link action-button"
            >
              Neuigkeiten
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
              <h1 className="title">Forschungsbereiche</h1>
            </div>

            <div className="research-areas-list">
              <div className="research-area-item research-area-rep">
                Wissens- repräsentation
              </div>
              <div className="research-area-item research-area-cnm">
                Maschinelles Lernen
              </div>
              <div className="research-area-item research-area-op">
                Optimierung
              </div>
              <div className="research-area-item research-area-expl">
                Smart Services
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
              <h1 className="title">Tweets</h1>
              <a className="link-more" href="https://twitter.com/raki-project">
                RAKI folgen →
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
              <h1 className="title">Neuigkeiten</h1>
              <Link className="link-more" to="/news/">
                Weitere Neuigkeiten →
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
              <h1 className="title">Kontakt</h1>
              <Link className="link-more" to="/contact/">
                Kontaktinformation →
              </Link>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </Layout>
  );
}
