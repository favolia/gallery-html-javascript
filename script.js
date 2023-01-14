// pertama, kita ambil dulu tag img nya dan kita simpan ke dalam variable gambar
const gambar = document.getElementById('gambar')

// kedua, kita buat array yang bernama "list" yang berisi 6 gambar
// ! ingat array dihitung berdasarkan index, index berawal dari 0, jika list dihitung berdasarkan index !
// ! maka list mempunyai 5 index, 0 1 2 3 4 5 = 6 !
const list = [
    // ! gambar ini mngambil dari folder 'src' bukan dari attribute "src" pada tag img !
    'src/gambar1.jpg',
    'src/gambar2.jpg',
    'src/gambar3.jpg',
    'src/gambar4.jpg',
    'src/gambar5.jpg',
    'src/gambar6.jpg'
]

// ketiga, kita membuat sebuah variable "i" dengan tipe data "integer/angka" 0
let i = 0

// keempat, kita mengambil attribute "src" dengan menggunakan "gambar.src" .src akan menunjuk ke attributenya dan
// attribute "src" diisi dengan gambar pertama pada "list" yaitu "list" index ke-0     // list[i]
// karna i berisi 0 maka list akan mengambil gambar yang berindex 0 yaitu 'src/gambar1.jpg'
// ini adalah nilai default nya agar attribute "src" tidak kosong
gambar.src = list[i]

// kelima, kita membuat fungsi "next" kode pengkodisian di dalam yaitu if else
function next() {

    // karna kode ini akan di jalankan ketika di klik, mari kita bahas apa maksud dari kode dibawah ini

    // line 34, terjemahan kode: jika i lebih besar daripada panjang list di kurang 1 atau sama dengan panjang list di kurang 1
    // true
    if (i >= list.length - 1) {
        // maka isi variable i dengan 0 dan isi attribute "src" dengan list index berdasarkan isi variable i
        i = 0
        gambar.src = list[i]
    } else {
        // jika kondisi "if" tidak terpenuhi maka tambahkan 1 setiap tombol diklik dan isi attribute "src" dengan list index berdasarkan isi variable i
        // false
        i++;
        gambar.src = list[i]
    }
}
// oke mungkin sebagian dari kalian bakal bingung.
// penjelasan fungsi "next()": jika user menekan tombol next maka jalankan kode di dalam fungsi "next()"
// yang dimana fungsi "next()" memiliki pengkondisian di dalamnya, jika kondisi pada "if" terpenuhi atau "true" maka jalankan kode dibawahnya
// kode yang dijalankan tidak termasuk yang di dalam "else".

// jika kondisi pada "if" tidak terpenuhi atau "false" maka jalankan perintah else dibawahnya ! jika sudah begini kode dibawah "if" tidak akan di eksekusi
// i++ akan menambahkan 1 setiap kali user meng-klik tombol next dan mengisi attribute src dengan list berdasarkan nilai i

// contoh:
// i = 0

// *klik pertama "i++" berarti i = 1, list[i = 1] berarti src="gambar1.jpg"
// *klik kedua "i++" berarti i = 2,  list[i = 2] berarti src="gambar2.jpg"

// list.length, .length adalah sebuah fungsi javascript yang menghitung panjang array
// beda dengan index, jika index dihitung dari 0, .length justru  dihitung dari 1
// yang berarti jika di terapkan pada "list" maka panjang arraynya adalah 6

// itu kok length nya di kurangi 1 ?
// biar dinamis aja, karna kita hanya bisa mengakses array menggunkan index
// array hanya bisa diakses dengan cara array[inde keberapa] // list[index keberapa]
// karena index di hitung dari 0 maka jika kita ingin mengakses isi "list" yang terakhir yaitu 'src/gambar6.jpg'
// maka kita akan melakukannya dengan cara list[5] 
// nah biar lebih dinamis kita pakai .length yang di kurangi 1 agar hasilnya 5 bukan 6, karena klo tidak dikurangi atau 6
// nilainya akan undefined atau tidak di ketahui, karna memang panjang array "list" hanya sampai 5 bukan 6
// 'src/gambar1.jpg' = index 0
// 'src/gambar2.jpg' = index 1
// 'src/gambar3.jpg' = index 2
// 'src/gambar4.jpg' = index 3
// 'src/gambar5.jpg' = index 4
// 'src/gambar6.jpg' = index 5

// ketika "if" terpenuhi yang artinya i bernilai lebih dari 5 = .length - 1
// maka isi i menjadi 0 kembali

// hampir sama dengan fungsi next tapi ini sebaliknya
function previous() {
    if (i <= 0) { // jika nilai i lebih kecil sama dengan 0, yang berarti nilainya -1 dan seterusnya
        i = list.length - 1 // maka isi i dengan nilai panjang array yaitu 6 - 1 = 5 berarti isi terakhir array yaitu 'src/gambar6.jpg'
        gambar.src = list[i] // dan isi attribute src pada tag img dengan gambar yang terakhir 
    } else { // jika nilai ! tidak ! i lebih kecil sama dengan 0, yang berarti nilainya ! bukan !  -1 dan seterusnya, atau angka/nilainya positif
        i--; // maka kurangi 1 setiap tombol previous di klik
        gambar.src = list[i] // dan isi attribute src pada tag img dengan i yang sudah di kurangi tiap kliknya
    }
}

// sorry kalo penjelasannya kurang jelas, saya bukan guru :'V
// atau dm aja di ig @defavolia