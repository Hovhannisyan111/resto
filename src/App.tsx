import React, { useState } from 'react';
import Header from './components/Header';
import MenuList from './components/Menu/MenuList';
import TableReservation from './components/Tables/TableReservation';

function App() {
  const [activeTab, setActiveTab] = useState<'menu' | 'tables'>('menu');

  return (
    <div className="min-h-screen bg-[#F8F5F0] font-sans">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main>
        {activeTab === 'menu' ? <MenuList /> : <TableReservation />}
      </main>
      
      <footer className="bg-[#7D2E46] text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} La Tavola Restaurant • 123 Main Street, City • (555) 123-4567
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;