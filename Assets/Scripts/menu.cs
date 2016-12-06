using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class menu : MonoBehaviour {
	public void new_game(string newGameLevel)
	{
		SceneManager.LoadScene (newGameLevel);
	}
	public void exit() {
		Application.Quit();
	}
	public void load_position() {
		float x = PlayerPrefs.GetFloat ("PlayerX");
		float y = PlayerPrefs.GetFloat ("PlayerY");
		float z = PlayerPrefs.GetFloat ("PlayerZ");

		transform.position = new Vector3 (x, y, z);
	}
}