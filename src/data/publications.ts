export interface Publication {
  title: string;
  year: number;
  month?: string;
  venue: string;
  publisher?: string;
  location?: string;
  doi?: string;
  url?: string;
  pages?: string;
  note?: string;
  preprint?: string;
  authors: string;
}

export const publications: Publication[] = [
  {
    title:
      "An Ontology-Based Approach to Security Risk Identification of Container Deployments in OT Contexts",
    year: 2026,
    month: "Apr",
    venue:
      "Proceedings of the 48th International Conference on Software Engineering: Software Engineering in Practice (ICSE SEIP 2026)",
    publisher: "ACM",
    location: "Rio de Janeiro, Brasil",
    doi: "10.1145/3786583.3786875",
    note: "DOI reserved; paper forthcoming",
    preprint: "https://arxiv.org/abs/2601.04010",
    authors: "Landeck, Y.; Balta, D.; Wimmer, M.; Knierim, C.",
  },
  {
    title: "Knowledge-Augmented Security Risk Identification for OT Container Deployments",
    year: 2025,
    month: "Nov",
    venue:
      "Joint Proceedings of the 24th International Semantic Web Conference (ISWC-C 2025)",
    publisher: "CEUR Workshop Proceedings",
    location: "Nara, Japan",
    url: "https://ceur-ws.org/Vol-4085/paper3.pdf",
    authors: "Landeck, Y.; Balta, D.; Momcilovic, T. B.; Wimmer, M.; Knierim, C.",
  },
  {
    title:
      "Software in the Manufacturing Industry: A Review of Security Challenges and Implications",
    year: 2025,
    venue: "Solutions and Technologies for Responsible Digitalization",
    pages: "293–311",
    publisher: "Springer Nature Switzerland",
    location: "Springer Nature Switzerland, Cham, Switzerland",
    url: "https://link.springer.com/chapter/10.1007/978-3-031-80122-8_19",
    note: "Re-publication of the WI 2023 proceedings paper at Springer Nature Link",
    authors: "Landeck, Y.; Balta, D.; Wimmer, M.; Knierim, C.",
  },
  {
    title:
      "Assurance of Application Security on IIoT Platforms with Knowledge Augmentation",
    year: 2024,
    month: "Dec",
    venue:
      "2024 Annual Computer Security Applications Conference Workshops (ACSAC Workshops)",
    publisher: "IEEE",
    location: "Honolulu, HI, USA",
    pages: "108–119",
    doi: "10.1109/ACSACW65225.2024.00019",
    authors: "Landeck, Y.; Balta, D.; Wimmer, M.; Knierim, C.",
  },
  {
    title:
      "Software in the Manufacturing Industry: Emerging Security Challenge Areas for IIoT Platforms",
    year: 2024,
    month: "Apr",
    venue:
      "Proceedings of the 46th International Conference on Software Engineering: Software Engineering in Practice (ICSE SEIP 2024)",
    publisher: "ACM",
    location: "Lisbon, Portugal",
    pages: "118–121",
    doi: "10.1145/3639477.3639724",
    authors: "Landeck, Y.; Balta, D.; Wimmer, M.; Knierim, C.",
  },
  {
    title:
      "Software in the Manufacturing Industry: A Review of Security Challenges and Implications",
    year: 2023,
    venue: "18th International Conference on Wirtschaftsinformatik (WI 2023)",
    location: "Paderborn, Germany",
    url: "https://aisel.aisnet.org/wi2023/40/",
    authors: "Landeck, Y.; Balta, D.; Wimmer, M.; Knierim, C.",
  },
];
