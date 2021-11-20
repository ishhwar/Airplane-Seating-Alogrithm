const readline = require('readline');

const read = readline.createInterface({
	  input: process.stdin,
	  output: process.stdout
});

read.question('Enter the 2d array :',(a)=>
{
    var array=JSON.parse(a);
    var row=Math.max.apply(Math, array.map(e=>e[0]));
    var col=Math.max.apply(Math, array.map(e=>e[1]));

	  var seat=replacewithMAW(array);
	
	  var result={};
	  result=ChangeWithNumber("A",1,seat,col,row);
	  result=ChangeWithNumber("W",result.counter,result.seat,col,row);
	  result=ChangeWithNumber("M",result.counter,result.seat,col,row);
	  seat=result.seat;
      var string="";

      for(var i=0;i<col;i++)
      {
        for(var j=0;j<row;j++){
            if(seat[j]==null||seat[j][i]==null){
              let temp=seat[j][0].length;
              while(temp>0)
              {
                   string+="- ";
                   --temp;
              }
              string+=" , "
                continue;
            }
            for(k=0;k<seat[j][i].length;k++){
                string+=(seat[j][i][k]+" ");
            }
            string+="  ,  ";
        }
        string+="\n"
    }
   console.log(string);
read.close();
});
function replacewithMAW(array){
	var seat=[];
	for(var i=0;i<array.length;i++)
	  	seat.push(Array(array[i][1]).fill().map(()=>Array(array[i][0]).fill("M")));
	
	for(var i=0;i<seat.length;i++){
		for(var j=0;j<seat[i].length;j++){  
	  		seat[i][j][0]="A";
			seat[i][j][seat[i][j].length-1]="A";
		}
	  }

	  for(var i=0;i<seat[0].length;i++)
	  	seat[0][i][0]="W";
	  for(var i=0;i<seat[seat.length-1].length;i++)
		seat[seat.length-1][i][(seat[seat.length-1][i].length)-1]="W";
	  
	return seat;
}
function ChangeWithNumber(val,counter,seat,col,row){
	for(var i=0;i<col;i++){
		for(var j=0;j<row;j++){
			if(seat[j]==null||seat[j][i]==null)
				continue;
			for(k=0;k<seat[j][i].length;k++){
			        if(seat[j]!=null&& seat[j][i]!=null && seat[j][i][k]===val){
			 	  seat[j][i][k]=counter;
				  counter++;
				}
			}
		}

	}
	return {seat:seat,counter:counter};
}