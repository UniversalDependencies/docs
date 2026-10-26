---
layout: base
title: 'Negidal UD'
udver: '2'
---

# UD for Negidal <span class="flagspan"><img class="flag" src="../../flags/svg/RU.svg" /></span>

Negidal is a Northern Tungusic language spoken by the Negidal people along the Amgun River and adjacent areas of the lower Amur in the Khabarovsk Krai of the Russian Far East. Together with Evenki and Even, it belongs to the Northern branch of the Tungusic family. Negidal is severely endangered, with only a handful of remaining native speakers, and is one of the least documented Tungusic languages.

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
* `PART` is used for discourse particles, the negation particle, and a deictic particle.
* The `DET`/`PRON` distinction follows the general UD principle: forms that modify a nominal head are tagged `DET`, forms that head their own phrase are tagged `PRON`.

### Features

* Nominal features attested in the treebank: `Case` (Abl, Acc, All, Com, Dat, Ins, Loc), `Number` (Sing, Coll, Plur), `Person` (1, 2, 3), `Poss`, `PronType` (Dem, Ind, Int, Prs, Tot), `Reflex`, `Definite` (Ind), `Clusivity=Ex`, `NumType` (Card), and possessor agreement features `Number[psor]`, `Person[psor]`.
* Verbal features attested in the treebank: `VerbForm` (Fin, Inf, Part, Conv), `Mood` (Ind, Imp, Nec, Cnd), `Tense` (Past, Pres, Fut), `Aspect` (Hab), `Voice` (Cau), `Polarity`.
* Language-specific feature: `Deixis=Remt` is used on demonstrative determiners and on a deictic particle, following the analysis of the reference grammar. Negidal demonstratives make a systematic proximal/remote deictic distinction that is not fully captured by the universal `PronType=Dem` value alone.
* Negidal exclusive first-person plural pronominal forms are marked with `Clusivity=Ex`, an areally common Tungusic feature.
* Negidal-specific morphological information that does not correspond to any value in the universal feature inventory is encoded in the MISC column rather than FEATS, in accordance with UD conventions.

---

## Syntax

* Negidal is a head-final language with SOV constituent order. The subject (`nsubj`) precedes the object (`obj`); both precede the verb.
* Core arguments are identified morphosyntactically: `nsubj` is typically in the nominative (unmarked), `obj` is typically accusative, and `iobj` is typically dative.
* Oblique arguments and adjuncts are tagged `obl`; case marking is realized as suffixes on the nominal head.
* Attributive modifiers precede their nominal head. Genitive and other adnominal modifiers use `nmod`; adjectives use `amod`.
* Copular constructions attach a nonverbal predicate as the head, with the copula (when overt) attached via `cop`.
* No language-specific dependency subtypes are introduced in the current release.

---

## Treebanks

There is 1 Negidal UD treebank:

* [Negidal-GDUD](../treebanks/neg_gdud/index.html)
