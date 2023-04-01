let p=fetch("https://parallelum.com.br/fipe/api/v1/carros/marcas")
p.then((response)=>{
      console.log(response.status)
      console.log(value1.ok)
      return response.json()
}).then((value2)=>{
console.log(value2)
}) 