---
layout: base
title:  'Old Turkish UD'
udver: '2'
---

# UD for Old Turkish <span class="flagspan"><img class="flag" src="../../flags/svg/TURKIC.svg" /></span>

UD Old Turkish is an effort to digitize and annotate (or annotate from existing digitization) existing, or structurally constructed to be coherent and fit, Old Turkic script texts. Having all corpus in Old Turkic script is a precondition for this language. This document intends to be rough than precise because the approach of annotation can change drastically over time.

## Tokenization and Word Segmentation

* The only guarantee is that colon punctuation (which roughly functions like whitespace) delimits letters before it, but that does not guarantee that letters ranged by two colons constitute a one-word unit.
* For the subtleties, with respect to word segmentation, everything is an exact match to the reference work "Ahmet Bican Ercilasun, Türk Kağanlığı ve Türk Bengü Taşları, Dergâh Yayınları."
* Treebanks should treat whitespace as an individual character and not implicitly have it by resorting to `SpaceAfter=Yes` (or by not specifying `SpaceAfter=No`).

<!---
**Instruction**: Describe the general rules for delimiting words (for example, based on whitespace and punctuation) and exceptions to these rules. Specify whether words with spaces and/or multiword tokens occur. Include links to further language-specific documentation if available.

--->

## Morphology

### Tags

Current corpora make use of only 13 tags. The plan is to use 16 except for X.

<!---
**Instruction**: Specify any unused tags. Explain what words are tagged as PART. Describe how the AUX-VERB and DET-PRON distinctions are drawn, and specify whether there are (de)verbal forms tagged as ADJ, ADV or NOUN. Include links to language-specific tag definitions if any.

--->

### Features

* TODO

<!---
**Instruction**: Describe inherent and inflectional features for major word classes (at least NOUN and VERB). Describe other noteworthy features. Include links to language-specific feature definitions if any.

--->

## Syntax

* TODO

<!---
**Instruction**: Give criteria for identifying core arguments (subjects and objects), and describe the range of copula constructions in nonverbal clauses. List all subtype relations used. Include links to language-specific relations definitions if any.

--->

## Treebanks

There is [one](../treebanks/otk-comparison.html) Old Turkish UD treebank:

  * [Old Turkish-Tonqq](../treebanks/otk_tonqq/index.html)

<!---
**Instruction**: Treebank-specific pages are generated automatically from the README file in the treebank repository and
from the data in the latest release. Link to the respective `*-index.html` page in the `treebanks` folder, using the language code
and the treebank code in the file name.

--->
