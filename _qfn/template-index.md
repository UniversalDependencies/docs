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
**Instruction**: Describe the general rules for delimiting words (for example, based on whitespace and punctuation) and exceptions to these rules. Specify whether words with spaces and/or multiword tokens occur. Include links to further language-specific documentation if available.

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
**Instruction**: Specify any unused tags. Explain what words are tagged as PART. Describe how the AUX-VERB and DET-PRON distinctions are drawn, and specify whether there are (de)verbal forms tagged as ADJ, ADV or NOUN. Include links to language-specific tag definitions if any.

---

### Features

*

---
**Instruction**: Describe inherent and inflectional features for major word classes (at least NOUN and VERB). Describe other noteworthy features. Include links to language-specific feature definitions if any.

---

## Syntax

* The standard dependency relations are used. Included subtypes are `aux:pass` for passives, `compound:prt` for particle verbs , `flat:name` for multiword proper names, `nmod:poss` for possessive, `nsubj:pass` for passives and `obl:tmod` for a temporal modifier.

---
**Instruction**: Give criteria for identifying core arguments (subjects and objects), and describe the range of copula constructions in nonverbal clauses. List all subtype relations used. Include links to language-specific relations definitions if any.

---

## Treebanks

There is [1](../treebanks/qfn-comparison.html) Frisian Dutch UD treebanks:

  * [UD_Frisian_Dutch-Fame](../treebanks/qfn_a/index.html)


---
**Instruction**: Treebank-specific pages are generated automatically from the README file in the treebank repository and
from the data in the latest release. Link to the respective `*-index.html` page in the `treebanks` folder, using the language code
and the treebank code in the file name.

---
