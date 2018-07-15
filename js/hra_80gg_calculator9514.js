function showHraDiv() {
    $('#amt_rent_paid').focus();
    var hra_received = $('#hra_received').val();
    if (hra_received == 1) {
        $('#div_common').show();
        $('#div_hra').show();
        $('#div_80gg').hide();
    } else if (hra_received == 2) {
        $('#div_80gg').show();
        $('#div_common').show();
        $('#div_hra').hide();
    } else {
        $('#div_hra').hide();
        $('#div_80gg').hide();
        $('#div_common').hide();
    }
}

function calculateHRA() {
    var validated = $("#form_hra_calculator").parsley().validate();
    if (validated) {
        showLoader();
        var name = $('#name').val();
        var mail = $('#mail').val();
        $.ajax({
            type: 'POST',
            url: '/hra_calculator/save',
            data: {
                name: name,
                mail: mail,
            },
            dataType: 'json',
            success: function(resp) {
                hideLoader();
                $('#hra_sub_head').hide();
                var hra_received = $('#hra_received').val();
                var amt_rent_paid = $('#amt_rent_paid').val();
                if (hra_received == 1) {
                    var amt_hra_received = $('#amt_hra_received').val();
                    var amt_sal_allowence = $('#amt_sal_allowence').val();
                    var percentage_basic_salary = 0;
                    var excess_rent = (amt_rent_paid - (amt_sal_allowence * 0.1));
                    if (excess_rent < 0) {
                        excess_rent = 0;
                    }
                    var city = $('#city').val();
                    $('#excess_rent').html(excess_rent);
                    $('#result_hra_received').html(amt_hra_received);
                    $('#less_hra_received').html(amt_hra_received);
                    if (city == 5) {
                        percentage_basic_salary = amt_sal_allowence * 0.4;
                        $('#percentage_basic_salary').html(percentage_basic_salary);
                        $('#span_location_percentage').html('40%');
                    } else {
                        percentage_basic_salary = amt_sal_allowence * 0.5;
                        $('#percentage_basic_salary').html(percentage_basic_salary);
                        $('#span_location_percentage').html('50%');
                    }
                    var least_exempt_hra = Math.min(amt_hra_received, percentage_basic_salary, excess_rent);
                    $('#least_exempt_hra').html(least_exempt_hra);
                    $('#taxable_hra').html(amt_hra_received - least_exempt_hra);
                    if(least_exempt_hra > 0){
                        $('#claim_hra').html('You are eligible to claim HRA Exemption. Below are the details.');
                    }else{
                         $('#claim_hra').html('You are NOT eligible to claim HRA Exemption. Below are the details.');
                    }
                    $('#hra_form_div').hide();
                    $('#div_hra_result').show();
                    goToByScroll('.lc-block');
                } else {
                    var no_months = $('#no_months').val();
                    var net_taxable_income = $('#net_taxable_income').val();
                    var amt_month = no_months * 5000;
                    var total_income_percentage = net_taxable_income * 0.25;
                    var excess_total = (amt_rent_paid - (net_taxable_income * 0.1));
                    if (excess_total < 0) {
                        excess_total = 0;
                    }
                    $('#amt_month').html(amt_month);
                    $('#total_income_percentage').html(total_income_percentage);
                    $('#excess_total').html(excess_total);
                    var amt_eligible_80gg = Math.min(amt_month, total_income_percentage, excess_total);
                    $('#amt_eligible_80gg').html(amt_eligible_80gg);
                    if(amt_eligible_80gg > 0){
                        $('#claim_deduction').html('You are eligible to claim Deduction u/s 80GG for House Rent Payment.');
                    }else{
                         $('#claim_deduction').html('You are NOT eligible to claim Deduction u/s 80GG for House Rent Payment.');
                    }
                    $('#hra_form_div').hide();
                    $('#div_80gg_result').show();
                    goToByScroll('.lc-block');
                }
            }
        });

    }
    return false;
}

function calculateAgain() {
    $('#hra_sub_head').show();
    $('#hra_form_div').show();
    $('#div_hra_result').hide();
    $('#div_80gg_result').hide();
//    location.reload(true); 
}