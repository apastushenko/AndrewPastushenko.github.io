/**
 * Created by pastushenko-av on 25.09.2015.
 */
$(document).ready(function () {
    "use strict";

    $('.first-tab').click(function (e) {
        $('.tab-content.tab-1').show();

        $(this).addClass("active-tab");
        $('.second-tab, .third-tab').removeClass("active-tab");

        $('.tab-content.tab-2').hide();
        $('.tab-content.tab-3').hide();
    });
    $('.second-tab').click(function (e) {
        $('.tab-content.tab-2').show();

        $(this).addClass("active-tab");
        $('.first-tab, .third-tab').removeClass("active-tab");

        $('.tab-content.tab-1').hide();
        $('.tab-content.tab-3').hide();
    });
    $('.third-tab').click(function (e) {
        $('.tab-content.tab-3').show();

        $(this).addClass("active-tab");
        $('.second-tab, .first-tab').removeClass("active-tab");

        $('.tab-content.tab-1').hide();
        $('.tab-content.tab-2').hide();
    });
});