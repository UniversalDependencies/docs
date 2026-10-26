---
layout: base
title: 'Daur UD'
udver: '2'
---

# UD for Daur <span class="flagspan"><img class="flag" src="../../flags/svg/CN.svg" /></span>

Daur (also called Dagur) is a Mongolic language spoken by the Daur people primarily in Heilongjiang and Inner Mongolia in China, with a smaller diaspora community in Xinjiang. It is one of the more divergent members of the Mongolic family, having been in prolonged contact with Manchu, Chinese, and other neighboring languages. Daur preserves a number of archaic Mongolic features and has developed several innovations of its own, particularly in its verbal and evidential systems.

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
* `PART` is used for discourse particles, emphatic particles, interrogative particles, and the negation particle.
* Postpositions are tagged `ADP`.
* The `DET`/`PRON` distinction follows the general UD principle: forms that modify a nominal head are tagged `DET`, forms that head their own phrase are tagged `PRON`.

### Features

* Nominal features attested in the treebank: `Case` (Abl, Acc, Dat, Gen, Ins, Loc), `Number` (Sing, Plur), `Person` (1, 2, 3), `Poss`, `PronType` (Dem, Ind, Int, Prs, Rcp, Tot), `Reflex`, `NumType` (Card), and possessor agreement features `Number[psor]`, `Person[psor]`.
* Verbal features attested in the treebank: `VerbForm` (Fin, Inf, Part, Conv), `Mood` (Ind, Imp), `Tense` (Past, Pres, Fut), `Aspect` (Imp, Perf), `Voice` (Cau, Pass, Rcp), `Polarity`, `Evident` (Nfh).
* Adjectival features attested in the treebank: `Degree` (Pos, Cmp, Sup, Abs).
* Language-specific: `PartType=Emp` and `PartType=Int` are used on emphatic and interrogative particles; `ExtPos=ADV` is used to mark the external part-of-speech function of certain expressions.
* Daur-specific morphological information that does not correspond to any value in the universal feature inventory is encoded in the MISC column rather than FEATS, in accordance with UD conventions.

---

## Syntax

* Daur is a head-final language with SOV constituent order. The subject (`nsubj`) precedes the object (`obj`); both precede the verb.
* Core arguments are identified morphosyntactically: `nsubj` is typically in the nominative (unmarked), `obj` is typically accusative, and `iobj` is typically dative.
* Oblique arguments and adjuncts are tagged `obl`; case marking is realized as suffixes on the nominal head or as separate postpositions attached with the `case` relation.
* Attributive modifiers precede their nominal head. Genitive and other adnominal modifiers use `nmod`; adjectives use `amod`.
* Copular constructions attach a nonverbal predicate as the head, with the copula (when overt) attached via `cop`.
* No language-specific dependency subtypes are introduced in the current release.

---

## Treebanks

There is 1 Daur UD treebank:

* [Daur-GDUD](../treebanks/dta_gdud/index.html)
