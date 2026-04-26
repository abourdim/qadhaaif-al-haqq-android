/* قذائف الحق — MISSILES OF TRUTH — app.js v1.0 */
/* Based on "Qadhaaif al-Haqq" by Sheikh Mohammed al-Ghazali (1917-1996) */
/* Dar Al-Qalam, 1991 — 8 chapters, 244 pages */

// ═══════════════ TRILINGUAL DATA ═══════════════
const T = {
  ar: {
    appTitle: 'قذائف الحق',
    splashSub: 'الدفاع عن الإسلام ضد الشبهات',
    splashHint: 'اضغط للتخطي',
    sacredRef: 'سورة الأنبياء ٢١: ١٨',
    tabHome: 'الرئيسية', tabTruths: 'الحقائق', tabMyths: 'خرافة أم حقيقة', tabQuiz: 'اختبار', tabAbout: 'الكتاب',
    truthsTitle: 'قذائف الحق',
    truthsDesc: '٢٠ حقيقة من كتاب قذائف الحق — كل حقيقة تدحض خرافة عن الإسلام',
    mythsTitle: 'خرافة أم حقيقة؟',
    mythsDesc: 'اختبر معلوماتك — اقلب البطاقة لتكتشف الحقيقة',
    quizTitle: 'من يريد أن يكون عالماً؟',
    quizDesc: 'اختبار سريع — خرافة أم حقيقة؟',
    helpTitle: '❓ مساعدة',
    duaPanelTitle: '🤲 أدعية النصر والثبات',
    dailyLabel: '🎯 قذيفة اليوم',
    myth: '❌ خرافة',
    reality: '✅ حقيقة',
    flip: 'اقلب البطاقة',
    chapter: 'الفصل',
    share: 'مشاركة',
    searchPlaceholder: 'ابحث في الحقائق...',
    quizStart: 'ابدأ الاختبار',
    quizNext: 'السؤال التالي',
    quizFinish: 'اعرف النتيجة',
    quizAgain: 'أعد الاختبار',
    quizMythBtn: '❌ خرافة',
    quizFactBtn: '✅ حقيقة',
    quizCorrect: 'صحيح!',
    quizWrong: 'خطأ!',
    quizScore: 'النتيجة',
    lifeline5050: '📖 حذف إجابة',
    lifelineHint: '🤲 تلميح',
    lifelineRef: '📞 مرجع قرآني',
    xpLabel: 'نقاط الخبرة',
    levelLabel: 'المستوى',
    badgesLabel: 'الأوسمة',
    youngMode: '🌱 مستكشف صغير',
    teenMode: '📚 باحث شاب',
    streakMsg: 'يوم متتالي!',
    splashFeatures: [
      '٢٠ حقيقة تدحض الشبهات',
      'بطاقات خرافة أم حقيقة — تفاعلية',
      'اختبار: من يريد أن يكون عالماً؟',
      'نظام نقاط وأوسمة'
    ],
  },
  en: {
    appTitle: 'Missiles of Truth',
    splashSub: 'Defending Islam against misconceptions',
    splashHint: 'tap to skip',
    sacredRef: 'Surah Al-Anbiya 21:18',
    tabHome: 'Home', tabTruths: 'Truths', tabMyths: 'Myth or Fact', tabQuiz: 'Quiz', tabAbout: 'Book',
    truthsTitle: 'Missiles of Truth',
    truthsDesc: '20 truths from the book — each truth refutes a myth about Islam',
    mythsTitle: 'Myth or Fact?',
    mythsDesc: 'Test your knowledge — flip the card to discover the truth',
    quizTitle: 'Who Wants to Be a Scholar?',
    quizDesc: 'Quick quiz — myth or fact?',
    helpTitle: '❓ Help',
    duaPanelTitle: '🤲 Duas for Victory & Steadfastness',
    dailyLabel: '🎯 Today\'s Missile',
    myth: '❌ Myth',
    reality: '✅ Fact',
    flip: 'Flip Card',
    chapter: 'Chapter',
    share: 'Share',
    searchPlaceholder: 'Search truths...',
    quizStart: 'Start Quiz',
    quizNext: 'Next Question',
    quizFinish: 'See Results',
    quizAgain: 'Retake Quiz',
    quizMythBtn: '❌ Myth',
    quizFactBtn: '✅ Fact',
    quizCorrect: 'Correct!',
    quizWrong: 'Wrong!',
    quizScore: 'Score',
    lifeline5050: '📖 Eliminate',
    lifelineHint: '🤲 Hint',
    lifelineRef: '📞 Quran Ref',
    xpLabel: 'XP',
    levelLabel: 'Level',
    badgesLabel: 'Badges',
    youngMode: '🌱 Young Explorer',
    teenMode: '📚 Teen Scholar',
    streakMsg: 'day streak!',
    splashFeatures: [
      '20 truths that refute misconceptions',
      'Myth or Fact interactive cards',
      'Quiz: Who Wants to Be a Scholar?',
      'XP points & badge system'
    ],
  },
  fr: {
    appTitle: 'Missiles de Verite',
    splashSub: 'Defendre l\'Islam contre les idees recues',
    splashHint: 'appuyez pour passer',
    sacredRef: 'Sourate Al-Anbiya 21:18',
    tabHome: 'Accueil', tabTruths: 'Verites', tabMyths: 'Mythe ou Fait', tabQuiz: 'Quiz', tabAbout: 'Livre',
    truthsTitle: 'Missiles de Verite',
    truthsDesc: '20 verites du livre — chaque verite refute un mythe sur l\'Islam',
    mythsTitle: 'Mythe ou Fait ?',
    mythsDesc: 'Testez vos connaissances — retournez la carte pour decouvrir la verite',
    quizTitle: 'Qui Veut Etre un Savant ?',
    quizDesc: 'Quiz rapide — mythe ou fait ?',
    helpTitle: '❓ Aide',
    duaPanelTitle: '🤲 Duas pour la Victoire',
    dailyLabel: '🎯 Missile du Jour',
    myth: '❌ Mythe',
    reality: '✅ Fait',
    flip: 'Retourner la Carte',
    chapter: 'Chapitre',
    share: 'Partager',
    searchPlaceholder: 'Rechercher les verites...',
    quizStart: 'Commencer le Quiz',
    quizNext: 'Question Suivante',
    quizFinish: 'Voir les Resultats',
    quizAgain: 'Refaire le Quiz',
    quizMythBtn: '❌ Mythe',
    quizFactBtn: '✅ Fait',
    quizCorrect: 'Correct !',
    quizWrong: 'Faux !',
    quizScore: 'Score',
    lifeline5050: '📖 Eliminer',
    lifelineHint: '🤲 Indice',
    lifelineRef: '📞 Ref. Coran',
    xpLabel: 'XP',
    levelLabel: 'Niveau',
    badgesLabel: 'Badges',
    youngMode: '🌱 Jeune Explorateur',
    teenMode: '📚 Jeune Chercheur',
    streakMsg: 'jours consecutifs !',
    splashFeatures: [
      '20 verites qui refutent les idees recues',
      'Cartes interactives Mythe ou Fait',
      'Quiz : Qui Veut Etre un Savant ?',
      'Systeme de points XP et badges'
    ],
  }
};

// ═══════════════ TRUTH CARDS DATA (20 cards, organized by 8 chapters) ═══════════════
const TRUTHS = [
  // Chapter 1: Rational Thinking vs Blind Imitation (العقل والتقليد الأعمى)
  {
    id:1, emoji:'🧠', chapter:1,
    ar:{title:'العقل أولاً ثم ننظر فيما يقال',myth:'الإسلام يطلب إيماناً أعمى بدون تفكير',reality:'يضع الغزالي العقل أولاً — ثم ننظر فيما يقال. الإسلام الوحيد الذي جعل العقل شرطاً للتكليف. القرآن مليء بـ"أفلا تعقلون" — وردت ١٣ مرة.',verse:'أَفَلَا يَتَدَبَّرُونَ الْقُرْآنَ أَمْ عَلَىٰ قُلُوبٍ أَقْفَالُهَا',verseRef:'سورة محمد ٤٧: ٢٤',action:'اقرأ آية واحدة اليوم وتدبر معناها بنفسك'},
    en:{title:'Reason Is the Foundation of Faith',myth:'Islam demands blind faith without thinking',reality:'Al-Ghazali responds in "Missiles of Truth": Islam is the only religion that made reason a condition for religious obligation. The Quran is full of calls to reflect and reason: "Do you not use reason?" appears 13 times.',verse:'أَفَلَا يَتَدَبَّرُونَ الْقُرْآنَ أَمْ عَلَىٰ قُلُوبٍ أَقْفَالُهَا',verseRef:'Surah Muhammad 47:24',action:'Read one verse today and reflect on its meaning yourself'},
    fr:{title:'La Raison, Fondement de la Foi',myth:'L\'Islam exige une foi aveugle sans reflexion',reality:'Al-Ghazali répond dans "Missiles de Vérité": L\'Islam est la seule religion qui fait de la raison une condition de l\'obligation religieuse. Le Coran appelle a la reflexion : "Ne raisonnez-vous pas ?" apparait 13 fois.',verse:'أَفَلَا يَتَدَبَّرُونَ الْقُرْآنَ أَمْ عَلَىٰ قُلُوبٍ أَقْفَالُهَا',verseRef:'Sourate Muhammad 47:24',action:'Lisez un verset aujourd\'hui et reflechissez a son sens'}
  },
  {
    id:2, emoji:'📖', chapter:1,
    ar:{title:'حرية الاعتقاد',myth:'الإسلام انتشر بالسيف فقط',reality:'يرد الغزالي في "قذائف الحق": القرآن صريح: "لا إكراه في الدين". التاريخ يثبت أن أكبر الشعوب المسلمة (إندونيسيا وماليزيا) لم تصلها جيوش، بل وصلها التجار والعلماء.',verse:'لَا إِكْرَاهَ فِي الدِّينِ ۖ قَد تَّبَيَّنَ الرُّشْدُ مِنَ الْغَيِّ',verseRef:'سورة البقرة ٢: ٢٥٦',action:'شارك هذه الحقيقة مع صديق لا يعرفها'},
    en:{title:'Freedom of Belief',myth:'Islam was spread only by the sword',reality:'Al-Ghazali responds in "Missiles of Truth": The Quran is clear: "There is no compulsion in religion." History proves the largest Muslim populations (Indonesia, Malaysia) were never reached by armies — but by traders and scholars.',verse:'لَا إِكْرَاهَ فِي الدِّينِ ۖ قَد تَّبَيَّنَ الرُّشْدُ مِنَ الْغَيِّ',verseRef:'Surah Al-Baqarah 2:256',action:'Share this fact with a friend who may not know it'},
    fr:{title:'Liberte de Croyance',myth:'L\'Islam s\'est repandu uniquement par l\'epee',reality:'Al-Ghazali répond dans "Missiles de Vérité": Le Coran est clair : "Nulle contrainte en religion." L\'histoire prouve que les plus grandes populations musulmanes (Indonesie, Malaisie) n\'ont jamais ete atteintes par des armees, mais par des commercants et des savants.',verse:'لَا إِكْرَاهَ فِي الدِّينِ ۖ قَد تَّبَيَّنَ الرُّشْدُ مِنَ الْغَيِّ',verseRef:'Sourate Al-Baqarah 2:256',action:'Partagez ce fait avec un ami qui ne le connait peut-etre pas'}
  },
  {
    id:3, emoji:'🔬', chapter:1,
    ar:{title:'العلم والإيمان توأمان',myth:'الدين يعادي العلم والتقدم',reality:'يرد الغزالي في "قذائف الحق": الحضارة الإسلامية قادت العلم لقرون. الجبر والخوارزميات والبصريات وعلم الجراحة — كلها ابتكارات مسلمين. القرآن يأمر بالقراءة والتعلم.',verse:'اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ',verseRef:'سورة العلق ٩٦: ١',action:'ابحث عن عالم مسلم واحد وتعرف على إنجازاته'},
    en:{title:'Science and Faith Are Twins',myth:'Religion is the enemy of science and progress',reality:'Al-Ghazali responds in "Missiles of Truth": Islamic civilization led science for centuries. Algebra, algorithms, optics, and surgery — all Muslim innovations. The Quran commands reading and learning.',verse:'اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ',verseRef:'Surah Al-Alaq 96:1',action:'Research one Muslim scientist and learn about their achievements'},
    fr:{title:'Science et Foi Sont Jumelles',myth:'La religion est l\'ennemi de la science et du progres',reality:'Al-Ghazali répond dans "Missiles de Vérité": La civilisation islamique a dirige la science pendant des siecles. L\'algebre, les algorithmes, l\'optique et la chirurgie — toutes des innovations musulmanes. Le Coran ordonne de lire et d\'apprendre.',verse:'اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ',verseRef:'Sourate Al-Alaq 96:1',action:'Recherchez un scientifique musulman et decouvrez ses realisations'}
  },
  // Chapter 2: Defending Monotheism (الدفاع عن التوحيد)
  {
    id:4, emoji:'☝️', chapter:2,
    ar:{title:'التوحيد تحرير للإنسان',myth:'التوحيد يقيد الإنسان ويحد من حريته',reality:'يرد الغزالي في "قذائف الحق": التوحيد يحرر الإنسان من عبودية البشر والأصنام والأهواء. من يعبد الله وحده لا يخضع لأي مخلوق. هذا أعظم تحرير عرفته البشرية.',verse:'أَأَرْبَابٌ مُّتَفَرِّقُونَ خَيْرٌ أَمِ اللَّهُ الْوَاحِدُ الْقَهَّارُ',verseRef:'سورة يوسف ١٢: ٣٩',action:'تأمل: ما الأشياء التي تتحكم في قراراتك غير الله؟'},
    en:{title:'Monotheism Liberates Humanity',myth:'Monotheism restricts people and limits their freedom',reality:'Al-Ghazali responds in "Missiles of Truth": Monotheism frees humans from the slavery of other humans, idols, and desires. One who worships God alone submits to no creature. This is the greatest liberation humanity has ever known.',verse:'أَأَرْبَابٌ مُّتَفَرِّقُونَ خَيْرٌ أَمِ اللَّهُ الْوَاحِدُ الْقَهَّارُ',verseRef:'Surah Yusuf 12:39',action:'Reflect: what things control your decisions besides God?'},
    fr:{title:'Le Monotheisme Libere l\'Humanite',myth:'Le monotheisme limite les gens et restreint leur liberte',reality:'Al-Ghazali répond dans "Missiles de Vérité": Le monotheisme libere l\'homme de l\'esclavage des autres hommes, des idoles et des desirs. Celui qui adore Dieu seul ne se soumet a aucune creature. C\'est la plus grande liberation que l\'humanite ait connue.',verse:'أَأَرْبَابٌ مُّتَفَرِّقُونَ خَيْرٌ أَمِ اللَّهُ الْوَاحِدُ الْقَهَّارُ',verseRef:'Sourate Yusuf 12:39',action:'Reflechissez : quelles choses controlent vos decisions en dehors de Dieu ?'}
  },
  {
    id:5, emoji:'🌍', chapter:2,
    ar:{title:'إله واحد لكل البشر',myth:'الإسلام دين عرقي خاص بالعرب',reality:'يرد الغزالي في "قذائف الحق": الإسلام جاء للبشرية جمعاء. النبي محمد أُرسل للناس كافة. وبلال الحبشي وسلمان الفارسي وصهيب الرومي كانوا من أوائل المسلمين — لا فرق بين عربي وأعجمي.',verse:'وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِّلْعَالَمِينَ',verseRef:'سورة الأنبياء ٢١: ١٠٧',action:'تعرف على قصة صحابي غير عربي اعتنق الإسلام'},
    en:{title:'One God for All Humanity',myth:'Islam is an ethnic religion only for Arabs',reality:'Al-Ghazali responds in "Missiles of Truth": Islam came for all of humanity. Prophet Muhammad was sent to all people. Bilal the Abyssinian, Salman the Persian, and Suhayb the Roman were among the first Muslims — no distinction between Arab and non-Arab.',verse:'وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِّلْعَالَمِينَ',verseRef:'Surah Al-Anbiya 21:107',action:'Learn about a non-Arab companion who embraced Islam'},
    fr:{title:'Un Dieu pour Toute l\'Humanite',myth:'L\'Islam est une religion ethnique reservee aux Arabes',reality:'Al-Ghazali répond dans "Missiles de Vérité": L\'Islam est venu pour toute l\'humanite. Le Prophete Muhammad a ete envoye a tous les peuples. Bilal l\'Abyssin, Salman le Persan et Suhayb le Romain etaient parmi les premiers musulmans.',verse:'وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِّلْعَالَمِينَ',verseRef:'Sourate Al-Anbiya 21:107',action:'Decouvrez l\'histoire d\'un compagnon non arabe qui a embrasse l\'Islam'}
  },
  // Chapter 3: What Enemies Want from Islam (ماذا يريد الأعداء من الإسلام)
  {
    id:6, emoji:'🛡️', chapter:3,
    ar:{title:'مؤامرة التجزئة',myth:'المسلمون منقسمون بطبيعتهم ولا يمكن توحيدهم',reality:'يرد الغزالي في "قذائف الحق": الانقسامات في العالم الإسلامي نتجت عن مؤامرات استعمارية مدروسة لتفتيت الأمة. التاريخ الإسلامي مليء بنماذج الوحدة والتعاون بين شعوب مختلفة.',verse:'وَاعْتَصِمُوا بِحَبْلِ اللَّهِ جَمِيعًا وَلَا تَفَرَّقُوا',verseRef:'سورة آل عمران ٣: ١٠٣',action:'ابحث عن شيء مشترك مع مسلم من ثقافة مختلفة'},
    en:{title:'The Fragmentation Conspiracy',myth:'Muslims are naturally divided and cannot be united',reality:'Al-Ghazali responds in "Missiles of Truth": Divisions in the Muslim world resulted from calculated colonial conspiracies to fragment the Ummah. Islamic history is full of examples of unity and cooperation among different peoples.',verse:'وَاعْتَصِمُوا بِحَبْلِ اللَّهِ جَمِيعًا وَلَا تَفَرَّقُوا',verseRef:'Surah Aal-Imran 3:103',action:'Find something in common with a Muslim from a different culture'},
    fr:{title:'Le Complot de la Fragmentation',myth:'Les musulmans sont naturellement divises et ne peuvent etre unis',reality:'Al-Ghazali répond dans "Missiles de Vérité": Les divisions dans le monde musulman resultent de complots coloniaux calcules pour fragmenter la Oumma. L\'histoire islamique regorge d\'exemples d\'unite et de cooperation entre differents peuples.',verse:'وَاعْتَصِمُوا بِحَبْلِ اللَّهِ جَمِيعًا وَلَا تَفَرَّقُوا',verseRef:'Sourate Aal-Imran 3:103',action:'Trouvez un point commun avec un musulman d\'une culture differente'}
  },
  {
    id:7, emoji:'📰', chapter:3,
    ar:{title:'حرب الإعلام',myth:'الإعلام الغربي ينقل صورة صادقة عن الإسلام',reality:'الغزالي يكشف أن كثيراً من وسائل الإعلام تختار الصور السلبية عمداً وتتجاهل إنجازات المسلمين ومساهماتهم الحضارية.',verse:'يَا أَيُّهَا الَّذِينَ آمَنُوا إِن جَاءَكُمْ فَاسِقٌ بِنَبَإٍ فَتَبَيَّنُوا',verseRef:'سورة الحجرات ٤٩: ٦',action:'قبل أن تصدق خبراً عن الإسلام، تحقق من مصدرين مختلفين'},
    en:{title:'The Media War',myth:'Western media presents an honest picture of Islam',reality:'Al-Ghazali reveals that many media outlets deliberately select negative images and ignore Muslim achievements and civilizational contributions.',verse:'يَا أَيُّهَا الَّذِينَ آمَنُوا إِن جَاءَكُمْ فَاسِقٌ بِنَبَإٍ فَتَبَيَّنُوا',verseRef:'Surah Al-Hujurat 49:6',action:'Before believing news about Islam, verify from two different sources'},
    fr:{title:'La Guerre Mediatique',myth:'Les medias occidentaux presentent une image honnete de l\'Islam',reality:'Al-Ghazali revele que de nombreux medias selectionnent deliberement des images negatives et ignorent les realisations et contributions civilisationnelles des musulmans.',verse:'يَا أَيُّهَا الَّذِينَ آمَنُوا إِن جَاءَكُمْ فَاسِقٌ بِنَبَإٍ فَتَبَيَّنُوا',verseRef:'Sourate Al-Hujurat 49:6',action:'Avant de croire une info sur l\'Islam, verifiez aupres de deux sources differentes'}
  },
  // Chapter 4: Islam and Social Reform (الإسلام والإصلاح الاجتماعي)
  {
    id:8, emoji:'⚖️', chapter:4,
    ar:{title:'العدالة الاجتماعية في الإسلام',myth:'الإسلام لا يهتم بالعدالة الاجتماعية',reality:'الزكاة ركن من أركان الإسلام — نظام اقتصادي ملزم لتوزيع الثروة. الإسلام حارب الاحتكار والربا وتكديس الأموال قبل أي نظام اشتراكي بقرون.',verse:'كَيْ لَا يَكُونَ دُولَةً بَيْنَ الْأَغْنِيَاءِ مِنكُمْ',verseRef:'سورة الحشر ٥٩: ٧',action:'تعلم كيف تُحسب الزكاة وما الفرق بينها وبين الضرائب'},
    en:{title:'Social Justice in Islam',myth:'Islam does not care about social justice',reality:'Zakat is a pillar of Islam — a binding economic system for wealth distribution. Islam fought monopoly, usury, and hoarding centuries before any socialist system.',verse:'كَيْ لَا يَكُونَ دُولَةً بَيْنَ الْأَغْنِيَاءِ مِنكُمْ',verseRef:'Surah Al-Hashr 59:7',action:'Learn how Zakat is calculated and how it differs from taxes'},
    fr:{title:'La Justice Sociale en Islam',myth:'L\'Islam ne se soucie pas de la justice sociale',reality:'La Zakat est un pilier de l\'Islam — un systeme economique obligatoire pour la redistribution des richesses. L\'Islam a combattu le monopole, l\'usure et la thesaurisation des siecles avant tout systeme socialiste.',verse:'كَيْ لَا يَكُونَ دُولَةً بَيْنَ الْأَغْنِيَاءِ مِنكُمْ',verseRef:'Sourate Al-Hashr 59:7',action:'Apprenez comment la Zakat est calculee et en quoi elle differe des impots'}
  },
  {
    id:9, emoji:'👩', chapter:4,
    ar:{title:'المرأة في الإسلام',myth:'الإسلام يضطهد المرأة',reality:'الإسلام أعطى المرأة حق الملكية والميراث والتعليم والعمل قبل الغرب بقرون. خديجة كانت سيدة أعمال ناجحة، وعائشة كانت عالمة يرجع إليها الصحابة.',verse:'وَلَهُنَّ مِثْلُ الَّذِي عَلَيْهِنَّ بِالْمَعْرُوفِ',verseRef:'سورة البقرة ٢: ٢٢٨',action:'اقرأ عن سيدة مسلمة مؤثرة في التاريخ'},
    en:{title:'Women in Islam',myth:'Islam oppresses women',reality:'Islam gave women the right to own property, inherit, learn, and work centuries before the West. Khadijah was a successful businesswoman, and Aisha was a scholar consulted by the companions.',verse:'وَلَهُنَّ مِثْلُ الَّذِي عَلَيْهِنَّ بِالْمَعْرُوفِ',verseRef:'Surah Al-Baqarah 2:228',action:'Read about an influential Muslim woman in history'},
    fr:{title:'La Femme en Islam',myth:'L\'Islam opprime les femmes',reality:'L\'Islam a donne aux femmes le droit de propriete, d\'heritage, d\'education et de travail des siecles avant l\'Occident. Khadijah etait une femme d\'affaires prospere, et Aisha etait une savante consultee par les compagnons.',verse:'وَلَهُنَّ مِثْلُ الَّذِي عَلَيْهِنَّ بِالْمَعْرُوفِ',verseRef:'Sourate Al-Baqarah 2:228',action:'Lisez l\'histoire d\'une femme musulmane influente dans l\'histoire'}
  },
  {
    id:10, emoji:'🤝', chapter:4,
    ar:{title:'التعايش مع الآخر',myth:'الإسلام لا يقبل التعايش مع غير المسلمين',reality:'النبي محمد عاش مع اليهود والنصارى في المدينة ووضع ميثاق المدينة — أول دستور مدني في التاريخ. الإسلام يأمر بالبر والإحسان لغير المسلمين.',verse:'لَّا يَنْهَاكُمُ اللَّهُ عَنِ الَّذِينَ لَمْ يُقَاتِلُوكُمْ فِي الدِّينِ ... أَن تَبَرُّوهُمْ وَتُقْسِطُوا إِلَيْهِمْ',verseRef:'سورة الممتحنة ٦٠: ٨',action:'ابدأ حواراً محترماً مع شخص من ديانة أخرى'},
    en:{title:'Coexistence with Others',myth:'Islam does not accept coexistence with non-Muslims',reality:'Prophet Muhammad lived with Jews and Christians in Medina and established the Charter of Medina — the first civil constitution in history. Islam commands goodness and justice toward non-Muslims.',verse:'لَّا يَنْهَاكُمُ اللَّهُ عَنِ الَّذِينَ لَمْ يُقَاتِلُوكُمْ فِي الدِّينِ ... أَن تَبَرُّوهُمْ وَتُقْسِطُوا إِلَيْهِمْ',verseRef:'Surah Al-Mumtahanah 60:8',action:'Start a respectful dialogue with someone of another faith'},
    fr:{title:'Coexistence avec les Autres',myth:'L\'Islam n\'accepte pas la coexistence avec les non-musulmans',reality:'Le Prophete Muhammad a vecu avec des juifs et des chretiens a Medine et a etabli la Charte de Medine — la premiere constitution civile de l\'histoire. L\'Islam ordonne la bonte et la justice envers les non-musulmans.',verse:'لَّا يَنْهَاكُمُ اللَّهُ عَنِ الَّذِينَ لَمْ يُقَاتِلُوكُمْ فِي الدِّينِ ... أَن تَبَرُّوهُمْ وَتُقْسِطُوا إِلَيْهِمْ',verseRef:'Sourate Al-Mumtahanah 60:8',action:'Engagez un dialogue respectueux avec une personne d\'une autre religion'}
  },
  // Chapter 5: Responding to Doubts (الرد على الشبهات)
  {
    id:11, emoji:'💎', chapter:5,
    ar:{title:'القرآن معجزة لغوية',myth:'القرآن كتاب قديم لا يصلح لهذا الزمان',reality:'القرآن تحدى البشرية أن تأتي بسورة مثله فعجزوا. لغته الفريدة لم تتغير منذ ١٤٠٠ سنة، بينما تتغير كل اللغات. وإشاراته العلمية تُكتشف تباعاً.',verse:'قُل لَّئِنِ اجْتَمَعَتِ الْإِنسُ وَالْجِنُّ عَلَىٰ أَن يَأْتُوا بِمِثْلِ هَٰذَا الْقُرْآنِ لَا يَأْتُونَ بِمِثْلِهِ',verseRef:'سورة الإسراء ١٧: ٨٨',action:'اقرأ سورة قصيرة وتأمل بلاغتها'},
    en:{title:'The Quran: A Linguistic Miracle',myth:'The Quran is an outdated book unfit for this era',reality:'The Quran challenged humanity to produce a chapter like it — they could not. Its unique language has remained unchanged for 1,400 years while all other languages evolved. Its scientific hints continue to be discovered.',verse:'قُل لَّئِنِ اجْتَمَعَتِ الْإِنسُ وَالْجِنُّ عَلَىٰ أَن يَأْتُوا بِمِثْلِ هَٰذَا الْقُرْآنِ لَا يَأْتُونَ بِمِثْلِهِ',verseRef:'Surah Al-Isra 17:88',action:'Read a short Surah and reflect on its eloquence'},
    fr:{title:'Le Coran : Miracle Linguistique',myth:'Le Coran est un livre demode inadapte a notre epoque',reality:'Le Coran a defie l\'humanite de produire un chapitre semblable — ils n\'ont pas pu. Sa langue unique est restee inchangee pendant 1 400 ans alors que toutes les autres langues ont evolue.',verse:'قُل لَّئِنِ اجْتَمَعَتِ الْإِنسُ وَالْجِنُّ عَلَىٰ أَن يَأْتُوا بِمِثْلِ هَٰذَا الْقُرْآنِ لَا يَأْتُونَ بِمِثْلِهِ',verseRef:'Sourate Al-Isra 17:88',action:'Lisez une courte sourate et reflechissez a son eloquence'}
  },
  {
    id:12, emoji:'🕊️', chapter:5,
    ar:{title:'الجهاد ليس إرهاباً',myth:'الجهاد يعني الحرب والعنف دائماً',reality:'الجهاد الأكبر هو مجاهدة النفس. والجهاد الأصغر له شروط صارمة: لا يُقتل طفل ولا امرأة ولا شيخ ولا راهب ولا تُقطع شجرة. هو دفاع مشروع لا عدوان.',verse:'وَقَاتِلُوا فِي سَبِيلِ اللَّهِ الَّذِينَ يُقَاتِلُونَكُمْ وَلَا تَعْتَدُوا',verseRef:'سورة البقرة ٢: ١٩٠',action:'اقرأ عن أخلاقيات الحرب في الإسلام'},
    en:{title:'Jihad Is Not Terrorism',myth:'Jihad always means war and violence',reality:'The greater jihad is the struggle against one\'s own desires. The lesser jihad has strict rules: no killing of children, women, elders, or monks; no cutting of trees. It is legitimate defense, not aggression.',verse:'وَقَاتِلُوا فِي سَبِيلِ اللَّهِ الَّذِينَ يُقَاتِلُونَكُمْ وَلَا تَعْتَدُوا',verseRef:'Surah Al-Baqarah 2:190',action:'Read about the ethics of warfare in Islam'},
    fr:{title:'Le Jihad N\'est Pas du Terrorisme',myth:'Le jihad signifie toujours la guerre et la violence',reality:'Le grand jihad est la lutte contre ses propres desirs. Le petit jihad a des regles strictes : pas de meurtre d\'enfants, de femmes, de personnes agees ou de moines. C\'est une defense legitime, pas une agression.',verse:'وَقَاتِلُوا فِي سَبِيلِ اللَّهِ الَّذِينَ يُقَاتِلُونَكُمْ وَلَا تَعْتَدُوا',verseRef:'Sourate Al-Baqarah 2:190',action:'Lisez sur l\'ethique de la guerre en Islam'}
  },
  // Chapter 6: Islamic Dawah and Corrupt Rulers (الدعوة الإسلامية والحكام)
  {
    id:13, emoji:'🏛️', chapter:6,
    ar:{title:'فصل الدين عن الظلم لا عن الدولة',myth:'الإسلام لا يفصل بين الدين والسياسة وهذا تخلف',reality:'الإسلام يفصل بين الدين والظلم لا بين الدين والعدل. القيم الإسلامية (الشورى والعدل والمساواة) هي أسس الحكم الرشيد في أي نظام.',verse:'وَأَمْرُهُمْ شُورَىٰ بَيْنَهُمْ',verseRef:'سورة الشورى ٤٢: ٣٨',action:'قارن بين مبدأ الشورى والديمقراطية الحديثة'},
    en:{title:'Separating Religion from Tyranny, Not from Governance',myth:'Islam does not separate religion from politics — and that is backward',reality:'Islam separates religion from tyranny, not from justice. Islamic values (consultation, justice, equality) are the foundations of good governance in any system.',verse:'وَأَمْرُهُمْ شُورَىٰ بَيْنَهُمْ',verseRef:'Surah Ash-Shura 42:38',action:'Compare the principle of Shura with modern democracy'},
    fr:{title:'Separer la Religion de la Tyrannie, Pas de la Gouvernance',myth:'L\'Islam ne separe pas religion et politique — c\'est retrograde',reality:'L\'Islam separe la religion de la tyrannie, pas de la justice. Les valeurs islamiques (consultation, justice, egalite) sont les fondements d\'une bonne gouvernance dans tout systeme.',verse:'وَأَمْرُهُمْ شُورَىٰ بَيْنَهُمْ',verseRef:'Sourate Ash-Shura 42:38',action:'Comparez le principe de la Choura avec la democratie moderne'}
  },
  {
    id:14, emoji:'📣', chapter:6,
    ar:{title:'الأمر بالمعروف واجب',myth:'نقد الحاكم في الإسلام ممنوع',reality:'الأمر بالمعروف والنهي عن المنكر واجب حتى مع الحكام. قال النبي: "أفضل الجهاد كلمة حق عند سلطان جائر". الصمت عن الظلم خيانة.',verse:'وَلْتَكُن مِّنكُمْ أُمَّةٌ يَدْعُونَ إِلَى الْخَيْرِ وَيَأْمُرُونَ بِالْمَعْرُوفِ وَيَنْهَوْنَ عَنِ الْمُنكَرِ',verseRef:'سورة آل عمران ٣: ١٠٤',action:'فكّر: كيف يمكنك المساهمة في الإصلاح في محيطك؟'},
    en:{title:'Commanding Good Is a Duty',myth:'Criticizing rulers is forbidden in Islam',reality:'Commanding good and forbidding evil is a duty even with rulers. The Prophet said: "The best jihad is a word of truth before an unjust ruler." Silence before injustice is betrayal.',verse:'وَلْتَكُن مِّنكُمْ أُمَّةٌ يَدْعُونَ إِلَى الْخَيْرِ وَيَأْمُرُونَ بِالْمَعْرُوفِ وَيَنْهَوْنَ عَنِ الْمُنكَرِ',verseRef:'Surah Aal-Imran 3:104',action:'Think: how can you contribute to reform in your community?'},
    fr:{title:'Ordonner le Bien Est un Devoir',myth:'Critiquer les dirigeants est interdit en Islam',reality:'Ordonner le bien et interdire le mal est un devoir meme envers les dirigeants. Le Prophete a dit : "Le meilleur jihad est une parole de verite devant un dirigeant injuste." Le silence face a l\'injustice est une trahison.',verse:'وَلْتَكُن مِّنكُمْ أُمَّةٌ يَدْعُونَ إِلَى الْخَيْرِ وَيَأْمُرُونَ بِالْمَعْرُوفِ وَيَنْهَوْنَ عَنِ الْمُنكَرِ',verseRef:'Sourate Aal-Imran 3:104',action:'Reflechissez : comment contribuer a la reforme dans votre communaute ?'}
  },
  // Chapter 7: Countering Materialism & Atheism (الرد على المادية والإلحاد)
  {
    id:15, emoji:'🌌', chapter:7,
    ar:{title:'الكون يشهد بوجود الخالق',myth:'العلم أثبت أن الكون لا يحتاج خالقاً',reality:'كل اكتشاف علمي يكشف تصميماً أدق وأعقد. الثوابت الكونية مضبوطة بدقة مذهلة. لو تغير ثابت واحد بجزء من مليار لما وُجدت الحياة.',verse:'إِنَّ فِي خَلْقِ السَّمَاوَاتِ وَالْأَرْضِ وَاخْتِلَافِ اللَّيْلِ وَالنَّهَارِ لَآيَاتٍ لِّأُولِي الْأَلْبَابِ',verseRef:'سورة آل عمران ٣: ١٩٠',action:'تأمل في إحدى عجائب الكون الليلة: النجوم أو القمر'},
    en:{title:'The Universe Testifies to the Creator',myth:'Science has proven the universe does not need a creator',reality:'Every scientific discovery reveals a more precise and complex design. Universal constants are fine-tuned with astonishing precision. If one constant changed by a billionth, life would not exist.',verse:'إِنَّ فِي خَلْقِ السَّمَاوَاتِ وَالْأَرْضِ وَاخْتِلَافِ اللَّيْلِ وَالنَّهَارِ لَآيَاتٍ لِّأُولِي الْأَلْبَابِ',verseRef:'Surah Aal-Imran 3:190',action:'Contemplate one wonder of the universe tonight: the stars or the moon'},
    fr:{title:'L\'Univers Temoigne du Createur',myth:'La science a prouve que l\'univers n\'a pas besoin d\'un createur',reality:'Chaque decouverte scientifique revele un design plus precis et complexe. Les constantes universelles sont ajustees avec une precision stupifiante. Si une seule changeait d\'un milliardieme, la vie n\'existerait pas.',verse:'إِنَّ فِي خَلْقِ السَّمَاوَاتِ وَالْأَرْضِ وَاخْتِلَافِ اللَّيْلِ وَالنَّهَارِ لَآيَاتٍ لِّأُولِي الْأَلْبَابِ',verseRef:'Sourate Aal-Imran 3:190',action:'Contemplez une merveille de l\'univers ce soir : les etoiles ou la lune'}
  },
  {
    id:16, emoji:'💰', chapter:7,
    ar:{title:'المادية لا تحقق السعادة',myth:'الثروة المادية كافية لتحقيق السعادة',reality:'أغنى الدول هي الأعلى في نسب الانتحار والاكتئاب. الإنسان يحتاج معنى لحياته. الإيمان يعطي الحياة غاية تتجاوز المادة.',verse:'وَمَنْ أَعْرَضَ عَن ذِكْرِي فَإِنَّ لَهُ مَعِيشَةً ضَنكًا',verseRef:'سورة طه ٢٠: ١٢٤',action:'اسأل نفسك: ما الذي يعطي حياتك معنى حقيقياً؟'},
    en:{title:'Materialism Does Not Bring Happiness',myth:'Material wealth is enough to achieve happiness',reality:'The wealthiest nations have the highest rates of suicide and depression. Humans need meaning in their lives. Faith gives life a purpose that transcends the material.',verse:'وَمَنْ أَعْرَضَ عَن ذِكْرِي فَإِنَّ لَهُ مَعِيشَةً ضَنكًا',verseRef:'Surah Ta-Ha 20:124',action:'Ask yourself: what gives your life true meaning?'},
    fr:{title:'Le Materialisme Ne Rend Pas Heureux',myth:'La richesse materielle suffit pour atteindre le bonheur',reality:'Les nations les plus riches ont les taux les plus eleves de suicide et de depression. L\'homme a besoin de sens dans sa vie. La foi donne a la vie un but qui transcende le materiel.',verse:'وَمَنْ أَعْرَضَ عَن ذِكْرِي فَإِنَّ لَهُ مَعِيشَةً ضَنكًا',verseRef:'Sourate Ta-Ha 20:124',action:'Demandez-vous : qu\'est-ce qui donne un vrai sens a votre vie ?'}
  },
  {
    id:17, emoji:'🧬', chapter:7,
    ar:{title:'الفطرة الإنسانية',myth:'الإنسان لا يحتاج ديناً — الأخلاق ممكنة بدونه',reality:'الفطرة الإنسانية تبحث عن الله. كل الحضارات عبر التاريخ كان لها إيمان بقوة عليا. الأخلاق بلا مرجعية إلهية تصبح نسبية وقابلة للتلاعب.',verse:'فِطْرَتَ اللَّهِ الَّتِي فَطَرَ النَّاسَ عَلَيْهَا ۚ لَا تَبْدِيلَ لِخَلْقِ اللَّهِ',verseRef:'سورة الروم ٣٠: ٣٠',action:'تأمل: هل الأخلاق ممكنة فعلاً بدون مرجعية ثابتة؟'},
    en:{title:'Human Nature (Fitrah)',myth:'Humans don\'t need religion — morality is possible without it',reality:'Human nature inherently seeks God. Every civilization throughout history has believed in a higher power. Morality without divine reference becomes relative and subject to manipulation.',verse:'فِطْرَتَ اللَّهِ الَّتِي فَطَرَ النَّاسَ عَلَيْهَا ۚ لَا تَبْدِيلَ لِخَلْقِ اللَّهِ',verseRef:'Surah Ar-Rum 30:30',action:'Reflect: is morality truly possible without a stable reference point?'},
    fr:{title:'La Nature Humaine (Fitrah)',myth:'L\'homme n\'a pas besoin de religion — la morale est possible sans elle',reality:'La nature humaine cherche inheremment Dieu. Chaque civilisation a travers l\'histoire a cru en une puissance superieure. La morale sans reference divine devient relative et sujette a la manipulation.',verse:'فِطْرَتَ اللَّهِ الَّتِي فَطَرَ النَّاسَ عَلَيْهَا ۚ لَا تَبْدِيلَ لِخَلْقِ اللَّهِ',verseRef:'Sourate Ar-Rum 30:30',action:'Reflechissez : la morale est-elle vraiment possible sans point de reference stable ?'}
  },
  // Chapter 8: No Religion Without Freedom (لا دين بغير حرية)
  {
    id:18, emoji:'🗽', chapter:8,
    ar:{title:'الحرية شرط للإيمان',myth:'الإسلام يفرض نفسه على الناس',reality:'الإيمان الحقيقي لا يكون بالإكراه. الإسلام يشترط الحرية لصحة الإيمان. العبادة المفروضة بالقوة لا قيمة لها عند الله.',verse:'لَا إِكْرَاهَ فِي الدِّينِ',verseRef:'سورة البقرة ٢: ٢٥٦',action:'فكر: هل إيمانك نابع من اقتناع شخصي أم عادة موروثة؟'},
    en:{title:'Freedom Is a Condition for Faith',myth:'Islam forces itself on people',reality:'True faith cannot come through coercion. Islam requires freedom for faith to be valid. Worship imposed by force has no value before God.',verse:'لَا إِكْرَاهَ فِي الدِّينِ',verseRef:'Surah Al-Baqarah 2:256',action:'Think: is your faith from personal conviction or inherited habit?'},
    fr:{title:'La Liberte Est une Condition de la Foi',myth:'L\'Islam s\'impose aux gens',reality:'La vraie foi ne peut venir par la contrainte. L\'Islam exige la liberte pour que la foi soit valide. L\'adoration imposee par la force n\'a aucune valeur devant Dieu.',verse:'لَا إِكْرَاهَ فِي الدِّينِ',verseRef:'Sourate Al-Baqarah 2:256',action:'Pensez : votre foi vient-elle d\'une conviction personnelle ou d\'une habitude heritee ?'}
  },
  {
    id:19, emoji:'🔑', chapter:8,
    ar:{title:'حرية الفكر مصونة',myth:'الإسلام يمنع حرية الفكر والتعبير',reality:'الإسلام شجع الحوار والمناظرة. القرآن نفسه يعرض حجج المعارضين ويرد عليها. عمر بن الخطاب كان يستشير حتى النساء في القرارات المهمة.',verse:'ادْعُ إِلَىٰ سَبِيلِ رَبِّكَ بِالْحِكْمَةِ وَالْمَوْعِظَةِ الْحَسَنَةِ ۖ وَجَادِلْهُم بِالَّتِي هِيَ أَحْسَنُ',verseRef:'سورة النحل ١٦: ١٢٥',action:'تدرب على الحوار المحترم — استمع قبل أن ترد'},
    en:{title:'Freedom of Thought Is Protected',myth:'Islam forbids freedom of thought and expression',reality:'Islam encouraged dialogue and debate. The Quran itself presents opponents\' arguments and responds to them. Umar ibn al-Khattab consulted even women on important decisions.',verse:'ادْعُ إِلَىٰ سَبِيلِ رَبِّكَ بِالْحِكْمَةِ وَالْمَوْعِظَةِ الْحَسَنَةِ ۖ وَجَادِلْهُم بِالَّتِي هِيَ أَحْسَنُ',verseRef:'Surah An-Nahl 16:125',action:'Practice respectful dialogue — listen before you respond'},
    fr:{title:'La Liberte de Pensee Est Protegee',myth:'L\'Islam interdit la liberte de pensee et d\'expression',reality:'L\'Islam a encourage le dialogue et le debat. Le Coran lui-meme presente les arguments des opposants et y repond. Omar ibn al-Khattab consultait meme les femmes pour les decisions importantes.',verse:'ادْعُ إِلَىٰ سَبِيلِ رَبِّكَ بِالْحِكْمَةِ وَالْمَوْعِظَةِ الْحَسَنَةِ ۖ وَجَادِلْهُم بِالَّتِي هِيَ أَحْسَنُ',verseRef:'Sourate An-Nahl 16:125',action:'Pratiquez le dialogue respectueux — ecoutez avant de repondre'}
  },
  {
    id:20, emoji:'🌅', chapter:8,
    ar:{title:'الحق يعلو ولا يُعلى عليه',myth:'الإسلام في تراجع ولن يستعيد مكانته',reality:'الحق لا يُهزم — قد يُحجب مؤقتاً لكنه يعود دائماً. الإسلام ينمو رغم كل الحملات. الحقيقة لا تحتاج دعاية — تحتاج فقط من يزيل الغبار عنها.',verse:'بَلْ نَقْذِفُ بِالْحَقِّ عَلَى الْبَاطِلِ فَيَدْمَغُهُ فَإِذَا هُوَ زَاهِقٌ',verseRef:'سورة الأنبياء ٢١: ١٨',action:'كن قذيفة حق — شارك حقيقة واحدة تعلمتها اليوم'},
    en:{title:'Truth Prevails',myth:'Islam is declining and will never regain its stature',reality:'Truth cannot be defeated — it may be hidden temporarily but always returns. Islam grows despite all campaigns. Truth doesn\'t need propaganda — it only needs someone to dust it off.',verse:'بَلْ نَقْذِفُ بِالْحَقِّ عَلَى الْبَاطِلِ فَيَدْمَغُهُ فَإِذَا هُوَ زَاهِقٌ',verseRef:'Surah Al-Anbiya 21:18',action:'Be a missile of truth — share one fact you learned today'},
    fr:{title:'La Verite Triomphe',myth:'L\'Islam est en declin et ne retrouvera jamais sa stature',reality:'La verite ne peut etre vaincue — elle peut etre cachee temporairement mais revient toujours. L\'Islam grandit malgre toutes les campagnes. La verite n\'a pas besoin de propagande — elle a juste besoin qu\'on en enleve la poussiere.',verse:'بَلْ نَقْذِفُ بِالْحَقِّ عَلَى الْبَاطِلِ فَيَدْمَغُهُ فَإِذَا هُوَ زَاهِقٌ',verseRef:'Sourate Al-Anbiya 21:18',action:'Soyez un missile de verite — partagez un fait que vous avez appris aujourd\'hui'}
  }
];

// ═══════════════ QUIZ DATA (15 myth-or-fact questions) ═══════════════
const QUIZ_DATA = [
  {
    ar:{q:'الإسلام انتشر بالسيف فقط',hint:'فكر في إندونيسيا وماليزيا'},
    en:{q:'Islam was spread only by the sword',hint:'Think about Indonesia and Malaysia'},
    fr:{q:'L\'Islam s\'est repandu uniquement par l\'epee',hint:'Pensez a l\'Indonesie et la Malaisie'},
    isFact:false, ref:'سورة البقرة ٢: ٢٥٦', difficulty:1
  },
  {
    ar:{q:'القرآن يدعو إلى التفكير والتدبر',hint:'كم مرة وردت "أفلا تعقلون"؟'},
    en:{q:'The Quran calls for thinking and reflection',hint:'How many times does "Do you not reason?" appear?'},
    fr:{q:'Le Coran appelle a la reflexion',hint:'Combien de fois "Ne raisonnez-vous pas ?" apparait ?'},
    isFact:true, ref:'سورة محمد ٤٧: ٢٤', difficulty:1
  },
  {
    ar:{q:'الجهاد يعني الحرب والعنف دائماً',hint:'ما الجهاد الأكبر؟'},
    en:{q:'Jihad always means war and violence',hint:'What is the greater jihad?'},
    fr:{q:'Le jihad signifie toujours la guerre et la violence',hint:'Quel est le grand jihad ?'},
    isFact:false, ref:'سورة البقرة ٢: ١٩٠', difficulty:1
  },
  {
    ar:{q:'الإسلام أعطى المرأة حق الميراث قبل الغرب',hint:'متى حصلت المرأة الغربية على هذا الحق؟'},
    en:{q:'Islam gave women inheritance rights before the West',hint:'When did Western women gain this right?'},
    fr:{q:'L\'Islam a donne aux femmes le droit d\'heritage avant l\'Occident',hint:'Quand les femmes occidentales ont-elles obtenu ce droit ?'},
    isFact:true, ref:'سورة النساء ٤: ٧', difficulty:2
  },
  {
    ar:{q:'التوحيد يقيد الإنسان ويحد من حريته',hint:'عبودية الله أم عبودية البشر؟'},
    en:{q:'Monotheism restricts people and limits their freedom',hint:'Slavery to God or slavery to people?'},
    fr:{q:'Le monotheisme restreint les gens et limite leur liberte',hint:'Esclavage de Dieu ou esclavage des hommes ?'},
    isFact:false, ref:'سورة يوسف ١٢: ٣٩', difficulty:2
  },
  {
    ar:{q:'الحضارة الإسلامية قادت العلم لقرون',hint:'من اخترع الجبر؟'},
    en:{q:'Islamic civilization led science for centuries',hint:'Who invented algebra?'},
    fr:{q:'La civilisation islamique a dirige la science pendant des siecles',hint:'Qui a invente l\'algebre ?'},
    isFact:true, ref:'سورة العلق ٩٦: ١', difficulty:1
  },
  {
    ar:{q:'ميثاق المدينة كان أول دستور مدني في التاريخ',hint:'ماذا فعل النبي مع اليهود والنصارى؟'},
    en:{q:'The Charter of Medina was the first civil constitution in history',hint:'What did the Prophet do with Jews and Christians?'},
    fr:{q:'La Charte de Medine a ete la premiere constitution civile de l\'histoire',hint:'Qu\'a fait le Prophete avec les juifs et les chretiens ?'},
    isFact:true, ref:'سورة الممتحنة ٦٠: ٨', difficulty:2
  },
  {
    ar:{q:'المسلمون منقسمون بطبيعتهم ولا يمكن توحيدهم',hint:'من فرّق الأمة الإسلامية؟'},
    en:{q:'Muslims are naturally divided and cannot be united',hint:'Who divided the Muslim world?'},
    fr:{q:'Les musulmans sont naturellement divises et ne peuvent etre unis',hint:'Qui a divise le monde musulman ?'},
    isFact:false, ref:'سورة آل عمران ٣: ١٠٣', difficulty:2
  },
  {
    ar:{q:'الزكاة نظام اقتصادي لتوزيع الثروة',hint:'ما الفرق بين الزكاة والضرائب؟'},
    en:{q:'Zakat is an economic system for wealth distribution',hint:'How does Zakat differ from taxes?'},
    fr:{q:'La Zakat est un systeme economique de redistribution',hint:'Quelle difference entre la Zakat et les impots ?'},
    isFact:true, ref:'سورة الحشر ٥٩: ٧', difficulty:1
  },
  {
    ar:{q:'الإسلام يمنع نقد الحاكم الظالم',hint:'ما أفضل الجهاد عند النبي؟'},
    en:{q:'Islam forbids criticizing unjust rulers',hint:'What is the best jihad according to the Prophet?'},
    fr:{q:'L\'Islam interdit de critiquer les dirigeants injustes',hint:'Quel est le meilleur jihad selon le Prophete ?'},
    isFact:false, ref:'سورة آل عمران ٣: ١٠٤', difficulty:2
  },
  {
    ar:{q:'العلم أثبت أن الكون لا يحتاج خالقاً',hint:'ماذا عن الضبط الدقيق للثوابت الكونية؟'},
    en:{q:'Science has proven the universe does not need a creator',hint:'What about the fine-tuning of universal constants?'},
    fr:{q:'La science a prouve que l\'univers n\'a pas besoin de createur',hint:'Et le reglage fin des constantes universelles ?'},
    isFact:false, ref:'سورة آل عمران ٣: ١٩٠', difficulty:3
  },
  {
    ar:{q:'الإيمان بالقدر يعني الكسل والاستسلام',hint:'التوكل ليس كسلاً'},
    en:{q:'Belief in destiny means laziness and surrender',hint:'Trust in God is not laziness'},
    fr:{q:'Croire au destin signifie paresse et soumission',hint:'La confiance en Dieu n\'est pas de la paresse'},
    isFact:false, ref:'سورة الرعد ١٣: ١١', difficulty:2
  },
  {
    ar:{q:'حرية الفكر مصونة في الإسلام',hint:'القرآن يعرض حجج المعارضين'},
    en:{q:'Freedom of thought is protected in Islam',hint:'The Quran presents opponents\' arguments'},
    fr:{q:'La liberte de pensee est protegee en Islam',hint:'Le Coran presente les arguments des opposants'},
    isFact:true, ref:'سورة النحل ١٦: ١٢٥', difficulty:2
  },
  {
    ar:{q:'الثروة المادية كافية لتحقيق السعادة',hint:'ما نسب الاكتئاب في أغنى الدول؟'},
    en:{q:'Material wealth is enough for happiness',hint:'What are depression rates in the wealthiest nations?'},
    fr:{q:'La richesse materielle suffit pour le bonheur',hint:'Quels sont les taux de depression dans les pays les plus riches ?'},
    isFact:false, ref:'سورة طه ٢٠: ١٢٤', difficulty:1
  },
  {
    ar:{q:'الحق يعلو ولا يُعلى عليه',hint:'الإسلام ينمو رغم الحملات'},
    en:{q:'Truth always prevails over falsehood',hint:'Islam grows despite all campaigns'},
    fr:{q:'La verite triomphe toujours du mensonge',hint:'L\'Islam grandit malgre les campagnes'},
    isFact:true, ref:'سورة الأنبياء ٢١: ١٨', difficulty:1
  }
];

// ═══════════════ DUAS DATA ═══════════════
const DUAS = [
  {ar:{label:'دعاء الثبات',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا وَانصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ',tr:'ربنا أفرغ علينا صبراً وثبت أقدامنا'},en:{label:'Dua for Steadfastness',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا وَانصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ',tr:'Our Lord, pour upon us patience, plant firmly our feet, and grant us victory'},fr:{label:'Dua pour la Fermete',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا وَانصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ',tr:'Notre Seigneur, accorde-nous patience, affermis nos pas et accorde-nous la victoire'}},
  {ar:{label:'دعاء النصر',text:'اللَّهُمَّ انصُرْنَا عَلَى مَنْ ظَلَمَنَا',tr:'اللهم انصرنا على من ظلمنا'},en:{label:'Dua for Victory',text:'اللَّهُمَّ انصُرْنَا عَلَى مَنْ ظَلَمَنَا',tr:'O God, grant us victory over those who wronged us'},fr:{label:'Dua pour la Victoire',text:'اللَّهُمَّ انصُرْنَا عَلَى مَنْ ظَلَمَنَا',tr:'O Dieu, accorde-nous la victoire sur ceux qui nous ont fait du tort'}},
  {ar:{label:'دعاء الهداية',text:'اللَّهُمَّ اهْدِنِي وَسَدِّدْنِي',tr:'اللهم اهدني وسددني'},en:{label:'Dua for Guidance',text:'اللَّهُمَّ اهْدِنِي وَسَدِّدْنِي',tr:'O God, guide me and keep me on the right path'},fr:{label:'Dua pour la Guidance',text:'اللَّهُمَّ اهْدِنِي وَسَدِّدْنِي',tr:'O Dieu, guide-moi et maintiens-moi sur le droit chemin'}},
  {ar:{label:'دعاء الحق',text:'اللَّهُمَّ أَرِنَا الْحَقَّ حَقًّا وَارْزُقْنَا اتِّبَاعَهُ',tr:'اللهم أرنا الحق حقاً وارزقنا اتباعه'},en:{label:'Dua for Truth',text:'اللَّهُمَّ أَرِنَا الْحَقَّ حَقًّا وَارْزُقْنَا اتِّبَاعَهُ',tr:'O God, show us truth as truth and help us follow it'},fr:{label:'Dua pour la Verite',text:'اللَّهُمَّ أَرِنَا الْحَقَّ حَقًّا وَارْزُقْنَا اتِّبَاعَهُ',tr:'O Dieu, montre-nous la verite et aide-nous a la suivre'}},
  {ar:{label:'دعاء العلم',text:'رَبِّ زِدْنِي عِلْمًا',tr:'رب زدني علماً'},en:{label:'Dua for Knowledge',text:'رَبِّ زِدْنِي عِلْمًا',tr:'My Lord, increase me in knowledge'},fr:{label:'Dua pour le Savoir',text:'رَبِّ زِدْنِي عِلْمًا',tr:'Mon Seigneur, augmente-moi en savoir'}},
  {ar:{label:'دعاء الصبر',text:'رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ',tr:'ربنا ولا تحملنا ما لا طاقة لنا به'},en:{label:'Dua for Patience',text:'رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ',tr:'Our Lord, do not burden us with what we cannot bear'},fr:{label:'Dua pour la Patience',text:'رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ',tr:'Notre Seigneur, ne nous charge pas de ce que nous ne pouvons supporter'}},
  {ar:{label:'دعاء التوكل',text:'حَسْبِيَ اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ',tr:'حسبي الله لا إله إلا هو عليه توكلت'},en:{label:'Dua of Trust',text:'حَسْبِيَ اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ',tr:'God is sufficient for me, in Him I place my trust'},fr:{label:'Dua de Confiance',text:'حَسْبِيَ اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ',tr:'Dieu me suffit, en Lui je place ma confiance'}},
  {ar:{label:'دعاء القوة',text:'اللَّهُمَّ إِنِّي أَسْأَلُكَ الثَّبَاتَ فِي الْأَمْرِ وَالْعَزِيمَةَ عَلَى الرُّشْدِ',tr:'اللهم إني أسألك الثبات في الأمر والعزيمة على الرشد'},en:{label:'Dua for Strength',text:'اللَّهُمَّ إِنِّي أَسْأَلُكَ الثَّبَاتَ فِي الْأَمْرِ وَالْعَزِيمَةَ عَلَى الرُّشْدِ',tr:'O God, I ask You for firmness in my affairs and determination on the right path'},fr:{label:'Dua pour la Force',text:'اللَّهُمَّ إِنِّي أَسْأَلُكَ الثَّبَاتَ فِي الْأَمْرِ وَالْعَزِيمَةَ عَلَى الرُّشْدِ',tr:'O Dieu, je Te demande la fermete dans mes affaires et la determination sur le droit chemin'}}
];

// ═══════════════ CHAPTER NAMES ═══════════════
const CHAPTERS = {
  ar: ['','العقل والتقليد الأعمى','الدفاع عن التوحيد','ماذا يريد الأعداء من الإسلام','الإسلام والإصلاح الاجتماعي','الرد على الشبهات','الدعوة والحكام','الرد على المادية والإلحاد','لا دين بغير حرية'],
  en: ['','Rational Thinking vs Blind Imitation','Defending Monotheism','What Enemies Want from Islam','Islam and Social Reform','Responding to Doubts','Dawah and Rulers','Countering Materialism & Atheism','No Religion Without Freedom'],
  fr: ['','Pensee Rationnelle vs Imitation Aveugle','Defense du Monotheisme','Ce que les Ennemis Veulent de l\'Islam','Islam et Reforme Sociale','Repondre aux Doutes','Predication et Dirigeants','Contre le Materialisme et l\'Atheisme','Pas de Religion Sans Liberte']
};

// ═══════════════ XP & BADGES SYSTEM ═══════════════
const BADGES = [
  {id:'beginner',emoji:'🌟',ar:'مبتدئ',en:'Beginner',fr:'Debutant',condition:'open the app'},
  {id:'reader',emoji:'📖',ar:'قارئ',en:'Reader',fr:'Lecteur',condition:'read 10 cards'},
  {id:'scholar',emoji:'🧠',ar:'عالم',en:'Scholar',fr:'Savant',condition:'complete quiz'},
  {id:'persistent',emoji:'🔥',ar:'مثابر',en:'Persistent',fr:'Perseverant',condition:'7-day streak'},
  {id:'expert',emoji:'🏆',ar:'خبير',en:'Expert',fr:'Expert',condition:'100% quiz score'}
];

function loadXP() {
  return JSON.parse(localStorage.getItem('qh-xp') || '{"points":0,"cardsRead":[],"quizDone":false,"streak":0,"lastDate":"","badges":[]}');
}
function saveXP(data) { localStorage.setItem('qh-xp', JSON.stringify(data)); }

function addXP(amount, reason) {
  const xp = loadXP();
  xp.points += amount;
  saveXP(xp);
  updateXPDisplay();
  if (reason) showToast(`+${amount} XP — ${reason}`);
}

function markCardRead(cardId) {
  const xp = loadXP();
  if (!xp.cardsRead.includes(cardId)) {
    xp.cardsRead.push(cardId);
    xp.points += 10;
    saveXP(xp);
    updateXPDisplay();
    checkBadges();
  }
}

function checkBadges() {
  const xp = loadXP();
  let newBadge = false;
  // Beginner
  if (!xp.badges.includes('beginner')) { xp.badges.push('beginner'); newBadge = true; }
  // Reader
  if (xp.cardsRead.length >= 10 && !xp.badges.includes('reader')) { xp.badges.push('reader'); newBadge = true; }
  // Scholar
  if (xp.quizDone && !xp.badges.includes('scholar')) { xp.badges.push('scholar'); newBadge = true; }
  // Persistent
  if (xp.streak >= 7 && !xp.badges.includes('persistent')) { xp.badges.push('persistent'); newBadge = true; }
  if (newBadge) {
    saveXP(xp);
    playSound('badge');
    updateXPDisplay();
  }
}

function updateStreak() {
  const xp = loadXP();
  const today = new Date().toDateString();
  if (xp.lastDate === today) return;
  const yesterday = new Date(); yesterday.setDate(yesterday.getDate()-1);
  if (xp.lastDate === yesterday.toDateString()) {
    xp.streak++;
  } else if (xp.lastDate !== today) {
    xp.streak = 1;
  }
  xp.lastDate = today;
  saveXP(xp);
  checkBadges();
}

function updateXPDisplay() {
  const xp = loadXP();
  const level = Math.floor(xp.points / 100) + 1;
  const progress = xp.points % 100;
  const xpBar = document.getElementById('xpBar');
  const xpText = document.getElementById('xpText');
  const badgeRow = document.getElementById('badgeRow');
  if (xpBar) xpBar.style.width = progress + '%';
  if (xpText) xpText.textContent = `${T[lang].levelLabel} ${level} — ${xp.points} ${T[lang].xpLabel}`;
  if (badgeRow) {
    badgeRow.innerHTML = BADGES.map(b => {
      const earned = xp.badges.includes(b.id);
      return `<span class="badge-item ${earned?'earned':'locked'}" title="${b[lang]}">${b.emoji}</span>`;
    }).join('');
  }
}

// ═══════════════ AGE MODE ═══════════════
let ageMode = localStorage.getItem('qh-age') || 'teen';
function toggleAgeMode() {
  ageMode = ageMode === 'teen' ? 'young' : 'teen';
  localStorage.setItem('qh-age', ageMode);
  document.body.classList.toggle('young-mode', ageMode === 'young');
  const btn = document.getElementById('ageModeBtn');
  if (btn) btn.textContent = ageMode === 'young' ? T[lang].youngMode : T[lang].teenMode;
  showToast(ageMode === 'young' ? T[lang].youngMode : T[lang].teenMode);
  renderAll();
}

// ═══════════════ STATE ═══════════════
let lang = localStorage.getItem('qh-lang') || 'ar';
let theme = localStorage.getItem('qh-theme') || 'fire';
const themes = ['fire','night','steel'];
const themeIcons = ['🔥','🌙','⚔️'];
const themeNames = {fire:'نار الحق',night:'ليل هادئ',steel:'درع فولاذي'};
let currentTruthIdx = -1;

// ═══════════════ INIT ═══════════════
document.addEventListener('DOMContentLoaded', () => {
  setTheme(theme);
  setLang(lang);
  initTabs();
  initSplash();
  initScrollTop();
  renderAll();
  initScrollReveal();
  initKeyboardNav();
  updateStreak();
  checkBadges();
  document.body.classList.toggle('young-mode', ageMode === 'young');
});

function renderAll() {
  renderHome(); renderTruths(); renderMyths(); renderQuiz(); renderAbout(); renderHelp(); renderDuas();
  updateXPDisplay();
}

// ═══════════════ SPLASH ═══════════════
function initSplash() {
  let count = 5;
  const el = document.getElementById('splashCount');
  const featuresEl = document.getElementById('splashFeatures');
  if (featuresEl) {
    featuresEl.innerHTML = T[lang].splashFeatures.map((f, i) =>
      `<div class="splash-feature" style="animation-delay:${0.3 + i * 0.3}s">${f}</div>`
    ).join('');
  }
  const interval = setInterval(() => {
    count--;
    if (el) el.textContent = count;
    if (count <= 0) { dismissSplash(); clearInterval(interval); }
  }, 1000);
}
function dismissSplash() {
  const s = document.getElementById('splash');
  if (s) { s.classList.add('hidden'); setTimeout(() => s.style.display = 'none', 500); }
  playSound('click');
}

// ═══════════════ LANGUAGE ═══════════════
function setLang(l) {
  lang = l;
  localStorage.setItem('qh-lang', l);
  const isRTL = l === 'ar';
  document.documentElement.lang = l;
  document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  document.body.dir = isRTL ? 'rtl' : 'ltr';
  document.querySelectorAll('.lang-opt').forEach(b => b.classList.toggle('active', b.dataset.lang === l));
  const t = T[l];
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  set('appTitle', t.appTitle); set('splashSub', t.splashSub); set('splashHint', t.splashHint);
  set('tabHome', t.tabHome); set('tabTruths', t.tabTruths); set('tabMyths', t.tabMyths);
  set('tabQuiz', t.tabQuiz); set('tabAbout', t.tabAbout);
  set('truthsTitle', t.truthsTitle); set('truthsDesc', t.truthsDesc);
  set('mythsTitle', t.mythsTitle); set('mythsDesc', t.mythsDesc);
  set('quizTitle', t.quizTitle); set('quizDesc', t.quizDesc);
  set('helpTitle', t.helpTitle); set('duaPanelTitle', t.duaPanelTitle);
  const ageBtn = document.getElementById('ageModeBtn');
  if (ageBtn) ageBtn.textContent = ageMode === 'young' ? t.youngMode : t.teenMode;
  renderAll();
  const featuresEl = document.getElementById('splashFeatures');
  if (featuresEl) {
    featuresEl.innerHTML = T[l].splashFeatures.map((f, i) =>
      `<div class="splash-feature" style="animation-delay:${0.3 + i * 0.3}s">${f}</div>`
    ).join('');
  }
  startTicker();
}

// ═══════════════ THEME ═══════════════
function setTheme(t) {
  theme = t;
  document.documentElement.dataset.theme = t;
  localStorage.setItem('qh-theme', t);
  const idx = themes.indexOf(t);
  const el = document.getElementById('themeIcon');
  if (el) el.textContent = themeIcons[idx];
}
function cycleTheme() {
  const idx = (themes.indexOf(theme) + 1) % themes.length;
  setTheme(themes[idx]);
  showToast(themeNames[themes[idx]]);
  playSound('theme');
}

// ═══════════════ TABS ═══════════════
function initTabs() {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const panel = document.getElementById('panel-' + tab.dataset.tab);
      if (panel) panel.classList.add('active');
      window.scrollTo({top: 0, behavior: 'smooth'});
      playSound('click');
    });
  });
}

// ═══════════════ RENDER: HOME ═══════════════
function renderHome() {
  const t = T[lang];
  const dayIdx = new Date().getDate() % TRUTHS.length;
  const truth = TRUTHS[dayIdx];
  const td = truth[lang];
  (document.getElementById('dailyCard')||{}).innerHTML= `
    <div class="daily-label">${t.dailyLabel}</div>
    <div class="daily-title">${td.title}</div>
    <div class="daily-body">${td.reality}</div>
    <div class="daily-action" onclick="document.querySelector('[data-tab=truths]').click()">${t.tabTruths} &#8594;</div>
  `;
  // XP bar
  const xpSection = document.getElementById('xpSection');
  if (xpSection) {
    xpSection.innerHTML = `
      <div class="xp-bar-wrap"><div class="xp-bar" id="xpBar"></div></div>
      <div class="xp-text" id="xpText"></div>
      <div class="badge-row" id="badgeRow"></div>
    `;
    updateXPDisplay();
  }
  const sections = [
    {icon:'🎯',tab:'truths',title:t.tabTruths,desc:lang==='ar'?'٢٠ حقيقة':lang==='fr'?'20 verites':'20 truths'},
    {icon:'🔄',tab:'myths',title:t.tabMyths,desc:lang==='ar'?'اقلب البطاقة':lang==='fr'?'Retournez la carte':'Flip the card'},
    {icon:'🏆',tab:'quiz',title:t.tabQuiz,desc:lang==='ar'?'خرافة أم حقيقة؟':lang==='fr'?'Mythe ou fait ?':'Myth or fact?'},
    {icon:'📖',tab:'about',title:t.tabAbout,desc:lang==='ar'?'عن الكتاب والمؤلف':lang==='fr'?'Le livre et l\'auteur':'Book & author'},
  ];
  (document.getElementById('homeGrid')||{}).innerHTML= sections.map(s => `
    <div class="home-card" onclick="document.querySelector('[data-tab=${s.tab}]').click()">
      <span class="hc-icon">${s.icon}</span>
      <div class="hc-title">${s.title}</div>
      <div class="hc-desc">${s.desc}</div>
    </div>
  `).join('');
}

// ═══════════════ RENDER: TRUTHS ═══════════════
function renderTruths() {
  const t = T[lang];
  const searchBar = `<div class="search-bar"><input type="text" id="truthsSearch" class="search-input" placeholder="${t.searchPlaceholder}" oninput="filterTruths(this.value)"><span class="search-icon">🔍</span></div>`;
  const cards = TRUTHS.map((truth, i) => {
    const d = truth[lang];
    const chapterName = CHAPTERS[lang][truth.chapter] || '';
    return `
    <div class="truth-card scroll-reveal" id="truth-${truth.id}" data-search="${d.title.toLowerCase()}">
      <div class="truth-head" onclick="toggleCard('truth-${truth.id}');markCardRead(${truth.id})">
        <span class="truth-num">${truth.id}</span>
        <span class="truth-emoji">${truth.emoji}</span>
        <span class="truth-title">${d.title}</span>
        <span class="truth-chev">&#9660;</span>
      </div>
      <div class="truth-body">
        <div class="truth-inner">
          <div class="truth-chapter-tag">${t.chapter} ${truth.chapter}: ${chapterName}</div>
          <div class="myth-reality-box">
            <div class="myth-side"><div class="mr-label">${t.myth}</div><div class="mr-text">${d.myth}</div></div>
            <div class="reality-side"><div class="mr-label">${t.reality}</div><div class="mr-text">${d.reality}</div></div>
          </div>
          <div class="verse-box">
            <div class="verse-arabic">${d.verse}</div>
            <div class="verse-ref">${d.verseRef}</div>
          </div>
          <div class="action-box"><span class="action-icon">💡</span><span>${d.action}</span></div>
          <button class="share-btn" onclick="event.stopPropagation();shareTruth(${i})"><span class="share-icon">&#128279;</span> ${t.share}</button>
        </div>
      </div>
    </div>`;
  }).join('');
  (document.getElementById('truthsContainer')||{}).innerHTML= searchBar + cards;
}

function filterTruths(query) {
  const q = query.toLowerCase().trim();
  document.querySelectorAll('.truth-card').forEach(card => {
    const searchText = card.dataset.search || '';
    const title = card.querySelector('.truth-title');
    const titleText = title ? title.textContent.toLowerCase() : '';
    const match = !q || searchText.includes(q) || titleText.includes(q);
    card.style.display = match ? '' : 'none';
  });
}

async function shareTruth(idx) {
  const truth = TRUTHS[idx];
  const d = truth[lang];
  const text = `${truth.emoji} ${d.title}\n\n${T[lang].myth}: ${d.myth}\n${T[lang].reality}: ${d.reality}\n\n— قذائف الحق | Missiles of Truth`;
  if (navigator.share) {
    try { await navigator.share({ title: d.title, text }); } catch(e) {}
  } else {
    try { await navigator.clipboard.writeText(text); showToast(lang==='ar'?'تم النسخ!':lang==='fr'?'Copie !':'Copied!'); } catch(e) { showToast('Could not copy'); }
  }
}

// ═══════════════ RENDER: MYTHS (Flip Cards) ═══════════════
function renderMyths() {
  const t = T[lang];
  (document.getElementById('mythsContainer')||{}).innerHTML= TRUTHS.map((truth, i) => {
    const d = truth[lang];
    return `
    <div class="myth-flip-card scroll-reveal" onclick="this.classList.toggle('flipped');markCardRead(${truth.id})">
      <div class="myth-flip-inner">
        <div class="myth-flip-front">
          <div class="myth-flip-emoji">${truth.emoji}</div>
          <div class="myth-flip-myth">${d.myth}</div>
          <div class="myth-flip-hint">${t.flip} &#8635;</div>
        </div>
        <div class="myth-flip-back">
          <div class="myth-flip-label">${t.reality}</div>
          <div class="myth-flip-reality">${d.reality}</div>
          <div class="myth-flip-verse">${d.verse}</div>
          <div class="myth-flip-ref">${d.verseRef}</div>
        </div>
      </div>
    </div>`;
  }).join('');
}

// ═══════════════ RENDER: QUIZ (Myth or Fact) ═══════════════
let quizState = { index: 0, score: 0, answers: [], used5050: false, usedHint: false, usedRef: false };

function renderQuiz() {
  const t = T[lang];
  const container = document.getElementById('quizContainer');
  if (!container) return;
  quizState = { index: 0, score: 0, answers: [], used5050: false, usedHint: false, usedRef: false };
  container.innerHTML = `
    <div class="quiz-start-card">
      <div class="quiz-start-icon">🎯</div>
      <div class="quiz-start-text">${t.quizDesc}</div>
      <div class="quiz-lifelines-preview">
        <span>${t.lifeline5050}</span> <span>${t.lifelineHint}</span> <span>${t.lifelineRef}</span>
      </div>
      <button class="quiz-start-btn" onclick="startQuiz()">${t.quizStart}</button>
    </div>
  `;
  document.getElementById('quizResult').classList.add('hidden');
}

function startQuiz() {
  quizState = { index: 0, score: 0, answers: [], used5050: false, usedHint: false, usedRef: false };
  showQuizQuestion();
}

function showQuizQuestion() {
  const t = T[lang];
  const container = document.getElementById('quizContainer');
  if (!container) return;
  const q = QUIZ_DATA[quizState.index];
  const qd = q[lang];
  const total = QUIZ_DATA.length;
  const progress = Math.round((quizState.index / total) * 100);

  container.innerHTML = `
    <div class="quiz-progress"><div class="quiz-progress-fill" style="width:${progress}%"></div></div>
    <div class="quiz-counter">${quizState.index + 1} / ${total}</div>
    <div class="quiz-question-card">
      <div class="quiz-q-text">${qd.q}</div>
      <div class="quiz-options-row">
        <button class="quiz-myth-btn" id="qMythBtn" onclick="answerQuiz(false)"><span>${t.quizMythBtn}</span></button>
        <button class="quiz-fact-btn" id="qFactBtn" onclick="answerQuiz(true)"><span>${t.quizFactBtn}</span></button>
      </div>
      <div class="quiz-lifelines">
        <button class="lifeline-btn ${quizState.used5050?'used':''}" onclick="use5050()" ${quizState.used5050?'disabled':''}>${t.lifeline5050}</button>
        <button class="lifeline-btn ${quizState.usedHint?'used':''}" onclick="useHint()" ${quizState.usedHint?'disabled':''}>${t.lifelineHint}</button>
        <button class="lifeline-btn ${quizState.usedRef?'used':''}" onclick="useRef()" ${quizState.usedRef?'disabled':''}>${t.lifelineRef}</button>
      </div>
      <div id="quizFeedback" class="quiz-feedback hidden"></div>
    </div>
  `;
}

function answerQuiz(answeredFact) {
  const q = QUIZ_DATA[quizState.index];
  const correct = answeredFact === q.isFact;
  const t = T[lang];
  if (correct) {
    quizState.score++;
    addXP(5, t.quizCorrect);
  }
  quizState.answers.push({ index: quizState.index, correct });

  // Visual feedback
  const mythBtn = document.getElementById('qMythBtn');
  const factBtn = document.getElementById('qFactBtn');
  if (q.isFact) { factBtn.classList.add('correct'); mythBtn.classList.add('wrong'); }
  else { mythBtn.classList.add('correct'); factBtn.classList.add('wrong'); }
  mythBtn.disabled = true; factBtn.disabled = true;

  const feedback = document.getElementById('quizFeedback');
  feedback.classList.remove('hidden');
  feedback.innerHTML = `<div class="${correct?'feedback-correct':'feedback-wrong'}">${correct?t.quizCorrect:t.quizWrong}</div>`;

  setTimeout(() => {
    quizState.index++;
    if (quizState.index < QUIZ_DATA.length) {
      showQuizQuestion();
    } else {
      showQuizResults();
    }
  }, 1200);
}

function use5050() {
  if (quizState.used5050) return;
  quizState.used5050 = true;
  const q = QUIZ_DATA[quizState.index];
  // Disable the wrong answer button
  if (q.isFact) {
    document.getElementById('qMythBtn').classList.add('eliminated');
    document.getElementById('qMythBtn').disabled = true;
  } else {
    document.getElementById('qFactBtn').classList.add('eliminated');
    document.getElementById('qFactBtn').disabled = true;
  }
  playSound('click');
}

function useHint() {
  if (quizState.usedHint) return;
  quizState.usedHint = true;
  const q = QUIZ_DATA[quizState.index];
  const feedback = document.getElementById('quizFeedback');
  feedback.classList.remove('hidden');
  feedback.innerHTML = `<div class="feedback-hint">🤲 ${q[lang].hint}</div>`;
  playSound('click');
}

function useRef() {
  if (quizState.usedRef) return;
  quizState.usedRef = true;
  const q = QUIZ_DATA[quizState.index];
  const feedback = document.getElementById('quizFeedback');
  feedback.classList.remove('hidden');
  feedback.innerHTML = `<div class="feedback-ref">📖 ${q.ref}</div>`;
  playSound('click');
}

function showQuizResults() {
  const t = T[lang];
  const total = QUIZ_DATA.length;
  const pct = Math.round(quizState.score / total * 100);
  let emoji, title, desc;
  if (pct >= 90) {
    emoji = '🏆'; title = lang==='ar'?'خبير!':lang==='fr'?'Expert !':'Expert!';
    desc = lang==='ar'?'أنت قذيفة حق متحركة! معرفتك ممتازة.':lang==='fr'?'Vous etes un missile de verite ! Vos connaissances sont excellentes.':'You are a walking missile of truth! Your knowledge is excellent.';
    const xp = loadXP(); if (!xp.badges.includes('expert')) { xp.badges.push('expert'); saveXP(xp); } updateXPDisplay();
  } else if (pct >= 60) {
    emoji = '🎯'; title = lang==='ar'?'جيد!':lang==='fr'?'Bien !':'Good!';
    desc = lang==='ar'?'معرفتك جيدة. راجع البطاقات التي أخطأت فيها.':lang==='fr'?'Vos connaissances sont bonnes. Revisez les cartes ou vous avez fait des erreurs.':'Your knowledge is good. Review the cards you got wrong.';
  } else {
    emoji = '📖'; title = lang==='ar'?'واصل التعلم':lang==='fr'?'Continuez a apprendre':'Keep Learning';
    desc = lang==='ar'?'لا بأس! اقرأ البطاقات مرة أخرى ثم أعد الاختبار.':lang==='fr'?'Ce n\'est pas grave ! Relisez les cartes et refaites le quiz.':'No worries! Read the cards again and retake the quiz.';
  }
  addXP(20, lang==='ar'?'إكمال الاختبار':lang==='fr'?'Quiz termine':'Quiz completed');
  const xp = loadXP(); xp.quizDone = true; saveXP(xp); checkBadges();
  const result = document.getElementById('quizResult');
  result.classList.remove('hidden');
  (document.getElementById('quizContainer')||{}).innerHTML= '';
  result.innerHTML = `
    <div class="qr-emoji">${emoji}</div>
    <div class="qr-score">${quizState.score}/${total} (${pct}%)</div>
    <div class="qr-title">${title}</div>
    <div class="qr-desc">${desc}</div>
    <button class="quiz-start-btn" onclick="renderQuiz()" style="margin-top:16px">${t.quizAgain}</button>
  `;
  result.scrollIntoView({ behavior: 'smooth' });
  if (pct >= 90) launchConfetti();
  playSound('success');
}

// ═══════════════ RENDER: ABOUT ═══════════════
function renderAbout() {
  const about = {
    ar: {
      disclaimerTitle: '⚠️ تنبيه مهم',
      disclaimer: 'هذا التطبيق مستوحى من كتاب الشيخ محمد الغزالي رحمه الله، وليس بديلاً عن قراءة الكتاب الأصلي. المحتوى ملخصات تعليمية مبسطة وليست نقلاً حرفياً. قد تحتوي على تبسيط لأفكار المؤلف. يُرجى الرجوع للكتاب الأصلي وللعلماء المتخصصين.',
      authorName: 'الشيخ محمد الغزالي',
      authorDates: '١٩١٧ — ١٩٩٦',
      authorBio: 'عالم ومفكر إسلامي مصري، لُقب بـ"أديب الدعوة". ألّف أكثر من ٩٤ كتاباً. درس في الأزهر، ودرّس في جامعة الأمير عبد القادر بقسنطينة (الجزائر). حاصل على جائزة الملك فيصل. عُرف بالتجديد ومحاربة الجمود والتشدد والدفاع عن حقوق المرأة في الإسلام.',
      bookTitle: 'عن الكتاب',
      bookDesc: '"قذائف الحق" كتبه الشيخ الغزالي للدفاع عن الإسلام ضد الهجمات الثقافية والفكرية والسياسية. يتناول في ٨ فصول و٢٤٤ صفحة: التفكير العقلاني مقابل التقليد الأعمى، الدفاع عن التوحيد، ما يريده الأعداء من الإسلام، الإسلام والإصلاح الاجتماعي، الرد على الشبهات، الدعوة والحكام، مواجهة المادية والإلحاد، ولا دين بغير حرية. صدر عن دار القلم سنة ١٩٩١.',
      sourcesTitle: 'المصادر',
      sources: ['كتاب "قذائف الحق" — الشيخ محمد الغزالي — دار القلم ١٩٩١','القرآن الكريم','صحيح البخاري ومسلم'],
      contact: 'تواصل: abdelhak.bourdim@gmail.com'
    },
    en: {
      disclaimerTitle: '⚠️ Important Notice',
      disclaimer: 'I am not a scholar or mufti. This is a humble effort by a Muslim who loves Sheikh al-Ghazali\'s books. Content is derived from the book and trusted Islamic sources. This is not a fatwa.',
      authorName: 'Sheikh Mohammed al-Ghazali',
      authorDates: '1917 — 1996',
      authorBio: 'Egyptian Islamic scholar and thinker, nicknamed "The Literary Preacher." Author of 94+ books. Studied at Al-Azhar, taught at the University of Emir Abdelkader in Constantine, Algeria. King Faisal Award winner. Known for renewal, fighting rigidity, and defending women\'s rights in Islam.',
      bookTitle: 'About the Book',
      bookDesc: '"Missiles of Truth" was written by Sheikh al-Ghazali to defend Islam against cultural, theological, and political attacks. Across 8 chapters and 244 pages, it covers: rational thinking vs. blind imitation, defending monotheism, what enemies want from Islam, Islam and social reform, responding to doubts, dawah and rulers, countering materialism and atheism, and no religion without freedom. Published by Dar Al-Qalam in 1991.',
      sourcesTitle: 'Sources',
      sources: ['"Missiles of Truth" (Qadhaaif al-Haqq) — Sheikh Mohammed al-Ghazali — Dar Al-Qalam 1991','The Holy Quran','Sahih al-Bukhari and Muslim'],
      contact: 'Contact: abdelhak.bourdim@gmail.com'
    },
    fr: {
      disclaimerTitle: '⚠️ Avis Important',
      disclaimer: 'Je ne suis ni savant ni mufti. C\'est un effort humble d\'un musulman qui aime les livres du Sheikh al-Ghazali. Le contenu est tire du livre et de sources islamiques fiables. Ce n\'est pas une fatwa.',
      authorName: 'Sheikh Mohammed al-Ghazali',
      authorDates: '1917 — 1996',
      authorBio: 'Savant et penseur islamique egyptien, surnomme « Le Litteraire de la Predication ». Auteur de plus de 94 livres. Diplome d\'Al-Azhar, professeur a l\'Universite Emir Abdelkader de Constantine (Algerie). Laureat du Prix Roi Faysal. Connu pour le renouveau et la defense des droits des femmes en Islam.',
      bookTitle: 'A Propos du Livre',
      bookDesc: '« Missiles de Verite » a ete ecrit par le Sheikh al-Ghazali pour defendre l\'Islam contre les attaques culturelles, theologiques et politiques. En 8 chapitres et 244 pages, il couvre : la pensee rationnelle, la defense du monotheisme, les reponses aux doutes, l\'Islam et la reforme sociale, la predication et les dirigeants, et la liberte religieuse. Publie par Dar Al-Qalam en 1991.',
      sourcesTitle: 'Sources',
      sources: ['« Missiles de Verite » (Qadhaaif al-Haqq) — Sheikh Mohammed al-Ghazali — Dar Al-Qalam 1991','Le Saint Coran','Sahih al-Bukhari et Muslim'],
      contact: 'Contact : abdelhak.bourdim@gmail.com'
    }
  };
  const a = about[lang];
  (document.getElementById('aboutContainer')||{}).innerHTML= `
    <div class="about-disclaimer"><div class="about-disclaimer-title">${a.disclaimerTitle}</div><p>${a.disclaimer}</p></div>
    <div class="about-author"><span class="about-author-icon">📚</span><div class="about-author-info"><div class="about-author-name">${a.authorName}</div><div class="about-author-dates">${a.authorDates}</div><div class="about-author-bio">${a.authorBio}</div></div></div>
    <div class="about-section"><div class="about-section-title">${a.bookTitle}</div><p class="about-text">${a.bookDesc}</p></div>
    <div class="about-section"><div class="about-section-title">${a.sourcesTitle}</div>${a.sources.map(s => `<p class="about-text">&#8226; ${s}</p>`).join('')}</div>
    <div class="about-section"><p class="about-text">${a.contact}</p></div>
  `;
}

// ═══════════════ RENDER: HELP ═══════════════
function renderHelp() {
  const help = {
    ar: [
      {title:'⚠️ تنبيه',body:'لست عالماً. هذا جهد متواضع لنشر حكمة الشيخ الغزالي بطريقة تفاعلية.'},
      {title:'📚 المصادر',body:'كتاب "قذائف الحق" للشيخ محمد الغزالي (دار القلم ١٩٩١)، القرآن الكريم، السنة النبوية.'},
      {title:'✨ المميزات',body:'ثلاث لغات (عربي/إنجليزي/فرنسي)، ٣ أنماط، ٢٠ حقيقة، بطاقات تفاعلية، اختبار خرافة أم حقيقة، نظام نقاط وأوسمة، وضع مستكشف صغير.'},
      {title:'🎮 النقاط',body:'+١٠ لكل بطاقة تقرأها، +٥ لكل إجابة صحيحة، +٢٠ عند إكمال الاختبار.'},
      {title:'🤝 المساهمة',body:'GitHub: github.com/abourdim/qadhaaif-al-haqq'},
    ],
    en: [
      {title:'⚠️ Disclaimer',body:'I am not a scholar. This is a humble effort to share Sheikh al-Ghazali\'s wisdom interactively.'},
      {title:'📚 Sources',body:'"Missiles of Truth" by Sheikh Mohammed al-Ghazali (Dar Al-Qalam 1991), the Holy Quran, Prophetic Sunnah.'},
      {title:'✨ Features',body:'Three languages (AR/EN/FR), 3 themes, 20 truths, interactive flip cards, myth or fact quiz, XP & badges, Young Explorer mode.'},
      {title:'🎮 XP Points',body:'+10 per card read, +5 per correct answer, +20 for completing the quiz.'},
      {title:'🤝 Contributing',body:'GitHub: github.com/abourdim/qadhaaif-al-haqq'},
    ],
    fr: [
      {title:'⚠️ Avertissement',body:'Je ne suis pas un savant. C\'est un effort humble pour partager la sagesse du Sheikh al-Ghazali.'},
      {title:'📚 Sources',body:'« Missiles de Verite » par Sheikh Mohammed al-Ghazali (Dar Al-Qalam 1991), le Saint Coran, la Sunnah.'},
      {title:'✨ Fonctionnalites',body:'Trois langues (AR/EN/FR), 3 themes, 20 verites, cartes interactives, quiz mythe ou fait, XP et badges, mode Jeune Explorateur.'},
      {title:'🎮 Points XP',body:'+10 par carte lue, +5 par bonne reponse, +20 pour avoir termine le quiz.'},
      {title:'🤝 Contribuer',body:'GitHub : github.com/abourdim/qadhaaif-al-haqq'},
    ]
  };
  (document.getElementById('helpBody')||{}).innerHTML= help[lang].map(h => `<div class="help-item"><div class="help-item-title">${h.title}</div><div>${h.body}</div></div>`).join('');
}

// ═══════════════ RENDER: DUAS ═══════════════
function renderDuas() {
  (document.getElementById('duaPanelContent')||{}).innerHTML= DUAS.map(d => {
    const dd = d[lang];
    return `<div class="dua-item"><div class="dua-item-label">${dd.label}</div><div class="dua-item-ar">${dd.text}</div><div class="dua-item-tr">${dd.tr}</div></div>`;
  }).join('');
}

// ═══════════════ SCROLL REVEAL ═══════════════
function initScrollReveal() {
  if (!('IntersectionObserver' in window)) return;
  window._scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('revealed'); window._scrollObserver.unobserve(entry.target); }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => window._scrollObserver.observe(el));
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => setTimeout(() => {
      document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => window._scrollObserver.observe(el));
    }, 100));
  });
}

// ═══════════════ KEYBOARD NAV ═══════════════
function initKeyboardNav() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const helpPanel = document.getElementById('helpPanel');
      if (!helpPanel.classList.contains('hidden')) { toggleHelp(); return; }
      const duaPanel = document.getElementById('duaPanel');
      if (!duaPanel.classList.contains('hidden')) { toggleDuaPanel(); return; }
      document.querySelectorAll('.truth-card.open').forEach(c => c.classList.remove('open'));
    }
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      const truthsPanel = document.getElementById('panel-truths');
      if (!truthsPanel || !truthsPanel.classList.contains('active')) return;
      if (document.activeElement && document.activeElement.id === 'truthsSearch') return;
      e.preventDefault();
      const cards = Array.from(document.querySelectorAll('.truth-card')).filter(c => c.style.display !== 'none');
      if (!cards.length) return;
      if (currentTruthIdx >= 0 && currentTruthIdx < cards.length) cards[currentTruthIdx].classList.remove('open');
      const dir = (document.documentElement.dir === 'rtl') ? (e.key === 'ArrowRight' ? -1 : 1) : (e.key === 'ArrowRight' ? 1 : -1);
      currentTruthIdx = Math.max(0, Math.min(cards.length - 1, currentTruthIdx + dir));
      cards[currentTruthIdx].classList.add('open');
      cards[currentTruthIdx].scrollIntoView({ behavior: 'smooth', block: 'center' });
      playSound('click');
    }
  });
}

// ═══════════════ UTILITIES ═══════════════
function toggleCard(id) { const card = document.getElementById(id); if (card) { card.classList.toggle('open'); playSound('click'); } }
function toggleHelp() { document.getElementById('helpPanel').classList.toggle('hidden'); playSound('click'); }
function toggleDuaPanel() { document.getElementById('duaPanel').classList.toggle('hidden'); playSound('click'); }
function showToast(msg) { const t = document.getElementById('toast'); const m = document.getElementById('toastMsg'); if (t && m) { m.textContent = msg; t.style.display = 'block'; setTimeout(() => t.style.display = 'none', 2500); } }
function initScrollTop() { const btn = document.getElementById('scrollTop'); window.addEventListener('scroll', () => { if (btn) btn.classList.toggle('visible', window.scrollY > 300); }); }

// ═══════════════ SOUND EFFECTS ═══════════════
const AudioCtx = window.AudioContext || window.webkitAudioContext;
let audioCtx;
function playSound(type) {
  try {
    if (!audioCtx) audioCtx = new AudioCtx();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain); gain.connect(audioCtx.destination);
    gain.gain.value = 0.06;
    if (type === 'click') { osc.frequency.value = 800; osc.type = 'sine'; gain.gain.value = 0.04; }
    else if (type === 'success') { osc.frequency.value = 523; osc.type = 'sine'; gain.gain.value = 0.06; }
    else if (type === 'theme') { osc.frequency.value = 440; osc.type = 'triangle'; gain.gain.value = 0.05; }
    else if (type === 'badge') { osc.frequency.value = 660; osc.type = 'sine'; gain.gain.value = 0.07; }
    osc.start(); osc.stop(audioCtx.currentTime + 0.12);
  } catch(e) {}
}

// ═══════════════ CONFETTI ═══════════════
function launchConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  canvas.style.display = 'block';
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth; canvas.height = window.innerHeight;
  const particles = [];
  const colors = ['#BF360C','#FF6D00','#FF8F00','#FFD54F','#E57373','#B388FF','#4FC3F7'];
  for (let i = 0; i < 120; i++) { particles.push({ x:Math.random()*canvas.width, y:Math.random()*canvas.height-canvas.height, w:Math.random()*10+5, h:Math.random()*6+3, color:colors[Math.floor(Math.random()*colors.length)], vx:(Math.random()-0.5)*4, vy:Math.random()*3+2, rot:Math.random()*360, rotSpeed:(Math.random()-0.5)*10 }); }
  let frame = 0;
  function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p => { p.x+=p.vx; p.y+=p.vy; p.rot+=p.rotSpeed; ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.rot*Math.PI/180); ctx.fillStyle=p.color; ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h); ctx.restore(); });
    frame++;
    if (frame < 120) requestAnimationFrame(draw); else { ctx.clearRect(0,0,canvas.width,canvas.height); canvas.style.display='none'; }
  }
  draw();
}

// ═══════════════ GENIUS FEATURES ═══════════════
function initTypewriter() {
  const dailyTitle = document.querySelector('.daily-card .daily-title');
  if (!dailyTitle || dailyTitle.dataset.twDone) return;
  const fullText = dailyTitle.textContent;
  dailyTitle.textContent = '';
  dailyTitle.classList.add('typewriter-text');
  dailyTitle.dataset.twDone = '1';
  let i = 0;
  const speed = Math.max(30, 2000 / fullText.length);
  function typeChar() { if (i < fullText.length) { dailyTitle.textContent += fullText.charAt(i); i++; setTimeout(typeChar, speed); } else { setTimeout(() => dailyTitle.classList.add('tw-done'), 1500); } }
  setTimeout(typeChar, 500);
}

// Tab transitions
(function upgradeTabTransitions() {
  const origInitTabs = initTabs;
  initTabs = function() {
    document.querySelectorAll('.tab').forEach(tab => {
      tab.addEventListener('click', () => {
        const isRTL = document.documentElement.dir === 'rtl';
        const exitClass = isRTL ? 'panel-exit-rtl' : 'panel-exit-ltr';
        const enterClass = isRTL ? 'panel-enter-rtl' : 'panel-enter-ltr';
        const currentPanel = document.querySelector('.panel.active');
        if (currentPanel) { currentPanel.classList.add(exitClass); setTimeout(() => { currentPanel.classList.remove('active', exitClass); }, 280); }
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const newPanel = document.getElementById('panel-' + tab.dataset.tab);
        if (newPanel) { setTimeout(() => { newPanel.classList.add('active', enterClass); setTimeout(() => newPanel.classList.remove(enterClass), 300); }, currentPanel ? 280 : 0); }
        window.scrollTo({top: 0, behavior: 'smooth'});
        playSound('click');
        try { navigator.vibrate && navigator.vibrate(10); } catch(e) {}
        setTimeout(() => { document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => { if (window._scrollObserver) window._scrollObserver.observe(el); }); initTypewriter(); }, 350);
      });
    });
  };
})();

// Swipe gestures
function initSwipeGestures() {
  let touchStartX = 0, touchStartY = 0;
  const tabOrder = ['home','truths','myths','quiz','about'];
  document.addEventListener('touchstart', (e) => { touchStartX = e.changedTouches[0].screenX; touchStartY = e.changedTouches[0].screenY; }, { passive: true });
  document.addEventListener('touchend', (e) => {
    const dx = e.changedTouches[0].screenX - touchStartX;
    const dy = e.changedTouches[0].screenY - touchStartY;
    if (Math.abs(dx) < 50 || Math.abs(dy) > Math.abs(dx)) return;
    const isRTL = document.documentElement.dir === 'rtl';
    const activeTab = document.querySelector('.tab.active');
    if (!activeTab) return;
    const currentIdx = tabOrder.indexOf(activeTab.dataset.tab);
    if (currentIdx < 0) return;
    let nextIdx = isRTL ? (dx > 0 ? currentIdx + 1 : currentIdx - 1) : (dx < 0 ? currentIdx + 1 : currentIdx - 1);
    if (nextIdx >= 0 && nextIdx < tabOrder.length) { const nextTab = document.querySelector(`.tab[data-tab="${tabOrder[nextIdx]}"]`); if (nextTab) nextTab.click(); }
  }, { passive: true });
}

// Auto dark mode
function initAutoDarkMode() {
  if (!localStorage.getItem('qh-theme') && window.matchMedia('(prefers-color-scheme: dark)').matches) setTheme('night');
}

document.addEventListener('DOMContentLoaded', () => {
  initAutoDarkMode();
  initSwipeGestures();
  setTimeout(initTypewriter, 600);
});

/* TICKER */
function startTicker(){
  var el=document.getElementById('tickerText');
  if(!el)return;
  var tips={
    ar:['🎯 ٢٠ حقيقة تدحض الشبهات','🛡️ خرافة أم حقيقة — اقلب البطاقة','🏆 اختبار: من يريد أن يكون عالماً؟','📖 الشيخ الغزالي يرد على الشبهات','🤲 الحق يعلو ولا يُعلى عليه','💡 Powered by workshop-diy.org'],
    en:['🎯 20 truths that refute misconceptions','🛡️ Myth or Fact — flip the card','🏆 Quiz: Who Wants to Be a Scholar?','📖 Sheikh al-Ghazali defends Islam','🤲 Truth always prevails','💡 Powered by workshop-diy.org'],
    fr:['🎯 20 verites qui refutent les idees recues','🛡️ Mythe ou Fait — retournez la carte','🏆 Quiz : Qui Veut Etre un Savant ?','📖 Le Sheikh al-Ghazali defend l\'Islam','🤲 La verite triomphe toujours','💡 Powered by workshop-diy.org']
  };
  var l=document.documentElement.lang||'ar';
  var msgs=tips[l]||tips.ar;
  var txt=msgs.join('  ✦  ');
  el.innerHTML='<span class="tc">'+txt+'  ✦  </span><span class="tc" aria-hidden="true">'+txt+'  ✦  </span>';
  el.style.animation='tickerMarquee '+Math.max(25,txt.length*0.12)+'s linear infinite';
}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',startTicker)}else{startTicker()}
