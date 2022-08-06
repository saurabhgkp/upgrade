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
  console.log(data.Data[0].id, "=======");
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "section",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container m-5",
        children: Object.keys(data.Data).map(function (item) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [console.log(id), item.id ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-6 col-md-4 col-xl-3 col-xxl-2",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "app-card app-card-doc shadow-sm h-100",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "app-card-thumb-holder p-3",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    className: "icon-holder",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                      className: "fas fa-file-pdf pdf-file"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 21,
                      columnNumber: 49
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 20,
                    columnNumber: 45
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    className: "app-card-link-mask",
                    href: "#file-link"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 23,
                    columnNumber: 45
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 19,
                  columnNumber: 41
                }, _this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  className: "thumb-image",
                  src: item.Image,
                  alt: ""
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 24,
                  columnNumber: 48
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "app-card-body p-3 has-card-actions",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                    className: "product-name",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "#",
                      children: [data[item].Name, " "]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 30,
                      columnNumber: 74
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 30,
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
                            lineNumber: 34,
                            columnNumber: 102
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 34,
                          columnNumber: 58
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 34,
                        columnNumber: 53
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                        children: ["  ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                          className: "product-price",
                          children: ["\u20B9", data[item].Price, " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("del", {
                            className: "",
                            children: ["\u20B9", data[item].OldPrice]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 36,
                            columnNumber: 109
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 36,
                          columnNumber: 59
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 36,
                        columnNumber: 53
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                        children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                          className: "primary-btn cta-btn",
                          href: "#tab1",
                          children: "Shop now"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 38,
                          columnNumber: 58
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 38,
                        columnNumber: 53
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 33,
                      columnNumber: 49
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 32,
                    columnNumber: 45
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 29,
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
            }, _this) : ""]
          }, void 0, true, {
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
              lineNumber: 61,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 31
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
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
                      lineNumber: 68,
                      columnNumber: 45
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: "COMING"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 69,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 67,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 66,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                      children: "SOON"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 74,
                      columnNumber: 45
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: "SOON"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 75,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 73,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 72,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                className: "text-uppercase",
                children: "Powerfull Gaming CPU"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                className: "b"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 80,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: "primary-btn cta-btn",
                href: "#tab1",
                children: "WATING"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 81,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiRGF0YSIsImlkIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsIml0ZW0iLCJJbWFnZSIsIk5hbWUiLCJUaXRsZSIsIlByaWNlIiwiT2xkUHJpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBQ2UsU0FBU0EsSUFBVCxPQUF3QjtBQUFBOztBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTtBQUNuQ0MsU0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQUksQ0FBQ0csSUFBTCxDQUFVLENBQVYsRUFBYUMsRUFBekIsRUFBNkIsU0FBN0I7QUFDQSxzQkFDSTtBQUFBLDJCQUlJO0FBQUssZUFBUyxFQUFDLFNBQWY7QUFBQSw4QkFFSTtBQUFLLGlCQUFTLEVBQUMsZUFBZjtBQUFBLGtCQUNLQyxNQUFNLENBQUNDLElBQVAsQ0FBWU4sSUFBSSxDQUFDRyxJQUFqQixFQUF1QkksR0FBdkIsQ0FBMkIsVUFBQ0MsSUFBRCxFQUFVO0FBQ2xDLDhCQUFRO0FBQUEsdUJBQ0hQLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRSxFQUFaLENBREcsRUFFRkksSUFBSSxDQUFDSixFQUFOLGdCQUNHO0FBQUssdUJBQVMsRUFBQyxtQ0FBZjtBQUFBLHFDQUNJO0FBQUsseUJBQVMsRUFBQyx1Q0FBZjtBQUFBLHdDQUNJO0FBQUssMkJBQVMsRUFBQywyQkFBZjtBQUFBLDBDQUNJO0FBQU0sNkJBQVMsRUFBQyxhQUFoQjtBQUFBLDJDQUNJO0FBQUcsK0JBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURKLGVBSUk7QUFBRyw2QkFBUyxFQUFDLG9CQUFiO0FBQWtDLHdCQUFJLEVBQUM7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFKSjtBQUFBO0FBQUE7QUFBQTtB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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURKLGVBZUk7QUFBSSx5QkFBUyxFQUFDLGdCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQWZKLGVBZ0JJO0FBQUkseUJBQVMsRUFBQztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBaEJKLGVBaUJJO0FBQUcseUJBQVMsRUFBQyxxQkFBYjtBQUFtQyxvQkFBSSxFQUFDLE9BQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQWpCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FoREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkosbUJBREo7QUEwRkg7S0E1RnVCZCxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjY0NGRmMzllOWRkYzNmNjBmNzU2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBUaXRsZSBmcm9tICcuLi9jb21wb25lbnRzL1RpdGxlJ1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgZGF0YSB9KSB7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhLkRhdGFbMF0uaWQsIFwiPT09PT09PVwiKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbS01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge09iamVjdC5rZXlzKGRhdGEuRGF0YSkubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoPGRpdiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29uc29sZS5sb2coaWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhpdGVtLmlkKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNiBjb2wtbWQtNCBjb2wteGwtMyBjb2wteHhsLTJcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwLWNhcmQgYXBwLWNhcmQtZG9jIHNoYWRvdy1zbSBoLTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcHAtY2FyZC10aHVtYi1ob2xkZXIgcC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1ob2xkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWZpbGUtcGRmIHBkZi1maWxlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJhcHAtY2FyZC1saW5rLW1hc2tcIiBocmVmPVwiI2ZpbGUtbGlua1wiID48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRodW1iLWltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2l0ZW0uSW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcC1jYXJkLWJvZHkgcC0zIGhhcy1jYXJkLWFjdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwicHJvZHVjdC1uYW1lXCI+PGEgaHJlZj1cIiNcIj57ZGF0YVtpdGVtXS5OYW1lfSA8L2E+PC9oMz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcHAtZG9jLW1ldGFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtdW5zdHlsZWQgbWItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPiA8aDQgY2xhc3NOYW1lPVwiYXBwLWRvYy10aXRsZSB0cnVuY2F0ZSBtYi0wXCI+PGEgaHJlZj1cIiNmaWxlLWxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YVtpdGVtXS5UaXRsZX08L2E+PC9oND48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPiAgPGg0IGNsYXNzTmFtZT1cInByb2R1Y3QtcHJpY2VcIj7igrl7ZGF0YVtpdGVtXS5QcmljZX0gPGRlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlwiPuKCuXtkYXRhW2l0ZW1dLk9sZFByaWNlfTwvZGVsPjwvaDQ+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT4gPGEgY2xhc3NOYW1lPVwicHJpbWFyeS1idG4gY3RhLWJ0blwiIGhyZWY9XCIjdGFiMVwiPlNob3Agbm93PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwifVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IG1sLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1nLXJlc3BvbnNpdmVcIiBzcmM9XCIuL2ltZy9jYWJuZXR3LmpwZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PjxiciAvPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTYgbXQtNScgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3QtZGVhbCBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiaG90LWRlYWwtY291bnRkb3duXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkNPTUlORzwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Q09NSU5HPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlNPT048L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlNPT048L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXVwcGVyY2FzZVwiPlBvd2VyZnVsbCBHYW1pbmcgQ1BVPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiYlwiPjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicHJpbWFyeS1idG4gY3RhLWJ0blwiIGhyZWY9XCIjdGFiMVwiPldBVElORzwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwczovL3Bjb2xvZ3ktYXBpLmhlcm9rdWFwcC5jb20vZ29vZ2xlU2hlZXQvZ2V0QWxsRGF0YVwiKVxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgZGF0YVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9