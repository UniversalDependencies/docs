---
layout: base
title:  'Nayini UD'
udver: '2'
---

# UD for Nayini

<span class="flagspan"><img class="flag" src="../flags/svg/IR.svg" /></span>

The AHA Nayini Treebank is a small treebank for Today Nayini. Its corpus is collected and annotated manually. We have prepared this bank tree based on interviews with Nayini speakers.

## Tokenization and Word Segmentation

* Words are generally delimited by whitespace or punctuation.
* Punctuation marks are attached to the neighboring word. We always tokenize them as separate tokens.
* Coordinating conjunction and prepositions are separated from the words that follows them in a sentence.
* For words that have two or more parts, such as words that have a suffix or prefix, a semi-space is used.
* There are no multiword tokens in Nayini.
* In the cases that usually stick together in Persian script, we have separated them by a whitespace.
* We use Persian script in this version, but maybe in the next versions we will use transliteration to make the work more accurate. However, we do not adhere to Persian script rules. For example, we might start a word with a vowel and no base. It should be noted that Nayini does not naturally have a written version and can be implemented with any script.

## Morphology

### Tags

* We will probably use all UPOS tags, but because most of our sentences are based on interviews with Nayini speakers, some tags, such as `SYM`, may not appear naturally. Also, because our cirpus is under develop, we still do not know which tags may never be used. However, we do not use `PROPN` based on Seraji corpus.
* For XPOS tags, our basis at this level is the Seraji corpus.
* At this level, closed call auxiliary (tagged `AUX`) include "دار" only.


### Features

* VERB:
     - Number: `Sing`
     - Person: `1`, `2` or `3`
     - Tense: `Pres` or `Past`
     - VerbForm: `Part`
     - Mood: `Imp` or `Sub`
     - Plarity: `Neg`
     
* ADV:
     - Case: `Loc` or `Tem`
     - Number: `Sing`

* PRON:
     - Number: `Sing`
     - Person: `1`
     - PronType: `Prs` or `Dem`

## Syntax

* Standard deprels are used.
* The following relation subtypes are used in Nayini:
     - [advcl]()
     - [advmod]()
     - [amod]()
     - [aux]()
     - [case]()
     - [cc]()
     - [ccomp]()
     - [compound]()
     - [compound:lvc]()
     - [flat]()
     - [mark]()
     - [nmod]()
     - [nmod:poss]()
     - [nsubj]()
     - [nummod]()
     - [obj]()
     - [obl]()
     - [punct]()
     - [root]()



## Treebanks

There is only one Nayini UD treebank:

  * [Nayini-AHA](../treebanks/nyq/index.html)


