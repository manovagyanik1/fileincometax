var interval;
var tanFlag = true;
$(function() {
    $('.comma').each(function() {
        var value = checkIsNaN(parseInt($(this).html() * 1));
        value = addCommas(value);
        $(this).html(value);
    });
    $('.comma2').each(function() {
        var value = parseInt($(this).html());
        if (value < 0) {
            $(this).html(0);
        } else {
            value = addCommas(value);
            $(this).html(value);
        }
    });
	$('input[alt=pan]').on('blur', function() {
        var string = $(this).val();
        string = string.toUpperCase();
        $(this).val(string);
    });
	$('input[alt=tan]').on('blur', function() {
        var string = $(this).val();
        string = string.toUpperCase();
        $(this).val(string);
    });
	$('input').on('focusout', function() {
        $(this).parent('div').removeClass('fg-line');
        if($(this).val() == '' || $(this).val() == 0){
            $(this).parent('div').removeClass('fg-toggled');
        }
    });
	$('input').on('focus', function() {
        $(this).parent('div').addClass('fg-line').addClass('fg-toggled');
    });
	$('.numeric').on('blur', function() {
		if ($(this).val() == "") {
			$(this).val(0);
		}
	});
	$('.numeric').each(function(index) {
		if ($(this).val() == '') {
			var readOnlyCheck = $(this).attr('readonly');
			if (readOnlyCheck != 'true') {
				$(this).val(0);
			}
		}
	});
    $('.numeric').on('click', function() {
		if ($(this).val() == 0) {
			var readOnlyCheck = $(this).attr('readonly');
			if (readOnlyCheck != true) {
				$(this).val('');
			}
		}
	});
    $('.numeric').addClass('text-right');
    $( ".datetime" ).attr({
        'data-date-format' : dateFormat,
        'data-min-view' : "2"
    });
    $('.header-menu-inner').removeClass('header-menu-active');
    $('#header_menu_'+breadcrum).addClass('header-menu-active');
    if(breadcrum == 'income'){
        $('.card_head_'+breadcrum).css('color','#5E35B1');
        $('#next_link_'+breadcrum).css('color','#5E35B1');
        $('.progress_text_'+breadcrum).css('color','#5E35B1');
        $('#header_menu_'+breadcrum).css('border-color','#5E35B1');
        $('#add_button_'+breadcrum).css('background-color','#5E35B1');
        $('.save_button_'+breadcrum).css('background-color','#5E35B1');
        $('.progress_bar_'+breadcrum).css('background-color','#5E35B1');
        if($('#add_button_'+breadcrum).hasClass('new_record')){
            showAnimate('#add_button_'+breadcrum);
        }
    }else if(breadcrum == 'deduction'){
        $('.card_head_'+breadcrum).css('color','#3949AB');
        $('.progress_text_'+breadcrum).css('color','#3949AB');
        $('#next_link_'+breadcrum).css('color','#3949AB');
        $('#header_menu_'+breadcrum).css('border-color','#3949AB');
        $('#add_button_'+breadcrum).css('background-color','#3949AB');
        $('.save_button_'+breadcrum).css('background-color','#3949AB');
        $('.progress_bar_'+breadcrum).css('background-color','#3949AB');
        if($('#add_button_'+breadcrum).hasClass('new_record')){
            showAnimate('#add_button_'+breadcrum);
        }
    }else if(breadcrum == 'taxes'){
        $('.card_head_'+breadcrum).css('color','#D81B60');
        $('.progress_text_'+breadcrum).css('color','#D81B60');
        $('#next_link_'+breadcrum).css('color','#D81B60');
        $('#header_menu_'+breadcrum).css('border-color','#D81B60');
        $('#add_button_'+breadcrum).css('background-color','#D81B60');
        $('.save_button_'+breadcrum).css('background-color','#D81B60');
        $('.progress_bar_'+breadcrum).css('background-color','#D81B60');
        if($('#add_button_'+breadcrum).hasClass('new_record')){
            showAnimate('#add_button_'+breadcrum);
        }
    }else if(breadcrum == 'others'){
        $('.card_head_'+breadcrum).css('color','#00897B');
        $('.progress_text_'+breadcrum).css('color','#00897B');
        $('#next_link_'+breadcrum).css('color','#00897B');
        $('#header_menu_'+breadcrum).css('border-color','#00897B');
        $('#add_button_'+breadcrum).css('background-color','#00897B');
        $('.save_button_'+breadcrum).css('background-color','#00897B');
        $('.progress_bar_'+breadcrum).css('background-color','#00897B');
        if($('#add_button_'+breadcrum).hasClass('new_record')){
            showAnimate('#add_button_'+breadcrum);
        }
    }else if(breadcrum == 'efile'){
        $('.card_head_'+breadcrum).css('color','#43A047');
        $('.progress_text_'+breadcrum).css('color','#43A047');
        $('#next_link_'+breadcrum).css('color','#43A047');
        $('#header_menu_'+breadcrum).css('border-color','#43A047');
        $('#add_button_'+breadcrum).css('background-color','#43A047');
        $('.save_button_'+breadcrum).css('background-color','#43A047');
        $('.progress_bar_'+breadcrum).css('background-color','#43A047');
        if($('#add_button_'+breadcrum).hasClass('new_record')){
            showAnimate('#add_button_'+breadcrum);
        }
    }
});

$(function() {
    $(".form_parsley").parsley({
//        successClass: "has-success",
        errorClass: "has-error",
        classHandler: function(el) {
            return el.$element.closest(".form-group");
        },
        errorsContainer: function(el) {
            return el.$element.closest(".form-group");
        },
        errorsWrapper: "<span class='help-block'></span>",
        errorTemplate: "<span></span>"
    });
    $(".form_parsley").attr('data-parsley-validate', 'true');
});


function refreshPage(){
    showLoader();
    location.reload();
}

function goToPage(url){
    if(url != ''){
        window.location.href = url;
    }
}

function gotoWindow(url) {
    window.location = url;
}

function checkIsNaN(value) {
    if (isNaN(value)) {
        return 0;
    } else {
        return value;
    }
}

function checkPositveNumber(value) {
    if (isNaN(value) || value < 0) {
        return 0;
    } else {
        return value;
    }
}

function openModal(id){
	$(id).modal('show');
}

function closeModal(id) {
    $(id).modal('hide');
}

function goToByScroll(id){
	$('html,body').animate({scrollTop: $(id).offset().top - 100},'slow');
}

function getIntValue(id) {
	return checkIsNaN(parseInt($(id).val() * 1));
}

function getFloatValue(id) {
	return checkIsNaN(parseFloat($(id).val() * 1));
}

function setValue(id, value){
    $(id).val(value);
}

function getValue(id){
    return $(id).val();
}

function tableSum(name) {
    var sum = 0;
    $('.' + name).each(function(index, element) {
        var value = $(element).html();
        value = value.replace(/,/g,"");
        sum += parseInt(1 * checkIsNaN(value));
    });
    sum = addCommas(sum);
    $('#' + name + '_sum').html(sum);
    $('#tfoot_total').show();
}

function addCommas(nStr) {
	var nStrCopy = nStr;
	if(nStr < 0) {
        nStr = new String(nStr);
		nStr = nStr.substring(1);
	}
	nStr += '';
	var x = nStr.split('.');
	var x1 = x[0];
	var x2 = x.length > 1 ? '.' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	var z = 0;
	var len = String(x1).length;
	var num = parseInt((len/2)-1);
	while (rgx.test(x1)) {
		if(z > 0) {
			x1 = x1.replace(rgx, '$1' + ',' + '$2');
		}
		else {
			x1 = x1.replace(rgx, '$1' + ',' + '$2');
			rgx = /(\d+)(\d{2})/;
		}
		z++;
		num--;
		if(num == 0) {
			break;
		}
	}
	var result = x1 + x2;
	if(nStrCopy < 0) {
		result = '-'+result;
	}
	return result;
}
function changeDateOforiginalReturn(ack_no) {
    var last_six_digits = ack_no.slice(-6);
    var orignal_date = '';
    if (ack_no.length == 15) {
        var str1 = last_six_digits.slice(0, 2);
        var str2 = last_six_digits.slice(2, 4);
        var str3 = last_six_digits.slice(4, 6);
        orignal_date = str1 + '/' + str2 + '/20' + str3;
    }
    $('#ack_date').val(orignal_date);
    checkDateStartingAssessmentYear('#ack_date');
}

function checkDateStartingAssessmentYear(element) {
    var curDate = $(element).val();
    if (curDate.length > 0) {
        curDate = curDate.split("/");
        curDate = new Date(curDate[2], curDate[1], curDate[0]);
        curDate = Date.parse(curDate);
        dateLower1 = dateLower.split("/");
        dateLower1 = new Date(dateLower1[2], dateLower1[1], dateLower1[0]);
        dateLower1 = Date.parse(dateLower1);
        if (curDate >= dateLower1) {
        } else {
            alert("Date cannot be below ");
//            showNotification(toastrError, "Date cannot be below ", toastrErrorClass);
            $(element).val("");
        }
    }
	checkdate(element);
}

function checkdate(input) {
    var s = $(input).val();
    if (s != '') {
        /* if(new Date(s)) { return true; } */
        var bits = s.split('/');
        var d = new Date(bits[2] + '/' + bits[1] + '/' + bits[0]);
        var check = !!(d && (d.getMonth() + 1) == bits[1] && d.getDate() == Number(bits[0]));
        if (!check) {
            alert("Invalid Date Format. Please correct and submit again.");
            $(input).val("");
            $(input).focus();
        }
    }
}

function otpMsgCounter(counterPlus) {
    var counter = 60 + counterPlus;
    $('#span_resend_otp').hide();
    $('#span_counter').html(counter);
    $('#span_counter_msg').show();
    clearInterval(interval);
    interval = setInterval(function() {
        counter--;
        // Display 'counter' wherever you want to display it.
        if (counter == 0) {
            // Display a login box
            clearInterval(interval);
            $('#span_counter_msg').hide();
            $('#span_resend_otp').show();
        }
        $('#span_counter').html(counter);
    }, 1000);
}

function clearForm(ele) {
    $(ele).find(':input').each(function() {
        switch (this.type) {
            case 'password':
            case 'select-multiple':
            case 'text':
            case 'tel':
            case 'textarea':
            case 'hidden':
                $(this).val('');
                break;
            case 'select-one':
               $(this)[0].selectedIndex = 0;
                break;
            case 'checkbox':
            case 'radio':
                this.checked = false;
        }
        $(this).closest('.form-group').removeClass('has-error');
        $(this).closest('.form-group').find('.help-block').html('');
    });
    $('.numeric').each(function(index) {
        if ($(this).val() == '') {
            var readOnlyCheck = $(this).attr('readonly');
            if (readOnlyCheck != 'true') {
                $(this).val(0);
            }
        }
    });
    resetInputText();
}

function resetInputText() {
    $('.textright3').each(function(index) {
        if ($(this).val() == '') {
            var readOnlyCheck = $(this).attr('readonly');
            if (readOnlyCheck != 'true') {
                $(this).val('0.00');
            }
        }else{
             var floatval = parseFloat($(this).val()).toFixed(2);
              floatval = checkIsNaN(floatval);
              $(this).val(floatval)
        }
    });
	 $('.numeric').each(function(index) {
        if ($(this).val() == '') {
            var readOnlyCheck = $(this).attr('readonly');
            if (readOnlyCheck != 'true') {
                $(this).val(0);
            }
        }
    });
}

function hideMenuOptionFromHeader() {
    $('#toggle-width').hide();
    $('#menu-trigger').hide();
    $('#div_header_wizard').hide();
    $('body').removeClass('sw-toggled');
}

function checkDateForFinancialYear(element, returnFlag) {
    var curDate = $(element).val();
    if (curDate.length > 0) {
        curDate = curDate.split("/");
        curDate = new Date(curDate[2], (curDate[1] - 1), curDate[0]);
        curDate = Date.parse(curDate);

        var fdateLower1 = fdateLower.split("/");
        fdateLower1 = new Date(fdateLower1[2], (fdateLower1[1] - 1), fdateLower1[0]);
        fdateLower1 = Date.parse(fdateLower1);

        var fdateUpper1 = fdateUpper.split("/");
        fdateUpper1 = new Date(fdateUpper1[2], (fdateUpper1[1] - 1), fdateUpper1[0]);
        fdateUpper1 = Date.parse(fdateUpper1);
        if (curDate <= fdateUpper1 && curDate >= fdateLower1) {
            if (returnFlag != 'undefined') {
                return true;
            }
        } else {
            if (returnFlag != 'undefined') {
                return false;
            } else {
                showNotificationToastr(toastrInfo, "Date cannot be out of Financial year range");
                $(element).val("");
            }
        }
    }
    if (returnFlag != 'undefined') {
        return false;
    }
}
var fagFlag = true;
function getFaq(id, r_count) {
    if(id.length > 2){
        if(fagFlag){
            fagFlag = false;
            var r_count = 0;
        //    $('#help_loader').show();
        //    $('#faq_loader').show();
        //    $('#help_data').hide();
        //    $('#faq_data').hide();
            $.ajax({
                type: 'POST',
                url: '/faq/forums',
                data: "id=" + id + "&count=" + r_count,
                global: false,
                dataType: 'json',
                success: function(resp) {
                    $('#chat').html(resp['faq']);
    //                $('#help_loader').hide();
    //                $(".helptip").html(resp['help']);
    //                $('#faq_loader').hide();
    //                $(".faqs").html(resp['faq']);
                }
            });
        }

    }
}



function showLoader(centerY){
    $.blockUI({
        message: '<img src="/images/loader_1.gif" align="">',
        centerY: centerY != undefined ? centerY : true,
        css: {
//                    top: '10%',
            border: 'none',
            padding: '2px',
            backgroundColor: 'none'
        },
        overlayCSS: {
            backgroundColor: '#000',
            opacity: 0.15,
            cursor: 'wait'
        }
    });
}
function hideLoader(){
    $.unblockUI({
        onUnblock: function () {
            $.removeAttr("style");
        }
    });
}

//function showLoader(centerY) {
//    $.blockUI({
//        message: '<div class="page-loader"> <div class="spinner"> <div class="c4"></div> <div class="c3"></div> <div class="c2"></div> <div class="c1"></div></div> </div>',
//    });
//}
//function hideLoader() {
//    $.unblockUI({
//        onUnblock: function () {
//            $.removeAttr("style");
//        }
//    });
//}

function redirectToLogout(){
    window.location.href = '/index';
}

function getTodayDate(){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();

    if(dd<10) {
        dd='0'+dd
    }
    if(mm<10) {
        mm='0'+mm
    }
    today = mm+'/'+dd+'/'+yyyy;
    return today;
}

function setValueClass(id, value){
    $(id).val(value);
    $(id).parent().addClass('fg-toggled');
}

function bootstrapConfirm(confirmMsg){
    if(confirmMsg == '' || confirmMsg == undefined){
        confirmMsg = confirmDeleteMsg;
    }
    var validate = confirm(confirmMsg);
    return validate;

    var returnFlag = 0;
    swal({
        title: "Are you sure?",
        text: confirmDeleteMsg,
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No",
        closeOnConfirm: true,
        closeOnCancel: true
    }, function(isConfirm){
        if (isConfirm) {
            returnFlag = 1;
        }else{
            returnFlag =  0;
        }
    });
    return returnFlag;
}

function bootstrapAlert(msg){
    swal(msg, '', 'info');
}

function openLeftMenuSection(section){
    $('#menu-trigger').addClass('open');
    $('#sidebar').addClass('toggled');
    $('#header').addClass('sidebar-toggled');
    $('.left_menu').removeClass('toggled');
    $('.left_menu').removeClass('active');
    $('#li_'+section).addClass('toggled');
    $('#li_'+section).addClass('active');
    $('#ul_sub_'+section).show();
}

function notify(type, msg) {
    $.growl({
        title: '',
        message: msg,
        url: ''
    }, {
        element: 'body',
        type: type,
        allow_dismiss: true,
        offset: {
            x: 20,
            y: 85
        },
        spacing: 10,
        z_index: 1031,
        delay: 2500,
        timer: 1000,
        url_target: '_blank',
        mouse_over: false,
        icon_type: 'class',
        template: '<div data-growl="container" class="alert" role="alert">' +
                '<span data-growl="icon"></span>' +
                '<span data-growl="title"></span>' +
                '<span data-growl="message"></span>' +
                '<a href="javascript:void(0)" data-growl="url"></a>' +
                '</div>'
    });
};

function showNotification(toastrSaved, toastrMsg, toastrSavedClass){
    notify(toastrSaved, toastrMsg);
}

function bootstrapWarning(msg){
    swal(msg, '', 'warning');
}

function bootstrapSuccess(title, msg){
    swal(title, msg, 'warning');
}

function hashCode(str) { // java String#hashCode
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
}

function intToRGB(i) {
    var c = (i & 0x00FFFFFF)
            .toString(16)
            .toUpperCase();

    return "00000".substring(0, 6 - c.length) + c;
}


function validateTan(tan) {
    var filter = /^[A-Z]{4}\d{5}[A-Z]+$/;
    if (filter.test(tan)) {
        return true;
    } else {
        return false;
    }
}
function getTanVerified(tanObj, tdsName) {
    var tan = $(tanObj).val();
    if (tan == '') {
//        tanFlag = true;
//        $('#td_tan_error').hide();
        return;
    }
    tan = tan.toUpperCase();
    var check = validateTan(tan);
    if (check) {
        showLoader();
        $.ajax({
            type: 'POST',
            url: '/salary_income/tan?tan=' + tan,
            dataType: 'json',
            success: function(resp) {
                hideLoader();
                if (resp.error == '1') {
//                    $('#td_tan_error').show();
//                    $('#td_tan_error').html(resp.message);
//                    $(tdsName).val('');
//                    $(tanObj).addClass('fieldError');
//                    tanFlag = false;
                    return;
                } else if (resp.error == '0') {
                    if (tdsName != undefined) {
                        $(tdsName).val(resp.fullname);
                        $(tdsName).parent('div').removeClass('fg-line');
                        $(tdsName).parent('div').addClass('fg-toggled');
//                        $(tdsName).removeClass('fieldError');
                    }
//                    $(tanObj).removeClass('fieldError');
                }
//                tanFlag = true;
//                $('#td_tan_error').hide();
            }
        });
    }
}

function resetTanFlag() {
    tanFlag = true;
    $('#td_tan_error').hide();
}
function showOtherMenu(flag){
    if(flag == 1){
        $('#hidden_other_li').val(0);
        $('.other_li').hide();
    }else{
        var hidden_other_li = $('#hidden_other_li').val();
        if(hidden_other_li == 0){
            $('#hidden_other_li').val(1);
            $('.other_li').show();
        }else{
            $('#hidden_other_li').val(0);
            $('.other_li').hide();
        }
    }
}
function showAnimate(id){
    setTimeout(function(){
        $(id).addClass('animated');
        $(id).addClass('bounceIn');
    }, 1100);
}

function openSummaryModal(ass_year) {
    var postStr = "ass_year=" + ass_year;
    showLoader();
    $.ajax({
        type: 'GET',
        url: '/summary/lightbox',
        data: postStr,
        global: false,
        dataType: 'json',
        success: function(resp) {
            if(resp == LOGOUT){
                redirectToLogout();
            }
            hideLoader();
            if (resp.html != '') {
                $('#modal_body_summary').html(resp.html);
                $('#delete_summary_div').hide();
                $('#summary_computation').attr('href','/computation_details?ass_year='+ass_year);
                openModal('#summary_div');
                AddCommasToAllNo('#summary_div');
            }
        }
    });
}

function AddCommasToAllNo(id){
    $(id+' .comma').each(function() {
        var value = checkIsNaN(parseInt($(this).html() * 1));
        value = addCommas(value);
        $(this).html(value);
    });
}

function accordionDiv(element, divname) {
    $(divname).toggle();
    if ($(divname).is(':visible')) {
        $(element).find('#click_details').html('hide');
    } else {
        $(element).find('#click_details').html('show');
    }
}

function showLogoutSuggestion(){
    $("#logout_suggestion").val('');
    $('#div_logout_suggestion').modal('show');
    $("#logout_suggestion").focus();
}

function sendLogoutSuggestion(){
    var suggestion = $("#logout_suggestion").val();
    var page_name = $("#current_screen_name").val();
    suggestion = suggestion.trim();
    if(suggestion == ''){
        goToPage('/logout');
    }else{
        showLoader();
        $.ajax({
            type: "POST",
            url: "/congratulations/logout_suggestion",
            data: {
                suggestion: suggestion,
                page_name: page_name
            },
            dataType: 'json',
            success: function(resp){
                $('#div_logout_suggestion').modal('hide');
                if(resp > 0){
                    goToPage('/logout');
                }else{
                    hideLoader();
                   showNotification(toastrErrorClass, dataErrorMsg);
                }
            }
        });
    }
}

function validateEmailId(emailId) {
     var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     return re.test(emailId);
}
function openHintDivFromJSON(id) {
    console.log('hint div'); 
    $('#loader_img_div').show(); 
    $('#modal_hint_header').html('');
    $('#modal_body_hint').html('');  
    $('#hint_div').modal('show');   
    var formString = 'ids=' + id + '&hint_flag=1';
    $.ajax({
        type: "POST",
        url: "/help/helptips",
        data: formString,
        dataType: 'json',
        success: function(resp) {  
            if (resp == LOGOUT) {
                redirectToLogout();
            }
            $('#loader_img_div').hide(); 
            if (resp != '') {
                var html = resp['article'].body;              
                $('#modal_hint_header').html(resp['article'].title);
                $('#modal_body_hint').html(html);  
                $('#modal_body_hint img').each(function () {
                    $(this).addClass('image-100');
                });
                if (html != '') {
                    var link = '<p><a href="https://help.myitreturn.com/hc/en-us/articles/' + id + '" target="_blank" title="View original article">View Original Article&nbsp;<span class="Icon--link-external" type="Icon--link-external"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 2h4v4m0-4L6 8M4 2H2v10h10v-2"></path></svg></span></a></p>';
                    $('#modal_body_hint').append(link);
                }              
            } else {
                showNotification(toastrError, dataErrorMsg, toastrErrorClass);
            }
        }
    });
}
function openHintDivFromJSONForText(text) {     
    if (text != '') {
           $('#modal_body_text_div').html(text);  
            $('#text_div').modal('show');
     }
}
function openHintDiv(id) {
    $('#hint_div').modal('show');
    var formString = 'ids=' + id + '&hint_flag=1';
    $.ajax({
        type: "POST",
        url: "/help/forums",
        data: formString,
        dataType: 'json',
        success: function(resp) {
            if (resp == LOGOUT) {
                redirectToLogout();
            }
            $('#loader_img_div').hide(); 
            if (resp != '') {
                $('#modal_body_hint').html(resp['faq']);
            } else {
                showNotification(toastrError, dataErrorMsg, toastrErrorClass);
            }
        }
    });
}

function resetSrNo(id) {
    $.each($(id).children("tr"), function(ind, obj) {
        $(obj).children("td").eq(0).html(ind + 1);
    });
}

function saveUserDownloadDetails(formId) {
    var validate = $(formId).parsley().validate();
    var link = $('#download_link').val();
    if (validate) {
        showLoader();
        var postStr = $(formId).serialize();
        $.ajax({
            type: "POST",
            url: "/user/save_user_downloads",
            data: postStr,
            dataType: 'json',
            success: function(resp) {
                hideLoader();
                if (resp != '') {
                    closeModal('#modal_user_download');
                } else {
                    showNotification(toastrError, dataErrorMsg, toastrErrorClass);
                }
                goog_report_conversion(link);
                location.href = link;
            }
        });
    }
}

function openUserFormModal(type, link){
    clearForm('#form_user_download');
    $('#download_type').val(type);
    $('#download_link').val(link);
    openModal('#modal_user_download');
    $('#modal_user_download').on('shown.bs.modal', function () {
        $('#name').focus();
    })
}

function notifyMeCenterTop(type, msg) {
    $.growl({
        icon: '',
        title: '  ',
        message: msg,
        url: ''
    }, {
        element: 'body',
        type: type,
        allow_dismiss: true,
        placement: {
            from: 'top',
            align: 'center'
        },
        offset: {
            x: 20,
            y: 85
        },
        spacing: 10,
        z_index: 1031,
        delay: 5500,
        timer: 1000,
        url_target: '_blank',
        mouse_over: false,
        icon_type: 'class',
        template: '<div data-growl="container" class="alert" role="alert">' +
                '<span data-growl="icon"></span>' +
                '<span data-growl="title"></span>' +
                '<span data-growl="message"></span>' +
                '<a href="javascript:void(0)" data-growl="url"></a>' +
                '</div>'
    });
}
;
