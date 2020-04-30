---
layout: base
title:  'Old French UD'
udver: '2'
---

# UD for Old French <span class="flagspan"><img class="flag" src="../../flags/svg/FR-ROYAL.svg" /></span>

## Tokenization and Word Segmentation

* Words are delimited by whitespace or punctuation
* Contractions such as _sin_ = _si_ + _en_ are rendered as single words instead of multiword tokens, though this will probably change in the future

## Morphology

The following custom morphological features are used

+ Morph=VFin : finite verb
+ Morph=VInf : non finite verb
+ Morph=VPar : verbal participle
+ Polarity=Int : interrogative
+ PronType=Ord : numeral

## Syntax

The following relation subtypes are used

+ `acl:relcl` : relative clause
+ `advmod:obl` : contracted `advmod` + `obl` (eg. _sin_ = _si_ + _en_)
+ `aux:pass` : passive auxiliary
+ `case:det` : contracted `case` + `det` (eg. _del_ = _de_ + _le_)
+ `cc:nc` : non coordinating conjunction (eg. _et_ at the beginning of a sentence)
+ `mark:advmod` : `mark` and `advmod` (eg. _coment_ at the beginning of a subordinate clause)
+ `mark:obj` : `mark` and `obj` (eg. relative pronoun _que_)
+ `mark:obl` : `mark` and `obl` (eg. relative pronoun _cui_ / _qui_ )
+ `nmod:appos`
+ `nsubj:advmod` : contracted `nsubj` + `advmod` (eg. _jon_ = _jo_ + _en_)
+ `nsubj:obj` : contracted `nsubj` + `obj` (eg. _quil_ = _qui_ + _le_)
+ `obj:advmod` : contracted `advmod` + `obj` (eg. _sis_ = _si_ + _les_)
+ `obj:advneg` : contracted `negation` + `obj` (eg. _nes_ = _ne_ + _les_)
+ `obj:obl` : contracted `obl` + `obj` (eg. _oul_ = _ou_ + _le_)
+ `obl:advmod `: the double labelling accounts for the difficulty to decide between obl and advmod relations (`en` and `i`).
+ `obl:mod`

## Treebanks

There is [1](../treebanks/fro-comparison.html) Old French UD treebank:

  * [fro-srcmf](../treebanks/fro_srcmf/index.html)
