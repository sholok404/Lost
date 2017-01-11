using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ai : MonoBehaviour {
	Animator anim;
	public int enemy_health = 100;
	public Transform target;
	public int target_damage = 5;
	UnityEngine.AI.NavMeshAgent agent;
	public float distance;
	public Transform health;
	
	// Use this for initialization
	void Start () {
		anim = GetComponent<Animator>();
		agent = GetComponent<UnityEngine.AI.NavMeshAgent>();
	}
	
	
	// Update is called once per frame
	void Update () { 
		agent.SetDestination(target.position);
		
		if (enemy_health <= 0) {
			anim.SetBool("dead", true);
			agent.Stop();
		}
		
		distance = Vector3.Distance(target.position, transform.position);
		if (distance <= 2.75) {
			anim.SetBool("attacking", true);
			enemy_attack();
			anim.SetBool("attacking", false);
		}
		
	}
	
	IEnumerator wait(float seconds) {
        yield return new WaitForSeconds(seconds);
    }
	
	public void apply_damage (int damage) {
		enemy_health -= damage;
	}
	
	public void enemy_attack() {
		StartCoroutine(wait(3));
		health.SendMessage("target_damage", target_damage, SendMessageOptions.DontRequireReceiver);
	}
}