export const contentData = [
  {
    title: "Work Experience",
    items: [
      {
        title: "Bairong Inc, Machine Learning Engineer Intern",
        subTitle: "Shenzhen, China",
        date: "05/22 - 08/22",
        description: "Implemented Scorecard Logistic regression model with clients' cutomized data with high K-S scores leading to clients' purchase. \
        Implemented LighBGM algorithm with 3rd party data that enchaned the model's performance",
      },
      {
        title: "PingAn Asset Management Co. Ltd., Financial Analyst Intern",
        subTitle: "Shanghai, China",
        date: "08/21 - 09/21",
        description: "Analyzed fixed-rate, fluctuating service fees, annual income indexes on 5-year asset contracts using SQL. \
        Participated in releasing company’s Q2 financial report by providing data cleansing support with Excel.",
      },
    ],
  },
  {
    title: "Education",
    items: [
      {
        title: "Master's Degree in Computer Information Systems",
        subTitle: "Boston University",
        date: "09/23 - 05/25",
        description: "Participating Tapia and Grace Hopeer Celebration this year! ",
      },
      {
        title: "Bachelor's Degree in Data Science",
        subTitle: "Chinese University of Hong Kong",
        date: "09/19 - 05/23",
        description: "Director of the ballet department, principal dancer and main \
        choreographer at school's Max Dancing Club",
      },
    ],
  },
  //   @NOTE: You can add more sections here
  //   {
  //     title: "Projects",
  //     items: [
  //       {
  //         title: "Project 1",
  //         subTitle: "Sub Title",
  //         date: "2015 - 2016",
  //         description: "Lorem ipsum dolor sit amet, consectetur adipiscing eli",
  //       },
  //     ],
  //   },
];

export type Content = {
  title: string;
  items: {
    title: string;
    subTitle: string;
    date: string;
    description: string;
  }[];
};

export type ContentData = Content[];
