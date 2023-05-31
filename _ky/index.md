---
layout: base
title:  'Kyrgyz UD'
udver: '2'
---

# UD for Kyrgyz <span class="flagspan"><img class="flag" src="../../flags/svg/KG.svg" /></span>

## Tokenization and Word Segmentation

* In general, words are delimited by whitespace characters. Description of exceptions follows.
* According to typographical rules, many punctuation marks are attached to a neighboring word. These are normally tokenized as separate tokens (words), with the following exceptions:
  * The period that marks an abbreviation is part of the abbreviation token: _млн._ “million”
  * The hyphen that attaches a morphological suffix to a number is not a token separator: _100-ге_
* There are a few instances of multi-word tokens that are segmented to individual syntactic words. _550'дөн_

## Morphology

*Kyrgyz has a rich inflectional and derivational morphology.
*Nouns in Kyrgyz take a number of case endings that change based on vowel harmony.
*Question suffixes are written adjacent to the word in Kyrgyz language. _-бы_


### Tags

*14 POS tags were used in the Kyrgyz treebank. 

* PRON : 179 tokens. _Мен, сен, ал, биз, сиз, алар, etc._
* PUNCT: 1060 tokens. _ ., ?, , etc, _
* VERB: 1512 tokens. _бар, тур, бол, кал, көр, бил, бер, etc._
* NOUN: 2698 tokens. _үй балык, чал, базар, күн, сардина, etc._
* AUX : 55 tokens. _еле, ала, экен, etc. _
* ADP: 9 tokens. _ ара, жан, арка, etc. _
* CCONJ:	205 tokens. _жана, менен, etc._
* SCONJ: 2 tokens. _Эгер, Эгерде, etc._
* ADV: 308 tokens. _арты, боюнча, дагы , etc. 
* PROPN: 	670 tokens. _Ысык-Көл, Бишкек, Кыргызстан, etc._
* DET : 22 tokens. _Бул, эми, деле, etc._
* ADJ: 310 tokens. көп, кичине, тирүү, etc._
* NUM: 420 tokens. биринчи, төрт, etc._
* SYM: 1 tokens. _$, etc._


### Nominal Features

* There is no grammatical gender in Kyrgyz.
* The two values of the [Number]() feature are 'Sing' and 'Plur'. For [NOUN](), [PROPN]() and [ADJ](), only the 'Plur' value is used
  if the plural suffix is present; the singular is unmarked and unannotated. Pronouns ([PRON]()) have both values and they are treated
  as lexical, that is, the plural pronoun has its own lemma, distinct from the corresponding singular pronoun.


* [Case]() has 7 possible values: 'Nom', 'Gen', 'Dat', 'Acc', 'Loc', 'Abl', 'Ins'.
  It occurs with the nominal words, i.e., [NOUN](), [PROPN](), [PRON](), [ADJ](), [NUM](), as well as gerunds and participles ([VERB](), [AUX]()).

### Degree and Polarity

* [Degree]() applies to adjectives ([ADJ]()) and adverbs ([ADV]()) and has only one value: 'Cmp'. The basic (positive) form is unmarked and unannotated.
* [Polarity]() applies to verbs ([VERB](), [AUX]()) and has only one value: 'Neg'. The basic (positive) form is unmarked and unannotated.

### Verbal Features

* Finite verbs are normally annotated as the habitual [Aspect]() ('Perf'). Other values ('Imp', 'Prog') can be observed with infinitives and converbs.
* Finite verbs always have one of five values of [Mood](): 'Ind', 'Imp', 'Opt', 'Pot' or 'Des'. The conditional mood ('Cnd') is only used with conditional
  converbs.
* Verbs in the indicative mood always have one of three values of [Tense](): 'Past', 'Pres', 'Fut'.
  The future tense ('Fut') may occur with participles.
* The [Evident]() feature (evidentiality) distinguishes first-hand past tense ('Fh').
* There is one value of the [Voice]() feature: 'Pass' . 
*The basic (active) form of the verb is unmarked and unannotated.

## Syntax

### Core Arguments, Oblique Arguments and Adjuncts

* Nominal subject ([nsubj]()) is a noun phrase in the nominative case, without adposition.
  * A subordinate clause may serve as the subject and is labeled 'csubj'.
* Object ([obj]()) is a noun phrase without adposition and typically in the accusative case,
  although it can be also nominative or dative.

### Relations Overview

* The following relation subtypes are used in Kyrgyz:
  
  * [nmod:poss]() for possessive and genitive modifiers
 

## Treebanks

This is the first treebank in Kyrgyz.

 

---
**Instruction**: Treebank-specific pages are generated automatically from the README file in the treebank repository and
from the data in the latest release. Link to the respective '*-index.html' page in the 'treebanks' folder, using the language code
and the treebank code in the file name.

---
