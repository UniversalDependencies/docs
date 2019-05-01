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
* Hindi has the following auxiliary verbs ([AUX]()):
  * है _hai_ and था _thā_ are present and past equivalents of “to be”.
    They are used as copulas and in periphrastic tenses.
  * रह _raha_ (“to stay”) for the progressive aspect (with the stem of the main verb and the auxiliary ह/था).
  * जा _jā_ (“to go”) for the passive (with the perfective participle of the main verb).
  * The current data treats as auxiliaries also some verbs that regularly appear in compound verbs
    as the semantically less salient element. Since compound verbs are not periphrastic tense/aspect/voice
    forms, these verbs do not fit well in the UD definition of auxiliaries, and they should be given
    a different analysis in the future releases. The following verbs are used as semantic auxiliaries
    in compound verbs:
    * जा _jā_ (“to go”) (note that this verb can also be used as real auxiliary in passives)
    * ले _le_ (“to take”)
    * दे _de_ (“to give”)

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
