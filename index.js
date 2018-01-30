

function takeANumber(lineArr, custName){

  lineArr.push(custName)

  return `Welcome, ${custName}. You are number ${lineArr.length} in line.`

}


function nowServing(lineArr){

  if(lineArr.length === 0){
    return "There is nobody waiting to be served!"
  }else{
    //save first customer in line in variable cust
    var nextCust = lineArr[0]
    //remove nextCust from line
    lineArr.shift()

    return `Currently serving ${nextCust}.`
  }

}

function currentLine(lineArr){

  var str = ""

  if(lineArr.length === 0){
    return `The line is currently empty.`
  }else{
    for(var i=0; i<lineArr.length; i++){
      if(i === lineArr.length-1){
          str+= `${i+1}. ${lineArr[i]}`
      }else{
        str+= `${i+1}. ${lineArr[i]}, `
      }
    }
    return `The line is currently: ${str}`
  }
}
