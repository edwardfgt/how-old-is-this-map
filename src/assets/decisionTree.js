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
];
