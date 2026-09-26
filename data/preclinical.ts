export type PreclinicalSubject = {
  slug: string;
  title: string;
  description: string;
  status: "live" | "coming";
};

export const preclinicalSubjects: PreclinicalSubject[] = [
  { slug: "anatomy", title: "Anatomy", description: "Core structural anatomy and clinically relevant relationships.", status: "coming" },
  { slug: "biochemistry", title: "Biochemistry", description: "Molecular processes, metabolism and biochemical foundations.", status: "coming" },
  { slug: "cell-biology", title: "Cell Biology", description: "Cell structure, signalling, division and cellular function.", status: "coming" },
  { slug: "development", title: "Development", description: "Human development and the principles of embryology.", status: "coming" },
  { slug: "haematology", title: "Haematology", description: "Blood cells, haemostasis and the physiology of blood.", status: "coming" },
  { slug: "immunology", title: "Immunology", description: "Innate and adaptive immunity, inflammation and immune responses.", status: "coming" },
  { slug: "microbiology", title: "Microbiology", description: "Bacteria, viruses, fungi and the principles of infection.", status: "coming" },
  { slug: "pathology", title: "Pathology", description: "Mechanisms of disease, injury, inflammation and repair.", status: "coming" },
  { slug: "pharmacology", title: "Pharmacology", description: "Drug action, receptors, kinetics and core therapeutic principles.", status: "coming" },
  { slug: "physiology", title: "Physiology", description: "How the human body functions, from cells and muscles to organ systems.", status: "live" },
  { slug: "radiology", title: "Radiology", description: "Imaging principles and introductory interpretation.", status: "coming" },
  { slug: "biostatistics", title: "Biostatistics", description: "Core statistical concepts for medical science and research.", status: "coming" },
  { slug: "epidemiology-public-health", title: "Epidemiology / Public Health", description: "Population health, epidemiology and prevention.", status: "coming" },
  { slug: "medical-ethics", title: "Medical Ethics", description: "Ethical principles and decision-making in healthcare.", status: "coming" },
  { slug: "psychology-sociology-illness", title: "Psychology and Sociology of Illness", description: "Psychological and social influences on health and illness.", status: "coming" },
];
