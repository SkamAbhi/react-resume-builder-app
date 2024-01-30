import { atom } from "recoil";

interface UserData {
  firstName: string;
  surName: string;
  profession: string;
  city: string;
  country: string;
  pinCode: string;
  phone: string;
  email: string;
}

export const userDataState = atom<UserData>({
  key: "userDataState",
  default: {
    firstName: "",
    surName: "",
    profession: "",
    city: "",
    country: "",
    pinCode: "",
    phone: "",
    email: "",
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
