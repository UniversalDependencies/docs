---
layout: base
title:  'Old Turkish UD'
udver: '2'
---

# UD for Old Turkish <span class="flagspan"><img class="flag" src="../../flags/svg/TURKIC.svg" /></span>

UD Old Turkish is an effort to digitize and annotate (or annotate from existing digitization) existing, or structurally constructed to be coherent and fit, Old Turkic, Old Uyghur, and Arabic script texts. Having all corpus in the respective script of a given script as-is is a precondition for this language. This document intends to be rough than precise because the approach of annotation can change drastically over time.

## Tokenization and Word Segmentation

* The only guarantee is that colon punctuation (which roughly functions like whitespace) delimits letters before it, but that does not guarantee that letters ranged by two colons constitute a one-word unit.
* For the subtleties, with respect to word segmentation, everything is an exact match to the reference work "Ahmet Bican Ercilasun, Türk Kağanlığı ve Türk Bengü Taşları, Dergâh Yayınları."
* Treebanks should treat whitespace as an individual character and not implicitly have it by resorting to `SpaceAfter=Yes` (or by not specifying `SpaceAfter=No`).

## Morphology

### Tags

Current corpora make use of only 13 tags. The plan is to use 16 except for X.

### Features

* TODO

## Syntax

* TODO

## Treebanks

There is 1 Old Turkish UD treebank:

  * [Old Turkish-Clausal](../treebanks/otk_clausal/index.html)
