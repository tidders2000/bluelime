/*@cc_on;document.querySelectorAll||(document.querySelectorAll=function(e){var n,t=document.createElement('style'),r=[];for(document.documentElement.firstChild.appendChild(t),document._qsa=[],t.styleSheet.cssText=e+'{x-qsa:expression(document._qsa && document._qsa.push(this))}',window.scrollBy(0,0),t.parentNode.removeChild(t);document._qsa.length;)(n=document._qsa.shift()).style.removeAttribute('x-qsa'),r.push(n);return document._qsa=null,r}),document.querySelector||(document.querySelector=function(e){var t=document.querySelectorAll(e);return t.length?t[0]:null});@*/!function(){var t=function(e){return e.replace(/^\s+|\s+$/g,'')},n=function(e){return new RegExp('(^|\\s+)'+e+'(\\s+|$)')},r=function(e,t,n){for(var r=0;r<e.length;r++)t.call(n,e[r])};function e(e){this.element=e};e.prototype={add:function(){r(arguments,function(e){this.contains(e)||(this.element.className=t(this.element.className+' '+e))},this)},remove:function(){r(arguments,function(e){this.element.className=t(this.element.className.replace(n(e),' '))},this)},toggle:function(e){return this.contains(e)?(this.remove(e),!1):(this.add(e),!0)},contains:function(e){return n(e).test(this.element.className)},item:function(e){return this.element.className.split(/\s+/)[e]||null},replace:function(e,t){this.remove(e),this.add(t)}},'classList'in Element.prototype||Object.defineProperty(Element.prototype,'classList',{get:function(){return new e(this)}}),window.DOMTokenList&&!DOMTokenList.prototype.replace&&(DOMTokenList.prototype.replace=e.prototype.replace)}();Array.prototype.indexOf||(Array.prototype.indexOf=function(e,t){'use strict';var n;if(null==this)throw new TypeError('"this" is null or not defined');var c=Object(this),i=c.length>>>0;if(0===i)return-1;var r=0|t;if(r>=i)return-1;for(n=Math.max(r>=0?r:i-Math.abs(r),0);n<i;n++)if(n in c&&c[n]===e)return n;return-1});var CookieScript=function(){this.onAcceptAll=function(){};this.onAccept=function(){};this.onReject=function(){};this.onClose=function(){};this.currentState=function(){var t={action:c('action')};var e=c('key');if(e){t.key=e};return t};this.expireDays=function(){return H};this.show=function(){h()};this.hide=function(){s();d()};this.categories=function(){return i};this.dispatchEventNames=[];this.acceptAllAction=function(){B(!0);var e='accept',t=me(i);s();v('action','accept');k();R('accept',t.join(','));f(e,'');b(!0);d();ge();F()};this.acceptAction=function(e){return!1};this.rejectAllAction=function(){B(!1);ke([]);f('reject','');v('action','reject');v('categories',JSON.stringify([]));R('reject','');j();s();b(!1);d();ve();F()};this.demoLoadView=function(){o('Warning is real site script')};var e=this,Ae='\n    <style data-type="cookiescriptstyles">\n      #cookiescript_injected {\r\n    background-color: #2d2d2d;\r\n    z-index: 999997;\r\n    opacity: 1;\r\n    font-size: 14px;\r\n    font-weight: normal;\r\n    font-family: \'Open Sans\', Arial, \'Trebuchet MS\', \'Segoe UI\', \'Helvetica\', sans-serif;\r\n    box-shadow: 1px 2px 8px 0 rgba(0, 0, 0, 0.35);\r\n    color: #FFFFFF;\r\n    box-sizing: border-box;\r\n}\r\n.cookiescript_checkbox_label {\r\n    cursor: pointer;\r\n    display: flex;\r\n    align-items: center;\r\n    padding:0 4px;\r\n    line-height: 1.5;\r\n    margin:0;\r\n}\r\n#cookiescript_close {\r\n    position: absolute;\r\n    top: 10px;\r\n    right: 10px;\r\n    font-size: 29px;\r\n    line-height: 13px;\r\n    cursor: pointer;\r\n    color: #FFFFFF;\r\n    height: 15px;\r\n    width: 15px;\r\n    margin: 0;\r\n    padding: 0;\r\n    overflow: hidden;\r\n    letter-spacing: 0;\r\n    font-family: \'Trebuchet MS\', \'Arial\', sans-serif;\r\n    font-weight: 100;\r\n    opacity: 0.85;\r\n    z-index: 999999;\r\n}\r\n\r\n#cookiescript_buttons {\r\n    display: flex;\r\n    flex-direction: row;\r\n    font-weight: 700;\r\n}\r\n#cookiescript_manage_wrap {\r\n    text-transform: uppercase;\r\n    text-align: center;\r\n    font-size: 11px;\r\n    letter-spacing: 0.1px;\r\n    font-weight: 500;\r\n    outline: none;\r\n}\r\n#cookiescript_manage {\r\n    display: inline;\r\n    cursor: pointer;\r\n    color: #FFFFFF;\r\n    opacity:0.85;\r\n}\r\n#cookiescript_manage #cookiescript_manageicon .cookiescript_gear {\r\n    fill: #FFFFFF;\r\n}\r\n#cookiescript_manage:hover #cookiescript_manageicon .cookiescript_gear {\r\n    fill: #6BBE6B ;;\r\n}\r\n\r\nsvg#cookiescript_manageicon {\r\n    width: 15px;\r\n    height: 15px;\r\n    display: inline;\r\n    margin: 0 5px 0 0;\r\n    padding: 0;\r\n    position: relative;\r\n    top: 3px;\r\n    vertical-align: baseline;\r\n}\r\n#cookiescript_header {\r\n    background-color: transparent;\r\n    z-index: 999998;\r\n    color: #FFFFFF;\r\n    font-size: 17px;\r\n    line-height: 1.3;\r\n    font-weight: 600;\r\n    letter-spacing: 0.4px;\r\n    opacity:1;\r\n}\r\n.cookiescript_checkbox {\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\ninput.cookiescript_checkbox_input {\r\n}\r\nspan.cookiescript_checkbox_text {\r\n    display: inline-block;\r\n    font-size: 11px;\r\n    margin: 0;\r\n    text-transform: uppercase;\r\n    font-weight: 500;\r\n    color: #FFFFFF;\r\n}\r\n#cookiescript_accept,\r\n#cookiescript_save {\r\n    border: 0;\r\n    transition: all 0.25s ease 0s;\r\n    background-color: #6BBE6B ;\r\n    color: #FFFFFF;\r\n    text-transform: uppercase;\r\n    font-size: 11px;\r\n    text-align: center;\r\n    line-height: 3.3;\r\n    letter-spacing: 0.4px;\r\n}\r\n\/*IE 9 fixes*\/\r\n@media screen and (min-width:0\\0) and (min-resolution: .001dpcm) {\r\n    .cookiescript_checkbox_label {\r\n        position: relative;\r\n        top:-10px;\r\n    }\r\n    #cookiescript_accept, #cookiescript_reject, #cookiescript_save{\r\n    \tdisplay: inline-block;\r\n    }\r\n    #cookiescript_buttons{\r\n    \ttext-align:center;\r\n    }\r\n}\r\n#cookiescript_save{\r\n}\r\n#cookiescript_reject {\r\n    border: 1px solid #FFFFFF;\r\n    text-align: center;\r\n    line-height: 3;\r\n    font-size: 11px;\r\n    text-transform: uppercase;\r\n    letter-spacing: 0.4px;\r\n    color: #FFFFFF;\r\n    background: #2d2d2d;\r\n}\r\n\r\n\r\n#cookiescript_accept, #cookiescript_reject, #cookiescript_save {\r\n    font-weight: 500;\r\n    cursor: pointer;\r\n    white-space: nowrap;\r\n    transition-duration: 100ms;\r\n    transition-timing-function: ease-in-out;\r\n    min-width: 103px;\r\n}\r\n.cookiescript_bigger {\r\n    transform: scale(1.1);\r\n}\r\n#cookiescript_link {\r\n    text-decoration: none;\r\n    color: #FFFFFF;\r\n    font-size: 9px;\r\n    text-align: center;\r\n    font-weight: 400;\r\n    text-transform: uppercase;\r\n    opacity: 0.8;\r\n}\r\n\r\n#cookiescript_readmore,\r\n#cookiescript_reportlink,\r\n#cookiescript_cookiescriptlink {\r\n    border: 0;\r\n    padding: 0;\r\n    cursor: pointer;\r\n    margin: 0;\r\n    transition: all 100ms ease 0s;\r\n    background-color: transparent;\r\n    color: #FFFFFF;\r\n    display: inline;\r\n    font-size: 11px;\r\n}\r\n\r\n#cookiescript_description {\r\n    color: #FFFFFF;\r\n    font-size: 11px;\r\n    letter-spacing: 0.3px;\r\n    line-height: 1.8;\r\n    font-weight: 400;\r\n    opacity: 0.85;\r\n}\r\n#cookiescript_checkboxs {\r\n}\r\n#cookiescript_close:hover,\r\n#cookiescript_manage:hover,\r\n#cookiescript_link:hover\r\n{\r\n    opacity: 1;\r\n}\r\n#cookiescript_reject:hover {\r\n    background-color: #242424;\r\n}\r\n#cookiescript_accept:hover,\r\n#cookiescript_save:hover {\r\n    background-color: #569856;\r\n}\r\n#cookiescript_readmore:hover,\r\n#cookiescript_reportlink:hover,\r\n#cookiescript_cookiescriptlink:hover\r\n{\r\n    color: #6BBE6B;\r\n}\r\n#cookiescript_badge {\r\n    position: fixed;\r\n    line-height: 0;\r\n    cursor: pointer;\r\n    z-index: 99999;\r\n    font-size: 0;\r\n    color: #999;\r\nleft: 10px;\r\n    display: flex;\r\n    flex-direction: row;\r\n    opacity: 1;\r\n}\r\n\r\n#cookiescript_badgetext{\r\n    text-transform: uppercase;\r\n    font-weight: 600;\r\n    font-family: \'Open Sans\', Arial, \'Trebuchet MS\', \'Segoe UI\', \'Helvetica\', sans-serif;\r\n    overflow: hidden;\r\n    transition-duration: 500ms;\r\n    white-space: nowrap;\r\n    padding-right: 0;\r\n    color: #FFFFFF;\r\n}\r\n\r\n#cookiescript_badgesvg{\r\n    width:40px;\r\n    height: 40px;\r\n}\r\n\r\n\r\n\r\n#cookiescript_badge {\r\ntop: 10px;\r\n    border-radius:25px;\r\n    padding:3px;\r\n    transition-duration: 500ms;\r\n    box-shadow: 1px 2px 8px 0 rgba(0, 0, 0, 0.2);\r\n    background: #2d2d2d;\r\n}\r\n#cookiescript_badge:hover #cookiescript_badgetext{\r\n    max-width: 300px;\r\n    padding-right: 15px;\r\n    padding-left: 12px;\r\n}\r\n#cookiescript_badgetext {\r\n    font-size: 16px;\r\n    line-height: 2.5;\r\n    max-width: 0;\r\n}\r\n#cookiescript_badgeimage {\r\n    width: 40px;\r\n    height: 40px;\r\n}\r\n@media only screen and (max-width: 414px) {\r\n    #cookiescript_badgeimage {\r\n        width: 30px;\r\n        height: 30px;\r\n    }\r\n    #cookiescript_badgesvg{\r\n        width:30px;\r\n        height: 30px;\r\n    }\r\n    #cookiescript_badgetext{\r\n        display: none;\r\n    }\r\n}\r\n\/*IE 9 fixes*\/\r\n@media screen and (min-width:0\\0) and (min-resolution: .001dpcm) {\r\n\t#cookiescript_badgeimage{\r\n    \tfloat:left;\r\n    }\r\n}\r\n\r\n@media print{\r\n    #cookiescript_injected{\r\n        display:none;\r\n    }\r\n}\r\n\r\n\r\n\r\n#cookiescript_injected .mdc-checkbox{\r\n    box-sizing: content-box !important;\r\n}\r\n#cookiescript_injected .mdc-checkbox__native-control {\r\n    z-index: 1;\r\n}\r\n#cookiescript_injected .mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__background::before, #cookiescript_injected .mdc-checkbox .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background::before {\r\n    background-color: var(--mdc-theme-secondary, #FFFFFF);\r\n}\r\n\r\n#cookiescript_injected .mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom;padding:11px}#cookiescript_injected .mdc-checkbox .mdc-checkbox__native-control:checked~.mdc-checkbox__background::before,#cookiescript_injected .mdc-checkbox .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background::before{background-color:#FFFFFF}@supports not (-ms-ime-align:auto){.mdc-checkbox .mdc-checkbox__native-control:checked~.mdc-checkbox__background::before,#cookiescript_injected .mdc-checkbox .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background::before{background-color:var(--mdc-theme-secondary, #FFFFFF)}}#cookiescript_injected .mdc-checkbox .mdc-checkbox__background{top:11px;left:11px}#cookiescript_injected .mdc-checkbox .mdc-checkbox__background::before{top:-13px;left:-13px;width:40px;height:40px}#cookiescript_injected .mdc-checkbox .mdc-checkbox__native-control{top:0;right:0;left:0;width:40px;height:40px}#cookiescript_injected .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate)~.mdc-checkbox__background{border-color:#FFFFFF;background-color:transparent}#cookiescript_injected .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,#cookiescript_injected .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background{border-color:#FFFFFF;background-color:#FFFFFF}#cookiescript_injected .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate)~.mdc-checkbox__background{border-color:rgba(255,255,255,0.26);background-color:transparent}#cookiescript_injected .mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,#cookiescript_injected .mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background{border-color:transparent;background-color:rgba(255,255,255,0.26)}#cookiescript_injected .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#2d2d2d}#cookiescript_injected .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#2d2d2d}#cookiescript_injected .mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid #FFFFFF;border-radius:2px;background-color:transparent;pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms 0s cubic-bezier(.4,0,.6,1),border-color 90ms 0s cubic-bezier(.4,0,.6,1)}#cookiescript_injected .mdc-checkbox__background .mdc-checkbox__background::before{background-color:#000}@supports not (-ms-ime-align:auto){.mdc-checkbox__background .mdc-checkbox__background::before{background-color:var(--mdc-theme-on-surface,#000)}}#cookiescript_injected .mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms 0s cubic-bezier(.4,0,.6,1)}#cookiescript_injected .mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0s cubic-bezier(.4,0,.6,1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}#cookiescript_injected .mdc-checkbox__native-control:checked~.mdc-checkbox__background,#cookiescript_injected .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{transition:border-color 90ms 0s cubic-bezier(0,0,.2,1),background-color 90ms 0s cubic-bezier(0,0,.2,1)}#cookiescript_injected .mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,#cookiescript_injected .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}#cookiescript_injected .mdc-checkbox__background::before{position:absolute;-webkit-transform:scale(0,0);transform:scale(0,0);border-radius:50%;opacity:0;pointer-events:none;content:"";will-change:opacity,transform;transition:opacity 90ms 0s cubic-bezier(.4,0,.6,1),-webkit-transform 90ms 0s cubic-bezier(.4,0,.6,1);transition:opacity 90ms 0s cubic-bezier(.4,0,.6,1),transform 90ms 0s cubic-bezier(.4,0,.6,1);transition:opacity 90ms 0s cubic-bezier(.4,0,.6,1),transform 90ms 0s cubic-bezier(.4,0,.6,1),-webkit-transform 90ms 0s cubic-bezier(.4,0,.6,1)}#cookiescript_injected .mdc-checkbox__native-control:focus~.mdc-checkbox__background::before{-webkit-transform:scale(1);transform:scale(1);opacity:.12;transition:opacity 80ms 0s cubic-bezier(0,0,.2,1),-webkit-transform 80ms 0s cubic-bezier(0,0,.2,1);transition:opacity 80ms 0s cubic-bezier(0,0,.2,1),transform 80ms 0s cubic-bezier(0,0,.2,1);transition:opacity 80ms 0s cubic-bezier(0,0,.2,1),transform 80ms 0s cubic-bezier(0,0,.2,1),-webkit-transform 80ms 0s cubic-bezier(0,0,.2,1)}#cookiescript_injected .mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit}#cookiescript_injected .mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}#cookiescript_injected .mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0s cubic-bezier(0,0,.2,1),-webkit-transform 180ms 0s cubic-bezier(0,0,.2,1);transition:opacity 180ms 0s cubic-bezier(0,0,.2,1),transform 180ms 0s cubic-bezier(0,0,.2,1);transition:opacity 180ms 0s cubic-bezier(0,0,.2,1),transform 180ms 0s cubic-bezier(0,0,.2,1),-webkit-transform 180ms 0s cubic-bezier(0,0,.2,1);opacity:1}#cookiescript_injected .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark{-webkit-transform:rotate(45deg);transform:rotate(45deg);opacity:0;transition:opacity 90ms 0s cubic-bezier(.4,0,.6,1),-webkit-transform 90ms 0s cubic-bezier(.4,0,.6,1);transition:opacity 90ms 0s cubic-bezier(.4,0,.6,1),transform 90ms 0s cubic-bezier(.4,0,.6,1);transition:opacity 90ms 0s cubic-bezier(.4,0,.6,1),transform 90ms 0s cubic-bezier(.4,0,.6,1),-webkit-transform 90ms 0s cubic-bezier(.4,0,.6,1)}#cookiescript_injected .mdc-checkbox{-webkit-tap-highlight-color:transparent}\r\n#cookiescript_injected {\r\ntop: 20px;\r\nleft: 20px;\r\n    position: fixed;\r\n    padding: 15px 20px 15px 20px;\r\n    width: 300px;\r\n    text-align: left;\r\n    max-height: 85%;\r\n    overflow-y: auto;\r\n    max-width: calc(100% - 40px);\r\n}\r\n#cookiescript_copyright {\r\n    line-height: 1;\r\n    text-align: center;\r\n}\r\n#cookiescript_buttons {\r\n    justify-content: space-between;\r\n    margin: 0 -5px 0 -5px;\r\n    flex-wrap: wrap;\r\n}\r\n#cookiescript_manage_wrap {\r\n    margin: 0 0 11px 0;\r\n}\r\n#cookiescript_header {\r\n    padding: 14px 0 12px;\r\n    text-align: left;\r\n    margin: 0;\r\n}\r\n#cookiescript_checkboxs {\r\n    margin: -6px 0 18px -11px;\r\n}\r\n.cookiescript_checkbox {\r\n    margin: 0 0 -10px 0;\r\n}\r\n#cookiescript_accept,\r\n#cookiescript_save,\r\n#cookiescript_reject {\r\n    flex-grow: 1;\r\n    padding: 0 7px;\r\n    margin: 0 5px 10px 5px;\r\n}\r\n#cookiescript_description {\r\n    margin: 0 0 12px;\r\n}\r\n\r\n.cookiescript_checkbox_label{\r\n    padding: 0;\r\n    margin: 0 10px 0 -2px;\r\n}\r\n\r\n#cookiescript_injected{\r\n    transition: width 200ms 600ms;\r\n}\r\n\r\n#cookiescript_injected.hascookiereport{\r\n    width:600px;\r\n    transition: width 200ms 0ms;\r\n}\r\n#cookiescript_cookietablewrap {\r\n    transition: height 300ms 200ms, min-height 300ms 200ms, max-height 300ms 200ms, opacity 200ms 300ms;\r\n}\r\n#cookiescript_cookietablewrap.cookiescript_hidden {\r\n    transition: height 300ms 200ms, min-height 300ms 200ms, max-height 300ms 200ms, opacity 200ms 0ms;\r\n}\r\n\r\n#cookiescript_accept, #cookiescript_reject, #cookiescript_save {\r\n\tborder-radius: 20px;\r\n}\r\n\r\n#cookiescript_injected {\r\n\tborder-radius: 10px;\r\n}\r\n\r\n@media only screen and (max-width: 414px) {\r\n    #cookiescript_injected{\r\n    top: 0;\r\n    left: 0;\r\n        width: 100%;\r\n        padding: 15px;\r\n        border-radius:0;\r\n\t\tmax-width: 100%;\r\n    }\r\n    #cookiescript_description,\r\n    #cookiescript_buttons,\r\n    #cookiescript_manage_wrap,\r\n    #cookiescript_checkboxs\r\n    {\r\n        margin-bottom: 8px;\r\n    }\r\n    #cookiescript_header{\r\n        padding-top:5px;\r\n    }\r\n    #cookiescript_checkboxs {\r\n        display: flex;\r\n        flex-wrap: wrap;\r\n    }\r\n    #cookiescript_injected {\r\n\t\tmax-height: 100%;\r\n\t}\r\n}\r\n\r\n\n    <\/style>\n  ',je='<div id="cookiescript_injected">\n    <div id="cookiescript_header" data-cs-i18n-text="[]">\n    This website uses cookies  <\/div>\n  <div id="cookiescript_description">\n    <span data-cs-i18n-text="[]" data-cs-i18n-read="This website uses cookies to improve user experience. By using our website you consent to all cookies in accordance with our Cookie Policy.">\n      This website uses cookies to improve user experience. By using our website you consent to all cookies in accordance with our Cookie Policy.    <\/span>\n\n    \n      \n      <a\n        id="cookiescript_readmore"\n        data-cs-i18n-text="[]"\n        data-cs-i18n-url="[]"\n        href="\/policy.html"\n        target="_blank"\n      >\n        Read more      <\/a>\n\n      <\/div>\n  <div id="cookiescript_buttons">\n              <div id="cookiescript_accept" tabindex="0" role="button" data-cs-i18n-text="[]">\n        Accept all      <\/div>\n              <div id="cookiescript_reject" tabindex="0" role="button" data-cs-i18n-text="[]">\n        Decline all      <\/div>\n      <\/div>\n\n  <div id="cookiescript_copyright">\n    <a href="https:\/\/cookie-script.com" target="_blank" id="cookiescript_link">\n      Powered by cookie-script\n    <\/a>\n  <\/div>\n  <div id="cookiescript_close" tabindex="0" role="button">\u00d7<\/div>\n<\/div>\n',M='  \n  <div id="cookiescript_badge">\n          <div id="cookiescript_badgeimage">\n        <svg id="cookiescript_badgesvg" xmlns="http:\/\/www.w3.org\/2000\/svg" viewBox="0 0 320.28 320.28">\n          <defs>\n            <style>\n              .cookiescriptlogo {fill: #22b8f0;}\n            <\/style>\n          <\/defs>\n          <title>Cookie-Script logo<\/title>\n          <g id="cs_layer_2" data-name="cs_layer_2">\n            <g id="cs_layer_1" data-name="cs_layer_1">\n              <path class="cookiescriptlogo" d="M160.14,0A160.14,160.14,0,1,0,320.28,160.14,160.14,160.14,0,0,0,160.14,0Zm0,301.49A141.35,141.35,0,1,1,301.49,160.14,141.35,141.35,0,0,1,160.14,301.49Z"\/>\n              <circle class="cookiescriptlogo" cx="98.09" cy="106.52" r="35.11"\/>\n              <circle class="cookiescriptlogo" cx="88.27" cy="200.63" r="14.09"\/>\n              <circle class="cookiescriptlogo" cx="151.17" cy="251.06" r="22.63"\/>\n              <circle class="cookiescriptlogo" cx="238.42" cy="180.9" r="30.49"\/>\n              <circle class="cookiescriptlogo" cx="206.65" cy="86.27" r="18.53"\/>\n            <\/g>\n          <\/g>\n        <\/svg>\n      <\/div>\n              <div id="cookiescript_badgetext" data-cs-i18n-text="[]">\n        Cookie settings      <\/div>\n      <\/div>\n',m='CookieScriptConsent',H=30,We=window.location.href,Ue='152e05ccafdce2aab0107583479e9b74',Ye=!1,Ve=[],Xe=[],Ze=[],i=[],P=0,Ge='',Ee=[],Se={};var y=function(){w();setTimeout(function(){w()},500)},w=function(){var c=function(e){k();r('all')},t=function(){j()};if(q()){k();for(var e=0;e<i.length;e++){r(i[e])};r('all');o('_isCookieScannerRequest - TRUE');return!0};if(C()){if(ue()){var n=he();c(n);return!0}
else{t();r('strict');return!0}}
else{t();return!0}},F=function(){return!1},A=function(){return!1},J=function(){var e=document.querySelectorAll('table[data-cs-table-report="cookiescript"]');Array.prototype.slice.call(e).forEach(function(e){var r=e.querySelectorAll('thead th'),t=[];Array.prototype.slice.call(r).forEach(function(e){t.push(e.innerText)});var n=e.querySelectorAll('tbody tr');Array.prototype.slice.call(n).forEach(function(e){Array.prototype.slice.call(e.children).forEach(function(e,n){e.setAttribute('label',t[n])})})})},k=function(e){var t=e&&e.length>0?'[data-cookiescript="accepted"][data-cookiecategory]':'[data-cookiescript="accepted"]';W(t,e);U(t,e);Y(t,e);V(t,e);X(t,e);Z(t,e)},j=function(e){var a=n.get();for(var t in a){if(t===m||pe(t)||le(t,e)){continue};Ee.push(t);Se[t]=a[t];n.remove(t);if(n.get(t)!=='undefined'){var o=window.location.hostname.split('.');while(o.length>0&&n.get(t)!=='undefined'){var i=o.join('.'),c=location.pathname.split('/'),r='/';n.remove(t,{path:r,domain:i});n.remove(t,{path:r,domain:'.'+i});while(c.length>0&&n.get(t)!=='undefined'){r=c.join('/');n.remove(t,{path:r,domain:i});n.remove(t,{path:r,domain:'.'+i});c.pop()};o.shift()}}}},ze=function(e){return!1},W=function(e,t){var c=document.querySelectorAll('img'+e);if(c){for(var i=0;i<c.length;i++){var r=c[i];if(t&&t.length>0){var n=r.getAttribute('data-cookiecategory');if(n){t.forEach(function(e){n=n.replace(e,'').trim()});if(n.length>0){continue}}};r.setAttribute('src',r.getAttribute('data-src'));r.removeAttribute('data-cookiescript')}}},U=function(e,t){var a=!1,o=document.querySelectorAll('script[type="text/plain"]'+e);if(o){for(var c=0;c<o.length;c++){var r=o[c];if(t&&t.length>0){var i=r.getAttribute('data-cookiecategory');if(i){t.forEach(function(e){i=i.replace(e,'').trim()});if(i.length>0){continue}}};if(r.getAttribute('data-reload')==='true'){a=!0};var n=document.createElement('script');n.innerHTML=r.innerHTML;var s=Array.prototype.slice.call(r.attributes);s.forEach(function(e){n.setAttribute(e.name,e.value)});n.setAttribute('type','text/javascript');n.removeAttribute('data-cookiescript');ye(r,n)}};if(a){be()}},Y=function(e,t){var c=document.querySelectorAll('iframe'+e);if(c){for(var i=0;i<c.length;i++){var r=c[i];if(t&&t.length>0){var n=r.getAttribute('data-cookiecategory');if(n){t.forEach(function(e){n=n.replace(e,'').trim()});if(n.length>0){continue}}};r.setAttribute('src',r.getAttribute('data-src'));r.removeAttribute('data-cookiescript')}}},V=function(e,t){var c=document.querySelectorAll('embed'+e);if(c){for(var i=0;i<c.length;i++){var n=c[i];if(t&&t.length>0){var r=n.getAttribute('data-cookiecategory');if(r){t.forEach(function(e){r=r.replace(e,'').trim()});if(r.length>0){continue}}};n.setAttribute('src',n.getAttribute('data-src'));n.removeAttribute('data-cookiescript');var o=n.outerHTML;N(n,o)}}},X=function(e,t){var c=document.querySelectorAll('object'+e);if(c){for(var i=0;i<c.length;i++){var n=c[i];if(t&&t.length>0){var r=n.getAttribute('data-cookiecategory');if(r){t.forEach(function(e){r=r.replace(e,'').trim()});if(r.length>0){continue}}};n.setAttribute('data',n.getAttribute('data-data'));n.removeAttribute('data-cookiescript');var o=n.outerHTML;N(n,o)}}},Z=function(e,t){var c=document.querySelectorAll('link'+e);if(c){for(var i=0;i<c.length;i++){var r=c[i];if(t&&t.length>0){var n=r.getAttribute('data-cookiecategory');if(n){t.forEach(function(e){n=n.replace(e,'').trim()});if(n.length>0){continue}}};r.setAttribute('href',r.getAttribute('data-href'));r.removeAttribute('data-cookiescript')}}},Ce=function(e){return!1},G=function(){return!1},E=function(){return!1},ee=function(){return!1},h=function(){te();var e=document.getElementById('cookiescript_injected');if(e){setTimeout(function(){p(e,200)},200);G()}
else{setTimeout(function(){S()},150)}},s=function(e){var t=document.getElementById('cookiescript_injected');if(t){D(t,e||200);ne()};E()},d=function(){var e=document.getElementById('cookiescript_badge');if(e){setTimeout(function(){p(e,200)},200)}
else{z()}},te=function(e){var t=document.getElementById('cookiescript_badge');if(t){D(t,e||200)}},qe=function(){return!1},ne=function(){return!1},Be=function(e){return!1},Te=function(e,t,n){var p=e.target||e.srcElement,s=p.getAttribute(t);if(s&&s.length>0){var a=document.querySelectorAll('div['+n+']');if(a){for(var o=0;o<a.length;o++){var r=a[o],i=r.getAttribute(n),d=i&&i===s,c=document.querySelector('div['+t+'="'+i+'"]');if(c){c.classList.remove('cookiescript_active');d&&c.classList.add('cookiescript_active')};r.classList.add('cookiescript_hidden');d&&r.classList.remove('cookiescript_hidden')}}}},Le=function(){var t=document.querySelector('[data-cs-consent-key-box="cookie-script"]'),n=document.querySelector('[data-cs-consent-key="cookie-script"]');if(t&&n){var e=c('key');if(e&&typeof e==='string'&&e.length>0){n.innerText=e;t.style.display=''}}},S=function(){x(document.body,je);A();J();var o=document.getElementById('cookiescript_injected');p(o,200);ee();var n=document.getElementById('cookiescript_save'),r=document.getElementById('cookiescript_accept'),i=document.getElementById('cookiescript_reject'),c=document.getElementById('cookiescript_close');t(n,'click',function(){e.acceptAction()});t(n,'keydown',function(e){if(e.key===' '||e.key==='Enter'||e.key==='Spacebar'){e.preventDefault();n.click()}});t(r,'click',function(){e.acceptAllAction()});t(r,'keydown',function(e){if(e.key===' '||e.key==='Enter'||e.key==='Spacebar'){e.preventDefault();r.click()}});t(i,'click',function(){e.rejectAllAction()});t(i,'keydown',function(e){if(e.key===' '||e.key==='Enter'||e.key==='Spacebar'){e.preventDefault();i.click()}});t(document.getElementById('cookiescript_readmore'),'click',function(){f('readmore','')});t(c,'click',function(){s();d();f('close','');xe()});t(c,'keydown',function(e){if(e.key===' '||e.key==='Enter'||e.key==='Spacebar'){e.preventDefault();c.click()}})},z=function(){if(M.length>0){x(document.body,M);var e=document.getElementById('cookiescript_badge');A();setTimeout(function(){p(e,200)},200);t(e,'click',function(){h()})}},re=function(){var e=document.querySelector('style[data-type="cookiescriptstyles"]'),t=document.getElementById('cookiescript_injected'),n=document.getElementById('cookiescript_badge');if(t){t.parentNode.removeChild(t)};if(n){n.parentNode.removeChild(n)};if(e){e.parentNode.removeChild(e)};E()},ie=function(){var a=document.querySelectorAll('iframe[data-cookiescript="accepted"]'),r=Array.prototype.slice.call(a);if(r.length>0){for(var n=0;n<r.length;n++){var e=r[n];if(!e.getAttribute('src')){var i=e.getAttribute('alt')||'',c=e.getAttribute('data-alt-img'),o=i;if(c){o='<img alt="'+i+'" src="'+c+'" />'};var t=(e.contentWindow)?e.contentWindow:(e.contentDocument.document)?e.contentDocument.document:e.contentDocument;t.document.open();t.document.write(o);t.document.close()}}}},b=function(e){var t=document.getElementById('csconsentcheckbox');if(t){t.checked=e}},ce=function(){var r=document.getElementById('csconsentcheckbox');t(r,'change',function(t){var n=t.target||t.srcElement;if(n.checked){e.acceptAllAction()}
else{e.rejectAllAction()}});var n=document.getElementById('csconsentlink');t(n,'click',function(){h()})},oe=function(){return!1},De=function(){return!1},ae=function(){return!1},se=function(){return!1},de=function(){return!1},pe=function(e){var r=[];for(var n=0;n<r.length;n++){var t=r[n];if(t.regexp){var i=we(t.name);if(e.match(i)){return!0}}
else{if(e===t.name){return!0}}};return!1},le=function(e,t){return!1},Ne=function(e,t){var r=[{'pattern':'^[a-f0-9]{32}$','name':'[abcdef0123456789]{32}'},{'pattern':'^PrestaShop-[a-f0-9]{32}$','name':'PrestaShop-[abcdef0123456789]{32}'},{'pattern':'^LF_session_[a-f0-9]{32}$','name':'LF_session_[abcdef0123456789]{32}'},{'pattern':'^cid_[a-f0-9]{32}$','name':'cid_[abcdef0123456789]{32}'},{'pattern':'^wp_woocommerce_session_[a-f0-9]{32}$','name':'wp_woocommerce_session_[abcdef0123456789]{32}'},{'pattern':'^visa_1_[a-f0-9]{32}$','name':'visa_1_[abcdef0123456789]{32}'},{'pattern':'^yith_wcwl_session_[a-f0-9]{32}$','name':'yith_wcwl_session_[abcdef0123456789]{32}'},{'pattern':'^mp_[a-f0-9]{32}_mixpanel$','name':'mp_[abcdef0123456789]{32}_mixpanel'},{'pattern':'^ps[a-f0-9]{24}$','name':'ps[abcdef0123456789]{24}'}];for(var n=0;n<r.length;n++){var i=r[n]['pattern'],c=new RegExp(i,'i');if(c.test(t)&&l(e,r[n]['name'])){return!0}};return!1},ue=function(){var e=c('action');return Boolean(e&&e==='accept')},fe=function(){var e=c('action');return Boolean(e&&e==='accept')},C=function(){var e=c('action');return Boolean(e&&(e==='accept'||e==='reject'))},q=function(){return l(window.location.hash,'b01d052f340553efb58be19c7d3bc681')||n.get('CookieScriptScanner')},g=function(){var e=document.querySelectorAll('input[data-cookiescript="checkbox-input"]');if(typeof e!=='undefined'){return Array.prototype.slice.call(e)};return[]},me=function(e){var n=[];for(var t=0;t<e.length;t++){if(e[t]!=='strict'){n.push(e[t])}};return n},B=function(e){var r=g();for(var n=0;n<r.length;n++){var t=r[n];if(t.value==='strict'){t.checked=!0}
else{t.checked=e}}},Oe=function(e){var r=g();for(var n=0;n<r.length;n++){var t=r[n];if(t.value==='strict'||l(e,t.value)){t.checked=!0}
else{t.checked=!1}}},ke=function(e){if(typeof CookieScriptReport!=='undefined'&&CookieScriptReport.instance){CookieScriptReport.instance.setStateCheckboxes(e)}},Re=function(){var n=[],r=g();for(var t=0;t<r.length;t++){var e=r[t];if(e.checked||e.value==='strict'){n.push(e.value)}};return u(n)},he=function(){var r=c('categories'),t=[];if(P){t=['strict']};if(r){try{var n=JSON.parse(r);if(P){n.push('strict')};return u(n)}catch(e){return t}};return t},Ie=function(){var e=document.querySelector('#cookiescript_description [data-cs-i18n-text]');if(e){return e.getAttribute('data-cs-i18n-read')};return''},Me=function(e){try{var t=new XMLHttpRequest();t.open('GET',e.url);t.onload=function(){if(t.status===200){try{var r=JSON.parse(t.responseText);e.done(r)}catch(n){e.done(t.responseText)}}
else{o('ERROR: Request failed.  Returned status for '+url+' of '+t.status)}};t.send()}catch(n){o('ERROR: Yor browser not support request')}},v=function(e,t){var i=T();i[e]=t;try{var c=JSON.stringify(i);n.set(m,c,{expires:Number(H),domain:L})}catch(r){o('Error: Write '+m+'value =>'+r)}},c=function(e){var t=T();return t[e]},T=function(){var t=n.get(m,{domain:L});try{return JSON.parse(t)}catch(e){return{}}},be=function(){try{var t;if(typeof(Event)==='function'){t=new Event('DOMContentLoaded',{bubbles:!0,cancelable:!0})}
else{t=document.createEvent('Event');t.initEvent('DOMContentLoaded',!0,!0)};window.document.dispatchEvent(t)}catch(e){o('Warning: You browser not support dispatch event')}},ge=function(){e.onAcceptAll();a('CookieScriptAcceptAll');if(typeof i!=='undefined'&&i.length>0){for(var t=0;t<i.length;t++){r(i[t])}}
else{r('all')}},He=function(t){var i={categories:u(t)};e.onAccept(i);a('CookieScriptAccept',i);for(var n=0;n<t.length;n++){r(t[n])}},ve=function(){e.onReject();a('CookieScriptReject');r('strict')},xe=function(){e.onClose();a('CookieScriptClose')},r=function(t){var n='CookieScriptCategory-'+t;if(l(e.dispatchEventNames,n))return;e.dispatchEventNames.push(n);e.dispatchEventNames=u(e.dispatchEventNames);a(n);window.dataLayer=window.dataLayer||[];window.dataLayer.push({'event':n})},L=function(){return null}(),a=function(e,t){try{var r;if(typeof(Event)==='function'){r=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:t})}
else{r=document.createEvent('CustomEvent');r.initCustomEvent(e,!0,!0,t)};window.document.dispatchEvent(r)}catch(n){o('Warning: You browser not support dispatch event')}},p=function(e,t){var i=O(e,'opacity'),c=i?i:1;e.style.opacity=0;e.style.display='';var r=+new Date(),n=function(){e.style.opacity=+e.style.opacity+(new Date()-r)/t;r=+new Date();if(+e.style.opacity<c){(window.requestAnimationFrame&&requestAnimationFrame(n))||setTimeout(n,16)}
else{e.style.opacity=''}};n()},D=function(e,t){var i=O(e,'opacity');e.style.opacity=i?i:1;var r=+new Date(),n=function(){e.style.opacity=+e.style.opacity-(new Date()-r)/t;r=+new Date();if(+e.style.opacity>0){(window.requestAnimationFrame&&requestAnimationFrame(n))||setTimeout(n,16)}
else{e.style.display='none';e.style.opacity=''}};n()},l=function(e,t){var n=!1,r=e.indexOf(t);if(r>=0){n=!0};return n},ye=function(e,t){e.insertAdjacentElement('afterend',t);e.parentNode.removeChild(e)},N=function(e,t){e.insertAdjacentHTML('afterend',t);e.parentNode.removeChild(e)},x=function(e,t){e.insertAdjacentHTML('beforeend',t)},u=function(e){var n=[];for(var t=0;t<e.length;t++){if(n.indexOf(e[t])===-1&&e[t]!==''){n.push(e[t])}};return n},o=function(e){console&&('function'==typeof console.warn?console.warn(e):console.log&&console.log(e))},Pe=function(e){throw e},t=function(e,t,n,i){var c=function(e,t,n){if(!e)return;try{if(e.attachEvent){e['e'+t+n]=n;e[t+n]=function(){e['e'+t+n](window.event)};e.attachEvent('on'+t,e[t+n])}
else{e.addEventListener(t,n,!1)}}catch(r){}};if(i&&e&&e.length>0){for(var r=0;r<e.length;r++){c(e[r],t,n)}}
else{c(e,t,n)}},Je=function(e,t,n,i){var c=function(e,t,n){if(!e)return;if(e.detachEvent){e.detachEvent('on'+t,e[t+n]);e[t+n]=null}
else{e.removeEventListener(t,n,!1)}};if(i&&e&&e.length>0){for(var r=0;r<e.length;r++){c(e[r],t,n)}}
else{c(e,t,n)}},O=function(e,t){if(typeof getComputedStyle!=='undefined'){return getComputedStyle(e,null).getPropertyValue(t)}
else{return e.currentStyle[t]}},n=function(){
/*! js-cookie v3.0.0-rc.0 | MIT */
;function e(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r){e[n]=r[n]}};return e};var t={read:function(e){return e.replace(/%3B/g,';')},write:function(e){return e.replace(/;/g,'%3B')}};function n(r,i){function c(n,c,o){if(typeof document==='undefined'){return};o=e({},i,o);if(typeof o.expires==='number'){var d=new Date();d.setTime(d.getTime()+o.expires*864e5);o.expires=d};if(o.expires){o.expires=o.expires.toUTCString()};n=t.write(n).replace(/=/g,'%3D');c=r.write(String(c),n);var s='';for(var a in o){if(!o[a]){continue};s+='; '+a;if(o[a]===!0){continue};s+='='+o[a].split(';')[0]};return(document.cookie=n+'='+c+s)};function o(e){if(typeof document==='undefined'||(arguments.length&&!e)){return};var a=document.cookie?document.cookie.split('; '):[],c={};for(var i=0;i<a.length;i++){var o=a[i].split('='),s=o.slice(1).join('='),n=t.read(o[0]).replace(/%3D/g,'=');c[n]=r.read(s,n);if(e===n){break}};return e?c[e]:c};return Object.create({set:c,get:o,remove:function(t,n){c(t,'',e({},n,{expires:-1}))},withAttributes:function(t){return n(this.converter,e({},this.attributes,t))},withConverter:function(t){return n(e({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(i)},converter:{value:Object.freeze(r)}})};var r=window.location.protocol=='https:';return n(t,{path:'/',secure:r})}(),we=function(e){if(typeof e!=='string'){return e};var t=e.match(/(\/?)(.+)\1([a-z]*)/i);if(t[3]&&!/^(?!.*?(.).*?\1)[gmixXsuUAJ]+$/.test(t[3])){return RegExp(e)};return new RegExp(t[2],t[3])},Fe=function(){return!0},f=function(e,t){return!1},R=function(e,t){return!1},I=function(){re();x(document.body,Ae);if(!q()){y()};if(fe()){b(!0)};if(C()){z()}
else{if(!de()){S();ae();se()}};ie();ce();oe();a('CookieScriptLoaded')};(function(){if(CookieScript.instance)return;Fe();y();if(document.readyState==='complete'){I()}
else{window.addEventListener('load',I)}}())};CookieScript.init=function(){if(CookieScript.instance){return CookieScript.instance};CookieScript.instance=new CookieScript();return CookieScript.instance};CookieScript.init()