---
layout: base
title: 'Nanai UD'
udver: '2'
---

# UD for Nanai <span class="flagspan"><img class="flag" src="../../flags/svg/RU.svg" /></span>

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

* Nominal features: `Case` (Nom, Gen, Dat, Acc, Abl, Ins, Loc), `Number` (Sing, Dual, Plur), `Person`, `Poss`, `PronType` (Dem, Int, Prs, Tot), `Reflex`, `Foreign`, `NumType` (Card, Ord).
* Verbal features: `VerbForm` (Fin, Inf, Part, Conv, Ger, Vnoun), `Mood` (Ind, Imp, Nec, Cnd), `Tense` (Past, Pres, Fut), `Aspect` (Hab, Imp, Perf), `Voice` (Cau), `Polarity`.
* Adjectival features: `Degree` (Pos, Sup, Abs, Dim).

---

## Syntax

* Nanai is a head-final language with SOV constituent order.
* Core arguments are identified morphosyntactically: `nsubj` is typically in the nominative (unmarked), `obj` is typically accusative, and `iobj` is typically dative.
* Oblique arguments and adjuncts are tagged `obl`; case marking is realized as suffixes on the nominal head.
* No language-specific dependency subtypes are introduced in the current release.

---

## Treebanks

There is 1 Nanai UD treebank:

* [Nanai-GDUD](../treebanks/gld_gdud/index.html)
