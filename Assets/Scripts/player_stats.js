#pragma strict

var health : int = 100;
var btn : GameObject;
var player : Transform;

function apply_damage (damage : int) {
	health -= damage;

	if (health <= 0) {
		dead();
	}
}

function dead() {
	btn.SetActive(true);
}

function respawn() {
	btn.SetActive(false);
	player.transform.position = new Vector3 (360.11, 11.21, 350);
}