const WORLD_DATA = {
  africa: {
    name: "Africa",
    emoji: "🌍",
    color: "#F4A261",
    glowColor: "#F4A26180",
    description: "The land of safaris and the Sahara Desert!",
    trains: [
      { name: "The Blue Train", emoji: "🚂", fact: "A super fancy hotel on wheels that travels 1,600 km across South Africa with crystal glasses and fancy beds!", image: "images/trains/blue_train.jpg" },
      { name: "Rovos Rail", emoji: "🚂", fact: "Called the most luxurious train in the world — it has real wood furniture and a fancy dining car!" },
      { name: "Madaraka Express", emoji: "🚂", fact: "Kenya's modern train zooms between Nairobi and Mombasa in just 4.5 hours!", image: "images/trains/madaraka_express.png" },
      { name: "Al Boraq", emoji: "🚂", fact: "Africa's very first high-speed train in Morocco goes 320 km/h — as fast as a race car!" }
    ],
    countries: {
      kenya: {
        name: "Kenya",
        capital: "Nairobi",
        flag: "🇰🇪",
        animals: [
          { name: 'Lion', emoji: '🦁', fact: 'Lions are the king of the jungle!' },
          { name: 'Elephant', emoji: '🐘', fact: 'Elephants never forget!' },
          { name: 'Giraffe', emoji: '🦒', fact: 'Giraffes are the tallest animals!' }
        ],
        monuments: [
          { name: 'Masai Mara', emoji: '🏞️', fact: 'Millions of animals walk across this park every year!' },
          { name: 'Mount Kenya', emoji: '🏔️', fact: 'This tall mountain has snow on top even though Kenya is hot!' }
        ],
        geology: [
          { name: 'Great Rift Valley', emoji: '🏜️', fact: 'A giant crack in the Earth stretching thousands of miles!' }
        ],
        trains: [
          { name: 'Madaraka Express', emoji: '🚂', fact: 'A brand new modern train that zooms between Nairobi and the coast!', image: "images/trains/madaraka_express.png" }
        ],
        funFact: "Kenya is home to the fastest long-distance runners in the world!"
      },
      egypt: {
        name: "Egypt",
        capital: "Cairo",
        flag: "🇪🇬",
        animals: [
          { name: 'Camel', emoji: '🐪', fact: 'Camels can go weeks without drinking water!' },
          { name: 'Nile Crocodile', emoji: '🐊', fact: 'These crocs can be as long as a car!' },
          { name: 'Scarab Beetle', emoji: '🪲', fact: 'Ancient Egyptians thought these beetles were magical!' }
        ],
        monuments: [
          { name: 'Pyramids of Giza', emoji: '🏛️', fact: 'Built over 4,000 years ago — older than almost anything!' },
          { name: 'Sphinx', emoji: '🗿', fact: 'A huge statue with a lion body and a human head!' }
        ],
        geology: [
          { name: 'Nile River', emoji: '🌊', fact: 'The longest river in Africa!' },
          { name: 'Sahara Desert', emoji: '🏜️', fact: 'The biggest hot desert in the whole world!' }
        ],
        trains: [
          { name: 'Egyptian Railways', emoji: '🚂', fact: 'The oldest railway in Africa, built in 1854 — even older than your great-great-grandparents!' }
        ],
        funFact: "Ancient Egyptians invented toothpaste!"
      },
      southAfrica: {
        name: "South Africa",
        capital: "Pretoria",
        flag: "🇿🇦",
        animals: [
          { name: 'Penguin', emoji: '🐧', fact: 'African penguins live on beaches, not ice!' },
          { name: 'Rhino', emoji: '🦏', fact: 'Rhinos have super thick skin like armor!' },
          { name: 'Great White Shark', emoji: '🦈', fact: 'These sharks can jump out of the water!' }
        ],
        monuments: [
          { name: 'Table Mountain', emoji: '🏔️', fact: 'A flat-topped mountain that looks like a giant table!' },
          { name: 'Kruger National Park', emoji: '🏞️', fact: 'One of the biggest animal parks in the world!' }
        ],
        geology: [
          { name: 'Drakensberg Mountains', emoji: '⛰️', fact: 'Dragon Mountains — they look like dragon teeth!' },
          { name: 'Garden Route', emoji: '🌿', fact: 'A road through the most beautiful forests and beaches!' }
        ],
        trains: [
          { name: 'The Blue Train', emoji: '🚂', fact: 'A luxury hotel on wheels traveling 1,600 km across beautiful South African mountains!', image: 'images/trains/blue_train.jpg' },
          { name: 'Rovos Rail', emoji: '🚂', fact: 'Called the most luxurious train in the world with real wood furniture!' }
        ],
        funFact: "South Africa has three capital cities!"
      },
      madagascar: {
        name: "Madagascar",
        capital: "Antananarivo",
        flag: "🇲🇬",
        animals: [
          { name: 'Lemur', emoji: '🐒', fact: 'Lemurs only live on this island!' },
          { name: 'Chameleon', emoji: '🦎', fact: 'Chameleons can change color and look two ways at once!' },
          { name: 'Fossa', emoji: '🐱', fact: 'A cat-like animal that\'s the top hunter here!' }
        ],
        monuments: [
          { name: 'Avenue of Baobabs', emoji: '🌳', fact: 'Giant upside-down looking trees in a row!' },
          { name: 'Royal Hill', emoji: '🏛️', fact: 'Where kings and queens lived long ago!' }
        ],
        geology: [
          { name: 'Tsingy de Bemaraha', emoji: '🪨', fact: 'A forest of razor-sharp stone needles!' }
        ],
        funFact: "Madagascar split from Africa millions of years ago!"
      },
      algeria: {
        name: "Algeria",
        capital: "Algiers",
        flag: "🇩🇿",
        animals: [
          { name: 'Fennec Fox', emoji: '🦊', fact: 'The tiniest fox with the biggest ears!' },
          { name: 'Barbary Macaque', emoji: '🐒', fact: 'These monkeys live in the mountains!' }
        ],
        monuments: [
          { name: 'Casbah of Algiers', emoji: '🏛️', fact: 'An ancient maze of tiny streets on a hill!' },
          { name: 'Timgad', emoji: '🏛️', fact: 'A ruined Roman city in the desert!' }
        ],
        geology: [
          { name: 'Sahara Desert', emoji: '🏜️', fact: 'Most of Algeria is covered by the Sahara!' },
          { name: 'Tassili n\'Ajjer', emoji: '🪨', fact: 'Ancient rock paintings thousands of years old!' }
        ],
        funFact: "Algeria is the biggest country in Africa!"
      },
      morocco: {
        name: "Morocco",
        capital: "Rabat",
        flag: "🇲🇦",
        animals: [
          { name: 'Barbary Lion', emoji: '🦁', fact: 'The biggest lions that ever lived!' },
          { name: 'Dromedary Camel', emoji: '🐪', fact: 'One hump camels used for desert travel!' }
        ],
        monuments: [
          { name: 'Hassan II Mosque', emoji: '🕌', fact: 'One of the biggest mosques in the world — right by the ocean!' },
          { name: 'Jemaa el-Fna', emoji: '🎪', fact: 'A huge square full of music, food, and snake charmers!' }
        ],
        geology: [
          { name: 'Atlas Mountains', emoji: '🏔️', fact: 'Snowy mountains in the middle of Africa!' },
          { name: 'Sahara Dunes', emoji: '🏜️', fact: 'Sand dunes taller than buildings!' }
        ],
        trains: [
          { name: 'Al Boraq', emoji: '🚂', fact: 'Africa\'s first high-speed train goes 320 km/h between Tangier and Casablanca!' }
        ],
        funFact: "Morocco is just 9 miles from Europe across the water!"
      },
      nigeria: {
        name: "Nigeria",
        capital: "Abuja",
        flag: "🇳🇬",
        animals: [
          { name: 'Gorilla', emoji: '🦍', fact: 'Gorillas are super strong but very gentle!' },
          { name: 'African Grey Parrot', emoji: '🦜', fact: 'The smartest talking bird in the world!' }
        ],
        monuments: [
          { name: 'Zuma Rock', emoji: '🪨', fact: 'A giant rock that looks like a face!' },
          { name: 'Olumo Rock', emoji: '🪨', fact: 'An ancient hiding place and fortress!' }
        ],
        geology: [
          { name: 'Niger River', emoji: '🌊', fact: 'A huge river shaped like a boomerang!' },
          { name: 'Yankari Springs', emoji: '♨️', fact: 'Warm water springs where elephants come to bathe!' }
        ],
        funFact: "Nigeria has more people than any other country in Africa!"
      },
      ethiopia: {
        name: "Ethiopia",
        capital: "Addis Ababa",
        flag: "🇪🇹",
        animals: [
          { name: 'Gelada Baboon', emoji: '🐒', fact: 'These monkeys only live in Ethiopia!' },
          { name: 'Ethiopian Wolf', emoji: '🐺', fact: 'The rarest wolf in the world!' }
        ],
        monuments: [
          { name: 'Lalibela Churches', emoji: '⛪', fact: 'Churches carved out of solid rock!' },
          { name: 'Aksum Obelisks', emoji: '🗿', fact: 'Tall stone towers from an ancient kingdom!' }
        ],
        geology: [
          { name: 'Simien Mountains', emoji: '🏔️', fact: 'Mountains so tall they touch the clouds!' },
          { name: 'Danakil Depression', emoji: '🌋', fact: 'One of the hottest places on Earth with colorful pools!' }
        ],
        funFact: "Ethiopia has its own calendar — it\'s 7 years behind ours!"
      },
      tanzania: {
        name: "Tanzania",
        capital: "Dodoma",
        flag: "🇹🇿",
        animals: [
          { name: 'Wildebeest', emoji: '🐃', fact: 'Millions of them run together every year!' },
          { name: 'Cheetah', emoji: '🐆', fact: 'The fastest animal on land!' },
          { name: 'Flamingo', emoji: '🦩', fact: 'Thousands of pink birds fill the lakes!' }
        ],
        monuments: [
          { name: 'Mount Kilimanjaro', emoji: '🏔️', fact: 'The tallest mountain in Africa — you can see snow!' },
          { name: 'Serengeti', emoji: '🏞️', fact: 'Where the great animal migration happens!' }
        ],
        geology: [
          { name: 'Ngorongoro Crater', emoji: '🌋', fact: 'A huge crater with animals living inside!' },
          { name: 'Zanzibar', emoji: '🏝️', fact: 'A beautiful island with white sand beaches!' }
        ],
        funFact: "Mount Kilimanjaro is the tallest free-standing mountain in the world!"
      },
      ghana: {
        name: "Ghana",
        capital: "Accra",
        flag: "🇬🇭",
        animals: [
          { name: 'Elephant', emoji: '🐘', fact: 'Forest elephants live in Ghana\'s forests!' },
          { name: 'Parrot', emoji: '🦜', fact: 'Colorful birds fill the treetops!' }
        ],
        monuments: [
          { name: 'Cape Coast Castle', emoji: '🏰', fact: 'A castle by the sea with important history!' },
          { name: 'Kakum National Park', emoji: '🌳', fact: 'Walk on bridges high up in the treetops!' }
        ],
        geology: [
          { name: 'Lake Volta', emoji: '🌊', fact: 'One of the biggest man-made lakes in the world!' }
        ],
        funFact: "Ghana means \'Warrior King\'!"
      },
      mauritius: {
        name: "Mauritius",
        capital: "Port Louis",
        flag: "🇲🇺",
        animals: [
          { name: 'Dodo (extinct)', emoji: '🦤', fact: 'The famous dodo bird used to live only here!' },
          { name: 'Pink Pigeon', emoji: '🕊️', fact: 'A very rare pigeon that was almost extinct!' }
        ],
        monuments: [
          { name: 'Aapravasi Ghat', emoji: '🏛️', fact: 'Where people from India first arrived long ago!' }
        ],
        geology: [
          { name: 'Underwater Waterfall', emoji: '🌊', fact: 'An underwater illusion that looks like a waterfall in the ocean!' },
          { name: 'Seven Colored Earths', emoji: '🌈', fact: 'Sand dunes in seven different colors!' }
        ],
        funFact: "The dodo bird only ever lived on Mauritius!"
      },
      tunisia: {
        name: "Tunisia",
        capital: "Tunis",
        flag: "🇹🇳",
        animals: [
          { name: 'Jerboa', emoji: '🐁', fact: 'A tiny mouse that jumps like a kangaroo!' },
          { name: 'Fennec Fox', emoji: '🦊', fact: 'The national animal with huge ears!' }
        ],
        monuments: [
          { name: 'Carthage Ruins', emoji: '🏛️', fact: 'Ruins of an ancient city that rivaled Rome!' },
          { name: 'Star Wars Sets', emoji: '🎬', fact: 'They filmed Star Wars in the Tunisian desert!' }
        ],
        geology: [
          { name: 'Sahara Desert', emoji: '🏜️', fact: 'The desert starts in southern Tunisia!' }
        ],
        funFact: "Parts of Star Wars were filmed in Tunisia!"
      },
      libya: {
        name: "Libya",
        capital: "Tripoli",
        flag: "🇱🇾",
        animals: [
          { name: 'Fennec Fox', emoji: '🦊', fact: 'Tiny desert foxes with huge ears!' },
          { name: 'Desert Monitor', emoji: '🦎', fact: 'A big lizard that lives in the sand!' }
        ],
        monuments: [
          { name: 'Leptis Magna', emoji: '🏛️', fact: 'One of the best-preserved Roman cities!' },
          { name: 'Old Town Tripoli', emoji: '🏘️', fact: 'A beautiful ancient walled city!' }
        ],
        geology: [
          { name: 'Sahara Desert', emoji: '🏜️', fact: 'Almost all of Libya is desert!' },
          { name: 'Ubari Sand Sea', emoji: '🏜️', fact: 'A sea of golden sand dunes!' }
        ],
        funFact: "Libya is 90% desert!"
      },
      sudan: {
        name: "Sudan",
        capital: "Khartoum",
        flag: "🇸🇩",
        animals: [
          { name: 'Nile Crocodile', emoji: '🐊', fact: 'Big crocs swimming in the Nile!' },
          { name: 'Nubian Ibex', emoji: '🐐', fact: 'Mountain goats with big curved horns!' }
        ],
        monuments: [
          { name: 'Meroe Pyramids', emoji: '🏛️', fact: 'Sudan has even MORE pyramids than Egypt!' },
          { name: 'Jebel Barkal', emoji: '🏔️', fact: 'A holy mountain with ancient temples!' }
        ],
        geology: [
          { name: 'Nile River', emoji: '🌊', fact: 'The two Niles meet in Khartoum!' },
          { name: 'Red Sea', emoji: '🌊', fact: 'Beautiful coral reefs by the coast!' }
        ],
        funFact: "Sudan has more pyramids than Egypt!"
      },
      southSudan: {
        name: "South Sudan",
        capital: "Juba",
        flag: "🇸🇸",
        animals: [
          { name: 'White-eared Kob', emoji: '🦌', fact: 'Millions of these antelopes migrate together!' },
          { name: 'Shoebill', emoji: '🦅', fact: 'A bird with a shoe-shaped beak!' }
        ],
        monuments: [
          { name: 'Boma National Park', emoji: '🏞️', fact: 'Home to one of the biggest animal migrations!' }
        ],
        geology: [
          { name: 'Sudd Wetland', emoji: '🌿', fact: 'One of the biggest swamps in the world!' },
          { name: 'Nile River', emoji: '🌊', fact: 'The mighty Nile flows through here!' }
        ],
        funFact: "South Sudan is the newest country in the world — born in 2011!"
      },
      chad: {
        name: "Chad",
        capital: "N\'Djamena",
        flag: "🇹🇩",
        animals: [
          { name: 'Elephant', emoji: '🐘', fact: 'Desert elephants survive in the Sahara here!' },
          { name: 'Addax', emoji: '🦌', fact: 'A super rare white desert antelope!' }
        ],
        monuments: [
          { name: 'Lakes of Ounianga', emoji: '🌊', fact: 'Beautiful desert lakes that never dry up!' }
        ],
        geology: [
          { name: 'Tibesti Mountains', emoji: '🏔️', fact: 'Volcanoes in the middle of the Sahara!' },
          { name: 'Lake Chad', emoji: '🌊', fact: 'A lake that\'s been shrinking for years!' }
        ],
        funFact: "Chad\'s flag looks just like Romania\'s flag!"
      },
      cameroon: {
        name: "Cameroon",
        capital: "Yaoundé",
        flag: "🇨🇲",
        animals: [
          { name: 'Gorilla', emoji: '🦍', fact: 'Amazing mountain gorillas live here!' },
          { name: 'Mandrill', emoji: '🐒', fact: 'The most colorful monkey in the world!' }
        ],
        monuments: [
          { name: 'Mount Cameroon', emoji: '🌋', fact: 'The highest mountain in West Africa — it\'s a volcano!' },
          { name: 'Waza National Park', emoji: '🏞️', fact: 'Where you can see elephants and lions!' }
        ],
        geology: [
          { name: 'Mount Cameroon Volcano', emoji: '🌋', fact: 'An active volcano near the coast!' },
          { name: 'Lake Nyos', emoji: '🌊', fact: 'A dangerous lake that once burped deadly gas!' }
        ],
        funFact: "Cameroon is called \'Africa in miniature\' because it has everything!"
      },
      senegal: {
        name: "Senegal",
        capital: "Dakar",
        flag: "🇸🇳",
        animals: [
          { name: 'Lion', emoji: '🦁', fact: 'Lions roam in Senegal\'s parks!' },
          { name: 'Pelican', emoji: '🦅', fact: 'Huge flocks of pelicans visit every year!' }
        ],
        monuments: [
          { name: 'Goree Island', emoji: '🏝️', fact: 'A tiny island with important history!' },
          { name: 'African Renaissance Monument', emoji: '🗽', fact: 'The tallest statue in Africa!' }
        ],
        geology: [
          { name: 'Lake Retba', emoji: '🌊', fact: 'A bright PINK lake — yes, really pink!' },
          { name: 'Casamance River', emoji: '🌊', fact: 'A beautiful river through lush forests!' }
        ],
        funFact: "Senegal has a lake that\'s bright pink!"
      },
      mali: {
        name: "Mali",
        capital: "Bamako",
        flag: "🇲🇱",
        animals: [
          { name: 'Elephant', emoji: '🐘', fact: 'Desert elephants walk through Mali!' },
          { name: 'Hippopotamus', emoji: '🦛', fact: 'Hippos swim in the Niger River!' }
        ],
        monuments: [
          { name: 'Great Mosque of Djenné', emoji: '🕌', fact: 'The biggest mud building in the world!' },
          { name: 'Timbuktu', emoji: '📚', fact: 'An ancient city of learning and books!' }
        ],
        geology: [
          { name: 'Niger River', emoji: '🌊', fact: 'A lifeline through the desert!' },
          { name: 'Sahara Desert', emoji: '🏜️', fact: 'Golden sand dunes in the north!' }
        ],
        funFact: "Timbuktu was once the richest city in the world!"
      },
      niger: {
        name: "Niger",
        capital: "Niamey",
        flag: "🇳🇪",
        animals: [
          { name: 'Giraffe', emoji: '🦒', fact: 'West African giraffes live here!' },
          { name: 'Addax', emoji: '🦌', fact: 'Super rare white desert antelopes!' }
        ],
        monuments: [
          { name: 'Sultan\'s Palace', emoji: '🏛️', fact: 'A beautiful palace of the traditional ruler!' },
          { name: 'Agadez Mosque', emoji: '🕌', fact: 'A pointy mud mosque in the desert!' }
        ],
        geology: [
          { name: 'Sahara Desert', emoji: '🏜️', fact: 'Huge sand dunes stretch across the north!' },
          { name: 'Aïr Mountains', emoji: '🏔️', fact: 'Mountains rising from the desert!' }
        ],
        funFact: "Niger is named after the great Niger River!"
      },
      burkinaFaso: {
        name: "Burkina Faso",
        capital: "Ouagadougou",
        flag: "🇧🇫",
        animals: [
          { name: 'Elephant', emoji: '🐘', fact: 'Elephants roam the savanna here!' },
          { name: 'Crocodile', emoji: '🐊', fact: 'Sacred crocodiles live in special pools!' }
        ],
        monuments: [
          { name: 'Ruins of Loropéni', emoji: '🏛️', fact: 'Ancient stone walls from long ago!' },
          { name: 'Grand Mosque of Bobo-Dioulasso', emoji: '🕌', fact: 'A beautiful mud mosque!' }
        ],
        geology: [
          { name: 'Banfora Cascades', emoji: '🌊', fact: 'Beautiful waterfalls in the south!' }
        ],
        funFact: "Burkina Faso means \'Land of Honest People\'!"
      },
      guineaBissau: {
        name: "Guinea-Bissau",
        capital: "Bissau",
        flag: "🇬🇼",
        animals: [
          { name: 'Hippopotamus', emoji: '🦛', fact: 'Hippos even swim in the ocean here!' },
          { name: 'Chimpanzee', emoji: '🐒', fact: 'Smart chimps live in the forests!' }
        ],
        monuments: [
          { name: 'Bijagós Archipelago', emoji: '🏝️', fact: 'Beautiful islands full of wildlife!' }
        ],
        geology: [
          { name: 'Mangrove Forests', emoji: '🌳', fact: 'Trees that grow right in the water!' }
        ],
        funFact: "Guinea-Bissau is one of the smallest countries in Africa!"
      },
      guinea: {
        name: "Guinea",
        capital: "Conakry",
        flag: "🇬🇳",
        animals: [
          { name: 'Chimpanzee', emoji: '🐒', fact: 'Guinea has lots of wild chimps!' },
          { name: 'Pygmy Hippo', emoji: '🦛', fact: 'Tiny hippos — half the size of regular ones!' }
        ],
        monuments: [
          { name: 'Fouta Djallon Highlands', emoji: '🏔️', fact: 'Beautiful green mountains and waterfalls!' }
        ],
        geology: [
          { name: 'Niger River Source', emoji: '🌊', fact: 'The great Niger River starts here!' },
          { name: 'Mount Nimba', emoji: '🏔️', fact: 'A mountain shared by three countries!' }
        ],
        funFact: "The Niger River begins in tiny Guinea!"
      },
      sierraLeone: {
        name: "Sierra Leone",
        capital: "Freetown",
        flag: "🇸🇱",
        animals: [
          { name: 'Pygmy Hippo', emoji: '🦛', fact: 'Tiny hippos live in the forests!' },
          { name: 'Chimpanzee', emoji: '🐒', fact: 'Chimps play in Sierra Leone\'s forests!' }
        ],
        monuments: [
          { name: 'Cotton Tree', emoji: '🌳', fact: 'A giant tree in the middle of the capital!' },
          { name: 'Bunce Island', emoji: '🏝️', fact: 'A historic island in the harbor!' }
        ],
        geology: [
          { name: 'Tiwai Island', emoji: '🏝️', fact: 'An island wildlife sanctuary!' },
          { name: 'River No. 2 Beach', emoji: '🏖️', fact: 'One of the most beautiful beaches in West Africa!' }
        ],
        funFact: "Sierra Leone means \'Lion Mountains\'!"
      },
      liberia: {
        name: "Liberia",
        capital: "Monrovia",
        flag: "🇱🇷",
        animals: [
          { name: 'Pygmy Hippo', emoji: '🦛', fact: 'One of the rarest animals in Africa!' },
          { name: 'Chimpanzee', emoji: '🐒', fact: 'Smart chimps in the rainforest!' }
        ],
        monuments: [
          { name: 'Providence Island', emoji: '🏝️', fact: 'Where the first settlers arrived!' }
        ],
        geology: [
          { name: 'Sapo National Park', emoji: '🌳', fact: 'The biggest tropical rainforest in West Africa!' },
          { name: 'Mount Wuteve', emoji: '🏔️', fact: 'The tallest mountain in Liberia!' }
        ],
        funFact: "Liberia\'s flag looks a lot like the American flag!"
      },
      ivoryCoast: {
        name: "Ivory Coast",
        capital: "Yamoussoukro",
        flag: "🇨🇮",
        animals: [
          { name: 'Elephant', emoji: '🐘', fact: 'The country is named after elephant ivory!' },
          { name: 'Hippopotamus', emoji: '🦛', fact: 'Hippos swim in the rivers!' }
        ],
        monuments: [
          { name: 'Basilica of Our Lady of Peace', emoji: '⛪', fact: 'The biggest church in the WORLD!' },
          { name: 'Grand-Bassam', emoji: '🏘️', fact: 'A beautiful old colonial town!' }
        ],
        geology: [
          { name: 'Taï National Park', emoji: '🌳', fact: 'One of the last bits of ancient forest in West Africa!' }
        ],
        funFact: "Ivory Coast has the biggest church in the world!"
      },
      togo: {
        name: "Togo",
        capital: "Lomé",
        flag: "🇹🇬",
        animals: [
          { name: 'Monkey', emoji: '🐒', fact: 'Many monkey species in the forests!' },
          { name: 'Crocodile', emoji: '🐊', fact: 'Sacred crocodiles in village ponds!' }
        ],
        monuments: [
          { name: 'Tata Somba Houses', emoji: '🏠', fact: 'Fortress-like houses made of mud!' },
          { name: 'Koutammakou', emoji: '🏘️', fact: 'A landscape of tower houses — a World Heritage Site!' }
        ],
        geology: [
          { name: 'Mount Agou', emoji: '🏔️', fact: 'The tallest point in Togo!' }
        ],
        funFact: "Togo is one of the smallest countries in Africa!"
      },
      benin: {
        name: "Benin",
        capital: "Porto-Novo",
        flag: "🇧🇯",
        animals: [
          { name: 'Elephant', emoji: '🐘', fact: 'Elephants in Pendjari Park!' },
          { name: 'Python', emoji: '🐍', fact: 'Pythons are sacred in some villages!' }
        ],
        monuments: [
          { name: 'Royal Palaces of Abomey', emoji: '🏛️', fact: 'Palaces of the ancient kings!' },
          { name: 'Ganvié', emoji: '🏘️', fact: 'A whole village built on stilts in a lake!' }
        ],
        geology: [
          { name: 'Pendjari National Park', emoji: '🏞️', fact: 'Wild animals in beautiful savanna!' }
        ],
        funFact: "Benin has a village that floats on water!"
      },
      gambia: {
        name: "Gambia",
        capital: "Banjul",
        flag: "🇬🇲",
        animals: [
          { name: 'Hippo', emoji: '🦛', fact: 'Hippos in the Gambia River!' },
          { name: 'Baboon', emoji: '🐒', fact: 'Troops of baboons in the parks!' }
        ],
        monuments: [
          { name: 'Kunta Kinteh Island', emoji: '🏝️', fact: 'A historic island in the river!' },
          { name: 'Stone Circles', emoji: '🪨', fact: 'Mysterious ancient stone circles!' }
        ],
        geology: [
          { name: 'Gambia River', emoji: '🌊', fact: 'The whole country follows this river!' }
        ],
        funFact: "Gambia is the smallest country on mainland Africa!"
      },
      mauritania: {
        name: "Mauritania",
        capital: "Nouakchott",
        flag: "🇲🇷",
        animals: [
          { name: 'Camel', emoji: '🐪', fact: 'Camels are everywhere in the desert!' },
          { name: 'Monk Seal', emoji: '🦭', fact: 'Super rare seals on the coast!' }
        ],
        monuments: [
          { name: 'Chinguetti', emoji: '🏘️', fact: 'An ancient desert library city!' },
          { name: 'Iron Ore Train', emoji: '🚂', fact: 'One of the longest trains in the world!' }
        ],
        geology: [
          { name: 'Sahara Desert', emoji: '🏜️', fact: 'Almost all of Mauritania is desert!' },
          { name: 'Eye of the Sahara', emoji: '👁️', fact: 'A huge mysterious circle in the desert!' }
        ],
        funFact: "Mauritania has one of the longest trains in the world!"
      },
      eritrea: {
        name: "Eritrea",
        capital: "Asmara",
        flag: "🇪🇷",
        animals: [
          { name: 'Dugong', emoji: '🐋', fact: 'Sea cows that munch on seagrass!' },
          { name: 'Gazelle', emoji: '🦌', fact: 'Graceful gazelles in the highlands!' }
        ],
        monuments: [
          { name: 'Asmara Art Deco', emoji: '🏛️', fact: 'A city full of beautiful old buildings!' },
          { name: 'Dahlak Islands', emoji: '🏝️', fact: 'Beautiful islands in the Red Sea!' }
        ],
        geology: [
          { name: 'Red Sea Coast', emoji: '🌊', fact: 'Crystal clear water with amazing fish!' },
          { name: 'Danakil Depression', emoji: '🌋', fact: 'One of the hottest places with colorful pools!' }
        ],
        funFact: "Asmara is called the \'City of Art Deco\'!"
      },
      djibouti: {
        name: "Djibouti",
        capital: "Djibouti",
        flag: "🇩🇯",
        animals: [
          { name: 'Whale Shark', emoji: '🦈', fact: 'The biggest fish visit Djibouti\'s waters!' },
          { name: 'Flamingo', emoji: '🦩', fact: 'Pink flamingos on the salt lakes!' }
        ],
        monuments: [
          { name: 'Lake Assal', emoji: '🌊', fact: 'The saltiest lake in Africa!' }
        ],
        geology: [
          { name: 'Lake Assal', emoji: '🏜️', fact: 'So salty that everything floats!' },
          { name: 'Ardoukoba Volcano', emoji: '🌋', fact: 'A volcano that last erupted in 1978!' }
        ],
        funFact: "Lake Assal is the lowest point in Africa!"
      },
      somalia: {
        name: "Somalia",
        capital: "Mogadishu",
        flag: "🇸🇴",
        animals: [
          { name: 'Camel', emoji: '🐪', fact: 'Somalia has more camels than any country!' },
          { name: 'Lion', emoji: '🦁', fact: 'Lions in the wild grasslands!' }
        ],
        monuments: [
          { name: 'Laas Geel Caves', emoji: '🎨', fact: 'Cave paintings 5,000 years old!' },
          { name: 'Mogadishu Cathedral', emoji: '⛪', fact: 'An old Italian-style cathedral!' }
        ],
        geology: [
          { name: 'Jubba River', emoji: '🌊', fact: 'A big river through southern Somalia!' },
          { name: 'Cal Madow Mountains', emoji: '🏔️', fact: 'Mountains with misty forests!' }
        ],
        funFact: "Somalia has the longest coast in mainland Africa!"
      },
      centralAfricanRepublic: {
        name: "Central African Republic",
        capital: "Bangui",
        flag: "🇨🇫",
        animals: [
          { name: 'Gorilla', emoji: '🦍', fact: 'Lowland gorillas in the forests!' },
          { name: 'Forest Elephant', emoji: '🐘', fact: 'Smaller elephants that live in forests!' }
        ],
        monuments: [
          { name: 'Dzanga-Sangha Reserve', emoji: '🏞️', fact: 'Where gorillas and elephants live together!' },
          { name: 'Bangui M\'Poko River', emoji: '🌊', fact: 'The capital sits on this big river!' }
        ],
        geology: [
          { name: 'Boali Falls', emoji: '🌊', fact: 'Beautiful waterfalls near the capital!' }
        ],
        funFact: "The Central African Republic is right in the middle of Africa!"
      },
      equatorialGuinea: {
        name: "Equatorial Guinea",
        capital: "Malabo",
        flag: "🇬🇶",
        animals: [
          { name: 'Gorilla', emoji: '🦍', fact: 'Gorillas in the island forests!' },
          { name: 'Sea Turtle', emoji: '🐢', fact: 'Turtles nest on the beaches!' }
        ],
        monuments: [
          { name: 'Pico Basile', emoji: '🌋', fact: 'A tall volcano on an island!' },
          { name: 'Malabo Cathedral', emoji: '⛪', fact: 'A beautiful colonial cathedral!' }
        ],
        geology: [
          { name: 'Monte Alén', emoji: '🌳', fact: 'Thick tropical rainforest with rare animals!' }
        ],
        funFact: "Equatorial Guinea is one of the smallest countries in Africa!"
      },
      gabon: {
        name: "Gabon",
        capital: "Libreville",
        flag: "🇬🇦",
        animals: [
          { name: 'Gorilla', emoji: '🦍', fact: 'Famous for its silverback gorillas!' },
          { name: 'Mandrill', emoji: '🐒', fact: 'The most colorful monkey face!' },
          { name: 'Forest Elephant', emoji: '🐘', fact: 'Smaller elephants that love the forest!' }
        ],
        monuments: [
          { name: 'Lopé National Park', emoji: '🏞️', fact: 'Gorillas and elephants together!' },
          { name: 'St. Michael\'s Church', emoji: '⛪', fact: 'A cool church made entirely of metal!' }
        ],
        geology: [
          { name: 'Crystal Mountains', emoji: '🏔️', fact: 'Beautiful jungle-covered mountains!' }
        ],
        funFact: "80% of Gabon is covered in thick rainforest!"
      },
      congo: {
        name: "Congo",
        capital: "Brazzaville",
        flag: "🇨🇬",
        animals: [
          { name: 'Gorilla', emoji: '🦍', fact: 'Western lowland gorillas!' },
          { name: 'Chimpanzee', emoji: '🐒', fact: 'Smart chimps in the forest!' }
        ],
        monuments: [
          { name: 'Basilique Sainte-Anne', emoji: '⛪', fact: 'A beautiful green-roofed church!' },
          { name: 'Brazzaville', emoji: '🏙️', fact: 'Right across the river from another capital!' }
        ],
        geology: [
          { name: 'Congo River', emoji: '🌊', fact: 'The deepest river in the world!' }
        ],
        funFact: "Brazzaville and Kinshasa are the closest capital cities in the world!"
      },
      drCongo: {
        name: "DR Congo",
        capital: "Kinshasa",
        flag: "🇨🇩",
        animals: [
          { name: 'Okapi', emoji: '🦓', fact: 'A giraffe relative with zebra legs — only here!' },
          { name: 'Mountain Gorilla', emoji: '🦍', fact: 'Endangered gorillas in the mountains!' },
          { name: 'Bonobo', emoji: '🐒', fact: 'Our closest animal cousin!' }
        ],
        monuments: [
          { name: 'Virunga National Park', emoji: '🌋', fact: 'Africa\'s oldest national park with gorillas and volcanoes!' },
          { name: 'Nyiragongo Volcano', emoji: '🌋', fact: 'A volcano with a lake of lava inside!' }
        ],
        geology: [
          { name: 'Congo River', emoji: '🌊', fact: 'The deepest river in the world — 720 feet deep!' },
          { name: 'Nyiragongo', emoji: '🌋', fact: 'One of the most active volcanoes on Earth!' }
        ],
        funFact: "DR Congo has the okapi — an animal found nowhere else on Earth!"
      },
      rwanda: {
        name: "Rwanda",
        capital: "Kigali",
        flag: "🇷🇼",
        animals: [
          { name: 'Mountain Gorilla', emoji: '🦍', fact: 'You can visit gorilla families in the mountains!' },
          { name: 'Golden Monkey', emoji: '🐒', fact: 'Super cute golden-furred monkeys!' }
        ],
        monuments: [
          { name: 'Kigali Genocide Memorial', emoji: '🏛️', fact: 'A place to remember and learn!' },
          { name: 'Volcanoes National Park', emoji: '🌋', fact: 'Where mountain gorillas live!' }
        ],
        geology: [
          { name: 'Virunga Volcanoes', emoji: '🌋', fact: 'Beautiful green volcanoes in a row!' },
          { name: 'Lake Kivu', emoji: '🌊', fact: 'A huge lake with gas bubbles underneath!' }
        ],
        funFact: "Rwanda is called \'The Land of a Thousand Hills\'!"
      },
      burundi: {
        name: "Burundi",
        capital: "Gitega",
        flag: "🇧🇮",
        animals: [
          { name: 'Hippopotamus', emoji: '🦛', fact: 'Hippos in the rivers and lakes!' },
          { name: 'Chimpanzee', emoji: '🐒', fact: 'Chimps in Kibira forest!' }
        ],
        monuments: [
          { name: 'Source of the Nile', emoji: '🌊', fact: 'One of the sources of the mighty Nile River!' },
          { name: 'Gitega National Museum', emoji: '🏛️', fact: 'Learn about Burundi\'s royal history!' }
        ],
        geology: [
          { name: 'Lake Tanganyika', emoji: '🌊', fact: 'The second deepest lake in the world!' }
        ],
        funFact: "Burundi is one of the smallest countries in Africa!"
      },
      uganda: {
        name: "Uganda",
        capital: "Kampala",
        flag: "🇺🇬",
        animals: [
          { name: 'Mountain Gorilla', emoji: '🦍', fact: 'Half of all mountain gorillas live here!' },
          { name: 'Shoebill', emoji: '🦅', fact: 'A bird with a giant shoe-shaped beak!' },
          { name: 'Chimpanzee', emoji: '🐒', fact: 'Chimps swinging through the trees!' }
        ],
        monuments: [
          { name: 'Bwindi Forest', emoji: '🌳', fact: 'Home of the mountain gorillas!' },
          { name: 'Source of the Nile', emoji: '🌊', fact: 'Where the Nile begins its journey!' }
        ],
        geology: [
          { name: 'Lake Victoria', emoji: '🌊', fact: 'The biggest lake in Africa!' },
          { name: 'Rwenzori Mountains', emoji: '🏔️', fact: 'Mountains of the Moon with glaciers!' }
        ],
        funFact: "Uganda is called \'The Pearl of Africa\'!"
      },
      zambia: {
        name: "Zambia",
        capital: "Lusaka",
        flag: "🇿🇲",
        animals: [
          { name: 'Elephant', emoji: '🐘', fact: 'Huge herds of elephants!' },
          { name: 'Hippo', emoji: '🦛', fact: 'Hippos everywhere in the rivers!' }
        ],
        monuments: [
          { name: 'Victoria Falls', emoji: '🌊', fact: 'The biggest waterfall in the world — you can hear it miles away!' },
          { name: 'South Luangwa Park', emoji: '🏞️', fact: 'One of the best wildlife parks!' }
        ],
        geology: [
          { name: 'Victoria Falls', emoji: '🌊', fact: 'Called \'The Smoke That Thunders\'!' },
          { name: 'Lake Kariba', emoji: '🌊', fact: 'One of the biggest man-made lakes!' }
        ],
        funFact: "Victoria Falls is so big it creates its own rain cloud!"
      },
      angola: {
        name: "Angola",
        capital: "Luanda",
        flag: "🇦🇴",
        animals: [
          { name: 'Giant Sable Antelope', emoji: '🦌', fact: 'A majestic antelope only found here!' },
          { name: 'Gorilla', emoji: '🦍', fact: 'Gorillas in the northern forests!' }
        ],
        monuments: [
          { name: 'Fortaleza de São Miguel', emoji: '🏰', fact: 'An old fortress overlooking the sea!' },
          { name: 'Tundavala Gap', emoji: '🏞️', fact: 'A stunning cliff with amazing views!' }
        ],
        geology: [
          { name: 'Kalandula Falls', emoji: '🌊', fact: 'One of the biggest waterfalls in Africa!' },
          { name: 'Namib Desert', emoji: '🏜️', fact: 'Ancient desert stretching into Angola!' }
        ],
        funFact: "Angola\'s giant sable antelope is one of the rarest animals on Earth!"
      },
      malawi: {
        name: "Malawi",
        capital: "Lilongwe",
        flag: "🇲🇼",
        animals: [
          { name: 'Fish Eagle', emoji: '🦅', fact: 'The symbol of Malawi — a majestic hunter!' },
          { name: 'Cichlid Fish', emoji: '🐟', fact: 'Hundreds of colorful fish species in the lake!' }
        ],
        monuments: [
          { name: 'Lake Malawi', emoji: '🌊', fact: 'A huge lake full of unique colorful fish!' },
          { name: 'Mulanje Mountain', emoji: '🏔️', fact: 'A dramatic flat-topped mountain!' }
        ],
        geology: [
          { name: 'Lake Malawi', emoji: '🌊', fact: 'One of the deepest lakes with the most fish species!' },
          { name: 'Mount Mulanje', emoji: '🏔️', fact: 'The tallest mountain in southern Africa!' }
        ],
        funFact: "Lake Malawi has more fish species than any other lake!"
      },
      mozambique: {
        name: "Mozambique",
        capital: "Maputo",
        flag: "🇲🇿",
        animals: [
          { name: 'Dugong', emoji: '🐋', fact: 'Sea cows that eat seagrass!' },
          { name: 'Whale Shark', emoji: '🦈', fact: 'The biggest fish in the ocean visits here!' }
        ],
        monuments: [
          { name: 'Ilha de Moçambique', emoji: '🏝️', fact: 'A tiny island with an old Portuguese fort!' },
          { name: 'Gorongosa National Park', emoji: '🏞️', fact: 'A park that came back from nothing!' }
        ],
        geology: [
          { name: 'Bazaruto Archipelago', emoji: '🏝️', fact: 'Beautiful islands with crystal water!' },
          { name: 'Indian Ocean Coast', emoji: '🌊', fact: 'Miles and miles of beautiful beaches!' }
        ],
        funFact: "Mozambique has some of the best diving in the world!"
      },
      zimbabwe: {
        name: "Zimbabwe",
        capital: "Harare",
        flag: "🇿🇼",
        animals: [
          { name: 'Elephant', emoji: '🐘', fact: 'Huge elephant herds!' },
          { name: 'Black Rhino', emoji: '🦏', fact: 'Endangered rhinos protected here!' }
        ],
        monuments: [
          { name: 'Victoria Falls', emoji: '🌊', fact: 'One of the Seven Natural Wonders!' },
          { name: 'Great Zimbabwe', emoji: '🏛️', fact: 'Ancient stone ruins of a great kingdom!' }
        ],
        geology: [
          { name: 'Victoria Falls', emoji: '🌊', fact: 'Called Mosi-oa-Tunya — The Smoke That Thunders!' },
          { name: 'Matobo Hills', emoji: '🪨', fact: 'Huge balanced rocks millions of years old!' }
        ],
        funFact: "Great Zimbabwe was a powerful kingdom over 900 years ago!"
      },
      namibia: {
        name: "Namibia",
        capital: "Windhoek",
        flag: "🇳🇦",
        animals: [
          { name: 'Oryx', emoji: '🦌', fact: 'An antelope that can survive without water for weeks!' },
          { name: 'Desert Elephant', emoji: '🐘', fact: 'Elephants adapted to live in the desert!' }
        ],
        monuments: [
          { name: 'Sossusvlei', emoji: '🏜️', fact: 'Red sand dunes — some of the tallest in the world!' },
          { name: 'Etosha Pan', emoji: '🏞️', fact: 'A huge white salt pan full of animals!' }
        ],
        geology: [
          { name: 'Fish River Canyon', emoji: '🏜️', fact: 'The second biggest canyon in the world!' },
          { name: 'Skeleton Coast', emoji: '💀', fact: 'A foggy coast littered with shipwrecks!' }
        ],
        funFact: "Namibia has some of the darkest skies for stargazing!"
      },
      botswana: {
        name: "Botswana",
        capital: "Gaborone",
        flag: "🇧🇼",
        animals: [
          { name: 'Elephant', emoji: '🐘', fact: 'Botswana has the most elephants in the world!' },
          { name: 'Meerkat', emoji: '🐿️', fact: 'Tiny animals that stand guard for their family!' }
        ],
        monuments: [
          { name: 'Okavango Delta', emoji: '🌊', fact: 'A river that flows INTO the desert and disappears!' },
          { name: 'Chobe National Park', emoji: '🏞️', fact: 'So many elephants they\'re everywhere!' }
        ],
        geology: [
          { name: 'Okavango Delta', emoji: '🌿', fact: 'The world\'s biggest inland delta!' },
          { name: 'Kalahari Desert', emoji: '🏜️', fact: 'A huge desert home to the San people!' }
        ],
        funFact: "Botswana has more elephants than any country on Earth!"
      },
      eswatini: {
        name: "Eswatini",
        capital: "Mbabane",
        flag: "🇸🇿",
        animals: [
          { name: 'Rhino', emoji: '🦏', fact: 'Rhinos are protected here!' },
          { name: 'Hippo', emoji: '🦛', fact: 'Hippos in the rivers!' }
        ],
        monuments: [
          { name: 'Sibebe Rock', emoji: '🪨', fact: 'The second biggest rock in the world!' },
          { name: 'Reed Dance', emoji: '💃', fact: 'A huge festival with thousands of dancers!' }
        ],
        geology: [
          { name: 'Malolotja Nature Reserve', emoji: '🌿', fact: 'Beautiful mountains and grasslands!' }
        ],
        funFact: "Eswatini recently changed its name from Swaziland!"
      },
      lesotho: {
        name: "Lesotho",
        capital: "Maseru",
        flag: "🇱🇸",
        animals: [
          { name: 'Bearded Vulture', emoji: '🦅', fact: 'A bird that drops bones from the sky to eat!' },
          { name: 'Eland', emoji: '🦌', fact: 'The biggest antelope in Africa!' }
        ],
        monuments: [
          { name: 'Thaba-Bosiu', emoji: '🏔️', fact: 'A flat-topped mountain that was an ancient fortress!' }
        ],
        geology: [
          { name: 'Maletsunyana Falls', emoji: '🌊', fact: 'One of the highest single-drop waterfalls in Africa!' },
          { name: 'Drakensberg Mountains', emoji: '🏔️', fact: 'Lesotho is entirely in the mountains!' }
        ],
        funFact: "Lesotho is the only country in the world entirely above 1,000 meters!"
      }
    }
  },
  asia: {
    name: "Asia",
    emoji: "🌏",
    color: "#E76F51",
    glowColor: "#E76F5180",
    description: "The biggest continent with amazing temples and food!",
    trains: [
      { name: "Shinkansen", emoji: "🚅", fact: "Japan's bullet train goes 320 km/h and is almost never late — not even by one minute!", image: "images/trains/shinkansen_train.jpg" },
      { name: "Trans-Siberian Railway", emoji: "🚂", fact: "The longest train ride in the world at 9,289 km — it takes 7 whole days across Russia!" },
      { name: "Shanghai Maglev", emoji: "🚄", fact: "This Chinese train floats above the tracks using magnets and goes 431 km/h!", image: "images/trains/maglev.jpg" },
      { name: "Darjeeling Himalayan Railway", emoji: "🚂", fact: "A tiny toy train that puffs through tea gardens high up in India's mountains!", image: "images/trains/darjeeling_railway.jpg" },
      { name: "KTX", emoji: "🚅", fact: "South Korea's super-fast train connects Seoul to Busan in just 2.5 hours!" }
    ],
    countries: {
      india: {
        name: "India",
        capital: "New Delhi",
        flag: "🇮🇳",
        animals: [
          { name: 'Bengal Tiger', emoji: '🐅', fact: 'Tigers love to swim!' },
          { name: 'Elephant', emoji: '🐘', fact: 'Indian elephants are used for festivals!' },
          { name: 'Peacock', emoji: '🦚', fact: 'The national bird fans out beautiful feathers!' }
        ],
        monuments: [
          { name: 'Taj Mahal', emoji: '🕌', fact: 'Built by a king who loved his queen!' },
          { name: 'Red Fort', emoji: '🏰', fact: 'A huge red castle in Delhi!' }
        ],
        geology: [
          { name: 'Himalayas', emoji: '🏔️', fact: 'The tallest mountains in the world!' },
          { name: 'Ganges River', emoji: '🌊', fact: 'A sacred river millions of people visit!' }
        ],
        trains: [
          { name: 'Darjeeling Himalayan Railway', emoji: '🚂', fact: 'A cute toy train that puffs through tea gardens high up in the misty mountains!', image: "images/trains/darjeeling_railway.jpg" },
          { name: 'Palace on Wheels', emoji: '🚂', fact: 'A royal train decorated like a palace that tours through Rajasthan!' }
        ],
        funFact: "India invented the number zero!"
      },
      china: {
        name: "China",
        capital: "Beijing",
        flag: "🇨🇳",
        animals: [
          { name: 'Giant Panda', emoji: '🐼', fact: 'Pandas eat bamboo all day long!' },
          { name: 'Red Panda', emoji: '🐾', fact: 'Fluffy red animals that live in trees!' },
          { name: 'Snow Leopard', emoji: '🐆', fact: 'Ghost cats of the snowy mountains!' }
        ],
        monuments: [
          { name: 'Great Wall', emoji: '🏯', fact: 'So long you can see it from space — almost!' },
          { name: 'Forbidden City', emoji: '🏯', fact: 'An emperor\'s palace with 9,999 rooms!' }
        ],
        geology: [
          { name: 'Yangtze River', emoji: '🌊', fact: 'The longest river in Asia!' },
          { name: 'Zhangjiajie Pillars', emoji: '🪨', fact: 'Floating rock pillars — they inspired Avatar!' }
        ],
        trains: [
          { name: 'Shanghai Maglev', emoji: '🚄', fact: 'Floats above the tracks using magnets and goes 431 km/h — the fastest train in the world!', image: 'images/trains/maglev.jpg' },
          { name: 'China Railway High-speed', emoji: '🚅', fact: 'China has the most high-speed rail tracks in the world — enough to wrap around Earth!', image: "images/trains/china_high_speed.jpg" }
        ],
        funFact: "Chinese people invented fireworks!"
      },
      japan: {
        name: "Japan",
        capital: "Tokyo",
        flag: "🇯🇵",
        animals: [
          { name: 'Japanese Macaque', emoji: '🐒', fact: 'Snow monkeys that bathe in hot springs!' },
          { name: 'Tanuki', emoji: '🦝', fact: 'Raccoon dogs from Japanese legends!' },
          { name: 'Red-crowned Crane', emoji: '🦅', fact: 'A symbol of good luck!' }
        ],
        monuments: [
          { name: 'Mount Fuji', emoji: '🗻', fact: 'A perfect cone-shaped volcano!' },
          { name: 'Torii Gates', emoji: '⛩️', fact: 'Thousands of red gates in a row!' }
        ],
        geology: [
          { name: 'Mount Fuji', emoji: '🗻', fact: 'A volcano that last erupted 300 years ago!' },
          { name: 'Japanese Alps', emoji: '🏔️', fact: 'Snowy mountains in the middle of the islands!' }
        ],
        trains: [
          { name: 'Shinkansen', emoji: '🚅', fact: 'The famous bullet train goes 320 km/h and is almost never late!', image: 'images/trains/shinkansen_train.jpg' }
        ],
        funFact: "Japan has more vending machines than almost anywhere!"
      },
      thailand: {
        name: "Thailand",
        capital: "Bangkok",
        flag: "🇹🇭",
        animals: [
          { name: 'Elephant', emoji: '🐘', fact: 'Thai elephants are very special and loved!' },
          { name: 'Gibbon', emoji: '🐒', fact: 'Swinging monkeys with long arms!' }
        ],
        monuments: [
          { name: 'Grand Palace', emoji: '🏯', fact: 'A sparkly golden palace!' },
          { name: 'Wat Arun', emoji: '🕌', fact: 'A tower covered in colorful broken tiles!' }
        ],
        geology: [
          { name: 'Khao Sok Rainforest', emoji: '🌳', fact: 'One of the oldest rainforests — older than the Amazon!' }
        ],
        funFact: "Thailand is called the \'Land of Smiles\'!"
      },
      uae: {
        name: "United Arab Emirates",
        capital: "Abu Dhabi",
        flag: "🇦🇪",
        animals: [
          { name: 'Arabian Oryx', emoji: '🦌', fact: 'A white antelope saved from extinction!' },
          { name: 'Camel', emoji: '🐪', fact: 'Camels are everywhere in the desert!' }
        ],
        monuments: [
          { name: 'Burj Khalifa', emoji: '🏙️', fact: 'The tallest building in the WORLD!' },
          { name: 'Sheikh Zayed Mosque', emoji: '🕌', fact: 'A dazzling white mosque with gold decorations!' }
        ],
        geology: [
          { name: 'Rub al-Khali', emoji: '🏜️', fact: 'The Empty Quarter — the biggest sand desert!' }
        ],
        funFact: "Dubai has an indoor ski slope in the desert!"
      },
      russia: {
        name: "Russia",
        capital: "Moscow",
        flag: "🇷🇺",
        animals: [
          { name: 'Siberian Tiger', emoji: '🐅', fact: 'The biggest cat in the world!' },
          { name: 'Brown Bear', emoji: '🐻', fact: 'Russia\'s famous symbol!' },
          { name: 'Arctic Fox', emoji: '🦊', fact: 'White foxes that live in the snow!' }
        ],
        monuments: [
          { name: 'Kremlin', emoji: '🏰', fact: 'A huge fortress in the middle of Moscow!' },
          { name: 'St. Basil\'s Cathedral', emoji: '⛪', fact: 'A church with colorful onion-shaped domes!' }
        ],
        geology: [
          { name: 'Lake Baikal', emoji: '🌊', fact: 'The deepest lake in the world!' },
          { name: 'Ural Mountains', emoji: '🏔️', fact: 'Mountains that divide Europe from Asia!' }
        ],
        trains: [
          { name: 'Trans-Siberian Railway', emoji: '🚂', fact: 'The longest railway in the world at 9,289 km — it takes a whole week!' }
        ],
        funFact: "Russia is the biggest country in the world — it has 11 time zones!"
      },
      mongolia: {
        name: "Mongolia",
        capital: "Ulaanbaatar",
        flag: "🇲🇳",
        animals: [
          { name: 'Wild Horse', emoji: '🐴', fact: 'Przewalski\'s horse — the last truly wild horse!' },
          { name: 'Snow Leopard', emoji: '🐆', fact: 'Ghost cats in the mountains!' },
          { name: 'Bactrian Camel', emoji: '🐫', fact: 'Camels with TWO humps!' }
        ],
        monuments: [
          { name: 'Genghis Khan Statue', emoji: '🗿', fact: 'A huge statue of the famous ruler!' },
          { name: 'Erdene Zuu Monastery', emoji: '🏛️', fact: 'Mongolia\'s oldest monastery!' }
        ],
        geology: [
          { name: 'Gobi Desert', emoji: '🏜️', fact: 'A huge desert with dinosaur fossils!' },
          { name: 'Altai Mountains', emoji: '🏔️', fact: 'Wild mountains with golden eagles!' }
        ],
        funFact: "Mongolia has more horses than people!"
      },
      southKorea: {
        name: "South Korea",
        capital: "Seoul",
        flag: "🇰🇷",
        animals: [
          { name: 'Korean Tiger', emoji: '🐅', fact: 'Tigers from Korean legends!' },
          { name: 'Magpie', emoji: '🐦', fact: 'The good luck bird of Korea!' }
        ],
        monuments: [
          { name: 'Gyeongbokgung Palace', emoji: '🏯', fact: 'A beautiful 600-year-old palace!' },
          { name: 'N Seoul Tower', emoji: '🗼', fact: 'A tower on top of a mountain in the city!' }
        ],
        geology: [
          { name: 'Jeju Island', emoji: '🌋', fact: 'A volcanic island with cool lava tubes!' }
        ],
        trains: [
          { name: 'KTX', emoji: '🚅', fact: 'South Korea\'s super-fast train connects Seoul to Busan in just 2.5 hours!' }
        ],
        funFact: "South Korea invented the first metal printing press!"
      },
      northKorea: {
        name: "North Korea",
        capital: "Pyongyang",
        flag: "🇰🇵",
        animals: [
          { name: 'Manchurian Crane', emoji: '🦅', fact: 'Beautiful cranes in the border area!' },
          { name: 'Amur Leopard', emoji: '🐆', fact: 'One of the rarest big cats!' }
        ],
        monuments: [
          { name: 'Juche Tower', emoji: '🗼', fact: 'A tall tower in the capital!' },
          { name: 'Mount Kumgang', emoji: '🏔️', fact: 'Beautiful Diamond Mountains!' }
        ],
        geology: [
          { name: 'Mount Paektu', emoji: '🌋', fact: 'A sacred volcano with a lake on top!' }
        ],
        funFact: "Mount Paektu has a lake inside a volcano!"
      },
      kazakhstan: {
        name: "Kazakhstan",
        capital: "Astana",
        flag: "🇰🇿",
        animals: [
          { name: 'Snow Leopard', emoji: '🐆', fact: 'Rare cats in the mountains!' },
          { name: 'Saiga Antelope', emoji: '🦌', fact: 'An antelope with a funny big nose!' }
        ],
        monuments: [
          { name: 'Bayterek Tower', emoji: '🗼', fact: 'A tower shaped like a tree with an egg!' },
          { name: 'Baikonur Cosmodrome', emoji: '🚀', fact: 'Where rockets launch into space!' }
        ],
        geology: [
          { name: 'Charyn Canyon', emoji: '🏜️', fact: 'A colorful canyon like a mini Grand Canyon!' },
          { name: 'Steppe', emoji: '🌾', fact: 'Huge flat grasslands stretching forever!' }
        ],
        funFact: "Rockets that go to the Space Station launch from Kazakhstan!"
      },
      pakistan: {
        name: "Pakistan",
        capital: "Islamabad",
        flag: "🇵🇰",
        animals: [
          { name: 'Markhor', emoji: '🐐', fact: 'A wild goat with amazing spiral horns!' },
          { name: 'Snow Leopard', emoji: '🐆', fact: 'Ghost cats in the mountains!' }
        ],
        monuments: [
          { name: 'Badshahi Mosque', emoji: '🕌', fact: 'One of the biggest mosques in the world!' },
          { name: 'Lahore Fort', emoji: '🏰', fact: 'An ancient fortress and UNESCO site!' }
        ],
        geology: [
          { name: 'K2', emoji: '🏔️', fact: 'The second tallest mountain in the world!' },
          { name: 'Karakoram Highway', emoji: '🛣️', fact: 'The highest paved road in the world!' }
        ],
        funFact: "Pakistan\'s K2 is the second tallest mountain on Earth!"
      },
      nepal: {
        name: "Nepal",
        capital: "Kathmandu",
        flag: "🇳🇵",
        animals: [
          { name: 'Red Panda', emoji: '🐾', fact: 'Cute red pandas in the forests!' },
          { name: 'One-horned Rhino', emoji: '🦏', fact: 'Armored rhinos in the lowlands!' }
        ],
        monuments: [
          { name: 'Mount Everest', emoji: '🏔️', fact: 'The tallest mountain in the WORLD!' },
          { name: 'Boudhanath Stupa', emoji: '🕌', fact: 'A giant dome where monks pray!' }
        ],
        geology: [
          { name: 'Mount Everest', emoji: '🏔️', fact: '8,849 meters tall — the top of the world!' },
          { name: 'Himalayan Valleys', emoji: '🏔️', fact: 'Deep valleys between giant mountains!' }
        ],
        funFact: "Nepal\'s flag is the only non-rectangular flag!"
      },
      bhutan: {
        name: "Bhutan",
        capital: "Thimphu",
        flag: "🇧🇹",
        animals: [
          { name: 'Takin', emoji: '🐐', fact: 'A weird animal that\'s half goat, half cow!' },
          { name: 'Black-necked Crane', emoji: '🦅', fact: 'Sacred cranes that visit in winter!' }
        ],
        monuments: [
          { name: 'Tiger\'s Nest Monastery', emoji: '🏛️', fact: 'A monastery on a cliff 3,000 meters up!' },
          { name: 'Punakha Dzong', emoji: '🏰', fact: 'A beautiful fortress by two rivers!' }
        ],
        geology: [
          { name: 'Himalayan Mountains', emoji: '🏔️', fact: 'Bhutan is in the Himalayas!' }
        ],
        funFact: "Bhutan measures happiness instead of money!"
      },
      bangladesh: {
        name: "Bangladesh",
        capital: "Dhaka",
        flag: "🇧🇩",
        animals: [
          { name: 'Bengal Tiger', emoji: '🐅', fact: 'Tigers in the biggest mangrove forest!' },
          { name: 'Irrawaddy Dolphin', emoji: '🐬', fact: 'Cute pink river dolphins!' }
        ],
        monuments: [
          { name: 'Sundarbans', emoji: '🌳', fact: 'The biggest mangrove forest in the world!' },
          { name: 'Lalbagh Fort', emoji: '🏰', fact: 'An old Mughal fort in the capital!' }
        ],
        geology: [
          { name: 'Sundarbans', emoji: '🌿', fact: 'A maze of rivers and mangrove trees!' },
          { name: 'Bay of Bengal', emoji: '🌊', fact: 'A huge bay bigger than many countries!' }
        ],
        funFact: "Bangladesh has the biggest river delta in the world!"
      },
      myanmar: {
        name: "Myanmar",
        capital: "Naypyidaw",
        flag: "🇲🇲",
        animals: [
          { name: 'Asian Elephant', emoji: '🐘', fact: 'Elephants in the teak forests!' },
          { name: 'Irrawaddy Dolphin', emoji: '🐬', fact: 'Smiley-faced river dolphins!' }
        ],
        monuments: [
          { name: 'Shwedagon Pagoda', emoji: '🏛️', fact: 'A giant golden temple covered in real gold!' },
          { name: 'Bagan Temples', emoji: '🏛️', fact: 'Thousands of ancient temples scattered across a plain!' }
        ],
        geology: [
          { name: 'Irrawaddy River', emoji: '🌊', fact: 'Myanmar\'s most important river!' }
        ],
        funFact: "Myanmar has over 2,000 ancient temples in Bagan!"
      },
      malaysia: {
        name: "Malaysia",
        capital: "Kuala Lumpur",
        flag: "🇲🇾",
        animals: [
          { name: 'Orangutan', emoji: '🦧', fact: 'Red apes that live in trees!' },
          { name: 'Sun Bear', emoji: '🐻', fact: 'The smallest bears in the world!' }
        ],
        monuments: [
          { name: 'Petronas Towers', emoji: '🏙️', fact: 'Twin skyscrapers connected by a bridge in the sky!' },
          { name: 'Batu Caves', emoji: '🏛️', fact: 'Hindu temples inside a huge cave!' }
        ],
        geology: [
          { name: 'Mount Kinabalu', emoji: '🏔️', fact: 'The tallest mountain in Southeast Asia!' },
          { name: 'Borneo Rainforest', emoji: '🌳', fact: 'One of the oldest rainforests on Earth!' }
        ],
        funFact: "Malaysia\'s Petronas Towers were the tallest buildings for 6 years!"
      },
      cambodia: {
        name: "Cambodia",
        capital: "Phnom Penh",
        flag: "🇰🇭",
        animals: [
          { name: 'Asian Elephant', emoji: '🐘', fact: 'Elephants in the forests!' },
          { name: 'Irrawaddy Dolphin', emoji: '🐬', fact: 'Rare river dolphins!' }
        ],
        monuments: [
          { name: 'Angkor Wat', emoji: '🏛️', fact: 'The biggest religious building in the world!' },
          { name: 'Royal Palace', emoji: '🏯', fact: 'A beautiful golden palace!' }
        ],
        geology: [
          { name: 'Tonle Sap', emoji: '🌊', fact: 'A lake that DOUBLES in size every year!' }
        ],
        funFact: "Angkor Wat is the largest religious monument ever built!"
      },
      laos: {
        name: "Laos",
        capital: "Vientiane",
        flag: "🇱🇦",
        animals: [
          { name: 'Asian Elephant', emoji: '🐘', fact: 'The Land of a Million Elephants!' },
          { name: 'Gibbon', emoji: '🐒', fact: 'Apes that swing through the trees!' }
        ],
        monuments: [
          { name: 'That Luang', emoji: '🏛️', fact: 'A golden temple — Laos\'s national symbol!' },
          { name: 'Plain of Jars', emoji: '🏛️', fact: 'Mysterious giant stone jars nobody can explain!' }
        ],
        geology: [
          { name: 'Mekong River', emoji: '🌊', fact: 'A mighty river flowing through Laos!' },
          { name: 'Kuang Si Falls', emoji: '🌊', fact: 'Beautiful turquoise waterfalls!' }
        ],
        funFact: "Laos was called the Land of a Million Elephants!"
      },
      vietnam: {
        name: "Vietnam",
        capital: "Hanoi",
        flag: "🇻🇳",
        animals: [
          { name: 'Water Buffalo', emoji: '🐃', fact: 'Farmers\' best friends in the rice fields!' },
          { name: 'Saola', emoji: '🦌', fact: 'A super rare forest deer discovered in 1992!' }
        ],
        monuments: [
          { name: 'Ha Long Bay', emoji: '🌊', fact: 'Thousands of limestone islands sticking out of the sea!' },
          { name: 'Hoi An Lanterns', emoji: '🏮', fact: 'A whole town lit up by colorful lanterns!' }
        ],
        geology: [
          { name: 'Ha Long Bay', emoji: '🪨', fact: 'Magical limestone towers in emerald water!' },
          { name: 'Mekong Delta', emoji: '🌊', fact: 'Where the Mekong River meets the sea!' }
        ],
        trains: [
          { name: 'Reunification Express', emoji: '🚂', fact: 'A train that travels the entire length of Vietnam along the beautiful coast!' }
        ],
        funFact: "Ha Long Bay has almost 2,000 islands!"
      },
      georgia: {
        name: "Georgia",
        capital: "Tbilisi",
        flag: "🇬🇪",
        animals: [
          { name: 'Caucasian Lynx', emoji: '🐱', fact: 'Wild cats in the mountains!' },
          { name: 'Brown Bear', emoji: '🐻', fact: 'Bears in the high mountains!' }
        ],
        monuments: [
          { name: 'Narikala Fortress', emoji: '🏰', fact: 'An ancient fortress overlooking the city!' },
          { name: 'Cave City of Vardzia', emoji: '🏛️', fact: 'A whole city carved into a cliff!' }
        ],
        geology: [
          { name: 'Caucasus Mountains', emoji: '🏔️', fact: 'Tall mountains between Europe and Asia!' }
        ],
        funFact: "Georgia is one of the oldest wine-making countries!"
      },
      armenia: {
        name: "Armenia",
        capital: "Yerevan",
        flag: "🇦🇲",
        animals: [
          { name: 'Armenian Mouflon', emoji: '🐏', fact: 'Wild mountain sheep with big horns!' },
          { name: 'Bezoar Goat', emoji: '🐐', fact: 'Wild goats on the cliffs!' }
        ],
        monuments: [
          { name: 'Garni Temple', emoji: '🏛️', fact: 'An ancient Greek-style temple!' },
          { name: 'Geghard Monastery', emoji: '⛪', fact: 'A monastery carved into rock!' }
        ],
        geology: [
          { name: 'Mount Ararat', emoji: '🏔️', fact: 'A beautiful volcano visible from the capital — it\'s actually in Turkey!' }
        ],
        funFact: "Armenia was the first country to adopt Christianity!"
      },
      azerbaijan: {
        name: "Azerbaijan",
        capital: "Baku",
        flag: "🇦🇿",
        animals: [
          { name: 'Caucasian Leopard', emoji: '🐆', fact: 'Very rare leopards in the mountains!' },
          { name: 'Goitered Gazelle', emoji: '🦌', fact: 'Graceful gazelles in the steppe!' }
        ],
        monuments: [
          { name: 'Flame Towers', emoji: '🏙️', fact: 'Three skyscrapers shaped like flames!' },
          { name: 'Maiden Tower', emoji: '🏰', fact: 'An ancient mysterious tower!' }
        ],
        geology: [
          { name: 'Mud Volcanoes', emoji: '🌋', fact: 'Azerbaijan has more mud volcanoes than anywhere!' },
          { name: 'Caspian Sea', emoji: '🌊', fact: 'The biggest lake in the world — it\'s called a sea!' }
        ],
        funFact: "Azerbaijan has natural gas fires that have burned for thousands of years!"
      },
      iran: {
        name: "Iran",
        capital: "Tehran",
        flag: "🇮🇷",
        animals: [
          { name: 'Persian Leopard', emoji: '🐆', fact: 'Beautiful spotted cats!' },
          { name: 'Asiatic Cheetah', emoji: '🐆', fact: 'The rarest cheetahs in the world!' }
        ],
        monuments: [
          { name: 'Persepolis', emoji: '🏛️', fact: 'Ruins of an ancient Persian palace!' },
          { name: 'Naqsh-e Jahan Square', emoji: '🏛️', fact: 'One of the biggest and most beautiful squares!' }
        ],
        geology: [
          { name: 'Dasht-e Lut Desert', emoji: '🏜️', fact: 'The hottest place on Earth!' },
          { name: 'Alborz Mountains', emoji: '🏔️', fact: 'Tall mountains with ski slopes!' }
        ],
        funFact: "Iran was once the mighty Persian Empire!"
      },
      turkey: {
        name: "Turkey",
        capital: "Ankara",
        flag: "🇹🇷",
        animals: [
          { name: 'Kangal Dog', emoji: '🐕', fact: 'Super strong guard dogs!' },
          { name: 'Loggerhead Turtle', emoji: '🐢', fact: 'Sea turtles nest on Turkish beaches!' }
        ],
        monuments: [
          { name: 'Hagia Sophia', emoji: '🕌', fact: 'A building that was both a church and a mosque!' },
          { name: 'Cappadocia', emoji: '🎈', fact: 'A place with fairy chimneys and hot air balloons!' }
        ],
        geology: [
          { name: 'Pamukkale', emoji: '♨️', fact: 'White terraced pools of warm water!' },
          { name: 'Cappadocia', emoji: '🪨', fact: 'Weird mushroom-shaped rocks you can live inside!' }
        ],
        trains: [
          { name: 'Marmaray', emoji: '🚂', fact: 'An underwater train tunnel that connects Europe and Asia under the sea!' }
        ],
        funFact: "Turkey connects two continents — Europe and Asia!"
      },
      yemen: {
        name: "Yemen",
        capital: "Sanaa",
        flag: "🇾🇪",
        animals: [
          { name: 'Arabian Leopard', emoji: '🐆', fact: 'Very rare leopards!' },
          { name: 'Arabian Chameleon', emoji: '🦎', fact: 'Color-changing lizards!' }
        ],
        monuments: [
          { name: 'Old Sanaa', emoji: '🏘️', fact: 'Skyscraper buildings made of mud — thousands of years old!' },
          { name: 'Socotra Island', emoji: '🏝️', fact: 'An island with alien-looking trees!' }
        ],
        geology: [
          { name: 'Socotra', emoji: '🌳', fact: 'Dragon blood trees that look like umbrellas!' }
        ],
        funFact: "Yemen\'s Socotra Island has plants found nowhere else on Earth!"
      },
      oman: {
        name: "Oman",
        capital: "Muscat",
        flag: "🇴🇲",
        animals: [
          { name: 'Arabian Oryx', emoji: '🦌', fact: 'Beautiful white antelopes!' },
          { name: 'Sea Turtle', emoji: '🐢', fact: 'Thousands of turtles nest here!' }
        ],
        monuments: [
          { name: 'Sultan Qaboos Mosque', emoji: '🕌', fact: 'A beautiful grand mosque!' },
          { name: 'Nizwa Fort', emoji: '🏰', fact: 'A round fortress in the desert!' }
        ],
        geology: [
          { name: 'Wahiba Sands', emoji: '🏜️', fact: 'Orange sand dunes as far as you can see!' },
          { name: 'Al Hoota Cave', emoji: '🪨', fact: 'A cave millions of years old with a lake inside!' }
        ],
        funFact: "Oman saved the Arabian Oryx from extinction!"
      },
      qatar: {
        name: "Qatar",
        capital: "Doha",
        flag: "🇶🇦",
        animals: [
          { name: 'Arabian Oryx', emoji: '🦌', fact: 'Qatar\'s national animal!' },
          { name: 'Hawksbill Turtle', emoji: '🐢', fact: 'Sea turtles in the warm Gulf!' }
        ],
        monuments: [
          { name: 'Museum of Islamic Art', emoji: '🏛️', fact: 'A beautiful museum on the water!' },
          { name: 'The Pearl', emoji: '🏝️', fact: 'A man-made island shaped like a pearl!' }
        ],
        geology: [
          { name: 'Inland Sea', emoji: '🌊', fact: 'A bay in the middle of the desert!' }
        ],
        funFact: "Qatar hosted the 2022 FIFA World Cup!"
      },
      kuwait: {
        name: "Kuwait",
        capital: "Kuwait City",
        flag: "🇰🇼",
        animals: [
          { name: 'Desert Hare', emoji: '🐇', fact: 'Fast little hares in the desert!' },
          { name: 'Flamingo', emoji: '🦩', fact: 'Pink birds visit in winter!' }
        ],
        monuments: [
          { name: 'Kuwait Towers', emoji: '🗼', fact: 'Three towers — symbols of modern Kuwait!' },
          { name: 'Grand Mosque', emoji: '🕌', fact: 'The biggest mosque in Kuwait!' }
        ],
        geology: [
          { name: 'Kuwait Bay', emoji: '🌊', fact: 'A big natural harbor!' }
        ],
        funFact: "Kuwait has some of the hottest temperatures on Earth!"
      },
      saudiArabia: {
        name: "Saudi Arabia",
        capital: "Riyadh",
        flag: "🇸🇦",
        animals: [
          { name: 'Arabian Oryx', emoji: '🦌', fact: 'White antelopes in the desert!' },
          { name: 'Camel', emoji: '🐪', fact: 'Camels are super important here!' },
          { name: 'Baboon', emoji: '🐒', fact: 'Baboons in the mountains!' }
        ],
        monuments: [
          { name: 'Mecca', emoji: '🕌', fact: 'The holiest city in Islam!' },
          { name: 'Mada\'in Saleh', emoji: '🏛️', fact: 'Ancient tombs carved into rocks!' }
        ],
        geology: [
          { name: 'Rub al-Khali', emoji: '🏜️', fact: 'The biggest sand desert in the world!' },
          { name: 'Red Sea Coast', emoji: '🌊', fact: 'Amazing coral reefs by the coast!' }
        ],
        funFact: "Saudi Arabia is home to the two holiest cities in Islam!"
      },
      syria: {
        name: "Syria",
        capital: "Damascus",
        flag: "🇸🇾",
        animals: [
          { name: 'Syrian Brown Bear', emoji: '🐻', fact: 'Bears that once roamed the mountains!' },
          { name: 'Striped Hyena', emoji: '🐾', fact: 'Hyenas that live in the desert!' }
        ],
        monuments: [
          { name: 'Damascus', emoji: '🏘️', fact: 'One of the oldest continuously lived-in cities!' },
          { name: 'Krak des Chevaliers', emoji: '🏰', fact: 'An amazing Crusader castle!' }
        ],
        geology: [
          { name: 'Euphrates River', emoji: '🌊', fact: 'An ancient river from the Bible!' }
        ],
        funFact: "Damascus is one of the oldest cities people have always lived in!"
      },
      iraq: {
        name: "Iraq",
        capital: "Baghdad",
        flag: "🇮🇶",
        animals: [
          { name: 'Goitered Gazelle', emoji: '🦌', fact: 'Graceful desert antelopes!' },
          { name: 'Mesopotamian Fallow Deer', emoji: '🦌', fact: 'Rare deer once thought extinct!' }
        ],
        monuments: [
          { name: 'Ziggurat of Ur', emoji: '🏛️', fact: 'A huge ancient stepped pyramid!' },
          { name: 'Citadel of Erbil', emoji: '🏰', fact: 'The oldest continuously inhabited citadel — 6,000 years!' }
        ],
        geology: [
          { name: 'Mesopotamia', emoji: '🌊', fact: 'The Tigris and Euphrates rivers — the cradle of civilization!' }
        ],
        funFact: "Writing was invented in ancient Iraq!"
      },
      jordan: {
        name: "Jordan",
        capital: "Amman",
        flag: "🇯🇴",
        animals: [
          { name: 'Arabian Oryx', emoji: '🦌', fact: 'Saved from extinction in Jordan!' },
          { name: 'Sand Cat', emoji: '🐱', fact: 'A tiny wild cat that lives in the desert!' }
        ],
        monuments: [
          { name: 'Petra', emoji: '🏛️', fact: 'A city carved into rose-red cliffs!' },
          { name: 'Dead Sea', emoji: '🌊', fact: 'So salty you float without trying!' }
        ],
        geology: [
          { name: 'Wadi Rum', emoji: '🏜️', fact: 'A red desert that looks like Mars!' },
          { name: 'Dead Sea', emoji: '🌊', fact: 'The lowest point on land!' }
        ],
        funFact: "Petra was voted one of the New Seven Wonders of the World!"
      },
      lebanon: {
        name: "Lebanon",
        capital: "Beirut",
        flag: "🇱🇧",
        animals: [
          { name: 'Striped Hyena', emoji: '🐾', fact: 'Night hunters in the mountains!' },
          { name: 'Cedar Tree', emoji: '🌲', fact: 'The famous cedars on the flag!' }
        ],
        monuments: [
          { name: 'Baalbek', emoji: '🏛️', fact: 'Giant ancient Roman temples!' },
          { name: 'Byblos', emoji: '🏘️', fact: 'One of the oldest cities in the world!' }
        ],
        geology: [
          { name: 'Cedars of God', emoji: '🌲', fact: 'Ancient cedar trees thousands of years old!' },
          { name: 'Jeita Grotto', emoji: '🪨', fact: 'An amazing cave with stalactites!' }
        ],
        funFact: "Lebanon\'s cedar tree is on its flag!"
      },
      israel: {
        name: "Israel",
        capital: "Jerusalem",
        flag: "🇮🇱",
        animals: [
          { name: 'Rock Hyrax', emoji: '🐹', fact: 'Small animals related to elephants!' },
          { name: 'Hoopoe', emoji: '🐦', fact: 'A bird with a cool crown of feathers!' }
        ],
        monuments: [
          { name: 'Western Wall', emoji: '🏛️', fact: 'An ancient holy wall in Jerusalem!' },
          { name: 'Masada', emoji: '🏰', fact: 'A fortress on top of a cliff in the desert!' }
        ],
        geology: [
          { name: 'Dead Sea', emoji: '🌊', fact: 'You can float without even trying!' },
          { name: 'Negev Desert', emoji: '🏜️', fact: 'A desert that blooms with flowers!' }
        ],
        funFact: "The Dead Sea is so salty nothing can live in it!"
      },
      cyprus: {
        name: "Cyprus",
        capital: "Nicosia",
        flag: "🇨🇾",
        animals: [
          { name: 'Mouflon', emoji: '🐏', fact: 'Wild sheep in the mountains!' },
          { name: 'Loggerhead Turtle', emoji: '🐢', fact: 'Sea turtles on the beaches!' }
        ],
        monuments: [
          { name: 'Kourion', emoji: '🏛️', fact: 'Ancient Greek ruins by the sea!' },
          { name: 'Paphos Castle', emoji: '🏰', fact: 'A medieval castle by the harbor!' }
        ],
        geology: [
          { name: 'Troodos Mountains', emoji: '🏔️', fact: 'Mountains with pine forests and ski slopes!' }
        ],
        funFact: "Cyprus is the birthplace of the goddess Aphrodite in Greek myth!"
      },
      sriLanka: {
        name: "Sri Lanka",
        capital: "Colombo",
        flag: "🇱🇰",
        animals: [
          { name: 'Elephant', emoji: '🐘', fact: 'Sri Lanka has lots of wild elephants!' },
          { name: 'Leopard', emoji: '🐆', fact: 'Sri Lankan leopards are the biggest!' }
        ],
        monuments: [
          { name: 'Sigiriya', emoji: '🏰', fact: 'An ancient palace on top of a giant rock!' },
          { name: 'Temple of the Tooth', emoji: '🏛️', fact: 'A temple with Buddha\'s tooth inside!' }
        ],
        geology: [
          { name: 'Adam\'s Peak', emoji: '🏔️', fact: 'A holy mountain with a footprint at the top!' }
        ],
        funFact: "Sri Lanka is called the \'Teardrop of India\'!"
      },
      taiwan: {
        name: "Taiwan",
        capital: "Taipei",
        flag: "🇹🇼",
        animals: [
          { name: 'Formosan Black Bear', emoji: '🐻', fact: 'Bears with a white V on their chest!' },
          { name: 'Mikado Pheasant', emoji: '🐦', fact: 'A beautiful bird only found here!' }
        ],
        monuments: [
          { name: 'Taipei 101', emoji: '🏙️', fact: 'Once the tallest building in the world!' },
          { name: 'Taroko Gorge', emoji: '🏞️', fact: 'A spectacular marble canyon!' }
        ],
        geology: [
          { name: 'Taroko Gorge', emoji: '🪨', fact: 'A gorge carved through marble rock!' },
          { name: 'Jade Mountain', emoji: '🏔️', fact: 'The tallest mountain in East Asia!' }
        ],
        funFact: "Taiwan is famous for amazing night markets with yummy food!"
      },
      turkmenistan: {
        name: "Turkmenistan",
        capital: "Ashgabat",
        flag: "🇹🇲",
        animals: [
          { name: 'Akhal-Teke Horse', emoji: '🐴', fact: 'Golden shimmering horses!' },
          { name: 'Goitered Gazelle', emoji: '🦌', fact: 'Desert gazelles!' }
        ],
        monuments: [
          { name: 'Darvaza Gas Crater', emoji: '🔥', fact: 'A huge burning hole — the Door to Hell!' },
          { name: 'Ancient Merv', emoji: '🏛️', fact: 'Ruins of a once-great Silk Road city!' }
        ],
        geology: [
          { name: 'Karakum Desert', emoji: '🏜️', fact: 'A huge desert covering most of the country!' }
        ],
        funFact: "Turkmenistan has a burning crater called the \'Door to Hell\'!"
      },
      uzbekistan: {
        name: "Uzbekistan",
        capital: "Tashkent",
        flag: "🇺🇿",
        animals: [
          { name: 'Snow Leopard', emoji: '🐆', fact: 'Ghost cats in the mountains!' },
          { name: 'Bukhara Deer', emoji: '🦌', fact: 'Rare deer by the rivers!' }
        ],
        monuments: [
          { name: 'Registan Square', emoji: '🏛️', fact: 'Three stunning tiled buildings!' },
          { name: 'Samarkand', emoji: '🏛️', fact: 'A jewel of the ancient Silk Road!' }
        ],
        geology: [
          { name: 'Kyzylkum Desert', emoji: '🏜️', fact: 'Red sand desert!' }
        ],
        funFact: "Samarkand is one of the oldest cities on the Silk Road!"
      },
      tajikistan: {
        name: "Tajikistan",
        capital: "Dushanbe",
        flag: "🇹🇯",
        animals: [
          { name: 'Marco Polo Sheep', emoji: '🐏', fact: 'Sheep with the biggest horns!' },
          { name: 'Snow Leopard', emoji: '🐆', fact: 'Rare cats in the Pamirs!' }
        ],
        monuments: [
          { name: 'Ismoil Somoni Peak', emoji: '🏔️', fact: 'The tallest mountain in the former Soviet Union!' },
          { name: 'Hissar Fortress', emoji: '🏰', fact: 'An ancient fortress by the capital!' }
        ],
        geology: [
          { name: 'Pamir Mountains', emoji: '🏔️', fact: 'The Roof of the World!' }
        ],
        funFact: "Tajikistan is 93% mountains!"
      },
      kyrgyzstan: {
        name: "Kyrgyzstan",
        capital: "Bishkek",
        flag: "🇰🇬",
        animals: [
          { name: 'Snow Leopard', emoji: '🐆', fact: 'Ghost cats in the Tien Shan!' },
          { name: 'Golden Eagle', emoji: '🦅', fact: 'Used for hunting by the Kyrgyz people!' }
        ],
        monuments: [
          { name: 'Issyk-Kul Lake', emoji: '🌊', fact: 'One of the biggest mountain lakes!' },
          { name: 'Burana Tower', emoji: '🗼', fact: 'An ancient minaret leaning to one side!' }
        ],
        geology: [
          { name: 'Tien Shan Mountains', emoji: '🏔️', fact: 'Celestial Mountains!' }
        ],
        funFact: "Kyrgyzstan\'s Issyk-Kul never freezes despite being surrounded by glaciers!"
      },
      afghanistan: {
        name: "Afghanistan",
        capital: "Kabul",
        flag: "🇦🇫",
        animals: [
          { name: 'Snow Leopard', emoji: '🐆', fact: 'Rare cats in the Hindu Kush!' },
          { name: 'Marco Polo Sheep', emoji: '🐏', fact: 'Mountain sheep with curly horns!' }
        ],
        monuments: [
          { name: 'Blue Mosque of Mazar', emoji: '🕌', fact: 'A stunning blue-tiled mosque!' },
          { name: 'Band-e-Amir', emoji: '🌊', fact: 'Beautiful blue lakes in the desert!' }
        ],
        geology: [
          { name: 'Hindu Kush Mountains', emoji: '🏔️', fact: 'Towering mountains!' }
        ],
        funFact: "Afghanistan is at the crossroads of Asia!"
      },
      philippines: {
        name: "Philippines",
        capital: "Manila",
        flag: "🇵🇭",
        animals: [
          { name: 'Tarsier', emoji: '🐒', fact: 'The tiniest primate with huge eyes!' },
          { name: 'Philippine Eagle', emoji: '🦅', fact: 'The biggest eagle in the world!' }
        ],
        monuments: [
          { name: 'Chocolate Hills', emoji: '🏞️', fact: 'Over 1,000 brown hills that look like chocolates!' },
          { name: 'Mayon Volcano', emoji: '🌋', fact: 'The most perfect cone-shaped volcano!' }
        ],
        geology: [
          { name: 'Mayon Volcano', emoji: '🌋', fact: 'A perfectly shaped active volcano!' },
          { name: 'Underground River', emoji: '🌊', fact: 'A river that flows through a cave!' }
        ],
        funFact: "The Philippines has over 7,000 islands!"
      }
    }
  },
  europe: {
    name: "Europe",
    emoji: "🏰",
    color: "#2A9D8F",
    glowColor: "#2A9D8F80",
    description: "Castles, art, and delicious food everywhere!",
    trains: [
      { name: "Eurostar", emoji: "🚅", fact: "This train goes UNDER the English Channel in a tunnel beneath the ocean between England and France!", image: "images/trains/eurostar.jpg" },
      { name: "TGV", emoji: "🚄", fact: "France's super-fast train once set a world record going 575 km/h — faster than most airplanes!", image: "images/trains/tgv.jpg" },
      { name: "Glacier Express", emoji: "🚂", fact: "The slowest express train in the world takes 8 hours through 291 bridges in the Swiss Alps!", image: "images/trains/glacier_express.jpg" },
      { name: "Orient Express", emoji: "🚂", fact: "The most famous mystery train in the world — even Agatha Christie wrote a book about it!" },
      { name: "ICE", emoji: "🚅", fact: "Germany's high-speed train connects all the big cities at 300 km/h!" },
      { name: "Flåm Railway", emoji: "🚂", fact: "Norway's mountain train goes down one of the steepest tracks in the world with 20 tunnels!" }
    ],
    countries: {
      france: {
        name: "France",
        capital: "Paris",
        flag: "🇫🇷",
        animals: [
          { name: 'Red Fox', emoji: '🦊', fact: 'Foxes are super sneaky and smart!' },
          { name: 'Alpine Marmot', emoji: '🐿️', fact: 'Chubby mountain squirrels that whistle!' }
        ],
        monuments: [
          { name: 'Eiffel Tower', emoji: '🗼', fact: 'Taller than 80 grown-ups stacked up!' },
          { name: 'Mont Saint-Michel', emoji: '🏰', fact: 'A castle on a tiny island that floods!' }
        ],
        geology: [
          { name: 'Alps', emoji: '🏔️', fact: 'Snowy mountains perfect for skiing!' },
          { name: 'Verdon Gorge', emoji: '🏞️', fact: 'A deep turquoise canyon!' }
        ],
        trains: [
          { name: 'TGV', emoji: '🚄', fact: 'France\'s super-fast train once went 575 km/h — faster than most airplanes!', image: "images/trains/tgv.jpg" },
          { name: 'Eurostar', emoji: '🚅', fact: 'Goes under the English Channel from Paris to London in a tunnel beneath the sea!', image: 'images/trains/eurostar.jpg' }
        ],
        funFact: "France makes the most cheese in the world!"
      },
      italy: {
        name: "Italy",
        capital: "Rome",
        flag: "🇮🇹",
        animals: [
          { name: 'Italian Wolf', emoji: '🐺', fact: 'Wolves are coming back to Italy!' },
          { name: 'Brown Bear', emoji: '🐻', fact: 'Bears in the northern mountains!' }
        ],
        monuments: [
          { name: 'Colosseum', emoji: '🏛️', fact: 'Where gladiators fought long ago!' },
          { name: 'Leaning Tower of Pisa', emoji: '🏛️', fact: 'A tower that leans but doesn\'t fall!' }
        ],
        geology: [
          { name: 'Mount Vesuvius', emoji: '🌋', fact: 'The volcano that buried Pompeii!' },
          { name: 'Dolomites', emoji: '🏔️', fact: 'Jagged pink mountains!' }
        ],
        trains: [
          { name: 'Frecciarossa', emoji: '🚅', fact: 'Italy\'s red arrow train zooms at 300 km/h between Rome, Florence, and Milan!' }
        ],
        funFact: "Italy is shaped like a boot!"
      },
      uk: {
        name: "United Kingdom",
        capital: "London",
        flag: "🇬🇧",
        animals: [
          { name: 'Red Fox', emoji: '🦊', fact: 'Foxes even live in London!' },
          { name: 'Red Squirrel', emoji: '🐿️', fact: 'Cute squirrels with tufty ears!' },
          { name: 'Puffin', emoji: '🐧', fact: 'Colorful-beaked sea birds!' }
        ],
        monuments: [
          { name: 'Big Ben', emoji: '🕰️', fact: 'A famous clock tower that goes BONG!' },
          { name: 'Stonehenge', emoji: '🪨', fact: 'Mysterious giant stones — nobody knows exactly how!' }
        ],
        geology: [
          { name: 'White Cliffs of Dover', emoji: '🪨', fact: 'Bright white cliffs by the sea!' },
          { name: 'Scottish Highlands', emoji: '🏔️', fact: 'Beautiful misty mountains and lochs!' }
        ],
        trains: [
          { name: 'Eurostar', emoji: '🚅', fact: 'Goes under the English Channel from London to Paris!', image: 'images/trains/eurostar.jpg' },
          { name: 'Flying Scotsman', emoji: '🚂', fact: 'The most famous steam train ever — it\'s over 100 years old and still runs!' }
        ],
        funFact: "The UK has a queen\'s guard that never smiles!"
      },
      greece: {
        name: "Greece",
        capital: "Athens",
        flag: "🇬🇷",
        animals: [
          { name: 'Loggerhead Turtle', emoji: '🐢', fact: 'Sea turtles on Greek beaches!' },
          { name: 'Mediterranean Monk Seal', emoji: '🦭', fact: 'One of the rarest seals!' }
        ],
        monuments: [
          { name: 'Parthenon', emoji: '🏛️', fact: 'An ancient temple to the goddess Athena!' },
          { name: 'Santorini', emoji: '🏝️', fact: 'Blue and white buildings on a volcanic island!' }
        ],
        geology: [
          { name: 'Santorini Caldera', emoji: '🌋', fact: 'An island that\'s actually a volcano crater!' },
          { name: 'Meteora', emoji: '🪨', fact: 'Monasteries on top of giant rock pillars!' }
        ],
        funFact: "The Olympics were invented in ancient Greece!"
      },
      spain: {
        name: "Spain",
        capital: "Madrid",
        flag: "🇪🇸",
        animals: [
          { name: 'Iberian Lynx', emoji: '🐱', fact: 'The rarest wild cat in Europe!' },
          { name: 'Flamingo', emoji: '🦩', fact: 'Pink birds on Spanish lakes!' }
        ],
        monuments: [
          { name: 'Sagrada Familia', emoji: '⛪', fact: 'A giant church still being built after 140 years!' },
          { name: 'Alhambra', emoji: '🏰', fact: 'A beautiful palace with intricate patterns!' }
        ],
        geology: [
          { name: 'Canary Islands', emoji: '🌋', fact: 'Volcanic islands off the African coast!' }
        ],
        trains: [
          { name: 'AVE', emoji: '🚅', fact: 'Spain\'s high-speed train name means BIRD in Spanish and goes 310 km/h!' }
        ],
        funFact: "Spain has a tomato-throwing festival every year!"
      },
      portugal: {
        name: "Portugal",
        capital: "Lisbon",
        flag: "🇵🇹",
        animals: [
          { name: 'Iberian Wolf', emoji: '🐺', fact: 'Wolves in the mountains!' },
          { name: 'Dolphin', emoji: '🐬', fact: 'Dolphins swim near the coast!' }
        ],
        monuments: [
          { name: 'Tower of Belém', emoji: '🏰', fact: 'A tower by the river where explorers set sail!' },
          { name: 'Pena Palace', emoji: '🏰', fact: 'A colorful fairy-tale castle on a hilltop!' }
        ],
        geology: [
          { name: 'Azores', emoji: '🌋', fact: 'Volcanic islands far out in the Atlantic!' }
        ],
        funFact: "Portugal is the oldest country in Europe with the same borders!"
      },
      germany: {
        name: "Germany",
        capital: "Berlin",
        flag: "🇩🇪",
        animals: [
          { name: 'Red Deer', emoji: '🦌', fact: 'Big deer in the forests!' },
          { name: 'Wild Boar', emoji: '🐗', fact: 'Wild pigs that dig up the forest floor!' }
        ],
        monuments: [
          { name: 'Brandenburg Gate', emoji: '🏛️', fact: 'A famous gate in Berlin!' },
          { name: 'Neuschwanstein Castle', emoji: '🏰', fact: 'A fairy-tale castle that inspired Disney!' }
        ],
        geology: [
          { name: 'Black Forest', emoji: '🌳', fact: 'A thick, dark forest — home of cuckoo clocks!' },
          { name: 'Rhine River', emoji: '🌊', fact: 'A famous river with castles along it!' }
        ],
        trains: [
          { name: 'ICE', emoji: '🚅', fact: 'Germany\'s sleek high-speed trains connect all the big cities at 300 km/h!' }
        ],
        funFact: "Germany\'s Neuschwanstein Castle inspired Disney\'s castle!"
      },
      netherlands: {
        name: "Netherlands",
        capital: "Amsterdam",
        flag: "🇳🇱",
        animals: [
          { name: 'Stork', emoji: '🦅', fact: 'Big birds that nest on rooftops!' },
          { name: 'European Rabbit', emoji: '🐇', fact: 'Rabbits everywhere!' }
        ],
        monuments: [
          { name: 'Anne Frank House', emoji: '🏠', fact: 'Where a brave girl hid and wrote her diary!' },
          { name: 'Windmills', emoji: '🌬️', fact: 'Spinning windmills — the symbol of Holland!' }
        ],
        geology: [
          { name: 'Canals', emoji: '🌊', fact: 'Cities built on water with boat streets!' }
        ],
        funFact: "Almost a third of the Netherlands is below sea level!"
      },
      belgium: {
        name: "Belgium",
        capital: "Brussels",
        flag: "🇧🇪",
        animals: [
          { name: 'Red Fox', emoji: '🦊', fact: 'Foxes in the forests!' },
          { name: 'Wild Boar', emoji: '🐗', fact: 'Wild pigs in the Ardennes!' }
        ],
        monuments: [
          { name: 'Grand Place', emoji: '🏛️', fact: 'One of the most beautiful squares in Europe!' },
          { name: 'Atomium', emoji: '🏗️', fact: 'A giant building shaped like an atom!' }
        ],
        geology: [
          { name: 'Ardennes', emoji: '🌳', fact: 'Hilly forests in southern Belgium!' }
        ],
        funFact: "Belgium makes the best chocolate in the world!"
      },
      norway: {
        name: "Norway",
        capital: "Oslo",
        flag: "🇳🇴",
        animals: [
          { name: 'Polar Bear', emoji: '🐻‍❄️', fact: 'Polar bears in Svalbard!' },
          { name: 'Moose', emoji: '🫎', fact: 'Huge moose in the forests!' },
          { name: 'Puffin', emoji: '🐧', fact: 'Colorful beak birds on the cliffs!' }
        ],
        monuments: [
          { name: 'Viking Ship Museum', emoji: '🛳️', fact: 'Real Viking ships from 1,000 years ago!' },
          { name: 'Trolltunga', emoji: '🪨', fact: 'A rock that sticks out over a cliff like a tongue!' }
        ],
        geology: [
          { name: 'Fjords', emoji: '🏞️', fact: 'Deep blue water between tall cliffs!' },
          { name: 'Northern Lights', emoji: '🌌', fact: 'Green lights dancing in the sky!' }
        ],
        trains: [
          { name: 'Flåm Railway', emoji: '🚂', fact: 'One of the steepest train tracks in the world with 20 tunnels through the mountains!' }
        ],
        funFact: "Norway has the midnight sun — the sun doesn\'t set in summer!"
      },
      sweden: {
        name: "Sweden",
        capital: "Stockholm",
        flag: "🇸🇪",
        animals: [
          { name: 'Moose', emoji: '🫎', fact: 'The King of the Forest!' },
          { name: 'Arctic Fox', emoji: '🦊', fact: 'White foxes in the snowy north!' }
        ],
        monuments: [
          { name: 'Vasa Museum', emoji: '🛳️', fact: 'A huge ship that sank 400 years ago — now in a museum!' },
          { name: 'Ice Hotel', emoji: '🏨', fact: 'A hotel made entirely of ice!' }
        ],
        geology: [
          { name: 'Northern Lights', emoji: '🌌', fact: 'Green and purple lights in the sky!' },
          { name: 'Swedish Archipelago', emoji: '🏝️', fact: '30,000 islands along the coast!' }
        ],
        funFact: "Sweden invented dynamite and IKEA!"
      },
      finland: {
        name: "Finland",
        capital: "Helsinki",
        flag: "🇫🇮",
        animals: [
          { name: 'Brown Bear', emoji: '🐻', fact: 'Bears in the forests!' },
          { name: 'Reindeer', emoji: '🦌', fact: 'Santa\'s reindeer live here!' }
        ],
        monuments: [
          { name: 'Santa Claus Village', emoji: '🎅', fact: 'Visit Santa at the Arctic Circle!' },
          { name: 'Suomenlinna Fortress', emoji: '🏰', fact: 'A sea fortress on islands!' }
        ],
        geology: [
          { name: 'Lake District', emoji: '🌊', fact: 'Finland has 188,000 lakes!' },
          { name: 'Lapland', emoji: '❄️', fact: 'Snowy wonderland where Santa lives!' }
        ],
        funFact: "Finland has 188,000 lakes and 179,000 islands!"
      },
      iceland: {
        name: "Iceland",
        capital: "Reykjavik",
        flag: "🇮🇸",
        animals: [
          { name: 'Puffin', emoji: '🐧', fact: 'More puffins than people!' },
          { name: 'Arctic Fox', emoji: '🦊', fact: 'The only native land mammal!' }
        ],
        monuments: [
          { name: 'Hallgrímskirkja', emoji: '⛪', fact: 'A dramatic church shaped like lava columns!' },
          { name: 'Blue Lagoon', emoji: '♨️', fact: 'A warm milky-blue pool in a lava field!' }
        ],
        geology: [
          { name: 'Geysers', emoji: '♨️', fact: 'Hot water that shoots up from the ground!' },
          { name: 'Vatnajökull Glacier', emoji: '🧊', fact: 'The biggest glacier in Europe!' }
        ],
        funFact: "Iceland has no mosquitoes!"
      },
      denmark: {
        name: "Denmark",
        capital: "Copenhagen",
        flag: "🇩🇰",
        animals: [
          { name: 'Red Squirrel', emoji: '🐿️', fact: 'Cute squirrels in the parks!' },
          { name: 'Mute Swan', emoji: '🦢', fact: 'Beautiful white swans — the national bird!' }
        ],
        monuments: [
          { name: 'Tivoli Gardens', emoji: '🎢', fact: 'One of the oldest amusement parks in the world!' },
          { name: 'Little Mermaid Statue', emoji: '🧜‍♀️', fact: 'A famous statue by the harbor!' }
        ],
        geology: [
          { name: 'White Cliffs of Møn', emoji: '🪨', fact: 'Chalk cliffs by the Baltic Sea!' }
        ],
        funFact: "LEGO was invented in Denmark!"
      },
      switzerland: {
        name: "Switzerland",
        capital: "Bern",
        flag: "🇨🇭",
        animals: [
          { name: 'Alpine Ibex', emoji: '🐐', fact: 'Mountain goats on steep cliffs!' },
          { name: 'Marmot', emoji: '🐿️', fact: 'Chubby whistling animals!' }
        ],
        monuments: [
          { name: 'Matterhorn', emoji: '🏔️', fact: 'One of the most famous mountains!' },
          { name: 'Chillon Castle', emoji: '🏰', fact: 'A castle on a lake!' }
        ],
        geology: [
          { name: 'Alps', emoji: '🏔️', fact: 'Some of the tallest mountains in Europe!' },
          { name: 'Lake Geneva', emoji: '🌊', fact: 'A giant lake between mountains!' }
        ],
        trains: [
          { name: 'Glacier Express', emoji: '🚂', fact: 'The slowest express train crosses 291 bridges through the snowy Swiss Alps!', image: 'images/trains/glacier_express.jpg' },
          { name: 'Bernina Express', emoji: '🚂', fact: 'Crosses the highest railway in the Alps with amazing views!' }
        ],
        funFact: "Switzerland has four official languages!"
      },
      austria: {
        name: "Austria",
        capital: "Vienna",
        flag: "🇦🇹",
        animals: [
          { name: 'Golden Eagle', emoji: '🦅', fact: 'Majestic eagles in the Alps!' },
          { name: 'Alpine Marmot', emoji: '🐿️', fact: 'Fluffy mountain animals!' }
        ],
        monuments: [
          { name: 'Schönbrunn Palace', emoji: '🏰', fact: 'The summer palace of emperors!' },
          { name: 'Salzburg', emoji: '🏘️', fact: 'The city where Mozart was born!' }
        ],
        geology: [
          { name: 'Alps', emoji: '🏔️', fact: 'Snowy mountains for skiing!' }
        ],
        funFact: "Mozart was born in Austria!"
      },
      ireland: {
        name: "Ireland",
        capital: "Dublin",
        flag: "🇮🇪",
        animals: [
          { name: 'Red Deer', emoji: '🦌', fact: 'Deer in the Phoenix Park!' },
          { name: 'Puffin', emoji: '🐧', fact: 'Puffins on the sea cliffs!' }
        ],
        monuments: [
          { name: 'Cliffs of Moher', emoji: '🪨', fact: 'Dramatic cliffs towering over the ocean!' },
          { name: 'Blarney Castle', emoji: '🏰', fact: 'Kiss the stone and you\'ll become a great talker!' }
        ],
        geology: [
          { name: 'Burren', emoji: '🪨', fact: 'A landscape of bare limestone!' },
          { name: 'Giant\'s Causeway', emoji: '🪨', fact: 'Hexagonal rock columns made by a giant — in legend!' }
        ],
        funFact: "Ireland\'s symbol is the shamrock — a three-leaf clover!"
      },
      poland: {
        name: "Poland",
        capital: "Warsaw",
        flag: "🇵🇱",
        animals: [
          { name: 'European Bison', emoji: '🦬', fact: 'The biggest land animal in Europe!' },
          { name: 'White Stork', emoji: '🦅', fact: 'More storks than any European country!' }
        ],
        monuments: [
          { name: 'Wawel Castle', emoji: '🏰', fact: 'A royal castle on a hill!' },
          { name: 'Wieliczka Salt Mine', emoji: '🏛️', fact: 'An underground cathedral made of salt!' }
        ],
        geology: [
          { name: 'Białowieża Forest', emoji: '🌳', fact: 'The last ancient forest in Europe!' }
        ],
        funFact: "Poland has one of the last primeval forests in Europe!"
      },
      czechRepublic: {
        name: "Czech Republic",
        capital: "Prague",
        flag: "🇨🇿",
        animals: [
          { name: 'European Beaver', emoji: '🦫', fact: 'Beavers building dams in rivers!' },
          { name: 'Red Deer', emoji: '🦌', fact: 'Deer in the forests!' }
        ],
        monuments: [
          { name: 'Prague Castle', emoji: '🏰', fact: 'The biggest ancient castle in the world!' },
          { name: 'Astronomical Clock', emoji: '🕰️', fact: 'A 600-year-old clock with moving figures!' }
        ],
        geology: [
          { name: 'Bohemian Switzerland', emoji: '🏞️', fact: 'Dramatic sandstone arches and pillars!' }
        ],
        funFact: "Prague Castle is the largest ancient castle complex in the world!"
      },
      romania: {
        name: "Romania",
        capital: "Bucharest",
        flag: "🇷🇴",
        animals: [
          { name: 'Brown Bear', emoji: '🐻', fact: 'Romania has the most bears in Europe!' },
          { name: 'Wolf', emoji: '🐺', fact: 'Wolves howling in the forests!' }
        ],
        monuments: [
          { name: 'Bran Castle', emoji: '🏰', fact: 'Dracula\'s Castle — spooky!' },
          { name: 'Palace of Parliament', emoji: '🏛️', fact: 'The biggest government building in the world!' }
        ],
        geology: [
          { name: 'Carpathian Mountains', emoji: '🏔️', fact: 'Mountains full of bears and wolves!' },
          { name: 'Danube Delta', emoji: '🌿', fact: 'A huge wetland where the Danube meets the sea!' }
        ],
        funFact: "Romania has Dracula\'s Castle!"
      },
      hungary: {
        name: "Hungary",
        capital: "Budapest",
        flag: "🇭🇺",
        animals: [
          { name: 'Hungarian Grey Cattle', emoji: '🐄', fact: 'Cattle with huge horns!' },
          { name: 'Great Bustard', emoji: '🦅', fact: 'One of the heaviest flying birds!' }
        ],
        monuments: [
          { name: 'Hungarian Parliament', emoji: '🏛️', fact: 'A gorgeous building by the Danube!' },
          { name: 'Thermal Baths', emoji: '♨️', fact: 'Budapest is the city of thermal baths!' }
        ],
        geology: [
          { name: 'Lake Balaton', emoji: '🌊', fact: 'The biggest lake in Central Europe!' }
        ],
        funFact: "Budapest has over 100 thermal springs!"
      },
      estonia: {
        name: "Estonia",
        capital: "Tallinn",
        flag: "🇪🇪",
        animals: [
          { name: 'Wolf', emoji: '🐺', fact: 'Wolves in the forests!' },
          { name: 'Lynx', emoji: '🐱', fact: 'Wild cats stalking through the woods!' }
        ],
        monuments: [
          { name: 'Tallinn Old Town', emoji: '🏘️', fact: 'A perfectly preserved medieval city!' },
          { name: 'Alexander Nevsky Cathedral', emoji: '⛪', fact: 'A beautiful Russian Orthodox cathedral!' }
        ],
        geology: [
          { name: 'Bog Lands', emoji: '🌿', fact: 'Mysterious bogs with boardwalks!' }
        ],
        funFact: "Estonia is one of the most digital countries — they vote online!"
      },
      lithuania: {
        name: "Lithuania",
        capital: "Vilnius",
        flag: "🇱🇹",
        animals: [
          { name: 'White Stork', emoji: '🦅', fact: 'Storks nesting on rooftops!' },
          { name: 'European Bison', emoji: '🦬', fact: 'Bison in protected reserves!' }
        ],
        monuments: [
          { name: 'Vilnius Old Town', emoji: '🏘️', fact: 'A beautiful baroque old town!' },
          { name: 'Hill of Crosses', emoji: '✝️', fact: 'A hill covered in thousands of crosses!' }
        ],
        geology: [
          { name: 'Curonian Spit', emoji: '🏝️', fact: 'A sand dune peninsula by the sea!' }
        ],
        funFact: "Lithuania has a hill covered in over 100,000 crosses!"
      },
      belarus: {
        name: "Belarus",
        capital: "Minsk",
        flag: "🇧🇾",
        animals: [
          { name: 'European Bison', emoji: '🦬', fact: 'The symbol of Belarus!' },
          { name: 'Elk', emoji: '🫎', fact: 'Huge moose-like animals!' }
        ],
        monuments: [
          { name: 'Mir Castle', emoji: '🏰', fact: 'A beautiful 16th-century castle!' },
          { name: 'Belovezhskaya Forest', emoji: '🌳', fact: 'The biggest ancient forest — where bison live!' }
        ],
        geology: [
          { name: 'Pripyat Marshes', emoji: '🌿', fact: 'Huge wetlands called the Lungs of Europe!' }
        ],
        funFact: "Belarus has one of the last wild bison herds in Europe!"
      },
      ukraine: {
        name: "Ukraine",
        capital: "Kyiv",
        flag: "🇺🇦",
        animals: [
          { name: 'European Bison', emoji: '🦬', fact: 'Bison in the western forests!' },
          { name: 'White-tailed Eagle', emoji: '🦅', fact: 'Majestic eagles!' }
        ],
        monuments: [
          { name: 'Saint Sophia Cathedral', emoji: '⛪', fact: 'A 1,000-year-old golden-domed cathedral!' },
          { name: 'Tunnel of Love', emoji: '🌳', fact: 'A magical green tunnel of trees!' }
        ],
        geology: [
          { name: 'Carpathian Mountains', emoji: '🏔️', fact: 'Mountains in western Ukraine!' },
          { name: 'Black Sea', emoji: '🌊', fact: 'A huge sea on Ukraine\'s southern coast!' }
        ],
        funFact: "Ukraine is the biggest country entirely in Europe!"
      },
      slovakia: {
        name: "Slovakia",
        capital: "Bratislava",
        flag: "🇸🇰",
        animals: [
          { name: 'Brown Bear', emoji: '🐻', fact: 'Bears in the Tatra Mountains!' },
          { name: 'Chamois', emoji: '🐐', fact: 'Mountain goats on steep cliffs!' }
        ],
        monuments: [
          { name: 'Spiš Castle', emoji: '🏰', fact: 'One of the biggest castle ruins in Europe!' },
          { name: 'Bratislava Castle', emoji: '🏰', fact: 'A white castle overlooking the Danube!' }
        ],
        geology: [
          { name: 'Tatra Mountains', emoji: '🏔️', fact: 'The smallest mountain range in the Alps family!' }
        ],
        funFact: "Slovakia has more castles per person than almost any country!"
      },
      slovenia: {
        name: "Slovenia",
        capital: "Ljubljana",
        flag: "🇸🇮",
        animals: [
          { name: 'Olm', emoji: '🦎', fact: 'A blind cave salamander — a baby dragon!' },
          { name: 'Brown Bear', emoji: '🐻', fact: 'Bears in the forests!' }
        ],
        monuments: [
          { name: 'Lake Bled', emoji: '🌊', fact: 'A lake with a tiny island with a church!' },
          { name: 'Postojna Cave', emoji: '🪨', fact: 'A massive cave with a train inside!' }
        ],
        geology: [
          { name: 'Julian Alps', emoji: '🏔️', fact: 'Beautiful Alps with turquoise lakes!' }
        ],
        funFact: "Slovenia has a cave with a baby dragon — the olm!"
      },
      croatia: {
        name: "Croatia",
        capital: "Zagreb",
        flag: "🇭🇷",
        animals: [
          { name: 'Brown Bear', emoji: '🐻', fact: 'Bears in the mountains!' },
          { name: 'Griffon Vulture', emoji: '🦅', fact: 'Big birds on the coast!' }
        ],
        monuments: [
          { name: 'Dubrovnik', emoji: '🏰', fact: 'A walled city by the sea — King\'s Landing in Game of Thrones!' },
          { name: 'Plitvice Lakes', emoji: '🌊', fact: '16 terraced lakes connected by waterfalls!' }
        ],
        geology: [
          { name: 'Plitvice Lakes', emoji: '🌊', fact: 'Crystal clear blue-green water cascading down!' }
        ],
        funFact: "Dubrovnik was used as King\'s Landing in Game of Thrones!"
      },
      bosnia: {
        name: "Bosnia and Herzegovina",
        capital: "Sarajevo",
        flag: "🇧🇦",
        animals: [
          { name: 'Brown Bear', emoji: '🐻', fact: 'Bears in the forests!' },
          { name: 'Wolf', emoji: '🐺', fact: 'Wolves in the mountains!' }
        ],
        monuments: [
          { name: 'Stari Most Bridge', emoji: '🌉', fact: 'An old stone bridge you can jump off into the river!' },
          { name: 'Sarajevo', emoji: '🏘️', fact: 'Where East meets West!' }
        ],
        geology: [
          { name: 'Una River', emoji: '🌊', fact: 'Beautiful turquoise river with waterfalls!' }
        ],
        funFact: "Bosnia\'s Stari Most bridge was built in 1566!"
      },
      serbia: {
        name: "Serbia",
        capital: "Belgrade",
        flag: "🇷🇸",
        animals: [
          { name: 'Wolf', emoji: '🐺', fact: 'Wolves in the mountains!' },
          { name: 'Imperial Eagle', emoji: '🦅', fact: 'Majestic eagles soaring!' }
        ],
        monuments: [
          { name: 'Belgrade Fortress', emoji: '🏰', fact: 'An ancient fortress where two rivers meet!' },
          { name: 'Đavolja Varoš', emoji: '🪨', fact: 'Devil\'s Town — weird stone towers!' }
        ],
        geology: [
          { name: 'Iron Gates Gorge', emoji: '🏞️', fact: 'A dramatic gorge on the Danube!' }
        ],
        funFact: "Serbia has a place called Devil\'s Town with weird rock formations!"
      },
      montenegro: {
        name: "Montenegro",
        capital: "Podgorica",
        flag: "🇲🇪",
        animals: [
          { name: 'Brown Bear', emoji: '🐻', fact: 'Bears in the mountains!' },
          { name: 'Golden Eagle', emoji: '🦅', fact: 'Eagles over the peaks!' }
        ],
        monuments: [
          { name: 'Kotor Bay', emoji: '🏞️', fact: 'A fjord-like bay surrounded by mountains!' },
          { name: 'Sveti Stefan', emoji: '🏝️', fact: 'A tiny island village connected by a sandbar!' }
        ],
        geology: [
          { name: 'Tara River Canyon', emoji: '🏞️', fact: 'The deepest canyon in Europe!' }
        ],
        funFact: "Montenegro means \'Black Mountain\'!"
      },
      albania: {
        name: "Albania",
        capital: "Tirana",
        flag: "🇦🇱",
        animals: [
          { name: 'Golden Eagle', emoji: '🦅', fact: 'The eagle on Albania\'s flag!' },
          { name: 'Brown Bear', emoji: '🐻', fact: 'Bears in the wild mountains!' }
        ],
        monuments: [
          { name: 'Berat', emoji: '🏘️', fact: 'The City of a Thousand Windows!' },
          { name: 'Blue Eye Spring', emoji: '🌊', fact: 'A magic spring of deep blue water!' }
        ],
        geology: [
          { name: 'Albanian Riviera', emoji: '🏖️', fact: 'Beautiful beaches on the Ionian Sea!' }
        ],
        funFact: "Albania has over 750,000 bunkers — one for every 4 people!"
      },
      northMacedonia: {
        name: "North Macedonia",
        capital: "Skopje",
        flag: "🇲🇰",
        animals: [
          { name: 'Balkan Lynx', emoji: '🐱', fact: 'One of the rarest cats in the world!' },
          { name: 'Golden Eagle', emoji: '🦅', fact: 'Eagles over the mountains!' }
        ],
        monuments: [
          { name: 'Lake Ohrid', emoji: '🌊', fact: 'One of the oldest lakes in the world!' },
          { name: 'Stone Bridge', emoji: '🌉', fact: 'A 500-year-old bridge in the capital!' }
        ],
        geology: [
          { name: 'Lake Ohrid', emoji: '🌊', fact: 'A lake that\'s millions of years old!' }
        ],
        funFact: "Lake Ohrid is one of the oldest and deepest lakes in Europe!"
      },
      bulgaria: {
        name: "Bulgaria",
        capital: "Sofia",
        flag: "🇧🇬",
        animals: [
          { name: 'Brown Bear', emoji: '🐻', fact: 'Bears in Rila Mountains!' },
          { name: 'Jackal', emoji: '🐺', fact: 'Golden jackals in the lowlands!' }
        ],
        monuments: [
          { name: 'Rila Monastery', emoji: '🏛️', fact: 'A beautiful monastery in the mountains!' },
          { name: 'Alexander Nevsky Cathedral', emoji: '⛪', fact: 'One of the biggest Orthodox cathedrals!' }
        ],
        geology: [
          { name: 'Rila Mountains', emoji: '🏔️', fact: 'Mountains with seven sacred lakes!' }
        ],
        funFact: "Bulgaria invented the Cyrillic alphabet used by many countries!"
      },
      moldova: {
        name: "Moldova",
        capital: "Chișinău",
        flag: "🇲🇩",
        animals: [
          { name: 'White Stork', emoji: '🦅', fact: 'Storks nesting in the villages!' },
          { name: 'European Badger', emoji: '🦡', fact: 'Badgers in the forests!' }
        ],
        monuments: [
          { name: 'Orheiul Vechi', emoji: '🏛️', fact: 'A monastery carved into a cliff!' },
          { name: 'Mileștii Mici Wine Cellar', emoji: '🍷', fact: 'The biggest wine cellar in the world!' }
        ],
        geology: [
          { name: 'Codru Forest', emoji: '🌳', fact: 'Ancient forests!' }
        ],
        funFact: "Moldova has the world\'s biggest wine cellar — 200 km of tunnels!"
      },
      malta: {
        name: "Malta",
        capital: "Valletta",
        flag: "🇲🇹",
        animals: [
          { name: 'Blue Rock Thrush', emoji: '🐦', fact: 'Malta\'s national bird!' },
          { name: 'Mediterranean Chameleon', emoji: '🦎', fact: 'Color-changing lizards!' }
        ],
        monuments: [
          { name: 'Megalithic Temples', emoji: '🏛️', fact: 'Older than the Pyramids!' },
          { name: 'Blue Grotto', emoji: '🌊', fact: 'Glowing blue sea caves!' }
        ],
        geology: [
          { name: 'Blue Grotto', emoji: '🌊', fact: 'Sea caves that glow blue from reflected light!' }
        ],
        funFact: "Malta\'s temples are older than the Egyptian pyramids!"
      }
    }
  },
  northAmerica: {
    name: "North America",
    emoji: "🗽",
    color: "#264653",
    glowColor: "#26465380",
    description: "From polar bears to tropical beaches!",
    trains: [
      { name: "Rocky Mountaineer", emoji: "🚂", fact: "A glass-dome train through Canada's Rocky Mountains where you might see bears and eagles!", image: "images/trains/rocky_mountaineer.jpg" },
      { name: "Amtrak Acela", emoji: "🚅", fact: "The fastest train in North America zooms between Washington, New York, and Boston!", image: "images/trains/acela.jpg" },
      { name: "The Canadian", emoji: "🚂", fact: "VIA Rail's train crosses all of Canada from Toronto to Vancouver — it takes 4 days!" },
      { name: "El Chepe", emoji: "🚂", fact: "Mexico's amazing train goes through Copper Canyon, which is even bigger than the Grand Canyon!" }
    ],
    countries: {
      usa: {
        name: "United States",
        capital: "Washington D.C.",
        flag: "🇺🇸",
        animals: [
          { name: 'Bald Eagle', emoji: '🦅', fact: 'America\'s symbol — a majestic eagle!' },
          { name: 'Grizzly Bear', emoji: '🐻', fact: 'Huge bears that love salmon!' },
          { name: 'Bison', emoji: '🦬', fact: 'Millions once roamed the plains!' }
        ],
        monuments: [
          { name: 'Statue of Liberty', emoji: '🗽', fact: 'A gift from France — she holds a torch!' },
          { name: 'Grand Canyon', emoji: '🏞️', fact: 'A canyon so deep it took millions of years to make!' }
        ],
        geology: [
          { name: 'Grand Canyon', emoji: '🏜️', fact: 'Almost 2 billion years of Earth\'s history!' },
          { name: 'Yellowstone', emoji: '🌋', fact: 'A supervolcano with geysers and hot springs!' }
        ],
        trains: [
          { name: 'Amtrak Acela', emoji: '🚅', fact: 'The fastest train in North America zooms between Washington, New York, and Boston!', image: 'images/trains/acela.jpg' },
          { name: 'California Zephyr', emoji: '🚂', fact: 'A scenic train that crosses the Rocky Mountains and the Sierra Nevada!', image: "images/trains/california_zephyr.jpg" }
        ],
        funFact: "The US put the first person on the Moon!"
      },
      canada: {
        name: "Canada",
        capital: "Ottawa",
        flag: "🇨🇦",
        animals: [
          { name: 'Moose', emoji: '🫎', fact: 'The biggest deer in the world!' },
          { name: 'Beaver', emoji: '🦫', fact: 'Canada\'s symbol — they build dams!' },
          { name: 'Polar Bear', emoji: '🐻‍❄️', fact: 'The biggest bears love the icy north!' }
        ],
        monuments: [
          { name: 'CN Tower', emoji: '🗼', fact: 'Once the tallest tower in the world!' },
          { name: 'Niagara Falls', emoji: '🌊', fact: 'Huge waterfalls on the border with the US!' }
        ],
        geology: [
          { name: 'Rocky Mountains', emoji: '🏔️', fact: 'Majestic mountains stretching north!' },
          { name: 'Canadian Shield', emoji: '🪨', fact: 'Some of the oldest rocks on Earth — 4 billion years!' }
        ],
        trains: [
          { name: 'Rocky Mountaineer', emoji: '🚂', fact: 'A glass-dome train through the Rocky Mountains where you might see bears!', image: 'images/trains/rocky_mountaineer.jpg' },
          { name: 'The Canadian', emoji: '🚂', fact: 'VIA Rail\'s train crosses all of Canada from Toronto to Vancouver — 4 days!' }
        ],
        funFact: "Canada has more lakes than all other countries combined!"
      },
      mexico: {
        name: "Mexico",
        capital: "Mexico City",
        flag: "🇲🇽",
        animals: [
          { name: 'Jaguar', emoji: '🐆', fact: 'Powerful spotted cats in the jungle!' },
          { name: 'Axolotl', emoji: '🦎', fact: 'A smiling salamander that stays a baby forever!' },
          { name: 'Monarch Butterfly', emoji: '🦋', fact: 'Millions fly to Mexico every winter!' }
        ],
        monuments: [
          { name: 'Chichen Itza', emoji: '🏛️', fact: 'An ancient pyramid that makes bird sounds when you clap!' },
          { name: 'Teotihuacan', emoji: '🏛️', fact: 'The Pyramid of the Sun — one of the biggest!' }
        ],
        geology: [
          { name: 'Copper Canyon', emoji: '🏜️', fact: 'Bigger and deeper than the Grand Canyon!' },
          { name: 'Cenotes', emoji: '🌊', fact: 'Natural swimming holes in underground caves!' }
        ],
        trains: [
          { name: 'El Chepe', emoji: '🚂', fact: 'Goes through Copper Canyon which is bigger and deeper than the Grand Canyon!' }
        ],
        funFact: "Mexico gave the world chocolate!"
      },
      guatemala: {
        name: "Guatemala",
        capital: "Guatemala City",
        flag: "🇬🇹",
        animals: [
          { name: 'Quetzal', emoji: '🐦', fact: 'A beautiful bird with super long tail feathers!' },
          { name: 'Howler Monkey', emoji: '🐒', fact: 'The loudest animal in the Americas!' }
        ],
        monuments: [
          { name: 'Tikal', emoji: '🏛️', fact: 'Ancient Mayan pyramids poking above the jungle!' },
          { name: 'Lake Atitlán', emoji: '🌊', fact: 'The most beautiful lake in the world!' }
        ],
        geology: [
          { name: 'Pacaya Volcano', emoji: '🌋', fact: 'An active volcano you can hike!' }
        ],
        funFact: "Guatemala\'s national bird — the Quetzal — is on their money!"
      },
      honduras: {
        name: "Honduras",
        capital: "Tegucigalpa",
        flag: "🇭🇳",
        animals: [
          { name: 'Scarlet Macaw', emoji: '🦜', fact: 'Honduras\'s national bird — bright red!' },
          { name: 'White-faced Monkey', emoji: '🐒', fact: 'Cute monkeys in the jungle!' }
        ],
        monuments: [
          { name: 'Copán', emoji: '🏛️', fact: 'Amazing ancient Mayan ruins!' },
          { name: 'Bay Islands', emoji: '🏝️', fact: 'Beautiful islands for snorkeling!' }
        ],
        geology: [
          { name: 'Mesoamerican Reef', emoji: '🐠', fact: 'The second biggest reef in the world!' }
        ],
        funFact: "Honduras has the second largest coral reef in the world!"
      },
      elSalvador: {
        name: "El Salvador",
        capital: "San Salvador",
        flag: "🇸🇻",
        animals: [
          { name: 'Turquoise-browed Motmot', emoji: '🐦', fact: 'A bird with a pendulum tail!' },
          { name: 'Sea Turtle', emoji: '🐢', fact: 'Turtles nest on the beaches!' }
        ],
        monuments: [
          { name: 'Joya de Cerén', emoji: '🏛️', fact: 'A Mayan village preserved by volcano ash!' },
          { name: 'Santa Ana Volcano', emoji: '🌋', fact: 'A volcano with a turquoise crater lake!' }
        ],
        geology: [
          { name: 'Santa Ana Volcano', emoji: '🌋', fact: 'An active volcano with a blue-green lake inside!' }
        ],
        funFact: "El Salvador is the smallest country in Central America!"
      },
      nicaragua: {
        name: "Nicaragua",
        capital: "Managua",
        flag: "🇳🇮",
        animals: [
          { name: 'Howler Monkey', emoji: '🐒', fact: 'So loud you can hear them 3 miles away!' },
          { name: 'Sea Turtle', emoji: '🐢', fact: 'Olive ridley turtles nest here!' }
        ],
        monuments: [
          { name: 'León Cathedral', emoji: '⛪', fact: 'The biggest cathedral in Central America!' },
          { name: 'Ometepe Island', emoji: '🏝️', fact: 'An island with two volcanoes in a lake!' }
        ],
        geology: [
          { name: 'Masaya Volcano', emoji: '🌋', fact: 'You can look right into the lava!' }
        ],
        funFact: "Nicaragua has an island with two volcanoes on it!"
      },
      costaRica: {
        name: "Costa Rica",
        capital: "San José",
        flag: "🇨🇷",
        animals: [
          { name: 'Sloth', emoji: '🦥', fact: 'The slowest animal — they sleep 20 hours a day!' },
          { name: 'Toucan', emoji: '🐦', fact: 'Birds with enormous colorful beaks!' },
          { name: 'Red-eyed Tree Frog', emoji: '🐸', fact: 'Bright green frogs with red eyes!' }
        ],
        monuments: [
          { name: 'Arenal Volcano', emoji: '🌋', fact: 'A perfect cone-shaped volcano!' },
          { name: 'Monteverde Cloud Forest', emoji: '🌳', fact: 'A forest literally in the clouds!' }
        ],
        geology: [
          { name: 'Cloud Forests', emoji: '🌳', fact: 'Misty forests filled with rare plants!' }
        ],
        funFact: "Costa Rica has no army — just nature!"
      },
      panama: {
        name: "Panama",
        capital: "Panama City",
        flag: "🇵🇦",
        animals: [
          { name: 'Harpy Eagle', emoji: '🦅', fact: 'One of the biggest and strongest eagles!' },
          { name: 'Panamanian Golden Frog', emoji: '🐸', fact: 'A tiny golden frog!' }
        ],
        monuments: [
          { name: 'Panama Canal', emoji: '🚢', fact: 'A canal where ships cross between two oceans!' },
          { name: 'Casco Viejo', emoji: '🏘️', fact: 'A beautiful old neighborhood!' }
        ],
        geology: [
          { name: 'Panama Canal', emoji: '🌊', fact: 'Connects the Atlantic and Pacific Oceans!' }
        ],
        funFact: "The Panama Canal lets ships go between two oceans!"
      },
      cuba: {
        name: "Cuba",
        capital: "Havana",
        flag: "🇨🇺",
        animals: [
          { name: 'Cuban Crocodile', emoji: '🐊', fact: 'A crocodile only found in Cuba!' },
          { name: 'Bee Hummingbird', emoji: '🐦', fact: 'The smallest bird in the world!' }
        ],
        monuments: [
          { name: 'Old Havana', emoji: '🏘️', fact: 'Colorful buildings and classic cars!' },
          { name: 'Viñales Valley', emoji: '🏞️', fact: 'Beautiful green valley with limestone hills!' }
        ],
        geology: [
          { name: 'Viñales Mogotes', emoji: '🪨', fact: 'Flat-topped limestone hills millions of years old!' }
        ],
        funFact: "Cuba\'s bee hummingbird is the smallest bird in the world!"
      },
      jamaica: {
        name: "Jamaica",
        capital: "Kingston",
        flag: "🇯🇲",
        animals: [
          { name: 'Doctor Bird', emoji: '🐦', fact: 'A hummingbird with long tail streamers!' },
          { name: 'Jamaican Iguana', emoji: '🦎', fact: 'A rare blue iguana!' }
        ],
        monuments: [
          { name: 'Dunn\'s River Falls', emoji: '🌊', fact: 'Climb up a waterfall!' },
          { name: 'Bob Marley Museum', emoji: '🎵', fact: 'Home of the greatest reggae musician!' }
        ],
        geology: [
          { name: 'Blue Mountains', emoji: '🏔️', fact: 'Mountains famous for growing the best coffee!' }
        ],
        funFact: "Jamaica is the birthplace of reggae music!"
      },
      haiti: {
        name: "Haiti",
        capital: "Port-au-Prince",
        flag: "🇭🇹",
        animals: [
          { name: 'Hispaniolan Hutia', emoji: '🐁', fact: 'A rare rodent only on this island!' },
          { name: 'Rhinoceros Iguana', emoji: '🦎', fact: 'A big iguana with horn-like bumps!' }
        ],
        monuments: [
          { name: 'Citadelle Laferrière', emoji: '🏰', fact: 'The biggest fortress in the Americas!' },
          { name: 'Sans-Souci Palace', emoji: '🏛️', fact: 'Ruins of a grand palace!' }
        ],
        geology: [
          { name: 'Massif de la Hotte', emoji: '🏔️', fact: 'Mountains with unique animals found nowhere else!' }
        ],
        funFact: "Haiti was the first Black republic in the world!"
      },
      dominicanRepublic: {
        name: "Dominican Republic",
        capital: "Santo Domingo",
        flag: "🇩🇴",
        animals: [
          { name: 'Hispaniolan Solenodon', emoji: '🐁', fact: 'A venomous mammal!' },
          { name: 'Rhinoceros Iguana', emoji: '🦎', fact: 'Iguanas with horn-like bumps!' }
        ],
        monuments: [
          { name: 'Zona Colonial', emoji: '🏘️', fact: 'The oldest European city in the Americas!' },
          { name: 'Los Tres Ojos', emoji: '🌊', fact: 'Three underground lakes in a cave!' }
        ],
        geology: [
          { name: 'Pico Duarte', emoji: '🏔️', fact: 'The tallest mountain in the Caribbean!' }
        ],
        funFact: "Santo Domingo is the oldest European settlement in the Americas!"
      },
      trinidadAndTobago: {
        name: "Trinidad and Tobago",
        capital: "Port of Spain",
        flag: "🇹🇹",
        animals: [
          { name: 'Scarlet Ibis', emoji: '🐦', fact: 'A bright red bird — the national bird!' },
          { name: 'Leatherback Turtle', emoji: '🐢', fact: 'The biggest sea turtle in the world!' }
        ],
        monuments: [
          { name: 'Pitch Lake', emoji: '🏞️', fact: 'The biggest natural asphalt lake!' },
          { name: 'Caroni Swamp', emoji: '🌿', fact: 'Where scarlet ibises fly home at sunset!' }
        ],
        geology: [
          { name: 'Pitch Lake', emoji: '🪨', fact: 'A lake of natural tar — the biggest in the world!' }
        ],
        funFact: "Trinidad has the biggest natural pitch lake in the world!"
      },
      belize: {
        name: "Belize",
        capital: "Belmopan",
        flag: "🇧🇿",
        animals: [
          { name: 'Jaguar', emoji: '🐆', fact: 'Belize has the world\'s only jaguar preserve!' },
          { name: 'Toucan', emoji: '🐦', fact: 'The keel-billed toucan is the national bird!' }
        ],
        monuments: [
          { name: 'Great Blue Hole', emoji: '🌊', fact: 'A giant dark blue circle in the ocean!' },
          { name: 'Altun Ha', emoji: '🏛️', fact: 'Ancient Mayan ruins in the jungle!' }
        ],
        geology: [
          { name: 'Great Blue Hole', emoji: '🌊', fact: 'A sinkhole 124 meters deep in the middle of the reef!' }
        ],
        funFact: "Belize has the only jaguar preserve in the world!"
      },
      greenland: {
        name: "Greenland",
        capital: "Nuuk",
        flag: "🇬🇱",
        animals: [
          { name: 'Polar Bear', emoji: '🐻‍❄️', fact: 'Polar bears on the ice!' },
          { name: 'Musk Ox', emoji: '🐃', fact: 'Shaggy animals built for the cold!' },
          { name: 'Arctic Hare', emoji: '🐇', fact: 'White hares in the snow!' }
        ],
        monuments: [
          { name: 'Ilulissat Icefjord', emoji: '🧊', fact: 'Icebergs breaking off glaciers!' },
          { name: 'Northern Lights', emoji: '🌌', fact: 'Amazing aurora in the sky!' }
        ],
        geology: [
          { name: 'Ice Sheet', emoji: '🧊', fact: 'An ice sheet covering 80% of the island!' }
        ],
        funFact: "Greenland is the biggest island in the world!"
      }
    }
  },
  southAmerica: {
    name: "South America",
    emoji: "🌎",
    color: "#E9C46A",
    glowColor: "#E9C46A80",
    description: "Rainforests, mountains, and colorful cultures!",
    trains: [
      { name: "Tren a las Nubes", emoji: "🚂", fact: "The 'Train to the Clouds' climbs to 4,220 meters high in Argentina — like riding above the clouds!", image: "images/trains/tren_nubes.jpg" },
      { name: "PeruRail to Machu Picchu", emoji: "🚂", fact: "This train takes you through the Sacred Valley to the lost city of Machu Picchu!", image: "images/trains/perurail_machu_picchu.jpg" },
      { name: "Serra Verde Express", emoji: "🚂", fact: "Brazil's jungle train goes through the Atlantic Rainforest with amazing waterfalls!" }
    ],
    countries: {
      brazil: {
        name: "Brazil",
        capital: "Brasília",
        flag: "🇧🇷",
        animals: [
          { name: 'Toucan', emoji: '🐦', fact: 'Big colorful beaks!' },
          { name: 'Jaguar', emoji: '🐆', fact: 'The biggest cat in the Americas!' },
          { name: 'Capybara', emoji: '🐹', fact: 'The biggest rodent — like a giant guinea pig!' }
        ],
        monuments: [
          { name: 'Christ the Redeemer', emoji: '🗽', fact: 'A huge statue with open arms on a mountain!' },
          { name: 'Amazon Rainforest', emoji: '🌳', fact: 'The biggest rainforest in the world!' }
        ],
        geology: [
          { name: 'Amazon River', emoji: '🌊', fact: 'The mightiest river on Earth!' },
          { name: 'Iguazu Falls', emoji: '🌊', fact: '275 waterfalls in a row!' }
        ],
        trains: [
          { name: 'Serra Verde Express', emoji: '🚂', fact: 'A jungle train through the Atlantic Rainforest with amazing waterfalls!' }
        ],
        funFact: "Brazil has more animal species than any country!"
      },
      peru: {
        name: "Peru",
        capital: "Lima",
        flag: "🇵🇪",
        animals: [
          { name: 'Llama', emoji: '🦙', fact: 'Fluffy animals that spit when annoyed!' },
          { name: 'Andean Condor', emoji: '🦅', fact: 'One of the biggest flying birds!' },
          { name: 'Alpaca', emoji: '🦙', fact: 'Super soft fluffy animals!' }
        ],
        monuments: [
          { name: 'Machu Picchu', emoji: '🏛️', fact: 'A lost city of the Incas high in the mountains!' },
          { name: 'Nazca Lines', emoji: '🏜️', fact: 'Giant drawings on the desert floor!' }
        ],
        geology: [
          { name: 'Andes Mountains', emoji: '🏔️', fact: 'The longest mountain range in the world!' },
          { name: 'Colca Canyon', emoji: '🏜️', fact: 'Twice as deep as the Grand Canyon!' }
        ],
        trains: [
          { name: 'PeruRail to Machu Picchu', emoji: '🚂', fact: 'A train through the Sacred Valley to the ancient lost city of Machu Picchu!', image: "images/trains/perurail_machu_picchu.jpg" }
        ],
        funFact: "Machu Picchu was hidden for 400 years!"
      },
      argentina: {
        name: "Argentina",
        capital: "Buenos Aires",
        flag: "🇦🇷",
        animals: [
          { name: 'Penguin', emoji: '🐧', fact: 'Thousands of penguins on the coast!' },
          { name: 'Andean Condor', emoji: '🦅', fact: 'Huge birds with 10-foot wingspans!' }
        ],
        monuments: [
          { name: 'Perito Moreno Glacier', emoji: '🧊', fact: 'A glacier that cracks and crashes into a lake!' },
          { name: 'Iguazu Falls', emoji: '🌊', fact: 'Hundreds of waterfalls wider than Niagara!' }
        ],
        geology: [
          { name: 'Patagonia', emoji: '🏔️', fact: 'Wild land of glaciers and mountains!' },
          { name: 'Pampas', emoji: '🌾', fact: 'Endless flat grasslands!' }
        ],
        trains: [
          { name: 'Tren a las Nubes', emoji: '🚂', fact: 'The Train to the Clouds climbs to 4,220 meters — like riding above the clouds!', image: 'images/trains/tren_nubes.jpg' }
        ],
        funFact: "Argentina invented the tango dance!"
      },
      colombia: {
        name: "Colombia",
        capital: "Bogotá",
        flag: "🇨🇴",
        animals: [
          { name: 'Spectacled Bear', emoji: '🐻', fact: 'The only bear in South America — it wears glasses!' },
          { name: 'Poison Dart Frog', emoji: '🐸', fact: 'Tiny colorful frogs that are super toxic!' }
        ],
        monuments: [
          { name: 'Cartagena Old City', emoji: '🏰', fact: 'A beautiful walled city by the sea!' },
          { name: 'Lost City', emoji: '🏛️', fact: 'An ancient city older than Machu Picchu!' }
        ],
        geology: [
          { name: 'Caño Cristales', emoji: '🌊', fact: 'The River of Five Colors — the most beautiful river!' }
        ],
        funFact: "Colombia has the most bird species of any country!"
      },
      venezuela: {
        name: "Venezuela",
        capital: "Caracas",
        flag: "🇻🇪",
        animals: [
          { name: 'Capybara', emoji: '🐹', fact: 'Giant rodents by the rivers!' },
          { name: 'Scarlet Macaw', emoji: '🦜', fact: 'Bright red parrots!' }
        ],
        monuments: [
          { name: 'Angel Falls', emoji: '🌊', fact: 'The tallest waterfall in the world — water falls almost a KILOMETER!' },
          { name: 'Tepuis', emoji: '🪨', fact: 'Flat-topped mountains above the clouds!' }
        ],
        geology: [
          { name: 'Angel Falls', emoji: '🌊', fact: '979 meters tall — the highest waterfall on Earth!' },
          { name: 'Tepuis', emoji: '🪨', fact: 'Ancient flat-topped mountains — the inspiration for UP!' }
        ],
        funFact: "Angel Falls is the tallest waterfall in the world!"
      },
      ecuador: {
        name: "Ecuador",
        capital: "Quito",
        flag: "🇪🇨",
        animals: [
          { name: 'Giant Tortoise', emoji: '🐢', fact: 'Tortoises that can live 150 years!' },
          { name: 'Marine Iguana', emoji: '🦎', fact: 'The only lizard that swims in the ocean!' },
          { name: 'Blue-footed Booby', emoji: '🐦', fact: 'Birds with bright blue feet!' }
        ],
        monuments: [
          { name: 'Galápagos Islands', emoji: '🏝️', fact: 'Islands that inspired Darwin\'s theory of evolution!' },
          { name: 'Quito Old Town', emoji: '🏘️', fact: 'One of the best-preserved old towns in South America!' }
        ],
        geology: [
          { name: 'Galápagos Islands', emoji: '🌋', fact: 'Volcanic islands with unique animals!' },
          { name: 'Avenue of Volcanoes', emoji: '🌋', fact: 'A valley lined with snow-capped volcanoes!' }
        ],
        funFact: "Ecuador is named after the Equator that runs through it!"
      },
      bolivia: {
        name: "Bolivia",
        capital: "Sucre",
        flag: "🇧🇴",
        animals: [
          { name: 'Llama', emoji: '🦙', fact: 'Fluffy llamas on every mountain!' },
          { name: 'Condor', emoji: '🦅', fact: 'Condors soaring over the mountains!' }
        ],
        monuments: [
          { name: 'Salar de Uyuni', emoji: '🌊', fact: 'The biggest salt flat — a giant mirror when wet!' },
          { name: 'Tiwanaku', emoji: '🏛️', fact: 'Ruins of a civilization older than the Incas!' }
        ],
        geology: [
          { name: 'Salar de Uyuni', emoji: '🏜️', fact: '10,000 square km of pure white salt!' },
          { name: 'Lake Titicaca', emoji: '🌊', fact: 'The highest navigable lake in the world!' }
        ],
        funFact: "Bolivia\'s salt flat becomes the world\'s biggest mirror when it rains!"
      },
      chile: {
        name: "Chile",
        capital: "Santiago",
        flag: "🇨🇱",
        animals: [
          { name: 'Penguin', emoji: '🐧', fact: 'Penguins on Chile\'s southern coast!' },
          { name: 'Pudu', emoji: '🦌', fact: 'The smallest deer in the world!' },
          { name: 'Condor', emoji: '🦅', fact: 'Chile\'s national bird!' }
        ],
        monuments: [
          { name: 'Easter Island', emoji: '🗿', fact: 'Mysterious giant stone heads!' },
          { name: 'Torres del Paine', emoji: '🏔️', fact: 'Dramatic granite towers!' }
        ],
        geology: [
          { name: 'Atacama Desert', emoji: '🏜️', fact: 'The driest place on Earth!' },
          { name: 'Patagonia', emoji: '🏔️', fact: 'Wild glaciers and mountains!' }
        ],
        funFact: "Chile is the longest and narrowest country!"
      },
      paraguay: {
        name: "Paraguay",
        capital: "Asunción",
        flag: "🇵🇾",
        animals: [
          { name: 'Jaguar', emoji: '🐆', fact: 'Big cats in the Chaco!' },
          { name: 'Giant Anteater', emoji: '🐾', fact: 'Animals with super long tongues for eating ants!' }
        ],
        monuments: [
          { name: 'Jesuit Missions', emoji: '🏛️', fact: 'Ruins of old religious communities!' },
          { name: 'Itaipu Dam', emoji: '🏗️', fact: 'One of the biggest dams in the world!' }
        ],
        geology: [
          { name: 'Gran Chaco', emoji: '🌳', fact: 'A huge wild region of forests and plains!' }
        ],
        funFact: "Paraguay gets almost all its electricity from one dam!"
      },
      uruguay: {
        name: "Uruguay",
        capital: "Montevideo",
        flag: "🇺🇾",
        animals: [
          { name: 'Southern Right Whale', emoji: '🐋', fact: 'Whales visit the coast!' },
          { name: 'Capybara', emoji: '🐹', fact: 'Giant friendly rodents!' }
        ],
        monuments: [
          { name: 'Colonia del Sacramento', emoji: '🏘️', fact: 'A charming old Portuguese town!' },
          { name: 'Casapueblo', emoji: '🏰', fact: 'A building that looks like a living sculpture!' }
        ],
        geology: [
          { name: 'Rio de la Plata', emoji: '🌊', fact: 'The widest river in the world!' }
        ],
        funFact: "Uruguay was the first country to legalize many things!"
      },
      guyana: {
        name: "Guyana",
        capital: "Georgetown",
        flag: "🇬🇾",
        animals: [
          { name: 'Jaguar', emoji: '🐆', fact: 'Jaguars in the rainforest!' },
          { name: 'Harpy Eagle', emoji: '🦅', fact: 'One of the strongest eagles!' },
          { name: 'Giant Otter', emoji: '🦦', fact: 'Otters 2 meters long!' }
        ],
        monuments: [
          { name: 'Kaieteur Falls', emoji: '🌊', fact: 'A single-drop waterfall 4x taller than Niagara!' },
          { name: 'St. George\'s Cathedral', emoji: '⛪', fact: 'One of the tallest wooden buildings!' }
        ],
        geology: [
          { name: 'Kaieteur Falls', emoji: '🌊', fact: 'One of the most powerful waterfalls!' }
        ],
        funFact: "Guyana is the only English-speaking country in South America!"
      },
      suriname: {
        name: "Suriname",
        capital: "Paramaribo",
        flag: "🇸🇷",
        animals: [
          { name: 'Jaguar', emoji: '🐆', fact: 'Jaguars in the jungle!' },
          { name: 'Green Sea Turtle', emoji: '🐢', fact: 'Turtles nesting on the beaches!' }
        ],
        monuments: [
          { name: 'Fort Zeelandia', emoji: '🏰', fact: 'An old Dutch fort by the river!' },
          { name: 'Paramaribo Historic City', emoji: '🏘️', fact: 'A beautiful wooden colonial city!' }
        ],
        geology: [
          { name: 'Central Suriname Nature Reserve', emoji: '🌳', fact: 'Untouched tropical rainforest!' }
        ],
        funFact: "Suriname is the smallest country in South America!"
      },
      frenchGuiana: {
        name: "French Guiana",
        capital: "Cayenne",
        flag: "🇬🇫",
        animals: [
          { name: 'Jaguar', emoji: '🐆', fact: 'Big cats in dense jungle!' },
          { name: 'Leatherback Turtle', emoji: '🐢', fact: 'Giant turtles nesting here!' }
        ],
        monuments: [
          { name: 'Guiana Space Centre', emoji: '🚀', fact: 'Where European rockets launch into space!' },
          { name: 'Îles du Salut', emoji: '🏝️', fact: 'Islands that were once a famous prison!' }
        ],
        geology: [
          { name: 'Amazon Rainforest', emoji: '🌳', fact: '98% of French Guiana is covered in forest!' }
        ],
        funFact: "European rockets launch from French Guiana!"
      }
    }
  },
  oceania: {
    name: "Oceania",
    emoji: "🏝️",
    color: "#6A4C93",
    glowColor: "#6A4C9380",
    description: "Beautiful islands and unique animals!",
    trains: [
      { name: "The Ghan", emoji: "🚂", fact: "This train crosses the entire Australian outback from Adelaide to Darwin — 2,979 km through the red desert!", image: "images/trains/ghan.jpg" },
      { name: "TranzAlpine", emoji: "🚂", fact: "New Zealand's most scenic train goes through the Southern Alps from one coast to the other!", image: "images/trains/tranzalpine.jpg" },
      { name: "Kuranda Scenic Railway", emoji: "🚂", fact: "A rainforest train in Australia that goes past waterfalls and through 15 tunnels!", image: "images/trains/kuranda_train.jpg" },
      { name: "Papua New Guinea Lae Railway", emoji: "🚂", fact: "One of the few trains in the Pacific islands, running through tropical jungle!", image: "images/trains/png_train.png" }
    ],
    countries: {
      australia: {
        name: "Australia",
        capital: "Canberra",
        flag: "🇦🇺",
        animals: [
          { name: 'Kangaroo', emoji: '🦘', fact: 'They hop everywhere with babies in their pouches!' },
          { name: 'Koala', emoji: '🐨', fact: 'Sleepy bears that eat eucalyptus!' },
          { name: 'Platypus', emoji: '🦆', fact: 'Part duck, part beaver — and venomous!' }
        ],
        monuments: [
          { name: 'Sydney Opera House', emoji: '🏛️', fact: 'A building shaped like seashells!' },
          { name: 'Uluru', emoji: '🪨', fact: 'A giant sacred red rock in the desert!' }
        ],
        geology: [
          { name: 'Great Barrier Reef', emoji: '🐠', fact: 'The biggest living structure on Earth!' },
          { name: 'Outback', emoji: '🏜️', fact: 'A vast red desert in the middle!' }
        ],
        trains: [
          { name: 'The Ghan', emoji: '🚂', fact: 'Crosses the entire Australian outback — 2,979 km through the red desert!', image: 'images/trains/ghan.jpg' },
          { name: 'Indian Pacific', emoji: '🚂', fact: 'Goes from Sydney to Perth all the way across Australia — it takes 3 days!' }
        ],
        funFact: "Australia has animals found nowhere else on Earth!"
      },
      newZealand: {
        name: "New Zealand",
        capital: "Wellington",
        flag: "🇳🇿",
        animals: [
          { name: 'Kiwi', emoji: '🐦', fact: 'A fluffy bird that can\'t fly — the national symbol!' },
          { name: 'Tuatara', emoji: '🦎', fact: 'A dinosaur relative — living fossil!' },
          { name: 'Hector\'s Dolphin', emoji: '🐬', fact: 'The smallest dolphin in the world!' }
        ],
        monuments: [
          { name: 'Milford Sound', emoji: '🏞️', fact: 'A stunning fjord surrounded by waterfalls!' },
          { name: 'Hobbiton', emoji: '🏘️', fact: 'The real-life Shire from Lord of the Rings!' }
        ],
        geology: [
          { name: 'Southern Alps', emoji: '🏔️', fact: 'Snowy mountains on the South Island!' },
          { name: 'Rotorua Geysers', emoji: '♨️', fact: 'Bubbling mud pools and shooting geysers!' }
        ],
        trains: [
          { name: 'TranzAlpine', emoji: '🚂', fact: 'Goes through the Southern Alps from one coast of New Zealand to the other!', image: 'images/trains/tranzalpine.jpg' }
        ],
        funFact: "New Zealand was the first country to let women vote!"
      },
      fiji: {
        name: "Fiji",
        capital: "Suva",
        flag: "🇫🇯",
        animals: [
          { name: 'Fiji Crested Iguana', emoji: '🦎', fact: 'A bright green iguana found only here!' },
          { name: 'Fruit Bat', emoji: '🦇', fact: 'Big bats that eat fruit!' }
        ],
        monuments: [
          { name: 'Fiji Coral Reefs', emoji: '🐠', fact: 'Beautiful reefs for snorkeling!' },
          { name: 'Garden of the Sleeping Giant', emoji: '🌺', fact: 'A garden with 2,000 orchids!' }
        ],
        geology: [
          { name: 'Coral Reefs', emoji: '🐠', fact: 'Some of the healthiest coral reefs in the world!' }
        ],
        funFact: "Fiji has over 330 islands!"
      },
      papuaNewGuinea: {
        name: "Papua New Guinea",
        capital: "Port Moresby",
        flag: "🇵🇬",
        animals: [
          { name: 'Bird of Paradise', emoji: '🐦', fact: 'The most beautiful birds with amazing dances!' },
          { name: 'Tree Kangaroo', emoji: '🦘', fact: 'Kangaroos that live in trees!' },
          { name: 'Cassowary', emoji: '🦃', fact: 'A giant bird that can\'t fly but can kick hard!' }
        ],
        monuments: [
          { name: 'Kokoda Track', emoji: '🏞️', fact: 'A famous jungle hiking trail!' },
          { name: 'Sepik River Art', emoji: '🎨', fact: 'Amazing carved masks and art!' }
        ],
        geology: [
          { name: 'Active Volcanoes', emoji: '🌋', fact: 'Lots of volcanic activity!' },
          { name: 'Coral Reefs', emoji: '🐠', fact: 'Incredible marine life around the islands!' }
        ],
        funFact: "Papua New Guinea has over 800 languages — the most in the world!"
      }
    }
  },
  antarctica: {
    name: "Antarctica",
    emoji: "🧊",
    color: "#A8DADC",
    glowColor: "#A8DADC80",
    description: "The coldest place on Earth!",
    trains: [
      { name: "Antarctica Snow Cruiser", emoji: "🚂", fact: "Not really a train, but a huge vehicle built in 1939 to explore Antarctica — it got stuck in the snow!", image: "images/trains/snow_cruiser.jpg" }
    ],
    countries: {
      antarctica: {
        name: "Antarctica",
        capital: "No Capital",
        flag: "🏳️",
        animals: [
          { name: 'Emperor Penguin', emoji: '🐧', fact: 'Dad penguins keep eggs warm on their feet!' },
          { name: 'Leopard Seal', emoji: '🦭', fact: 'Sneaky seal hunters under the ice!' },
          { name: 'Blue Whale', emoji: '🐋', fact: 'The biggest animal that ever lived!' }
        ],
        monuments: [
          { name: 'South Pole Station', emoji: '🏛️', fact: 'Scientists live here to study ice and weather!' },
          { name: 'McMurdo Station', emoji: '🏗️', fact: 'The biggest research station in Antarctica!' }
        ],
        geology: [
          { name: 'Antarctic Ice Sheet', emoji: '🧊', fact: 'Holds most of the world\'s fresh water!' },
          { name: 'Mount Erebus', emoji: '🌋', fact: 'The southernmost active volcano!' }
        ],
        funFact: "Antarctica is a desert — it hardly ever rains or snows!"
      }
    }
  }
};
