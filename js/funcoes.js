$(function(){

	var html  = '<div class="testing card">';
		html += '<h1>Carregando...</h1>';
		html += '<img class="full" src="http://static.rhomes.properties/images/full-heart.png">';
		html += '</div>';

	

	$('#openLoad').on('click', function(e){
		e.preventDefault();
		openLoad();

		return false;
	});

	$('#closeLoad').on('click', function(e){
		e.preventDefault();
		closeLoad();

		return false;
	});

	function openLoad(){
		$('#loadID').append(html);
	}
	

	function closeLoad(){
		$('.testing').remove();
	}

});