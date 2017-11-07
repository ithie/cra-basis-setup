# cra-basis-setup
Create-React-App Basis Setup with styled-components, styleguidist, lint-staged

[![Build Status](https://travis-ci.org/ithie/cra-basis-setup.svg?branch=master)](https://travis-ci.org/ithie/cra-basis-setup)



HowTo install this:
 - clone repo
 - `yarn install` (or `npm install`)
 - `yarn styleguide`  // to start styleguide server
 
Other tasks: 
- `yarn start` // to start dev server
- `yarn test`  // to run javascript tests
- `yarn coverage`  // run javascript tests & print coverage
- `yarn build` // to produce minified production build 
- `yarn styleguide:build` // to produce standalone styleguide build

Steps i made
* `create-react-app cra-basis-setup`
* `yarn add styled-components`
* `yarn add --dev react-styleguidist react-test-renderer webpack flow-bin`
* `yarn flow -- init`


## Differences to the forked base-project

This fork enhances the cra-basis-setup with a running backstop-js config and a junit-compatible coverage-report.
Additional tasks:

- `yarn coverage:ci`  // run javascript tests & create junit-compatible xml-report
- `yarn visreg:ref` // to create reference-screenshots for visual regression tests
- `yarn visreg:test` // to test the current application
- `yarn visreg:open` // to start the backstop server
- `yarn visreg:approve` // to approve changes for visual regression tests

## Code-Generator

- `yarn run create [type] [name]` // to generate Atoms, Molecules, Constants, Containers etc.

Valid Types are:
- atom
- molecule
- organism
- template
- layout
- constant
- container
