import Hero from '../components/Hero';
import CategoryFilter from '../components/CategoryFilter';
import SetupBentoCard from '../components/SetupBentoCard';

export default function HomePage({
  searchQuery,
  setSearchQuery,
  featuredSetup,
  selectedCategory,
  setSelectedCategory,
  filteredSetups,
  onSelectSetup
}) {
  return (
    <>
      <Hero 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        featuredSetup={featuredSetup}
        onSelectSetup={onSelectSetup}
      />

      <CategoryFilter 
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <h2>Baru masuk</h2>

      {filteredSetups.length === 0 ? (
        <div style={{
          textAlign: 'center',
          padding: '48px',
          border: '2px dashed #3A3354',
          borderRadius: '16px',
          color: '#A9A3C2'
        }}>
          <p style={{ fontSize: '18px', margin: '0 0 12px' }}>
            Tidak ada setup yang cocok dengan pencarian / kategori.
          </p>
          <button 
            type="button"
            className="btn btn-sm" 
            style={{ background: '#C6FF3D' }}
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('Semua');
            }}
          >
            Reset Filter
          </button>
        </div>
      ) : (
        <div className="bento">
          {filteredSetups.map((setup) => (
            <SetupBentoCard 
              key={setup.id} 
              setup={setup} 
              onSelectSetup={onSelectSetup} 
            />
          ))}
        </div>
      )}

      <div style={{ textAlign: 'center', paddingTop: '48px' }}>
        <button 
          type="button" 
          className="btn" 
          style={{ background: '#F4F1FF' }}
          onClick={() => alert('Semua data setup terbaru sudah dimuat!')}
        >
          Muat lebih banyak
        </button>
      </div>
    </>
  );
}
