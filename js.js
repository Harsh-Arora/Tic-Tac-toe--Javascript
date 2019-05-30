var count = 0 ;

function work(box){
	var boxx = document.getElementById(box).innerHTML;

	var boxy = String(boxx);

	if(boxy=="")
	{
		document.getElementById(box).innerHTML = "X";
		count++;
	}
	else
	{
		alert("Box is already used!")
		return;
	}

	var check = winwin();

	if(check === "user")
	{
		document.getElementById('res').innerHTML = "You Win!";
		document.getElementById('again').innerHTML = "Play Again?"
		return;
	}
	else if(check === "comp")
	{
		document.getElementById('res').innerHTML = "Computer Wins!";
		document.getElementById('again').innerHTML = "Play Again?"
		return;
	}

	if(count==5)
	{
		document.getElementById('res').innerHTML = "Match Draw!";
		document.getElementById('again').innerHTML = "Play Again?"
		return;
	}

	for(var i=1;i>0;i++)
	{
		cc = Math.floor(Math.random() * 9) + 1;
		var cboxno = "box"+cc;
		
		var cboxx = document.getElementById(cboxno).innerHTML;
		var cbox = String(cboxx);

		if(cbox=="")
		{
			document.getElementById(cboxno).innerHTML = "O";
			break;
		}
	}

	var check = winwin();

	if(check === "user")
	{
		document.getElementById('res').innerHTML = "You Win!";
		document.getElementById('again').innerHTML = "Play Again?"
		return;
	}
	else if(check === "comp")
	{
		document.getElementById('res').innerHTML = "Computer Wins!";
		document.getElementById('again').innerHTML = "Play Again?"
		return;
	}

	
}



function winwin(){
	var box11 = document.getElementById('box1').innerHTML;
	box11 = ""+box11;
	var box12 = String(document.getElementById('box2').innerHTML);
	box12 = ""+box12;
	var box13 = String(document.getElementById('box3').innerHTML);
	box13 = ""+box13;
	var box14 = String(document.getElementById('box4').innerHTML);
	box14 = ""+box14;
	var box15 = String(document.getElementById('box5').innerHTML);
	box15 = ""+box15;
	var box16 = String(document.getElementById('box6').innerHTML);
	box16 = ""+box16;
	var box17 = String(document.getElementById('box7').innerHTML);
	box17 = ""+box17;
	var box18 = String(document.getElementById('box8').innerHTML);
	box18 = ""+box18;
	var box19 = String(document.getElementById('box9').innerHTML);
	box19 = ""+box19;

	if(box11=="X" && box12=="X" && box13=="X" || box14=="X" && box15=="X" && box16=="X" || box17=="X" && box18=="X" && box19=="X" || box11=="X" && box14=="X" && box17=="X" || box12=="X" && box15=="X" && box18=="X" || box13=="X" && box16=="X" && box19=="X" || box11=="X" && box15=="X" && box19=="X" || box17=="X" && box15=="X" && box13=="X")
		{	
			return "user";
		}

	if(box11=="O" && box12=="O" && box13=="O" || box14=="O" && box15=="O" && box16=="O" || box17=="O" && box18=="O" && box19=="O" || box11=="O" && box14=="O" && box17=="O" || box12=="O" && box15=="O" && box18=="O" || box13=="O" && box16=="O" && box19=="O" || box11=="O" && box15=="O" && box19=="O" || box17=="O" && box15=="O" && box13=="O")
		{
			return "comp";
		}
}

function playAgain(){
	count = 0;
	document.getElementById('box1').innerHTML = "";
	document.getElementById('box2').innerHTML = "";
	document.getElementById('box3').innerHTML = "";
	document.getElementById('box4').innerHTML = "";
	document.getElementById('box5').innerHTML = "";
	document.getElementById('box6').innerHTML = "";
	document.getElementById('box7').innerHTML = "";
	document.getElementById('box8').innerHTML = "";
	document.getElementById('box9').innerHTML = "";

	document.getElementById('res').innerHTML = "";
	document.getElementById('again').innerHTML = "";
}