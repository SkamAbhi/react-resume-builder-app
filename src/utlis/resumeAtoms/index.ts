import { atom } from "recoil";

interface UserData {
  phoneNumber: string;
  firstName: string;
  lastName: string;
  profession: string;
  city: string;
  country: string;
  ZipCode: string;
  email: string;
  photo: string;
}

export const userDataState = atom<UserData>({
  key: "userDataState",
  default: {
    firstName: "",
    lastName: "",
    profession: "",
    city: "",
    country: "",
    ZipCode: "",
    phoneNumber: "",
    email: "",
    photo: "",
  },
});

interface educationData {
  schoolName: string;
  schoolLocation: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
  description: string;
}

export const educationData = atom<educationData>({
  key: "educationData",
  default: {
    schoolName: "",
    schoolLocation: "",
    degree: "",
    fieldOfStudy: "",
    startDate: "",
    endDate: "",
    description: "",
  },
});

interface workExperienceData {
  jobTitle: string;
  CompanyName: string;
  city: string;
  Country: string;
  startDate: string;
  endDate: string;
  description: string;
}

export const workExperienceData = atom<workExperienceData>({
  key: "workExpData",
  default: {
    jobTitle: "",
    CompanyName: "",
    city: "",
    Country: "",
    startDate: "",  
    endDate: "",
    description: "",
  },
});
interface projectData {
  projectName: string;
  role: string;
  technologies: string;
  description: string;
  results: string;
}
export const projectData = atom({
  key: "projectData",
  default: {
    projectName: "",
    role: "",
    technologies: "",
    description: "",
    results: "",
  },
});

export const userState = atom({
  key: "userState",
  default: {
    isAuthenticated: false,
    username: "",
  },
});

export const LoginDataState = atom({
  key: "LoginDataState",
  default: {
    name: "",
    email: "",
  },
});

export const dynamicLinksState = atom({
  key: "dynamicLinksState",
  default: [],
});

export const userIdState = atom({
  key: "userIdState",
  default: null,
});

export const companyNameState = atom({
  key: 'companyNameState',
  default: '',
});

export const cityState = atom({
  key: 'cityState',
  default: '',
});

export const countryState = atom({
  key: 'countryState',
  default: '',
})
