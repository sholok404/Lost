#pragma strict

var damage : int = 50;
var distance : float;

function Update () {
	if (Input.GetButtonDown("Fire1")) {
		var hit : RaycastHit;
		if (Physics.Raycast (transform.position, transform.TransformDirection(Vector3.forward), hit)) {
			distance = hit.distance;
			
			if (distance < 2) {
				hit.transform.SendMessage("apply_damage", damage, SendMessageOptions.DontRequireReceiver);
			}			
		}
	}
}