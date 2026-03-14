// Dummy toast function – menampilkan pesan di console agar tidak error.
// Jika ingin notifikasi nyata, bisa diintegrasikan dengan komponen toast terpisah.
export function toast({ title, description, variant }: { title?: string; description?: string; variant?: "default" | "destructive" }) {
  console.log(`[TOAST] ${variant || "info"}: ${title} - ${description}`);
}
