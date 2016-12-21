using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ai : MonoBehaviour {
	Animator anim;
	public int enemy_health = 100;
	public Transform target;
	UnityEngine.AI.NavMeshAgent agent;

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
	}
	
	public void apply_damage (int damage) {
		enemy_health -= damage;
	}
}
