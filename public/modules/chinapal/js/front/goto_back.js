function b(){
	 h = $(window).height();
	// h = 400;
	t = $(document).scrollTop();
	if(t > h){
		$('#gotop').fadeIn();
	}else{
		$('#gotop').fadeOut(700);
	}
}
$(document).ready(function(e) {
	b();
	$('#gotop').click(function(){
		$(document).scrollTop(0);	
	})
	
	$('#code').hover(function(){
			$(this).attr('id','code_hover');
			$('#code_img').show();
		},function(){
			$(this).attr('id','code');
			$('#code_img').hide();
	})
	
});

$(window).scroll(function(e){
	b();		
})
