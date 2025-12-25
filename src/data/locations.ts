export const states = [
  { value: 'andhra', label: { en: 'Andhra Pradesh', hi: 'आंध्र प्रदेश', te: 'ఆంధ్ర ప్రదేశ్' } },
  { value: 'telangana', label: { en: 'Telangana', hi: 'तेलंगाना', te: 'తెలంగాణ' } },
  { value: 'karnataka', label: { en: 'Karnataka', hi: 'कर्नाटक', te: 'కర్ణాటక' } },
  { value: 'tamilnadu', label: { en: 'Tamil Nadu', hi: 'तमिलनाडु', te: 'తమిళనాడు' } },
  { value: 'kerala', label: { en: 'Kerala', hi: 'केरल', te: 'కేరళ' } },
  { value: 'maharashtra', label: { en: 'Maharashtra', hi: 'महाराष्ट्र', te: 'మహారాష్ట్ర' } },
  { value: 'delhi', label: { en: 'Delhi', hi: 'दिल्ली', te: 'ఢిల్లీ' } },
  { value: 'up', label: { en: 'Uttar Pradesh', hi: 'उत्तर प्रदेश', te: 'ఉత్తర ప్రదేశ్' } },
  { value: 'bihar', label: { en: 'Bihar', hi: 'बिहार', te: 'బీహార్' } },
  { value: 'westbengal', label: { en: 'West Bengal', hi: 'पश्चिम बंगाल', te: 'పశ్చిమ బెంగాల్' } },
];

export const districts: Record<string, Array<{ value: string; label: { en: string; hi: string; te: string } }>> = {
  telangana: [
    { value: 'hyderabad', label: { en: 'Hyderabad', hi: 'हैदराबाद', te: 'హైదరాబాద్' } },
    { value: 'rangareddy', label: { en: 'Ranga Reddy', hi: 'रंगा रेड्डी', te: 'రంగారెడ్డి' } },
    { value: 'medchal', label: { en: 'Medchal-Malkajgiri', hi: 'मेडचल-मल्काजगिरी', te: 'మేడ్చల్-మల్కాజ్‌గిరి' } },
    { value: 'warangal', label: { en: 'Warangal', hi: 'वारंगल', te: 'వరంగల్' } },
    { value: 'karimnagar', label: { en: 'Karimnagar', hi: 'करीमनगर', te: 'కరీంనగర్' } },
  ],
  andhra: [
    { value: 'visakhapatnam', label: { en: 'Visakhapatnam', hi: 'विशाखापट्टनम', te: 'విశాఖపట్నం' } },
    { value: 'vijayawada', label: { en: 'Vijayawada', hi: 'विजयवाड़ा', te: 'విజయవాడ' } },
    { value: 'guntur', label: { en: 'Guntur', hi: 'गुंटूर', te: 'గుంటూరు' } },
    { value: 'nellore', label: { en: 'Nellore', hi: 'नेल्लोर', te: 'నెల్లూరు' } },
    { value: 'tirupati', label: { en: 'Tirupati', hi: 'तिरुपति', te: 'తిరుపతి' } },
  ],
  maharashtra: [
    { value: 'mumbai', label: { en: 'Mumbai', hi: 'मुंबई', te: 'ముంబై' } },
    { value: 'pune', label: { en: 'Pune', hi: 'पुणे', te: 'పూణే' } },
    { value: 'nagpur', label: { en: 'Nagpur', hi: 'नागपुर', te: 'నాగ్‌పూర్' } },
    { value: 'nashik', label: { en: 'Nashik', hi: 'नासिक', te: 'నాసిక్' } },
  ],
  delhi: [
    { value: 'newdelhi', label: { en: 'New Delhi', hi: 'नई दिल्ली', te: 'న్యూ ఢిల్లీ' } },
    { value: 'north', label: { en: 'North Delhi', hi: 'उत्तर दिल्ली', te: 'ఉత్తర ఢిల్లీ' } },
    { value: 'south', label: { en: 'South Delhi', hi: 'दक्षिण दिल्ली', te: 'దక్షిణ ఢిల్లీ' } },
  ],
};

export const educationLevels = [
  { value: 'none', label: { en: 'No Formal Education', hi: 'कोई औपचारिक शिक्षा नहीं', te: 'అధికారిక విద్య లేదు' } },
  { value: 'primary', label: { en: 'Primary (1-5)', hi: 'प्राथमिक (1-5)', te: 'ప్రాథమిక (1-5)' } },
  { value: 'secondary', label: { en: 'Secondary (6-10)', hi: 'माध्यमिक (6-10)', te: 'సెకండరీ (6-10)' } },
  { value: 'higher', label: { en: 'Higher Secondary (11-12)', hi: 'उच्च माध्यमिक (11-12)', te: 'హయ్యర్ సెకండరీ (11-12)' } },
  { value: 'graduate', label: { en: 'Graduate', hi: 'स्नातक', te: 'గ్రాడ్యుయేట్' } },
  { value: 'postgraduate', label: { en: 'Post Graduate', hi: 'स्नातकोत्तर', te: 'పోస్ట్ గ్రాడ్యుయేట్' } },
];

export const incomeRanges = [
  { value: '0-100000', label: { en: 'Below ₹1 Lakh', hi: '₹1 लाख से कम', te: '₹1 లక్ష కంటే తక్కువ' }, max: 100000 },
  { value: '100000-300000', label: { en: '₹1-3 Lakh', hi: '₹1-3 लाख', te: '₹1-3 లక్షలు' }, max: 300000 },
  { value: '300000-500000', label: { en: '₹3-5 Lakh', hi: '₹3-5 लाख', te: '₹3-5 లక్షలు' }, max: 500000 },
  { value: '500000-800000', label: { en: '₹5-8 Lakh', hi: '₹5-8 लाख', te: '₹5-8 లక్షలు' }, max: 800000 },
  { value: '800000+', label: { en: 'Above ₹8 Lakh', hi: '₹8 लाख से अधिक', te: '₹8 లక్షలకు పైన' }, max: 10000000 },
];

export const occupations = [
  { value: 'farmer', label: { en: 'Farmer', hi: 'किसान', te: 'రైతు' } },
  { value: 'student', label: { en: 'Student', hi: 'छात्र', te: 'విద్యార్థి' } },
  { value: 'government', label: { en: 'Government Employee', hi: 'सरकारी कर्मचारी', te: 'ప్రభుత్వ ఉద్యోగి' } },
  { value: 'private', label: { en: 'Private Sector', hi: 'निजी क्षेत्र', te: 'ప్రైవేట్ రంగం' } },
  { value: 'selfemployed', label: { en: 'Self Employed', hi: 'स्वरोजगार', te: 'స్వయం ఉపాధి' } },
  { value: 'homemaker', label: { en: 'Homemaker', hi: 'गृहिणी', te: 'గృహిణి' } },
  { value: 'unemployed', label: { en: 'Unemployed', hi: 'बेरोजगार', te: 'నిరుద్యోగి' } },
  { value: 'retired', label: { en: 'Retired', hi: 'सेवानिवृत्त', te: 'రిటైర్డ్' } },
];
