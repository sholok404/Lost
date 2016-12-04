#pragma strict
// BTW, FUCK OFF! THIS IS MY FUCKING CODE YOU LITTLE COPY CAT PIECE OF SHIT. STOP LOOKING AT MY CODE OR I WILL FUCKING BEAT THE LEAVING HELL OUTTA YOU.
// You still here? Well then, send me a mail at brosholok@protonmail.com

var damage : int = 50;
var distance : float;
var max_distance : float = 1.5;

function Update () {
	if (Input.GetButtonDown("Fire1")) {
		var hit : RaycastHit;	
		if (Physics.Raycast (transform.position, transform.TransformDirection(Vector3.forward), hit)) {
			distance = hit.distance;
			if (distance < max_distance) {
				hit.transform.SendMessage("apply_damage", damage, SendMessageOptions.DontRequireReceiver);
			}
		}
	}
}
