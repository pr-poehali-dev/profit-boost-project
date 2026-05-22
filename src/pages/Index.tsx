import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/2d28ea33-cccc-4936-8f72-fd729167fed2/files/331da7f2-2f78-4a37-b395-1b291c4cb791.jpg";

const problems = [
  {
    num: "01",
    title: "Вы конкурируете ценой",
    text: "Клиенты выбирают того, кто дешевле. Маржа падает, а демпинг становится единственным оружием.",
  },
  {
    num: "02",
    title: "Вас не отличают от других",
    text: "Одинаковые предложения, одинаковые слоганы — клиенты не понимают, почему нужно выбрать именно вас.",
  },
  {
    num: "03",
    title: "Рост требует всё больше денег",
    text: "Рекламный бюджет растёт, а отдача падает. Привлечение клиента дорожает каждый год.",
  },
  {
    num: "04",
    title: "Нет уникального позиционирования",
    text: "Вы — «один из многих» в своей нише, а не очевидный выбор для нужного клиента.",
  },
];

const advantages = [
  {
    icon: "Target",
    title: "Собственная категория",
    text: "Вы перестаёте бороться за место в существующей нише и создаёте свою — где вы единственный.",
  },
  {
    icon: "TrendingUp",
    title: "Рост без демпинга",
    text: "Когда у вас уникальная позиция, клиент сам обоснует для себя вашу цену. Маржа растёт.",
  },
  {
    icon: "Users",
    title: "Нужные клиенты",
    text: "Вы притягиваете именно тех, кому нужны именно вы. Конверсия и лояльность выше.",
  },
  {
    icon: "Zap",
    title: "Фокус и ясность",
    text: "Команда понимает, кто вы и что говорить. Маркетинг становится точным, а не случайным.",
  },
];

const cases = [
  {
    company: "Строительная компания",
    problem: "Конкурировала в сегменте «недорогих ремонтов», постоянно сбивала цену",
    result: "Перешла в категорию «ремонт без стресса для занятых людей» — средний чек вырос на 40%",
    metric: "+40% к чеку",
  },
  {
    company: "B2B SaaS-продукт",
    problem: "Один из десятков CRM-инструментов, клиенты уходили к дешёвым аналогам",
    result: "Перепозиционировались как «система управления отношениями для сервисного бизнеса» — отток сократился вдвое",
    metric: "−50% отток",
  },
  {
    company: "Консалтинговое агентство",
    problem: "Продавали «стратегию» — услугу, которую продают все",
    result: "Занял категорию «партнёр по росту для производственных компаний» — выручка выросла в 2 раза за год",
    metric: "×2 выручка",
  },
];

const faqs = [
  {
    q: "Что такое диагностика позиционирования?",
    a: "Это 2-часовая сессия с нашим экспертом, где мы разбираем ваш бизнес, конкурентную среду и находим зону, где вы можете занять уникальное место без ценовой войны. Результат — чёткое понимание вашей категории и первые шаги.",
  },
  {
    q: "Кому подходит эта услуга?",
    a: "Собственникам и руководителям бизнеса, которые чувствуют, что «застряли» в конкуренции, маржа не растёт или привлечение клиентов становится всё дороже. Подходит для B2B и B2C компаний с опытом работы от 1 года.",
  },
  {
    q: "Что я получу после диагностики?",
    a: "Вы получите детальный отчёт с описанием вашей уникальной категории, позиционирующим заявлением, анализом конкурентного поля и планом первых действий по переходу в новую позицию.",
  },
  {
    q: "Почему стоимость 30 000 рублей?",
    a: "Это работа опытного стратега, который уже помог десяткам компаний выйти из ценовых войн. Один правильно сформулированный смысл даёт прирост выручки в разы — инвестиция окупается в первый же месяц.",
  },
  {
    q: "Как быстро увижу результат?",
    a: "Первые изменения в коммуникации вы сможете внедрить сразу после диагностики. Ощутимый эффект на входящий поток и конверсию — в течение 1–3 месяцев после внедрения.",
  },
];

export default function Index() {
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const scrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="font-golos bg-white text-gray-900 overflow-x-hidden">

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="absolute left-0 top-0 w-2 h-full bg-[#FF6B35]" />

        <div className="max-w-7xl mx-auto px-6 md:px-16 py-20 grid md:grid-cols-2 gap-12 items-center w-full">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="font-golos text-sm font-semibold tracking-widest uppercase text-[#FF6B35] border border-[#FF6B35] px-4 py-1.5">
                Стратегия позиционирования
              </span>
            </div>

            <h1 className="font-oswald text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] uppercase">
              Выйди из<br />
              <span className="text-[#FF6B35]">кровавой</span><br />
              конкуренции
            </h1>

            <p className="font-golos text-xl md:text-2xl text-gray-600 leading-relaxed max-w-md">
              Помогаем бизнесу занять собственную категорию. Наращиваем прибыль и уходим от демпинга.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2 items-center">
              <button
                onClick={scrollToForm}
                className="font-oswald uppercase tracking-wide bg-[#FF6B35] text-white px-10 py-4 text-lg font-semibold hover:bg-[#e85a25] transition-colors duration-200"
              >
                Получить диагностику
              </button>
              <div className="flex items-center gap-3 text-gray-500">
                <Icon name="Clock" size={18} />
                <span className="text-sm font-golos">Диагностика — 30 000 ₽</span>
              </div>
            </div>

            <div className="flex gap-8 pt-4 border-t border-gray-100">
              {[["10+", "лет опыта"], ["80+", "клиентов"], ["×2.4", "рост выручки"]].map(([val, label]) => (
                <div key={label}>
                  <div className="font-oswald text-3xl font-bold text-[#FF6B35]">{val}</div>
                  <div className="font-golos text-xs text-gray-500 uppercase tracking-wide">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-4 -right-4 w-full h-full border-2 border-[#FF6B35] opacity-20" />
            <img
              src={HERO_IMAGE}
              alt="Визуализация — выход из конкуренции"
              className="w-full h-auto object-cover relative z-10"
            />
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400">
          <span className="text-xs uppercase tracking-widest font-golos">Листай вниз</span>
          <Icon name="ChevronDown" size={20} />
        </div>
      </section>

      {/* ─── PROBLEMS ─── */}
      <section className="bg-gray-950 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="mb-16">
            <span className="font-golos text-[#FF6B35] text-sm uppercase tracking-widest">Проблема</span>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold uppercase mt-3 leading-tight">
              Почему бизнес<br />застревает в войне цен
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-gray-800">
            {problems.map((p) => (
              <div key={p.num} className="bg-gray-950 p-10 hover:bg-gray-900 transition-colors group">
                <div className="font-oswald text-6xl font-bold text-gray-800 group-hover:text-[#FF6B35] transition-colors mb-4">
                  {p.num}
                </div>
                <h3 className="font-oswald text-2xl font-semibold uppercase mb-3">{p.title}</h3>
                <p className="font-golos text-gray-400 leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SOLUTION ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="mb-16 max-w-2xl">
            <span className="font-golos text-[#FF6B35] text-sm uppercase tracking-widest">Решение</span>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold uppercase mt-3 leading-tight">
              Ваша собственная<br />категория — новые правила игры
            </h2>
            <p className="font-golos text-gray-600 text-lg mt-6 leading-relaxed">
              Мы не делаем вас «лучшим» в существующей нише. Мы помогаем создать нишу, где вы единственный — и клиент идёт именно к вам.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((a) => (
              <div key={a.title} className="group border border-gray-100 p-8 hover:border-[#FF6B35] transition-colors duration-300">
                <div className="w-12 h-12 bg-orange-50 flex items-center justify-center mb-6 group-hover:bg-[#FF6B35] transition-colors duration-300">
                  <Icon name={a.icon} fallback="Star" size={22} className="text-[#FF6B35] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-oswald text-xl font-semibold uppercase mb-3">{a.title}</h3>
                <p className="font-golos text-gray-600 text-sm leading-relaxed">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DIAGNOSTICS ─── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-golos text-[#FF6B35] text-sm uppercase tracking-widest">Услуга</span>
              <h2 className="font-oswald text-4xl md:text-5xl font-bold uppercase mt-3 leading-tight mb-6">
                Диагностика<br />позиционирования
              </h2>
              <p className="font-golos text-gray-600 text-lg leading-relaxed mb-8">
                Глубокая сессия с экспертом, по итогам которой вы получаете чёткое понимание своей уникальной категории и план перехода к росту без ценовой войны.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  "Анализ текущего позиционирования и конкурентной среды",
                  "Определение вашей уникальной категории",
                  "Позиционирующее заявление, которое работает",
                  "Детальный отчёт с планом первых шагов",
                  "2 часа работы с экспертом-стратегом",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-[#FF6B35] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name="Check" size={12} className="text-white" />
                    </div>
                    <span className="font-golos text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={scrollToForm}
                className="font-oswald uppercase tracking-wide bg-[#FF6B35] text-white px-10 py-4 text-lg font-semibold hover:bg-[#e85a25] transition-colors duration-200"
              >
                Записаться за 30 000 ₽
              </button>
            </div>

            <div className="relative">
              <div className="bg-gray-950 text-white p-10">
                <div className="font-oswald text-5xl font-bold text-[#FF6B35] mb-2">30 000 ₽</div>
                <div className="font-golos text-gray-400 mb-8">единоразово, без скрытых платежей</div>

                <div className="space-y-6 border-t border-gray-800 pt-8">
                  {[
                    ["Формат", "Онлайн или офлайн, 2 часа"],
                    ["Результат", "Отчёт + позиционирование + план"],
                    ["Срок", "Отчёт — в течение 2 рабочих дней"],
                    ["Гарантия", "Если не найдём категорию — полный возврат"],
                  ].map(([label, val]) => (
                    <div key={label}>
                      <div className="font-oswald text-xs uppercase tracking-widest text-gray-500 mb-1">{label}</div>
                      <div className="font-golos text-white">{val}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-3 -right-3 w-full h-full border border-[#FF6B35] opacity-30 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── CASES ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="mb-16">
            <span className="font-golos text-[#FF6B35] text-sm uppercase tracking-widest">Результаты</span>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold uppercase mt-3 leading-tight">
              Кейсы наших клиентов
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {cases.map((c) => (
              <div key={c.company} className="border-t-4 border-[#FF6B35] pt-8 pb-10">
                <div className="font-oswald text-4xl font-bold text-[#FF6B35] mb-4">{c.metric}</div>
                <div className="font-oswald text-xl font-semibold uppercase mb-4">{c.company}</div>
                <div className="font-golos text-sm text-gray-500 mb-3 leading-relaxed">
                  <span className="text-gray-900 font-semibold">Было: </span>{c.problem}
                </div>
                <div className="font-golos text-sm text-gray-700 leading-relaxed">
                  <span className="text-[#FF6B35] font-semibold">Стало: </span>{c.result}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT FORM ─── */}
      <section id="contact-form" className="py-24 bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <span className="font-golos text-[#FF6B35] text-sm uppercase tracking-widest">Записаться</span>
              <h2 className="font-oswald text-4xl md:text-5xl font-bold uppercase mt-3 leading-tight mb-6">
                Начните выход<br />из конкуренции
              </h2>
              <p className="font-golos text-gray-400 text-lg leading-relaxed mb-8">
                Оставьте заявку — менеджер свяжется с вами в течение рабочего дня, ответит на вопросы и согласует удобное время.
              </p>
              <div className="space-y-4">
                {[
                  { icon: "Shield", text: "Ваши данные защищены и не передаются третьим лицам" },
                  { icon: "Clock", text: "Ответ в течение одного рабочего дня" },
                  { icon: "MessageCircle", text: "Бесплатная консультация перед оплатой" },
                ].map(({ icon, text }) => (
                  <div key={text} className="flex items-start gap-3">
                    <Icon name={icon} fallback="Check" size={18} className="text-[#FF6B35] flex-shrink-0 mt-0.5" />
                    <span className="font-golos text-gray-400 text-sm">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              {submitted ? (
                <div className="border border-[#FF6B35] p-12 text-center">
                  <div className="w-16 h-16 bg-[#FF6B35] flex items-center justify-center mx-auto mb-6">
                    <Icon name="Check" size={32} className="text-white" />
                  </div>
                  <h3 className="font-oswald text-2xl font-bold uppercase mb-3">Заявка принята</h3>
                  <p className="font-golos text-gray-400">
                    Мы получили вашу заявку и свяжемся с вами в ближайший рабочий день.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="font-oswald text-xs uppercase tracking-widest text-gray-500 block mb-2">
                      Ваше имя *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Иван Петров"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-gray-900 border border-gray-800 text-white font-golos px-5 py-4 focus:border-[#FF6B35] focus:outline-none transition-colors placeholder-gray-600"
                    />
                  </div>
                  <div>
                    <label className="font-oswald text-xs uppercase tracking-widest text-gray-500 block mb-2">
                      Телефон *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+7 (999) 000-00-00"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-gray-900 border border-gray-800 text-white font-golos px-5 py-4 focus:border-[#FF6B35] focus:outline-none transition-colors placeholder-gray-600"
                    />
                  </div>
                  <div>
                    <label className="font-oswald text-xs uppercase tracking-widest text-gray-500 block mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="ivan@company.ru"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-gray-900 border border-gray-800 text-white font-golos px-5 py-4 focus:border-[#FF6B35] focus:outline-none transition-colors placeholder-gray-600"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full font-oswald uppercase tracking-wide bg-[#FF6B35] text-white py-5 text-lg font-semibold hover:bg-[#e85a25] transition-colors duration-200 mt-2"
                  >
                    Отправить заявку
                  </button>
                  <p className="font-golos text-gray-600 text-xs text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 md:px-16">
          <div className="mb-16 text-center">
            <span className="font-golos text-[#FF6B35] text-sm uppercase tracking-widest">FAQ</span>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold uppercase mt-3 leading-tight">
              Частые вопросы
            </h2>
          </div>

          <div className="divide-y divide-gray-100">
            {faqs.map((faq, i) => (
              <div key={i} className="py-6">
                <button
                  className="w-full flex items-start justify-between gap-4 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-oswald text-xl font-semibold uppercase leading-tight pr-4">
                    {faq.q}
                  </span>
                  <div className="w-8 h-8 border border-gray-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon
                      name={openFaq === i ? "Minus" : "Plus"}
                      size={16}
                      className="text-[#FF6B35]"
                    />
                  </div>
                </button>
                {openFaq === i && (
                  <div className="mt-4 font-golos text-gray-600 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FOOTER CTA ─── */}
      <section className="py-20 bg-[#FF6B35]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-oswald text-4xl md:text-5xl font-bold uppercase text-white leading-tight mb-6">
            Готовы занять свою категорию?
          </h2>
          <p className="font-golos text-white/90 text-lg mb-10 max-w-xl mx-auto">
            Первый шаг — диагностика. Запишитесь сейчас и начните расти без войны цен.
          </p>
          <button
            onClick={scrollToForm}
            className="font-oswald uppercase tracking-wide bg-white text-[#FF6B35] px-12 py-5 text-xl font-bold hover:bg-gray-100 transition-colors duration-200"
          >
            Получить диагностику — 30 000 ₽
          </button>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="py-8 bg-gray-950 text-gray-600">
        <div className="max-w-7xl mx-auto px-6 md:px-16 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-oswald text-xl font-semibold uppercase text-white tracking-wide">Категория</span>
          <span className="font-golos text-sm">© 2026 Все права защищены</span>
        </div>
      </footer>
    </div>
  );
}