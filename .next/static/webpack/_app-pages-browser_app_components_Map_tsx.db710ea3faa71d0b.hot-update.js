"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("_app-pages-browser_app_components_Map_tsx",{

/***/ "(app-pages-browser)/./app/components/Map.tsx":
/*!********************************!*\
  !*** ./app/components/Map.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet */ \"(app-pages-browser)/./node_modules/leaflet/dist/leaflet-src.js\");\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-leaflet */ \"(app-pages-browser)/./node_modules/react-leaflet/lib/MapContainer.js\");\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-leaflet */ \"(app-pages-browser)/./node_modules/react-leaflet/lib/TileLayer.js\");\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-leaflet */ \"(app-pages-browser)/./node_modules/react-leaflet/lib/Marker.js\");\n/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet/dist/leaflet.css */ \"(app-pages-browser)/./node_modules/leaflet/dist/leaflet.css\");\n/* harmony import */ var leaflet_dist_images_marker_icon_2x_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! leaflet/dist/images/marker-icon-2x.png */ \"(app-pages-browser)/./node_modules/leaflet/dist/images/marker-icon-2x.png\");\n/* harmony import */ var leaflet_dist_images_marker_icon_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! leaflet/dist/images/marker-icon.png */ \"(app-pages-browser)/./node_modules/leaflet/dist/images/marker-icon.png\");\n/* harmony import */ var leaflet_dist_images_marker_shadow_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! leaflet/dist/images/marker-shadow.png */ \"(app-pages-browser)/./node_modules/leaflet/dist/images/marker-shadow.png\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n\n\n// @ts-ignore\ndelete (leaflet__WEBPACK_IMPORTED_MODULE_1___default().Icon).Default.prototype._getIconUrl;\nleaflet__WEBPACK_IMPORTED_MODULE_1___default().Icon.Default.mergeOptions({\n    iconUrl: leaflet_dist_images_marker_icon_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"].src,\n    iconRetinaUrl: leaflet_dist_images_marker_icon_2x_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"].src,\n    shadowUrl: leaflet_dist_images_marker_shadow_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"].src\n});\nconst Map = (param)=>{\n    let { center } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_6__.MapContainer, {\n        center: center || [\n            51,\n            -0.09\n        ],\n        zoom: center ? 4 : 2,\n        scrollWheelZoom: false,\n        className: \"h-[35vh] rounded-lg\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_7__.TileLayer, {\n                attribution: '\\xa9 <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors',\n                url: \"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png\"\n            }, void 0, false, {\n                fileName: \"/Users/christian/Code/Circles-demo-shop/app/components/Map.tsx\",\n                lineNumber: 34,\n                columnNumber: 5\n            }, undefined),\n            center && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_8__.Marker, {\n                position: center\n            }, void 0, false, {\n                fileName: \"/Users/christian/Code/Circles-demo-shop/app/components/Map.tsx\",\n                lineNumber: 39,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/christian/Code/Circles-demo-shop/app/components/Map.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Map;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Map);\nvar _c;\n$RefreshReg$(_c, \"Map\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL01hcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRXVCO0FBQ3dDO0FBRTlCO0FBQ2lDO0FBQ0w7QUFDSTtBQUdqRSxhQUFhO0FBQ2IsT0FBT0EscURBQU0sQ0FBQ1EsT0FBTyxDQUFDQyxTQUFTLENBQUNDLFdBQVc7QUFDM0NWLG1EQUFNLENBQUNRLE9BQU8sQ0FBQ0csWUFBWSxDQUFDO0lBQ3hCQyxTQUFTUCwyRUFBVUEsQ0FBQ1EsR0FBRztJQUN2QkMsZUFBZVYsOEVBQVlBLENBQUNTLEdBQUc7SUFDL0JFLFdBQVdULDZFQUFZQSxDQUFDTyxHQUFHO0FBQy9CO0FBTUEsTUFBTUcsTUFBMEI7UUFBQyxFQUM3QkMsTUFBTSxFQUNUO0lBQ0cscUJBQ0EsOERBQUNoQix1REFBWUE7UUFDYmdCLFFBQVFBLFVBQWdDO1lBQUM7WUFBSSxDQUFDO1NBQUs7UUFDbkRDLE1BQU1ELFNBQVMsSUFBSTtRQUNuQkUsaUJBQWlCO1FBQ2pCQyxXQUFVOzswQkFFViw4REFBQ2xCLG9EQUFTQTtnQkFDUm1CLGFBQVk7Z0JBQ1pDLEtBQUk7Ozs7OztZQUVMTCx3QkFDRyw4REFBQ2QsaURBQU1BO2dCQUNQb0IsVUFBVU47Ozs7Ozs7Ozs7OztBQUlsQjtLQXBCTUQ7QUFzQk4sK0RBQWVBLEdBQUdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvTWFwLnRzeD9jYzAzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQgTCBmcm9tICdsZWFmbGV0J1xuaW1wb3J0IHsgTWFwQ29udGFpbmVyLCBUaWxlTGF5ZXIsIE1hcmtlciB9IGZyb20gJ3JlYWN0LWxlYWZsZXQnXG5cbmltcG9ydCAnbGVhZmxldC9kaXN0L2xlYWZsZXQuY3NzJ1xuaW1wb3J0IG1hcmtlckljb24yeCBmcm9tICdsZWFmbGV0L2Rpc3QvaW1hZ2VzL21hcmtlci1pY29uLTJ4LnBuZyc7XG5pbXBvcnQgbWFya2VySWNvbiBmcm9tICdsZWFmbGV0L2Rpc3QvaW1hZ2VzL21hcmtlci1pY29uLnBuZyc7XG5pbXBvcnQgbWFya2VyU2hhZG93IGZyb20gJ2xlYWZsZXQvZGlzdC9pbWFnZXMvbWFya2VyLXNoYWRvdy5wbmcnO1xuXG5cbi8vIEB0cy1pZ25vcmVcbmRlbGV0ZSBMLkljb24uRGVmYXVsdC5wcm90b3R5cGUuX2dldEljb25Vcmw7XG5MLkljb24uRGVmYXVsdC5tZXJnZU9wdGlvbnMoe1xuICAgIGljb25Vcmw6IG1hcmtlckljb24uc3JjLFxuICAgIGljb25SZXRpbmFVcmw6IG1hcmtlckljb24yeC5zcmMsXG4gICAgc2hhZG93VXJsOiBtYXJrZXJTaGFkb3cuc3JjLFxufSk7XG5cbmludGVyZmFjZSBNYXBQcm9wcyB7XG4gICAgY2VudGVyPzogbnVtYmVyW107XG59XG5cbmNvbnN0IE1hcDogUmVhY3QuRkM8TWFwUHJvcHM+ID0gKHtcbiAgICBjZW50ZXJcbn0pID0+IHtcbiAgICByZXR1cm4gKCBcbiAgICA8TWFwQ29udGFpbmVyXG4gICAgY2VudGVyPXtjZW50ZXIgYXMgTC5MYXRMbmdFeHByZXNzaW9uIHx8IFs1MSwgLTAuMDldfVxuICAgIHpvb209e2NlbnRlciA/IDQgOiAyfVxuICAgIHNjcm9sbFdoZWVsWm9vbT17ZmFsc2V9XG4gICAgY2xhc3NOYW1lPSdoLVszNXZoXSByb3VuZGVkLWxnJ1xuICAgID5cbiAgICA8VGlsZUxheWVyXG4gICAgICBhdHRyaWJ1dGlvbj0nJmNvcHk7IDxhIGhyZWY9XCJodHRwczovL3d3dy5vcGVuc3RyZWV0bWFwLm9yZy9jb3B5cmlnaHRcIj5PcGVuU3RyZWV0TWFwPC9hPiBjb250cmlidXRvcnMnXG4gICAgICB1cmw9XCJodHRwczovL3tzfS50aWxlLm9wZW5zdHJlZXRtYXAub3JnL3t6fS97eH0ve3l9LnBuZ1wiXG4gICAgLz5cbiAgICB7Y2VudGVyICYmIChcbiAgICAgICAgPE1hcmtlciBcbiAgICAgICAgcG9zaXRpb249e2NlbnRlciBhcyBMLkxhdExuZ0V4cHJlc3Npb259XG4gICAgLz5cbiAgICApfVxuICAgIDwvTWFwQ29udGFpbmVyPiApO1xufVxuIFxuZXhwb3J0IGRlZmF1bHQgTWFwOyJdLCJuYW1lcyI6WyJMIiwiTWFwQ29udGFpbmVyIiwiVGlsZUxheWVyIiwiTWFya2VyIiwibWFya2VySWNvbjJ4IiwibWFya2VySWNvbiIsIm1hcmtlclNoYWRvdyIsIkljb24iLCJEZWZhdWx0IiwicHJvdG90eXBlIiwiX2dldEljb25VcmwiLCJtZXJnZU9wdGlvbnMiLCJpY29uVXJsIiwic3JjIiwiaWNvblJldGluYVVybCIsInNoYWRvd1VybCIsIk1hcCIsImNlbnRlciIsInpvb20iLCJzY3JvbGxXaGVlbFpvb20iLCJjbGFzc05hbWUiLCJhdHRyaWJ1dGlvbiIsInVybCIsInBvc2l0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Map.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./node_modules/react-leaflet/lib/Marker.js":
/*!**************************************************!*\
  !*** ./node_modules/react-leaflet/lib/Marker.js ***!
  \**************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Marker: function() { return /* binding */ Marker; }\n/* harmony export */ });\n/* harmony import */ var _react_leaflet_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-leaflet/core */ \"(app-pages-browser)/./node_modules/@react-leaflet/core/lib/generic.js\");\n/* harmony import */ var _react_leaflet_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-leaflet/core */ \"(app-pages-browser)/./node_modules/@react-leaflet/core/lib/element.js\");\n/* harmony import */ var _react_leaflet_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-leaflet/core */ \"(app-pages-browser)/./node_modules/@react-leaflet/core/lib/context.js\");\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ \"(app-pages-browser)/./node_modules/leaflet/dist/leaflet-src.js\");\n\n\nconst Marker = (0,_react_leaflet_core__WEBPACK_IMPORTED_MODULE_1__.createLayerComponent)(function createMarker({ position , ...options }, ctx) {\n    const marker = new leaflet__WEBPACK_IMPORTED_MODULE_0__.Marker(position, options);\n    return (0,_react_leaflet_core__WEBPACK_IMPORTED_MODULE_2__.createElementObject)(marker, (0,_react_leaflet_core__WEBPACK_IMPORTED_MODULE_3__.extendContext)(ctx, {\n        overlayContainer: marker\n    }));\n}, function updateMarker(marker, props, prevProps) {\n    if (props.position !== prevProps.position) {\n        marker.setLatLng(props.position);\n    }\n    if (props.icon != null && props.icon !== prevProps.icon) {\n        marker.setIcon(props.icon);\n    }\n    if (props.zIndexOffset != null && props.zIndexOffset !== prevProps.zIndexOffset) {\n        marker.setZIndexOffset(props.zIndexOffset);\n    }\n    if (props.opacity != null && props.opacity !== prevProps.opacity) {\n        marker.setOpacity(props.opacity);\n    }\n    if (marker.dragging != null && props.draggable !== prevProps.draggable) {\n        if (props.draggable === true) {\n            marker.dragging.enable();\n        } else {\n            marker.dragging.disable();\n        }\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9yZWFjdC1sZWFmbGV0L2xpYi9NYXJrZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBK0Y7QUFDN0M7QUFDM0MsZUFBZSx5RUFBb0IseUJBQXlCLHVCQUF1QjtBQUMxRix1QkFBdUIsMkNBQWE7QUFDcEMsV0FBVyx3RUFBbUIsU0FBUyxrRUFBYTtBQUNwRDtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWxlYWZsZXQvbGliL01hcmtlci5qcz9kYjk2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUVsZW1lbnRPYmplY3QsIGNyZWF0ZUxheWVyQ29tcG9uZW50LCBleHRlbmRDb250ZXh0IH0gZnJvbSAnQHJlYWN0LWxlYWZsZXQvY29yZSc7XG5pbXBvcnQgeyBNYXJrZXIgYXMgTGVhZmxldE1hcmtlciB9IGZyb20gJ2xlYWZsZXQnO1xuZXhwb3J0IGNvbnN0IE1hcmtlciA9IGNyZWF0ZUxheWVyQ29tcG9uZW50KGZ1bmN0aW9uIGNyZWF0ZU1hcmtlcih7IHBvc2l0aW9uICwgLi4ub3B0aW9ucyB9LCBjdHgpIHtcbiAgICBjb25zdCBtYXJrZXIgPSBuZXcgTGVhZmxldE1hcmtlcihwb3NpdGlvbiwgb3B0aW9ucyk7XG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnRPYmplY3QobWFya2VyLCBleHRlbmRDb250ZXh0KGN0eCwge1xuICAgICAgICBvdmVybGF5Q29udGFpbmVyOiBtYXJrZXJcbiAgICB9KSk7XG59LCBmdW5jdGlvbiB1cGRhdGVNYXJrZXIobWFya2VyLCBwcm9wcywgcHJldlByb3BzKSB7XG4gICAgaWYgKHByb3BzLnBvc2l0aW9uICE9PSBwcmV2UHJvcHMucG9zaXRpb24pIHtcbiAgICAgICAgbWFya2VyLnNldExhdExuZyhwcm9wcy5wb3NpdGlvbik7XG4gICAgfVxuICAgIGlmIChwcm9wcy5pY29uICE9IG51bGwgJiYgcHJvcHMuaWNvbiAhPT0gcHJldlByb3BzLmljb24pIHtcbiAgICAgICAgbWFya2VyLnNldEljb24ocHJvcHMuaWNvbik7XG4gICAgfVxuICAgIGlmIChwcm9wcy56SW5kZXhPZmZzZXQgIT0gbnVsbCAmJiBwcm9wcy56SW5kZXhPZmZzZXQgIT09IHByZXZQcm9wcy56SW5kZXhPZmZzZXQpIHtcbiAgICAgICAgbWFya2VyLnNldFpJbmRleE9mZnNldChwcm9wcy56SW5kZXhPZmZzZXQpO1xuICAgIH1cbiAgICBpZiAocHJvcHMub3BhY2l0eSAhPSBudWxsICYmIHByb3BzLm9wYWNpdHkgIT09IHByZXZQcm9wcy5vcGFjaXR5KSB7XG4gICAgICAgIG1hcmtlci5zZXRPcGFjaXR5KHByb3BzLm9wYWNpdHkpO1xuICAgIH1cbiAgICBpZiAobWFya2VyLmRyYWdnaW5nICE9IG51bGwgJiYgcHJvcHMuZHJhZ2dhYmxlICE9PSBwcmV2UHJvcHMuZHJhZ2dhYmxlKSB7XG4gICAgICAgIGlmIChwcm9wcy5kcmFnZ2FibGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIG1hcmtlci5kcmFnZ2luZy5lbmFibGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1hcmtlci5kcmFnZ2luZy5kaXNhYmxlKCk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/react-leaflet/lib/Marker.js\n"));

/***/ })

});