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
