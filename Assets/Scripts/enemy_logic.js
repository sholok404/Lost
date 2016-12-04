#pragma strict

var health : int = 100;

function Update() {
	if (health <= 0) {
		dead();
	}
}

function apply_damage (damage : int) {
	health -= damage;
}

function dead() {
	Destroy (gameObject);
}
