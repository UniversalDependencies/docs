---
layout: base
title:  'Old Occitan UD'
udver: '2'
---

# UD for Old Occitan <span class="flagspan"><img class="flag" src="../../flags/svg/FR-OCC.svg" /></span>
Old Occitan is a Romance language spoken and written in the Middle Ages and the early Modern period across the south of contemporary France and in several areas of Italy and Spain. Old Occitan shares numerous linguistic properties with several other Romance languages (e.g. number and gender marks). It is a pro-drop language with relatively free word order.

## Tokenization and Word Segmentation
White spaces in the editions of medieval texts are used as token delimiters. However, whenever a preposition and a determiner are contracted in one word, a multiword token is created.

For example: *del* (*de-* + *-lo*), *dels* (*de-* + *-los*).


## Morphology

### Tags

All UD tags are allowed for Old Occitan.

In Old Gascon, the emerging enunciative particle "que" signalling an affirmative sentence is annotated as PART.
As in Modern Occitan, only the verbs "to have" (aver) and "to be" (esser) are considered auxiliaries.
Participles without dependents are annotated as ADJ.


### Features

Like Modern Occitan, Old Occitan displays number (singular and plural) and gender (masculin and feminine) marks on all members of the NP, and the finite verbs are marked for tense, person and number.


## Syntax

Old Occitan is a pro-drop language with relatively free word order.

The verbs *eser* and *aver* function as auxiliaries.
The verb *eser* is used as the passive auxiliary and the copula.

Among subtypes of dependency relations, *acl:relcl* is used for relative clauses modifying a noun or a pronoun, *aux:pass* is used for passive auxiliaries.

[discourse:enunc]()  is a language-specific dependency used for Old Gascon (a variant of Old Occitan):  links the enunciative particle to the head of the clause in which it appears.


## Treebanks

There are [2](../treebanks/pro-comparison.html) Old Occitan UD treebanks:

  * [Old Occitan-CorAG](../treebanks/pro_corag/index.html)
  * [Old Occitan-OOT](../treebanks/pro_oot/index.html)
