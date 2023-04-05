import React from "react";
import Titlebar_Component from '../Titlebar.js';
import Fusszeile_Component from '../Fusszeile.js';
import '../format/general.css'
import { useLocation } from "react-router-dom";

function AGBs() {
  const location = useLocation();
  const user = location.state?.user;

  return (
    <>
      <Titlebar_Component user={user}></Titlebar_Component>
      <div className="text-format">
        <title>Allgemeine Geschäftsbedingungen mit Kundeninformationen</title>
        <a><br /></a>
        <h2>Inhaltsverzeichnis</h2>
        <ol>
          <li>Geltungsbereich</li>
          <li>Vertragsschluss</li>
          <li>Widerrufsrecht</li>
          <li>Preise und Zahlungsbedingungen</li>
          <li>Liefer- und Versandbedingungen</li>
          <li>Eigentumsvorbehalt</li>
          <li>Gewährleistung</li>
          <li>Haftungsbeschränkung</li>
          <li>Besondere Bedingungen für die Verarbeitung von Waren nach bestimmten Vorgaben des Kunden</li>
          <li>Einlösung von Aktionsgutscheinen</li>
          <li>Einlösung von Geschenkgutscheinen</li>
          <li>Anwendbares Recht</li>
          <li>Gerichtsstand</li>
          <li>Alternative Streitbeilegung</li>
        </ol>
        <h2>§1 Geltungsbereich</h2>
        <p><b>1.1</b> Diese Allgemeinen Geschäftsbedingungen (nachfolgend &quot;AGB&quot;) der Die Flaschen AG (nachfolgend &quot;Verkäufer&quot;), gelten für alle Verträge über die Lieferung von Waren, die ein Verbraucher oder Unternehmer (nachfolgend „Kunde“) mit dem Verkäufer hinsichtlich der vom Verkäufer in seinem Online-Shop dargestellten Waren abschließt. Hiermit wird der Einbeziehung von eigenen Bedingungen des Kunden widersprochen, es sei denn, es ist etwas anderes vereinbart.</p>
        <p><b>1.2</b> Für Verträge über die Lieferung von Gutscheinen gelten diese AGB entsprechend, sofern insoweit nicht ausdrücklich etwas Abweichendes geregelt ist.</p>
        <p><b>1.3</b> Verbraucher im Sinne dieser AGB ist jede natürliche Person, die mindestens 18 Jahre alt sind, und die ein Rechtsgeschäft zu Zwecken abschließt, die überwiegend weder ihrer gewerblichen noch ihrer selbständigen beruflichen Tätigkeit zugerechnet werden können. Unternehmer im Sinne dieser AGB ist eine natürliche oder juristische Person oder eine rechtsfähige Personengesellschaft, die bei Abschluss eines Rechtsgeschäfts in Ausübung ihrer gewerblichen oder selbständigen beruflichen Tätigkeit handelt.</p>
        <p><b>1.4</b> Die Angebote des Verkäufers richten sich nur an Verbraucher und Unternehmer als Endverbraucher. Die gewerbliche Wiederveräußerung der Produkte ist untersagt. Der Verkäufer behält sich vor, Angebote auf den Abschluss von Kaufverträgen abzulehnen, wenn sie den Anschein erwecken, dem gewerblichen Weiterverkauf zu dienen.</p>
        <h2>§2 Vertragsschluss</h2>
        <p><b>2.1</b> Die folgenden Regelungen über den Vertragsschluss gelten für Bestellung über den Internetshop <a className="general-link" href="http://localhost:3000/" target="_blank" rel="noopener noreferrer"><dfn>www.flaschen-ag.de</dfn></a></p>
        <p><b>2.2</b> Im Falle des Vertragsschlusses kommt der Vertrag mit der <br />Die Flaschen AG<br />Am Flaschenplatz 3a<br />10247 Berlin<br /></p>
        <p>E-Mail:<a className="general-link" href="mailto:agb@flaschen.de" target="_blank" rel="noopener noreferrer"><dfn>agb@flaschen.de</dfn></a></p>
        <p>zustande.</p>
        <p><b>2.3</b> Die im Online-Shop des Verkäufers enthaltenen Produktbeschreibungen stellen keine verbindlichen Angebote seitens des Verkäufers dar, sondern dienen zur Abgabe eines verbindlichen Angebots durch den Kunden.</p>
        <p><b>2.4</b> Der Kunde kann das Angebot über das in den Online-Shop des Verkäufers integrierte Online-Bestellformular abgeben. Dabei gibt der Kunde, nachdem er die ausgewählten Waren in den virtuellen Warenkorb gelegt und den elektronischen Bestellprozess durchlaufen hat, durch Klicken des den Bestellvorgang abschließenden Buttons [„zahlungspflichtig bestellen“] ein rechtlich verbindliches Vertragsangebot in Bezug auf die im Warenkorb enthaltenen Waren ab. Die Bestellung kann jedoch nur abgegeben und übermittelt werden, wenn der Kunde durch Klicken des Buttons [„AGB akzeptieren“] und des Buttons [„Widerrufsbelehrung akzeptieren“] diese Vertragsbedingungen akzeptiert und dadurch in seine Bestellung einbezogen hat. Unmittelbar nach Absenden der Bestellung erhält der Kunde von dem Verkäufer eine Bestellbestätigung, die jedoch noch keine Annahme des Vertragsangebots darstellt.</p>
        <p><b>2.5</b> Der Verkäufer kann das Angebot des Kunden innerhalb von fünf Tagen annehmen,</p>
        <ul><ul>
          <li>indem er dem Kunden eine schriftliche Auftragsbestätigung oder eine Auftragsbestätigung in Textform (Fax oder E-Mail) übermittelt, wobei insoweit der Zugang der Auftragsbestätigung beim Kunden maßgeblich ist, oder</li>
          <li>indem er dem Kunden die bestellte Ware liefert, wobei insoweit der Zugang der Ware beim Kunden maßgeblich ist, oder</li>
          <li>indem er den Kunden nach Abgabe von dessen Bestellung zur Zahlung auffordert.</li>
        </ul></ul>
        <p>Liegen mehrere der vorgenannten Alternativen vor, kommt der Vertrag in dem Zeitpunkt zustande, in dem eine der vorgenannten Alternativen zuerst eintritt. Die Frist zur Annahme des Angebots beginnt am Tag nach der Absendung des Angebots durch den Kunden zu laufen und endet mit dem Ablauf des fünften Tages, welcher auf die Absendung des Angebots folgt. Nimmt der Verkäufer das Angebot des Kunden innerhalb vorgenannter Frist nicht an, so gilt dies als Ablehnung des Angebots mit der Folge, dass der Kunde nicht mehr an seine Willenserklärung gebunden ist.</p>
        <p><b>2.6</b> Bei der Abgabe eines Angebots über das Online-Bestellformular des Verkäufers wird der Vertragstext nach dem Vertragsschluss vom Verkäufer gespeichert und dem Kunden nach Absendung von dessen Bestellung in Textform (z. B. E-Mail, Fax oder Brief) einschließlich der Widerrufsbelehrung und mit Angaben zu den bestellten Waren übermittelt. Eine darüberhinausgehende Zugänglichmachung des Vertragstextes durch den Verkäufer erfolgt nicht. Sofern der Kunde vor Absendung seiner Bestellung ein Nutzerkonto im Online-Shop des Verkäufers eingerichtet hat, werden die Bestelldaten auf der Website des Verkäufers archiviert und können vom Kunden über dessen passwortgeschütztes Nutzerkonto unter Angabe der entsprechenden Login-Daten kostenlos abgerufen werden.</p>
        <p><b>2.7</b> Im Rahmen des Bestellprozesses legt der Kunde zunächst die gewünschten Waren oder Dienstleistungen in den Warenkorb. Dort kann der Kunde jederzeit die gewünschte Stückzahl ändern oder ausgewählte Waren ganz entfernen. Sofern der Kunde Waren im Warenkorb hinterlegt hat, gelangt er jeweils durch Klicks auf die „Weiter“-Buttons zunächst auf eine Seite, auf der der Kunde seine Daten eingeben und anschließend die Versand- und Bezahlart auswählen kann. Schließlich öffnet sich eine Übersichtsseite, auf der der Kunde seine Angaben überprüfen kann. Eingabefehler (zB bzgl. Bezahlart, Daten oder der gewünschten Stückzahl) kann der Kunde korrigieren, indem er bei dem jeweiligen Feld auf „Bearbeiten“ klicken. Um den Bestellprozess komplett abzubrechen, kann das Browser-Fenster komplett geschlossen werden. Ansonsten wird nach Anklicken des Bestätigungs-Buttons [„Zahlungspflichtig bestellen“] die Erklärung des Kunden verbindlich iSd Ziffer 2.2 dieser AGB.</p>
        <p><b>2.8</b> Die Bestellabwicklung und Kontaktaufnahme finden in der Regel per E-Mail und automatisierter Bestellabwicklung statt. Der Kunde hat sicherzustellen, dass die von ihm zur Bestellabwicklung angegebene E-Mail-Adresse zutreffend ist, so dass unter dieser Adresse die vom Verkäufer versandten E-Mails empfangen werden können. Insbesondere hat der Kunde bei dem Einsatz von SPAM-Filtern sicherzustellen, dass alle vom Verkäufer oder von diesem mit der Bestellabwicklung beauftragten Dritten versandten E-Mails zugestellt werden können.</p>
        <h2>§3 Widerrufsrecht</h2>
        <p><b>3.1</b> Verbrauchern steht grundsätzlich ein Widerrufsrecht zu.</p>
        <p><b>3.2</b> Nähere Informationen zum Widerrufsrecht ergeben sich aus der Widerrufsbelehrung des Verkäufers.</p>
        <h2>§4 Preise und Zahlungsbedingungen</h2>
        <p><b>4.1</b> Sofern sich aus der Produktbeschreibung des Verkäufers nichts anderes ergibt, handelt es sich bei den angegebenen Preisen um Gesamtpreise, die die gesetzliche Umsatzsteuer enthalten. Gegebenenfalls zusätzlich anfallende Liefer- und Versandkosten werden in der jeweiligen Produktbeschreibung bzw. im Bestellprozess vor dem Einlegen der Waren in den virtuellen Warenkorb gesondert angegeben.</p>
        <p><b>4.2</b> Die Zahlungsmöglichkeit/en wird/werden dem Kunden im Online-Shop des Verkäufers mitgeteilt.</p>
        <p><b>4.3</b> Bei Zahlung mittels einer von PayPal angebotenen Zahlungsart erfolgt die Zahlungsabwicklung über den Zahlungsdienstleister PayPal (Europe) S.à r.l. et Cie, S.C.A., 22-24 Boulevard Royal, L-2449 Luxembourg (im Folgenden: &quot;PayPal&quot;), unter Geltung der PayPal-Nutzungsbedingungen, einsehbar unter https://www.paypal.com/de/webapps/mpp/ua/useragreement-full oder - falls der Kunde nicht über ein PayPal-Konto verfügt – unter Geltung der Bedingungen für Zahlungen ohne PayPal-Konto, einsehbar unter https://www.paypal.com/de/webapps/mpp/ua/privacywax-full.</p>
        <p><b>4.4</b> Bei Auswahl der Zahlungsart „SOFORT“ erfolgt die Zahlungsabwicklung über den Zahlungsdienstleister SOFORT GmbH, Theresienhöhe 12, 80339 München (im Folgenden „SOFORT“). Um den Rechnungsbetrag über „SOFORT“ bezahlen zu können, muss der Kunde über ein für die Teilnahme an „SOFORT“ frei geschaltetes Online-Banking-Konto verfügen, sich beim Zahlungsvorgang entsprechend legitimieren und die Zahlungsanweisung gegenüber „SOFORT“ bestätigen. Die Zahlungstransaktion wird unmittelbar danach von „SOFORT“ durchgeführt und das Bankkonto des Kunden belastet. Nähere Informationen zur Zahlungsart „SOFORT“ kann der Kunde im Internet unter https://www.klarna.com/sofort/ abrufen.</p>
        <h2>§5 Liefer- und Versandbedingungen</h2>
        <p><b>5.1</b> Die Lieferung von Waren erfolgt auf dem Versandweg an die vom Kunden angegebene Lieferanschrift, sofern nichts anderes vereinbart ist. Bei der Abwicklung der Transaktion ist die in der Bestellabwicklung des Verkäufers angegebene Lieferanschrift maßgeblich.</p>
        <p><b>5.2</b> Sendet das Transportunternehmen die versandte Ware an den Verkäufer zurück, da eine Zustellung beim Kunden nicht möglich war, trägt der Kunde die Kosten für den erfolglosen Versand. Dies gilt nicht, wenn der Kunde den Umstand, der zur Unmöglichkeit der Zustellung geführt hat, nicht zu vertreten hat oder wenn er vorübergehend an der Annahme der angebotenen Leistung verhindert war, es sei denn, dass der Verkäufer ihm die Leistung eine angemessene Zeit vorher angekündigt hatte. Ferner gilt dies im Hinblick auf die Kosten für die Hinsendung nicht, wenn der Kunde sein Widerrufsrecht wirksam ausübt. Für die Rücksendekosten gilt bei wirksamer Ausübung des Widerrufsrechts durch den Kunden die in der Widerrufsbelehrung des Verkäufers hierzu getroffene Regelung.</p>
        <p><b>5.3</b> Selbstabholung ist aus logistischen Gründen nicht möglich.</p>
        <p><b>5.4</b> Gutscheine werden dem Kunden wie folgt überlassen:</p>
        <ul><ul>
          <li>per Download</li>
          <li>per E-Mail</li>
          <li>postalisch</li>
        </ul></ul>
        <h2>§6 Eigentumsvorbehalt</h2>
        <p>Tritt der Verkäufer in Vorleistung, behält er sich bis zur vollständigen Bezahlung des geschuldeten Kaufpreises das Eigentum an der gelieferten Ware vor.</p>
        <h2>§7 Gewährleistung</h2>
        <p><b>7.1</b> Ist die Kaufsache mangelhaft, ist der Käufer im Rahmen der gesetzlichen Bestimmungen berechtigt, Nacherfüllung zu verlangen, von dem Vertrag zurückzutreten oder den Kaufpreis zu mindern.</p>
        <p><strong>7.2</strong> Abweichend hiervon gilt bei gebrauchten Waren: Mängelansprüche sind ausgeschlossen, wenn der Mangel erst nach Ablauf von zwei Jahren ab Ablieferung der Ware auftritt. Mängel, die innerhalb von zwei Jahren ab Ablieferung der Ware auftreten, können innerhalb der gesetzlichen Verjährungsfrist geltend gemacht werden. Die Verkürzung der Haftungsdauer auf zwei Jahre gilt jedoch nicht</p>
        <ul><ul>
          <li>für Sachen, die entsprechend ihrer üblichen Verwendungsweise für ein Bauwerk verwendet worden sind und dessen Mangelhaftigkeit verursacht haben,</li>
          <li>für Schadensersatz- und Aufwendungsersatzansprüche des Kunden, sowie</li>
          <li>für den Fall, dass der Verkäufer den Mangel arglistig verschwiegen hat.</li>
        </ul></ul>
        <p><b>7.3</b> Der Kunde wird gebeten, angelieferte Waren mit offensichtlichen Transportschäden bei dem Zusteller zu reklamieren und den Verkäufer hiervon in Kenntnis zu setzen. Kommt der Kunde dem nicht nach, hat dies keinerlei Auswirkungen auf seine gesetzlichen oder vertraglichen Mängelansprüche.</p>
        <h2>§8 Haftungsbeschränkung</h2>
        <p><b>8.1</b> Ansprüche des Kunden auf Schadensersatz sind ausgeschlossen. Das gilt nicht für Schadensersatzansprüche des Kunden aus der Verletzung des Lebens, des Körpers, der Gesundheit oder aus der Verletzung wesentlicher Vertragspflichten (Kardinalpflichten) sowie die Haftung für sonstige Schäden, die auf einer vorsätzlichen oder grob fahrlässigen Pflichtverletzung von dem Verkäufer, seiner gesetzlichen Vertreter oder Erfüllungsgehilfen beruhen. Wesentliche Vertragspflichten sind solche, deren Erfüllung zur Erreichung des Ziels des Vertrags notwendig ist.</p>
        <p><b>8.2</b> Bei der Verletzung wesentlicher Vertragspflichten haftet der Verkäufer nur auf den vertragstypischen, vorhersehbaren Schaden, wenn dieser einfach fahrlässig verursacht wurde, es sei denn, es handelt sich um Schadensersatzansprüche des Kunden aus einer Verletzung des Lebens, des Körpers oder der Gesundheit.</p>
        <p><b>8.3</b> Die Einschränkungen aus Ziffer 8.1 bzw. 8.2 gelten auch zugunsten der gesetzlichen Vertreter und Erfüllungsgehilfen des Verkäufers, wenn Ansprüche direkt gegen diese geltend gemacht werden.</p>
        <p><b>8.4</b> Die sich aus Ziffer 8.1 bzw. 8.2 ergebenden Haftungsbeschränkungen gelten nicht, soweit der Verkäufer den Mangel arglistig verschwiegen oder eine Garantie für die Beschaffenheit der Sache übernommen hat. Das gleiche gilt, soweit der Verkäufer und der Kunde eine Vereinbarung über die Beschaffenheit der Sache getroffen haben. Die Vorschriften des Produkthaftungsgesetzes bleiben unberührt.</p>
        <h2>§9 Besondere Bedingungen für die Verarbeitung von Waren nach bestimmten Vorgaben des Kunden</h2>
        <p><b>9.1</b> Schuldet der Verkäufer nach dem Inhalt des Vertrages neben der Warenlieferung auch die Verarbeitung der Ware nach bestimmten Vorgaben des Kunden, hat der Kunde dem Betreiber alle für die Verarbeitung erforderlichen Inhalte wie Texte, Bilder oder Grafiken in den vom Betreiber vorgegebenen Dateiformaten, Formatierungen, Bild- und Dateigrößen zur Verfügung zu stellen und ihm die hierfür erforderlichen Nutzungsrechte einzuräumen. Für die Beschaffung und den Rechteerwerb an diesen Inhalten ist allein der Kunde verantwortlich. Der Kunde erklärt und übernimmt die Verantwortung dafür, dass er das Recht besitzt, die dem Verkäufer überlassenen Inhalte zu nutzen. Er trägt insbesondere dafür Sorge, dass hierdurch keine Rechte Dritter verletzt werden, insbesondere Urheber-, Marken- und Persönlichkeitsrechte.</p>
        <p><b>9.2</b> Der Kunde stellt den Verkäufer von Ansprüchen Dritter frei, die diese im Zusammenhang mit einer Verletzung ihrer Rechte durch die vertragsgemäße Nutzung der Inhalte des Kunden durch den Verkäufer diesem gegenüber geltend machen können. Der Kunde übernimmt hierbei auch die angemessenen Kosten der notwendigen Rechtsverteidigung einschließlich aller Gerichts- und Anwaltskosten in gesetzlicher Höhe. Dies gilt nicht, wenn die Rechtsverletzung vom Kunden nicht zu vertreten ist. Der Kunde ist verpflichtet, dem Verkäufer im Falle einer Inanspruchnahme durch Dritte unverzüglich, wahrheitsgemäß und vollständig alle Informationen zur Verfügung zu stellen, die für die Prüfung der Ansprüche und eine Verteidigung erforderlich sind.</p>
        <p><b>9.3</b> Der Verkäufer behält sich vor, Verarbeitungsaufträge insbesondere dann abzulehnen, wenn die vom Kunden hierfür überlassenen Inhalte gegen gesetzliche oder behördliche Verbote oder gegen die guten Sitten verstoßen. Dies gilt insbesondere bei Überlassung verfassungsfeindlicher, rassistischer, fremdenfeindlicher, diskriminierender, beleidigender, Jugend gefährdender und/oder Gewalt verherrlichender Inhalte.</p>
        <h2>§10 Einlösung von Aktionsgutscheinen</h2>
        <p><b>10.1</b> Gutscheine, die vom Verkäufer im Rahmen von Werbeaktionen mit einer bestimmten Gültigkeitsdauer unentgeltlich ausgegeben werden und die vom Kunden nicht käuflich erworben werden können (nachfolgend &quot;Aktionsgutscheine&quot;), können nur im Online-Shop des Verkäufers und nur im angegebenen Zeitraum eingelöst werden.</p>
        <p><b>10.2</b> Einzelne Produkte können von der Gutscheinaktion ausgeschlossen sein, sofern sich eine entsprechende Einschränkung aus dem Inhalt des Aktionsgutscheins ergibt.</p>
        <p><b>10.3</b> Aktionsgutscheine können nur vor Abschluss des Bestellvorgangs eingelöst werden. Eine nachträgliche Verrechnung ist nicht möglich.</p>
        <p><b>10.4</b> Pro Bestellung kann immer nur ein Aktionsgutschein eingelöst werden.</p>
        <p><b>10.5</b> Der Warenwert muss mindestens dem Betrag des Aktionsgutscheins entsprechen. Etwaiges Restguthaben wird vom Verkäufer nicht erstattet.</p>
        <p><b>10.6</b> Reicht der Wert des Aktionsgutscheins zur Deckung der Bestellung nicht aus, kann zur Begleichung des Differenzbetrages eine der übrigen vom Verkäufer angebotenen Zahlungsarten gewählt werden.</p>
        <p><b>10.7</b> Das Guthaben eines Aktionsgutscheins wird weder in Bargeld ausgezahlt noch verzinst.</p>
        <p><b>10.8</b> Der Aktionsgutschein wird nicht erstattet, wenn der Kunde die mit dem Aktionsgutschein ganz oder teilweise bezahlte Ware im Rahmen seines gesetzlichen Widerrufsrechts zurückgibt.</p>
        <p><b>10.9</b> Der Aktionsgutschein ist übertragbar. Der Verkäufer kann mit befreiender Wirkung an den jeweiligen Inhaber, der den Aktionsgutschein im Online-Shop des Verkäufers einlöst, leisten. Dies gilt nicht, wenn der Verkäufer Kenntnis oder grob fahrlässige Unkenntnis von der Nichtberechtigung, der Geschäftsunfähigkeit oder der fehlenden Vertretungsberechtigung des jeweiligen Inhabers hat.</p>
        <h2>§11 Einlösung von Geschenkgutscheinen</h2>
        <p><b>11.1</b> Gutscheine, die über den Online-Shop des Verkäufers käuflich erworben werden können (nachfolgend &quot;Geschenkgutscheine&quot;), können nur im Online-Shop des Verkäufers eingelöst werden, sofern sich aus dem Gutschein nichts anderes ergibt.</p>
        <p><b>11.2</b> Geschenkgutscheine und Restguthaben von Geschenkgutscheinen sind bis zum Ende des dritten Jahres nach dem Jahr des Gutscheinkaufs einlösbar. Restguthaben werden dem Kunden bis zum Ablaufdatum gutgeschrieben.</p>
        <p><b>11.3</b> Geschenkgutscheine können nur vor Abschluss des Bestellvorgangs eingelöst werden. Eine nachträgliche Verrechnung ist nicht möglich.</p>
        <p><b>11.4</b> Pro Bestellung kann immer nur ein Geschenkgutschein eingelöst werden.</p>
        <p><b>11.5</b> Geschenkgutscheine können nur für den Kauf von Waren und nicht für den Kauf von weiteren Geschenkgutscheinen verwendet werden.</p>
        <p><b>11.6</b> Reicht der Wert des Geschenkgutscheins zur Deckung der Bestellung nicht aus, kann zur Begleichung des Differenzbetrages eine der übrigen vom Verkäufer angebotenen Zahlungsarten gewählt werden.</p>
        <p><b>11.7</b> Das Guthaben eines Geschenkgutscheins wird weder in Bargeld ausgezahlt noch verzinst.</p>
        <p><b>11.8</b> Der Geschenkgutschein ist übertragbar. Der Verkäufer kann mit befreiender Wirkung an den jeweiligen Inhaber, der den Geschenkgutschein im Online-Shop des Verkäufers einlöst, leisten. Dies gilt nicht, wenn der Verkäufer Kenntnis oder grob fahrlässige Unkenntnis von der Nichtberechtigung, der Geschäftsunfähigkeit oder der fehlenden Vertretungsberechtigung des jeweiligen Inhabers hat.</p>
        <h2>§12 Anwendbares Recht</h2>
        <p>Für sämtliche Rechtsbeziehungen der Parteien gilt das Recht der Bundesrepublik Deutschland unter Ausschluss der Vorschriften des internationalen Privatrechts sowie des UN-Kaufrechts. Bei Verbrauchern gilt diese Rechtswahl nur insoweit, als nicht der gewährte Schutz durch zwingende Bestimmungen des Rechts des Staates, in dem der Verbraucher seinen gewöhnlichen Aufenthalt hat, entzogen wird.</p>
        <h2>§13 Gerichtsstand</h2>
        <p>Handelt der Kunde als Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen mit Sitz im Hoheitsgebiet der Bundesrepublik Deutschland, ist ausschließlicher Gerichtsstand für alle Streitigkeiten aus diesem Vertrag der Geschäftssitz des Verkäufers. Hat der Kunde seinen Sitz außerhalb des Hoheitsgebiets der Bundesrepublik Deutschland, so ist der Geschäftssitz des Verkäufers ausschließlicher Gerichtsstand für alle Streitigkeiten aus diesem Vertrag, wenn der Vertrag oder Ansprüche aus dem Vertrag der beruflichen oder gewerblichen Tätigkeit des Kunden zugerechnet werden können. Der Verkäufer ist in den vorstehenden Fällen jedoch in jedem Fall berechtigt, das Gericht am Sitz des Kunden anzurufen.</p>
        <h2>§14 Alternative Streitbeilegung</h2>
        <p><b>14.1</b> Die EU-Kommission stellt im Internet unter folgendem Link eine Plattform zur Online-Streitbeilegung bereit: <a className="general-link" href="https://ec.europa.eu/consumers/odr" target="_blank">https://ec.europa.eu/consumers/odr</a></p>
        <p>Diese Plattform dient als Anlaufstelle zur außergerichtlichen Beilegung von Streitigkeiten aus Online-Kauf- oder Dienstleistungsverträgen, an denen ein Verbraucher beteiligt ist.</p>
        <p><b>14.2</b> Der Verkäufer ist zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle weder verpflichtet noch bereit.</p>
        <a><br /></a>
        <dfn><strong>Disclaimer:</strong> Es wurde sich inhaltlich an den <a className="general-link" href="https://de.air-up.com/terms/" target="_blank" rel="noopener noreferrer"><dfn>AGBs der Firma Air-Up</dfn></a> Orientiert. Alle Angeben sind nicht verplichtend.</dfn>
      </div>
      <Fusszeile_Component user={user}></Fusszeile_Component>
    </>
  );
}

export default AGBs;
