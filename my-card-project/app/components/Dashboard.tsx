export default function Dashboard() {
  const sections = [
    {
      id: 1,
      title: "STEPS",
      value: "10,234",
      target: "10,000",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      titleColor: "text-blue-600",
    },
    {
      id: 2,
      title: "STRENGTH",
      value: "60 min",
      target: "45 min",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      titleColor: "text-red-600",
    },
    {
      id: 3,
      title: "SLEEP",
      value: "7 hrs",
      target: "8 hrs",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      titleColor: "text-purple-600",
    },
    {
      id: 4,
      title: "NUTRITION",
      value: "2000 cal",
      target: "1800 cal",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
      titleColor: "text-emerald-600",
    },
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-slate-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from blue-600 via-emerald-500 to-teal-500 bg-clip-text text-transparent mb-2 text-center">
          Health Dashboard
        </h1>
        <p className="text-center bg-gradient-to-r from-blue-500 to-emerald-600 bg-clip-text text-transparent text-sm sm:text-base font-semibold mb-8 sm:mb-10 lg:mb-12">
          Track your daily wellness metrics
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {sections.map((section) => (
            <div
              key={section.id}
              className={`${section.bgColor} border-2 ${section.borderColor} rounded-xl shadow-md hover:shadow-lg transition-shadow p-4 sm:p-5 lg:p-6 flex flex-col items-center justify-center min-h-40 sm:min-h-48`}
            >
              <h3
                className={`text-xs sm:text-sm font-semi-bold ${section.titleColor} mb-2 sm:mb-3`}
              >
                {section.title}
              </h3>
              <p className="text-3xl sm:text-4xl lg:text-5l font-bold text-slate-900 mb-1">
                {section.value}
              </p>
              <p className="text-xs sm:text-sm text-gray-600">
                {`/${section.target}`}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
