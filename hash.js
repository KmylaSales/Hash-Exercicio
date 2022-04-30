
/**
 * Vi que existem algumas funções hash diferentes, porém não obtive sucesso ao implementar.
 * Também li que conseguimos criptografar com hash e achei muito interessante!!!
 * Usei a mesma função, mas implementando o meu array e utilizando "length==2" e "lenght%5+2"
 */

//  let arrayHash = new Array();
//  // Egito, Brasil, Brasil, Italia
//  let countrys = ["Egito", "Brasil", "Mexico", "Italia"];
 
 
//  //console.log("Criando o hash");
 
//  // funcao de espalhamento para array
//  function hash(countrys){
//        hashmap = countrys.length==2;
 
//        // colisao
//        while(arrayHash[hashmap] !== undefined){
//              hashmap++;
//        }
 
//        //console.log("hashmap:"+hashmap)
//        return hashmap; 
//  }
 
 
//  countrys.forEach(function(value, index, list){
//        //console.log("");
//        //console.log(value, index);
//        let index_hash = hash(value);
//        arrayHash[index_hash] = value;
//        //console.log(arrayHash);
//  })
 
//  // [, , , Egito, Brasil, Mexico, Italia]
//  console.log("Encontrando elemento atraves do hash \n\n");
 
 
//  // funcao de busca de um index
//  function findHash(countrys){
//        hashmap = countrys.length==2;
 
//        //colisao
//        while(arrayHash[hashmap] !== countrys){
//              hashmap++;
//        }
//        console.log(`hashmap encontrado: ${countrys} -> ${hashmap}`);
//        return hashmap;
//  }
 

 
//  countrys.forEach(function(value, index, list){
//        index = findHash(value);
//        console.log(arrayHash[index]);
//  })




// Segunda opcao

let arrayHash = new Array();
 // Cachorro, Gato, Passaro, Cobra
 let animals = ["Cachorro", "Gato", "Passaro", "Cobra"];
 
 
 //console.log("Criando o hash");
 
 // funcao de espalhamento para array
 function hash(animals){
       hashmap = animals.length%5+2;
 
       // colisao
       while(arrayHash[hashmap] !== undefined){
             hashmap++;
       }
 
       //console.log("hashmap:"+hashmap)
       return hashmap; 
 }
 
 
 animals.forEach(function(value, index, list){
       //console.log("");
       //console.log(value, index);
       let index_hash = hash(value);
       arrayHash[index_hash] = value;
       //console.log(arrayHash);
 })
 
 // [, , , Cachorro, Gato, Passaro, Cobra]
 console.log("Encontrando elemento atraves do hash \n\n");
 
 
 // funcao de busca de um index
 function findHash(animals){
       hashmap = animals.length%5+2;
 
       //colisao
       while(arrayHash[hashmap] !== animals){
             hashmap++;
       }
       console.log(`hashmap encontrado: ${animals} -> ${hashmap}`);
       return hashmap;
 }
 

 
 animals.forEach(function(value, index, list){
       index = findHash(value);
       console.log(arrayHash[index]);
 })