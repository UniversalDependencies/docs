---
layout: postag
title: 'PROPN'
shortdef: 'proper_noun'
udver: '2'
---

### Definition

Proper nouns specifically represent the names of unique entities, such as individuals, organizations, or geographic
locations. Similar to common nouns, Spanish proper nouns also have grammatical features such as gender and number.
However, their gender and number are often inherent to the named entity and do not always follow the typical
masculine and feminine patterns seen in common nouns. Proper nouns do not usually require articles, but when they
do, the articles must agree with the proper noun's gender and number.

### Compound and simple proper nouns

Names of entities often consist of multiple words. It is important to note that the UPOS tag `PROPN` always pertains
to a single word and is not automatically used for all words in a multiword name. A word may occur in a multiword
name while being a common [NOUN](), an [ADJ](), [DET](), [ADP]() etc. The status of a multiword named entity can
be optionally indicated on a separate annotation layer but it is not the focus of morphosyntax. Therefore, we need
to formulate rules when we classify a word as `PROPN` by itself.

#### Persons

* Given name of a person is `PROPN` (_<b>Juan</b>, <b>María</b>, <b>William</b>_).
* Surname of a person is `PROPN` (_<b>Sánchez</b>, <b>Clinton</b>_), even if it is derived from a common noun or an adjective (_<b>Bueno</b>_).
* Spanish function words in Spanish personal names keep their original UPOS: in _<b>Miguel</b> de <b>Cervantes</b> y <b>Saavedra</b>_, _de_ is [ADP]() and _y_ is [CCONJ]().
  * Annotation of foreign function words in foreign personal names depends on how the corpus generally approaches annotation of [foreign material](/foreign.html).
* Similar approach applies to names of individual animals (not species), non-human characters in literature etc.

#### Locations

* Single-word names of cities, countries, mountains, rivers and other geographical features are `PROPN` regardless
  whether they are Spanish or foreign and whether they look like a Spanish common noun or adjective (_<b>Madrid</b>,
  <b>India</b>, <b>Huascarán</b>, <b>Cuenca</b>_).
* Spanish function words keep their original UPOS just like in personal names; for foreign function words it depends
  on the overall approach to foreign material. So, in _Los Ángeles_, the first word is [DET]() (the name is Spanish,
  although the city now belongs to USA and is spelled without the accent in English); on the other hand, _de_ in
  _Rio de Janeiro_ does not have to be [ADP](), as the name is Portuguese.
* A combination of a Spanish adjective and common noun such as _Buenos Aires_ is annotated `ADJ NOUN`.
* If a multiword name of a natural feature contains a common noun that denotes the type of the feature, that common
  name is not `PROPN`. For example, in _Pico de <b>Teide</b>_, the UPOS tags are `NOUN` for _Pico_, `ADP` for _de_,
  and `PROPN` for _Teide_. Spanish adjectives keep the `ADJ` tag (as _Negro_ in _Río Negro_). On the other hand,
  similar words in foreign names will typically end up as `PROPN` in Spanish, especially if their meaning is not
  obvious to average Spanish speaker (for example, in _río <b>Sông Hương</b>_, the word _Sông_ is actually
  Vietnamese for “river”, but it is probably perceived just as a foreign name by most Spanish speakers).

#### Organizations, products, book/movie/song titles etc.

* Common Spanish words used as or in names of organizations and products keep their original (non-`PROPN`) UPOS tag.
  Treatment of non-Spanish words depends on the overall approach to foreign material in the corpus.
* Words created to name an organization or product are `PROPN` (e.g., _<b>Samsung</b>_).
* Multiword organization names may contain names of people or locations, then the above rules apply to such parts.

#### Abbreviations

* An abbreviation of a multiword name becomes `PROPN` (assuming it is a single token) even if the individual words
  would not be `PROPN` when the name is spelled out. For example, _<b>ONU</b>_ is `PROPN` but _Organización de las
  Naciones Unidas_ “United Nations” is `NOUN ADP DET NOUN ADJ`.


### Examples

* _<b>Madrid</b>_ “Madrid”
* _<b>Antonio</b>_ “Antonio”


### Capitalization

In Spanish, proper nouns are generally capitalized. This includes the first letter of the proper noun, as well as
any other words within a multi-word proper noun, such as place or organization names, with some exceptions like prepositions or articles:

* _<b>Río de la Plata</b>_ “La Plata River”
* _<b>Universidad de Salamanca</b>_ “University of Salamanca”

Note that when proper nouns are used in an adjectival form, they may lose their capitalization and be tagged as [ADJ]()
as in _vino <b>francés</b>_ “French wine” (instead of "vino Francés")

<!-- Interlanguage links updated St 6. května 2026, 20:42:07 CEST -->
