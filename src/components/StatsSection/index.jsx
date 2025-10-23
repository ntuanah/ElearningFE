const StatsSection = () => {
  const stats = [
    { label: "Khóa học", value: "500+" },
    { label: "Học viên", value: "50K+" },
    { label: "Giáo viên", value: "200+" },
    { label: "Hoàn thành", value: "95%" },
  ];
  return (
    <div className="py-16 bg-white border-b border-red-200">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-4 gap-8 text-center">
          {stats.map((stats, index) => {
            return (
              <div key={index}>
                <div className="text-4xl font-bold text-red-500 mb-2">
                  {stats.value}
                </div>
                <p className="text-gray-600 font-medium">{stats.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
