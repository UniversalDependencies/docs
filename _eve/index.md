---
layout: base
title: 'Even UD'
udver: '2'
---

# UD for Even <span class="flagspan"><img class="flag" src="../../flags/svg/RU.svg" /></span>

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
* The copula `bi` ('to be') is analyzed as `AUX` and registered as a language-specific auxiliary.
* The `DET`/`PRON` distinction follows the general UD principle: forms that modify a nominal head are tagged `DET`, forms that head their own phrase are tagged `PRON`.

### Features

* Nominal features: `Case` (Abl, Acc, Dat, Ins, Loc), `Number` (Sing, Plur), `Person` (1, 2, 3), `Poss`, `PronType` (Dem, Ind, Int, Prs), `Definite` (Def, Ind), `Reflex`, and possessor agreement features `Number[psor]`, `Person[psor]`.
* Verbal features: `VerbForm` (Fin, Conv, Part), `Mood` (Ind, Imp, Cnd), `Tense` (Past, Fut), `Aspect` (Hab, Imp, Perf, Prog), `Voice` (Act, Mid), `Polarity`.
* Language-specific: `Deixis` (Prox, Remt) is used on demonstrative determiners and one deictic adverb, following the analysis of the reference grammar.
* Even-specific morphological information that does not correspond to any UD feature value (such as certain derivational categories, particle types, and specialized converb, voice, and mood distinctions) is encoded in the MISC column rather than FEATS, in accordance with UD conventions.

---

## Syntax

* Even is a head-final language with SOV constituent order.
* Core arguments are identified morphosyntactically: `nsubj` is typically in the nominative (unmarked), `obj` is typically accusative, and `iobj` is typically dative.
* Oblique arguments and adjuncts are tagged `obl`; case marking is realized as suffixes on the nominal head.
* Copular constructions use `bi` as `cop`, attached to the nonverbal predicate.
* The subtype `nsubj:outer` is used in one construction where a clause serves as the predicate of another clause.

---

## Treebanks

There is 1 Even UD treebank:

* [Even-GDUD](../treebanks/eve_gdud/index.html)
