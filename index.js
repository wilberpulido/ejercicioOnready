const concesionario=[
    {
    marca:'Peugeot',
    modelo: '206',
    puertas: 4,
    precio: 200000.00,
    },
    {
    marca:'Honda',
    modelo: 'Titan',
    cilindrada: '125c',
    precio: 60000.00,
    },
    {
    marca:'Peugeot',
    modelo:'208',
    puertas: 5,
    precio: 250000.00,
    },
    {
    marca:'Yamaha',
    modelo:'YBR',
    cilindrada: '160c',
    precio: 80500.50,
    }
];
let vehiculoCaro;
let vehiculoBarato;
let precioMax=0;
let precioMin=0;
let letraY=[]; //Un array para agregar todos los modelos que tiene Y.
let ordenar=[];

const salida = concesionario.map(element=>{
    //Condicionales para conseguir el vehiculo mas costoso
  if (element.precio > precioMax) {
      precioMax = element.precio;
      vehiculoCaro = `${element.marca} ${element.modelo}`;
  }
  //Condicionales para conseguir el vehiculo mas barato
  if (element.precio < precioMin || precioMin == 0) {
      precioMin = element.precio;
      vehiculoBarato = `${element.marca} ${element.modelo}`;
}
    //Ciclo para iterar entre cada letra de los modelos buscando Y.
  for(let i = 0 ; i<element.modelo.length ; i++ ) {
    if(element.modelo[i]=='Y'){
        letraY.push(`${element.marca} ${element.modelo} ${element.precio}`)
    }
  }
//Condicional para regresar la lista de vehiculo diferenciando entre si tiene una propiedad puerta o no.
  if (element.puertas){
    return `Marca: ${element.marca} // Modelo: ${element.modelo} // Puertas: ${element.puertas} // Precio: $${(element.precio).toLocaleString('de-DE')}`;
  }else{
    return `Marca: ${element.marca} // Modelo: ${element.modelo} // Cilindrada: ${element.cilindrada} // Precio: $${(element.precio).toLocaleString('de-DE')}`;
  }
})

for (let i = 0; i < salida.length; i++) {
    console.log(salida[i]);
}
console.log('=============================');

console.log(`Vehículo más caro: ${vehiculoCaro} \nVehículo más barato: ${vehiculoBarato}`);
//Para mostrar todas las palabras que tenga Y, sino importa si es mayuscula o minuscula se puede aplicar
//metodo .toLowerCase y pasarlo todo a minusculo y comparar con 'y'
  for (let i = 0; i < letraY.length; i++) {
    console.log(`Vehículo que contiene en el modelo la letra 'Y': ${letraY[i]}`);
  }
  console.log('=============================');

  //extra//
  //Copio el array original para evitar modificar el array original
  ordenar = [...concesionario];
//.sort modifica el objeto original, lo aplicamos y usamamos para imprimir.
  ordenar.sort((a,b)=>{
      return b.precio - a.precio;
  })
  //Muestro por consola.
  console.log('Vehículo ordenados por precio de mayor a menor: ');
  for(let i=0;i < ordenar.length ; i++){
      console.log(`${ordenar[i].marca} ${ordenar[i].modelo}`);
  }