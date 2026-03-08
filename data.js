// World Map Explorer - Data Layer
// Curated facts for kids aged 3-5

const WORLD_DATA = {
  africa: {
    name: "Africa",
    emoji: "🌍",
    color: "#F4A261",
    glowColor: "#F4A26180",
    description: "The land of safaris and the Sahara Desert!",
    trains: [
      { name: "The Blue Train", image: "images/trains/blue_train.jpg", fact: "A super fancy hotel on wheels that travels across South Africa!" }
    ],
    countries: {
      kenya: {
        name: "Kenya",
        capital: "Nairobi",
        flag: "🇰🇪",
        animals: [
          { name: "Lion", emoji: "🦁", fact: "Lions are the king of the jungle!" },
          { name: "Elephant", emoji: "🐘", fact: "Elephants never forget!" },
          { name: "Giraffe", emoji: "🦒", fact: "Giraffes are the tallest animals!" }
        ],
        monuments: [
          { name: "Masai Mara", emoji: "🏞️", fact: "Millions of animals walk across this park every year!" },
          { name: "Mount Kenya", emoji: "🏔️", fact: "This tall mountain has snow on top even though Kenya is hot!" }
        ],
        geology: [
          { name: "Great Rift Valley", emoji: "🏜️", fact: "A giant crack in the Earth stretching thousands of miles!" }
        ],
        funFact: "Kenya is home to the fastest animal on land — the cheetah! 🐆"
      },
      egypt: {
        name: "Egypt",
        capital: "Cairo",
        flag: "🇪🇬",
        animals: [
          { name: "Camel", emoji: "🐪", fact: "Camels can go for weeks without water!" },
          { name: "Cobra", emoji: "🐍", fact: "The Egyptian cobra was a symbol of kings!" }
        ],
        monuments: [
          { name: "Pyramids of Giza", emoji: "🔺", fact: "The pyramids are over 4,000 years old!" },
          { name: "The Sphinx", emoji: "🗿", fact: "A giant statue with a lion's body and a human head!" }
        ],
        geology: [
          { name: "Nile River", emoji: "🌊", fact: "The longest river in the world!" },
          { name: "Sahara Desert", emoji: "🏜️", fact: "The biggest hot desert on Earth!" }
        ],
        funFact: "Ancient Egyptians loved cats so much they treated them like royalty! 🐱"
      },
      southAfrica: {
        name: "South Africa",
        capital: "Pretoria",
        flag: "🇿🇦",
        animals: [
          { name: "Penguin", emoji: "🐧", fact: "Yes, penguins live in Africa too!" },
          { name: "Rhino", emoji: "🦏", fact: "Rhinos have been around since the time of dinosaurs!" },
          { name: "Hippo", emoji: "🦛", fact: "Hippos can hold their breath for 5 minutes!" }
        ],
        monuments: [
          { name: "Table Mountain", emoji: "⛰️", fact: "A flat-topped mountain that looks like a giant table!" }
        ],
        geology: [
          { name: "Cradle of Humankind", emoji: "🦴", fact: "Some of the oldest human bones were found here!" }
        ],
        funFact: "South Africa has THREE capital cities! 🏙️"
      },
      madagascar: {
        name: "Madagascar",
        capital: "Antananarivo",
        flag: "🇲🇬",
        animals: [
          { name: "Lemur", emoji: "🐒", fact: "Lemurs only live on this island!" },
          { name: "Chameleon", emoji: "🦎", fact: "Chameleons can change color and look two ways at once!" }
        ],
        monuments: [
          { name: "Avenue of the Baobabs", emoji: "🌳", fact: "Giant upside-down looking trees line this road!" }
        ],
        geology: [
          { name: "Tsingy Rocks", emoji: "🪨", fact: "Sharp, pointy rocks that look like a stone forest!" }
        ],
        funFact: "Madagascar is the 4th largest island in the world! 🏝️"
      }
    }
  },
  asia: {
    name: "Asia",
    emoji: "🌏",
    color: "#E76F51",
    glowColor: "#E76F5180",
    description: "The biggest continent with amazing temples and animals!",
    trains: [
      { name: "Shinkansen", image: "images/trains/shinkansen_train.jpg", fact: "Japan's bullet train travels up to 320 km/h and looks like a spaceship!" },
      { name: "Shanghai Maglev", image: "images/trains/maglev.jpg", fact: "It floats on magnets and is the fastest train in the world!" }
    ],
    countries: {
      india: {
        name: "India",
        capital: "New Delhi",
        flag: "🇮🇳",
        animals: [
          { name: "Tiger", emoji: "🐯", fact: "India has the most tigers in the world!" },
          { name: "Peacock", emoji: "🦚", fact: "The peacock is India's national bird!" },
          { name: "Elephant", emoji: "🐘", fact: "Indian elephants are smaller than African elephants!" }
        ],
        monuments: [
          { name: "Taj Mahal", emoji: "🕌", fact: "A beautiful white marble building built for love!" },
          { name: "Red Fort", emoji: "🏰", fact: "A giant red castle in the capital city!" }
        ],
        geology: [
          { name: "Himalayas", emoji: "🏔️", fact: "The tallest mountains in the whole world!" },
          { name: "Ganges River", emoji: "🌊", fact: "A very special river that millions of people visit!" }
        ],
        funFact: "India invented the number zero! 0️⃣"
      },
      china: {
        name: "China",
        capital: "Beijing",
        flag: "🇨🇳",
        animals: [
          { name: "Giant Panda", emoji: "🐼", fact: "Pandas eat bamboo all day — up to 38 kg!" },
          { name: "Red Panda", emoji: "🦊", fact: "Red pandas are not actually related to giant pandas!" }
        ],
        monuments: [
          { name: "Great Wall", emoji: "🧱", fact: "So long you could see it from very far away!" },
          { name: "Terracotta Army", emoji: "🗿", fact: "Thousands of clay soldiers buried underground!" }
        ],
        geology: [
          { name: "Yangtze River", emoji: "🌊", fact: "The longest river in Asia!" },
          { name: "Zhangjiajie Pillars", emoji: "⛰️", fact: "Tall stone pillars that inspired a famous movie!" }
        ],
        funFact: "Chinese New Year has dragon dances and fireworks! 🐉"
      },
      japan: {
        name: "Japan",
        capital: "Tokyo",
        flag: "🇯🇵",
        animals: [
          { name: "Snow Monkey", emoji: "🐒", fact: "These monkeys love soaking in hot springs!" },
          { name: "Tanuki", emoji: "🦝", fact: "A raccoon dog that's famous in Japanese stories!" }
        ],
        monuments: [
          { name: "Mount Fuji", emoji: "🗻", fact: "A beautiful snow-capped volcano!" },
          { name: "Torii Gates", emoji: "⛩️", fact: "Bright orange gates that lead to magical shrines!" }
        ],
        geology: [
          { name: "Hot Springs", emoji: "♨️", fact: "Japan has thousands of natural hot baths!" },
          { name: "Volcanoes", emoji: "🌋", fact: "Japan has over 100 active volcanoes!" }
        ],
        funFact: "Japan has a train that goes faster than a race car! 🚄"
      },
      thailand: {
        name: "Thailand",
        capital: "Bangkok",
        flag: "🇹🇭",
        animals: [
          { name: "Elephant", emoji: "🐘", fact: "Elephants are Thailand's national animal!" },
          { name: "Whale Shark", emoji: "🦈", fact: "The biggest fish in the sea — but super gentle!" }
        ],
        monuments: [
          { name: "Grand Palace", emoji: "🏯", fact: "A golden palace that sparkles in the sun!" },
          { name: "Floating Markets", emoji: "🛶", fact: "Markets on boats selling yummy food!" }
        ],
        geology: [
          { name: "Limestone Cliffs", emoji: "🪨", fact: "Tall cliffs rising right out of the ocean!" }
        ],
        funFact: "Thailand means 'Land of the Free'! 🌟"
      },
      uae: {
        name: "UAE",
        capital: "Abu Dhabi",
        flag: "🇦🇪",
        animals: [
          { name: "Arabian Oryx", emoji: "🦌", fact: "A white antelope that lives in the desert!" },
          { name: "Falcon", emoji: "🦅", fact: "Falcons are the national bird — some even fly on airplanes!" }
        ],
        monuments: [
          { name: "Burj Khalifa", emoji: "🏗️", fact: "The tallest building in the whole world!" },
          { name: "Sheikh Zayed Mosque", emoji: "🕌", fact: "A huge white mosque with 82 domes!" }
        ],
        geology: [
          { name: "Sand Dunes", emoji: "🏜️", fact: "Giant hills of sand you can slide down!" }
        ],
        funFact: "Dubai has an indoor ski slope in the middle of the desert! ⛷️"
      }
    }
  },
  europe: {
    name: "Europe",
    emoji: "🏰",
    color: "#2A9D8F",
    glowColor: "#2A9D8F80",
    description: "Home to castles, artists, and the Eiffel Tower!",
    trains: [
      { name: "TGV", image: "images/trains/tgv.jpg", fact: "France's high-speed train connects cities super fast!" },
      { name: "Glacier Express", image: "images/trains/glacier_express.jpg", fact: "Travels slowly through the Swiss Alps so you can see the snowy mountains!" },
      { name: "Eurostar", image: "images/trains/eurostar.jpg", fact: "It travels under the ocean in a long tunnel between England and France!" }
    ],
    countries: {
      france: {
        name: "France",
        capital: "Paris",
        flag: "🇫🇷",
        animals: [
          { name: "Flamingo", emoji: "🦩", fact: "Pink flamingos live in the south of France!" },
          { name: "Alpine Ibex", emoji: "🐐", fact: "Mountain goats that climb almost straight up!" }
        ],
        monuments: [
          { name: "Eiffel Tower", emoji: "🗼", fact: "Made of 7,300 tons of iron — and it was meant to be temporary!" },
          { name: "Palace of Versailles", emoji: "🏰", fact: "A palace with 2,300 rooms and giant gardens!" }
        ],
        geology: [
          { name: "Mont Blanc", emoji: "🏔️", fact: "The tallest mountain in Western Europe!" },
          { name: "Lavender Fields", emoji: "💜", fact: "Purple flower fields that smell amazing!" }
        ],
        funFact: "The French eat about 25,000 tons of snails every year! 🐌"
      },
      italy: {
        name: "Italy",
        capital: "Rome",
        flag: "🇮🇹",
        animals: [
          { name: "Italian Wolf", emoji: "🐺", fact: "Wolves raised the founder of Rome in an old story!" },
          { name: "Dolphin", emoji: "🐬", fact: "Dolphins swim in the waters around Italy!" }
        ],
        monuments: [
          { name: "Colosseum", emoji: "🏟️", fact: "An ancient arena where gladiators fought!" },
          { name: "Leaning Tower of Pisa", emoji: "🗼", fact: "This tower started leaning when they were still building it!" }
        ],
        geology: [
          { name: "Mount Vesuvius", emoji: "🌋", fact: "The volcano that buried a whole city in ash!" }
        ],
        funFact: "Italians invented pizza and ice cream! 🍕🍦"
      },
      uk: {
        name: "United Kingdom",
        capital: "London",
        flag: "🇬🇧",
        animals: [
          { name: "Red Fox", emoji: "🦊", fact: "Foxes live even in the middle of London!" },
          { name: "Puffin", emoji: "🐧", fact: "Cute birds with colorful beaks that live on cliffs!" }
        ],
        monuments: [
          { name: "Big Ben", emoji: "🕐", fact: "A giant clock tower that's been ticking since 1859!" },
          { name: "Stonehenge", emoji: "🪨", fact: "Mysterious giant stones placed 5,000 years ago!" }
        ],
        geology: [
          { name: "White Cliffs of Dover", emoji: "🏖️", fact: "Bright white cliffs made of tiny sea creature shells!" }
        ],
        funFact: "The Queen's corgis have their own chef! 🐕👑"
      },
      greece: {
        name: "Greece",
        capital: "Athens",
        flag: "🇬🇷",
        animals: [
          { name: "Sea Turtle", emoji: "🐢", fact: "Endangered turtles nest on Greek beaches!" },
          { name: "Pelican", emoji: "🦢", fact: "A famous pelican named Petros lived on a Greek island!" }
        ],
        monuments: [
          { name: "Parthenon", emoji: "🏛️", fact: "An ancient temple on top of a hill in Athens!" },
          { name: "Santorini", emoji: "🏘️", fact: "White and blue buildings on a volcanic island!" }
        ],
        geology: [
          { name: "Volcanic Islands", emoji: "🌋", fact: "Some Greek islands were made by volcanoes!" }
        ],
        funFact: "The Olympic Games were invented in ancient Greece! 🏅"
      }
    }
  },
  northAmerica: {
    name: "North America",
    emoji: "🗽",
    color: "#264653",
    glowColor: "#26465380",
    description: "From frozen Alaska to tropical beaches!",
    trains: [
      { name: "Rocky Mountaineer", image: "images/trains/rocky_mountaineer.jpg", fact: "Has glass-dome roofs so you can look up at the giant mountains in Canada!" },
      { name: "Amtrak Acela", image: "images/trains/acela.jpg", fact: "The fastest train in the USA, traveling between big cities like New York and Washington!" }
    ],
    countries: {
      usa: {
        name: "United States",
        capital: "Washington D.C.",
        flag: "🇺🇸",
        animals: [
          { name: "Bald Eagle", emoji: "🦅", fact: "The bald eagle is America's national bird!" },
          { name: "Bison", emoji: "🦬", fact: "Giant fluffy cows that once roamed in millions!" },
          { name: "Grizzly Bear", emoji: "🐻", fact: "Grizzly bears can run as fast as a horse!" }
        ],
        monuments: [
          { name: "Statue of Liberty", emoji: "🗽", fact: "A giant green statue that was a gift from France!" },
          { name: "Grand Canyon", emoji: "🏜️", fact: "A canyon so big it took millions of years to form!" }
        ],
        geology: [
          { name: "Yellowstone", emoji: "♨️", fact: "A park sitting on top of a supervolcano!" },
          { name: "Rocky Mountains", emoji: "⛰️", fact: "Mountains stretching from Canada to New Mexico!" }
        ],
        funFact: "Americans eat 3 billion pizzas every year! 🍕"
      },
      canada: {
        name: "Canada",
        capital: "Ottawa",
        flag: "🇨🇦",
        animals: [
          { name: "Moose", emoji: "🫎", fact: "Moose are the biggest deer in the world!" },
          { name: "Beaver", emoji: "🦫", fact: "Beavers build dams out of sticks and mud!" },
          { name: "Polar Bear", emoji: "🐻‍❄️", fact: "Polar bears have BLACK skin under white fur!" }
        ],
        monuments: [
          { name: "Niagara Falls", emoji: "💧", fact: "A giant waterfall on the border with the USA!" },
          { name: "CN Tower", emoji: "🗼", fact: "You can see four countries from the top!" }
        ],
        geology: [
          { name: "Canadian Rockies", emoji: "🏔️", fact: "Mountains with beautiful blue glacier lakes!" }
        ],
        funFact: "Canada produces most of the world's maple syrup! 🍁"
      },
      mexico: {
        name: "Mexico",
        capital: "Mexico City",
        flag: "🇲🇽",
        animals: [
          { name: "Monarch Butterfly", emoji: "🦋", fact: "Millions of butterflies fly to Mexico every winter!" },
          { name: "Axolotl", emoji: "🦎", fact: "A smiling salamander that can regrow its body parts!" },
          { name: "Jaguar", emoji: "🐆", fact: "Jaguars are the biggest cats in the Americas!" }
        ],
        monuments: [
          { name: "Chichén Itzá", emoji: "🏛️", fact: "An ancient pyramid where shadows make a snake shape!" }
        ],
        geology: [
          { name: "Cenotes", emoji: "💧", fact: "Underground swimming pools made by nature!" }
        ],
        funFact: "Mexico invented chocolate! 🍫"
      }
    }
  },
  southAmerica: {
    name: "South America",
    emoji: "🌴",
    color: "#6A994E",
    glowColor: "#6A994E80",
    description: "The Amazon rainforest and incredible wildlife!",
    trains: [
      { name: "Belmond Andean Explorer", image: "images/trains/andean_explorer.jpg", fact: "One of the highest train rides in the world, traveling through the Andes mountains in Peru!" },
      { name: "Tren a las Nubes", image: "images/trains/tren_nubes.jpg", fact: "Its name means 'Train to the Clouds' because it goes so high up in Argentina!" }
    ],
    countries: {
      brazil: {
        name: "Brazil",
        capital: "Brasília",
        flag: "🇧🇷",
        animals: [
          { name: "Toucan", emoji: "🦜", fact: "Toucans have beaks almost as big as their bodies!" },
          { name: "Jaguar", emoji: "🐆", fact: "Jaguars can swim and catch fish!" },
          { name: "Capybara", emoji: "🐹", fact: "The biggest rodent in the world — as big as a dog!" }
        ],
        monuments: [
          { name: "Christ the Redeemer", emoji: "🗽", fact: "A giant statue with open arms on top of a mountain!" },
          { name: "Amazon Rainforest", emoji: "🌳", fact: "The biggest rainforest — home to millions of species!" }
        ],
        geology: [
          { name: "Amazon River", emoji: "🌊", fact: "Has more water than any other river on Earth!" },
          { name: "Iguazu Falls", emoji: "💧", fact: "275 waterfalls all in one place!" }
        ],
        funFact: "Brazil is as big as the whole of Europe! 🌎"
      },
      peru: {
        name: "Peru",
        capital: "Lima",
        flag: "🇵🇪",
        animals: [
          { name: "Llama", emoji: "🦙", fact: "Llamas are fluffy and spit when they're angry!" },
          { name: "Condor", emoji: "🦅", fact: "One of the biggest flying birds in the world!" }
        ],
        monuments: [
          { name: "Machu Picchu", emoji: "🏔️", fact: "An ancient city hidden on top of a mountain!" },
          { name: "Nazca Lines", emoji: "✈️", fact: "Giant drawings on the ground you can only see from the sky!" }
        ],
        geology: [
          { name: "Andes Mountains", emoji: "⛰️", fact: "The longest mountain range in the world!" }
        ],
        funFact: "Peru has over 3,000 types of potatoes! 🥔"
      },
      argentina: {
        name: "Argentina",
        capital: "Buenos Aires",
        flag: "🇦🇷",
        animals: [
          { name: "Penguin", emoji: "🐧", fact: "Thousands of penguins live at the tip of Argentina!" },
          { name: "Armadillo", emoji: "🦔", fact: "Armadillos wear a suit of armor made of bone!" }
        ],
        monuments: [
          { name: "Perito Moreno Glacier", emoji: "🧊", fact: "A giant wall of ice that's still growing!" }
        ],
        geology: [
          { name: "Patagonian Steppe", emoji: "🏜️", fact: "A windy land of grass and sky at the bottom of the world!" },
          { name: "Aconcagua", emoji: "🏔️", fact: "The tallest mountain outside of Asia!" }
        ],
        funFact: "Argentina is crazy about football — it's their favorite sport! ⚽"
      }
    }
  },
  oceania: {
    name: "Oceania",
    emoji: "🏄",
    color: "#E9C46A",
    glowColor: "#E9C46A80",
    description: "Islands, coral reefs, and unique animals!",
    trains: [
      { name: "The Ghan", image: "images/trains/ghan.jpg", fact: "Takes three days to travel right through the middle of the Australian desert!" },
      { name: "TranzAlpine", image: "images/trains/tranzalpine.jpg", fact: "Crosses New Zealand's beautiful snowy mountains and deep river valleys!" },
      { name: "Tropical Jungle Train", image: "images/trains/kuranda_train.jpg", fact: "Papua New Guinea has no passenger trains, but nearby in Oceania you can ride this real train through the rainforests of Queensland!" }
    ],
    countries: {
      australia: {
        name: "Australia",
        capital: "Canberra",
        flag: "🇦🇺",
        animals: [
          { name: "Kangaroo", emoji: "🦘", fact: "Baby kangaroos live in their mum's pouch!" },
          { name: "Koala", emoji: "🐨", fact: "Koalas sleep up to 22 hours a day!" },
          { name: "Platypus", emoji: "🦆", fact: "A mammal with a duck bill that lays eggs!" }
        ],
        monuments: [
          { name: "Sydney Opera House", emoji: "🎭", fact: "A building shaped like giant sails on the water!" },
          { name: "Uluru", emoji: "🪨", fact: "A giant red rock in the middle of the outback!" }
        ],
        geology: [
          { name: "Great Barrier Reef", emoji: "🐠", fact: "The largest living thing on Earth — made by tiny coral!" },
          { name: "Outback", emoji: "🏜️", fact: "A huge dry area bigger than most countries!" }
        ],
        funFact: "Australia has more kangaroos than people! 🦘"
      },
      newZealand: {
        name: "New Zealand",
        capital: "Wellington",
        flag: "🇳🇿",
        animals: [
          { name: "Kiwi Bird", emoji: "🥝", fact: "A fluffy bird that can't fly — New Zealand's symbol!" },
          { name: "Hector's Dolphin", emoji: "🐬", fact: "The smallest dolphin in the world!" }
        ],
        monuments: [
          { name: "Hobbiton", emoji: "🏡", fact: "A real movie set with tiny hobbit houses!" },
          { name: "Sky Tower", emoji: "🗼", fact: "The tallest building in New Zealand!" }
        ],
        geology: [
          { name: "Geysers", emoji: "♨️", fact: "Hot water shooting up from underground!" },
          { name: "Fjords", emoji: "⛰️", fact: "Deep valleys filled with ocean water!" }
        ],
        funFact: "There are more sheep than people in New Zealand! 🐑"
      },
      fiji: {
        name: "Fiji",
        capital: "Suva",
        flag: "🇫🇯",
        animals: [
          { name: "Sea Turtle", emoji: "🐢", fact: "Turtles come to Fiji's beaches to lay their eggs!" },
          { name: "Parrot", emoji: "🦜", fact: "Colorful parrots fly through Fiji's forests!" }
        ],
        monuments: [
          { name: "Garden of the Sleeping Giant", emoji: "🌺", fact: "A garden with thousands of beautiful orchids!" }
        ],
        geology: [
          { name: "Coral Reefs", emoji: "🐠", fact: "Fiji has over 300 islands surrounded by coral!" }
        ],
        funFact: "Fiji is made up of 333 islands! 🏝️"
      }
    }
  },
  antarctica: {
    name: "Antarctica",
    emoji: "🧊",
    color: "#A8DADC",
    glowColor: "#A8DADC80",
    description: "The coldest, windiest, most icy place on Earth!",
    trains: [
      { name: "Antarctic Snow Cruiser", image: "images/trains/snow_cruiser.jpg", fact: "There are no normal trains here! People use giant tractor-trains on the ice!" }
    ],
    countries: {
      antarctica: {
        name: "Antarctica",
        capital: "No capital — no one owns it!",
        flag: "🏳️",
        animals: [
          { name: "Emperor Penguin", emoji: "🐧", fact: "Dad penguins keep the egg warm on their feet!" },
          { name: "Leopard Seal", emoji: "🦭", fact: "Leopard seals are fierce hunters with spotted fur!" },
          { name: "Blue Whale", emoji: "🐋", fact: "The biggest animal that ever lived swims here!" }
        ],
        monuments: [
          { name: "Research Stations", emoji: "🏠", fact: "Scientists from all over the world live here to study!" },
          { name: "South Pole", emoji: "📍", fact: "The very bottom of the Earth!" }
        ],
        geology: [
          { name: "Ice Sheet", emoji: "🧊", fact: "Ice over 4 km thick — that's taller than most mountains!" },
          { name: "Dry Valleys", emoji: "🏜️", fact: "The driest place on Earth — it hasn't rained in millions of years!" },
          { name: "Mount Erebus", emoji: "🌋", fact: "A volcano with a lake of lava at the top, surrounded by ice!" }
        ],
        funFact: "Antarctica has 70% of all the fresh water on Earth — as ice! 🧊"
      }
    }
  }
};
