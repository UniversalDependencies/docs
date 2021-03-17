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


---

## Syntax

* The standard dependency relations are used. Included subtypes are `aux:pass` for passives, `compound:prt` for particle verbs , `flat:name` for multiword proper names, `nmod:poss` for possessive, `nsubj:pass` for passives and `obl:tmod` for a temporal modifier.


---

## Treebanks

There is [1](../treebanks/qfn-comparison.html) Frisian Dutch UD treebanks:

  * [UD_Frisian_Dutch-Fame](../treebanks/qfn_a/index.html)


---

