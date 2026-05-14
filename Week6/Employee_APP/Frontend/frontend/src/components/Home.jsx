function Home() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-slate-100 to-indigo-100 flex justify-center items-center p-6">

      {/* Main Dashboard Card */}
      <div className="bg-white/80 backdrop-blur-md shadow-2xl rounded-3xl p-12 w-full max-w-5xl border border-white">

        {/* Decorative Top Circle */}
        <div className="w-24 h-24 bg-blue-500 rounded-full mx-auto flex items-center justify-center shadow-lg mb-8">

          <span className="text-5xl text-white">
            👨‍💼
          </span>
        </div>


        {/* Dashboard Heading */}
        <h1 className="text-6xl font-extrabold text-center text-slate-800 mb-5 tracking-wide">

          Employee Dashboard
        </h1>


        {/* Subtitle */}
        <p className="text-center text-gray-600 text-xl leading-relaxed max-w-2xl mx-auto">

          Manage employee records, organize workplace information,
          and streamline employee operations efficiently.
        </p>


        {/* Decorative Divider */}
        <div className="flex justify-center mt-10">

          <div className="w-40 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
        </div>


        {/* Bottom Decorative Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">

          {/* Card 1 */}
          <div className="bg-blue-50 rounded-2xl p-6 shadow-md hover:scale-105 transition duration-300">

            <h2 className="text-2xl font-bold text-blue-700 mb-3">
              Employee Records
            </h2>

            <p className="text-gray-600">
              Store and manage employee details securely.
            </p>
          </div>


          {/* Card 2 */}
          <div className="bg-indigo-50 rounded-2xl p-6 shadow-md hover:scale-105 transition duration-300">

            <h2 className="text-2xl font-bold text-indigo-700 mb-3">
              Organization
            </h2>

            <p className="text-gray-600">
              Maintain structured employee information easily.
            </p>
          </div>


          {/* Card 3 */}
          <div className="bg-sky-50 rounded-2xl p-6 shadow-md hover:scale-105 transition duration-300">

            <h2 className="text-2xl font-bold text-sky-700 mb-3">
              Productivity
            </h2>

            <p className="text-gray-600">
              Simplify employee management workflows.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Home;