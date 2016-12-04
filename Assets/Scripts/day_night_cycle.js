#pragma strict

var day_length : float = 5;
var night_length : float = 10;
var time : float = 5;
var hour : float = 0;
var sun : Light;

function Update () {
	sun.transform.Rotate(Time.deltaTime/time, 0, 0);
	hour += Time.deltaTime/time;
	
	if (hour >= 360) {
		hour = 0;
	}
	if (hour >= 180) {
		//night
		time = night_length;
		sun.intensity -= Time.deltaTime;
	}
	if (hour <= 180) {
		//day
		time = day_length;
		sun.intensity += Time.deltaTime;
	}
	if (sun.intensity >= 0.75) {
		sun.intensity = 0.75;
	}
	if (sun.intensity <= 0.1) {
		sun.intensity = 0.1;
	}
}
