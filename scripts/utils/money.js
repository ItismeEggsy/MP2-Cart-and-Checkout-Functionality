export function formatCurrency(priceCents) {
    return (Math.round(priceCents) / 100).toFixed(2);
}

//20:21
export default formatCurrency;  