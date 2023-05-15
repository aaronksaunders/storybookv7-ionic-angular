# Simple Storybook v7 Angular Ionic Integration 

Simple demostration of using storybook v7 with ionic framework

## Setup

In project directory
```
npx storybook@latest init
```

Changes to `angular.json`

```json
"storybook": {
  "builder": "@storybook/angular:start-storybook",
  "options": {
    "configDir": ".storybook",
    "browserTarget": "app:build",
    "compodoc": false,
    "port": 6006,
    "assets": [
      {
        "glob": "**/*",
        "input": "src/assets",
        "output": "assets"
      },
      {
        "glob": "**/*.svg",
        "input": "node_modules/ionicons/dist/ionicons/svg",
        "output": "./svg"
      }
    ],
    "styles": [
      "src/theme/variables.scss",
      "src/global.scss"
    ]
  }
},
```

Specific Change to a basic story to support Angular & Ionic Framework
```javascript
  decorators: [
    // include IonicModule
    applicationConfig({
      providers: [importProvidersFrom([IonicModule.forRoot()])],
    }),
    // declare the component
    moduleMetadata({
      declarations: [MemberCardComponent],
    }),
    // wrap in ion-app
    componentWrapperDecorator((story) => `<ion-app>${story}</ion-app>`),
  ],
```

### More Information 
- [Github For Storybook Angular](https://github.com/storybookjs/storybook/tree/next/code/frameworks/angular#getting-started)
- [Storybook Website - Angular](https://storybook.js.org/docs/angular/get-started/install) 

## Issues
### Compile Error
```
Error: node_modules/webpack/types.d.ts:10934:41 - error TS2315: Type 'ServerOptions' is not generic.

10934 > = SecureContextOptions & TlsOptions & ServerOptionsImport<Request, Response>;
```
I resolved it by using "skipLibCheck": true in your `tsconfig.app.json` under "compilerOptions"



