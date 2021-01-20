# Micro-frontends: Module Federation with WebPack 5

## What is Module Federation?

It is basically a JavaScript architecture. It allows a JavaScript application to dynamically load code from another application (a different Webpack build).

Here we load a `Counter` component from `app2` to `app1`, `CounterState` component from `app3` to `app1` and we catch the error when the module is not found.

## Hos to run the app ?

### Development

- Go to app1 folder then `npm run setup` and `npm start`
- Go to app2 folder then `npm start`
- Go to app3 folder then `npm start`

Note: To enable watch content base on app1, the following files `app2/dist/remoteEntry.js` and `app3/dist/remoteEtry.js` have to be created.

## Production

- Go to app1 then `npm run build` and `npm run serve:build`
- Go to app2 then `npm run build` and `npm run serve:build`
- Go to app3 then `npm run build` and `npm run serve:build`

## Example based from this repo

[github.com/brandonvilla21/module-federation](http://github.com/brandonvilla21/module-federation)
