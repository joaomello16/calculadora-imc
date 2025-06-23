function add(){
    const masc = document.getElementById('masc')
    const fem = document.getElementById('fem')

    const question1 = document.getElementById('peso')
    const question2 = document.getElementById('altura')

    
    const peso = question1.value
    const altura = question2.value

    
    console.log(peso)
    console.log(altura)

    const imc = peso/(altura*altura)
    console.log(imc)

    if(masc.checked){
        console.log('masculino')
    }else if(fem.checked){
        console.log('feminino')
    }
    question1.value = ''
    question2.value = ''
}