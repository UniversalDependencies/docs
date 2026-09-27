---
layout: base
title: 'Dongxiang UD'
udver: '2'
---

# UD for Dongxiang <span class="flagspan"><img class="flag" src="../../flags/svg/CN.svg" /></span>

## Tokenization and Word Segmentation

* Words are delimited by whitespace.
* Punctuation is separated from adjacent words as separate tokens.
* There are no multiword tokens and no words with spaces in the current treebank.
* Bound morphemes (case, tense, and mood suffixes) are written together with their host in the Latin transliteration used in the reference grammar.

---

## Morphology

### Tags

* Tags actually attested in the treebank include ADJ, ADP, ADV, AUX, CCONJ, DET, INTJ, NOUN, NUM, PART, PRON, PROPN, PUNCT, SCONJ, VERB, and X.
* `PART` is used for discourse particles and the negation particle.
* Postpositions are tagged `ADP`.
* The `DET`/`PRON` distinction follows the general UD principle: forms that modify a nominal head are tagged `DET`, forms that head their own phrase are tagged `PRON`.

### Features

* Nominal features: `Case` (Nom, Gen, Dat, Acc, Abl, Com, Loc), `Number` (Sing, Plur), `Person`, `Poss`, `PronType` (Dem, Ind, Int, Prs, Rcp, Tot), `Reflex`, `Gender` (Fem, Masc), `NumType` (Card).
* Verbal features: `VerbForm` (Fin, Inf, Part, Conv), `Mood` (Ind, Imp, Int), `Tense` (Past, Pres), `Aspect` (Imp, Perf, Prog), `Voice` (Pass), `Polarity`.
* Adjectival features: `Degree` (Pos, Cmp, Sup, Abs).

---

## Syntax

* Dongxiang is a head-final language with SOV constituent order.
* Core arguments are identified morphosyntactically: `nsubj` is typically in the nominative (unmarked), `obj` is typically accusative, and `iobj` is typically dative.
* Oblique arguments and adjuncts are tagged `obl`; case marking is realized as suffixes on the nominal head or as separate postpositions attached with the `case` relation.
* No language-specific dependency subtypes are introduced in the current release.

---

## Treebanks

There is 1 Dongxiang UD treebank:

* [Dongxiang-GDUD](../treebanks/sce_gdud/index.html)
