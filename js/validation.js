// JavaScript Document
// validate signup form on keyup and submit
//Enquire Now Validation
$("#query_form_enquiry").validate({
    rules: {
        contact_enq: {
            required: true,
            digits: true
        },
    },
    highlight: function(element) {
        $(element).closest('.form-group').addClass('has-error');
    },
    unhighlight: function(element) {
        $(element).closest('.form-group').removeClass('has-error');
    },
});

//Request Price Validation
$("#query_form_price").validate({
    rules: {

        contact_price: {
            required: true,
            digits: true
        },
    },
    highlight: function(element) {
        $(element).closest('.form-group').addClass('has-error');
    },
    unhighlight: function(element) {
        $(element).closest('.form-group').removeClass('has-error');
    },
});

//Site Visit Validation
$("#query_form_sitevisit").validate({
    rules: {
        contact_visit: {
            required: true,
            digits: true
        },
    },
    highlight: function(element) {
        $(element).closest('.form-group').addClass('has-error');
    },
    unhighlight: function(element) {
        $(element).closest('.form-group').removeClass('has-error');
    },
});

//Requect call back Validation
$("#query_form_callback").validate({
    rules: {
        contact_call: {
            required: true,
            digits: true
        },
    },
    highlight: function(element) {
        $(element).closest('.form-group').addClass('has-error');
    },
    unhighlight: function(element) {
        $(element).closest('.form-group').removeClass('has-error');
    },

});

//Requect Florplan Validation

$("#query_form_floorplan").validate({
    rules: {
        contact_floor: {
            required: true,
            digits: true
        },
    },
    highlight: function(element) {
        $(element).closest('.form-group').addClass('has-error');
    },
    unhighlight: function(element) {
        $(element).closest('.form-group').removeClass('has-error');
    },

});

//Requect Florplan Validation

$("#query_form_ebook").validate({
    rules: {
        contact_floor: {
            required: true,
            digits: true
        },
    },
    highlight: function(element) {
        $(element).closest('.form-group').addClass('has-error');
    },
    unhighlight: function(element) {
        $(element).closest('.form-group').removeClass('has-error');
    },

});

//Requect Florplan Validation

$("#query_form_virtual").validate({
    rules: {
        contact_floor: {
            required: true,
            digits: true
        },
    },
    highlight: function(element) {
        $(element).closest('.form-group').addClass('has-error');
    },
    unhighlight: function(element) {
        $(element).closest('.form-group').removeClass('has-error');
    },

});


//Requect Costing Details Validation
$("#query_form_costingdetails").validate({
    rules: {
        contact_cost: {
            required: true,
            digits: true
        },
    },
    highlight: function(element) {
        $(element).closest('.form-group').addClass('has-error');
    },
    unhighlight: function(element) {
        $(element).closest('.form-group').removeClass('has-error');
    },

});

$("#query_form_share").validate({
    rules: {
        contact_cost: {
            required: true,
            digits: true
        },
    },
    highlight: function(element) {
        $(element).closest('.form-group').addClass('has-error');
    },
    unhighlight: function(element) {
        $(element).closest('.form-group').removeClass('has-error');
    },

});