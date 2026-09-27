---
layout: base
title: 'Daur UD'
udver: '2'
---

# UD for Daur <span class="flagspan"><img class="flag" src="../../flags/svg/CN.svg" /></span>

## Tokenization and Word Segmentation

* Words are delimited by whitespace.
* Punctuation is separated from adjacent words as separate tokens.
* There are no multiword tokens and no words with spaces in the current treebank.
* Bound morphemes (case, tense, and mood suffixes) are written together with their host in the Latin transliteration used in the reference grammar.

---

## Morphology

### Tags

* Tags actually attested in the treebank include ADJ, ADP, ADV, AUX, CCONJ, DET, INTJ, NOUN, NUM, PART, PRON, PROPN, PUNCT, SCONJ, VERB, and X.
* `PART` is used for discourse particles, emphatic particles, interrogative particles, and the negation particle.
* Postpositions are tagged `ADP`.
* The `DET`/`PRON` distinction follows the general UD principle: forms that modify a nominal head are tagged `DET`, forms that head their own phrase are tagged `PRON`.

### Features

* Nominal features: `Case` (Abl, Acc, Dat, Gen, Ins, Loc), `Number` (Sing, Plur), `Person`, `Poss`, `PronType` (Dem, Ind, Int, Prs, Rcp, Tot), `Reflex`, `NumType` (Card), and possessor agreement features `Number[psor]`, `Person[psor]`.
* Verbal features: `VerbForm` (Fin, Inf, Part, Conv), `Mood` (Ind, Imp), `Tense` (Past, Pres, Fut), `Aspect` (Imp, Perf), `Voice` (Cau, Pass, Rcp), `Polarity`, `Evident` (Nfh).
* Adjectival features: `Degree` (Pos, Cmp, Sup, Abs).
* Language-specific: `PartType` (Emp, Int) is used on emphatic and interrogative particles; `ExtPos=ADV` is used to mark the external part-of-speech function of certain expressions.

---

## Syntax

* Daur is a head-final language with SOV constituent order.
* Core arguments are identified morphosyntactically: `nsubj` is typically in the nominative (unmarked), `obj` is typically accusative, and `iobj` is typically dative.
* Oblique arguments and adjuncts are tagged `obl`; case marking is realized as suffixes on the nominal head or as separate postpositions attached with the `case` relation.
* No language-specific dependency subtypes are introduced in the current release.

---

## Treebanks

There is 1 Daur UD treebank:

* [Daur-GDUD](../treebanks/dta_gdud/index.html)
