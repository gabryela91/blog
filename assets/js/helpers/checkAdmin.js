/* global $ */
function checkAdminSession () {
    $.ajax({
        url:"https://gabriela-szgabryela.c9users.io/blog/api/users/sessionAdmin",
        type:"GET",
        success:function(resp) {
        },
        error:function(xhr, status, error) {
    window.location.href = "https://gabriela-szgabryela.c9users.io/blog/assets/templates/publicArticles.html";
        }
    });
}
checkAdminSession();
