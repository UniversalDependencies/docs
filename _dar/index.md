---
layout: base
title:  'Dargwa UD'
udver: '2'
---

# UD for Dargwa <span class="flagspan"><img class="flag" src="../../flags/svg/AQ.svg" /></span>

## Tokenization and Word Segmentation

* Words are generally delimited by whitespace.
* Punctuation marks are tokenized as separate tokens.
* There are no multiword tokens written with whitespace.
* Imperatives used with particles are tokenized as one token.  

## Morphology

### Tags

* Dargwa-Mehweb treebank currently uses 14 part-of-speech tags, with the exception of [ADP](), [SCONJ](), [SYM]().
* The tag [PART]() is applied to the clitics _ca_ (proclitic used in irreal clauses), _cula_ (focusing particle), _gʷa_ (the so called assertive copula, focus particle), _hara_(warning particle), _ile_ (complementizer), _k'a_ (topicalization marker), _k'ʷan_ (quotative particle), _ʡaj_ (particle following apprehensives).  
* The tag [AUX]() is applied to four lexemes: _le_ (copula in non-verbal predication), _ašes_ (hortative periphrastic mood marker), _es_ (jussive periphrastic mood marker), _uʔes_ (irrealis periphrastic mood marker).
* Participles are tagged as a [VERB]().  

### Features

#### Nominal features

* Nouns, pronouns and determiners are tagged with the [Case]() feature, and are annotated for [Gender]() and [Number]() agreement.  
  * Dargwa has three types of case markers: functional, orientation, and localization. Locative forms can be annotated with the combination of orientation and a localization case features.  
  * Class agreement is tagged with the [Gender]() feature, which have six values. Masculine, two feminine and neuter values are used with singular forms; human and non-human values are used with plural forms.  
* Numerals have the [Case]() feature.

#### Verbal Features

* Verbs and auxiliaries are tagged with [Tense](), [Aspect](), and [Mood]() features.  
  * There can be more than one mood markers, such forms are tagged with two values, e.g. `Mood=Cnd,Opt`.  
* Verbs and auxiliaries are annotated for [VerbForm](): `Conv`, `Inf`, `Part`, `Fin`.
* Verbs and auxiliaries are annotated for negative [Polarity]().  
* Verbs and auxiliaries agree for [Gender]() and [Number]() on an ergative basis.  
* Egophoric agreement (with 1st person subject in affirmative contexts and with 2nd person subject in interrogative contexts, person agreement works on an ergative basis) is tagged with the Person[subj]() feature.  
* There are two language-specific verbal features: [ConvType]() and [Evident]().
  * [ConvType]() is used with converbs and participles.  
  * An evidentiality feature [Evident]() is used with finite verbs to refer to the fact that the speaker has indirect evidence for the statement (non-first hand sourse of information).  

#### Lexical (classification features)

* [NameType]() is used for proper nouns ([PROPN]()).  
* [PronType]() is used with pronouns ([PRON]()) and determiners ([DET]()).  
* [NumType]() and [NumForm]() are used with numerals ([NUM]()).
* [Reflex]() is used with pronouns ([PRON]()).
* [Person]() is a lexical feature of personal pronouns ([PRON]()) and has two values, `1` and `2`.  

## Syntax

* Dargwa has ergative-absolutive case alignment, ergative is marked, while absolutive is unmarked.
Ergative-marked arguments are semantic subjects of transitive verbs (A arguments). Absolutive arguments are semantic subjects of intransitive verbs (S arguments), semantic objects of transitive verbs (P arguments), and semantic subject of transitive verbs (A arguments) with certain temporal-aspectual forms (in the so-called bi-absolutive construction).
Predicates agree with the absolutive argument; the case of the argument, the agreement pattern, and the valence of the predicate are used to distinguish between the subject and the object argument.

* There two language-specific relations: [nsubj:nc]() (for a non-canonical nominal subject) and [obl:float]() (oblique as a floating modifier).  

* The subtype relations used are as follows:

  * [compound:lvc]()
  * [compound:redup]()
  * [compound:svc]()
  * [det:poss]()
  * [flat:foreign]()
  * [flat:name]()
  * [obl:tmod]()


## Treebanks

There is one Dargwa UD treebank:

  * [Dargwa-Mehweb](../treebanks/dar_mehweb/index.html)
