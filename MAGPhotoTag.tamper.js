// ==UserScript==
// @name       MAGPhotoTag
// @namespace  http://munkatarsak/
// @version    0.2.1
// @description  useful tagging software
// @match      http://munkatarsak/colleague/photo/all/1
// @copyright  2012+, You
// ==/UserScript==

var $ = unsafeWindow.jQuery;

$(function(){
    
    var the_array = 
        {

            11 : ['fogaskerék','goofy'],
            14 : ['MILF'],                        
            18 : ['krueger'],            
            66 : ['sweetchuck'],
            67 : ['MILF'],            
            70 : ['Louie'],
            172 : ['Mini Me'],              
            221 : ['BrendanFraser'],              
            441 : ['Dr. Evil'],                        
            452 : ['JodieFoster'],            
            565 : ['Schwarzenegger'],                        
            601 : ['Richelieu'],                                    
            760 : ['Leonidas (this is spartaaaaa)'],                                    
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
