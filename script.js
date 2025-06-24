function add(){
    const masc = document.getElementById('masc')
    const fem = document.getElementById('fem')

    const question1 = document.getElementById('peso')
    const question2 = document.getElementById('altura')

    
    const peso = question1.value
    const altura = question2.value


    const imc = peso/(altura*altura)
    const imcF = imc.toFixed(1)
    

    if(masc.checked){
        if(imc<18.5){
            const titulo = document.createElement('h4')
            const desc = document.createElement('p')
            const footer = document.querySelector('footer')
            footer.innerHTML = null 
            titulo.innerText = 'IMC: ' + imcF +" — Abaixo do peso"
            desc.innerText = 'Você está abaixo do peso ideal. Considere buscar orientação nutricional para avaliar sua alimentação e saúde geral.'
            footer.style.backgroundColor = 'yellow'
            footer.appendChild(titulo)
            footer.append(desc)
        }else if(imc > 18.5 && imc < 24.9 ){
            const titulo = document.createElement('h4')
            const desc = document.createElement('p')
            const footer = document.querySelector('footer')
            footer.innerHTML = null
            titulo.innerText = 'IMC: ' + imcF +" — Peso normal"
            desc.innerText = 'Parabéns! Seu peso está dentro da faixa ideal. Mantenha uma rotina saudável com boa alimentação e atividade física.'
            footer.style.backgroundColor = 'lightgreen'
            footer.appendChild(titulo)
            footer.append(desc)
        }else if(imc > 25 && imc < 29.9){
            const titulo = document.createElement('h4')
            const desc = document.createElement('p')
            const footer = document.querySelector('footer')
            footer.innerHTML = null
            titulo.innerText = 'IMC: ' + imcF +" — Sobrepeso"
            desc.innerText = 'Você está com sobrepeso. Pequenas mudanças nos hábitos diários podem ajudar a melhorar sua saúde e bem-estar.'
            footer.style.backgroundColor = 'orange'
            footer.appendChild(titulo)
            footer.append(desc)
        }else if(imc > 30 && imc < 34.9){
            const titulo = document.createElement('h4')
            const desc = document.createElement('p')
            const footer = document.querySelector('footer')
            footer.innerHTML = null
            titulo.innerText = 'IMC: ' + imcF +" — Obesidade grau I"
            desc.innerText = 'Você está na faixa de obesidade grau I. Procure apoio médico ou nutricional para ajustar sua rotina e prevenir riscos à saúde.'
            footer.style.backgroundColor = 'red'
            footer.appendChild(titulo)
            footer.append(desc)
        }else if(imc > 35 && imc < 39.9){
            const titulo = document.createElement('h4')
            const desc = document.createElement('p')
            const footer = document.querySelector('footer')
            footer.innerHTML = null
            titulo.innerText = 'IMC: ' + imcF +" — Obesidade grau II"
            desc.innerText = 'Este nível de obesidade exige atenção. Um acompanhamento profissional pode ajudar na redução de peso com segurança.'
            footer.style.backgroundColor = 'red'
            footer.appendChild(titulo)
            footer.append(desc)
        }else if(imc > 40){
            const titulo = document.createElement('h4')
            const desc = document.createElement('p')
            const footer = document.querySelector('footer')
            footer.innerHTML = null
            titulo.innerText = 'IMC: ' + imcF +" — Obesidade grau III"
            desc.innerText = 'Obesidade grave. É fundamental buscar ajuda médica especializada para cuidar da sua saúde de forma adequada e segura.'
            footer.style.backgroundColor = 'red'
            footer.appendChild(titulo)
            footer.append(desc)
        }
    }else if(fem.checked){
        if(imc<18.5){
            const titulo = document.createElement('h4')
            const desc = document.createElement('p')
            const footer = document.querySelector('footer')
            footer.innerHTML = null 
            titulo.innerText = 'IMC: ' + imcF +" — Abaixo do peso"
            desc.innerText = 'Você está abaixo do peso ideal. Considere buscar orientação nutricional para avaliar sua alimentação e saúde geral.'
            footer.style.backgroundColor = 'yellow'
            footer.appendChild(titulo)
            footer.append(desc)
        }else if(imc > 18.5 && imc < 24.9 ){
            const titulo = document.createElement('h4')
            const desc = document.createElement('p')
            const footer = document.querySelector('footer')
            footer.innerHTML = null
            titulo.innerText = 'IMC: ' + imcF +" — Peso normal"
            desc.innerText = 'Parabéns! Seu peso está dentro da faixa ideal. Mantenha uma rotina saudável com boa alimentação e atividade física.'
            footer.style.backgroundColor = 'lightgreen'
            footer.appendChild(titulo)
            footer.append(desc)
        }else if(imc > 25 && imc < 29.9){
            const titulo = document.createElement('h4')
            const desc = document.createElement('p')
            const footer = document.querySelector('footer')
            footer.innerHTML = null
            titulo.innerText = 'IMC: ' + imcF +" — Sobrepeso"
            desc.innerText = 'Você está com sobrepeso. Pequenas mudanças nos hábitos diários podem ajudar a melhorar sua saúde e bem-estar.'
            footer.style.backgroundColor = 'orange'
            footer.appendChild(titulo)
            footer.append(desc)
        }else if(imc > 30 && imc < 34.9){
            const titulo = document.createElement('h4')
            const desc = document.createElement('p')
            const footer = document.querySelector('footer')
            footer.innerHTML = null
            titulo.innerText = 'IMC: ' + imcF +" — Obesidade grau I"
            desc.innerText = 'Você está na faixa de obesidade grau I. Procure apoio médico ou nutricional para ajustar sua rotina e prevenir riscos à saúde.'
            footer.style.backgroundColor = 'red'
            footer.appendChild(titulo)
            footer.append(desc)
        }else if(imc > 35 && imc < 39.9){
            const titulo = document.createElement('h4')
            const desc = document.createElement('p')
            const footer = document.querySelector('footer')
            footer.innerHTML = null
            titulo.innerText = 'IMC: ' + imcF +" — Obesidade grau II"
            desc.innerText = 'Este nível de obesidade exige atenção. Um acompanhamento profissional pode ajudar na redução de peso com segurança.'
            footer.style.backgroundColor = 'red'
            footer.appendChild(titulo)
            footer.append(desc)
        }else if(imc > 40){
            const titulo = document.createElement('h4')
            const desc = document.createElement('p')
            const footer = document.querySelector('footer')
            footer.innerHTML = null
            titulo.innerText = 'IMC: ' + imcF +" — Obesidade grau III"
            desc.innerText = 'Obesidade grave. É fundamental buscar ajuda médica especializada para cuidar da sua saúde de forma adequada e segura.'
            footer.style.backgroundColor = 'red'
            footer.appendChild(titulo)
            footer.append(desc)
        }
    }
    question1.value = ''
    question2.value = ''

}


