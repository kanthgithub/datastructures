"use strict";function IsMalwareProxy(){try{return window.location.host.endsWith(".duapp.com")||window.location.host.endsWith(".25lm.com")}catch(e){return!1}}if(window.StackExchange={},window.jQuery&&!function(e){var t=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{"browser":t[1]||"","version":t[2]||"0"}};if(!e.browser){var n=t(navigator.userAgent),i={};n.browser&&(i[n.browser]=!0,i.version=n.version),i.chrome?i.webkit=!0:i.webkit&&(i.safari=!0),e.browser=i}}(jQuery),top!=self)throw top.location.replace(document.location),$(function(){$("head").add("body").remove()}),alert("For security reasons, framing is not allowed; click OK to remove the frames."),new Error;if(StackExchange.init=function(){function e(){$(document).on("click",".convert-to-post",function(e){e.preventDefault();var t=$(this).attr("data-confirm");if(!t||confirm(t)){var n=$("<form method='post'/>").attr("action",$(this).attr("href")).appendTo("body");n.append($("<input type='hidden' name='fkey' />").attr("value",$(this).attr("data-fkey"))).submit()}})}function t(){function e(e){StackExchange.options.site.prefixFkey&&StackExchange.options.site.routePrefix&&(e=StackExchange.options.site.routePrefix+"/"+e),StackExchange.options.user.fkey!==e&&(StackExchange.options.user.fkey=e,$("input[name=fkey]").val(e))}function t(e,t){try{var n=e.lastIndexOf("/");n>=0&&(e=e.substr(n+1)),localStorage.setItem(i,e+","+t)}catch(o){}}function n(){var e=localStorage.getItem(i);if(!e)return{"time":0};var t=e.split(/,/);return{"fkey":t[0],"time":parseInt(t[1],10)}}var i="se:fkey";$(window).on("storage",function(t){t=t.originalEvent,t.key==i&&t.newValue&&e(t.newValue.split(/,/)[0])});try{var o=StackExchange.options.user.fkey,a=n();a.fkey!==o&&(StackExchange.options.serverTime>a.time?t(o,StackExchange.options.serverTime):e(a.fkey))}catch(r){}}function n(){function e(e){var t=o.filter('[data-name="'+e+'"]');o.removeClass("site-footer--col__visible"),t.addClass("site-footer--col__visible")}var t=$(".js-footer-category-trigger"),n=$(".js-footer"),i=$(".js-footer-back"),o=$(".js-footer-col");t.on("click",function(i){i.preventDefault();var o=$(this).data("target");t.removeClass("_active"),$(this).addClass("_active"),n.addClass("site-footer__open"),e(o)}),i.on("click",function(i){i.preventDefault(),t.removeClass("_active"),n.removeClass("site-footer__open"),e("default")})}function i(){if("undefined"!=typeof CSS&&CSS.supports&&CSS.supports("(display: grid)")){var e=!1,t=!1,n=/; rv:(\d+)[^ );]*\) Gecko\//.exec(navigator.userAgent);e=t=n&&parseInt(n[1],10)<57,e&&$("body").addClass("no-grid-comments"),t&&$("body").addClass("no-grid-post-layout")}}var o=function(e){if(!window.jQuery){if("complete"!=document.readyState)return setTimeout(function(){o(e)},1e3),void 0;var t=document.createElement("div");t.id="noscript-warning",t.innerHTML=function(e){return e.siteName+" requires external JavaScript from another domain, which is blocked or failed to load."}({"siteName":e}),document.body.appendChild(t);var n=document.getElementById("noscript-css");if(!n)return;var i=document.createElement("div");i.innerHTML=n.innerText,document.head.appendChild(i.getElementsByTagName("style")[0])}},a=function(){var e=function(t,n){if(t){var i=$(t).filter(":not(.popup-stack-hidden)");if(!i.length)return;i.each(function(e,t){var n=$(t),o=n.data("_popup"),a=n.data("_lightbox");o&&(i=i.add(o)),a&&(i=i.add(a))}),i=$($.unique(i.get())),i=i.not(".popup-closing").addClass("popup-closing");var o={"closeTrigger":n},a=$.Event("popupClosing",o);if(i.trigger(a),a.isDefaultPrevented())return i.removeClass("popup-closing"),void 0;i=i.not(".popup-closed").addClass("popup-closed"),i.filter(":not(.esc-hide)").fadeOutAndRemove(),i.filter(".esc-hide").fadeOut("fast",function(){i.removeClass("popup-closing").removeClass("popup-closed")}),i.trigger("popupClose",o)}else StackExchange.topbar&&StackExchange.topbar.hideAll(),e(".lightbox:not(.no-auto-close), .message-dismissable, .popup:not(.no-auto-close), .share-tip, .esc-remove, .esc-hide","esc")};$(document).keyup(function(t){27==t.which&&e()}),$("body").mousedown(function(t){var n=$(t.target);if(!n.closest(".ac_results, .popup, .wmd-prompt-dialog, .message, .modal, .body-click-hide").length){var i="click outside";if(n.closest(".share-tip").length||e(".share-tip",i),1==t.which){if(n.is(".wmd-prompt-background"))return e(".wmd-prompt-dialog, .wmd-prompt-background, .popup#image-upload",i),void 0;n.closest(".popup, .modal").length||e(".popup:not(.no-auto-close), .lightbox:not(.no-auto-close), .modal:not(.no-auto-close)",i),n.closest(".message-config").length||e(".message-config.message-dismissable",i),n.closest(".body-click-hide").length||e(".esc-hide")}}}),$(document).bind("closePopups",function(t){e(t.selectorToClose,t.closeTrigger)});var t=[];$(document).on("popupLoad",function(e){var n=e.popup;if(e.lightbox)for(var i=0;i<t.length;i++)t[i].css("display","none").addClass("popup-stack-hidden");var o=n.data("_lightbox");o&&(n=n.add(o)),n.data("popup-stack-index",t.length),t.push(n)}).on("popupClosing",function(n){if(!n.isDefaultPrevented()){var i,o=$(n.target).data("popup-stack-index");if(null!=o&&!isNaN(o)){for((0>o||o>=t.length)&&StackExchange.debug.log("popupStack index out of bounds");t.length>o;)i=t.pop(),i.data("popup-stack-index",null),e(i,n.closeTrigger);for(;o>0&&(i=t[--o],i.removeClass("popup-stack-hidden").css("display","block"),!i.filter(".lightbox").length););}}})};return function(r,s){StackExchange.options=r,StackExchange.settings=s,r.serverTimeOffsetSec=r.serverTime-(new Date).getTime()/1e3,o(r.site.name),$.ajaxSetup({"cache":!1}),StackExchange.init.createJqueryExtensions(),r.enableLogging=(r.user.isEmployee||r.isDebugBuild)&&"undefined"!=typeof console&&"undefined"!=typeof console.log,$(function(){IsMalwareProxy()&&(window.location.href="https://stackexchange.com/about/malware?host="+window.location.hostname),a(),t(),e(),n(),StackExchange.using(StackExchange.options.user.isAnonymous?"anonymous":"loggedIn",function(){StackExchange.initialized.resolve()},!0,r.fullPostfix);var o=StackExchange.settings.site.styleCodeAdditionalLang;o&&StackExchange.ifUsing("prettify",function(){return StackExchange.loadJsFile("third-party/prettify/additional-langs/"+o)}),StackExchange.scrollPadding.ensureInitialized(),i(),StackExchange.ready(function(){r.user.messages&&StackExchange.notify.showMessages(r.user.messages,r.isMobile),s.site.enableUserHovercards&&StackExchange.usermenu.init(),r.site.universalAuthDisabled||UniversalAuth.performAuth(),StackExchange.tagPreferences?StackExchange.tagPreferences.init():StackExchange.tagmenu.init(),r.timingsGuid&&$(window).on("load",function(){setTimeout(StackExchange.processTimings,50)}),$("*[data-tracker]").track(),StackExchange.bindShowMoreHotNetworkQuestions();var e=function(){var e=!1;$("body > script:not([src])").each(function(){return this.textContent.length>4e4&&/currentSelectable/.test(this.textContent)?(e=!0,!1):void 0}),(e||r.user.keyboardShortcuts)&&StackExchange.using("keyboardShortcuts",function(){StackExchange.keyboardShortcuts.init(e)})};document.readyState&&"complete"!==document.readyState?$(window).on("load",function(){setTimeout(e,10)}):setTimeout(e,10),StackExchange.showFlashMessageIfAny()})})}}(),StackExchange.debug={"log":function(){},"init":function(){this.log=function(e){$(function(){var t=$("#debug-messages");t.length||(t=$("<div id='debug-messages' style='text-align:left;position:fixed;top:50px;left:50px;z-index:1000;background:white;border:2px solid black;width:300px;padding:10px;' />").append($("<span style='cursor:pointer;color:#999'>(close debug messages)</span>").click(function(){$("#debug-messages").remove()})).appendTo("body")),$("<div style='margin-top:10px' />").text(e).appendTo(t)})}}},StackExchange.initialized=$.Deferred(),StackExchange.gaInitialized=$.Deferred(),StackExchange.ready=function(e){StackExchange.initialized.done(e)},StackExchange.gaReady=function(e){StackExchange.gaInitialized.done(e)},window.serq)for(var i=0;i<window.serq.length;i++)StackExchange.ready(window.serq[i]);!function(){var e,t={"anonymous":"full-anon.js","loggedIn":"full.js","prettify":"prettify-full.js","pseudoModerator":"moderator.js","inlineEditing":"full.js","beginEditEvent":"full.js","editor":"wmd.js","externalEditor":"external-editor.js","autocomplete":"third-party/jquery.autocomplete.min.js","tagAutocomplete":"tageditor.js","tagEditor":"tageditornew.js","tagSuggestions":"tagsuggestions.js","mobile":"mobile.js","help":"help.js","inlineTagEditing":"inline-tag-editing.js","mathjaxEditing":"mathjax-editing.js","mathjaxEditingBeta":"mathjax-editing.beta.js","revisions":"revisions.js","mockups":"external-editor.js","schematics":"external-editor.js","snippets":"snippet-javascript.js","snippetsJsCodeMirror":"snippet-javascript-codemirror.js","review":"review.js","translation":"full.js","gps":"full-anon.js","postValidation":"post-validation.js","exploreQuestions":"explore-qlist.js","eventCharts":"events.js","virtualKeyboard":"virtual-keyboard.js","keyboardShortcuts":"keyboard-shortcuts.js","adops":"adops.js"},n={},i={},o={},a={},r={},s=function(e,t){return function(n){var i=e[n];return i||(i=e[n]=t(n)),i}},c=function(e){var t,n,i=o[e],a=$.Deferred(),r=$.when(a);if(i)for(var t=0;t<i.length;t++)n=i[t].call(null),n&&$.isFunction(n.promise)&&(r=$.when(r,n));return a.resolve(),r},l=function(){if(!e){var t=$("script[src]").filter(function(){return/stub.*\.js/.test($(this).attr("src"))}).first();0==t.length?(StackExchange.debug.log("couldn't figure out location of stub.js"),e="/content/js/"):e=t.attr("src").replace(/\/stub.*\.js.*$/,"/")}return e},u=function(e){var t=r["js/"+e];return t?"?v="+t:(StackExchange.debug.log("no cache breaker for "+e),"")},d=function(e){return e&&StackExchange.options.locale&&-1==e.indexOf("third-party")&&(e=e.replace(/^(.*)(\.js)(\?.*)?$/,"$1."+StackExchange.options.locale+"$2$3")),e},p=function(e,t){var n=$.Deferred(),i=document.createElement("script");return i.async="async",i.src=t?e:d(e),i.onload=i.onreadystatechange=function(e,t){(!i.readyState||/loaded|complete/.test(i.readyState))&&(t?n.reject():n.resolve())},i.onerror=function(){n.reject()},$("head")[0].appendChild(i),n.promise()},h=function(e){var n=t[e];return n?f(n):$.Deferred().reject().promise()},f=s(i,function(e){return p(l()+e+u(d(e)))}),g=s(n,function(e){function t(){return(i=StackExchange[e])?(c(e).done(function(){n.resolve()}),void 0):o>0?(o--,StackExchange.debug.log("retrying "+e),setTimeout(t,20),void 0):(StackExchange.debug.log("object StackExchange."+e+" not available although file was loaded"),n.reject(),void 0)}var n=$.Deferred(),i=StackExchange[e],o=3;return i?n.resolve():h(e).done(t).fail(n.reject),n.promise()}),m=$.Deferred(),v=function(e,n,i,o){if(!i&&"resolved"!==m.state())return m.done(function(){v(e,n)}),void 0;if(i)for(var a in t)t.hasOwnProperty(a)&&(t[a]=t[a].replace(/^(full(?:-anon)?).js$/,"$1"+(o||"")+".js"));var r=g(e);return i?m.resolve():r=$.when(r,StackExchange.initialized),r.done(function(){n()}).fail(function(){StackExchange.debug.log("failed to provide object "+e)}),r};v.setCacheBreakers=function(e){for(var t in e)e.hasOwnProperty(t)&&(r[t]=e[t])};var b=function(e,t,n){if("undefined"!=typeof n){if(a["u_"+n])return;a["u_"+n]=!0}if(StackExchange[e])return t(),void 0;var i=o[e];i||(i=o[e]=[]),i.push(t)};StackExchange.using=v,StackExchange.ifUsing=b,StackExchange.loadJsFile=function(e,t){return p(l()+e,t)}}(),String.prototype.formatUnicorn=function(){var e=this.toString();if(!arguments.length)return e;var t=typeof arguments[0],n="string"==t||"number"==t?Array.prototype.slice.call(arguments):arguments[0];for(var i in n)e=e.replace(new RegExp("\\{"+i+"\\}","gi"),n[i]);return e},String.prototype.truncate=function(e,t){var n=this.toString();return e&&n.length>e&&(n=n.substr(0,e)+t),n},String.prototype.splitOnLast=function(e){var t=this.lastIndexOf(e);return 0>t?[this]:[this.substr(0,t),this.substr(t)]},String.prototype.contains=function(e){return this.indexOf(e)>-1},String.prototype.endsWith||(String.prototype.endsWith=function(e){return-1!==this.indexOf(e,this.length-e.length)}),StackExchange.init.createJqueryExtensions=function(){var e=StackExchange.helpers;$.extend($.expr[":"],{"working":function(e){var t=$(e).data("working");return"undefined"!=typeof t&&t},"data":function(e,t,n){var i=n[3],o=$(e).data(i);switch(typeof o){case"undefined":return!1;case"boolean":return o;case"object":return null!==o}return!0},"containsCI":function(e,t,n){return jQuery(e).text().toUpperCase().indexOf(n[3].toUpperCase())>=0},"viewport":function(e){var t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}}),$.fn.extend({"working":function(e){return this.each(function(){$(this).data("working",e)})},"track":function(){return this.each(function(){var e=$(this),t=e.is("a[href]")?e:e.find("a[href]"),n=e.data("tracker");t.each(function(){var e=this.href.splitOnLast("#"),t=e[0];t+=(t.contains("?")?"&":"?")+n+(e[1]||""),this.href=t})})},"fadeOutAndRemove":function(){return this.each(function(){var e=$(this);e.fadeOut("fast",function(){e.trigger("removing").remove()})})},"charCounter":function(t){return this.each(function(){var n=t.target?$(t.target):$(this).parents("form").find("span.text-counter"),i=this,o=function(){var e=t.min,o=t.max,a=(t.setIsValid||function(){}).bind(i),r=0,s=i.tagName&&"DIV"===i.tagName?i.textContent:i.value;s&&(r=t.ignoreWhitespace?s.replace(/\s+/g," ").replace(/^\s+/,"").replace(/\s+$/,"").length:s.replace(/\r\n/g,"\n").replace(/\n/g,"\r\n").length);var c=r>.8*o?"supernova":r>.6*o?"hot":r>.4*o?"warm":"cool",l="";if(0==r)0==e?(l=function(e){return 1==e.max?"enter up to "+e.max+" character":"enter up to "+e.max+" characters"}({"max":o}),a(!0)):(l=function(e){return 1==e.min?"enter at least "+e.min+" character":"enter at least "+e.min+" characters"}({"min":e}),a(!1));else if(e>r)l=function(e){return 1==e.count,e.count+" more to go..."}({"count":e-r}),a(!1);else{var u=o-r;l=u>=0?function(e){return 1==e.count?e.count+" character left":e.count+" characters left"}({"count":u}):function(e){return 1==e.count?"too long by "+e.count+" character":"too long by "+e.count+" characters"}({"count":Math.abs(u)}),a(o>=r)}n.text(l),n.hasClass(c)||n.removeClass("supernova hot warm cool").addClass(c)};$(this).bind("blur focus keyup paste charCounterUpdate",e.DelayedReaction(o,100,{"sliding":!0}).trigger)})},"selectRange":function(e,t){return this.each(function(){if(this.setSelectionRange)this.focus(),this.setSelectionRange(e,t);else if(this.createTextRange){var n=this.createTextRange();n.collapse(!0),n.moveEnd("character",t),n.moveStart("character",e),n.select()}})},"addSpinner":function(t){return this.each(function(){e.addSpinner(this,t)})},"addSpinnerAfter":function(t){return this.each(function(){$(this).after(e.getSpinnerImg(t))})},"addSpinnerBefore":function(t){return this.each(function(){$(this).before(e.getSpinnerImg(t))})},"removeSpinner":function(){return this.each(function(){$(this).find("img.ajax-loader").remove()})},"showErrorMessage":function(t,n){return this.each(function(){e.showErrorMessage(this,t,n)})},"showErrorPopup":function(t,n){return this.each(function(){e.showErrorMessage(this,t,n)})},"showInfoMessage":function(t,n){return this.each(function(){e.showInfoMessage(this,t,n)})},"center":function(e){if(StackExchange.options.isMobile)return this;e=e||{};var t=this.parent();"static"===t.css("position")&&(t=t.offsetParent());var n=t.offset(),i=$(window),o=e.top||Math.max((i.height()-this.outerHeight())/2+i.scrollTop()-StackExchange.scrollPadding.getPaddingTop()-n.top+(e.dy||0),65);this.css("position","absolute"),this.css("top",o+"px");var a=Math.max(20,(i.width()-this.outerWidth())/2+i.scrollLeft()-n.left);this.css("left",a+"px");var r="calc(50% - "+this.outerWidth()/2+"px)";return this.css("left",r),this.css("left","-webkit-"+r),this},"enable":function(){return 0==arguments.length||arguments[0]?this.removeAttr("disabled").css("cursor","pointer").removeClass("disabled-button"):this.attr("disabled","disabled").css("cursor","default").addClass("disabled-button"),this},"disable":function(){return this.enable(!1)},"checked":function(e){return e?this.attr("checked","checked"):this.removeAttr("checked"),this},"loadPopup":function(t){var n=$.Deferred(),i=this,o=t.target||i.parent();if(!t.html&&!t.noSpinner){var a=t.addSpinnerFn||$.fn.addSpinnerAfter;a.call(i,{"padding":"0 3px"})}t.loaded&&n.done(t.loaded);var r=function(a){var r,s=$(a).elementNodesOnly();s.find(".popup-actions-cancel, .popup-close a, .modal-close").click(function(){StackExchange.helpers.closePopups(r?s.add(r):s)}),s.find("input:radio[disabled=disabled] + label.action-label").addClass("action-disabled"),t.hideDescriptions&&s.addClass("_hidden-descriptions").find("ul.action-list > li:not(.action-selected) .action-desc").hide();var c=s.find("input:radio:not(.action-subform input)");c.closest("li").bind("hide-action",function(){var e=$(this),n=".action-subform"+(t.hideDescriptions?", .action-desc":"");e.removeClass("action-selected").find(n).slideUp("fast")}).bind("show-action",function(e){var n=$(this);return n.hasClass("action-selected")?(e.stopImmediatePropagation(),void 0):(n.siblings(".action-selected").trigger("hide-action"),n.addClass("action-selected").find(".action-subform").slideDown("fast",function(){if(t.subformShow&&t.subformShow($(this)),t.subformFocusInput){var e=$(this).find("input[type=text], textarea").not(".actual-edit-overlay").eq(0);e.length&&e.focus()}}),t.hideDescriptions&&n.find(".action-desc").slideDown("fast"),t.actionSelected&&t.actionSelected(n),s.find(".popup-submit").enable(),void 0)}).filter(".show-action-onload").each(function(){var e=$(this);n.done(function(){e.find("input[type=radio]").click()})}),c.on("click",function(){$(this).closest("li").trigger("show-action")}),(t.insert||function(e){t.prepend?e.prependTo(o):e.appendTo(o)})(s),t.lightbox&&(r=StackExchange.helpers.addLightbox().data("_popup",s),s.css("z-index",+r.css("z-index")+1).data("_lightbox",r)),n.resolveWith(i,[s,r]),o.trigger($.Event("popupLoad",{"popup":s,"lightbox":r}));var l=function(){};if(t.subformShow){var u=s.find("li.action-selected .action-subform");u.length>0&&(l=function(){u.each(function(){t.subformShow($(this))})})}t.dontShow||(s.center().fadeIn("fast",l),r&&r.fadeIn("fast")),e.bindMovablePopups()};return t.html?r(t.html):$.ajax({"type":"GET","url":t.url,"dataType":"html","data":t.data,"success":r,"error":function(e){var i=e.responseText&&e.responseText.length<200?e.responseText:t.defaultErrorMessage||"Unable to load popup - please try again";(t.errorTarget||o).showErrorMessage(i,{"transient":409==e.status}),n.reject(i)},"complete":e.removeSpinner}),n.promise()},"asyncLoad":function(e){return e=$.extend({"callback":null,"cache":{}},e),this.each(function(){var t=".async-load",n=$(this),i=n.find(t);n.is(t)&&(i=i.add(n)),i.each(function(){var t=$(this),n=t.data("load-url")||"";if(n&&!t.is(":working")){t.working(!0).addSpinner();var i=function(n){t.html(n).removeClass("async-load").mathjax();var i=t.data("after-load")||"";if(i||e.callback){for(var o,a=i?i.split("."):[],r=0;r<a.length;r++)o=(o||window)[a[r]];o=o||e.callback,"function"==typeof o&&o(t)}},o=e.cache[n];o?window.setTimeout(function(){i(o)},0):$.ajax({"type":"GET","url":n,"dataType":"html"}).done(function(t){e.cache[n]=t,i(t)}).fail(function(){t.removeSpinner().showErrorMessage("An error has occurred; please try again")})}})})},"mathjax":function(){return this.each(function(){"undefined"!=typeof MathJax&&MathJax.Hub.Typeset(this)})},"elementNodesOnly":function(){return this.filter(function(){return 1===this.nodeType})},"scrollIntoView":function(){var e=this.first();return"contents"===e.css("display")&&(e=e.find(">*:first")),e.is(":viewport")||$("html, body").animate({"scrollTop":e.offset().top},100),this},"outerHTML":function(){return $("<div>").append(this.eq(0).clone()).html()}})},StackExchange.helpers=function(){function e(e,t){$(e).find("input[type='submit']").prop("disabled",t)}var t,n,i,o=function(){if(!StackExchange.options.isMobile){var e=function(){t=n=null,$("body").removeAttr("style")},o=$("div.popup");o.each(function(e,i){var o=$(i).find(".handle");o.length&&(o.css({"cursor":"move"}),o.unbind("mousedown").bind("mousedown",function(e){var o=$(i).offset();n={"x":o.left-e.pageX,"y":o.top-e.pageY},t=$(i);var a=t.offset();t.offset(a).offset(a),$("body").attr("style","cursor:move"),e.preventDefault()}))}),i||(i=!0,$(document).on("mousemove",function(e){if(t){var i=e.pageY+n.y,o=e.pageX+n.x;t.offset({"top":i,"left":o})}}).on("keypress",e).on("mouseup",e))}},a={"addLightbox":function(){return $('<div class="lightbox"/>').appendTo($("body")).css("height",$(document).height())},"bindMovablePopups":o,"onClickDraftSave":function(e){return $(e).click(function(e){if(null!=StackExchange.cardiologist){e.preventDefault();var t=this.href;return StackExchange.cardiologist.ensureDraftSaved(function(){window.onbeforeunload=null,window.location.href=t}),!1}}),!0},"showMessage":function(e,t,n){if(e=$(e),e.length){var i={"messageElement":null,"position":"inside","dismissable":!0,"type":"error","closeOthers":!0,"shown":function(){},"relativeToBody":!1,"lightbox":!1,"stopBodyScroll":!1,"fixedTo$elem":!1,"slideDown":!1},o=$.extend({},i,n),a=9;o.closeOthers&&$(".message").fadeOutAndRemove();var r=$('<div class="message"><div class="message-inner"><div class="message-text"></div></div></div>'),s=r.find(".message-inner"),c=r.find(".message-text");if(r.addClass("message-"+o.type),o.cssClass&&r.addClass(o.cssClass),o.messageElement?c.append(o.messageElement):c.html(t),o.dismissable&&(r.addClass("message-dismissable"),c.css("padding-right","48px"),s.prepend($("<div />",{"title":o.closeTitle||"close this message (or hit Esc)","class":"message-close","text":"×"})),r.click(function(e){var t=$(e.target),n=o.dismissable===!0&&!t.is("a")||"x-or-esc"===o.dismissable&&t.is(".message-close, .message-close-inner");n&&(o.dismissing&&o.dismissing(),r.fadeOutAndRemove(),o.lightbox&&$(".lightbox").fadeOutAndRemove())})),o.dismissing&&r.on("popupClose",function(e,t){"esc"==t.closeTrigger&&o.dismissing()}),o.css&&r.css(o.css),"inside"===o.position||"inline"===o.position||"toast"===o.position||o.tip||(o.tip=o.position.my),o.tip&&s.addClass("message-tip message-tip-"+o.tip.replace(" ","-")),"inline"===o.position)e.append(r);else if("inside"===o.position)r.css("position","absolute"),e.append(r);else if("toast"===o.position)r.addClass("toast").appendTo(e);else{r.css("position","absolute");var l=o.relativeToBody?$("body"):e.offsetParent();l.append(r);var u,d=o.relativeToBody?e.offset():e.position(),p=e.outerWidth(!0),h=e.outerHeight(!0),f=r.outerWidth(),g=r.outerHeight(),m=p-e.outerWidth(!1),v=m/2;switch(o.position.at){case"top left":u={"top":0,"left":0};break;case"top center":u={"top":0,"left":p/2+v};break;case"top right":u={"top":0,"left":p};break;case"right top":u={"top":0,"left":p};break;case"right center":u={"top":h/2,"left":p};break;case"right bottom":u={"top":h,"left":p};break;case"bottom right":u={"top":h,"left":p};break;case"bottom center":u={"top":h,"left":p/2+v};break;case"bottom left":u={"top":h,"left":0};break;case"left bottom":u={"top":h,"left":0};break;case"left center":u={"top":h/2,"left":0};break;case"left top":u={"top":0,"left":0}}var b;switch(o.position.my){case"left top":b={"top":0,"left":-a};break;case"top left":b={"top":-a,"left":0};break;case"top center":b={"top":-a,"left":f/2+a};break;case"top right":b={"top":-a,"left":f};break;case"right top":b={"top":0,"left":f+a};break;case"right bottom":b={"top":g,"left":f+a};break;case"bottom right":b={"top":g+a,"left":f};break;case"bottom center":b={"top":g+a,"left":f/2+a};break;case"bottom left":b={"top":g+a,"left":0};break;case"left bottom":b={"top":g,"left":-a}}var y={"left":d.left+u.left-b.left,"top":d.top+u.top-b.top};if(r.data("initialTop",y.top),r.animateOffsetTop=function(e){r.animate({"top":r.data("initialTop")+e})},o.position.offsetTop&&(y.top+=o.position.offsetTop),o.position.offsetLeft&&(y.left+=o.position.offsetLeft),r.css({"top":y.top,"left":y.left}),o.fixedTo$elem){var k=null,w=e.offset(),x=$(window).width(),S="resize.message scroll.message";$(window).on(S,function(){k=k||r.offset();var t=e.offset().top-w.top,n=$(window).width()-x;r.offset({"top":k.top+t,"left":k.left+n/2})}),r.on("removing",function(){$(window).off(S)})}}if(o.showing&&o.showing(),o.lightbox){var E=$("body"),C=$('<div class="lightbox"/>').appendTo(E).css("height",$(document).height()).fadeIn();o.stopBodyScroll&&E.addClass("stop-scrolling"),r.on("removing",function(){C.fadeOutAndRemove(),o.stopBodyScroll&&E.removeClass("stop-scrolling")})}if(o.slideDown){var T=500,I=e.css("margin-top"),j=e.css("margin-bottom");e.css("margin-top",0),e.css("margin-bottom",0),r.css("height",0),e.css("display","block"),r.css("display","block"),e.animate({"margin-top":I,"margin-bottom":j},T),r.animate({"height":r.get(0).scrollHeight},T)}else r.fadeIn(o.shown);if(o.transient){var P=n.transientTimeout;if(!P){var R=40;"jp"===StackExchange.options.locale?R=80:"toast"===n.position&&(R=55),P=Math.max(2500,t.length*R)}setTimeout(function(){r.fadeOutAndRemove()},P)}return o.removing&&r.on("removing",o.removing),StackExchange.options.enableLogging&&r.data("settings",o),r}},"showErrorMessage":function(e,t,n){var i={"position":"inside","type":"error"},o=$.extend({},i,n);return this.showMessage(e,t,o)},"showErrorPopup":function(e,t,n){return this.showErrorMessage(e,t,n)},"showInfoMessage":function(e,t,n){var i={"position":"inside","transient":!0,"type":"info"},o=$.extend({},i,n);return this.showMessage(e,t,o)},"showSuccessMessage":function(e,t,n){var i={"type":"success","position":"toast","transient":!0,"transientTimeout":1e4},o=$.extend({},i,n);return this.showMessage(e,t,o)},"showMobileMessage":function(e,t){var n=-2;StackExchange.notify.show(e,n,"_"+t)},"showBannerMessage":function(e,t){var n=$(".banner-message-container").last();0===n.length&&(n=$("<div/>").addClass("top-banner-message-container").css("display","none").insertAfter("#header"));var i={"type":t,"position":"inline","cssClass":"banner-message","slideDown":!0};return this.showMessage(n,e,i)},"showShareTip":function(e,t,n){var i=$("<p></p>").text(t).html(),o='<div class="share-tip" style="display:none">'+i+'<input type="text" style="display:block; width:292px;"><a class="close-share-tip" style="float:right">close</a></div>',a=$(o);return a.find('input[type="text"]').val(n),a.appendTo(e).show().find(".close-share-tip").click(function(){a.fadeOutAndRemove()}).end().find("input[type=text]").select(),a},"removeMessages":function(e){e?$(".message").remove():$(".message").fadeOutAndRemove()},"addSpinner":function(e,t){$(e).append(a.getSpinnerImg(t))},"getSpinnerImg":function(e){var t=$("<img />",{"class":"ajax-loader","src":"/content/img/progress-dots.gif","title":"loading...","alt":"loading..."});return e&&t.css(e),t},"removeSpinner":function(){$("img.ajax-loader").remove()},"closePopups":function(e,t){var n=$.Event("closePopups");n.selectorToClose=e,n.closeTrigger=t||"closePopups",$(document).trigger(n)},"enableSubmitButton":function(t){e(t,!1)},"disableSubmitButton":function(t){e(t,!0)},"loadTicks":function(e){var t;t=e?e.find(".edit-block"):$(".edit-block"),0==t.find("input[name=i1l]").length&&(t.data("loading-ticks")||(t.data("loading-ticks",!0),$.ajax({"url":"/questions/ticks","cache":!1,"success":function(e){t.append("<input type='hidden' name='i1l' value='"+e+"' />")},"complete":function(){t.data("loading-ticks",!1)}})))},"showFancyOverlay":function(e){e=e||{};var t=$('<div id="overlay-header"></div>').prependTo("body"),n=e.message||"",i=$.browser.msie?{"background":"#fff","opacity":0}:{};e.showClose!==!1&&(n+='<br><a class="close-overlay">close this message</a>'),t.html(n).css(i).animate({"opacity":"1","height":"show"},"slow",e.complete).find(".close-overlay").click(function(){t.animate({"opacity":"0","height":"hide"},"fast")})},"DelayedReaction":function(e,t,n){n=n||{};var i,o,a=n.always,r=function(){i=null,e.apply(null,o)};return{"trigger":function(){if(o=arguments,a&&a.apply(null,o),i){if(!n.sliding)return;clearTimeout(i),i=setTimeout(r,t)}else i=setTimeout(r,t)},"cancel":function(){i&&(clearTimeout(i),i=null)}}},"fireAndForget":function(e){$.ajax({"type":"POST","url":e,"async":!0})},"updateQueryStringParameter":function(e,t,n){var i=new RegExp("([?&])"+t+"=.*?(&|$)","i"),o=-1!==e.indexOf("?")?"&":"?";return e.match(i)?e.replace(i,"$1"+t+"="+n+"$2"):e+o+t+"="+n},"parseUrl":function(e){var t=document.createElement("a");return t.href=e,""===t.host&&(t.href=t.href),t},"getLikelyErrorMessage":function(e){if(!e||"string"!=typeof e.responseText||e.responseText.length>250)return"";var t=e.responseText;try{var n=JSON.parse(t);return n.ErrorMessage||n.Message||""}catch(i){return t}},"getRejectedMockXhr":function(e){return $.Deferred().reject({"responseText":e})},"submitFormOnEnterPress":function(e){var t=e.find("textarea, div[contenteditable]");if(!t.is("[contenteditable]")||StackExchange.helpers.hasContentEditable(t)){var n=!1,i=!1;t.keyup(function(o){if(n||i)return i=!1,void 0;if(13===o.which&&!o.shiftKey){if(t.prev("#tabcomplete > li:visible").length)return;if(e.hasClass("js-prevent-submit-form-on-enter-press"))return;e.submit()}}).keypress(function(e){return 13!==e.which||e.shiftKey}),t.on("compositionstart",function(){n=!0}).on("compositionend",function(){n=!1,i=!0}).on("keydown",function(e){229!==e.which&&(i=!1)})}},"isInNetwork":function(e){if("string"!=typeof e)throw new TypeError;try{var t=StackExchange.helpers.parseUrl(e.trim()).hostname;if(t===window.location.hostname)return!0;for(var n=["stackoverflow.com","stackexchange.com","serverfault.com","superuser.com","stackauth.com","stackapps.com","askubuntu.com","askdifferent.com","mathoverflow.net","askpatents.com"],i=0;i<n.length;i++){var o=n[i];if(t===o||t.endsWith("."+o))return!0}}catch(a){}return!1},"removeParameterFromQueryString":function(e){if(window.history&&window.history.replaceState){var t=window.location.href.replace(new RegExp("^([^#]*?)(([^#]*)&)?"+e+"(=[^&#]*)?(&|#|$)"),"$1$3$5").replace(/^([^#]*)((\?)&|\?(#|$))/,"$1$3$4");try{window.history.replaceState({},document.title,t)}catch(n){}}},"placeCaretAtEnd":function(e){if(e.focus(),"undefined"!=typeof window.getSelection&&"undefined"!=typeof document.createRange){var t=document.createRange();t.selectNodeContents(e),t.collapse(!1);var n=window.getSelection();n.removeAllRanges(),n.addRange(t)}},"hasContentEditable":function(e){if(!e)return!1;var t=e instanceof HTMLElement?e:e instanceof $?e[0]:null;return t&&"true"===t.contentEditable}};return a}(),StackExchange.switchMobile=function(e){$.post("/mobile/"+e,{"returnurl":window.location.href,"fkey":StackExchange.options.user.fkey},function(e){window.location.href=e})},StackExchange.scrollPadding=function(){function e(){function e(e){var t=e.filter(function(e,t){return t===window||t===document.body||t==document.body.parentElement});return e.length>0&&e.length===t.length}function t(e,t){return function(){if(l)return e.apply(this,arguments);l=!0;try{return t.apply(this,arguments)}finally{l=!1}}}function i(){var e=$(":target");if(e.length||(location.hash.length>1&&/edge|msie|trident/i.test(navigator.userAgent)&&(e=$(document.getElementsByName(location.hash.substr(1))).first()),e.length)){var t=1;e.is(":empty")&&"inline"===e.css("display")&&(t+=parseInt(e.next().css("margin-top"),10));var i=e.offset().top;e.length&&Math.abs(r.scrollTop()-i-n)<t&&r.scrollTop(i)}}var o=jQuery.fn.animate;jQuery.fn.animate=t(o,function(t){if("scrollTop"in t&&e(this)){var i={};$.extend(i,t),i.scrollTop=parseInt(i.scrollTop,10)-n,arguments[0]=i}return o.apply(this,arguments)});var a=jQuery.fn.scrollTop;
jQuery.fn.scrollTop=t(a,function(){if(e(this)){if(0===arguments.length)return a.apply(this,arguments)+n;arguments[0]-=n}return a.apply(this,arguments)});for(var s=document.body.__proto__;s&&!s.hasOwnProperty("scrollIntoView");)s=s.__proto__;if(s){var c=s.scrollIntoView;s.scrollIntoView=t(c,function(e){var t=this;if("contents"===getComputedStyle(t).display&&(t=t.children[0]||t),e===!0||null==e||"smooth"!==e.behavior&&"end"!==e.block){var i=document.body.style.marginTop,o=parseInt(getComputedStyle(document.body).marginTop,10);document.body.style.marginTop=o-n+"px";var a=c.apply(t,arguments);return document.body.style.marginTop=i,a}c.apply(t,arguments)})}var l=!1;$("body").on("click","a",function(){var e=$(this).attr("href");e&&/#/.test(e)&&(r.on("scroll",i),setTimeout(function(){r.off("scroll",i)},500))}),r.on("hashchange",i),$(function(){setTimeout(i,10),setTimeout(i,100),setTimeout(i,1e3)})}function t(){var e,t,i,o,a=performance.now?performance.now.bind(performance):Date.now.bind(Date),s=null,c=null,l=!1,u=StackExchange.helpers.DelayedReaction(function(){s=null},100,{"sliding":!0});r.on("keydown",function(n){if(n.target!==document.body)return s=null,void 0;var d=n.which;return 32>d||d>34?(s=null,void 0):(e=s=r.scrollTop(),t=0,o=0,l=!1,c=null,i=a(),u.trigger(),void 0)}),r.on("scroll",function(){if(null!==s){if(l)return r.scrollTop(c),void 0;var d=a(),p=r.scrollTop(),h=d-i,f=p-e,g=f/h,m=0>f?-1:1;null===c&&(c=s+m*(r.height()-n-20));var v=g-t,b=v/h,y=b+(b-o);if(0>g*y){var k=-g/y,w=p+k*(g+.5*y*k),x=c-w;Math.abs(x)<100&&(p+(g+.5*y*h)*h-c)*m>-20&&(r.scrollTop(c),l=!0)}u.trigger(),e=p,i=d,t=g,o=b}})}var n=0,i=0,o=0,a=!1,r=$(window);return{"setPaddingTop":function(r,s){o=s||0,n=r+o,i=r,a||(a=!0,e(),/^mac/i.test(navigator.platform)&&!/firefox/i.test(navigator.userAgent)&&t())},"getPaddingTop":function(){return n},"getPaddingTopMinimal":function(){return i},"getWindowScrollTopMinimal":function(){return r.scrollTop()-o},"ensureInitialized":function(){a||StackExchange.scrollPadding.setPaddingTop(0,0)}}}(),jQuery.cookie=function(e,t,n){if("undefined"==typeof t){var i=null;if(document.cookie&&""!=document.cookie)for(var o=document.cookie.split(";"),a=0;a<o.length;a++){var r=jQuery.trim(o[a]);if(r.substring(0,e.length+1)==e+"="){i=decodeURIComponent(r.substring(e.length+1));break}}return i}n=n||{},null===t&&(t="",n.expires=-1);var s="";if(n.expires&&("number"==typeof n.expires||n.expires.toUTCString)){var c;"number"==typeof n.expires?(c=new Date,c.setTime(c.getTime()+24*n.expires*60*60*1e3)):c=n.expires,s="; expires="+c.toUTCString()}var l=n.path?"; path="+n.path:"",u=n.domain?"; domain="+n.domain:"",d=n.secure?"; secure":"";document.cookie=[e,"=",encodeURIComponent(t),s,l,u,d].join("")},jQuery.expr[":"].regex=function(e,t,n){var i=n[3].split(","),o=/^(data|css):/,a={"method":i[0].match(o)?i[0].split(":")[0]:"attr","property":i.shift().replace(o,"")},r="ig",s=new RegExp(i.join("").replace(/^\s+|\s+$/g,""),r);return s.test(jQuery(e)[a.method](a.property))},$.extend($.expr[":"],{"containsExact":function(e,t,n){return $.trim(e.innerHTML.toLowerCase())===n[3].toLowerCase()},"containsExactCase":function(e,t,n){return $.trim(e.innerHTML)===n[3]},"containsRegex":function(e,t,n){var i=/^\/((?:\\\/|[^\/])+)\/([mig]{0,3})$/,o=i.exec(n[3]);return RegExp(o[1],o[2]).test($.trim(e.innerHTML))}}),function(e){e.fn.typeWatch=function(t){function n(t,n){var i=e(t.el).val();(i.length>o.captureLength&&i.toUpperCase()!=t.text||n&&i.length>o.captureLength)&&(t.text=i.toUpperCase(),t.cb(i))}function i(t){if("TEXT"==t.type.toUpperCase()||"TEXTAREA"==t.nodeName.toUpperCase()){var i={"timer":null,"text":e(t).val().toUpperCase(),"cb":o.callback,"el":t,"wait":o.wait};o.highlight&&e(t).focus(function(){this.select()});var a=function(e){var t=i.wait,o=!1;13==e.keyCode&&"TEXT"==this.type.toUpperCase()&&(t=1,o=!0);var a=function(){n(i,o)};clearTimeout(i.timer),i.timer=setTimeout(a,t)};e(t).keydown(a).bind("paste",null,function(e){e.which||a(this)}).bind("input",null,function(e){e.which||a(this)})}}var o=e.extend({"wait":750,"callback":function(){},"highlight":!0,"captureLength":2},t);return this.each(function(){i(this)})}}(jQuery),function(e){function t(t){var n;return t&&t.constructor==Array&&3==t.length?t:(n=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(t))?[parseInt(n[1]),parseInt(n[2]),parseInt(n[3])]:(n=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(t))?[2.55*parseFloat(n[1]),2.55*parseFloat(n[2]),2.55*parseFloat(n[3])]:(n=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(t))?[parseInt(n[1],16),parseInt(n[2],16),parseInt(n[3],16)]:(n=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(t))?[parseInt(n[1]+n[1],16),parseInt(n[2]+n[2],16),parseInt(n[3]+n[3],16)]:(n=/rgba\(0, 0, 0, 0\)/.exec(t))?i.transparent:i[e.trim(t).toLowerCase()]}function n(n,i){var o;do{if(o=e.css(n,i),""!=o&&"transparent"!=o||e.nodeName(n,"body"))break;i="backgroundColor"}while(n=n.parentNode);return t(o)}e.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor","borderTopColor","color","outlineColor"],function(i,o){e.fx.step[o]=function(e){e.colorInit||(e.start=n(e.elem,o),e.end=t(e.end),e.colorInit=!0),e.elem.style[o]="rgb("+[Math.max(Math.min(parseInt(e.pos*(e.end[0]-e.start[0])+e.start[0]),255),0),Math.max(Math.min(parseInt(e.pos*(e.end[1]-e.start[1])+e.start[1]),255),0),Math.max(Math.min(parseInt(e.pos*(e.end[2]-e.start[2])+e.start[2]),255),0)].join(",")+")"}});var i={"transparent":[255,255,255]}}(jQuery),StackExchange.gps=function(){function e(e,t,n,i){t=t||{};var o=null;StackExchange.options&&StackExchange.options.user&&(t.user_type=StackExchange.options.user.userType,o=StackExchange.options.user.ab);var a={"evt":e,"properties":t,"now":(new Date).getTime()};o&&(a.ab=o),StackExchange._gps_track.push(a),i&&i()}return StackExchange._gps_track=[],window.location.href.indexOf("utm_")>=0&&StackExchange.ready(function(){if(StackExchange.options&&StackExchange.options.utm);else{var t=function(e){var t=new RegExp("[\\?&]utm_"+e+"=([^&#]*)").exec(window.location.href);return t?decodeURIComponent(t[1])||void 0:void 0},n={"source":t("source"),"medium":t("medium")||"unknown","medium_s":t("medium")||"unknown","campaign":t("campaign"),"content":t("content"),"term":t("term")};n.source&&n.campaign&&e("utm.view",n,!1),StackExchange.using("gps",function(){StackExchange.gps.sendPending()})}}),{"track":e,"sendPending":function(e){e&&e()}}}();