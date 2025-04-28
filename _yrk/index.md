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

## Morphology
* Tundra Nenets uses 15 of the universal POS categories. These are as follows (in alphabetical order): ADJ, ADP, ADV, AUX, CCONJ, DET, INTJ, NOUN, NUM, PART, PRON, PROPN, PUNCT, VERB, and X.
* Auxiliaries are all verbal in Tundra Nenets. The following auxiliaries are found in the language:
    - Negative auxiliaries, which combine with the negated form of the lexical verb (connegative):
	   - the standard negative auxiliary: ни-
	   - the emphatic negative auxiliary: вуни-
	   - the prohibitive auxiliary: нё-
	   - the interrogative negative auxiliary: ханя- ‘how not’
	   - modal negative auxiliaries: я'ма- 'cannot, not able to', хаця- ‘almost doing something’
  - Modal auxiliaries, which combine with the converb and/or nominalized form of the lexical verb:
     тара- 'need'; харва 'want'; пира- 'can'
   - The copula ӈa- (be).
* Nonfinite verb forms in Tundra Nenets are formed by adding suffixes to verb stems. In the treebank, we differentiate between various forms of participles (tagged as ADJ), converbs (tagged as ADV), and action nouns (tagged as NOUN).
* X is used for spoken language peculiarities, like noise or pause.



### Tags

*

---

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
