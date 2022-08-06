webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Title */ "./components/Title.js");


var _jsxFileName = "C:\\Users\\ssgkp\\Desktop\\upgrade\\pages\\index.js";


var __N_SSG = true;
function Home(_ref) {
  var _this = this;

  var data = _ref.data;
  //console.log(data.Data, "=======");
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "section",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container m-3",
        children: Object.keys(data).map(function (item, i) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: data[item].Image ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-6 col-md-4 col-xl-3 col-xxl-2",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "app-card app-card-doc shadow-sm h-100",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  className: "thumb-image",
                  src: data[item].Image,
                  alt: ""
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 19,
                  columnNumber: 41
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "app-card-body p-1 has-card-actions",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                    className: "product-name",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "#",
                      children: [data[item].Name, " "]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 25,
                      columnNumber: 74
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 25,
                    columnNumber: 45
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "app-doc-meta",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                      className: "list-unstyled mb-0",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                        children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                          className: "app-doc-title truncate mb-0",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                            href: "#file-link",
                            children: data[item].Title
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 28,
                            columnNumber: 102
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 28,
                          columnNumber: 58
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 28,
                        columnNumber: 53
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                        children: ["  ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                          className: "product-price",
                          children: ["\u20B9", data[item].Price, " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("del", {
                            className: "",
                            children: ["\u20B9", data[item].OldPrice]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 30,
                            columnNumber: 109
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 30,
                          columnNumber: 59
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 30,
                        columnNumber: 53
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                        children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                          className: "primary-btn cta-btn",
                          href: "#tab1",
                          children: "Shop now"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 32,
                          columnNumber: 58
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 32,
                        columnNumber: 53
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 27,
                      columnNumber: 49
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 26,
                    columnNumber: 45
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 24,
                  columnNumber: 41
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 18,
                columnNumber: 37
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 17,
              columnNumber: 33
            }, _this) : ""
          }, i, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 33
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row ",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-md-6 ml-0",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: "img-responsive",
              src: "./img/cabnetw.jpg",
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 31
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 37
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-md-6 mt-5",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "hot-deal ",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                className: "hot-deal-countdown",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                      children: "COMING"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 53,
                      columnNumber: 45
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: "COMING"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 54,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 52,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 51,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                      children: "SOON"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 59,
                      columnNumber: 45
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: "SOON"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 60,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 58,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 57,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 50,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                className: "text-uppercase",
                children: "Powerfull Gaming CPU"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                className: "b"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: "primary-btn cta-btn",
                href: "#tab1",
                children: "WATING"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, this)
  }, void 0, false);
}
_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImRhdGEiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwiaXRlbSIsImkiLCJJbWFnZSIsIk5hbWUiLCJUaXRsZSIsIlByaWNlIiwiT2xkUHJpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBQ2UsU0FBU0EsSUFBVCxPQUF3QjtBQUFBOztBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTtBQUNuQztBQUNBLHNCQUNJO0FBQUEsMkJBSUk7QUFBSyxlQUFTLEVBQUMsU0FBZjtBQUFBLDhCQUVJO0FBQUssaUJBQVMsRUFBQyxlQUFmO0FBQUEsa0JBQ0tDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZRixJQUFaLEVBQWtCRyxHQUFsQixDQUFzQixVQUFDQyxJQUFELEVBQU9DLENBQVAsRUFBYTtBQUNoQyw4QkFBUTtBQUFBLHNCQUVGTCxJQUFJLENBQUNJLElBQUQsQ0FBSixDQUFXRSxLQUFaLGdCQUNHO0FBQUssdUJBQVMsRUFBQyxtQ0FBZjtBQUFBLHFDQUNJO0FBQUsseUJBQVMsRUFBQyx1Q0FBZjtBQUFBLHdDQUNJO0FBQ0ksMkJBQVMsRUFBQyxhQURkO0FBRUkscUJBQUcsRUFBRU4sSUFBSSxDQUFDSSxJQUFELENBQUosQ0FBV0UsS0FGcEI7QUFHSSxxQkFBRyxFQUFDO0FBSFI7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFESixlQU1JO0FBQUssMkJBQVMsRUFBQyxvQ0FBZjtBQUFBLDBDQUNJO0FBQUksNkJBQVMsRUFBQyxjQUFkO0FBQUEsMkNBQTZCO0FBQUcsMEJBQUksRUFBQyxHQUFSO0FBQUEsaUNBQWFOLElBQUksQ0FBQ0ksSUFBRCxDQUFKLENBQVdHLElBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURKLGVBRUk7QUFBSyw2QkFBUyxFQUFDLGNBQWY7QUFBQSwyQ0FDSTtB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O0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FqQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkosbUJBREo7QUEyRUg7S0E3RXVCTixJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmRkMjEzMmU3ZGI1OTAyMWE3MDNkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBUaXRsZSBmcm9tICcuLi9jb21wb25lbnRzL1RpdGxlJ1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgZGF0YSB9KSB7XHJcbiAgICAvL2NvbnNvbGUubG9nKGRhdGEuRGF0YSwgXCI9PT09PT09XCIpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb25cIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBtLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICB7T2JqZWN0LmtleXMoZGF0YSkubWFwKChpdGVtLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoPGRpdiBrZXk9e2l9ID5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KGRhdGFbaXRlbV0uSW1hZ2UpID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02IGNvbC1tZC00IGNvbC14bC0zIGNvbC14eGwtMlwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcHAtY2FyZCBhcHAtY2FyZC1kb2Mgc2hhZG93LXNtIGgtMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGh1bWItaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17ZGF0YVtpdGVtXS5JbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwLWNhcmQtYm9keSBwLTEgaGFzLWNhcmQtYWN0aW9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwcm9kdWN0LW5hbWVcIj48YSBocmVmPVwiI1wiPntkYXRhW2l0ZW1dLk5hbWV9IDwvYT48L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwLWRvYy1tZXRhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LXVuc3R5bGVkIG1iLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT4gPGg0IGNsYXNzTmFtZT1cImFwcC1kb2MtdGl0bGUgdHJ1bmNhdGUgbWItMFwiPjxhIGhyZWY9XCIjZmlsZS1saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGFbaXRlbV0uVGl0bGV9PC9hPjwvaDQ+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT4gIDxoNCBjbGFzc05hbWU9XCJwcm9kdWN0LXByaWNlXCI+4oK5e2RhdGFbaXRlbV0uUHJpY2V9IDxkZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJcIj7igrl7ZGF0YVtpdGVtXS5PbGRQcmljZX08L2RlbD48L2g0PjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+IDxhIGNsYXNzTmFtZT1cInByaW1hcnktYnRuIGN0YS1idG5cIiBocmVmPVwiI3RhYjFcIj5TaG9wIG5vdzwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBtbC0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZy1yZXNwb25zaXZlXCIgc3JjPVwiLi9pbWcvY2FibmV0dy5qcGdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj48YnIgLz48YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1tZC02IG10LTUnID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG90LWRlYWwgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImhvdC1kZWFsLWNvdW50ZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5DT01JTkc8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkNPTUlORzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5TT09OPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5TT09OPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC11cHBlcmNhc2VcIj5Qb3dlcmZ1bGwgR2FtaW5nIENQVTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImJcIj48L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInByaW1hcnktYnRuIGN0YS1idG5cIiBocmVmPVwiI3RhYjFcIj5XQVRJTkc8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9wY29sb2d5LWFwaS5oZXJva3VhcHAuY29tL2dvb2dsZVNoZWV0L2dldEFsbERhdGFcIilcclxuICAgIGNvbnN0IGEgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgICBjb25zdCBkYXRhID0gYS5EYXRhXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBkYXRhXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=