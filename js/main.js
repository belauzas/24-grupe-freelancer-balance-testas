import {account} from './data.js';

const sortedMonths = account.sort((a, b) => (a.month > b.month) ? 1 : -1);
const menesiai = ["Sausis", "Vasaris", "Kovas", "Balandis", "Gegužė", "Birželis", "Liepa", "Rugpjūtis", "Rugsėjis", "Spalis", "Lapkritis", "Gruodis"];

var i;
for (i = 0; i < sortedMonths.length; i++) {
    sortedMonths[i].month = menesiai[i];
}

console.log(sortedMonths);