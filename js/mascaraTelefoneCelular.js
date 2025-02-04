function mascaraTelCel(obj){
	var tel = $(obj).val(); // (12) 3023-8788
	if (tel){
		tel = tel.replace('(', '');
		tel = tel.replace(')', '');
		tel = tel.replace('-', '');
		while (tel.indexOf(' ') != -1) {
   			 tel = tel.replace(' ', '');
  		}
  		tel = tel.replace(/\D/g, '');
  		var indexValueSeparador = 6;
  		var numMax = 10;

  		if (tel.length > 3 && tel.substring(2,3) == '9'){
  			var arrDDD = new Array();
	  		arrDDD.push('1');
	  		arrDDD.push('2');
	  		arrDDD.push('9');
	  		var diafuturo = new Date(2016, 0, 1);
	  		if ($.now() > diafuturo){
	  			arrDDD.push('3');
	  			arrDDD.push('7');
	  			arrDDD.push('8');
	  			diafuturo = new Date(2017, 0, 1);
		  		if ($.now() > diafuturo){
		  			arrDDD.push('4');
		  			arrDDD.push('5');
		  			arrDDD.push('6');
		  		}
	  		}
  			if (jQuery.inArray(tel.substring(0,1), arrDDD) >= 0){
  				indexValueSeparador = 7;
  				numMax = 11;
  			}
  		}
  		if (tel.length == 0)
  			$(obj).val('');
		else if (tel.length == 1)
			$(obj).val('('+tel);
		else if (tel.length == 2)
			$(obj).val('('+tel + ')');
		else if (tel.length >= 3 && tel.length < indexValueSeparador)
			$(obj).val('('+tel.substring(0,2) + ') ' + tel.substring(2));
		else if (tel.length == indexValueSeparador)
			$(obj).val('('+tel.substring(0,2) + ') ' + tel.substring(2, indexValueSeparador) + '-');
		else 
			$(obj).val('('+tel.substring(0,2) + ') ' + tel.substring(2, indexValueSeparador) + '-' + tel.substring(indexValueSeparador, numMax));
	}
}