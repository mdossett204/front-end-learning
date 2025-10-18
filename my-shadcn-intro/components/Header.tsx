export default function Header() {
  return (
    <header className="bg-white border-b border-slate-200 shadow-sm sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-lg"></div>
          <h1 className="text-xl font-bold text-slate-900">Health Tracker</h1>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:block text-right">
            <p className="text-sm font-semibold text-slate-800">Demo User</p>
            <p className="text-xs text-slate-600">Premium Member</p>
          </div>
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full"></div>
        </div>
      </div>
    </header>
  );
}
