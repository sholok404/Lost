using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class health : MonoBehaviour {

	private float max_health = 150;
	private float min_health = 0;
	
	public static float current_health;

	// Use this for initialization
	void Start () {
		current_health = 150;
	}
	
	// Update is called once per frame
	void Update () {
		gameObject.GetComponent<RectTransform>().sizeDelta = new Vector2(current_health, 10);

		if (current_health > max_health) {
			current_health = max_health;
		}
		if (current_health < min_health) {
			current_health = min_health;
		}
		if (current_health <= 0) {
			SceneManager.LoadScene ("Scenes/over");
		}
	}
}