export const formatcurrency=(value:number)=>{
    const formatoMoeda= new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency:'BRL'
    })

    return formatoMoeda.format(value)
}

export const formatDate=(date:any)=>{
    const dateFormat= new Intl.DateTimeFormat('pt-br',{
        dateStyle:"medium",
    })

    return dateFormat.format(date)
}
