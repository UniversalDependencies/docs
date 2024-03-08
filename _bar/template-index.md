---
layout: base
title:  'Bavarian UD'
udver: '2'
---

# UD for Bavarian <span class="flagspan"><img class="flag” src="../../flags/svg/DE-BY.svg” /></span>

We mostly follow the [German guidelines](https://universaldependencies.org/de/) but describe differences to those guidelines here.

## Tokenization and Word Segmentation

We mostly delimit based on whitespace and punctuation. 

### Multi-word tokens

We treat fused prepositions and determiners as multi-word tokens (following the German UD annotation guidelines). Since there is both phonetic and orthographic variation in the forms of the determiners, we do *not* normalize them, and instead simply split the tokens into substrings (even if this occasionally results in slightly awkward tokenizations, see the last example):

* *zum* “to the” -> *zu* (ADP) + *m* (DET)
* *aus'n* “from the” -> *aus* (ADP) + *'n* (DET)
* *im* “in the” -> *i* (ADP) + *m* (DET)

We similarly handle *zum (zun, zan, ...)* when used in infinitive constructions (*Ludwig van Beethoven hod de Gwohnheit ghobt, genau 60 Kafääbaunan zum oozöön [...]* “Ludwig van Beethoven had a habit of counting exactly 60 coffee beans”; sentence via the Wikipedia article [Kafää](https://bar.wikipedia.org/wiki/Kaf%C3%A4%C3%A4)):

* *zum* -> *zu* (PART) + *m* (DET)

### Tokens split with SpaceAfter=No

We split off shortened determiners and adpositions in noun phrases, but use the `SpaceAfter=No` MISC attribute:

* *z'Minga* “in Munich” -> *z'* (ADP) *Minga* (PROPN)
* *d'neie* “the new [one]” -> *d'* (DET) *neie* (ADJ)

In sentences where a verb or conjunction is immediately followed by one or more pronouns, we use `SpaceAfter=No` to split them:

* *gibts* “there is” -> *gibt* (VERB) *s* (PRON)
* *håmas* “we have it” -> *hå* (VERB) *ma* (PRON) *s* (PRON)

### Tokens NOT split apart

* We do not split off 2nd person morphemes attached to complementizers and instead treat such cases as inflection. That is, *wennsd kimmsd* “when.2SG come.2SG.PRES” contains two words and *wennsd du kimmsd* “when.2SG you.SG come.2SG.PRES” contains three.
* We do not split off the 1PL inflection ending *-ma*, i.e., both *mia genga* “we go” and *mia gemma* “we go” are treated the same and consist of two words each.


## Morphology

### Tags

Below is a copy of the German guidelines, adjusted for Bavarian:

* Bavarian uses all 17 universal POS categories, including particles ([PART]()).
* The following words are particles in Bavarian: _ned (net, niat)_ “not”, and the infinitive marker _z (zu, za)_ “to”.
* The pronoun ([PRON]()) vs. determiner ([DET]()) distinction is based on word lists.
  In general, words that inflect for gender, to be able to agree with a modified noun, are tagged [DET](), even if they
  act independently in a given sentence; that includes possessives. There is more discussion on the German page on [DET](https://universaldependencies.org/de/pos/DET.html).
* Bavarian auxiliary verbs ([AUX]()) are:
  * _sei_ for perfect tenses of some verbs (_i bin kemma_ “I have come”) and as copula (_ea is oid_ “he is old”)
  * _hom_ for perfect tenses of the remaining verbs (_i hob gessn_ “I have eaten”)
  * _wean_ for future tense (_i wead reisn_ “I will travel”) and for the passive (_des is gessn woan_ “it was eaten”)
  * **BAR.** _doa_ for periphrastic structures in the indicative (_i dua arwadn_ “I'm working”) or subjunctive (_i daad arwadn_ “I would work”)
  * modal verbs _deaffa_ “may”, _kenna_ “can”, _meeng_ “want”, _miassn_ “must”, _soin_ “shall”, _woin_ “want”
  * The verbs _sei, hom, wean, doa_ can also occur as normal verbs ([VERB]()), meaning “be, have, become, do”.
* There are four main (de)verbal forms, distinguished by the UPOS tag and the value of the [VerbForm]() feature:
  * Infinitive `Inf`, tagged [VERB]() or [AUX]().
  * Finite verb `Fin`, tagged [VERB]() or [AUX]().
  * Participle `Part`, tagged [VERB]() or [AUX]().
  * Verbal noun `Vnoun`, tagged [NOUN](), looks like a capitalized infinitive but has an article and may inflect.
* **BAR.** We tag the relative marker *wo (wos, wej, ...)* as SCONJ.


### Features

There are no feature-related guidelines for Bavarian at the moment.

## Syntax

Below is a copy of the German guidelines, adjusted for Bavarian:

### Core Arguments, Oblique Arguments and Adjuncts

* Nominal subject ([nsubj]()) is a noun phrase in the nominative case, without preposition.
  * A finite subordinate clause may serve as the subject and is labeled `csubj`.
  * If an infinitive verb is to serve as the subject, it becomes a verbal noun
    (it gets the neuter singular nominative article and it is capitalized in writing),
    thus it is labeled `nsubj`.
* Objects defined in the Bavarian grammar may be bare noun phrases in accusative/dative,
  or prepositional phrases in accusative/dative.
  For the purpose of UD the objects are divided to core objects, labeled [obj](),
  and oblique objects, labeled [obl:arg]().
  * Bare accusative objects are considered core.
  * Bare dative objects, and all prepositional objects are considered oblique.
    * This means that verbs of giving are not ditransitive predicates in Bavarian UD, as they have one oblique dative argument and only one core object.
    * In rare cases a verb may license two accusative objects and then the relation [iobj]() will be used for one of them.
  * Accusative objects of some verbs alternate with finite clausal complements, which are labeled [ccomp]().
  * If a verb subcategorizes for the infinitive (e.g. phasal verbs or verbs of control), the infinitival complement is labeled [xcomp]().
* Adjuncts are usually prepositional phrases, but they can be bare noun phrases as well. They are labeled [obl]():
  * Temporal modifiers realized as accusative noun phrases: _i arwad jedn Dog_ “I work every day.”
  * All prepositional phrases that are not prepositional objects (i.e., their role and form is not defined lexically by the predicate)
    are adjuncts.
* Extra attention has to be paid to the reflexive pronoun _si_. It can function as:
  * Core object ([obj]()): _ea hod si im Spiegl gsehn_ lit. “he has sighted himself in the mirror.”
  * Reciprocal core objects (`obj`): _sie hom si kissd_ “they were kissing each other.”
  * Inherently reflexive verb, cannot exist without the reflexive clitic, and the clitic cannot be substituted by an irreflexive pronoun
    or a noun phrase.
    In accord with the UD guidelines, we label the relation
    between the verb and the clitic as [expl:pv](), not `compound`. Example: _mia miassn uns schicka_ “we must hurry.”
* In passive clauses, the subject is labeled with [nsubj:pass]() or [csubj:pass](), respectively.
  * The auxiliary verb in periphrastic passive is labeled [aux:pass]().
  * If the demoted agent is present, it has the form of a prepositional phrase and its relation is labeled [obl:agent]().

### Non-verbal Clauses

* The copula verb _sei_ (be) is used in equational, attributional, locative, possessive and benefactory nonverbal clauses.
  * Existential clauses use a different verb, _geem_ (give) with an accusative object: _es gibd Essn_ “there is food.”

### Relations Overview

* The following relation subtypes are used in Bavarian:
  * [nsubj:pass]() for nominal subjects of passive verbs
  * [csubj:pass]() for clausal subjects of passive verbs
  * [obl:agent]() for agents of passive verbs
  * [obl:arg]() for dative objects
  * [expl:pv]() for reflexive clitics of inherently reflexive verbs
  * [aux:pass]() for passive auxiliaries
  * [compound:prt]() for separable verb prefixes
  * [det:poss]() for possessive determiners
  * [nmod:poss]() for possessive modifier phrases
  * [acl:relcl]() for adnominal relative clauses
  * [advcl:relcl]() for relative clauses whose antecedent is a clause
* The following relation type is not used in Bavarian at all:
  [clf]()

### Specific annotation decisions for Bavarian

#### Postponed adjectives

When an adjective is postponed for emphasis, we consider it an apposition (e.g., _da freche Bua_ “the cheeky boy” rearranged to _da Bua, da freche_):

~~~ sdparse
da Bua , da freche \n the boy , the cheeky
appos(Bua, freche)
det(Bua, da-1)
det(freche, da-4)
punct(freche, ,-3)
appos(boy, cheeky)
det(boy, the-7)
det(cheeky, the-10)
punct(cheeky, ,-9)
~~~

#### Infinitives with *z(u)*

Many infinitive constructions either use the cliticized infinitive marker *z* followed by a verbal infinitive or the marker *zu (za)* combined with a clitized dative determiner *m (n)* and a nominalized infinitive. We annotate such cases as follows, re-using the example sentence from above: _Ludwig van Beethoven hod de Gwohnheit ghobt, genau 60 Kafääbaunan zum oozöön, um si draus a Schalal Mokka zmochn._ “Ludwig van Beethoven had a habit of counting exactly 60 coffee beans in order to brew a cup of coffee from them”

~~~ sdparse
[...] genau 60 Kafääbaunan zu/PART m/DET oozöön/NOUN , um si draus a Schalal Mokka z/PART mochn/VERB
mark(oozöön, zu)
det(oozöön, m)
mark(mochn, z)
~~~

#### Relative markers

We tag relative pronouns *(dea, de, des)* as PRON and annotate them as *nsubj/obj/...*
For the relative marker *wo (wos, wej)*, we use SCONJ and *mark*:

~~~ sdparse
da Disch , (dea)/PRON wo/SCONJ hier steht
nsubj(steht, (dea))
mark(steht, wo)
acl:relcl(Disch, steht)
~~~


## Treebanks

There is [one](../treebanks/bar-comparison.html) Bavarian UD treebank:

  * [UD_Bavarian-MaiBaam](../treebanks/bar_maibaam)

