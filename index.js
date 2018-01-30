
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
          str+= `${lineArr[i]}`
      }else{
        str+= `${lineArr[i]}, `
      }
    }

    return `The line is currently: ${str}`
    //The line is currently 4, 5, 6
    // 1. 4, 2. 5, 3. 6
  }
}
