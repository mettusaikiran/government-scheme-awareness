// Additional profile options for enhanced eligibility matching

export const casteCategories = [
  { value: 'general', label: { en: 'General', hi: 'सामान्य', te: 'జనరల్' } },
  { value: 'obc', label: { en: 'OBC', hi: 'ओबीसी', te: 'OBC' } },
  { value: 'sc', label: { en: 'SC (Scheduled Caste)', hi: 'अनुसूचित जाति', te: 'SC (షెడ్యూల్డ్ కులం)' } },
  { value: 'st', label: { en: 'ST (Scheduled Tribe)', hi: 'अनुसूचित जनजाति', te: 'ST (షెడ్యూల్డ్ తెగ)' } },
  { value: 'ews', label: { en: 'EWS (Economically Weaker Section)', hi: 'आर्थिक रूप से कमजोर वर्ग', te: 'EWS (ఆర్థికంగా బలహీన వర్గం)' } },
];

export const areaTypes = [
  { value: 'rural', label: { en: 'Rural', hi: 'ग्रामीण', te: 'గ్రామీణ' } },
  { value: 'urban', label: { en: 'Urban', hi: 'शहरी', te: 'పట్టణ' } },
  { value: 'semi-urban', label: { en: 'Semi-Urban', hi: 'अर्ध-शहरी', te: 'సెమీ-అర్బన్' } },
];

export const disabilityTypes = [
  { value: 'none', label: { en: 'No Disability', hi: 'कोई विकलांगता नहीं', te: 'వైకల్యం లేదు' } },
  { value: 'visual', label: { en: 'Visual Impairment', hi: 'दृष्टि दोष', te: 'దృష్టి లోపం' } },
  { value: 'hearing', label: { en: 'Hearing Impairment', hi: 'श्रवण दोष', te: 'వినికిడి లోపం' } },
  { value: 'locomotor', label: { en: 'Locomotor Disability', hi: 'चलने-फिरने में विकलांगता', te: 'లోకోమోటర్ వైకల్యం' } },
  { value: 'intellectual', label: { en: 'Intellectual Disability', hi: 'बौद्धिक विकलांगता', te: 'మేధో వైకల్యం' } },
  { value: 'multiple', label: { en: 'Multiple Disabilities', hi: 'बहुविकलांगता', te: 'బహుళ వైకల్యాలు' } },
];

export const bplStatus = [
  { value: 'bpl', label: { en: 'BPL (Below Poverty Line)', hi: 'बीपीएल (गरीबी रेखा से नीचे)', te: 'BPL (దారిద్య్ర రేఖకు దిగువన)' } },
  { value: 'apl', label: { en: 'APL (Above Poverty Line)', hi: 'एपीएल (गरीबी रेखा से ऊपर)', te: 'APL (దారిద్య్ర రేఖకు పైన)' } },
];

export const familySizes = [
  { value: '1-2', label: { en: '1-2 Members', hi: '1-2 सदस्य', te: '1-2 సభ్యులు' } },
  { value: '3-4', label: { en: '3-4 Members', hi: '3-4 सदस्य', te: '3-4 సభ్యులు' } },
  { value: '5-6', label: { en: '5-6 Members', hi: '5-6 सदस्य', te: '5-6 సభ్యులు' } },
  { value: '7+', label: { en: '7+ Members', hi: '7+ सदस्य', te: '7+ సభ్యులు' } },
];

export const maritalStatus = [
  { value: 'single', label: { en: 'Single', hi: 'अविवाहित', te: 'ఒంటరి' } },
  { value: 'married', label: { en: 'Married', hi: 'विवाहित', te: 'వివాహిత' } },
  { value: 'widowed', label: { en: 'Widowed', hi: 'विधवा/विधुर', te: 'వితంతువు' } },
  { value: 'divorced', label: { en: 'Divorced', hi: 'तलाकशुदा', te: 'విడాకులు తీసుకున్న' } },
];

export const specialGroups = [
  { value: 'farmer', label: { en: 'Farmer', hi: 'किसान', te: 'రైతు' } },
  { value: 'woman_entrepreneur', label: { en: 'Woman Entrepreneur', hi: 'महिला उद्यमी', te: 'మహిళా వ్యవస్థాపకురాలు' } },
  { value: 'senior_citizen', label: { en: 'Senior Citizen (60+)', hi: 'वरिष्ठ नागरिक (60+)', te: 'వృద్ధ పౌరుడు (60+)' } },
  { value: 'unemployed', label: { en: 'Unemployed', hi: 'बेरोजगार', te: 'నిరుద్యోగి' } },
  { value: 'minority', label: { en: 'Minority Community', hi: 'अल्पसंख्यक समुदाय', te: 'మైనారిటీ సమాజం' } },
  { value: 'ex_serviceman', label: { en: 'Ex-Serviceman', hi: 'भूतपूर्व सैनिक', te: 'మాజీ సైనికుడు' } },
];

export const governmentTypes = [
  { value: 'central', label: { en: 'Central Government', hi: 'केंद्र सरकार', te: 'కేంద్ర ప్రభుత్వం' } },
  { value: 'state', label: { en: 'State Government', hi: 'राज्य सरकार', te: 'రాష్ట్ర ప్రభుత్వం' } },
];

export const departments = [
  { value: 'agriculture', label: { en: 'Agriculture', hi: 'कृषि', te: 'వ్యవసాయం' } },
  { value: 'health', label: { en: 'Health & Family Welfare', hi: 'स्वास्थ्य एवं परिवार कल्याण', te: 'ఆరోగ్యం & కుటుంబ సంక్షేమం' } },
  { value: 'education', label: { en: 'Education', hi: 'शिक्षा', te: 'విద్య' } },
  { value: 'women', label: { en: 'Women & Child Development', hi: 'महिला एवं बाल विकास', te: 'మహిళా & శిశు అభివృద్ధి' } },
  { value: 'rural', label: { en: 'Rural Development', hi: 'ग्रामीण विकास', te: 'గ్రామీణాభివృద్ధి' } },
  { value: 'urban', label: { en: 'Urban Development', hi: 'शहरी विकास', te: 'పట్టణాభివృద్ధి' } },
  { value: 'social', label: { en: 'Social Justice', hi: 'सामाजिक न्याय', te: 'సామాజిక న్యాయం' } },
  { value: 'msme', label: { en: 'MSME', hi: 'एमएसएमई', te: 'MSME' } },
  { value: 'labour', label: { en: 'Labour & Employment', hi: 'श्रम एवं रोजगार', te: 'శ్రమ & ఉపాధి' } },
  { value: 'finance', label: { en: 'Finance', hi: 'वित्त', te: 'ఫైనాన్స్' } },
];
