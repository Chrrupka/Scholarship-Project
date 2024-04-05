# Akademia Tarnowska

### Kurs

Testowanie i Jakość Oprogramowania / Projekt

### Autor

Edyta Boczarska

### Temat projektu

Testowanie formularza aplikacyjnego dla systemu usprawniającego proces przyznawania stypedniów uczelnianych.

### Opis projektu


Tematem projektu jest system usprawniający proces przyznawania stypendiów uczelnianych.
Przeznaczony on jest dla dwóch rodzajów użytkowników: klient oraz administrator.
Klient może wysyłać aplikację wniosku stypendialnego, może przeglądać status wniosku i ma wgląd w swoje archiwalne wnioski.
Administrator ma dostęp do przesłanych wniosków stypendialnych oraz może zarządzać ich statusem.
Przedmiotem testów jest formularz do wysyłania wniosków

## Uruchomienie projektu

Serwer:
``nodemon app``

Interfejs użytkownika:
``npm start``

Po uruchomieniu interfejs aplikacji będzie dostępny pod adresem ``http://localhost:3000``.
Natomiast serwer ma adres ``http://localhost:4200``.

## Uruchomienie testów jednostkowych i integracyjnych

``npm test``

## Dokumentacja API

- Adres usługi: ``/api/user/auth``,
- Typ: **POST**,
- Przyjmuje:

```json
{
  "login": "student@gmail.com",
  "password": "admin"
}
```

- Zwraca:

```json
{
  "token": "JWT"
}
```

- Adres usługi: ``/api/user/create``,
- Typ: **POST**,
- Przyjmuje: Dane użytkownika
- Zwraca:Informacje o statusie utworzenia użytkownika lub błąd.


- Adres usługi: ``/api/user/activate/{hash}``,
- Typ: **GET**,
- Przyjmuje: Unikalny hash aktywacyjny w URL,
- Zwraca: Informacje o statusie aktywacji.


- Adres usługi: ``/api/applications``,
- Typ: **GET**,
- Przyjmuje: Nie dotyczy
- Zwraca: Listę wszystkich aplikacji w systemie.


- Adres usługi: ``/api/application/{id}``,
- Typ: **GET**,
- Przyjmuje: ID aplikacji jako parametr URL
- Zwraca: Szczegóły aplikacji o podanym ID


- Adres usługi: ``/api/application``,
- Typ: **POST**,
- Przyjmuje: Dane aplikacji
- Zwraca: Status utworzenia


- Adres usługi: ``/api/application/{id}``,
- Typ: **DELETE**,
- Przyjmuje: parametr z URL,
- Zwraca: Status usnięcia,


- Adres usługi: ``/api/attachment/{id}``,
- Typ: **GET**,
- Przyjmuje: parametr z URL,
- Zwraca: Szczegóły załącznika.


- Adres usługi: ``/api/attachment``,
- Typ: **POST**,
- Przyjmuje: Dane załącznika
- Zwraca: nic,


- Adres usługi: ``/api/details``,
- Typ: **GET**,
- Przyjmuje: Nie dotyczy
- Zwraca: Listę wszystkich szczegółów aplikacji.


- Adres usługi: ``/api/details/{id}``,
- Typ: **GET**,
- Przyjmuje: ID szczegółów jako parametr URL,
- Zwraca: Szczegóły aplikacji o podanym ID


- Adres usługi: ``/api/details``,
- Typ: **POST**,
- Przyjmuje: Dane szczegółów aplikacji.
- Zwraca:Informacje o utworzonych szczegółach.


- Adres usługi: ``/api/student``,
- Typ: **POST**,
- Przyjmuje: Dane nowego studenta.
- Zwraca: Informacje o dodanym studencie.


- Adres usługi: ``/api/student/{id}``,
- Typ: **GET**,
- Przyjmuje: ID studenta jako parametr URL.
- Zwraca: Szczegóły dotyczące studenta.


- Adres usługi: ``/api/students``,
- Typ: **GET**,
  -Przyjmuje: Nie dotyczy
- Zwraca: Listę wszystkich studentów.



## Scenariusze testowe dla testera manualnego

1. Należy zalogować się jako student:<br/>
   login: student@gmail.com Hasło: admin
2. Przejść do zakładki "Złóż wniosek"

| Test Case ID | Cel                                                          | Kroki testowe                                                                                                                                                                                                                                | Oczekiwany wynik                                                                                                                              |
|--------------|---------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|
| TC_01        | Upewnienie się, że system nie pozwala przejść do następnego kroku, jeśli pola danych osobowych są puste.                                      | 1. Otwórz formularz danych osobowych.<br/> 2. Pozostaw wszystkie pola puste.  <br/>  3. Kliknij "Dalej".                                                                                                                                                                                       | System wyświetla komunikaty o błędzie dla wszystkich pustych pól                                                                                            |
| TC_02        | Sprawdzenie, czy system akceptuje poprawne dane i pozwala na przejście do następnego kroku.                                              | 1. Wypełnij wszystkie pola formularza poprawnymi danymi.<br/> 2. liknij "Dalej".                                                                                                                                                                                    | System zapisuje wprowadzone dane i przechodzi do sekcji "Informacje edukacyjne".                                                     |
| TC_03        | Upewnienie się, że użytkownik może zmienić wybór typu stypendium.                                           | 1. Wybierz jeden z typów stypendium.<br/> 2. Zmień wybór na inny typ. <br/>    3. Kliknij "Dalej".                                                                                                                                                                    | Wybrany typ stypendium jest zaktualizowany.                                                                                                              |
| TC_04        | Sprawdzenie, czy system prawidłowo waliduje format numeru PESEL.                                  | 1. Wprowadź nieprawidłowy numer PESEL. <br/> 2. Kliknij "Dalej".<br/>                                                                                                              | System wyświetla komunikat o błędzie dotyczący nieprawidłowego numeru PESEL.                                                                                                                  |
| TC_05        | Upewnij się, że system pozwala na dodawanie załączników.             | 1. Przejdź do sekcji dodawania załączników. <br/> 2. Dodaj plik.<br/>                                                                                                    | "Wybrany plik jest dodany jako załącznik.                                                                                 |
| TC_06        | Upewnij się, że użytkownik może wybrać specjalizację z rozwijanej listy.                                 | 1. Otwórz rozwijaną listę "Specjalizacja". <br/> 2. Wybierz opcję z listy.<br/> 3. Kliknij "Dalej".                                                                                                                                   | Wybrana specjalizacja jest zapisana.                                                                          |
| TC_07        | Sprawdzenie, czy system wyświetla komunikaty o błędzie, gdy nie wybrano żadnych opcji w formularzu informacji edukacyjnych.                                          | 1. Otwórz formularz informacji edukacyjnych bez wybierania opcji. <br/> 2. Kliknij "Wyślij".<br/>                                                                                                                                      | System wyświetla komunikaty o błędzie dla każdego pola wymagającego wyboru.                                                              |
| TC_08        | ZUpewnij się, że przycisk "Powrót" cofa użytkownika do poprzedniego kroku. | 1. W formularzu informacji edukacyjnych kliknij "Powrót".                           | Użytkownik wraca do formularza danych osobowych. |
| TC_09        | Upewnienie się, że użytkownik może wybrać tylko jeden typ stypendium.              | 1. Wybierz jedną opcję typu stypendium.<br/> 2. Spróbuj zaznaczyć inne typy stypendiów.<br/> 3.Sprawdź czy tylko jedna opcja jest zaznaczona.<br/> | System pozwala zaznaczyć tylko jedną opcję typu stypendium naraz.                            |
| TC_10        | Sprawdzenie, czy system pozwala na przesłanie kompletnego formularza.                                         | 1. Wypełnij wszystkie sekcje formularza poprawnymi danymi.<br/> 2. Kliknij "Wyślij" w sekcji informacji edukacyjnych.<br/>                                       | Formularz jest przesyłany, a użytkownik otrzymuje potwierdzenie.                                         |

## Technologie  użyte w projekcie

- Node.js
- React.js
- Hapi.js
- MongoDB
- Jest
- Enzyme
