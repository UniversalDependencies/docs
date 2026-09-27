---
layout: base
title: 'Kalmyk UD'
udver: '2'
---

# UD for Kalmyk <span class="flagspan"><img class="flag" src="../../flags/svg/RU.svg" /></span>

Kalmyk is a Mongolic language of the Oirat branch, spoken primarily by the Kalmyk people in the Republic of Kalmykia in the Russian Federation, with smaller diaspora communities elsewhere. It is closely related to the Oirat varieties spoken in Xinjiang (China) and in western Mongolia. Kalmyk has a written literary tradition using the Cyrillic script; earlier the Clear Script (Todo Bichig), devised in the 17th century for Oirat, was also in use.

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

* Nominal features attested in the treebank: `Case` (Nom, Gen, Dat, Acc, Abl, All, Com, Ins, Loc), `Number` (Sing, Plur), `Person` (1, 2, 3), `Poss`, `PronType` (Dem, Ind, Int, Neg, Prs, Tot), `Reflex`, `NumType` (Card), and possessor agreement features `Number[psor]`, `Person[psor]`.
* Verbal features attested in the treebank: `VerbForm` (Fin, Part, Conv), `Mood` (Ind, Imp, Int, Opt), `Tense` (Past, Pres, Fut), `Aspect` (Hab, Imp, Perf, Prog), `Voice` (Cau, Pass, Rcp), `Polarity`.
* Adjectival features attested in the treebank: `Degree` (Pos).
* Language-specific: `Deixis=Remt` is used on demonstrative determiners; `ExtPos=ADV` is used to mark the external part-of-speech function of certain adverbial expressions.
* Kalmyk-specific morphological information that does not correspond to any value in the universal feature inventory is encoded in the MISC column rather than FEATS, in accordance with UD conventions.

---

## Syntax

* Kalmyk is a head-final language with SOV constituent order. The subject (`nsubj`) precedes the object (`obj`); both precede the verb.
* Core arguments are identified morphosyntactically: `nsubj` is typically in the nominative (unmarked), `obj` is typically accusative, and `iobj` is typically dative.
* Oblique arguments and adjuncts are tagged `obl`; case marking is realized as suffixes on the nominal head or as separate postpositions attached with the `case` relation.
* Attributive modifiers precede their nominal head. Genitive and other adnominal modifiers use `nmod`; adjectives use `amod`.
* Copular constructions attach a nonverbal predicate as the head, with the copula (when overt) attached via `cop`.
* No language-specific dependency subtypes are introduced in the current release.

---

## Treebanks

There is 1 Kalmyk UD treebank:

* [Kalmyk-GDUD](../treebanks/xal_gdud/index.html)
