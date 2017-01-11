#pragma strict

public var anim : Animator;
var damage : int = 50;
var distance : float;

function Update () {
	if (Input.GetKey("w") | Input.GetKey("a") | Input.GetKey("s") | Input.GetKey("d")) {
		anim.SetBool("running", true);
	}
	else {
		anim.SetBool("running", false);
	}
		
	if (Input.GetButtonDown("Fire1")) {
		left();
	}
	if (Input.GetButtonDown("Fire2")) {
		right();
	}
}

function left() {
	var hit : RaycastHit;
	anim.SetBool("hit1", true);
	if (Physics.Raycast (transform.position, transform.TransformDirection(Vector3.forward), hit)) {
		distance = hit.distance;
		
		if (distance < 2) {
			hit.transform.SendMessage("apply_damage", damage, SendMessageOptions.DontRequireReceiver);
		}			
	}
	yield WaitForSeconds (0.6);
	anim.SetBool("hit1", false);
}

function right() {
	anim.SetBool("hit2", true);
	var hit : RaycastHit;
	if (Physics.Raycast (transform.position, transform.TransformDirection(Vector3.forward), hit)) {
		distance = hit.distance;
		
		if (distance < 2) {
			hit.transform.SendMessage("apply_damage", damage, SendMessageOptions.DontRequireReceiver);
		}			
	}
	yield WaitForSeconds (0.6);
	anim.SetBool("hit2", false);
}