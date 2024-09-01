// Contoh JavaScript: Menambahkan log klik untuk setiap link (Opsional)
document.querySelectorAll('.link').forEach(link => {
    link.addEventListener('click', () => {
        console.log(`Link ${link.textContent} diklik`);
    });
});
