module.exports = {
  siteMetadata: {
    // website title
    title: `Template RDF website`,
    // healine to be used at home page
    // defaults to `Welcome to {title}`
    headline: '',
    // site name to be used in header component
    // positioned next to logo
    siteName: 'EDITME',
    // website description, used for SEO and
    // on index page in first hero block
    description: `Template RDF website generated with Gatsby`,
    // author, used for SEO
    author: `@yamalight`,
    // optional footer text
    footer: `Template footer text`,
    // social links, will be added on index page
    // and to the footer
    // leave empty to remove link completely
    social: {
      twitter: 'https://twitter.com/DiceResearch',
      github: 'https://github.com/dice-group',
      facebook: '',
      youtube: '',
      instagram: '',
    },
    // theme color overriders
    colors: {
      primary: '',
      accent: '',
      brightText: '',
      darkText: '',
    },
  },
  // default rdfsite plugin that does all the work
  plugins: [`gatsby-theme-rdfsite`],
};
