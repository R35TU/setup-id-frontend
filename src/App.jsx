import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import SetupModal from './components/SetupModal';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import { initialSetups } from './data/initialSetups';

const API_BASE = 'http://localhost:3000/setups';

export default function App() {
  const [setups, setSetups] = useState(initialSetups);
  const [view, setView] = useState('home');
  const [selectedSetupId, setSelectedSetupId] = useState(7);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [isBackendConnected, setIsBackendConnected] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingSetup, setEditingSetup] = useState(null);

  const fetchSetupsFromBackend = async () => {
    try {
      const res = await fetch(API_BASE);
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          const formatted = data.map((item, idx) => ({
            ...item,
            tagColor: 
              item.category === 'Gaming' ? '#FF5FA2' :
              item.category === 'Cozy' ? '#C6FF3D' :
              item.category === 'Minimalist' ? '#3DE0FF' :
              item.category === 'Student' ? '#FF9A3D' : '#8B6CFF',
            bgColor: item.bgColor || (idx % 2 === 0 ? '#2A2140' : '#1F1B2E'),
            gridColumn: item.gridColumn || (idx === 0 || idx === 4 ? 'span 2' : 'auto'),
            gridRow: item.gridRow || (idx === 0 || idx === 2 ? 'span 2' : 'auto'),
            date: item.createdAt ? new Date(item.createdAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }) : '23 Nov 2026'
          }));
          setSetups(formatted);
          setIsBackendConnected(true);
        }
      }
    } catch {
      setIsBackendConnected(false);
    }
  };

  useEffect(() => {
    fetchSetupsFromBackend();
  }, []);

  const filteredSetups = setups.filter((item) => {
    const matchesCategory = selectedCategory === 'Semua' || 
      (selectedCategory === 'Dual Monitor' 
        ? item.title.toLowerCase().includes('dual') 
        : item.category.toLowerCase() === selectedCategory.toLowerCase());
    
    const matchesSearch = !searchQuery || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.owner.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.machine && item.machine.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (item.mouse && item.mouse.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const currentDetailSetup = setups.find((s) => s.id === selectedSetupId) || setups[0];
  const featuredSetup = setups.find((s) => s.id === 7) || setups[0];
  const similarSetups = setups.filter((s) => s.id !== (currentDetailSetup?.id || 0)).slice(0, 3);

  const handleGoHome = () => {
    setView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectSetup = (id) => {
    setSelectedSetupId(id);
    setView('detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenAdd = () => {
    setEditingSetup(null);
    setIsModalOpen(true);
  };

  const handleOpenEdit = (setup) => {
    setEditingSetup(setup);
    setIsModalOpen(true);
  };

  const handleSaveSetup = async (formData) => {
    try {
      if (editingSetup) {
        const res = await fetch(`${API_BASE}/${editingSetup.id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });

        if (res.ok) {
          const updated = await res.json();
          setSetups((prev) =>
            prev.map((item) => (item.id === editingSetup.id ? { ...item, ...updated } : item))
          );
          alert('Setup berhasil diperbarui!');
        } else {
          const errData = await res.json();
          alert(`Gagal mengubah data: ${Array.isArray(errData.message) ? errData.message.join(', ') : errData.message}`);
          return;
        }
      } else {
        const res = await fetch(API_BASE, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });

        if (res.ok) {
          const created = await res.json();
          const formattedNew = {
            ...created,
            tagColor: formData.category === 'Gaming' ? '#FF5FA2' : formData.category === 'Cozy' ? '#C6FF3D' : '#3DE0FF',
            bgColor: '#2B2147',
            gridColumn: 'auto',
            gridRow: 'auto',
            date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })
          };
          setSetups((prev) => [formattedNew, ...prev]);
          setSelectedSetupId(formattedNew.id);
          setView('detail');
          alert('Setup berhasil ditambahkan!');
        } else {
          const errData = await res.json();
          alert(`Gagal menambah data: ${Array.isArray(errData.message) ? errData.message.join(', ') : errData.message}`);
          return;
        }
      }
    } catch {
      if (editingSetup) {
        setSetups((prev) =>
          prev.map((item) => (item.id === editingSetup.id ? { ...item, ...formData } : item))
        );
      } else {
        const localNew = {
          id: Date.now(),
          date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }),
          tagColor: formData.category === 'Gaming' ? '#FF5FA2' : '#C6FF3D',
          bgColor: '#2B2147',
          gridColumn: 'auto',
          gridRow: 'auto',
          ...formData
        };
        setSetups((prev) => [localNew, ...prev]);
        setSelectedSetupId(localNew.id);
        setView('detail');
      }
      alert('Info: Perubahan disimpan di sesi browser (Backend sedang offline).');
    }
    setIsModalOpen(false);
  };

  const handleDeleteSetup = async (id) => {
    try {
      await fetch(`${API_BASE}/${id}`, {
        method: 'DELETE'
      });
      alert('Setup berhasil dihapus!');
    } catch {}
    setSetups((prev) => prev.filter((item) => item.id !== id));
    setView('home');
  };

  return (
    <div className="p">
      <div className="w">
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: isBackendConnected ? 'rgba(198, 255, 61, 0.1)' : 'rgba(255, 95, 162, 0.1)',
          border: `1px solid ${isBackendConnected ? '#C6FF3D' : '#FF5FA2'}`,
          borderRadius: '8px',
          padding: '6px 14px',
          margin: '12px 0',
          fontSize: '12px',
          fontWeight: 700
        }}>
          <span>
            {isBackendConnected 
              ? '🟢 Terhubung ke Backend NestJS API (http://localhost:3000/setups)' 
              : '🟡 Mode Demo Standalone (Jalankan "npm run start:dev" di backend untuk mengaktifkan API)'}
          </span>
          <button 
            type="button" 
            onClick={fetchSetupsFromBackend}
            style={{ 
              background: 'transparent', 
              border: 'none', 
              color: '#F4F1FF', 
              cursor: 'pointer', 
              textDecoration: 'underline',
              fontSize: '12px' 
            }}
          >
            Cek Koneksi
          </button>
        </div>

        <Navbar 
          onGoHome={handleGoHome} 
          onOpenAddModal={handleOpenAdd} 
          currentCategory={selectedCategory}
          onSelectCategory={(cat) => {
            setSelectedCategory(cat);
            setView('home');
          }}
        />

        {view === 'home' ? (
          <HomePage 
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            featuredSetup={featuredSetup}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            filteredSetups={filteredSetups}
            onSelectSetup={handleSelectSetup}
          />
        ) : (
          <DetailPage 
            setup={currentDetailSetup}
            onBack={handleGoHome}
            onEdit={handleOpenEdit}
            onDelete={handleDeleteSetup}
            similarSetups={similarSetups}
            onSelectSetup={handleSelectSetup}
          />
        )}
      </div>

      <SetupModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSaveSetup}
        initialData={editingSetup}
      />
    </div>
  );
}
