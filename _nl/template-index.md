---
layout: base
title:  'Dutch UD'
udver: '2'
---

# UD for Dutch <span class="flagspan"><img class="flag" src="../../flags/svg/NL.svg" /></span>

## Tokenization and Word Segmentation


* Words are delimited by whitespace or punctuation
* Words do not contain spaces
* Words (e.g. abbreviations, names, URLs etc.) may contain arbitrary punctuation signs
* No multiword tokens occur

---
**Instruction**: Describe the general rules for delimiting words (for example, based on whitespace and punctuation) and exceptions to these rules. Specify whether words with spaces and/or multiword tokens occur. Include links to further language-specific documentation if available.


---

## Morphology


### Tags

* All tags are used except PART.
* AUX is used for 
    * perfect tense auxiliaries _hebben_ and _zijn_
    * the passive tense auxiliary _worden_
    * the modal verbs _kunnen, zullen, moeten, mogen, blijken, hoeven_ (The treebank annotation on which the conversion to UD is based does not distinguish between auxiliaries and main verbs. Here we take a conservative approach in labeling modals as auxiliaries. )
    * the copula verbs _zijn, worden, blijven, heten, blijken and lijken_ (These are the Dutch copula verbs according to Dutch grammar, excluding cases where the copula takes an additional (non-subject, non-predicative) argument)
    

---
**Instruction**: Specify any unused tags. Explain what words are tagged as PART. Describe how the AUX-VERB and DET-PRON distinctions are drawn, and specify whether there are (de)verbal forms tagged as ADJ, ADV or NOUN. Include links to language-specific tag definitions if any.

---

### Features

*

---
**Instruction**: Describe inherent and inflectional features for major word classes (at least NOUN and VERB). Describe other noteworthy features. Include links to language-specific feature definitions if any.

---

## Syntax

*

---
**Instruction**: Give criteria for identifying core arguments (subjects and objects), and describe the range of copula constructions in nonverbal clauses. List all subtype relations used. Include links to language-specific relations definitions if any.

---

## Treebanks

There are [N](../treebanks/LCODE-comparison.html) LANGUAGE UD treebanks:

  * [LANGUAGE-A](../treebanks/LCODE_a/index.html)
  * [LANGUAGE-B](../treebanks/LCODE_b/index.html)

---
**Instruction**: Treebank-specific pages are generated automatically from the README file in the treebank repository and
from the data in the latest release. Link to the respective `*-index.html` page in the `treebanks` folder, using the language code
and the treebank code in the file name.

---
