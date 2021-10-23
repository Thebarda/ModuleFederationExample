# Micro-frontends: Module Federation with WebPack 5

## What is Module Federation?

It is basically a JavaScript architecture. It allows a JavaScript application to dynamically load code from another application (named "remote").

```flow
Component           Scope            Master application

`Hello` ----------> `app3` ------------> `app1`
                      ^             |
                      |             |
`CounterState` -------|             | 
                                    |
`Counter` --------> `app2` ---------|
```

## How to run the app ?

### Development

- Go to app1 folder then `npm start`
- Go to app2 folder then `npm start`
- Go to app3 folder then `npm start`

In development, `app2` and `app3` will create a server (`http://localgost:40001`) to enable the Live reloading in the `app1` thank to the webpack plugin `@module-federation/fmr`.
`app1` will wait for the "Live Reload Server" to start before starting his own webpack dev server.

## Production

- Go to app1 then `npm run build` and `npm run serve:build`
- Go to app2 then `npm run build` and `npm run serve:build`
- Go to app3 then `npm run build` and `npm run serve:build`
