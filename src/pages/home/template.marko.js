function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x,
      __browser_json = require.resolve("./browser.json"),
      __loadTag = __helpers.t,
      lasso_page = __loadTag(require("lasso/taglib/page-tag")),
      lasso_slot = __loadTag(require("lasso/taglib/slot-tag")),
      lasso_head = __loadTag(require("lasso/taglib/head-tag")),
      comp_button = __loadTag(require("../../components/comp-button")),
      init_widgets = __loadTag(require("marko-widgets/taglib/init-widgets-tag")),
      lasso_body = __loadTag(require("lasso/taglib/body-tag"));

  return function render(data, out) {
    lasso_page({
        name: "my-page",
        packagePath: __browser_json,
        dirname: __dirname,
        filename: __filename
      }, out);

    out.w("<html><head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, minimal-ui\"><meta name=\"apple-mobile-web-app-capable\" content=\"yes\"><meta name=\"apple-mobile-web-app-status-bar-style\" content=\"black\">");

    lasso_slot({
        name: "ios-slot1",
        externalStyleAttrs: {
            "device-type": "ios1"
          }
      }, out);

    lasso_slot({
        name: "material-slot1",
        externalStyleAttrs: {
            "device-type": "material1"
          }
      }, out);

    lasso_slot({
        name: "my-material-slot1",
        externalStyleAttrs: {
            "device-type": "material1"
          }
      }, out);

    lasso_slot({
        name: "my-ios-slot1",
        externalStyleAttrs: {
            "device-type": "ios1"
          }
      }, out);

    lasso_head({}, out);

    out.w("</head><body><div class=\"panel-overlay\"></div><div class=\"panel panel-left panel-reveal\"><div class=\"content-block\"><p>Left panel content goes here</p></div></div><div class=\"views tabs toolbar-through\"><div id=\"tab-1\" class=\"view view-main tab active\"><div class=\"navbar\"><div class=\"navbar-inner\"><div class=\"left\"><a href=\"#\" class=\"link icon-only open-panel\"><i class=\"icon icon-bars\"></i></a></div><div class=\"center sliding\">Awesome App</div></div></div><div class=\"pages navbar-through\"><div data-page=\"index\" class=\"page\"><div class=\"page-content\"><div class=\"list-block\"><ul><li><a href=\"#\" class=\"item-link item-content\"><div class=\"item-inner\"><div class=\"item-title\">First Item</div></div></a></li><li><a href=\"#\" class=\"item-link item-content\"><div class=\"item-media\"><i class=\"icon icon-f7\"></i></div><div class=\"item-inner\"><div class=\"item-title\">Second Item</div><div class=\"item-after\"><span class=\"badge\">5</span></div></div></a></li><li><div class=\"item-content\"><div class=\"item-inner\"><div class=\"item-title\">Item 1</div></div></div></li><li><div class=\"item-content\"><div class=\"item-inner\"><div class=\"item-title\">Item 1</div></div></div></li><li><div class=\"item-content\"><div class=\"item-inner\"><div class=\"item-title\">Item 1</div></div></div></li><li><div class=\"item-content\"><div class=\"item-inner\"><div class=\"item-title\">Item 1</div></div></div></li><li><div class=\"item-content\"><div class=\"item-inner\"><div class=\"item-title\">Item 1</div></div></div></li><li><div class=\"item-content\"><div class=\"item-inner\"><div class=\"item-title\">Item 1</div></div></div></li><li><div class=\"item-content\"><div class=\"item-inner\"><div class=\"item-title\">Item 1</div></div></div></li><li><div class=\"item-content\"><div class=\"item-inner\"><div class=\"item-title\">Item 1</div></div></div></li><li><div class=\"item-content\"><div class=\"item-inner\"><div class=\"item-title\">Item 1</div></div></div></li><li><div class=\"item-content\"><div class=\"item-inner\"><div class=\"item-title\">Item 1</div></div></div></li><li><div class=\"item-content\"><div class=\"item-inner\"><div class=\"item-title\">Item 1</div></div></div></li><li><div class=\"item-content\"><div class=\"item-inner\"><div class=\"item-title\">Item 1</div></div></div></li><li><div class=\"item-content\"><div class=\"item-inner\"><div class=\"item-title\">Item 1</div></div></div></li><li><div class=\"item-content\"><div class=\"item-inner\"><div class=\"item-title\">Item 1</div></div></div></li><li><div class=\"item-content\"><div class=\"item-inner\"><div class=\"item-title\">Item Last</div></div></div></li></ul></div></div></div></div></div><div id=\"tab-2\" class=\"view tab\"><div class=\"navbar\"><div class=\"navbar-inner\"><div class=\"left\"><a href=\"#\" class=\"link icon-only open-panel\"><i class=\"icon icon-bars\"></i></a></div><div class=\"center sliding\">Awesome App</div></div></div><div class=\"pages navbar-through\"><div data-page=\"index\" class=\"page\"><div class=\"page-content\"><div class=\"list-block\"><ul><li><a href=\"#\" class=\"item-link item-content\"><div class=\"item-inner\"><div class=\"item-title\">Second Tab First Item</div></div></a></li><li><a href=\"#\" class=\"item-link item-content\"><div class=\"item-media\"><i class=\"icon icon-f7\"></i></div><div class=\"item-inner\"><div class=\"item-title\">Second Item</div><div class=\"item-after\"><span class=\"badge\">5</span></div></div></a></li><li><div class=\"item-content\"><div class=\"item-inner\"><div class=\"item-title\">Item 1</div></div></div></li><li><div class=\"item-content\"><div class=\"item-inner\"><div class=\"item-title\">Item 1</div></div></div></li><li><div class=\"item-content\"><div class=\"item-inner\"><div class=\"item-title\">Item 1</div></div></div></li><li><div class=\"item-content\"><div class=\"item-inner\"><div class=\"item-title\">Item 1</div></div></div></li><li><div class=\"item-content\"><div class=\"item-inner\"><div class=\"item-title\">Item 1</div></div></div></li><li><div class=\"item-content\"><div class=\"item-inner\"><div class=\"item-title\">Item 1</div></div></div></li><li><div class=\"item-content\"><div class=\"item-inner\"><div class=\"item-title\">Item 1</div></div></div></li><li><div class=\"item-content\"><div class=\"item-inner\"><div class=\"item-title\">Item 1</div></div></div></li><li><div class=\"item-content\"><div class=\"item-inner\"><div class=\"item-title\">Item 1</div></div></div></li><li><div class=\"item-content\"><div class=\"item-inner\"><div class=\"item-title\">Item 1</div></div></div></li><li><div class=\"item-content\"><div class=\"item-inner\"><div class=\"item-title\">Item 1</div></div></div></li><li><div class=\"item-content\"><div class=\"item-inner\"><div class=\"item-title\">Item 1</div></div></div></li><li><div class=\"item-content\"><div class=\"item-inner\"><div class=\"item-title\">Item 1</div></div></div></li><li><div class=\"item-content\"><div class=\"item-inner\"><div class=\"item-title\">Item 1</div></div></div></li><li><div class=\"item-content\"><div class=\"item-inner\"><div class=\"item-title\">Item Last</div></div></div></li></ul></div></div></div></div></div><div id=\"tab-3\" class=\"view tab\"><div class=\"navbar\"><div class=\"navbar-inner\"><div class=\"left\"><a href=\"#\" class=\"link icon-only open-panel\"><i class=\"icon icon-bars\"></i></a></div><div class=\"center sliding\">Awesome App</div></div></div><div class=\"pages navbar-through\"><div data-page=\"index\" class=\"page\"><div class=\"page-content\"><div class=\"list-block\"><ul><li><a href=\"#\" class=\"item-link item-content\"><div class=\"item-inner\"><div class=\"item-title\">Third Tab First Item</div></div></a></li><li><a href=\"#\" class=\"item-link item-content\"><div class=\"item-media\"><i class=\"icon icon-f7\"></i></div><div class=\"item-inner\"><div class=\"item-title\">Second Item</div><div class=\"item-after\"><span class=\"badge\">5</span></div></div></a></li><li><div class=\"item-content\"><div class=\"item-inner\"><div class=\"item-title\">Item 1</div></div></div></li><li><div class=\"item-content\"><div class=\"item-inner\"><div class=\"item-title\">Item 1</div></div></div></li><li><div class=\"item-content\"><div class=\"item-inner\"><div class=\"item-title\">Item 1</div></div></div></li><li><div class=\"item-content\"><div class=\"item-inner\"><div class=\"item-title\">Item 1</div></div></div></li><li><div class=\"item-content\"><div class=\"item-inner\"><div class=\"item-title\">Item 1</div></div></div></li><li><div class=\"item-content\"><div class=\"item-inner\"><div class=\"item-title\">Item 1</div></div></div></li><li><div class=\"item-content\"><div class=\"item-inner\"><div class=\"item-title\">Item 1</div></div></div></li><li><div class=\"item-content\"><div class=\"item-inner\"><div class=\"item-title\">Item 1</div></div></div></li><li><div class=\"item-content\"><div class=\"item-inner\"><div class=\"item-title\">Item 1</div></div></div></li><li><div class=\"item-content\"><div class=\"item-inner\"><div class=\"item-title\">Item 1</div></div></div></li><li><div class=\"item-content\"><div class=\"item-inner\"><div class=\"item-title\">Item 1</div></div></div></li><li><div class=\"item-content\"><div class=\"item-inner\"><div class=\"item-title\">Item 1</div></div></div></li><li><div class=\"item-content\"><div class=\"item-inner\"><div class=\"item-title\">Item 1</div></div></div></li><li><div class=\"item-content\"><div class=\"item-inner\"><div class=\"item-title\">Item 1</div></div></div></li><li><div class=\"item-content\"><div class=\"item-inner\"><div class=\"item-title\">Item Last</div></div></div></li></ul></div></div></div></div></div><div class=\"toolbar tabbar tabbar-scrollable\"><div class=\"toolbar-inner\"><a href=\"#tab-1\" class=\"tab-link active\">Tab 1</a><a href=\"#tab-2\" class=\"tab-link\">Tab 2</a><a href=\"#tab-3\" class=\"tab-link\">Tab 3</a></div></div></div>");

    comp_button({}, out);

    init_widgets({}, out);

    lasso_body({}, out);

    out.w("</body></html>");
  };
}

(module.exports = require("marko").c(__filename)).c(create);
