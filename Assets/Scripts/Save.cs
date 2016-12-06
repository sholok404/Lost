using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Save : MonoBehaviour {
	public void save_position() {
		PlayerPrefs.SetFloat ("PlayerX", transform.position.x);
		PlayerPrefs.SetFloat ("PlayerY", transform.position.y);
		PlayerPrefs.SetFloat ("PlayerZ", transform.position.z);
	}

	public void load_position() {
		float x = PlayerPrefs.GetFloat ("PlayerX");
		float y = PlayerPrefs.GetFloat ("PlayerY");
		float z = PlayerPrefs.GetFloat ("PlayerZ");

		transform.position = new Vector3 (x, y, z);
	}
}
