var GMapHandler={};GMapHandler.MapHndlr=function(){function t(){this.load_path="/core/inc/map_form_js_data.php",this.mapContainerId="order_map",this.mapBox,this.imgsDir="/img/order_map/",this.mapInitCenter={lat:55.754317,lng:37.619617},this.totalManagersCount=47,this.curMap,this.formHandlr,this.curMapMrkrs=[],this.curMapIWins=[],this.winMrkr=new google.maps.Marker({draggable:!0,icon:this.imgsDir+"map-ball-win.png",cursor:"move"}),this.okrugiMosMrkrsData=[],this.okrugiMosMrkrs=[],this.rayoniMosOblIWData=[],this.rayoniMosOblIW=[],this.rayoniMosIWData=[],this.rayoniMosIW=[]}return t.prototype.initMap=function(t,e,o){return t?(o||(o=10),e||(e=this.mapInitCenter),this.mapBox=$("#"+this.mapContainerId),void(this.curMap=new google.maps.Map(document.getElementById(t),{zoom:o,center:e,zoomControl:!1,mapTypeControl:!1,scaleControl:!1,streetViewControl:!1,rotateControl:!1}))):!1},t.prototype.initOrderMap=function(t,e){function o(e){var o=JSON.parse(e);i.okrugiMosMrkrsData=o.mos_okruga,i.rayoniMosOblIWData=o.mosobl_rayony,i.rayoniMosIWData=o.mos_rayony,i.createMarkers(i.okrugiMosMrkrsData,i.okrugiMosMrkrs),i.createIwindows(i.rayoniMosIWData,i.rayoniMosIW),i.createMosOblIwindows(i.rayoniMosOblIWData,i.rayoniMosOblIW),i.formHandlr.initFormHandler(i),i.formHandlr.mos_obl_link_box.show(),i.formHandlr.managers_data=o.managers,i.formHandlr.managers_count=o.managers_count,i.formHandlr.cur_okrug?(t&&$(window).off("scroll",i.waitMapInwindow),i.formHandlr.updateSelectOkrug(i.formHandlr.cur_okrug),i.formHandlr.cur_rayon?(i.formHandlr.selectChangesMapRayon(i.formHandlr.cur_rayon,i.formHandlr.slctRayon.find("option[value="+i.formHandlr.cur_rayon+"]").eq(0).text(),i.formHandlr),i.formHandlr.selectHint.hide(),i.formHandlr.slctRayonBox.show()):i.formHandlr.selectChangesMapOkrug(i.formHandlr.cur_okrug,i.formHandlr.slctOkrug.find("option[value="+i.formHandlr.cur_okrug+"]").eq(0).text(),i.formHandlr)):i.firstMarkers(t)}var i=this;this.formHandlr=e,this.initMap("order_map",this.mapInitCenter),$.ajax({type:"POST",url:this.load_path,data:"",success:o})},t.prototype.createMarkers=function(t,e){var o=this;for(var i in t)if(t.hasOwnProperty(i)&&/^0$|^[1-9]\d*$/.test(i)&&4294967294>=i){var n=new google.maps.Marker({title:t[i].name,position:t[i].point,icon:this.imgsDir+"okrug/"+t[i].img,animation:google.maps.Animation.DROP});n.prosto_tid=parseInt(i),n.addListener("click",function(){o.showChildsIW(this.prosto_tid),o.mapBox.trigger("prosto_gmap_okrug_check",[this.prosto_tid,this.getTitle()]),o.formHandlr.sendChangeEvent(),o.formHandlr.sendOkrugSelectedEvent(o.okrugiMosMrkrsData[this.prosto_tid].name)}),e[i]=n}},t.prototype.firstMarkers=function(t){t?$(window).on("scroll",{this_obj:this,scrl:t},this.waitMapInwindow):this.addMarkers(this.okrugiMosMrkrs)},t.prototype.waitMapInwindow=function(t){$(this).scrollTop()<t.data.scrl||(t.data.this_obj.addMarkers(t.data.this_obj.okrugiMosMrkrs),$(this).off("scroll",t.data.this_obj.waitMapInwindow))},t.prototype.addMarker=function(t){t.setMap(this.curMap),this.curMapMrkrs[t.prosto_tid]=t},t.prototype.addDelayMarker=function(t,e){var o=this;setTimeout(function(){o.addMarker(t)},e)},t.prototype.addMarkers=function(t,e){var o=0;for(var i in t)t.hasOwnProperty(i)&&/^0$|^[1-9]\d*$/.test(i)&&4294967294>=i&&(e?this.addMarker(t[i]):(this.addDelayMarker(t[i],150*o),o++))},t.prototype.hideCurMarkers=function(){if(0!=this.curMapMrkrs.length){for(var t in this.curMapMrkrs)this.curMapMrkrs.hasOwnProperty(t)&&/^0$|^[1-9]\d*$/.test(t)&&4294967294>=t&&this.curMapMrkrs[t].setMap(null);this.curMapMrkrs.length=0}},t.prototype.createIwindows=function(t,e){var o=this;for(var i in t)if(t.hasOwnProperty(i)&&/^0$|^[1-9]\d*$/.test(i)&&4294967294>=i){var n=new google.maps.InfoWindow({content:'<span class="iw-rayon-name" id="iw_rayon_'+i+'" data-rayontid="'+i+'">'+t[i].name+"</span>",position:t[i].point});n.prosto_tid=parseInt(i),n.addListener("domready",function(){{var t=o.mapBox.find("#iw_rayon_"+this.prosto_tid);t.closest(".gm-style-iw").parent()}t.on("click",function(){o.mapBox.trigger("prosto_gmap_rayon_check",[$(this).data("rayontid"),$(this).text()]),o.selectRayonAct($(this).data("rayontid"))})}),e[i]=n}},t.prototype.createMosOblIwindows=function(t,e){var o=this;for(var i in t)if(t.hasOwnProperty(i)&&/^0$|^[1-9]\d*$/.test(i)&&4294967294>=i){var n=new google.maps.InfoWindow({content:'<span class="iw-rayon-name" id="iw_rayon_'+i+'" data-rayontid="'+i+'">'+t[i].name+"</span>",position:t[i].point});n.prosto_tid=parseInt(i),n.addListener("domready",function(){{var t=o.mapBox.find("#iw_rayon_"+this.prosto_tid);t.closest(".gm-style-iw").parent()}t.on("click",function(){o.mapBox.trigger("prosto_gmap_okrug_check",[$(this).data("rayontid"),$(this).text()]),o.showChildsIW($(this).data("rayontid")),o.activateMapForUserClick(),o.formHandlr.sendOkrugSelectedEvent(o.rayoniMosOblIWData[$(this).data("rayontid")].name)})}),e[i]=n}},t.prototype.showChildsIW=function(t){var e=this;if(this.hideCurMarkers(),this.hideCurIWins(),this.rayoniMosOblIWData[t])this.curMap.setCenter(this.rayoniMosOblIWData[t].point),setTimeout(function(){e.curMap.setZoom(12)},250);else{for(var o=this.okrugiMosMrkrsData[t].rayony,i=o.length,n=[],s=new google.maps.LatLngBounds,r=0;i>r;r++)n[o[r]]=this.rayoniMosIW[o[r]],s.extend(this.rayoniMosIW[o[r]].getPosition());if(0==n.length)return;this.curMap.panTo(s.getCenter()),setTimeout(function(){e.curMap.fitBounds(s)},250),setTimeout(function(){e.addIWinds(n)},500),setTimeout(function(){e.curMap.setZoom(e.curMap.getZoom()+.5)},150*o.length+700)}},t.prototype.addIWindow=function(t){t.open(this.curMap),$("#iw_rayon_"+t.prosto_tid).closest(".gm-style-iw").parent().addClass("prosto-gmap-iw-box"),this.curMapIWins[t.prosto_tid]=t},t.prototype.addDelayIW=function(t,e){var o=this;setTimeout(function(){o.addIWindow(t)},e)},t.prototype.addIWinds=function(t,e){var o=0;for(var i in t)t.hasOwnProperty(i)&&/^0$|^[1-9]\d*$/.test(i)&&4294967294>=i&&(e?this.addIWindow(t[i]):(this.addDelayIW(t[i],150*o),o++))},t.prototype.hideCurIWins=function(){if(0!=this.curMapIWins.length){for(var t in this.curMapIWins)this.curMapIWins.hasOwnProperty(t)&&/^0$|^[1-9]\d*$/.test(t)&&4294967294>=t&&(this.curMapIWins[t].close(),this.mapBox.find(".prosto-gmap-iw-box").removeClass("prosto-gmap-iw-box"));this.curMapIWins.length=0}},t.prototype.selectRayonAct=function(t){var e=this.rayoniMosIW[t];this.hideCurIWins(),this.curMap.setCenter(e.getPosition()),this.curMap.setZoom(15),this.activateMapForUserClick()},t.prototype.activateMapForUserClick=function(){var t=this;this.curMap.addListener("click",function(e){t.winMrkr.setPosition(e.latLng),t.winMrkr.setMap(t.curMap),google.maps.event.clearListeners(t.curMap,"click")})},t}(),GMapHandler.OrderFormHandler=function(){function t(){this.mapHandrl,this.act_path="/core/widget/",this.change_event_sent=!1,this.okrug_selected=!1,this.managers_data,this.managers_count,this.map_form_loader,this.map_form_notif,this.map_form,this.selectHint,this.slctOkrug,this.slctRayonBox,this.slctRayon,this.inptPhone,this.inptName,this.inptMail,this.inptStreet,this.inptHouse,this.inptFlat,this.mos_obl_link_box,this.mos_link_box,this.sbmt,this.phraseFirstWords,this.phraseManCount,this.phraseLastWords,this.cur_okrug,this.cur_rayon,this.phone_ok,this.mng_avatars_box,this.mock_mng_mos_okr={1:[".m_11",".m_92",".m_93",".m_35"],2:[".m_94",".m_11",".m_95",".m_35"],3:[".m_96",".m_97",".m_11",".m_98"],4:[".m_92",".m_93",".m_35",".m_94"],5:[".m_11",".m_38",".m_97",".m_98"],6:[".m_92",".m_38",".m_94",".m_96"],7:[".m_35",".m_38",".m_98",".m_93"],8:[".m_11",".m_96",".m_97",".m_95"],9:[".m_98",".m_93",".m_94",".m_35"],10:[".m_95",".m_98",".m_93",".m_94"],11:[".m_95",".m_98",".m_93",".m_94"],13:[".m_38",".m_95",".m_96",".m_97"],14:[".m_11",".m_98",".m_94",".m_35"],15:[".m_37",".m_96",".m_97",".m_98"],16:[".m_11",".m_94",".m_95",".m_35"],17:[".m_11",".m_92",".m_93",".m_35"],18:[".m_92",".m_98",".m_94",".m_95"],19:[".m_11",".m_92",".m_93",".m_35"],20:[".m_94",".m_95",".m_92"],21:[".m_11",".m_93",".m_98",".m_35"],22:[".m_95",".m_92",".m_93"],23:[".m_94",".m_11",".m_97",".m_96"],24:[".m_98",".m_94",".m_97"],25:[".m_11",".m_96",".m_93",".m_35"],26:[".m_11",".m_92",".m_95",".m_35"],27:[".m_96",".m_93",".m_92",".m_95"],28:[".m_96",".m_93",".m_92"],29:[".m_95",".m_11",".m_98",".m_94"],30:[".m_11",".m_97",".m_96"],31:[".m_93",".m_11",".m_92",".m_95"],32:[".m_11",".m_98",".m_94",".m_35"],33:[".m_11",".m_93",".m_92",".m_95"],34:[".m_97",".m_93",".m_92"],35:[".m_11",".m_95",".m_96",".m_35"],36:[".m_93",".m_92",".m_95",".m_96"],37:[".m_11",".m_97",".m_98",".m_35"],38:[".m_95",".m_96",".m_97"],39:[".m_92",".m_11",".m_93",".m_94"],40:[".m_98",".m_92",".m_93"],41:[".m_94",".m_11",".m_97",".m_96"],42:[".m_93",".m_94",".m_97"],43:[".m_96",".m_11",".m_92",".m_98"],44:[".m_11",".m_95",".m_93",".m_35"],45:[".m_92",".m_98",".m_95",".m_93"],46:[".m_92",".m_98",".m_95"],47:[".m_11",".m_93",".m_94"],48:[".m_11",".m_92",".m_98",".m_95"],49:[".m_97",".m_92",".m_98",".m_95"],50:[".m_97",".m_92",".m_98"],51:[".m_11",".m_94",".m_96",".m_97"],52:[".m_95",".m_94",".m_96"],53:[".m_97",".m_93",".m_35",".m_98"],54:[".m_96",".m_97",".m_93"],55:[".m_11",".m_95",".m_92",".m_96"],56:[".m_98",".m_95",".m_92",".m_96"],57:[".m_98",".m_95",".m_92"],58:[".m_94",".m_98",".m_95"],59:[".m_11",".m_92",".m_93",".m_35"],60:[".m_98",".m_95",".m_92"],61:[".m_11",".m_96",".m_97",".m_98"],62:[".m_93",".m_96",".m_97"],63:[".m_11",".m_92",".m_95",".m_93"],64:[".m_98",".m_92",".m_95"],65:[".m_96",".m_98",".m_92"],66:[".m_11",".m_94",".m_93",".m_96"],67:[".m_95",".m_94",".m_93",".m_96"],68:[".m_11",".m_97",".m_92",".m_35"],69:[".m_11",".m_98",".m_95",".m_35"],70:[".m_94",".m_11",".m_93",".m_96"],71:[".m_95",".m_94",".m_93",".m_96"],72:[".m_95",".m_94",".m_93",".m_96"],73:[".m_11",".m_98",".m_95",".m_94"],74:[".m_11",".m_92",".m_97",".m_98"],75:[".m_95",".m_94",".m_35",".m_96"],76:[".m_98",".m_95",".m_94"],77:[".m_93",".m_98",".m_95"],78:[".m_96",".m_93",".m_98"],79:[".m_11",".m_92",".m_94",".m_96"],80:[".m_11",".m_97",".m_95",".m_92"]}}return t.prototype.sendChangeEvent=function(){"function"!=typeof ga||this.change_event_sent||(ga("send","event","Map Form","Change"),this.change_event_sent=!0)},t.prototype.sendOkrugSelectedEvent=function(t){"function"==typeof ga&&(this.okrug_selected||(ga("send","pageview","/map-form-okrug-select"),ga("send","event","Map Form","Okrug Select",t),this.okrug_selected=!0))},t.prototype.initFormHandler=function(t){var e=this;this.mapHandrl=t,"function"==typeof ga&&(ga("send","event","Map Form","Open"),ga("send","pageview","/map-form-open")),this.map_form_loader=$("#map_form_loader"),this.map_form_notif=$("#map_form_notification"),this.map_form=$("#webform-client-form-9"),this.selectHint=$(".webform-component--selecthint"),this.slctRayonBox=$(".webform-component--district"),this.slctOkrug=$("#edit-submitted-okrug"),this.slctRayon=$("#edit-submitted-district"),this.inptStreet=$("#edit-submitted-street"),this.inptHouse=$("#edit-submitted-house-num"),this.inptFlat=$("#edit-submitted-flat-num"),this.inptPhone=$("#edit-submitted-phone"),this.inptName=$("#edit-submitted-imya"),this.inptMail=$("#edit-submitted-email"),this.mos_obl_link_box=$("#mos_obl_link_box"),this.mos_link_box=$("#mos_link_box"),this.sbmt=$("#zakaz_map_submit"),this.mng_avatars_box=$("div.zakaz-managers-block-view div.view-content"),this.phraseFirstWords=$("#zakaz_form_managers_phrase"),this.phraseManCount=$("#zakaz_form_managers_count"),this.phraseLastWords=$("#zakaz_form_last_phrase_words"),this.mapHandrl.mapBox.on("prosto_gmap_okrug_check",function(t,o,i){e.mapChangesSelectOkrug(o,i,e)}),this.mapHandrl.mapBox.on("prosto_gmap_rayon_check",function(t,o,i){e.mapChangesSelectRayon(o,i,e)}),this.mos_obl_link_box.find("a").eq(0).on("click",function(t){t.preventDefault(),e.mapHandrl.hideCurMarkers(),e.mapHandrl.hideCurIWins(),e.mos_obl_link_box.hide(),e.mos_link_box.show(),e.slctRayonBox.hide(),e.selectHint.show(),e.updateSelectRayon([]),e.updateSelectOkrug(!1),google.maps.event.clearListeners(e.mapHandrl.curMap,"click"),e.sendChangeEvent(),e.mapHandrl.curMap.setZoom(8),e.mapHandrl.curMap.setCenter(e.mapHandrl.mapInitCenter),setTimeout(function(){e.mapHandrl.addIWinds(e.mapHandrl.rayoniMosOblIW,!0)},250),e.updateFormManagersPhrase(3*e.managers_count,"Ваш заказ "+skloniPoCifre(3*e.managers_count,["готов<br> принять","готовы<br> принять","готовы<br> принять"]))}),this.mos_link_box.find("a").eq(0).on("click",function(t){t.preventDefault(),e.mapHandrl.hideCurMarkers(),e.mapHandrl.hideCurIWins(),e.mos_obl_link_box.show(),e.mos_link_box.hide(),e.slctRayonBox.hide(),e.selectHint.show(),e.updateSelectRayon([]),e.updateSelectOkrug(!1),google.maps.event.clearListeners(e.mapHandrl.curMap,"click"),e.mapHandrl.curMap.setZoom(10),setTimeout(function(){e.mapHandrl.curMap.setCenter(e.mapHandrl.mapInitCenter)},250),setTimeout(function(){e.mapHandrl.addMarkers(e.mapHandrl.okrugiMosMrkrs)},350),e.updateFormManagersPhrase(3*e.managers_count,"Ваш заказ "+skloniPoCifre(3*e.managers_count,["готов<br> принять","готовы<br> принять","готовы<br> принять"]))}),this.slctOkrug.on("change",function(){e.selectChangesMapOkrug($(this).val(),$(this).text(),e),e.defineSbmtState(),e.sendChangeEvent();var t="";t=e.mapHandrl.okrugiMosMrkrsData[$(this).val()]?e.mapHandrl.okrugiMosMrkrsData[$(this).val()].name:e.mapHandrl.rayoniMosIWData[$(this).val()].name,e.sendOkrugSelectedEvent(t)}),this.slctRayon.on("change",function(){e.selectChangesMapRayon($(this).val(),$(this).text(),e),"function"==typeof ga&&ga("send","pageview","/map-form-raion-select")}),this.inptPhone.mask("+7 (999) 999-99-99"),this.checkInputedPhone(this.inptPhone),this.defineSbmtState(),this.inptPhone.on("keyup",function(){e.checkInputedPhone(e.inptPhone),e.defineSbmtState(),e.sendChangeEvent()}),this.inptPhone.on("change",function(){"function"==typeof ga&&ga("send","pageview","/map-form-phone-change")}),this.inptName.on("keyup",function(){e.sendChangeEvent()}),this.inptName.on("change",function(){"function"==typeof ga&&ga("send","pageview","/map-form-name-change")}),this.activateSubmitHandler();var o=this.slctOkrug.find("option:selected").eq(0).val(),i=this.slctRayon.find("option:selected").eq(0).val();this.cur_okrug=o.length>0?o:null,this.cur_rayon=i.length>0?i:null},t.prototype.mapChangesSelectOkrug=function(t,e,o){if(o.updateSelectOkrug(t),o.mapHandrl.okrugiMosMrkrsData[parseInt(t)]){o.selectHint.hide(),o.slctRayonBox.show(),o.mos_obl_link_box.show(),o.mos_link_box.hide(),o.updateSelectRayon(o.mapHandrl.okrugiMosMrkrsData[parseInt(t)].rayony);var i="Сейчас в Вашем округе<br>",n=["работает","работают","работают"],s=3*o.mapHandrl.okrugiMosMrkrsData[parseInt(t)].managers.length;o.updateFormManagersPhrase(s,i+skloniPoCifre(s,n))}else{o.slctRayonBox.hide(),o.selectHint.hide(),o.updateSelectRayon([]),o.mos_obl_link_box.hide(),o.mos_link_box.show();var i="Сейчас в Вашем районе<br>",n=["работает","работают","работают"],s=3*o.mapHandrl.rayoniMosOblIWData[parseInt(t)].managers.length;o.updateFormManagersPhrase(s,i+skloniPoCifre(s,n))}},t.prototype.updateSelectOkrug=function(t){t?(this.cur_okrug=t,this.slctOkrug.find("option[value='"+t+"']").attr("selected","selected"),this.slctOkrug.val(t).addClass("form-element-ok"),this.slctOkrug.find("option").not("option[value='"+t+"']").removeAttr("selected"),this.mock_mng_mos_okr[t]&&this.mng_avatars_box.prepend(this.mng_avatars_box.children(this.mock_mng_mos_okr[t].join(", ")))):(this.cur_okrug=null,this.slctOkrug.find("option").removeAttr("selected"),this.slctOkrug.removeClass("form-element-ok").val("").find("option[value='']").attr("selected","selected")),this.defineSbmtState()},t.prototype.updateSelectRayon=function(t){this.cur_rayon=null,t||(t=[]),this.slctRayon.find("option[disabled]").attr("selected","selected"),this.slctRayon.val("").removeClass("form-element-ok"),this.slctRayon.find("option").each(function(){t.indexOf(parseInt($(this).val()))>-1?$(this).css("display",""):$(this).css("display","none")})},t.prototype.mapChangesSelectRayon=function(t,e,o){o.cur_rayon=t,o.slctRayon.find("option[value='"+t+"']").attr("selected","selected"),o.slctRayon.val(t).addClass("form-element-ok"),o.slctRayon.find("option").not("option[value='"+t+"']").removeAttr("selected")},t.prototype.selectChangesMapOkrug=function(t,e,o){o.cur_okrug=t,o.mapHandrl.showChildsIW(t),o.mapHandrl.okrugiMosMrkrsData[parseInt(t)]?(o.updateSelectRayon(o.mapHandrl.okrugiMosMrkrsData[parseInt(t)].rayony),o.selectHint.hide(),o.slctRayonBox.show(),o.mos_obl_link_box.show(),o.mos_link_box.hide()):(o.mos_obl_link_box.hide(),o.mos_link_box.show(),o.selectHint.hide(),o.slctRayonBox.hide(),o.updateSelectRayon([])),o.mock_mng_mos_okr[t]&&o.mng_avatars_box.prepend(o.mng_avatars_box.children(o.mock_mng_mos_okr[t].join(", "))),o.slctOkrug.addClass("form-element-ok");var i,n="Сейчас в Вашем округе<br>",s=["работает","работают","работают"];i=o.mapHandrl.okrugiMosMrkrsData[parseInt(t)]?o.mapHandrl.okrugiMosMrkrsData[parseInt(t)].managers.length:o.mapHandrl.rayoniMosOblIWData[parseInt(t)].managers.length,i*=3,o.updateFormManagersPhrase(i,n+skloniPoCifre(i,s))},t.prototype.selectChangesMapRayon=function(t,e,o){o.cur_rayon=t,t&&(o.slctRayon.addClass("form-element-ok"),o.mapHandrl.selectRayonAct(t))},t.prototype.checkInputedPhone=function(t){var e=t.val(),o=e.replace(/\D/g,""),i=checkPhoneString(e);i?(t.addClass("form-element-ok"),t.removeClass("form-element-error"),this.phone_ok=!0):(11==o.length?t.addClass("form-element-error"):t.removeClass("form-element-error"),t.removeClass("form-element-ok"),this.phone_ok=!1)},t.prototype.defineSbmtState=function(){this.phone_ok&&this.cur_okrug?this.sbmt.removeAttr("disabled"):this.sbmt.attr("disabled","disabled")},t.prototype.updateFormManagersPhrase=function(t,e){if(t&&e){this.phraseFirstWords.html(e);var o=["наш<br>менеджер","наших<br>менеджера","наших<br>менеджеров"];this.phraseManCount.data("count-from",this.phraseManCount.text()),this.phraseManCount.data("count-till",t),nakrutka(this.phraseManCount,35,"",1,!1),this.phraseLastWords.html(skloniPoCifre(t,o))}},t.prototype.activateSubmitHandler=function(){var t=this;t.sbmt.on("click",function(e){function o(e){var o=JSON.parse(e);return t.map_form_loader.hide(),"error"==o.status?("phone"==o.errorcode&&(t.map_form_notif.html(o.text).show(),setTimeout(function(){t.map_form_notif.hide(200),t.map_form.show(300)},3e3)),"no_okrug"==o.errorcode&&(t.map_form_notif.html(o.text).show(),setTimeout(function(){t.map_form_notif.hide(200),t.map_form.show(300)},3e3)),void("spam_block"==o.errorcode&&t.map_form_notif.html("Ваша заявка уже принята.<br>Менеджер заказа свяжется с Вами в ближайшее время.").show())):("function"==typeof ga&&(ga("send","event","Map Form","Submit",t.slctOkrug.find("option:selected").text()),ga("send","pageview","/map-form-submit")),"object"==typeof yaCounter33657694&&yaCounter33657694.reachGoal("OrderForm submit"),void t.map_form_notif.html(o.text).show())}var i=t.inptStreet.val(),n=t.inptHouse.val(),s=t.inptFlat.val(),r=t.inptMail.val();e.preventDefault(),t.map_form.hide(),t.map_form_loader.show();var a="op=lead";a+="&wdg_phone="+t.inptPhone.val(),a+="&wdg_cl_name="+encodeURIComponent(t.inptName.val()),a+="&wdg_okrug="+t.cur_okrug,a+="&wdg_rayon="+t.cur_rayon,r&&(a+="&wdg_cl_mail="+r),i&&(a+="&wdg_cl_street="+i),n&&(a+="&wdg_cl_house_num="+n),s&&(a+="&wdg_cl_flat_num="+s),a+="&ep_url="+encodeURIComponent(OkpWidget.WdgObj.ep),a+="&rfr_url="+encodeURIComponent(OkpWidget.WdgObj.rfr),a+="&actp_url="+encodeURIComponent(window.location.href),a+="&wdg_phr="+encodeURIComponent("Заявка на замер по карте"),a+="&wdg_phrt=uform",a+="&l_type=map",void 0!==localStorage.calc_text&&(a+="&pre_calc="+encodeURIComponent(localStorage.calc_text)),$.ajax({type:"POST",url:t.act_path,data:a,success:o})})},t}(),map_debug=!0;