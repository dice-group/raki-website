<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby's RDF-based website starter
</h1>

Kick off your project with this RDF-based boilerplate.
This starter ships with the [Gatsby RDFSite theme](https://github.com/dice-group/gatsby-theme-rdf) and all the configuration files you might need to get up and running blazing fast with the blazing fast app generator for React.

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the RDFSite starter.

    ```shell
    # create a new Gatsby site using the rdfsite starter
    gatsby new my-rdfsite-starter https://github.com/dice-group/gatsby-template-rdfsite
    ```

1.  **Edit config and papers fetching.**

    Navigate into your new site’s directory and edit `gatsby-config.js`.

    ```shell
    cd my-rdfsite-starter/
    edit gatsby-config.js
    ```

    Adjust the values to your liking.  
    After that, edit `package.json` and set user and tags for [Bibsonomy](https://www.bibsonomy.org/) papers fetching, e.g.:

    ```json
    {
      "scripts": {
        "papers": "papers dice-research simba dice"
      }
    }
    ```

1.  **Start developing.**

    Once you are done adjusting basic website info - start it up.

    ```shell
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `my-rdfsite-starter` directory in your code editor of choice and edit `pages/contact.mdx`. Save your changes and the browser will update in real time!

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── .github/workflows
    ├── node_modules
    ├── data
    ├── images
    ├── pages
    ├── src/gatsby-theme-rdfsite
    ├── .dockerignore
    ├── .exoframeignore
    ├── .gitignore
    ├── Dockerfile
    ├── exoframe.json
    ├── gatsby-config.js
    ├── package.json
    ├── README.md
    └── yarn.lock

1.  **`/.github/workflows`**: This directory contains github actions for building and deploying the website (with exoframe). By default, only build action is setup. See Automated Deployment section below for more info.

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

1.  **`/data`**: This directory will contain all of the RDF data related to what you will see on the front-end of your site (what you see in the browser) such as partners, people and publications.

1.  **`/images`**: This directory will contain all of the images used on your website, they will be automatically optimized during build.

1.  **`/pages`**: This directory will contain all of the markdown (MD or MDX) pages used on your website such as contacts, deliverables and news.

1.  **`/src/gatsby-theme-rdfsite`**: This directory will contain all of the code related to overrides of the RDFSite theme components. For more info on overrides, see [Gatsby theme shadowing docs](https://www.gatsbyjs.org/docs/themes/shadowing/).

1.  **`.dockerignore`**: This file tells docker which files it should ignore during build to make your image lighter.

1.  **`.exoframeignore`**: This file tells exoframe which files it should ignore during deploy to reduce data transfer size.

1.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

1.  **`gatsby-config.js`**: This is the main configuration file for your site. This is where you can specify basic information about your site (metadata) like the site title, tagline and description, which colors to use, etc.

1.  **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

1.  **`README.md`**: A text file containing useful reference information about your project.

1.  **`yarn.json`** (See `package.json` above, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

## 🚢 Deployment

This template provides an easy way to build and deploy your website as Docker image.

To do so you need to:

1. Build the website with Gatsby by executing: `npm run build`
2. Build the Docker image by executing: `docker build -t rdf-site .` (alternatively you can run this as pre-defined npm script using `npm run docker:build`)
3. Deploy built image to the server of your chosing

Built image uses `nginx` as base to serve your website. When deploying use port `80` from the container.

## 🤖 Automated deployment

This template provides an optional way to auto-deploy the website from master branch using [Exoframe](https://github.com/exoframejs/exoframe).

To enable the auto-deploy procedure you need to:

1. Create new `develop` branch and set it as a default branch in github
2. Make sure you have [github actions](https://github.com/features/actions) enabled on your repo
3. Generate new Exoframe deployment token and add it as a secret name `EXO_TOKEN` to the repository
4. Edit `exoframe.json` and set your project name and deployment domain
5. Rename `deploy.template` to `deploy.yml` (can be found in `/.github/workflows`)
6. Edit `deploy.yml` and replace the following values:

   - Replace `https://your.exoframe.server` with your exoframe server URL
   - (optionally) Replace `bot@dice-research.org` and `DICE Bot` with preferred value for automated git branch syncing

7. (optionally) Repeat steps 4-5 for `weekly-deploy.template` if you want to have automated weekly deployments

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

<!-- AUTO-GENERATED-CONTENT:END -->
