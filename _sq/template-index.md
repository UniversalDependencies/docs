---
layout: base
title:  'Albanian UD'
udver: '2'
---

# UD for Albanian <span class="flagspan"><img class="flag" src="../../flags/svg/AL.svg" /></span>

## Tokenization and Word Segmentation

* Words are delimited based on whitespace and punctuation. 
* Multi-word tokens exist and so far, they appear in the following forms in the Treebank:
  * adjectives, i.e. i madh (big)
  * pronouns , i.e. i cili (who)
  * nouns (nominalized participles), i.e. të vdekurit (the dead)

---
**Instruction**: Describe the general rules for delimiting words (for example, based on whitespace and punctuation) and exceptions to these rules. Specify whether words with spaces and/or multiword tokens occur. Include links to further language-specific documentation if available.

---

## Morphology

### Tags

* Out of the 17 tags, only 14 were used (`SYM`, `INT` and `X` did not occur).
* The following words were tagged as PART:
  * the negative markers: *s'*, *nuk*
  * the particle used to build the comparative and superlative degree of adjectives and adverbs: *më*
  * the particle which functions as an adverbial: *madje* 
* Auxiliaries ([AUX]()) are all verbals in Albanian an can be listed as follows:
  * The temporal auxiliary *kam* (to have), which combined with the supine forms periphrastically the perfect tense of the active voice.
  * The temporal/passive auxiliary *jam* (to be), which combined with the supine forms periphrastically the perfect tense of the passive voice.
  * The temporal auxiliary *u* (not translated), which combined with the past tense of the active voice forms periphrastically the past tense of the passive/middle voice.
  * The modals *mund*, *duhet*, *të*, *duke* 
  * The copulas *jam* (to be), *njihem* (to be recognised)
  * The tag DET is used for articles/clitics (*i/e/të/një*) both for those forming adjectival and pronomial compounds and those forming the genitive case of nouns. 
  * The tag PRON is used for all types of pronouns.
  * Participles (past) are mainly used adjectivally in Albanian and are generally tagged as ADJ. The only exception is when these occur in a nominalized form, in which case they are tagged as NOUN i.e. të vdekurit (the dead).
  * Adjectival, pronomial and nominal multi-word expressions have been assigned the tag COMPOUND with the subtype :adj and :pron respectively for the two first ones.

---
**Instruction**: Specify any unused tags. Explain what words are tagged as PART. Describe how the AUX-VERB and DET-PRON distinctions are drawn, and specify whether there are (de)verbal forms tagged as ADJ, ADV or NOUN. Include links to language-specific tag definitions if any.

---

### Features

* Nouns have inherent [Gender](), `MASC` or`FEM`. They inflect for [Definite]() (definite or indefinite, marked as suffix), [Number]() (singular or plural) and [Case]() (nominative, genitive, dative, accusative, vocative and ablative).
* Verbs inflect for [Aspect]() (imperfect, perfect), [Mood]() (indicative, subjunctive, admirative, imperative, conditional, optative) [Number]() (singular or plural), [Person]() (first, second, third), tense (past or present) and [Voice]() (active or passive). There are three types of nonfinite forms: infinitives, participles (past), and supine (used to form perfect tenses together with the auxiliary to have/to be).
* Adjectives agree with nouns (in both attributive and predicate position) with respect to the features [Gender](), [Number]() and Definite](). In addition, many adjectives inflect for [Degree]() (positive, comparative, superlative) and for [Case]() when used to head noun phrases.
* Adverbs inflect only for [Degree]().
* Personal pronouns inflect for [Case]() with five values (nominative, accusative, genitive, dative).
* Determiners agree with nouns in the same way as adjectives.

---
**Instruction**: Describe inherent and inflectional features for major word classes (at least NOUN and VERB). Describe other noteworthy features. Include links to language-specific feature definitions if any.

---

## Syntax

To be continued!


---
**Instruction**: Give criteria for identifying core arguments (subjects and objects), and describe the range of copula constructions in nonverbal clauses. List all subtype relations used. Include links to language-specific relations definitions if any.

---

## Treebanks

There are [N](../treebanks/LCODE-comparison.html) LANGUAGE UD treebanks:

  * [LANGUAGE-A](../treebanks/LCODE_a/index.html)
  * [LANGUAGE-B](../treebanks/LCODE_b/index.html)

---
**Instruction**: Treebank-specific pages are generated automatically from the README file in the treebank repository and
from the data in the latest release. Link to the respective `*-index.html` page in the `treebanks` folder, using the language code
and the treebank code in the file name.

---
