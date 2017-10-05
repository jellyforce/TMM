// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBEsXt2zM8RjQZPcV3LiArp9VSeSOR1NAk',
    authDomain: 'money-manager-d4a3c.firebaseapp.com',
    databaseURL: 'https://money-manager-d4a3c.firebaseio.com',
    storageBucket: 'money-manager-d4a3c.appspot.com',
    messagingSenderId: '658128367998'
  }
};
