function wdg_dump(){console.log("-------------------------------"),console.log("----ОКНА ПРОСТО DialogWidget---"),console.log("-------------------------------"),console.log("ВЕРСИЯ СКРИПТА............okpwdgt_version....= "+OkpWidget.WdgObj.client_memory.getItem("okpwdgt_version")),console.log("ИСТОЧНИК ВХОДА............okpwdgt_rfr........= "+OkpWidget.WdgObj.client_memory.getItem("okpwdgt_rfr")),console.log("ТОЧКА ВХОДА...............okpwdgt_ep.........= "+OkpWidget.WdgObj.client_memory.getItem("okpwdgt_ep")),console.log("h1 ТОЧКИ ВХОДА............okpwdgt_eph1.......= "+OkpWidget.WdgObj.client_memory.getItem("okpwdgt_eph1")),console.log("ПРИСУТСТВИЕ...............okpwdgt_pres.......= "+OkpWidget.WdgObj.client_memory.getItem("okpwdgt_pres")),console.log("ВРЕМЯ Init Load...........okpwdgt_lt.........= "+OkpWidget.WdgObj.client_memory.getItem("okpwdgt_lt")),console.log("СЕКУНД ДО АВТОПОКАЗА......okpwdgt_sd.........= "+OkpWidget.WdgObj.client_memory.getItem("okpwdgt_sd")),console.log("ВРЕМЯ ПОКАЗА..............okpwdgt_st.........= "+OkpWidget.WdgObj.client_memory.getItem("okpwdgt_st")),console.log("ПОСЛЕДНЯЯ ОТПРАВКА........okpwdgt_sbmt.......= "+OkpWidget.WdgObj.client_memory.getItem("okpwdgt_sbmt")),console.log("ОКНО БЫЛО ПОКАЗАНО........okpwdgt_shown......= "+OkpWidget.WdgObj.client_memory.getItem("okpwdgt_shown")),console.log("СЕКУНД ДО НАЧАЛА Р. ДНЯ...okpwdgt_sbs........= "+OkpWidget.WdgObj.client_memory.getItem("okpwdgt_sbs")),console.log("СЕКУНД ДО КОНЦА Р. ДНЯ....okpwdgt_sbe........= "+OkpWidget.WdgObj.client_memory.getItem("okpwdgt_sbe")),console.log("ФРАЗА РАБ. ВРЕМЯ..........okpwdgt_wtp........= "+OkpWidget.WdgObj.client_memory.getItem("okpwdgt_wtp")),console.log("ФРАЗА НЕРАБ. ВРЕМЯ........okpwdgt_nwtp.......= "+OkpWidget.WdgObj.client_memory.getItem("okpwdgt_nwtp")),console.log("ЗАГОЛОВОК РАБ. ВРЕМЯ......okpwdgt_wth........= "+OkpWidget.WdgObj.client_memory.getItem("okpwdgt_wth")),console.log("ЗАГОЛОВОК НЕРАБ. ВРЕМЯ....okpwdgt_nwth.......= "+OkpWidget.WdgObj.client_memory.getItem("okpwdgt_nwth")),console.log("ТИП ФРАЗЫ.................okpwdgt_pt.........= "+OkpWidget.WdgObj.client_memory.getItem("okpwdgt_pt")),console.log("--------------------------"),console.log("----ДАМП ОСН. ОБЪЕКТА-----"),console.log("--------------------------"),console.log(OkpWidget.WdgObj)}function wdg_clear(){OkpWidget.WdgObj.clearData()}var OkpWidget={};OkpWidget.Widget=function(){function t(){this.version="1.2.1",this.load_path="/core/widget/",this.act_path="/core/widget/",this.csec=25,this.step2_event_sent=!1,this.widg_btn_link,this.widg_overlay_box,this.widg_ovrl_shadow,this.widg_form,this.widg_phrase,this.widg_close_form_link,this.widg_input_phone,this.widg_select_okrug,this.widg_sbmt1,this.widg_sbmt2,this.widg_loader_img,this.widg_phone_hint,this.widg_phone_hint_link,this.widg_form_container,this.hid_field_ep,this.hid_field_hint,this.hid_field_rfr,this.hid_field_pt,this.hid_field_phr,this.sd,this.client_memory,this.lt,this.pres,this.pres_intvl,this.st,this.sbmt,this.wait_intvl,this.sbe,this.sbs,this.shown,this.wtp,this.nwtp,this.wth,this.nwth,this.pt,this.awtp,this.anwtp,this.awth,this.anwth,this.ahint,this.cp,this.cpt,this.ch,this.chint,this.ep,this.eph1,this.rfr,this.srct,this.srcs,this.init_comlete=!1,this.sbmt_okrug,Object.defineProperty(this,"perm_handlers",{value:{next:1},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(this,"once_handlers",{value:{next:1},writable:!0,enumerable:!1,configurable:!0}),this.registerEvent("init_data_loaded"),this.registerEvent("data_loaded"),this.registerEvent("init_comlete")}return t.prototype.init=function(){function t(t){var i=JSON.parse(t);widg_debug&&console.log("[WIDG_S_009]: Пришёл ответ с сервера, записываю данные:"),widg_debug&&console.log(i),e.lt=(new Date).getTime(),e.client_memory.setItem("okpwdgt_lt",e.lt),e.sd=i.fas,e.client_memory.setItem("okpwdgt_sd",e.sd),e.st=e.lt+1e3*e.sd,e.client_memory.setItem("okpwdgt_st",e.st),e.sbe=i.sbe,e.client_memory.setItem("okpwdgt_sbe",e.sbe),e.sbs=i.sbs,e.client_memory.setItem("okpwdgt_sbs",e.sbs),e.srct=i.srct,e.client_memory.setItem("okpwdgt_srct",e.srct),e.srcs=i.srcs,e.client_memory.setItem("okpwdgt_srcs",e.srcs),e.wtp=i.wtp,e.nwtp=i.nwtp,e.wth=i.wth,e.nwth=i.nwth,e.pt=i.cpt,e.client_memory.setItem("okpwdgt_wtp",e.wtp),e.client_memory.setItem("okpwdgt_nwtp",e.nwtp),e.client_memory.setItem("okpwdgt_wth",e.wth),e.client_memory.setItem("okpwdgt_nwth",e.nwth),e.client_memory.setItem("okpwdgt_pt",e.pt),widg_debug&&console.log("[WIDG_S_010]: Запускаю интервалы ожидания и присутствия"),e.pres_intvl=setInterval(function(){e.imActive(e)},1e3),e.wait_intvl=setInterval(function(){e.waitingFunc(e)},1e3),e.showBtn(),this.init_comlete=!0,widg_debug&&console.log("[WIDG_S_016]: Запускаю обработчики событий ответа с сервера..."),e.fireEvent("data_loaded"),e.fireEvent("init_data_loaded"),e.fireEvent("init_comlete")}var e=this;if("function"!=typeof jQuery)return void(widg_debug&&console.log("[WIDG_E_000]: jQuery не обнаружена. Запуск отменён."));if(this.widg_overlay_box=$("#widget_overlay"),1!=this.widg_overlay_box.length)return void(widg_debug&&console.log("[WIDG_E_001]: Нет блока с overlay и формой (#widget_overlay). Запуск отменён."));if(this.widg_ovrl_shadow=this.widg_overlay_box.find("#widget_overlay_shadow"),this.widg_ovrl_shadow.on("click",{widg_obj:this},function(t){t.data.widg_obj.closeWidget()}),this.widg_close_form_link=this.widg_overlay_box.find("#close_widg_form"),this.widg_close_form_link.on("click",{widg_obj:this},function(t){t.preventDefault(),t.data.widg_obj.closeWidget()}),this.widg_form=this.widg_overlay_box.find("form"),1!=this.widg_form.length)return void(widg_debug&&console.log("[WIDG_E_002]: Не найдена форма виджета. Запуск отменён."));this.widg_phrase=this.widg_overlay_box.find("#widget_phrase"),this.widg_input_phone=this.widg_overlay_box.find("#edit-submitted-uphone"),this.widg_select_okrug=this.widg_overlay_box.find("#edit-submitted-uokrug"),this.widg_sbmt1=this.widg_overlay_box.find("#wdg_sbmt1"),this.widg_sbmt2=this.widg_overlay_box.find("#edit-submit--prosto-fast-lead"),this.widg_phone_hint=this.widg_overlay_box.find("#widget_phone_hint"),this.widg_phone_hint_link=this.widg_overlay_box.find("#widget_phone_hint_a"),this.widg_form_container=this.widg_overlay_box.find("#form_container"),this.widg_loader_img=this.widg_overlay_box.find("#widg_loader"),this.widg_input_phone.attr("placeholder","+7 (___) ___-__-__").mask("+7 (999) 999-99-99",{placeholder:"_"}),this.widg_input_phone.on("keyup",{widg_obj:this},function(t){var e=t.data.widg_obj,i=$(this).val().replace(/\D/g,""),o=e.checkPhoneString($(this).val());o?($(this).addClass("form-element-ok"),$(this).removeClass("form-element-error"),e.widg_sbmt1.removeAttr("disabled")):(11==i.length?$(this).addClass("form-element-error"):$(this).removeClass("form-element-error"),$(this).removeClass("form-element-ok"),e.widg_sbmt1.attr("disabled","disabled"))}),this.widg_input_phone.on("keypress",{widg_obj:this},function(t){13==t.keyCode&&(t.preventDefault(),t.data.widg_obj.checkPhoneString($(this).val())&&t.data.widg_obj.widg_sbmt1.trigger("click"))}),this.widg_sbmt1.on("click",function(){e.widg_input_phone.parent().hide(),e.widg_select_okrug.parent().show(),$(this).hide(),e.widg_sbmt2.parent().show(),e.widg_phrase.html('<span id="widgt_phrase_heading">Самый быстрый замер в Москве!</span> Пожалуйста, выберите округ, чтобы с Вами связался менеджер, прикреплённый к Вашему району.'),e.widg_phone_hint.show(),e.widg_phone_hint_link.text(e.widg_input_phone.val()),e.widg_select_okrug.val("9").change(),e.sbmt2Click()}),this.widg_sbmt2.attr("disabled","disabled").on("click",function(t){t.preventDefault(),e.sbmt2Click()}),this.widg_select_okrug.on("change",function(){$(this).addClass("form-element-ok"),e.widg_sbmt2.removeAttr("disabled")}),this.widg_phone_hint_link.on("click",function(t){t.preventDefault(),e.widg_select_okrug.parent().hide(),e.widg_input_phone.parent().show(),e.widg_input_phone.focus(),e.widg_phone_hint.hide(),e.widg_sbmt2.parent().hide(),e.widg_sbmt1.show()}),$("#widget_autor_link").on("click",function(){var t="http://dialogwidget.ru/widget.php",i="?tr=";i+=e.srct?e.srct.substring(0,1)+"*":"*",i+=e.srcs?e.srcs+"*":"*";var o=Math.floor(((new Date).getTime()-e.lt)/1e3);i+=o+"*";var s=e.eph1;s&&(i+=encodeURIComponent(s)),$(this).attr("href",t+i),setTimeout(function(){$("#widget_autor_link").attr("href","//dialogwidget.ru/")},1e3)}),this.client_memory=this.defineClientStorage();var i=parseInt(this.client_memory.getItem("okpwdgt_pres")),o=parseInt(this.client_memory.getItem("okpwdgt_st")),s=(new Date).getTime();if(!isNaN(i)&&i>0){if(widg_debug&&console.log("[WIDG_S_003]: Есть сохранённые данные. Записываю их и запускаю отсчёт."),this.version!=this.client_memory.getItem("okpwdgt_version"))return widg_debug&&console.log("[WIDG_N_010]: Версия скрипта обновилась! Перезагружаю данные..."),this.clearData(),void this.init();var n=Math.round((s-i)/1e3),d=Math.floor(n/3600)+" часов "+Math.floor(n%3600/60)+" минут "+n%3600%60+" секунд";if(s-i>36e5)widg_debug&&console.log("[WIDG_S_017]: С момента последнего присутствия на сайте прошло БОЛЬШЕ часа: "+d+". Стираю данные. Перезапускаю виджет."),this.clearData(),this.init();else{if(widg_debug&&console.log("[WIDG_S_018]: С момента последнего присутствия на сайте прошло МЕНЬШЕ часа: "+d+". Считываем данные и смотрим время показа..."),isNaN(o)||0>=o)return widg_debug&&console.log("[WIDG_E_021]: Ошибочное значение расчётного времени активации виджета. Стираю данные и перезапускаю скрипт."),this.clearData(),void this.init();if(!this.defineState())return widg_debug&&console.log("[WIDG_E_022]: Данные считались с ошибками. Стираю и перезапускаю скрипт."),this.clearData(),void this.init();widg_debug&&console.log("[WIDG_S_021]: Данные считались. Смотрим расчётное время показа..."),o>s?widg_debug&&console.log("[WIDG_S_020]: Время показа ещё не наступило. До показа ещё "+Math.floor((o-s)/1e3)+" секунд. Запускаю интервалы..."):(widg_debug&&console.log("[WIDG_S_023]: Время показа уже прошло: st - "+o+", cur.t - "+s+". Устанавливаю время показа через "+this.sd+" секунд и запускаю интервалы."),this.st=s+1e3*this.sd,this.client_memory.setItem("okpwdgt_st",this.st)),this.pres_intvl=setInterval(function(){e.imActive(e)},1e3),this.wait_intvl=setInterval(function(){e.waitingFunc(e)},1e3)}e.showBtn(),this.init_comlete=!0,widg_debug&&console.log("[WIDG_S_026]: Запускаю обработчики события init_comlete..."),e.fireEvent("init_comlete")}else widg_debug&&console.log("[WIDG_S_004]: Нет сохранённых данных - первый вход."),this.shown=!1,this.client_memory.setItem("okpwdgt_shown",0),this.ep=location.href,this.client_memory.setItem("okpwdgt_ep",this.ep),widg_debug&&console.log('[WIDG_S_005]: Установлен URL входа: "'+this.ep+'"'),this.eph1=$("h1").eq(0).text(),this.client_memory.setItem("okpwdgt_eph1",this.eph1),widg_debug&&console.log('[WIDG_S_025]: Установлен заголовок точки входа: "'+this.eph1+'"'),this.rfr=document.referrer,this.client_memory.setItem("okpwdgt_rfr",this.rfr),widg_debug&&console.log('[WIDG_S_006]: Установлен Referrer: "'+this.rfr+'"'),this.client_memory.setItem("okpwdgt_version",this.version),widg_debug&&console.log("[WIDG_S_007]: Установлена версия скрипта: "+this.version),widg_debug&&console.log("[WIDG_S_008]: Делаю запрос настроек на бэкенд..."),$.ajax({type:"POST",url:this.load_path,data:"op=load&ep_url="+encodeURIComponent(this.ep)+"&rfr_url="+encodeURIComponent(this.rfr),success:t})},t.prototype.defineState=function(){var t=!0;return this.sd=parseInt(this.client_memory.getItem("okpwdgt_sd")),this.sd||(t=!1,widg_debug&&console.log("[WIDG_E_015]: defineState - не считалось Время задержки показа okpwdgt_sd")),this.lt=parseInt(this.client_memory.getItem("okpwdgt_lt")),this.lt||(t=!1,widg_debug&&console.log("[WIDG_E_017]: defineState - не считалось Время загрузки данных okpwdgt_lt")),this.st=parseInt(this.client_memory.getItem("okpwdgt_st")),this.st||(t=!1,widg_debug&&console.log("[WIDG_E_018]: defineState - не считалось расчётное Время показа okpwdgt_st")),this.sbmt=parseInt(this.client_memory.getItem("okpwdgt_sbmt")),this.sbe=parseInt(this.client_memory.getItem("okpwdgt_sbe")),this.sbs=parseInt(this.client_memory.getItem("okpwdgt_sbs")),this.shown=parseInt(this.client_memory.getItem("okpwdgt_shown")),this.wtp=this.client_memory.getItem("okpwdgt_wtp"),this.wtp||(t=!1,widg_debug&&console.log("[WIDG_E_019]: defineState - не считалась Фраза для рабочего времени okpwdgt_wtp")),this.nwtp=this.client_memory.getItem("okpwdgt_nwtp"),this.nwtp||(t=!1,widg_debug&&console.log("[WIDG_E_020]: defineState - не считалась Фраза для НЕрабочего времени okpwdgt_nwtp")),this.wth=this.client_memory.getItem("okpwdgt_wth"),this.nwth=this.client_memory.getItem("okpwdgt_nwth"),this.pt=this.client_memory.getItem("okpwdgt_pt"),this.ep=this.client_memory.getItem("okpwdgt_ep"),this.rfr=this.client_memory.getItem("okpwdgt_rfr"),this.eph1=this.client_memory.getItem("okpwdgt_eph1"),this.srct=this.client_memory.getItem("okpwdgt_srct"),this.srcs=this.client_memory.getItem("okpwdgt_srcs"),t},t.prototype.imActive=function(t){t.client_memory.setItem("okpwdgt_pres",(new Date).getTime())},t.prototype.waitingFunc=function(t){t.st<(new Date).getTime()&&(widg_debug&&console.log("[WIDG_S_011]: Пришло время показа. Открываю форму."),t.openWidget())},t.prototype.specialKeeping=function(t){if(widg_debug&&console.log("[WIDG_N_014]: specialKeeping - Специальный режим показа для этой страницы."),t?(widg_debug&&console.log("[WIDG_N_015]: specialKeeping - Устанавливаю альтернативные фразы из переданного объекта:"),widg_debug&&console.log(t),this.awtp=t.wtp,this.anwtp=t.nwtp,this.awth=t.wth,this.anwth=t.nwth,this.ahint=t.hint,this.pt="spec"):widg_debug&&console.log("[WIDG_N_016]: specialKeeping - Не передан объект с фразами для специального режима. Изменится только время показа виджета."),this.init_comlete)widg_debug&&console.log("[WIDG_S_031]: specialKeeping - Инициализация уже закончилась. Ставлю время показа через "+this.sd+" секунд"),this.st=(new Date).getTime()+1e3*this.sd,this.client_memory.setItem("okpwdgt_st",this.st);else{widg_debug&&console.log("[WIDG_S_032]: specialKeeping - Инициализация ещё не завершена. Регистрирую обработчик события init_comlete.");{this.addHandlerOnce("init_comlete",function(t){t.st=(new Date).getTime()+1e3*t.sd,t.client_memory.setItem("okpwdgt_st",t.st),widg_debug&&console.log("[WIDG_S_033]: specialKeeping - обработчик init_comlete отработал. Установлено время показа через "+t.sd+" секунд")})}}},t.prototype.openWidget=function(t){this.client_memory.setItem("okpwdgt_shown",1),this.st=(new Date).getTime()+36e5,this.client_memory.setItem("okpwdgt_st",this.st),widg_debug&&console.log("[WIDG_S_024]: Виджет активирован. Время показа установлено на час вперёд."),"function"==typeof ga&&ga("send","event","Widget","Open"),this.showWidget(t)},t.prototype.closeWidget=function(){this.hideWidget(),this.step2_event_sent=!1},t.prototype.showWidget=function(t){var e=this.checkWt();"object"==typeof t&&"wtp"in t?(t.nwtp||(t.nwtp=t.wtp),this.cp=e?t.wtp:t.nwtp,this.ch=e?t.wth:t.nwth,this.chint=t.hint,this.cpt="once"):this.awtp?(this.anwtp||(this.anwtp=this.awtp),this.cp=e?this.awtp:this.anwtp,this.ch=e?this.awth:this.anwth,this.chint=this.ahint):(this.nwtp||(this.nwtp=this.wtp),this.cp=e?this.wtp:this.nwtp,this.ch=e?this.wth:this.nwth,this.chint=this.eph1,this.cpt=this.pt),this.setPhrase(this.cp,this.cpt,this.ch,this.chint),this.widg_close_form_link.text("спасибо, позже"),this.widg_form_container.show(),e?(this.widg_form_container.addClass("widg-wh"),this.widg_sbmt1.text("перезвоните за 25 секунд")):(this.widg_form_container.removeClass("widg-wh"),this.widg_sbmt1.text("перезвоните мне")),this.widg_form.show(),this.widg_input_phone.parent().show(),this.widg_sbmt1.show(),this.widg_loader_img.hide(),this.widg_sbmt2.parent().hide(),this.widg_select_okrug.parent().hide(),this.widg_phone_hint.hide(),this.widg_phrase.show(),this.widg_overlay_box.toggle(),this.hideBtn()},t.prototype.hideWidget=function(){widg_debug&&console.log("[WIDG_S_012]: Скрываю виджет."),this.widg_overlay_box.hide(),this.showBtn()},t.prototype.createBtn=function(){widg_debug&&console.log("[WIDG_S_013]: Определяю кнопку с трубкой"),this.widg_btn_link=$("#widgt_link"),this.widg_btn_link.on("click",{widg_obj:this},function(t){t.preventDefault(),widg_debug&&console.log("[WIDG_S_014]: Трубка нажата. Активирую виджет."),t.data.widg_obj.openWidget()});{var t=this,e=this.widg_btn_link.find("#widgt_link_img_box img").eq(0),i=this.widg_btn_link.find("#widgt_link_img_box img").eq(1);setInterval(function(){t.widg_btn_link.is(":hover")||(e.toggleClass("widg-link-active-img"),i.toggleClass("widg-link-active-img"))},5e3)}this.widg_btn_link.on("mouseover",{widg_obj:this},function(){e.removeClass("widg-link-active-img"),i.addClass("widg-link-active-img")})},t.prototype.showBtn=function(){this.widg_btn_link?(widg_debug&&console.log("[WIDG_S_015]: Показываю кнопку с трубкой"),this.widg_btn_link.addClass("widget-link-shown")):(this.createBtn(),this.widg_btn_link.addClass("widget-link-shown"))},t.prototype.hideBtn=function(){this.widg_btn_link.removeClass("widget-link-shown")},t.prototype.setPhrase=function(t,e,i){widg_debug&&console.log('[WIDG_S_029]: Устанавливаю фразу: "'+t+'"');var o=RegExp(" за .*?секунд"),s=t.match(o),n=!1;s&&(n=t.replace(o,' <span class="green-color">за '+this.csec+" секунд</span>")),n||(n=t),i&&(widg_debug&&console.log("[WIDG_S_030]: Передан заголовок. Добавляю его к фразе."),this.widg_overlay_box.addClass("box-with-heading"),n='<span id="widgt_phrase_heading">'+i+"</span> "+n),this.widg_phrase.html(n)},t.prototype.sbmt2Click=function(){function t(t){var i=JSON.parse(t);return widg_debug&&console.log("[WIDG_S_035]: Пришёл ответ с сервера..."),e.widg_loader_img.hide(),"error"==i.status?("phone"==i.errorcode&&(widg_debug&&console.log("[WIDG_N_17]: Сабмит формы. ОШИБКА не верно введён телефон! Показываю форму."),e.widg_phrase.html(i.text).show(),e.widg_sbmt2.parent().hide(),e.widg_select_okrug.parent().hide(),e.widg_phone_hint.hide(),e.widg_form_container.show(),e.widg_input_phone.parent().show(),e.widg_sbmt1.show()),void("spam_block"==i.errorcode&&(widg_debug&&console.log("[WIDG_N_18]: Сабмит формы. ОШИБКА превышен лимит заявок. Показываю уведомление и ничего не делаю."),e.widg_phrase.html("Ваша заявка уже принята.<br>Менеджер заказа свяжется с Вами в ближайшее время.").show()))):("function"==typeof ga&&ga("send","event","Widget","Submit",e.widg_select_okrug.find("option:selected").text()),"object"==typeof yaCounter33657694&&yaCounter33657694.reachGoal("Widget submit"),e.widg_close_form_link.text("закрыть"),void("spam_call"==i.errorcode?(widg_debug&&console.log("[WIDG_N_19]: Сабмит формы. ОШИБКА превышен лимит заявок со звонком. Показываю уведомление и ничего не делаю."),e.widg_phrase.html(i.text).show()):(widg_debug&&console.log("[WIDG_S_036]: Сабмит формы. Показываю уведомление об успешной отправке и соединении (если рабочее время)."),e.widg_loader_img.hide(),e.widg_phrase.html(i.text).show())))}var e=this,i="op=lead";this.widg_form_container.hide(),this.widg_phrase.hide(),this.widg_loader_img.show(),this.sbmt_okrug=this.widg_select_okrug.val(),i+="&wdg_phone="+this.widg_input_phone.val(),i+="&wdg_okrug="+this.sbmt_okrug,i+="&ep_url="+encodeURIComponent(this.ep),i+="&rfr_url="+encodeURIComponent(this.rfr),i+="&actp_url="+encodeURIComponent(window.location.href),i+="&wdg_phr="+encodeURIComponent(this.cp),i+="&wdg_phrt="+this.cpt,i+="&wdg_hint="+encodeURIComponent(this.chint||""),i+="&l_type=widget",void 0!==localStorage.calc_text&&(i+="&pre_calc="+encodeURIComponent(localStorage.calc_text)),widg_debug&&console.log("[WIDG_S_034]: Сабмит формы. Делаю запрос на сервер..."),$.ajax({type:"POST",url:this.act_path,data:i,success:t})},t.prototype.checkWt=function(){var t=((new Date).getTime()-this.lt)/1e3;return null!==this.sbe?t>this.sbe?!1:!0:null!==this.sbs?t>this.sbs?!0:!1:void 0},t.prototype.defineClientStorage=function(){var t=new OkpWidget.CookieHandler(86400,"/");if(t.getItem("callkeep_cst"))return widg_debug&&console.log("[WIDG_S_001]: defineClientStorage() - Куки уже использовались. Данные будут сохраняться в них. Срок - сутки"),t;if(delete t,window.localStorage){widg_debug&&console.log("[WIDG_S_002]: localStorage присутствует. Проверяем доступность и сохраняем данные в него если доступен.");var e;try{e=new OkpWidget.LocalStorageHandler}catch(i){widg_debug&&console.log("[WIDG_N_008]: localStorage заблокирован. Будут использоваться Cookie"),e=new OkpWidget.CookieHandler(2592e3,"/")}return e}return widg_debug&&console.log("[WIDG_N_009]: localStorage НЕ ПОДДЕРЖИВАЕТСЯ! Данные будут сохраняться в КУКАХ..."),new OkpWidget.CookieHandler(2592e3,"/")},t.prototype.clearData=function(){console.log("[WIDG_N_013]: Принудительная очистка данных. Останавливаю интервалы ожидания показа и присутствия..."),clearInterval(this.wait_intvl),clearInterval(this.pres_intvl),this.init_comlete=!1,this.client_memory.clear()},t.prototype.checkPhoneString=function(t){var e,i=t.replace(/\D/g,""),o=new String(i);return e=11!=i.length?!1:"9"==o[1]||"4"==o[1]&&"9"==o[2]?!0:!1,delete o,i,e},t.prototype.registerEvent=function(t){this.perm_handlers[t]={},this.once_handlers[t]={}},t.prototype.addListener=function(t,e,i){if("function"!=typeof i)return widg_debug&&console.log("[WIDG_E_005]: addListener - не возможно зарегистрировать постоянный обработчик события "+e+" передана не функция."),!1;if(!(e in t))return widg_debug&&console.log("[WIDG_E_007]: addListener - нет такого события "),!1;t.next++;var o="hndlr_"+t.next;return t[e][o]=i,o},t.prototype.removeListener=function(t,e,i){if(!e)return widg_debug&&console.log("[WIDG_N_002]: removeListener - не передано имя события для удаления обработчика"),!1;if(!(e in t))return widg_debug&&console.log("[WIDG_E_006]: removeListener - нет такого события "),!1;if(i)if("string"==typeof i)widg_debug&&console.log("[WIDG_S_003]: removeListener - удаляю обработчик "+i+" события "+e+" по ключу"),delete t[e][i];else{widg_debug&&console.log("[WIDG_S_027]: removeListener - удаляю обработчик события "+e+" по объекту функции "+i.name);for(var o in t[e])t[e][o]===i&&(delete t[e][o],widg_debug&&console.log("[WIDG_S_028]: removeListener - удалён обработчик события, хранившийся под ключём "+o))}else widg_debug&&console.log("[WIDG_N_001]: removeListener - не передан для удаления ключ обработчика или сама функция у события "+e+". Удаляю все обработчики этого события."),t[e]={};return!0},t.prototype.addHandler=function(t,e){var i=this.addListener(this.perm_handlers,t,e);return i||widg_debug&&console.log("[WIDG_E_008]: addHandler - не удалось установить обработчик для события "+t),i},t.prototype.addHandlerOnce=function(t,e){var i=this.addListener(this.once_handlers,t,e);return i||widg_debug&&console.log("[WIDG_E_009]: addHandlerOnce - не удалось установить одноразовый обработчик для события "+t),i},t.prototype.removeHandler=function(t,e){var i=this.removeListener(this.perm_handlers,t,e);return i||widg_debug&&console.log("[WIDG_E_010]: removeHandler - не получилось удалить обработчик для события "+t),i},t.prototype.removeHandlerOnce=function(t,e){var i=this.removeListener(this.once_handlers,t,e);return i||widg_debug&&console.log("[WIDG_E_011]: removeHandlerOnce - не получилось удалить одноразовый обработчик для события "+t),i},t.prototype.fireEvent=function(t){if(!t)return widg_debug&&console.log("[WIDG_E_012]: fireEvent - не передано имя события. Ничего не запускаю."),!1;if(t in this.perm_handlers)for(var e in this.perm_handlers[t])this.perm_handlers[t][e](this);else widg_debug&&console.log("[WIDG_E_013]: fireEvent - события "+t+" нет в списке постоянных обработчиков");if(t in this.once_handlers)for(var e in this.once_handlers[t])this.once_handlers[t][e](this),delete this.once_handlers[t][e];else widg_debug&&console.log("[WIDG_E_014]: fireEvent - события "+t+" нет в списке одноразовых обработчиков")},t}(),OkpWidget.CookieHandler=function(){function t(t,e){function i(){var t={},e=document.cookie;""===e&&(n=t);for(var i=e.split("; "),d=0;d<i.length;d++){var g=i[d],_=g.indexOf("="),r=g.substring(0,_),h=g.substring(_+1);try{h=decodeURIComponent(h)}catch(l){widg_debug&&console.log("[CHND_ERR_01]: loadCookies - ошибка не получилось раскодировать значение: "+h+" пишем его в сыром виде")}t[r]=h}o=[];for(var w in t)o.push(w);s=o.length,n=t}var o=[],s=0,n={};i(),this.key=function(t){return 0>t||t>=o.length?null:o[t]},this.getItem=function(t){return i(),n[t]||null},this.setItem=function(d,g){i(),d in n||(o.push(d),s++),n[d]=g;var _=d+"="+encodeURIComponent(g);t&&(_+="; max-age="+t),e&&(_+="; path="+e),document.cookie=_},this.removeItem=function(t){if(i(),t in n){delete n[t];for(var e=0,d=o.length;d>e;e++)if(o[e]===t){o.splice(e,1);break}s--,document.cookie=t+"=; max-age=0"}},this.clear=function(){this.removeItem("okpwdgt_version"),this.removeItem("okpwdgt_rfr"),this.removeItem("okpwdgt_ep"),this.removeItem("okpwdgt_eph1"),this.removeItem("okpwdgt_pres"),this.removeItem("okpwdgt_lt"),this.removeItem("okpwdgt_sd"),this.removeItem("okpwdgt_st"),this.removeItem("okpwdgt_sbmt"),this.removeItem("okpwdgt_shown"),this.removeItem("okpwdgt_sbs"),this.removeItem("okpwdgt_sbe"),this.removeItem("okpwdgt_wtp"),this.removeItem("okpwdgt_nwtp"),this.removeItem("okpwdgt_wth"),this.removeItem("okpwdgt_nwth"),this.removeItem("okpwdgt_pt")}}return t}(),OkpWidget.LocalStorageHandler=function(){function t(){var t=window.localStorage;this.getItem=function(e){return t.getItem(e)},this.setItem=function(e,o){function s(t){var e=!1;if(t)if(t.code)switch(t.code){case 22:e=!0;break;case 1014:"NS_ERROR_DOM_QUOTA_REACHED"===t.name&&(e=!0)}else-2147024882===t.number&&(e=!0);return e}try{t.setItem(e,o)}catch(n){if(s(n)){var d,g=new OkpWidget.CookieHandler(2592e3,"/"),_=t.length,r=RegExp("^callkeep_","i");for(i=0;_>i;i++)d=t.key(i),d.match(r)&&g.setItem(d,t.getItem(d));OkpWidget.WdgObj.client_memory=g,OkpWidget.WdgObj.client_memory.setItem(e,o),this.clear(),console.log("[LSHN_ERR_01]: LocalStorage переполнен. Переключюсь на Cookies")}}},this.removeItem=function(e){t.removeItem(e)},this.clear=function(){t.removeItem("okpwdgt_version"),t.removeItem("okpwdgt_rfr"),t.removeItem("okpwdgt_ep"),t.removeItem("okpwdgt_eph1"),t.removeItem("okpwdgt_pres"),t.removeItem("okpwdgt_lt"),t.removeItem("okpwdgt_sd"),t.removeItem("okpwdgt_st"),t.removeItem("okpwdgt_sbmt"),t.removeItem("okpwdgt_shown"),t.removeItem("okpwdgt_sbs"),t.removeItem("okpwdgt_sbe"),t.removeItem("okpwdgt_wtp"),t.removeItem("okpwdgt_nwtp"),t.removeItem("okpwdgt_wth"),t.removeItem("okpwdgt_nwth"),t.removeItem("okpwdgt_pt")}}return t}(),jQuery(function(){OkpWidget.WdgObj=new OkpWidget.Widget,OkpWidget.WdgObj.init()}),widg_debug=!1;