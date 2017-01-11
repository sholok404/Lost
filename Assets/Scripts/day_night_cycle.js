private var cyclemins : float;
private var cyclecalc : float;

cyclemins = 15;
cyclecalc = 0.1/cyclemins *-1;

function Update () {
	transform.Rotate(0, 0, cyclecalc, Space.World);
}