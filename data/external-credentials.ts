export type ExternalCredential = {
  title: string;
  issuer: string;
  date?: string;
  category: "Cloud";
  image: string;
  documents: Array<{ label: string; url: string }>;
  priority?: boolean;
  verificationUrl: string;
};

export const externalCredentials: ExternalCredential[] = [
  {
    title: "Credencial digital de AWS · Credly",
    issuer: "Amazon Web Services (AWS)",
    category: "Cloud",
    image: "/images/certificates/aws-credly-credential.svg",
    priority: true,
    verificationUrl: "https://www.credly.com/badges/443b29bd-9dfb-40d0-8e77-8edd234d3e7d/linked_in_profile",
    documents: [
      {
        label: "Ver credencial",
        url: "https://www.credly.com/badges/443b29bd-9dfb-40d0-8e77-8edd234d3e7d/linked_in_profile",
      },
    ],
  },
];
