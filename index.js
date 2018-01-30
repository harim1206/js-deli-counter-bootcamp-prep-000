
var counter = 1

function takeANumber(lineArr){

  lineArr.push(counter)

  //array [1]

  counter++

  return `Welcome, You are number ${lineArr[lineArr.length-1]} in line.`

}


function nowServing(lineArr){

  if(lineArr.length === 0){

    return `There is nobody waiting to be served!`

  }else{
    var newCust = lineArr.shift()
    //newCust will be a integer at index 0


    return `Currently serving ${newCust}.`
  }

}

function currentLine(lineArr){

  var str = ""

  if(lineArr.length===0){

    return `The line is currently empty.`
  }else{
    for(var i=0; i<lineArr.length; i++){
      if(i===lineArr.length-1){
          str+= `${i+1}. ${lineArr[i]}`
      }else{
        str+= `${i+1}. ${lineArr[i]}, `
      }
    }

    return `The line is currently: ${str}`
  }
}
