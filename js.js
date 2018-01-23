var productDate;
var crushDate;
var odomentr;
var typeCar;
var carAge;
var deltaT;
var deltaL;
var exponent;
var iznos;
var iznosNote = 'Износ комплектующих изделий (деталей, узлов, агрегатов) рассчитанный в соответствии с Положением Банка России от 19 сентября 2014 г. N 432-П \u0022О единой методике определения размера расходов на восстановительный ремонт в отношении поврежденного транспортного средства\u0022 составляет: ';
function getResult() {
	//Дата выпсука в формате 2017-01-01
	productDate = document.getElementById('productDate').value;
	console.log(productDate);
	//Дата выпсука в формате 2017-01-01
	crushDate = document.getElementById('crushDate').value;
	console.log(crushDate);
	//Возраст автомобиля в годах с округлением до целого
	carAge = Math.round((Date.parse(crushDate)-Date.parse(productDate))/(3600000 * 24 * 365));
	console.log(carAge);
	//Пробег автомобиля с округлением до десятых
	odomentr = (document.getElementById('odomentr').value / 1000).toFixed(1);
	console.log(odomentr);
	//определение номера типа ТС
	typeCar = document.getElementById('typeCar').value;
	console.log(typeCar);
	//Определение коэффициентов делта T и L
	switch(typeCar) {
		case '1':
			deltaT = 0.057;
			deltaL = 0.003;
			break;
		case '2':
			deltaT = 0.057;
			deltaL = 0.0029;
			break;
		case '3':
			deltaT = 0.042;
			deltaL = 0.0023;
			break;
		case '4':
			deltaT = 0.045;
			deltaL = 0.0024;
			break;
		case '5':
			deltaT = 0.052;
			deltaL = 0.0026;
			break;
		case '6':
			deltaT = 0.049;
			deltaL = 0.0025;
			break;
	}
	//Определение степени натурального логарифма
	exponent = (-((deltaT * carAge) + (deltaL * odomentr)));
	//Расчет процента износа
	console.log(exponent);
	iznos = (100 * (1-(Math.pow(Math.E, exponent)))).toFixed(2);
	//Вывод процента износа
	document.getElementById('result').innerHTML = iznosNote + iznos +' %'
	console.log(deltaT);
	console.log(deltaL);
	console.log(iznos);	
}