---
layout: base
title:  'Hindi UD'
udver: '2'
---

# UD for Hindi <span class="flagspan"><img class="flag" src="../../flags/svg/IN.svg" /></span>

## Tokenization and Word Segmentation

* In general, words are delimited by whitespace characters. Description of exceptions follows.
* According to typographical rules, some punctuation marks (e.g., comma) are attached to a neighboring word,
  while others (e.g., the sentence-terminating danda) are not.
  We tokenize punctuation as separate tokens (words).

## Morphology

### Tags

* Hindi uses all 17 universal POS categories, including particles ([PART]()).
* Hindi has the following auxiliary verbs ([AUX]()): <!-- In Hindi by Rupert Snell, see also Appendix 7 on pages 258, 259. -->
  * है _hai_ and था _thā_ are present and past equivalents of “to be”.
    They are used as copulas and in periphrastic tenses.
  * रह _raha_ (“to stay”) for the progressive aspect (with the stem of the main verb and the auxiliary ह/था).
  * कर _kara_ (“to do”) for the habitual aspect (with the perfective participle of the main verb).
  * जा _jā_ (“to go”) for the passive (with the perfective participle of the main verb).
  * Modal auxiliaries:
    * सक _saka_ (“be able, can”) <!-- Page 153. -->
    * पा _pā_ (“to manage”) <!-- Page 153. -->
    * चाहिए _cāhie_ (“needed, should, ought to”) <!-- Page 91, 164. -->
    * हो _ho_ (“to have to”) <!-- Page 165. -->
    * पड़ _paṛa_ (“must”) <!-- Pages 165, 166. -->
* There are other verbs that are **not** auxiliaries under the UD definition, although some authors
  would call them auxiliaries outside the UD context. Some of them regularly appear in compound
  verbs as the semantically less salient element, others are control and raising verbs. Some
  examples follow:
  * लग _laga_ (“to start”) <!-- Page 171 is mostly about other meaning, to strike, to like. -->
  * चुक _cuka_ (“to finish”) <!-- Page 153. -->
  * जा _jā_ (“to go”) (note that this verb can also be used as real auxiliary in passives)
  * ले _le_ (“to take”)
  * दे _de_ (“to give”)
  * डाल _ḍāla_ (“to throw”) <!-- The second batch of compound verbs is described on pages 220–222. To throw gives a sense of vigorousness. -->
  * पड़ _paṛa_ (“to fall”) (note that this verb can also be used as modal “must”) <!-- Adds a sense of suddenness or change of state. -->
  * बैठ _baiṭha_ (“to sit”) <!-- Adds a sense of foolishness or stubbornness. -->
  * उठ _uṭha_ (“to rise”)
  * रख _rakha_ (“to keep”) <!-- Adds a sense of firmness. -->
  * आ _ā_ (“to come”)

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

There are [2](../treebanks/hi-comparison.html) Hindi UD treebanks:

  * [Hindi-HDTB](../treebanks/hi_hdtb/index.html)
  * [Hindi-PUD](../treebanks/hi_pud/index.html)
