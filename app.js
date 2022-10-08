var sec=00
var min=00
var interval

function start(){
    interval= setInterval(countdowm,100)
}
function pause(){
    clearInterval(interval)
 }
  function reset(){
    clearInterval(interval)
    sec=00
    min=00
    document.getElementById('countdown').innerText="00:00"
}

function countdowm(){
    sec++
    if(sec===60){
        min++
        sec=0
    }
    document.getElementById('countdown').innerText=min+':'+sec

    console.log('foi')
}

