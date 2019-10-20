---
layout: base
title:  'Classical Chinese UD'
udver: '2'
---
# UD for Classical Chinese <span class="flagspan"><img class="flag" src="../../flags/svg/LZH.svg" /></span>

## Tokenization and Word Segmentation

* There are neither spaces nor punctuations between words or sentences.

## Morphology

### Tags

* `ADJ` `DET` `PUNCT` `X` are not used.

### Features

* `NameType=Sur`|`Giv`|`Prs`|`Nat`|`Geo` for `PROPN`.
* `Case=Loc`|`Tem` or `NounType=Class` for `NOUN`.
* `PronType=Prs` with `Person=1`|`2`|`3` or `Reflex=Yes` for personal `PRON`, `PronType=Dem`|`Int` for other `PRON`.
* `NumType=Ord` for zodiac `NUM`.
* `Polarity=Neg` or `Degree=Pos`|`Equ`|`Sup`|`Cmp` for `VERB` and `ADV`.
* `AdvType=Deg`|`Tim`|`Cau` with `Aspect=Perf` or `Tense=Past`|`Pres`|`Fut` for `ADV`.
* `Mood=Pot`|`Nec`|`Des` `Voice=Pass` for `AUX`.
* `VerbType=Cop` for copular use of verb (its UPOS is changed into `AUX`).
* `VerbForm=Part` for adjective use of `VERB`.
* `VerbForm=Conv` for adverbial use of verb (its UPOS is changed into `ADV`).

## Syntax

* TBD

## Treebanks

There is one Classical Chinese UD treebank:

* [UD_Classical_Chinese-Kyoto](../treebanks/lzh_kyoto/index.html)

## References

* Koichi Yasuoka: Universal Dependencies Treebank of the Four Books in Classical Chinese, DADH2019: 10th International Conference of Digital Archives and Digital Humanities (December 2019).
