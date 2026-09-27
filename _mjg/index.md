---
layout: base
title: 'Tu UD'
udver: '2'
---

# UD for Tu <span class="flagspan"><img class="flag" src="../../flags/svg/CN.svg" /></span>

Tu (also called Monguor) is a Mongolic language spoken by the Tu people primarily in Qinghai and Gansu provinces of China. It belongs to the Gansu-Qinghai Sprachbund of the Mongolic family, together with Bonan, Dongxiang, Eastern Yugur, and Kangjia. Tu shows extensive contact influence from Chinese, Tibetan, and other neighboring languages. Two major varieties, Mongghul and Mangghuer, are traditionally subsumed under the label Tu but differ substantially in grammar and lexicon.

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

* Nominal features attested in the treebank: `Case` (Abl, Acc, All, Com, Dat, Gen, Ins), `Number` (Sing, Plur), `Person` (1, 2, 3), `Poss`, `PronType` (Dem, Int, Prs, Tot), `Gender` (Fem), `NumType` (Card).
* Verbal features attested in the treebank: `VerbForm` (Fin, Inf, Part, Conv), `Mood` (Ind, Imp, Int), `Tense` (Past, Pres, Fut), `Aspect` (Hab, Imp, Perf), `Voice` (Pass), `Polarity`.
* Adjectival features attested in the treebank: `Degree` (Pos, Cmp, Sup).
* Language-specific: `ExtPos=ADV` and `ExtPos=PRON` are used to mark the external part-of-speech function of certain multiword expressions.
* Tu-specific morphological information that does not correspond to any value in the universal feature inventory is encoded in the MISC column rather than FEATS, in accordance with UD conventions.

---

## Syntax

* Tu is a head-final language with SOV constituent order. The subject (`nsubj`) precedes the object (`obj`); both precede the verb.
* Core arguments are identified morphosyntactically: `nsubj` is typically in the nominative (unmarked), `obj` is typically accusative, and `iobj` is typically dative.
* Oblique arguments and adjuncts are tagged `obl`; case marking is realized as suffixes on the nominal head or as separate postpositions attached with the `case` relation.
* Attributive modifiers precede their nominal head. Genitive and other adnominal modifiers use `nmod`; adjectives use `amod`.
* Copular constructions attach a nonverbal predicate as the head, with the copula (when overt) attached via `cop`.
* The following language-specific dependency subtype is used:
  * `acl:tmod` — temporal relative clause modifier

---

## Treebanks

There is 1 Tu UD treebank:

* [Tu-GDUD](../treebanks/mjg_gdud/index.html)
