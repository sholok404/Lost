#pragma strict
// /\
// ||
// ||
//(OO)

var damage : int = 10;
var distance : float;
var max_distance : float = 1.5;
var anim : Animator;

function Update () {
	//Left
	if (Input.GetButtonDown("Fire1")) {
		left();
	}
	
	//Right
	if (Input.GetButtonDown("Fire2")) {
		right();
	}
	
	if (Input.GetKey(KeyCode.LeftShift)) {
		anim.SetBool("running", true);
	}
	else {
		anim.SetBool("running", false);
	}
}

function left () {
		var hit : RaycastHit;
		anim.SetBool("hit1", true);
		if (Physics.Raycast (transform.position, transform.TransformDirection(Vector3.forward), hit)) {
			distance = hit.distance;
			if (distance < max_distance) {

				hit.transform.SendMessage("apply_damage", damage, SendMessageOptions.DontRequireReceiver);
			}
		}
		yield WaitForSeconds(1);
		anim.SetBool("hit1", false);
}

function right () {
		var hit : RaycastHit;
		anim.SetBool("hit2", true);
		if (Physics.Raycast (transform.position, transform.TransformDirection(Vector3.forward), hit)) {
			distance = hit.distance;
			if (distance < max_distance) {
				hit.transform.SendMessage("apply_damage", damage, SendMessageOptions.DontRequireReceiver);
			}
		}
		yield WaitForSeconds(0.5);
		anim.SetBool("hit2", false);
}

/* function axe () {
	damage = 70;
	max_distance = 2.5;
}

function knife () {
	damage = 50;
	max_distance = 1.75;
}
*/