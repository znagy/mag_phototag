// ==UserScript==
// @name       MAGPhotoTag
// @namespace  http://munkatarsak/
// @version    0.2.4
// @description  useful tagging software
// @match      http://munkatarsak/colleague/photo/all/1
// @copyright  2012+, You
// ==/UserScript==

var $ = unsafeWindow.jQuery;

$(function(){
    
    var the_array = 
        {

            4 : ['nusika', 'nyamm-nyamm'],
            11 : ['fogaskerék','goofy'],
            12 : ['MILF', 'nyamm-nyamm'],
            13 : ['nyamm-nyamm'],
            14 : ['MILF', 'nyamm-nyamm'],
            15 : ['MariZsuzsi'],
            18 : ['krueger'],
            65 : ['BobbyEwing'],
            66 : ['sweetchuck'],
            67 : ['MILF', 'nyamm-nyamm'],
            68 : ['nyamm-nyamm'],
            70 : ['Louie'],
            89 : ['nyamm-nyamm'],
            113 : ['krueger'],
            142 : ['nyamm-nyamm', 'zsiráf'],
            170 : ['nyamm-nyamm'],
            172 : ['citrom'],
            172 : ['Mini Me'],
            221 : ['BrendanFraser'],
            236 : ['DianaKrall'],
            255 : ['Leonidas (this is spartaaaaa)'],
            318 : ['KovácsLázár'],
            377 : ['nyamm-nyamm', 'nyuszika'],
            373 : ['RobertZ\'Dar'],
            424 : ['Karotta'],
            439 : ['ValKilmer'],
            441 : ['Dr. Evil'],
            452 : ['JodieFoster'],
            559 : ['röntgen'],
            565 : ['Schwarzenegger'],
            563 : ['KeanuReeves', 'KenuRévész'],
            601 : ['Richelieu', 'TimCurry'],
            639 : ['PindrochCsaba'],
            688 : ['csillagszemű', 'nyamm-nyamm'],
            696 : ['nyamm-nyamm'],
            755 : ['nyamm-nyamm'],
            760 : ['Leonidas (this is spartaaaaa)'],
            771 : ['kétarc'],
            798 : ['nyamm-nyamm'],
            809 : ['nyamm-nyamm'],
            824 : ['nyamm-nyamm'],
            832 : ['BrionJames'],
            1027 : ['pornós'],

        };

    $.each(the_array, function(eid, tags) {
        var tags_div = $('#tags_'+eid);
        $.each(tags, function(idx, tag) {
            tags_div.append('<span class="tag">'+tag+'</span>');
        });
        tags_div.show();
    });

});
