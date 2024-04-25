(()=>{var e={175:()=>{
/**
 * baserCMS :  Based Website Development Project <https://basercms.net>
 * Copyright (c) NPO baser foundation <https://baserfoundation.org/>
 *
 * @copyright     Copyright (c) NPO baser foundation
 * @link          https://basercms.net baserCMS Project
 * @since         5.0.0
 * @license       https://basercms.net/license/index.html MIT License
 */
var e;(e=jQuery).bcToken={key:null,requested:!1,requesting:!1,url:null,defaultUrl:"/baser-core/bc_form/get_token?requestview=false",init:function(){this.setTokenUrl()},check:function(t,a){if(this.requesting)var r=setInterval((function(){e.bcToken.requesting||(clearInterval(r),t&&e.bcToken.execCallback(t,a))}),100);else this.key?t&&this.execCallback(t,a):this.update(a).done((function(){t&&e.bcToken.execCallback(t,a)}))},execCallback:function(t,a){var r={useUpdate:!0};a=void 0!==a?e.extend(r,a):r;var n=t();a.useUpdate&&(a.hideLoader=!0,a.loaderType="none",n?n.always((function(){e.bcToken.update(a)})):this.update(a))},update:function(t){var a={type:"GET"};return t=void 0!==t?e.extend(a,t):a,this.requesting=!0,e.bcUtil.ajax(this.url,(function(t){e.bcToken.key=t,e.bcToken.requesting=!1,e('input[name="_csrfToken"]').val(e.bcToken.key)}),e.extend(!0,{},t))},getForm:function(t,a,r,n){var i=e("<form/>");i.attr("action",t).attr("method","post"),this.check((function(){i.append(e.bcToken.getHiddenToken()),a.fields&&i.append(a.fields),a.unlocked&&i.append(a.unlocked),a.debug&&i.append(a.debug),r(i)}),n)},getHiddenToken:function(){return e('<input name="_csrfToken" type="hidden">').val(this.key)},submitToken:function(t,a){this.getForm(t,a,(function(t){e("body").append(t),t.submit()}),{useUpdate:!1,hideLoader:!1})},replaceLinkToSubmitToken:function(t){e(t).each((function(){if(e(this).attr("onclick")){var t=e(this).attr("onclick").match(/document\.(post_.+?).submit\(\)/);t&&e(this).attr("data-post-link-form-id",t[1]),e(this).get(0).onclick="",e(this).removeAttr("onclick")}})),e(t).click((function(){if(e(this).attr("data-confirm-message")){var t=e(this).attr("data-confirm-message");if(!confirm(t))return!1}var a=e(this).attr("href"),r={};if(e(this).attr("data-post-link-form-id")){var n=e("form[name='"+e(this).attr("data-post-link-form-id")+"']"),i=n.find("input[name='_Token[fields]']"),o=n.find("input[name='_Token[unlocked]']"),s=n.find("input[name='_Token[debug]']");a=n.attr("action"),r={fields:i.length?i:null,unlocked:o.length?o:null,debug:s.length?s:null}}return e.bcToken.key=null,e.bcToken.submitToken(a,r),!1}))},setTokenUrl:function(t){return this.url=null!=t?t:e.bcUtil.baseUrl+this.defaultUrl,this}}}},t={};function a(r){var n=t[r];if(void 0!==n)return n.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,a),i.exports}(()=>{"use strict";
/*! js-cookie v3.0.5 | MIT */
function e(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)e[r]=a[r]}return e}var t,r=function t(a,r){function n(t,n,i){if("undefined"!=typeof document){"number"==typeof(i=e({},r,i)).expires&&(i.expires=new Date(Date.now()+864e5*i.expires)),i.expires&&(i.expires=i.expires.toUTCString()),t=encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var o="";for(var s in i)i[s]&&(o+="; "+s,!0!==i[s]&&(o+="="+i[s].split(";")[0]));return document.cookie=t+"="+a.write(n,t)+o}}return Object.create({set:n,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var t=document.cookie?document.cookie.split("; "):[],r={},n=0;n<t.length;n++){var i=t[n].split("="),o=i.slice(1).join("=");try{var s=decodeURIComponent(i[0]);if(r[s]=a.read(o,s),e===s)break}catch(e){}}return e?r[e]:r}},remove:function(t,a){n(t,"",e({},a,{expires:-1}))},withAttributes:function(a){return t(this.converter,e({},this.attributes,a))},withConverter:function(a){return t(e({},this.converter,a),this.attributes)}},{attributes:{value:Object.freeze(r)},converter:{value:Object.freeze(a)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"});(
/**
 * baserCMS :  Based Website Development Project <https://basercms.net>
 * Copyright (c) NPO baser foundation <https://baserfoundation.org/>
 *
 * @copyright     Copyright (c) NPO baser foundation
 * @link          https://basercms.net baserCMS Project
 * @since         5.0.0
 * @license       https://basercms.net/license/index.html MIT License
 */
t=jQuery).bcUtil={disabledHideMessage:!1,baseUrl:null,baserCorePrefix:null,adminPrefix:null,adminBaseUrl:null,apiBaseUrl:null,apiAdminBaseUrl:null,ajaxLoaderPath:null,ajaxLoaderSmallPath:null,init:function(e){void 0===e&&(e={});var a=t("#AdminScript");t.bcUtil.baseUrl=a.attr("data-baseUrl"),t.bcUtil.baserCorePrefix=a.attr("data-baserCorePrefix"),t.bcUtil.adminPrefix=a.attr("data-adminPrefix"),t.bcUtil.ajaxLoaderPath=a.attr("data-ajaxLoaderPath"),t.bcUtil.ajaxLoaderSmallPath=a.attr("data-ajaxLoaderSmallPath"),t.bcUtil.frontFullUrl=a.attr("data-frontFullUrl"),void 0!==e.baseUrl&&(t.bcUtil.baseUrl=e.baseUrl),void 0!==e.baserCorePrefix&&(t.bcUtil.baserCorePrefix=e.baserCorePrefix),void 0!==e.adminPrefix&&(t.bcUtil.adminPrefix=e.adminPrefix),void 0!==e.ajaxLoaderPath&&(t.bcUtil.ajaxLoaderPath=e.ajaxLoaderPath),void 0!==e.ajaxLoaderSmallPath&&(t.bcUtil.ajaxLoaderSmallPath=e.ajaxLoaderSmallPath),t.bcUtil.adminBaseUrl=t.bcUtil.baseUrl+"/"+t.bcUtil.baserCorePrefix+"/"+t.bcUtil.adminPrefix+"/",t.bcUtil.apiBaseUrl=t.bcUtil.baseUrl+"/"+t.bcUtil.baserCorePrefix+"/api/",t.bcUtil.apiAdminBaseUrl=t.bcUtil.baseUrl+"/"+t.bcUtil.baserCorePrefix+"/api/admin/",this.setUpTextCounter()},showAlertMessage:function(e){t.bcUtil.hideMessage(),t("#BcSystemMessage").removeClass("notice-messge alert-message").addClass("alert-message").html(e),t("#BcMessageBox").fadeIn(500)},showNoticeMessage:function(e){t.bcUtil.hideMessage(),t("#BcSystemMessage").removeClass("notice-messge alert-message").addClass("notice-message").html(e),t("#BcMessageBox").fadeIn(500)},hideMessage:function(){t.bcUtil.disabledHideMessage||(t("#BcMessageBox").fadeOut(200),t("#AlertMessage").fadeOut(200),t("#MessageBox").fadeOut(200))},showLoader:function(e,a,r){switch((null==e||"none"!=e&&null==a)&&(e="over"),e){case"over":t("#Waiting").show();break;case"inner":var n=t("<div>").css({"text-align":"center"}).attr("id",r),i=t("<img>").attr("src",t.bcUtil.ajaxLoaderPath);n.html(i),t(a).html(n);break;case"after":i=t("<img>").attr("src",t.bcUtil.ajaxLoaderSmallPath).attr("id",r).css({width:"16px","vertical-align":"middle",margin:"5px"}),t(a).after(i);break;case"target":t(a).show()}},hideLoader:function(e,a,r){switch((null==e||"none"!=e&&null==a)&&(e="over"),e){case"over":t("#Waiting").hide();break;case"inner":case"after":t("#"+r).remove();break;case"target":t(a).show()}},ajax:function(e,a,r){var n,i,o;r||(r={});var s=!0;void 0!==r.loaderType&&(n=r.loaderType,delete r.loaderType),void 0!==r.loaderSelector&&(i=r.loaderSelector,delete r.loaderSelector,o=i.replace(/\./g,"").replace(/#/g,"").replace(/\s/g,"")+"loaderkey"),void 0!==r.hideLoader&&(s=r.hideLoader,delete r.loaderType);var l={url:e,type:"POST",dataType:"html",beforeSend:function(){t.bcUtil.showLoader(n,i,o)},complete:function(){s&&t.bcUtil.hideLoader(n,i,o)},error:function(e,a,r){t.bcUtil.showAjaxError(bcI18n.commonExecFailedMessage,e,r)},success:a};return r&&t.extend(l,r),t.ajax(l)},showAjaxError:function(e,a,r){var n="";void 0!==a&&a.status&&(n="<br>("+a.status+") "),void 0!==a&&a.responseJSON&&(n+=a.responseJSON.message),void 0!==a&&a.responseText?n+="<br>"+a.responseText:void 0!==r&&(n+="<br>"+r),t.bcUtil.showAlertMessage(e+n)},showApiError:function(e){var a=e.responseJSON.message,r=e.responseJSON.errors;void 0!==r&&(a+="<br>",Object.keys(r).forEach((function(e){a+="<ul>",Object.keys(r[e]).forEach((function(t){a+="<li>"+r[e][t]+"</li>"})),a+="</ul>"}))),t.bcUtil.showAlertMessage(a)},setFlashMessage:function(e){r.set("bcFlashMessage",e)},showFlashMessage:function(){var e=r.get("bcFlashMessage");void 0!==e&&(this.showNoticeMessage(e),r.remove("bcFlashMessage"))},initTooltip:function(e){var a={target:".bca-help",content:".bca-helptext"};void 0!==e&&t.extend(a,e);var r=t(a.target);r.bt&&(t(a.content).css("display","none"),t.bt.options.closeWhenOthersOpen=!0,r.bt({trigger:"click",positions:"top",shadow:!0,shadowOffsetX:1,shadowOffsetY:1,shadowBlur:8,shadowColor:"rgba(101,101,101,.6)",shadowOverlap:!1,noShadowOpts:{strokeStyle:"#999",strokeWidth:1},width:"600px",spikeLength:12,spikeGirth:18,padding:20,cornerRadius:0,strokeWidth:1,strokeStyle:"#656565",fill:"rgba(255, 255, 255, 1.00)",cssStyles:{fontSize:"14px"},showTip:function(e){t(e).fadeIn(200)},hideTip:function(e,a){t(e).animate({opacity:0},100,a)},contentSelector:"$(this).next('".concat(a.content,"').html()")}))},setUpTextCounter:function(e){void 0===e&&(e=".bca-text-counter");var a=t(e);a.after('<span class="bca-text-counter-value"></span>'),a.keyup((function(){var e=t(this).val().length,a=t(this).attr("maxlength");a&&-1!==a||(a="-"),t(this).next().html(e+" /<small>"+a+"</small>")})),a.keyup()}};a(175)})
/**
 * baserCMS :  Based Website Development Project <https://basercms.net>
 * Copyright (c) NPO baser foundation <https://baserfoundation.org/>
 *
 * @copyright     Copyright (c) NPO baser foundation
 * @link          https://basercms.net baserCMS Project
 * @since         5.0.0
 * @license       https://basercms.net/license/index.html MIT License
 */()})();
//# sourceMappingURL=common.bundle.js.map