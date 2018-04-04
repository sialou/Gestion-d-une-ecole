/*-----------------------------------------------------------------------------------*/
/* 		Mian Js Start 
/*-----------------------------------------------------------------------------------*/
$(document).on("ready",function() {
	"use strict"
	/*-----------------------------------------------------------------------------------*/
	/* 	LOADER
	/*-----------------------------------------------------------------------------------*/
	$("#loader").delay(500).fadeOut("slow");
	
	
	/*-----------------------------------------------------------------------------------*/
	/* 	SLIDER REVOLUTION
	/*-----------------------------------------------------------------------------------*/
	jQuery('.tp-banner').show().revolution({
		dottedOverlay:"none",
		delay:10000,
		/* startwidth:1170,
		startheight:900, */
		responsiveLevels:[1920,1025,768,480],
		gridwidth:[1920,1025,768,480],
		gridheight:[900,600,500,400],		
		navigation: {
			keyboardNavigation:"off",
			keyboard_direction: "horizontal",
			mouseScrollNavigation:"off",
			onHoverStop:"off",
			touch:{
				touchenabled:"on",
				swipe_threshold: 75,
				swipe_min_touches: 1,
				swipe_direction: "horizontal",
				drag_block_vertical: false
			}
			,
			arrows: {
				style:"zeus",
				enable:true,
				hide_onmobile:true,
				hide_under:600,
				hide_onleave:true,
				hide_delay:200,
				hide_delay_mobile:1200,
				tmp:'<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div> </div>',
				left: {
					h_align:"left",
					v_align:"center",
					h_offset:0,
					v_offset:0
				},
				right: {
					h_align:"right",
					v_align:"center",
					h_offset:0,
					v_offset:0
				}
			},
			bullets: {
				enable:true,
				hide_onmobile:true,
				hide_under:600,
				style:"metis",
				hide_onleave:true,
				hide_delay:200,
				hide_delay_mobile:1200,
				direction:"horizontal",
				h_align:"center",
				v_align:"bottom",
				h_offset:0,
				v_offset:30,
				space:5,
				tmp: '',
			}
		},
		
		parallax:"mouse",
		parallaxBgFreeze:"on",
		parallaxLevels:[7,4,3,2,5,4,3,2,1,0],												
		keyboardNavigation:"on",						
		shadow:0
	});

	
	
});
/*-----------------------------------------------------------------------------------*/
/*    CONTACT FORM
/*-----------------------------------------------------------------------------------*/
function checkmail(input){
  var pattern1=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  	if(pattern1.test(input)){ return true; }else{ return false; }}     
    function proceed(){
    	var name = document.getElementById("name");
		var email = document.getElementById("email");
		var company = document.getElementById("company");
		var msg = document.getElementById("message");
		var errors = "";
	if(name.value == ""){ 
		name.className = 'error';
	  	  return false;}    
		  else if(email.value == ""){
		  email.className = 'error';
		  return false;}
		    else if(checkmail(email.value)==false){
		        alert('Please provide a valid email address.');
		        return false;}
		    else if(company.value == ""){
		        company.className = 'error';
		        return false;}
		   else if(msg.value == ""){
		        msg.className = 'error';
		        return false;}
		   else 
		  {
$.ajax({
	type: "POST",
	url: "",
	data: $("#contact_form").serialize(),
	success: function(msg){
	//alert(msg);
    if(msg){
		$('#contact_form').fadeOut(1000);
        $('#contact_message').fadeIn(1000);
        	document.getElementById("contact_message");
         return true;
        }}});
}};

/*-----------------------------------------------------------------------------------*/
/*    ENVOIE ELEVE FORM
/*-----------------------------------------------------------------------------------*/
function sends(){
	var name = document.getElementById("name");
	var lastname = document.getElementById("lastname");
	var classe = document.getElementById("classe");
	var errors = "";
if(name.value == ""){ 
	name.className = 'error';
		return false;}    
	  else if(lastname.value == ""){
		lastname.className = 'error';
	  return false;}
		else if(classe.value == ""){
			classe.className = 'error';
			return false;}
	   else 
	  {
$.ajax({
type: "POST",
url: "php/sendstudent.php",
data: $("#sendstudent_form").serialize(),
success: function(msg){
//alert(msg);
if(msg){
	$('#sendstudent_form').fadeOut(1000);
	$('#sendstudent_message').html('<i class="fa fa-paper-plane-o"></i>'+msg);
	$('#sendstudent_message').fadeIn(1000);
	document.getElementById("sendstudent_message")
	return true;
	}}});
}};
/*-----------------------------------------------------------------------------------*/
/*    ENVOIE CLASS FORM
/*-----------------------------------------------------------------------------------*/
function sendc(){
	var classe = document.getElementById("classe");
	var errors = "";
if(classe.value == ""){ 
	classe.className = 'error';
		return false;} 
	   else 
	  {
$.ajax({
type: "POST",
url: "php/sendclasse.php",
data: $("#sendclasse_form").serialize(),
success: function(msg){
//alert(msg);
if(msg){
	$('#sendclasse_form').fadeOut(1000);
	$('#sendclasse_message').html('<i class="fa fa-paper-plane-o"></i>'+msg);
	$('#sendclasse_message').fadeIn(1000);
	document.getElementById("sendclasse_message")
	return true;
	}}});
}};
/*-----------------------------------------------------------------------------------*/
/*    supprimer une classe 
/*-----------------------------------------------------------------------------------*/
function deletec(id){
$.ajax({
			 url: 'php/deleteclasse.php?id='+id,
			 type: 'GET',
			 success: function(msg) {
				if(msg){
					$("."+id).css('display','none');
					$('#deleteclasse_message').html('<i class="fa fa-paper-plane-o"></i>'+msg);
	                $('#deleteclasse_message').fadeIn(1000);
	
				}
					
			 }});

};
/*-----------------------------------------------------------------------------------*/
/*    modifier une classe ;
/*-----------------------------------------------------------------------------------*/
function modifc(id){
	$.ajax({
				 url: 'php/modifclasse.php?id='+id,
				 type: "POST",
				 data: $("#sendclasse_form").serialize(),
				 success: function(msg) {
					if(msg){
						$('#modifclasse_message').html('<i class="fa fa-paper-plane-o"></i>'+msg);
						$('#modifclasse_message').fadeIn(1000);
		
					}
						
				 }});
	
	};