# CSS to the Rescue @cmda-minor-web 2020 - 2021

## Demo link

[Go to the live demo of this project](https://mbergevoet.github.io/css-to-the-rescue-2021//)

# Week 3

Ik ben verder gegaan met het implementeren van de artworks op de site. Eerst had ik nog een andere aanpak dus moest ik weer opnieuw beginnen. Uiteindlijk is het me gelukt om er zes te maken. Ten slotte heb ik nog een invert mode toegevoed en animaties die de target selector gebruiken en keyframes

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
