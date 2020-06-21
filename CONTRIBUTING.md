This Repo is using [AirBnb JavaScript syntax style](https://github.com/airbnb/javascript) as the standard. ESLint is setup to pickup on this style.

In addition, [JSDoc Documentation](https://jsdoc.app/) is also being enforced through the Linter. If you need to disable a check for a specific line, you can use VSCode's "Quick Fix" menu when hovering the mouse over the red line, and select one of the Disable options.  
_It's preferred to not disable the rule, unless the situation calls for it._

- Make sure you have NodeJS and NPM installed on your box
  - https://nodejs.org/en/download/
- After cloning the repo to your box, you'll need to install all the NPM vendor libraries and dependencies
```bash
npm install
```


`dist/main.js` is the transpiled bundle that can be copied to your Roll20 API Scripts page.  
To re-package the bundle, run
```bash
npm run build
```

---

To check that your syntax is correct, run
```bash
npm run lint
```
