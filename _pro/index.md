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
As in Modern Occitan, only the verbs "to have" (aver) and "to be" (èser, modern "esser") are considered auxiliaries.
Participles without dependents are annotated as ADJ.


### Features

In the CorAG treebank, finite verbs and auxiliaries are annotated in VerbForm - inifinitives, participles and conjugated forms (Inf, Part and Fin). Finite verbs are annotated in person and number (Person: 1, 2 or 3; Number: Sing or Plur). Annotation of finite verbs in Mood and Tense is underway. Participles are annotated in Tense (Pres, Past and Fut) and Number (Sing or Plur) and Gender (Masc or Fem).

Pronouns are annotated in type (PronType: Dem for demonstrative, Ind for indefinite, Prs for personal and Rel for relative). Reflexive and possessive pronouns are also tagged (Reflexive=Yes and Poss=Yes).

## Syntax

Old Occitan is a pro-drop language with relatively free word order.

The verbs *eser* and *aver* function as auxiliaries.
The verb *eser* is used as the passive auxiliary and the copula.

Among subtypes of dependency relations, *acl:relcl* is used for relative clauses modifying a noun or a pronoun, *aux:pass* is used for passive auxiliaries.

[discourse:enunc](https://github.com/UniversalDependencies/docs/blob/pages-source/_pro/dep/discourse-enunc.md)  is a language-specific dependency used for Old Gascon (a variant of Old Occitan):  links the enunciative particle to the head of the clause in which it appears.


## Treebanks

There are [2](../treebanks/pro-comparison.html) Old Occitan UD treebanks:

  * [Old Occitan-CorAG](../treebanks/pro_corag/index.html)
  * [Old Occitan-OOT](../treebanks/pro_oot/index.html)
