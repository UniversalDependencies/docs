---
layout: feature
title: 'Case'
shortdef: 'case'
---


`Case` is usually an inflectional feature of nouns, and, in many Uralic 
languages, adjectives, some adpositions and adverbs, and non-finite forms of
verbs. The case feature typically matches case suffixes. Some cases can be
considered derivational, creating a new lexeme rather than part of the original
lexical features, this is often case with marginal semantic cases that are not
part of lexical constructions. Uralic languages have rich case systems and
there are few dozens of values that can be used, it is advisable to try and
match an existing value before documenting a new one.

The values can be roughly separated into grammatical (`Nom`, `Acc`, `Dat`) and
semantic. Semantic cases are typically derived of proto-Uralic directional case
systems (to, on, from, and later: inner, outer and surficial, etc.), but are
different between Uralic languages. Marginal cases are sometimes considered as
derivational suffixes instead.

The case systems of Uralic languages vary a lot, a care should be taken in
using correct values mapping between different languages. For example,
Hungarian has full nominative-accusative-dative grammatical case system, 
whereas Finnish has genitive and partitive standing in for object cases and
no dative; Hungarian has a 9 locative case system whereas Finnish has 6 and
North Sámi 4. It is not always easy to map between them using descriptions here
as only guideline.

Distinguishing between marginal cases and derivations have to be done on a
case by case basis. Potential evidence against Case feature includes: no
phonological evidence (e.g. lack of vowel harmony indicates a postpositional
enclitic / compound), no syntactic evidence (e.g. lack of case agreement in
noun phrases) and limited productivity.

<!-- Grammatical cases -->

### `Nom`: Nominative

Nominative is typically an unmarked base form, the form of subject's in basic
clauses, often also the dictionary form and lemma form of the word.

#### Nominative examples

* [fi] _kissa_ "cat", _talo_ "house"
* [fi] _nopea_ "fast", _juokseva_ "running"
* [fi] _minä_ "I", _kolme_ "three"

### `Acc`: Accusative

Accusative is typically the form of direct object, but not necessarily solely.
For example, in Finnish the direct object is mainly seen in genitive `Gen` and
partitive `Par` forms instead (because of language history).

#### Accusative examples

* [fi] _hänet_ "him"


### `Dat`: Dative

Dative is typically a form for indirect object, though many other (semantic)
cases are used in constructions that are considered indirect objects in some of
the grammars.

#### Dative examples

None in Finnish.

### `Par`: Partitive

Partitive is used for various tasks, including object case, indefinite semantics
etc.

#### Partitive examples

* [fi] _kissaa_ "a cat, of a cat", _taloa_ "a house, of a house"

<!-- Genitive -->

### `Gen`: Genitive

Genitive is typically used to form owning construction. In Finnish, genitive
is used for many grammatical constructions, such as necessive subject, direct
object, and so forth. Historically Finnish may have had an accusative suffix
of _-m_ whereas genitive suffix is _-n_, that have been merged, however, this
distinction is not made in Universal Dependencies analysis (there should be a
guideline saying that historical analyses are to be avoided).

#### Genitive examples

* [fi] _kissan_ "cat’s", _talon_ "house’s"

<!-- Locative case systems -->

### `Ine`: Inessive case

Inessive is case for "being inside". It is a part of the Uralic extended
locative case system.

#### Inessive examples

* [fi] _kissassa_ "in a cat", _talossa_ "in a house"

### `Ela`: Elative case

Elative is case for "moving out from inside". It is a part of the Uralic
extended locative case system.

#### Elative examples

* [fi] _kissasta_ "from a cat", _talosta_ " from a house"

### `Ill`: Illative case

Illative is case for "moving into inside". It is a part of the Uralic extended
locative case system.

#### Illative examples

* [fi] _kissaan_ "into a cat", _taloon_ "into a house"

### `Ade`: Adessive case

Adessive is case for "being outside". It is a part of the Uralic
extended locative case system.

#### Adessive examples

* [fi] _kissalla_ "on a cat", _talolla_ "near a house"

### `Abl`: Ablative case

Ablative is case for "moving from outside". It is a part of the Uralic extended
locative case system.

#### Ablative examples

* [fi] _kissalta_ "from a cat", _talolta_ "from around a house"

### `All`: Allative case

Allative is case for "moving to outside". It is a part of the Uralic
extended locative case system.

#### Allative examples

* [fi] _kissalle_ "to a cat", _talolle_ " to a house"


### `Sup`: Superessive case

Superessive is case for "being on a surface". It is a part of the Uralic extended
locative case system.

#### Superessive examples

None in Finnish.

### `Del`: Delative case

Elative is case for "moving out from surface". It is a part of the Uralic
extended locative case system.

#### Delative examples

None in Finnish.


### `Sub`: Sublative case

Sublative is case for "moving onto a surface". It is a part of the Uralic
extended locative case system.


<!--
  some Uralic languages will have more of a proto-Uralic three case system
  -->

#### Delative examples

None in Finnish.

### `Loc`: Locative case

Locative is case for "being in / at / on". It is a part of Proto-Uralic
basic locative case system.

#### Locative examples

None in Finnish

### `Lat`: Lative case

Lative is case for "moving in / at / on". It is a part of Proto-Uralic
basic locative case system.

#### Locative examples

None in Finnish

<!-- marginal locative -->

### `Ter`: Terminative case

Terminative is case for "moving until".

#### Terminative examples

None in Finnish

### `Pro?`: Prolative case

Prolative is a case for "moving via".

#### Prolative examples

None in Finnish

<!-- locative ~ stative case system -->

### `Ess`: Essive case

Essive is a case for "being something". It is a part of Uralic stative case
system.

#### Essive examples

* [fi] _kissana_ "as a cat", _talona_ "as a house"

### `Exe`: Exessive case

Exessive is a case for "unbecoming something".

Finnish essives are treated as derivations, e.g. [fi] _papinta_ "from a
priest('s house)"

#### Exessive examples

None in Finnish

### `Tra`: Translative case

Translative is a case for "turning into something".

#### Translative examples

* [fi] _kissaksi_ "into a cat", _taloksi_ "as home, lit. into a house"

<!-- other marginal -->

### `Abe`: Abessive case

Abessive is a case for "without". 

#### Abessive examples

* [fi] _kissatta_, "without a cat", _talotta_ "without a house"

### `Ins`: Instructive or instrumental case

Instructive is a case for "with" (as a tool, means etc.).

Many Finnish instructives are treated as adverbs, e.g. [fi] _käsin_ "by hand,
manually".

#### Instructive examples

* [fi] _kissoin_ "with cats", _taloin_ "with houses"


### `Com`: Comitative or sociative case

Comitative is a case for "with" (as accompanied with, alongside).

#### Comitative examples

* [fi] _kissoine_ "with their cats", _taloine_ "with their houses"

### `Dis`: Distributive case

Distributive is a case for "each, one by one".

Finnish distributives are treated as derivations, such as [fi] _talottain_
"house by house".

#### Distributive examples


### `Tem`: Temporal case

Temporal is a case for "at" (for a given time).

Finnish temporal distributives are treated as derivations, such as [fi]
_perjantaisin_ "each Friday".


#### Temporal examples


### `Cau`: Causative or causal case

Causative is a case for "because of".

### `Add`: Additive case

Additive is an Estonian case...

### `Voc`: Vocative case

Vocative is a case for ...


#### Layered cases

Some Uralic languages allow stacking of case suffixes, which might be
implemented in UD as layered annotations or lexicalising the inflected form.

