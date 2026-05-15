import { useState, useEffect, useRef } from 'react'
import './index.css'
import {
  Bird, CloudSun, ShoppingBasket, CalendarDays,
  CheckSquare, BotMessageSquare, Camera, Send,
  Menu, X, ChevronDown, TrendingUp, TrendingDown,
  Leaf, Syringe, Wheat, Stethoscope, Star,
  ArrowRight, Smartphone, Globe, Shield, Zap,
  Beef, MilkOff, Fence, HeartPulse, Scale,
  ChevronRight, MessageCircle,
  RotateCcw
} from 'lucide-react'

// ─── Colours ────────────────────────────────────────────────────────────────
const G = '#2d7a2d'
const GOLD = '#d4a017'
const BLUE = '#1a3a5c'
const STONE = '#4a6080'

// ─── Nav ────────────────────────────────────────────────────────────────────
function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const links = ['Features', 'Bluestone Ranch', 'How It Works', 'Market', 'Testimonials', 'Download']

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur shadow-sm border-b border-green-100' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: G }}>
            <Bird size={16} color="#fff" />
          </div>
          <span className="text-xl font-black" style={{ color: G }}>AgroSage</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-sm font-medium text-gray-600 hover:text-green-700 transition-colors">
              {l}
            </a>
          ))}
        </div>
        <a href="#download" className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white transition-opacity hover:opacity-90" style={{ background: G }}>
          Get the App <ArrowRight size={14} />
        </a>

        {/* Mobile burger */}
        <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
          {open ? <X size={22} color={G} /> : <Menu size={22} color={G} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-green-100 px-6 py-4 flex flex-col gap-4">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setOpen(false)}
              className="text-base font-medium text-gray-700 hover:text-green-700">
              {l}
            </a>
          ))}
          <a href="#download" className="mt-2 px-5 py-3 rounded-xl text-sm font-bold text-white text-center" style={{ background: G }}>
            Get the App
          </a>
        </div>
      )}
    </nav>
  )
}

// ─── Hero ────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16" style={{ background: 'linear-gradient(160deg, #0e2e0e 0%, #1a4d1a 50%, #2d7a2d 100%)' }}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      {/* Floating badges */}
      <div className="absolute top-28 left-8 md:left-20 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-4 py-3 hidden md:flex items-center gap-3 animate-pulse">
        <CloudSun size={20} color={GOLD} />
        <div>
          <p className="text-white/60 text-xs">Abuja Today</p>
          <p className="text-white font-bold text-sm">32°C · Humid</p>
        </div>
      </div>
      <div className="absolute top-32 right-8 md:right-24 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-4 py-3 hidden md:flex items-center gap-3">
        <TrendingUp size={18} color="#4caf50" />
        <div>
          <p className="text-white/60 text-xs">Live Broiler</p>
          <p className="text-white font-bold text-sm">₦2,200/kg ↑5%</p>
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-8">
          <Zap size={13} color={GOLD} fill={GOLD} />
          <span className="text-white/90 text-sm font-medium">AI-Powered Poultry Farming for Nigeria</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
          Grow Smarter.<br />
          <span style={{ color: GOLD }}>Farm Better.</span>
        </h1>

        <p className="text-lg md:text-xl text-white/75 max-w-2xl mx-auto mb-10 leading-relaxed">
          AgroSage gives Nigerian poultry farmers real-time weather alerts, live market prices,
          AI-powered disease diagnosis, and a full 8-week care timeline — all in one app.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a href="#download" className="flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-white text-lg transition-transform hover:scale-105 shadow-lg shadow-black/30" style={{ background: GOLD }}>
            <Smartphone size={20} />
            Download App
          </a>
          <a href="#how-it-works" className="flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-white text-lg border border-white/30 hover:bg-white/10 transition-colors">
            See How It Works <ChevronDown size={18} />
          </a>
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {[
            { value: '10,000+', label: 'Farmers' },
            { value: '₦2.2k', label: 'Avg. Broiler/kg' },
            { value: '8 Weeks', label: 'Full Timeline' },
            { value: '24/7', label: 'AI Support' },
          ].map(s => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-black text-white">{s.value}</p>
              <p className="text-white/60 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 40C360 80 1080 0 1440 40V80H0V40Z" fill="#f4f8f4" />
        </svg>
      </div>
    </section>
  )
}

// ─── Features ───────────────────────────────────────────────────────────────
const FEATURES = [
  {
    icon: CloudSun,
    color: '#2196f3',
    bg: '#e3f2fd',
    title: 'Real-Time Weather',
    desc: 'Live weather data for your farm location. Get humidity alerts that warn you before respiratory illness hits your flock.',
  },
  {
    icon: Bird,
    color: G,
    bg: '#e8f5e9',
    title: 'Flock Tracker',
    desc: 'Track multiple batches with age, weight, mortality and progress. Know exactly where each batch stands in its growth cycle.',
  },
  {
    icon: CalendarDays,
    color: GOLD,
    bg: '#fff8e1',
    title: 'Feed & Med Schedule',
    desc: 'A complete 8-week broiler care program. Know what feed type, dosage, vaccines and medications your birds need each week.',
  },
  {
    icon: ShoppingBasket,
    color: '#e91e63',
    bg: '#fce4ec',
    title: 'Live Market Prices',
    desc: 'Track ₦ prices for live birds, day-old chicks, feed bags, eggs and medications across Lagos, Abuja, Kano and more.',
  },
  {
    icon: CheckSquare,
    color: '#9c27b0',
    bg: '#f3e5f5',
    title: 'Farm Task Manager',
    desc: 'Never miss a feeding, medication or cleaning task. Prioritise by urgency and track completion day by day.',
  },
  {
    icon: BotMessageSquare,
    color: G,
    bg: '#e8f5e9',
    title: 'AI Farm Assistant',
    desc: 'Ask questions, describe symptoms or snap a photo of your birds. AgroSage gives expert advice on disease, feed and organic remedies instantly.',
  },
]

function Features() {
  return (
    <section id="features" className="py-24 bg-[#f4f8f4]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-bold px-4 py-1.5 rounded-full mb-4" style={{ background: '#e8f5e9', color: G }}>Everything You Need</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Built for Nigerian Farmers</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">Every feature designed around the real challenges of poultry farming in Nigeria — from power cuts to market price swings.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((f) => (
            <div key={f.title} className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: f.bg }}>
                <f.icon size={22} color={f.color} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── How It Works ────────────────────────────────────────────────────────────
const STEPS = [
  { n: '01', title: 'Add Your Flock', desc: 'Enter your batch details — bird type, quantity, start date and target weeks. AgroSage calculates everything automatically.' },
  { n: '02', title: 'Follow the Timeline', desc: 'Get a week-by-week schedule of exactly what feed, medications and vaccines your birds need each phase.' },
  { n: '03', title: 'Check Weather & Markets', desc: 'Real-time weather alerts protect your birds. Live market prices help you buy at the right time and sell for maximum profit.' },
  { n: '04', title: 'Ask the AI', desc: 'Spot something unusual? Describe the symptom or snap a photo. AgroSage diagnoses and recommends both organic and conventional treatments.' },
]

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-bold px-4 py-1.5 rounded-full mb-4" style={{ background: '#e8f5e9', color: G }}>Simple Process</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">How AgroSage Works</h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">From setup to harvest in four easy steps.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {STEPS.map((step, i) => (
            <div key={step.n} className="flex gap-6 p-7 rounded-2xl border border-gray-100 bg-[#f4f8f4] hover:border-green-200 transition-colors">
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center font-black text-2xl text-white" style={{ background: i % 2 === 0 ? G : GOLD }}>
                {step.n}
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Market Preview ──────────────────────────────────────────────────────────
const PRICES = [
  { name: 'Live Broiler (4–5wk)', price: '₦2,200/kg', change: +5.2, market: 'Mile 12, Lagos' },
  { name: 'Day-Old Chicks', price: '₦850/bird', change: +2.1, market: 'Kano Market' },
  { name: 'Starter Feed (50kg)', price: '₦22,000', change: -0.8, market: 'Agrited, Lagos' },
  { name: 'Grower Feed (50kg)', price: '₦24,500', change: +1.2, market: 'Cargill, Abuja' },
  { name: 'Finisher Feed (50kg)', price: '₦26,000', change: +0.5, market: 'Agrited, Lagos' },
  { name: 'Eggs (crate of 30)', price: '₦3,200', change: +4.1, market: 'Wuse, Abuja' },
]

function MarketPreview() {
  return (
    <section id="market" className="py-24 bg-[#f4f8f4]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="inline-block text-sm font-bold px-4 py-1.5 rounded-full mb-4" style={{ background: '#e8f5e9', color: G }}>Live Prices</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-3">Today's Market Rates</h2>
            <p className="text-gray-500 text-lg">Nigerian poultry market prices, updated in real time.</p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-200">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-semibold text-green-700">Live</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
          {PRICES.map((p, i) => {
            const up = p.change > 0
            const stable = p.change === 0
            return (
              <div key={p.name} className={`flex items-center justify-between px-7 py-5 ${i < PRICES.length - 1 ? 'border-b border-gray-100' : ''} hover:bg-gray-50 transition-colors`}>
                <div>
                  <p className="font-semibold text-gray-900">{p.name}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{p.market}</p>
                </div>
                <div className="text-right">
                  <p className="font-black text-gray-900 text-lg">{p.price}</p>
                  <div className={`flex items-center justify-end gap-1 mt-0.5`}>
                    {stable ? <span className="text-xs text-gray-400 font-medium">Stable</span> : (
                      <>
                        {up ? <TrendingUp size={12} color="#4caf50" /> : <TrendingDown size={12} color="#f44336" />}
                        <span className={`text-xs font-bold ${up ? 'text-green-600' : 'text-red-500'}`}>
                          {up ? '+' : ''}{p.change}%
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ─── Schedule Preview ────────────────────────────────────────────────────────
const WEEKS = [
  { week: 1, phase: 'Starter', feed: 'Broiler Starter Crumble', amount: '15–20g/bird/day', meds: 'Vitamin C, Electrolytes', vaccine: "Newcastle (LaSota)", color: '#4caf50' },
  { week: 3, phase: 'Starter', feed: 'Starter Crumble/Pellet', amount: '55–65g/bird/day', meds: 'Doxycycline if needed', vaccine: 'Newcastle 2nd dose', color: '#4caf50' },
  { week: 5, phase: 'Grower', feed: 'Broiler Grower Pellet', amount: '110–130g/bird/day', meds: 'Liver tonic, Vitamins', vaccine: '—', color: GOLD },
  { week: 8, phase: 'Finisher', feed: 'Broiler Finisher Pellet', amount: '160–180g/bird/day', meds: '⚠️ No antibiotics', vaccine: '—', color: '#f44336' },
]

function SchedulePreview() {
  const [active, setActive] = useState(0)
  const w = WEEKS[active]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-sm font-bold px-4 py-1.5 rounded-full mb-4" style={{ background: '#e8f5e9', color: G }}>8-Week Program</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Complete Broiler Timeline</h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">Know exactly what to feed, which vaccine to give, and what medication to use — every single week.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Week selector */}
          <div className="flex lg:flex-col gap-3 overflow-x-auto pb-2 lg:pb-0 lg:w-48 flex-shrink-0">
            {WEEKS.map((wk, i) => (
              <button key={wk.week} onClick={() => setActive(i)}
                className={`flex-shrink-0 px-5 py-4 rounded-2xl font-bold text-left transition-all border ${active === i ? 'text-white border-transparent shadow-lg' : 'text-gray-600 bg-gray-50 border-gray-100 hover:border-green-200'}`}
                style={active === i ? { background: wk.color } : {}}>
                <span className="block text-xs opacity-70">Week</span>
                <span className="text-2xl">{wk.week}</span>
                <span className="block text-xs mt-0.5 font-semibold opacity-80">{wk.phase}</span>
              </button>
            ))}
          </div>

          {/* Detail card */}
          <div className="flex-1 bg-[#f4f8f4] rounded-2xl p-8 border border-gray-100">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-4 h-4 rounded-full" style={{ background: w.color }} />
              <span className="font-black text-xl text-gray-900">Week {w.week} — {w.phase} Phase</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: Wheat, label: 'Feed Type', value: w.feed, color: GOLD },
                { icon: Leaf, label: 'Daily Amount', value: w.amount, color: G },
                { icon: Stethoscope, label: 'Medications', value: w.meds, color: '#9c27b0' },
                { icon: Syringe, label: 'Vaccines', value: w.vaccine, color: '#e91e63' },
              ].map(item => (
                <div key={item.label} className="bg-white rounded-xl p-5 border border-gray-100">
                  <div className="flex items-center gap-2 mb-2">
                    <item.icon size={15} color={item.color} />
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{item.label}</span>
                  </div>
                  <p className="font-semibold text-gray-900">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Bluestone Ranch ─────────────────────────────────────────────────────────
const RANCH_GOAT = [
  { icon: Leaf,      color: G,      title: 'Feeding Program',    desc: 'Week-by-week pasture, browse and concentrate rations for Savanna, Boer and local breeds.' },
  { icon: Syringe,   color: '#e91e63', title: 'Health & Vaccines', desc: 'PPR, FMD, CCPP vaccination calendar plus deworming schedules tailored to Nigerian conditions.' },
  { icon: Scale,     color: GOLD,   title: 'Weight Tracker',     desc: 'Log individual or herd weights and see real-time growth curves against breed targets.' },
  { icon: HeartPulse,color: '#f44336', title: 'Disease Diagnosis', desc: 'Snap a photo or describe symptoms — AI identifies Pneumonia, Bloat, Foot Rot and more.' },
]

const RANCH_COW = [
  { icon: Wheat,     color: GOLD,   title: 'Ration Formulation', desc: 'Balanced TMR and roughage plans for Friesian, Bunaji and Zebu cattle at every growth stage.' },
  { icon: MilkOff,   color: BLUE,   title: 'Milk Production Log', desc: 'Track daily yield per cow, set targets, and identify drop-offs before they become problems.' },
  { icon: Fence,     color: STONE,  title: 'Herd Management',    desc: 'Tag individual animals, record births, breeding dates, calvings and culling decisions.' },
  { icon: Beef,      color: '#8d4e2a', title: 'Market & Offtake', desc: 'Live beef and dairy prices from markets across Nigeria. Know when to sell for maximum return.' },
]

function BluestoneRanch() {
  const [tab, setTab] = useState<'goat' | 'cow'>('goat')
  const items = tab === 'goat' ? RANCH_GOAT : RANCH_COW

  return (
    <section id="bluestone-ranch" className="py-24 relative overflow-hidden" style={{ background: `linear-gradient(160deg, ${BLUE} 0%, #0d2440 60%, #0a1a30 100%)` }}>
      {/* subtle grid */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px,#fff 1px,transparent 0)', backgroundSize: '36px 36px' }} />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Brand header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg" style={{ background: 'linear-gradient(135deg, #1a3a5c, #2e5c8a)' }}>
                <Fence size={22} color="#7eb8f7" />
              </div>
              <div>
                <p className="text-blue-300 text-xs font-bold uppercase tracking-widest">Powered by AgroSage</p>
                <h2 className="text-2xl font-black text-white leading-none">BLUESTONE RANCH</h2>
              </div>
            </div>
            <p className="text-white/60 text-lg max-w-xl leading-relaxed">
              Our livestock venture — specialising in goat farming and cattle rearing.
              AI-managed herds, real-time health monitoring and Nigerian market pricing, all in one place.
            </p>
          </div>
          <div className="flex flex-col gap-2 text-right hidden md:flex">
            {[['Goats Managed', '420+'], ['Cattle Head', '180+'], ['Farms Active', '3']].map(([label, val]) => (
              <div key={label} className="text-right">
                <span className="text-3xl font-black text-white">{val}</span>
                <span className="text-white/50 text-sm ml-2">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tab switcher */}
        <div className="flex gap-2 mb-10 bg-white/5 border border-white/10 rounded-2xl p-1.5 w-fit">
          {(['goat', 'cow'] as const).map(t => (
            <button key={t} onClick={() => setTab(t)}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-bold text-sm transition-all ${tab === t ? 'text-white shadow-lg' : 'text-white/50 hover:text-white/80'}`}
              style={tab === t ? { background: t === 'goat' ? G : BLUE } : {}}>
              {t === 'goat' ? <Beef size={16} /> : <Beef size={16} />}
              {t === 'goat' ? '🐐 Goat Farming' : '🐄 Cow Rearing'}
            </button>
          ))}
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {items.map(f => (
            <div key={f.title} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: f.color + '25' }}>
                <f.icon size={18} color={f.color} />
              </div>
              <h3 className="font-bold text-white mb-2">{f.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Timeline strip */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <p className="text-white/70 text-xs font-bold uppercase tracking-widest mb-6">
            {tab === 'goat' ? 'Goat Growth Timeline (0–12 months)' : 'Cattle Growth Timeline (0–24 months)'}
          </p>
          <div className="flex items-start gap-0 overflow-x-auto pb-2">
            {(tab === 'goat' ? [
              { period: 'Wk 1–4',  label: 'Newborn',      note: 'Colostrum feeding, ear tagging, record birth weight' },
              { period: 'Mo 2–3',  label: 'Kid Stage',     note: 'Creep feed intro, PPR vaccine, first deworming' },
              { period: 'Mo 4–6',  label: 'Weaning',       note: 'Wean at 90 days, castrate males for fattening' },
              { period: 'Mo 7–9',  label: 'Grower',        note: 'Pasture + 200g concentrate/day, FMD booster' },
              { period: 'Mo 10–12',label: 'Finisher/Sale', note: 'Target 25–30kg live weight for market' },
            ] : [
              { period: 'Mo 1–2',  label: 'Calf',          note: 'Colostrum, naval dipping, dehorning, ear tag' },
              { period: 'Mo 3–6',  label: 'Pre-weaning',   note: 'Calf starter pellets, FMD & BVD vaccine' },
              { period: 'Mo 7–12', label: 'Post-weaning',  note: 'Roughage + concentrate, brucellosis test' },
              { period: 'Mo 13–18',label: 'Grower',        note: 'Pasture + 2kg concentrate/day, weight tracking' },
              { period: 'Mo 19–24',label: 'Finishing/Milk',note: 'Beef: slaughter at 350–450kg · Dairy: first lactation' },
            ]).map((s, i, arr) => (
              <div key={s.period} className="flex items-start flex-shrink-0 min-w-[180px]">
                <div className="flex flex-col items-center mr-0">
                  <div className="w-3 h-3 rounded-full border-2 border-blue-400 bg-blue-900 flex-shrink-0 mt-1" />
                  {i < arr.length - 1 && <div className="w-px flex-1 min-h-[60px]" style={{ background: 'rgba(100,160,255,0.2)' }} />}
                </div>
                <div className="ml-3 pb-6 pr-6">
                  <span className="text-blue-300 text-xs font-bold">{s.period}</span>
                  <p className="text-white font-semibold text-sm mt-0.5">{s.label}</p>
                  <p className="text-white/45 text-xs mt-1 leading-relaxed">{s.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <a href="#download" className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white transition-opacity hover:opacity-90 text-sm" style={{ background: tab === 'goat' ? G : BLUE }}>
            Track Your {tab === 'goat' ? 'Goats' : 'Cattle'} in the App <ChevronRight size={16} />
          </a>
          <p className="text-white/40 text-sm">Bluestone Ranch · BB Farms Nigeria</p>
        </div>
      </div>
    </section>
  )
}

// ─── AI Demo ─────────────────────────────────────────────────────────────────
const DEMO_MESSAGES = [
  { role: 'user', text: 'My week-3 broilers are sneezing and have nasal discharge. What could it be?' },
  { role: 'ai', text: '🩺 This sounds like Chronic Respiratory Disease (CRD) or Newcastle Disease.\n\nImmediate actions:\n• Isolate affected birds now\n• Give Tylosin or Doxycycline in water for 5 days\n• Add Vitamin C (1g per litre) to boost immunity\n\nOrganic alternative: Crush 3 garlic bulbs per 5L of water — strong antibacterial effect.\n\nAlso check ventilation — humid, stuffy conditions worsen respiratory illness. Given today\'s high humidity in your area, increase airflow immediately.' },
  { role: 'user', text: 'What organic feed supplement should I use for week 5 growers?' },
  { role: 'ai', text: '🌿 Great question! For week-5 growers:\n\n• Moringa leaf powder — add 5–10g per bird/day in feed. Boosts immunity and weight gain naturally.\n• Garlic extract in water — antibacterial and improves feed conversion.\n• Turmeric — anti-inflammatory, mix 2g per kg of feed.\n\nThese work alongside (or instead of) commercial supplements and are easy to source locally in Nigeria.' },
]

function AIDemo() {
  const [visibleCount, setVisibleCount] = useState(1)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        const interval = setInterval(() => {
          setVisibleCount(c => {
            if (c >= DEMO_MESSAGES.length) { clearInterval(interval); return c }
            return c + 1
          })
        }, 1000)
      }
    }, { threshold: 0.3 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-24" style={{ background: 'linear-gradient(160deg, #0e2e0e 0%, #1a4d1a 100%)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-14 items-center">
          <div className="lg:w-1/2">
            <span className="inline-block text-sm font-bold px-4 py-1.5 rounded-full mb-6" style={{ background: 'rgba(255,255,255,0.1)', color: '#a5d6a7' }}>AI Assistant</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Expert Advice,<br /><span style={{ color: GOLD }}>Instantly.</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Ask anything about your birds in plain English. AgroSage draws from thousands of poultry farming resources — organic and conventional — to give you accurate, Nigerian-context advice in seconds.
            </p>
            <div className="flex flex-wrap gap-4">
              {[
                { icon: Stethoscope, label: 'Disease Diagnosis' },
                { icon: Leaf, label: 'Organic Remedies' },
                { icon: Camera, label: 'Photo Diagnosis' },
                { icon: Wheat, label: 'Feed Advice' },
              ].map(b => (
                <div key={b.label} className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/20 bg-white/10">
                  <b.icon size={14} color={GOLD} />
                  <span className="text-white text-sm font-medium">{b.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Chat window */}
          <div ref={ref} className="lg:w-1/2 w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden shadow-2xl">
            <div className="flex items-center gap-3 px-5 py-4 border-b border-white/10 bg-white/5">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: G }}>
                <BotMessageSquare size={16} color="#fff" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">AgroSage Assistant</p>
                <p className="text-white/50 text-xs">AI Poultry Advisor</p>
              </div>
              <div className="ml-auto flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-900/50 border border-green-600/30">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-xs font-semibold">Online</span>
              </div>
            </div>

            <div className="p-5 flex flex-col gap-4 min-h-64">
              {DEMO_MESSAGES.slice(0, visibleCount).map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} gap-3`}>
                  {msg.role === 'ai' && (
                    <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center bg-green-900/50 border border-green-600/30">
                      <BotMessageSquare size={14} color="#4caf50" />
                    </div>
                  )}
                  <div className={`max-w-xs lg:max-w-sm rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-line ${msg.role === 'user' ? 'text-white rounded-br-sm' : 'text-white/90 bg-white/10 border border-white/10 rounded-bl-sm'}`}
                    style={msg.role === 'user' ? { background: G } : {}}>
                    {msg.text}
                  </div>
                </div>
              ))}

              {visibleCount < DEMO_MESSAGES.length && (
                <div className="flex justify-start gap-3">
                  <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center bg-green-900/50 border border-green-600/30">
                    <BotMessageSquare size={14} color="#4caf50" />
                  </div>
                  <div className="bg-white/10 border border-white/10 rounded-2xl rounded-bl-sm px-4 py-3">
                    <div className="flex gap-1.5">
                      {[0,1,2].map(d => <div key={d} className="w-2 h-2 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: `${d * 150}ms` }} />)}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="flex items-center gap-3 px-5 py-4 border-t border-white/10 bg-white/5">
              <Camera size={18} color="rgba(255,255,255,0.5)" />
              <div className="flex-1 bg-white/10 rounded-xl px-4 py-2.5 text-white/40 text-sm">Ask about your birds...</div>
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: G }}>
                <Send size={14} color="#fff" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Testimonials ────────────────────────────────────────────────────────────
const TESTIMONIALS = [
  { name: 'Emeka Okafor', location: 'Enugu State', birds: '3,000 broilers', text: 'AgroSage saved my week-4 batch. I described the symptoms and it told me exactly what to do. Bought Doxycycline the same day and lost only 3 birds instead of what could have been hundreds.' },
  { name: 'Fatima Aliyu', location: 'Kano State', birds: '1,500 layers', text: 'The market price tracker alone is worth it. I used to sell eggs without knowing the going rate. Now I negotiate confidently and have increased my profit by about 18% this season.' },
  { name: 'Chukwudi Nwosu', location: 'Imo State', birds: '800 broilers', text: 'As a student farmer I couldn\'t afford a vet for every question. AgroSage gives me answers at 2am when my birds look off. The organic remedies section is especially useful.' },
]

function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-[#f4f8f4]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-bold px-4 py-1.5 rounded-full mb-4" style={{ background: '#e8f5e9', color: G }}>Farmer Stories</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Trusted by Nigerian Farmers</h2>
          <p className="text-gray-500 text-lg">Real results from real farms across Nigeria.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {TESTIMONIALS.map(t => (
            <div key={t.name} className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm flex flex-col gap-5">
              <div className="flex gap-1">
                {[0,1,2,3,4].map(i => <Star key={i} size={14} color={GOLD} fill={GOLD} />)}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed flex-1">"{t.text}"</p>
              <div className="border-t border-gray-100 pt-5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-sm flex-shrink-0" style={{ background: G }}>
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.location} · {t.birds}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Download CTA ─────────────────────────────────────────────────────────────
function Download() {
  return (
    <section id="download" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-8 border" style={{ background: '#e8f5e9', borderColor: '#c8e6c9' }}>
          <Shield size={14} color={G} />
          <span className="text-sm font-semibold" style={{ color: G }}>Free to Download</span>
        </div>

        <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
          Start Growing<br /><span style={{ color: G }}>Smarter Today</span>
        </h2>
        <p className="text-gray-500 text-lg mb-12 max-w-xl mx-auto">
          Download AgroSage and join thousands of Nigerian farmers using AI to raise healthier birds and earn more profit.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-16">
          <a href="#" className="flex items-center gap-4 px-7 py-4 rounded-2xl border-2 border-gray-900 hover:bg-gray-900 hover:text-white transition-all group w-full sm:w-auto justify-center">
            <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
            <div className="text-left">
              <p className="text-xs font-medium opacity-70">Download on the</p>
              <p className="text-lg font-black">App Store</p>
            </div>
          </a>
          <a href="#" className="flex items-center gap-4 px-7 py-4 rounded-2xl text-white transition-opacity hover:opacity-90 w-full sm:w-auto justify-center" style={{ background: G }}>
            <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current"><path d="M3.18 23.76c.35.2.77.2 1.14 0l11.36-6.56-2.46-2.46-10.04 9.02zM.77 1.4C.3 1.67 0 2.18 0 2.76v18.48c0 .58.3 1.09.77 1.36l.12.07 10.35-10.35v-.24L.89 1.34l-.12.06zM20.65 10.2l-2.94-1.7-2.74 2.74 2.74 2.74 2.96-1.71c.84-.49.84-1.58-.02-2.07zM4.32.24L15.68 6.8l-2.46 2.46L3.18.24C3.55.04 3.97.04 4.32.24z"/></svg>
            <div className="text-left">
              <p className="text-xs font-medium opacity-80">Get it on</p>
              <p className="text-lg font-black">Google Play</p>
            </div>
          </a>
        </div>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-3">
          {['Free to use', 'Works offline', 'Nigerian markets', 'Hausa & English', 'No subscription'].map(f => (
            <span key={f} className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-600">{f}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ background: '#0e2e0e' }} className="pt-16 pb-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          <div className="md:col-span-2" style={{ gridColumn: 'span 2' }}>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: G }}>
                <Bird size={18} color="#fff" />
              </div>
              <span className="text-2xl font-black text-white">AgroSage</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              The AI-powered farming companion for Nigerian farmers — poultry, goats and cattle under one roof.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <span className="text-white/30 text-xs px-3 py-1.5 rounded-full border border-white/10">BB Farms</span>
              <span className="text-white/30 text-xs px-3 py-1.5 rounded-full border border-white/10" style={{ borderColor: `${BLUE}60`, color: '#7eb8f7' }}>Bluestone Ranch</span>
            </div>
          </div>
          {[
            { title: 'App', links: ['Dashboard', 'Flock Tracker', 'Schedule', 'Market Prices', 'AI Assistant'] },
            { title: 'Bluestone Ranch', links: ['Goat Farming', 'Cow Rearing', 'Herd Tracker', 'Milk Log', 'Ranch Market'] },
            { title: 'Company', links: ['About Us', 'Blog', 'Contact', 'Privacy Policy', 'Terms of Service'] },
          ].map(col => (
            <div key={col.title}>
              <p className="text-white font-bold mb-4">{col.title}</p>
              <ul className="flex flex-col gap-3">
                {col.links.map(l => (
                  <li key={l}><a href="#" className="text-white/50 text-sm hover:text-white transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">© 2026 AgroSage · BB Farms & Bluestone Ranch, Nigeria. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <Globe size={14} color="rgba(255,255,255,0.3)" />
            <span className="text-white/30 text-sm">Made with ❤️ for Nigerian farmers</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

// ─── Support Chat Widget ─────────────────────────────────────────────────────
type SupportMsg = { id: string; role: 'user' | 'agent'; text: string; time: Date; read: boolean }

// ─── Built-in support AI (no backend needed) ────────────────────────────────
function getSupportReply(message: string, userName: string): string {
  const msg = message.toLowerCase()
  const u = userName ? `, **${userName}**` : ''
  const has = (...words: string[]) => words.some(w => msg.includes(w))

  // ── GREETINGS ──────────────────────────────────────────────────────────
  if (has('hello', 'hi ', 'hey ', 'good morning', 'good afternoon', 'good evening', 'how are you'))
    return `Hello${u}! 👋 Welcome to AgroSage — your AI farming expert!\n\nI can answer **real farming questions** just like a professional vet and agronomist. Ask me anything:\n\n🐔 **"My birds are sneezing, what disease is it?"**\n🌾 **"What feed for week 5 broilers?"**\n💉 **"Full vaccination schedule for 500 birds"**\n🌿 **"Organic remedies without antibiotics"**\n💰 **"How much profit from 1,000 broilers?"**\n🐐 **"Goat diseases and treatment"**\n🐄 **"Cattle fattening programme"**\n\nWhat farming challenge can I help you solve today? 🌱`

  // ── NEWCASTLE DISEASE ──────────────────────────────────────────────────
  if (has('newcastle', 'ncd', 'neck twist', 'twisting neck', 'green dropping', 'green stool', 'greenish dropping'))
    return `🦠 **Newcastle Disease (NCD)**\n\n**Symptoms you're likely seeing:**\n• Sneezing, coughing, nasal discharge\n• Twisted/bent neck (torticollis)\n• Greenish watery diarrhoea\n• Sudden drop in egg production\n• High mortality in unvaccinated birds\n\n**Immediate Action:**\n1. Isolate ALL sick birds now\n2. Stop movement in/out of your farm\n3. Electrolytes + Vitamin C in water (5g/litre)\n4. No cure — supportive care only\n\n**Treatment for secondary infections:**\n• Tylosin 500mg/litre water — 5 days\n• Vionate multivitamins — daily\n\n**Prevention:**\n• Day 3: LaSota vaccine (eye/nose drop)\n• Week 3: Second LaSota dose\n• Week 7+: Booster every 6–8 weeks\n\n⚠️ NCD is notifiable — contact your local vet.\n\n— AgroSage Expert`

  // ── GUMBORO ────────────────────────────────────────────────────────────
  if (has('gumboro', 'ibd', 'infectious bursal', 'ruffled feather', 'white dropping', 'bird sitting corner', 'trembling bird'))
    return `🦠 **Gumboro Disease (IBD)**\n\n**Symptoms:**\n• Birds sitting in corners, deeply depressed\n• Ruffled feathers, trembling\n• White/watery diarrhoea\n• Pecking at their own vent\n• Mainly hits 3–6 week old birds\n\n**Treatment:**\n• Oral rehydration salts (ORS): 5g/litre — 3 days\n• Amprolium: 0.5g/litre — 5 days (prevents secondary cocci)\n• Vitamin AD3E: 2ml/litre — 7 days\n• Vitamin C: 1g/litre to boost immunity\n\n**Vaccination:**\n• Day 10–14: IBD Intermediate vaccine in water\n• Day 24–28: IBD Booster\n• Vaccinate early morning; add milk powder (10g/litre) to protect live virus\n\n**Recovery:** 85–90% if caught early.\n\n— AgroSage Expert`

  // ── COCCIDIOSIS ────────────────────────────────────────────────────────
  if (has('coccidiosis', 'cocci', 'bloody dropping', 'blood stool', 'blood in dropping', 'red dropping'))
    return `🦠 **Coccidiosis**\n\n**Symptoms:**\n• Bloody or reddish-brown droppings\n• Lethargy, birds hunched up\n• Pale combs and wattles\n• Reduced feed/water intake\n• High mortality in 2–8 week chicks\n\n**Treatment (start immediately):**\n• **Amprolium 20%** — 1g/litre water for 5–7 days ✅ Best option\n• **Sulphadimidine** — 0.1% in water for 3–5 days\n• **Vitamin K** — 2mg/litre for 5 days (stops internal bleeding)\n• Electrolytes + glucose for energy recovery\n• Probiotics (Protexin) after treatment\n\n**Prevention:**\n• Coccidiosis vaccine (Paracox) at Day 7–10\n• Keep litter DRY — wet litter = coccidia paradise\n• Avoid overcrowding\n\n**Nigerian brands:** Amprox, Coccidine — available at agro-vet shops.\n\n— AgroSage Expert`

  // ── RESPIRATORY / CRD ──────────────────────────────────────────────────
  if (has('respiratory', 'crd', 'coughing', 'wheezing', 'rattling', 'nasal discharge', 'runny nose', 'sneezing', 'mucus', 'gurgling'))
    return `🫁 **Chronic Respiratory Disease (CRD/Mycoplasma)**\n\n**Symptoms:**\n• Coughing, sneezing, wheezing\n• Nasal and eye discharge (sometimes foamy)\n• Facial swelling around eyes\n• Reduced growth rate\n• Spreads slowly but persists\n\n**Treatment:**\n• **Tylosin (Tylan)** — 500mg/litre water, 5 days\n• **Doxycycline** — 10mg/kg body weight, 5–7 days\n• **Enrofloxacin** — 10mg/litre water, 5 days\n• Vitamin C: 1g/litre — immunity boost\n\n**Management:**\n• Improve ventilation urgently — remove ammonia buildup\n• Disinfect drinkers/feeders with Izal daily\n• Reduce stocking density\n\n**Organic support:**\n• Garlic extract (5 bulbs/10L water)\n• Eucalyptus oil in fogger\n• Ginger + Turmeric in feed\n\n— AgroSage Expert`

  // ── DYING / DEAD BIRDS ─────────────────────────────────────────────────
  if (has('dying', 'birds dying', 'dead bird', 'sudden death', 'mass death', 'mortality', 'die', 'birds are dying'))
    return `⚠️ **Emergency — Birds Dying**\n\n**Do this RIGHT NOW:**\n1. Isolate sick and dead birds immediately\n2. Keep 2–3 dead birds for examination (don't discard)\n3. Stop all movement in/out of farm\n4. Add electrolytes + Vitamin C to water (5g/litre)\n\n**To diagnose, check these:**\n• Dropping colour? (white / green / bloody / yellow)\n• Any nervous signs? (twisted neck, circles, paralysis)\n• Age of birds?\n• Vaccinated? Against what?\n• New feed brand recently?\n• Any visitors to farm?\n\n**Most common causes of sudden death in Nigeria:**\n• Newcastle Disease → emergency vaccination\n• Gumboro → supportive care\n• Aflatoxin (mouldy feed) → change feed NOW\n• Heat stress → cool birds immediately\n• Coccidiosis → Amprolium in water\n\nTell me the symptoms and I'll give you a precise diagnosis!\n\n— AgroSage Expert`

  // ── FEED / NUTRITION ───────────────────────────────────────────────────
  if (has('starter', 'week 1', 'week 2', 'week 3', 'day old', 'chick feed', 'first week'))
    return `🌾 **Broiler Starter Phase (Week 1–3)**\n\n**Feed:** Broiler Starter Crumbles — 22–24% protein\n\n**Daily feed per bird:**\n• Day 1–3: 10–15g\n• Day 4–7: 20–25g\n• Week 2: 30–45g\n• Week 3: 50–65g\n\n**Top Nigerian Brands:**\n• Agrited Broiler Starter — ₦22,000–₦24,000/50kg\n• Premier Feeds Starter\n• Animal Care Broiler Starter\n• Cargill Starter (premium)\n\n**Critical tips:**\n✅ Feed available 24hrs/day for first 2 weeks\n✅ Use chick trays for day 1–3\n✅ Fresh clean water always available\n✅ Brooder temp: 32–35°C week 1, reduce 3°C/week\n\n**Organic boost:** Moringa leaf powder (5g/kg feed) — builds immunity naturally.\n\n— AgroSage Expert`

  if (has('grower', 'week 4', 'week 5', 'growing phase'))
    return `🌾 **Broiler Grower Phase (Week 4–5)**\n\n**Feed:** Broiler Grower Pellets — 18–20% protein\n\n**Daily feed per bird:**\n• Week 4: 80–110g\n• Week 5: 110–130g\n\n**Transition from Starter (Day 22–26):**\n• Day 22: 75% Starter + 25% Grower\n• Day 24: 50% + 50%\n• Day 26: 100% Grower\n\n**Brands:** Agrited Grower (₦24,000–₦26,000/50kg), Premier, Hybrid\n\n**Key checks this phase:**\n✅ Target weight: 1.2–1.5kg by end of Week 4\n✅ Space: 10–12 birds/m²\n✅ Watch for leg weakness (calcium deficiency sign)\n✅ Add Vitamin AD3E twice weekly (1ml/litre)\n\n— AgroSage Expert`

  if (has('finisher', 'week 6', 'week 7', 'week 8', 'finishing', 'ready to sell', 'harvest', 'slaughter'))
    return `🌾 **Broiler Finisher Phase (Week 6–8)**\n\n**Feed:** Broiler Finisher Pellets — 16–18% protein\n\n**Daily feed per bird:**\n• Week 6: 140–160g → target 2.0–2.3kg\n• Week 7: 160–175g → target 2.4–2.7kg\n• Week 8: 175–190g → target 2.8–3.2kg\n\n**⚠️ Withdrawal periods:**\n• All antibiotics: STOP 7 days before slaughter\n• Coccidiostats: STOP 5 days before\n\n**Harvest checklist:**\n✅ Average weight 2.5kg+ (random sampling)\n✅ Breast muscle firm and full\n✅ No signs of disease\n✅ Check market price first\n\n**Current prices:** ₦2,000–₦2,400/kg live weight\n**Revenue (100 birds × 2.5kg × ₦2,200):** ₦550,000\n\n— AgroSage Expert`

  if (has('layer', 'egg production', 'laying hen', 'egg laying', 'layer mash', 'layer feed'))
    return `🥚 **Layer Nutrition Guide**\n\n**Phase feeding:**\n• 0–6 weeks: Starter (22% protein, 1% Ca)\n• 7–14 weeks: Grower (18% protein)\n• 15–17 weeks: Pre-layer (16% protein, 2% Ca)\n• 18 weeks+: Layer Mash (16–17% protein, 3.5–4% Ca)\n\n**Daily feed:** 110–130g/hen/day at peak production\n\n**Critical nutrients:**\n• Calcium (3.5–4%) — eggshell strength\n• Vitamin D3 — calcium absorption\n• Lysine + Methionine — egg white quality\n\n**Boosting egg production naturally:**\n• Moringa leaf (10g/bird/day) → +8–12% more eggs\n• Oyster shell/limestone free-choice\n• 16 hours light/day (triggers laying)\n• Fresh water always — hens drink 2× feed volume\n\n**Layer Mash prices:** ₦25,000–₦29,000/50kg\n\n— AgroSage Expert`

  // ── VACCINATION ────────────────────────────────────────────────────────
  if (has('vaccination', 'vaccine', 'vaccinate', 'immunise', 'immunize', 'injection schedule', 'vaccination schedule'))
    return `💉 **Complete Broiler Vaccination Programme**\n\n| Age | Vaccine | Method |\n|---|---|---|\n| Day 1 | Marek's Disease | Injection (hatchery) |\n| Day 3–5 | Newcastle LaSota | Eye/nose drop |\n| Day 10–14 | Gumboro IBD | Drinking water |\n| Day 21 | Newcastle 2nd dose | Eye/nose drop |\n| Day 24–28 | Gumboro Booster | Drinking water |\n| Week 6 | Newcastle 3rd dose | Drinking water |\n\n**Golden rules:**\n✅ Vaccinate early morning when cool\n✅ Remove water 1 hour before water vaccines\n✅ Add milk powder (10g/litre) to protect live virus\n✅ Store vaccines at 2–8°C, never freeze LaSota\n❌ No antibiotics 2 days before/after live vaccines\n❌ Never vaccinate sick birds\n\n**Cost per 1,000 birds:**\n• ND LaSota: ₦2,500–₦4,000\n• IBD Gumboro: ₦3,000–₦5,000\n\n**Where to buy:** Vetripharm, Animal Care, Coopers Nigeria.\n\n— AgroSage Expert`

  // ── ORGANIC / HERBAL ───────────────────────────────────────────────────
  if (has('organic', 'herbal', 'natural', 'moringa', 'garlic', 'ginger', 'turmeric', 'neem', 'no antibiotic', 'without drug'))
    return `🌿 **Organic & Herbal Poultry Remedies**\n\n**🧄 Garlic** — Crush 5–10 cloves per 5L water, 5 days on/2 days off\n→ Antibacterial, antiviral, gut health booster\n\n**🌱 Moringa** — 5–10g powder per kg feed daily\n→ 27% protein, boosts egg production by 10–15%, free from trees!\n\n**🫚 Ginger + Turmeric** — 5g each per kg feed\n→ Anti-inflammatory, respiratory health, appetite stimulant\n\n**🍃 Neem leaves** — Boil, cool, add 50ml/litre water\n→ Antiparasitic, antifungal, mite control\n\n**🍎 Apple Cider Vinegar** — 1 tbsp/litre water, 3 days/week\n→ Gut pH balance, prevents coccidiosis, better feathers\n⚠️ Never use in metal drinkers\n\n**🌰 Papaya Seeds** — Dry, grind, 10g/kg feed weekly\n→ Natural dewormer for roundworms and tapeworms\n\n**Weekly schedule:**\n• Mon: Garlic water\n• Wed: Moringa in feed\n• Fri: ACV in water\n• Sun: Ginger + Turmeric in feed\n\n— AgroSage Expert`

  // ── PROFIT / BUSINESS ──────────────────────────────────────────────────
  if (has('profit', 'business', 'investment', 'how much can i make', 'return', 'income', 'revenue', 'capital', 'start farming', 'roi'))
    return `💰 **Poultry Business Guide (Nigeria 2026)**\n\n**500 Broiler Cost Breakdown:**\n• Day-old chicks (500 × ₦850): ₦425,000\n• Starter feed (10 bags): ₦220,000\n• Grower feed (8 bags): ₦196,000\n• Finisher feed (10 bags): ₦260,000\n• Vaccines + medications: ₦35,000\n• Litter + misc: ₦40,000\n• **Total: ₦1,176,000**\n\n**Revenue (5% mortality = 475 birds):**\n• 475 × 2.5kg × ₦2,200/kg = **₦2,612,500**\n• **Net profit: ₦1,400,000+ (119% ROI in 8 weeks!)**\n\n**Scaling up:**\n• 1,000 birds → ~₦2.5–3M profit\n• 5,000 birds → ~₦12–14M profit\n\n**Tips to maximise profit:**\n• Sell direct to households (avoid middlemen — 20% more)\n• Process and sell dressed chicken (2× the price)\n• Time sales for Eid/Christmas (prices up 30–50%)\n• Buy feed in bulk when prices drop\n\n— AgroSage Expert`

  // ── GOAT FARMING ───────────────────────────────────────────────────────
  if (has('goat', 'buck', 'doe', 'kid goat', 'goat farm', 'goat disease', 'goat feed', 'goat breed', 'boer', 'wad goat', 'savanna goat'))
    return `🐐 **Bluestone Ranch — Goat Farming**\n\n**Best Nigerian Breeds:**\n• **West African Dwarf (WAD)** — disease resistant, 20–35kg\n• **Red Sokoto** — premium leather + meat, 30–45kg\n• **Boer cross** — fast growth, 60–100kg at maturity\n\n**Feeding:**\n• Fresh grass, groundnut haulms, maize stover\n• Concentrates (maize + soybean): 200–300g/day for pregnant does\n• Water: 2–5 litres/day — critical!\n\n**Breeding:**\n• Buck:doe ratio = 1:20–25\n• First mating at 12 months\n• Gestation: 150 days (5 months)\n• Wean kids at 3 months\n\n**Common diseases & treatment:**\n• **PPR** — fever, nasal discharge, mouth sores → PPR vaccine (prevention only)\n• **Pneumonia** — coughing, fever → Oxytetracycline 20mg/kg\n• **Worms** — weight loss, pale gums → Albendazole or Ivermectin\n• **Foot rot** — limping, swollen feet → Zinc sulphate foot bath\n\n**Prices (May 2026):**\n• Small goat (15–20kg): ₦35,000–₦50,000\n• Large matured: ₦90,000–₦150,000\n\n— AgroSage / Bluestone Ranch Expert`

  // ── CATTLE ─────────────────────────────────────────────────────────────
  if (has('cattle', 'cow', 'bull', 'heifer', 'calf', 'beef cattle', 'dairy', 'cattle farm', 'fattening'))
    return `🐄 **Bluestone Ranch — Cattle Rearing**\n\n**Best Breeds for Nigeria:**\n• **White Fulani (Bunaji)** — heat tolerant, trypanotolerant\n• **Sokoto Gudali** — large frame, great for fattening\n• **Friesian cross** — 10–20 litres milk/day\n\n**Beef Fattening Programme (6 months):**\n1. Buy young bulls at 150–200kg (12–18 months old)\n2. Month 1–2: Deworm + vaccinate + adaptation feeding\n3. Month 2–6: Intensive TMR ration\n4. Target: 0.8–1.0kg weight gain/day\n5. Sell at 350–500kg liveweight\n\n**Daily Feed (TMR ration per cow):**\n• Maize silage: 15–20kg\n• Cottonseed cake: 2–3kg\n• Maize bran: 3–4kg\n• Mineral lick: free access\n• Water: 30–60 litres\n\n**Common diseases:**\n• **Trypanosomiasis** (sleeping sickness) → Berenil injection\n• **Tick-borne disease** (red urine) → Imizol injection\n• **FMD** (blisters on mouth/feet) → Vaccinate annually\n\n**Prices (May 2026):**\n• Feeder bull (200kg): ₦350,000–₦500,000\n• Fattened bull (450kg+): ₦750,000–₦1,300,000\n\n— AgroSage / Bluestone Ranch Expert`

  // ── MARKET PRICES ──────────────────────────────────────────────────────
  if (has('market price', 'current price', 'today price', 'price of', 'how much is', '₦', 'naira price', 'selling price', 'buy price'))
    return `📊 **Nigerian Market Prices (May 2026)**\n\n**🐔 Poultry Birds:**\n• Live Broiler: ₦2,000–₦2,400/kg (Mile 12, Lagos)\n• Day-Old Chicks: ₦800–₦950/bird (Kano hatcheries)\n• Spent Layer Hen: ₦3,500–₦5,000/bird\n• Turkey (live 7kg+): ₦25,000–₦40,000/bird\n\n**🥚 Eggs:**\n• Crate of 30 (medium): ₦3,000–₦3,500\n• Crate of 30 (large): ₦3,500–₦4,200\n\n**🌾 Feed (50kg bags):**\n• Broiler Starter: ₦21,000–₦24,000\n• Broiler Grower: ₦23,500–₦26,000\n• Broiler Finisher: ₦24,000–₦27,500\n• Layer Mash: ₦25,000–₦29,000\n\n**🐐🐄 Livestock:**\n• Goat (matured): ₦80,000–₦150,000\n• Cattle (fattened): ₦750,000–₦1,300,000\n\n**📈 Best times to sell:**\n• Eid al-Adha: +40–60% on goats & cattle\n• Christmas/New Year: +25–40% on broilers\n• Easter: +20–30% on all poultry\n\n— AgroSage Expert`

  // ── DEWORMING & PARASITES ──────────────────────────────────────────────
  if (has('worm', 'parasite', 'deworming', 'deworm', 'roundworm', 'tapeworm', 'lice', 'mite', 'tick', 'weight loss bird'))
    return `🪱 **Parasite Control Guide**\n\n**Internal Worms:**\n• **Roundworms** → Piperazine (50mg/kg in water, 24hrs) or Levamisole\n• **Tapeworms** → Albendazole (10mg/kg) or Fenbendazole (5 days)\n• **Natural dewormer** → Papaya seed powder (10g/kg feed, weekly) ✅\n\n**Deworming schedule:**\n• First deworming at 3 weeks old\n• Repeat every 8–12 weeks\n• Always deworm before new bird introduction\n\n**External Parasites:**\n• **Red Mites** (restless birds, pale combs) → Permethrin 0.5% spray\n• **Lice** (excessive scratching near vent) → Carbaryl powder or Cypermethrin\n• **Ticks** → Remove manually + spray Amitraz in pen cracks\n\n**Natural mite control:**\n• Diatomaceous earth dusted on litter\n• Wood ash + sand dust bath area\n• Spray house walls with neem oil solution\n\n— AgroSage Expert`

  // ── HARMATTAN / SEASONAL ───────────────────────────────────────────────
  if (has('harmattan', 'dry season', 'cold weather', 'cold night', 'dust', 'temperature drop'))
    return `❄️ **Harmattan Season Management (Nov–Feb)**\n\n**Key challenges:**\n• Temperature drops to 15–22°C at night\n• Dusty air triggers respiratory stress\n• Increased Newcastle & CRD risk\n\n**Housing:**\n• Close pen sides from 6pm–8am with tarpaulin\n• Maintain 20°C minimum in brooder\n• Add extra bedding (6–8cm wood shavings)\n\n**Nutrition boost:**\n• Increase feed by 10–15% (birds burn more energy in cold)\n• Vitamin C (1g/litre) — immune booster\n• Vitamin AD3E (2ml/litre) twice weekly\n• Warm water at dawn instead of cold\n\n**Disease prevention:**\n• Vaccinate against Newcastle BEFORE harmattan (October)\n• Treat with Tylosin if respiratory sounds develop\n• Turn litter daily to prevent ammonia buildup\n\n— AgroSage Expert`

  if (has('rainy season', 'wet season', 'rain', 'flood', 'mould', 'mold', 'aflatoxin', 'fungus', 'wet litter'))
    return `🌧️ **Rainy Season Management (Apr–Oct)**\n\n**Top risks:**\n• High humidity (75–95%) — disease spreads fast\n• Wet litter = ammonia + coccidiosis explosion\n• Aflatoxin from mouldy feed → liver damage, death\n\n**Litter management (PRIORITY #1):**\n• Turn litter DAILY, replace wet patches immediately\n• Add hydrated lime to litter — kills pathogens + reduces moisture\n• Target litter depth: 8–10cm\n\n**⚠️ Aflatoxin Alert:**\n• Buy feed in small quantities (2-week supply max)\n• Store on pallets in dry location\n• Discard ANY mouldy or clumped feed immediately\n• Add Mycosorb or Toxiban: 1kg/tonne feed as binder\n\n**Disease watch:**\n• Coccidiosis spikes in wet season — monitor droppings daily\n• Aspergillosis (lung fungus) from mouldy litter — Amphotericin B\n• Double disinfection frequency (twice weekly)\n\n— AgroSage Expert`

  // ── APP SUPPORT ────────────────────────────────────────────────────────
  if (has('download', 'install', 'play store', 'app store', 'android', 'ios', 'get the app'))
    return `📱 **Download AgroSage**\n\n🤖 **Android** → Google Play Store → search **"AgroSage"**\n🍎 **iOS** → Apple App Store → search **"AgroSage"**\n\nRequirements: Android 8+ or iOS 14+, ~100MB free space, internet for AI features.\n\n**AgroSage is completely FREE** — no subscriptions, no hidden fees.\n\nHaving trouble installing? Tell me your device model and I'll help! 📲\n\n— AgroSage Support Team`

  if (has('free', 'subscription', 'fee', 'paid', 'charge', 'how much does'))
    return `**AgroSage is 100% FREE!** 🎉\n\nAll features included at zero cost:\n✅ AI farming assistant\n✅ Real-time weather\n✅ Flock & herd tracker\n✅ Market prices\n✅ Feed & vaccine schedules\n✅ Bluestone Ranch tools\n✅ 24/7 support\n\nNo subscriptions, no hidden fees — ever!\n\n— AgroSage Support Team`

  if (has('bug', 'crash', 'not working', 'error', 'problem', 'broken', 'freeze', 'glitch'))
    return `Sorry you're having trouble${u}! 🙏\n\n**Quick fixes:**\n1. Force-close and reopen the app\n2. Check your internet connection\n3. Update to the latest version\n4. Restart your phone\n\nIf it persists, tell me:\n• Phone model (e.g. Tecno Spark, Samsung A15)\n• Which screen crashed?\n• Any error message?\n\nI'll escalate to our developer — response within 24 hours. 🛠️\n\n— AgroSage Support Team`

  if (has('bluestone', 'ranch', 'bluestone ranch'))
    return `🐐🐄 **Bluestone Ranch — Livestock Division**\n\nBluestone Ranch is BB Farms' livestock venture inside the AgroSage app.\n\n**Features:**\n• Herd tracking (goats & cattle)\n• Growth milestone timelines\n• Vaccination & health schedules\n• Livestock market prices\n• Breed recommendations for Nigeria\n• AI-powered fattening programmes\n\n**In the app:** tap the **Ranch tab** (fence icon) to manage your herd.\n\n**I can answer real goat/cattle questions too!** Ask me:\n• "What feed for fattening cattle?"\n• "Goat disease treatment"\n• "Best goat breed in Nigeria"\n\n— AgroSage / Bluestone Ranch`

  // ── DEFAULT ────────────────────────────────────────────────────────────
  return `Hi${u}! I'm AgroSage — a real farming expert AI. 🌾\n\nI can answer **actual farming questions**, not just app help. Try me:\n\n🐔 **"My birds are sneezing and have green droppings"** → disease diagnosis\n🌾 **"What feed for week 4 broilers?"** → feed & nutrition\n💉 **"Vaccination schedule for 500 birds"** → full programme\n🌿 **"Organic alternatives to antibiotics"** → herbal remedies\n💰 **"Profit from 1,000 broilers in Nigeria"** → business calculation\n🐐 **"Goat diseases and treatment"** → livestock health\n🐄 **"Cattle fattening programme"** → beef production\n📊 **"Current broiler price in Nigeria"** → market prices\n\nWhat farming question can I answer for you right now?\n\n— AgroSage Expert`
}

const QUICK_REPLIES = [
  'My birds are sneezing, what disease?',
  'Vaccination schedule for broilers',
  'How profitable is 1,000 broilers?',
  'Organic remedies without antibiotics',
  'Current market prices Nigeria',
]

function renderMarkdown(text: string) {
  // Bold
  let t = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
  // Tables
  if (t.includes('|')) {
    const lines = t.split('\n')
    const out: string[] = []
    let inTable = false
    for (const line of lines) {
      if (line.trim().startsWith('|')) {
        if (!inTable) { out.push('<div class="overflow-x-auto my-2"><table class="text-xs border-collapse w-full">'); inTable = true }
        if (line.replace(/[\s|]/g,'').startsWith('---')) { continue }
        const cells = line.split('|').filter((_,i,a) => i>0 && i<a.length-1)
        const isHeader = !inTable || out.filter(l=>l.includes('<tr>')).length===0
        const tag = isHeader ? 'th' : 'td'
        out.push(`<tr>${cells.map(c=>`<${tag} class="border border-gray-200 px-2 py-1 text-left">${c.trim()}</${tag}>`).join('')}</tr>`)
      } else {
        if (inTable) { out.push('</table></div>'); inTable = false }
        out.push(line)
      }
    }
    if (inTable) out.push('</table></div>')
    t = out.join('\n')
  }
  // Bullet points
  t = t.replace(/^[•·]\s(.+)$/gm, '<li class="ml-4 list-disc">$1</li>')
  t = t.replace(/^[-]\s(.+)$/gm, '<li class="ml-4 list-disc">$1</li>')
  // Checkmarks
  t = t.replace(/^✅\s(.+)$/gm, '<li class="ml-4 text-green-600">✅ $1</li>')
  t = t.replace(/^❌\s(.+)$/gm, '<li class="ml-4 text-red-500">❌ $1</li>')
  t = t.replace(/^⚠️\s(.+)$/gm, '<li class="ml-4 text-amber-600">⚠️ $1</li>')
  // Line breaks
  t = t.replace(/\n/g, '<br/>')
  return t
}

function SupportChat() {
  const [open, setOpen] = useState(false)
  const [unread, setUnread] = useState(1)
  const [input, setInput] = useState('')
  const [name, setName] = useState('')
  const [nameSubmitted, setNameSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [streamingText, setStreamingText] = useState('')
  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  const [messages, setMessages] = useState<SupportMsg[]>([
    {
      id: 'welcome',
      role: 'agent',
      text: "👋 Hi! I'm **AgroSage AI** — a farming expert that answers real questions.\n\nI can help with:\n🐔 Disease diagnosis & treatment\n🌾 Feed schedules & nutrition\n💉 Full vaccination programmes\n🌿 Organic & herbal remedies\n💰 Profit & business calculations\n🐐🐄 Goat & cattle management\n\nWhat's your name?",
      time: new Date(),
      read: false,
    },
  ])

  const scrollToBottom = () => setTimeout(() => scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' }), 60)

  useEffect(() => { if (open) { setUnread(0); scrollToBottom(); setTimeout(() => inputRef.current?.focus(), 250) } }, [open])
  useEffect(() => { scrollToBottom() }, [messages, streamingText])

  // Typewriter streaming effect
  const streamReply = async (fullText: string) => {
    setStreamingText('')
    const chunkSize = 4
    for (let i = 0; i <= fullText.length; i += chunkSize) {
      await new Promise(r => setTimeout(r, 12))
      setStreamingText(fullText.slice(0, i))
    }
    setStreamingText('')
    return fullText
  }

  const sendMessage = async (text?: string) => {
    const msg = (text || input).trim()
    if (!msg || loading) return
    setInput('')

    const userMsg: SupportMsg = { id: Date.now().toString(), role: 'user', text: msg, time: new Date(), read: true }
    setMessages(prev => [...prev, userMsg])
    setLoading(true)

    // Thinking delay (realistic feel)
    await new Promise(r => setTimeout(r, 400 + Math.random() * 400))

    const reply = getSupportReply(msg, name)
    setLoading(false)

    // Stream the reply
    await streamReply(reply)

    const agentMsg: SupportMsg = { id: (Date.now() + 1).toString(), role: 'agent', text: reply, time: new Date(), read: open }
    setMessages(prev => [...prev, agentMsg])
    if (!open) setUnread(u => u + 1)
  }

  const handleName = () => {
    if (!name.trim()) return
    setNameSubmitted(true)
    const n = name.trim()
    const greet: SupportMsg = {
      id: 'greet', role: 'agent',
      text: `Nice to meet you, **${n}**! 😊\n\nAsk me any farming question — I'll give you a real expert answer. You can also pick a topic below to get started.`,
      time: new Date(), read: true
    }
    setMessages(prev => [...prev, greet])
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage() }
  }

  const clearChat = () => {
    setMessages([{ id: 'welcome', role: 'agent', text: "Chat cleared! Ask me anything about your farm. 🌾", time: new Date(), read: true }])
    setNameSubmitted(false)
    setName('')
  }

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(o => !o)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 rounded-2xl text-white font-bold shadow-2xl transition-all hover:scale-105 active:scale-95"
        style={{ background: 'linear-gradient(135deg, #2d7a2d, #1a5c1a)', boxShadow: '0 8px 32px rgba(45,122,45,0.5)' }}>
        <MessageCircle size={20} fill="rgba(255,255,255,0.25)" />
        <span className="text-sm">Ask AI</span>
        {unread > 0 && !open && (
          <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-500 text-white text-xs font-black flex items-center justify-center animate-bounce">{unread}</span>
        )}
      </button>

      {/* Chat panel — ChatGPT style */}
      {open && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col rounded-2xl overflow-hidden shadow-2xl border border-gray-800"
          style={{ width: 420, maxWidth: 'calc(100vw - 24px)', height: 620, maxHeight: 'calc(100vh - 100px)', background: '#212121' }}>

          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3 flex-shrink-0" style={{ background: '#2f2f2f', borderBottom: '1px solid #3a3a3a' }}>
            <div className="w-9 h-9 rounded-xl flex items-center justify-center text-lg" style={{ background: 'linear-gradient(135deg,#2d7a2d,#1a5c1a)' }}>
              🌾
            </div>
            <div className="flex-1">
              <p className="text-white font-semibold text-sm">AgroSage AI</p>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                <span className="text-gray-400 text-xs">Farming Expert · Always Online</span>
              </div>
            </div>
            <div className="flex gap-1">
              <button onClick={clearChat} title="Clear chat" className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
                <RotateCcw size={14} />
              </button>
              <button onClick={() => setOpen(false)} className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
                <X size={14} />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto py-4 flex flex-col gap-1" style={{ scrollbarWidth: 'thin', scrollbarColor: '#3a3a3a transparent' }}>
            {messages.map(m => (
              <div key={m.id} className={`flex gap-3 px-4 py-2 group hover:bg-white/5 transition-colors ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                {/* Avatar */}
                <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-sm font-bold mt-0.5 ${m.role === 'user' ? 'bg-blue-600 text-white' : ''}`}
                  style={m.role === 'agent' ? { background: 'linear-gradient(135deg,#2d7a2d,#1a5c1a)' } : {}}>
                  {m.role === 'user' ? (name ? name[0].toUpperCase() : 'U') : '🌾'}
                </div>
                {/* Bubble */}
                <div className={`flex-1 max-w-[85%] ${m.role === 'user' ? 'flex justify-end' : ''}`}>
                  <div className={`rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${m.role === 'user' ? 'text-white rounded-tr-sm' : 'text-gray-100 rounded-tl-sm'}`}
                    style={m.role === 'user'
                      ? { background: '#2563eb' }
                      : { background: '#2f2f2f', border: '1px solid #3a3a3a' }}>
                    <div
                      className="prose-sm"
                      dangerouslySetInnerHTML={{ __html: renderMarkdown(m.text) }}
                    />
                    <p className="text-xs mt-1.5 opacity-40">{m.time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Streaming text */}
            {streamingText && (
              <div className="flex gap-3 px-4 py-2">
                <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-sm mt-0.5" style={{ background: 'linear-gradient(135deg,#2d7a2d,#1a5c1a)' }}>🌾</div>
                <div className="flex-1 max-w-[85%]">
                  <div className="rounded-2xl rounded-tl-sm px-4 py-2.5 text-sm leading-relaxed text-gray-100" style={{ background: '#2f2f2f', border: '1px solid #3a3a3a' }}>
                    <div dangerouslySetInnerHTML={{ __html: renderMarkdown(streamingText) }} />
                    <span className="inline-block w-2 h-4 bg-green-400 ml-0.5 animate-pulse rounded-sm" />
                  </div>
                </div>
              </div>
            )}

            {/* Thinking dots */}
            {loading && !streamingText && (
              <div className="flex gap-3 px-4 py-2">
                <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-sm mt-0.5" style={{ background: 'linear-gradient(135deg,#2d7a2d,#1a5c1a)' }}>🌾</div>
                <div className="rounded-2xl rounded-tl-sm px-4 py-3" style={{ background: '#2f2f2f', border: '1px solid #3a3a3a' }}>
                  <div className="flex gap-1.5 items-center h-4">
                    {[0,1,2].map(i => <div key={i} className="w-2 h-2 rounded-full bg-green-400 animate-bounce opacity-80" style={{ animationDelay: `${i*200}ms` }} />)}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Name prompt */}
          {!nameSubmitted && (
            <div className="px-4 py-3 flex-shrink-0" style={{ background: '#2f2f2f', borderTop: '1px solid #3a3a3a' }}>
              <div className="flex gap-2">
                <input
                  value={name}
                  onChange={e => setName(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleName()}
                  placeholder="Your name..."
                  autoFocus
                  className="flex-1 rounded-xl px-4 py-2.5 text-sm text-white outline-none placeholder-gray-500"
                  style={{ background: '#3a3a3a', border: '1px solid #4a4a4a' }}
                />
                <button onClick={handleName} className="px-5 py-2.5 rounded-xl text-white text-sm font-semibold transition-opacity hover:opacity-90" style={{ background: '#2d7a2d' }}>
                  Start
                </button>
              </div>
            </div>
          )}

          {/* Quick replies */}
          {nameSubmitted && messages.length <= 3 && (
            <div className="px-4 py-2 flex gap-2 overflow-x-auto flex-shrink-0" style={{ borderTop: '1px solid #3a3a3a' }}>
              {QUICK_REPLIES.map(q => (
                <button key={q} onClick={() => sendMessage(q)}
                  className="flex-shrink-0 text-xs px-3 py-1.5 rounded-full text-green-300 border border-green-800 hover:bg-green-900/40 transition-colors whitespace-nowrap">
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input box — ChatGPT style */}
          {nameSubmitted && (
            <div className="px-4 py-3 flex-shrink-0" style={{ background: '#2f2f2f', borderTop: '1px solid #3a3a3a' }}>
              <div className="flex items-end gap-2 rounded-xl px-4 py-2" style={{ background: '#3a3a3a', border: '1px solid #4a4a4a' }}>
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask any farming question..."
                  disabled={loading || !!streamingText}
                  rows={1}
                  className="flex-1 bg-transparent text-white text-sm outline-none resize-none placeholder-gray-500 py-1 max-h-28"
                  style={{ lineHeight: '1.5' }}
                />
                <button
                  onClick={() => sendMessage()}
                  disabled={loading || !!streamingText || !input.trim()}
                  className="w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center transition-all disabled:opacity-30 hover:scale-110"
                  style={{ background: input.trim() ? '#2d7a2d' : '#3a3a3a' }}>
                  <Send size={14} color="#fff" />
                </button>
              </div>
              <p className="text-center text-xs text-gray-600 mt-2">AgroSage AI · BB Farms & Bluestone Ranch</p>
            </div>
          )}
        </div>
      )}
    </>
  )
}

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <BluestoneRanch />
      <HowItWorks />
      <MarketPreview />
      <SchedulePreview />
      <AIDemo />
      <Testimonials />
      <Download />
      <Footer />
      <SupportChat />
    </div>
  )
}
