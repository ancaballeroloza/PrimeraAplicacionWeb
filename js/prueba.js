$(document).ready(function(){

	var datos={
		labels : ["Enero", "Febrero","Marzo","Abril","Mayo"],
		datasets: [{
			label : "datos1",
			backgroundColor : "rgba(220,220,220,0.5)",
			data : [4,3,5,7,5,6]
			},
			{
			label : "datos2",
			backgroundColor : "rgba(151,187,205,0.5)",
			data : [10,7,5,6,5,13]
			}
			]
	};

	var canvas=document.getElementById('chart-section').getContext('2d');
	window.lineal = new Chart(canvas,{
		type : "line",
		data : datos,
		options : {
			elements : {
				rectangle : {
					borderWidth : 1,
					borderColor : "rgb(0,255,0)",
					borderSkipped : "bottom"
				}
			},
			responsive : true,
			title : {
				display : true,
				text : "Prueba de grafico lineal"
			}
		}
	});


	setInterval(function(){
		var newData=[
			[getRandom(),getRandom(),getRandom(),getRandom(),getRandom(),getRandom()],
			[getRandom(),getRandom(),getRandom(),getRandom(),getRandom(),getRandom()],
			[getRandom(),getRandom(),getRandom(),getRandom(),getRandom(),getRandom()],

		];

		$.each(datos.datasets, function(i, dataset){
			dataset.data=newData[i];

		});
		window.lineal.update();

	}, 3000);


	function getRandom(){
		return Math.round(Math.random()*100);
	}






});