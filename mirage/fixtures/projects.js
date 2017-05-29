export default [
  {
    id: "battle-buddies",
    title: "Battle Buddies",
    description: [
      "Made for Fuse Code Camp 2017, Battle Buddies is a day-long course for middle school and high school students with an intermediate knowledge of programming. The class taught students about topics like network requests, object oriented programming, and game AI logic by leading them through making a bot that competed in a Hunger Games-esque deathmatch arena.", 
      "The game server was written in Ruby with Sinatra, and a UI server was made using Ember. The bots themselves were written in JavaScript using ES6 classes, npm packages, promises, and more."
    ],
    icon: "/images/battle_buddies_icon.svg",
    links: [
      {
        link:"https://github.com/gleichsnerd/battle-buddies-server",
        icon:"fa-github",
        text:"Game Server"
      },
      {
        link:"https://github.com/gleichsnerd/battle-buddies-client",
        icon:"fa-github",
        text:"Sample Bot"
      },
      {
        link:"https://github.com/fusecodecamp2017/BattleBuddies",
        icon:"fa-github",
        text:"Bundled Projects"
      }
    ],
    active: true
  },

  {
    id: "buddy",
    title: "Buddy", 
    description: [
      "Do you remember what it was like having a penpal and writing letters back and forth with a total stranger in a different state or country? Or how about the excitement of getting a letter or card from family or friends?", 
      "Enter Buddy, a web app targeted at bringing the nostalgia of penpals into the digital era. User's mailboxes are tied to actual latitudes and longitudes, and mail send between buddies are delayed based on real-time estimates of how long real, physical mail would take to arrive.",
      "The frontend is being written with Ember, and the backend API with Ruby on Rails."
      ],
    icon: "/images/buddy_icon.svg",
    links: [
      {
        link:"https://github.com/gleichsnerd/buddy-frontend",
        icon:"fa-github",
        text:"Frontend"
      },
      {
        link:"https://github.com/gleichsnerd/buddy-api",
        icon:"fa-github",
        text:"Backend"
      }
    ],
    active: true
  },

  {
    id: "sounds_of_nature",
    title: "Sounds of Nature", 
    description: [
      "Made for Pennsylvania Junior Academy of Science back when I was in high school, Sounds of Nature takes waveform-esque, high contrast images (like pictures of forest canopy lines) and converts those peaks and valleys into frequencies and notes.",
      "Written with C++ and a now very outdated version of OpenCV"
    ],
    icon: "/images/sounds_of_nature_icon.svg",
    links: [
      {
        link:"https://github.com/gleichsnerd/sounds-of-nature",
        icon:"fa-github",
        text:"Source Code"
      }
    ],
    active: false
  },

  {
    id: "lufthouse",
    title: "Lufthouse", 
    description: [
      "Using Bluetooth LE beacons, Lufthouse helps bring information to hard to reach places in the form of curated tours, exhibits, and other immersive experiences. The iOS app was featured at the Western Reserve Historical Society's <i>Browns Town</i> exhibit in 2014 up in Cleveland, OH.",
      "Although the company closed its doors in 2015, Lufthouse's iOS source code is still available on GitHub."
    ],
    icon: "/images/lufthouse_icon.svg",
    links: [
      {
        link:"https://github.com/joanieS/lufthouse-ios",
        icon:"fa-github",
        text:"Source Code"
      }
    ],
    active: false
  },
];
