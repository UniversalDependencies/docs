---
layout: base
title:  'Swiss German UD'
udver: '2'
---

# UD for Swiss German <span class="flagspan"><img class="flag" src="../../flags/svg/CH.svg" /></span>

## Introduction

This is a copy of the current German documentation [UD for German](https://universaldependencies.org/de/index.html), which we generally follow for Swiss German. This introduction explains the most important differences which influence the annotation. 

Please check the readme/GitHub repo of the GSW treebank for further/current information.

### Differences to German UD Guidelines

As for German, words are generally delimited by white spaces. However, there is a lot more freedom in merging any words together, which can't usually be split in an easy way. I.e. we use the German tokenization and introduce a separate tag for merged words (see meta tag `TAG+` described further down).


The POS annotations are generally based on the German guidelines, namely the [Stuttgart-Tübingen-TagSet (STTS)](http://www.sfs.uni-tuebingen.de/resources/stts-1999.pdf) and some changes according to the [TIGER annotation scheme](https://files.ifi.uzh.ch/cl/siclemat/lehre/papers/tiger-annot.pdf). Furthermore, dealing with Swiss German, there is the need for an additional POS tag `PTKINF`, not present in the STTS tagset, as well as for the "meta tag" `TAG+`. 

* `PTKINF` is an infinitive particle which does not exist in Standard German but is frequently used in dialects. It comes in the form of _go_, _cho_, _goge_, _lo_ to name a few, as in _Si gönd go poschte_. (_They go shopping._) In the Standard German translation, _Sie gehen einkaufen._, we can see that there is no equivalent. Concerning dependencies it is treated as a marker introducing a finite clause subordinate to another clause (`mark`) because they usually appear in _um ... zu_ (_in order to_) constructions in German.
 
* `TAG+` is used to handle merged words; we introduced the “+“-sign which can be added to any PoS tag. In the STTS there is one tag like this: the `APPRART`, used for combinations of articles and prepositions like _im_ consisting of _in + dem_ (_in the_). However, in Swiss German these kind of merges are performed with any kind of words and just merging the tags would result in a big tagset. Therefore we decided to use the "head" of the word or the first word as tag and simply add a plus to show that this word incorporates another one [Hollenstein and Aepli, 2014](). Like this, they can easily be found and, if needed, manually expanded. Frequent examples of such words include _hemmer_ (_haben + wir_), _häts_ (_hat + es_), and _sinz_ (_sind + sie_), for _we have_, _it has_ and _they are_.


The Universal Dependency POS (UPOS) tags are converted according to the mapping provided by the Universal Dependency. Additionaly:

* `PTKINF` are converted to `PART`
* the plus sign in `TAG+` are disgarded


## UD for German

## Tokenization and Word Segmentation

* In general, words are delimited by whitespace characters. Description of exceptions follows.
* According to typographical rules, many punctuation marks are attached to a neighboring word.
  We usually tokenize them as separate tokens (words)
  with the exception of abbreviations such as _usw._ “etc.” which are kept as one token with the period.
* German compounds are written as one word and we do not split them.
* There is one class of multi-word tokens: the contractions of prepositions and definite articles.
  Example: _zum = zu + dem_ “to the”.

## Morphology

### Tags

* German uses all 17 universal POS categories, including particles ([PART]()).
* The following words are particles in German: _nicht_ “not”, and the infinitive marker _zu_ “to”.
* The pronoun ([PRON]()) vs. determiner ([DET]()) distinction is based on word lists because the traditional grammar does not define determiners.
  In general, words that inflect for gender, to be able to agree with a modified noun, are tagged [DET](), even if they
  act independently in a given sentence; that includes possessives.
* German auxiliary verbs ([AUX]()) are:
  * _sein_ for perfect tenses of some verbs (_ich bin gekommen_ “I have come”) and as copula (_er ist alt_ “he is old”)
  * _haben_ for perfect tenses of the remaining verbs (_ich habe gegessen_ “I have eaten”)
  * _werden_ for future tense (_ich werde reisen_ “I will travel”) and for the passive (_es wurde gegessen_ “it was eaten”)
  * modal verbs _dürfen_ “may”, _können_ “can”, _mögen_ “want”, _müssen_ “must”, _sollen_ “shall”, _wollen_ “want”
  * The verbs _sein, haben_ and _werden_ can also occur as normal verbs ([VERB]()), meaning “be, have, become”.
* There are four main (de)verbal forms, distinguished by the UPOS tag and the value of the [VerbForm]() feature:
  * Infinitive `Inf`, tagged [VERB]() or [AUX]().
  * Finite verb `Fin`, tagged [VERB]() or [AUX]().
  * Participle `Part`, tagged [VERB]() or [AUX]().
  * Verbal noun `Vnoun`, tagged [NOUN](), looks like a capitalized infinitive but has an article and may inflect.

### Nominal Features

* Nominal words ([NOUN](), [PROPN]() and [PRON]()) have an inherent [Gender]() feature with one of three values: `Masc`, `Fem` or `Neut`.
  * The following parts of speech inflect for `Gender` because they must agree with nouns: [ADJ](), [DET](),
    [VERB](), [AUX](). For verbs (including auxiliaries), only participles can inflect for gender. Finite verbs don't.
* The two main values of the [Number]() feature are `Sing` and `Plur`. The following parts of speech inflect for number:
  [NOUN](), [PROPN](), [PRON](), [ADJ](), [DET](), [VERB](), [AUX]() (finite and participles).
* [Case]() has 4 possible values: `Nom`, `Gen`, `Dat`, `Acc`.
  It occurs with the nominal words, i.e., [NOUN](), [PROPN](), [PRON](), [ADJ](), [DET]().
  However, case forms of nouns are extremely ambiguous and most of the time the case is distinguished only by the form of the article.
* [Definite]() has 2 values: `Ind`, `Def`. It is used to distinguish the indefinite and definite articles ([DET]()).

### Degree and Polarity

* [Degree]() applies to adjectives ([ADJ]()) and adverbs ([ADV]()) and has one of three possible values: `Pos`, `Cmp`, `Sup`.
* [Polarity]() is used to mark the negative particle _nicht,_ i.e., only the `Neg` value is used.

### Verbal Features

* Finite verbs always have one of three values of [Mood](): `Ind`, `Imp` or `Sub` (called _Konjunktiv_ in German).
* Indicative and subjunctive verbs always have one of two values of [Tense](): `Past`, `Pres`.
  * In the subjunctive mood, the tense feature is used to distinguish Konjunktiv I (`Pres`) and Konjunktiv II (`Past`).
  * Imperative forms do not have the `Tense` feature.
  * The `Tense` feature is also used to distinguish present and past participles (_kommend_ “coming” vs. _gekommen_ “come”).
* The features [Aspect]() and [Voice]() are not used in German because
  both the perfect aspect and the passive voice are expressed periphrastically.

### Pronouns, Determiners, Quantifiers

* [PronType]() is used with pronouns ([PRON]()), determiners ([DET]()) and adverbs ([ADV]()).
* [NumType]() is used with numerals ([NUM]()), adjectives ([ADJ]()) and determiners ([DET]()).
* The [Poss]() feature marks possessive personal determiners (e.g. _mein_ “my”),
  possessive interrogative or relative determiners (e.g. _wessen_ “whose”).
* The [Reflex]() feature is always used together with `PronType=Prs` and it marks reflexive pronouns _(mich/mir, dich/dir, sich, uns, euch)._
  Note that their forms in the first and second person are ambiguous with irreflexive accusative forms, and the `Reflex` feature
  must be decided by context.
* [Person]() is a lexical feature of personal pronouns ([PRON]()) and has three values, `1`, `2` and `3`.
  With personal possessive determiners ([DET]()), the feature actually encodes the person of the possessor.
  Person is not marked on other types of pronouns and on nouns, although they can be almost always interpreted as the 3rd person.
  * As a cross-reference to subject, person is also marked on finite verbs ([VERB](), [AUX]()).
* The [Polite]() feature distinguishes informal second-person pronouns (_du, ihr,_ `Polite=Infm`)
  from the formal _Sie_ (`Polite=Form`).
  The formal pronoun is phonologically equivalent in all its case forms to the third-person plural _sie_
  but it is distinguished in orthography by the capital letter _S._
  We tag it as second person (because that is its meaning) and we do not tag its number (because it is used both
  for singular and plural addressees) despite the fact that it combines with third-person plural verbs.
  The parser must learn that `Person=2|Polite=Form` subject attaches to `Number=Plur|Person=3` verbs,
  while `Number=Sing|Person=2|Polite=Infm` subject attaches to `Number=Sing|Person=2` verbs.
* There are two [layered features](../../u/overview/feat-layers.html), [Gender[psor]]() and [Number[psor]]().
  They appear with certain possessive determiners and encode the lexical gender/number of the possessor.
  The extra layer is needed to distinguish these lexical features from the inflectional gender and number
  that mark agreement with the modified (possessed) noun.

### Other Features

* Besides the layered features listed above, there are several other language-specific features:
  * [Typo]()
* The following universal features are not used in German: [Animacy](), [Evident]().

## Syntax

### Core Arguments, Oblique Arguments and Adjuncts

* Nominal subject ([nsubj]()) is a noun phrase in the nominative case, without preposition.
  * A finite subordinate clause may serve as the subject and is labeled `csubj`.
  * If an infinitive verb is to serve as the subject, it becomes a verbal noun
    (it gets the neuter singular nominative article and it is capitalized in writing),
    thus it is labeled `nsubj`.
* Objects defined in the German grammar may be bare noun phrases in accusative, dative or genitive,
  or prepositional phrases in accusative, dative or genitive.
  For the purpose of UD the objects are divided to core objects, labeled [obj]() or [iobj](),
  and oblique objects, labeled [obl:arg]().
  * Bare accusative, dative and genitive objects are considered core.
  * All prepositional objects are considered oblique.
  * Accusative objects of some verbs alternate with finite clausal complements, which are labeled [ccomp]().
  * If a verb subcategorizes for the infinitive (e.g. phasal verbs or verbs of control), the infinitival complement is labeled [xcomp]().
  * If a verb subcategorizes for two core objects, one of them accusative (or `ccomp`) and the other non-accusative,
    then the non-accusative object is labeled [iobj]().
    Core nominal objects in other situations are labeled just [obj]().
* Adjuncts (or, following the German grammar, adverbial modifiers realized as noun phrases) are usually
  prepositional phrases, but they can be bare noun phrases as well. They are labeled [obl]():
  * Temporal modifiers realized as accusative noun phrases: _ich arbeite jeden Tag_ “I work every day.”
  * All prepositional phrases that are not prepositional objects (i.e., their role and form is not defined lexically by the predicate)
    are adjuncts.
* Extra attention has to be paid to the reflexive pronoun _sich_. It can function as:
  * Core object ([obj]() or [iobj]()): _er sah sich im Spiegel_ “he sighted himself in the mirror.”
  * Reciprocal core objects (`obj` or `iobj`): _sie küssten sich_ “they were kissing each other.”
  * Inherently reflexive verb, cannot exist without the reflexive clitic, and the clitic cannot be substituted by an irreflexive pronoun
    or a noun phrase.
    In accord with the current UD guidelines, we label the relation
    between the verb and the clitic as [expl:pv](), not `compound`. Example: _wir müssen uns beeilen_ “we must hurry.”
* In passive clauses, the subject is labeled with [nsubj:pass]() or [csubj:pass](), respectively.
  * The auxiliary verb in periphrastic passive is labeled [aux:pass]().
  * If the demoted agent is present, it has the form of a bare instrumental phrase and its relation is labeled [obl:agent]().

### Non-verbal Clauses

* The copula verb _sein_ (be) is used in equational, attributional, locative, possessive and benefactory nonverbal clauses.
  * Existential clauses use a different verb, _geben_ (give) with an accusative object: _es gibt Essen_ “there is food.”

### Relations Overview

* The following relation subtypes are used in German:
  * [nsubj:pass]() for nominal subjects of passive verbs
  * [csubj:pass]() for clausal subjects of passive verbs
  * [obl:agent]() for agents of passive verbs
  * [obl:arg]() for prepositional objects
  * [expl:pv]() for reflexive clitics of inherently reflexive verbs
  * [aux:pass]() for passive auxiliaries
  * [compound:prt]() for separable verb prefixes
  * [det:poss]() for possessive determiners
  * [nmod:poss]() for possessive modifier phrases
* The following relation types are not used in German at all:
  [clf](), [dislocated]()


## Treebanks (Swiss German)

There is [one](../treebanks/gsw-comparison.html) Swiss German UD treebank:

  * [Swiss German-UZH](../treebanks/gsw_uzh/index.html)
