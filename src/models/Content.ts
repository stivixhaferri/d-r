import mongoose, { Schema, Document } from "mongoose";

export interface IContent extends Document {
  heroText: string;
  aboutTitle: string;
  aboutText: string;
  featuresText: string;
  f1Title: string;
  f1Text: string;
  f2Title: string;
  f2Text: string;
  f3Title: string;
  f3Text: string;
  f4Title: string;
  f4Text: string;
  yearsNumber: number;
  projectsNumber: number;
  awardsNumber: number;
  clientsNumber: number;
  s1Title: string;
  s1Sub: string;
  s1Text: string;
  s2Title: string;
  s2Sub: string;
  s2Text: string;
  s3Title: string;
  s3Sub: string;
  s3Text: string;
  faqQ1: string;
  faqA1: string;
  faqQ2: string;
  faqA2: string;
  faqQ3: string;
  faqA3: string;
  faqQ4: string;
  faqA4: string;
  t1Title: string;
  t1Text: string;
  t1User: string;
  t1UserJob: string;
  t2Title: string;
  t2Text: string;
  t2User: string;
  t2UserJob: string;
  t3Title: string;
  t3Text: string;
  t3User: string;
  t3UserJob: string;
  t4Title: string;
  t4Text: string;
  t4User: string;
  t4UserJob: string;
}

const ContentSchema = new Schema<IContent>(
  {
    heroText: String,
    aboutTitle: String,
    aboutText: String,
    featuresText: String,
    f1Title: String,
    f1Text: String,
    f2Title: String,
    f2Text: String,
    f3Title: String,
    f3Text: String,
    f4Title: String,
    f4Text: String,
    yearsNumber: Number,
    projectsNumber: Number,
    awardsNumber: Number,
    clientsNumber: Number,
    s1Title: String,
    s1Sub: String,
    s1Text: String,
    s2Title: String,
    s2Sub: String,
    s2Text: String,
    s3Title: String,
    s3Sub: String,
    s3Text: String,
    faqQ1: String,
    faqA1: String,
    faqQ2: String,
    faqA2: String,
    faqQ3: String,
    faqA3: String,
    faqQ4: String,
    faqA4: String,
    t1Title: String,
    t1Text: String,
    t1User: String,
    t1UserJob: String,
    t2Title: String,
    t2Text: String,
    t2User: String,
    t2UserJob: String,
    t3Title: String,
    t3Text: String,
    t3User: String,
    t3UserJob: String,
    t4Title: String,
    t4Text: String,
    t4User: String,
    t4UserJob: String,
  },
  { timestamps: true }
);

export default mongoose.models.Content || mongoose.model<IContent>("Content", ContentSchema);
