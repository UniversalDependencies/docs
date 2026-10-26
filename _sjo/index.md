---
layout: base
title:  'Xibe UD'
udver: '2'
---

# UD for Xibe <span class="flagspan"><img class="flag" src="../../flags/svg/CN.svg" /></span>

## Tokenization and Word Segmentation

* A Xibe sentence is tokenized by space, each element is considered as a token.



## Morphology

### Tags

* The current Xibe treebank uses all 17 universal POS categories, including particles ([PART]()).
* There are five main (de)verbal forms, distinguished by the value of the [VerbForm]() feature;
  they all keep the [VERB]() (or [AUX]()) UPOS tag:
  * Finite verb `Fin`.
  * Participle `Part`.
  * Converb `Conv`.
  * Infinitive `Inf`.
  * Verbal noun `Vnoun`.



### Nominal Features

* The two main values of the [Number]() feature are `Sing` and `Plur`. The following parts of speech inflect for number:
  [NOUN](), [PRON](), [DET](), [PART]().
* [Case]() has 10 possible values: `Nom`, `Gen`, `Dat`, `Acc`, `Loc`, `Lat`, `Abl`, `Ins`, `Com`, `Cmp`.
  It occurs with the nominal words, i.e., [NOUN](), [PROPN](), [PRON](), [DET](), [NUM](), as well as nominalized forms of [VERB]().
  * The `Case` feature also occurs with adpositions ([ADP]()). Here it is a lexical feature.

### Degree and Polarity

* [Degree]() applies to adjectives ([ADJ]()) and has one of three possible values: `Pos`, `Cmp`, `Sup`.
* [Polarity]() has one value, `Neg` (while positive polarity is not explicitly annotated), and applies primarily to verbs ([VERB](), [AUX]()) and adverbs ([ADV]()).

### Verbal Features

* Verbs inflect for [Aspect](), either imperfective (`Imp`), perfective (`Perf`), or progressive (`Prog`).
* Finite verbs always have one of five values of [Mood](): `Ind`, `Imp`, `Cnd`, `Sub` or `Opt`.
* Verbs in the indicative mood always have one of three values of [Tense](): `Past`, `Pres` or `Fut`.
* There are four values of the [Voice]() feature: `Act`, `Pass`, `Rcp` and `Cau`.

### Pronouns, Determiners, Quantifiers

* [PronType]() is used with pronouns ([PRON]()), determiners ([DET]()) and adverbs ([ADV]()).
* [NumType]() is used with numerals ([NUM]()), adjectives ([ADJ]()), and pronouns ([PRON]()).
* The [Poss]() feature marks possessive personal pronouns.
* The [Reflex]() feature marks reflexive pronouns.
* [Person]() is a lexical feature of personal pronouns ([PRON]()) and has three values, `1`, `2` and `3`.
* [Clusivity]() is a lexical feature of first person plural pronouns and distinguishes inclusive (`In`) from exclusive (`Ex`) pronouns.
* [Polite]()ness has one value `Elev` for honorific pronouns.



## Syntax

* The basic word order of Xibe is Subject-Obejct-Verb (SOV). To be added.

## Dependency Relations

* [mark:adv](dep/mark-adv.md)
* [mark:rel](dep/mark-rel.md)
* [mark:plur](dep/mark-plur.md)


## Treebanks

There is 1 Xibe UD treebank:

  * [Xibe-XDT](index.html)
