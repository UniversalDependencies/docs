---
layout: base
title:  'Egyptian UD'
udver: '2'
---

# UD for Egyptian <span class="flagspan"><img class="flag" src="../../flags/svg/EG.svg" /></span>

This is an overview based on the works cited in the README bibliography. Please note that this is a work in progress. It is planned to publish a detailed description for each stage of Egyptian.

## Tokenization and Word Segmentation

Egyptian is divided into two main stages, Earlier Egyptian, which includes Old Egyptian and Middle Egyptian, and Later Egyptian, which includes Late Egyptian, Demotic and Coptic (for the latter see the language page for Coptic in UD). Earlier Egyptian is characterized by a synthetic syntax and Later Egyptian by an analytic syntax. In general, hieroglyphic and hieratic script is used for Old Egyptian, Middle Egyptian and Late Egyptian, while Demotic is written in demotic script. No whitespace is used to separate word in these scripts. 

Egyptian texts are annotated with Transcription characters. The Tübingen transcription system is used in the UD_Egyptian-UJaen treebank (see README). Classifiers are not annotated in the transcription of Egyptian texts because they have no phonetic value or because they repeat sounds expressed in the word, as phonetic classifiers do.

Words are separated by a whitespace in the transcription of Egyptian texts. A dot is used to separate the ending of a word from its stem, cf: nb.t "mistress" and nb "lord".
Suffix pronouns are attached to the word they follow by means of two diagonal parallel lines (⸗), for example: nb.t ⸗f "his mistress".
Compounds and fixed multiword expressions are connected by a hyphen, for example titles such as ẖri҆-ḥꜣb.t "lector priest" and complex prepositions, for example m-ḫt “behind”. A hyphen is also used to separate the man-impersonal noun ti҆/tw from a verb form, for example: pr-tw “one shall go”.
Brackets () indicate the omission of an element in the text and square brackets [] the restoration of the text. Curly brackets {} enclose typographical errors in the text and <> indicate an emended element in the text.


## Morphology

### Tags

*

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

There is [1](../treebanks/egy-comparison.html) Egyptian UD treebank:

  * [Egyptian-UJaen](../treebanks/egy_a/index.html)

---
**Instruction**: Treebank-specific pages are generated automatically from the README file in the treebank repository and
from the data in the latest release. Link to the respective `*-index.html` page in the `treebanks` folder, using the language code
and the treebank code in the file name.

---
