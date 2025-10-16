export default function Home() {
  const cards = [
    {
      id: 1,
      title: "Mountain Vista",
      category: "Nature",
      description: "Beautiful mountain landscapes",
    },
    {
      id: 2,
      title: "Ocean Breeze",
      category: "Travel",
      description: "Coastal adventures await",
    },
    {
      id: 3,
      title: "Urban Life",
      category: "City",
      description: "Metropolitan experiences",
    },
    {
      id: 4,
      title: "Forest Trail",
      category: "Nature",
      description: "Hiking through ancient woods",
    },
    {
      id: 5,
      title: "Desert Sunset",
      category: "Travel",
      description: "Golden hour in the dunes",
    },
    {
      id: 6,
      title: "Winter Wonder",
      category: "Nature",
      description: "Snow-covered peaks",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 sm:p-6 lg:p-8">
      {/* 👆 RESPONSIVE SPACING: padding grows from 16px → 24px → 32px */}

      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-8 text-center">
          {/* 👆 RESPONSIVE TEXT: 30px → 36px → 48px as screen grows */}
          Responsive Card Grid
        </h1>

        {/* 🎯 GRID LAYOUT - Main card container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {/* 👆 GRID BREAKPOINTS:
               Mobile:  1 column  (grid-cols-1)
               Tablet:  2 columns (sm:grid-cols-2 at 640px+)
               Desktop: 3 columns (lg:grid-cols-3 at 1024px+)
               
               GAP (space between cards):
               Mobile:  16px (gap-4)
               Tablet:  24px (sm:gap-6)
               Desktop: 32px (lg:gap-8)
          */}

          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
              {/* 📦 FLEX EXAMPLE #1: Horizontal layout (Card Header) */}
              {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
              <div className="flex items-center justify-between p-4 sm:p-5 lg:p-6 bg-gradient-to-r from-blue-500 to-purple-600">
                {/* 👆 FLEX utilities:
                     flex            → Enable flexbox (default: row direction)
                     items-center    → Vertical alignment (center on cross-axis)
                     justify-between → Push items to opposite ends (main-axis)
                     
                     Result: "Nature" on left, "#1" on right, centered vertically
                */}
                <span className="text-white text-sm sm:text-base font-semibold">
                  {/* 👆 RESPONSIVE TEXT: 14px → 16px */}
                  {card.category}
                </span>
                <span className="text-white text-xs sm:text-sm">
                  {/* 👆 RESPONSIVE TEXT: 12px → 14px */}#{card.id}
                </span>
              </div>

              {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
              {/* 📦 FLEX EXAMPLE #2: Vertical layout (Card Content) */}
              {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
              <div className="flex flex-col p-4 sm:p-5 lg:p-6">
                {/* 👆 FLEX utilities:
                     flex      → Enable flexbox
                     flex-col  → Stack items vertically (column direction)
                     
                     This creates: Title → Description → Buttons (stacked)
                */}

                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-800 mb-2 sm:mb-3">
                  {/* 👆 RESPONSIVE: 18px → 20px → 24px */}
                  {card.title}
                </h3>

                <p className="text-slate-600 text-sm sm:text-base mb-4 flex-grow">
                  {/* 👆 flex-grow: Expands to fill available space
                       This pushes buttons to the bottom even if text is short!
                  */}
                  {card.description}
                </p>

                {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
                {/* 📦 FLEX EXAMPLE #3: Responsive direction change */}
                {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  {/* 👆 RESPONSIVE DIRECTION:
                       Mobile:  flex-col (buttons stacked vertically)
                       Tablet+: sm:flex-row (buttons side-by-side horizontally)
                       
                       gap-2 / sm:gap-3 → Space between buttons (8px → 12px)
                  */}

                  <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors text-sm sm:text-base">
                    {/* 👆 flex-1: Each button takes equal width in the flex container */}
                    View
                  </button>
                  <button className="flex-1 bg-slate-200 hover:bg-slate-300 text-slate-700 py-2 px-4 rounded-lg transition-colors text-sm sm:text-base">
                    Share
                  </button>
                  <button className="flex-1 bg-slate-200 hover:bg-slate-300 text-slate-700 py-2 px-4 rounded-lg transition-colors text-sm sm:text-base">
                    Like
                  </button>
                </div>
              </div>

              {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
              {/* 🎯 GRID EXAMPLE: Fixed 3-column layout (Card Footer) */}
              {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
              <div className="grid grid-cols-3 border-t border-slate-200">
                {/* 👆 GRID utilities:
                     grid         → Enable CSS Grid
                     grid-cols-3  → Always 3 equal-width columns (no breakpoints)
                     
                     Grid is perfect here because we want 3 equal columns
                */}

                {/* Each stat uses FLEX inside GRID cell for vertical centering */}
                <div className="flex flex-col items-center justify-center p-3 sm:p-4 border-r border-slate-200">
                  {/* 👆 NESTED FLEX:
                       flex-col        → Stack label and number vertically
                       items-center    → Center horizontally
                       justify-center  → Center vertically
                  */}
                  <span className="text-xs sm:text-sm text-slate-500">
                    Likes
                  </span>
                  <span className="text-base sm:text-lg font-bold text-slate-800">
                    124
                  </span>
                </div>

                <div className="flex flex-col items-center justify-center p-3 sm:p-4 border-r border-slate-200">
                  <span className="text-xs sm:text-sm text-slate-500">
                    Views
                  </span>
                  <span className="text-base sm:text-lg font-bold text-slate-800">
                    1.2k
                  </span>
                </div>

                <div className="flex flex-col items-center justify-center p-3 sm:p-4">
                  <span className="text-xs sm:text-sm text-slate-500">
                    Shares
                  </span>
                  <span className="text-base sm:text-lg font-bold text-slate-800">
                    45
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   📚 KEY TAKEAWAYS:
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   
   1. FLEX vs GRID:
      • Flex → 1D layouts (row OR column)
      • Grid → 2D layouts (rows AND columns)
   
   2. FLEX PATTERNS:
      • flex items-center justify-between  → Spread items horizontally
      • flex flex-col                      → Stack items vertically
      • flex-grow                          → Fill available space
      • flex-1                             → Equal width items
   
   3. GRID PATTERNS:
      • grid grid-cols-3                   → Fixed columns
      • grid grid-cols-1 sm:grid-cols-2    → Responsive columns
   
   4. RESPONSIVE BREAKPOINTS:
      • sm: (640px)  → Tablets
      • md: (768px)  → Medium tablets
      • lg: (1024px) → Laptops
      • xl: (1280px) → Desktops
   
   5. MOBILE-FIRST:
      • Base styles = mobile
      • Prefixes override at larger screens
      • Example: p-4 sm:p-6 lg:p-8
   
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
