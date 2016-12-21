using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class hunger : MonoBehaviour {

	private float current_hunger;
	private float max_hunger = 150;
	private float min_hunger = 1;


	// Use this for initialization
	void Start () {
		current_hunger = 150;
	}
	
	// Update is called once per frame
	void Update () {
		current_hunger -= 1 * Time.deltaTime;
		gameObject.GetComponent<RectTransform>().sizeDelta = new Vector2(current_hunger, 10);

		if (Input.GetKeyDown("f")) {
			current_hunger -= 50;
		}
			
		if (current_hunger > max_hunger) {
			current_hunger = max_hunger;
		}
		if (current_hunger < min_hunger) {
			current_hunger = min_hunger;
		}
		if (current_hunger <= 1) {
			health.current_health -= 5 * Time.deltaTime;
		}
	}
}
