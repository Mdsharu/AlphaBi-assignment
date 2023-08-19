//Change more - Quick fix - 4/27/2023

$(function() {
//TileGrid - Rad Template - image alt for web acc
    $(".rad-card").each(function() {
        // var alt_title = $(this).find(".rad-card__title").text().trim();
        $(this).find("img").attr("alt", "");
    })
//Rad Card - Global and Recognition Awards - External Links.
    $(".rad-awards-card__detail").each(function(){
        var rad_card_a = $(this).find("a");
        if(rad_card_a.attr("target").indexOf("blank") > -1) {
            rad_card_a.attr("title", "This opens a new tab away from Accenture.com.");
        }
    })
//RAD TileGrid - No fact and figures populated should be adjusted so the expand button will appear
    $(".rad-card-feature__facts-figures .rad-card-feature-large-figure").each(function(){
        var u = $(this);
        if(u.text().trim().length <= 0){
            u.attr("style", "height: 95px");
        }
    })
})

