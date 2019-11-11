import { graphql, Link, useStaticQuery } from 'gatsby';
import Logo from 'gatsby-theme-rdfsite/src/components/footer/logo';
import Social from 'gatsby-theme-rdfsite/src/components/social';
import React from 'react';

const links = [
  { url: '/team/', text: 'Team' },
  { url: '/publications/', text: 'Publikationen' },
  { url: '/news/', text: 'Neuigkeiten' },
  { url: '/partners/', text: 'Partner' },
  { url: '/contact/', text: 'Kontakt' },
  { url: '/imprint', text: 'Impressum' },
  { url: '/privacy', text: 'Datenschutzerklärung' },
];

const Footer = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            footer
          }
        }
      }
    `
  );

  return (
    <div className="footer">
      <div className="columns" style={{ flex: 1 }}>
        <div className="column">
          <Logo />
        </div>
        <div className="column dice-footer">
          {links.map(l => (
            <Link key={l.url} to={l.url}>
              {l.text}
            </Link>
          ))}
        </div>
        <Social hiddenMobile={false} />
      </div>

      <div className="horizontal-separator" />

      <div className="flex justify-center footer-note">
        {site.siteMetadata.footer}
      </div>
    </div>
  );
};

export default Footer;
