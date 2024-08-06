export function getImage(key: 'usd'|'ngn'|'bitcoin'|'thai baht') {
    const image = {
        usd: require('../assets/images/us.png'),
        ngn: require('../assets/images/nigeria.png'),
        bitcoin: require('../assets/images/Bitcoin.png'),
        'thai baht': require('../assets/images/thailand.png'),
    }
    return image[key];
}

export function currencyMark(key: 'usd'|'ngn'|'bitcoin'|'thai baht') {
    const image = {
        usd: '$',
        ngn: 'NGN',
        bitcoin: 'BTC',
        'thai baht': 'TBT',
    }
    return image[key];
}