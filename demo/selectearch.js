// SELECTearch - Version 1.0
// Created by - Manish Khatri
// Created on - 10th October, 2014

(function ( $ ) {
	$.fn.selectearch = function( options ) {
		
		return this.each(function(){
			var elem = $(this), s_id = this.id, s_val = $(this).siblings("label").html(), s_class = "s_"+this.id;			
			
			var inp = "<input type='search' id='search_"+s_id+"' placeholder='Search "+s_val+"' class='"+s_class+" selectearch_search_box' />";
			var l_count = "<div id='count_"+s_id+"' class='selectearch_results'></div>";
			elem.addClass('selectearch');
			elem.before(inp);
			elem.after(l_count);
			
			$("."+s_class).tearch(s_id);
			
		});
	};
	
	$.fn.tearch = function ( sel ){
		var t_count = $("#"+sel+" option").length;
		$("#count_"+sel).text( t_count+" result found.");
		
		return this.keyup(function(){
			var filt = $(this).val(), count = 0;
	 
			$("#"+sel+" option").each(function(){
				if ($(this).text().search(new RegExp(filt, "i")) < 0) {
					$(this).slideUp(100);
				}
				else {
					$(this).slideDown(100);
					count++;
				}
			});
			
			var numberItems = count;
			$("#count_"+sel).text( count+" result found.");
		});
	};
}(jQuery));