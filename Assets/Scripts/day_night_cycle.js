var cyclemins : float;
var cyclecalc : float;

cyclemins = 30;
cyclecalc = 0.1/cyclemins *-1;

function Update () {
	transform.Rotate(0, 0, cyclecalc, Space.World);
}