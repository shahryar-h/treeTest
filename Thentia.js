
// gets the info
fetch('/locate')
  .then((response) => {
    // lets assume the respons is in json
    return response.json()
  })
  .then((data) => {
    if(data.status != "in office"){
        fetch('/addsalt', {
        method: 'POST',
        body: "add Salt",
        })

        fetch('/run').then(response)
    }else{
        fetch('/run').then(response)
    }

  })
  .catch((err) => {
     console.log(err); // or some strategy
  })