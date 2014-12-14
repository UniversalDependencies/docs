---
layout: postag
title: 'PROPN'
shortdef: 'proper noun'
---

### Definition

A proper noun is a noun that is the name
of a specific individual, place, or object.
Czech proper nouns are always written starting with an uppercase letter.
Note that names of days of week
_(pondělí, úterý, středa, čtvrtek, pátek, sobota, neděle)&nbsp;_
and names of months
_(leden, únor, březen, duben, květen, červen, červenec, srpen, září, říjen, listopad, prosinec)&nbsp;_
are not written capitalized (unlike in English)
and are not considered proper nouns.

Single-word named entities should be tagged `PROPN` even if they originate
from a common noun _(Zajíc, Huť)&nbsp;_ or an adjective _(Veselý, Teplá).&nbsp;_
Even if they were originally adjectives and inflect according to adjectival
paradigms, they behave syntactically as nouns. For instance, _Teplá&nbsp;_
(a river and city in western Bohemia) is originally feminine form of the
adjective _teplý&nbsp;_ “warm” but as a geographical name, it is a noun.
It denotes a concrete location (rather than a property of somebody/something)
and its feminine gender is fixed (while adjectives have forms in all three
genders).

Note that names of languages _(čeština, angličtina)_
and adjectives derived from geographical names _(český, anglický&nbsp;_ “Czech, English”)
are written in lowercase and are not tagged `PROPN`.

Personal names are typically treated as a sequence of proper nouns
(one or more given names and one or more surnames).
If the name contains prepositions, conjunctions or articles (foreign names
and old Czech names), these are tagged as `ADP`, `CONJ` and `DET`,
respectively.

Czech (and other Slavic) multi-word named entities have internal syntactic
structure, which is preserved in the annotation. The headword is always noun
and there may be other nouns involved. They will be tagged either `PROPN` or
`NOUN` and possible ambiguities must be resolved individually.
Modifying adjectives are never tagged `PROPN`. Even if an adjective is the
first word of a multi-word name, and thus it starts with an uppercase letter,
it is still tagged `ADJ`.
Similarly, function words in named entities retain their normal tags.
These rules are less strict for foreign named entities where the original
part of speech is hidden for a Czech speaker.

### Examples

- _<b>Bečov</b>.`PROPN` nad.`ADP` <b>Teplou</b>.`PROPN`&nbsp;_ is a city. _Bečov_ is the head
  and the _nad Teplou_ part refers to the river flowing through the city,
  to distinguish it from other Bečovs.
- _Červený.`ADJ` <b>Újezd</b>.`PROPN`&nbsp;_ is a village. _Újezd_ is the head and it is
  tagged `PROPN` although it originates in the common noun _újezd_ “district, riding”.
  There are many locations named _Újezd_ and the noun is perceived as a proper
  noun in current Czech. _Červený_ is an adjective meaning “red” and it is
  tagged `ADJ`.
- _Červená.`ADJ` řeka.`NOUN`&nbsp;_“Red River”. Even though the two words
  together are a name of a particular river, _řeka_ is a common noun and is
  tagged as such.
- _Organizace.`NOUN` spojených.`ADJ` národů.`NOUN`&nbsp;_“United Nations Organization”
  consists of three words, none of which is proper noun. However, the abbreviation
  _OSN&nbsp;_ “UNO” is a single-token name and is tagged `PROPN`.

### Conversion from the Prague Dependency Treebank

The PDT set of morphological (and part-of-speech) tags does not distinguish
common and proper nouns. However, lemmas in PDT contain additional features
that also encode types of named entities. When converting the PDT annotation
to UD, these lemma features are removed, the `PROPN` tag is used and the feature
[cs-feat/NameType]() is added to the universal features to preserve the type.
Only nouns are treated this way; PDT lemmas of some foreign adjectives also
encode that they entered Czech as parts of foreign names, but adjectives are
not converted to `PROPN`.

The following table lists the name types together with the most frequent examples.
See [http://ufal.mff.cuni.cz/techrep/tr27.pdf](),
page 8, section 2.1 (Lemma structure) for more details.

<table>
<tr><td>`Y`</td><td>given name</td><td><em>Jan, Jiří, Václav, Petr, Josef</em></td></tr>
<tr><td>`S`</td><td>surname</td><td><em>Klaus, Havel, Němec, Jelcin, Svoboda</em></td></tr>
<tr><td>`E`</td><td>member of a particular nation, inhabitant of a particular territory</td><td><em>Němec, Čech, Srb, Američan, Slovák</em></td></tr>
<tr><td>`G`</td><td>geographical name</td><td><em>Praha, ČR, Evropa, Německo, Brno</em></td></tr>
<tr><td>`K`</td><td>company, organization, institution</td><td><em>ODS, OSN, Sparta, ODA, Slavia</em></td></tr>
<tr><td>`R`</td><td>product</td><td><em>LN, Mercedes, Tatra, PC, MF</em></td></tr>
<tr><td>`m`</td><td>other proper name: names of mines, stadiums, guerilla bases etc.</td><td><em>US, PVP, Prix, Rapaport, Tour</em></td></tr>
</table>

### References

- [Loos, Eugene E., et al. 2003. Glossary of linguistic terms: What is a proper noun?](http://www-01.sil.org/linguistics/GlossaryOfLinguisticTerms/WhatIsAProperNoun.htm)
- [Wikipedia](http://en.wikipedia.org/wiki/Proper_noun)
