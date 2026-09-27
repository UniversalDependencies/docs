---
layout: base
title: 'Nanai UD'
udver: '2'
---

# UD for Nanai <span class="flagspan"><img class="flag" src="../../flags/svg/RU.svg" /></span>

Nanai (also called Hezhen in the Chinese context, or Golds in older literature) is a Southern Tungusic language of the Amur-Sakhalin subgroup, spoken by the Nanai people along the middle and lower Amur River in the Russian Far East, and in Heilongjiang Province of China. It is closely related to Ulch, Oroch, and Udihe. The language is severely endangered, with only a small number of fluent speakers remaining.

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

* Nominal features attested in the treebank: `Case` (Nom, Gen, Dat, Acc, Abl, Ins, Loc), `Number` (Sing, Dual, Plur), `Person` (1, 2, 3), `Poss`, `PronType` (Dem, Int, Prs, Tot), `Reflex`, `Foreign`, `NumType` (Card, Ord).
* Verbal features attested in the treebank: `VerbForm` (Fin, Inf, Part, Conv, Ger, Vnoun), `Mood` (Ind, Imp, Nec, Cnd), `Tense` (Past, Pres, Fut), `Aspect` (Hab, Imp, Perf), `Voice` (Cau), `Polarity`.
* Adjectival features attested in the treebank: `Degree` (Pos, Sup, Abs, Dim).
* Nanai-specific morphological information that does not correspond to any value in the universal feature inventory is encoded in the MISC column rather than FEATS, in accordance with UD conventions.

---

## Syntax

* Nanai is a head-final language with SOV constituent order. The subject (`nsubj`) precedes the object (`obj`); both precede the verb.
* Core arguments are identified morphosyntactically: `nsubj` is typically in the nominative (unmarked), `obj` is typically accusative, and `iobj` is typically dative.
* Oblique arguments and adjuncts are tagged `obl`; case marking is realized as suffixes on the nominal head.
* Attributive modifiers precede their nominal head. Genitive and other adnominal modifiers use `nmod`; adjectives use `amod`.
* Copular constructions attach a nonverbal predicate as the head, with the copula (when overt) attached via `cop`.
* No language-specific dependency subtypes are introduced in the current release.

---

## Treebanks

There is 1 Nanai UD treebank:

* [Nanai-GDUD](../treebanks/gld_gdud/index.html)
