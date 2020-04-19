$( document ).ready(function() {

    var baseUrl   = 'http://localhost:8000/';
    var searchBtn = $('#search-btn');
    var searchForm = $('#search-form');
    

    $(searchBtn).on('click', function() {
        searchForm.submit();
    });

});