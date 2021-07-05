---
layout: feature
title: 'NameType'
shortdef: 'type of named entity'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Ast">Ast</a></td>
  <td><a href="#Cal">Cal</a></td>
  <td><a href="#Com">Com</a></td>
  <td><a href="#Geo">Geo</a></td>
  <td><a href="#Giv">Giv</a></td>
  <td><a href="#Let">Let</a></td>
  <td><a href="#Lit">Lit</a></td>
  <td><a href="#Nat">Nat</a></td>
  <td><a href="#Rel">Rel</a></td>
  <td><a href="#Sur">Sur</a></td>
  <td><a href="#Oth">Oth</a></td>
</tr>
</table>

The type of a named entity is applied to ([proper](la-pos/PROPN)) [nouns](la-pos/NOUN) and [adjectives](la-pos/ADJ) to broadly describe the category this nominal element is referring to. 

This feature is token-based and does not take into account nested entities or additional layers of reference: this means, for example, that there is no value for titles of literary works, since these are usually made up of common nouns or other kinds of named entities (but see `Lit`). Still, the lexical feature [`Proper`](la-feat/Proper) can be used to distinguish such strings.

### <a name="Ast">`Ast`</a>: name of astronomical/astrological entity

Term used to refer to a planet, a star, a region in space (like a constellation)...

#### Examples

* ***Sol*** 'sun'
* ***Aries*** 'Ram', sign of the zodiac (a common noun in its basic use)
* ***Antares***, "the opponent of Mars", a star also known as *Cor Scorpii* 'heart of the scorpion', from the constellation it appears to reside in

### <a name="Cal">`Cal`</a>: name of calendrical entity

Term used to refer to one of many quantitative or qualitative subdivisions of time, such as, among others, months.

In Latin, months are originally adjectives, some of which derived by other names, but later they show a tendency to be reanalyzed as independent nouns.

#### Examples

* ***Kalendae*** 'Calends', first day of a month
* ***Ianuarius*** (*mensis*) 'January' (lit. "the month of Janus", the god); ***Aprilis*** (*mensis*) 'April' (from *aperio* 'to open')


### <a name="Com">`Com`</a>: name of organised entity ("company")

Name of any entity formed by human social activities: a group, a company, a society, a political party... Either a proper name, or a common name used antonomastically.

#### Examples

* ***Respublica***, when a specific republic is intended (like the Roman one)
* ***Ecclesia***, when a specific religious organisation is intended (like the Catholic Church) 

### <a name="Geo">`Geo`</a>: name of geographical entity

Name of any geographical entity: a city, a country, a mountain, a sea... also used for mythical or legendary places.

Also used for [adjectives](la-pos/ADJ) which refer to geographical (real or mythical) features rather than to dwellers of those (it has to be said that the distinction with respect to `Nat` may be blurry at times).

#### Examples

* ***Roma***
* ***Padus***, the Po river in Northern Italy
* ***Atlantis***, the mythical island described by Plato
* ***hadriaticus***, of/relative to the Adriatic sea (adjective: *Hadriaticum mare*)

### <a name="Giv">`Giv`</a>: given name of person

The personal name(s), or the *praenomen* 'first name', the actual individual name of a person, distinct from the name of a *gens*, the "clan", and the *cognomen*, a surname or nickname (see `Sur`). Many persons appear in history just with a given name. 

This value is also used for names of legendary mortals or beasts, but not for gods, demigods, and the like (see `Rel`). It is not used for epithets (for which the feature [`Proper`](la-feat/Proper) is more fitting). 

It is also used for [adjectives](la-pos/ADJ) referring to personal names.

#### Examples

* ***Marcella***, ***Gaius*** 
* ***Decimus***, ***Septimia*** (names derived from adjectives: 'tenth (son)', 'seventh (daughter)')
* ***Tachipertus***, ***Ursula*** (Langobard names)
* ***Rhea Silvia***, ***Romulus***, ***Aeneas***, ***Dido*** (legendary figures)
* ***Antinoeus*** 'of/related to Antinous' (adjective)

### <a name="Let">`Let`</a>: name of letter or character

The name used to refer to a letter of the alphabet or any other literal character. It might coincide with the letter itself. The letter might be used as a variable or placeholder in mathematical or abstract formulations.

#### Examples

* ***A***, ***B***, ***C***... (Latin letters)
* ***alpha***, ***beta***, ***gamma***... (Greek letters)

### <a name="Lit">`Lit`</a>: name of literary work

Specific *name* for a literary work, different from the *title* of a book or similar, which often is a phrase consisting of common terms.

#### Examples

* ***Aeneis***, the Aeneid, the poem by Virgil
* ***Vulgata***, the Latin translation of the Bible (actually a participle from *vulgata editio* 'popularised edition')

### <a name="Nat">`Nat`</a>: designation of nationality

Term which indicates some kind of national or ethnic membership, possibly defined by ancestry, or inhabitants of a particular territory, city, or similar. 

In Latin, it is very often an [adjective](la-pos/ADJ), which can be used for persons and inanimated entites alike, and can be substantivised.

#### Examples

* ***romanus*** (m.; f. *romana*, n. *romanum*) 'of/related to Rome'; ***aquileiensis*** (m./f.; n. *aquileiense*) 'of/related to Aquileia'; ***ravennàs*** (gen. *ravennatis*) 'of/related to Ravenna' (all adjectives)
* ***saxo*** (gen. *saxŏnis*) 'Saxon' (masculine noun, with corresponding adjective *saxonicus*)

### <a name="Rel">`Rel`</a>: name of religious or mythical entity

Name or term used to refer to any non-mortal and/or numinous being of a religion, mythology, legend.

Mortal beings "regularly" receive the feature `Giv` instead.

It can also be assigned to [adjectives](la-pos/ADJ), if they e.g. directly refer to a deity.

#### Examples

* ***Deus*** 'God', intended as the Christian god
* ***Proserpina***, ***Saturnus***, Roman gods
* ***Helius***, Greek divinity, a Titan identified with the Sun
* ***Hercules***, demigod
* ***saturnius*** 'belonging to Saturn (the god)' (adjective)


### <a name="Sur">`Sur`</a>: surname / family name of person

Any name of person different from the first, given name, and used to identify that person, but usually assigned to a larger group of people. 

In Classical Rome, names (morphologically adjectives) for the *gentes*, the "clans", and *cognomina*, surnames or nicknames (many coming from common nouns), were in use. Many *nomina gentilicia* became full-fledged *praenomina* later on.

Other epithets are treated by means of the feature [Proper](la-feat/Proper).

#### Examples

* ***Iulius*** 'of the gens Iulia'; ***Quinctilius*** 'of the gens Quinctilia' (*nomina*)
* ***Brutus*** 'dull'; ***Naso*** 'large-nosed' (*cognomina*)
* ***Alagherius*** (Latinised Medieval Italian surname, today *Alighieri* )

### <a name="Oth">`Oth`</a>: other

Names of other entities not covered by the existing features, such as buildings, events, and so on.

#### Examples

* ***Colosseum***, originally named *Amphitheatrum Flavium*
<!-- Interlanguage links updated Pá kvě 14 11:08:34 CEST 2021 -->
