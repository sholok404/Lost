var scare : GameObject;
var played = false;
var trig = false;

var sound : AudioClip;

function Start () {
	play = false;
	scare.SetActive(false);
}

function OnTriggerEnter (other : Collider) {
	trig = true;
}

function Update () {
	if (trig == true) {
		scare.SetActive(true);
		makehimscream ();
		removeovertime();
		trig = false;
	}
}

function removeovertime () {
	yield WaitForSeconds (0.8);
	scare.SetActive(false);
}

function makehimscream () {
	if (!played) {
		played = true;
		GetComponent.<AudioSource>().PlayOnShot(sound);
	}
}