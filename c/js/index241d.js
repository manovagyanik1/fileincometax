function showForm16Upload(){return $("#form_document_vault").attr("target","_blank"),$("#form_document_vault").iframePostForm({iframeID:"postframe-form16",json:!0,post:function(){},complete:function(o){if(void 0!=o.msg&&""!=o.msg&&showNotification(o.msg),0==o.error){var r=$("#form_document_vault").find("#rid_page").val();void 0!=r&&""!=r?window.location=r:window.location.reload()}1==o.error&&(hideLoader(),$("#row_please_wait").hide(),"Password protected"==o.error_msg?($("#div_upload_error").show(),$("#div_password_error").hide(),$("#modal_upload_error").modal("show"),$("#modal_upload_error").find("#password").val(""),$("#modal_upload_error").find("#file_path").val(o.file_path),$("#modal_upload_error").find("#file_name").val(o.file_name)):($("#div_wrong_pdf").show(),$("#upload_pdf_div").hide(),$("#sub_text_not_readable").html(o.error_mesg)))}}),!1}function submitF16Password(){var o=$("#form_f16_password").parsley().validate();if(o){showLoader();var r=$("#form_f16_password").serialize();$.ajax({type:"POST",url:"/form16_home_new?action=submit_password",data:r,dataType:"json",success:function(o){if(hideLoader(),1!=o.error){var r=$("#form_document_vault").find("#rid_page").val();void 0!=r&&""!=r?window.location=r:window.location.reload()}else $("#div_password_error").show(),$("#div_upload_error").hide()}})}return!1}function fileType(){showLoader(),$("#row_please_wait").show(),hideLoader();var o=document.getElementById("attachments");if(void 0==o)return hideLoader(),!1;var r=o.files[0],e=0,a=r.name.split(".").pop().toLowerCase();return"pdf"==a?document.getElementById("btn_submit").click():(hideLoader(),$("#row_please_wait").hide(),swal("Invalid file format","Please upload only Form-16 PDF file.","warning")),e}