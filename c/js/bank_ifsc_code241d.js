function getStates(){var t=$("#bank_name").val();if(""!=t){showLoader();var a="bank_name="+encodeURIComponent(t);$.ajax({type:"POST",url:"/bank_ifsc_code/get_states",data:a,dataType:"json",success:function(t){if(hideLoader(),""!=t){var a='<option value="">-- Select State --</option>';$(t.state).each(function(t,e){a+='<option value="'+e.state+'">'+e.state+"</option>"}),$("#state").html(a),$("#div_state").show(),$("#div_branch").hide(),$("#div_district").hide(),$("#div_ifsc_code").hide(),$("#state").selectpicker("refresh")}else showNotification(toastrError,dataErrorMsg,toastrErrorClass)}})}}function getDistrict(){var t=$("#bank_name").val(),a=$("#state").val();if(""!=t&&""!=a){showLoader();var e="bank_name="+encodeURIComponent(t)+"&state="+encodeURIComponent(a);$.ajax({type:"POST",url:"/bank_ifsc_code/get_district",data:e,dataType:"json",success:function(t){if(hideLoader(),""!=t){var a='<option value="">-- Select District --</option>';$(t.district).each(function(t,e){a+='<option value="'+e.district+'">'+e.district+"</option>"}),$("#district").html(a),$("#div_district").show(),$("#div_branch").hide(),$("#div_ifsc_code").hide(),$("#district").selectpicker("refresh")}else showNotification(toastrError,dataErrorMsg,toastrErrorClass)}})}}function getBranch(){var t=$("#bank_name").val(),a=$("#state").val(),e=$("#district").val();if(""!=t&&""!=a&&""!=e){showLoader();var o="bank_name="+encodeURIComponent(t)+"&state="+encodeURIComponent(a)+"&district="+encodeURIComponent(e);$.ajax({type:"POST",url:"/bank_ifsc_code/get_branch",data:o,dataType:"json",success:function(t){if(hideLoader(),""!=t){var a='<option value="">-- Select Branch --</option>';$(t.branch).each(function(t,e){a+='<option value="'+e.branch_name+'">'+e.branch_name+"</option>"}),$("#branch").html(a),$("#div_branch").show(),$("#div_ifsc_code").hide(),$("#branch").selectpicker("refresh")}else showNotification(toastrError,dataErrorMsg,toastrErrorClass)}})}}function getIfsc(){var t=$("#bank_name").val(),a=$("#state").val(),e=$("#district").val(),o=$("#branch").val();if(""!=t&&""!=a&&""!=e&&""!=o){showLoader();var i="bank_name="+encodeURIComponent(t)+"&state="+encodeURIComponent(a)+"&district="+encodeURIComponent(e)+"&branch="+encodeURIComponent(o);$.ajax({type:"POST",url:"/bank_ifsc_code/get_ifsc",data:i,dataType:"json",success:function(t){hideLoader(),""!=t.ifsc?($("#div_ifsc_code").show(),$("#span_ifsc").html(t.ifsc[0].ifsc_code),$("#span_address").html(" " + t.ifsc[0].address),goToByScroll("#div_district")):showNotification(toastrError,dataErrorMsg,toastrErrorClass)}})}}