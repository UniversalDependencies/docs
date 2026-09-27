---
layout: base
title: 'Bonan UD'
udver: '2'
---

# UD for Bonan <span class="flagspan"><img class="flag" src="../../flags/svg/CN.svg" /></span>

## Tokenization and Word Segmentation

* Words are delimited by whitespace.
* Punctuation is separated from adjacent words as separate tokens.
* There are no multiword tokens and no words with spaces in the current treebank.
* Clitics that are written attached to their host in the source grammar (e.g., certain case and possessive suffixes) are treated as part of the host word, following the analytical practice of the reference grammar.

---

## Morphology

### Tags

* All 17 universal POS tags are potentially available. Tags actually attested in the treebank include ADJ, ADP, ADV, AUX, CCONJ, DET, INTJ, NOUN, NUM, PART, PRON, PROPN, PUNCT, SCONJ, VERB, and X.
* `PART` is used for discourse particles, focus particles, and the negation particle.
* `AUX` is used for a small closed set of auxiliary and copular verbs (registered as language-specific auxiliaries).
* The `DET`/`PRON` distinction follows the general UD principle: forms that modify a nominal head are tagged `DET`, forms that head their own phrase are tagged `PRON`.
* Postpositions are tagged `ADP` and carry the language-specific feature `AdpType=Post`.

### Features

* Nominal features: `Case` (Nom, Gen, Dat, Acc, Abl, Ins, Loc, Com, Ter), `Number` (Sing, Dual, Pauc, Plur), `Person`, `Poss`, `PronType`, `Definite`, `Gender`, `Clusivity` (Ex, In), and possessor agreement features `Number[psor]`, `Person[psor]`.
* Verbal features: `VerbForm` (Fin, Inf, Part, Conv, Ger, Vnoun), `Mood` (Ind, Imp, Cnd, Int, Irr, Jus, Nec, Opt, Sub), `Tense` (Past, Pres, Fut), `Aspect` (Hab, Imp, Perf, Prog), `Voice` (Act, Cau, Mid, Pass, Rcp), `Polarity`, `Evident`.
* Adjectival features: `Degree` (Pos, Cmp, Sup, Dim).
* Language-specific: `AdpType=Post` on postpositions.

---

## Syntax

* Bonan follows an SOV constituent order. The subject (`nsubj`) precedes the object (`obj`); both precede the verb.
* Core arguments are identified morphosyntactically: `nsubj` is typically nominative (unmarked), `obj` is typically accusative or unmarked, and `iobj` is typically dative.
* Oblique arguments and adjuncts are tagged `obl`, with case marking realized as suffixes on the nominal head or as separate postpositions attached with the `case` relation.
* Copular constructions use a small set of auxiliary/copular verbs, attached to the nonverbal predicate via `cop`.
* No language-specific dependency subtypes are introduced in the current release.

---

## Treebanks

There is 1 Bonan UD treebank:

* [Bonan-GDUD](../treebanks/peh_gdud/index.html)
