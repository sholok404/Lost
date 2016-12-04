var distance;
var target : Transform;
var look_at_distance = 15.0;
var attack_range = 1.5;
var move_speed = 5.0;
var damping = 6.0;

function Start() {
	GetComponent.<Animation>().Play("idle");
}

function Update () {
	distance = Vector3.Distance(target.position, transform.position);

	if (distance < look_at_distance) {
		look_at();
	}
	if (distance > look_at_distance) {
	}
	if (distance < attack_range) {
		attack();
	}
}

function look_at() {
	var rotation = Quaternion.LookRotation(target.position - transform.position);
	transform.rotation = Quaternion.Slerp(transform.rotation, rotation, Time.deltaTime * damping);
}

function attack() {
	GetComponent.<Animation>().Play("walk");
	transform.Translate(Vector3.forward * move_speed * Time.deltaTime);
}