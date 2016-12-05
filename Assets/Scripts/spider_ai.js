var player : Transform;
var move_speed = 4;
var min_dist = 5;
var max_dist = 10;

var damage = 1;

function Start () {
	GetComponent.<Animation>().Play("idle");
}

function Update () {
	transform.LookAt (player);
	if (Vector3.Distance(transform.position, player.position) >= min_dist) {
		GetComponent.<Animation>().Play("walk");
		transform.position += transform.forward * move_speed*Time.deltaTime;

		if (Vector3.Distance(transform.position, player.position) <= max_dist) {
			attack();
		}
	}
}

function attack() {
	// GetComponent.<Animation>().Play("attack");
	if (Time.time > 5) {
		GetComponent.<Animation>().Play("attack");
		player.SendMessage("apply_damage", damage, SendMessageOptions.DontRequireReceiver);
	}
}