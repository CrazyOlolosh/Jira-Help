// ==UserScript==
// @name         Jira Helper
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Script injection for additional features implementation
// @author       Jonty
// @match        https://jira.abinmetall.ru/secure/RapidBoard.jspa?rapidView=*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=abinmetall.ru
// @grant        none
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    $(function() {
        let title = $('title').text();
        let reqURL = "//172.16.101.77:5001/user_filter/" + title;
        $('head').append('<link href="//172.16.101.77:5001/static/filter.css" rel="stylesheet"><script src="https://code.jquery.com/jquery-3.6.0.min.js"></script><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"><script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>');
        $.ajax({
            type: "GET",
            url: reqURL,
            contentType: "application/json",
            dataType: 'html',
            success: function(response) {
                $("#js-quickfilters-label").after(response);
            },
        });
    })
})();
