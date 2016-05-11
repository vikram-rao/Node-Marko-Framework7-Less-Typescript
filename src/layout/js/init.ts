/**
 * Created by vikram on 29/04/16.
 */
// require('framework7')
declare var Dom7:any
declare var Framework7:any

var isAndroid = Framework7.prototype.device.android === true;
var isIos = Framework7.prototype.device.ios === true;

var $$ = Dom7;

var appProps = {
    template7Pages: true
};
var mainViewProps = {}

if (isAndroid) {
    var elements =  Dom7('head').children("link[device-type='ios1']")
    for(var i = 0 ; i<elements.length;i++){
        elements[i].parentNode.removeChild(elements[i])
    }
}
else {
    var elements =  Dom7('head').children("link[device-type='material1']")
    for(var i = 0 ; i<elements.length;i++){
        elements[i].parentNode.removeChild(elements[i])
    }
}
if (isAndroid) {
    $$('.view.navbar-through').removeClass('navbar-through').addClass('navbar-fixed');
    $$('.view .page').addClass('toolbar-fixed');
    appProps["material"] = true;
    mainViewProps["dynamicNavbar"] = false;
} else {
    mainViewProps["dynamicNavbar"] = true;
}
console.log(appProps)
var myApp = new Framework7(appProps);
console.log(mainViewProps)
var mainView = myApp.addView('.view-main', mainViewProps);
