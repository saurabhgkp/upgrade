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
  console.log(data.data);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "section",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container m-5",
        children: Object.keys(data).map(function (item) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: data[item].id ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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
                      lineNumber: 20,
                      columnNumber: 49
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 19,
                    columnNumber: 45
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    className: "app-card-link-mask",
                    href: "#file-link"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 22,
                    columnNumber: 45
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 18,
                  columnNumber: 41
                }, _this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  className: "thumb-image",
                  src: data[item].Image,
                  alt: ""
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 23,
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
                      lineNumber: 29,
                      columnNumber: 74
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 29,
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
                            lineNumber: 33,
                            columnNumber: 102
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 33,
                          columnNumber: 58
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 33,
                        columnNumber: 53
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                        children: ["  ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                          className: "product-price",
                          children: ["\u20B9", data[item].Price, " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("del", {
                            className: "",
                            children: ["\u20B9", data[item].OldPrice]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 35,
                            columnNumber: 109
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 35,
                          columnNumber: 59
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 35,
                        columnNumber: 53
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                        children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                          className: "primary-btn cta-btn",
                          href: "#tab1",
                          children: "Shop now"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 37,
                          columnNumber: 58
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 37,
                        columnNumber: 53
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 32,
                      columnNumber: 49
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 31,
                    columnNumber: 45
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 28,
                  columnNumber: 41
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 17,
                columnNumber: 37
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 33
            }, _this) : ""
          }, void 0, false, {
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
              lineNumber: 60,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 31
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
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
                      lineNumber: 67,
                      columnNumber: 45
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: "COMING"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 68,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 66,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 65,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                      children: "SOON"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 73,
                      columnNumber: 45
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: "SOON"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 74,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 72,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 71,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                className: "text-uppercase",
                children: "Powerfull Gaming CPU"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 78,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                className: "b"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: "primary-btn cta-btn",
                href: "#tab1",
                children: "WATING"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 80,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsIml0ZW0iLCJpZCIsIkltYWdlIiwiTmFtZSIsIlRpdGxlIiwiUHJpY2UiLCJPbGRQcmljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFDZSxTQUFTQSxJQUFULE9BQXdCO0FBQUE7O0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFRO0FBQ25DQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBSSxDQUFDQSxJQUFqQjtBQUNBLHNCQUNJO0FBQUEsMkJBSUk7QUFBSyxlQUFTLEVBQUMsU0FBZjtBQUFBLDhCQUVJO0FBQUssaUJBQVMsRUFBQyxlQUFmO0FBQUEsa0JBQ0tHLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZSixJQUFaLEVBQWtCSyxHQUFsQixDQUFzQixVQUFDQyxJQUFELEVBQVU7QUFDN0IsOEJBQVE7QUFBQSxzQkFDRk4sSUFBSSxDQUFDTSxJQUFELENBQUosQ0FBV0MsRUFBWixnQkFDRztBQUFLLHVCQUFTLEVBQUMsbUNBQWY7QUFBQSxxQ0FDSTtBQUFLLHlCQUFTLEVBQUMsdUNBQWY7QUFBQSx3Q0FDSTtBQUFLLDJCQUFTLEVBQUMsMkJBQWY7QUFBQSwwQ0FDSTtBQUFNLDZCQUFTLEVBQUMsYUFBaEI7QUFBQSwyQ0FDSTtBQUFHLCtCQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFESixlQUlJO0FBQUcsNkJBQVMsRUFBQyxvQkFBYjtBQUFrQyx3QkFBSSxFQUFDO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURKLG9CQU1XO0FBQ0gsMkJBQVMsRUFBQyxhQURQO0FBRUgscUJBQUcsRUFBRVAsSUFBSSxDQUFDTSxJQUFE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QURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURKLGVBZUk7QUFBSSx5QkFBUyxFQUFDLGdCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQWZKLGVBZ0JJO0FBQUkseUJBQVMsRUFBQztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBaEJKLGVBaUJJO0FBQUcseUJBQVMsRUFBQyxxQkFBYjtBQUFtQyxvQkFBSSxFQUFDLE9BQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQWpCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0EvQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkosbUJBREo7QUF5Rkg7S0EzRnVCYixJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmUzYmEyNjMzYzdkMjg1MDdkOGFiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBUaXRsZSBmcm9tICcuLi9jb21wb25lbnRzL1RpdGxlJ1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgZGF0YSB9KSB7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhLmRhdGEpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb25cIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBtLTVcIj5cclxuICAgICAgICAgICAgICAgICAgICB7T2JqZWN0LmtleXMoZGF0YSkubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoPGRpdiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KGRhdGFbaXRlbV0uaWQpID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02IGNvbC1tZC00IGNvbC14bC0zIGNvbC14eGwtMlwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcHAtY2FyZCBhcHAtY2FyZC1kb2Mgc2hhZG93LXNtIGgtMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcC1jYXJkLXRodW1iLWhvbGRlciBwLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uLWhvbGRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtZmlsZS1wZGYgcGRmLWZpbGVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImFwcC1jYXJkLWxpbmstbWFza1wiIGhyZWY9XCIjZmlsZS1saW5rXCIgPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGh1bWItaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17ZGF0YVtpdGVtXS5JbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwLWNhcmQtYm9keSBwLTMgaGFzLWNhcmQtYWN0aW9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwcm9kdWN0LW5hbWVcIj48YSBocmVmPVwiI1wiPntkYXRhW2l0ZW1dLk5hbWV9IDwvYT48L2gzPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcC1kb2MtbWV0YVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC11bnN0eWxlZCBtYi0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+IDxoNCBjbGFzc05hbWU9XCJhcHAtZG9jLXRpdGxlIHRydW5jYXRlIG1iLTBcIj48YSBocmVmPVwiI2ZpbGUtbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhW2l0ZW1dLlRpdGxlfTwvYT48L2g0PjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+ICA8aDQgY2xhc3NOYW1lPVwicHJvZHVjdC1wcmljZVwiPuKCuXtkYXRhW2l0ZW1dLlByaWNlfSA8ZGVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiXCI+4oK5e2RhdGFbaXRlbV0uT2xkUHJpY2V9PC9kZWw+PC9oND48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPiA8YSBjbGFzc05hbWU9XCJwcmltYXJ5LWJ0biBjdGEtYnRuXCIgaHJlZj1cIiN0YWIxXCI+U2hvcCBub3c8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJ9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgbWwtMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWctcmVzcG9uc2l2ZVwiIHNyYz1cIi4vaW1nL2NhYm5ldHcuanBnXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+PGJyIC8+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtNiBtdC01JyA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvdC1kZWFsIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJob3QtZGVhbC1jb3VudGRvd25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+Q09NSU5HPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5DT01JTkc8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+U09PTjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+U09PTjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtdXBwZXJjYXNlXCI+UG93ZXJmdWxsIEdhbWluZyBDUFU8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJiXCI+PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJwcmltYXJ5LWJ0biBjdGEtYnRuXCIgaHJlZj1cIiN0YWIxXCI+V0FUSU5HPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vcGNvbG9neS1hcGkuaGVyb2t1YXBwLmNvbS9nb29nbGVTaGVldC9nZXRBbGxEYXRhXCIpXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBkYXRhXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=