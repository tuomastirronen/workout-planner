# Workout Planner

## Toiminnalliset vaatimukset
* Palveluun rekisteröityminen
* Treeniohjelman luominen
  * Käyttäjä voi rakentaa viikko-ohjelman, joka koostuu päivärutiineista
  * Päivärutiini koostuu harjoituksista, esim hauiskääntö 3x10x15kg
  
* Rutiinin suorittaminen
  * Suorituksen kirjaaminen (toteutuneiden toistojen ja painojen määrät, ajankäyttö)
  
* Raportointi
  * Voiman kehittyminen
  * Painon kehittyminen

## Tekninen toteutus

### Frontend
Frontend totetutetaan Reactilla

### Backend
Backend totetuteaan Nodella

### Tietokanta
Tietokantana käytetään Postgresiä

### Models
* User
 * Email
 * First name
 * Last name
 
* Muscle
  * Name
  * Image
  
* Movement
  * BELONGS TO MUSCLE
  * Name
  * Image

* Routine
  * HAS MANY EXERCISES
  * Weekday
  * Name

* Exercise
  * BELONGS TO MOVEMENT
  * BELONGS TO EXERCISE
  * Routine ID
  * Movement ID
  * Sets
  * Repetitions
  * Weight
  * (Rest)
  
### Views
* Rekisteröinti
* Kirjautuminen
* Rutiini
  * index (lista kaikista rutiineista, "viikkonäkymä")
  * show (lista kaikista rutiiniin kuuluvista harjoituksista)
* Harjoitus (index, show)
* Lihas
  * index (lista kaikista lihaksista)
  * show (näyttää yhden lihaksen ja siihen kuuluvat liikkeet)
* Liike
  * show
  
## Testaus / Tuotantoon vieminen
Sovelluskehityksessä käytetään Travis CI:tä

## Infrastruktuuri
* Palvelin ostetaan Hetzneriltä
* DNS-palvelimet otetaan DigitalOceanista
* Domain-nimi (TBD)

  
