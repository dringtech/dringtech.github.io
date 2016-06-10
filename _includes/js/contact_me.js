$(function() {

    $("input,textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});


/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
    $('#success').html('');
});

// Show the thanks form when redirecting from capsule
$(function() {
  var targetModal = "#contactThanksModal"
  if (window.location.hash == targetModal) {
    $(targetModal).modal('show').on('hidden.bs.modal', function () {
      window.location.hash = "";
    });
  }
});
