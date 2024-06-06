Gold Challenge Binar Academy #44 Nama : Rio Triadi

lakukan langkah-langkah berikut :

1. npm install
2. npm start
3. Bikin database dengan nama (gold_binar)
4. npx knex migrate:latest
5. bikin user dari Postman, jalankan perintah dibawah untuk create user

endpoint : POST
url : http://localhost:3000/users/create
Body -> pilih raw -> pastekan kode dibawah

{
    "nama" : "suparadmin",
    "email" : "superadmin@admin.com",
    "password" : "admin2024"
}