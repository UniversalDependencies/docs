---
layout: feature
title: 'Case'
shortdef: 'case'
udver: '2'
---

Definition

Case is an inflectional feature for [nouns](u-pos/NOUN), [pronouns](u-pos/PRON), [adjectives](u-pos/ADJ)
and [numerals](u-pos/NUM) in Estonian.<br/>
Estonian has 14 inflectional cases:<br/>
nominative<br/>
genitive<br/>
partitive<br/>
illative (+ additive)<br/>
inessive<br/>
elative<br/>
allative<br/>
adessive<br/>
ablative<br/>
translative<br/>
terminative<br/>
essive<br/>
abessive<br/>
comitative

### <a name="Nom">`No`</a>: nominative / direct

The base form of the noun, typically used as citation form (lemma).
In many languages this is the word form used for subjects of clauses.
If the language has only two cases, which are called "direct" and
"oblique", the direct case will be marked Nom.

#### Examples

* [et] _<b>maja</b>_ "house"
* [et] _<b>laud</b>_ "table"
* [et] _<b>koer</b>_ "dog"
* [et] _<b>riik</b>_ "government"

### <a name="Gen">`Gen`</a>: genitive

Prototypical meaning of genitive is that the noun phrase somehow
belongs to its governor; it would often be translated by the English
preposition _of_.  English has the "saxon genitive" formed by the
suffix _'s_; but we will normally not need the feature in English
because the suffix gets separated from the noun during tokenization.

Note that despite considerable semantic overlap, the genitive case is
not the same as the feature of possessivity ([Poss]()). Possessivity
is a lexical feature, i.e. it applies to lemma and its whole
paradigm. Genitive is a feature of just a subset of word forms of the
lemma. Semantics of possessivity is much more clearly defined while
the genitive (as many other cases) may be required in situations that
have nothing to do with possessing. For example, [cs] _bez
prezidentovy dcery_ "without the president's daughter" is a
prepositional phrase containing the preposition _bez_ "without", the
possessive adjective _prezidentovy_ "president's" and the noun _dcery_
"daughter".  The possessive adjective is derived from the noun
_prezident_ but it is really an adjective (with separate lemma and
paradigm), not just a form of the noun. In addition, both the
adjective and the noun are in their genitive forms (the nominative
would be _prezidentova dcera_).  There is nothing possessive about
this particular occurrence of the genitive. It is there because the
preposition _bez_ always requires its argument to be in genitive.

#### Examples

* [cs] _Praha je hlavní město <b>České republiky</b>._ "Prague is the
  capital <b>of the Czech Republic</b>."

### <a name="Par">`Par`</a>: partitive

In Finnish the partitive case expresses indefinite identity and
unfinished actions without result.

#### Examples

* [fi] _kolme <b>taloa</b>_ "three <b>houses</b>"; (the _-a_ suffix of
  _talo_)
* [fi] _rakastan tätä <b>taloa</b>_ "I love this <b>house</b>"
* [fi] _saanko lainata <b>kirjaa</b>?_ "can I borrow the <b>book</b>?"
  (the _-a_ suffix of _kirja_)
* [fi]_lasissa on <b>maitoa</b>_ "there is (some) <b>milk</b> in the
  glass"

### <a name="Ill">`Ill`</a>: illative

The illative case expresses direction into something.

#### Examples

* [et] _maja_ "house"; _<b>majasse</b>_ "into the house"

### <a name="Add">`Add`</a>: additive

Distinguished by some scholars in Estonian, not recognized by
traditional grammar, exists in the Multext-East Estonian tagset and in
the Eesti keele puudepank. It has the meaning of illative, and
some grammars will thus consider the additive just an alternative
form of illative.
Forms of this case exist only in singular and not for all nouns.

#### Examples

* [et] _riik_ "government"; _riigisse_ "to the government" (singular illative); _<b>riiki</b>_ "to the government" (singular additive)

### <a name="Ine">`Ine`</a>: inessive

The inessive case expresses location inside of something.

#### Examples

* [et] _maja_ "house"; _<b>majas</b>_ "in the house"

### <a name="Ela">`Ela`</a>: elative

The elative case expresses direction out of something.

#### Examples

* [et] _maja_ "house"; _<b>majas</b><b>t</b>_ "from the house"

### <a name="All">`All`</a>: allative

The allative case expresses direction to something (destination is
adessive, i.e. at or on that something).

#### Examples

* [hu] _pénztár_ "cash desk"; _<b>pénztár</b><b>hoz</b>_ "to the cash desk"
* [fi] _pöytä_ "table"; _<b>pöydäll</b><b>e</b>_ "onto the table"

### <a name="Ade">`Ade`</a>: adessive

The adessive case expresses location at or on something.  The
corresponding directional cases are allative (towards something) and
ablative (from something).

#### Examples

* [et] _laud_ "table"; _<b>laual</b>_ "on the table"

Note that adessive is used to express location on the surface of
something in Finnish and Estonian, but does not carry this meaning in
Hungarian.

### <a name="Abl">`Abl`</a>: ablative

Prototypical meaning: direction from some point.

#### Examples

* [hu] _a <b>barátomtól</b> jövök_ "I'm coming <b>from my friend</b>"
* [fi] _<b>pöydältä</b>_ "from the table"; _<b>katolta</b>_ "from the roof";
  _<b>rannalta</b>_ "from the beach"

### <a name="Tra">`Tra`</a>: translative / factive

The translative case expresses a change of state ("it becomes X", "it
changes to X").  Also used for the phrase "in language X". In the
Szeged Treebank, this case is called factive.

#### Examples

* [et] _kell kuus_ "six o'clock"; _kella <b>kuueks</b>_ "by six o'clock"

### <a name="Ter">`Ter`</a>: terminative / terminal allative

The terminative case specifies where something ends in space or
time. Similar case in Basque is called terminal allative (Spanish
_adlativo terminal_).

#### Examples

* [et] _<b>j&otilde;eni</b>_ "down to the river"; _kella <b>kuueni</b>_
  "till six o'clock"

### <a name="Ess">`Ess`</a>: essive / prolative

The essive case expresses a temporary state, often it corresponds to
English "as a &hellip;" A similar case in Basque is called prolative
and it should be tagged `Ess` too.

#### Examples

* [et] _laps_ "child"; _<b>lapsena</b>_ "as a child"

### <a name="Abe">`Abe`</a>: abessive

The abessive case corresponds to the English preposition _without_.

#### Examples

* [fi] _raha_ "money"; _<b>rahatta</b>_ "without money"

### <a name="Com">`Com`</a>: comitative / associative

The comitative (also called associative) case corresponds to English
"together with &hellip;"

#### Examples

* [et] _koer_ "dog"; _<b>koeraga</b>_ "with dog"

<!-- Interlanguage links updated Čt lis 12 09:43:00 CET 2020 -->
