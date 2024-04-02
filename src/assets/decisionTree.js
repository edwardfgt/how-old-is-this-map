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
];
