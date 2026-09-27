---
layout: base
title: 'Dongxiang UD'
udver: '2'
---

# UD for Dongxiang <span class="flagspan"><img class="flag" src="../../flags/svg/CN.svg" /></span>

Dongxiang (also called Santa) is a Mongolic language spoken by the Dongxiang people primarily in the Linxia Hui Autonomous Prefecture of Gansu Province, China. It belongs to the Gansu-Qinghai Sprachbund of the Mongolic family, together with Bonan, Tu (Monguor), Eastern Yugur, and Kangjia. Dongxiang shows extensive contact influence from Chinese and, to a lesser extent, from Tibetan and other neighboring languages, and has diverged significantly from more conservative Mongolic varieties.

## Tokenization and Word Segmentation

* Words are delimited by whitespace.
* Punctuation is separated from adjacent words as separate tokens.
* There are no multiword tokens and no words with spaces in the current treebank.
* Bound morphemes (case, tense, and mood suffixes) are written together with their host in the Latin transliteration used in the reference grammar. Following the analytical practice of Mongolic descriptive grammar, no morpheme boundaries are introduced inside inflected word forms during tokenization.

---

## Morphology

### Tags

* Tags actually attested in the treebank include ADJ, ADP, ADV, AUX, CCONJ, DET, INTJ, NOUN, NUM, PART, PRON, PROPN, PUNCT, SCONJ, VERB, and X.
* `NOUN` is used for common nouns; `PROPN` is reserved for proper names (personal names, place names).
* `PART` is used for discourse particles and the negation particle.
* Postpositions are tagged `ADP`.
* The `DET`/`PRON` distinction follows the general UD principle: forms that modify a nominal head are tagged `DET`, forms that head their own phrase are tagged `PRON`.

### Features

* Nominal features attested in the treebank: `Case` (Nom, Gen, Dat, Acc, Abl, Com, Loc), `Number` (Sing, Plur), `Person` (1, 2, 3), `Poss`, `PronType` (Dem, Ind, Int, Prs, Rcp, Tot), `Reflex`, `Gender` (Fem, Masc), `NumType` (Card).
* Verbal features attested in the treebank: `VerbForm` (Fin, Inf, Part, Conv), `Mood` (Ind, Imp, Int), `Tense` (Past, Pres), `Aspect` (Imp, Perf, Prog), `Voice` (Pass), `Polarity`.
* Adjectival features attested in the treebank: `Degree` (Pos, Cmp, Sup, Abs).
* Dongxiang-specific morphological information that does not correspond to any value in the universal feature inventory is encoded in the MISC column rather than FEATS, in accordance with UD conventions.

---

## Syntax

* Dongxiang is a head-final language with SOV constituent order. The subject (`nsubj`) precedes the object (`obj`); both precede the verb.
* Core arguments are identified morphosyntactically: `nsubj` is typically in the nominative (unmarked), `obj` is typically accusative, and `iobj` is typically dative.
* Oblique arguments and adjuncts are tagged `obl`; case marking is realized as suffixes on the nominal head or as separate postpositions attached with the `case` relation.
* Attributive modifiers precede their nominal head. Genitive and other adnominal modifiers use `nmod`; adjectives use `amod`.
* Copular constructions attach a nonverbal predicate as the head, with the copula (when overt) attached via `cop`.
* No language-specific dependency subtypes are introduced in the current release.

---

## Treebanks

There is 1 Dongxiang UD treebank:

* [Dongxiang-GDUD](../treebanks/sce_gdud/index.html)
