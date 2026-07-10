const fs = require('fs');
const path = require('path');

const siteUrl = 'https://pushpamayurvedawellness.com';
const previewUrl = 'https://pushpamayurvedawellness.github.io/PAWC-WEB';
const clinicName = 'Pushpam Ayurveda Wellness Centre';
const phone = '+91 98717 31008';
const published = '2026-07-10';

const posts = [
  {
    slug: 'ayurvedic-treatment-for-disc-bulge-back-pain',
    title: 'Ayurvedic Treatment for Disc Bulge and Back Pain: What Actually Helps?',
    shortTitle: 'Disc Bulge & Back Pain',
    description: 'A simple guide to how Ayurveda approaches L4-L5, L5-S1 disc bulge, sciatica and chronic back pain with diagnosis, Panchakarma and lifestyle correction.',
    keywords: ['Ayurvedic treatment for disc bulge', 'back pain Ayurveda Bangalore', 'L4 L5 disc bulge Ayurveda', 'Kati Basti for back pain'],
    image: '../assets/conditions/back-pain-disc.jpg',
    category: 'Pain Management',
    takeaway: 'A disc bulge is not just a spine problem. Ayurveda looks at pain, nerve irritation, inflammation, digestion, sleep, posture and recovery capacity together.',
    sections: [
      ['The simple idea', 'Most people think a disc bulge means one thing: the disc is pressing on a nerve. That can be true, but pain is rarely that simple. Some people have a scan that looks worrying and very little pain. Others have severe pain with a smaller finding. The difference is often inflammation, muscle guarding, nerve sensitivity, sleep and how well the body is recovering. Ayurveda treats the person standing in front of the report, not only the report.'],
      ['What Ayurveda looks for', 'An Ayurvedic doctor studies where the pain travels, whether it is sharp, dull, burning or pulling, what worsens it, and whether digestion, constipation, stress or irregular sleep are adding to Vata aggravation. In simple language, Vata is the movement principle. When it is disturbed, pain can become shifting, radiating, dry, stiff or unpredictable.'],
      ['What treatment may include', 'Care may include internal medicines, local therapies such as Kati Basti, Abhyanga, Patra Pinda Sweda, gentle Panchakarma when appropriate, posture advice and diet changes that reduce inflammation and improve recovery. The goal is not to “push the disc back” with a single trick. The goal is to reduce irritation, calm the nerve, improve circulation and help the body regain stable movement.'],
      ['When to seek urgent care', 'If there is loss of bladder or bowel control, progressive leg weakness, numbness in the saddle area, fever with back pain, or severe trauma, do not wait for routine treatment. Seek urgent medical care. Ayurveda can be supportive, but red flags need immediate assessment.']
    ],
    insight: 'The scan matters, but pain behavior matters more. A good consultation connects both.',
    faqs: [
      ['Can Ayurveda help avoid spine surgery?', 'In selected cases, yes. Many non-emergency disc and back pain cases improve with conservative care. Surgery decisions depend on neurological signs, severity and response to treatment.'],
      ['Is Panchakarma always required for disc bulge?', 'No. Some patients need local therapies and medicines first. Panchakarma is chosen after assessment.'],
      ['How long does back pain treatment take?', 'Acute pain may improve faster. Chronic or recurring pain usually needs a longer plan that includes strengthening habits, posture and digestion correction.']
    ]
  },
  {
    slug: 'panchakarma-detox-meaning-benefits',
    title: 'Panchakarma Detox: What It Really Means in Ayurveda',
    shortTitle: 'Panchakarma Detox',
    description: 'Understand Panchakarma beyond the word detox: preparation, elimination, recovery, who needs it and why doctor supervision matters.',
    keywords: ['Panchakarma detox Bangalore', 'Ayurvedic detox meaning', 'Panchakarma JP Nagar', 'doctor supervised Panchakarma'],
    image: '../assets/conditions/preventive-panchakarma.jpg',
    category: 'Panchakarma',
    takeaway: 'Panchakarma is not a spa cleanse. It is a structured medical process that prepares, removes and rebuilds according to the patient’s strength.',
    sections: [
      ['The simple idea', 'The word detox is popular, but Panchakarma is more precise than a generic cleanse. Ayurveda sees that the body can accumulate metabolic waste, inflammation, stagnation and imbalance when digestion, sleep and routine are disturbed. Panchakarma is a way to prepare the body, move what is stuck, eliminate what is appropriate and then rebuild strength.'],
      ['Why preparation matters', 'Classical Panchakarma does not begin with the strongest procedure. It begins with assessment. The doctor checks strength, age, disease stage, digestion, season and mental state. Then preparatory steps such as oleation and sweating may be used. This is why two people should not receive the same package just because both asked for detox.'],
      ['What it may help with', 'Depending on the case, Panchakarma may support chronic pain, stiffness, skin conditions, digestive imbalance, metabolic sluggishness, stress patterns and preventive wellness. The benefit is not only in the therapy room. It is also in the diet, rest and aftercare that teach the body a calmer rhythm.'],
      ['Who should be careful', 'Pregnancy, severe weakness, uncontrolled illness, active infection, certain heart conditions and very acute disease stages require caution. Panchakarma should be doctor supervised, not selected from a menu like a spa service.']
    ],
    insight: 'A good Panchakarma plan is measured by suitability, not intensity.',
    faqs: [
      ['Is Panchakarma painful?', 'Most therapies are not painful, but some procedures can be physically demanding. The plan should match the patient’s strength.'],
      ['How many days are needed?', 'It can range from a few days of supportive care to a longer classical plan. The doctor decides after consultation.'],
      ['Can healthy people do Panchakarma?', 'Yes, preventive Panchakarma may be useful, especially seasonally, but it still needs assessment.']
    ]
  },
  {
    slug: 'ayurveda-for-pcod-hormonal-imbalance',
    title: 'Ayurveda for PCOD: A Simple Way to Understand Hormonal Imbalance',
    shortTitle: 'PCOD & Hormones',
    description: 'A clear guide to Ayurveda for PCOD, irregular periods, weight gain, acne and insulin resistance with diet, herbs and lifestyle correction.',
    keywords: ['Ayurveda for PCOD', 'PCOD treatment Bangalore', 'hormonal imbalance Ayurveda', 'irregular periods Ayurveda'],
    image: '../assets/conditions/pcod-hormonal.jpg',
    category: 'Women’s Health',
    takeaway: 'PCOD is not only an ovary issue. Ayurveda looks at metabolism, digestion, stress, sleep, weight, skin and cycle rhythm together.',
    sections: [
      ['The simple idea', 'In PCOD, the ovaries are visible in the story, but they are not the whole story. Many patients also struggle with sugar cravings, weight changes, acne, hair fall, mood swings, irregular sleep and stress. Ayurveda asks why the cycle lost rhythm in the first place.'],
      ['What Ayurveda looks for', 'The doctor assesses digestion, appetite, bowel habits, body weight, skin, hair, menstrual pattern, pain, stress and sleep. Kapha and Meda involvement may show as heaviness, weight gain and sluggish metabolism. Pitta may show as acne, heat and irritability. Vata may show as irregularity and anxiety.'],
      ['What treatment may include', 'Treatment may include herbs, cycle-specific support, food timing, insulin-friendly meals, movement, sleep correction and Panchakarma when appropriate. The aim is to improve metabolic clarity and restore a healthier rhythm, not simply force a bleed every month.'],
      ['The cool insight', 'A regular period is a result, not just a target. When digestion, stress and metabolism improve, the cycle often has a better chance to organize itself.']
    ],
    insight: 'In PCOD, the calendar problem often begins as a metabolism problem.',
    faqs: [
      ['Can Ayurveda cure PCOD permanently?', 'PCOD is managed by correcting drivers such as metabolism, stress, weight and routine. Long-term stability depends on sustained habits and individual treatment.'],
      ['Should I stop modern medicines?', 'Do not stop prescribed medicine without your doctor’s guidance. Ayurveda can often work alongside medical care.'],
      ['Is diet important in PCOD?', 'Yes. Food timing, protein, sugar control and digestion support are central to PCOD care.']
    ]
  },
  {
    slug: 'thyroid-and-ayurveda-simple-guide',
    title: 'Thyroid and Ayurveda: Why Energy, Weight and Digestion Matter',
    shortTitle: 'Thyroid Care',
    description: 'Learn how Ayurveda understands thyroid-related symptoms such as fatigue, weight change, hair fall, constipation and mood shifts.',
    keywords: ['thyroid Ayurveda Bangalore', 'Ayurvedic thyroid treatment', 'hypothyroid Ayurveda', 'thyroid fatigue Ayurveda'],
    image: '../assets/conditions/thyroid.jpg',
    category: 'Metabolic Health',
    takeaway: 'Thyroid care is not only about one lab number. Symptoms, digestion, metabolism, sleep and stress give important clues.',
    sections: [
      ['The simple idea', 'The thyroid is small, but its effects are everywhere. When thyroid function is disturbed, patients may feel tired, heavy, cold, constipated, anxious, foggy or unable to lose weight. Ayurveda does not replace lab tests. It adds a symptom map that helps understand the patient’s lived experience.'],
      ['What Ayurveda looks for', 'The doctor looks at Agni, or digestive fire, because metabolism is central. Slow digestion, swelling, heaviness and lethargy may point toward Kapha involvement. Dryness, anxiety and irregularity may show Vata. Heat and irritability may show Pitta.'],
      ['What treatment may include', 'Care may include herbs, food correction, sleep regulation, movement, stress work and support for digestion and circulation. The aim is to improve the terrain in which the thyroid is functioning.'],
      ['What not to do', 'Do not stop thyroid medication suddenly. TSH, T3, T4 and antibodies need proper medical review. Ayurvedic support should be coordinated carefully, especially if you are already on medication.']
    ],
    insight: 'In thyroid care, labs tell one part of the story. Energy pattern tells the rest.',
    faqs: [
      ['Can Ayurveda be used with thyroid tablets?', 'Often yes, but the treating doctors should know what you are taking. Medication changes need medical supervision.'],
      ['What symptoms matter most?', 'Fatigue, weight change, bowel habits, sleep, hair fall, temperature sensitivity and mood all matter.'],
      ['Does diet help thyroid symptoms?', 'Diet can support metabolism and digestion, but it should be individualized.']
    ]
  },
  {
    slug: 'ayurvedic-treatment-for-acne-eczema-psoriasis',
    title: 'Acne, Eczema and Psoriasis: How Ayurveda Reads the Skin',
    shortTitle: 'Skin Conditions',
    description: 'A simple explanation of Ayurvedic skin treatment for acne, eczema, psoriasis, itching and recurrent flare-ups.',
    keywords: ['Ayurvedic skin treatment Bangalore', 'psoriasis Ayurveda', 'eczema Ayurveda', 'acne Ayurveda'],
    image: '../assets/conditions/skin-conditions.jpg',
    category: 'Skin Health',
    takeaway: 'Skin is often the surface signal. Ayurveda also checks digestion, heat, stress, sleep, bowel habits and trigger foods.',
    sections: [
      ['The simple idea', 'Skin problems are visible, so it is natural to focus only on creams. Ayurveda asks a deeper question: why is the skin reacting repeatedly? Acne, eczema and psoriasis can involve heat, inflammation, immune response, dryness, stress and digestion.'],
      ['What Ayurveda looks for', 'The doctor studies where the lesions appear, whether they are red, dry, oily, itchy, scaly, painful or oozing. Digestion, acidity, constipation, sweating, stress and food triggers are also important. Pitta involvement often shows heat and redness. Vata can show dryness and cracking. Kapha can show oiliness and thickness.'],
      ['What treatment may include', 'Treatment may include internal medicines, external applications, food correction, bowel regulation, stress reduction and Panchakarma in selected chronic cases. The aim is fewer flare-ups, calmer skin and better internal balance.'],
      ['A useful way to think', 'A skin flare is like a warning light. Turning off the light is not enough if the engine is still overheating.']
    ],
    insight: 'The skin is not separate from digestion and stress. It often reports on both.',
    faqs: [
      ['Can Ayurveda help psoriasis?', 'Many patients seek Ayurveda for psoriasis management. Results depend on chronicity, triggers, lifestyle and consistency.'],
      ['Will I need diet restrictions?', 'Usually some food correction is needed, but it should be practical and specific, not a random list.'],
      ['Are external oils enough?', 'For recurrent conditions, external care alone is usually not enough. Internal correction matters.']
    ]
  },
  {
    slug: 'ibs-digestion-agni-ayurveda',
    title: 'IBS, Bloating and Acidity: Ayurveda’s Simple Idea of Agni',
    shortTitle: 'Digestion & Agni',
    description: 'Understand Agni in Ayurveda and how it relates to IBS, bloating, acidity, constipation, loose stools and food sensitivity.',
    keywords: ['IBS Ayurveda Bangalore', 'Agni Ayurveda digestion', 'bloating Ayurvedic treatment', 'acidity Ayurveda'],
    image: '../assets/conditions/digestive-disorders.jpg',
    category: 'Digestive Health',
    takeaway: 'Agni means digestive intelligence. When it is irregular, food can become a daily source of bloating, acidity, heaviness or urgency.',
    sections: [
      ['The simple idea', 'Agni is often translated as digestive fire, but it is more than acid or enzymes. It is the body’s ability to digest, absorb and transform food into energy. When Agni is disturbed, even good food can feel wrong.'],
      ['Patterns Ayurveda notices', 'Acidity and burning suggest a different pattern from bloating and gas. Constipation is different from loose stools. IBS often has a Vata component because symptoms shift and react to stress. Ayurveda tries to identify the pattern before choosing herbs or diet.'],
      ['What treatment may include', 'Care may include meal timing, warm cooked food, herbs for digestion, bowel correction, stress regulation and avoiding incompatible combinations. In some cases, Panchakarma or gut-focused therapies may be used.'],
      ['The cool insight', 'The best diet is not only about what is healthy. It is about what your current digestion can actually handle.']
    ],
    insight: 'A food can be healthy on paper and still wrong for your Agni today.',
    faqs: [
      ['Can Ayurveda help IBS?', 'Ayurveda can support IBS by addressing digestion, stress, routine and bowel rhythm. A diagnosis from a physician is still important.'],
      ['Is acidity always Pitta?', 'Often heat is involved, but the full pattern must be assessed. Stress and irregular eating can also contribute.'],
      ['Should I avoid all spicy food?', 'Not always. The answer depends on your symptoms, constitution and digestive strength.']
    ]
  },
  {
    slug: 'stress-sleep-burnout-ayurveda',
    title: 'Stress, Sleep and Burnout: An Ayurvedic Way to Reset the Nervous System',
    shortTitle: 'Stress & Sleep',
    description: 'A calm, simple guide to stress, insomnia, burnout and nervous system imbalance from an Ayurvedic perspective.',
    keywords: ['stress Ayurveda Bangalore', 'sleep Ayurveda', 'burnout Ayurvedic treatment', 'insomnia Ayurveda'],
    image: '../assets/conditions/stress-sleep.jpg',
    category: 'Mind-Body Health',
    takeaway: 'Stress is not only in the mind. It changes sleep, digestion, pain sensitivity, hormones and recovery.',
    sections: [
      ['The simple idea', 'Burnout often feels like “I should be fine, but I am not.” Ayurveda takes that seriously. Stress can disturb Vata, dry out routines, weaken digestion and keep the body in alert mode even when the day is over.'],
      ['What Ayurveda looks for', 'The doctor asks about sleep timing, dreams, waking at night, appetite, bowel habits, caffeine, screen use, anxiety, pain and energy crashes. These details show whether the system is overstimulated, depleted or both.'],
      ['What treatment may include', 'Treatment may include herbs, oil therapies, Shirodhara in selected cases, Abhyanga, breathing routines, food timing and sleep discipline. The goal is not sedation. The goal is to teach the body safety and rhythm again.'],
      ['A helpful insight', 'Rest is not the same as recovery. Scrolling in bed may stop work, but it may not signal safety to the nervous system.']
    ],
    insight: 'Sleep improves when the body stops preparing for danger.',
    faqs: [
      ['Can Ayurveda help insomnia?', 'It can help when insomnia is linked to stress, routine, digestion or nervous system imbalance. Persistent insomnia needs proper assessment.'],
      ['Is Shirodhara for everyone?', 'No. It is chosen based on the person’s condition and strength.'],
      ['What is the first habit to fix?', 'A consistent sleep-wake rhythm and lighter evening digestion are often powerful starting points.']
    ]
  },
  {
    slug: 'arthritis-joint-pain-ayurveda',
    title: 'Joint Pain and Arthritis: Why Ayurveda Looks at Stiffness, Swelling and Digestion',
    shortTitle: 'Joint Pain & Arthritis',
    description: 'A clear guide to Ayurvedic care for knee pain, arthritis, stiffness, swelling and chronic joint discomfort.',
    keywords: ['arthritis Ayurveda Bangalore', 'joint pain Ayurveda', 'knee pain Ayurvedic treatment', 'Vata joint pain'],
    image: '../assets/conditions/joint-arthritis.jpg',
    category: 'Pain Management',
    takeaway: 'Joint pain is not one problem. Dry stiffness, hot swelling and heavy inflammation need different approaches.',
    sections: [
      ['The simple idea', 'A painful joint can feel like a single issue, but Ayurveda separates patterns. Is the joint dry and cracking? Hot and swollen? Heavy and stiff in the morning? Worse in cold weather? Better with warmth? These clues matter.'],
      ['What Ayurveda looks for', 'Vata-related pain may be dry, shifting and stiff. Pitta involvement may show heat, redness and inflammation. Kapha involvement may show heaviness, swelling and sluggish movement. Digestion matters because poor metabolism can feed inflammation.'],
      ['What treatment may include', 'Care may include internal medicines, oil therapies, fomentation, diet correction, gentle movement and Panchakarma in chronic cases. The aim is to reduce pain while improving mobility and preventing repeated aggravation.'],
      ['When to check medically', 'Sudden swelling, severe redness, fever, trauma, deformity or rapidly worsening pain needs medical evaluation. Joint pain can have many causes.']
    ],
    insight: 'The same knee pain can need warming oil in one person and inflammation cooling in another.',
    faqs: [
      ['Can Ayurveda help arthritis?', 'It may help manage pain, stiffness and function depending on the type and stage of arthritis.'],
      ['Should I exercise with joint pain?', 'Usually gentle movement helps, but the type and timing matter. Acute swelling needs caution.'],
      ['Are oils enough?', 'External oils help some patterns, but chronic joint pain often needs internal and lifestyle correction too.']
    ]
  },
  {
    slug: 'seasonal-panchakarma-preventive-ayurveda',
    title: 'Preventive Ayurveda: Why You Should Not Wait Until You Are Sick',
    shortTitle: 'Preventive Ayurveda',
    description: 'Learn how seasonal Panchakarma, diet, sleep and lifestyle counseling can support preventive health in Ayurveda.',
    keywords: ['preventive Ayurveda Bangalore', 'seasonal Panchakarma', 'Ayurvedic wellness consultation', 'Panchakarma prevention'],
    image: '../assets/conditions/preventive-panchakarma.jpg',
    category: 'Preventive Care',
    takeaway: 'Preventive Ayurveda is about catching small imbalances before they become loud symptoms.',
    sections: [
      ['The simple idea', 'Most people visit a clinic when symptoms become disruptive. Ayurveda has another idea: watch the small signals early. Poor sleep, sluggish digestion, heaviness, recurring acidity, stiffness and low energy can be early warnings.'],
      ['What prevention looks like', 'A preventive consultation may review constitution, routine, food habits, stress, sleep, bowel habits and seasonal tendencies. The plan may be simple: meal timing, sleep rhythm, herbs, seasonal routines or a short Panchakarma plan.'],
      ['Why seasons matter', 'Ayurveda pays attention to climate because the body responds to heat, cold, rain and dryness. Seasonal care can help people who repeatedly flare at the same time of year.'],
      ['The cool insight', 'The best treatment is sometimes the one that prevents a problem from needing treatment later.']
    ],
    insight: 'Small symptoms are often early messages, not random annoyances.',
    faqs: [
      ['Can I consult Ayurveda even if I am healthy?', 'Yes. Preventive consultations are useful for maintaining digestion, sleep and energy.'],
      ['How often should preventive care be done?', 'It depends on age, stress, season and health goals. Many people benefit from seasonal review.'],
      ['Is preventive Panchakarma intense?', 'Not always. It should match the person’s strength and need.']
    ]
  },
  {
    slug: 'how-to-choose-ayurveda-hospital-bangalore',
    title: 'How to Choose an Ayurveda Hospital or Wellness Centre in Bangalore',
    shortTitle: 'Choosing an Ayurveda Centre',
    description: 'A practical guide to choosing an Ayurveda hospital or wellness centre in Bangalore: doctor qualification, Panchakarma supervision, clarity and safety.',
    keywords: ['best Ayurveda hospital Bangalore', 'Ayurveda clinic JP Nagar', 'Panchakarma centre Bangalore', 'choose Ayurveda doctor'],
    image: '../ayurveda_consultation.png',
    category: 'Patient Guide',
    takeaway: 'A good Ayurveda centre should feel calm, but it should also feel clinical, clear and doctor-led.',
    sections: [
      ['The simple idea', 'Ayurveda is popular, which means patients see everything from serious medical clinics to spa-like packages. The challenge is knowing what to trust. Looks matter, but clarity matters more.'],
      ['What to check first', 'Look for qualified doctors, a proper consultation, explanation of diagnosis, transparent treatment planning and doctor-supervised Panchakarma. A centre should ask about your medical history, current medicines, reports and red flags before suggesting therapy.'],
      ['Good signs', 'Good signs include individual plans, realistic timelines, clean therapy rooms, trained therapists, follow-up, diet guidance and willingness to explain why a therapy is being chosen.'],
      ['Warning signs', 'Be careful with one-size-fits-all detox packages, promises of guaranteed cures, pressure to buy long plans before assessment, or advice to stop modern medicines abruptly.']
    ],
    insight: 'The right Ayurveda centre does not sell intensity. It offers clarity.',
    faqs: [
      ['Should Panchakarma be doctor supervised?', 'Yes. Panchakarma should be planned and monitored by a qualified doctor.'],
      ['Is a wellness centre the same as a hospital?', 'Not always. Check qualifications, safety processes, treatment depth and whether medical assessment is done.'],
      ['What should I carry for consultation?', 'Carry reports, medication list, diagnosis notes and a clear symptom timeline.']
    ]
  }
];

function esc(value) {
  return String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function slugDatePrefix(index) {
  return `2026-07-${String(10 + index).padStart(2, '0')}`;
}

const postExtras = {
  'ayurvedic-treatment-for-disc-bulge-back-pain': {
    inlineImage: '../therapy_katibasti.png',
    imageCaption: 'Back pain care becomes clearer when the scan, pain pathway, stiffness, sleep and daily posture are read together.',
    rewardTitle: 'A 60-second way to read your back pain',
    rewardItems: [
      'Pain moving below the knee usually needs nerve-focused assessment, not only muscle massage.',
      'Morning stiffness, night pain and sitting pain each point to different aggravating patterns.',
      'A scan finding is useful, but the treatment plan should also track strength, sensation and daily function.',
      'Red flags like bladder changes or progressive weakness need urgent medical care.'
    ],
    askTitle: 'Questions worth asking in consultation',
    askItems: [
      'Is my pain mainly inflammatory, nerve-related, muscle guarding, or mixed?',
      'Which activities should I avoid for two weeks, and which movements are safe?',
      'How will we measure improvement beyond pain score?'
    ],
    related: ['panchakarma-detox-meaning-benefits', 'arthritis-joint-pain-ayurveda', 'how-to-choose-ayurveda-hospital-bangalore'],
    sources: [
      ['NCBI Bookshelf: lumbar disc herniation overview', 'https://www.ncbi.nlm.nih.gov/books/NBK441822/'],
      ['NCCIH: Ayurvedic medicine safety and evidence overview', 'https://www.nccih.nih.gov/health/ayurvedic-medicine-in-depth']
    ]
  },
  'panchakarma-detox-meaning-benefits': {
    inlineImage: '../therapy_panchakarma.png',
    imageCaption: 'Panchakarma is strongest when it is planned like a clinical sequence: prepare, cleanse appropriately, recover well.',
    rewardTitle: 'The clean way to judge a Panchakarma plan',
    rewardItems: [
      'The doctor should first check strength, digestion, age, season and current medicines.',
      'Preparation matters because the body should not be pushed into a strong cleanse suddenly.',
      'Aftercare is not optional; it is where many benefits are protected.',
      'A good plan feels specific to your condition, not like a fixed package.'
    ],
    askTitle: 'Before you start Panchakarma, ask',
    askItems: [
      'Why is this procedure suitable for me right now?',
      'What should I eat before, during and after treatment?',
      'What signs mean we should slow down or change the plan?'
    ],
    related: ['seasonal-panchakarma-preventive-ayurveda', 'ibs-digestion-agni-ayurveda', 'how-to-choose-ayurveda-hospital-bangalore'],
    sources: [
      ['WHO: traditional, complementary and integrative medicine', 'https://www.who.int/health-topics/traditional-complementary-and-integrative-medicine'],
      ['NCCIH: Ayurvedic medicine in depth', 'https://www.nccih.nih.gov/health/ayurvedic-medicine-in-depth']
    ]
  },
  'ayurveda-for-pcod-hormonal-imbalance': {
    inlineImage: '../condition_pcod.png',
    imageCaption: 'PCOD care is easier to understand when cycle rhythm, insulin response, skin, sleep and stress are seen as one connected pattern.',
    rewardTitle: 'The useful PCOD mental model',
    rewardItems: [
      'Irregular periods are often the visible signal of a wider metabolic rhythm problem.',
      'Acne, cravings, weight change and fatigue are not separate complaints; they help map the pattern.',
      'Food timing can matter as much as food choice for many patients.',
      'Progress is better tracked through cycle, energy, skin, cravings and waist change together.'
    ],
    askTitle: 'Questions to take to the doctor',
    askItems: [
      'Are my symptoms showing more Kapha, Pitta, Vata, or a mixed pattern?',
      'What should my breakfast and dinner timing look like?',
      'Which lab reports should I keep monitoring?'
    ],
    related: ['thyroid-and-ayurveda-simple-guide', 'ayurvedic-treatment-for-acne-eczema-psoriasis', 'ibs-digestion-agni-ayurveda'],
    sources: [
      ['NHS: polyendocrine metabolic ovarian syndrome information', 'https://www.nhs.uk/conditions/polyendocrine-metabolic-ovarian-syndrome-pmos/'],
      ['NCCIH: Ayurvedic medicine safety overview', 'https://www.nccih.nih.gov/health/ayurvedic-medicine-in-depth']
    ]
  },
  'thyroid-and-ayurveda-simple-guide': {
    inlineImage: '../condition_thyroid.png',
    imageCaption: 'Thyroid symptoms often show up as a lived pattern: energy, bowels, temperature, sleep, hair and mood.',
    rewardTitle: 'What your thyroid diary should include',
    rewardItems: [
      'Energy dips: note the time of day, not just that you feel tired.',
      'Bowels: constipation or looseness can change the treatment conversation.',
      'Temperature sensitivity: feeling cold or heat-intolerant is useful context.',
      'Hair fall, swelling and mood shifts help complete the picture.'
    ],
    askTitle: 'Bring these questions',
    askItems: [
      'How do my lab values connect with my symptoms?',
      'Can Ayurvedic support be coordinated with my current thyroid medicine?',
      'Which food habits are slowing digestion or energy?'
    ],
    related: ['ayurveda-for-pcod-hormonal-imbalance', 'ibs-digestion-agni-ayurveda', 'stress-sleep-burnout-ayurveda'],
    sources: [
      ['NCCIH: Ayurvedic medicine in depth', 'https://www.nccih.nih.gov/health/ayurvedic-medicine-in-depth'],
      ['WHO: traditional and integrative medicine', 'https://www.who.int/health-topics/traditional-complementary-and-integrative-medicine']
    ]
  },
  'ayurvedic-treatment-for-acne-eczema-psoriasis': {
    inlineImage: '../condition_skin.png',
    imageCaption: 'Skin treatment becomes more useful when visible flare-ups are connected with digestion, heat, stress and triggers.',
    rewardTitle: 'A better way to track skin flare-ups',
    rewardItems: [
      'Note heat, itching, scaling, oiliness or dryness separately.',
      'Track the previous 48 hours of food, sleep, stress and bowel changes.',
      'Photograph flare-ups in the same light so progress is easier to compare.',
      'Do not judge improvement only by one good day; look at flare frequency.'
    ],
    askTitle: 'Smart consultation questions',
    askItems: [
      'Is my skin pattern more heat, dryness, oiliness or immune flare?',
      'Which foods are likely triggers for my pattern?',
      'Do I need internal medicines, external care, Panchakarma, or a phased plan?'
    ],
    related: ['ibs-digestion-agni-ayurveda', 'ayurveda-for-pcod-hormonal-imbalance', 'panchakarma-detox-meaning-benefits'],
    sources: [
      ['NCCIH: Ayurvedic medicine safety and evidence', 'https://www.nccih.nih.gov/health/ayurvedic-medicine-in-depth']
    ]
  },
  'ibs-digestion-agni-ayurveda': {
    inlineImage: '../condition_digestive.png',
    imageCaption: 'Digestive care starts to make sense when acidity, bloating, appetite, bowel rhythm and stress are separated clearly.',
    rewardTitle: 'The Agni check-in',
    rewardItems: [
      'Do you feel hungry at regular times, or only when food is in front of you?',
      'Do symptoms worsen after raw foods, late dinners, dairy, fried foods or stress?',
      'Is the main problem burning, gas, heaviness, urgency or constipation?',
      'Can you identify your safest meal when digestion is disturbed?'
    ],
    askTitle: 'Ask this before taking herbs',
    askItems: [
      'Is my digestion too sharp, too weak, too slow, or too irregular?',
      'Which two food changes should I start with first?',
      'When should I seek testing for persistent digestive symptoms?'
    ],
    related: ['panchakarma-detox-meaning-benefits', 'ayurvedic-treatment-for-acne-eczema-psoriasis', 'stress-sleep-burnout-ayurveda'],
    sources: [
      ['NCCIH: Ayurvedic medicine overview', 'https://www.nccih.nih.gov/health/ayurvedic-medicine-in-depth']
    ]
  },
  'stress-sleep-burnout-ayurveda': {
    inlineImage: '../therapy_shirodhara.png',
    imageCaption: 'Stress care is not only relaxation; it is rebuilding a rhythm the nervous system can trust.',
    rewardTitle: 'The overlooked sleep clue',
    rewardItems: [
      'Trouble falling asleep often points to a different pattern than waking at 3 am.',
      'Heavy mornings can mean the evening routine or dinner timing needs attention.',
      'Dream intensity, jaw tension and caffeine timing are useful clues.',
      'Resting is not the same as recovery if the mind stays stimulated.'
    ],
    askTitle: 'Useful questions for burnout care',
    askItems: [
      'Am I overstimulated, depleted, or both?',
      'Which evening routine change will give the fastest signal?',
      'Is Shirodhara suitable for me, or should we begin more gently?'
    ],
    related: ['ibs-digestion-agni-ayurveda', 'thyroid-and-ayurveda-simple-guide', 'seasonal-panchakarma-preventive-ayurveda'],
    sources: [
      ['WHO: traditional, complementary and integrative medicine', 'https://www.who.int/health-topics/traditional-complementary-and-integrative-medicine']
    ]
  },
  'arthritis-joint-pain-ayurveda': {
    inlineImage: '../therapy_abhyanga.png',
    imageCaption: 'Joint pain care changes depending on whether the joint is dry, swollen, hot, stiff, heavy or unstable.',
    rewardTitle: 'Decode the joint before treating it',
    rewardItems: [
      'Dry cracking stiffness is a different clue from hot swelling.',
      'Morning stiffness and evening pain can point to different drivers.',
      'Warmth helping or worsening pain is important treatment information.',
      'Joint pain with fever, redness or sudden swelling needs medical assessment.'
    ],
    askTitle: 'Questions that sharpen the plan',
    askItems: [
      'Is oil therapy suitable, or is inflammation too active right now?',
      'What movement should I do daily without aggravating pain?',
      'Which foods may be feeding stiffness or swelling?'
    ],
    related: ['ayurvedic-treatment-for-disc-bulge-back-pain', 'panchakarma-detox-meaning-benefits', 'seasonal-panchakarma-preventive-ayurveda'],
    sources: [
      ['NCCIH: evidence notes on Ayurveda and osteoarthritis', 'https://www.nccih.nih.gov/health/ayurvedic-medicine-in-depth']
    ]
  },
  'seasonal-panchakarma-preventive-ayurveda': {
    inlineImage: '../ayurveda_recovery_set.png',
    imageCaption: 'Preventive Ayurveda works best when small signals are noticed before they become repeated problems.',
    rewardTitle: 'Small symptoms worth respecting',
    rewardItems: [
      'Repeated acidity after travel or late nights is not random.',
      'Seasonal skin or sinus flare-ups can reveal predictable body patterns.',
      'Low energy after meals often says more about digestion than willpower.',
      'The earlier the pattern is seen, the gentler the plan can be.'
    ],
    askTitle: 'Ask during a preventive visit',
    askItems: [
      'Which season tends to disturb my body most?',
      'What is the smallest useful routine change for me?',
      'Do I need Panchakarma, herbs, diet correction, or only monitoring right now?'
    ],
    related: ['panchakarma-detox-meaning-benefits', 'stress-sleep-burnout-ayurveda', 'how-to-choose-ayurveda-hospital-bangalore'],
    sources: [
      ['WHO: traditional and integrative medicine', 'https://www.who.int/health-topics/traditional-complementary-and-integrative-medicine'],
      ['NCCIH: Ayurvedic medicine in depth', 'https://www.nccih.nih.gov/health/ayurvedic-medicine-in-depth']
    ]
  },
  'how-to-choose-ayurveda-hospital-bangalore': {
    inlineImage: '../ayurveda_consultation.png',
    imageCaption: 'A good Ayurveda centre should feel warm, but the treatment process should still feel clear, qualified and accountable.',
    rewardTitle: 'The trust checklist',
    rewardItems: [
      'The doctor explains why a therapy is chosen, not only what it is called.',
      'The centre asks about reports, medicines, red flags and medical history.',
      'Panchakarma is supervised and adjusted, not sold as a fixed menu.',
      'The plan includes follow-up, diet and realistic timelines.'
    ],
    askTitle: 'Ask before committing to a plan',
    askItems: [
      'Who is supervising the treatment?',
      'What changes should I expect by week two or three?',
      'What would make you change the plan?'
    ],
    related: ['panchakarma-detox-meaning-benefits', 'seasonal-panchakarma-preventive-ayurveda', 'ayurvedic-treatment-for-disc-bulge-back-pain'],
    sources: [
      ['NCCIH: safety considerations for Ayurvedic medicine', 'https://www.nccih.nih.gov/health/ayurvedic-medicine-in-depth'],
      ['WHO: traditional, complementary and integrative medicine', 'https://www.who.int/health-topics/traditional-complementary-and-integrative-medicine']
    ]
  }
};

function relatedPosts(post) {
  return (postExtras[post.slug]?.related || [])
    .map(slug => posts.find(item => item.slug === slug))
    .filter(Boolean);
}

function head({ title, description, canonical, image, schema, assetPrefix = '../', type = 'article' }) {
  const imageUrl = image ? `${siteUrl}/${image.replace('../', '')}` : `${siteUrl}/Website%20Logo@3x.webp`;
  return `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${esc(title)}</title>
    <meta name="description" content="${esc(description)}">
    <link rel="canonical" href="${canonical}">
    <meta property="og:type" content="${type}">
    <meta property="og:title" content="${esc(title)}">
    <meta property="og:description" content="${esc(description)}">
    <meta property="og:url" content="${canonical}">
    <meta property="og:image" content="${imageUrl}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${esc(title)}">
    <meta name="twitter:description" content="${esc(description)}">
    <meta name="twitter:image" content="${imageUrl}">
    <link rel="icon" href="${assetPrefix}Pushpam Logo.svg" type="image/svg+xml">
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="${assetPrefix}index.css">
    <script src="https://unpkg.com/lucide@latest"></script>
    <script>
        tailwind.config = { theme: { extend: { fontFamily: { sans: ['"Plus Jakarta Sans"', 'sans-serif'], display: ['"Cormorant Garamond"', 'serif'] }, colors: { brand: { darkest: '#161413', deep: '#221f1e', leaf: '#A86728', sage: '#89a397', gold: '#A86728', 'gold-light': '#f5ebe6', 'cream-light': '#f3f7f5', 'cream-sand': '#e1eae6', charcoal: '#221f1e', 'charcoal-muted': '#5c7067' } } } } };
    </script>
    <script type="application/ld+json">${JSON.stringify(schema)}</script>
</head>`;
}

function nav(prefix = '../') {
  return `<nav aria-label="Primary" class="sticky top-0 z-40 bg-[#f3f7f5]/95 backdrop-blur-md border-b border-brand-cream-sand/70">
    <div class="max-w-[1400px] mx-auto px-6 lg:px-12 h-24 flex items-center justify-between">
        <a href="${prefix}index.html" aria-label="Pushpam Ayurveda home" class="flex items-center">
            <img src="${prefix}Pushpam Logo Horizontal Dark.svg" alt="Pushpam Ayurveda Wellness Centre Logo" class="h-14 w-auto object-contain">
        </a>
        <div class="hidden lg:flex items-center space-x-10 text-[0.95rem] font-medium text-brand-charcoal-muted">
            <a href="${prefix}index.html" class="hover:text-brand-gold transition-colors">Home</a>
            <a href="${prefix}about.html" class="hover:text-brand-gold transition-colors">About</a>
            <a href="${prefix}treatments.html" class="hover:text-brand-gold transition-colors">Treatments</a>
            <a href="${prefix}doctors.html" class="hover:text-brand-gold transition-colors">Doctors</a>
            <a href="${prefix}blog.html" class="text-brand-gold">Blog</a>
            <a href="${prefix}corporate-wellness.html" class="hover:text-brand-gold transition-colors">Corporate Wellness</a>
        </div>
        <a href="tel:+919871731008" class="hidden sm:inline-flex items-center gap-2 rounded-full bg-brand-deep text-brand-gold-light px-5 py-3 text-sm font-bold">
            <i data-lucide="phone" class="w-4 h-4"></i> Call Clinic
        </a>
    </div>
</nav>`;
}

function footer(prefix = '../') {
  return `<footer class="bg-brand-darkest text-brand-gold-light pt-24 pb-8 relative overflow-hidden">
    <div class="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div class="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 md:items-center mb-14">
            <div class="space-y-6">
                <a href="${prefix}index.html" aria-label="Pushpam Ayurveda home">
                    <img src="${prefix}Pushpam Logo Horizontal Dark.svg" alt="Pushpam Ayurveda Wellness Centre Logo" class="h-16 w-auto object-contain">
                </a>
                <p class="text-xs text-brand-sage leading-relaxed max-w-md">Pushpam Ayurveda Wellness Centre, JP Nagar, Bangalore. Doctor-led Ayurvedic consultations, Panchakarma and chronic condition care.</p>
            </div>
            <div class="flex flex-wrap gap-5 text-sm text-brand-sage">
                <a href="${prefix}index.html" class="hover:text-brand-gold transition-colors">Home</a>
                <a href="${prefix}treatments.html" class="hover:text-brand-gold transition-colors">Treatments</a>
                <a href="${prefix}doctors.html" class="hover:text-brand-gold transition-colors">Doctors</a>
                <a href="${prefix}blog.html" class="hover:text-brand-gold transition-colors">Blog</a>
                <a href="https://wa.me/919871731008" class="hover:text-brand-gold transition-colors">WhatsApp</a>
            </div>
        </div>
        <div class="pt-8 border-t border-brand-gold/10 flex flex-col md:flex-row justify-between gap-4 text-[11px] text-brand-sage/70">
            <p>&copy; 2026 Pushpam Ayurveda Wellness Centre. All rights reserved.</p>
            <p>Educational content only. Consult a qualified physician for diagnosis and treatment.</p>
        </div>
    </div>
</footer>
<script>lucide.createIcons({ attrs: { 'aria-hidden': 'true' } });</script>`;
}

function listBlock(title, items, icon = 'sparkles') {
  return `<section class="rounded-2xl bg-white border border-brand-gold/15 p-6 sm:p-8 shadow-md shadow-brand-deep/5">
                    <div class="flex items-center gap-3 mb-5">
                        <span class="w-11 h-11 rounded-full bg-brand-gold-light text-brand-gold flex items-center justify-center"><i data-lucide="${icon}" class="w-5 h-5"></i></span>
                        <h2 class="font-display text-3xl text-brand-darkest leading-tight">${esc(title)}</h2>
                    </div>
                    <ul class="grid gap-3">
                        ${items.map(item => `<li class="flex gap-3 text-brand-charcoal-muted leading-relaxed">
                            <i data-lucide="check-circle-2" class="w-5 h-5 mt-1 shrink-0 text-brand-gold"></i>
                            <span>${esc(item)}</span>
                        </li>`).join('\n')}
                    </ul>
                </section>`;
}

function relatedBlock(post) {
  const related = relatedPosts(post);
  if (!related.length) return '';
  return `<section class="rounded-2xl bg-[#eef4f0] border border-brand-gold/15 p-6 sm:p-8">
                    <p class="text-xs font-bold uppercase tracking-[0.18em] text-brand-gold mb-4">Related reading</p>
                    <div class="grid gap-4 sm:grid-cols-3">
                        ${related.map(item => `<a href="${item.slug}.html" class="group rounded-lg bg-white border border-brand-gold/15 p-4 shadow-sm hover:border-brand-gold/45 transition-colors">
                            <span class="text-xs font-bold uppercase tracking-[0.14em] text-brand-charcoal-muted">${esc(item.category)}</span>
                            <span class="block mt-2 font-display text-xl leading-tight text-brand-darkest group-hover:text-brand-gold transition-colors">${esc(item.shortTitle)}</span>
                        </a>`).join('\n')}
                    </div>
                </section>`;
}

function sourceBlock(post) {
  const sources = postExtras[post.slug]?.sources || [];
  if (!sources.length) return '';
  return `<section class="rounded-2xl border border-brand-gold/15 p-6 sm:p-8 bg-white">
                    <h2 class="font-display text-3xl text-brand-darkest">Useful references</h2>
                    <p class="mt-3 text-brand-charcoal-muted leading-relaxed">These links are included for readers and search systems that want broader context. They do not replace a doctor-led consultation.</p>
                    <ul class="mt-5 space-y-3">
                        ${sources.map(([label, href]) => `<li class="flex gap-3">
                            <i data-lucide="external-link" class="w-5 h-5 mt-0.5 shrink-0 text-brand-gold"></i>
                            <a href="${href}" target="_blank" rel="noopener noreferrer" class="font-bold text-brand-gold hover:text-brand-deep transition-colors">${esc(label)}</a>
                        </li>`).join('\n')}
                    </ul>
                </section>`;
}

function postHtml(post, index) {
  const canonical = `${siteUrl}/blog/${post.slug}.html`;
  const extras = postExtras[post.slug] || {};
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalWebPage',
        '@id': canonical,
        url: canonical,
        name: post.title,
        description: post.description,
        about: post.keywords,
        reviewedBy: { '@type': 'Physician', name: 'Dr. Mahathi Sahukar', medicalSpecialty: 'Ayurveda' },
        publisher: { '@type': 'MedicalClinic', name: clinicName, telephone: phone }
      },
      {
        '@type': 'Article',
        headline: post.title,
        description: post.description,
        image: `${siteUrl}/${post.image.replace('../', '')}`,
        datePublished: slugDatePrefix(index),
        dateModified: published,
        author: { '@type': 'Organization', name: clinicName },
        publisher: { '@type': 'Organization', name: clinicName },
        citation: (extras.sources || []).map(([, href]) => href)
      },
      {
        '@type': 'FAQPage',
        mainEntity: post.faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } }))
      }
    ]
  };

  return `${head({ title: `${post.title} | Pushpam Ayurveda Blog`, description: post.description, canonical, image: post.image, schema })}
<body class="bg-brand-cream-light text-brand-charcoal antialiased selection:bg-brand-gold selection:text-brand-darkest">
${nav('../')}
<main>
    <article>
        <header class="bg-gradient-to-br from-[#f3f7f5] via-[#f8f5ee] to-[#e8f0eb] border-b border-brand-cream-sand/60">
            <div class="max-w-[1180px] mx-auto px-5 sm:px-6 lg:px-10 py-14 lg:py-20 grid gap-10 lg:grid-cols-[0.95fr_0.85fr] lg:items-center">
                <div>
                    <a href="../blog.html" class="inline-flex items-center gap-2 text-sm font-bold text-brand-gold hover:text-brand-deep transition-colors mb-6"><i data-lucide="arrow-left" class="w-4 h-4"></i> Blog</a>
                    <p class="text-xs font-bold uppercase tracking-[0.22em] text-brand-gold mb-4">${esc(post.category)}</p>
                    <h1 class="font-display text-4xl sm:text-5xl lg:text-[4rem] leading-tight font-medium text-brand-darkest">${esc(post.title)}</h1>
                    <p class="mt-6 text-lg text-brand-charcoal-muted leading-relaxed max-w-3xl">${esc(post.description)}</p>
                </div>
                <div class="rounded-2xl overflow-hidden border border-brand-gold/20 shadow-xl shadow-brand-deep/10 bg-white">
                    <img src="${post.image}" alt="${esc(post.shortTitle)} explained with Ayurvedic context" class="w-full aspect-[4/3] object-cover" loading="eager">
                </div>
            </div>
        </header>

        <div class="max-w-[1120px] mx-auto px-5 sm:px-6 lg:px-10 py-12 lg:py-16 grid gap-10 lg:grid-cols-[260px_1fr]">
            <aside class="lg:sticky lg:top-28 h-fit">
                <div class="rounded-lg bg-white border border-brand-gold/15 p-5 shadow-sm">
                    <p class="text-xs font-bold uppercase tracking-[0.18em] text-brand-gold mb-3">Quick Takeaway</p>
                    <p class="text-sm leading-relaxed text-brand-charcoal-muted">${esc(post.takeaway)}</p>
                </div>
                <div class="mt-5 rounded-lg bg-brand-deep text-brand-gold-light p-5">
                    <p class="text-xs font-bold uppercase tracking-[0.18em] text-brand-gold mb-3">Cool Insight</p>
                    <p class="font-display text-xl leading-snug">${esc(post.insight)}</p>
                </div>
            </aside>

            <div class="space-y-10">
                ${post.sections.map(([heading, body], sectionIndex) => `<section>
                    <h2 class="font-display text-3xl text-brand-darkest leading-tight">${esc(heading)}</h2>
                    <p class="mt-4 text-base sm:text-lg leading-relaxed text-brand-charcoal-muted">${esc(body)}</p>
                </section>
                ${sectionIndex === 0 && extras.rewardItems ? listBlock(extras.rewardTitle, extras.rewardItems, 'lightbulb') : ''}
                ${sectionIndex === 1 && extras.inlineImage ? `<figure class="rounded-2xl overflow-hidden bg-white border border-brand-gold/15 shadow-md shadow-brand-deep/5">
                    <img src="${extras.inlineImage}" alt="${esc(extras.imageCaption || post.shortTitle)}" class="w-full aspect-[16/9] object-cover" loading="lazy">
                    <figcaption class="px-5 py-4 text-sm text-brand-charcoal-muted border-t border-brand-gold/10">${esc(extras.imageCaption || '')}</figcaption>
                </figure>` : ''}
                ${sectionIndex === 2 && extras.askItems ? listBlock(extras.askTitle, extras.askItems, 'clipboard-list') : ''}`).join('\n')}

                ${relatedBlock(post)}

                <section class="rounded-2xl bg-white border border-brand-gold/15 p-6 sm:p-8 shadow-md shadow-brand-deep/5">
                    <h2 class="font-display text-3xl text-brand-darkest">Questions patients often ask</h2>
                    <div class="mt-6 space-y-5">
                        ${post.faqs.map(([q, a]) => `<div>
                            <h3 class="text-base font-bold text-brand-deep">${esc(q)}</h3>
                            <p class="mt-2 text-brand-charcoal-muted leading-relaxed">${esc(a)}</p>
                        </div>`).join('\n')}
                    </div>
                </section>

                <section class="rounded-2xl bg-gradient-to-br from-brand-deep to-[#31492f] text-brand-gold-light p-6 sm:p-8">
                    <h2 class="font-display text-3xl leading-tight">Need a doctor-led Ayurvedic opinion?</h2>
                    <p class="mt-3 text-brand-gold-light/80 leading-relaxed">Bring your reports, symptom timeline and current medicines. A consultation helps connect the diagnosis with your digestion, sleep, stress and recovery pattern.</p>
                    <a href="../index.html#book" class="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-gold text-brand-darkest px-6 py-3 font-bold">Book Consultation <i data-lucide="arrow-right" class="w-4 h-4"></i></a>
                </section>

                ${sourceBlock(post)}
            </div>
        </div>
    </article>
</main>
${footer('../')}
</body>
</html>
`;
}

function blogIndexHtml() {
  const canonical = `${siteUrl}/blog.html`;
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Pushpam Ayurveda Blog',
    url: canonical,
    description: 'Simple, doctor-led Ayurveda guides for chronic pain, Panchakarma, PCOD, skin, digestion, thyroid and preventive wellness.',
    publisher: { '@type': 'MedicalClinic', name: clinicName, telephone: phone },
    blogPost: posts.map(post => ({ '@type': 'BlogPosting', headline: post.title, url: `${siteUrl}/blog/${post.slug}.html` }))
  };
  return `${head({ title: 'Ayurveda Blog | Simple Treatment Guides | Pushpam Ayurveda Bangalore', description: 'Read simple, useful Ayurveda guides on back pain, Panchakarma, PCOD, thyroid, skin, digestion, stress and preventive care from Pushpam Ayurveda, JP Nagar.', canonical, image: 'ayurveda_consultation.png', schema, assetPrefix: './', type: 'website' })}
<body class="bg-brand-cream-light text-brand-charcoal antialiased selection:bg-brand-gold selection:text-brand-darkest">
${nav('./')}
<main>
    <section class="bg-gradient-to-br from-[#f3f7f5] via-[#f8f5ee] to-[#e8f0eb] border-b border-brand-cream-sand/60">
        <div class="max-w-[1240px] mx-auto px-5 sm:px-6 lg:px-10 py-16 lg:py-24">
            <p class="text-xs font-bold uppercase tracking-[0.22em] text-brand-gold mb-4">Ayurveda Insights</p>
            <h1 class="font-display text-5xl lg:text-[4.75rem] leading-tight font-medium text-brand-darkest max-w-4xl">Simple guides for people trying to understand Ayurvedic care.</h1>
            <p class="mt-6 text-lg text-brand-charcoal-muted leading-relaxed max-w-3xl">Each guide is written to be easy to grasp, clinically grounded and useful before a consultation. Start with the condition or question closest to what you are experiencing.</p>
        </div>
    </section>

    <section class="py-14 lg:py-20">
        <div class="max-w-[1240px] mx-auto px-5 sm:px-6 lg:px-10">
            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
                ${posts.map(post => `<article class="bg-white rounded-lg border border-brand-gold/15 overflow-hidden shadow-md shadow-brand-deep/5 flex flex-col">
                    <a href="blog/${post.slug}.html" class="block overflow-hidden">
                        <img src="${post.image.replace('../', './')}" alt="${esc(post.shortTitle)}" class="w-full aspect-[4/3] object-cover" loading="lazy">
                    </a>
                    <div class="p-6 flex flex-col grow">
                        <p class="text-xs font-bold uppercase tracking-[0.18em] text-brand-gold mb-3">${esc(post.category)}</p>
                        <h2 class="font-display text-2xl leading-tight text-brand-darkest"><a href="blog/${post.slug}.html" class="hover:text-brand-gold transition-colors">${esc(post.shortTitle)}</a></h2>
                        <p class="mt-3 text-sm leading-relaxed text-brand-charcoal-muted grow">${esc(post.description)}</p>
                        <a href="blog/${post.slug}.html" class="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand-gold hover:text-brand-deep transition-colors">Read guide <i data-lucide="arrow-right" class="w-4 h-4"></i></a>
                    </div>
                </article>`).join('\n')}
            </div>
        </div>
    </section>
</main>
${footer('./')}
</body>
</html>
`;
}

function markdownFor(post, index) {
  const extras = postExtras[post.slug] || {};
  const related = relatedPosts(post);
  return `---
title: "${post.title.replace(/"/g, '\\"')}"
description: "${post.description.replace(/"/g, '\\"')}"
category: "${post.category}"
date: "${slugDatePrefix(index)}"
image: "${post.image}"
inline_image: "${extras.inlineImage || ''}"
keywords:
${post.keywords.map(k => `  - "${k}"`).join('\n')}
---

# ${post.title}

${post.takeaway}

**Cool insight:** ${post.insight}

${post.sections.map(([heading, body]) => `## ${heading}\n\n${body}`).join('\n\n')}

## ${extras.rewardTitle || 'What to notice'}

${(extras.rewardItems || []).map(item => `- ${item}`).join('\n')}

## ${extras.askTitle || 'Questions to ask'}

${(extras.askItems || []).map(item => `- ${item}`).join('\n')}

## Related reading

${related.map(item => `- [${item.title}](../../blog/${item.slug}.html)`).join('\n')}

## Questions patients often ask

${post.faqs.map(([q, a]) => `### ${q}\n\n${a}`).join('\n\n')}

## Useful references

${(extras.sources || []).map(([label, href]) => `- [${label}](${href})`).join('\n')}
`;
}

function ensureDir(dir) {
  fs.mkdirSync(path.join(process.cwd(), dir), { recursive: true });
}

ensureDir('blog');
ensureDir('content/blog');
ensureDir('admin');

fs.writeFileSync('blog.html', blogIndexHtml(), 'utf8');
posts.forEach((post, index) => {
  fs.writeFileSync(path.join('blog', `${post.slug}.html`), postHtml(post, index), 'utf8');
  fs.writeFileSync(path.join('content/blog', `${post.slug}.md`), markdownFor(post, index), 'utf8');
});

const sitemapUrls = [
  '',
  'about.html',
  'treatments.html',
  'doctors.html',
  'corporate-wellness.html',
  'blog.html',
  ...posts.map(post => `blog/${post.slug}.html`)
];

fs.writeFileSync('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls.map(url => `  <url>
    <loc>${url ? `${siteUrl}/${url}` : `${siteUrl}/`}</loc>
    <lastmod>${published}</lastmod>
    <changefreq>${url.startsWith('blog/') ? 'monthly' : 'weekly'}</changefreq>
    <priority>${url === '' ? '1.0' : url === 'blog.html' ? '0.8' : '0.7'}</priority>
  </url>`).join('\n')}
</urlset>
`, 'utf8');

fs.writeFileSync('robots.txt', `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`, 'utf8');

fs.writeFileSync('llms.txt', `# Pushpam Ayurveda Wellness Centre

Pushpam Ayurveda Wellness Centre is a doctor-led Ayurveda clinic in JP Nagar, Bangalore offering Ayurvedic consultations, Panchakarma and care for chronic pain, disc problems, PCOD, thyroid concerns, skin conditions, digestion, stress, joint pain and preventive wellness.

Primary pages:
- Home: ${siteUrl}/index.html
- Treatments: ${siteUrl}/treatments.html
- Doctors: ${siteUrl}/doctors.html
- Blog: ${siteUrl}/blog.html

High-value treatment guides:
${posts.map(post => `- ${post.title}: ${siteUrl}/blog/${post.slug}.html`).join('\n')}

Contact:
- Phone/WhatsApp: ${phone}
- Location: JP Nagar, Bangalore

Medical note: Blog content is educational and does not replace a consultation with a qualified physician. Urgent symptoms should be evaluated immediately.
`, 'utf8');

fs.writeFileSync(path.join('admin', 'index.html'), `<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pushpam Blog CMS</title>
</head>
<body>
  <script src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js"></script>
</body>
</html>
`, 'utf8');

fs.writeFileSync(path.join('admin', 'config.yml'), `backend:
  name: github
  repo: pushpamayurvedawellness/PAWC-WEB
  branch: main

media_folder: "assets/uploads"
public_folder: "/assets/uploads"

collections:
  - name: "blog"
    label: "Blog Posts"
    folder: "content/blog"
    create: true
    slug: "{{slug}}"
    extension: "md"
    format: "frontmatter"
    fields:
      - { label: "Title", name: "title", widget: "string" }
      - { label: "Description", name: "description", widget: "text" }
      - { label: "Category", name: "category", widget: "string" }
      - { label: "Date", name: "date", widget: "datetime" }
      - { label: "Featured Image", name: "image", widget: "image", required: false }
      - { label: "Keywords", name: "keywords", widget: "list", required: false }
      - { label: "Body", name: "body", widget: "markdown" }
`, 'utf8');

fs.writeFileSync('CMS_SETUP.md', `# Pushpam Blog CMS

The site now includes a Decap CMS-ready admin area at \`/admin/\`.

Important: GitHub Pages is static hosting. A real credentialed CMS needs GitHub OAuth or another identity provider. Do not use a hardcoded browser password; it is not secure.

Recommended setup:

1. Keep the repository on GitHub.
2. Add a GitHub OAuth app or deploy the site on Netlify/Cloudflare Pages with GitHub authentication.
3. Use \`admin/config.yml\` as the CMS content model.
4. Blog source files live in \`content/blog/\`.
5. Regenerate pages with:

\`\`\`powershell
node tools/build_blog.js
\`\`\`

For a fully automatic CMS, add a GitHub Action that runs the build script when \`content/blog/**\` changes and commits generated \`blog/*.html\`, \`blog.html\`, \`sitemap.xml\`, and \`llms.txt\`.
`, 'utf8');

function addBlogLink(file) {
  let html = fs.readFileSync(file, 'utf8');
  html = html.replace(/pushpam_home_page\.html/g, 'index.html');
  html = html.replace(/\+91-9876543210/g, '+91-98717-31008');
  html = html.replace(/\+91 98765 43210/g, '+91 98717 31008');
  const mobileBlog = '<a href="blog.html" class="mobile-nav-link hover:text-brand-gold transition-colors cursor-pointer-target">Blog</a>';
  const desktopBlog = '<a href="blog.html" class="nav-link hover:text-brand-deep transition-colors cursor-pointer-target">Blog</a>';
  html = html.replace(/<a href="blog\.html"[^>]*>Blog<\/a>/g, '');
  html = html.replace(
    /(<a href="doctors\.html" class="mobile-nav-link[^"]*">Doctors<\/a>)(?:\s*\n\s*)*(<a href="corporate-wellness\.html" class="mobile-nav-link)/g,
    `$1\n            ${mobileBlog}\n            $2`
  );
  html = html.replace(
    /(<a href="doctors\.html" class="nav-link[^"]*">Doctors<\/a>)(?:\s*\n\s*)*(<a href="corporate-wellness\.html" class="nav-link)/g,
    `$1\n                ${desktopBlog}\n                $2`
  );
  if (!html.includes('rel="canonical"')) {
    const canonicalPath = file === 'index.html' || file === 'pushpam_home_page.html' ? '' : file;
    html = html.replace('</title>', `</title>\n    <link rel="canonical" href="${siteUrl}/${canonicalPath}">`);
  } else if (file === 'pushpam_home_page.html') {
    html = html.replace(/<link rel="canonical" href="[^"]+">/, `<link rel="canonical" href="${siteUrl}/">`);
  }
  if (!html.includes('og:site_name')) {
    const title = (html.match(/<title>(.*?)<\/title>/) || [null, clinicName])[1];
    const desc = (html.match(/<meta name="description" content="(.*?)">/) || [null, 'Pushpam Ayurveda Wellness Centre in JP Nagar, Bangalore.'])[1];
    html = html.replace('<link rel="icon"', `<meta property="og:site_name" content="${clinicName}">\n    <meta property="og:title" content="${esc(title)}">\n    <meta property="og:description" content="${esc(desc)}">\n    <meta property="og:type" content="website">\n    <meta name="twitter:card" content="summary_large_image">\n    <link rel="icon"`);
  }
  const canonical = (html.match(/<link rel="canonical" href="([^"]+)">/) || [null, `${siteUrl}/`])[1];
  const title = (html.match(/<title>(.*?)<\/title>/) || [null, clinicName])[1];
  const desc = (html.match(/<meta name="description" content="(.*?)">/) || [null, 'Pushpam Ayurveda Wellness Centre in JP Nagar, Bangalore.'])[1];
  if (!html.includes('property="og:url"')) {
    html = html.replace('<meta name="twitter:card"', `<meta property="og:url" content="${canonical}">\n    <meta property="og:image" content="${siteUrl}/Website%20Logo@3x.webp">\n    <meta name="twitter:card"`);
  }
  if (!html.includes('name="twitter:title"')) {
    html = html.replace('<link rel="icon"', `<meta name="twitter:title" content="${esc(title)}">\n    <meta name="twitter:description" content="${esc(desc)}">\n    <meta name="twitter:image" content="${siteUrl}/Website%20Logo@3x.webp">\n    <link rel="icon"`);
  }
  fs.writeFileSync(file, html, 'utf8');
}

['index.html', 'pushpam_home_page.html', 'about.html', 'treatments.html', 'doctors.html', 'corporate-wellness.html'].forEach(addBlogLink);

console.log(`Built ${posts.length} blog posts, blog index, CMS config, sitemap, robots and llms.txt.`);
