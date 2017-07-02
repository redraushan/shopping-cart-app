// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAHwKDjOgy7nokggQCcZQbc90ogilxL8ms',
    authDomain: 'shopping-cart-app-9f12d.firebaseapp.com',
    databaseURL: 'https://shopping-cart-app-9f12d.firebaseio.com',
    projectId: 'shopping-cart-app-9f12d',
    storageBucket: 'shopping-cart-app-9f12d.appspot.com',
    messagingSenderId: '65203033612'
  }
};
