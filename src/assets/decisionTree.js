const nodes = [
  {
    id: 1,
    question: "Istanbul or Constantinople?",
    answers: [
      {
        option: "Constantinople",
        childNodeId: 10,
        result: null,
      },
      {
        option: "Neither",
        childNodeId: 2,
        result: null,
      },
      {
        option: "Istanbul",
        childNodeId: 47,
        result: null,
      },
    ],
  },
  {
    id: 2,
    question: "Does the Ottoman Empire exist?",
    answers: [
      {
        option: "Yes",
        childNodeId: 10,
        result: null,
      },
      {
        option: "No",
        childNodeId: 3,
        result: null,
      },
    ],
  },
  {
    id: 3,
    question: "Does the Soviet Union Exist?",
    answers: [
      {
        option: "Yes",
        childNodeId: 4,
        result: null,
      },
      {
        option: "No",
        childNodeId: 6,
        result: null,
      },
    ],
  },
  {
    id: 4,
    question: "Does Saudi Arabia Exist?",
    answers: [
      {
        option: "Yes",
        childNodeId: 5,
        result: null,
      },
      {
        option: "No",
        childNodeId: null,
        result: "1922-1932",
      },
    ],
  },
  {
    id: 5,
    question: "Is most of West Africa a giant French blob?",
    answers: [
      {
        option: "Yes",
        childNodeId: 44,
        result: null,
      },
      {
        option: "No",
        childNodeId: null,
        result: "1922-1932",
      },
    ],
  },
  {
    id: 6,
    question: "Does North Korea Exist?",
    answers: [
      {
        option: "Yes",
        childNodeId: 48,
        result: null,
      },
      {
        option: "No",
        childNodeId: 7,
        result: null,
      },
    ],
  },
  {
    id: 7,
    question: "Does Saint Trimble's Island Exist?",
    answers: [
      {
        option: "Yes",
        childNodeId: null,
        result: "No, I made that one up",
      },
      {
        option: "No",
        childNodeId: 8,
        result: null,
      },
    ],
  },
  {
    id: 8,
    question: "Is Jan Mayen part of the Kingdom of Norway?",
    answers: [
      {
        option: "Yes",
        childNodeId: 44,
        result: null,
      },
      {
        option: "Not yet",
        childNodeId: 10,
        result: null,
      },
      {
        option: "What?",
        childNodeId: 36,
        result: null,
      },
    ],
  },
  {
    id: 9,
    question: "Does Austria-Hungary exist?",
    answers: [
      {
        option: "Yes",
        childNodeId: 25,
        result: null,
      },
      {
        option: "No",
        childNodeId: 29,
        result: null,
      },
    ],
  },
  {
    id: 10,
    question:
      "Do any of these exist?\nIndependent Canada\nUs Territory of Alaska\nTokyo",
    answers: [
      {
        option: "No",
        childNodeId: 11,
        result: null,
      },
      {
        option: "Yes",
        childNodeId: 23,
        result: null,
      },
    ],
  },
  {
    id: 11,
    question: "Does the Holy Roman Empire Exist?",
    answers: [
      {
        option: "No",
        childNodeId: 12,
        result: null,
      },
      {
        option: "Yes",
        childNodeId: null,
        result:
          "1805 or Earlier \n Before this the modern idae of a complete political map of the world gets hard to apply",
      },
    ],
  },
  {
    id: 12,
    question: "Does the USA Exist?",
    answers: [
      {
        option: "No",
        childNodeId: null,
        result: "How sure are you that this map is in English?",
      },
      {
        option: "Yes",
        childNodeId: 13,
        result: null,
      },
    ],
  },
  {
    id: 13,
    question: "Texas is...",
    answers: [
      {
        option: "Part of Mexico",
        childNodeId: 14,
        result: null,
      },
      {
        option: "Independent",
        childNodeId: null,
        result: "1834-1845",
      },
      {
        option: "Part of the US",
        childNodeId: 17,
        result: null,
      },
    ],
  },
  {
    id: 14,
    question: "Florida is part of...",
    answers: [
      {
        option: "Spain",
        childNodeId: 15,
        result: null,
      },
      {
        option: "The US",
        childNodeId: 16,
        result: null,
      },
    ],
  },
  {
    id: 15,
    question: "Does Paraguay Exist?",
    answers: [
      {
        option: "No",
        childNodeId: null,
        result: "1806-1810",
      },
      {
        option: "Yes",
        childNodeId: null,
        result: "1811-1817",
      },
    ],
  },
  {
    id: 16,
    question: "Does Venezuela and/or Ecuador exist?",
    answers: [
      {
        option: "No",
        childNodeId: null,
        result: "1818-1829",
      },
      {
        option: "Yes",
        childNodeId: null,
        result: "1830-1833",
      },
    ],
  },
  {
    id: 17,
    question: "Does Russia border the sea of Japan?",
    answers: [
      {
        option: "No",
        childNodeId: 18,
        result: null,
      },
      {
        option: "Yes",
        childNodeId: null,
        result: "1858-1867",
      },
    ],
  },
  {
    id: 18,
    question: "The US Souther Border looks...",
    answers: [
      {
        option: "Weird",
        childNodeId: null,
        result: "1846-1853",
      },
      {
        option: "normal",
        childNodeId: null,
        result: "1854-1856",
      },
    ],
  },
  {
    id: 19,
    question: "How far East Do the American Prairies reach?",
    answers: [
      {
        option: "Indiana",
        childNodeId: null,
        result: "Before 1830",
      },
      {
        option: "The Mississipi",
        childNodeId: null,
        result: "1830s-1880s",
      },
      {
        option: "Nebraska",
        childNodeId: 20,
        result: null,
      },
      {
        option: "What Prairies?",
        childNodeId: 21,
        result: null,
      },
    ],
  },
  {
    id: 20,
    question:
      "Is there a big lake in the middle of Southern California? (created by mistake)",
    answers: [
      {
        option: "no",
        childNodeId: null,
        result: "1860s-1900s",
      },
      {
        option: "yes",
        childNodeId: null,
        result: "1910s",
      },
    ],
  },
  {
    id: 21,
    question:
      "Is there a big lake in the middle of Ghana? (created on purpose)",
    answers: [
      {
        option: "no",
        childNodeId: null,
        result: "1920s-1950s",
      },
      {
        option: "yes",
        childNodeId: null,
        result: "1960s- 970s",
      },
    ],
  },
  {
    id: 22,
    question: "Beruna",
    answers: [
      {
        option: "Ford",
        childNodeId: null,
        result: "The Lion, The Witch, And the Wardrobe",
      },
      {
        option: "Bridge",
        childNodeId: null,
        result: "Prince Caspian",
      },
    ],
  },
  {
    id: 23,
    question: "Does South Africa exist?",
    answers: [
      {
        option: "Yes",
        childNodeId: 9,
        result: null,
      },
      {
        option: "No",
        childNodeId: 24,
        result: null,
      },
    ],
  },
  {
    id: 24,
    question: "Does Rhodesia exist?",
    answers: [
      {
        option: "Yes",
        childNodeId: 26,
        result: null,
      },
      {
        option: "No",
        childNodeId: 27,
        result: null,
      },
    ],
  },
  {
    id: 25,
    question: "Does Albania exist?",
    answers: [
      {
        option: "Yes",
        childNodeId: null,
        result: "1913-1918",
      },
      {
        option: "No",
        childNodeId: null,
        result: "1910-1912",
      },
    ],
  },
  {
    id: 26,
    question: "Is Norway part of Sweden?",
    answers: [
      {
        option: "Yes",
        childNodeId: null,
        result: "1896-1905",
      },
      {
        option: "No",
        childNodeId: null,
        result: "1906-1909",
      },
    ],
  },
  {
    id: 27,
    question: "Is Bolivia landlocked?",
    answers: [
      {
        option: "Yes",
        childNodeId: null,
        result: "1884-1895",
      },
      {
        option: "No",
        childNodeId: 28,
        result: null,
      },
    ],
  },
  {
    id: 28,
    question: "Buda and Pest or Budapest?",
    answers: [
      {
        option: "Buda and Pest",
        childNodeId: null,
        result: "1868-1872",
      },
      {
        option: "Budapest",
        childNodeId: null,
        result: "1873-1883",
      },
    ],
  },
  {
    id: 29,
    question: "Does Leningrad exist?",
    answers: [
      {
        option: "Yes",
        childNodeId: null,
        result: "1924-1929",
      },
      {
        option: "No",
        childNodeId: null,
        result: "1919-1923",
      },
    ],
  },
  {
    id: 30,
    question: "This sounds like a physical map or satellite photo.",
    answers: [
      {
        option: "Yes that's it",
        childNodeId: 31,
        result: null,
      },
    ],
  },
  {
    id: 31,
    question: "Is lake Chad missing?",
    answers: [
      {
        option: "Yes",
        childNodeId: 32,
        result: null,
      },
      {
        option: "No",
        childNodeId: 19,
        result: null,
      },
    ],
  },
  {
    id: 32,
    question: "Is the Aral Sea missing?",
    answers: [
      {
        option: "Yes",
        childNodeId: null,
        result: "2000s+",
      },
      {
        option: "No",
        childNodeId: null,
        result: "1970s-1990s",
      },
    ],
  },
  {
    id: 33,
    question: "Beleriand?",
    answers: [
      {
        option: "Yes",
        childNodeId: null,
        result: "First Age",
      },
      {
        option: "No",
        childNodeId: null,
        result: "Early Second Age",
      },
    ],
  },
  {
    id: 34,
    question: "The forest east of the misty mountains is..?",
    answers: [
      {
        option: "Greenwood The Great",
        childNodeId: null,
        result: "Early Third Age",
      },
      {
        option: "Mirkwood",
        childNodeId: null,
        result: "Late Third Age",
      },
      {
        option: "The wood of Greenleaves",
        childNodeId: null,
        result: "Fourth Age",
      },
    ],
  },
  {
    id: 35,
    question: "Lotta islands?",
    answers: [
      {
        option: "Yes",
        childNodeId: null,
        result: "Dawn Treader",
      },
      {
        option: "No",
        childNodeId: 22,
        result: null,
      },
    ],
  },
  {
    id: 36,
    question: "Can you see the familiar continents?",
    answers: [
      {
        option: "Yes",
        childNodeId: 30,
        result: null,
      },
      {
        option: "No",
        childNodeId: 37,
        result: null,
      },
    ],
  },
  {
    id: 37,
    question: "Rivers 'Sirion' and 'Anduin'?",
    answers: [
      {
        option: "Yes",
        childNodeId: 39,
        result: null,
      },
      {
        option: "No",
        childNodeId: 38,
        result: null,
      },
    ],
  },
  {
    id: 38,
    question: "Cair Paravel?",
    answers: [
      {
        option: "Yes",
        childNodeId: 57,
        result: null,
      },
      {
        option: "No",
        childNodeId: 55,
        result: null,
      },
    ],
  },
  {
    id: 39,
    question: "Mordor?",
    answers: [
      {
        option: "Yes",
        childNodeId: 40,
        result: null,
      },
      {
        option: "No",
        childNodeId: 33,
        result: null,
      },
    ],
  },
  {
    id: 40,
    question: "Nùmenor?",
    answers: [
      {
        option: "Yes",
        childNodeId: null,
        result: "Late Second Age",
      },
      {
        option: "No",
        childNodeId: 34,
        result: null,
      },
    ],
  },
  {
    id: 41,
    question: "How many Germanys are there?",
    answers: [
      {
        option: "One",
        childNodeId: 42,
        result: null,
      },
      {
        option: "One, but it's HUGE",
        childNodeId: null,
        result: "1941-1945",
      },
      {
        option: "Two",
        childNodeId: null,
        result: "1946-1947",
      },
    ],
  },
  {
    id: 42,
    question: "Persia or Iran?",
    answers: [
      {
        option: "Persia",
        childNodeId: null,
        result: "1930-1934",
      },
      {
        option: "Iran",
        childNodeId: null,
        result: "1935-1940",
      },
    ],
  },
  {
    id: 43,
    question: "Eritrea is part of...?",
    answers: [
      {
        option: "Italy",
        childNodeId: 54,
        result: null,
      },
      {
        option: "Ethiopia",
        childNodeId: null,
        result: "1952-1953",
      },
    ],
  },
  {
    id: 44,
    question: "Does Pakistan exist?",
    answers: [
      {
        option: "No",
        childNodeId: 41,
        result: null,
      },
      {
        option: "Yes",
        childNodeId: 68,
        result: null,
      },
    ],
  },
  {
    id: 45,
    question: "Does Bangladesh exist?",
    answers: [
      {
        option: "No",
        childNodeId: 67,
        result: null,
      },
      {
        option: "Yes",
        childNodeId: null,
        result: "1972-1975",
      },
    ],
  },
  {
    id: 46,
    question: "How many Vietnams are there?",
    answers: [
      {
        option: "One",
        childNodeId: 67,
        result: null,
      },
      {
        option: "Two",
        childNodeId: 45,
        result: null,
      },
    ],
  },
  {
    id: 47,
    question: "Does the Soviet Union exist?",
    answers: [
      {
        option: "Yes",
        childNodeId: 5,
        result: null,
      },
      {
        option: "No",
        childNodeId: 48,
        result: null,
      },
    ],
  },
  {
    id: 48,
    question: "Zaire? Or: Hong Kong (uk)",
    answers: [
      {
        option: "Yes",
        childNodeId: null,
        result: "1992-1996",
      },
      {
        option: "No",
        childNodeId: 49,
        result: null,
      },
    ],
  },
  {
    id: 49,
    question: "Serbia/Montenegro are...",
    answers: [
      {
        option: "One country",
        childNodeId: 50,
        result: null,
      },
      {
        option: "Two countries",
        childNodeId: 51,
        result: null,
      },
    ],
  },
  {
    id: 50,
    question: "Does East Timor exist",
    answers: [
      {
        option: "No",
        childNodeId: null,
        result: "1997-2001",
      },
      {
        option: "Yes",
        childNodeId: null,
        result: "2002-2006",
      },
    ],
  },
  {
    id: 51,
    question: "How many Sudans are there?",
    answers: [
      {
        option: "One",
        childNodeId: null,
        result: "2007-2011",
      },
      {
        option: "Two",
        childNodeId: 53,
        result: null,
      },
    ],
  },
  {
    id: 52,
    question: "'Colorado' or 'Danger-radioactive exclusion zone-avoid?",
    answers: [
      {
        option: "Colorado",
        childNodeId: null,
        result: "2014-2021",
      },
      {
        option: "Danger",
        childNodeId: 69,
        result: null,
      },
    ],
  },
  {
    id: 53,
    question: "Is Crimea disputed?",
    answers: [
      {
        option: "Yes",
        childNodeId: 52,
        result: null,
      },
      {
        option: "No",
        childNodeId: null,
        result: "2012-2013",
      },
    ],
  },
  {
    id: 54,
    question: "Canada is...",
    answers: [
      {
        option: "Fine",
        childNodeId: 64,
        result: null,
      },
      {
        option: "Missing a piece",
        childNodeId: null,
        result: "1948",
      },
    ],
  },
  {
    id: 55,
    question: "Mossflower?",
    answers: [
      {
        option: "No",
        childNodeId: 56,
        result: null,
      },
      {
        option: "Yes",
        childNodeId: null,
        result: "Redwall",
      },
    ],
  },
  {
    id: 56,
    question: "Is the world on the back of a turtle?",
    answers: [
      {
        option: "No",
        childNodeId: 58,
        result: null,
      },
      {
        option: "Yes",
        childNodeId: null,
        result: "Discworld",
      },
    ],
  },
  {
    id: 57,
    question: "Calormen?",
    answers: [
      {
        option: "No",
        childNodeId: 35,
        result: null,
      },
      {
        option: "Yes",
        childNodeId: 61,
        result: null,
      },
    ],
  },
  {
    id: 58,
    question: "Are you sure this is a map?",
    answers: [
      {
        option: "No",
        childNodeId: 63,
        result: null,
      },
      {
        option: "Yes",
        childNodeId: 59,
        result: null,
      },
    ],
  },
  {
    id: 59,
    question: "Did you make it yourself?",
    answers: [
      {
        option: "Yes",
        childNodeId: 60,
        result: null,
      },
    ],
  },
  {
    id: 60,
    question: "It's very nice.",
    answers: [
      {
        option: "Thank you.",
        childNodeId: null,
        result: "You're welcome",
      },
    ],
  },
  {
    id: 61,
    question: "Weird recursive heaven?",
    answers: [
      {
        option: "Yes",
        childNodeId: null,
        result: "The Last Battle",
      },
      {
        option: "No",
        childNodeId: null,
        result: "One of the random later books",
      },
    ],
  },
  {
    id: 62,
    question: "Is it larger than a breadbox?",
    answers: [
      {
        option: "Yes",
        childNodeId: null,
        result: "Tuba",
      },
      {
        option: "No",
        childNodeId: null,
        result: "Stapler",
      },
      {
        option: "About the same",
        childNodeId: null,
        result: "Breadbox",
      },
    ],
  },
  {
    id: 63,
    question: "Is it trying to bite you?",
    answers: [
      {
        option: "Yes",
        childNodeId: 74,
        result: null,
      },
      {
        option: "No",
        childNodeId: 62,
        result: null,
      },
    ],
  },
  {
    id: 64,
    question: "The town on 1-25 between Albuquerque and El Paso is..",
    answers: [
      {
        option: "Hot Springs",
        childNodeId: null,
        result: "1948-1949",
      },
      {
        option: "Truth or Consequences",
        childNodeId: null,
        result: "1950-1952",
      },
    ],
  },
  {
    id: 65,
    question: "Is the area south of Lake Victoria?",
    answers: [
      {
        option: "British",
        childNodeId: null,
        result: "1960",
      },
      {
        option: "Tanganyika",
        childNodeId: null,
        result: "1961-1964",
      },
      {
        option: "Tanzania",
        childNodeId: null,
        result: "1965-1971",
      },
    ],
  },
  {
    id: 66,
    question: "Does the United Arab Republic exist?",
    answers: [
      {
        option: "Yes",
        childNodeId: null,
        result: "1958-1960",
      },
      {
        option: "No",
        childNodeId: null,
        result: "195401957",
      },
    ],
  },
  {
    id: 67,
    question: "Jimmy Carter is..",
    answers: [
      {
        option: "Being attacked by a giant swimming rabbit",
        childNodeId: null,
        result: "April 20, 1979",
      },
      {
        option: "Fine",
        childNodeId: 70,
        result: null,
      },
    ],
  },
  {
    id: 68,
    question: "Does Cambodia exist?",
    answers: [
      {
        option: "Yes",
        childNodeId: 65,
        result: null,
      },
      {
        option: "No",
        childNodeId: 43,
        result: null,
      },
    ],
  },
  {
    id: 69,
    question: "Does the warning mention spiders?",
    answers: [
      {
        option: "Yes",
        childNodeId: null,
        result: "2023 or later",
      },
      {
        option: "No",
        childNodeId: null,
        result: "2022",
      },
    ],
  },
  {
    id: 70,
    question: "The Sinai is part of what country?",
    answers: [
      {
        option: "Israel",
        childNodeId: null,
        result: "1976-1979",
      },
      {
        option: "Mostly Israel",
        childNodeId: null,
        result: "1980",
      },
      {
        option: "Mostly Egypt",
        childNodeId: null,
        result: "1981",
      },
      {
        option: "Egypt",
        childNodeId: 71,
        result: null,
      },
    ],
  },
  {
    id: 71,
    question: "What is the capital of Micronesia?",
    answers: [
      {
        option: "Kolonia",
        childNodeId: 72,
        result: null,
      },
      {
        option: "Palikir",
        childNodeId: 73,
        result: null,
      },
    ],
  },
  {
    id: 72,
    question: "Republic of the upper volta or Burkina Faso?",
    answers: [
      {
        option: "Upper Volta",
        childNodeId: null,
        result: "1982-1984",
      },
      {
        option: "Burkina Faso",
        childNodeId: null,
        result: "1985-1988",
      },
    ],
  },
  {
    id: 73,
    question: "(Number of Yemens) + (Number of Germanys) = ?",
    answers: [
      {
        option: "Four",
        childNodeId: null,
        result: "1989-Early 1990",
      },
      {
        option: "Three",
        childNodeId: null,
        result: "Mid 1990",
      },
      {
        option: "Two",
        childNodeId: null,
        result: "Late 1990-1991",
      },
    ],
  },
  {
    id: 74,
    question: "If you let go, what does it do?",
    answers: [
      {
        option: "Hisses and runs away",
        childNodeId: null,
        result: "Cat",
      },
      {
        option: "Screeches and flaps around the room breaking things",
        childNodeId: null,
        result: "Seagull",
      },
    ],
  },
];

export default nodes;
