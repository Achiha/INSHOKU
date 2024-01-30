export enum SelectedPage {
    Home = "home",
    AboutUs = "aboutus",
    Garally = "garally",
    Shop = "shop",
    Contact = "contact",
  }

  export interface BenefitType {
    icon: JSX.Element;
    title: string;
    description: string;
  }

  export interface ClassType {
    name: string;
    description?: string;
    image: string;
  }