var listaDePeca=("filtro de ar","Motor","Armortecedor")
    if (listaDePeca < 10){
        console.log("E possivel cadastrar mais peças!")
    }else{
        console.log ("Não tem mais espaço na lista.")
    }
    
    let peso = 50;
    if (peso<100){
        console.log("A peça deve pesar no minimo 100g")
    }else{
        console.log("A peça possui peso adequado")
    }
    
    let nomePeca ="Disco de freio"
    if (nomePeca.length > 3){ 
        console.log("Nome de peça esta adequado pra o cadastro!")
    }else if(nomePeca== 0){
        console.log("o nome da peça não pode esta vazio!!")
    }else{
        console.log("O nome deve ter mais de 3 caracteres,digite um nome adequado")
    }