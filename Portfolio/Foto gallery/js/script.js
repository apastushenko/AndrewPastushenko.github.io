/**
 * Created by pastushenko-av on 17.09.2015.
 */
$(document).ready(function () {
    "use strict";
    $('.close_btn').click(function (e) {
        $('.overlay').hide();
        $('.popup_img').hide();
    });

    $('#zoom_img1').click(function (e) {
        $('.overlay').show();
        $('.popup_img1_large').show();
    });
    $('#zoom_img2').click(function (e) {
        $('.overlay').show();
        $('.popup_img2_large').show();
    });
    $('#zoom_img3').click(function (e) {
        $('.overlay').show();
        $('.popup_img3_large').show();
    });
    $('#zoom_img4').click(function (e) {
        $('.overlay').show();
        $('.popup_img4_large').show();
    });
    $('#zoom_img5').click(function (e) {
        $('.overlay').show();
        $('.popup_img5_large').show();
    });
    $('#zoom_img6').click(function (e) {
        $('.overlay').show();
        $('.popup_img6_large').show();
    });
});