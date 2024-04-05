import * as Yup from 'yup';

export const personalInformationSchema = Yup.object().shape({
  firstName: Yup.string()
      .min(2, 'Imię musi mieć co najmniej 2 znaki.')
      .max(30, 'Imię może mieć maksymalnie 30 znaków.')
      .required('Imię jest wymagane.'),
  lastName: Yup.string()
      .min(2, 'Nazwisko musi mieć co najmniej 2 znaki.')
      .max(30, 'Nazwisko może mieć maksymalnie 30 znaków.')
      .required('Nazwisko jest wymagane.'),
  pesel: Yup.string()
      .matches(/^\d{11}$/, 'PESEL musi składać się z 11 cyfr.')
      .required('PESEL jest wymagany.'),
  albumNumber: Yup.string()
      .matches(/^\d+$/, 'Numer albumu może zawierać tylko cyfry.')
      .required('Numer albumu jest wymagany.'),
  email: Yup.string()
      .email('Nieprawidłowy format adresu email.')
      .required('Adres email jest wymagany.'),
  phoneNumber: Yup.string()
      .matches(/^\d+$/, 'Numer telefonu może zawierać tylko cyfry.')
      .required('Numer telefonu jest wymagany.'),
  address: Yup.string()
      .required('Adres zamieszkania jest wymagany.'),
  type: Yup.string()
      .required('Musisz wybrać typ stypendium'),

});
export const educationalInformationSchema = Yup.object().shape({
  specialization: Yup.string()
      .required('Wybór specjalizacji jest wymagany.'),
  educationLevel: Yup.string()
      .required('Wybór poziomu kształcenia jest wymagany.'),
  studyYear: Yup.string()
      .required('Wybór roku studiów jest wymagany.'),
  studySystem: Yup.string()
      .required('Wybór systemu studiów jest wymagany.'),
});
