// let pabp= 70;
// let mtk = 82;
// let dpk = 77;

// let rata = (pabp+mtk+dpk)/3

// if(rata>=80 && nilai<=100){
//     maka = "A"
// }else if (rata<=80 && rata>=75){
//     maka = "B"
// }else if (rata<=75 && rata>=65){
//     maka = "C"
// }else if (rata<=65 && rata>=45){
//     maka = "D"
// }else if (rata<=65 && rata>=45){
//     maka = "E"
// }else{
//     maka  = "k"
// }

// console.log(`nilai yang di dapat adalah grade ${maka}`)

// // -------------
// const input = Number(prompt('Masukan kode pegawai (11 digit) : '))

// const golongan = Math.floor(input % 100000000000 / 10000000000)
// const tgl = Math.floor(input % 10000000000 / 100000000)
// const bln = Math.floor(input % 100000000 / 1000000)
// const thn = Math.floor(input % 1000000 / 100)
// const nn = Math.floor(input % 10000)

// if (golongan >=1 && golongan <= 4) {
//     let bulanName;
//     switch(bln) {
//         case 1: bulanName = 'JAN'; break;
//         case 2: bulanName = 'FEB'; break;
//         case 3: bulanName = 'MAR'; break;
//         case 4: bulanName = 'APR'; break;
//         case 5: bulanName = 'MEI'; break;
//         case 6: bulanName = 'JUN'; break;
//         case 7: bulanName = 'JUL'; break;
//         case 8: bulanName = 'AGU'; break;
//         case 9: bulanName = 'SEP'; break;
//         case 10: bulanName = 'OKT'; break;
//         case 11: bulanName = 'NOV'; break;
//         case 12: bulanName = 'DES'; break;
//         default: bulanName = 'Invalid';
//     } console.log(`${input} adalah seorang pegawai bergolongan ${golongan}, 
//     lahir pada tanggal ${tgl} ${bulanName} ${thn} dan bernomor urut ${3}`)
// } else {
//     console.log('Golongan tidak valid.')
// }

// // --------------
// let hh = 23;
// let mm = 59;
// let ss = 58;
// let hasil = ss + 1;
// if(hasil > 59) {
//     ss = 0;
//     mm = mm + 1;
//     if(mm > 59) {
//         mm = 0;
//         hh = hh + 1;
//             if(hh > 23) {
//                 ss = 0;
//                 mm = 0;
//                 hh = 0;
//             }
//     }
//     console.log(`${hh} Jam ${mm} Menit ${ss} Detik`)
// } else {
//     console.log(`${hh} Jam ${mm} Menit ${hasil} Detik`)
// }