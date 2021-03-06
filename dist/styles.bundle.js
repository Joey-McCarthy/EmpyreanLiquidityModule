webpackJsonp(["styles"],{

/***/ "../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/styles.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--8-1!../node_modules/postcss-loader/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--8-1!../node_modules/postcss-loader/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Muli:400,700);", ""]);

// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n\nbody {\n    background:#e8e8e8;\n    font-family: 'Muli';\n    padding: 10px;\n}\n\nli{\n    padding:5px;\n    cursor: pointer;\n}\nli:hover{\n    background-color: #F6FFDE;\n}\n\n/*-----common css start-----*/\n.gc-theme-version {\n    position: absolute;\n    z-index: 2016;\n}\n\n.gc-grayArea {\n    background-color: #6a6a6a;\n}\n\n.gc-corner-hover {\n    background-color: #6a6a6a;\n}\n\n.gc-corner-selected {\n    background-color: #6a6a6a;\n}\n\n.gc-corner-normal {\n    background-color: #6a6a6a;\n}\n\n.gc-corner-triangle-normal {\n    background-color: #f0f0f0; /* For Chrome and Safari */ /* For old Fx (3.6 to 15) */ /* For pre-releases of IE 10*/ /* For old Opera (11.1 to 12.0) */\n    background-image: linear-gradient(to bottom, #f0f0f0, #f0f0f0); /* Standard syntax; must be last */\n    border-style: solid;\n    border-left-color: #999999 !important;\n    border-right-color: #d3d3d3 !important;\n    border-top-color: #9c9c9c !important;\n    border-bottom-color: #d2d2d2 !important;\n}\n\n.gc-corner-triangle-hover {\n    background-color: #ffffff; /* For Chrome and Safari */ /* For old Fx (3.6 to 15) */ /* For pre-releases of IE 10*/ /* For old Opera (11.1 to 12.0) */\n    background-image: linear-gradient(to bottom, #ffffff, #ffffff); /* Standard syntax; must be last */\n    border-style: solid;\n    border-left-color: #999999 !important;\n    border-right-color: #d3d3d3 !important;\n    border-top-color: #9c9c9c !important;\n    border-bottom-color: #d2d2d2 !important;\n}\n\n.gc-corner-triangle-selected {\n    background-color: #217346; /* For Chrome and Safari */ /* For old Fx (3.6 to 15) */ /* For pre-releases of IE 10*/ /* For old Opera (11.1 to 12.0) */\n    background-image: linear-gradient(to bottom, #217346, #217346); /* Standard syntax; must be last */\n    border-style: solid;\n    border-left-color: #999999 !important;\n    border-right-color: #d3d3d3 !important;\n    border-top-color: #9c9c9c !important;\n    border-bottom-color: #d2d2d2 !important;\n}\n\n.gc-columnHeader-normal {\n    color: #ffffff;\n    background-image: none;\n    background-color: #6a6a6a;\n    border-style: solid;\n    border-left-color: #9c9c9c !important;\n    border-right-color: #d2d2d2 !important;\n    border-bottom-color: #999999 !important;\n}\n\n.gc-columnHeader-hover {\n    color: #ffffff;\n    background-image: none;\n    background-color: #0a6332;\n    border-style: solid;\n    border-left-color: #9c9c9c !important;\n    border-right-color: #d2d2d2 !important;\n    border-bottom-color: #999999 !important;\n}\n\n.gc-columnHeader-selected {\n    color: #ffffff;\n    background-image: none;\n    background-color: #217346;\n    border-style: solid;\n    border-left-color: #9c9c9c !important;\n    border-right-color: #d2d2d2 !important;\n    border-bottom-color: #999999 !important;\n}\n\n.gc-columnHeader-highlight {\n    color: #ffffff;\n    background-image: none;\n    background-color: #262626;\n    border-style: solid;\n    border-left-color: #9c9c9c !important;\n    border-right-color: #d2d2d2 !important;\n    border-bottom-color: #999999 !important;\n}\n\n.gc-rowHeader-normal {\n    color: #ffffff;\n    background-color: #6a6a6a;\n    background-image: none;\n    border-style: solid;\n    border-top-color: #9c9c9c !important;\n    border-bottom-color: #d2d2d2 !important;\n    border-right-color: #999999 !important;\n}\n\n.gc-rowHeader-hover {\n    color: #ffffff;\n    background-color: #0a6332;\n    background-image: none;\n    border-style: solid;\n    border-top-color: #9c9c9c !important;\n    border-bottom-color: #d2d2d2 !important;\n    border-right-color: #999999 !important;\n}\n\n.gc-rowHeader-selected {\n    color: #ffffff;\n    background-color: #217346;\n    background-image: none;\n    border-style: solid;\n    border-top-color: #9c9c9c !important;\n    border-bottom-color: #d2d2d2 !important;\n    border-right-color: #999999 !important;\n}\n\n.gc-rowHeader-highlight {\n    color: #ffffff;\n    background-color: #262626;\n    background-image: none;\n    border-style: solid;\n    border-top-color: #9c9c9c !important;\n    border-bottom-color: #d2d2d2 !important;\n    border-right-color: #999999 !important;\n}\n\n.gc-horizontal-scrollbar {\n    background-color: #6a6a6a;\n    border-top-color: #999999;\n}\n\n.gc-vertical-scrollbar {\n    background-color: #6a6a6a;\n    border-left-color: #999999;\n}\n\n.gc-footer-corner {\n    background-color: #6a6a6a;\n}\n\n.gc-selection {\n    background-color: rgba(20, 20, 20, 0.2);\n    border-color: #217346;\n    color: rgba(240, 240, 240, 0.7);\n}\n\n.gc-drag-indicator {\n    border-color: #217346;\n}\n\n.gc-gridlineColor {\n    border-color: #d4d4d4;\n}\n\n.gc-group {\n    background-color: #6a6a6a;\n    color: #999999;\n}\n\n.gc-group-box {\n    background-color: #e4e4e4;\n    color: #646464;\n    border-color: #828790;\n}\n.gc-group-line {\n    border-width: 2px;\n    border-style: solid;\n    border-color: #999999;\n}\n.gc-group-dot {\n    color: #999999;\n}\n.gc-group-box-expand{\n    border-color:transparent;\n    background-color: transparent;\n}\n.gc-group-box-collapsed{\n    border-color:transparent;\n    background-color: transparent;\n}\n\n.gc-tabStripNewTab-highlight {\n    border-color: #f0f0f0;\n}\n\n.gc-tabStripNewTab-hover {\n    border-color: #86bfa0;\n}\n\n.gc-tabStripBackground { /* For Chrome and Safari */ /* For old Fx (3.6 to 15) */ /* For pre-releases of IE 10*/ /* For old Opera (11.1 to 12.0) */\n    background-image: linear-gradient(to bottom, #6a6a6a, #6a6a6a); /* Standard syntax; must be last */\n    background-color: #6a6a6a;\n    border-color: #999999;\n}\n\n.gc-tabStripResizeBarInner {\n    color: #f0f0f0;\n}\n\n.gc-navMoreButton-highlight {\n    border-color: #f0f0f0;\n}\n\n.gc-navMoreButton-hover {\n    border-color: #86bfa0;\n}\n\n.gc-navButton-hover {\n    border-color: #86bfa0;\n}\n\n.gc-navButton-highlight {\n    border-color: #f0f0f0;\n}\n\n.gc-navButton-normal {\n    border-color: #a3a3a3;\n}\n\n.gc-tab-normal {\n    color: #ffffff;\n    background-image: none;\n    background-color: transparent;\n    border-style: solid;\n    border-left-color: #999999;\n    border-bottom-color: #217346;\n}\n\n.gc-tab-hover {\n    color: #ffffff;\n    background-image: none;\n    background-color: transparent;\n    border-style: solid;\n    border-left-color: #999999;\n    border-bottom-color: #217346;\n}\n\n.gc-tab-active {\n    color: #217346;\n    background-image: none;\n    background-color: white;\n    border-style: solid;\n    border-left-color: #999999;\n    border-bottom-color: #217346;\n}\n\n.gc-rowHeaderFill {\n    background-color: #e4ecf7;\n}\n\n.gc-colHeaderFill { /* For Chrome and Safari */ /* For old Fx (3.6 to 15) */ /* For pre-releases of IE 10*/ /* For old Opera (11.1 to 12.0) */\n    background-image: linear-gradient(to bottom, #F6FAFB 12.5%, #D2DBEB); /* Standard syntax; must be last */\n    background-color: #D2DBEB;\n}\n\n.gc-gradientButton {\n    background-color: #DDDDDD; /* fallback color if gradients are not supported */ /* For Chrome and Safari */ /* For old Fx (3.6 to 15) */ /* For pre-releases of IE 10*/ /* For old Opera (11.1 to 12.0) */\n    background-image: linear-gradient(to bottom, #F6FAFB, #D2DBEB); /* Standard syntax; must be last */\n}\n\n.gc-sheetTabEditor::-ms-clear {\n    display: none;\n}\n\n.gc-layout-table {\n    font-size: 12px;\n    width: 100%;\n    height: 100%;\n    font-family: \"Segoe UI\", Calibri, Thonburi, Arial, Verdana, sans-serif, \"Mongolian Baiti\", \"Microsoft Yi Baiti\", \"Javanese Text\";\n}\n\n.gc-layout-table-first-column {\n    width: 21px;\n    border-right: 1px solid #CCC;\n    text-align: right;\n    padding-top: 7px;\n}\n\n.gc-layout-table-last-column {\n    width: 18px;\n}\n\n.gc-filter-sort-desc-container {\n    border-bottom: 1px solid #CCC;\n}\n.gc-filter-top10-rank{\n    outline: none\n}\n.gc-filter-top10-rank-illegal:focus{\n    outline: 1px solid red;\n}\n.gc-filter-item-wrapper {\n}\n\n.gc-filter-dialog-style {\n    background: #f0f0f0;\n    font-family: \"Segoe UI\", Calibri, Thonburi, Arial, Verdana, sans-serif, \"Mongolian Baiti\", \"Microsoft Yi Baiti\", \"Javanese Text\";\n    font-size: 12px;\n    border: thin solid #acacac;\n    cursor: default;\n}\n.gc-filter-disable-item a, .gc-filter-disable-item a:hover{\n    color: #c4bec2;\n}\n.gc-filter-dialog-style select,\n.gc-filter-dialog-style input\n{\n    color: black;\n    font-weight: normal;\n    font-style: normal;\n}\n.gc-filter-disable-item.gc-filter-hover{\n    background-color: transparent;\n    border: 1px solid #c5c5c5;\n}\n\n.gc-search-outer-div {\n    border: none;\n    margin: 4px 0px 0px 4px;\n    background-color: white;\n    background-image: none;\n    color: #1e395b;\n    font-weight: normal;\n}\n\ndiv.gc-search-outer-div input::-ms-clear {\n    display: none;\n}\n\n#gc-filterSearch {\n    width: 165px;\n    height: 21px;\n    border: 1px solid #ababab;\n    margin-left: 7px;\n    margin-top: 4px;\n    margin-bottom: 0px;\n    padding: 0;\n    font-size: 1em;\n    background-color: white;\n    color: black;\n    float: none;\n}\n\n#gc-filterSearch:hover,\n#gc-filterSearch:active {\n    background-color: white;\n}\n\n.gc-check-uncheck-all {\n    float: left;\n    width: 16px;\n    height: 16px;\n    display: inline-block;\n}\n\n.gc-filter-check-outerDiv .gc-check-image,\n.gc-fill-type-item .gc-check-image {\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAadEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjExR/NCNwAAAGxJREFUOE+ljsENgDAMAzsaQ3QMxP4/wAhXwTKhEY9TlZOdtK1b/4WVFaysYGUFKxMWdY/hA5T3+x0+BjJYJmOJBoF+87UMYhAwzFBaBnFwYZ1j/kKFltIycHLqMrHyhEvSMrCygpUVrJyntwPdKU02VXQw7gAAAABJRU5ErkJggg==);\n}\n\n.gc-filter-check-outerDiv .gc-uncheck-image,\n.gc-fill-type-item .gc-uncheck-image {\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAadEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjExR/NCNwAAAIJJREFUOE+lkssNgDAMQzsCw3UMxEocGKWDQSLVUj5GJeLwhPyI0x7a9qP/gsoKVFagskIUm3ALp3GKZvX63/q0QIcAlqAMXMcFIQ6z7DouTGLptawkMVmeDJi8BFsGQ0jzUcRyvEla4oLAhvVrveu4IOAdxJOwZPkOylBZgcrv9PYAV9tkcyJlS4sAAAAASUVORK5CYII=);\n}\n\n.gc-check-image,\n.gc-uncheck-image {\n    background-position: center;\n}\n\n.gc-filter-check-outerDiv {\n    height: 18px;\n    margin-top: 4px;\n}\n\na.gc-filter-check-style {\n    color: #1e395b;\n    text-shadow: none;\n}\n\na.gc-filter-check {\n    text-decoration: none;\n}\n\na.gc-filter-check:hover {\n    text-decoration: underline;\n}\n\n.gc-filter-function-tr a:active {\n    border-color: #e3e3e3;\n    outline: none;\n    box-shadow: none;\n}\n\n.gc-filter-sort {\n    /*border: 1px solid transparent;*/\n    font-weight: normal;\n    color: #222222;\n    white-space : nowrap;\n    word-break: break-all;\n    overflow: hidden;\n    text-overflow : ellipsis;\n}\n.gc-filter-item-link, .gc-filter-item-link:hover{\n    width: 181px;\n    color: #222222;\n}\n\n.gc-filter-hover {\n    border-radius: 0px;\n    outline: none;\n}\n\n.gc-filter-item {\n    position: relative;\n    cursor: default;\n    font-weight: normal;\n    border-style: solid;\n    border-color: transparent;\n}\n\n.gc-filter-item-container {\n    border: 1px solid #a7abb0;\n    border-radius: 3px;\n    margin: 4px 0px 4px 4px;\n    overflow: hidden;\n}\n\n.gc-filter-item-input {\n    float: left;\n    clear: left;\n    margin: 3px !important;\n}\n\n.gc-filter-item-text {\n    font-family: Lucida Grande, Lucida Sans, Arial, sans-serif;\n    font-size: 12px;\n    margin: 2px;\n    white-space: nowrap;\n    word-wrap: normal;\n    float: left;\n    clear: right;\n}\n\n.gc-filter-button {\n    width: 90px;\n    height: 27px;\n    margin: 2px 1px 5px;\n}\n\n.gc-filter-button-disable {\n    opacity: .35;\n    background-image: none;\n}\n\n#gc-filterOK {\n    margin-left: 13px;\n    margin-bottom: 5px;\n    float: left;\n}\n\n#gc-filterCancel {\n    margin-bottom: 5px;\n    float: left;\n}\n\n.gc-filter-button-default {\n    border: 1px solid #acacac;\n    border-radius: 0; /* For Chrome and Safari */ /* For old Fx (3.6 to 15) */ /* For pre-releases of IE 10*/ /* For old Opera (11.1 to 12.0) */\n    background-image: linear-gradient(to bottom, #f0f0f0, #e5e5e5); /* Standard syntax; must be last */\n    font-weight: normal;\n    color: black;\n}\n\n.gc-filter-button-hover {\n    border: 1px solid #7eb4ea;\n    border-radius: 0;\n    background-color: #d3f0e0; /* For Chrome and Safari */ /* For old Fx (3.6 to 15) */ /* For pre-releases of IE 10*/ /* For old Opera (11.1 to 12.0) */\n    background-image: linear-gradient(to bottom, #ecf4fc, #dcecfc); /* Standard syntax; must be last */\n    color: black;\n    font-weight: normal;\n    text-shadow: none;\n    cursor: pointer;\n}\n\n.gc-filter-button-active {\n    border: 1px solid #569de5;\n    border-radius: 0;\n    background-color: #ffe475; /* For Chrome and Safari */ /* For old Fx (3.6 to 15) */ /* For pre-releases of IE 10*/ /* For old Opera (11.1 to 12.0) */\n    background-image: linear-gradient(to bottom, #daecfc, #c4e0fc); /* Standard syntax; must be last */\n    font-weight: normal;\n    color: black;\n    box-shadow: none;\n}\n\n.gc-filter-item-hover {\n    border: 1px solid transparent;\n    background-color: #969696;\n    background-image: none;\n    color: #1d5987;\n    font-weight: normal;\n    text-shadow: none;\n}\n\n.gc-smartMenu-item-default {\n    border: 1px solid transparent;\n    background-color: white;\n    background-image: none;\n    font-weight: normal;\n    color: #1e395b;\n    border-radius: 0;\n}\n\n.gc-smartMenu-item-hover {\n    border: 1px solid #86bfa0;\n    background-color: #d3f0e0;\n    background-image: none;\n    color: #1d5987;\n    font-weight: normal;\n    text-shadow: none;\n}\n\n.gc-smart-tag-default {\n    border: 1px solid #ababab;\n    background: #f0f0f0;\n    color: #1e395b;\n    font-weight: normal;\n    border-radius: 0;\n}\n\n.gc-smart-tag-hover {\n    border: 1px solid #9fd5b7;\n    background-color: #f0f0f0;\n    background-image: none;\n    color: #1d5987;\n    font-weight: normal;\n    text-shadow: none;\n}\n\n.gc-smart-tag-active {\n    border: 1px solid #9fd5b7;\n    background-color: #9fd5b7;\n    background-image: none;\n    font-weight: normal;\n    color: #262626;\n    box-shadow: none;\n}\n\n.gc-menu-item-input {\n    width: 16px;\n    height: 16px;\n    margin: 1px;\n    float: left;\n    display: inline-block;\n}\n\n.gc-menu-item-text {\n    font-size: 12px;\n    font-weight: normal;\n    display: inline-block;\n    float: left;\n    padding-top: 2px;\n    font-family: Arial;\n}\n\n.gc-fill-menu-container {\n    box-shadow: rgba(0, 0, 0, 0.4) 1px 2px 5px;\n    cursor: default;\n}\n\n.gc-toolstrip-default {\n    background: white;\n    border: 1px solid #c6c6c6;\n}\n\n.gc-toolstrip-button-style:active,\n.gc-toolstrip-button-style {\n    color: black;\n    background: white;\n    box-shadow: none;\n}\n\n.gc-tab-tip-span {\n    background: #D6E6F9;\n    color: black;\n    border: 1px solid #D6E6F9;\n    font-weight: normal;\n}\n\n.gc-spread-toolTip {\n    border: 1px solid #bebebe;\n    border-radius: 0px;\n    background-color: #f0f0f0;\n    background-image: none;\n    font-weight: normal;\n    color: #217346;\n}\n\n.gc-no-user-select {\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -o-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}\n\n/*-----common css end-----*/\n\n/*-----formula textbox start-----*/\n/* function autocomplete */\n.gcsj-func-ac-popup {\n    margin: 0;\n    padding: 0;\n    background: #fff;\n    border: 1px solid rgba(0, 0, 0, 0.2);\n    font-family: arial, sans-serif;\n    font-size: 12px;\n    line-height: 22px;\n    position: absolute;\n    width: 300px;\n    z-index: 2001;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n}\n\n.gcsj-func-ac-row {\n    margin: 0;\n    cursor: default;\n    padding: 2px 10px;\n    color: #666666;\n}\n\n.gcsj-func-ac-row-name {\n    color: #222;\n    font-size: 13px;\n    font-family: inconsolata, monospace, arial, sans, sans-serif;\n    margin: -2px 0;\n}\n\n.gcsj-func-ac-row-description {\n    color: #666;\n    display: none;\n    font-size: 11px;\n    margin: -2px 0;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n\n.gcsj-ac-row-active {\n    background-color: #f5f5f5;\n    color: #000;\n    border-top: 1px solid #ebebeb;\n    border-bottom: 1px solid #ebebeb;\n    padding: 1px 10px\n}\n\n.gcsj-ac-row-active .gcsj-func-ac-row-description {\n    display: block;\n}\n\n/*  function help */\n.gcsj-func-help-popup {\n    background-color: #fff;\n    border: 1px solid rgba(0, 0, 0, 0.2);\n    color: #222;\n    font-size: 11px;\n    word-wrap: break-word;\n    position: absolute;\n    width: 320px;\n    z-index: 2001;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n}\n\n.gcsj-func-help-title {\n    background-color: #f5f5f5;\n    color: #222;\n    font-size: 13px;\n    padding: 1px 0 1px 10px;\n}\n\n.gcsj-func-help-body {\n    border-top: 1px solid #ebebeb;\n    font-family: arial, sans-serif;\n    overflow: hidden;\n}\n\n.gcsj-func-help-content {\n    padding-bottom: 2px;\n}\n\n.gcsj-func-help-section {\n    padding: 5px 10px;\n}\n\n.gcsj-func-help-section-title {\n    font-size: 11px;\n    color: #666;\n}\n\n.gcsj-func-help-section-content {\n    font-size: 11px;\n}\n\n.gcsj-func-help-formula {\n    font-family: inconsolata, monospace, arial, sans, sans-serif;\n    padding: 1px 0;\n}\n\n.gcsj-func-help-formula-name {\n}\n\n.gcsj-func-help-paramter {\n    padding-left: 1px;\n}\n\n.gcsj-func-help-paramter-paren {\n}\n\n.gcsj-func-help-paramter-active {\n    background-color: #feb;\n}\n\n/* color text */\n.gcsj-func-color-content {\n    white-space: pre-wrap;\n}\n\n/*-----formula textbox end-----*/\n\n/*-----floatingobject start-----*/\n.gc-floatingobject-selected {\n    border: 1px solid #939393;\n}\n\n.gc-floatingobject-unselected {\n    background-color: transparent;\n    border: 1px solid transparent;\n}\n\n.gc-floatingobject-container {\n    position: absolute;\n    overflow: hidden;\n    box-sizing: content-box;\n}\n\n.gc-floatingobject-background-cover { /* For WebKit*/ /* Mozilla*/ /* Opera*/\n    background-size: cover; /* Generic*/\n}\n\n.gc-floatingobject-moving-container {\n    position: absolute;\n    overflow: hidden;\n}\n\n.gc-floatingobject-moving-div {\n    position: absolute;\n    border: 1px solid black;\n}\n\n.gc-floatingobject-resize-indicator {\n    box-sizing: content-box;\n}\n\n.gc-floatingobject-resize-indicator-select {\n    background-color: white;\n    border-radius: 2px;\n    -moz-border-radius: 1px;\n    border: 1px solid #939393;\n    z-index: 100;\n}\n\n.gc-floatingobject-resize-indicator-unSelect {\n    display: none;\n}\n\n.gc-floatingobject-absolute {\n    position: absolute;\n}\n\n.gc-floatingobject-content-container {\n    box-sizing: content-box;\n}\n\n/*-----floatingobject end-----*/\n\n/*-----scrollbar start-----*/\n/*scrollbar*/\n.gc-scroll-container {\n    background-color: #575757;\n    box-shadow: none;\n}\n\n.gc-scroll-corner-all {\n    border-radius: 2px;\n}\n\n.gc-scroll-arrow {\n    background-color: #999999;\n    border-style: solid;\n    border-color: #3b3b3b;\n    background-image: none;\n    border-radius: 0;\n}\n\n.gc-scroll-arrow .gc-scroll-arrowUp {\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAadEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjExR/NCNwAAAClJREFUKFNjGEmgvLz8P5RJHABpgGGoEH6ArIEojdg0wDBUyShAAAYGAHSXJkH1wN/VAAAAAElFTkSuQmCC);\n\n}\n\n.gc-scroll-arrowUp {\n    background-position: center;\n}\n\n.gc-scroll-arrow .gc-scroll-arrowDown {\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAadEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjExR/NCNwAAACRJREFUKFNjGAVYQHl5+X9cGKoEOyBZAwyQrAEGSNYwpAEDAwBvhSZBmzrLGgAAAABJRU5ErkJggg==);\n}\n\n.gc-scroll-arrowDown {\n    background-position: center;\n}\n\n.gc-scroll-arrow .gc-scroll-arrowLeft {\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAadEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjExR/NCNwAAADBJREFUKFNjGMKgvLz8P5RJHABpIEkTTAPRmpA1EK0JBMjSBAJkaQIBsjQNNGBgAABe7iZBxoz5vwAAAABJRU5ErkJggg==);\n}\n\n.gc-scroll-arrowLeft {\n    background-position: center;\n}\n\n.gc-scroll-arrow .gc-scroll-arrowRight {\n    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAadEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjExR/NCNwAAAC5JREFUKFNjGIKgvLz8P5RJPABpIlkjTBNJGpE1Ea2RZA0gQLIGECBZw2ACDAwAhS4mQZAuqGcAAAAASUVORK5CYII=');\n}\n\n.gc-scroll-arrowRight {\n    background-position: center;\n}\n\n.gc-scroll-bar .gc-scrollbar-vertical {\n    background-image: none;\n    background-repeat: no-repeat;\n}\n\n.gc-scrollbar-vertical {\n    background-position: center;\n}\n\n.gc-scroll-bar .gc-scrollbar-horizontal {\n    text-indent: 0;\n    background-image: none;\n    background-repeat: no-repeat;\n}\n\n.gc-scrollbar-horizontal {\n    background-position: center;\n}\n\n.gc-scrollbar-wrapper {\n    background-color: transparent;\n}\n\n.gc-scroll-bar {\n    border-style: solid;\n    border-color: #3b3b3b;\n    background: #999999;\n    border-radius: 0px;\n}\n\n.gc-scroll-arrow-hover {\n    border-style: solid;\n    border-color: #101010;\n    background: #b3b3b3;\n}\n\n.gc-scrollbar-stateHover {\n    border-style: solid;\n    border-color: #101010;\n    background: #b3b3b3;\n}\n\n.gc-scroll-arrow:active,\n.gc-scroll-bar:active,\n.gc-scrollbar-stateActive {\n    border-style: solid;\n    border-color: #101010;\n    background: #c4c4c4;\n    box-shadow: none;\n}\n\n/*-----scrollbar end-----*/\n\n/*-----contextmenu start-----*/\n.gc-ui-contextmenu-container {\n    box-shadow: rgba(0, 0, 0, 0.4) 1px 2px 5px;\n    font-family: \"Segoe UI\", Calibri, Thonburi, Arial, Verdana, sans-serif, \"Mongolian Baiti\", \"Microsoft Yi Baiti\", \"Javanese Text\";\n    font-size: 9pt;\n    background: #f0f0f0;\n    border: 1px solid #ACACAC;\n    color: #444444;\n    cursor: default;\n    min-width: 188px;\n}\n\n.gc-ui-contextmenu-separator {\n    height: 1px;\n    margin-left: 20px;\n    margin-right: 5px;\n    background-color: #e3e3e3;\n    overflow: hidden;\n}\n\n.gc-ui-contextmenu-menuitem {\n    border: 1px solid transparent;\n    background-image: none;\n    font-weight: normal;\n    border-radius: 0;\n    text-decoration: none;\n    white-space: nowrap;\n    overflow: hidden;\n}\n\n.gc-ui-contextmenu-nonselective-menuitem {\n    border: 1px solid transparent;\n    background-image: none;\n    font-weight: normal;\n    border-radius: 0;\n    text-decoration: none;\n    white-space: nowrap;\n    overflow: hidden;\n}\n\n.gc-ui-contextmenu-menuitem-content {\n    padding: 3px;\n    margin: 1px;\n    overflow: hidden;\n}\n\n.gc-ui-contextmenu-icon {\n    width: 16px;\n    height: 16px;\n    margin-left: 0;\n    float: left;\n    display: inline-block;\n    margin-right: 12px;\n}\n\n.gc-ui-contextmenu-text {\n    display: inline-block;\n    float: left;\n    padding-right: 23px;\n    padding-left: 0;\n}\n\n.gc-ui-contextmenu-disable {\n    color: #b1b1b1 !important\n}\n\n.gc-ui-contextmenu-group-container {\n\n}\n\n.gc-ui-contextmenu-group-header {\n    border: 1px solid transparent;\n    border-radius: 0;\n    padding: 5px;\n    font-weight: bold;\n    background-color: #DDDDDD;\n    overflow: hidden;\n}\n\n.gc-ui-contextmenu-nonexecutable {\n\n}\n\n.gc-ui-contextmenu-groupitems-container {\n    border: 1px solid transparent;\n    background-image: none;\n    font-weight: normal;\n    color: #222222;\n    border-radius: 0;\n    padding: 5px;\n    overflow: hidden;\n    margin-left: 28px;\n}\n\n.gc-ui-contextmenu-groupitem {\n    display: inline-block;\n    float: left;\n    min-width: 24px;\n}\n\n.gc-ui-contextmenu-groupitem .gc-ui-contextmenu-icon {\n    width: 24px;\n    height: 24px;\n    margin: 0px;\n}\n\n.gc-ui-contextmenu-hover {\n    background: #969696;\n    font-weight: normal;\n    text-shadow: none;\n}\n\n.gc-ui-contextmenu-sup-container {\n\n}\n\n.gc-ui-contextmenu-subitems-container {\n    position: absolute;\n    left: 98%;\n    width: 100%;\n    display: none;\n    margin-top: -3px;\n}\n\n.gc-ui-contextmenu-menuitem-content .gc-ui-contextmenu-sup-indicator {\n    width: 16px;\n    height: 16px;\n    float: right;\n    display: inline-block;\n    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAgCAYAAABU1PscAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkFEODY1RjVGQzhGMjExRTdBMDNDRDU1NEFCMEVGRTIxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkFEODY1RjYwQzhGMjExRTdBMDNDRDU1NEFCMEVGRTIxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QUQ4NjVGNURDOEYyMTFFN0EwM0NENTU0QUIwRUZFMjEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QUQ4NjVGNUVDOEYyMTFFN0EwM0NENTU0QUIwRUZFMjEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6xjVcxAAAAg0lEQVR42uzYMQ6AIAyF4RaFwXgT738PV+PMBVxRqx4A3RTM/yYGhn60hAQ1M6k5TioPAAAAAAAAAAAAAAAAAAAA8EdA33emqjLOccjt0ZJ/Jc7izftWUlqzdRYPeKq1mjtwdsLowBdpGnd70EUDQvCybbte6ykuvroR4iED8EIOAQYApagr3uYsgU4AAAAASUVORK5CYII=');\n}\n\n.gc-ui-contextmenu-sup-indicator {\n    background-position: -32px -16px;\n}\n\n.gc-spread-copy {\n    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAOCAYAAADwikbvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkMwNEYxQjlFNDJCMzExRTc4OTZBRDU3QzgwMEM3QTQ3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkMwNEYxQjlGNDJCMzExRTc4OTZBRDU3QzgwMEM3QTQ3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QzA0RjFCOUM0MkIzMTFFNzg5NkFENTdDODAwQzdBNDciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QzA0RjFCOUQ0MkIzMTFFNzg5NkFENTdDODAwQzdBNDciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6TXfPoAAABdUlEQVR42oSSPUsDQRCGJ+EI2CWCiKKYSrtgYyOCYCUBSSVYCBZiKhXxfyiCjYgSG0FIoSiIhUVSaJ2fYGNnYUhyH7s7u85s7i7mPMnAMLu389777EfmofFhtNaAiKAU2sq5UyllYFSwOBkXdw1Tu2+ZUVpHa4wnmtqzoV9hqgj1t28jBIAvAbhKaj2s5GMiB1HZAZISNUDOyYCUPRDUubkyPuR0/tiG5eqTeb/csD/IIkq7IJWxybG/XQYvGCbiaLsSnk/XYXGrZr84SoViNKAo3Tb2qy//EH11BBxdfUIhX4CF8okhsbBNQvbFNknQ9QZEkfhsbzpkmYPVg1fecyhWeiAm4q6bTsRrsxM5QDKNsYPfzpQdL52IK4cKfHaWYRM5Ex4vImXknCSKxDJwB1c1PzM2dC3RnpNEGB699HvgXN/WgTMZxaVqKlEsZufWy03qG54s7Zo0oijsnv97t/zC1o6bgFKQi2cxhde1led82j8CDAAflFKLtUvyvAAAAABJRU5ErkJggg==');\n    background-repeat: no-repeat;\n}\n\n.gc-spread-cut {\n    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAQCAYAAADNo/U5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjk4M0YzQkU2NDJCMzExRTdBQzFCQzM2MzQ3Q0NEMUVDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjk4M0YzQkU3NDJCMzExRTdBQzFCQzM2MzQ3Q0NEMUVDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTgzRjNCRTQ0MkIzMTFFN0FDMUJDMzYzNDdDQ0QxRUMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTgzRjNCRTU0MkIzMTFFN0FDMUJDMzYzNDdDQ0QxRUMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6vHhfyAAABpklEQVR42mJgwAI6lxz427xgrzIDDsCETZBPgI/p8cNHx3BqKp24fkHZhPVlyILMjEwM//8z8uDU9PLJEyEGRsZOdI3////jxKlpUXeu3+MHD75hamRkxOsneVUVmUf3H/zCZiNOTR1ZPu9lFOW0Ht6//x+kkShNINCTH3RXRl7R8uH9Bwzv375l4ONmY4iqmCaITROGu0HO+/Lxdef/f/8Y/nDpHj15g62YT1zsFrsgpzUHL9vRrVkC7zE0KbrN8nFx0NjMJST048DBd2z/2TgZOAR4Gdj4eX6x8rGzMf3978+CafX/tHN3/zL8v/9f5x8j47u/v/7c+/XlmwDbr19SvxmFrBn+/l8Nt0nVdYb5f2aOHazcwgJcgmIMZ+eYg+V0ow4L/v3Hco+JmWnOlaXmpcZZl//DA+I/I8sxVl65w8ysQtd+//wHt/nyMtv3zEx/lP78/BWhFXHs/8/3XxCSqt5L/sPY2hFH/mMLNVW/feYqAXuV4X769/vLD42g7d2MbNxrcMXP7U1OJ1Hiiek/g8Pf76+LGP58P/H/P8NmfJELEGAAG6Sldb/nz3cAAAAASUVORK5CYII=');\n    background-repeat: no-repeat;\n}\n\n.gc-spread-pasteOptions {\n    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkRDMUFEQ0I5NDJCMzExRTdBMjQ1QkFFQURDMUU0MzZBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkRDMUFEQ0JBNDJCMzExRTdBMjQ1QkFFQURDMUU0MzZBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6REMxQURDQjc0MkIzMTFFN0EyNDVCQUVBREMxRTQzNkEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6REMxQURDQjg0MkIzMTFFN0EyNDVCQUVBREMxRTQzNkEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6s+LeRAAACA0lEQVR42nxTz0tUURT+rmgTjiJEEhlEiBEEgS1yIoJqIUMi6Eb/AFfSTvqxi1rVpsSFC4kYaF2IUhS4mmhTK0MxHISiFLFFOoPz4737zr23c+97z5lxRs/jvnvuved95/vOeVfgkD19MWfq1g8mBY4xUVocNqaw4Rb3Vydw9/YtjAyl3Hrx4zd8yn7GyyuZMLjrIpIjH+oAW+zHycHnSF7NuY3r11L4swU3rG/NntmYOFGttbq3/OumtfVN3Ein6wLO9vShNqY5gCm46cuz2SYhS1Hk3jEAeg9aOZX8GNgqvvfyULwXaICICeyw330PTzL/zMpyFrmdzsSPt+MyYpCHJq6NiBpgBPxAYfzmqYaMMwsS58/1oOxt+Rib7WyJJSjOogIRDvY9Sc3bJjSmH6aR6u/DmY4T+5GEPNO09GMznKERwPJ7/WYerzLEkvlcaxxIUNKis2vCWhQrgTsKSMe5oTTh+7tJ7BaK+PV7E48y2zhgoAMRZTEhQCkE8KWOasMMuTZECu2JkxjovwySP6sMiOI8wkHsl6Vbe1LVCKiKTLYzO78SAXCPT/e2VcW2SRRzIYOyT64rImIXe0CCAcpotf936WtjteMaVCoUZrYyHAkRzrY+HgMcvhyxjT4mF3bpQteRN9FKOPKq3pnKOgBFAXfIc8GWss1K7BPvWWb/BRgAxiv0G+KDFYkAAAAASUVORK5CYII=');\n    background-repeat: no-repeat;\n}\n\n.gc-spread-pasteAll {\n    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAXCAYAAADk3wSdAAAAuUlEQVR42u3VsQrDIBAGYF/ZSTdfoI/j4pBdFPe+QrsUuoWCV064ogkmplpooQc/ITH3JSTGMFYp5xwIIYBzniKlhBACsJ4iLMaYQvvNwPX+SCcbY17NNZSitYa8t6jzZYbTdIP87lqDPdiLRoHiwV6U+lfoaqChqr35QE++A2U9z2UL3Xtp3nt4C6U5uwyOKaUAv8KhKG4RttbCMLSYvyPQ5QX+6K+gtJ4ORXHl3oMPo0f+WR9BW/ME6gakYAjbY+4AAAAASUVORK5CYII=');\n    background-repeat: no-repeat;\n}\n\n.gc-spread-pasteFormula {\n    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAXCAYAAADk3wSdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkUzMjQ5N0Y2N0U0QzExRTdCOTEyQ0NDNzNENjU1NjFDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkUzMjQ5N0Y3N0U0QzExRTdCOTEyQ0NDNzNENjU1NjFDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RTMyNDk3RjQ3RTRDMTFFN0I5MTJDQ0M3M0Q2NTU2MUMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RTMyNDk3RjU3RTRDMTFFN0I5MTJDQ0M3M0Q2NTU2MUMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6KOVrPAAABtklEQVR42qxVPY8BURQ9IxKFZisSSjUKFYlmhdhEQqPWCVExWws6kdH5B0JDojMU2xASnVbiB1Bto9G83Xs3M7GyY+fDSSbvK/fcOee9d58EA+x2OzGdTnG9Xnns8XhQLBYRi8Uk/AO30cJ4POZWURRuZVnGcDiEGbiFENyRJAmLxUKoqvowoF6vc0AqlUIul5Nu4zXwpPLxKeTXFzQaDVhBv9+nWHzHSrekLiKEQ9xzuG8WOLNFMmsbZQZkmYb3Z5F2u11st1uk0+lf8y67hJPJBKfTCZVKhdunkC6XSyQSCWSzWXQ6HeekdJbP5zNCodBzNqpQKOj9drvNftZqNWeks9kMg8GAfbyX7Uj+fr+H3+83XLdF+shPW/K1ghMMBnV/e70eDoeDaLVanMwy6fF4hM/nQzgcZn+bzSY2mw3Pj0YjyZZ88jMajerjSCTCZ7Zarb7Z9vTeT0pwuVwQCATUPz01qjpa4Viv19zSLdJA0r1eL1arlUgmkz/yqcBakR6Px/WxloQsIE9ps3T5j4jpL8vlMhMQaSaT0W8WeVkqldgC6tNnGvQu5fN5MZ/PTb0SXwIMAAHPvw+5QntsAAAAAElFTkSuQmCC');\n    background-repeat: no-repeat;\n}\n\n.gc-spread-pasteValues {\n    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAXCAYAAADk3wSdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkFCQzg0RDc3N0U0QzExRTc4MzcyRDdEMjUyQjJDODFCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkFCQzg0RDc4N0U0QzExRTc4MzcyRDdEMjUyQjJDODFCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QUJDODRENzU3RTRDMTFFNzgzNzJEN0QyNTJCMkM4MUIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QUJDODRENzY3RTRDMTFFNzgzNzJEN0QyNTJCMkM4MUIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7cAGVnAAABf0lEQVR42mL8//9/DgN2MKWiouL/r1+/wBx2dnaG9vZ2RiATl3o4YMIlUVRUBDawt7cXjH/+/AkWQ7cYCcMBC0zg379/rUxMTNVYNKJbNhlE9/X1MeJSwwj0PkPvvg//i50EQBoYSAFAg0F6GYB6UYKFCWQgA4UA3QwWJAmwzSQaRlpEUQJGDR01dCgYykKJZlB5QbSh169fZ9i0aRPDmTNnGFavXg0XT0pKYrh16xaYfeTIETBdU1PDcODAARBzsrGxMcPEiRNzsRoKMuzmzZsMz58/h4tt2LCBwdHRkWHevHlgvo2NDdjglpYWMP/UqVOwUm4KVkNjY2PBGKQRBgICAlDU8PDwoPA/f/6M3fvIpQ6u8AKB0NBQhujoaHQXMvj6+kJiH1rAEgWePHkCNtDPzw/sExAwMzMDB8Ps2bMZ9u/fj0hS6AbjcmVhYSGKgciAl5cXpTrBqB0XL148eebMmXC+pKQkOBUghzEsBXh4eDB8+fIFzIfGPiNAgAEAG66hf3H3yXAAAAAASUVORK5CYII=');\n    background-repeat: no-repeat;\n}\n\n.gc-spread-pasteFormatting {\n    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAXCAYAAADk3wSdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkRFMkIzNDMzNzY3RDExRTc5ODIyQjBCNDM5MUZGMzNBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkRFMkIzNDM0NzY3RDExRTc5ODIyQjBCNDM5MUZGMzNBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6REUyQjM0MzE3NjdEMTFFNzk4MjJCMEI0MzkxRkYzM0EiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6REUyQjM0MzI3NjdEMTFFNzk4MjJCMEI0MzkxRkYzM0EiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6glf7eAAAC1ElEQVR42rRVX0hTYRT/XV3KfKhUUAe+yIaDcqisp0kjnA+CPSi6erKQooe96aAQlOGDPplBkCQalBuMHsagWQxpjh4mZsNN8WELh1QPY1quEVs0YjfPF/dyt907hOgH9373nO/7fpxz7vnDQQHb29u8x+NBPp9ncm1tLaxWK4xGI4cK4HkeKnpxXPk5t9vN1oWFBbZOTEzA5XIpEkk5VPSKpX7x+qYarK+vw+/3VzIE4+PjPK0WiwUDAwOIHzFPiqxSnSr5tf0c9L01soRkoRwCgQAjpbvoAC8lrmLKf0Qph0r4eLjxXYzfWUF35FCF/4AyUofDgcHBQdjtdlFHqUV6JVzvqKMM4FdXV/ky0lAohEQiAafTKZIRvF4vhoaGFAkpc3w+HyKRyNncX1xchMlkQldXl+w+EQaDQfbIut/T0wOtVovR0VEmd3Z2sty12WyyhPbeiwiHw8xKKbj5QJqXHiq1kpBKpbC7u4vm5mYsLS2J+/F4DMvLKygUCqLuNIM4Rfej0Sg2NzeZ5UKcW1paxDgTjo+/FhGq1erKMRV+DpGW1jlhenoauVwOIyMjTG5sbMTc3BynSEpWknXDw8PQ6XRinJPJJLq7uzE7O4tsNsvKOp1OY2xsDFNTU1xZRUlBf1rakWZmZsRvcpcsFJDJZGAwGOTLtBLcwTjefDhE/ncBpksa3L5zD67nz2A2m9HX1yd0qrOTPvLuoPq0Vzrv9zN5xb8Pb/gIk5OT+PyjWrb+Kyb/09d7yGTzMBtaRd3d/g68j6XYJFDqcKrSriOU3ct3cbzaOvw7WuIp6DQX8Nh2DR+/nEDTUIdv2YJyQyGS0jr2hg7w4m2s6OBBMgPfVgJP1vZw82obTn4Wiu4VVRTlHXV/EhrUVdjYSZQRCqhRcbhl0eNye5voOhHSvabz5zhxXkmHViDyiZ/3RMrINPV1aG+tx4MbVzi5IVlaHH8EGAC5Ozy0Q9eoOwAAAABJRU5ErkJggg==');\n    background-repeat: no-repeat;\n}\n\n.gc-spread-insertComment {\n    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAOCAYAAAAmL5yKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjA2MDkwNTRFNDJCNDExRTc5MkIxQTM0NTZCOUEwNEFBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjA2MDkwNTRGNDJCNDExRTc5MkIxQTM0NTZCOUEwNEFBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDYwOTA1NEM0MkI0MTFFNzkyQjFBMzQ1NkI5QTA0QUEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDYwOTA1NEQ0MkI0MTFFNzkyQjFBMzQ1NkI5QTA0QUEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz60jjNKAAAB2UlEQVR42oxSPUscURQ9b7MK+Q+CoD9hq2DnL0iVyiZItEi1wQ0Ykd0mlUhASKGB/IA0qawkayVEZEu7ZINESUbcVXHn433nvvtmdjE2DhzOm5l3zr33cOF3G965bjvg/zMe80yE39x97rYfoxfhohDooLcINOhLj9DoYphc4uLsN/JcMrKMOCuICWmBNC/wZuOLEONWV3oT270Gk335Ad4qeKeYnZPEkt93dvYxGN6g7l9tdR50sLJFF5/AG0MzGhJoeK/pHNgwS0UoDGqxYovb5srMLbroQA5R4CuTyI5MtVKQmgzEp1YnffGOLj1lL++m4Ja3Ufu8FkWMWDWcAwdDKTUMdVETqz1xezUg92kSfoSzoWsHs/SehQEuZDAexXInSpEJoR6qGhPbZNybOYwwEaM0DKy0JthooLThmSv3yqiqHNu2+NHPkFxeI0mGmJ+bwd/kNIaoVQzL21jB2xCULsObdPXz1x8sPJvF9+NTLD2fhhl3oKoRyqDKsyurO3636PfP8Xb9BJvNOdTon7GlgaZ5jrqHyPKi3LgcablxvIX0Pc8ULCW82ZxnsaORNYUtquU7+Praj+4k7shgNJIsHqUSaarIRCErFIpco5CKFyjkFsL/J8AAobbYzZKR99AAAAAASUVORK5CYII=');\n    background-repeat: no-repeat;\n}\n\n.gc-spread-sortAscend {\n    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAPCAYAAADUFP50AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjMxOTlCRUM2NDJCNDExRTc5RTE1RTkxNEMyMTAwMjYzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjMxOTlCRUM3NDJCNDExRTc5RTE1RTkxNEMyMTAwMjYzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MzE5OUJFQzQ0MkI0MTFFNzlFMTVFOTE0QzIxMDAyNjMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MzE5OUJFQzU0MkI0MTFFNzlFMTVFOTE0QzIxMDAyNjMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4BcqYtAAABGElEQVR42qyRsW7CMBCG/7No5wYJHgCpKgtT+gjZvMLUPWysmC4VA5S5G9lZSFam8gj0Abr0AZqBrhVSrmerkUANwUNPsnw++ff/+Q74ja7O4judcVevQ5yJh9ETl7kqE6lEYP5gqAE8wgl7ehUw817EiXvAV/jN1zETpYp4S0B4q7OOlxBEA0leBXPnjswXcZW8HonL9n3TJ7sE2ZAHrrJOso/LgohiIYhsh/FfcTyORv7o3BbHF5iRtJ8xrEWVS8FVgWZrbilhZL1dEjlHYqQ3C+xzg1A4xkWBex9s64Ivg+CgsGOCac+Q1v3tZI4HwlKQ0yqRjdXLlP6cbXPyCdZl0SJ/Tk6bVeVMIqya11CaldT98UeAAQC1jWR89hnvdgAAAABJRU5ErkJggg==');\n    background-repeat: no-repeat;\n}\n\n.gc-spread-sortDescend {\n    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAPCAYAAADUFP50AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQzRDlFNTlBNDJCNDExRTc5M0U1RTRCOTU1NkNDNDRGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQzRDlFNTlCNDJCNDExRTc5M0U1RTRCOTU1NkNDNDRGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDNEOUU1OTg0MkI0MTFFNzkzRTVFNEI5NTU2Q0M0NEYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDNEOUU1OTk0MkI0MTFFNzkzRTVFNEI5NTU2Q0M0NEYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7esVRmAAABKUlEQVR42pRSsU7DMBB9NmEnSK2YQVAWJvoJnZq1ZWGnG2sCS9WleGZr9y44a6b+AtlBiHwAHcqO5ONsNVVSBdU8KdbdKe/u3bPF6hExAIUKiDBvP2GEHdzej2nxPBE2lvxTeGhw3JrCFhL+8ibSLgJB0EcK61WCawJiY9CFB2RLIf9OEELihWeOThQKH2Jgjx+BGUvW7Sk0PCE35oD3svvBSv56qJv110RlbeEGVBY53W/Oxs1/IyiDyyi945EzAdN9y27yvTtuLx3o8c0XBDn0MsceV9EiJKI1k+eugQfcfhd9HZMQ+QEMk+WrAc4+skFRfWrNUoUYcrC0JJcS1eSW77OWn0dprxOl23uz0zt9vWySV50smOSS92zgujLpkxWcVmtN+BVgAGcAaQc1+ebbAAAAAElFTkSuQmCC');\n    background-repeat: no-repeat;\n}\n\n.gc-spread-editComment {\n    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjgxRDBDRTYzNDJCNDExRTc4OEM4QkU2MjcxNTlCOTFGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjgxRDBDRTY0NDJCNDExRTc4OEM4QkU2MjcxNTlCOTFGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODFEMENFNjE0MkI0MTFFNzg4QzhCRTYyNzE1OUI5MUYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ODFEMENFNjI0MkI0MTFFNzg4QzhCRTYyNzE1OUI5MUYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz54ygF9AAACB0lEQVR42pSSP2gUURDGvz1DwNIyggiXRjshWEiukq3UQgs767VIFQ2CRUAQBMukkVsR4xUWphC8UkgagwlGBCEI6p6g8ZYTchHu9s/778zbVREtzLFz77Hsb76ZbwY44K/dbjsXRY7vjYOCYRji1tQUEkrw33DyBCQYotPpoNVq4S69C4a7K1RCAOcspNJQUkMIhaIUKIoqjo1uo3k5AfpLQLqMq3GEOI6DYPh1xR05eqpK7xw9Bs4qOimMxOdu+Ae4ukpVTF7C3vA79xz8Ks3B0p/x4az+J3j+2j0IqSBKjYY1tiYtPRXkwWdn/wLPXW/DWm5NQlCLDcNwXW7AijA49OgxmrPbeLE0/Vtx4T5A7cBVnmhSb2htvFkMW1ep9tMUeP8arcORBy8sPKh94G81JJtKMaG19tm62yfwrreHrTcpvqz1EXVjzMyQ4p2HsEaQapWYT6kUBVX64e2ya548TRmld9fZ6rSmrO/Cq35MRhh828dgMKTYx8bLHTR4rlyKM1VmZxSZUvX2U4nh5FOK2TPHsbm1gysXJ6FJeYLr5w/Bc60hvlsPKu8Dj67X28WNm6+wON+kEWloQ7Ci+jfW1pEXJfKcNiovkOV0z0q/Xfy+yCUMjXFxftqDlgxW2lYb8vzpnBuPBEYEj8fCg+NMIMskJZDIS4myUCiF9MvBa8xG/xBgAKOSrgO6at9SAAAAAElFTkSuQmCC');\n    background-repeat: no-repeat;\n}\n\n.gc-spread-deleteComment {\n    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAPCAYAAADtc08vAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjZCODVGRUQxNDJCNDExRTc4NzFDQTlCRDg2QzUzRTlEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjZCODVGRUQyNDJCNDExRTc4NzFDQTlCRDg2QzUzRTlEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NkI4NUZFQ0Y0MkI0MTFFNzg3MUNBOUJEODZDNTNFOUQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NkI4NUZFRDA0MkI0MTFFNzg3MUNBOUJEODZDNTNFOUQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7t98J5AAACbUlEQVR42pRTTUhUURg988bGJiUoxVL8CQ0kEkSSoIwgyKIIKgiCkFYtCjeaYUxRFERRuHE2LQoKpE1ULqIWRbXJSNoUZFDUlGHoFI6G8967f+/evnffG90JPfg49++c79zvfi8RXD2hDcyU4qJv5eWRR/jPz6G4HnDZIDz2MH9q/5ABEqVN3X9krT57bOeyAslztzPcZye56wnh+gOfD3beCUXkwNF9JlV2I5GTY8sJ2GyFqbtG//iD+ZuP4c7MIt24DnUNdZjc04aiUvB9Ds/j8D1GSOEyuD7D6fP3E2UlmaqubqRX1ODL4DVMj39E5e4daN26HSYQMFpY1JoTcjvPZp/gTO8u45SMsGevwS5lUV9RgfL11fhwMQv/1zQVQhFBwhhJ4xCVRS4omLJFhLj3AnOZIai/C0gf7kbHg2GsbtuIicxwRDAlkQg1iUohwCUJTDas2SxuPUXAOJzGWqzqOYBkZTk6R67ASacw++Y9kaKsITnEUJBzCUUuHJNI0Dopk2Jl33HopLEEJwm0D/dBFOYpo7BrkYvAOhGCRCjKNvwsfJoczaC6qgmpLa1UJLl0Zzpcs7cD2hZSxvVQFoWUFAHsK4iWWpRvaieSWLxzeKiUObId4GvOQ/73HPL5Alqa6zGTn4iKKMmKLVAQZQhd6PiupYyhg2/fp9G1rQlvxyfQcygFtehAxFlNXKh4rOPs2s4D5HJTGMy8w4X+Zji0p4JYQNJ9xl6+guezuON8uHHH2S6kdd8TCHRA5BZL1kZDKr304zwf7TXFBY4FEigWuSUXXQ7XFSQi4DEB5kswLmwDCXo5RW3+T4ABABxKzef1hlR0AAAAAElFTkSuQmCC');\n    background-repeat: no-repeat;\n}\n\n/*-----contextmenu end-----*/\n\n/*-----chart start-----*/\n.gcdv-control {\n    outline: none;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    user-select: none\n}\n\n.gcdv-state-disabled {\n    opacity: .5;\n    cursor: default;\n    pointer-events: none\n}\n\n.gcdv-tooltip {\n    position: absolute;\n    z-index: 1000;\n    top: 0;\n    left: 0;\n    pointer-events: none;\n    max-width: 400px;\n    padding: 6px;\n    background-color: #ffffe5;\n    border: 1px solid rgba(0, 0, 0, .1);\n    border-radius: 6px;\n    box-shadow: 0 6px 12px rgba(0, 0, 0, .175);\n    box-sizing: border-box\n}\n\n.gcdv-popup {\n    background-color: #fff;\n    box-shadow: 0 3px 9px rgba(0, 0, 0, .5);\n    z-index: 1500;\n    margin: 2px 0\n}\n\n.gcdv-popup-backdrop {\n    position: fixed;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    z-index: 1500;\n    background-color: rgba(0, 0, 0, .5)\n}\n\n/*-----custom chart start-----*/\n.gcdv-tooltip {\n    border-radius: 0;\n    box-shadow: 3px 3px 3px #8E8E8E;\n}\n\n/*-----custom chart end-----*/\n/*-----chart end-----*/", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "../../../../style-loader/addStyles.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/styles.css");


/***/ })

},[2]);
//# sourceMappingURL=styles.bundle.js.map