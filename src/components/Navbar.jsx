export default function Navbar({ onGoHome, onOpenAddModal, currentCategory, onSelectCategory }) {
  return (
    <nav className="nav">
      <span className="lg" onClick={onGoHome}>
        setup<span>.id</span>
      </span>
      <a href="#explore" onClick={onGoHome} style={{ cursor: 'pointer' }}>
        Explore
      </a>
      <a href="#kategori" onClick={() => onSelectCategory('Semua')} style={{ cursor: 'pointer' }}>
        Kategori
      </a>
      <a 
        href="#setup-gue" 
        onClick={(e) => {
          e.preventDefault();
          alert('Fitur Setupku: Menampilkan setup yang kamu buat!');
        }} 
        style={{ cursor: 'pointer' }}
      >
        Setupku
      </a>
      <button className="btn" type="button" onClick={onOpenAddModal}>
        + Pamerin setup
      </button>
    </nav>
  );
}
