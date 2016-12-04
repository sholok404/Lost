#pragma strict
var door : Transform;
private var draw_gui = false;
private var door_closed = true;

function Update () {
	if (draw_gui == true && Input.GetKeyDown(KeyCode.E)) {
		change_door_state();
	}
}

function OnTriggerEnter (theCollider : Collider) {
	if (theCollider.tag == "Player") {
		draw_gui = true;
	}
}

function OnTriggerExit (theCollider : Collider) {
	if (theCollider.tag == "player") {
		draw_gui = false;
	}
}

function on_gui() {
	if (draw_gui == true) {
		GUI.Box (Rect(Screen.width*0.5-51, 200, 102, 22), "[E] to Open Door");
	}
}

function change_door_state() {
	if (door_closed) {
		door.GetComponent.<Animation>().CrossFade("Open");
		door_closed = false;
		yield WaitForSeconds(3);
		door.GetComponent.<Animation>().CrossFade("Close");
	}
}