#pragma strict

var health : int = 100;

function apply_damage (damage : int) {
	health -= damage;

	if (health <= 0) {
		dead();
	}
}

function dead() {
	Debug.Log("FUCK!!!");
}
