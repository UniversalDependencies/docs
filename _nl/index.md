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
* DET is used for words that are part of a noun phrase and function as determiner. They are:
   * words that have pt=lid in the original data. These are words traditionally seen as determiners in Dutch
   * words that have pt=vnw and rel=det and not vwtype=bez in the original data. These are pronominal forms functioning as determiner, with the exception of possessive pronouns (which are labeled PRON)
* PRON is used for non-adverbial pronominal elements. They are: 
   * words with pt=vnw in the original annotation that do not function as determiner and that are not of pdtype=adv-pron.
* VERB is used for words labeled pt=ww in the original data and that are not AUX. Note that according to this method, in nominalizations, the head is a VERB. 
* ADJ is used for words labeled pt=adj in the original data.
* NOUN is used for words labeled pt=n in the original data that do not have ntype=deeleigen. (The latter are part of a proper name and are labeled PROPN)
    
Detailed documentation of the decisions w.r.t. POS-tags in the original data can be found in the [D-COI POS-tagging and lemmatization manual](https://www.let.rug.nl/vannoord/Lassy/POS_manual.pdf)

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

There are [2](../treebanks/nl-comparison.html) Dutch UD treebanks:

  * [UD_Dutch-Alpino](../treebanks/nl_alpino/index.html)
  * [UD_Dutch-LassySmall](../treebanks/nl_lassysmall/index.html)

---
**Instruction**: Treebank-specific pages are generated automatically from the README file in the treebank repository and
from the data in the latest release. Link to the respective `*-index.html` page in the `treebanks` folder, using the language code and the treebank code in the file name.

---
