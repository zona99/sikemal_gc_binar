Gold Challenge Binar Academy #44 Nama : Rio Triadi

lakukan langkah-langkah berikut :

1. Bikin database dengan nama (gold_binar)
2. npm install
3. npx knex migrate:latest
4. npm start


untuk membuat akun admin, silahkan tambahkan dengan cara menembak API dengan postmen.

endpoint : POST
url : http://localhost:3000/users/create
Body -> pilih raw -> pastekan kode dibawah

{
    "nama" : "suparadmin",
    "email" : "superadmin@admin.com",
    "password" : "admin2024"
}