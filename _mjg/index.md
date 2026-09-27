---
layout: base
title: 'Tu UD'
udver: '2'
---

# UD for Tu <span class="flagspan"><img class="flag" src="../../flags/svg/CN.svg" /></span>

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

* Nominal features: `Case` (Abl, Acc, All, Com, Dat, Gen, Ins), `Number` (Sing, Plur), `Person`, `Poss`, `PronType` (Dem, Int, Prs, Tot), `Gender` (Fem), `NumType` (Card).
* Verbal features: `VerbForm` (Fin, Inf, Part, Conv), `Mood` (Ind, Imp, Int), `Tense` (Past, Pres, Fut), `Aspect` (Hab, Imp, Perf), `Voice` (Pass), `Polarity`.
* Adjectival features: `Degree` (Pos, Cmp, Sup).
* Language-specific: `ExtPos=ADV` and `ExtPos=PRON` are used to mark the external part-of-speech function of certain multiword expressions.

---

## Syntax

* Tu is a head-final language with SOV constituent order.
* Core arguments are identified morphosyntactically: `nsubj` is typically in the nominative (unmarked), `obj` is typically accusative, and `iobj` is typically dative.
* Oblique arguments and adjuncts are tagged `obl`; case marking is realized as suffixes on the nominal head or as separate postpositions attached with the `case` relation.
* The following language-specific dependency subtype is used:
  * `acl:tmod` — temporal relative clause modifier

---

## Treebanks

There is 1 Tu UD treebank:

* [Tu-GDUD](../treebanks/mjg_gdud/index.html)
