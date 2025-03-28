//src/app/models/country.ts
export interface Country {
    cca2: string;
    name: {
      common: string;
      official: string;
      nativeName?: { [key: string]: { official: string; common: string } };
    };
    flags: {
      png: string;
      svg: string;
    };
    coatOfArms?: {
      png?: string;
      svg?: string;
    };
    capital?: string[];
    region: string;
    subregion?: string;
    population?: number;
  }
  