(function(){
	'use strict';

	var $form = document.querySelector('[data-js="form"]');
	var $search = document.querySelector('[data-js="search"]');
	var $tbody = document.querySelector('[data-js="tbody"]');

	function getIndex(name){
		if(gameWords.indexOf(name) > -1){
			var i = gameWords.indexOf(name);
			return indexes[i];
		}
		
		$search.value = '';
		return false;
	}

	function selectTd( line , column ){
		var tr = $tbody.children[line];
		var td = tr.children[column];
		td.classList.add("color");
		$search.value = '';
	}

	var letters = [
		['s','s','i','a','l','c','e','o','i','s'],
		['e','o','s','i','s','t','e','m','a','t'],
		['g','t','t','g','u','a','v','a','o','f'],
		['u','e','l','e','i','c','o','e','s','b'],
		['r','l','c','o','r','e','t','u','v','r'],
		['a','u','s','e','j','c','o','a','n','k'],
		['n','b','i','s','s','n','e','r','i','s'],
		['c','t','s','e','c','o','a','s','b','e'],
		['a','m','p','t','u','r','n','a','s','l'],
		['f','p','e',"q",'t','a','m','l','o','j']
	];

	var lines = [];

	letters.map(function(item, index){
		lines[index] = document.querySelector('[data-js="line'+ index +'"]');
	});

	letters.forEach(function(item, index){
		letters[index].forEach(function(item){
			lines[index].insertAdjacentHTML('beforeend', '<td>' + item + '</td>');
		});
	});

	var indexes = [ 
		[ [7,1], [7,2], [7,3] ],
		[ [8,4], [8,5], [8,6],[8,7],[8,8] ],
		[ [0,9], [1,9], [2,9]],
		[ [3,1], [3,2], [3,3], [3,4], [3,5], [3,6], [3,7], [3,8]],
		[ [0,0], [1,0], [2,0], [3,0], [4,0], [5,0], [6,0], [7,0], [8,0] ],
		[ [2,6], [3,6], [4,6], [5,6] ],
		[ [7,7], [6,6], [5,5], [4,4], [3,3], [2,2], [1,1] ],
		[ [1,2], [1,3], [1,4], [1,5], [1,6], [1,7], [1,8] ],
	]
	var gameWords = ['tse', 'urnas', 'stf', 'eleicoes', 'seguranca', 'voto', 'secreto', 'sistema'];

	$form.addEventListener('submit', function(event){
		event.preventDefault();
		var valueSearch = $search.value;
		var getIndexes = getIndex(valueSearch);
		for(var i = 0; i < getIndexes.length; i++){
			selectTd(getIndexes[i][0], getIndexes[i][1])
		}
	}, false);

}) ();