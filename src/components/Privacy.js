import React from "react";
import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import MyLogo from "../images/circleLogo.png";

const Nav = styled.nav`
  width: 100%;
  background: #faf1d9;
  color: #043300;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 998;
  transition: 0.8s all ease;

  @media screen and(min-width: 960px) {
    transition: none;
  }
`;
const NavLogo = styled(LinkR)`
  font-family: "MonteCarlo", cursive;
  color: var(--secondcolor);
  justify-self: flex-start;
  cursor: pointer;
  display: flex;
  text-decoration: none;
  font-size: 2rem;
  align-items: center;
  img {
    height: 55px;
  }
  @media screen and (max-width: 500px) {
    font-size: 1.4rem;
  }
`;
const PrivacySection = styled.section`
  background: #faf1d9;
  min-height: 100vh;
  padding: 0 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  font-family: "Alegreya Sans", sans-serif;
  font-size: 1.2rem;
`;
const PrivacyWrapper = styled.div`
  padding-top: 100px;
  max-width: 800px;
`;

const PrivacyContainer = styled.div`
  line-height: 1.2;
`;

const PText = styled.p`
  margin: 20px;
`;

function Privacy() {
  return (
    <div>
      <PrivacySection>
        <Nav>
          <NavLogo to="/">
            <img src={MyLogo} alt="logo"></img>Z kwiatów uszyte
          </NavLogo>
        </Nav>
        <PrivacyWrapper>
          <PrivacyContainer>
            <h2> Polityka prywatności</h2>
            <PText>
              Niniejsza polityka prywatności i plików cookies opisuje zasady
              postępowania z danymi osobowymi oraz wykorzystywania plików
              cookies i innych technologii w ramach strony internetowej
              www.zkwiatowuszyte.pl. Administratorem jest Katarzyna Jaworska
              prowadząca działalność gospodarczą pod firmą "Kasia" z siedzibą w
              Okunin 92, 05-100 Nowy Dwór Mazowiecki wpisana do Centralnej
              Ewidencji i Informacji o Działalności Gospodarczej, posługujący
              się numerem NIP 5311002736. Kontakt z administratorem możliwy pod
              adresem mailowym: zkwiatowuszyte@gmail.com{" "}
            </PText>{" "}
            <br></br>
            <PText>
              <strong>Definicje</strong> <br></br>1.Na potrzeby niniejszej
              polityki prywatności, przyjmuje się następujące znaczenie
              poniższych pojęć:<br></br> a) Administrator – Katarzyna Jaworska ,
              prowadząca działalność pod firmą "Kasia" z siedzibą w Okunin 92,
              05-100 Nowy Dwór Mazowiecki wpisana do Centralnej Ewidencji i
              Informacji o Działalności Gospodarczej, posługujący się numerem
              NIP 5311002736. <br></br> b)strona – strona internetowa dostępna
              pod adresem www.zkwiatowusztye.pl<br></br> c) użytkownik – każdy
              podmiot korzystający ze Strony.
            </PText>
            <br></br>
            <PText>
              <strong>Dane osobowe</strong> <br></br>1.Użytkownik może
              przekazywać swoje dane osobowe Administratorowi za pomocą
              formularza dostępnego na Stronie. <br></br> 2.Administratorem
              danych osobowych Użytkownika jest Administrator.<br></br> 3. Dane
              przekazane Administratorowi w ramach formularza przetwarzane są w
              celu przedstawienia oferty przez "Z kwiatów uszyte".<br></br> 4.
              Administrator gwarantuje poufność wszelkich przekazanych mu danych
              osobowych.
              <br></br> 5.Podanie danych jest zawsze dobrowolne, ale niezbędne
              do podjęcia przez Użytkownika akcji, do której jest przeznaczony
              formularz.<br></br>
              6.Administrator nie udostępnia przekazanych mu danych jakimkolwiek
              podmiotom trzecim.<br></br> 7.Dane osobowe są gromadzone z
              należytą starannością i odpowiednio chronione przed dostępem do
              nich przez osoby do tego nieupoważnione.<br></br> 8.Uzytkownikowi
              przysługują następujące uprawnienia: a)prawo do żądania dostępu do
              danych osobowych dotyczących osoby, której dane dotyczą, ich
              sprostowania, usunięcia lub ograniczenia przetwarzania, b) prawo
              do wniesienia sprzeciwu wobec przetwarzania, c) prawo do
              przenoszenia danych, d)prawo do cofnięcia zgody na przetwarzanie
              danych osobowych w określonym celu, jeżeli Użytkownik uprzednio
              taką zgodę wyraził, e)prawo do wniesienia skargi do organu
              nadzorczego w związku z przetwarzaniem danych osobowych przez
              Administratora. <br></br> 9. Administrator informuje niniejszym
              Użytkownika, że powierza przetwarzanie danych osobowych
              następującym podmiotom a) Formspree.io San Antonio, Texas, United
              States w celu korzystania z systemu mailingowego Formspree
              służącego do komunikacji z Użytkownikiem
            </PText>
            <br></br>
            <PText>
              <strong>Pliki cookies</strong>
              <br></br> 1.Administrator wykorzystuje pliki cookies (ciasteczka),
              czyli niewielkie informacje tekstowe, przechowywane na urządzeniu
              końcowym Użytkownika (np. komputerze, tablecie, smartfonie).
              Cookies mogą być odczytywane przez system teleinformatyczny
              Administratora. <br></br> 2.Administrator przechowuje pliki
              cookies na urządzeniu kończowym Użytkownika, a następnie uzyskuje
              dostęp do informacji w nich zawartych w celach statystycznych, w
              celach marketingowych oraz w celu zapewnienia prawidłowego
              działania Strony.<br></br> 3.Administrator informuje niniejszym
              Użytkownika, że istnieje możliwość takiej konfiguracji
              przeglądarki internetowej, która uniemożliwia przechowywanie
              plików cookies na urządzeniu końcowym użytkownika. W takiej
              sytuacji, korzystanie ze Strony przez użytkownika może być
              utrudnione.<br></br> 4.Administrator wskazuje niniejszym, że pliki
              cookies mogą być przez Użytkownika usunięte po ich zapisaniu przez
              Aministratora, poprzez odpowiednie funkcje przeglądarki
              internetowej, programy służące w tym celu lub skorzystanie z
              odpowiednich narzedzi dostępnym w ramach systemu operacyjnego, z
              którego korzysta Użytkownik.
            </PText>
            <br></br>
            <PText>
              <strong>Logi serwera </strong> <br></br>1.Korzystanie ze Strony
              wiąże się z przesyłaniem zapytań do serwera, na którym
              przechowywana jest Strona.<br></br> 2.Każde zapytanie skierowane
              do serwera zapisywane jest w logach serwera. Logi obejmują m.in.
              adres IP Użytkownika, date i czas serwera, informację o
              przeglądarce internetowej i systemie operacyjnym, z jakiego
              korzysta Użytkownik.<br></br> 3.Logi zapisywane i przechowywane są
              na serwerze.<br></br> 4.Dane zapisane w logach serwera nie są
              kojarzone z konkretnymi osobami korzystającymi ze Strony i nie są
              wykorzystywane przez Administratora w celu identyfikacji
              Użytkownika.<br></br> 5.Logi serwera stanowią wyłącznie materiał
              pomocniczy służący do administrowania Stroną, a ich zawartość nie
              jest ujawniana nikomu poza osobami upoważnionymi do
              administrowania serwerem.
            </PText>
            <br></br>
          </PrivacyContainer>
        </PrivacyWrapper>
      </PrivacySection>
    </div>
  );
}

export default Privacy;
