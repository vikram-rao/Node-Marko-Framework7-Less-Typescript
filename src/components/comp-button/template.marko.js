function create(__helpers) {
  var __widgetType = {
          name: "/markojstest3$0.0.1/src/components/comp-button/index",
          def: function() {
            return require("./");
          }
        },
      __markoWidgets = require("marko-widgets"),
      __widgetAttrs = __markoWidgets.attrs,
      str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x,
      __loadTag = __helpers.t,
      w_widget = __loadTag(require("marko-widgets/taglib/widget-tag")),
      attr = __helpers.a,
      escapeXmlAttr = __helpers.xa,
      attrs = __helpers.as;

  return function render(data, out) {
    w_widget({
        type: __widgetType,
        _cfg: data.widgetConfig,
        _state: data.widgetState,
        _props: data.widgetProps,
        _body: data.widgetBody,
        renderBody: function renderBody(out, widget) {
          out.w("<input type=\"button\"" +
            attr("value", data.buttonName) +
            attr("id", widget.id) +
            " data-w-onclick=\"handleButtonClick|" +
            escapeXmlAttr(widget.id) +
            "\"" +
            attrs(__widgetAttrs(widget)) +
            ">");
        }
      }, out);
  };
}

(module.exports = require("marko").c(__filename)).c(create);
