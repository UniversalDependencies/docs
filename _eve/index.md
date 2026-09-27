---
layout: base
title: 'Even UD'
udver: '2'
---

# UD for Even <span class="flagspan"><img class="flag" src="../../flags/svg/RU.svg" /></span>

Even (also called Lamut in older literature) is a Northern Tungusic language spoken by the Even people in eastern Siberia, primarily in the Sakha Republic (Yakutia), the Magadan Oblast, Kamchatka Krai, and the Chukotka Autonomous Okrug of the Russian Federation. Together with Evenki and Negidal, it belongs to the Northern branch of the Tungusic family. Even is severely endangered, with the number of active speakers declining rapidly, especially among younger generations.

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
* `AUX` is used for the copula `bi` ('to be'), which is registered as a language-specific auxiliary.
* The `DET`/`PRON` distinction follows the general UD principle: forms that modify a nominal head are tagged `DET`, forms that head their own phrase are tagged `PRON`.

### Features

* Nominal features attested in the treebank: `Case` (Abl, Acc, Dat, Ins, Loc), `Number` (Sing, Plur), `Person` (1, 2, 3), `Poss`, `PronType` (Dem, Ind, Int, Prs), `Reflex`, `Definite` (Def, Ind), and possessor agreement features `Number[psor]`, `Person[psor]`.
* Verbal features attested in the treebank: `VerbForm` (Fin, Conv, Part), `Mood` (Ind, Imp, Cnd), `Tense` (Past, Fut), `Aspect` (Hab, Imp, Perf, Prog), `Voice` (Act, Mid), `Polarity`.
* Language-specific: `Deixis` (Prox, Remt) is used on demonstrative determiners and one deictic adverb, following the analysis of the reference grammar. Even demonstratives make a systematic proximal/remote deictic distinction that is not fully captured by the universal `PronType=Dem` value alone.
* Even-specific morphological information that does not correspond to any value in the universal feature inventory (such as certain derivational categories, particle types, and specialized converb, voice, and mood distinctions) is encoded in the MISC column rather than FEATS, in accordance with UD conventions.

---

## Syntax

* Even is a head-final language with SOV constituent order. The subject (`nsubj`) precedes the object (`obj`); both precede the verb.
* Core arguments are identified morphosyntactically: `nsubj` is typically in the nominative (unmarked), `obj` is typically accusative, and `iobj` is typically dative.
* Oblique arguments and adjuncts are tagged `obl`; case marking is realized as suffixes on the nominal head.
* Attributive modifiers precede their nominal head. Genitive and other adnominal modifiers use `nmod`; adjectives use `amod`.
* Copular constructions use `bi` as `cop`, attached to the nonverbal predicate.
* The subtype `nsubj:outer` is used in one construction where a clause serves as the predicate of another clause.

---

## Treebanks

There is 1 Even UD treebank:

* [Even-GDUD](../treebanks/eve_gdud/index.html)
