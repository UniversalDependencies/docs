---
layout: base
title:  'Hungarian UD'
udver: '2'
---

# UD for Hungarian <span class="flagspan"><img class="flag" src="../../flags/svg/HU.svg" /></span>

## Tokenization and Word Segmentation

* In general, words are delimited by whitespace characters. Description of exceptions follows.
* According to typographical rules, many punctuation marks are attached to a neighboring word. These are normally tokenized as separate tokens (words);
  however, abbreviations are kept together with the period that marks them _(dr.)_ Hyphenated compounds are kept together and the same holds for
  hyphens connecting case suffixes to numbers: _1991-ben_.
* There are no words with spaces and no multiword tokens.
* For more details, see [tokenization](tokenization.html).

## Morphology

### Tags

This is an overview only. For more detailed discussion and examples, see the list of [Hungarian POS tags](pos/index.html)
and [Hungarian features](feat/index.html).

* All 17 universal POS categories are relevant in Hungarian, including particles ([PART]()).
  At present, the [SYM]() category is not attested in the data.
* Most verbs have two inflected tenses, past and present, and a future form using an auxiliary verb.
  The verb _lenni_ “to be” has three inflected tenses: past (_volt_ “was”), present (_van_ “is”) and future (_lesz_ “will be”).
  However, _lesz_ is kept as a separate lemma in the data, and `Tense=Pres` is used with its present/future forms, not `Tense=Fut`;
  it also has a past tense, _lett_ “became”.
* The auxiliary _fog_ expresses future intention: _Fogok menni._ “I am going to go.”
* The auxiliary _lehet_ “may, can” is used impersonally, as in _Oda lehet menni._ “One can go there.”
  Otherwise, potential can also be expressed using the suffix -hat/-het, followed by regular conjugation: _Mehetek_ “I can/may go”.
  <!-- https://en.wikipedia.org/wiki/Hungarian_verbs -->
* Other modal verbs than _lehet_ are not analyzed as auxiliaries.
* There are six main (de)verbal forms, distinguished by the UPOS tag and the value of the [VerbForm]() feature:
  * Infinitive `Inf`, tagged [VERB]() or [AUX]().
  * Finite verb `Fin`, tagged [VERB]() or [AUX]().
  * Participles are tagged [ADJ]() and use language-specific [VerbForm]() values instead of [Tense]():
    * Future participle, `VerbForm=PartFut`.
    * Present participle, `VerbForm=PartPres`.
    * Past participle, `VerbForm=PartPast`.
  * Converb `Conv`, tagged [ADV]().

### Nominal Features

* Neither gender nor animacy is grammatically relevant.
* The two main values of the [Number]() feature are `Sing` and `Plur`. The following parts of speech inflect for number:
  [NOUN](), [PROPN](), [PRON](), [ADJ](), [DET](), [VERB](), [AUX]() (finite, participles and converbs), marginally [NUM]().
* [Case]() has 22 possible values: `Nom`, `Gen`, `Dat`, `Acc`, `Ins`, `Abl`, `Abs`, `Ade`, `All`, `Cau`, `Del`, `Dis`, `Ela`, `Ess`, `Ill`, `Ine`, `Loc`, `Sbl`, `Sup`, `Tem`, `Ter`, `Tra`.
  It occurs with the nominal words, i.e., [NOUN](), [PROPN](), [PRON](), [ADJ](), [DET](), [NUM]().
* Layered features [Number[psor]](), [Person[psor]](), and [Number[psed]]() are used to cross-reference features of the possessor (or the possessed) on the noun.

### Degree and Polarity

* [Degree]() applies to adjectives ([ADJ]()) and adverbs ([ADV]()) and has one of three possible values: `Pos`, `Cmp`, `Sup`.
* The `Polarity` feature is currently not used.

### Verbal Features

* Finite verbs always have one of four values of [Mood](): `Ind`, `Imp`, `Cnd` or `Pot`.
* Verbs in the indicative mood always have one of two values of [Tense](): `Past` or `Pres`.
  The verb _lenni_ “to be” has three inflected tenses: past (_volt_ “was”), present (_van_ “is”) and future (_lesz_ “will be”).
  However, _lesz_ is kept as a separate lemma in the data, and `Tense=Pres` is used with its present/future forms, not `Tense=Fut`.
* [Aspect]() is normally not marked, except for the iterative (frequentative) forms, which are annotated `Aspect=Iter`.
* There are two values of the [Voice]() feature: `Act` and `Cau`.

### Pronouns, Determiners, Quantifiers

* [PronType]() is used with pronouns ([PRON]()), determiners ([DET]()) and adverbs ([ADV]()).
* [NumType]() is used with numerals ([NUM]()) and adjectives ([ADJ]()).
* The [Poss]() is used with the pronoun _saját_ “own”.
* The [Reflex]() feature marks reflexive pronouns _(magát, magukat, magára…)_
  In Hungarian it is always used together with `PronType=Prs`.
* [Person]() is a lexical feature of personal pronouns ([PRON]()) and has three values, `1`, `2` and `3`.
  * As a cross-reference to subject, person is also marked on finite verbs ([VERB](), [AUX]()).

## Syntax

This is an overview only. For more detailed discussion and examples, see the list of [Hungarian relations](dep/index.html),
as well as the overview of [syntax](syntax.html) and [specific constructions](specific-syntax.html).

### Core Arguments, Oblique Arguments and Adjuncts

* Nominal subject ([nsubj]()) is a noun phrase in the nominative case, without preposition.
  * A finite subordinate clause may serve as the subject and is labeled `csubj`.
* Direct nominal object ([obj]()) is a bare noun phrase in the accusative case.

### Relations Overview

* The following relation subtypes are used in Hungarian:
  * [advmod:locy]()
  * [advmod:mode]()
  * [advmod:que]()
  * [advmod:tfrom]()
  * [advmod:tlocy]()
  * [advmod:to]()
  * [advmod:tto]()
  * [amod:att]()
  * [amod:attlvc]()
  * [ccomp:obj]()
  * [ccomp:obl]()
  * [ccomp:pred]()
  * [compound:preverb]()
  * [flat:name]() for non-first words in personal names
  * [nmod:att]()
  * [nmod:attlvc]()
  * [nmod:obl]()
  * [nsubj:lvc]()
  * [obj:lvc]()
  * [obl:lvc]()
* The following main types are not used alone and must be subtyped:
  [amod](), [flat]()
* The following relation types are not used in Hungarian at all:
  [expl](), [clf]()

## Treebanks

There is 1 Hungarian UD treebank:

  * [Hungarian-Szeged](../treebanks/hu_szeged/index.html)
