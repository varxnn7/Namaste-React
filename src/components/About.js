const About = () => {
  const stats = [
    { label: "Restaurants", value: "14+" },
    { label: "Happy Customers", value: "50K+" },
    { label: "Cities Served", value: "8" },
    { label: "Orders Delivered", value: "2L+" },
  ];

  const values = [
    {
      icon: "🍽️",
      title: "Quality First",
      desc: "We partner only with top-rated restaurants that meet our strict quality standards.",
    },
    {
      icon: "⚡",
      title: "Speed & Reliability",
      desc: "Lightning-fast deliveries with real-time tracking so you're never left waiting.",
    },
    {
      icon: "💚",
      title: "Customer Delight",
      desc: "Every decision we make revolves around making our customers incredibly happy.",
    },
    {
      icon: "🌱",
      title: "Sustainability",
      desc: "Eco-friendly packaging and carbon-neutral delivery routes for a better planet.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-orange-500 to-orange-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-white rounded-full" />
          <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-white rounded-full" />
        </div>
        <div className="relative max-w-5xl mx-auto px-6 py-20 text-center">
          <span className="inline-block bg-white/20 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-4 tracking-widest uppercase">
            Our Story
          </span>
          <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight">
            About <span className="text-orange-200">FoodieFlash</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            We're on a mission to bring the best restaurant experiences directly
            to your doorstep — hot, fast, and delicious.
          </p>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-white shadow-sm">
        <div className="max-w-5xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-black text-orange-500">{stat.value}</p>
              <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CEO Section */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black text-gray-800">
            Meet Our <span className="text-orange-500">Founder & CEO</span>
          </h2>
          <p className="text-gray-400 mt-2">The visionary behind FoodieFlash</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="md:flex">
            {/* CEO Avatar */}
            <div className="md:w-2/5 bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center p-10 min-h-[280px]">
              <div className="text-center text-white">
                <div className="w-28 h-28 rounded-full bg-white/20 border-4 border-white/50 flex items-center justify-center mx-auto mb-4 text-5xl">
                  👤
                </div>
                <h3 className="text-2xl font-black">You</h3>
                <p className="text-orange-100 text-sm mt-1 font-semibold uppercase tracking-wide">
                  Founder & Chief Executive Officer
                </p>
                <div className="flex justify-center gap-3 mt-4">
                  <a
                    href="#"
                    className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/40 transition-colors"
                    title="LinkedIn"
                  >
                    in
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/40 transition-colors"
                    title="Twitter"
                  >
                    𝕏
                  </a>
                </div>
              </div>
            </div>

            {/* CEO Details */}
            <div className="md:w-3/5 p-8 md:p-10">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-orange-100 text-orange-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Founder
                </span>
                <span className="bg-green-100 text-green-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  CEO
                </span>
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">
                A passionate entrepreneur and technologist, I founded FoodieFlash with one
                simple belief — that everyone deserves access to amazing food, delivered fast
                and fresh. With a deep love for food culture and a background in technology,
                I set out to bridge the gap between great local restaurants and hungry
                customers.
              </p>

              <p className="text-gray-600 leading-relaxed mb-8">
                Under my leadership, FoodieFlash has grown from a small startup into a
                platform trusted by thousands of customers across multiple cities. I believe
                in building technology that feels human, and food experiences that feel personal.
              </p>

              {/* Achievements */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Founded", value: "2024" },
                  { label: "Platform Users", value: "50,000+" },
                  { label: "Restaurant Partners", value: "14+" },
                  { label: "Team Size", value: "Growing!" },
                ].map((item) => (
                  <div key={item.label} className="bg-gray-50 rounded-xl p-4 text-center">
                    <p className="text-orange-500 font-black text-xl">{item.value}</p>
                    <p className="text-gray-400 text-xs mt-1">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission */}
      <div className="bg-orange-50 py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-gray-800 mb-4">
            Our <span className="text-orange-500">Mission</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-3xl mx-auto leading-relaxed">
            To empower local restaurants and delight customers by building the
            most reliable, joyful, and efficient food delivery experience in every
            city we operate in. We don't just deliver food — we deliver moments.
          </p>
        </div>
      </div>

      {/* Values */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black text-gray-800">
            What We <span className="text-orange-500">Stand For</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((val) => (
            <div
              key={val.title}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex gap-5 items-start"
            >
              <div className="text-4xl flex-shrink-0">{val.icon}</div>
              <div>
                <h4 className="font-bold text-gray-800 text-lg mb-1">{val.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{val.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-12 text-center">
        <h2 className="text-2xl font-black mb-2">
          Hungry? We've got you covered.
        </h2>
        <p className="text-orange-100 mb-6">
          Browse 14+ restaurants and order your favorite meal right now.
        </p>
        <a
          href="/"
          className="inline-block bg-white text-orange-600 font-bold px-8 py-3 rounded-xl hover:bg-orange-50 transition-colors shadow-lg"
        >
          Explore Restaurants →
        </a>
      </div>
    </div>
  );
};

export default About;