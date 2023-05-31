---
layout: base
title:  'Bhojpuri UD'
udver: '2'
---

# UD for Bhojpuri <span class="flagspan"><img class="flag" src="../../flags/svg/IN.svg" /></span>


## Tokenization and Word Segmentation

* In general, words are delimited by whitespace characters. Description of exceptions follows.
* According to typographical rules, some punctuation marks (e.g., comma) are attached to a neighboring word,
  while others (e.g., the sentence-terminating danda) are not.
  We tokenize punctuation as separate tokens (words).


## Morphology

### Tags

* Bhojpuri uses all 17 universal POS categories, including particles ([PART]()).
* Bhojpuri has the following auxiliary verbs ([AUX]()):
  * हऽ _ha’_, आ _ā_, स _sa_, बा _bā_, छी _chi_, भा _bhā_ and ना _nā_ are equivalents of “to be”. They are used as copulas and in periphrastic tenses.
  * गइल _gaila_ for the past tense.
  * रह _raha_ (“to stay”) for the progressive aspect (with the stem of the main verb and the auxiliary).
  * कर _kara_ (“to do”) for the habitual aspect (with the perfective participle of the main verb).
  * जा _jā_ (“to go”) for the passive (with the perfective participle of the main verb).
  * Modal auxiliaries:
    * सक _saka_ (“be able, can”) <!-- Page 153. -->
    * पा _pā_ (“to manage”) <!-- Page 153. -->
    * चाही _cāhī_ (“needed, should, ought to”)
    * हो _ho_ (“to have to”) <!-- Page 165. -->
    * पड़ _paṛa_ (“must”) <!-- Pages 165, 166. -->
  * Phase verbs:
    * लग _laga_ (“to start”) <!-- Page 171 is mostly about other meaning, to strike, to like. -->
    * चुक _cuka_ (“to finish”) <!-- Page 153. -->
  * The current data treats as auxiliaries also some verbs that regularly appear in compound verbs
    as the semantically less salient element. Since compound verbs are not periphrastic tense/aspect/voice
    forms, these verbs do not fit well in the UD definition of auxiliaries, and they should be given
    a different analysis in the future releases. The following verbs are used as semantic auxiliaries
    in compound verbs:
    * जा _jā_ (“to go”) (note that this verb can also be used as real auxiliary in passives)
    * ले _le_ (“to take”)
    * दे _de_, मार _mār_ (“to give”)
    * डाल _ḍāla_ (“to throw”) <!-- The second batch of compound verbs is described on pages 220–222. To throw gives a sense of vigorousness. -->
    * पड़ _paṛa_ (“to fall”) (note that this verb can also be used as modal “must”) <!-- Adds a sense of suddenness or change of state. -->
    * बैठ _baiṭha_ (“to sit”) <!-- Adds a sense of foolishness or stubbornness. -->
    * उठ _uṭha_ (“to rise”)
    * रख _rakha_ (“to keep”) <!-- Adds a sense of firmness. -->
    * आ _ā_ (“to come”)

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

There is only one Bhojpuri UD treebank at present:

  * [Bhojpuri-BHTB](../treebanks/bho_bhtb/index.html)
