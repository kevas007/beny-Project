const formatNumber = (value: number, locale: string | undefined) => {
    
    const formatNumber = Intl.NumberFormat(locale, {
        style: 'currency',
        currency: 'EUR',
    })
    return formatNumber.format(value)
}

export default formatNumber