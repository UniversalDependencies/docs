---
layout: base
title:  'Paumari UD'
udver: '2'
---

# UD for Paumari <span class="flagspan"><img class="flag" src="../../flags/svg/BR.svg" /></span>

## Tokenization and Word Segmentation

*

---
**Instruction**: Describe the general rules for delimiting words (for example, based on whitespace and punctuation) and exceptions to these rules. Specify whether words with spaces and/or multiword tokens occur. Include links to further language-specific documentation if available.

- In general, words are delimited by whitespace characters.
- Every sentence has a special line in the comment section named 'text_seg' that states morpheme boundaries within words. This layer is taken from the article on Paumari by Chapman and Derbyshire in the Handbook of Amazonian Languages (1991), Vol.3 (https://doi.org/10.1515/9783110854374).

---

## Morphology

### Tags

*

---
**Instruction**: Specify any unused tags. Explain what words are tagged as PART. Describe how the AUX-VERB and DET-PRON distinctions are drawn, and specify whether there are (de)verbal forms tagged as ADJ, ADV or NOUN. Include links to language-specific tag definitions if any.

- CCONJ is not used. According to the glosses used in Chapman and Derbyshire (1991), conjunctions are not overtly expressed but rather inferred from context.
- Moreover, no word is tagged as PART, SYM or X.
- The remaining other 13 universal tags are used.
- All auxiliaries (AUX) are verbal and can be divided into two categories:
	- The standard auxiliaries 'hi' and 'ni' which both can be translated as 'be' (see Chapman and Derbyshire (1991, chpt. 18.8) for more detailed information). 
	- The copula 'mani', which can also be translated as 'be'.
- Whenever in the handbook article by Chapman and Derbyshire (1991) there is the gloss 'DEM' (short for 'demonstrative') and there is a corresponding noun within the same clause, the tag DET is used here. If a corresponding noun as the head of a clause is missing, the tag PRON is used.

- deverbal forms of ADJ, ADV or NOUN?!?!?

---

### Features

*

---
**Instruction**: Describe inherent and inflectional features for major word classes (at least NOUN and VERB). Describe other noteworthy features. Include links to language-specific feature definitions if any.

- At its current state, this treebank does not have any annotation of morphological features other than indicated via the information provided in the lines 'text_seg' and 'hb_glosses' in the comment section of each conllu representation.

---

## Syntax

*

---
**Instruction**: Give criteria for identifying core arguments (subjects and objects), and describe the range of copula constructions in nonverbal clauses. List all subtype relations used. Include links to language-specific relations definitions if any.

---

## Treebanks

There are [N](../treebanks/pad-comparison.html) Paumari UD treebanks:

  * [Paumari-A](../treebanks/pad_a/index.html)
  * [Paumari-B](../treebanks/pad_b/index.html)

---
**Instruction**: Treebank-specific pages are generated automatically from the README file in the treebank repository and
from the data in the latest release. Link to the respective `*-index.html` page in the `treebanks` folder, using the language code
and the treebank code in the file name.

---
