---
layout: base
title: 'Ulch UD'
udver: '2'
---

# UD for Ulch <span class="flagspan"><img class="flag" src="../../flags/svg/RU.svg" /></span>

Ulch (also spelled Ulchi, Olcha) is a Southern Tungusic language of the Amur-Sakhalin subgroup, spoken by the Ulch people along the lower reaches of the Amur River in the Khabarovsk Krai of the Russian Far East. It is closely related to Nanai and other neighboring Southern Tungusic varieties. The number of remaining fluent speakers is small, and the language is severely endangered.

## Tokenization and Word Segmentation

* Words are delimited by whitespace.
* Punctuation is separated from adjacent words as separate tokens.
* There are no multiword tokens and no words with spaces in the current treebank.
* Bound morphemes (case, possessive, and person suffixes) are written together with their host, following the phonemic Latin transcription used in the reference grammar. Following the analytical practice of Tungusic descriptive grammar, no morpheme boundaries are introduced inside inflected word forms during tokenization.

---

## Morphology

### Tags

* Tags actually attested in the treebank include ADJ, ADP, ADV, AUX, CCONJ, DET, INTJ, NOUN, NUM, PART, PRON, PROPN, PUNCT, SCONJ, VERB, and X.
* `NOUN` is used for common nouns; `PROPN` is reserved for proper names (personal names, place names).
* `PART` is used for discourse particles and the negation particle.
* `AUX` is used for a small closed set of auxiliary and copular verbs, registered as language-specific auxiliaries.
* The `DET`/`PRON` distinction follows the general UD principle: forms that modify a nominal head are tagged `DET`, forms that head their own phrase are tagged `PRON`.
* Postpositions are tagged `ADP`.

### Features

* Nominal features attested in the treebank: `Case` (Acc, Dat, Gen, Loc), `Number` (Sing, Plur), `Person` (1, 2, 3), `Poss`, `PronType` (Dem, Int, Prs), `Reflex`, and possessor agreement features `Number[psor]`, `Person[psor]`.
* Verbal features attested in the treebank: `VerbForm` (Fin, Inf, Part, Vnoun), `Mood` (Ind, Imp, Int, Cnd), `Tense` (Past, Pres, Fut), `Aspect` (Iter), `Voice` (Cau), `Polarity`.
* Adjectival features attested in the treebank: `Degree` (Pos, Cmp).
* Language-specific feature: `Deixis=Remt` is used on demonstrative determiners, following the analysis of the reference grammar. Ulch demonstratives make a systematic proximal/remote deictic distinction that is not fully captured by the universal `PronType=Dem` value alone.
* Ulch-specific morphological information that does not correspond to any value in the universal feature inventory is encoded in the MISC column rather than FEATS, in accordance with UD conventions.

---

## Syntax

* Ulch is a head-final language with SOV constituent order. The subject (`nsubj`) precedes the object (`obj`); both precede the verb.
* Core arguments are identified morphosyntactically: `nsubj` is typically in the nominative (unmarked), `obj` is typically accusative, and `iobj` is typically dative.
* Oblique arguments and adjuncts are tagged `obl`; case marking is realized as suffixes on the nominal head.
* Attributive modifiers precede their nominal head. Genitive and other adnominal modifiers use `nmod`; adjectives use `amod`.
* Copular constructions attach a nonverbal predicate as the head, with the copula (when overt) attached via `cop`.
* No language-specific dependency subtypes are introduced in the current release.

---

## Treebanks

There is 1 Ulch UD treebank:

* [Ulch-GDUD](../treebanks/ulc_gdud/index.html)
