---
layout: base
title:  'Middle French UD'
udver: '2'
---

# UD for Middle French <span class="flagspan"><img class="flag" src="../../flags/svg/FR-ROYAL.svg" /></span>

## Tokenization and Word Segmentation

Middle French tokenization is mostly based on whitespaces and punctuation.
Some work is still needed for a complete analysis of fused forms such as "dudit" = "de ledit" (ADP+DET) along the UD guidelines.


## Morphology

### Tags

* ``PART`` is unused in Middle French.

* Participles are tagged as ``VERB``.


### Features

* Morphological annotation is not complete yet. Features that were automatically derivable from the original CATTEX tags are included in the morphological features. Those includes ``PronType``, ``NumType``, ``Tense``, ``VerbForm``, ``Poss`` and ``Definite``. However, ``Number``, ``Gender`` and ``Person`` that are important features in Middle French are not yet annotated.


## Syntax

* By the Middle French period, the language is already mostly SOV which helps in identifying core arguments. When this is not the case, verbal agreement can help, even though semantic agreement also occurs. We thus find in the great chronicles :
  "... le jour de Pasques, qui furent le Ve jour d'avril ..." (the day of Easter, that were the 5th day of April),
because Pasques (Easter) is a plural even though the syntactic subject "jour" is a singular.


## Treebanks

There are [2](../treebanks/frm-comparison.html) Middle French UD treebanks:

  * [Middle French-PROFITEROLE](../treebanks/frm_profiterole/index.html)
  * [Middle French-ALTM](../treebanks/frm_altm/index.html)
