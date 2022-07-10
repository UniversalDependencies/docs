---
layout: base
title:  'Basque UD'
udver: '2'
---

# UD for Basque <span class="flagspan"><img class="flag" src="../../flags/svg/ES-PV.svg" /></span>

## Tokenization and Word Segmentation

* In general, words are delimited by whitespace characters. Description of exceptions follows.
* According to typographical rules, many punctuation marks are attached to a neighboring word. We normally tokenize them as separate tokens (words);
  exceptions include hyphenated compounds such as _bat-batean_ “suddenly”, which are kept as a single token.
* There are no multiword tokens and no words with spaces.
  For more details, see [tokenization](tokenization.html).

## Morphology

### Tags

This is an overview only. For more detailed discussion and examples, see the list of [Basque POS tags](pos/index.html)
and [Basque features](feat/index.html).

* All 17 universal POS categories, including particles ([PART]()), are relevant for Basque.
  However, the current data does not distinguish coordinating and subordinating conjunctions.
  All conjunctions are tagged [CCONJ]() and the [SCONJ]() tag is not used at present.
* Only a relatively small subset of Basque verbs have the full morphological paradigm.
  Some of them can be used as auxiliaries ([AUX]()) to provide finite features to the other verbs.
  A typical sentence thus contains a lexical verb in a non-finite form (participle),
  accompanied by one or more auxiliaries. With non-verbal predicates, one of the auxiliaries
  acts as a copula.
  * _izan_ (“to be”) (example forms _da, zen, izan, dira, ziren, izango, dela, den_)
  * _egon_ (“to be, to stay”) (example forms _dago, zegoen, daude, egon, dagoela, zeuden, egongo, dagoen_)
  * _ukan_ (example forms _du, dute, dugu, zuen, dut, ditu, duen, duela_)
  * _*edun_ (the lemma is reconstructed but not attested; example forms _zuen, du, dute, zuten, ditu, zituen, zion, dituzte_)
  * _*edin_ (the lemma is reconstructed but not attested; example forms _daiteke, dadin, daitezke, daitezkeen, daitekeela, liteke, baliteke, litekeena_)
  * _*ezan_ (the lemma is reconstructed but not attested; example forms _dezake, dezagun, dezan, itzazu, ezazu, ditzakete, dezakete, dezakeen_)
  * _ari_ (uninflected)
* There are three main (de)verbal forms, distinguished by the value of the [VerbForm]() feature:
  * Participle `Part`, tagged [VERB]() or [AUX](), is also the citation form (lemma) of the verb.
  * Infinitive `Inf`, tagged [VERB]() or [AUX]().
  * Finite verb `Fin`, tagged [VERB]() or [AUX]().

### Nominal Features

* Nouns ([NOUN]()) have an inherent [Animacy]() feature with one of two values: `Anim` and `Inan`.
  * Some finite verb forms ([VERB](), [AUX]()) inflect for `Animacy` because they must agree with nouns.
  * Occasionally the animates are further split to the masculine and feminine [Gender](), but in
    most situations, gender is not grammatically relevant.
* The two main values of the [Number]() feature are `Sing` and `Plur`. The following parts of speech inflect for number:
  [NOUN](), [PROPN](), [PRON](), [ADJ](), [DET](), [VERB](), [AUX]() (finite, participles and converbs), marginally [NUM]().
* Definiteness ([Definite]()) is marked morphologically on nouns and other nominal words.
  Only the definite forms distinguish [Number]().
* [Case]() has 15 possible values: `Abs`, `Erg`, `Gen`, `Dat`, `Ins`, `Par`, `Loc`, `Lat`, `Abl`, `Ine`, `All`, `Ben`, `Cau`, `Com`, `Ess`.
  It occurs with the nominal words, i.e., [NOUN](), [PROPN](), [PRON](), [ADJ](), [DET](), [NUM]().
  It normally marked at the end of a noun phrase, that is, if a noun is post-modified by an adjective,
  the case suffix and the feature will appear on the adjective but not on the noun.

### Degree and Polarity

* [Degree]() applies to adjectives ([ADJ]()) and has one of three possible values: `Cmp`, `Sup`, `Abs`.
* [Polarity]() has two values, `Pos` and `Neg`. The most frequent is `Polarity=Neg` with the negative
  particle _ez_ (“not”). However, the feature also occurs with some verbs and auxiliaries.

### Verbal Features

* [Aspect]() has four possible values: imperfective (`Imp`), perfective (`Perf`), progressive (`Prog`), prospective (`Prosp`).
  Perfective and prospective are two different forms of participles (_izan_ vs. _izango_),
  while the progressive denotes a subset of the finite forms.
  * There is no tense feature. Basque clauses express aspect rather than tense; although there is a correlation,
    perfective forms are likely to be used in past contexts, prospective in future contexts.
* Finite verbs always have one of five values of [Mood](): `Ind`, `Imp`, `Cnd`, `Sub`, `Pot`.
* There are morphologically marked causative verbs, which is annotated as the [Voice]() feature (`Voice=Cau`).
  The default form is left unannotated, i.e., `Voice=Act` is not used. There is no passive form.
* Layered features are used to cross-reference features of core arguments of the verb:
  * [Person[abs]](), [Number[abs]]() and [Polite[abs]]() express the person, number and politeness of the absolutive argument
    (subject of intransitive verbs, object of transitive verbs).
  * [Person[erg]](), [Number[erg]](), [Gender[erg]]() and [Polite[erg]]() express the person, number, gender and politeness of the ergative argument
    (subject of transitive and some intransitive verbs).
  * [Person[dat]](), [Number[dat]](), [Gender[dat]]() and [Polite[dat]]() express the person, number, gender and politeness of the dative argument
    (subject of some verbs and object of some other verbs).

### Pronouns, Determiners, Quantifiers

* [PronType]() is used with pronouns ([PRON]()) and adverbs ([ADV]()).
  Currently it only distinguishes personal pronouns and interrogatives.
* [NumType]() is used with numerals ([NUM](), `NumType=Card`) and adjectives ([ADJ](), `NumType=Ord`).
* [Person]() is a lexical feature of personal pronouns ([PRON]()) and has three values, `1`, `2` and `3`.
  * As a cross-reference to core arguments, person is also marked on finite verbs ([VERB](), [AUX]()).
    However, layered features are used there to distinguish which argument is being referenced.

## Syntax

This is an overview only. For more detailed discussion and examples, see the list of [Basque relations](dep/index.html).

### Core Arguments, Oblique Arguments and Adjuncts

* Nominal subject ([nsubj]()) is a noun phrase in the absolutive, ergative or dative case, without preposition.
  * Intransitive predicates typically have absolutive subjects, but some of them have ergative or dative subjects.
  * For transitive predicates that take ergative and absolutive/dative, the ergative argument is the subject.
  * For transitive predicates that take dative and absolutive, the dative argument is the subject.
  * A finite subordinate clause may serve as the subject and is labeled `csubj`.
* For transitive predicates, the other argument (the one that is not subject according to the above rules)
  is the direct object ([obj]()).
* Ditransitive predicates take three arguments (ergative, dative, and absolutive).
  Here the dative argument is labeled as indirect object ([iobj]()).

### Relations Overview

* The only subtype currently used in the Basque treebank (since UD 2.11) is [nsubj:outer]()
  for outer subjects in non-verbal clauses where the non-verbal predicate is a nested clause.
* The following relation types are not used in Basque at all:
  [clf](), [dislocated](), [expl]()

## Treebanks

There is 1 Basque UD treebank:

  * [Basque-BDT](../treebanks/eu_bdt/index.html)
