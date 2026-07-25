(function () {
  const root = document.documentElement;
  const header = document.querySelector(".site-header");
  const themeToggle = document.querySelector(".theme-toggle");
  const languageButtons = document.querySelectorAll("[data-language]");
  const themeMeta = document.querySelector('meta[name="theme-color"]');
  const themeStorageKey = "juan-puentes-theme";
  const languageStorageKey = "juan-puentes-language";
  const contactMessage = document.querySelector("[data-contact-message]");
  const copyMessageButton = document.querySelector("[data-copy-message]");
  const copyStatus = document.querySelector("[data-copy-status]");
  const socialContactLinks = document.querySelectorAll("[data-copy-before-open]");
  const emailLink = document.querySelector("[data-email-link]");

  const translations = {
    en: {
      pageTitle: "Juan Puentes | Long-Term Investor",
      themeLabel: "Theme",
      themeToDark: "Switch to dark theme",
      themeToLight: "Switch to light theme",
      skipLink: "Skip to content",
      brandRole: "eToro Popular Investor",
      navPersona: "About Juan",
      navStrategy: "Strategy",
      navConnect: "Connect",
      navStartEtoro: "Start on eToro",
      heroEyebrow: "Public investor profile",
      heroTitle: "Long-term investing, built with discipline.",
      heroLede:
        "Juan Puentes Botero is a Colombian investor living in Australia, sharing a practical investing journey centered on stability, innovation, DCA, ETF foundations, and smart risk control.",
      viewEtoro: "View eToro profile",
      followInstagram: "Follow on Instagram",
      followTiktok: "Follow on TikTok",
      verifiedProfile: "Verified profile",
      popularInvestor: "Popular Investor",
      profileStartInvesting: "Invest with Juan",
      statSince: "Since",
      statBase: "Base",
      statCopyFrom: "Copy from",
      snapshotOrigin: "Origin",
      snapshotOriginTitle: "Colombia to Australia",
      snapshotOriginText: "A cross-border investor voice with content for everyday people learning to invest.",
      snapshotFocus: "Public focus",
      snapshotFocusTitle: "Long-term growth",
      snapshotFocusText: "Stability, innovation, risk control, and avoiding emotional decision making.",
      snapshotProof: "Social proof",
      snapshotProofText: "Listed in Juan's Instagram bio at the time this site was drafted.",
      snapshotStyle: "Style",
      snapshotStyleTitle: "Modern DCA",
      snapshotStyleText: "A repeatable accumulation mindset rather than short-term market noise.",
      personaEyebrow: "Investor profile",
      personaTitle: "Calm, direct, and built for people who want the long game.",
      personaIntro:
        "The tone is simple: investing is not gambling. The profile should feel approachable, bilingual, grounded, and confident without promising outcomes.",
      personaCardOneTitle: "Everyday clarity",
      personaCardOneText:
        "Speaks to people who are learning to invest like normal people, using plain language and practical decision rules.",
      personaCardTwoTitle: "Discipline over hype",
      personaCardTwoText:
        "Positions patience, process, and emotional control as the edge, especially when markets get noisy.",
      personaCardThreeTitle: "Future-facing",
      personaCardThreeText:
        "Combines broad ETF exposure with selective innovative assets, keeping the message modern but still measured.",
      etoroBioSource: "Synced from eToro",
      etoroBioTitle: "Latest eToro bio",
      etoroBioLoading: "Latest public eToro bio loads from refreshed profile data.",
      strategyEyebrow: "Strategy architecture",
      strategyTitle: "A balanced framework for public communication.",
      allocationEtf: "ETF core",
      allocationInnovation: "Innovation",
      allocationDca: "DCA rhythm",
      allocationRisk: "Risk review",
      strategyCardOneTitle: "Foundation first",
      strategyCardOneText: "Use world-class ETFs as the steady base of the story.",
      strategyCardTwoTitle: "Innovation with boundaries",
      strategyCardTwoText: "Highlight forward-looking assets while keeping the risk language visible.",
      strategyCardThreeTitle: "DCA and patience",
      strategyCardThreeText: "Make consistency the signature behavior, not market timing.",
      strategyCardFourTitle: "Transparent risk",
      strategyCardFourText: "Keep copy trading framed as a decision that needs personal research.",
      quoteEyebrow: "Message platform",
      quoteText:
        "To have things you have never had, you have to do things you have never done. For Juan's brand, that means patient action, education, and discipline over shortcuts.",
      connectEyebrow: "Connect",
      connectTitle: "Send Juan a message.",
      connectIntro:
        "Use the editable draft, then start with Instagram. TikTok is the second option and email is available for longer enquiries once Juan publishes a contact address.",
      messageDraftEyebrow: "Message draft",
      messageDraftTitle: "A friendly introduction",
      messageDraftLabel: "Edit your message before sending",
      contactMessageText:
        "Hi Juan, I found your website and would love to connect. I am interested in learning more about your long-term investing approach and the educational content you share. Thank you!",
      copyReady: "Ready to copy",
      copyMessage: "Copy message",
      copySuccess: "Message copied. Paste it into your conversation.",
      copyError: "Select the message and copy it manually.",
      contactChannelsEyebrow: "Where to send it",
      contactChannelsTitle: "Start with Instagram.",
      contactChannelsText:
        "Your message is copied when you open a social channel. Paste it into a direct message if Juan's account allows messages.",
      contactInstagramText: "Juan's preferred contact channel.",
      contactTiktokText: "Use TikTok if Instagram is not available.",
      contactEmailTitle: "Email",
      contactEmailText: "Best for longer enquiries.",
      contactEmailSubject: "Message from Juan's website",
      openInstagram: "Copy & open Instagram",
      openTiktok: "Copy & open TikTok",
      openEmail: "Open email",
      emailPending: "Public email needed",
      tiktokManualNote: "Reviewed public TikTok profile stats",
      navHome: "Home",
      bioReadMore: "Read more",
      bioShowLess: "Show less",
      riskTitle: "Risk note",
      riskText:
        "This is an independent profile website concept based on public profile information. It is not financial advice, not an offer to buy or sell financial products, and not an official eToro website. Copy trading and investing involve risk, including possible loss of capital. Past performance does not guarantee future results. Always verify details directly on eToro and consider your own circumstances.",
      footerText: "Juan Puentes Botero. Public investor profile.",
      footerDataText: "Data refreshed",
      footerEtoro: "eToro profile",
      footerInstagram: "Instagram profile",
      footerTiktok: "TikTok profile",
    },
    es: {
      pageTitle: "Juan Puentes | Inversionista a Largo Plazo",
      themeLabel: "Tema",
      themeToDark: "Cambiar a tema oscuro",
      themeToLight: "Cambiar a tema claro",
      skipLink: "Saltar al contenido",
      brandRole: "Inversionista Popular en eToro",
      navPersona: "Sobre Juan",
      navStrategy: "Estrategia",
      navConnect: "Conectar",
      navStartEtoro: "Empezar en eToro",
      heroEyebrow: "Perfil público de inversionista",
      heroTitle: "Inversión a largo plazo, construida con disciplina.",
      heroLede:
        "Juan Puentes Botero es un inversionista colombiano viviendo en Australia, compartiendo un camino práctico de inversión basado en estabilidad, innovación, DCA, ETFs como base y control inteligente del riesgo.",
      viewEtoro: "Ver perfil de eToro",
      followInstagram: "Seguir en Instagram",
      followTiktok: "Seguir en TikTok",
      verifiedProfile: "Perfil verificado",
      popularInvestor: "Inversionista Popular",
      profileStartInvesting: "Invierte con Juan",
      statSince: "Desde",
      statBase: "Base",
      statCopyFrom: "Copiar desde",
      snapshotOrigin: "Origen",
      snapshotOriginTitle: "De Colombia a Australia",
      snapshotOriginText: "Una voz inversionista multicultural con contenido para personas comunes que quieren aprender a invertir.",
      snapshotFocus: "Enfoque público",
      snapshotFocusTitle: "Crecimiento a largo plazo",
      snapshotFocusText: "Estabilidad, innovación, control del riesgo y decisiones sin dejarse llevar por las emociones.",
      snapshotProof: "Prueba social",
      snapshotProofText: "Listado en la biografía de Instagram de Juan cuando se redactó este sitio.",
      snapshotStyle: "Estilo",
      snapshotStyleTitle: "DCA moderno",
      snapshotStyleText: "Una mentalidad de acumulación constante en lugar de ruido de corto plazo.",
      personaEyebrow: "Persona inversionista",
      personaTitle: "Calmo, directo y pensado para quienes quieren jugar a largo plazo.",
      personaIntro:
        "El tono es simple: estamos invirtiendo, no apostando. La persona debe sentirse cercana, bilingüe, aterrizada y segura, sin prometer resultados.",
      personaCardOneTitle: "Claridad cotidiana",
      personaCardOneText:
        "Habla a personas que están aprendiendo a invertir como gente normal, con lenguaje claro y reglas prácticas de decisión.",
      personaCardTwoTitle: "Disciplina sobre hype",
      personaCardTwoText:
        "Presenta la paciencia, el proceso y el control emocional como ventaja, especialmente cuando el mercado se vuelve ruidoso.",
      personaCardThreeTitle: "Mirada al futuro",
      personaCardThreeText:
        "Combina exposición amplia a ETFs con activos innovadores selectivos, manteniendo un mensaje moderno pero medido.",
      etoroBioSource: "Sincronizado desde eToro",
      etoroBioTitle: "Biografía actual de eToro",
      etoroBioLoading: "La biografía pública de eToro se carga desde los datos actualizados.",
      strategyEyebrow: "Arquitectura de estrategia",
      strategyTitle: "Un marco equilibrado para comunicar públicamente.",
      allocationEtf: "Base ETF",
      allocationInnovation: "Innovación",
      allocationDca: "Ritmo DCA",
      allocationRisk: "Revisión de riesgo",
      strategyCardOneTitle: "Primero la base",
      strategyCardOneText: "Usar ETFs de clase mundial como la base estable de la historia.",
      strategyCardTwoTitle: "Innovación con límites",
      strategyCardTwoText: "Destacar activos con visión de futuro manteniendo visible el lenguaje de riesgo.",
      strategyCardThreeTitle: "DCA y paciencia",
      strategyCardThreeText: "Hacer de la constancia el comportamiento central, no intentar adivinar el mercado.",
      strategyCardFourTitle: "Riesgo transparente",
      strategyCardFourText: "Enmarcar el copy trading como una decisión que requiere investigación personal.",
      quoteEyebrow: "Mensaje central",
      quoteText:
        "Para tener cosas que nunca has tenido, tienes que hacer cosas que nunca has hecho. Para la marca de Juan, eso significa acción paciente, educación y disciplina por encima de los atajos.",
      connectEyebrow: "Conectar",
      connectTitle: "Env\u00edale un mensaje a Juan.",
      connectIntro:
        "Usa el borrador editable y empieza por Instagram. TikTok es la segunda opci\u00f3n y el correo estar\u00e1 disponible para consultas m\u00e1s largas cuando Juan publique una direcci\u00f3n de contacto.",
      messageDraftEyebrow: "Borrador del mensaje",
      messageDraftTitle: "Una presentaci\u00f3n amable",
      messageDraftLabel: "Edita tu mensaje antes de enviarlo",
      contactMessageText:
        "Hola Juan, encontr\u00e9 tu sitio web y me gustar\u00eda conectar contigo. Me interesa conocer m\u00e1s sobre tu enfoque de inversi\u00f3n a largo plazo y el contenido educativo que compartes. \u00a1Gracias!",
      copyReady: "Listo para copiar",
      copyMessage: "Copiar mensaje",
      copySuccess: "Mensaje copiado. P\u00e9galo en tu conversaci\u00f3n.",
      copyError: "Selecciona el mensaje y c\u00f3pialo manualmente.",
      contactChannelsEyebrow: "D\u00f3nde enviarlo",
      contactChannelsTitle: "Empieza por Instagram.",
      contactChannelsText:
        "Tu mensaje se copia cuando abres una red social. P\u00e9galo en un mensaje directo si la cuenta de Juan permite mensajes.",
      contactInstagramText: "El canal de contacto preferido de Juan.",
      contactTiktokText: "Usa TikTok si Instagram no est\u00e1 disponible.",
      contactEmailTitle: "Correo",
      contactEmailText: "La mejor opci\u00f3n para consultas m\u00e1s largas.",
      contactEmailSubject: "Mensaje desde el sitio web de Juan",
      openInstagram: "Copiar y abrir Instagram",
      openTiktok: "Copiar y abrir TikTok",
      openEmail: "Abrir correo",
      emailPending: "Falta el correo p\u00fablico",
      tiktokManualNote: "Estadísticas públicas revisadas de TikTok",
      navHome: "Inicio",
      bioReadMore: "Leer más",
      bioShowLess: "Mostrar menos",
      riskTitle: "Nota de riesgo",
      riskText:
        "Este es un concepto independiente de sitio web basado en información pública del perfil. No es asesoría financiera, no es una oferta para comprar o vender productos financieros y no es un sitio oficial de eToro. El copy trading y la inversión implican riesgo, incluida la posible pérdida de capital. El rendimiento pasado no garantiza resultados futuros. Verifica siempre los detalles directamente en eToro y considera tus propias circunstancias.",
      footerText: "Juan Puentes Botero. Perfil público de inversionista.",
      footerDataText: "Datos actualizados",
      footerEtoro: "Perfil de eToro",
      footerInstagram: "Perfil de Instagram",
      footerTiktok: "Perfil de TikTok",
    },
  };

  const getSystemTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

  const getStoredValue = (key) => {
    try {
      return window.localStorage.getItem(key);
    } catch {
      return null;
    }
  };

  const storeValue = (key, value) => {
    try {
      window.localStorage.setItem(key, value);
    } catch {
      // Browsers can block storage in private contexts; the UI still updates.
    }
  };

  const getInitialLanguage = () => {
    const stored = getStoredValue(languageStorageKey);
    if (stored === "en" || stored === "es") return stored;
    return navigator.language.toLowerCase().startsWith("es") ? "es" : "en";
  };

  let activeLanguage = getInitialLanguage();
  let activeProfile = null;
  let contactMessageEdited = false;

  const translate = (key) => translations[activeLanguage][key] || translations.en[key] || "";
  const getPageTitle = () => translate("pageTitle");

  const syncEmailLink = () => {
    if (!emailLink || !contactMessage) return;
    const publicEmail = emailLink.dataset.contactEmail?.trim() || "";
    const hasPublicEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(publicEmail);

    if (!hasPublicEmail) {
      emailLink.removeAttribute("href");
      emailLink.setAttribute("aria-disabled", "true");
      emailLink.textContent = translate("emailPending");
      return;
    }

    const params = new URLSearchParams({
      subject: translate("contactEmailSubject"),
      body: contactMessage.value.trim(),
    });
    emailLink.href = `mailto:${publicEmail}?${params.toString()}`;
    emailLink.removeAttribute("aria-disabled");
    emailLink.textContent = translate("openEmail");
  };

  const syncContactMessage = () => {
    if (!contactMessage) return;
    if (!contactMessageEdited) {
      contactMessage.value = translate("contactMessageText");
    }
    if (copyStatus) {
      copyStatus.textContent = translate("copyReady");
    }
    syncEmailLink();
  };

  const copyContactMessage = async () => {
    if (!contactMessage) return;
    const message = contactMessage.value.trim();
    if (!message) return;

    try {
      await navigator.clipboard.writeText(message);
      if (copyStatus) {
        copyStatus.textContent = translate("copySuccess");
      }
    } catch {
      contactMessage.focus();
      contactMessage.select();
      if (copyStatus) {
        copyStatus.textContent = translate("copyError");
      }
    }
  };

  const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || "Local time";
  const calendarHours = [14, 15, 16, 17, 18, 19, 20, 21];
  const slotTemplates = [
    { weekday: 1, hour: 16, minute: 0, duration: 30 },
    { weekday: 2, hour: 15, minute: 30, duration: 30 },
    { weekday: 3, hour: 18, minute: 0, duration: 30 },
    { weekday: 4, hour: 16, minute: 30, duration: 30 },
    { weekday: 5, hour: 15, minute: 0, duration: 30 },
  ];
  let visibleWeekStart = null;
  let selectedSlot = null;

  const addDays = (date, days) => {
    const nextDate = new Date(date);
    nextDate.setDate(nextDate.getDate() + days);
    return nextDate;
  };

  const getWeekStart = (date) => {
    const weekStart = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    const day = weekStart.getDay();
    const offset = day === 0 ? -6 : 1 - day;
    weekStart.setDate(weekStart.getDate() + offset);
    weekStart.setHours(0, 0, 0, 0);
    return weekStart;
  };

  const getSlotDate = (template) => {
    const slotDate = addDays(visibleWeekStart, template.weekday - 1);
    slotDate.setHours(template.hour, template.minute, 0, 0);
    return slotDate;
  };

  const toCalendarTimestamp = (date) =>
    date.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");

  const escapeIcsText = (value) =>
    value.replace(/\\/g, "\\\\").replace(/,/g, "\\,").replace(/;/g, "\\;").replace(/\n/g, "\\n");

  const getSlotKey = (date) => toCalendarTimestamp(date);

  const formatWeekRange = () => {
    const weekEnd = addDays(visibleWeekStart, 4);
    const sameMonth = visibleWeekStart.getMonth() === weekEnd.getMonth();
    const monthFormatter = new Intl.DateTimeFormat(activeLanguage === "es" ? "es-AU" : "en-AU", {
      month: "short",
    });
    const yearFormatter = new Intl.DateTimeFormat(activeLanguage === "es" ? "es-AU" : "en-AU", {
      year: "numeric",
    });
    const startMonth = monthFormatter.format(visibleWeekStart);
    const endMonth = monthFormatter.format(weekEnd);
    const year = yearFormatter.format(weekEnd);
    return sameMonth
      ? `${visibleWeekStart.getDate()}-${weekEnd.getDate()} ${endMonth}, ${year}`
      : `${visibleWeekStart.getDate()} ${startMonth}-${weekEnd.getDate()} ${endMonth}, ${year}`;
  };

  const formatRelativeWeek = () => {
    const currentWeekStart = getWeekStart(new Date());
    const weekDifference = Math.round((visibleWeekStart - currentWeekStart) / (7 * 24 * 60 * 60 * 1000));

    if (weekDifference === 0) return translate("bookingRelativeThisWeek");
    if (weekDifference === 1) return translate("bookingRelativeNextWeek");
    if (weekDifference > 1) {
      return translate("bookingRelativeInWeeks").replace("{count}", String(weekDifference));
    }
    if (weekDifference === -1) return translate("bookingRelativePreviousWeek");
    return translate("bookingRelativeWeeksAgo").replace("{count}", String(Math.abs(weekDifference)));
  };

  const formatDayName = (date) =>
    new Intl.DateTimeFormat(activeLanguage === "es" ? "es-AU" : "en-AU", { weekday: "short" }).format(date);

  const formatTime = (date) =>
    new Intl.DateTimeFormat(activeLanguage === "es" ? "es-AU" : "en-AU", {
      hour: "numeric",
      minute: "2-digit",
    }).format(date);

  const formatSelectedSlot = (slot) => {
    const endDate = new Date(slot.startDate.getTime() + slot.duration * 60000);
    const datePart = new Intl.DateTimeFormat(activeLanguage === "es" ? "es-AU" : "en-AU", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(slot.startDate);
    return `${datePart}, ${formatTime(slot.startDate)}-${formatTime(endDate)} (${userTimeZone})`;
  };

  const buildGoogleEventUrl = (slot) => {
    const endDate = new Date(slot.startDate.getTime() + slot.duration * 60000);
    const params = new URLSearchParams({
      action: "TEMPLATE",
      text: "Google Meet with Juan Puentes",
      dates: `${toCalendarTimestamp(slot.startDate)}/${toCalendarTimestamp(endDate)}`,
      details:
        "Calendar hold from juanpuentesb.github.io. Final availability and Google Meet details are confirmed through Juan's official booking page.",
      location: "Google Meet",
    });
    return `https://calendar.google.com/calendar/render?${params.toString()}`;
  };

  const buildIcsUrl = (slot) => {
    const endDate = new Date(slot.startDate.getTime() + slot.duration * 60000);
    const lines = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Juan Puentes//Booking//EN",
      "CALSCALE:GREGORIAN",
      "BEGIN:VEVENT",
      `UID:${getSlotKey(slot.startDate)}@juanpuentesb.github.io`,
      `DTSTAMP:${toCalendarTimestamp(new Date())}`,
      `DTSTART:${toCalendarTimestamp(slot.startDate)}`,
      `DTEND:${toCalendarTimestamp(endDate)}`,
      `SUMMARY:${escapeIcsText("Google Meet with Juan Puentes")}`,
      `DESCRIPTION:${escapeIcsText("Calendar hold from juanpuentesb.github.io. Final availability and Google Meet details are confirmed through Juan's official booking page.")}`,
      `LOCATION:${escapeIcsText("Google Meet")}`,
      "END:VEVENT",
      "END:VCALENDAR",
    ];
    return `data:text/calendar;charset=utf-8,${encodeURIComponent(lines.join("\r\n"))}`;
  };

  const setActionLink = (link, href) => {
    if (!link) return;
    if (href) {
      link.href = href;
      link.removeAttribute("aria-disabled");
      if (href.startsWith("http")) {
        link.target = "_blank";
        link.rel = "noopener noreferrer";
      } else {
        link.removeAttribute("target");
        link.removeAttribute("rel");
      }
      return;
    }
    link.removeAttribute("href");
    link.removeAttribute("target");
    link.removeAttribute("rel");
    link.setAttribute("aria-disabled", "true");
  };

  const updateSlotPanel = () => {
    if (!selectedSlotText) return;

    if (!selectedSlot) {
      selectedSlotText.textContent = translate("bookingNoSlot");
      setActionLink(googleEventLink, "");
      setActionLink(icsLink, "");
      return;
    }

    selectedSlotText.textContent = formatSelectedSlot(selectedSlot);
    setActionLink(googleEventLink, buildGoogleEventUrl(selectedSlot));
    setActionLink(icsLink, buildIcsUrl(selectedSlot));
  };

  const renderScheduler = () => {
    if (!calendarGrid) return;
    if (!visibleWeekStart) {
      visibleWeekStart = getWeekStart(new Date());
    }

    if (weekLabel) {
      weekLabel.textContent = formatWeekRange();
    }
    if (weekRelativeLabel) {
      weekRelativeLabel.textContent = formatRelativeWeek();
    }
    if (timezoneLabel) {
      timezoneLabel.textContent = userTimeZone;
    }

    const days = Array.from({ length: 5 }, (_, index) => addDays(visibleWeekStart, index));
    const slots = slotTemplates.map((template) => {
      const startDate = getSlotDate(template);
      return {
        ...template,
        key: getSlotKey(startDate),
        startDate,
      };
    });

    const pieces = ['<div class="calendar-corner" aria-hidden="true"></div>'];
    days.forEach((day) => {
      pieces.push(
        `<div class="calendar-day-head"><strong>${day.getDate()}</strong><span>${formatDayName(day)}</span></div>`
      );
    });

    calendarHours.forEach((hour) => {
      const hourDate = new Date(visibleWeekStart);
      hourDate.setHours(hour, 0, 0, 0);
      pieces.push(`<div class="calendar-time">${formatTime(hourDate)}</div>`);
      days.forEach((day) => {
        const daySlots = slots.filter(
          (slot) =>
            slot.startDate.getFullYear() === day.getFullYear() &&
            slot.startDate.getMonth() === day.getMonth() &&
            slot.startDate.getDate() === day.getDate() &&
            slot.startDate.getHours() === hour
        );
        const slotButtons = daySlots
          .map((slot) => {
            const active = selectedSlot?.key === slot.key ? " is-selected" : "";
            const top = (slot.minute / 60) * 100;
            const height = (slot.duration / 60) * 100;
            const label = `${formatDayName(slot.startDate)} ${slot.startDate.getDate()}, ${formatTime(slot.startDate)}`;
            return `<button class="calendar-slot${active}" type="button" style="--slot-top:${top}%;--slot-height:${height}%;" data-slot-key="${slot.key}" aria-label="${label}"><span>${formatTime(slot.startDate)}</span><strong>30 min</strong></button>`;
          })
          .join("");
        pieces.push(`<div class="calendar-cell">${slotButtons}</div>`);
      });
    });

    calendarGrid.innerHTML = pieces.join("");
    calendarGrid.querySelectorAll("[data-slot-key]").forEach((button) => {
      button.addEventListener("click", () => {
        selectedSlot = slots.find((slot) => slot.key === button.dataset.slotKey) || null;
        renderScheduler();
      });
    });
    updateSlotPanel();
  };

  const syncBookingWidget = () => {
    if (hasBookingUrl) {
      [bookingLink, officialBookingLink].forEach((link) => {
        if (!link) return;
        link.href = bookingUrl;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.removeAttribute("aria-disabled");
        link.textContent = translate("bookingOpen");
      });

      if (bookingFrame) {
        bookingFrame.src = bookingUrl;
        bookingFrame.hidden = false;
      }
      if (bookingPlaceholder) {
        bookingPlaceholder.hidden = true;
      }
      return;
    }

    if (bookingLink) {
      bookingLink.removeAttribute("href");
      bookingLink.removeAttribute("target");
      bookingLink.removeAttribute("rel");
      bookingLink.setAttribute("aria-disabled", "true");
      bookingLink.textContent = translate("bookingPendingButton");
    }
    if (officialBookingLink) {
      officialBookingLink.removeAttribute("href");
      officialBookingLink.removeAttribute("target");
      officialBookingLink.removeAttribute("rel");
      officialBookingLink.setAttribute("aria-disabled", "true");
      officialBookingLink.textContent = translate("bookingOfficialPending");
    }

    if (bookingFrame) {
      bookingFrame.removeAttribute("src");
      bookingFrame.hidden = true;
    }
    if (bookingPlaceholder) {
      bookingPlaceholder.hidden = false;
    }
  };

  const syncThemeButton = () => {
    const isDark = root.dataset.theme === "dark";
    themeToggle.setAttribute("aria-pressed", String(isDark));
    themeToggle.setAttribute("aria-label", isDark ? translate("themeToLight") : translate("themeToDark"));
  };

  const applyTheme = (theme, persist) => {
    const isDark = theme === "dark";
    root.dataset.theme = theme;
    if (themeMeta) {
      themeMeta.setAttribute("content", isDark ? "#08120b" : "#f7fff5");
    }
    syncThemeButton();
    if (persist) {
      storeValue(themeStorageKey, theme);
    }
  };

  const bioToggle = document.querySelector("[data-bio-toggle]");
  const syncBioToggleText = () => {
    if (!bioToggle) return;
    const expanded = bioToggle.closest(".full-bio-card")?.classList.contains("is-expanded");
    bioToggle.textContent = expanded ? translate("bioShowLess") : translate("bioReadMore");
  };

  const applyLanguage = (language, persist) => {
    activeLanguage = language;
    root.lang = language;
    document.title = getPageTitle();

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const value = translate(element.dataset.i18n);
      if (value) {
        element.textContent = value;
      }
    });

    languageButtons.forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.language === language));
    });

    syncThemeButton();
    syncBioToggleText();
    syncContactMessage();
    applyProfileData(activeProfile);
    if (persist) {
      storeValue(languageStorageKey, language);
    }
  };

  const setText = (selector, value) => {
    if (!value) return;
    document.querySelectorAll(selector).forEach((element) => {
      element.textContent = value;
    });
  };

  const setSourceText = (selector, value, language) => {
    if (!value) return;
    document.querySelectorAll(selector).forEach((element) => {
      element.textContent = value;
      if (language) {
        element.lang = language;
      }
    });
  };

  const formatDate = (isoDate) => {
    if (!isoDate) return "";
    const date = new Date(isoDate);
    if (Number.isNaN(date.getTime())) return "";
    return new Intl.DateTimeFormat(activeLanguage === "es" ? "es-AU" : "en-AU", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }).format(date);
  };

  function applyProfileData(profile) {
    if (!profile) return;
    const etoro = profile.etoro || {};
    const instagram = profile.instagram || {};
    const tiktok = profile.tiktok || {};

    setText('[data-profile="investingSince"]', etoro.investingSince);
    setText('[data-profile="copyMinimum"]', etoro.copyMinimum);
    setText('[data-profile="aumDisplay"]', instagram.aumDisplay);
    setText('[data-profile="socialProofDetail"]', instagram.socialProofDetail);
    setText('[data-profile="instagramSummary"]', instagram.summary);
    setText('[data-profile="tiktokSummary"]', tiktok.summary);
    setText('[data-profile="lastUpdated"]', formatDate(profile.lastUpdated));
    setSourceText('[data-profile="etoroFullBio"]', etoro.fullBio, etoro.bioLanguage);

    if (etoro.avatarUrl) {
      document.querySelectorAll("[data-profile-image='avatar']").forEach((image) => {
        image.src = etoro.avatarUrl;
      });
    }
  }

  const hydratePublicData = async () => {
    try {
      const response = await fetch(`data/profile.json?refresh=${Date.now()}`, {
        cache: "no-store",
      });
      if (!response.ok) return;
      activeProfile = await response.json();
      applyProfileData(activeProfile);
    } catch {
      // Dev preview keeps hand-written fallback copy if a social platform blocks refresh.
    }
  };

  applyTheme(getStoredValue(themeStorageKey) || getSystemTheme(), false);
  applyLanguage(activeLanguage, false);

  const navLinks = document.querySelectorAll(".nav-links a");

  if (window.location.hash) {
    const matchingLink = document.querySelector(`.nav-links a[href="${window.location.hash}"]`);
    if (matchingLink) {
      navLinks.forEach((l) => l.removeAttribute("aria-current"));
      matchingLink.setAttribute("aria-current", "page");
    }
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.forEach((l) => l.removeAttribute("aria-current"));
      link.setAttribute("aria-current", "page");
    });
  });

  const spySections = ["persona", "strategy", "connect"]
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  if (spySections.length) {
    const scrollSpy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const match = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
            if (match) {
              navLinks.forEach((l) => l.removeAttribute("aria-current"));
              match.setAttribute("aria-current", "page");
            }
          }
        });
      },
      { rootMargin: "-80px 0px -55% 0px", threshold: 0 }
    );
    spySections.forEach((el) => scrollSpy.observe(el));
  }

  if (bioToggle) {
    bioToggle.addEventListener("click", () => {
      bioToggle.closest(".full-bio-card").classList.toggle("is-expanded");
      syncBioToggleText();
    });
  }

  themeToggle.addEventListener("click", () => {
    applyTheme(root.dataset.theme === "dark" ? "light" : "dark", true);
  });

  languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      applyLanguage(button.dataset.language, true);
    });
  });

  contactMessage?.addEventListener("input", () => {
    contactMessageEdited = true;
    if (copyStatus) {
      copyStatus.textContent = translate("copyReady");
    }
    syncEmailLink();
  });

  copyMessageButton?.addEventListener("click", () => {
    void copyContactMessage();
  });

  socialContactLinks.forEach((link) => {
    link.addEventListener("click", () => {
      void copyContactMessage();
    });
  });

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => {
      if (!getStoredValue(themeStorageKey)) {
        applyTheme(event.matches ? "dark" : "light", false);
      }
    });

  const updateHeader = () => {
    header.dataset.elevated = String(window.scrollY > 6);
  };

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  hydratePublicData();
})();
