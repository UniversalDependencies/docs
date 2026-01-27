---
layout: base
title:  'Marathi UD'
udver: '2'
---
# UD for LANGUAGE <span class="flagspan"><img class="flag" src="../../flags/svg/AQ.svg" /></span>

## Tokenization and Word Segmentation

* In general, words are delimited by whitespace characters. Description of exceptions follows.
* According to typographical rules, some punctuation marks (e.g., comma) are attached to a neighboring word, while others (e.g., the sentence-terminating danda) are not. We tokenize punctuation as separate tokens (words).


---

## Morphology

### Tags

* Marathi uses all 17 universal POS categories, including particles ([PART]()).
* Marathi has the following auxiliary verbs ([AUX]()):
  * असणे _asaṇe_ (“to be”) is used as copula and in periphrastic tenses. The forms of नाही are treated as negative forms of असणे (they share the lemma).
  * नको _nako_ (“don't”) is used to create negative imperative (prohibitive).
  * येणे _yeṇe_ (“to come”) for the passive (with a non-finite form of the main verb).
  * जाणे _jāṇe_ (“to go”) for the passive (with a non-finite form of the main verb).
  * Modal auxiliaries:
    * शकणे _śakaṇe_ (“be able, can”)
    * पाहिजे _pāhije_ (“needed, should, ought to”)
 
* There are five main (de)verbal forms, distinguished by the UPOS tag and the value of the [VerbForm]() feature:
  * Infinitive `Inf`, tagged [VERB]() or [AUX](). Two distinct forms are both annotated as infinitive and further distinguished by the language-specific feature `InfForm`:
    * `Dict` -णॆ, -आत _-ṇe, -āta_ (the citation/dictionary form is _-ṇe_)
    * `Incp` -ऊ _-ū_
  * Finite verb `Fin`, tagged [VERB]() or [AUX]().
  * Participle `Part`, tagged [VERB]() or [AUX]().




---

### Nominal Features

* Nominal words ([NOUN](), [PROPN]() and [PRON]()) have an inherent [Gender]() feature with one of three values: `Masc`, `Fem` or `Neut`.
  * The following parts of speech inflect for `Gender` and `Animacy` because they must agree with nouns: [ADJ](), [DET](),
    [VERB](), [AUX]().
* The two main values of the [Number]() feature are `Sing` and `Plur`. The following parts of speech inflect for number:
  [NOUN](), [PROPN](), [PRON](), [ADJ](), [DET](), [VERB](), [AUX](), marginally [ADP]().
* [Case]() has 10 possible values: `Nom`, `Acc`, `Ins`, `Dat`, `Abl`, `Loc`, `Voc`, `Com`, `Erg`, `Abs`.
  The first seven values (nominative to vocative) correspond to cases traditionally distinguished and ordered this way in the grammar of Sanskrit and cognate languages.

### Verbal Features

* Verbs in the indicative mood always have one of three values of [Tense](): `Past`, `Pres` or `Fut`.
* [Aspect]() has four possible values: `Hab`, `Imp`, `Perf`, `Prosp`.
* [Polarity]() has two values, `Pos` and `Neg`, and applies only to the auxiliaries ([AUX]()) असणे _asaṇe_ (“to be”) (both positive and negative forms)
  and नको _nako_ (“don't”) (only negative forms).

### Pronouns, Determiners, Quantifiers

* [NumType]() is used with numerals ([NUM]()) and adjectives ([ADJ]()).
* [Person]() is a lexical feature of personal pronouns ([PRON]()) and has three values, `1`, `2` and `3`.
  Note however, that the third person pronouns overlap with demonstratives.
  * As a cross-reference to subject, person is also marked on finite verbs ([VERB](), [AUX]()).


---

## Treebanks

There are [3](../treebanks/mr-comparison.html) Marathi UD treebanks:

  * [Marathi-CMUPAN](../treebanks/mr_cmupan/index.html)
  * [Marathi-DISC](../treebanks/mr_disc/index.html)
  * [Marathi-UFAL](../treebanks/mr_ufal/index.html)
