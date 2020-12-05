jQuery(document).ready( function() {
	
	var leftMenu = jQuery(".leftMenuLedisXSLT");
	var leftMenuSelected = leftMenu.find("a.selected");
	
	if ( leftMenuSelected.closest("li").next(".subMenuContainer").length > 0 )
	{
		leftMenuSelected.closest("li").next(".subMenuContainer").css("display","block");
	}
	
	leftMenuSelected.parents(".subMenuContainer").each( function() {
	
		jQuery(this).css("display","block");

	
	});
	
});





