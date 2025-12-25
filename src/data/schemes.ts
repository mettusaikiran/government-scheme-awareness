export const schemes = [
  {
    id: '1',
    name: {
      en: 'PM Kisan Samman Nidhi',
      hi: 'पीएम किसान सम्मान निधि',
      te: 'పీఎం కిసాన్ సమ్మాన్ నిధి'
    },
    description: {
      en: 'Income support of ₹6,000 per year to all farmer families across the country in three equal installments.',
      hi: 'देश भर में सभी किसान परिवारों को तीन समान किस्तों में ₹6,000 प्रति वर्ष की आय सहायता।',
      te: 'దేశవ్యాప్తంగా అన్ని రైతు కుటుంబాలకు మూడు సమాన వాయిదాల్లో సంవత్సరానికి ₹6,000 ఆదాయ మద్దతు.'
    },
    benefits: {
      en: '₹6,000 per year in 3 installments of ₹2,000 each',
      hi: '₹2,000 की 3 किस्तों में प्रति वर्ष ₹6,000',
      te: 'ఒక్కొక్కటి ₹2,000 చొప్పున 3 వాయిదాల్లో సంవత్సరానికి ₹6,000'
    },
    eligibility: {
      en: 'All land-holding farmer families with cultivable land',
      hi: 'कृषि योग्य भूमि वाले सभी भूमिधारक किसान परिवार',
      te: 'సాగు భూమి ఉన్న అన్ని భూ యజమాని రైతు కుటుంబాలు'
    },
    category: 'agriculture',
    link: 'https://pmkisan.gov.in/',
    ageMin: 18,
    ageMax: 100,
    incomeMax: 500000,
    occupations: ['farmer'],
    states: ['all']
  },
  {
    id: '2',
    name: {
      en: 'Ayushman Bharat - PMJAY',
      hi: 'आयुष्मान भारत - पीएमजेएवाई',
      te: 'ఆయుష్మాన్ భారత్ - పీఎంజేఏవై'
    },
    description: {
      en: 'Health insurance scheme providing coverage up to ₹5 lakh per family per year for secondary and tertiary care hospitalization.',
      hi: 'स्वास्थ्य बीमा योजना जो द्वितीयक और तृतीयक देखभाल अस्पताल में भर्ती के लिए प्रति परिवार प्रति वर्ष ₹5 लाख तक का कवरेज प्रदान करती है।',
      te: 'ద్వితీయ మరియు తృతీయ సంరక్షణ హాస్పిటలైజేషన్ కోసం కుటుంబానికి సంవత్సరానికి ₹5 లక్షల వరకు కవరేజ్ అందించే ఆరోగ్య బీమా పథకం.'
    },
    benefits: {
      en: 'Up to ₹5 lakh health insurance coverage per family per year',
      hi: 'प्रति परिवार प्रति वर्ष ₹5 लाख तक स्वास्थ्य बीमा कवरेज',
      te: 'కుటుంబానికి సంవత్సరానికి ₹5 లక్షల వరకు ఆరోగ్య బీమా కవరేజ్'
    },
    eligibility: {
      en: 'Families identified based on deprivation criteria in SECC database',
      hi: 'SECC डेटाबेस में वंचितता मानदंड के आधार पर पहचाने गए परिवार',
      te: 'SECC డేటాబేస్‌లో వంచన ప్రమాణాల ఆధారంగా గుర్తించబడిన కుటుంబాలు'
    },
    category: 'health',
    link: 'https://pmjay.gov.in/',
    ageMin: 0,
    ageMax: 100,
    incomeMax: 300000,
    occupations: ['all'],
    states: ['all']
  },
  {
    id: '3',
    name: {
      en: 'National Scholarship Portal',
      hi: 'राष्ट्रीय छात्रवृत्ति पोर्टल',
      te: 'నేషనల్ స్కాలర్‌షిప్ పోర్టల్'
    },
    description: {
      en: 'One-stop solution for various scholarship schemes offered by Central and State governments.',
      hi: 'केंद्र और राज्य सरकारों द्वारा दी जाने वाली विभिन्न छात्रवृत्ति योजनाओं के लिए एक-स्टॉप समाधान।',
      te: 'కేంద్ర మరియు రాష్ట్ర ప్రభుత్వాలు అందించే వివిధ స్కాలర్‌షిప్ పథకాల కోసం వన్-స్టాప్ సొల్యూషన్.'
    },
    benefits: {
      en: 'Scholarships ranging from ₹5,000 to ₹50,000 per year based on course',
      hi: 'पाठ्यक्रम के आधार पर प्रति वर्ष ₹5,000 से ₹50,000 तक की छात्रवृत्ति',
      te: 'కోర్సు ఆధారంగా సంవత్సరానికి ₹5,000 నుండి ₹50,000 వరకు స్కాలర్‌షిప్‌లు'
    },
    eligibility: {
      en: 'Students enrolled in recognized institutions with family income below ₹8 lakh',
      hi: 'मान्यता प्राप्त संस्थानों में नामांकित छात्र जिनकी पारिवारिक आय ₹8 लाख से कम है',
      te: 'కుటుంబ ఆదాయం ₹8 లక్షల కంటే తక్కువ ఉన్న గుర్తింపు పొందిన సంస్థల్లో నమోదైన విద్యార్థులు'
    },
    category: 'education',
    link: 'https://scholarships.gov.in/',
    ageMin: 14,
    ageMax: 35,
    incomeMax: 800000,
    occupations: ['student'],
    states: ['all']
  },
  {
    id: '4',
    name: {
      en: 'Pradhan Mantri Awas Yojana',
      hi: 'प्रधानमंत्री आवास योजना',
      te: 'ప్రధాన్ మంత్రి ఆవాస్ యోజన'
    },
    description: {
      en: 'Affordable housing scheme providing financial assistance for construction/purchase of houses.',
      hi: 'घरों के निर्माण/खरीद के लिए वित्तीय सहायता प्रदान करने वाली किफायती आवास योजना।',
      te: 'ఇళ్ల నిర్మాణం/కొనుగోలు కోసం ఆర్థిక సహాయం అందించే అందుబాటులో ఉన్న గృహ పథకం.'
    },
    benefits: {
      en: 'Interest subsidy of 3-6.5% on home loans up to ₹2.67 lakh',
      hi: 'होम लोन पर 3-6.5% की ब्याज सब्सिडी ₹2.67 लाख तक',
      te: '₹2.67 లక్షల వరకు హోమ్ లోన్‌లపై 3-6.5% వడ్డీ సబ్సిడీ'
    },
    eligibility: {
      en: 'EWS/LIG/MIG families without a pucca house',
      hi: 'ईडब्ल्यूएस/एलआईजी/एमआईजी परिवार जिनके पास पक्का घर नहीं है',
      te: 'పక్కా ఇల్లు లేని EWS/LIG/MIG కుటుంబాలు'
    },
    category: 'housing',
    link: 'https://pmaymis.gov.in/',
    ageMin: 21,
    ageMax: 70,
    incomeMax: 1800000,
    occupations: ['all'],
    states: ['all']
  },
  {
    id: '5',
    name: {
      en: 'Atal Pension Yojana',
      hi: 'अटल पेंशन योजना',
      te: 'అటల్ పెన్షన్ యోజన'
    },
    description: {
      en: 'Pension scheme for unorganized sector workers providing guaranteed pension after 60 years of age.',
      hi: 'असंगठित क्षेत्र के श्रमिकों के लिए पेंशन योजना जो 60 वर्ष की आयु के बाद गारंटीकृत पेंशन प्रदान करती है।',
      te: '60 సంవత్సరాల వయస్సు తర్వాత హామీ పెన్షన్ అందించే అసంఘటిత రంగ కార్మికుల కోసం పెన్షన్ పథకం.'
    },
    benefits: {
      en: 'Guaranteed pension of ₹1,000 to ₹5,000 per month after age 60',
      hi: '60 वर्ष की आयु के बाद ₹1,000 से ₹5,000 प्रति माह की गारंटीकृत पेंशन',
      te: '60 సంవత్సరాల వయస్సు తర్వాత నెలకు ₹1,000 నుండి ₹5,000 హామీ పెన్షన్'
    },
    eligibility: {
      en: 'Indian citizens between 18-40 years with a savings bank account',
      hi: 'बचत बैंक खाते वाले 18-40 वर्ष के बीच के भारतीय नागरिक',
      te: 'సేవింగ్స్ బ్యాంక్ ఖాతా ఉన్న 18-40 సంవత్సరాల మధ్య భారతీయ పౌరులు'
    },
    category: 'social',
    link: 'https://npscra.nsdl.co.in/scheme-details.php',
    ageMin: 18,
    ageMax: 40,
    incomeMax: 1000000,
    occupations: ['all'],
    states: ['all']
  },
  {
    id: '6',
    name: {
      en: 'Telangana Rythu Bandhu',
      hi: 'तेलंगाना रायथू बंधु',
      te: 'తెలంగాణ రైతు బంధు'
    },
    description: {
      en: 'State-specific investment support scheme for farmers providing ₹10,000 per acre per season.',
      hi: 'किसानों के लिए राज्य-विशिष्ट निवेश सहायता योजना जो प्रति एकड़ प्रति सीजन ₹10,000 प्रदान करती है।',
      te: 'రైతులకు ఎకరాకు సీజన్‌కు ₹10,000 అందించే రాష్ట్ర-నిర్దిష్ట పెట్టుబడి మద్దతు పథకం.'
    },
    benefits: {
      en: '₹10,000 per acre for each crop season',
      hi: 'प्रत्येक फसल सीजन के लिए प्रति एकड़ ₹10,000',
      te: 'ప్రతి పంట సీజన్‌కు ఎకరాకు ₹10,000'
    },
    eligibility: {
      en: 'All farmers owning agricultural land in Telangana',
      hi: 'तेलंगाना में कृषि भूमि के मालिक सभी किसान',
      te: 'తెలంగాణలో వ్యవసాయ భూమి కలిగి ఉన్న అన్ని రైతులు'
    },
    category: 'agriculture',
    link: 'https://rythubandhu.telangana.gov.in/',
    ageMin: 18,
    ageMax: 100,
    incomeMax: 10000000,
    occupations: ['farmer'],
    states: ['telangana']
  }
];

export type Scheme = typeof schemes[0];
