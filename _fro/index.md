---
layout: base
title:  'Old French UD'
udver: '2'
---

# UD for Old French <span class="flagspan"><img class="flag" src="../../flags/svg/FR-ROYAL.svg" /></span>

## Sentence segmentation

Due to the natures of the original texts where sentence boundaries are not usually clearly marked by punctuation, we keep only one main clause per tree regardless of the punctuation added by modern transcriptions. See for instance in *La queste del saint Graal*, 

>  Certes, fet li rois, Keus, vos dites voir, ceste costume ai je toz jorz tenue et la tendrai tant com je porrai mes je avoie si grant joie de Lancelot et de ses cousins qui estoient venu a cort sain et haitié qu'il ne me sovenoit de la costume.

Is split in four trees:

- “Certes, fet li rois, Keus, vos dites voir”
- “ceste costume ai je toz jorz tenue”
- “et la tendrai tant com je porrai”
- “mes je avoie si grant joie de Lancelot et de ses cousins qui estoient venu a cort sain et haitié qu'il ne me sovenoit de la costume.”

## Tokenization and Word Segmentation

* Words are delimited by whitespace or punctuation
* Contractions such as _sin_ = _si_ + _en_ are rendered as single words instead of multiword tokens, though this will probably change in the future. This is also reflected in their relation subtypes (see below).

## Morphology

The following custom morphological features are used:

+ Morph=VFin : finite verb
+ Morph=VInf : non finite verb
+ Morph=VPar : verbal participle

## Syntax

The following relation subtypes are used:

+ `acl:relcl`: relative clause
+ `advmod:obl`: contracted `advmod` and `obl` (eg. _sin_ = _si_ + _en_)
+ `aux:pass`: passive auxiliary
+ `case:det`: contracted `case` and `det` (eg. _del_ = _de_ + _le_)
+ `cc:nc`: non coordinating conjunction (eg. _et_ at the beginning of a sentence)
+ `mark:advmod`: `mark` and `advmod` (eg. _coment_ at the beginning of a subordinate clause)
+ `nsubj:advmod`: contracted `nsubj` and `advmod` (eg. _jon_ = _jo_ + _en_)
+ `nsubj:obj`: contracted `nsubj` and `obj` (eg. _quil_ = _qui_ + _le_)
+ `obj:advmod`: contracted `advmod` and `obj` (eg. _sis_ = _si_ + _les_)
+ `obj:advneg`: contracted `negation` and `obj` (eg. _nes_ = _ne_ + _les_)
+ `obj:obl`: contracted `obl` and `obj` (eg. _oul_ = _ou_ + _le_)
+ `obl:advmod`: the double labelling accounts for the difficulty to decide between obl and advmod relations (`en` and `i`).

## Treebanks

There is [1](../treebanks/fro-comparison.html) Old French UD treebank:

  * [fro-srcmf](../treebanks/fro_srcmf/index.html)
