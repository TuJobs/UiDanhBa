function Ptb2(a, b, c){
	let delta = (b*b) - 4*a*c;
	if (delta==0)
	{
		console.log("phuong trinh co nghiem kep x1 = x2 = " +(-b/2/a) +" "); 
	}
	else
	{
 		if (delta>0)
 		{
 			console.log("phuong trinh co nghiem x1 = "+ ((-b-Math.sqrt(delta))/2/a)+", x2 = "+ ((-b+Math.sqrt(delta))/2/a)+" ");
 		}
 		else
 		{
 			console.log("phuong trinh vo nghiem");
 		}
	}
}
Ptb2(1,2,1);