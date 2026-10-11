/* =====================================================================
   여기만 고치면 사이트 전체가 바뀌어요.
   - 글자는 "따옴표" 안에서만 바꾸세요. 따옴표와 쉼표는 지우지 마세요.
   - 이미지는 images/ 폴더에 넣고 파일 이름만 적으면 돼요.
   - 프로젝트를 추가하려면 { ... }, 블록 하나를 통째로 복사해서 붙여넣고 내용을 바꾸세요.
   ===================================================================== */

const SITE = {
  name: "Ryn Hong",
  tag: "Communication Design, Parsons",
  hello: "Hello, I'm Ryn. A designer finding the fourth leaf between fashion, image and space.",
  highlight: "fourth leaf",          // hello 문장 안에서 초록색으로 보일 부분
  ticker: ["Communication Design", "Fashion Business", "Painting", "Sculpture", "Typography", "Collage", "New York", "Incheon"],

  aboutLead: "Second-year Communication Design student at Parsons, minoring in Fashion Business.",
  about: [
    "I grew up in Incheon, Korea, and now work in New York. My mother's interest in fashion shaped how I see: I design identities, images and spaces the way a collection is built, piece by piece around one idea.",
    "I'm looking for Summer 2027 internships in New York and Europe, in branding, editorial and fashion communication."
  ],
  facts: [
    ["Education", "Parsons School of Design, BFA Communication Design, expected 2029"],
    ["Minor", "Fashion Business"],
    ["Honors", "University Merit Scholar"],
    ["Certified", "Adobe Certified Professional, Visual Design, Photoshop, Illustrator"],
    ["Tools", "Photoshop, Illustrator, InDesign"],
    ["Languages", "English, Korean (both native / bilingual)"],
    ["Based", "New York"]
  ],

  // CV: 그룹마다 줄을 추가/삭제할 수 있어요.
  // 한 줄 = [기간, 역할, 회사/단체, 장소, 한 줄 설명]
  cv: [
    { group: "Experience", items: [
      ["Oct 2026 – Now", "Event Support Student Assistant", "Vera List Center for Art and Politics", "New York", "Part-time event support at The New School's center for art and politics."],
      ["Jul 2026 – Now", "Graphic Designer (Volunteer)", "United Korean Founders (UKF)", "New York", "Visual development and promotional design for KOOM Festival 2026."],
      ["Summers 2025, 2026", "Summer School Teaching Assistant", "Chadwick International School", "Incheon", "Supervised Pre-K to Grade 8 groups of 15–20. Rehired for 2026 and recognized as Outstanding Substitute Teacher."],
      ["Mar 2023 – Jun 2026", "On-Call Styling Production Assistant", "LUKE & JACO", "Seoul", "Worked between stylists, models and production teams on shoots with last-minute changes."],
      ["Jul 2024 – Mar 2025", "Social Media Manager", "4&6 Tanning", "Incheon", "Ran the studio's Instagram, Reels and blog. Monthly views grew from 3,000 to 12,000 and customers from 83 to 124."]
    ]},
    { group: "Exhibitions", items: [
      ["Mar 2024", "Exhibiting artist, brochure design", "IB DP Visual Arts Exhibition, Chadwick International Atrium", "Incheon", "Showed the Four Leaf series and designed the exhibition brochure."],
      ["Jul 2023", "Curator & Organizer", "Four Leaves Mini Exhibition", "", "Planned and ran a solo show of the Four Leaf series: venue, schedule, layout and visitor experience."],
      ["Jul 2023", "Exhibiting artist", "Boston University Summer Challenge, Group Exhibition", "Boston", "Final show of the photography and visual art program; portfolio project on identity, memory and visual narrative."]
    ]},
    { group: "Leadership", items: [
      ["Aug 2020 – Aug 2024", "Co-Leader", "Project 3, Design & Fundraising Club", "", "Led 8 members and built partnerships for initiatives supporting marginalized groups, including teen mothers."]
    ]},
    { group: "Education", items: [
      ["2025 – 2029", "BFA Communication Design, Minor in Fashion Business", "Parsons School of Design", "New York", "University Merit Scholar."],
      ["Jul 2023", "Summer Challenge, Photography & Visual Art", "Boston University", "Boston", "Two-week pre-college program: DSLR photography, composition, editing and critique."],
      ["Jul 2022", "Summer Immersion, Globalization: Challenges in Interaction", "Columbia University", "Online", "Seminars on cultural exchange and global communication; final presentation on cross-cultural communication in the digital age."],
      ["2014 – 2024", "High School Diploma", "Chadwick International School", "Incheon", ""]
    ]},
    { group: "Certifications", items: [
      ["Dec 2024", "Adobe Certified Professional in Visual Design", "Adobe", "", ""],
      ["Oct 2024", "Adobe Certified Professional in Graphic Design & Illustration Using Adobe Illustrator", "Adobe", "", ""],
      ["Sep 2024", "Adobe Certified Professional in Visual Design Using Adobe Photoshop", "Adobe", "", ""]
    ]}
  ],

  // 연락처: 없는 건 "" 로 비워두면 안 보여요
  email: "honga468@newschool.edu",
  instagram: "https://www.instagram.com/jhiynun/",
  linkedin: "https://www.linkedin.com/in/jin-hyun-ryn-hong-a5aa4a249/",
  resume: ""                         // 이력서 PDF를 폴더에 넣었으면 "resume.pdf"
};

const PROJECTS = [
  {
    id: "anastasia",
    title: "Anastasia",
    year: "2025",
    category: "Wood and light construction",
    role: "Concept, fabrication",
    course: "Space & Materiality, Parsons, Project 2",
    cover: "an-IMG-4398-2.jpg",
    link: "",
    links: [["Full process on my school portfolio", "https://portfolio.newschool.edu/honga468/2025/11/17/space-materiality-project-2-11-12-2025/"]],
    intro: [
      "An 8 × 8 × 8 inch wood and light structure based on Anastasia, the city of desire in Calvino's Invisible Cities. Anastasia felt like my experience of ambition in Seoul and New York: enchanting, and also consuming.",
      "Vertical wood fins stand for the repeated pressure of desire, a hollow center holds the light, paper diffuses it from above, and a round viewing hole gives only glimpses inside. Light spills out through the gaps onto the floor grid.",
      "No glue was allowed and the laser lab was overbooked, so I redesigned the joints and cut every piece by hand on the band saw, drill press and jigsaw. The final form came out of working directly with the wood."
    ],
    works: [
      ["an-IMG-4398-2.jpg", "Final piece, lit", "Wood, LED, paper · 8 × 8 × 8 in", ""],
      ["an-IMG-4405-2.jpg", "Light through the fins", "", ""],
      ["an-IMG-4403-2.jpg", "Top view", "", ""],
      ["an-IMG-4400-2.jpg", "Light spilling onto the floor", "", ""],
      ["an-IMG-4399-2.jpg", "Side view", "", ""],
      ["an-IMG-4410-2.jpg", "Final piece", "", ""],
      ["an-13B11016-D940-4E81-8.jpg", "Critique", "", ""],
      ["an-1B5E35F1-162F-44FC-9.jpg", "In the studio", "", ""],
      ["an-IMG-2549-1.jpg", "Anastasia collage", "Collage", "The character 人 repeats and dissolves: individuality worn down by the pressure to shine."],
      ["an-IMG-2550-1.jpg", "Valdrada collage", "Collage", "Fashion portraits with star-shaped cutouts: self-presentation against what is hidden."],
      ["an-IMG-2548-1.jpg", "Zaira collage", "Collage", "Silhouettes over text and architecture, the ghosts of places I left."],
      ["an-Screenshot-2026-10-1.jpg", "Sketches and orthographic plans", "", "Fin spacing, elevations, LED placement and joint studies.", "contain"]
    ]
  },

  {
    id: "memory-palace",
    title: "Memory Palace",
    year: "2026",
    category: "Digital illustration",
    role: "Drawing, color, typography",
    course: "Drawing/Imaging, Parsons",
    cover: "mp-cover.jpg",
    link: "",
    links: [["Full process on my school portfolio", "https://portfolio.newschool.edu/honga468/2026/05/10/drawing-imaging-memory-palace/"]],
    intro: [
      "I drew the quiet zone of the University Center library in two-point perspective, then turned it into a memory palace of a darkroom where I once spent hours developing film and came out with a completely blank roll.",
      "Complementary red and green build tension, and repeated photographs, window frames and perspective lines hold the room together. After critique I fixed the hierarchy and type, and added shadowy hands reaching in: the feeling that something was always behind me in that room."
    ],
    works: [
      ["mp-final.jpg", "Being Analog, final", "Digital illustration", "1 Developer / stop bath / fixer, 2 Scattered pictures, 3 Dark room, 4 ??????", "contain"]
    ]
  },

  {
    id: "frustration",
    title: "Frustration",
    year: "2026",
    category: "Mixed-media installation",
    role: "Concept, making",
    course: "Visual Culture, Parsons, Bridge 4 final",
    cover: "",
    link: "",
    links: [["Full process on my school portfolio", "https://portfolio.newschool.edu/honga468/2026/05/21/visual-culture-bridge-4-final/"]],
    intro: [
      "A mirror, black fabric, duct tape and my own Spirit Airlines ticket for a flight I never got to take. A ticket promises departure; this one became proof of being stuck because of a system outside my control.",
      "The fabric covers the mirror like a funeral cloth and falls like spreading oil. Viewers see themselves in the broken reflection, next to the ticket. A companion piece, Evidence of Almost, is a memory folder of unfinished objects: a ticket, fabric, letter paper and laser-cut scraps."
    ],
    works: []
  },

  {
    id: "wearable-memory",
    title: "Wearable Memory",
    year: "2025",
    category: "Wearable from found materials",
    role: "Team of 3, with Iris and Khyatee",
    course: "Space & Materiality, Parsons, Project 3",
    cover: "wm-cover.jpg",
    link: "",
    links: [["Full process on my school portfolio", "https://portfolio.newschool.edu/honga468/2025/12/11/space-materiality-project-3-12-10-2025/"]],
    intro: [
      "A wearable about how the body stores memory, made only from free, found materials. I went dumpster diving for the first time to collect paper, and its creases and old marks became part of the piece.",
      "Each of us explored materials alone first. Mine was folded, repeated paper forms, memory as something quiet and accumulated. We then built the wearable together through paper prototypes, designing directly on the body."
    ],
    works: [
      ["wm-IMG-5192.jpg", "Final wearable", "Found materials", ""],
      ["wm-IMG-5184.jpg", "Final wearable, detail", "", ""],
      ["wm-IMG-5186.jpg", "Back view", "", ""],
      ["wm-IMG-5190.jpg", "Side view", "", ""],
      ["wm-IMG-5180.jpg", "On the body", "", ""],
      ["wm-IMG-5196.jpg", "Detail", "", ""],
      ["wm-IMG-5197.jpg", "Detail", "", ""],
      ["wm-IMG-5194-1.jpg", "Detail", "", ""],
      ["wm-IMG-4599.jpg", "Prototype on the arm", "", ""],
      ["wm-IMG-4615.jpg", "Material exploration", "", ""]
    ]
  },

  {
    id: "wire-glasses",
    title: "The Body and an Object",
    year: "2025",
    category: "Wire sculpture",
    role: "Drawing, wire work",
    course: "Space & Materiality, Parsons, Project 1",
    cover: "wg-IMG-2057.jpg",
    link: "",
    links: [["Full process on my school portfolio", "https://portfolio.newschool.edu/honga468/2025/10/14/space-materiality-project-1-10-14-2025/"]],
    intro: [
      "Three objects I use to present and care for myself: heels (posture), glasses (perception) and a mist bottle (touch). I moved from observation sketches to orthographic and analysis drawings, then to wire.",
      "The final wire glasses treat the object as an extension of the body. A single continuous line defines the space, and every twist and bend keeps a record of decision and hesitation."
    ],
    works: [
      ["wg-IMG-2057.jpg", "Final wire glasses", "Wire", ""],
      ["wg-IMG-2058.jpg", "Final wire glasses", "", ""],
      ["wg-IMG-2059.jpg", "Final wire glasses", "", ""],
      ["wg-IMG-2063.jpg", "Worn", "", ""],
      ["wg-IMG-2062-1.jpg", "Worn", "", ""],
      ["wg-IMG-1680.jpg", "Wire study", "", ""],
      ["wg-IMG-1685.jpg", "Wire study next to the original", "", ""],
      ["wg-IMG-1686.jpg", "Wire study", "", ""],
      ["wg-Screenshot-2026-10-1.jpg", "Sketches and drawings", "", "Observation sketches, orthographic and analysis drawings of the heels, glasses and mist bottle.", "contain"]
    ]
  },

  {
    id: "biopolymer-wallet",
    title: "Biopolymer Wallet",
    year: "2025",
    category: "Material experiment, product",
    role: "Lab trials, making",
    course: "Sustainable Systems, Parsons",
    cover: "bp-IMG-1328.jpg",
    link: "",
    links: [["Full process on my school portfolio", "https://portfolio.newschool.edu/honga468/2025/10/14/sustainable-systems-biopolymers-design/"]],
    intro: [
      "I made bioplastic sheets from citric acid, glycerol and starch: two trials in the lab with Alyssa, then more at home without a stir bar or thermometer. Adding starch too early made lumps; slowing down made the sheet smooth and flexible.",
      "Inspired by Freitag's upcycling, I turned the sheet into a small black wallet, reinforced with paper from a shopping bag and stitched by hand."
    ],
    works: [
      ["bp-IMG-2575.jpg", "Final wallet", "Biopolymer, shopping-bag paper, hand stitching", ""],
      ["bp-IMG-2576.jpg", "Final wallet, side", "", ""],
      ["bp-IMG-1328.jpg", "Lab setup", "", ""],
      ["bp-IMG-1588.jpg", "Pouring trials", "", ""],
      ["bp-IMG-1589.jpg", "Trial sheet", "", ""],
      ["bp-IMG-1603.jpg", "Dried sheet", "", ""],
      ["bp-IMG-1604.jpg", "Trial at home", "", ""],
      ["bp-IMG-0483.jpg", "Petri dish, phone swab", "", "Watching what transfers from my phone through touch."],
      ["bp-IMG-2216.jpg", "Materials", "", ""]
    ]
  },

  {
    id: "time",
    title: "Time",
    year: "2025",
    category: "Motion, video, logo",
    role: "Editing, animation",
    course: "Time, Parsons, Projects 4–7",
    cover: "",
    link: "",
    links: [
      ["Project 4, Metric Montage", "https://www.youtube.com/watch?v=v8kK2aasXkU"],
      ["Project 5, Photo Roman", "https://www.youtube.com/watch?v=diou1R2SCSU"],
      ["Project 6, Transformation", "https://www.youtube.com/watch?v=9wqfi4L6TPw"],
      ["All four projects on my school portfolio", "https://portfolio.newschool.edu/honga468/2025/12/09/time-project-4-5-6-7-12-09-2025/"]
    ],
    intro: [
      "Four projects that treat time as a material that can be stretched, layered and broken apart: a metric montage, a photo roman, a transformation piece and a gratitude logo with animation and patterns.",
      "Instead of recording events in order, I tried to show how time feels."
    ],
    works: []
  },

  {
    id: "four-leaf",
    title: "Four Leaf",
    year: "2023 – 24",
    category: "Series of 25 works",
    role: "Painting, drawing, sculpture",
    course: "IB Diploma Visual Arts, Chadwick International",
    cover: "fishing-for-luck.jpg",
    link: "",
    intro: [
      "A body of work about self-discovery. The three-leaf clover stands for hope, renewal and perseverance; the series looks for the fourth leaf, the shape of my own aspirations, and finds it in the people and places around me.",
      "The series was shown twice: in my own Four Leaves exhibition in July 2023, and at the IB DP Visual Arts Exhibition in March 2024."
    ],
    works: [
      // [이미지 파일, 제목, 재료 · 크기, 설명]   맨 끝에 "contain" 을 붙이면 잘리지 않고 전체가 보여요
      ["the-norm.jpg", "The Norm", "Spray paint, acrylic · 102 × 76 cm", "Chaos presented as the true norm. The piece pushes back on a standardized idea of what counts as normal."],
      ["what-is-in-a-name.jpg", "What Is in a Name?", "Marker · 39 × 39 cm", "Typography and pattern built from my name in Hangul. My name doesn't define me; I define my name."],
      ["eye-for-fashion.jpg", "An Eye for Fashion", "Watercolor · 54 × 39 cm", "A visual record of the collections that shaped my eye, drawn from my mother's love of fashion."],
      ["fishing-for-luck.jpg", "Fishing for Luck, Part I", "Oil · 40 × 50 cm", "A rabbit, my stand-in, moves through a dreamlike world. In Asian folklore the rabbit on the moon grants true wishes."],
      ["fishing-for-luck-2.jpg", "Fishing for Luck, Part II", "Mixed media relief", "The same search rebuilt in layered, cut and painted forms."],
      ["down-the-rabbits-hole.jpg", "Down the Rabbit's Hole", "Pencil · 54 × 39 cm", "Following the rabbit inward, into a quiet, crowded room of thoughts."],
      ["weathering-the-storm.jpg", "Weathering the Storm", "Pencil · 54 × 39 cm", "Bound by a long ribbon and surrounded by whirlpools, the figure holds on through the hard stages of growing up."],
      ["who-we-are.jpg", "Who We Are", "Acrylic · 76 × 61 cm", "A response to society's fixation on body image. We are free to be who we are."],
      ["judge-me-not.jpg", "Judge Me Not", "Pencil · 39 × 54 cm", "On the insecurities that come from a single ideal of beauty, and the choice to stop conforming."],
      ["my-life-on-a-clover.jpg", "My Life… if It Were on a Clover", "Oil · 40 × 50 cm", "Jewel-like bubbles stand for my name, which means treasure."],
      ["only-you.jpg", "Only You", "Acrylic · 53 × 73 cm", "Every clover is a different shape, like every person's picture of happiness."],
      ["run-chicken-run.jpg", "Run Chicken Run!", "Pastel · 76 × 56 cm", "Me as a chicken, my Korean zodiac sign, running down a bright yellow road toward what's next."],
      ["the-mandala.jpg", "The Mandala", "Marker · 39 × 39 cm", "A mandala made as a wish for luck, built around four personal symbols."],
      ["my-clover.jpg", "My Clover", "Oil · 40 × 50 cm", "A self-portrait holding a four-leaf clover, about identity and natural beauty."],
      ["quantomania.jpg", "Quantomania", "Poster color, marker · 40 × 50 cm", "The clover at the cellular level: a warped world where time and memory shape each other."],
      ["wilderness-of-fortune.jpg", "In the Wilderness of Fortune", "Acrylic · 53 × 73 cm", "Perseverance and the efforts of others, growing into happiness all around me."],
      ["dont-look-far.jpg", "Don't Look Far, Part I", "Oil · 73 × 50 cm", "Clovers painted as stars: the people who light the way are the real luck."],
      ["dont-look-far-2.jpg", "Don't Look Far, Part II", "Yarn, mixed media", "The same starry clovers, knitted and hung so they can be touched."],
      ["my-interpretation.jpg", "My Interpretation, Part I", "Acrylic · 87 × 87 cm", "Up close it is urgent orange wanting. From afar, I was part of the clover all along.", "contain"],
      ["my-interpretation-2.jpg", "My Interpretation, Part II", "Pencil, marker", "Hands reaching across op-art patterns: the same wanting, seen as pattern."],
      ["all-men-are-born-equal.jpg", "All Men Are Born Equal", "Collage · 27 × 39 cm", "A veil hides the model's identity, asking viewers to look past appearance and ethnicity.", "contain"],
      ["out-of-reach.jpg", "Out of Reach", "Acrylic, 3D beads · 53 × 73 cm, 10 × 45 cm", "The clover as a distant planet, paired with a beaded mobile: the desire for things just beyond reach."],
      ["safe-haven.jpg", "Safe Haven", "3D filament, putty, acrylic", "A clover throne. The end of the search: a sanctuary I built for myself.", "contain"],
      ["melting-pot.jpg", "Melting Pot", "Doll, plastic, acrylic, styrofoam · 62 × 30 × 23 cm", "A figure layered in many colors and textures, celebrating diversity instead of erasing it.", "contain"],
      ["my-life.jpg", "My Life", "Wood, branch, wire, yarn, foam board · 80 × 60 × 110 cm", "A maze of mixed materials, each one an experience that built who I am.", "contain"],
      ["guilty-pleasures.jpg", "Guilty Pleasures", "", ""]
    ]
  },

  {
    id: "four-leaves-exhibition",
    title: "Four Leaves Exhibition",
    year: "2023",
    category: "Solo exhibition",
    role: "Artist, curator & organizer",
    course: "Independent, July 2023",
    cover: "fl-IMG_5049.jpg",
    link: "",
    intro: [
      "My first solo show, built around the Four Leaf series. I planned and ran every part of it: the venue, the schedule, the hanging plan and the way visitors moved through the room.",
      "Paintings, drawings and the sculpture My Life shared one gallery, with a front desk where I met every visitor."
    ],
    works: [
      ["fl-IMG_5049.jpg", "Installation view", "", ""],
      ["fl-IMG_5046.jpg", "Installation view", "", ""],
      ["fl-IMG_5044.jpg", "My Life, in the gallery", "", ""],
      ["fl-IMG_5047.jpg", "Drawing wall", "", ""],
      ["fl-IMG_5048.jpg", "Drawing wall", "", ""],
      ["fl-IMG_5051.jpg", "Installation view", "", ""],
      ["fl-IMG_5053.jpg", "Installation view", "", ""],
      ["fl-IMG_5043.jpg", "Installation view", "", ""],
      ["fl-IMG_5088.jpg", "Exhibition signage", "", ""],
      ["fl-IMG_4967.jpg", "Opening", "", ""],
      ["fl-IMG_4968.jpg", "Opening", "", ""],
      ["fl-IMG_4975.jpg", "Opening night", "", ""],
      ["fl-IMG_5073.jpg", "At the front desk", "", ""],
      ["fl-IMG_6519.jpg", "Opening night", "", ""]
    ]
  },

  {
    id: "ib-visual-arts-exhibition",
    title: "IB Visual Arts Exhibition",
    year: "2024",
    category: "Exhibition & brochure",
    role: "Artist, brochure design",
    course: "IB DP Visual Arts Exhibition, Chadwick International Atrium, Mar 8–15, 2024",
    cover: "ib-brochure-cover.jpg",
    link: "",
    intro: [
      "The final exhibition of my IB Diploma Visual Arts course, where Four Leaf was shown in the school atrium for a week.",
      "I designed the folded brochure for the show: puffy 3D clovers, sparkles and soft pink forms, with the artist statement inside and every work captioned by title, year, size and medium."
    ],
    works: [
      ["ib-brochure-1.jpg", "Brochure, outside", "Folded brochure · Illustrator", "Cover, artist statement and back panel.", "contain"],
      ["ib-brochure-2.jpg", "Brochure, inside", "Folded brochure · Illustrator", "Inside spread with the works and their captions.", "contain"],
      ["ib-IMG_0190.jpg", "Installation view", "", ""],
      ["ib-IMG_0212.jpg", "At the exhibition", "", ""],
      ["ib-IMG_0216.jpg", "Opening", "", ""]
    ]
  },

  {
    id: "bu-summer-exhibition",
    title: "BU Summer Exhibition",
    year: "2023",
    category: "Studio program, group exhibition",
    role: "Student artist",
    course: "Boston University Summer Challenge, Photography & Visual Art",
    cover: "bu-IMG_4659.jpg",
    link: "",
    intro: [
      "A two-week pre-college program in photography and visual art at Boston University: DSLR technique, composition and editing in Adobe Creative Suite, plus drawing, painting and cut-paper studies shaped by group critiques.",
      "The program closed with a group exhibition of everyone's work. My final project explored identity, memory and visual narrative."
    ],
    works: [
      ["bu-IMG_4659.jpg", "Closing exhibition", "", ""],
      ["bu-IMG_4660.jpg", "Closing exhibition", "", ""],
      ["bu-IMG_4652.jpg", "Drawing wall", "", ""],
      ["bu-IMG_4653.jpg", "Drawing studies", "", ""],
      ["bu-IMG_4639.jpg", "Color studies", "", ""],
      ["bu-IMG_4651.jpg", "Cut-paper studies", "", ""],
      ["bu-IMG_4674.jpg", "Cut-paper studies", "", ""],
      ["bu-IMG_4675.jpg", "Cut-paper studies", "", ""],
      ["bu-IMG_4495.jpg", "Still life setup", "", ""],
      ["bu-IMG_4500.jpg", "Still life study", "", ""],
      ["bu-IMG_4685.jpg", "Talking through the work", "", ""],
      ["bu-IMG_4668.jpg", "Closing exhibition", "", ""]
    ]
  }
];
