
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 4376, hash: '555b6e6a97caa6009a03842eba8298c2090bd63856bfeb349e4ecc44af654fa6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1036, hash: 'e5a3d1c6687cde1a274620c939c7b846856cda147927f82ee47c41073f08a06d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 7668, hash: '9624aad97de9da73335b6b8373c17aa090f46d40d8239520e49b5da25df2f45e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-3G4MG5EE.css': {size: 22183, hash: 'pr6tvwBehnI', text: () => import('./assets-chunks/styles-3G4MG5EE_css.mjs').then(m => m.default)}
  },
};
