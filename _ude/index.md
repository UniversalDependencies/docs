---
layout: base
title: 'Udihe UD'
udver: '2'
---

# UD for Udihe <span class="flagspan"><img class="flag" src="../../flags/svg/RU.svg" /></span>

Udihe (also called Udege) is a Southern Tungusic language of the Amur-Sakhalin subgroup, spoken by the Udihe people in the Primorsky Krai and Khabarovsk Krai of the Russian Far East. It is closely related to Oroch and, more distantly, to Nanai and Ulch. The language is severely endangered, with only a small number of fluent speakers remaining, most of them elderly.

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
* The `DET`/`PRON` distinction follows the general UD principle: forms that modify a nominal head are tagged `DET`, forms that head their own phrase are tagged `PRON`.

### Features

* Nominal features attested in the treebank: `Case` (Nom, Gen, Dat, Acc, Abl, All, Ins, Lat, Loc), `Number` (Sing, Plur), `Person` (1, 2, 3), `Poss`, `PronType` (Dem, Prs), `Reflex`, `Clusivity` (Ex, In), `NumType` (Card, Ord), and possessor agreement features `Number[psor]`, `Person[psor]`.
* Verbal features attested in the treebank: `VerbForm` (Fin, Inf, Part, Ger, Vnoun), `Mood` (Ind, Imp, Opt, Prp, Sub), `Tense` (Past, Pres, Fut), `Aspect` (Hab, Iter, Perf, Prosp), `Voice` (Cau, Pass), `Polarity`.
* Adjectival features attested in the treebank: `Degree` (Pos).
* Udihe first-person plural pronominal forms distinguish inclusive (`Clusivity=In`) from exclusive (`Clusivity=Ex`) reference, an areally common Tungusic feature.
* Udihe-specific morphological information that does not correspond to any value in the universal feature inventory is encoded in the MISC column rather than FEATS, in accordance with UD conventions.

---

## Syntax

* Udihe is a head-final language with SOV constituent order. The subject (`nsubj`) precedes the object (`obj`); both precede the verb.
* Core arguments are identified morphosyntactically: `nsubj` is typically in the nominative (unmarked), `obj` is typically accusative, and `iobj` is typically dative.
* Oblique arguments and adjuncts are tagged `obl`; case marking is realized as suffixes on the nominal head.
* Attributive modifiers precede their nominal head. Genitive and other adnominal modifiers use `nmod`; adjectives use `amod`.
* Copular constructions attach a nonverbal predicate as the head, with the copula (when overt) attached via `cop`.
* No language-specific dependency subtypes are introduced in the current release.

---

## Treebanks

There is 1 Udihe UD treebank:

* [Udihe-GDUD](../treebanks/ude_gdud/index.html)
