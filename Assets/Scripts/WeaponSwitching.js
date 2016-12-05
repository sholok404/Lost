#pragma strict

var melee : Transform;
var Weapon01 : GameObject;
var Weapon02 : GameObject;

function Update () {
	if (Input.GetKeyDown(KeyCode.Q))
	{
		SwapWeapons();
	}
}

function SwapWeapons()
{
	if (Weapon01.active == true)
	{
		Weapon01.SetActive(false);
		Weapon02.SetActive(true);
		melee.SendMessage("axe", SendMessageOptions.DontRequireReceiver);
	}
	else 
	{
		Weapon01.SetActive(true);
		Weapon02.SetActive(false);
		melee.SendMessage("knife", SendMessageOptions.DontRequireReceiver);
	}
}