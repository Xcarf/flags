let a = 10;
console.log(a)   
var clicks = 0;   
//document.designMode = "on";


let AnnoyingButton = document.getElementById("testId");
console.log(AnnoyingButton)
AnnoyingButton.style.background="blue";

 

function TestFunc()
{
    AnnoyingButton.style.background="red";
    AnnoyingButton.innerHTML="Hehehehehehehehehe";
    alert("Why")
} 

function SearchLog(Valuue)
{
    let Boards = document.getElementsByClassName("Infoboard")
    for (let i = 0; i < Boards.length; i++) 
            if (Boards[i].id.toLowerCase().includes(Valuue.toLowerCase())){
                Boards[i].style.display = null; //   "inline-block";
            } else {
                Boards[i].style.display = "none";
            }
}


function ShowMore(Id)
    {
    let MoreInfoBoard = document.getElementById(Id + "mi")
    console.log("3")
    console.log(MoreInfoBoard)
    if(MoreInfoBoard.classList.contains("Disapear")){
        MoreInfoBoard.classList.remove("Disapear");
        MoreInfoBoard.classList.add("Apear");
        document.getElementById(Id).innerHTML = "-";
    } else {    
        MoreInfoBoard.classList.remove("Apear");
        MoreInfoBoard.classList.add("Disapear");
        document.getElementById(Id).innerHTML = "+";
    }}

        
    