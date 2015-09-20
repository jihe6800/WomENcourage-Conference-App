/* Schedule entries and related speakers, papers etc. */
db.bulkDocs([{
    _id: 'cmmn0001',
    title: 'Hackathon',
    location: 'Norrlands Nation',
    description: ['ACM-W Europe and Codess Hackathon sponsored by Intel® and Microsoft will be held in conjunction with womENcourage 2015 in celebration of women in computing. The challenge is to build innovative and exciting projects which improve the day to day lives of people using the Intel® Edison Development Board and the Intel IOT DevKit. Your resulting project could be anything that will help humanity.'],
    startDate: new Date(2015, 8, 24, 8, 30),
    endDate: new Date(2015, 8, 24, 16, 0)
}, {
    _id: 'cmmn0002',
    title: 'Career fair',
    location: 'Norrlands Nation',
    description: ['Please see the "Supporters" page.'],
    startDate: new Date(2015, 8, 24, 16, 15),
    endDate: new Date(2015, 8, 24, 20, 0)
}, {
    _id: 'cmmn0003',
    title: 'Poster session',
    location: 'Norrlands Nation',
    description: ['Please see the "Posters" page.'],
    startDate: new Date(2015, 8, 24, 16, 15),
    endDate: new Date(2015, 8, 24, 20, 0)
}, {
    _id: 'cmmn0004',
    title: 'Registration',
    location: 'Downstairs Hallway',
    description: [],
    startDate: new Date(2015, 8, 25, 8, 30),
    endDate: new Date(2015, 8, 25, 9, 0)
}, {
    _id: 'cmmn0005',
    title: 'Opening/Announcements',
    location: 'Main Aula',
    description: [],
    speakers: ['spkr0001'],
    startDate: new Date(2015, 8, 25, 9, 0),
    endDate: new Date(2015, 8, 25, 9, 30)
}, {
    _id: 'spkr0001',
    firstName: 'Alexander',
    lastName: 'Wolf',
    affiliation: 'ACM'
}, {
    _id: 'note0001',
    title: 'Keynote: Computing for Humans',
    location: 'Main Aula',
    description: ['Historically, computing has been envisioned as a way to enhance what we, as humans, are able to do. Nowhere is such a computing goal more evident than in the field of accessibility where we seek to create devices and software to address needs of people who have disabilities. In creating accessible technology and novel accessibility tools, research has not only facilitated digital interactions and quality of life needs for many, but also has served to advance the field of computing more generally. The needs of users can and should inform the agenda for emerging research in areas such as augmented memory, physical interactions, and human communication.'],
    speakers: ['spkr0002'],
    startDate: new Date(2015, 8, 25, 9, 30),
    endDate: new Date(2015, 8, 25, 10, 30)
}, {
    _id: 'spkr0002',
    firstName: 'Vicki',
    lastName: 'Hanson',
    affiliation: 'ACM'
}, {
    _id: 'cmmn0006',
    title: 'Break',
    location: 'Downstairs Hallway',
    description: ['Coffee and tea will be served.'],
    startDate: new Date(2015, 8, 25, 10, 30),
    endDate: new Date(2015, 8, 25, 11, 0)
}, {
    _id: 'panl0001',
    title: 'Panel: Open Source as a Career Path',
    location: 'Main Aula',
    moderators: ['spkr0003'],
    panelists: ['spkr0004', 'spkr0005', 'spkr0006', 'spkr0007'],
    startDate: new Date(2015, 8, 25, 11, 0),
    endDate: new Date(2015, 8, 25, 12, 0)
}, {
    _id: 'spkr0003',
    firstName: 'Dru',
    lastName: 'Lavigne',
    affiliation: 'iXsystems, The FreeBSD Foundation'
}, {
    _id: 'spkr0004',
    firstName: 'Deb',
    lastName: 'Goodkin',
    affiliation: 'The FreeBSD Foundation'
}, {
    _id: 'spkr0005',
    firstName: 'Allan',
    lastName: 'Jude',
    affiliation: 'ScaleEngine Inc., The FreeBSD Foundation'
}, {
    _id: 'spkr0006',
    firstName: 'Dan',
    lastName: 'Langille',
    affiliation: 'The FreeBSD Foundation'
}, {
    _id: 'spkr0007',
    firstName: 'Benedics',
    lastName: 'Reuschling',
    affiliation: 'The FreeBSD Foundation'
}, {
    _id: 'sssn0001',
    title: 'Papers Session 1: Computing to Assist Disabled Individuals or Older Adults',
    talks: ['talk0001', 'talk0002', 'talk0003']
}, {
    _id: 'talk0001',
    title: 'Predicting Mental-Imagery Based Brain-Computer Interface Performance from Psychometric Questionnaires',
    location: '',
    papers: ['papr0001'],
    startDate: new Date(2015, 8, 25, 11, 0),
    endDate: new Date(2015, 8, 25, 11, 20)
}, {
    _id: 'papr0001',
    title: 'Predicting Mental-Imagery Based Brain-Computer Interface Performance from Psychometric Questionnaires',
    authors: ['spkr0008', 'spkr0009', 'spkr0010', 'spkr0011']
}, {
    _id: 'spkr0008',
    firstName: 'Camille',
    lastName: 'Jeunet'
}, {
    _id: 'spkr0009',
    firstName: 'Bernard',
    lastName: "N'Kauoa"
}, {
    _id: 'spkr0010',
    firstName: 'Martin',
    lastName: 'Hachet'
}, {
    _id: 'spkr0011',
    firstName: 'Fabien',
    lastName: 'Lotte'
}, {
    _id: 'talk0002',
    title: 'Perceived Needs for Assistive Technologies in older adults and their caregivers',
    location: '',
    papers: ['papr0002'],
    startDate: new Date(2015, 8, 25, 11, 20),
    endDate: new Date(2015, 8, 25, 11, 40)
}, {
    _id: 'papr0002',
    title: 'Perceived Needs for Assistive Technologies in older adults and their caregivers',
    authors: ['spkr0012', 'spkr0013', 'spkr0014']
}, {
    _id: 'spkr0012',
    firstName: 'Lucile',
    lastName: 'Dupuy'
}, {
    _id: 'spkr0013',
    firstName: 'Hélène',
    lastName: 'Sauzéon'
}, {
    _id: 'spkr0014',
    firstName: 'Charles',
    lastName: 'Consel'
}, {
    _id: 'talk0003',
    title: 'Window to the Outside World: Bringing the outside in to housebound older adults in remote and rural areas',
    location: '',
    papers: ['papr0003'],
    startDate: new Date(2015, 8, 25, 11, 40),
    endDate: new Date(2015, 8, 25, 12, 0)
}, {
    _id: 'papr0003',
    title: 'Window to the Outside World: Bringing the outside in to housebound older adults in remote and rural areas',
    authors: ['spkr0015']
}, {
    _id: 'spkr0015',
    firstName: 'Gillian',
    lastName: 'Dowds'
}, {
    _id: 'inds0001',
    title: 'Industry Talks: Google, Bloomberg',
    talks: ['indt0001', 'indt0002']
}, {
    _id: 'indt0001',
    title: 'Google',
    location: 'Room IV',
    speakers: ['spkr0016'],
    company: 'Google',
    startDate: new Date(2015, 8, 25, 11, 0),
    endDate: new Date(2015, 8, 25, 11, 30)
}, {
    _id: 'spkr0016',
    firstName: 'Hanna',
    lastName: 'Pasula',
    affiliation: 'Google'
}, {
    _id: 'indt0002',
    title: 'Natural Language Processing and Question Answering',
    location: 'Room IV',
    speakers: ['spkr0017'],
    company: 'Bloomberg',
    startDate: new Date(2015, 8, 25, 11, 30),
    endDate: new Date(2015, 8, 25, 12, 0)
}, {
    _id: 'spkr0017',
    firstName: 'Ketevan',
    lastName: 'Tsereteli',
    affiliation: 'Bloomberg'
}, {
    _id: 'cmmn0008',
    title: 'Break',
    location: 'Downstairs Hallway',
    description: ['Coffee and tea will be served.'],
    startDate: new Date(2015, 8, 25, 12, 0),
    endDate: new Date(2015, 8, 25, 13, 30)
}, {
    _id: 'sssn0002',
    title: "Papers Session 2: Computation and Graphics",
    talks: ['talk0004', 'talk0005', 'talk0006']
}, {
    _id: 'talk0004',
    title: 'Evolution of Coordinated Behaviour in Artificial Life Simulations',
    location: '',
    papers: ['papr0004'],
    startDate: new Date(2015, 8, 25, 13, 30),
    endDate: new Date(2015, 8, 25, 13, 50)
}, {
    _id: 'papr0004',
    title: 'Evolution of Coordinated Behaviour in Artificial Life Simulations',
    authors: ['spkr0018', 'spkr0019', 'spkr0020']
}, {
    _id: 'spkr0018',
    firstName: 'Maud',
    lastName: 'Gibbons'
}, {
    _id: 'spkr0019',
    firstName: 'Colm',
    lastName: "O'Riordan"
}, {
    _id: 'spkr0020',
    firstName: 'Josephine',
    lastName: 'Griffith'
}, {
    _id: 'talk0005',
    title: 'An R-Based Framework for Implementing Large-Scale Spatial Models of Infectious Diseases',
    location: '',
    papers: ['papr0005'],
    startDate: new Date(2015, 8, 25, 13, 50),
    endDate: new Date(2015, 8, 25, 14, 10)
}, {
    _id: 'papr0005',
    title: 'An R-Based Framework for Implementing Large-Scale Spatial Models of Infectious Diseases',
    authors: ['spkr0021', 'spkr0022', 'spkr0023']
}, {
    _id: 'spkr0021',
    firstName: 'Martina',
    lastName: 'Curran'
}, {
    _id: 'spkr0022',
    firstName: 'Enda',
    lastName: "Howley"
}, {
    _id: 'spkr0023',
    firstName: 'Jim',
    lastName: 'Duggan'
}, {
    _id: 'talk0006',
    title: 'Interactively animating crumpling paper',
    location: '',
    papers: ['papr0006'],
    startDate: new Date(2015, 8, 25, 14, 10),
    endDate: new Date(2015, 8, 25, 14, 30)
}, {
    _id: 'papr0006',
    title: 'Interactively animating crumpling paper',
    authors: ['spkr0024', 'spkr0025', 'spkr0026', 'spkr0027']
}, {
    _id: 'spkr0024',
    firstName: 'Camille',
    lastName: 'Schreck'
}, {
    _id: 'spkr0025',
    firstName: 'Damien',
    lastName: "Rohmer"
}, {
    _id: 'spkr0026',
    firstName: 'Stefanie',
    lastName: 'Hahmann'
}, {
    _id: 'spkr0027',
    firstName: 'Marie-Paule',
    lastName: 'Cani',
    affiliation: 'Grenoble University (Grenoble Institute of Technology & Inria)'
}, {
    _id: 'inds0002',
    title: 'Industry Talks: Cisco, Facebook',
    talks: ['indt0003', 'indt0004']
}, {
    _id: 'indt0003',
    title: 'Cisco Collaboration - Be Inspired!',
    location: 'Room X',
    speakers: ['spkr0028', 'spkr0029'],
    company: 'Cisco',
    startDate: new Date(2015, 8, 25, 13, 30),
    endDate: new Date(2015, 8, 25, 14, 0)
}, {
    _id: 'spkr0028',
    firstName: 'Elin',
    lastName: 'Khosrawi Enmark',
    affiliation: 'Cisco'
}, {
    _id: 'spkr0029',
    firstName: 'Evelina',
    lastName: 'Samuelsson',
    affiliation: 'Cisco'
}, {
    _id: 'indt0004',
    title: 'Move Fast, Learn Things',
    location: 'Room X',
    speakers: ['spkr0030'],
    company: 'Facebook',
    startDate: new Date(2015, 8, 25, 14, 0),
    endDate: new Date(2015, 8, 25, 14, 30)
}, {
    _id: 'spkr0030',
    firstName: 'Nishita',
    lastName: 'Agarwal',
    affiliation: 'Facebook'
}, {
    _id: 'wksp0001',
    title: 'Workshop: Making your ideas into reality',
    location: '',
    description: ['This workshop is designed to inspire students by introducing them to the basics of creating something new. The students will be introduced to programming, basic electronics, circuits and how to enable/disable LEDS programmatically. The students will be hands on to learn the basics of a Galileo computer board and the steps for programming the board using Arduino and ArduBlock. The students work in teams of 2 to execute the hands on exercises for the workshop. Students aged 9 to 13 are ideal participants.',
        'Come to this workshop and learn how to create a working prototype of your idea! You will learn:',
        '- Basic understanding of Galileo or Edison boards.',
        '- How to use ArduBlock and Arduino.',
        '- How to wire the board to make push buttons and blinking lights.',
        '- How to program lights to blink.',
        '- How to read a button push.',
        '- How to create a model of your own idea.'],
    speakers: ['spkr0138', 'spkr0139'],
    startDate: new Date(2015, 8, 25, 13, 30),
    endDate: new Date(2015, 8, 25, 14, 30)
}, {
    _id: 'wksp0002',
    title: 'Workshop: Coding for all: Family friendly endition',
    location: '',
    description: ['The workshop is designed for children from 13 to 16 of any gender. The goal is to allow children to learn and understand that computer programming is not a boring and complex task but a valuable skill. It teaches basic computational skills and computational thinking through storytelling and virtual world games. The workshop uses a hands on approach. Participants are going to use a software robot that lives in 2D worlds in order to offer a solution to a story.',
        'To participate you need no prior knowledge. Please bring your laptop with Windows, Linux or Mac OS, and is WiFi enabled.'],
    speakers: ['spkr0057'],
    startDate: new Date(2015, 8, 25, 13, 30),
    endDate: new Date(2015, 8, 25, 14, 30)
}, {
    _id: 'wksp0003',
    title: 'Workshop: Prototyping wearable electronics workshop',
    location: '',
    description: ['Do you want intelligent clothes? Like a jacket that changes color with the intensity of your heart rate or a scarf whose color changes with the color of your shoes? Do you like microcontrollers and programming language? Have you heard about Adafruit and Neopixels? Give them a try!',
        'This workshop will introduce you into the world of interactive electronic circuits. They can be attached on clothing and can intelligently communicate with the human body. Do not hesitate! Everyone can participate: students, researchers, fashion designers, developers, or just curious people.',
        'All the materials and toolkits for making your first prototype are provided by the organizer! Moreover, the best projects can win some wearable electronics materials and toolkits! If you are interested, hurry up! We have only 20 places! We encourage the participants to bring their personal laptop.',
        'Updates about the event and some resources are available at: dotuyau.wordpress.com.'],
    speakers: ['spkr0140'],
    startDate: new Date(2015, 8, 25, 13, 30),
    endDate: new Date(2015, 8, 25, 14, 30)
}, {
    _id: 'wksp0004',
    title: 'Workshop: ACM International Collegiate Programming Contest as good programming practice and activity not only for boys',
    location: '',
    description: ['In the workshop we will show how is possible to bring the spirit of programming competitions into the teaching of programming and also attract girls into such competitions. The ACM International Collegiate Programming Contest (ICPC) is the premiere global programming competition conducted by and for the world’s universities. ICPC is growing but number of girls in competition is very small and it is not growing at all. It is very difficult to find main reason of this situation, but it is not because girls are not as good as boys.',
        'We would like to show in our workshop to teachers and students that programming contest is competition, but also fun and it give to participants flavour of problem solving, programming and also experience with organizing such contest.',
        'All are always impressed by efficiency of automated judging systems used in programming competitions, validating and grading thousands of student submissions. Using a kind of automated judging system inspired by programming competitions in the classroom scenario is also goal of this workshop. The workshop program will have 4 parts:',
        '1. Presentation of ACM ICPC organization',
        '2. Presentation of examples of problems solved in contest from simplest one to the most difficult',
        '3. Explanation and usage of an automatic judging system',
        '4. Practical session of solving simple problems under judging system',
        '5. Final 1 hour contest with few simple problems as example of real programming contest.',
        'We expect attendee audience with laptops and internet connection and little knowledge of programming. They may be teachers, organizers and students.'],
    speakers: ['spkr0141'],
    startDate: new Date(2015, 8, 25, 13, 30),
    endDate: new Date(2015, 8, 25, 14, 30)
}, {
    _id: 'cmmn0009',
    title: 'Break',
    location: 'Downstairs Hallway',
    description: ['Coffee and tea will be served.'],
    startDate: new Date(2015, 8, 25, 14, 30),
    endDate: new Date(2015, 8, 25, 15, 0)
}, {
    _id: 'uncf0001',
    title: 'Case Studies (Multiple sessions)',
    location: 'Multiple locations',
    startDate: new Date(2015, 8, 25, 15, 0),
    endDate: new Date(2015, 8, 25, 17, 0)
}, {
    _id: 'wksp0005',
    title: 'Workshop (cont.): Making your ideas into reality',
    location: '',
    description: ['This workshop is designed to inspire students by introducing them to the basics of creating something new. The students will be introduced to programming, basic electronics, circuits and how to enable/disable LEDS programmatically. The students will be hands on to learn the basics of a Galileo computer board and the steps for programming the board using Arduino and ArduBlock. The students work in teams of 2 to execute the hands on exercises for the workshop. Students aged 9 to 13 are ideal participants.',
        'Come to this workshop and learn how to create a working prototype of your idea! You will learn:',
        '- Basic understanding of Galileo or Edison boards.',
        '- How to use ArduBlock and Arduino.',
        '- How to wire the board to make push buttons and blinking lights.',
        '- How to program lights to blink.',
        '- How to read a button push.',
        '- How to create a model of your own idea.'],
    speakers: ['spkr0138', 'spkr0139'],
    startDate: new Date(2015, 8, 25, 15, 0),
    endDate: new Date(2015, 8, 25, 17, 0)
}, {
    _id: 'wksp0006',
    title: 'Workshop (cont.): Coding for all: Family friendly endition',
    location: '',
    description: ['The workshop is designed for children from 13 to 16 of any gender. The goal is to allow children to learn and understand that computer programming is not a boring and complex task but a valuable skill. It teaches basic computational skills and computational thinking through storytelling and virtual world games. The workshop uses a hands on approach. Participants are going to use a software robot that lives in 2D worlds in order to offer a solution to a story.',
        'To participate you need no prior knowledge. Please bring your laptop with Windows, Linux or Mac OS, and is WiFi enabled.'],
    speakers: ['spkr0057'],
    startDate: new Date(2015, 8, 25, 15, 0),
    endDate: new Date(2015, 8, 25, 17, 0)
}, {
    _id: 'wksp0007',
    title: 'Workshop (cont.): Prototyping wearable electronics workshop',
    location: '',
    description: ['Do you want intelligent clothes? Like a jacket that changes color with the intensity of your heart rate or a scarf whose color changes with the color of your shoes? Do you like microcontrollers and programming language? Have you heard about Adafruit and Neopixels? Give them a try!',
        'This workshop will introduce you into the world of interactive electronic circuits. They can be attached on clothing and can intelligently communicate with the human body. Do not hesitate! Everyone can participate: students, researchers, fashion designers, developers, or just curious people.',
        'All the materials and toolkits for making your first prototype are provided by the organizer! Moreover, the best projects can win some wearable electronics materials and toolkits! If you are interested, hurry up! We have only 20 places! We encourage the participants to bring their personal laptop.',
        'Updates about the event and some resources are available at: dotuyau.wordpress.com.'],
    speakers: ['spkr0140'],
    startDate: new Date(2015, 8, 25, 15, 0),
    endDate: new Date(2015, 8, 25, 17, 0)
}, {
    _id: 'wksp0008',
    title: 'Workshop (cont.): ACM International Collegiate Programming Contest as good programming practice and activity not only for boys',
    location: '',
    description: ['In the workshop we will show how is possible to bring the spirit of programming competitions into the teaching of programming and also attract girls into such competitions. The ACM International Collegiate Programming Contest (ICPC) is the premiere global programming competition conducted by and for the world’s universities. ICPC is growing but number of girls in competition is very small and it is not growing at all. It is very difficult to find main reason of this situation, but it is not because girls are not as good as boys.',
        'We would like to show in our workshop to teachers and students that programming contest is competition, but also fun and it give to participants flavour of problem solving, programming and also experience with organizing such contest.',
        'All are always impressed by efficiency of automated judging systems used in programming competitions, validating and grading thousands of student submissions. Using a kind of automated judging system inspired by programming competitions in the classroom scenario is also goal of this workshop. The workshop program will have 4 parts:',
        '1. Presentation of ACM ICPC organization',
        '2. Presentation of examples of problems solved in contest from simplest one to the most difficult',
        '3. Explanation and usage of an automatic judging system',
        '4. Practical session of solving simple problems under judging system',
        '5. Final 1 hour contest with few simple problems as example of real programming contest.',
        'We expect attendee audience with laptops and internet connection and little knowledge of programming. They may be teachers, organizers and students.'],
    speakers: ['spkr0141'],
    startDate: new Date(2015, 8, 25, 15, 0),
    endDate: new Date(2015, 8, 25, 17, 0)
}, {
    _id: 'cmmn0010',
    title: 'Registration',
    location: 'Downstairs Hallway',
    description: [],
    startDate: new Date(2015, 8, 26, 8, 30),
    endDate: new Date(2015, 8, 26, 9, 0)
}, {
    _id: 'cmmn0011',
    title: 'Opening/Announcements',
    location: 'Main Aula',
    description: [],
    speakers: ['spkr0031'],
    startDate: new Date(2015, 8, 26, 9, 0),
    endDate: new Date(2015, 8, 26, 9, 30)
}, {
    _id: 'spkr0031',
    firstName: 'Valerie',
    lastName: 'Barr',
    affiliation: 'ACM-W'
}, {
    _id: 'note0002',
    title: 'Keynote: On Grit and Being the Token Figure',
    location: 'Main Aula',
    description: ['How do you succeed in the area of computer science? My research has shown that having grit is more important than IQ or any other personality trait, and that grit together with the student\'s overall view of success matters the most. If you work hard, and do not give up when it is really tough, then you are likely to have a good career in any subject, including computer science. However, if you are a woman in computer science success also correlates to you handling the male dominated field, and being the token figure. This can be seen as another kind of grit. The norm of the field is connected to the computer science nerd who has no interests but technology, and that this personality trait is required to be a part of the community. In this keynote I will tell some of my stories about how it is to be a woman in the field, and give some insights into the kind of grit that it requires to be a successful token figure.'],
    speakers: ['spkr0032'],
    startDate: new Date(2015, 8, 26, 9, 30),
    endDate: new Date(2015, 8, 26, 10, 30)
}, {
    _id: 'spkr0032',
    firstName: 'Åsa',
    lastName: 'Cajander',
    affiliation: 'Uppsala University'
}, {
    _id: 'cmmn0012',
    title: 'Break',
    location: 'Downstairs Hallway',
    description: ['Coffee and tea will be served.'],
    startDate: new Date(2015, 8, 26, 10, 30),
    endDate: new Date(2015, 8, 26, 11, 0)
}, {
    _id: 'panl0002',
    title: 'Panel: Teaching and Learning 3.0',
    location: 'Main Aula',
    moderators: ['spkr0033'],
    panelists: ['spkr0034', 'spkr0035'],
    startDate: new Date(2015, 8, 26, 11, 0),
    endDate: new Date(2015, 8, 26, 12, 0)
}, {
    _id: 'spkr0033',
    firstName: 'Anke',
    lastName: 'Brock',
    affiliation: 'Human-Computer Interaction Inria Bordeaux France'
}, {
    _id: 'spkr0034',
    firstName: 'Stéphanie',
    lastName: 'Fleck',
    affiliation: 'University of Lorraine France'
}, {
    _id: 'spkr0035',
    firstName: 'Jane',
    lastName: 'Richardson',
    affiliation: 'Oracle Academy'
}, {
    _id: 'sssn0003',
    title: 'Papers Session 3: Human-Computer Interaction',
    talks: ['talk0007', 'talk0008', 'talk0009']
}, {
    _id: 'talk0007',
    title: 'A real-time dance visualization framework for the design of mappings that favor user appropriation',
    location: '',
    papers: ['papr0007'],
    startDate: new Date(2015, 8, 26, 11, 0),
    endDate: new Date(2015, 8, 26, 11, 20)
}, {
    _id: 'papr0007',
    title: 'A real-time dance visualization framework for the design of mappings that favor user appropriation',
    authors: ['spkr0036', 'spkr0037']
}, {
    _id: 'spkr0036',
    firstName: 'Carla',
    lastName: 'Griggio'
}, {
    _id: 'spkr0037',
    firstName: 'Mario',
    lastName: 'Romero',
    affiliation: 'Human-Computer Interaction KTH'
}, {
    _id: 'talk0008',
    title: 'Text is in the Air... Investigating Multi-Finger Gestures for Mid-Air Text Entry',
    location: '',
    papers: ['papr0008'],
    startDate: new Date(2015, 8, 26, 11, 20),
    endDate: new Date(2015, 8, 26, 11, 40)
}, {
    _id: 'papr0008',
    title: 'Text is in the Air... Investigating Multi-Finger Gestures for Mid-Air Text Entry',
    authors: ['spkr0038', 'spkr0039', 'spkr0040', 'spkr0041']
}, {
    _id: 'spkr0038',
    firstName: 'Anna Maria',
    lastName: 'Feit'
}, {
    _id: 'spkr0039',
    firstName: 'Srinath',
    lastName: 'Sridhar'
}, {
    _id: 'spkr0040',
    firstName: 'Cristian',
    lastName: 'Theobalt'
}, {
    _id: 'spkr0041',
    firstName: 'Antti',
    lastName: 'Oulasvirta'
}, {
    _id: 'talk0009',
    title: 'Text is in the Air... Investigating Multi-Finger Gestures for Mid-Air Text Entry',
    location: '',
    papers: ['papr0009'],
    startDate: new Date(2015, 8, 26, 11, 40),
    endDate: new Date(2015, 8, 26, 12, 0)
}, {
    _id: 'papr0009',
    title: 'Beyond the Limits of Digital Interaction: Should Animals Play with Interactive Environments?',
    authors: ['spkr0042', 'spkr0043', 'spkr0044']
}, {
    _id: 'spkr0042',
    firstName: 'Patricia',
    lastName: 'Pons'
}, {
    _id: 'spkr0043',
    firstName: 'Javier',
    lastName: 'Jaen'
}, {
    _id: 'spkr0044',
    firstName: 'Alejandro',
    lastName: 'Catala'
},{
    _id: 'uncf0002',
    title: 'Unconference',
    location: 'TBA',
    startDate: new Date(2015, 8, 26, 11, 0),
    endDate: new Date(2015, 8, 26, 12, 0)
}, {
    _id: 'inds0003',
    title: 'Industry Talks: Skype/Microsoft, Anita Borg',
    talks: ['indt0005', 'indt0006']
}, {
    _id: 'indt0005',
    title: 'Real-time audio processing and user driven development',
    location: 'Room IV',
    speakers: ['spkr0144'],
    company: 'Skype/MS',
    startDate: new Date(2015, 8, 26, 11, 0),
    endDate: new Date(2015, 8, 26, 11, 30)
}, {
    _id: 'indt0006',
    title: 'Google Anita Borg Memorial Scholarship, Engage Program and Community',
    location: 'Room IV',
    speakers: ['spkr0145'],
    company: 'Google',
    startDate: new Date(2015, 8, 26, 11, 30),
    endDate: new Date(2015, 8, 26, 12, 0)
}, {
    _id: 'wksp0009',
    title: 'Workshop: Contributing to Open Source',
    location: '',
    description: ['Open Source software has become widespread and forms a vital part of the Internet. Open Source projects can be very rewarding, both for the people who use the products and for the people involved in the project. Many people have careers using open source software and developing skills with such projects can greatly widen your opportunities for employment. Fortunately, with open source software, you can gain experience during your spare time with freely available tools and resources.',
        'For those who have never worked with open source software, it can be bewildering as to how all of this works. How do you get involved with a project? How do you propose changes? How do you test them?',
        'More importantly, you might be a open source user, and you love the tools you use. How can you contribute back to the projects you love? You don\'t have to be a coder with developer skills. There is more to open source than coding.',
        'The organizers will provide a small open source project for you. You can join the project and start contributing in a tightly controlled environment. You\'ll learn how to submit bug reports, contribute improvements, and get involved with a project.',
        'All of this will be done within our own project with just the workshop attendees involved. We will work over IRC (Internet Relay Chat) & Mailing Lists to resolve bugs and contribute to the project.',
        'The skills you learn in the workshop will be form a good starting point for your future contributions to open source.',
        'Participants should:',
        '- bring a laptop and wifi',
        '- install an IRC client software',
        '- have a working email address',
        '- have an ssh client installed'],
    speakers: ['spkr0006'],
    startDate: new Date(2015, 8, 26, 11, 0),
    endDate: new Date(2015, 8, 26, 12, 0)
}, {
    _id: 'cmmn0013',
    title: 'Break',
    location: 'Downstairs Hallway',
    description: ['Coffee and tea will be served.'],
    startDate: new Date(2015, 8, 26, 12, 0),
    endDate: new Date(2015, 8, 26, 13, 30)
}, {
    _id: 'panl0003',
    title: 'Panel: Out of the Ordinary Jobs',
    location: 'Main Aula',
    moderators: ['spkr0045'],
    panelists: ['spkr0033', 'spkr0037', 'spkr0046'],
    startDate: new Date(2015, 8, 26, 13, 30),
    endDate: new Date(2015, 8, 26, 14, 30)
}, {
    _id: 'spkr0045',
    firstName: 'Jessica',
    lastName: 'Cauchard',
    affiliation: 'Human-Computer Interaction Stanford University'
}, {
    _id: 'spkr0046',
    firstName: 'Monika',
    lastName: 'Podsiadlo',
    affiliation: 'Google'
}, {
    _id: 'sssn0004',
    title: 'Papers Session 4: Gender issues in Computing Education',
    talks: ['talk0010', 'talk0011', 'talk0012']
}, {
    _id: 'talk0010',
    title: 'EnGendering Design: Implementing Interdisciplinarity',
    location: '',
    papers: ['papr0010'],
    startDate: new Date(2015, 8, 26, 13, 30),
    endDate: new Date(2015, 8, 26, 13, 50)
}, {
    _id: 'papr0010',
    title: 'EnGendering Design: Implementing Interdisciplinarity',
    authors: ['spkr0047', 'spkr0048']
}, {
    _id: 'spkr0047',
    firstName: 'Samantha',
    lastName: 'Breslin'
}, {
    _id: 'spkr0048',
    firstName: 'Bimlesh',
    lastName: 'Wadhwa'
}, {
    _id: 'talk0011',
    title: 'Conceptions and Stereotypes About Computer Science and Women: The Uppsala University Case',
    location: '',
    papers: ['papr0011'],
    startDate: new Date(2015, 8, 26, 13, 50),
    endDate: new Date(2015, 8, 26, 14, 10)
}, {
    _id: 'papr0011',
    title: 'Conceptions and Stereotypes About Computer Science and Women: The Uppsala University Case',
    authors: ['spkr0049', 'spkr0050', 'spkr0051']
}, {
    _id: 'spkr0049',
    firstName: 'Noric',
    lastName: 'Couderc'
}, {
    _id: 'spkr0050',
    firstName: 'Elin',
    lastName: 'Parsjö'
}, {
    _id: 'spkr0051',
    firstName: 'Nadia',
    lastName: 'Röning'
}, {
    _id: 'talk0012',
    title: 'GenderTime: Evaluation of Measures for Women Encouragement in Science Organisations',
    location: '',
    papers: ['papr0012'],
    startDate: new Date(2015, 8, 26, 14, 10),
    endDate: new Date(2015, 8, 26, 14, 30)
}, {
    _id: 'papr0012',
    title: 'GenderTime: Evaluation of Measures for Women Encouragement in Science Organisations',
    authors: ['spkr0052', 'spkr0053']
}, {
    _id: 'spkr0052',
    firstName: 'Karin',
    lastName: 'Siebenhandl'
}, {
    _id: 'spkr0053',
    firstName: 'Eva',
    lastName: 'Mayr'
}, {
    _id: 'wksp0010',
    title: 'Workshop: Oracle Workshop - Introducing Alice',
    location: '',
    description: ['A 2 hour workshop where participants will have a hands on introduction to the features of Carnegie Mellon’s Alice 3.1 platform and learn how it can be used as a tool to introduce programming in the classroom by developing 3D Animations.'],
    speakers: [],
    startDate: new Date(2015, 8, 26, 13, 30),
    endDate: new Date(2015, 8, 26, 15, 30)
}, {
    _id: 'wksp0011',
    title: 'Workshop: ACM-W volunteers',
    location: '',
    description: ['The ACM is the world\'s largest educational and scientific computing society, helping advance computing as a science and a profession. ACM-W supports, celebrates, and advocates internationally for the full engagement of women in all aspects of the computing field. Enthusiastic volunteers represent ACM and ACM-W in their local communities through the chartering of Chapters, both by students and professionals. This session brings together ACM and ACM-W Chapter representatives, as well as anyone (regardless of gender!) interested in starting/joining their local chapter. George Eleftherakis, with years of experience in bringing together Chapters around Europe, will facilitate a session where networking opportunities will be plenty and meaningful. Come learn more about Chapters!'],
    speakers: ['spkr0057'],
    startDate: new Date(2015, 8, 25, 11, 0),
    endDate: new Date(2015, 8, 25, 12, 0)
}, {
    _id: 'wksp0012',
    title: 'Workshop: Queer Women in Tech',
    location: '',
    description: ['A seminar focused on raising awareness around the issue of gender gap and diversity in tech, with a focus on gender identity and sexual orientation. This seminar is about challenges that queer women face in STEM fields, discussing why:',
        '- We need to Be More Visible to Each Other',
        '- We need to Be More Visible to Others',
        '- We need to Get More Women and Lesbians in Technology'],
    speakers: ['spkr0142'],
    startDate: new Date(2015, 8, 25, 11, 0),
    endDate: new Date(2015, 8, 25, 12, 0)
}, {
    _id: 'uncf0003',
    title: 'Unconference',
    location: 'TBA',
    startDate: new Date(2015, 8, 26, 13, 30),
    endDate: new Date(2015, 8, 26, 15, 30)
}, {
    _id: 'uncf0004',
    title: 'Case Studies',
    location: 'TBA',
    startDate: new Date(2015, 8, 26, 13, 30),
    endDate: new Date(2015, 8, 26, 15, 30)
}, {
    _id: 'uncf0005',
    title: 'Unconference',
    location: 'Main Aula',
    startDate: new Date(2015, 8, 26, 14, 30),
    endDate: new Date(2015, 8, 26, 15, 30)
}, {
    _id: 'uncf0006',
    title: 'Unconference',
    location: 'TBA',
    startDate: new Date(2015, 8, 26, 14, 30),
    endDate: new Date(2015, 8, 26, 15, 30)
}, {
    _id: 'cmmn0014',
    title: 'Break',
    location: 'Downstairs Hallway',
    description: ['Coffee and tea will be served.'],
    startDate: new Date(2015, 8, 26, 15, 30),
    endDate: new Date(2015, 8, 26, 16, 0)
}, {
    _id: 'note0003',
    title: 'Keynote: Towards Expressive 3D Modelling: New challenges in Computer Graphics',
    location: 'Main Aula',
    description: ['Despite our great expressive skills, we humans lack an easy way of conveying the 3D shapes we imagine, even more so for dynamic shapes that change over time. Over centuries we relied on drawing and sculpture to convey shapes. However, these tools require significant expertise and time investment, especially when one aims to describe complex or dynamic shapes. With the advent of virtual environments one would expect digital modeling to replace these traditional tools. Unfortunately, conventional techniques in the area have failed, since even trained computer artists still create with traditional media and only use the computer to reproduce already designed content.',
        'Could digital media be turned into a tool, even more expressive and simpler to use than a pen, to convey and refine both static and dynamic 3D shapes? This would make shape design directly possible in virtual form, from early drafting to progressive refinement and finalization of an idea. To this end, models for shape and motion need to be redefined from a user-centered perspective. This talk will present our recent work towards "responsive shapes", namely high level models that take form, refine, move and deform based on user intent, expressed through intuitive interaction gestures.'],
    speakers: ['spkr0027'],
    startDate: new Date(2015, 8, 26, 16, 0),
    endDate: new Date(2015, 8, 26, 17, 0)
}, {
    _id: 'cmmn0015',
    title: 'Closing',
    location: 'TBA',
    description: [],
    startDate: new Date(2015, 8, 26, 17, 0),
    endDate: new Date(2015, 8, 26, 17, 15)
}]);

/* Posters and related speakers */
db.bulkDocs([{
    _id: 'pstr0001',
    title: 'Generating Domain-Specific Languages for Safety Assurance',
    authors: ['spkr0054', 'spkr0055']
}, {
    _id: 'spkr0054',
    firstName: 'Yaping',
    lastName: 'Luo'
}, {
    _id: 'spkr0055',
    firstName: 'Mark',
    lastName: 'Van Den Brand'
}, {
    _id: 'pstr0002',
    title: 'Perceptions among High School Students towards a Career in Computing',
    authors: ['spkr0056', 'spkr0057']
}, {
    _id: 'spkr0056',
    firstName: 'Alexandra Cristina',
    lastName: 'Patrascu'
}, {
    _id: 'spkr0057',
    firstName: 'George',
    lastName: 'Eleftherakis'
}, {
    _id: 'pstr0003',
    title: 'Tele-Board MED – Interactive Medical Documentation',
    authors: ['spkr0058', 'spkr0059', 'spkr0060']
}, {
    _id: 'spkr0058',
    firstName: 'Anja',
    lastName: 'Perlich'
}, {
    _id: 'spkr0059',
    firstName: 'Julia',
    lastName: 'Von Thienen'
}, {
    _id: 'spkr0060',
    firstName: 'Christoph',
    lastName: 'Meinel'
}, {
    _id: 'pstr0004',
    title: 'The design of a linked data platform ecosystem for the realization of smart and sustainable cities',
    authors: ['spkr0061', 'spkr0062', 'spkr0063']
}, {
    _id: 'spkr0061',
    firstName: 'Larissa',
    lastName: 'Suzuki'
}, {
    _id: 'spkr0062',
    firstName: 'Anthony',
    lastName: 'Finkelstein'
}, {
    _id: 'spkr0063',
    firstName: 'David',
    lastName: 'Gann'
}, {
    _id: 'pstr0005',
    title: 'Tweet if you will – the real question is, who do you influence?',
    authors: ['spkr0064', 'spkr0065', 'spkr0066']
}, {
    _id: 'spkr0064',
    firstName: 'Johanna',
    lastName: 'Schacht'
}, {
    _id: 'spkr0065',
    firstName: 'Margeret',
    lastName: 'Hall'
}, {
    _id: 'spkr0066',
    firstName: 'Martin',
    lastName: 'Chorley'
}, {
    _id: 'pstr0006',
    title: 'Health in Hand - Indo-Swedish R&D collaboration around innovative mobile technologies for health promotion and disease prevention',
    authors: ['spkr0067']
}, {
    _id: 'spkr0067',
    firstName: 'Jenny',
    lastName: 'Lundberg'
}, {
    _id: 'pstr0007',
    title: 'Iterative Data Analysis for Sensing Applications',
    authors: ['spkr0068']
}, {
    _id: 'spkr0068',
    firstName: 'Ella',
    lastName: 'Peltonen'
}, {
    _id: 'pstr0008',
    title: 'Data Integration Module for OSLC Adapters',
    authors: ['spkr0069']
}, {
    _id: 'spkr0069',
    firstName: 'Didem',
    lastName: 'Gürdür'
}, {
    _id: 'pstr0009',
    title: 'Intuitive Interface for Rule Visualization and Generation',
    authors: ['spkr0070']
}, {
    _id: 'spkr0070',
    firstName: 'Alma',
    lastName: 'Castillo Antolin'
}, {
    _id: 'pstr0010',
    title: 'Automatic energy monitoring and recharging of an autonomous assistive robot in a smart apartment',
    authors: ['spkr0071']
}, {
    _id: 'spkr0071',
    firstName: 'Mélanie',
    lastName: 'Lelaure'
}, {
    _id: 'pstr0011',
    title: 'Design of tangible tabletop activities to improve cognitive functions',
    authors: ['spkr0072']
}, {
    _id: 'spkr0072',
    firstName: 'Clara',
    lastName: 'Bonillo Fernández'
}, {
    _id: 'pstr0012',
    title: 'Automated Requirements Transfer between Versions of International Standards',
    authors: ['spkr0073', 'spkr0074']
}, {
    _id: 'spkr0073',
    firstName: 'Anastasia',
    lastName: 'Tugaenko'
}, {
    _id: 'spkr0074',
    firstName: 'Nikolay',
    lastName: 'Pakulin'
}, {
    _id: 'pstr0013',
    title: 'Salient regions determination and its applications',
    authors: ['spkr0075']
}, {
    _id: 'spkr0075',
    firstName: 'Júlia',
    lastName: 'Ku?erová'
}, {
    _id: 'pstr0014',
    title: 'Analysis of Social Learning Networks on Twitter for Supporting MOOCs Education',
    authors: ['spkr0076', 'spkr0077', 'spkr0078', 'spkr0079']
}, {
    _id: 'spkr0076',
    firstName: 'Ayse Saliha',
    lastName: 'Sunar'
}, {
    _id: 'spkr0077',
    firstName: 'Nor Aniza',
    lastName: 'Abdullah'
}, {
    _id: 'spkr0078',
    firstName: 'Su',
    lastName: 'White'
}, {
    _id: 'spkr0079',
    firstName: 'Hugh C',
    lastName: 'Davis'
}, {
    _id: 'pstr0015',
    title: 'The innovative use of knowledge management tools and techniques across states in Nigeria',
    authors: ['spkr0080']
}, {
    _id: 'spkr0080',
    firstName: 'Osediamen',
    lastName: 'Osoba'
}, {
    _id: 'pstr0016',
    title: 'SciNet: A System for Browsing Scientific Literature through Keyword Manipulation',
    authors: ['spkr0081', 'spkr0082']
}, {
    _id: 'spkr0081',
    firstName: 'Dorota',
    lastName: 'Glowacka'
}, {
    _id: 'spkr0082',
    firstName: 'Kumaripaba',
    lastName: 'Athukorala'
}, {
    _id: 'pstr0017',
    title: 'Combining Algorithmic and Visual Methods for Outlier Detection Performed by Domain Experts',
    authors: ['spkr0083']
}, {
    _id: 'spkr0083',
    firstName: 'Agnes',
    lastName: 'Salanki'
}, {
    _id: 'pstr0018',
    title: 'DopplerGR',
    authors: ['spkr0084']
}, {
    _id: 'spkr0084',
    firstName: 'Cornelia',
    lastName: 'Secelean'
}, {
    _id: 'pstr0019',
    title: 'Nowcasting Policy Indices with Information Markets and Belief Networks',
    authors: ['spkr0085']
}, {
    _id: 'spkr0085',
    firstName: 'Niki',
    lastName: 'Nikolakakou'
}, {
    _id: 'pstr0020',
    title: 'Domain-Independent Communicative Agents',
    authors: ['spkr0086', 'spkr0087']
}, {
    _id: 'spkr0086',
    firstName: 'Tânia',
    lastName: 'Marques'
}, {
    _id: 'spkr0087',
    firstName: 'Michael',
    lastName: 'Rovatsos'
}, {
    _id: 'pstr0021',
    title: 'Exploring Older People interactions with Online Video Portals in Different Cultural Backgrounds',
    authors: ['spkr0088', 'spkr0089', 'spkr0090']
}, {
    _id: 'spkr0088',
    firstName: 'Susan M.',
    lastName: 'Ferreira'
}, {
    _id: 'spkr0089',
    firstName: 'Sergio',
    lastName: 'Sayago'
}, {
    _id: 'spkr0090',
    firstName: 'Josep',
    lastName: 'Blat'
}, {
    _id: 'pstr0022',
    title: 'Automatic Analysis of 4D Flow Magnetic Resonance Images of the Cardiovascular System: Atlas-based Vessel Segmentation',
    authors: ['spkr0091', 'spkr0092', 'spkr0093', 'spkr0094', 'spkr0095', 'spkr0096']
}, {
    _id: 'spkr0091',
    firstName: 'Mariana',
    lastName: 'Bustamante'
}, {
    _id: 'spkr0092',
    firstName: 'Tino',
    lastName: 'Ebbers'
}, {
    _id: 'spkr0093',
    firstName: 'Carl-Johan',
    lastName: 'Carlhäll'
}, {
    _id: 'spkr0094',
    firstName: 'Petter',
    lastName: 'Dyverfeldt'
}, {
    _id: 'spkr0095',
    firstName: 'Sven',
    lastName: 'Petersson'
}, {
    _id: 'spkr0096',
    firstName: 'Jonatan',
    lastName: 'Eriksson'
}, {
    _id: 'pstr0023',
    title: 'Student smartphones: tools or barriers? -- Attitudes amongst students in Higher Education in Chile and the UK',
    authors: ['spkr0097']
}, {
    _id: 'spkr0097',
    firstName: 'Adriana',
    lastName: 'Wilde'
}, {
    _id: 'pstr0024',
    title: 'All About That Bayes – Risk-Sensitive Automated Planning',
    authors: ['spkr0098']
}, {
    _id: 'spkr0098',
    firstName: 'Liana',
    lastName: 'Marinescu'
}, {
    _id: 'pstr0025',
    title: 'Approaching parallel computing to the social sciences: simulating population dynamics',
    authors: ['spkr0099', 'spkr0100']
}, {
    _id: 'spkr0099',
    firstName: 'Cristina',
    lastName: 'Montañola-Sales'
}, {
    _id: 'spkr0100',
    firstName: 'Josep',
    lastName: 'Casanovas-Garcia'
}, {
    _id: 'pstr0026',
    title: 'New graph partitioning techniques for load balancing of coupled simulations',
    authors: ['spkr0101', 'spkr0102']
}, {
    _id: 'spkr0101',
    firstName: 'Maria',
    lastName: 'Predari'
}, {
    _id: 'spkr0102',
    firstName: 'Aurelien',
    lastName: 'Esnard'
}, {
    _id: 'pstr0027',
    title: 'Increasing Women’s Participation in Computing by Increasing Relevance',
    authors: ['spkr0103', 'spkr0104', 'spkr0105', 'spkr0106']
}, {
    _id: 'spkr0103',
    firstName: 'Mikael',
    lastName: 'Asplund'
}, {
    _id: 'spkr0104',
    firstName: 'Inger',
    lastName: 'Erlander Klein'
}, {
    _id: 'spkr0105',
    firstName: 'Simin',
    lastName: 'Nadjm-Tehrani'
}, {
    _id: 'spkr0106',
    firstName: 'Tea',
    lastName: 'Nygren'
}, {
    _id: 'pstr0028',
    title: 'Code-Based Cryptography: A way to secure communications',
    authors: ['spkr0107', 'spkr0108', 'spkr0109']
}, {
    _id: 'spkr0107',
    firstName: 'Tania',
    lastName: 'Richmond'
}, {
    _id: 'spkr0108',
    firstName: 'Pierre-Louis',
    lastName: 'Cayrel'
}, {
    _id: 'spkr0109',
    firstName: 'Viktor',
    lastName: 'Fischer'
}, {
    _id: 'pstr0029',
    title: 'Understanding Human Behavior within a Device Ecology',
    authors: ['spkr0110']
}, {
    _id: 'spkr0110',
    firstName: 'Christina',
    lastName: 'Vasiliou'
}, {
    _id: 'pstr0030',
    title: 'Annotation of an interative tactile map for visually impaired people',
    authors: ['spkr0111', 'spkr0112', 'spkr0113']
}, {
    _id: 'spkr0111',
    firstName: 'Julie',
    lastName: 'Ducasse'
}, {
    _id: 'spkr0112',
    firstName: 'Marc',
    lastName: 'Macé'
}, {
    _id: 'spkr0113',
    firstName: 'Christophe',
    lastName: 'Jouffrais'
}, {
    _id: 'pstr0031',
    title: 'Algorithmic verification of stability of cyber-physical systems',
    authors: ['spkr0114']
}, {
    _id: 'spkr0114',
    firstName: 'Miriam',
    lastName: 'García Soto'
}, {
    _id: 'pstr0032',
    title: 'Probabilistic topic modelling and implications of knowledge acquisition for privacy on social friendship networks',
    authors: ['spkr0115']
}, {
    _id: 'spkr0115',
    firstName: 'Dorota',
    lastName: 'Filipczuk'
}, {
    _id: 'pstr0033',
    title: 'FunIM: Chatting on the Side of Emotion',
    authors: ['spkr0116', 'spkr0117', 'spkr0118']
}, {
    _id: 'spkr0116',
    firstName: 'Ke-Chen',
    lastName: 'Pong'
}, {
    _id: 'spkr0117',
    firstName: 'Chi-An',
    lastName: 'Wang'
}, {
    _id: 'spkr0118',
    firstName: 'Shuo-Hsiu',
    lastName: 'Hsu'
}, {
    _id: 'pstr0034',
    title: 'Runtime Verification Challenges in (Constraint) Logic Programming',
    authors: ['spkr0119', 'spkr0120', 'spkr0121']
}, {
    _id: 'spkr0119',
    firstName: 'Nataliia',
    lastName: 'Stulova'
}, {
    _id: 'spkr0120',
    firstName: 'Jose F.',
    lastName: 'Morales'
}, {
    _id: 'spkr0121',
    firstName: 'Manuel V.',
    lastName: 'Hermenegildo'
}, {
    _id: 'pstr0035',
    title: 'A Next-Generation Data Language Proposal',
    authors: ['spkr0122']
}, {
    _id: 'spkr0122',
    firstName: 'Eugene',
    lastName: 'Panferov'
}, {
    _id: 'pstr0036',
    title: 'SIRI on your wrist: Making your home smart',
    authors: ['spkr0123', 'spkr0097']
}, {
    _id: 'spkr0123',
    firstName: 'Olivia',
    lastName: 'Ojuroye'
}, {
    _id: 'pstr0037',
    title: 'Impact of Gender Diversity and Equality Initiatives',
    authors: ['spkr0124', 'spkr0125', 'spkr0126', 'spkr0127', 'spkr0128', 'spkr0129']
}, {
    _id: 'spkr0124',
    firstName: 'Poonam',
    lastName: 'Yadav'
}, {
    _id: 'spkr0125',
    firstName: 'Mariam',
    lastName: 'Kiran'
}, {
    _id: 'spkr0126',
    firstName: 'Amel',
    lastName: 'Bennaceur'
}, {
    _id: 'spkr0127',
    firstName: 'Lilia',
    lastName: 'Georgieva'
}, {
    _id: 'spkr0128',
    firstName: 'Maria',
    lastName: 'Salama'
}, {
    _id: 'spkr0129',
    firstName: 'Amparo Eliza',
    lastName: 'Cano'
}, {
    _id: 'pstr0038',
    title: 'Radio Control System for a Hovercraft',
    authors: ['spkr0130']
}, {
    _id: 'spkr0130',
    firstName: 'Oishi',
    lastName: 'Dep'
}, {
    _id: 'pstr0039',
    title: 'Computerised Measurement of Voice Abnormality',
    authors: ['spkr0131']
}, {
    _id: 'spkr0131',
    firstName: 'Farideh',
    lastName: 'Jalalinajafabadi'
}, {
    _id: 'pstr0040',
    title: 'Methods for Testing the Intrinsic Linearity of Paths in Network Metric Spaces',
    authors: ['spkr0132', 'spkr0133', 'spkr0134']
}, {
    _id: 'spkr0132',
    firstName: 'Maria',
    lastName: 'Astefanoaei'
}, {
    _id: 'spkr0133',
    firstName: 'Panagiota',
    lastName: 'Katsikouli'
}, {
    _id: 'spkr0134',
    firstName: 'Rik',
    lastName: 'Sarkar'
}, {
    _id: 'pstr0041',
    title: 'Privacy and Security of Electronic Health Record Systems',
    authors: ['spkr0135', 'spkr0136', 'spkr0137']
}, {
    _id: 'spkr0135',
    firstName: 'Buket',
    lastName: 'Yüksel'
}, {
    _id: 'spkr0136',
    firstName: 'Alptekin',
    lastName: 'Küpçü'
}, {
    _id: 'spkr0137',
    firstName: 'Öznur',
    lastName: 'Özkasap'
}]);

/* Workshop organizers */
db.bulkDocs([{
    _id: 'spkr0138',
    firstName: 'Beverly',
    lastName: 'Bachmayer'
}, {
    _id: 'spkr0139',
    firstName: 'Kanya',
    lastName: 'Subramanian'
}, {
    _id: 'spkr0140',
    firstName: 'Teodora',
    lastName: 'Szasz'
}, {
    _id: 'spkr0141',
    firstName: 'Bozena',
    lastName: 'Mannova'
}, {
    _id: 'spkr0142',
    firstName: 'Nadia',
    lastName: 'Zabehi',
    affiliation: 'Huawei'
}]);

/* Extra Industry Talks speakers */
db.bulkDocs([{
    _id: 'spkr0144',
    firstName: 'Jon',
    lastName: 'Bergenheim',
    affiliation: 'Skype/Microsoft'
}, {
    _id: 'spkr0145',
    firstName: 'Irina',
    lastName: 'Koitz',
    affiliation: 'Google'
}]);

/* Sponsors & supporters */
db.bulkDocs([{
    _id: 'supp0001',
    name: 'Google',
    logo: 'google.png',
    tier: 'diamond'
}, {
    _id: 'supp0002',
    name: 'Inria Informatics Mathematics',
    logo: 'inria-informatics-mathematics.png',
    tier: 'diamond'
}, {
    _id: 'supp0003',
    name: 'Oracle Academy',
    logo: 'oracle-academy.png',
    tier: 'diamond'
}, {
    _id: 'supp0004',
    name: 'Bloomberg',
    logo: 'bloomberg.png',
    tier: 'platinum'
}, {
    _id: 'supp0005',
    name: 'Cisco',
    logo: 'cisco.png',
    tier: 'platinum'
}, {
    _id: 'supp0006',
    name: 'Facebook',
    logo: 'facebook.png',
    tier: 'platinum'
}, {
    _id: 'supp0007',
    name: 'IAR Systems',
    logo: 'iar-systems.png',
    tier: 'gold'
}, {
    _id: 'supp0008',
    name: 'The FreeBSD Foundation',
    logo: 'the-freebsd-foundation.png',
    tier: 'silver'
}, {
    _id: 'supp0009',
    name: 'Informatics Europe',
    logo: 'informatics-europe.png',
    tier: 'silver'
}, {
    _id: 'supp0010',
    name: 'Intel',
    logo: 'intel.png',
    tier: 'silver'
}, {
    _id: 'supp0011',
    name: 'Microsoft Research Connections',
    logo: 'microsoft-research-connections.png',
    tier: 'silver'
}, {
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

/* Information pages */
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
        content: 'This app was developed by three IT students at Uppsala University: Johan Gille, Jimmy Helmersson and Robert Källgren. You can contact us via email address robert.kallgren.9616@student.it.uu.se'
    }, {
        title: 'Device Support',
        content: 'The app is supported on most devices with a modern web browser. However, the export function is currently only supported in Google Chrome, Firefox and Opera. For an optimal experience, Google Chrome is recommended.'
    }, {
        title: 'Offline Capabilities',
        content: 'The app has full offline support. You simply just need to visit it once, and everything will still be available if you lose your internet connection. You can even close or refresh your browser when offline without losing access to the app. This is possible because all the data gets cached locally on your device. The cache will take up approximately 7MB in disk space space. If this is undesired, you can clear your browsing data when you no longer want to use the app.'
    }, {
        title: 'My Schedule',
        content: 'Your personalized schedule is automatically saved locally in your web browser, so you can close or refresh the web page and still have your schedule available the next time you visit the app.'
    }, {
        title: 'Feedback',
        content: 'Is some feature missing or not quite working in the way you would expect? We gladly appreciate all the feedback you can give us!',
        buttontext: 'App Feedback Form',
        formurl: 'http://goo.gl/forms/p3czZK9ZSZ'
    }]
}, {
    _id: 'conference-feedback',
    sections: [{
        title: 'Make your voice heard!',
        content: 'Please let us know what you thought about the conference activities in the forms listed below. Your answers mean a lot to us as they help us improve. Thanks for your participation!'
    }],
    forms: [{
        title: 'Case studies Feedback',
        url: 'https://docs.google.com/forms/d/1j2G-lwKNfyI1mJZSSWT7S29xGqJP9crcuF8S8mBkyaI/viewform'
    }, {
        title: 'Industry Talks Feedback',
        url: 'https://docs.google.com/forms/d/1h6DVPRv5EEW2alL73R8O8By17MbRod_AH6oryi3QaLU/viewform'
    }, {
        title: 'Career Fair Feedback',
        url: 'https://docs.google.com/forms/d/1JxWKGlWrx7EdrCYTj4W5xssWPE_hZhUGN7oxj6AHbac/viewform'
    }, {
        title: 'Panels Feedback',
        url: 'https://docs.google.com/forms/d/1bmUypDIpnesWEOOjIz-6BVfhEkqzz_JlyWKue0Zp9As/viewform'
    }, {
        title: 'Posters Feedback',
        url: 'https://docs.google.com/forms/d/1WayHN7ZTTU52k0ZxrBwwpTiT-OGWFEfOnwMPo2SbU7c/viewform'
    }, {
        title: 'Unconference Feedback',
        url: 'https://docs.google.com/forms/d/1KYyga6qYas8CEy-jp-WJeMWsv3LFEjiitlb51hx1wCY/viewform'
    }, {
        title: 'Papers Feedback',
        url: 'https://docs.google.com/forms/d/1Hm4pAOb4pNvwV9kweIa1jwX8da03NRj1RT0zwg75xCs/viewform'
    }, {
        title: 'Workshop Feedback',
        url: 'https://docs.google.com/forms/d/1CDbdTIaja5AhCK_6ZImonKyA4_BnS4ywJ-FR4CQ-Jvc/viewform'
    }]
}]);