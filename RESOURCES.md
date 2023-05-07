# Resources
> *Documentation, articles, and references used to build the sn-glossary website*

---
## Tools
> *developer tools and documentation*

#### Documentation: Markdown
- [Markdown Guide](https://www.markdownguide.org/)
- [Docsify](https://docsify.js.org/#/) ***A magical documentation site generator***

#### Version Control: Github
- [Website](https://github.com/)
- [Cheatsheet: Github](https://education.github.com/git-cheat-sheet-education.pdf)
- [Semantic Versioning](https://semver.org/)

---
## Front-End
> *UI/UX, Web Development*

#### Technologies: HTML
- [Cheatsheet: HTML](https://cheatsheets.shecodes.io/html)

#### Technologies: CSS
- [Cheatsheet: Flexbox](https://flexbox.malven.co/)
- [CheatsheetL Grid](https://grid.malven.co/)
- [CSS Box Model](https://www.w3schools.com/css/css_boxmodel.asp)
- [CSS Generators](https://generators.shecodes.io/)
- [CSS Gradients](https://gradients.shecodes.io/)
- [Emoji Icons](https://emojipedia.org/)
- [Emoji SVG Vector and Icons](https://www.svgrepo.com/)
- [Emoji to Favicon Generator](https://favicon.io/)

#### Technologies: CSS | TailwindCSS
- [Documentation](https://tailwindcss.com/docs/installation)
- [Tailwindcss-Forms](https://github.com/tailwindlabs/tailwindcss-forms)
 
#### Technologies: CSS | TailwindCSS | Tailwind Elements (NPM Package)
> Next.js v13 (src > pages)
- [Tailwind Elements](https://tailwind-elements.com/)
- [Tailwind Elements: Next.js Integration](https://tailwind-elements.com/docs/standard/integrations/next-integration/)
- [Tailwind Elements: Next.js Configuration Fix](https://github.com/mdbootstrap/Tailwind-Elements/issues/1058#issuecomment-1176988692)

##### Configuration:
```typescript
/**
 * File: _app.tsx
**/
import type { AppProps } from 'next/app';
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const use = async () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (await import('tw-elements' as any)).default;
    };
    use();
  }, []);
  return <Component {...pageProps} />;
}
```
🚨***!!!Dynamic import required for nextjs compatibility!!!***🚨
Example:
```typescript
/**
 * File: index.tsx
**/
import dynamic from "next/dynamic";
const NavBar = dynamic(import("../components/HomeNavigator"), { ssr: false });

export default function Home() {
  return (
    <div>
      <NavBar/>
      <h1>Hello World</h1>
    </div>
  )
}
```
🚨***!!!Must be initialized in a COMPONENT!!!***🚨
```typescript
/**
 * File: HomeNavigator.tsx
**/
import { useEffect } from "react";
//tw-elements: Initialization for ES Users
import {
  Input,
  Modal,
  Ripple,
  initTE,
} from "tw-elements";

export default function Home() {
    useEffect(() => {
        initTE({ Input, Modal, Ripple, });
    }, []);
    return (
        <div>
            <h1>Hello World</h1>
        </div>
    )
}
```
  
#### Technologies: Javascript
- [Cheatsheet: Javascript](https://cheatsheets.shecodes.io/javascript)
- [Notifications: Toastify](https://github.com/apvarun/toastify-js/tree/master)
  
#### Technologies: Next.js
- [Documentation](https://nextjs.org/docs)
- [Formating: Esling, Prettier, Husky, Lint-staged](https://www.linkedin.com/pulse/setup-nextjs-app-directory-typescript-tailwindcss-project-nekfar/)

#### Technologies: React
- [Cheatsheet: React](https://cheatsheets.shecodes.io/react)
- [React Hooks](https://react.dev/learn/sharing-state-between-components)
- [React Hooks: useState](https://react.dev/reference/react/useState)
- [React Hooks: useEffect](https://react.dev/reference/react/useEffect)
- [Updating Arrays in State](https://react.dev/learn/updating-arrays-in-state)
- [Upfating Objects in State](https://react.dev/learn/updating-objects-in-state)
- [Responding to Events](https://react.dev/learn/responding-to-events)
- [Reacting to Input with State](https://react.dev/learn/reacting-to-input-with-state)
- [Passing Data Deeply with Context](https://react.dev/learn/passing-data-deeply-with-context)

---
## Database

#### Technologies: SQL-Server
> *Microsoft implementation of SQl database utilizing T-SQl*
- [MS-SQL & Node.js](https://learn.microsoft.com/en-us/sql/connect/node-js/step-3-proof-of-concept-connecting-to-sql-using-node-js?view=sql-server-ver16)
- [MacOS Setup](https://learn.microsoft.com/en-us/sql/linux/quickstart-install-connect-docker?view=sql-server-ver16&pivots=cs1-bash)
- [Next.js SQL db-connection example](https://github.com/vercel/next.js/tree/canary/examples/with-postgres)
- [Next.js Dynamic imports: allow commonjs syntax](https://nextjs.org/docs/pages/building-your-application/optimizing/lazy-loading#nextdynamic)
- [Basic sql-server config](https://www.mickpatterson.com.au/blog/connecting-to-a-sql-server-database-via-nodejs)

#### Technologies: Tedious Node Package
>*Tedious is a Node package that provides an implementation of the TDS protocol, which is used to interact with instances of Microsoft's SQL Server.* 
- [Documentation](https://tediousjs.github.io/tedious/)

#### Technologies: Sequelize Node Package
>*Feature-rich ORM for modern Node.js and TypeScript*
- [Documentation](https://sequelize.org/docs/v6/getting-started/)

#### Articles: Configuration
- https://sqlchoice.azurewebsites.net/en-us/sql-server/developer-get-started/node/windows/step/2.html
- https://blog.devgenius.io/connecting-nodejs-to-ms-sql-server-database-8518bf54598
- https://www.mickpatterson.com.au/blog/connecting-to-a-sql-server-database-via-nodejs
- https://developer.okta.com/blog/2019/03/11/node-sql-server
- https://github.com/oktadev/okta-node-sql-server-example
- https://jasonwatmore.com/post/2022/06/18/nodejs-ms-sql-server-crud-api-example-and-tutorial
- https://jasonwatmore.com/post/2022/06/20/nodejs-mssql-connect-to-sql-server-with-sequelize-tedious
- https://jasonwatmore.com/post/2022/07/01/nodejs-ms-sql-server-simple-api-for-authentication-registration-and-user-management
- https://www.freecodecamp.org/news/how-to-bypass-es-modules-error-in-next-js/

#### Articles: Security
- [SQL Injection Prevention](https://www.stackhawk.com/blog/node-js-sql-injection-guide-examples-and-prevention/)
- [Redirect Prevention](https://www.stackhawk.com/blog/nodejs-open-redirect-guide-examples-and-prevention/)
- [CSRF](https://www.stackhawk.com/blog/what-is-cross-site-request-forgery-csrf/)

---
## [ServiceNow](https://www.servicenow.com/)
>*ServiceNow is an American software company based in Santa Clara, California that develops a cloud computing platform to help companies manage digital workflows for enterprise operations.* 

- [Product Documentation](https://www.google.com/search?client=firefox-b-1-d&q=servicenow+product+documentation)
- [ServiceNow StyleGuide](https://hi.service-now.com/styles/heisenberg/styleguide/docs/index.html)
- [ServiceNow StyleGuide: Colors](https://hi.service-now.com/styles/heisenberg/styleguide/docs/guidelines_-_colors.html)
- [Brand Color Scheme](https://www.schemecolor.com/servicenow-logo-colors.php)
- [Product Documentation: Virtual Agent](https://docs.servicenow.com/bundle/utah-servicenow-platform/page/administer/virtual-agent/task/add-portable-va-client-website.html)

---
## Security
- [Cloudflare](https://www.cloudflare.com/)
> *Cloudflare is a global network designed to make everything you connect to the Internet secure, private, fast, and reliable.*

---
## Desktop Support
> *Additional Support for: MacOS, Linux, Windows*

### Tauri
> *Tauri is an app construction toolkit that lets you build software for all major desktop operating systems using web technologies.*

Desktop support allows users to build personal glossaries for offline use

#### Documentation
- [Tauri + Next.js](https://tauri.app/v1/guides/getting-started/setup/next-js/)

### SQLite
> *SQLite is an in-process library that implements a self-contained, serverless, zero-configuration, transactional SQL database engine.*

Perfect database for desktop use

#### Documentation
- [Website](https://www.sqlite.org/index.html)
