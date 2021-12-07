---
layout: base
title:  'Hittite UD'
udver: '2'
---

# UD for Hittite <span class="flagspan"><img class="flag" src="../../flags/svg/TR.svg" /></span>

## Tokenization and Word Segmentation

* In HitTB, tokens are delimited using whitespace. This is reflected in the original writing, as Hittite cuneiform also used whitespace to delineate.
* Cuneiform is sometimes difficult to display. The treebank instead displays forms in a way that closely approximates the cuneiform writing, using narrow transcription, where each cuneiform character transliteration is separated with hyphens. Broad transcription, which more closely approximates the pronounciation, is used for lemmas.
* In Hittite, clitics do not stand as independent tokens. However, clitics most often function grammatically differently from the other word or words in that token. Therefore, in HitTB, clitics are separated out as unique words. For ease, clitics are always introduced by '='. 
* Other multiword tokens include Sumerian compound-word borrowings and words with determinatives. A determinative acts as a class for the noun it modifies, such as the determinative *LÚ* "man", which is used for people. The determinative is treated as a separate word to preserve the determinatives in the treebank.

---

## Morphology

### Tags

* In HitTB, 15 part-of-speech tags are used.
* Only SYM and PUNCT remain unused.
* AUX is used for the copula *ēš-* (which, like in English, also can function as a true auxiliary), as well as the auxiliary verbs *ḫar(k)-* and *dai-*. A final word tagged AUX is *NUGÁL*, which functions as a negative copula.
* DET is used for the demonstratives *kā-*, *apā-*, and *aši* (before nouns), the interrogative *kuiš* "which" (before nouns), and the word *mekki* "many".
* PART is used for *nu* and *-(m)a* (when they clearly do not act as coordinating conjunctions), the clitics *-za*, *-ašta*, *-pát*, *-kán*, and *-šan*, and the negatives *lē* and *natta*.

---

### Nominal Features

For nouns, the following features are possible:
* Case, which has 10 possibilities (Nom, Acc, Gen, Dat, Abl, Ins, All, Erg, Voc, Abs)
* Definite, which is used to model the Akkadian construct form and has 1 possibility (Cons)
* Gender, which has 4 possibilities (Com, Neut, Masc, Fem)
* Number, which has 2 possibilities (Sing, Plur)

The *Case*, *Gender*, and *Number* features can also be used with verbs (in participle form), pronouns, numerals, adjectives, and determiners.

### Verbal Features

Verbs (not including participles) in HitTB can have the following features:
* Person (1, 2, 3)
* Mood (Ind, Imp)
* Tense (Pres, Past)
* VerbForm (Fin, Inf, Part, Sup, Vnoun)
* Voice (Act, Mid)

### Language-Specific Features
HitTB contains one language-specific feature, called Language. Since Hittite uses forms from both Akkadian and Sumerian, it is important to know which of these two languages the word originated from, especially in the event that the word displays Akkadian or Sumerian syntax. The possible values of Language are *Language=Akk* and *Language=Sum*

---

## Syntax

* Hittite is most often a SOV language.

---
**Instruction**: Give criteria for identifying core arguments (subjects and objects), and describe the range of copula constructions in nonverbal clauses. List all subtype relations used. Include links to language-specific relations definitions if any.

---

## Treebanks

There is 1 Hittite UD treebank:

  * [HitTB](../treebanks/hit_hittb/index.html)

---
**Instruction**: Treebank-specific pages are generated automatically from the README file in the treebank repository and
from the data in the latest release. Link to the respective `*-index.html` page in the `treebanks` folder, using the language code
and the treebank code in the file name.

---
