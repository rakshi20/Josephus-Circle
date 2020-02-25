	
		var n = prompt("Enter the number of people in ring:");
		document.getElementById("mesg").textContent += n;
		var r = prompt("Enter the value of r:");
		var canvas = document.getElementById("myCanvas");
		var ctx = canvas.getContext("2d");
		// ctx.fillStyle = "#FF0000";
		// ctx.fillRect(0,0,150,75);
		var simbtn = document.getElementById("smlt");
		
			var i;
			var alive = [];
			var dead = [];
			for(i=0;i<n;i++)
			{
				alive.push(i+1);
			}
			if(n<50){
				var radius=250;
			}
            else if(n<100){
        		var radius=300;
             }
	        else {
          		var radius=350;
	         }
	        

	         function simconst(){
	         	draw(alive,dead,radius);
	         }
	         
			
		//	draw(alive,dead,radius);
			// console.log(alive.length);
				//alert(n+" "+r);
			        //draw();

			    function runsrt(){
					var tp;
				  function runsimlt(alive,dead){
					 	runcalc(alive,dead);
					 	draw(alive,dead,radius);

					 	// if(alive.length==1)
					 	// {
					 		
					 	// 	document.getElementById("mesg").textContent = "Safest position is " + alive[0] + " !";
					 	// }
					 	// console.log(alive.length);
					 };

					 	// for(let l=0;l<n-1;l++)
					 	// {
					 	// 	runwithtime(alive,dead);
					 	// }
					 	// clearInterval(tp);
					 	// function runwithtime(alive,dead){
					 	// 	runsimlt(alive,dead);
					 	// }
					 	runsimlt(alive,dead);
					 	if(alive.length==1)
					 	{
					 		document.getElementById("mesg").style.color = "#00b300";
					 		document.getElementById("mesg").textContent = "Safest position is " + alive[0] + " !";
					 	}
					 	else
					 	{
					 		document.getElementById("mesg").textContent = "Now at " + dead[dead.length-1] + " !";
					 		document.getElementById("mesg").style.color = "red";
					 	}
					 };
					  function recursiveDelay(functionToCall, executionsNumber, timeoutInSeconds) {
					    if (executionsNumber) { //exit condition

					        functionToCall();  // external function execution

					        setTimeout(
					            () => { recursiveDelay(functionToCall, executionsNumber - 1, timeoutInSeconds); //recursive call
					            }, 1000 * timeoutInSeconds);
					    }
					};

					 simbtn.addEventListener("click",function(){
					 		recursiveDelay(runsrt, n-1, 1)
					 	});
				

					 function runcalc(alive,dead){
					 		var q = r;
					 		var m=alive.length;
							 	while(q>m){
							 		q=q-m;
							 	}
							 	for(i=0;i<m;i++)
								{
									console.log(alive[i]);
								}
								console.log("------q="+q+"-----------");
							 	var j;
							 	var tbrm = alive[q-1];
							 	console.log("------tbrm="+tbrm+"-----------");
							 	dead.push(tbrm);
							 	for(j=q-1;j<m-1;j++)
								{
									alive[j]=alive[j+1];
								}
								alive.pop();
								//alive.splice(q-1,q);
								m=m-1;
							 	//alive.splice(q-1,q);
							 	for(i=0;i<m;i++)
								{
									console.log(alive[i]);
								}
								console.log("-----------------");

							 	var k = m - q + 1;
							 	var b = new Array(m);
							 	for(j=m-k;j<m;j++)
								{
									b[j-(m-k)]=alive[j];
								}
								for(j=m-k-1;j>=0;j--)
								{
									alive[j+k]=alive[j];
								}
								for(j=0;j<k;j++)
								{
									alive[j]=b[j];
								}
								for(j=0;j<m;j++)
								{
									console.log(alive[j]);
								}
								console.log("-----------------");
					 }

					 function draw(alive,dead,radius) {

					           //var nodes = [], 
					              var width = (radius * 2) + 50;
					           //   if(alive.length==n)
					           //   ctx.translate(radius, radius);
					              // var height = (radius * 2) + 50,
					          if(alive.length==n)
					          {
					          	for (var i=0; i<alive.length; i++) {
					           var angle = ((alive[i]-1) / (n/2)) * Math.PI; // Calculate the angle at which the element will be placed.
					                                                 // For a semicircle, we would use (i / n) * Math.PI.
					           var x = (radius * Math.cos(angle)) + (width/2) + (400-radius); // Calculate the x position of the element.
					           var y = (radius * Math.sin(angle)) + (width/2) + (400-radius); // Calculate the y position of the element.
					           // nodes.push({'id': i, 'x': x, 'y': y});
					           ctx.beginPath();
					           var rad = 8;
					 		   ctx.arc(x, y, rad, 0, 2 * Math.PI);
					 		   ctx.stroke();
					 		   ctx.fillStyle = "#ff3300";
			  				   ctx.fill();
			  				   ctx.font = (5/4)*rad+"px Fjalla One";
			  				   ctx.beginPath();
			        		ctx.fillStyle = "white";
			        		ctx.fillText((alive[i]), x-(rad/2), y+(rad/2));
			        		ctx.fill();
			        	}
					          }
					          else if(alive.length==1)
					          {
					          	var angle = ((alive[0]-1) / (n/2)) * Math.PI; // Calculate the angle at which the element will be placed.
					                                                 // For a semicircle, we would use (i / n) * Math.PI.
					           var x = (radius * Math.cos(angle)) + (width/2) + (400-radius); // Calculate the x position of the element.
					           var y = (radius * Math.sin(angle)) + (width/2) + (400-radius); // Calculate the y position of the element.
					           // nodes.push({'id': i, 'x': x, 'y': y});
					           ctx.beginPath();
					           var rad = 8;
					 		   ctx.arc(x, y, rad, 0, 2 * Math.PI);
					 		   ctx.stroke();
					 		   ctx.fillStyle = "#00e600";
			  				   ctx.fill();
			  				   ctx.font = (5/4)*rad+"px Fjalla One";
			  				   ctx.beginPath();
			        		ctx.fillStyle = "white";
			        		ctx.fillText((alive[0]), x-(rad/2), y+(rad/2));
			        		ctx.fill();
					          }
					          for (var i=0; i<dead.length; i++) {
					           var angle = ((dead[i]-1) / (n/2)) * Math.PI; // Calculate the angle at which the element will be placed.
					                                                 // For a semicircle, we would use (i / n) * Math.PI.
					           var x = (radius * Math.cos(angle)) + (width/2) + (400-radius) ; // Calculate the x position of the element.
					           var y = (radius * Math.sin(angle)) + (width/2) + (400-radius) ; // Calculate the y position of the element.
					           // nodes.push({'id': i, 'x': x, 'y': y});
					           ctx.beginPath();
					           var rad = 8;
					 		   ctx.arc(x, y, rad, 0, 2 * Math.PI);
					 		   ctx.stroke();
					 		   ctx.fillStyle = "#c2c2d6";
			  				   ctx.fill();
			  				   ctx.font = (5/4)*rad+"px Fjalla One";
			  				   ctx.beginPath();
			        		ctx.fillStyle = "white";
			        		ctx.fillText((dead[i]), x-(rad/2), y+(rad/2));
			        		ctx.fill();
					          }
					          // return nodes;
					        };		