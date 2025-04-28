---
layout: base
title:  'Nenets UD'
udver: '2'
---

# UD for Nenets <span class="flagspan"><img class="flag" src="../../flags/svg/RU-NEN.svg" /></span>

## Tokenization and Word Segmentation

* The tokenization in the Tundra Nenets treebank follows the principles of the Universal Dependencies (UD) framework, with adaptations for spoken language data.
* Tokenization was performed manually, guided by both the phonological realisation and the syntactic structure of the utterances.
* Word segmentation is based on the standard orthography of Tundra Nenets and is applied consistently across the corpus. Words are delimited by whitespace characters.
* The transcription of the spoken material is based on written standards and conventional orthography, rather than a phonetic or IPA transcription.
* Bound morphemes, such as suffixes and clitics, are not split during tokenization. Instead, internal morphological information (e.g., agreement, case, tense, mood) is encoded in the MISC features as morphological glosses. Gloss labels follow the recommendations of the Leipzig Glossing Rules.
* Punctuation is tokenized and annotated based on the prosodic and discourse features of the spoken data. Prosodic boundaries corresponding to punctuation are explicitly marked with a special SIL (silence) label and assigned a PUNCT part-of-speech tag.
* Non-standard phenomena typical of spoken language (e.g., false starts, repetitions, disfluencies) are tokenized, ensuring that the treebank accurately reflects the characteristics of spoken Tundra Nenets while maintaining maximal syntactic transparency.


---
**Instruction**: Describe the general rules for delimiting words (for example, based on whitespace and punctuation) and exceptions to these rules. Specify whether words with spaces and/or multiword tokens occur. Include links to further language-specific documentation if available.

---

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

There is 1 Nenets UD treebank:

  * [Nenets-Tundra](../treebanks/yrk_tundra/index.html)
