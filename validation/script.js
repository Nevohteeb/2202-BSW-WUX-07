var parsleyForm = $('#parsleyValidation').parsley();
$('#parsleyValidation').find('#submitBtn').click(function() {
    parsleyForm.validate();
})

parsleyForm.subscribe('parsely:form:success', function() {
    alert('successful');
});