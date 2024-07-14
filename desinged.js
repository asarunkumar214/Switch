var bulb = 0;
function findbulb()
{
    if(bulb==0)
    {
        document.getElementById("rt").src="sr.jpeg";
        document.getElementById("rt").src="mrd.jpeg";
        bulb=1;

    }
    else{document.getElementById("rt").src="mrd.jepg";
        document.getElementById("rt").src="sr.jpeg";
        bulb=0;

    }
}