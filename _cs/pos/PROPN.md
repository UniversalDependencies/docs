---
layout: postag
title: 'PROPN'
shortdef: 'proper noun'
udver: '2'
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
and old Czech names), these are tagged as `ADP`, `CCONJ` and `DET`,
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

- _<b>Bečov</b>_.`PROPN` _nad_.`ADP` _<b>Teplou</b>_.`PROPN` is a city. _Bečov&nbsp;_ is the head
  and the _nad Teplou&nbsp;_ part refers to the river flowing through the city,
  to distinguish it from other Bečovs.
- _Červený_.`ADJ` _<b>Újezd</b>_.`PROPN` is a village. _Újezd&nbsp;_ is the head and it is
  tagged `PROPN` although it originates in the common noun _újezd&nbsp;_ “district, riding”.
  There are many locations named _Újezd&nbsp;_ and the noun is perceived as a proper
  noun in current Czech. _Červený&nbsp;_ is an adjective meaning “red” and it is
  tagged `ADJ`.
- _Červená_.`ADJ` _řeka_.`NOUN` “Red River”. Even though the two words
  together are a name of a particular river, _řeka_ is a common noun and is
  tagged as such.
- _Organizace_.`NOUN` _spojených_.`ADJ` _národů_.`NOUN` “United Nations Organization”
  consists of three words, none of which is proper noun. However, the acronym
  _<b>OSN</b>&nbsp;_ “UNO” is a single-token name and is tagged `PROPN`.

### Conversion from the Prague Dependency Treebank

The PDT set of morphological (part-of-speech) tags does not distinguish
common and proper nouns. However, lemmas in PDT contain additional features
that also encode types of named entities. When converting the PDT annotation
to UD, these lemma features are removed, the `PROPN` tag is used and the feature
[cs-feat/NameType]() is added to the universal features to preserve the type.
Only nouns are treated this way.
Foreign adjectives are not converted to `PROPN` despite the fact
that they entered Czech as parts of foreign names and their lemmas contain
the name type feature.

The following table lists the name types together with the most frequent examples.
See <a href="http://ufal.mff.cuni.cz/techrep/tr27.pdf">http://ufal.mff.cuni.cz/techrep/tr27.pdf</a>,
page 8, section 2.1 (Lemma structure) for more details.

<table>
<tr><td><tt>_;Y</tt></td><td>given name</td><td><em>Jan, Jiří, Václav, Petr, Josef</em></td><td>“Jan, Jiří, Václav, Petr, Josef”</td></tr>
<tr><td><tt>_;S</tt></td><td>surname</td><td><em>Klaus, Havel, Němec, Jelcin, Svoboda</em></td><td>“Klaus, Havel, Němec, Yeltsin, Svoboda”</td></tr>
<tr><td><tt>_;E</tt></td><td>member of a particular nation, inhabitant of a particular territory</td><td><em>Němec, Čech, Srb, Američan, Slovák</em></td><td>“German, Czech, Serbian, American, Slovak”</td></tr>
<tr><td><tt>_;G</tt></td><td>geographical name</td><td><em>Praha, ČR, Evropa, Německo, Brno</em></td><td>“Prague, CR, Europe, Germany, Brno”</td></tr>
<tr><td><tt>_;K</tt></td><td>company, organization, institution</td><td><em>ODS, OSN, Sparta, ODA, Slavia</em></td><td>“ODS, UN, Sparta, ODA, Slavia”</td></tr>
<tr><td><tt>_;R</tt></td><td>product</td><td><em>LN, Mercedes, Tatra, PC, MF</em></td><td>“LN, Mercedes, Tatra, PC, MF”</td></tr>
<tr><td><tt>_;m</tt></td><td>other proper name: names of mines, stadiums, guerilla bases etc.</td><td><em>US, PVP, Prix, Rapaport, Tour</em></td><td>“US, PVP, Prix, Rapaport, Tour”</td></tr>
</table>

## Diffs

### Prague Dependency Treebank

Articles in foreign names _(the, die, le)&nbsp;_ are tagged [ADJ](), not [DET]().
Otherwise, the morphological analysis usually includes the original part of speech of foreign words.

### References

- [Loos, Eugene E., et al. 2003. Glossary of linguistic terms: What is a proper noun?](http://www-01.sil.org/linguistics/GlossaryOfLinguisticTerms/WhatIsAProperNoun.htm)
- [Wikipedia](http://en.wikipedia.org/wiki/Proper_noun)
<!-- Interlanguage links updated Pá kvě 14 11:08:23 CEST 2021 -->
