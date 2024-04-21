// place files you want to import through the `$lib` alias in this folder.
export function validaPrazo(data: string){
    
    const dataRemove = data.replaceAll('-','');
    data = dataRemove;

    if (data.length !== 8) {
        return false;
    }
    const year = data.slice(0, 4);
    const month = data.slice(4, 6);
    const day = data.slice(6);

    if(isNaN(parseInt(year,10)) || isNaN(parseInt(month,10)) || isNaN(parseInt(day,10)) || parseInt(month, 10) < 1 || parseInt(month, 10) > 12 || parseInt(day, 10) < 1 || parseInt(day, 10) > 31){
        return false
    }

    const dataAtual = new Date();
    /* @ts-ignore */
    const dataV = new Date(year,month,day)
    if(dataV < dataAtual){
        return false
    }
    return true
}