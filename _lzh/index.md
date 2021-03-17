---
layout: base
title:  'Classical Chinese UD'
udver: '2'
---
# UD for Classical Chinese <span class="flagspan"><img class="flag" src="https://universaldependencies.org/flags/svg/CN-QING.svg" /></span>

## Tokenization and Word Segmentation

There are neither spaces nor punctuations between words or sentences. Every word consists of a single character, except for several (proper) nouns.

## Morphology

### Tags

The predicate-object-final structure of very early Chinese texts had only three categories of words: predicate, object, and final. Here in our linguistic model we tentatively call them “verb” “noun” and “particle” respectively. Several words were specialised to be used as verbs, several as nouns, but most of them had been used in two or three categories around Zhou (周) dynasty.

At that era, we can observe very early modifier usages of verbs. Several verbs were specialised to be used as adverbial modifiers, afterwards caused adverbs. In between verbs and adverbs, auxiliary verbs were almost specialised to auxiliary uses, but incidentally used as verbs. Adjective usages of verbs were not specialised as adjectives at that era, on the other hand, some caused prepositions.

For POS-tagging of classical Chinese texts in UD, we use `VERB` `ADV` `AUX` `ADP` and `SCONJ` to fill UPOS field of each verb-origin word, following the overview of modifier usages mentioned above. For noun-origin words we use `NOUN` `PROPN` `PRON` `NUM` and `ADV` (noun-origin adverbs including 何), categorising them in rather nowadays point of view. For particle-origin words we use `PART` `CCONJ` and `INTJ`, keeping up with the guideline of UD v2. We rarely use `SYM`, and do not use `ADJ` `DET` `PUNCT` or `X`.

### Features

* `NameType=Sur`|`Giv`|`Prs`|`Nat`|`Geo` for `PROPN`.
* `Case=Loc`|`Tem` or `NounType=Class` for `NOUN`.
* `PronType=Prs` with `Person=1`|`2`|`3` or `Reflex=Yes` for personal `PRON`.
* `PronType=Dem` for demonstrative `PRON`.
* `PronType=Int` for interrogative `PRON`.
* `NumType=Ord` for zodiac `NUM`.
* `Polarity=Neg` or `Degree=Pos`|`Equ`|`Sup`|`Cmp` for `VERB` and `ADV`.
* `AdvType=Deg`|`Tim`|`Cau` with `Aspect=Perf` or `Tense=Past`|`Pres`|`Fut` for `ADV`.
* `Mood=Pot`|`Nec`|`Des` or `Voice=Pass` for `AUX`.
* `VerbType=Cop` for copular use of verb (its UPOS is changed into `AUX`).
* `VerbForm=Part` for adjective use of `VERB`.
* `VerbForm=Conv` for adverbial use of verb (its UPOS is changed into `ADV`).

## Syntax

* [`discourse:sp`](dep/discource-sp.md) to annotate the final sentence particles in the predicate-object-final structure.
* `nsubj:pass` to annotate passive subjects.
* `obl:tmod` to annotate temporal oblique nominals.
* `obl:lmod` to annotate locational oblique nominals.
* `compound:redup` (left-to-right) to annotate reduplicated compounds.
* `flat:vv` (left-to-right) to annotate serial verbs (rather exocentric).

## Treebanks

There is one Classical Chinese UD treebank:

* [UD_Classical_Chinese-Kyoto](https://universaldependencies.org/treebanks/lzh_kyoto/) (implemented in [UD-Kanbun](https://github.com/KoichiYasuoka/UD-Kanbun/))

## References

* Koichi Yasuoka: [Universal Dependencies Treebank of the Four Books in Classical Chinese](http://hdl.handle.net/2433/245217), DADH2019: 10th International Conference of Digital Archives and Digital Humanities (December 2019), pp.20-28.
