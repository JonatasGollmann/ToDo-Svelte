export function formataData(data: string){
    
    const dataRemove = data.replaceAll('-','');
    data = dataRemove;

    
    const year = data.slice(0, 4);
    const month = data.slice(4, 6);
    const day = data.slice(6);

    const dataFormatada = `${day}-${month}-${year}`
    return dataFormatada
}

export function reformataData(data:string){
    const dataRemove = data.replaceAll('-','');
    data = dataRemove;


    const year = data.slice(4);
    const month = data.slice(2, 4);
    const day = data.slice(0,2);

    const dataFormatada = `${year}-${month}-${day}`
    return dataFormatada
}