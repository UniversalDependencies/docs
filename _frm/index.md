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

* All UD tags are allowed but ``PART`` is not used in Middle French.

* Participles are tagged as ``VERB`` even when they do not have dependents.


### Features

* Morphological annotation is not complete yet. Features that were automatically derivable from the original CATTEX tags are included in the morphological features. Those includes ``PronType``, ``NumType``, ``Tense``, ``VerbForm``, ``Poss`` and ``Definite``. However, ``Number``, ``Gender`` and ``Person`` that are important features in Middle French are not yet annotated.

* In the [Middle French-ALTM](https://github.com/UniversalDependencies/UD_Middle_French-ALTM) treebank, verbs and auxiliaries are annotated in verb forms (VerbForm): Inf (infinitive), Fin (conjugated) and Part (participle). Congujated forms are annotated in Person (1, 2 or 3) and Number (Sing or Masc). Participles are annotated in Tense (Past or Present) Pronouns are annotated in type (PronType: Dem for demonstrative, Ind for indefinite, Prs for personal and Rel for relative). Reflexive and possessive pronouns are also tagged (Reflexive=Yes and Poss=Yes). Determiners are tagged using PronType (Art for article, Dem for demonstrative, Ind for indefinite); possessive determiners have Poss=Yes. Ordinal numerals (tagged as ADJ) bear the feature NumType=Ord, cardinal numerals (annotated as NUM) are tagged NumType=Card.


## Syntax

* By the Middle French period, the language is already mostly SOV which helps in identifying core arguments. When this is not the case, verbal agreement can help, even though semantic agreement also occurs. We thus find in the great chronicles :
  "... le jour de Pasques, qui furent le Ve jour d'avril ..." (the day of Easter, that were the 5th day of April),
because Pasques (Easter) is a plural even though the syntactic subject "jour" is a singular.

* A noun may have two determiners, e.g. when an indefinite determiner is used together with an article or a possessive determiner

~~~ sdparse
tout son ost
det(ost, tout)
det(ost, son)
~~~

## Treebanks

There are [2](../treebanks/frm-comparison.html) Middle French UD treebanks:

  * [Middle French-PROFITEROLE](../treebanks/frm_profiterole/index.html)
  * [Middle French-ALTM](../treebanks/frm_altm/index.html)
