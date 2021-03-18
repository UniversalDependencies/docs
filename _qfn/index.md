---
layout: base
title:  'Frisian Dutch UD'
udver: '2'
---

# UD for Frisian Dutch <span class="flagspan"><img class="flag" src="../../flags/svg/NL-FR.svg" /></span>

## Tokenization and Word Segmentation

* Words are delimited based on whitespace and spaces do not occur within words
* Abbreviations that consist of characters are splitted with a whitespace (e.g. V N)
* There is no punctuation, because the only Frisian Dutch treebank consists of transcribed spoken data

---

## Morphology

### Tags

* All tags are used except for `PART`, `PUNCT` and `SYM`
* `AUX` is used when:
  * a copula verb is used (according to Dutch grammar: 'zijn', 'worden', 'blijven', 'blijken', 'lijken', 'shijnen', 'heten', 'dunken', 'voorkomen' or the corresponding Frisian translation)
  * a property is assigned to the subject
* For other verbs `VERB` is used
* `DET` is used as a determiner in front of a noun (phrase). These include 'de', 'het'/'it', 'een'/'in'. 

### Features
* There are no annotations for morphological features in this release.

---

## Syntax

* As the data in the Fame treebank is transcribed spoken speech, some sentences seem to have a 'non-standard' ending. For this we use the `orphan` relation. If possible `orphan` is attached to the root. If this results in a validation error we attach `orphan` to the highest node available.
* `discourse` is always attached to the highest node without any projectivity. It is typically used for interjections and discourse elements (e.g. 'eh').
* The subject is identified as the entity that performs an action. Objects are the entities that receive the actions and indirect objects are recipients.
* Standard dependency relations are used.
* Included subtypes:
  * `aux:pass`: auxiliary in passives
  * `compound:prt`: particle verbs
  * `flat:name`: multiword proper names
  * `nmod:poss`: possessives
  * `nsubj:pass`: subject in passives
  * `obl:tmod`: temporal modifier


---

## Treebanks

There is [1](../treebanks/qfn-comparison.html) Frisian Dutch UD treebanks:

  * [UD_Frisian_Dutch-Fame](../treebanks/qfn_a/index.html)


---

