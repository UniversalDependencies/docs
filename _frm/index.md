---
layout: base
title:  'Middle French UD'
udver: '2'
---

# UD for Middle French <span class="flagspan"><img class="flag" src="../../flags/svg/FR-ROYAL.svg" /></span>

## Tokenization and Word Segmentation

Middle French tokenization is mostly based on whitespaces and punctuation.
Some work is still needed for a complete analysis of fused forms such as "dudit" = "de ledit" (ADP+DET) along the UD guidelines. 

---
**Instruction**: Describe the general rules for delimiting words (for example, based on whitespace and punctuation) and exceptions to these rules. Specify whether words with spaces and/or multiword tokens occur. Include links to further language-specific documentation if available.

---

## Morphology

### Tags

* ``PART`` is unused in Middle French.
  
* Participles are tagged as ``VERB``.

---
**Instruction**: Specify any unused tags. Explain what words are tagged as PART. Describe how the AUX-VERB and DET-PRON distinctions are drawn, and specify whether there are (de)verbal forms tagged as ADJ, ADV or NOUN. Include links to language-specific tag definitions if any.

---

### Features

* Morphological annotation is not complete yet. Features that were automatically derivable from the original CATTEX tags are included in the morphological features. Those includes ``PronType``, ``NumType``, ``Tense``, ``VerbForm``, ``Poss`` and ``Definite``. However, ``Number``, ``Gender`` and ``Person`` that are important features in Middle French are not yet annotated.

---
**Instruction**: Describe inherent and inflectional features for major word classes (at least NOUN and VERB). Describe other noteworthy features. Include links to language-specific feature definitions if any.

---

## Syntax

* By the Middle French period, the language is already mostly SOV which helps in identifying core arguments. When this is not the case, verbal agreement can help, even though semantic agreement also occurs. We thus find in the great chronicles :
  "... le jour de Pasques, qui furent le Ve jour d'avril ..." (the day of Easter, that were the 5th day of April),
because Pasques (Easter) is a plural even though the syntactic subject "jour" is a singular.

---
**Instruction**: Give criteria for identifying core arguments (subjects and objects), and describe the range of copula constructions in nonverbal clauses. List all subtype relations used. Include links to language-specific relations definitions if any.

---

## Treebanks

There are [1](../treebanks/frm-comparison.html) Middle French UD treebanks:

  * [Middle French-PROFITEROLE](../treebanks/frm_profiterole/index.html)

---
**Instruction**: Treebank-specific pages are generated automatically from the README file in the treebank repository and
from the data in the latest release. Link to the respective `*-index.html` page in the `treebanks` folder, using the language code
and the treebank code in the file name.

---
