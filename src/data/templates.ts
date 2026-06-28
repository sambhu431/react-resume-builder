
// data/templates.ts

import ClassicPreview from "../components/templates/cardspreview/ClassicPreview";
import MinimalPreview from "../components/templates/cardspreview/MinimalPreview";
import ProfessionalPreview from "../components/templates/cardspreview/ProfessionalPreview";

import AcademicPreview from "../components/templates/cardspreview/AcademicPreview";
import CleanPreview from "../components/templates/cardspreview/CleanPreview";
import EntryLevelPreview from "../components/templates/cardspreview/EntryLevelPreview";
import PrecisionATSPreview from "../components/templates/cardspreview/PrecisionATSPreview";
import PrimeATSPreview from "../components/templates/cardspreview/PrimeATSPreview";
import SimpleATSPreview from "../components/templates/cardspreview/SimpleATSPreview";
import TraditionalPreview from "../components/templates/cardspreview/TraditionalPreview";
import StandardPreview from "../components/templates/cardspreview/StandardPreview";
import StandardPremiumPreview from "../components/templates/cardspreview/StandardPremiumPreview";


import ClassicResume from "../components/templates/resumepreview/ClassicResume";
import MinimalResume from "../components/templates/resumepreview/MinimalResume";
import ProfessionalResume from "../components/templates/resumepreview/ProfessionalResume";
import AcademicResume from "../components/templates/resumepreview/AcademicResume";
import CleanResume from "../components/templates/resumepreview/CleanResume";
import EntryLevelResume from "../components/templates/resumepreview/EntryLevelResume";
import PrecisionATSResume from "../components/templates/resumepreview/PrecisionATSResume";
import PrimeATSResume from "../components/templates/resumepreview/PrimeATSResume";
import SimpleATSResume from "../components/templates/resumepreview/SimpleATSResume";
import TraditionalResume from "../components/templates/resumepreview/TraditionalResume";
import StandardResume from "../components/templates/resumepreview/StandardResume";
import StandardPremiumResume from "../components/templates/resumepreview/StandardPremiumResume";


import AcademicResumePDF from "../components/templates/resumepdf/AcdemicResumePdf";
import ClassicResumePdf from "../components/templates/resumepdf/ClassicResumePdf";
import CleanResumePDF from "../components/templates/resumepdf/CleanResumePdf";
import EntryLevelResumePdf from "../components/templates/resumepdf/EntryLevelResumePdf";
import MinimalResumePdf from "../components/templates/resumepdf/MinimalResumePdf";
import PrecisionATSResumePdf from "../components/templates/resumepdf/PrecisionATSResumePdf";
import PrimeATSResumePdf from "../components/templates/resumepdf/PrimeATSResumePdf";
import ProfessionalResumePdf from "../components/templates/resumepdf/ProfessionalResumePdf";
import SimpleATSResumePdf from "../components/templates/resumepdf/SimpleATSResumePdf";
import StandardResumePdf from "../components/templates/resumepdf/StandardResumePdf";
import TranditionalResumePdf from "../components/templates/resumepdf/TraditionalResumePdf";
import StandardPremiumResumePdf from "../components/templates/resumepdf/StandardPremiumResumePdf";


export const templates = [
  {
    id: "classic",
    name: "Classic Resume",
    description: "Traditional recruiter-friendly layout",
    category: "featured",
    featured: true,
    cardpreview: ClassicPreview,
    resumepreview: ClassicResume,
    pdf:ClassicResumePdf,
  },

  {
    id: "minimal",
    name: "Minimal Resume",
    description: "Simple and clean design",
    category: "featured",
    featured: true,
    cardpreview:MinimalPreview,
    resumepreview: MinimalResume,
    pdf:MinimalResumePdf,
  },

  {
    id: "professional",
    name: "Professional Resume",
    description: "Modern corporate layout",
    category: "featured",
    featured: true,
    cardpreview:ProfessionalPreview,
    resumepreview: ProfessionalResume,
    pdf: ProfessionalResumePdf,
  },

  {
    id: "traditional",
    name: "Traditional Resume",
    description: "Conservative hiring format",
    category: "traditional",
    featured: false,
    cardpreview:TraditionalPreview,
    resumepreview: TraditionalResume,
    pdf:TranditionalResumePdf,
  },

  {
    id: "prime-ats",
    name: "Prime ATS Resume",
    description: "ATS optimized",
    category: "ats",
    featured: false,
    cardpreview:PrimeATSPreview,
    resumepreview: PrimeATSResume,
    pdf: PrimeATSResumePdf,
  },

  {
    id: "simple-ats",
    name: "Simple ATS Resume",
    description: "Minimal ATS structure",
    category: "ats",
    featured: false,
    cardpreview:SimpleATSPreview,
    resumepreview: SimpleATSResume,
    pdf: SimpleATSResumePdf,
  },

  {
    id: "precision-ats",
    name: "Precision ATS Resume",
    description: "Structured ATS format",
    category: "ats",
    featured: false,
    cardpreview:PrecisionATSPreview,
    resumepreview: PrecisionATSResume,
    pdf:PrecisionATSResumePdf,
  },

  {
    id: "clean",
    name: "Clean Resume",
    description: "Modern clean resume",
    category: "professional",
    featured: false,
    cardpreview:CleanPreview,
    resumepreview: CleanResume,
    pdf:CleanResumePDF,
  },

  {
    id: "academic",
    name: "Academic Resume",
    description: "For research and academia",
    category: "academic",
    featured: false,
    cardpreview:AcademicPreview,
    resumepreview: AcademicResume,
    pdf:AcademicResumePDF,
  },

  {
    id: "entry-level",
    name: "Entry Level Resume",
    description: "Students and fresh graduates",
    category: "entry-level",
    featured: false,
    cardpreview:EntryLevelPreview,
    resumepreview: EntryLevelResume,
    pdf:EntryLevelResumePdf,
  },

  {
    id:"standard-resume",
    name: "Standard Resume",
    description: "For Job Seekers",
    category: "standard",
    featured: false,
    cardpreview: StandardPreview,
    resumepreview: StandardResume,
    pdf:StandardResumePdf,
  },

    {
    id:"standard-premium-resume",
    name: "Standard Premium Resume",
    description: "For Job Seekers",
    category: "standard",
    featured: false,
    cardpreview: StandardPremiumPreview,
    resumepreview: StandardPremiumResume,
    pdf:StandardPremiumResumePdf,
  },

];


