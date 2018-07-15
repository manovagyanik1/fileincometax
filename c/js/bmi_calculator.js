function getBmiModal() {
    var validated = $('#form_bmi_calculator').parsley().validate();
    if(validated) {
        var height_feet = $('#height_feet').val() * 1;
        var height_inches = $('#height_inches').val() * 1;
        var weight = $('#weight').val() * 1;
        var height_in_meter = ((((height_feet * 12) + height_inches) * 2.54) / 100).toFixed(2) * 1;
        var bmi = (weight / (height_in_meter * height_in_meter)).toFixed(2) * 1;
        var modal_title = '';
        var modal_alert = '';
        var btn_class = 'btn btn-default';
        if(bmi < 18.5) {
            modal_title = 'Under Weight';
            modal_alert = '<div class="text-info"><i class="zmdi zmdi-help zmdi-hc-5x"></i></div>';
            btn_class = 'btn btn-info';
//            underweight
        } else if(bmi >= 18.5 && bmi < 25) {
            modal_title = 'Normal Weight';
            modal_alert = '<div class="text-success"><i class="zmdi zmdi-check zmdi-hc-5x"></i></div>';
            btn_class = 'btn btn-success';
//            Normal Weight
        } else if(bmi >= 25 && bmi < 30) {
            modal_title = 'Over Weight';
            modal_alert = '<div class="text-warning"><i class="zmdi zmdi-alert-circle-o zmdi-hc-5x"></i></div>';
            btn_class = 'btn btn-warning';
//            Overweight
        } else if(bmi >30) {
            modal_title = 'Obese';
            modal_alert = '<div class="text-danger"><i class="zmdi zmdi-alert-triangle zmdi-hc-5x"></i></div>';
            btn_class = 'btn btn-danger';
//            Obese
        }
        $('#modal_title').html(modal_title);
        $('#modal_text').html('Your BMI is ' + bmi);
        $('#div_modal_alert').html(modal_alert);
        $("#modal_button").removeClass();
        $('#modal_button').addClass(btn_class);
        $('#bmi_modal').modal('show');
        $('#bmi_modal').find('#span_bmi').html(bmi);
    }

}


