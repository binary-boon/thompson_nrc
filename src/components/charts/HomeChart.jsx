"use client"

import { useRef, useEffect } from "react";









export default function HomeChart() {

    const chartRef=useRef(null);

    useEffect(()=>{
        if (chartRef.current){
        if (chartRef.current.chart){
            chartRef.current.chart.destroy()
        }

        const context = chartRef.current.getContext("2d");

        const newChart = new Chart(context,{
            type:"line",
            
            data:{
                
                labels:["Jan-Feb" ,"March-April","May-June","July-August","Sept-Oct","Nov-Dec"],
                  
                    datasets:[{
                        label:"Revenue 2023-2024",
                        data: [54464, 67143, 93556, 150151,176543 ,229617],
                        fill:false,
                        borderColor: ["rgb(75, 192, 192)"],
                    backgroundColor: [ "rgb(0,48,73)"],
                    borderWidth:[6],
                    
    
                   
    
            },
            
            
            {
                label:"Expenditures 2023-2024",
                data: [23897 , 25123,27887,32111,46818 , 50954],
                fill:false,
                borderColor: ["rgb(242, 27, 63)"],
                borderWidth:[6],
                font: {
                    size: 24
                }
    
            // backgroundColor: [ "rgb(95,48,75)"],

            } ],
            
           
                    
    
            },
    
            options:{

                responsive:true,

                interaction: {
                    intersect: true,
                    mode: 'index',
                  },
    
                  scales: {
                    yAxes: [{
                        ticks: {
                            fontSize: 18,
                            fontStyle: 'bold',
                            callback: function(value, index, values) {
                                return value.toLocaleString("en-US",{style:"currency",minimumFractionDigits:0,maximumFractionDigits:0, currency:"USD"});}
                        },
                    }],

                    xAxes: [{
                        ticks: {
                            fontSize: 18,
                            fontStyle: 'bold',
                            
                        },
                    }],

                    
                },
    
                y:{
                    beginAtZero:true
                },

                legend:{
                    labels:{
                        fontStyle: 'bold',
                    }
                }

                
            },

            plugins: {
                deferred: {
                  xOffset: 150,   // defer until 150px of the canvas width are inside the viewport
                  yOffset: '50%', // defer until 50% of the canvas height are inside the viewport
                  delay: 500      // delay of 500 ms after the canvas is considered inside the viewport
                }
              }
        })


    
    
    }

        

    },[]);


  

    



    return(<div className="mb-28 ml-72 mt-9" style={{position:"relative",display:"flex",justifyContent:"center",width:"60vw",alignContent:"center", height:"80vh"}}>

        <canvas ref={chartRef}/>

    </div>);
}