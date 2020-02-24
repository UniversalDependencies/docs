---
layout: base
title:  'Albanian UD'
udver: '2'
---

# UD for Albanian <span class="flagspan"><img class="flag" src="../../flags/svg/AL.svg" /></span>

## Tokenization and Word Segmentation

* Words are delimited based on whitespace and punctuation. 
* No multi-word tokens occur. However, multi-word units exist and have been segmented based on whitespace as well. In the current dataset, they appear in the following forms:
  * adjectives, i.e. i madh (big)
  * pronouns, i.e. i cili (who)
  * nouns (nominalized participle), i.e. të vdekurit (the dead)

---
**Instruction**: Describe the general rules for delimiting words (for example, based on whitespace and punctuation) and exceptions to these rules. Specify whether words with spaces and/or multiword tokens occur. Include links to further language-specific documentation if available.

---

## Morphology

### Tags

* Out of the 17 tags, only 14 were used (`SYM`, `INT` and `X` did not occur).
* The following words were tagged as [PART]():
  * the negative markers: *s'*, *nuk*
  * the particle used to build the comparative and superlative degree of adjectives and adverbs: *më*
  * the particle which functions as an adverbial: *madje*
  * the particle *të* when occuring in front of verbs.
  * the particle *duke* which is used to build he gerund form of verbs.
* Auxiliaries ([AUX]()) can be listed as follows:
  * The temporal auxiliary *kam* (to have), which combined with the supine forms periphrastically the perfect tense of the active voice.
  * The temporal/passive auxiliary *jam* (to be), which combined with the supine forms periphrastically the perfect tense of the mediopassive voice.
  * The temporal auxiliary *u* (self), which  combined with a finite verb form builds periphrastically the Aorist of the mediopassive voice.
  * The copula *jam* (to be)
* The tag DET is used for articles/clitics (*i/e/të/një*) both for those forming adjectival and pronomial multi-word units and those forming the genitive/ablative/dative case of nouns. 
* The tag PRON is used for all types of pronouns.
* Participles (past) are mainly used adjectivally in Albanian and are generally tagged as [ADJ](). The only exception is when these occur in a nominalized form, in which case they are tagged as NOUN i.e. të vdekurit (the dead).

---
**Instruction**: Specify any unused tags. Explain what words are tagged as PART. Describe how the AUX-VERB and DET-PRON distinctions are drawn, and specify whether there are (de)verbal forms tagged as ADJ, ADV or NOUN. Include links to language-specific tag definitions if any.

---

### Features

* Nouns have inherent [Gender](), `MASC` or`FEM`. They inflect for [Definite]() (definite or indefinite, marked as suffix), [Number]() (singular or plural) and [Case]() (nominative, genitive, dative, accusative, vocative and ablative). For those nouns that change gender in plural, the feature NounType=Het has been provided additionally.
* Verbs inflect for [Aspect]() (imperfect, perfect), [Mood]() (indicative, subjunctive, admirative, imperative, conditional, optative) [Number]() (singular or plural), [Person]() (first, second, third), tense (past or present) and [Voice]() (active or passive/mediopassive). There are three types of nonfinite forms: infinitives, past participle/supine (used to form perfect tenses together with the auxiliary to have/to be or other verb constructions, i.e. *për të shkruajtur* (in order to write). However, in case of non-finite verb forms only the feature [VerbForm]() has been provided.
* Adjectives agree with nouns with respect to the features [Gender](), [Number](), [Case]() and [Definite](). In addition, many adjectives inflect for [Degree]() (positive, comparative, superlative). In this Treebank, only the features [Gender](), [Number]() and [VerbForm]() were included in the morphological analysis.
* Adverbs inflect only for [Degree]().
* Personal pronouns inflect for [Case]() with four values (nominative, accusative, dative, ablative), [Number]() and [Gender](). Here, the following features were stated: [Gender](), [Number]() and [PronType]().
* For Determiners, only [Gender]() has been provided, although number, and case apply as well.
  * Note about DET: Determiners (which only preceed nouns in order to form cases) agree in Gender and Number with the head of the noun phrase and not the noun that is their head (the noun for which they act as case markers). i.e. shkronjat (FEM, PL) e (FEM, PL) librit (MASC, SING) (The letters of the book). This is why, when inflecting nouns for case, one leaves undetermined the gender of the DET in grammar books and provides all options.

---
**Instruction**: Describe inherent and inflectional features for major word classes (at least NOUN and VERB). Describe other noteworthy features. Include links to language-specific feature definitions if any.

---

## Syntax

* Subjects occur in nominative case without adpositions. Pronomial subjects are often dropped, as Albanian is a pro-drop language.
* Objects:
  * Occur in the accusative case (direct objects) or in dative (indirect objects).
  * Dative objects require clitic doubling, i.e. kjo *u* lejon *atyre* të (this allows them to...), where *u* is an obligatory pronomial clitic preceeding the dative object *atyre*. Clitic doubling can occur with accusative objects as well, but then it is optional.
* The copula verb *jam* (to be) is used in equational, attributional, locative, possessive and benefactory nonverbal clauses.                  Existential clauses normally use the verb *kam* (have), i.e. *nuk ka njeri* (Gloss 1-1: not has person, freely translated as: there is no one).
* The following subtypes are used in Albanian:
    * acl:relcl for relative clauses
    * csubj:pass for clausal subjects of passive verbs or impersonal verb constructions (i.e. it is my duty *to say*...)
    * nmod:poss for possessive/genitive modifiers
    * det:adj for prearticulated adjectives
    * det:pron for prearticulated pronouns
    * det:noun for prearticulated nouns

---
**Instruction**: Give criteria for identifying core arguments (subjects and objects), and describe the range of copula constructions in nonverbal clauses. List all subtype relations used. Include links to language-specific relations definitions if any.

---

## Treebanks

There is [one](../treebanks/sq-comparison.html) LANGUAGE UD treebank.

  * [Albanian-TSA](../treebanks/sq_tsa/index.html)

---
**Instruction**: Treebank-specific pages are generated automatically from the README file in the treebank repository and
from the data in the latest release. Link to the respective `*-index.html` page in the `treebanks` folder, using the language code
and the treebank code in the file name.

---
