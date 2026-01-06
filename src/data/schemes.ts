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
  },
  {
    id: '7',
    name: {
      en: 'Pradhan Mantri Ujjwala Yojana',
      hi: 'प्रधानमंत्री उज्ज्वला योजना',
      te: 'ప్రధాన్ మంత్రి ఉజ్వల యోజన'
    },
    description: {
      en: 'Free LPG connections to women from Below Poverty Line (BPL) households.',
      hi: 'गरीबी रेखा से नीचे (बीपीएल) परिवारों की महिलाओं को मुफ्त एलपीजी कनेक्शन।',
      te: 'దారిద్య్ర రేఖకు దిగువన (BPL) ఉన్న కుటుంబాల మహిళలకు ఉచిత LPG కనెక్షన్లు.'
    },
    benefits: {
      en: 'Free LPG connection with first refill and stove',
      hi: 'पहली रिफिल और स्टोव के साथ मुफ्त एलपीजी कनेक्शन',
      te: 'మొదటి రీఫిల్ మరియు స్టవ్‌తో ఉచిత LPG కనెక్షన్'
    },
    eligibility: {
      en: 'Women from BPL households aged 18 years and above',
      hi: 'बीपीएल परिवारों की 18 वर्ष और उससे अधिक उम्र की महिलाएं',
      te: '18 సంవత్సరాలు మరియు అంతకంటే ఎక్కువ వయస్సు ఉన్న BPL కుటుంబాల మహిళలు'
    },
    category: 'social',
    link: 'https://pmuy.gov.in/',
    ageMin: 18,
    ageMax: 100,
    incomeMax: 200000,
    occupations: ['all'],
    states: ['all']
  },
  {
    id: '8',
    name: {
      en: 'Sukanya Samriddhi Yojana',
      hi: 'सुकन्या समृद्धि योजना',
      te: 'సుకన్య సమృద్ధి యోజన'
    },
    description: {
      en: 'Savings scheme for girl child with attractive interest rate and tax benefits.',
      hi: 'आकर्षक ब्याज दर और कर लाभ के साथ बालिकाओं के लिए बचत योजना।',
      te: 'ఆకర్షణీయమైన వడ్డీ రేటు మరియు పన్ను ప్రయోజనాలతో బాలికల కోసం పొదుపు పథకం.'
    },
    benefits: {
      en: 'High interest rate (8.2%) with tax benefits under Section 80C',
      hi: 'धारा 80सी के तहत कर लाभ के साथ उच्च ब्याज दर (8.2%)',
      te: 'సెక్షన్ 80C కింద పన్ను ప్రయోజనాలతో అధిక వడ్డీ రేటు (8.2%)'
    },
    eligibility: {
      en: 'Parents of girl child below 10 years of age',
      hi: '10 वर्ष से कम उम्र की बालिका के माता-पिता',
      te: '10 సంవత్సరాల కంటే తక్కువ వయస్సు ఉన్న బాలికల తల్లిదండ్రులు'
    },
    category: 'social',
    link: 'https://www.nsiindia.gov.in/InternalPage.aspx?Id_Pk=89',
    ageMin: 0,
    ageMax: 10,
    incomeMax: 10000000,
    occupations: ['all'],
    states: ['all']
  },
  {
    id: '9',
    name: {
      en: 'PM Mudra Yojana',
      hi: 'पीएम मुद्रा योजना',
      te: 'పీఎం ముద్ర యోజన'
    },
    description: {
      en: 'Loans up to ₹10 lakh for non-corporate, non-farm small/micro enterprises.',
      hi: 'गैर-कॉर्पोरेट, गैर-कृषि लघु/सूक्ष्म उद्यमों के लिए ₹10 लाख तक का ऋण।',
      te: 'నాన్-కార్పొరేట్, నాన్-ఫార్మ్ చిన్న/మైక్రో ఎంటర్‌ప్రైజెస్ కోసం ₹10 లక్షల వరకు రుణాలు.'
    },
    benefits: {
      en: 'Collateral-free loans: Shishu (₹50,000), Kishore (₹5 lakh), Tarun (₹10 lakh)',
      hi: 'संपार्श्विक-मुक्त ऋण: शिशु (₹50,000), किशोर (₹5 लाख), तरुण (₹10 लाख)',
      te: 'కొలేటరల్-ఫ్రీ లోన్స్: శిశు (₹50,000), కిషోర్ (₹5 లక్షలు), తరుణ్ (₹10 లక్షలు)'
    },
    eligibility: {
      en: 'Any Indian citizen with a business plan for small enterprise',
      hi: 'छोटे उद्यम के लिए व्यवसाय योजना वाला कोई भी भारतीय नागरिक',
      te: 'చిన్న వ్యాపారం కోసం బిజినెస్ ప్లాన్ ఉన్న ఏ భారతీయ పౌరుడైనా'
    },
    category: 'business',
    link: 'https://www.mudra.org.in/',
    ageMin: 18,
    ageMax: 65,
    incomeMax: 10000000,
    occupations: ['business', 'self-employed'],
    states: ['all']
  },
  {
    id: '10',
    name: {
      en: 'Stand Up India Scheme',
      hi: 'स्टैंड अप इंडिया योजना',
      te: 'స్టాండ్ అప్ ఇండియా స్కీమ్'
    },
    description: {
      en: 'Bank loans between ₹10 lakh and ₹1 crore for SC/ST and women entrepreneurs.',
      hi: 'एससी/एसटी और महिला उद्यमियों के लिए ₹10 लाख से ₹1 करोड़ के बीच बैंक ऋण।',
      te: 'SC/ST మరియు మహిళా వ్యవస్థాపకులకు ₹10 లక్షల నుండి ₹1 కోటి వరకు బ్యాంక్ రుణాలు.'
    },
    benefits: {
      en: 'Loans from ₹10 lakh to ₹1 crore with 7-year repayment period',
      hi: '7 वर्ष की चुकौती अवधि के साथ ₹10 लाख से ₹1 करोड़ तक का ऋण',
      te: '7 సంవత్సరాల తిరిగి చెల్లింపు కాలంతో ₹10 లక్షల నుండి ₹1 కోటి వరకు రుణాలు'
    },
    eligibility: {
      en: 'SC/ST and women entrepreneurs for greenfield enterprises',
      hi: 'ग्रीनफील्ड उद्यमों के लिए एससी/एसटी और महिला उद्यमी',
      te: 'గ్రీన్‌ఫీల్డ్ ఎంటర్‌ప్రైజెస్ కోసం SC/ST మరియు మహిళా వ్యవస్థాపకులు'
    },
    category: 'business',
    link: 'https://www.standupmitra.in/',
    ageMin: 18,
    ageMax: 65,
    incomeMax: 10000000,
    occupations: ['business', 'self-employed'],
    states: ['all']
  },
  {
    id: '11',
    name: {
      en: 'PM Shram Yogi Maan-dhan',
      hi: 'पीएम श्रम योगी मान-धन',
      te: 'పీఎం శ్రమ యోగి మాన్-ధన్'
    },
    description: {
      en: 'Pension scheme for unorganized sector workers with monthly pension of ₹3,000 after 60.',
      hi: 'असंगठित क्षेत्र के श्रमिकों के लिए 60 के बाद ₹3,000 प्रति माह पेंशन योजना।',
      te: '60 తర్వాత నెలకు ₹3,000 పెన్షన్‌తో అసంఘటిత రంగ కార్మికుల కోసం పెన్షన్ పథకం.'
    },
    benefits: {
      en: 'Monthly pension of ₹3,000 after 60 years with equal govt contribution',
      hi: 'सरकार के समान योगदान के साथ 60 वर्ष के बाद ₹3,000 प्रति माह पेंशन',
      te: 'సమాన ప్రభుత్వ సహకారంతో 60 సంవత్సరాల తర్వాత నెలకు ₹3,000 పెన్షన్'
    },
    eligibility: {
      en: 'Unorganized workers aged 18-40 with monthly income up to ₹15,000',
      hi: 'असंगठित श्रमिक जिनकी आयु 18-40 वर्ष है और मासिक आय ₹15,000 तक है',
      te: '18-40 సంవత్సరాల వయస్సు ఉన్న అసంఘటిత కార్మికులు నెలకు ₹15,000 వరకు ఆదాయంతో'
    },
    category: 'social',
    link: 'https://labour.gov.in/pm-sym',
    ageMin: 18,
    ageMax: 40,
    incomeMax: 180000,
    occupations: ['labour', 'self-employed'],
    states: ['all']
  },
  {
    id: '12',
    name: {
      en: 'National Rural Livelihood Mission',
      hi: 'राष्ट्रीय ग्रामीण आजीविका मिशन',
      te: 'జాతీయ గ్రామీణ జీవనోపాధి మిషన్'
    },
    description: {
      en: 'Skill development and self-employment for rural poor through Self Help Groups.',
      hi: 'स्वयं सहायता समूहों के माध्यम से ग्रामीण गरीबों के लिए कौशल विकास और स्वरोजगार।',
      te: 'స్వయం సహాయక సంఘాల ద్వారా గ్రామీణ పేదలకు నైపుణ్యాభివృద్ధి మరియు స్వయం ఉపాధి.'
    },
    benefits: {
      en: 'Interest subvention, revolving fund, community investment fund',
      hi: 'ब्याज सब्वेंशन, रिवॉल्विंग फंड, सामुदायिक निवेश कोष',
      te: 'వడ్డీ సబ్వెన్షన్, రివాల్వింగ్ ఫండ్, కమ్యూనిటీ ఇన్వెస్ట్‌మెంట్ ఫండ్'
    },
    eligibility: {
      en: 'Rural poor women organized into Self Help Groups',
      hi: 'स्वयं सहायता समूहों में संगठित ग्रामीण गरीब महिलाएं',
      te: 'స్వయం సహాయక సంఘాలుగా సంఘటితమైన గ్రామీణ పేద మహిళలు'
    },
    category: 'social',
    link: 'https://aajeevika.gov.in/',
    ageMin: 18,
    ageMax: 65,
    incomeMax: 300000,
    occupations: ['all'],
    states: ['all']
  },
  {
    id: '13',
    name: {
      en: 'Pradhan Mantri Fasal Bima Yojana',
      hi: 'प्रधानमंत्री फसल बीमा योजना',
      te: 'ప్రధాన్ మంత్రి ఫసల్ బీమా యోజన'
    },
    description: {
      en: 'Crop insurance scheme to protect farmers against crop loss due to natural calamities.',
      hi: 'प्राकृतिक आपदाओं के कारण फसल नुकसान से किसानों को बचाने के लिए फसल बीमा योजना।',
      te: 'ప్రకృతి వైపరీత్యాల వల్ల పంట నష్టం నుండి రైతులను రక్షించడానికి పంట బీమా పథకం.'
    },
    benefits: {
      en: 'Premium: 2% for Kharif, 1.5% for Rabi, 5% for commercial crops',
      hi: 'प्रीमियम: खरीफ के लिए 2%, रबी के लिए 1.5%, वाणिज्यिक फसलों के लिए 5%',
      te: 'ప్రీమియం: ఖరీఫ్‌కు 2%, రబీకి 1.5%, వాణిజ్య పంటలకు 5%'
    },
    eligibility: {
      en: 'All farmers including tenant farmers growing notified crops',
      hi: 'अधिसूचित फसलें उगाने वाले किरायेदार किसानों सहित सभी किसान',
      te: 'నోటిఫైడ్ పంటలు పండించే కౌలు రైతులతో సహా అన్ని రైతులు'
    },
    category: 'agriculture',
    link: 'https://pmfby.gov.in/',
    ageMin: 18,
    ageMax: 100,
    incomeMax: 10000000,
    occupations: ['farmer'],
    states: ['all']
  },
  {
    id: '14',
    name: {
      en: 'Mahatma Gandhi NREGA',
      hi: 'महात्मा गांधी नरेगा',
      te: 'మహాత్మా గాంధీ NREGA'
    },
    description: {
      en: 'Guaranteed 100 days of wage employment per year to rural households.',
      hi: 'ग्रामीण परिवारों को प्रति वर्ष 100 दिनों के वेतन रोजगार की गारंटी।',
      te: 'గ్రామీణ కుటుంబాలకు సంవత్సరానికి 100 రోజుల వేతన ఉపాధి హామీ.'
    },
    benefits: {
      en: '100 days guaranteed employment with state-specific wage rates',
      hi: 'राज्य-विशिष्ट मजदूरी दरों के साथ 100 दिनों की गारंटीकृत रोजगार',
      te: 'రాష్ట్ర-నిర్దిష్ట వేతన రేట్లతో 100 రోజుల హామీ ఉపాధి'
    },
    eligibility: {
      en: 'Adult members of rural households willing to do unskilled manual work',
      hi: 'ग्रामीण परिवारों के वयस्क सदस्य जो अकुशल शारीरिक काम करने को तैयार हैं',
      te: 'నిపుణత లేని చేతి పని చేయడానికి సిద్ధంగా ఉన్న గ్రామీణ కుటుంబాల పెద్దవారు'
    },
    category: 'employment',
    link: 'https://nrega.nic.in/',
    ageMin: 18,
    ageMax: 65,
    incomeMax: 10000000,
    occupations: ['labour', 'unemployed'],
    states: ['all']
  },
  {
    id: '15',
    name: {
      en: 'Digital India Internship Scheme',
      hi: 'डिजिटल इंडिया इंटर्नशिप योजना',
      te: 'డిజిటల్ ఇండియా ఇంటర్న్‌షిప్ స్కీమ్'
    },
    description: {
      en: 'Internship opportunity for students in various ministries and departments.',
      hi: 'विभिन्न मंत्रालयों और विभागों में छात्रों के लिए इंटर्नशिप का अवसर।',
      te: 'వివిధ మంత్రిత్వ శాఖలు మరియు విభాగాలలో విద్యార్థులకు ఇంటర్న్‌షిప్ అవకాశం.'
    },
    benefits: {
      en: 'Stipend of ₹10,000 per month for 2-6 months internship',
      hi: '2-6 महीने की इंटर्नशिप के लिए ₹10,000 प्रति माह स्टाइपेंड',
      te: '2-6 నెలల ఇంటర్న్‌షిప్ కోసం నెలకు ₹10,000 స్టైపెండ్'
    },
    eligibility: {
      en: 'Students pursuing graduation/post-graduation in recognized institutions',
      hi: 'मान्यता प्राप्त संस्थानों में स्नातक/स्नातकोत्तर कर रहे छात्र',
      te: 'గుర్తింపు పొందిన సంస్థల్లో గ్రాడ్యుయేషన్/పోస్ట్-గ్రాడ్యుయేషన్ చేస్తున్న విద్యార్థులు'
    },
    category: 'education',
    link: 'https://internship.aicte-india.org/',
    ageMin: 18,
    ageMax: 30,
    incomeMax: 10000000,
    occupations: ['student'],
    states: ['all']
  },
  {
    id: '16',
    name: {
      en: 'Skill India Mission',
      hi: 'स्किल इंडिया मिशन',
      te: 'స్కిల్ ఇండియా మిషన్'
    },
    description: {
      en: 'Free skill development training in various trades with certification.',
      hi: 'विभिन्न ट्रेडों में प्रमाणन के साथ मुफ्त कौशल विकास प्रशिक्षण।',
      te: 'సర్టిఫికేషన్‌తో వివిధ ట్రేడ్‌లలో ఉచిత నైపుణ్యాభివృద్ధి శిక్షణ.'
    },
    benefits: {
      en: 'Free training, certification, and placement assistance',
      hi: 'मुफ्त प्रशिक्षण, प्रमाणन और प्लेसमेंट सहायता',
      te: 'ఉచిత శిక్షణ, సర్టిఫికేషన్ మరియు ప్లేస్‌మెంట్ సహాయం'
    },
    eligibility: {
      en: 'Indian youth aged 15-45 years',
      hi: '15-45 वर्ष की आयु के भारतीय युवा',
      te: '15-45 సంవత్సరాల వయస్సు ఉన్న భారతీయ యువత'
    },
    category: 'education',
    link: 'https://www.skillindia.gov.in/',
    ageMin: 15,
    ageMax: 45,
    incomeMax: 10000000,
    occupations: ['all'],
    states: ['all']
  },
  {
    id: '17',
    name: {
      en: 'PM Vishwakarma Yojana',
      hi: 'पीएम विश्वकर्मा योजना',
      te: 'పీఎం విశ్వకర్మ యోజన'
    },
    description: {
      en: 'Support for traditional artisans and craftspeople with training, tools, and credit.',
      hi: 'पारंपरिक कारीगरों और शिल्पकारों के लिए प्रशिक्षण, उपकरण और ऋण के साथ सहायता।',
      te: 'సాంప్రదాయ కళాకారులు మరియు హస్తకళాకారులకు శిక్షణ, సాధనాలు మరియు క్రెడిట్‌తో సహాయం.'
    },
    benefits: {
      en: 'Collateral-free loans up to ₹3 lakh, toolkit, stipend during training',
      hi: '₹3 लाख तक संपार्श्विक-मुक्त ऋण, टूलकिट, प्रशिक्षण के दौरान वजीफा',
      te: '₹3 లక్షల వరకు కొలేటరల్-ఫ్రీ లోన్స్, టూల్‌కిట్, శిక్షణ సమయంలో స్టైపెండ్'
    },
    eligibility: {
      en: 'Traditional artisans in 18 identified trades like carpentry, blacksmithy',
      hi: 'बढ़ईगीरी, लोहारी जैसे 18 पहचाने गए ट्रेडों में पारंपरिक कारीगर',
      te: 'వడ్రంగి, కమ్మరి వంటి 18 గుర్తించబడిన వృత్తులలో సాంప్రదాయ కళాకారులు'
    },
    category: 'business',
    link: 'https://pmvishwakarma.gov.in/',
    ageMin: 18,
    ageMax: 65,
    incomeMax: 500000,
    occupations: ['self-employed', 'labour'],
    states: ['all']
  },
  {
    id: '18',
    name: {
      en: 'Janani Suraksha Yojana',
      hi: 'जननी सुरक्षा योजना',
      te: 'జననీ సురక్ష యోజన'
    },
    description: {
      en: 'Cash assistance to pregnant women for institutional delivery.',
      hi: 'संस्थागत प्रसव के लिए गर्भवती महिलाओं को नकद सहायता।',
      te: 'సంస్థాగత ప్రసవం కోసం గర్భిణీ స్త్రీలకు నగదు సహాయం.'
    },
    benefits: {
      en: 'Cash assistance of ₹1,400 (rural) / ₹1,000 (urban) for delivery',
      hi: 'प्रसव के लिए ₹1,400 (ग्रामीण) / ₹1,000 (शहरी) नकद सहायता',
      te: 'ప్రసవం కోసం ₹1,400 (గ్రామీణ) / ₹1,000 (పట్టణ) నగదు సహాయం'
    },
    eligibility: {
      en: 'Pregnant women from BPL families delivering in govt/accredited facilities',
      hi: 'सरकारी/मान्यता प्राप्त सुविधाओं में प्रसव करने वाली बीपीएल परिवारों की गर्भवती महिलाएं',
      te: 'ప్రభుత్వ/గుర్తింపు పొందిన సదుపాయాలలో ప్రసవించే BPL కుటుంబాల గర్భిణీ స్త్రీలు'
    },
    category: 'health',
    link: 'https://nhm.gov.in/index1.php?lang=1&level=3&sublinkid=841&lid=309',
    ageMin: 18,
    ageMax: 49,
    incomeMax: 200000,
    occupations: ['all'],
    states: ['all']
  },
  {
    id: '19',
    name: {
      en: 'Andhra Pradesh YSR Rythu Bharosa',
      hi: 'आंध्र प्रदेश वाईएसआर रायथू भरोसा',
      te: 'ఆంధ్రప్రదేశ్ వైఎస్ఆర్ రైతు భరోసా'
    },
    description: {
      en: 'Investment support for farmers in Andhra Pradesh with ₹13,500 per year.',
      hi: 'आंध्र प्रदेश में किसानों के लिए ₹13,500 प्रति वर्ष निवेश सहायता।',
      te: 'ఆంధ్రప్రదేశ్‌లో రైతులకు సంవత్సరానికి ₹13,500 పెట్టుబడి మద్దతు.'
    },
    benefits: {
      en: '₹13,500 per year (₹7,500 state + ₹6,000 PM Kisan)',
      hi: '₹13,500 प्रति वर्ष (₹7,500 राज्य + ₹6,000 पीएम किसान)',
      te: 'సంవత్సరానికి ₹13,500 (₹7,500 రాష్ట్రం + ₹6,000 PM కిసాన్)'
    },
    eligibility: {
      en: 'All farmers with landholding in Andhra Pradesh',
      hi: 'आंध्र प्रदेश में भूमि वाले सभी किसान',
      te: 'ఆంధ్రప్రదేశ్‌లో భూమి ఉన్న అన్ని రైతులు'
    },
    category: 'agriculture',
    link: 'https://ysrrythubharosa.ap.gov.in/',
    ageMin: 18,
    ageMax: 100,
    incomeMax: 10000000,
    occupations: ['farmer'],
    states: ['andhra_pradesh']
  },
  {
    id: '20',
    name: {
      en: 'PM SVANidhi - Street Vendor Scheme',
      hi: 'पीएम स्वनिधि - स्ट्रीट वेंडर योजना',
      te: 'పీఎం స్వానిధి - స్ట్రీట్ వెండర్ స్కీమ్'
    },
    description: {
      en: 'Micro-credit facility for street vendors affected by COVID-19.',
      hi: 'COVID-19 से प्रभावित स्ट्रीट वेंडरों के लिए माइक्रो-क्रेडिट सुविधा।',
      te: 'COVID-19 వల్ల ప్రభావితమైన స్ట్రీట్ వెండర్లకు మైక్రో-క్రెడిట్ సదుపాయం.'
    },
    benefits: {
      en: 'Working capital loan up to ₹50,000 with 7% interest subsidy',
      hi: '7% ब्याज सब्सिडी के साथ ₹50,000 तक का कार्यशील पूंजी ऋण',
      te: '7% వడ్డీ సబ్సిడీతో ₹50,000 వరకు వర్కింగ్ క్యాపిటల్ లోన్'
    },
    eligibility: {
      en: 'Street vendors with valid vending certificate or ID',
      hi: 'वैध वेंडिंग प्रमाणपत्र या आईडी वाले स्ट्रीट वेंडर',
      te: 'చెల్లుబాటు అయ్యే వెండింగ్ సర్టిఫికేట్ లేదా ID ఉన్న స్ట్రీట్ వెండర్లు'
    },
    category: 'business',
    link: 'https://pmsvanidhi.mohua.gov.in/',
    ageMin: 18,
    ageMax: 65,
    incomeMax: 300000,
    occupations: ['business', 'self-employed'],
    states: ['all']
  },
  // NEW SCHEMES ADDED BELOW
  {
    id: '21',
    name: {
      en: 'Pradhan Mantri Jeevan Jyoti Bima Yojana',
      hi: 'प्रधानमंत्री जीवन ज्योति बीमा योजना',
      te: 'ప్రధాన్ మంత్రి జీవన్ జ్యోతి బీమా యోజన'
    },
    description: {
      en: 'Life insurance cover of ₹2 lakh at a premium of ₹436 per year.',
      hi: '₹436 प्रति वर्ष के प्रीमियम पर ₹2 लाख का जीवन बीमा कवर।',
      te: 'సంవత్సరానికి ₹436 ప్రీమియంతో ₹2 లక్షల జీవిత బీమా కవర్.'
    },
    benefits: {
      en: '₹2 lakh life insurance cover for just ₹436/year',
      hi: 'केवल ₹436/वर्ष में ₹2 लाख जीवन बीमा कवर',
      te: 'కేవలం ₹436/సంవత్సరానికి ₹2 లక్షల జీవిత బీమా కవర్'
    },
    eligibility: {
      en: 'Indian citizens aged 18-50 years with a bank account',
      hi: 'बैंक खाते वाले 18-50 वर्ष के भारतीय नागरिक',
      te: 'బ్యాంక్ ఖాతా ఉన్న 18-50 సంవత్సరాల భారతీయ పౌరులు'
    },
    category: 'social',
    link: 'https://jansuraksha.gov.in/',
    ageMin: 18,
    ageMax: 50,
    incomeMax: 10000000,
    occupations: ['all'],
    states: ['all']
  },
  {
    id: '22',
    name: {
      en: 'Pradhan Mantri Suraksha Bima Yojana',
      hi: 'प्रधानमंत्री सुरक्षा बीमा योजना',
      te: 'ప్రధాన్ మంత్రి సురక్ష బీమా యోజన'
    },
    description: {
      en: 'Accidental death and disability cover of ₹2 lakh at ₹20 per year.',
      hi: '₹20 प्रति वर्ष पर ₹2 लाख का आकस्मिक मृत्यु और विकलांगता कवर।',
      te: 'సంవత్సరానికి ₹20తో ₹2 లక్షల ప్రమాద మరణం మరియు వైకల్యం కవర్.'
    },
    benefits: {
      en: '₹2 lakh accident cover for just ₹20/year',
      hi: 'केवल ₹20/वर्ष में ₹2 लाख दुर्घटना कवर',
      te: 'కేవలం ₹20/సంవత్సరానికి ₹2 లక్షల ప్రమాద కవర్'
    },
    eligibility: {
      en: 'Indian citizens aged 18-70 years with a bank account',
      hi: 'बैंक खाते वाले 18-70 वर्ष के भारतीय नागरिक',
      te: 'బ్యాంక్ ఖాతా ఉన్న 18-70 సంవత్సరాల భారతీయ పౌరులు'
    },
    category: 'social',
    link: 'https://jansuraksha.gov.in/',
    ageMin: 18,
    ageMax: 70,
    incomeMax: 10000000,
    occupations: ['all'],
    states: ['all']
  },
  {
    id: '23',
    name: {
      en: 'Pradhan Mantri Jan Dhan Yojana',
      hi: 'प्रधानमंत्री जन धन योजना',
      te: 'ప్రధాన్ మంత్రి జన్ ధన్ యోజన'
    },
    description: {
      en: 'Zero balance bank accounts with RuPay debit card and insurance cover.',
      hi: 'RuPay डेबिट कार्ड और बीमा कवर के साथ शून्य शेष बैंक खाते।',
      te: 'RuPay డెబిట్ కార్డ్ మరియు బీమా కవర్‌తో జీరో బ్యాలెన్స్ బ్యాంక్ ఖాతాలు.'
    },
    benefits: {
      en: 'Zero balance account + ₹2 lakh accident insurance + ₹30,000 life cover',
      hi: 'शून्य शेष खाता + ₹2 लाख दुर्घटना बीमा + ₹30,000 जीवन कवर',
      te: 'జీరో బ్యాలెన్స్ ఖాతా + ₹2 లక్షల ప్రమాద బీమా + ₹30,000 జీవిత కవర్'
    },
    eligibility: {
      en: 'All Indian citizens above 10 years of age',
      hi: '10 वर्ष से अधिक उम्र के सभी भारतीय नागरिक',
      te: '10 సంవత్సరాల కంటే ఎక్కువ వయస్సు ఉన్న అన్ని భారతీయ పౌరులు'
    },
    category: 'social',
    link: 'https://pmjdy.gov.in/',
    ageMin: 10,
    ageMax: 100,
    incomeMax: 10000000,
    occupations: ['all'],
    states: ['all']
  },
  {
    id: '24',
    name: {
      en: 'Kisan Credit Card Scheme',
      hi: 'किसान क्रेडिट कार्ड योजना',
      te: 'కిసాన్ క్రెడిట్ కార్డ్ పథకం'
    },
    description: {
      en: 'Provides farmers with affordable credit for agricultural needs including crop production.',
      hi: 'फसल उत्पादन सहित कृषि आवश्यकताओं के लिए किसानों को सस्ता ऋण प्रदान करता है।',
      te: 'పంట ఉత్పత్తితో సహా వ్యవసాయ అవసరాలకు రైతులకు చౌకగా రుణం అందిస్తుంది.'
    },
    benefits: {
      en: 'Credit up to ₹3 lakh at 4% interest rate with interest subvention',
      hi: 'ब्याज सब्वेंशन के साथ 4% ब्याज दर पर ₹3 लाख तक का ऋण',
      te: 'వడ్డీ సబ్వెన్షన్‌తో 4% వడ్డీ రేటుతో ₹3 లక్షల వరకు క్రెడిట్'
    },
    eligibility: {
      en: 'All farmers, including tenant farmers, oral lessees, and SHGs',
      hi: 'किरायेदार किसानों, मौखिक पट्टेदारों और SHG सहित सभी किसान',
      te: 'కౌలు రైతులు, మౌఖిక లీజ్‌దారులు మరియు SHGలతో సహా అన్ని రైతులు'
    },
    category: 'agriculture',
    link: 'https://www.pmkisan.gov.in/KCC.aspx',
    ageMin: 18,
    ageMax: 75,
    incomeMax: 10000000,
    occupations: ['farmer'],
    states: ['all']
  },
  {
    id: '25',
    name: {
      en: 'PM Matru Vandana Yojana',
      hi: 'पीएम मातृ वंदना योजना',
      te: 'పీఎం మాతృ వందన యోజన'
    },
    description: {
      en: 'Cash benefit of ₹5,000 to pregnant and lactating mothers for first living child.',
      hi: 'पहले जीवित बच्चे के लिए गर्भवती और स्तनपान कराने वाली माताओं को ₹5,000 का नकद लाभ।',
      te: 'మొదటి సజీవ బిడ్డకు గర్భిణీ మరియు పాలిచ్చే తల్లులకు ₹5,000 నగదు ప్రయోజనం.'
    },
    benefits: {
      en: '₹5,000 cash benefit in 3 installments',
      hi: '3 किस्तों में ₹5,000 नकद लाभ',
      te: '3 వాయిదాల్లో ₹5,000 నగదు ప్రయోజనం'
    },
    eligibility: {
      en: 'Pregnant women for first child, above 19 years',
      hi: 'पहले बच्चे के लिए 19 वर्ष से अधिक उम्र की गर्भवती महिलाएं',
      te: 'మొదటి బిడ్డకు గర్భిణీ స్త్రీలు, 19 సంవత్సరాలకు పైన'
    },
    category: 'health',
    link: 'https://pmmvy.wcd.gov.in/',
    ageMin: 19,
    ageMax: 49,
    incomeMax: 10000000,
    occupations: ['all'],
    states: ['all']
  },
  {
    id: '26',
    name: {
      en: 'Beti Bachao Beti Padhao',
      hi: 'बेटी बचाओ बेटी पढ़ाओ',
      te: 'బేటీ బచావో బేటీ పఢావో'
    },
    description: {
      en: 'Initiative to address declining child sex ratio and empower the girl child.',
      hi: 'गिरते बाल लिंगानुपात को संबोधित करने और बालिकाओं को सशक्त बनाने की पहल।',
      te: 'పడిపోతున్న శిశు లింగ నిష్పత్తిని పరిష్కరించడానికి మరియు బాలికను సాధికారం చేయడానికి చొరవ.'
    },
    benefits: {
      en: 'Education and awareness programs for girl child welfare',
      hi: 'बालिका कल्याण के लिए शिक्षा और जागरूकता कार्यक्रम',
      te: 'బాలికల సంక్షేమం కోసం విద్య మరియు అవగాహన కార్యక్రమాలు'
    },
    eligibility: {
      en: 'All girl children and their families',
      hi: 'सभी बालिकाएं और उनके परिवार',
      te: 'అన్ని బాలికలు మరియు వారి కుటుంబాలు'
    },
    category: 'education',
    link: 'https://wcd.nic.in/bbbp-schemes',
    ageMin: 0,
    ageMax: 18,
    incomeMax: 10000000,
    occupations: ['all'],
    states: ['all']
  },
  {
    id: '27',
    name: {
      en: 'PM Garib Kalyan Anna Yojana',
      hi: 'पीएम गरीब कल्याण अन्न योजना',
      te: 'పీఎం గరీబ్ కల్యాణ్ అన్న యోజన'
    },
    description: {
      en: 'Free food grains to poor families under National Food Security Act.',
      hi: 'राष्ट्रीय खाद्य सुरक्षा अधिनियम के तहत गरीब परिवारों को मुफ्त खाद्यान्न।',
      te: 'జాతీయ ఆహార భద్రతా చట్టం కింద పేద కుటుంబాలకు ఉచిత ఆహార ధాన్యాలు.'
    },
    benefits: {
      en: '5 kg food grains per person per month free of cost',
      hi: 'प्रति व्यक्ति प्रति माह 5 किलो खाद्यान्न मुफ्त',
      te: 'ఒక్కొక్కరికి నెలకు 5 కేజీ ఆహార ధాన్యాలు ఉచితం'
    },
    eligibility: {
      en: 'All beneficiaries under National Food Security Act',
      hi: 'राष्ट्रीय खाद्य सुरक्षा अधिनियम के तहत सभी लाभार्थी',
      te: 'జాతీయ ఆహార భద్రతా చట్టం కింద అన్ని లబ్ధిదారులు'
    },
    category: 'social',
    link: 'https://nfsa.gov.in/',
    ageMin: 0,
    ageMax: 100,
    incomeMax: 200000,
    occupations: ['all'],
    states: ['all']
  },
  {
    id: '28',
    name: {
      en: 'National Pension System',
      hi: 'राष्ट्रीय पेंशन प्रणाली',
      te: 'జాతీయ పెన్షన్ వ్యవస్థ'
    },
    description: {
      en: 'Voluntary defined contribution pension scheme with tax benefits.',
      hi: 'कर लाभ के साथ स्वैच्छिक परिभाषित योगदान पेंशन योजना।',
      te: 'పన్ను ప్రయోజనాలతో స్వచ్ఛంద నిర్వచించబడిన సహకార పెన్షన్ పథకం.'
    },
    benefits: {
      en: 'Market-linked returns + tax benefits up to ₹2 lakh under 80CCD',
      hi: 'बाजार-लिंक्ड रिटर्न + 80CCD के तहत ₹2 लाख तक कर लाभ',
      te: 'మార్కెట్-లింక్డ్ రిటర్న్స్ + 80CCD కింద ₹2 లక్షల వరకు పన్ను ప్రయోజనాలు'
    },
    eligibility: {
      en: 'All Indian citizens aged 18-70 years',
      hi: '18-70 वर्ष की आयु के सभी भारतीय नागरिक',
      te: '18-70 సంవత్సరాల వయస్సు ఉన్న అన్ని భారతీయ పౌరులు'
    },
    category: 'social',
    link: 'https://www.npscra.nsdl.co.in/',
    ageMin: 18,
    ageMax: 70,
    incomeMax: 10000000,
    occupations: ['all'],
    states: ['all']
  },
  {
    id: '29',
    name: {
      en: 'PM Employment Generation Programme',
      hi: 'पीएम रोजगार सृजन कार्यक्रम',
      te: 'పీఎం ఉపాధి సృష్టి కార్యక్రమం'
    },
    description: {
      en: 'Credit-linked subsidy for setting up new micro enterprises.',
      hi: 'नए सूक्ष्म उद्यम स्थापित करने के लिए क्रेडिट-लिंक्ड सब्सिडी।',
      te: 'కొత్త మైక్రో ఎంటర్‌ప్రైజెస్ ఏర్పాటుకు క్రెడిట్-లింక్డ్ సబ్సిడీ.'
    },
    benefits: {
      en: '15-35% subsidy on project cost up to ₹50 lakh',
      hi: '₹50 लाख तक की परियोजना लागत पर 15-35% सब्सिडी',
      te: '₹50 లక్షల వరకు ప్రాజెక్ట్ ఖర్చుపై 15-35% సబ్సిడీ'
    },
    eligibility: {
      en: 'Any individual above 18 years for manufacturing/service projects',
      hi: 'विनिर्माण/सेवा परियोजनाओं के लिए 18 वर्ष से अधिक आयु का कोई भी व्यक्ति',
      te: 'తయారీ/సేవా ప్రాజెక్టులకు 18 సంవత్సరాలకు పైన ఏ వ్యక్తి అయినా'
    },
    category: 'business',
    link: 'https://www.kviconline.gov.in/pmegpeportal/',
    ageMin: 18,
    ageMax: 65,
    incomeMax: 10000000,
    occupations: ['all'],
    states: ['all']
  },
  {
    id: '30',
    name: {
      en: 'Startup India',
      hi: 'स्टार्टअप इंडिया',
      te: 'స్టార్టప్ ఇండియా'
    },
    description: {
      en: 'Initiative to build startup ecosystem with tax benefits, funding, and incubation.',
      hi: 'कर लाभ, फंडिंग और इन्क्यूबेशन के साथ स्टार्टअप इकोसिस्टम बनाने की पहल।',
      te: 'పన్ను ప్రయోజనాలు, ఫండింగ్ మరియు ఇంక్యుబేషన్‌తో స్టార్టప్ ఎకోసిస్టమ్ నిర్మించడానికి చొరవ.'
    },
    benefits: {
      en: '3-year tax exemption, seed funding, mentorship, fast-track patents',
      hi: '3 वर्ष कर छूट, सीड फंडिंग, मेंटरशिप, फास्ट-ट्रैक पेटेंट',
      te: '3 సంవత్సరాల పన్ను మినహాయింపు, సీడ్ ఫండింగ్, మెంటార్‌షిప్, ఫాస్ట్-ట్రాక్ పేటెంట్లు'
    },
    eligibility: {
      en: 'Startups incorporated as Private Ltd, LLP, or Registered Partnership',
      hi: 'प्राइवेट लिमिटेड, एलएलपी या पंजीकृत साझेदारी के रूप में निगमित स्टार्टअप',
      te: 'ప్రైవేట్ లిమిటెడ్, LLP లేదా రిజిస్టర్డ్ పార్టనర్‌షిప్‌గా ఇన్‌కార్పొరేట్ చేసిన స్టార్టప్‌లు'
    },
    category: 'business',
    link: 'https://www.startupindia.gov.in/',
    ageMin: 18,
    ageMax: 65,
    incomeMax: 10000000,
    occupations: ['business', 'self-employed'],
    states: ['all']
  },
  {
    id: '31',
    name: {
      en: 'Deen Dayal Upadhyaya Grameen Kaushalya Yojana',
      hi: 'दीन दयाल उपाध्याय ग्रामीण कौशल्य योजना',
      te: 'దీన్ దయాళ్ ఉపాధ్యాయ గ్రామీణ కౌశల్య యోజన'
    },
    description: {
      en: 'Skill training for rural youth with placement assistance.',
      hi: 'प्लेसमेंट सहायता के साथ ग्रामीण युवाओं के लिए कौशल प्रशिक्षण।',
      te: 'ప్లేస్‌మెంట్ సహాయంతో గ్రామీణ యువతకు నైపుణ్య శిక్షణ.'
    },
    benefits: {
      en: 'Free training + placement support + post-placement support',
      hi: 'मुफ्त प्रशिक्षण + प्लेसमेंट सहायता + प्लेसमेंट के बाद सहायता',
      te: 'ఉచిత శిక్షణ + ప్లేస్‌మెంట్ సపోర్ట్ + ప్లేస్‌మెంట్ తర్వాత సపోర్ట్'
    },
    eligibility: {
      en: 'Rural youth aged 15-35 years from poor families',
      hi: 'गरीब परिवारों से 15-35 वर्ष की आयु के ग्रामीण युवा',
      te: 'పేద కుటుంబాల నుండి 15-35 సంవత్సరాల వయస్సు ఉన్న గ్రామీణ యువత'
    },
    category: 'education',
    link: 'https://ddugky.gov.in/',
    ageMin: 15,
    ageMax: 35,
    incomeMax: 300000,
    occupations: ['unemployed', 'student'],
    states: ['all']
  },
  {
    id: '32',
    name: {
      en: 'National Apprenticeship Promotion Scheme',
      hi: 'राष्ट्रीय शिक्षुता संवर्धन योजना',
      te: 'జాతీయ అప్రెంటిస్‌షిప్ ప్రమోషన్ స్కీమ్'
    },
    description: {
      en: 'Apprenticeship training with stipend support for skill development.',
      hi: 'कौशल विकास के लिए वजीफा सहायता के साथ शिक्षुता प्रशिक्षण।',
      te: 'నైపుణ్యాభివృద్ధి కోసం స్టైపెండ్ సపోర్ట్‌తో అప్రెంటిస్‌షిప్ శిక్షణ.'
    },
    benefits: {
      en: 'Stipend of ₹5,000-₹9,000 per month during apprenticeship',
      hi: 'शिक्षुता के दौरान ₹5,000-₹9,000 प्रति माह वजीफा',
      te: 'అప్రెంటిస్‌షిప్ సమయంలో నెలకు ₹5,000-₹9,000 స్టైపెండ్'
    },
    eligibility: {
      en: 'Youth aged 14 years and above with minimum qualification',
      hi: 'न्यूनतम योग्यता के साथ 14 वर्ष और उससे अधिक आयु के युवा',
      te: 'కనీస అర్హతతో 14 సంవత్సరాలు మరియు అంతకంటే ఎక్కువ వయస్సు ఉన్న యువత'
    },
    category: 'education',
    link: 'https://apprenticeshipindia.gov.in/',
    ageMin: 14,
    ageMax: 40,
    incomeMax: 10000000,
    occupations: ['all'],
    states: ['all']
  },
  {
    id: '33',
    name: {
      en: 'Post-Matric Scholarship for SC Students',
      hi: 'एससी छात्रों के लिए पोस्ट-मैट्रिक छात्रवृत्ति',
      te: 'SC విద్యార్థులకు పోస్ట్-మెట్రిక్ స్కాలర్‌షిప్'
    },
    description: {
      en: 'Scholarship for SC students pursuing post-matriculation education.',
      hi: 'मैट्रिक के बाद की शिक्षा प्राप्त करने वाले SC छात्रों के लिए छात्रवृत्ति।',
      te: 'మెట్రిక్యులేషన్ తర్వాత విద్యను కొనసాగిస్తున్న SC విద్యార్థులకు స్కాలర్‌షిప్.'
    },
    benefits: {
      en: 'Full tuition fee + maintenance allowance + book grant',
      hi: 'पूर्ण ट्यूशन फीस + रखरखाव भत्ता + पुस्तक अनुदान',
      te: 'పూర్తి ట్యూషన్ ఫీజు + మెయింటెనెన్స్ అలవెన్స్ + బుక్ గ్రాంట్'
    },
    eligibility: {
      en: 'SC students with family income below ₹2.5 lakh per annum',
      hi: 'वार्षिक पारिवारिक आय ₹2.5 लाख से कम वाले SC छात्र',
      te: 'వార్షిక కుటుంబ ఆదాయం ₹2.5 లక్షల కంటే తక్కువ ఉన్న SC విద్యార్థులు'
    },
    category: 'education',
    link: 'https://scholarships.gov.in/',
    ageMin: 14,
    ageMax: 35,
    incomeMax: 250000,
    occupations: ['student'],
    states: ['all']
  },
  {
    id: '34',
    name: {
      en: 'Post-Matric Scholarship for ST Students',
      hi: 'एसटी छात्रों के लिए पोस्ट-मैट्रिक छात्रवृत्ति',
      te: 'ST విద్యార్థులకు పోస్ట్-మెట్రిక్ స్కాలర్‌షిప్'
    },
    description: {
      en: 'Scholarship for ST students pursuing post-matriculation education.',
      hi: 'मैट्रिक के बाद की शिक्षा प्राप्त करने वाले ST छात्रों के लिए छात्रवृत्ति।',
      te: 'మెట్రిక్యులేషన్ తర్వాత విద్యను కొనసాగిస్తున్న ST విద్యార్థులకు స్కాలర్‌షిప్.'
    },
    benefits: {
      en: 'Full tuition fee + maintenance allowance + book grant',
      hi: 'पूर्ण ट्यूशन फीस + रखरखाव भत्ता + पुस्तक अनुदान',
      te: 'పూర్తి ట్యూషన్ ఫీజు + మెయింటెనెన్స్ అలవెన్స్ + బుక్ గ్రాంట్'
    },
    eligibility: {
      en: 'ST students with family income below ₹2.5 lakh per annum',
      hi: 'वार्षिक पारिवारिक आय ₹2.5 लाख से कम वाले ST छात्र',
      te: 'వార్షిక కుటుంబ ఆదాయం ₹2.5 లక్షల కంటే తక్కువ ఉన్న ST విద్యార్థులు'
    },
    category: 'education',
    link: 'https://scholarships.gov.in/',
    ageMin: 14,
    ageMax: 35,
    incomeMax: 250000,
    occupations: ['student'],
    states: ['all']
  },
  {
    id: '35',
    name: {
      en: 'Central Sector Scheme of Scholarships',
      hi: 'केंद्रीय क्षेत्र छात्रवृत्ति योजना',
      te: 'సెంట్రల్ సెక్టార్ స్కాలర్‌షిప్ పథకం'
    },
    description: {
      en: 'Merit-based scholarship for students from low income families pursuing higher education.',
      hi: 'उच्च शिक्षा प्राप्त करने वाले कम आय वाले परिवारों के छात्रों के लिए योग्यता आधारित छात्रवृत्ति।',
      te: 'ఉన్నత విద్యను కొనసాగిస్తున్న తక్కువ ఆదాయ కుటుంబాల విద్యార్థులకు మెరిట్ ఆధారిత స్కాలర్‌షిప్.'
    },
    benefits: {
      en: '₹10,000 - ₹20,000 per year for graduation/post-graduation',
      hi: 'स्नातक/स्नातकोत्तर के लिए प्रति वर्ष ₹10,000 - ₹20,000',
      te: 'గ్రాడ్యుయేషన్/పోస్ట్-గ్రాడ్యుయేషన్ కోసం సంవత్సరానికి ₹10,000 - ₹20,000'
    },
    eligibility: {
      en: 'Students in top 20 percentile of Class 12 with family income below ₹8 lakh',
      hi: 'कक्षा 12 के शीर्ष 20 प्रतिशत में छात्र जिनकी पारिवारिक आय ₹8 लाख से कम है',
      te: '12వ తరగతిలో టాప్ 20 శాతంలో ఉన్న విద్యార్థులు, కుటుంబ ఆదాయం ₹8 లక్షల కంటే తక్కువ'
    },
    category: 'education',
    link: 'https://scholarships.gov.in/',
    ageMin: 17,
    ageMax: 30,
    incomeMax: 800000,
    occupations: ['student'],
    states: ['all']
  },
  {
    id: '36',
    name: {
      en: 'Pragati Scholarship for Girls',
      hi: 'लड़कियों के लिए प्रगति छात्रवृत्ति',
      te: 'బాలికలకు ప్రగతి స్కాలర్‌షిప్'
    },
    description: {
      en: 'Scholarship for girl students pursuing technical education in AICTE approved institutions.',
      hi: 'AICTE अनुमोदित संस्थानों में तकनीकी शिक्षा प्राप्त करने वाली छात्राओं के लिए छात्रवृत्ति।',
      te: 'AICTE ఆమోదిత సంస్థల్లో సాంకేతిక విద్యను కొనసాగిస్తున్న బాలికలకు స్కాలర్‌షిప్.'
    },
    benefits: {
      en: '₹50,000 per year for tuition fee and incidentals',
      hi: 'ट्यूशन फीस और आकस्मिक खर्चों के लिए प्रति वर्ष ₹50,000',
      te: 'ట్యూషన్ ఫీజు మరియు ఇతర ఖర్చులకు సంవత్సరానికి ₹50,000'
    },
    eligibility: {
      en: 'Girls from families with income below ₹8 lakh pursuing technical degree/diploma',
      hi: '₹8 लाख से कम आय वाले परिवारों की लड़कियां जो तकनीकी डिग्री/डिप्लोमा कर रही हैं',
      te: '₹8 లక్షల కంటే తక్కువ ఆదాయం ఉన్న కుటుంబాల నుండి సాంకేతిక డిగ్రీ/డిప్లొమా చేస్తున్న బాలికలు'
    },
    category: 'education',
    link: 'https://www.aicte-india.org/schemes/students-development-schemes/Pragati',
    ageMin: 17,
    ageMax: 30,
    incomeMax: 800000,
    occupations: ['student'],
    states: ['all']
  },
  {
    id: '37',
    name: {
      en: 'Swachh Bharat Mission - Gramin',
      hi: 'स्वच्छ भारत मिशन - ग्रामीण',
      te: 'స్వచ్ఛ భారత్ మిషన్ - గ్రామీణ'
    },
    description: {
      en: 'Construction of toilets and solid/liquid waste management in rural areas.',
      hi: 'ग्रामीण क्षेत्रों में शौचालय निर्माण और ठोस/तरल अपशिष्ट प्रबंधन।',
      te: 'గ్రామీణ ప్రాంతాల్లో టాయిలెట్ల నిర్మాణం మరియు ఘన/ద్రవ వ్యర్థ నిర్వహణ.'
    },
    benefits: {
      en: '₹12,000 incentive for toilet construction',
      hi: 'शौचालय निर्माण के लिए ₹12,000 प्रोत्साहन',
      te: 'టాయిలెట్ నిర్మాణానికి ₹12,000 ప్రోత్సాహకం'
    },
    eligibility: {
      en: 'Rural households without toilets',
      hi: 'बिना शौचालय वाले ग्रामीण परिवार',
      te: 'టాయిలెట్లు లేని గ్రామీణ కుటుంబాలు'
    },
    category: 'housing',
    link: 'https://swachhbharatmission.gov.in/',
    ageMin: 18,
    ageMax: 100,
    incomeMax: 300000,
    occupations: ['all'],
    states: ['all']
  },
  {
    id: '38',
    name: {
      en: 'Indira Gandhi National Old Age Pension Scheme',
      hi: 'इंदिरा गांधी राष्ट्रीय वृद्धावस्था पेंशन योजना',
      te: 'ఇందిరా గాంధీ జాతీయ వృద్ధాప్య పెన్షన్ పథకం'
    },
    description: {
      en: 'Monthly pension to elderly persons belonging to BPL households.',
      hi: 'BPL परिवारों के बुजुर्ग व्यक्तियों को मासिक पेंशन।',
      te: 'BPL కుటుంబాలకు చెందిన వృద్ధులకు నెలవారీ పెన్షన్.'
    },
    benefits: {
      en: '₹200 - ₹500 monthly pension (varies by state)',
      hi: '₹200 - ₹500 मासिक पेंशन (राज्य के अनुसार भिन्न)',
      te: '₹200 - ₹500 నెలవారీ పెన్షన్ (రాష్ట్రం ప్రకారం మారుతుంది)'
    },
    eligibility: {
      en: 'Citizens aged 60+ years from BPL families',
      hi: 'BPL परिवारों से 60+ वर्ष की आयु के नागरिक',
      te: 'BPL కుటుంబాల నుండి 60+ సంవత్సరాల వయస్సు ఉన్న పౌరులు'
    },
    category: 'social',
    link: 'https://nsap.nic.in/',
    ageMin: 60,
    ageMax: 100,
    incomeMax: 200000,
    occupations: ['all'],
    states: ['all']
  },
  {
    id: '39',
    name: {
      en: 'Indira Gandhi National Widow Pension Scheme',
      hi: 'इंदिरा गांधी राष्ट्रीय विधवा पेंशन योजना',
      te: 'ఇందిరా గాంధీ జాతీయ వితంతు పెన్షన్ పథకం'
    },
    description: {
      en: 'Monthly pension to widows belonging to BPL households.',
      hi: 'BPL परिवारों की विधवाओं को मासिक पेंशन।',
      te: 'BPL కుటుంబాలకు చెందిన వితంతువులకు నెలవారీ పెన్షన్.'
    },
    benefits: {
      en: '₹300 - ₹500 monthly pension (varies by state)',
      hi: '₹300 - ₹500 मासिक पेंशन (राज्य के अनुसार भिन्न)',
      te: '₹300 - ₹500 నెలవారీ పెన్షన్ (రాష్ట్రం ప్రకారం మారుతుంది)'
    },
    eligibility: {
      en: 'Widows aged 40-79 years from BPL families',
      hi: 'BPL परिवारों से 40-79 वर्ष की आयु की विधवाएं',
      te: 'BPL కుటుంబాల నుండి 40-79 సంవత్సరాల వయస్సు ఉన్న వితంతువులు'
    },
    category: 'social',
    link: 'https://nsap.nic.in/',
    ageMin: 40,
    ageMax: 79,
    incomeMax: 200000,
    occupations: ['all'],
    states: ['all']
  },
  {
    id: '40',
    name: {
      en: 'Indira Gandhi National Disability Pension Scheme',
      hi: 'इंदिरा गांधी राष्ट्रीय विकलांगता पेंशन योजना',
      te: 'ఇందిరా గాంధీ జాతీయ వైకల్య పెన్షన్ పథకం'
    },
    description: {
      en: 'Monthly pension to persons with disabilities from BPL households.',
      hi: 'BPL परिवारों के विकलांग व्यक्तियों को मासिक पेंशन।',
      te: 'BPL కుటుంబాల నుండి వికలాంగులకు నెలవారీ పెన్షన్.'
    },
    benefits: {
      en: '₹300 - ₹500 monthly pension (varies by state)',
      hi: '₹300 - ₹500 मासिक पेंशन (राज्य के अनुसार भिन्न)',
      te: '₹300 - ₹500 నెలవారీ పెన్షన్ (రాష్ట్రం ప్రకారం మారుతుంది)'
    },
    eligibility: {
      en: 'Persons with 80%+ disability aged 18-79 from BPL families',
      hi: 'BPL परिवारों से 18-79 वर्ष की आयु के 80%+ विकलांग व्यक्ति',
      te: 'BPL కుటుంబాల నుండి 18-79 సంవత్సరాల వయస్సు ఉన్న 80%+ వైకల్యం ఉన్న వ్యక్తులు'
    },
    category: 'social',
    link: 'https://nsap.nic.in/',
    ageMin: 18,
    ageMax: 79,
    incomeMax: 200000,
    occupations: ['all'],
    states: ['all']
  },
  {
    id: '41',
    name: {
      en: 'PM Kisan Maan Dhan Yojana',
      hi: 'पीएम किसान मान धन योजना',
      te: 'పీఎం కిసాన్ మాన్ ధన్ యోజన'
    },
    description: {
      en: 'Pension scheme for small and marginal farmers providing ₹3,000 monthly pension after age 60.',
      hi: 'छोटे और सीमांत किसानों के लिए पेंशन योजना जो 60 वर्ष की आयु के बाद ₹3,000 मासिक पेंशन प्रदान करती है।',
      te: '60 సంవత్సరాల వయస్సు తర్వాత నెలకు ₹3,000 పెన్షన్ అందించే చిన్న మరియు సన్నకారు రైతులకు పెన్షన్ పథకం.'
    },
    benefits: {
      en: '₹3,000 monthly pension after 60 years',
      hi: '60 वर्ष के बाद ₹3,000 मासिक पेंशन',
      te: '60 సంవత్సరాల తర్వాత నెలకు ₹3,000 పెన్షన్'
    },
    eligibility: {
      en: 'Small/marginal farmers aged 18-40 with landholding up to 2 hectares',
      hi: '2 हेक्टेयर तक भूमि वाले 18-40 वर्ष की आयु के छोटे/सीमांत किसान',
      te: '2 హెక్టార్ల వరకు భూమి ఉన్న 18-40 సంవత్సరాల వయస్సు ఉన్న చిన్న/సన్నకారు రైతులు'
    },
    category: 'social',
    link: 'https://maandhan.in/',
    ageMin: 18,
    ageMax: 40,
    incomeMax: 500000,
    occupations: ['farmer'],
    states: ['all']
  },
  {
    id: '42',
    name: {
      en: 'Soil Health Card Scheme',
      hi: 'मृदा स्वास्थ्य कार्ड योजना',
      te: 'నేల ఆరోగ్య కార్డు పథకం'
    },
    description: {
      en: 'Provides information on soil health and recommendations for appropriate dosage of nutrients.',
      hi: 'मिट्टी के स्वास्थ्य और पोषक तत्वों की उचित खुराक की सिफारिशों की जानकारी प्रदान करता है।',
      te: 'నేల ఆరోగ్యం గురించి సమాచారం మరియు పోషకాల సరైన మోతాదు గురించి సిఫార్సులు అందిస్తుంది.'
    },
    benefits: {
      en: 'Free soil testing and health card with nutrient recommendations',
      hi: 'मुफ्त मिट्टी परीक्षण और पोषक तत्वों की सिफारिशों के साथ स्वास्थ्य कार्ड',
      te: 'ఉచిత నేల పరీక్ష మరియు పోషక సిఫార్సులతో ఆరోగ్య కార్డు'
    },
    eligibility: {
      en: 'All farmers across India',
      hi: 'भारत भर के सभी किसान',
      te: 'భారతదేశం అంతటా అన్ని రైతులు'
    },
    category: 'agriculture',
    link: 'https://soilhealth.dac.gov.in/',
    ageMin: 18,
    ageMax: 100,
    incomeMax: 10000000,
    occupations: ['farmer'],
    states: ['all']
  },
  {
    id: '43',
    name: {
      en: 'National Social Assistance Programme',
      hi: 'राष्ट्रीय सामाजिक सहायता कार्यक्रम',
      te: 'జాతీయ సామాజిక సహాయ కార్యక్రమం'
    },
    description: {
      en: 'Social assistance to poor households for elderly, widows, disabled, and bereaved families.',
      hi: 'बुजुर्गों, विधवाओं, विकलांगों और शोकग्रस्त परिवारों के लिए गरीब परिवारों को सामाजिक सहायता।',
      te: 'వృద్ధులు, వితంతువులు, వికలాంగులు మరియు శోకించే కుటుంబాలకు పేద కుటుంబాలకు సామాజిక సహాయం.'
    },
    benefits: {
      en: 'Monthly pension ₹200-₹500 + lump sum for bereaved families',
      hi: 'मासिक पेंशन ₹200-₹500 + शोकग्रस्त परिवारों के लिए एकमुश्त राशि',
      te: 'నెలవారీ పెన్షన్ ₹200-₹500 + శోకించే కుటుంబాలకు ఒకేసారి మొత్తం'
    },
    eligibility: {
      en: 'BPL families with elderly, widows, disabled persons',
      hi: 'बुजुर्गों, विधवाओं, विकलांग व्यक्तियों वाले BPL परिवार',
      te: 'వృద్ధులు, వితంతువులు, వికలాంగులు ఉన్న BPL కుటుంబాలు'
    },
    category: 'social',
    link: 'https://nsap.nic.in/',
    ageMin: 18,
    ageMax: 100,
    incomeMax: 200000,
    occupations: ['all'],
    states: ['all']
  },
  {
    id: '44',
    name: {
      en: 'PM Rojgar Protsahan Yojana',
      hi: 'पीएम रोजगार प्रोत्साहन योजना',
      te: 'పీఎం రోజ్‌గార్ ప్రోత్సాహన్ యోజన'
    },
    description: {
      en: 'Incentive to employers for new employment generation by paying employer EPF contribution.',
      hi: 'नियोक्ता EPF योगदान का भुगतान करके नए रोजगार सृजन के लिए नियोक्ताओं को प्रोत्साहन।',
      te: 'యజమాని EPF సహకారం చెల్లించడం ద్వారా కొత్త ఉపాధి సృష్టికి యజమానులకు ప్రోత్సాహకం.'
    },
    benefits: {
      en: 'Govt pays 12% employer EPF contribution for 3 years',
      hi: '3 वर्षों के लिए सरकार 12% नियोक्ता EPF योगदान का भुगतान करती है',
      te: '3 సంవత్సరాలకు ప్రభుత్వం 12% యజమాని EPF సహకారం చెల్లిస్తుంది'
    },
    eligibility: {
      en: 'New employees with salary up to ₹15,000/month',
      hi: '₹15,000/माह तक वेतन वाले नए कर्मचारी',
      te: '₹15,000/నెల వరకు జీతం ఉన్న కొత్త ఉద్యోగులు'
    },
    category: 'employment',
    link: 'https://pmrpy.gov.in/',
    ageMin: 18,
    ageMax: 60,
    incomeMax: 180000,
    occupations: ['salaried'],
    states: ['all']
  },
  {
    id: '45',
    name: {
      en: 'Mahila Samman Savings Certificate',
      hi: 'महिला सम्मान बचत प्रमाणपत्र',
      te: 'మహిళా సమ్మాన్ సేవింగ్స్ సర్టిఫికేట్'
    },
    description: {
      en: 'One-time savings scheme for women and girls with 7.5% interest rate.',
      hi: 'महिलाओं और लड़कियों के लिए 7.5% ब्याज दर के साथ एकमुश्त बचत योजना।',
      te: 'మహిళలు మరియు బాలికలకు 7.5% వడ్డీ రేటుతో ఒకేసారి పొదుపు పథకం.'
    },
    benefits: {
      en: '7.5% interest rate with 2-year maturity, partial withdrawal allowed',
      hi: '2 वर्ष की परिपक्वता के साथ 7.5% ब्याज दर, आंशिक निकासी की अनुमति',
      te: '2 సంవత్సరాల పరిపక్వతతో 7.5% వడ్డీ రేటు, పాక్షిక ఉపసంహరణ అనుమతి'
    },
    eligibility: {
      en: 'All women and girls of any age',
      hi: 'किसी भी उम्र की सभी महिलाएं और लड़कियां',
      te: 'ఏ వయస్సులోనైనా అన్ని మహిళలు మరియు బాలికలు'
    },
    category: 'social',
    link: 'https://www.indiapost.gov.in/',
    ageMin: 0,
    ageMax: 100,
    incomeMax: 10000000,
    occupations: ['all'],
    states: ['all']
  },
  {
    id: '46',
    name: {
      en: 'Support to Training and Employment Programme (STEP)',
      hi: 'प्रशिक्षण और रोजगार कार्यक्रम के लिए सहायता',
      te: 'శిక్షణ మరియు ఉపాధి కార్యక్రమానికి మద్దతు (STEP)'
    },
    description: {
      en: 'Skill development training for women in traditional sectors.',
      hi: 'पारंपरिक क्षेत्रों में महिलाओं के लिए कौशल विकास प्रशिक्षण।',
      te: 'సాంప్రదాయ రంగాలలో మహిళలకు నైపుణ్యాభివృద్ధి శిక్షణ.'
    },
    benefits: {
      en: 'Free skill training + stipend + placement assistance',
      hi: 'मुफ्त कौशल प्रशिक्षण + वजीफा + प्लेसमेंट सहायता',
      te: 'ఉచిత నైపుణ్య శిక్షణ + స్టైపెండ్ + ప్లేస్‌మెంట్ సహాయం'
    },
    eligibility: {
      en: 'Women aged 16 years and above',
      hi: '16 वर्ष और उससे अधिक उम्र की महिलाएं',
      te: '16 సంవత్సరాలు మరియు అంతకంటే ఎక్కువ వయస్సు ఉన్న మహిళలు'
    },
    category: 'education',
    link: 'https://wcd.nic.in/',
    ageMin: 16,
    ageMax: 65,
    incomeMax: 10000000,
    occupations: ['all'],
    states: ['all']
  },
  {
    id: '47',
    name: {
      en: 'PM Jan Aushadhi Yojana',
      hi: 'पीएम जन औषधि योजना',
      te: 'పీఎం జన్ ఔషధి యోజన'
    },
    description: {
      en: 'Provides quality generic medicines at affordable prices through Jan Aushadhi Kendras.',
      hi: 'जन औषधि केंद्रों के माध्यम से किफायती कीमतों पर गुणवत्तापूर्ण जेनेरिक दवाएं प्रदान करता है।',
      te: 'జన్ ఔషధి కేంద్రాల ద్వారా అందుబాటు ధరల్లో నాణ్యమైన జెనెరిక్ మందులు అందిస్తుంది.'
    },
    benefits: {
      en: 'Medicines at 50-90% lower prices than branded medicines',
      hi: 'ब्रांडेड दवाओं की तुलना में 50-90% कम कीमतों पर दवाएं',
      te: 'బ్రాండెడ్ మందుల కంటే 50-90% తక్కువ ధరలకు మందులు'
    },
    eligibility: {
      en: 'All Indian citizens',
      hi: 'सभी भारतीय नागरिक',
      te: 'అన్ని భారతీయ పౌరులు'
    },
    category: 'health',
    link: 'https://janaushadhi.gov.in/',
    ageMin: 0,
    ageMax: 100,
    incomeMax: 10000000,
    occupations: ['all'],
    states: ['all']
  },
  {
    id: '48',
    name: {
      en: 'Deendayal Antyodaya Yojana - NULM',
      hi: 'दीनदयाल अंत्योदय योजना - एनयूएलएम',
      te: 'దీన్‌దయాళ్ అంత్యోదయ యోజన - NULM'
    },
    description: {
      en: 'Skill training and self-employment for urban poor.',
      hi: 'शहरी गरीबों के लिए कौशल प्रशिक्षण और स्वरोजगार।',
      te: 'పట్టణ పేదలకు నైపుణ్య శిక్షణ మరియు స్వయం ఉపాధి.'
    },
    benefits: {
      en: 'Skill training + interest subsidy on loans up to ₹10 lakh',
      hi: 'कौशल प्रशिक्षण + ₹10 लाख तक के ऋण पर ब्याज सब्सिडी',
      te: 'నైపుణ్య శిక్షణ + ₹10 లక్షల వరకు రుణాలపై వడ్డీ సబ్సిడీ'
    },
    eligibility: {
      en: 'Urban poor with family income below ₹3 lakh',
      hi: '₹3 लाख से कम पारिवारिक आय वाले शहरी गरीब',
      te: '₹3 లక్షల కంటే తక్కువ కుటుంబ ఆదాయం ఉన్న పట్టణ పేదలు'
    },
    category: 'employment',
    link: 'https://nulm.gov.in/',
    ageMin: 18,
    ageMax: 65,
    incomeMax: 300000,
    occupations: ['all'],
    states: ['all']
  },
  {
    id: '49',
    name: {
      en: 'Agnipath Scheme',
      hi: 'अग्निपथ योजना',
      te: 'అగ్నిపథ్ పథకం'
    },
    description: {
      en: 'Short-term recruitment scheme for Indian Armed Forces with Seva Nidhi package.',
      hi: 'सेवा निधि पैकेज के साथ भारतीय सशस्त्र बलों के लिए अल्पकालिक भर्ती योजना।',
      te: 'సేవా నిధి ప్యాకేజీతో భారత సాయుధ బలగాలకు స్వల్పకాలిక రిక్రూట్‌మెంట్ పథకం.'
    },
    benefits: {
      en: '₹11.71 lakh Seva Nidhi after 4 years + skill certification',
      hi: '4 वर्षों के बाद ₹11.71 लाख सेवा निधि + कौशल प्रमाणन',
      te: '4 సంవత్సరాల తర్వాత ₹11.71 లక్షల సేవా నిధి + నైపుణ్య ధృవీకరణ'
    },
    eligibility: {
      en: 'Indian citizens aged 17.5-21 years with 10th/12th pass',
      hi: '10वीं/12वीं पास 17.5-21 वर्ष की आयु के भारतीय नागरिक',
      te: '10వ/12వ పాస్ అయిన 17.5-21 సంవత్సరాల వయస్సు ఉన్న భారతీయ పౌరులు'
    },
    category: 'employment',
    link: 'https://agnipathyojana.in/',
    ageMin: 17,
    ageMax: 21,
    incomeMax: 10000000,
    occupations: ['all'],
    states: ['all']
  },
  {
    id: '50',
    name: {
      en: 'National Career Service Portal',
      hi: 'राष्ट्रीय करियर सेवा पोर्टल',
      te: 'జాతీయ కెరీర్ సర్వీస్ పోర్టల్'
    },
    description: {
      en: 'One-stop platform for job seekers, employers, and career counseling services.',
      hi: 'नौकरी चाहने वालों, नियोक्ताओं और करियर परामर्श सेवाओं के लिए एक-स्टॉप मंच।',
      te: 'ఉద్యోగ అన్వేషకులు, యజమానులు మరియు కెరీర్ కౌన్సెలింగ్ సేవల కోసం వన్-స్టాప్ ప్లాట్‌ఫారమ్.'
    },
    benefits: {
      en: 'Free job matching, career counseling, skill development resources',
      hi: 'मुफ्त नौकरी मिलान, करियर परामर्श, कौशल विकास संसाधन',
      te: 'ఉచిత ఉద్యోగ సరిపోలిక, కెరీర్ కౌన్సెలింగ్, నైపుణ్యాభివృద్ధి వనరులు'
    },
    eligibility: {
      en: 'All Indian citizens looking for employment',
      hi: 'रोजगार की तलाश में सभी भारतीय नागरिक',
      te: 'ఉద్యోగం కోసం చూస్తున్న అన్ని భారతీయ పౌరులు'
    },
    category: 'employment',
    link: 'https://www.ncs.gov.in/',
    ageMin: 15,
    ageMax: 65,
    incomeMax: 10000000,
    occupations: ['all'],
    states: ['all']
  }
];

export const categories = [
  'all',
  'agriculture',
  'health',
  'education',
  'housing',
  'social',
  'business',
  'employment'
];

export type Scheme = typeof schemes[0];
