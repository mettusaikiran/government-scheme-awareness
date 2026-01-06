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