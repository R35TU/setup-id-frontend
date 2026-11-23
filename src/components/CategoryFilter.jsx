const categories = [
  { name: 'Semua', bg: '#F4F1FF', color: '#0E0B16' },
  { name: 'Gaming', bg: '#FF5FA2', color: '#0E0B16' },
  { name: 'Cozy', bg: '#C6FF3D', color: '#0E0B16' },
  { name: 'Minimalist', bg: '#3DE0FF', color: '#0E0B16' },
  { name: 'Student', bg: '#FF9A3D', color: '#0E0B16' },
  { name: 'Programmer', bg: '#8B6CFF', color: '#0E0B16' },
  { name: 'Dual Monitor', bg: '#F4F1FF', color: '#0E0B16' },
  { name: 'Semua kategori →', bg: '#0E0B16', color: '#F4F1FF' }
];

export default function CategoryFilter({ selectedCategory, onSelectCategory }) {
  return (
    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', paddingBottom: '40px' }} id="kategori">
      {categories.map((cat) => {
        const isSelected = selectedCategory === cat.name;
        return (
          <button
            key={cat.name}
            type="button"
            className={`tag ${isSelected ? 'active' : ''}`}
            onClick={() => onSelectCategory(cat.name === 'Semua kategori →' ? 'Semua' : cat.name)}
            style={{
              background: cat.bg,
              color: cat.color,
              border: isSelected ? '2px solid #F4F1FF' : '2px solid #F4F1FF',
              boxShadow: isSelected ? '4px 4px 0 #F4F1FF' : 'none'
            }}
          >
            {cat.name}
          </button>
        );
      })}
    </div>
  );
}
