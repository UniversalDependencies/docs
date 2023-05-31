---
layout: base
title:  'Xibe UD'
udver: '2'
---

# UD for Xibe <span class="flagspan"><img class="flag" src="../../flags/svg/CN.svg" /></span>

## Tokenization and Word Segmentation

* A Xibe sentence is tokenized by space, each element is considered as a token.


<!--**Instruction**: Describe the general rules for delimiting words (for example, based on whitespace and punctuation) and exceptions to these rules. Specify whether words with spaces and/or multiword tokens occur. Include links to further language-specific documentation if available.-->


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


<!--**Instruction**: Specify any unused tags. Explain what words are tagged as PART. Describe how the AUX-VERB and DET-PRON distinctions are drawn, and specify whether there are (de)verbal forms tagged as ADJ, ADV or NOUN. Include links to language-specific tag definitions if any.-->



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


<!--**Instruction**: Describe inherent and inflectional features for major word classes (at least NOUN and VERB). Describe other noteworthy features. Include links to language-specific feature definitions if any.-->


## Syntax

* The basic word order of Xibe is Subject-Obejct-Verb (SOV). To be added.

<!--**Instruction**: Give criteria for identifying core arguments (subjects and objects), and describe the range of copula constructions in nonverbal clauses. List all subtype relations used. Include links to language-specific relations definitions if any.-->

## Dependency Relations

* [mark:adv](dep/mark-adv.md)
* [mark:rel](dep/mark-rel.md)
* [mark:plur](dep/mark-plur.md)


## Treebanks

There is [1](../treebanks/sjo-comparison.html) Xibe UD treebank:

  * [Xibe-XDT](index.html)

<!--**Instruction**: Treebank-specific pages are generated automatically from the README file in the treebank repository and
from the data in the latest release. Link to the respective `*-index.html` page in the `treebanks` folder, using the language code
and the treebank code in the file name.-->
