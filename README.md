# CSS to the Rescue @cmda-minor-web 2020 - 2021

## Demo link

[Go to the live demo of this project](https://mbergevoet.github.io/css-to-the-rescue-2021/)

## De VHS artworks

<img src="https://i.imgur.com/kF4KFlX.png" width="200" disply="inline-block">
<img src="https://i.imgur.com/2yNG6L7.png" width="200" disply="inline-block">
<img src="https://i.imgur.com/J11TQJs.png" width="200" disply="inline-block">
<img src="https://i.imgur.com/rSOyF4E.png" width="200" disply="inline-block">
<img src="https://i.imgur.com/MuvBV3m.png" width="200" disply="inline-block">
<img src="https://i.imgur.com/329gcDH.png" width="200" disply="inline-block">

# Beoordeling

## Nieuwe en toffe CSS technieken 
* Betere CSS Grid
* Betere position relative & absolute
* Linear gradient background
* Keyframes & Animations
* Clippath
* Transform
* Perspective
* Calc

### Betere CSS Grid

Om de vhs banden in het midden van het scherm te krijgen heb ik een grid gemaakt waarbij ik dit keer gebruik heb gemaakt van de asci notatie. Die wilde ik altijd al een keer uittesten en ik weet nu ook beter hoe ik die moet gebruiken in het vervolg.

### Betere position relative & absolute

Ik heb veel tekst en vormen gepositioneerd met `position: realtive;` en `postion: absolute;`. Ik wist wel al een beetje hoe dit werkte maar bij deze opdracht heb ik het wel naar een ander niveau gebracht. Ik weet nu precies wanneer ik `left`, `right`, `top` & `bottom` moet gebruiken.

### Linear gradient background

Deze property heb ik op heel veel plekken gebruikt. Het is super handig als je vormen met meerdere kleuren wilt hebben zonder dat je honderde div elementen nodig hebt die je moet positioneren. In elke vhs band zit een gradient op één of andere manier.

### Keyframes & Animations

Als extraatje heb ik nog animaties teogevoed die de banden laat bewegen. Je kunt ze triggeren door in de lijst boven aan te klikken waardoor ze een de pseudoclass `:target` krijgen en ik ze individueel kan stylen.

### Clippath

Clipppath heb ik gebruikt op een paar specifieke plekken. Bij de Kodak band en de JVC band. Dit was om vormen uit te knippen die ook nog een achtergrond kleur of gradient hadden.

### Transform

Transform heb ik op veel plekken gebruikt om tekst en vormen te draaien net zoals ze staan op de echte vhs banden. Maar ik hebt het ook een aantal keer gebruikt om de aspect ratio van tekst te veranderen door de scale aan te passen.

```css
transform: rotate(-25deg);
transform-origin: bottom left;

transform: scale(2.5, 1.5);
```

### Perspective

Ik gebruik perspectivee om het eerste panasonic artwork te maken. De blauwe en rode streep zijn in het echte artwork aan de ene kant dunner dan aan de andere kant. Om dit effect met CSS te maken heb ik daarvoor perspective gebruikt. Daarnaast heef ik ze ook nog een position absolute en een right om te zorgen dat ze in het midden van het scherm komen te staan.

## Technieken die ik vaker ga gebruiken

## WCAG toggle

[WCAG guidelines](https://www.w3.org/TR/WCAG20/)

## WCAG Guidlines die toepasbaar zijn op mijn website

**1.4.3 Contrast (Minimum) - Level AA**
The visual presentation of text and images of text has a contrast ratio of at least 4.5:1

**2.1.1 Keyboard - Level A**
All functionality of the content is operable through a keyboard interface without requiring specific timings for individual keystrokes, except where the underlying function requires input that depends on the path of the user's movement and not just the endpoints.

**2.4.6 Headings and Labels - Level AA**
Headings and labels describe topic or purpose.

**2.4.7 Focus Visible - Level AA**
Any keyboard operable user interface has a mode of operation where the keyboard focus indicator is visible.

**2.5.3 Label in Name - Level A**
For user interface components with labels that include text or images of text, the name contains the text that is presented visually.

**3.2.1 On Focus - Level A**
When any user interface component receives focus, it does not initiate a change of context.

**3.2.4 Consistent Identification - Level AA**
Components that have the same functionality within a set of Web pages are identified consistently.

**3.3.2 Labels or Instructions - Level A**
Labels or instructions are provided when content requires user input.

**4.1.1 Parsing - Level A**
In content implemented using markup languages, elements have complete start and end tags, elements are nested according to their specifications, elements do not contain duplicate attributes, and any IDs are unique, except where the specifications allow these features.


## Reflectie op CSS To The Rescue

Ik vond het, om te beginnen, een interessant vak. Ik dacht dat ik al veel wist over CSS voor dat dit vak begon. Maar het heeft me
laten zien hoeveel er daadwerkelijk mogelijk is dat ik nog niet wist zonder dat je JavaScript nodig hebt. Veel CSS trucjes en properties zijn vrij 
situatie specifiek maar het is toch goed om ze te weten. Ik vond het ook erg leuk dat ik me creativiteit kwijt 
kon in de opdracht ookal moest ik in het begin nog wat zoeken naar de righting die ik op wilde en hoeveel vrijheid ik daadwerkelijk had 
om er een eigen invulling aan te geven. Dat mag nog wat duidelijker gemaakt worden als dit vak volgend jaar weer word gegeven.
De opbouw van het vak was goed alleen ging het voor mij erg snel. Daarom heb ik het de eerste keer niet gehaald om alles in de opdracht te verwerken.
Ik wist te laat pas wat voor concept ik nou wilde maken en tegen die tijd kostte het me te veel tijd om alle styling daar voor te doen om de deadline nog te halen.
Maar achteraf gezien heb ik erg veel plezier gehad in het maken van de VHS banden artorks. 
Ik heb iets gemaakt dat ik nooit gedacht had te maken met CSS. 
Ik heb nu extra tijd genomen om het af te maken en ik ben nu erg trots op het eindresultaat. 

# Week 3

Ik ben verder gegaan met het implementeren van de artworks op de site. Eerst had ik nog een andere aanpak met de elementen positioneren dus heb ik weer opnieuw moeten beginnen. Uiteindlijk is het me gelukt om er zes te maken. Ten slotte heb ik nog een invert mode toegevoed en animaties die de target selector gebruiken en keyframes

## Voortgang

Deze week heb me bezig gehouden met de main van het artikel. Ik had besloten om de tekst op te delen in verschillende divs voor het gemak. Dat werden er uiteindelijk zes. Van de zes "tegels" wilde ik dus elk in een nieuwe stijl maken. Die stijlen waren eigenlijk artworks van verschillende VHS banden merken. Zie de afbeelding hier beneden.

![VHS banden](https://i.imgur.com/4A16urP.jpg)

Om ze een plek te geven gaf plaatste ik ze in een twee koloms grid. De eerste tegel had ik al zo goed als afgemaakt maar ik bedacht me dat het erg lastig zou worden om die ook helemaal responsive te maken omdat de maten die ik gebruikte zo specifiek voor mijn schermgrote golt. Op donderdag had ik een korte ideeën sessie met Vasilis waarin hij me mee hielp met denken over andere mogelijkheiden en interacties. In die sessie heb ik besloten dat ik maar een één koloms grid ging maken en de VHS banden artworks een vaste hoogte en breedte te geven zodat het minder lastig zou worden met responsive maken. Ook heb ik besloten om de artworks zo goed mogelijk na te maken met alleen CSS dus.

## Plan voor volgende week

In de vakantie wil ik zorgen dat alle artworks klaar zijn en ook kijken naar de interacties. Er zal wat tijd in gaan zitten maar ik denk dat het zeker moet lukken om het op tijd af te krijgen.

# Week 2

## Voortgang

Deze week heb ik me vooral laten inspireren door mijn pintrest bord. Ik vind de afbeelding die je hier onder vind.

<img src="https://i.imgur.com/zqx8ac4.jpg" width="400"/>
Met dat voorbeeld ben ik aan de slag gegaan.

<img src="https://i.imgur.com/2gBXo4x.png?raw=true"/>
<img src="https://i.imgur.com/2HcuzOf.png?raw=true"/>

Ik heb de schuine elementen gepositioneerd met `position: relative` en `position: absolute` en door een `::before` te gebruiken voor de blauwe lijn en een `::after` voor de rode lijn. Het eerste screenshot is de eerste versie en daarna heb ik er verder aan gewerkt door nog dat _NEW!!!_ toe te voegen links boven en door de lijnen met `z-index` achter de main te plaatsen en dus worden afgesneden. <br>
Ik heb de gekleurde lijnen ook nog proberen te veranderen door de lijnen een SVG path te maken zodat ze aan de ene kant minder breed kunnen zijn dan de anderen zoals ik de achte foto ook te zien is.

## Plan voor volgende week

Ik moet nog goed nadenken over de layout van de echte content. Daar ben ik nu mee bezig en ik laat me inspireren door mijn Pintrest bord. Ik wil daarin ook nog heel graag iets doen met parralax scroll en de achtergrond. En ik wil ook nog een Dark theme met aangepaste kleueren die minder hard zijn voor je ogen als het avond of nacht is.

# Week 1

## Mijn Plan

Ik kies het **magazine artikel** in HTML om te stylen. Dit wil ik doen in een stijl die me aanspreekt. Dat is 80s cassette artworks van bedrijven als Sony en Polaroid en op grafisch ontwerp met gekleurde vormen uit die tij. Ik heb ook een [moodboard](https://nl.pinterest.com/mbergevoet39/retro-adds-and-colors/) gemaakt op Pintrest. Zie hier onder een compactere versie van het moodboard. Ik wil me vooral bezig houden met schuine layouts, typografie en interessant kleurgebruik.

<img src="https://i.imgur.com/l3aNSZ2.png?raw=true"/>

## Schetsen

<img src="https://i.imgur.com/v0Ki7gk.jpg?raw=true"/>
<img src="https://i.imgur.com/TNZzAbp.jpg?raw=true"/>
<img src="https://i.imgur.com/PgrjQms.jpg?raw=true"/>
<img src="https://i.imgur.com/5v8a4Sz.jpg?raw=true"/>

## Context

Als extra context kies ik **prefers-color-scheme**. Het ontwerp zoals ik het nu voor me zie heeft een vrij kleurrijke styling. Daarom wil ik dat het niet een super groot contrast geeft als een gebruiker bijvoorbeeld darkmode heeft aanstaan op hun computer.

## Ristricties

En als de twee ristricties wil ik **voldoen aan Level AAA van de WCAG** en wil ik het ontwerp **responsive maken zonder media queries**. Deze kies ik omdat de anderen twee met maar twee kleuren en zonder vormen mij het wel erg onmogelijk maken om het ontwerp dat ik in mijn hoofd heb te kunnen maken. Het zou kunnen dat ik nog kies voor extreme optimalisatie als het te lastig is om mijn ontwerp responsive te maken zonder media queries.

## CSS technieken

Veel flexbox gebruik omdat ik geen media queries ga gebruiken. Verder wil ik ook dingen doen met scroll gedrag en kleine animaties.
