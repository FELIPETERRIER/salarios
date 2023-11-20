import entradaDados from 'readline-sync';

console.log('Escolha uma das alternativas:');

console.log("1 - Listar salarios minimos de 2010 a 2020 ");
console.log("2 - Listar o indice de IPCA de 2010 a 2020");
console.log("3 - Comparação entre o percentual de aumento salarial de 2010 a 2020.");


let escolha = entradaDados.question("Digite o numero de sua escolha: ");
let salarioMinimo = [
    { ano: 2010, salario: 510.00 },
    { ano: 2011, salario: 545.00 },
    { ano: 2012, salario: 622.00 },
    { ano: 2013, salario: 678.00 },
    { ano: 2014, salario: 724.00 },
    { ano: 2015, salario: 788.00 },
    { ano: 2016, salario: 880.00 },
    { ano: 2017, salario: 937.00 },
    { ano: 2018, salario: 954.00 },
    { ano: 2019, salario: 998.00 },
    { ano: 2020, salario: 1045.00 },


]
let inflacao=[
    {ano:2010,ipca:5.91},
    {ano:2011,ipca:6.50},
    {ano:2012,ipca:6.84},
    {ano:2013,ipca:5.91},
    {ano:2014,ipca:6.41},
    {ano:2015,ipca:10.67},
    {ano:2016,ipca:6.29},
    {ano:2017,ipca:2.96},
    {ano:2018,ipca:3.75},
    {ano:2019,ipca:4.31},
    {ano:2020,ipca:4.52},
]






if (Number(escolha) == 1) {
    for (let i = 0; i < salarioMinimo.length; i++) {
        let ano = salarioMinimo[i].ano;

        let anoFormatado = "Ano:"
        anoFormatado = anoFormatado.padEnd(25, ".")

        let salario = salarioMinimo[i].salario;       
        salario = salario.toFixed(2).replace(".",",");

        let mensagemSalario = "Salário minimo:";
        mensagemSalario = mensagemSalario.padEnd(25, ".");



        console.log(anoFormatado + "" + ano);
        console.log(mensagemSalario + "R$" + salario + "\n");
    }
}
else if (Number(escolha) == 2) {
    for (let i = 0; i < inflacao.length; i++) {
        let ano = inflacao[i].ano;
        
        let anoFormatado = "Ano:"
        anoFormatado = anoFormatado.padEnd(25, ".")

        let ipca = inflacao[i].ipca;       
        ipca = ipca.toFixed(2).replace(".",",");

        let mensagemIpca = "Inflação IPCA:";
        mensagemIpca = mensagemIpca.padEnd(25, ".");
       



        console.log(anoFormatado + "" + ano);
        console.log(mensagemIpca + "" + ipca + "%\n");
    }
}
else if (Number(escolha) == 3) {
   
    
    for(let i = 0; i < salarioMinimo.length; i++){
        let ano = salarioMinimo[i].ano;
        let crescimentoFormatado;
        let crescimento;

        let anoFormatado = "Ano:"
        anoFormatado = anoFormatado.padEnd(25, ".")

        let salario = salarioMinimo[i].salario; 
              
       

        let mensagemSalario = "Salário minimo:";
        mensagemSalario = mensagemSalario.padEnd(25, ".");
           
        

        let mensagemCalculo ="Crescimento Salarial: "; 
        if(i > 0){
            let salarioAnterior = salarioMinimo[i-1].salario;
            let diferenca = salario - salarioAnterior;
            
            
            crescimento = (diferenca/salarioAnterior)*100;
            crescimentoFormatado = crescimento.toFixed(2).replace(".",",")+"%";
            crescimentoFormatado = crescimentoFormatado.padStart(8,".");
        }
        else{
            crescimentoFormatado = " - "
            crescimentoFormatado = crescimentoFormatado.padStart(5,".");
        }
       
        
        salario = salario.toFixed(2).replace(".",",");
        
        let ipca = inflacao[i].ipca;       
        ipca = ipca.toFixed(2).replace(".",",");

        let mensagemIpca = "Inflação IPCA:";
        mensagemIpca = mensagemIpca.padEnd(25, ".");
       



       
        console.log(anoFormatado+ "" +ano);
        console.log(mensagemSalario + "R$" + salario );
        console.log(mensagemCalculo+""+crescimentoFormatado);
        console.log(mensagemIpca+ "" +ipca + "%\n");

    }
}
else {
    console.log("Opção invalida");
}




