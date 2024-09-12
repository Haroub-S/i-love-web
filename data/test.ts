type data = {
  date: string;
  accordion: {
    accordionTitle: string;
    accordionItems: {
      item: string;
    }[];
  }[];
}[];

const myAccordion: data = [
  {
    date: "todays date",
    accordion: [
      {
        accordionTitle: "wat ik heb gedaan",
        accordionItems: [
          {
            item: "played soccer",
          },
          {
            item: "played soccer",
          },
          {
            item: "played soccer",
          },
          {
            item: "played soccer",
          },
        ],
      },
      {
        accordionTitle: "wat ik heb gedaan",
        accordionItems: [
          {
            item: "played soccer",
          },
          {
            item: "played soccer",
          },
          {
            item: "played soccer",
          },
          {
            item: "played soccer",
          },
        ],
      },
    ],
  },
];
