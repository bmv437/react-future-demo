# React Future Demo
This demo uses a custom build of `react`, `react-dom`, and `simple-cache-provider` from the `@bmv437` scope.

* `react` ![react](https://img.shields.io/npm/v/@bmv437/react.svg)
* `react-dom` ![react-dom](https://img.shields.io/npm/v/@bmv437/react-dom.svg)
* `simple-cache-provider` ![simple-cache-provider](https://img.shields.io/npm/v/@bmv437/simple-cache-provider.svg)


# Getting Started
* `yarn`
* `yarn start`

# Linking to local React with `yarn link`

## In the React repo
* clone the `react` repo
* run `yarn build core,dom,simple-cache-provider`
* cd into `build/node_modules` and inside each package folder:
  * run `yarn link`

## In this project
* run `yarn`
* run `yarn link react`
* run `yarn link react-dom`
* run `yarn link simple-cache-provider`
* `yarn start`


# Release new React packages
* `packages/shared/ReactFeatureFlags.js` => `enableSuspense = true`
* get commit hash with `git rev-parse --short HEAD`
* run `yarn build core,dom,simple-cache-provider`
* cd into `build/node_modules` and inside each package folder:
  * edit `package.json`
  * prefix `name` with `@bmv437/`
  * append `version` with `-alpha.{commit hash from above}`
  * `npm publish --access public`

# Credits
https://github.com/ivan-ha/react-async-rendering-demo
