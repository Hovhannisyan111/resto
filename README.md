# La Tavola Restaurant

A modern, responsive restaurant application built with React and TypeScript that showcases the menu and provides real-time table availability tracking.

## 🌟 Features

### Menu Management
- **Interactive Menu Display**: Browse through categorized menu items (Starters, Main Courses, Desserts, Drinks)
- **Beautiful Food Photography**: High-quality images from Pexels for each menu item
- **Responsive Design**: Optimized for all device sizes from mobile to desktop
- **Smooth Animations**: Hover effects and transitions for enhanced user experience

### Table Reservation System
- **Real-time Table Status**: View which tables are available or reserved by hour
- **Visual Table Layout**: Interactive table grid showing different table shapes and sizes
- **Time-based Availability**: Check availability for different hours (4 PM - 11 PM)
- **Reservation Details**: Hover over reserved tables to see customer information
- **Color-coded Status**: Green for available, red for reserved tables

### Design & User Experience
- **Premium Aesthetics**: Apple-level design with attention to detail
- **Elegant Typography**: Playfair Display for headings, Source Sans 3 for body text
- **Sophisticated Color Palette**: Burgundy (#7D2E46), Beige (#F2E8DC), and Gold (#D4AF37)
- **Smooth Navigation**: Fixed header with scroll-based styling changes
- **Micro-interactions**: Thoughtful hover states and transitions

## 🚀 Live Demo

Visit the live application: [https://tangerine-bublanina-05ae71.netlify.app](https://tangerine-bublanina-05ae71.netlify.app)

## 🛠️ Technology Stack

- **Frontend Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Deployment**: Netlify
- **Code Quality**: ESLint with TypeScript support

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.tsx                 # Navigation header with scroll effects
│   ├── Menu/
│   │   ├── MenuCategories.tsx     # Category filter buttons
│   │   ├── MenuItem.tsx           # Individual menu item card
│   │   └── MenuList.tsx           # Main menu container
│   └── Tables/
│       ├── TableGrid.tsx          # Table layout visualization
│       ├── TableItem.tsx          # Individual table component
│       ├── TableReservation.tsx   # Main reservation view
│       └── TimeSelector.tsx       # Hour selection component
├── data/
│   ├── menuData.ts               # Menu items and categories
│   └── tableData.ts              # Table layout and reservations
├── hooks/
│   ├── useMenu.ts                # Menu state management
│   └── useTables.ts              # Table availability logic
├── types/
│   └── index.ts                  # TypeScript type definitions
└── App.tsx                       # Main application component
```

## 🎨 Design Features

### Color System
- **Primary**: Burgundy (#7D2E46) - Elegant and sophisticated
- **Secondary**: Beige (#F2E8DC) - Warm and inviting
- **Accent**: Gold (#D4AF37) - Luxury highlighting

### Typography
- **Headings**: Playfair Display (serif) - Classic elegance
- **Body Text**: Source Sans 3 (sans-serif) - Modern readability

### Responsive Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🏃‍♂️ Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd la-tavola-restaurant
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📊 Data Structure

### Menu Items
Each menu item includes:
- Name and description
- Price
- Category classification
- High-quality food photography
- Unique identifier

### Table Management
Tables are defined with:
- Seating capacity (2-8 people)
- Shape (round, square, rectangle)
- Size classification
- Position coordinates
- Reservation status by hour

### Reservations
Reservation data includes:
- Customer name and phone
- Date and time slot
- Table assignment
- Unique booking ID

## 🎯 Key Features Explained

### Dynamic Table Visualization
- Tables are rendered with different shapes and sizes based on their properties
- Real-time status updates show availability throughout business hours
- Interactive hover effects reveal reservation details

### Smart Time Management
- Business hours: 4:00 PM - 11:00 PM
- Hourly time slots for precise availability tracking
- Automatic time normalization for edge cases

### Responsive Menu System
- Category-based filtering with smooth transitions
- Grid layout adapts to screen size
- Image optimization for fast loading

## 🔧 Customization

### Adding Menu Items
Edit `src/data/menuData.ts` to add new categories or items:

```typescript
{
  id: 'new-item',
  name: 'New Dish',
  description: 'Delicious new offering',
  price: 19.99,
  category: 'mains',
  image: 'https://images.pexels.com/...'
}
```

### Modifying Table Layout
Update `src/data/tableData.ts` to change table configuration:

```typescript
{
  id: 7,
  name: 'Table 7',
  seats: 4,
  shape: 'round',
  size: 'medium',
  position: { x: 40, y: 100 }
}
```

### Styling Customization
The design system is built with Tailwind CSS. Key colors are defined in `tailwind.config.js`:

```javascript
colors: {
  primary: '#7D2E46',    // Burgundy
  secondary: '#F2E8DC',  // Beige
  accent: '#D4AF37',     // Gold
}
```

## 📱 Mobile Optimization

- Touch-friendly interface elements
- Optimized image sizes for mobile networks
- Horizontal scrolling for time selection
- Responsive table grid layout
- Mobile-first design approach

## 🚀 Deployment

The application is configured for easy deployment to Netlify:

1. Build the project: `npm run build`
2. Deploy the `dist` folder to your hosting provider
3. Configure build settings: Build command `npm run build`, Publish directory `dist`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Food photography provided by [Pexels](https://pexels.com)
- Icons by [Lucide React](https://lucide.dev)
- Fonts from [Google Fonts](https://fonts.google.com)

---

Built with ❤️ for La Tavola Restaurant