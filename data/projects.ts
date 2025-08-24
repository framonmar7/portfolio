export const projects = [
  {
    id: 1,
    titleKey: "project1.title",
    descriptionKey: "project1.description",
    image: "https://opengraph.githubassets.com/1/framonmar7/cnn-binary-classifier-generator",
    technologies: ["Deep Learning", "Python", "CNN"],
    githubUrl: "https://github.com/framonmar7/cnn-binary-classifier-generator",
    liveUrl: null,
  },
  {
    id: 2,
    titleKey: "project2.title",
    descriptionKey: "project2.description",
    image: "/suicidal-risk-detection.png",
    technologies: ["Deep Learning", "Python", "NLP"],
    githubUrl: "https://github.com/framonmar7/suicidal-risk-detection",
    liveUrl: "https://suicidal-risk.framonmar7.dev",
  },
  {
    id: 3,
    titleKey: "project3.title",
    descriptionKey: "project3.description",
    image: "https://opengraph.githubassets.com/1/framonmar7/content-moderation-api",
    technologies: ["Deep Learning", "Python", "NLP"],
    githubUrl: "https://github.com/framonmar7/content-moderation-api",
    liveUrl: "https://content-moderation.framonmar7.dev/swagger/",
  },
  {
    id: 4,
    titleKey: "project4.title",
    descriptionKey: "project4.description",
    image: "/goku-or-goten-detection.png",
    technologies: ["Deep Learning", "Python", "CNN"],
    githubUrl: "https://github.com/framonmar7/goku-or-goten-classifier",
    liveUrl: "https://goku-or-goten.framonmar7.dev",
  }
]

export type Project = (typeof projects)[number]
