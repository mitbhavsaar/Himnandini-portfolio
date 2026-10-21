import {
  ArrowDown,
  ArrowRight,
  Briefcase,
  Layers,
  Box,
  User,
  MapPin,
  Mail,
  Target,
  Lightbulb,
  Users,
  Heart,
  GraduationCap,
  Code2,
  Quote,
} from 'lucide-react';
import ThreeDCard from './ThreeDCard';

export default function About({ isDark, onOpenAboutModal }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const stats = [
    {
      icon: Briefcase,
      value: '2+',
      line1: 'Years',
      line2: 'Experience',
      color: 'bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400',
    },
    {
      icon: Layers,
      value: '10+',
      line1: 'Projects',
      line2: 'Delivered',
      color: 'bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400',
    },
    {
      icon: Box,
      value: '17/18/19',
      line1: 'Odoo',
      line2: 'Versions',
      color: 'bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400',
    },
    {
      icon: User,
      value: '100%',
      line1: 'Client',
      line2: 'Focused',
      color: 'bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400',
    },
  ];

  const profileDetails = [
    { label: 'Name', value: 'Himnandini Sharma', icon: User },
    { label: 'Role', value: 'Odoo Developer', icon: Briefcase },
    { label: 'Location', value: 'Gandhinagar, Gujarat, India', icon: MapPin },
    { label: 'Email', value: 'sharmahimnandini@gmail.com', icon: Mail, isEmail: true },
  ];

  const journeySteps = [
    {
      period: '2025 - Present',
      role: 'Odoo Developer',
      company: 'Entrivis Tech Pvt. Ltd. | Gandhinagar',
      desc: 'Developing custom Odoo modules, API integrations and business applications.',
      icon: Briefcase,
    },
    {
      period: '2024 - 2025',
      role: 'Odoo Trainee',
      company: 'Acespritech Solutions Pvt. Ltd. | Gandhinagar',
      desc: 'Learned Odoo ORM, QWeb, reporting and security rules. Worked on real client projects and deployments.',
      icon: Code2,
    },
    {
      period: '2020 - 2024',
      role: 'B.Tech in Information Technology',
      company: 'Gujarat Technological University',
      desc: 'Built a strong foundation in programming, databases and web technologies.',
      icon: GraduationCap,
    },
  ];

  const hobbies = [
    {
      title: 'Photography',
      desc: 'Capturing moments and perspectives.',
      image: '/images/hobby_photography.jpg',
    },
    {
      title: 'Exploring Cafes',
      desc: 'Good coffee fuels good ideas.',
      image: '/images/hobby_cafe.jpg',
    },
    {
      title: 'Design Inspiration',
      desc: 'Finding creativity in everyday things.',
      image: '/images/hobby_design.jpg',
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-purple-200/30 dark:bg-purple-900/15 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 rounded-full bg-amber-100/30 dark:bg-amber-900/15 blur-[120px] pointer-events-none" />

      <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">

        {/* ========================================================================= */}
        {/* TOP SECTION: Split Grid (Bio & Buttons + Center Visual + Profile Card)    */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">

          {/* Left Column (col-span-5): Bio, Heading, CTAs, Stats Bar */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
            <div className="tracking-[0.25em] text-xs font-bold text-purple-700 dark:text-purple-400 uppercase">
              ABOUT ME
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-serif tracking-tight leading-[1.08]">
              <span className="font-serif font-black text-slate-950 dark:text-white block">
                Passionate About
              </span>
              <span className="block mt-1">
                <span className="font-serif font-black text-slate-950 dark:text-white">Technology &amp; </span>
                <span className="font-serif italic font-extrabold text-purple-600 dark:text-purple-400">Impact</span>
              </span>
            </h2>

            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-[15px] leading-relaxed max-w-lg">
              I'm Himnandini Sharma, an Odoo Developer with expertise in building scalable ERP solutions,
              seamless integrations and intuitive business applications that solve real business problems.
              I enjoy turning complex requirements into simple, elegant solutions.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <a
                href="/Himnandini_Sharma_CV.pdf"
                download="Himnandini_Sharma_CV.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-medium text-sm shadow-lg shadow-purple-600/25 hover:shadow-purple-600/40 hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <span>Download CV</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white dark:bg-white/10 hover:bg-slate-50 dark:hover:bg-white/15 text-slate-800 dark:text-white font-medium text-sm border border-slate-200/90 dark:border-white/10 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer backdrop-blur-md"
              >
                <span>Let's Connect</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Floating 4-Metric Pill Bar */}
            <div className="pt-2">
              <div className="rounded-2xl sm:rounded-3xl bg-white/95 dark:bg-[#111d1a]/95 backdrop-blur-md p-3.5 sm:p-4 border border-slate-200/90 dark:border-white/10 shadow-lg shadow-slate-200/40 dark:shadow-black/40 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 items-center">
                {stats.map((stat, idx) => {
                  const Icon = stat.icon;
                  return (
                    <div key={idx} className="flex items-center gap-2.5">
                      <div className={`w-9 h-9 rounded-xl ${stat.color} flex items-center justify-center flex-shrink-0`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-lg sm:text-xl font-black text-slate-950 dark:text-white leading-tight font-sans">
                          {stat.value}
                        </div>
                        <div className="text-[10px] sm:text-[11px] font-semibold text-slate-500 dark:text-slate-400 leading-tight">
                          <div>{stat.line1}</div>
                          <div>{stat.line2}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Center Column (col-span-4): Clean Center Visual of Himnandini with Mug */}
          <div className="lg:col-span-4 relative flex flex-col items-center justify-center">
            {/* Cursive handwritten doodle pointing to Himnandini */}
            <div className="hidden xl:block absolute -top-8 -left-12 z-20 pointer-events-none select-none">
              <img
                src="/images/about_doodle_clean.png"
                alt="Turning Business Needs into Smarter Odoo Solutions"
                className="w-28 h-auto object-contain"
              />
            </div>

            <div className="relative w-full max-w-[420px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 dark:border-white/10 bg-slate-100 dark:bg-[#0c1613] group">
              <img
                src="/images/about_himnandini_clean.jpg"
                alt="Himnandini Sharma - Odoo Developer"
                className="w-full h-[400px] sm:h-[440px] object-cover object-center group-hover:scale-[1.03] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right Column (col-span-3): Realistic Paper Profile Sheet Card with 3D Tilt */}
          <div className="lg:col-span-3 relative flex justify-center lg:justify-end">
            <ThreeDCard
              glare={true}
              maxTilt={12}
              className="relative w-full max-w-[340px] p-6 bg-white/95 dark:bg-[#111d1a]/95 backdrop-blur-md border border-slate-200/90 dark:border-white/10 shadow-2xl space-y-4"
            >
              {/* Paperclip Accent at top */}
              <div className="absolute -top-3 left-8 w-4 h-8 border-2 border-slate-400/80 dark:border-slate-500 rounded-full bg-white dark:bg-[#111d1a] transform -rotate-6 shadow-xs pointer-events-none" />

              {/* Detail Items */}
              <div className="space-y-3.5 pt-2 translate-z-10">
                {profileDetails.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[10.5px] font-medium text-slate-400 dark:text-slate-500">
                          {item.label}
                        </div>
                        {item.isEmail ? (
                          <a
                            href={`mailto:${item.value}`}
                            className="text-xs sm:text-[13px] font-bold text-slate-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors truncate block"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <div className="text-xs sm:text-[13px] font-bold text-slate-900 dark:text-white truncate">
                            {item.value}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Status Pill Indicator */}
              <div className="pt-2 translate-z-20">
                <div
                  onClick={() => scrollTo('contact')}
                  className="w-full py-2.5 px-4 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-medium text-xs flex items-center justify-center gap-2 shadow-md shadow-purple-600/25 transition-all cursor-pointer select-none"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                  </span>
                  <span>Available for Opportunities</span>
                </div>
              </div>
            </ThreeDCard>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* BOTTOM SECTION: 3 Cards in a Row (What Drives Me | Journey | Beyond)      */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-14 sm:mt-20">

          {/* CARD 1: What Drives Me */}
          <div className="rounded-3xl bg-white dark:bg-[#111d1a] p-6 sm:p-7 border border-slate-200/80 dark:border-white/10 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-1 h-5 bg-purple-600 dark:bg-purple-400 rounded-full" />
                <h3 className="font-serif font-bold text-xl sm:text-2xl text-slate-950 dark:text-white tracking-tight">
                  What Drives Me
                </h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                I believe in using technology to create meaningful business impact. Working with Odoo allows me to
                combine problem-solving, creativity and continuous learning to build solutions that truly make a difference for businesses.
              </p>

              {/* 4 Mini Cards in 2x2 Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* 1. Solve Real Problems */}
                <div className="p-3.5 rounded-2xl bg-slate-50/80 dark:bg-[#0c1613] border border-slate-100 dark:border-white/5 space-y-1.5">
                  <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                    <Target className="w-4 h-4" />
                  </div>
                  <div className="font-bold text-xs sm:text-[13px] text-slate-900 dark:text-white">
                    Solve Real Problems
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
                    Build practical solutions for business growth.
                  </div>
                </div>

                {/* 2. Continuous Learning */}
                <div className="p-3.5 rounded-2xl bg-slate-50/80 dark:bg-[#0c1613] border border-slate-100 dark:border-white/5 space-y-1.5">
                  <div className="w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                    <Lightbulb className="w-4 h-4" />
                  </div>
                  <div className="font-bold text-xs sm:text-[13px] text-slate-900 dark:text-white">
                    Continuous Learning
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
                    Explore new technologies and improve every day.
                  </div>
                </div>

                {/* 3. Collaborative Growth */}
                <div className="p-3.5 rounded-2xl bg-slate-50/80 dark:bg-[#0c1613] border border-slate-100 dark:border-white/5 space-y-1.5">
                  <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                    <Users className="w-4 h-4" />
                  </div>
                  <div className="font-bold text-xs sm:text-[13px] text-slate-900 dark:text-white">
                    Collaborative Growth
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
                    Work with amazing teams and clients.
                  </div>
                </div>

                {/* 4. Create Business Impact */}
                <div className="p-3.5 rounded-2xl bg-slate-50/80 dark:bg-[#0c1613] border border-slate-100 dark:border-white/5 space-y-1.5">
                  <div className="w-8 h-8 rounded-full bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 flex items-center justify-center">
                    <Heart className="w-4 h-4" />
                  </div>
                  <div className="font-bold text-xs sm:text-[13px] text-slate-900 dark:text-white">
                    Create Business Impact
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
                    Turn ideas into scalable Odoo solutions.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 2: My Journey So Far */}
          <div className="rounded-3xl bg-white dark:bg-[#111d1a] p-6 sm:p-7 border border-slate-200/80 dark:border-white/10 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-6">
                <span className="w-1 h-5 bg-purple-600 dark:bg-purple-400 rounded-full" />
                <h3 className="font-serif font-bold text-xl sm:text-2xl text-slate-950 dark:text-white tracking-tight">
                  My Journey So Far
                </h3>
              </div>

              {/* Vertical Timeline */}
              <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[2px] before:bg-purple-200 dark:before:bg-purple-900/40">
                {journeySteps.map((step, idx) => {
                  const Icon = step.icon;
                  return (
                    <div key={idx} className="relative">
                      {/* Timeline dot */}
                      <span className="absolute -left-[27px] top-1.5 w-3 h-3 rounded-full bg-purple-600 dark:bg-purple-400 ring-4 ring-white dark:ring-[#111d1a]" />
                      
                      <div className="text-xs font-semibold text-purple-700 dark:text-purple-400 mb-1">
                        {step.period}
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-bold text-sm text-slate-950 dark:text-white">
                            {step.role}
                          </div>
                          <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                            {step.company}
                          </div>
                          <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* CARD 3: Beyond Coding */}
          <div className="rounded-3xl bg-white dark:bg-[#111d1a] p-6 sm:p-7 border border-slate-200/80 dark:border-white/10 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-1 h-5 bg-purple-600 dark:bg-purple-400 rounded-full" />
                <h3 className="font-serif font-bold text-xl sm:text-2xl text-slate-950 dark:text-white tracking-tight">
                  Beyond Coding
                </h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-5">
                When I'm not working on Odoo, you'll find me exploring new designs, learning about emerging technologies, and enjoying creative activities.
              </p>

              {/* 3 Hobbies Cards */}
              <div className="grid grid-cols-3 gap-2.5 mb-5">
                {hobbies.map((hobby, idx) => (
                  <div key={idx} className="flex flex-col group">
                    <div className="h-16 sm:h-20 rounded-xl overflow-hidden border border-slate-200/80 dark:border-white/10 shadow-xs">
                      <img
                        src={hobby.image}
                        alt={hobby.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="font-bold text-xs text-slate-900 dark:text-white mt-2 leading-tight">
                      {hobby.title}
                    </div>
                    <div className="text-[10px] sm:text-[10.5px] text-slate-500 dark:text-slate-400 mt-0.5 leading-tight">
                      {hobby.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Quote Box */}
            <div className="p-4 rounded-2xl bg-purple-50/70 dark:bg-purple-950/20 border border-purple-200/60 dark:border-purple-800/30 flex items-start gap-3 mt-2">
              <Quote className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0 fill-purple-600/20 mt-0.5" />
              <p className="font-serif italic text-xs sm:text-[12.5px] text-slate-800 dark:text-purple-200 leading-relaxed">
                “Technology is most powerful when it simplifies life and creates opportunities.”
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
