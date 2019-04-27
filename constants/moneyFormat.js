export default moneyFormat = money => {
    return 'Rp' + money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");;
};
