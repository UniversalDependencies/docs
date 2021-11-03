---
layout: feature
title: 'Case'
shortdef: 'case'
udver: '2'
---

Case is used for nominal parts-of-speech (nouns, proper nouns, numerals, adjectives and pronouns).

### <a name="Nom">`Nom`</a>: nominative / direct

The base form of the noun, typically used as citation form (lemma).
In many languages this is the word form used for subjects of clauses.
If the language has only two cases, which are called "direct" and
"oblique", the direct case will be marked Nom.

#### Examples

* [hu] _<b>év</b>_ "year"

### <a name="Acc">`Acc`</a>: accusative / oblique

Perhaps the second most widely spread morphological case. In many
languages this is the word form used for direct objects of verbs.  If
the language has only two cases, which are called "direct" and
"oblique", the oblique case will be marked Acc.

#### Examples

* [hu] _<b>évet</b>_ "year"

### <a name="Abs">`Abs`</a>: absolutive

Some languages (e.g. Basque) do not use nominative-accusative to
distinguish subjects and objects.  Instead, they use the contrast of
absolutive-ergative.

The absolutive case marks subject of intransitive verb and direct
object of transitive verb.

#### Examples

* [eu] _<b>Maria</b> lotan dago._ "Maria is sleeping."
* [hu] _<b>éveként</b>_

### <a name="Dat">`Dat`</a>: dative

This is the word form used for recipient arguments of verbs of transfer.

#### Examples

* [hu] _Ajándékot adok a <b>bátyámnak</b>._ "I will give my brother a present."

### <a name="Gen">`Gen`</a>: genitive

#### Examples

* [hu] _<b>árának</b>_

### <a name="Loc">`Loc`</a>: locative

The locative case often expresses location in space or time, which
gave it its name. As elsewhere, non-locational meanings also exist and
they are not rare. Uralic languages have a complex set of fine-grained
locational and directional cases (see below) instead of the
locative. Even in languages that have locative, some location roles
may be expressed using other cases (e.g. because those cases are
required by a preposition).

In Slavic languages this is the only case that is used exclusively in
combination with prepositions (but such a restriction may not hold in
other languages that have locative).

#### Examples

* [hu] _<b>helyütt</b>_

### <a name="Ins">`Ins`</a>: instrumental / instructive

The role from which the name of the instrumental case is derived is
that the noun is used as instrument to do something (as in [cs] _psát
<b>perem</b>_ "to write <b>using a pen</b>").  Many other meanings are
possible, e.g. in Czech the instrumental is required by the
preposition _s_ "with" and thus it includes the meaning expressed in
other languages by the comitative case.

#### Examples

* [hu] _<b>évvel</b>_ "by year"

### <a name="Dis">`Dis`</a>: distributive

The distributive case conveys that something happened to every member
of a set, one in a time. Or it may express frequency.

#### Examples

* [hu] _<b>fejenként</b>_ "per capita"
* [hu] _<b>esetenként</b>_ "in some cases"
* [hu] _<b>hetenként</b>_ "once per week, weekly"
* [hu] _<b>tízpercenként</b>_ "every ten minutes"

### <a name="Ess">`Ess`</a>: essive / prolative

The essive case expresses a temporary state, often it corresponds to
English "as a &hellip;" A similar case in Basque is called prolative
and it should be tagged `Ess` too.

#### Examples

* [hu] _ráadásul_

### <a name="Tra">`Tra`</a>: translative / factive

The translative case expresses a change of state ("it becomes X", "it
changes to X").  Also used for the phrase "in language X". In the
Szeged Treebank, this case is called factive.

#### Examples

* [hu] _Oroszlány halott <b>várossá</b> válhat._ lit. _Oroszlány dead city.Tra
  could-become._ "Oroszlány could become a dead city."

### <a name="Ine">`Ine`</a>: inessive

The inessive case expresses location inside of something.

#### Examples

* [hu] _ház_ "house"; _<b>házban</b>_ "in the house"

### <a name="Ill">`Ill`</a>: illative

The illative case expresses direction into something.

#### Examples

* [hu] _ház_ "house"; _<b>házba</b>_ "into the house"

### <a name="Ela">`Ela`</a>: elative

The elative case expresses direction out of something.

#### Examples

* [hu] _ház_ "house"; _<b>házból</b>_ "from the house"

### <a name="Ade">`Ade`</a>: adessive

The adessive case expresses location at or on something.  The
corresponding directional cases are allative (towards something) and
ablative (from something).

#### Examples

* [hu] _pénztár_ "cash desk"; _<b>pénztárnál</b>_ "at the cash desk"

Note that adessive is used to express location on the surface of
something in Finnish and Estonian, but does not carry this meaning in
Hungarian.

### <a name="All">`All`</a>: allative

The allative case expresses direction to something (destination is
adessive, i.e. at or on that something).

#### Examples

* [hu] _pénztár_ "cash desk"; _<b>pénztár</b><b>hoz</b>_ "to the cash desk"

### <a name="Abl">`Abl`</a>: ablative

Prototypical meaning: direction from some point.

#### Examples

* [hu] _a <b>barátomtól</b> jövök_ "I'm coming <b>from my friend</b>"

### <a name="Sup">`Sup`</a>: superessive

Used, chiefly [in
Hungarian](http://www.hungarianreference.com/Nouns/-n-superessive.aspx),
to indicate location on top of something or on the surface of
something.

#### Examples

* [hu] _asztal_ "table"; _<b>asztalon</b>_ "on the table"
* [hu] _könyvek_ "books"; _<b>könyveken</b>_ "on books"

### <a name="Sub">`Sub`</a>: sublative

The sublative case is used in Finno-Ugric languages to express the
destination of movement, originally to the surface of something
(e.g. "to climb a tree"), and, by extension, in other figurative
meanings as well (e.g. "to university").

#### Examples

* [hu] _Belgrádtól 150 <b>kilométerre délnyugatra</b>_ lit.
  _Belgrade.Abl 150 kilometer.Sub southwest.Sub_ "150 kilometers
  southwest of Belgrade"
* [hu] _hajó_ "ship"; _<b>hajóra</b>_ "onto the ship"
* [hu] _<b>bokorra</b>_ "on the shrub"

### <a name="Del">`Del`</a>: delative

Used, chiefly [in
Hungarian](http://www.hungarianreference.com/Nouns/ról-rol-delative.aspx),
to express the movement from the surface of something (like "moved off
the table"). Other meanings are possible as well, e.g. "about
something".

#### Examples

* [hu] _asztal_ "table"; _az <b>asztal</b><b>ról</b>_ "off the table"
* [hu]_<b>Budapestről</b> jövök_ "I am coming from Budapest"

### <a name="Tem">`Tem`</a>: temporal

The temporal case is used to indicate time.

#### Examples

* [hu] _<b>hétkor</b>_ "at seven (o'clock)"; _<b>éjfélkor</b>_ "at midnight";
  _<b>karácsonykor</b>_ "at Christmas"

### <a name="Ter">`Ter`</a>: terminative / terminal allative

The terminative case specifies where something ends in space or
time.

#### Examples

* [hu] _a <b>házig</b>_ "up to the house"; _hat <b>óráig</b>_ "till
  six o'clock"

### <a name="Cau">`Cau`</a>: causative / motivative / purposive

Noun in this case is the cause of something. In Hungarian it also
seems to be used frequently with currency ("to buy something _for_ the
money") and it also can mean the goal of something.

#### Examples

* [hu] _Egy világcég benzinkútjánál 7183 <b>forintért</b> tankoltam._
  lit. _a world-wide.company petrol.station.Ade 7183 forint.Cau
  refueled_ "I refueled my car at the petrol station of a world-wide
  company for 7183 forints."
* [hu] _Elmentem a boltba <b>tejért</b>._ lit. _went the shop.Ill
  milk.Cau_ "I went to the shop to buy milk."

<!-- Interlanguage links updated St lis 3 20:58:17 CET 2021 -->
