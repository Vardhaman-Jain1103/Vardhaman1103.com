// You can add any interactivity here using jQuery
$(document).ready(function () {
    $('.btn-danger').click(function () {
        alert('Contact Us button clicked!');
    });
});
// contact--page
$(document).ready(function () {
    $('#contactForm').on('submit', function (e) {
        e.preventDefault();
        const workEmail = $('#workEmail').val();
        const firstName = $('#firstName').val();
        const lastName = $('#lastName').val();
        const terms = $('#terms').prop('checked');

        if (workEmail && firstName && lastName && terms) {
            console.log('Work email:', workEmail);
            console.log('First name:', firstName);
            console.log('Last name:', lastName);
            console.log('Terms accepted:', terms);
            alert('Form submitted successfully!');
        } else {
            alert('Please fill out all fields and accept the terms.');
        }
    });
});

$(document).ready(function () {
    $('.carousel').carousel({
        interval: 5000
    });
});