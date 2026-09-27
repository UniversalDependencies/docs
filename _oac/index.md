---
layout: base
title: 'Oroch UD'
udver: '2'
---

# UD for Oroch <span class="flagspan"><img class="flag" src="../../flags/svg/RU.svg" /></span>

## Tokenization and Word Segmentation

* Words are delimited by whitespace.
* Punctuation is separated from adjacent words as separate tokens.
* There are no multiword tokens and no words with spaces in the current treebank.
* Bound morphemes (case, possessive, and person suffixes) are written together with their host, following the phonemic Latin transcription used in the reference grammar.

---

## Morphology

### Tags

* Tags actually attested in the treebank include ADJ, ADP, ADV, AUX, CCONJ, DET, INTJ, NOUN, NUM, PART, PRON, PROPN, PUNCT, SCONJ, VERB, and X.
* `PART` is used for discourse particles and the negation particle.
* The `DET`/`PRON` distinction follows the general UD principle: forms that modify a nominal head are tagged `DET`, forms that head their own phrase are tagged `PRON`.

### Features

* Nominal features: `Case` (Nom, Gen, Dat, Acc, Ins, Loc), `Number` (Sing, Plur), `Person`, `Poss`, `PronType` (Int, Prs, Rcp), `Reflex`.
* Verbal features: `VerbForm` (Inf, Part, Conv, Vnoun), `Mood` (Ind, Imp, Int), `Tense` (Past, Pres, Fut), `Aspect` (Hab, Prog), `Voice` (Rcp), `Polarity`.
* Adjectival features: `Degree` (Pos, Cmp).

---

## Syntax

* Oroch is a head-final language with SOV constituent order.
* Core arguments are identified morphosyntactically: `nsubj` is typically in the nominative (unmarked), `obj` is typically accusative, and `iobj` is typically dative.
* Oblique arguments and adjuncts are tagged `obl`; case marking is realized as suffixes on the nominal head.
* No language-specific dependency subtypes are introduced in the current release.

---

## Treebanks

There is 1 Oroch UD treebank:

* [Oroch-GDUD](../treebanks/oac_gdud/index.html)
