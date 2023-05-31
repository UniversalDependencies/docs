---
layout: base
title:  'Urdu UD'
udver: '2'
---

# UD for Urdu <span class="flagspan"><img class="flag" src="../../flags/svg/PK.svg" /></span> <span class="flagspan" style="padding-left:1em"><img class="flag" src="../../flags/svg/IN.svg" /></span>

## Tokenization and Word Segmentation

* In general, words are delimited by whitespace characters. Description of exceptions follows.
* According to typographical rules, some punctuation marks (e.g., comma) are attached to a neighboring word,
  while others are not.
  We tokenize punctuation as separate tokens (words).

## Morphology

### Tags

* Urdu uses all 17 universal POS categories, including particles ([PART]()).
* Urdu has the following auxiliary verbs ([AUX]()): <!-- In Hindi by Rupert Snell, see also Appendix 7 on pages 258, 259. -->
  * ہے _hai_ and تھا _thā_ are present and past equivalents of “to be”.
    They are used as copulas and in periphrastic tenses.
  * رہ _rah_ (“to stay”) for the progressive aspect (with the stem of the main verb and the auxiliary ہے/تھا).
  * کر _kar_ (“to do”) for the habitual aspect (with the perfective participle of the main verb).
  * جا _jā_ (“to go”) for the passive (with the perfective participle of the main verb).
  * Modal auxiliaries:
    * سک _sak_ (“be able, can”) <!-- Page 153. -->
    * پا _pā_ (“to manage”) <!-- Page 153. -->
    * چاہیئے _cāhie_ (“needed, should, ought to”) <!-- Page 91, 164. -->
    * ہو _ho_ (“to have to”) <!-- Page 165. -->
    * پڑ _paṛ_ (“must”) <!-- Pages 165, 166. -->
* There are other verbs that are **not** auxiliaries under the UD definition, although some authors
  would call them auxiliaries outside the UD context. Some of them regularly appear in compound
  verbs as the semantically less salient element, others are control and raising verbs. Some
  examples follow:
  * لگ _lag_ (“to start”) <!-- Page 171 is mostly about other meaning, to strike, to like. -->
  * چک _cuk_ (“to finish”) <!-- Page 153. -->
  * جا _jā_ (“to go”) (note that this verb can also be used as real auxiliary in passives)
  * لے _le_ (“to take”)
  * دے _de_ (“to give”)
  * ڈال _ḍāl_ (“to throw”) <!-- The second batch of compound verbs is described on pages 220–222. To throw gives a sense of vigorousness. -->
  * پڑ _paṛ_ (“to fall”) (note that this verb can also be used as modal “must”) <!-- Adds a sense of suddenness or change of state. -->
  * بیٹھ _baiṭh_ (“to sit”) <!-- Adds a sense of foolishness or stubbornness. -->
  * اٹھ _uṭh_ (“to rise”)
  * رکھ _rakh_ (“to keep”) <!-- Adds a sense of firmness. -->
  * آ _ā_ (“to come”)

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

There is 1 Urdu UD treebank:

  * [Urdu-UDTB](../treebanks/ur_udtb/index.html)
