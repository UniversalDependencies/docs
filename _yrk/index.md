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

### Tags

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
* In Tundra Nenets, there are no articles. The DET tag is assigned to a relatively small set of items traditionally classified as determiners in grammars. These elements characterise the head noun in terms of deixis and definiteness.
* Nonfinite verb forms in Tundra Nenets are formed by adding suffixes to verb stems. In the treebank, we differentiate between various forms of participles (tagged as ADJ), converbs (tagged as ADV), and action nouns (tagged as NOUN).
* X is used for spoken language peculiarities, like noise or pause.

### Features

* Nouns in Tundra Nenets inflect for Number (singular, dual, or plural) and Case (nominative, accusative, genitive, locative, dative, ablative, and prolative). They also take Subject Agreement markers (person and number) and a Past Tense marker when functioning as predicates (the agreement marker is attached to nouns even when an overt copula is present). Possession is indicated by possessive suffixes that mark the person and number of the possessor, and nouns may also take predestinative suffixes.
- Finite Verbs obligatorily inflect for Subject Agreement, marking the person and number of the subject; additionally, transitive verbs can inflect for both the person-number of the subject and the number of the Object. Verbs are also inflected for Tense (present/aorist, past, future, habitual, future-in-the-past) and Mood (imperative, hortative, jussive, subjunctive, apprehensive, necessitative, potential, inferential, reportative, interrogative, dubitative, probabilitative, approximative, and reputative). There are four types of nonfinite verb forms: participles (continuative, perfect, prospective), converbs (general, purposive/supine, evasive, conditional), action nouns (contemporaneous, prior), and a connegative form (used with negative auxiliaries).
* Within the noun phrase, there is no concord; thus, Adjectives do not agree with nouns. However, Adjectives can inflect for Number (singular, dual, plural), Case (nominative, accusative, genitive, locative, dative, ablative, prolative), Possession, and Predestinatives in elliptical constructions. When functioning as predicates, adjectives also take Subject Agreement markers (person and number) and a Past Tense marker (agreement is marked even in the presence of an overt copula).
* Personal pronouns have a separate set for nominative and accusative Case.
* Adpositions can take Case markers (genitive, locative, dative, ablative, and prolative) and may also bear possessive suffixes.

---

---

## Syntax

*

---
**Instruction**: Give criteria for identifying core arguments (subjects and objects), and describe the range of copula constructions in nonverbal clauses. List all subtype relations used. Include links to language-specific relations definitions if any.

---

## Treebanks

There is 1 Nenets UD treebank:

  * [Nenets-Tundra](../treebanks/yrk_tundra/index.html)
