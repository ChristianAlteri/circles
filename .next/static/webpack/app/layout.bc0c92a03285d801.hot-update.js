"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"9b2d0813a3b8\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzPzA4NGYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCI5YjJkMDgxM2EzYjhcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/components/Map.tsx":
/*!********************************!*\
  !*** ./app/components/Map.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet */ \"(app-pages-browser)/./node_modules/leaflet/dist/leaflet-src.js\");\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-leaflet */ \"(app-pages-browser)/./node_modules/react-leaflet/lib/MapContainer.js\");\n/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet/dist/leaflet.css */ \"(app-pages-browser)/./node_modules/leaflet/dist/leaflet.css\");\n/* harmony import */ var leaflet_dist_images_marker_icon_2x_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! leaflet/dist/images/marker-icon-2x.png */ \"(app-pages-browser)/./node_modules/leaflet/dist/images/marker-icon-2x.png\");\n/* harmony import */ var leaflet_dist_images_marker_icon_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! leaflet/dist/images/marker-icon.png */ \"(app-pages-browser)/./node_modules/leaflet/dist/images/marker-icon.png\");\n/* harmony import */ var leaflet_dist_images_marker_shadow_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! leaflet/dist/images/marker-shadow.png */ \"(app-pages-browser)/./node_modules/leaflet/dist/images/marker-shadow.png\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n\n\n// @ts-ignore\ndelete (leaflet__WEBPACK_IMPORTED_MODULE_1___default().Icon).Default.prototype._getIconUrl;\nleaflet__WEBPACK_IMPORTED_MODULE_1___default().Icon.Default.mergeOptions({\n    iconUrl: leaflet_dist_images_marker_icon_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"].src,\n    iconRetinaUrl: leaflet_dist_images_marker_icon_2x_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"].src,\n    shadowUrl: leaflet_dist_images_marker_shadow_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"].src\n});\nconst Map = (param)=>{\n    let { center } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_6__.MapContainer, {\n        center: center || [\n            51,\n            -0.09\n        ],\n        zoom: center ? 4 : 2,\n        scrollWheelZoom: false,\n        className: \"h-[35vh] rounded-lg\"\n    }, void 0, false, {\n        fileName: \"/Users/christian/Code/Circles-demo-shop/app/components/Map.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Map;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Map);\nvar _c;\n$RefreshReg$(_c, \"Map\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL01hcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUV1QjtBQUN3QztBQUU5QjtBQUNpQztBQUNMO0FBQ0k7QUFHakUsYUFBYTtBQUNiLE9BQU9BLHFEQUFNLENBQUNNLE9BQU8sQ0FBQ0MsU0FBUyxDQUFDQyxXQUFXO0FBQzNDUixtREFBTSxDQUFDTSxPQUFPLENBQUNHLFlBQVksQ0FBQztJQUN4QkMsU0FBU1AsMkVBQVVBLENBQUNRLEdBQUc7SUFDdkJDLGVBQWVWLDhFQUFZQSxDQUFDUyxHQUFHO0lBQy9CRSxXQUFXVCw2RUFBWUEsQ0FBQ08sR0FBRztBQUMvQjtBQU1BLE1BQU1HLE1BQTBCO1FBQUMsRUFDN0JDLE1BQU0sRUFDVDtJQUNHLHFCQUNBLDhEQUFDZCx1REFBWUE7UUFDYmMsUUFBUUEsVUFBZ0M7WUFBQztZQUFJLENBQUM7U0FBSztRQUNuREMsTUFBTUQsU0FBUyxJQUFJO1FBQ25CRSxpQkFBaUI7UUFDakJDLFdBQVU7Ozs7OztBQUtkO0tBYk1KO0FBZU4sK0RBQWVBLEdBQUdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvTWFwLnRzeD9jYzAzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQgTCBmcm9tICdsZWFmbGV0J1xuaW1wb3J0IHsgTWFwQ29udGFpbmVyLCBUaWxlTGF5ZXIsIE1hcmtlciB9IGZyb20gJ3JlYWN0LWxlYWZsZXQnXG5cbmltcG9ydCAnbGVhZmxldC9kaXN0L2xlYWZsZXQuY3NzJ1xuaW1wb3J0IG1hcmtlckljb24yeCBmcm9tICdsZWFmbGV0L2Rpc3QvaW1hZ2VzL21hcmtlci1pY29uLTJ4LnBuZyc7XG5pbXBvcnQgbWFya2VySWNvbiBmcm9tICdsZWFmbGV0L2Rpc3QvaW1hZ2VzL21hcmtlci1pY29uLnBuZyc7XG5pbXBvcnQgbWFya2VyU2hhZG93IGZyb20gJ2xlYWZsZXQvZGlzdC9pbWFnZXMvbWFya2VyLXNoYWRvdy5wbmcnO1xuXG5cbi8vIEB0cy1pZ25vcmVcbmRlbGV0ZSBMLkljb24uRGVmYXVsdC5wcm90b3R5cGUuX2dldEljb25Vcmw7XG5MLkljb24uRGVmYXVsdC5tZXJnZU9wdGlvbnMoe1xuICAgIGljb25Vcmw6IG1hcmtlckljb24uc3JjLFxuICAgIGljb25SZXRpbmFVcmw6IG1hcmtlckljb24yeC5zcmMsXG4gICAgc2hhZG93VXJsOiBtYXJrZXJTaGFkb3cuc3JjLFxufSk7XG5cbmludGVyZmFjZSBNYXBQcm9wcyB7XG4gICAgY2VudGVyPzogbnVtYmVyW107XG59XG5cbmNvbnN0IE1hcDogUmVhY3QuRkM8TWFwUHJvcHM+ID0gKHtcbiAgICBjZW50ZXJcbn0pID0+IHtcbiAgICByZXR1cm4gKCBcbiAgICA8TWFwQ29udGFpbmVyXG4gICAgY2VudGVyPXtjZW50ZXIgYXMgTC5MYXRMbmdFeHByZXNzaW9uIHx8IFs1MSwgLTAuMDldfVxuICAgIHpvb209e2NlbnRlciA/IDQgOiAyfVxuICAgIHNjcm9sbFdoZWVsWm9vbT17ZmFsc2V9XG4gICAgY2xhc3NOYW1lPSdoLVszNXZoXSByb3VuZGVkLWxnJ1xuICAgID5cbiAgICAgICAgXG4gICAgICAgIFxuICAgIDwvTWFwQ29udGFpbmVyPiApO1xufVxuIFxuZXhwb3J0IGRlZmF1bHQgTWFwOyJdLCJuYW1lcyI6WyJMIiwiTWFwQ29udGFpbmVyIiwibWFya2VySWNvbjJ4IiwibWFya2VySWNvbiIsIm1hcmtlclNoYWRvdyIsIkljb24iLCJEZWZhdWx0IiwicHJvdG90eXBlIiwiX2dldEljb25VcmwiLCJtZXJnZU9wdGlvbnMiLCJpY29uVXJsIiwic3JjIiwiaWNvblJldGluYVVybCIsInNoYWRvd1VybCIsIk1hcCIsImNlbnRlciIsInpvb20iLCJzY3JvbGxXaGVlbFpvb20iLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Map.tsx\n"));

/***/ })

});