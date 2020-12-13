---
layout: base
title:  'Albanian UD'
udver: '2'
---

# UD for Albanian <span class="flagspan"><img class="flag" src="../../flags/svg/AL.svg" /></span>

## Tokenization and Word Segmentation

* Words are delimited based on whitespace and punctuation.
* No multi-word tokens occur. However, multi-word units exist and have been segmented based on whitespace as well. In the current dataset, they appear in the following forms:
  * adjectives, i.e. _i madh_ (big)
  * pronouns, i.e. _i cili_ (who)
  * nouns (nominalized participle), i.e. _të vdekurit_ (the dead)


## Morphology

### Tags

* Out of the 17 tags, only 14 were used (`SYM`, `INTJ` and `X` did not occur).
* The following words were tagged as [PART]():
  * the negative markers: *s'*, *nuk*
  * the particle used to build the comparative and superlative degree of adjectives and adverbs: *më*
  * the particle which functions as an adverbial: *madje*
  * the particle *të* when occuring in front of verbs.
  * the particle *duke* which is used to build the gerund form of verbs.
* Auxiliaries ([AUX]()) can be listed as follows:
  * The temporal auxiliary *kam* (to have), which combined with the supine forms periphrastically the perfect tense of the active voice.
  * The temporal/passive auxiliary *jam* (to be), which combined with the supine forms periphrastically the perfect tense of the mediopassive voice.
  * The temporal auxiliary *u* (self), which  combined with a finite verb form builds periphrastically the Aorist of the mediopassive voice.
  * The copula *jam* (to be)
* The tag [DET]() is used for articles/clitics (*i/e/të/një*) both for those forming adjectival and pronomial multi-word units and those forming the genitive/ablative/dative case of nouns.
* The tag [PRON]() is used for all types of pronouns.
* Participles (past) are mainly used adjectivally in Albanian and are generally tagged as [ADJ](). The only exception is when these occur in a nominalized form, in which case they are tagged as [NOUN]() i.e. të vdekurit (the dead).


### Features

* Nouns have inherent [Gender](), `Masc` or`Fem`. They inflect for [Definite]() (definite or indefinite, marked as suffix), [Number]() (singular or plural) and [Case]() (nominative, genitive, dative, accusative, vocative and ablative). For those nouns that change gender in plural, the feature [NounType]()`=Het` has been provided additionally.
* Verbs inflect for [Aspect]() (imperfect, perfect), [Mood]() (indicative, subjunctive, admirative, imperative, conditional, optative) [Number]() (singular or plural), [Person]() (first, second, third), [Tense]() (past or present) and [Voice]() (active or passive/mediopassive). There are three types of nonfinite forms: infinitives, past participle/supine (used to form perfect tenses together with the auxiliary to have/to be or other verb constructions, i.e. *për të shkruajtur* (in order to write). However, in case of non-finite verb forms only the feature [VerbForm]() has been provided.
* Adjectives agree with nouns with respect to the features [Gender](), [Number](), [Case]() and [Definite](). In addition, many adjectives inflect for [Degree]() (positive, comparative, superlative). In this Treebank, only the features [Gender](), [Number]() and [VerbForm]() were included in the morphological analysis.
* Adverbs inflect only for [Degree]().
* Personal pronouns inflect for [Case]() with four values (nominative, accusative, dative, ablative), [Number]() and [Gender](). Here, the following features were stated: [Gender](), [Number]() and [PronType]().
* For Determiners, only [Gender]() has been provided, although number and case apply as well.
  * Note about DET: Determiners (which only preceed nouns in order to form cases) agree in Gender and Number with the head of the noun phrase and not the noun that is their head (the noun for which they act as case markers). i.e. shkronjat (FEM, PL) e (FEM, PL) librit (MASC, SING) (The letters of the book). This is why, when inflecting nouns for case, one leaves undetermined the gender of the DET in grammar books and provides all options.


## Syntax

* Subjects occur in nominative case without adpositions. Pronomial subjects are often dropped, as Albanian is a pro-drop language.
* Objects:
  * Occur in the accusative case (direct objects) or in dative (indirect objects).
  * Dative objects require clitic doubling, i.e. kjo *u* lejon *atyre* të (this allows them to...), where *u* is an obligatory pronomial clitic preceeding the dative object *atyre*. Clitic doubling can occur with accusative objects as well, but then it is optional.
* The copula verb *jam* (to be) is used in equational, attributional, locative, possessive and benefactory nonverbal clauses.                  Existential clauses normally use the verb *kam* (have), i.e. *nuk ka njeri* (Gloss 1-1: not has person, freely translated as: there is no one).
* The following subtypes are used in Albanian:
    * [acl:relcl]() for relative clauses
    * [csubj:pass]() for clausal subjects of passive verbs or impersonal verb constructions (i.e. it is my duty *to say*...)
    * [nmod:poss]() for possessive/genitive modifiers
    * [det:adj]() for prearticulated adjectives
    * [det:pron]() for prearticulated pronouns
    * [det:noun]() for prearticulated nouns


## Treebanks

There is one Albanian UD treebank.

  * [Albanian-TSA](../treebanks/sq_tsa/index.html)

