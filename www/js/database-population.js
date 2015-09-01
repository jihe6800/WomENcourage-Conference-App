odb.bulkDocs([{
    _id: 'info',
    sections: [{
        title: "Venue",
        content: "The conference will take place at Uppsala University, founded in 1477, making it the oldest university in Sweden. Uppsala is the fourth largest city in Sweden, with a lively atmosphere and rich student life, as the university's 40,000 students comprise fully a fifth of the city's population. The primary venue will be the historic Main University Building (Universitetshuset), dating from the 1880s. It is located in central Uppsala, near the cathedral, and in easy walking distance to many hotels and restaurants."
    }, {
        title: "News",
        content: "Updates and news will be posted at the womENcourage Twitter @acmwomencourage"
    }, {
        title: "Smoking",
        content: "Smoking is prohibited in any public indoor establishment. This includes restaurants and bars as well as the conference venue."
    }, {
        title: "Uppsala",
        content: "Uppsala is Sweden's fourth largest city with a population of 200 000 inhabitants. Unique cultural treasures and an exciting history are to be found in the city of knowledge and inspiration. Uppsala has retained its small-town charm while offering a big city's selection of shops, restaurants and other entertainment. Uppsala has many historical attractions. Among the most famous are: Uppsala cathedral, the largest cathedral in Scandinavia. One of Sweden's oldest botanical gardens A unique anatomical theatre built in the 1600's The Linnaeus Garden Uppsala Castle from the mid-1500's. However, Uppsala is not only known for its traditions. Today Uppsala is a dynamic industrial and commercial city where knowledge, ideas and entrepreneurship are at the centre. The city's geographical location with only 20 minutes to Stockholm-Arlanda international airport and 40 minutes to Stockholm has made Uppsala an attractive place for meetings. "
    }, {
        title: "Currency",
        content: "The Swedish monetary unit is the Swedish krona (SEK), divided into 100 öre. In August 2014: Euro 1=SEK 9, USD 1=SEK 7, GBP 1=SEK 11,5. Major credit cards are accepted almost everywhere. There are several currency exchange offices and cash dispensers at Stockholm Arlanda International Airport and in Uppsala."
    }]
}, {
    _id: 'emergency',
    sections:  [{
        title: 'Emergency Phone Numbers',
        content: 'If you need to call an ambulance, the police, or the fire brigade, use the central emergency number 112 from any fixed line or mobile phone. For non-emergency police calls, use 114 14.'
    }, {title: 'Medical Information',
        content: 'For 24 hour medical advice, call 1177 or visit www.1177.se. For non-emergency medical issues there is a drop-in clinic: Närakuten, Dragarbrunnsgatan 70, daily 07:00-23:00 (expect at least a 2-hour wait to see a doctor). Pharmacies: For opening hours and locations check Apoteksinfo Apoteksamariten (Kålsängsgränd 10 C, across from the Närakuten clinic) has extended hours (daily 08:00-22:00) 24-hour pharmacy: Apoteket C W Scheele, Klarabergsgatan 64, Stockholm Many non-prescription drugs (e.g., aspirin, paracetamol) are available over the counter at most grocery stores'
    }, {title: 'Conference Staff',
        content: 'Contact the conference staff through the phone number: TBA'
    }]
}, {
    _id: 'feedback',
    sections: [{
        title: 'About the App',
        content: 'This app was developed by three IT students at Uppsala University.'
    }, {
        title: 'Device Support',
        content: 'The app is supported on most devices with a modern web browser.'
    }, {
        title: 'Offline Capabilities',
        content: 'The app is fully functional even if you lose your Internet connection. As long as you do not close or refresh your web browser window when without network access, everything should still be working.'
    }, {
        title: 'My Schedule',
        content: 'Your personalized schedule is automatically saved locally in your web browser, so you can close or refresh the web page and still have your schedule available the next time you visit the website.'
    }, {
        title: 'Feedback',
        content: 'Is some feature missing or not quite working in the way you would expect? We gladly appreciate all the feedback you can give us!'
    }]
}]);

db.bulkDocs([{
    _id: 'sssn0001',
    title: "Papers Session 1: Computing to Assist Disabled Individuals or Older Adults",
    talks: ['talk0001', 'talk0002', 'talk0003']
}, {
    _id: 'sssn0002',
    title: "Papers Session 2: Computation and Graphics",
    talks: ['talk0004', 'talk0005', 'talk0006']
}, {
    _id: 'spkr001',
    firstName: "Camille",
    lastName: "Jeunet",
    affiliation: '',
    papers: ['papr0001']
}, {
    _id: 'spkr002',
    firstName: "Bernard",
    lastName: "N'Kaoua",
    affiliation: '',
    papers: ['papr0001']
}, {
    _id: 'spkr003',
    firstName: "Martin",
    lastName: "Hachet",
    affiliation: '',
    papers: ['papr0001']
}, {
    _id: 'spkr004',
    firstName: "Fabien",
    lastName: "Lotte",
    papers: ['papr0001']
}, {
    _id: 'spkr005',
    firstName: "Lucile",
    lastName: "Dupuy",
    affiliation: '',
    papers: ['papr0002']
}, {
    _id: 'spkr006',
    firstName: "Hélène",
    lastName: "Sauzéon ",
    affiliation: '',
    papers: ['papr0002']
}, {
    _id: 'spkr007',
    firstName: "Charles",
    lastName: "Consel",
    papers: ['papr0002']
}, {
    _id: 'spkr008',
    firstName: "Gillian",
    lastName: "Dowds",
    affiliation: '',
    papers: ['papr0003']
}, {
    _id: 'spkr009',
    firstName: "Maud",
    lastName: "Gibbons",
    affiliation: '',
    papers: ['papr0004']
}, {
    _id: 'spkr010',
    firstName: "Colm",
    lastName: "O'Riordan",
    affiliation: '',
    papers: ['papr0004']
}, {
    _id: 'spkr011',
    firstName: "Josephine",
    lastName: "Griffith",
    affiliation: '',
    papers: ['papr0004']
}, {
    _id: 'spkr012',
    firstName: "Martina",
    lastName: "Curran",
    affiliation: '',
    papers: ['papr0005']
}, {
    _id: 'spkr013',
    firstName: "Enda",
    lastName: "Howley",
    affiliation: '',
    papers: ['papr0005']
}, {
    _id: 'spkr014',
    firstName: "Jim",
    lastName: "Duggan",
    affiliation: '',
    papers: ['papr0005']
}, {
    _id: 'spkr015',
    firstName: "Camille",
    lastName: "Schreck",
    affiliation: '',
    papers: ['papr0006']
}, {
    _id: 'spkr016',
    firstName: "Damien",
    lastName: "Rohmer",
    affiliation: '',
    papers: ['papr0006']
}, {
    _id: 'spkr017',
    firstName: "Stefanie",
    lastName: "Hahmann",
    affiliation: '',
    papers: ['papr0006']
}, {
    _id: 'spkr018',
    firstName: "Marie-Paule",
    lastName: "Cani",
    affiliation: 'Grenoble University (Grenoble Institute of Technology & Inria)',
    papers: ['papr0006']
}, {
    _id: 'spkr019',
    firstName: "Åsa",
    lastName: "Cajander",
    affiliation: 'Uppsala University',
    papers: ''
}, {
    _id: 'spkr020',
    firstName: 'Carla',
    lastName: 'Griggio',
    affilliation: '',
    papers: ''
}, {
    _id: 'spkr021',
    firstName: 'Mario',
    lastName: 'Romero',
    affiliation: '',
    papers: ''
}, {
    _id: 'spkr022',
    firstName: 'Anna Maria',
    lastName: 'Feit',
    affiliation: '',
    papers: ''
}, {
    _id: 'spkr023',
    firstName: 'Srinath',
    lastName: 'Sridhar',
    affiliation: '',
    papers: ''
}, {
    _id: 'spkr024',
    firstName: 'Christian',
    lastName: 'Theobalt',
    affiliation: '',
    papers: ''
}, {
    _id: 'spkr025',
    firstName: 'Antti',
    lastName: 'Oulasvirta',
    affiliation: '',
    papers: ''
}, {
    _id: 'spkr026',
    firstName: 'Particia',
    lastName: 'Pons',
    affiliation: '',
    papers: ''
}, {
    _id: 'spkr027',
    firstName: 'Javier',
    lastName: 'Jaen',
    affiliation: '',
    papers: ''
}, {
    _id: 'spkr028',
    firstName: 'Alejandro',
    lastName: 'Catala',
    affiliation: '',
    papers: ''
}, {
    _id: 'spkr029',
    firstName: 'Samantha',
    lastName: 'Breslin',
    affiliation: '',
    papers: ''
}, {
    _id: 'spkr030',
    firstName: 'Bimlesh',
    lastName: 'Wadhwa',
    affiliation: '',
    papers: ''
}, {
    _id: 'spkr031',
    firstName: 'Noric',
    lastName: 'Couderc',
    affiliation: '',
    papers: ''
}, {
    _id: 'spkr032',
    firstName: 'Elin',
    lastName: 'Parsjö',
    affiliation: '',
    papers: ''
}, {
    _id: 'spkr033',
    firstName: 'Nadia',
    lastName: 'Röning',
    affiliation: '',
    papers: ''
}, {
    _id: 'spkr034',
    firstName: 'Karin',
    lastName: 'Siebenhandl',
    affiliation: '',
    papers: ''
}, {
    _id: 'spkr035',
    firstName: 'Eva',
    lastName: 'Mayr',
    affiliation: '',
    papers: ''
}, {
    _id: 'talk0001',
    title: 'Predicting Mental-Imagery Based Brain-Computer Interface Performance from Psychometric Questionnaires',
    location: 'Room 103',
    speakers: ['spkr001', 'spkr002', 'spkr003', 'spkr004'],
    papers: ['papr0001'],
    startDate: new Date(2015, 8, 25, 11, 0),
    endDate: new Date(2015, 8, 25, 11, 20)
}, {
    _id: 'talk0002',
    title: 'Perceived Needs for Assistive Technologies in older adults and their caregivers',
    location: 'Room 103',
    speakers: ['spkr005', 'spkr006', 'spkr007'],
    papers: ['papr0002'],
    startDate: new Date(2015, 8, 25, 11, 20),
    endDate: new Date(2015, 8, 25, 11, 40)
}, {
    _id: 'talk0003',
    title: 'Window to the Outside World: Bringing the outside in to housebound older adults in remote and rural areas',
    location: 'Room 103',
    speakers: ['spkr008'],
    papers: ['papr0003'],
    startDate: new Date(2015, 8, 25, 11, 40),
    endDate: new Date(2015, 8, 25, 12, 0)
}, {
    _id: 'talk0004',
    title: 'Evolution of Coordinated Behaviour in Artificial Life Simulations',
    location: 'Room 46',
    speakers: ['spkr009', 'spkr010', 'spkr011'],
    papers: ['papr0004'],
    startDate: new Date(2015, 8, 25, 11, 0),
    endDate: new Date(2015, 8, 25, 11, 20)
}, {
    _id: 'talk0005',
    title: 'An R-Based Framework for Implementing Large-Scale Spatial Models of Infectious Diseases',
    location: 'Room 46',
    speakers: ['spkr012', 'spkr013', 'spkr014'],
    papers: ['papr0005'],
    startDate: new Date(2015, 8, 25, 11, 20),
    endDate: new Date(2015, 8, 25, 11, 40)
}, {
    _id: 'talk0006',
    title: 'Interactively animating crumpling paper',
    location: 'Room 46',
    speakers: ['spkr015', 'spkr016', 'spkr017', 'spkr018'],
    papers: ['papr0006'],
    startDate: new Date(2015, 8, 25, 11, 40),
    endDate: new Date(2015, 8, 25, 12, 0)
}, {
    _id: 'papr0001',
    title: 'Predicting Mental-Imagery Based Brain-Computer Interface Performance from Psychometric Questionnaires',
    authors: ["spkr001", "spkr002", 'spkr003', 'spkr004']
}, {
    _id: 'papr0002',
    title: 'Perceived Needs for Assistive Technologies in older adults and their caregivers',
    authors: ['spkr005', 'spkr006', 'spkr007']
}, {
    _id: 'papr0003',
    title: 'Predicting Mental-Imagery Based Brain-Computer Interface Performance from Psychometric Questionnaires',
    authors: ['spkr008']
}, {
    _id: 'papr0004',
    title: 'Evolution of Coordinated Behaviour in Artificial Life Simulations',
    authors: ['spkr009', "spkr010", 'spkr011']
}, {
    _id: 'papr0005',
    title: 'An R-Based Framework for Implementing Large-Scale Spatial Models of Infectious Diseases',
    authors: ['spkr012', 'spkr013', 'spkr014']
}, {
    _id: 'papr0006',
    title: 'Interactively animating crumpling paper',
    authors: ['spkr015', 'spkr016', 'spkr017', 'spkr018']
}, {
    _id: 'papr0007',
    title: 'A real-time dance visualization framework for the design of mappings that favor user appropriation',
    authors: ['spkr020', 'spkr021']
}, {
    _id: 'papr0008',
    title: 'Text is in the Air... Investigating Multi-Finger Gestures for Mid-Air Text Entry',
    authors: ['spkr022', 'spkr023', 'spkr024', 'spkr025']
}, {
    _id: 'papr0009',
    title: 'Beyond the Limits of Digital Interaction: Should Animals Play with Interactive Environments?',
    authors: ['spkr026', 'spkr027', 'spkr028']
}, {
    _id: 'papr0010',
    title: 'EnGendering Design: Implementing Interdisciplinarity',
    authors: ['spkr029', 'spkr030']
}, {
    _id: 'papr0011',
    title: 'Gender Division in Computer Science: Conceptions and Statistics of Uppsala University',
    authors: ['spkr031', 'spkr032', 'spkr033']
}, {
    _id: 'papr0012',
    title: 'GenderTime: Evaluation of Measures for Women Encouragement in Science Organisations',
    authors: ['spkr034', 'spkr035']
}, {
    _id: 'note001',
    title: 'Keynote: Title to come',
    location: 'Main aula',
    description: 'No description.',
    speakers: [],
    startDate: new Date(2015, 8, 25, 9, 30),
    endDate: new Date(2015, 8, 25, 10, 30)
}, {
    _id: 'note002',
    title: 'Keynote: TBA',
    location: 'Main aula',
    description: 'No description.',
    speakers: ['spkr019'],
    startDate: new Date(2015, 8, 26, 9, 30),
    endDate: new Date(2015, 8, 26, 10, 30)
}, {
    _id: 'note003',
    title: 'Keynote: Towards Expressive 3D Modelling: New challenges in Computer Graphics',
    location: 'Main Aula',
    description: 'Despite our great expressive skills, we humans lack an easy way of conveying the 3D shapes we imagine, even more so for dynamic shapes that change over time. Over centuries we relied on drawing and sculpture to convey shapes. However, these tools require significant expertise and time investment, especially when one aims to describe complex or dynamic shapes. With the advent of virtual environments one would expect digital modeling to replace these traditional tools. Unfortunately, conventional techniques in the area have failed, since even trained computer artists still create with traditional media and only use the computer to reproduce already designed content.',
    speakers: ['spkr018'],
    startDate: new Date(2015, 8, 26, 16, 0),
    endDate: new Date(2015, 8, 26, 17, 0)
}, {
    _id: 'cmmn001',
    title: 'Poster session',
    location: 'Norrlands Nation',
    description: 'Please see the "Posters" page.',
    startDate: new Date(2015, 8, 24, 16, 15),
    endDate: new Date(2015, 8, 24, 20, 0),
    speakers: []
}, {
    _id: 'cmmn002',
    title: 'Registration',
    location: 'Norrlands Nation',
    description: 'Registration.',
    startDate: new Date(2015, 8, 24, 16, 15),
    endDate: new Date(2015, 8, 24, 20, 0),
    speakers: []
}, {
    _id: 'cmmn003',
    title: 'Career fair',
    location: 'Norrlands Nation',
    description: 'Please see the "Supporters" page.',
    startDate: new Date(2015, 8, 24, 16, 15),
    endDate: new Date(2015, 8, 24, 20, 0),
    speakers: []
}, {
    _id: 'cmmn004',
    title: 'Registration',
    location: 'Conference Venue (Main University building)',
    description: 'Please register to the conference.',
    startDate: new Date(2015, 8, 25, 8, 30),
    endDate: new Date(2015, 8, 25, 9, 15),
    speakers: []
}, {
    _id: 'cmmn005',
    title: 'Welcome',
    location: 'Main aula',
    description: 'Coffee break.',
    startDate: new Date(2015, 8, 25, 9, 15),
    endDate: new Date(2015, 8, 25, 9, 30),
    speakers: []
}, {
    _id: 'cmmn006',
    title: 'Coffee break',
    location: 'Hallway',
    description: 'Please have a cup of coffee.',
    startDate: new Date(2015, 8, 25, 10, 30),
    endDate: new Date(2015, 8, 25, 11, 0),
    speakers: []
}, {
    _id: 'cmmn007',
    title: 'Lunch',
    location: '',
    description: "Please don't forget to eat lunch.",
    startDate: new Date(2015, 8, 25, 12, 0),
    endDate: new Date(2015, 8, 25, 13, 30),
    speakers: []
}, {
    _id: 'cmmn008',
    title: 'Coffee break',
    location: 'Hallway',
    description: 'Please have a cup of coffee again.',
    startDate: new Date(2015, 8, 25, 14, 30),
    endDate: new Date(2015, 8, 25, 15, 0),
    speakers: []
}, {
    _id: 'cmmn009',
    title: 'Registration',
    location: 'Conference Venue (Main University building)',
    description: 'Registration.',
    startDate: new Date(2015, 8, 26, 8, 30),
    endDate: new Date(2015, 8, 26, 9, 15),
    speakers: []
}, {
    _id: 'cmmn010',
    title: 'Coffee break',
    location: 'Hallway',
    description: 'Coffee break.',
    startDate: new Date(2015, 8, 26, 10, 30),
    endDate: new Date(2015, 8, 26, 11, 0),
    speakers: []
}, {
    _id: 'cmmn011',
    title: 'Lunch',
    location: '',
    description: 'Lunch.',
    startDate: new Date(2015, 8, 26, 12, 0),
    endDate: new Date(2015, 8, 26, 13, 30),
    speakers: []
}, {
    _id: 'cmmn012',
    title: 'Coffee break',
    location: 'Hallway',
    description: 'Coffee break.',
    startDate: new Date(2015, 8, 26, 14, 30),
    endDate: new Date(2015, 8, 26, 15, 0),
    speakers: []
}, {
    _id: 'cmmn013',
    title: 'Closing',
    location: 'Main aula',
    description: 'Coffee break.',
    startDate: new Date(2015, 8, 26, 17, 0),
    endDate: new Date(2015, 8, 26, 17, 15),
    speakers: []
}, {
    _id: 'wksp001',
    title: 'Workshop 1: Making your ideas into reality',
    location: 'Room 12',
    description: ['This workshop is designed to inspire students by introducing them to the basics of creating something new. The students will be introduced to programming, basic electronics, circuits and how to enable/disable LEDS programmatically. The students will be hands on to learn the basics of a Galileo computer board and the steps for programming the board using Arduino and ArduBlock. The students work in teams of 2 to execute the hands on exercises for the workshop. Students aged 9 to 13 are ideal participants.'],
    startDate: new Date(2015, 8, 25, 13, 30),
    endDate: new Date(2015, 8, 25, 14, 30),
    speakers: ['spkr008', 'spkr011']
}, {
    _id: 'wksp002',
    title: 'Workshop 2: Coding for all: Family friendly endition',
    location: 'Room 13',
    description: ['The workshop is designed for children from 13 to 16 of any gender. The goal is to allow children to learn and understand that computer programming is not a boring and complex task but a valuable skill. It teaches basic computational skills and computational thinking through storytelling and virtual world games. The workshop uses a hands on approach. Participants are going to use a software robot that lives in 2D worlds in order to offer a solution to a story.'],
    startDate: new Date(2015, 8, 25, 13, 30),
    endDate: new Date(2015, 8, 25, 14, 30),
    speakers: ['spkr002']
}, {
    _id: 'wksp003',
    title: 'Workshop 3: Prototyping wearable electronics workshop',
    location: 'Room 14',
    description: ['Do you want intelligent clothes? Like a jacket that changes color with the intensity of your heart rate or a scarf whose color changes with the color of your shoes? Do you like microcontrollers and programming language? Have you heard about Adafruit and Neopixels? Give them a try! This workshop will introduce you into the world of interactive electronic circuits. They can be attached on clothing and can intelligently communicate with the human body. Do not hesitate! Everyone can participate: students, researchers, fashion designers, developers, or just curious people. All the materials and toolkits for making your first prototype are provided by the organizer! Moreover, the best projects can win some wearable electronics materials and toolkits! If you are interested, hurry up! We have only 20 places! We encourage the participants to bring their personal laptop.'],
    startDate: new Date(2015, 8, 25, 13, 30),
    endDate: new Date(2015, 8, 25, 14, 30),
    speakers: ['spkr011']
}, {
    _id: 'wksp004',
    title: 'Workshop 4: ACM International Collegiate Programming Contest as good programming practice and activity not only for boys',
    location: 'Room 15',
    description: ['In the workshop we will show how is possible to bring the spirit of programming competitions into the teaching of programming and also attract girls into such competitions. The ACM International Collegiate Programming Contest (ICPC) is the premiere global programming competition conducted by and for the worlds universities. ICPC is growing but number of girls in competition is very small and it is not growing at all. It is very difficult to find main reason of this situation, but it is not because girls are not as good as boys.', 'We would like to show in our workshop to teachers and students that programming contest is competition, but also fun and it give to participants flavour of problem solving, programming and also experience with organizing such contest.', 'All are always impressed by efficiency of automated judging systems used in programming competitions, validating and grading thousands of student submissions. Using a kind of automated judging system inspired by programming competitions in the classroom scenario is also goal of this workshop. The workshop program will have 4 parts:', '1. Presentation of ACM ICPC organization', '2. Presentation of examples of problems solved in contest from simplest one to the most difficult', '3. Explanation and usage of an automatic judging system', '4. Practical session of solving simple problems under judging system', '5. Final 1 hour contest with few simple problems as example of real programming contest.', 'We expect attendee audience with laptops and internet connection and little knowledge of programming. They may be teachers, organizers and students.'],
    startDate: new Date(2015, 8, 25, 13, 30),
    endDate: new Date(2015, 8, 25, 14, 30),
    speakers: ['spkr003']
}, {
    _id: 'wksp005',
    title: 'Workshop 5: Oracle Workshop - Introducing Alice',
    location: 'Room 12',
    description: ['No description.'],
    startDate: new Date(2015, 8, 26, 11, 0),
    endDate: new Date(2015, 8, 26, 12, 0),
    speakers: ['spkr004']
}, {
    _id: 'wksp006',
    title: 'Workshop 6: Contributing to Open Source',
    location: 'Room 13',
    description: ['No description.'],
    startDate: new Date(2015, 8, 26, 11, 0),
    endDate: new Date(2015, 8, 26, 12, 0),
    speakers: ['spkr005']
}, {
    _id: 'pstr0001',
    title: 'GenderTime: Evaluation of Measures for Women Encouragement in Science Organisations',
    authors: ['Karin Siebenhandl', 'Eva Mayr'],
    description: 'No description.'
}, {
    _id: 'panl0001',
    title: 'Panel',
    location: 'Main aula',
    speakers: ['spkr012', 'spkr013'],
    moderators: ['spkr009'],
    startDate: new Date(2015, 8, 25, 11, 0),
    endDate: new Date(2015, 8, 25, 12, 0)
}, {
    _id: 'uncf0001',
    title: 'Case Studies',
    location: 'Multiple',
    speakers: [],
    startDate: new Date(2015, 8, 25, 15, 0),
    endDate: new Date(2015, 8, 25, 17, 0)
}, {
    _id: 'uncf0002',
    title: 'Case Studies',
    location: 'Multiple',
    speakers: [],
    startDate: new Date(2015, 8, 26, 13, 30),
    endDate: new Date(2015, 8, 26, 15, 30)
}, {
    _id: 'uncf0003',
    title: 'Unconference',
    location: 'Multiple',
    speakers: [],
    startDate: new Date(2015, 8, 26, 13, 30),
    endDate: new Date(2015, 8, 26, 14, 30)
}, {
    _id: 'uncf0004',
    title: 'Unconference',
    location: 'Multiple',
    speakers: [],
    startDate: new Date(2015, 8, 26, 14, 30),
    endDate: new Date(2015, 8, 26, 15, 30)
}, {
    _id: 'uncf0005',
    title: 'Unconference Wrap-up',
    location: 'Main aula',
    speakers: [],
    startDate: new Date(2015, 8, 26, 15, 30),
    endDate: new Date(2015, 8, 26, 15, 45)
}, {
    _id: 'indt0001',
    title: 'An industry talk',
    location: 'Room IV',
    speakers: ['spkr005'],
    company: 'Example Company',
    startDate: new Date(2015, 8, 25, 11, 0),
    endDate: new Date(2015, 8, 25, 11, 30)
}, {
    _id: 'indt0002',
    title: 'Another industry talk',
    location: 'Room IV',
    speakers: ['spkr001'],
    company: 'Example Company 2',
    startDate: new Date(2015, 8, 25, 11, 30),
    endDate: new Date(2015, 8, 25, 12, 0)
}, {
    _id: 'inds0001',
    title: 'Industry Talks',
    talks: ['indt0001', 'indt0002']
}, {
    _id: 'supp0001',
    name: 'Google',
    logo: 'google.jpg',
    tier: 'diamond'
}, {
    _id: 'supp0002',
    name: 'Oracle Academy',
    logo: 'oracle-academy.jpg',
    tier: 'diamond'
}, {
    _id: 'supp0003',
    name: 'Bloomberg',
    logo: 'bloomberg.jpg',
    tier: 'platinum'
}, {
    _id: 'supp0004',
    name: 'Cisco',
    logo: 'cisco.jpg',
    tier: 'platinum'
}, {
    _id: 'supp0005',
    name: 'Facebook',
    logo: 'facebook.jpg',
    tier: 'platinum'
}, {
    _id: 'supp0006',
    name: 'Informatics Europe',
    logo: 'informatics-europe.jpg',
    tier: 'silver'
}, {
    _id: 'supp0007',
    name: 'Microsoft Research Connections',
    logo: 'microsoft-research-connections.jpg',
    tier: 'silver'
}]);

db.bulkDocs([{
    _id: 'spsr0001',
    name: 'ACM',
    logo: 'acm.png'
}, {
    _id: 'spsr0002',
    name: 'ACM-W',
    logo: 'acm-w.png'
}, {
    _id: 'spsr0003',
    name: 'ACM Europe',
    logo: 'acm-europe.png'
}, {
    _id: 'spsr0004',
    name: 'ACM-W Europe',
    logo: 'acm-w-europe.png'
}, {
    _id: 'spsr0005',
    name: 'Uppsala University',
    logo: 'uu.png'
}]);
