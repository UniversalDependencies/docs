---
layout: base
title: 'Negidal UD'
udver: '2'
---

# UD for Negidal <span class="flagspan"><img class="flag" src="../../flags/svg/RU.svg" /></span>

## Tokenization and Word Segmentation

* Words are delimited by whitespace.
* Punctuation is separated from adjacent words as separate tokens.
* There are no multiword tokens and no words with spaces in the current treebank.
* Bound morphemes (case, possessive, and person suffixes) are written together with their host, following the phonemic Latin transcription used in the reference grammar.

---

## Morphology

### Tags

* Tags actually attested in the treebank include ADJ, ADP, ADV, AUX, CCONJ, DET, INTJ, NOUN, NUM, PART, PRON, PROPN, PUNCT, SCONJ, VERB, and X.
* `PART` is used for discourse particles, the negation particle, and a deictic particle.
* The `DET`/`PRON` distinction follows the general UD principle: forms that modify a nominal head are tagged `DET`, forms that head their own phrase are tagged `PRON`.

### Features

* Nominal features: `Case` (Abl, Acc, All, Com, Dat, Ins, Loc), `Number` (Sing, Coll, Plur), `Person`, `Poss`, `PronType` (Dem, Ind, Int, Prs, Tot), `Reflex`, `Definite` (Ind), `Clusivity=Ex`, `NumType` (Card), and possessor agreement features `Number[psor]`, `Person[psor]`.
* Verbal features: `VerbForm` (Fin, Inf, Part, Conv), `Mood` (Ind, Imp, Nec, Cnd), `Tense` (Past, Pres, Fut), `Aspect` (Hab), `Voice` (Cau), `Polarity`.
* Language-specific: `Deixis=Remt` is used on demonstrative determiners and on a deictic particle, following the analysis of the reference grammar.

---

## Syntax

* Negidal is a head-final language with SOV constituent order.
* Core arguments are identified morphosyntactically: `nsubj` is typically in the nominative (unmarked), `obj` is typically accusative, and `iobj` is typically dative.
* Oblique arguments and adjuncts are tagged `obl`; case marking is realized as suffixes on the nominal head.
* No language-specific dependency subtypes are introduced in the current release.

---

## Treebanks

There is 1 Negidal UD treebank:

* [Negidal-GDUD](../treebanks/neg_gdud/index.html)
