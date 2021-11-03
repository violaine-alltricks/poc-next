# This POC allow us to learn:

- having authenticated pages is possible with Next.js. We have been able to try it [here](https://github.com/violaine-alltricks/poc-next/commit/9565013bd5bd77da620a6e7049729a9c10c33b88)
- changing url without unmounted a component is not possible with Next.js routing. But it is possible to use `react-router-dom` in it. Using the catch-all-route functionality of Next.js. An example is available [here](https://github.com/violaine-alltricks/poc-next/commit/5e3451d6a96c69544e35c9e44c1b94eb95bf079f)
- using antd with a custom theme is possible thanks to [`next-plugin-antd-less`](https://www.npmjs.com/package/next-plugin-antd-less). However, it's only working with antd v4 because of errors in `Alert` and `Dropdown` antd v3 components (a syntax error in the less files).
- using `react-components` is possible but not very easy. Because `react-components` use antd v3, we will need to update it (this will required to redo the majority of our tests). Also, because of Next.js being SSR oriented, if we want to import component only in client-side, we need to use [Dynamic import](https://nextjs.org/docs/advanced-features/dynamic-import) at least for component that called window (`LeafletMap` for example). But with current `react-components` bundle, if one component is used, all the JS is loaded, so in order to have our next app to compile, we need to dynamic import all `react-components`'s components. This could be resolved by improving `react-components` bundle, using Tree shaking for example.
- using `redux-saga` is possible
- we can replace `connected-react-router` with `next/router` usage in Sagas.

## Troubleshooting with antd

When using Next.Js with antd, we encountered the following problem:

The global antd style with theme overrides is not included in pages that don't use (import and instantiate) any antd component.
This result in loosing styles when we reload the page or if we first navigate to a page without an antd component.

We tried:

- [`next-plugin-antd-less`](https://www.npmjs.com/package/next-plugin-antd-less). This lib allow us to use less with Next.js (because it doesn't support it natively). By using it, we were able to customize antd theme using `modifyVar` or a custom less file, but the global `antd` styles are still not includes in `.html` file if no component is used.

- [`next-with-less`](https://www.npmjs.com/package/next-with-less). This lib is suppose to allow us to use less with Next.js. Unfortunately we didn't manage to make it works. We encountered the following problem:

  ```
  ./node_modules/antd/lib/button/style/index.less
  Global CSS cannot be imported from within node_modules.
  Read more: https://nextjs.org/docs/messages/css-npm
  Location: node_modules/antd/lib/button/style/index.js
  ```

  we unsuccessfully tried this to resolved it: https://github.com/elado/next-with-less/issues/6#issuecomment-850054091

- in a more classic React env (without Next.js, custom webpack config): We manage to customize antd, but couldn't reproduce the problem. All styles are always loaded (this is expected as there is only one `.html` file)

- using another UI lib.

  - material-ui: The lib isn't close enough of `antd` use to be concluding (there is no global style)
  - bootstrap: The lib use `sass` to be customized. And We couldn't reproduce the problem. Styles are present in every page even is no classes are used.

- [WORKING] build antd css file including overrides using a `.less` file using `lessc` command as a package.json script

## Troubleshooting with routing

> currently I didn't manage to reproduce the behavior that's currently on the BO. A new instance of the page (component) is re-render at each page change / navigation, so the react state is lost, componentDidMount / useEffect are re-trigger etc...

> I find a hack, but I do not think it will cover our use case [check here](https://github.com/violaine-alltricks/poc-next/commit/5e3451d6a96c69544e35c9e44c1b94eb95bf079f)

For routing as currently in `/menu`, `/menu/add`, `/menu/edit/:id` (similar to `ProductOfferPrice`), we could try using [layout persistence](https://dev.to/ozanbolel/layout-persistence-in-next-js-107g), or maybe refactoring the components using query string instead of params. This way we might be able to use [`shallow-rendering`](https://github.com/vercel/next.js/tree/canary/examples/with-shallow-routing)

Interesting article about NextJS client-side routing : https://www.smashingmagazine.com/2021/06/client-side-routing-next-js/
