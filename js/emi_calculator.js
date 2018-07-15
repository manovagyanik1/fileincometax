function goBack() {
    location.reload();
}

function showHideText() {
    var period_dd = $('input[name="period_r"]:checked').val();
    if (period_dd == '1') {
        $('#period_txt').html('Number of months');
    } else {
        $('#period_txt').html('Number of years');
    }
}

function calculateEMI() {
    var validated = $("#form_emi").parsley().validate();
    if (validated) {
    var period_dd = $('input[name="period_r"]:checked').val();
    var amt = ($('#amt').val() * 1);
    if(amt <= 0){
        alert('Amount of loan should be greater than zero.');return;
    }
    var rate = ($('#rate').val() * 1);
    if(rate <= 0){
        alert('Rate of interest should be greater than zero.');return;
    }
    var int_rate = (rate / 12) / 100;
    var total_EMI = '';
    var period = parseInt($('#period').val() * 1);
    if (period_dd == '1') {
        var month1 = (amt * int_rate) * ((Math.pow((1 + int_rate), period)));
        var month2 = (Math.pow((1 + int_rate), period)) - 1;
        total_EMI = Math.round(month1 / month2);
        $('#emi').val(total_EMI);
        $('#result').show();
    } else {
        period = period * 12;
        var year1 = (amt * int_rate) * ((Math.pow((1 + int_rate), period)));
        var year2 = (Math.pow((1 + int_rate), period)) - 1;
        total_EMI = Math.round(year1 / year2);
        $('#emi').val(total_EMI);
        $('#result').show();

    }
    $('#goback').show();
    }
}