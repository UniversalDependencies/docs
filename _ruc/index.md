---
layout: base
title:  'Ruuli UD'
udver: '2'
---

# UD for Ruuli <span class="flagspan"><img class="flag" src="../../flags/svg/UG.svg" /></span>

## Tokenization and Word Segmentation

* Words are generally delimited by whitespace. Exceptions are described below.

* Ruuli has several types of multiword tokens (clitics):

    * Locative enclitics =*wo* (16.LOC), =*ku* (17.LOC), =*mu* (18.LOC), =*yo* (23.LOC)
    * Comitative *n'=* (reduced form of *na*)
    * Subordinate conjunction marker *n'=* (reduced form of *ni*)
    * Focus clitics *=mbe*, *=te*, *=na*, *n'=*
    * Relative pronouns, e.g., *ky'* (reduced form of *kye*)

* According to typographical conventions, punctuation marks are attached to neighboring words. In annotation, they are tokenized as separate tokens, except for single quotation marks marking the end of proclitics (e.g., *n'abaizukulu* "and the grandchildren").

* There are no multiword tokens written with whitespace.

## Morphology

### Tags

* Ruuli uses 16 universal POS tags. The `SYM` category is not attested.

* Three types of words are tagged as [PART]():

    * Genitive markers, e.g., *wa*
    * Focus clitics *mbe*, *na*, *te*
    * Hortative *ka*
  
  These items are invariant function words that do not fit other major POS categories.

* The [DET]() tag applies to determiners, including:

  * Demonstratives: *ni* (PROX), *o* (MED), *di* (DIST)
  * Indefinites: *ndi* "other", *mwe* "some"
  * Total: *buli* "all", *ona* "all"
  * Interrogatives: *ingai*, *mekai* "how much/many"

  Determiners agree with the noun in noun class. Forms are tagged as [DET]() when modifying a noun and as [PRON]() when functioning as the head of a nominal phrase. Additionally, the following are tagged as [PRON]():

  * Possessive pronouns (e.g., *wange* "my"), as they do not take an augment
  * Interrogatives: *naani* "who", *(ki)ki* "what"
  * Relative pronoun *e* "which"

* <!--TODO @Anna: Describe how the AUX-VERB distinction  is drawn. List of AUX: *aba, bba (not as copulas), iza*; copulas *li, ni, ta*. -->

* Ruuli distinguishes three main verbal forms:

  * Finite (`VerbForm=Fin`), tagged [VERB]()/[AUX]()
  * Infinitive (`VerbForm=Inf`), tagged [VERB]()/[AUX]()
  * Verbal noun (`VerbForm=Vnoun`), tagged [NOUN]()

<!-- ---
**Instruction**: Specify any unused tags. Explain what words are tagged as PART. Describe how the AUX-VERB and DET-PRON distinctions are drawn, and specify whether there are (de)verbal forms tagged as ADJ, ADV or NOUN. Include links to language-specific tag definitions if any.

--- -->

### Features

#### Nominal Features

* Nominals ([NOUN](), [PROPN]()) carry [NounClass]() and may carry [Referent]()=`Yes` for augment prefix.
* Agreeing parts of speech ([ADJ](), [DET](), some [ADV](), [NUM](), genitive [PART], [AUX](), [VERB]()) also carry nominal features.
* Locative [ADP]() may carry locative noun classes (`Bantu16`, `Bantu17`, `Bantu18`, `Bantu23`).
* Verbal nouns ([VerbForm]=`Vnoun`) belong to `Bantu15`.

#### Pronouns, Determiners, and Adverbs

* [PronType]() (`Dem`, `Ind`, `Int`, `Prs`, `Rel`, `Tot`) is used with [PRON](), [DET](), and [ADV]().
* Personal pronouns inflect for [Person]() and either [Number]() (1/2 person) or [NounClass]() (3rd person).
* Possessive pronouns use layered features: [Person[psor]](), [Person[psed]](), or [NounClass[psor]](), [NounClass[psed]]().
* Demonstratives have [Deixis]() (`Prox`, `Med`, `Remt`) and noun class agreement.
* The interrogative adverb *tyai* "how" agrees with the subject.

#### Verbal Features

* [VERB]() may have:
  * [Aspect]() (`Hab`, `Perf`, `Pers`, `Prog`)
  * [Mood]() (`Cf`, `Imp`, `Ind`, `Pot`, `Sub`)
  * [Tense]() (`Fut`, `Nar`, `Past`, `Pres`)
  * [Voice]() (`Appl`, `Cau`, `Pass`, `Rcp`, `Rfl`)
  * [VerbForm]() (`Fin`, `Inf`)

* Multiple aspect or voice values are represented using layered features (e.g., [Aspect[add]](), [Voice[add]]()).

* Verbs agree with arguments using layered features:
  * Subject: [Person](), [Number]()/[NounClass]()
  * Object: [Person[obj]](), [Number[obj]]()/[NounClass[obj]]()
  * Indirect object: [Person[iobj]](), [Number[iobj]]()/[NounClass[iobj]]()

* Auxiliary verbs (*aba*, *bba*, *iza*) and copulas (*li*, *ni*, *ta*) are tagged [AUX] and carry tense/aspect and agreement.

#### Other Features

* [Abbr]()=`Yes` for abbreviated [PROPN]()
* [ExtPos]()=`CCONJ` for fixed expressions like *ate era* "and"
* [Foreign]()=`Yes` for [X]()
* [Hort]()=`Yes` for hortative *ka*
* [InfStruct]()=`Foc` for focus particles and *ni*
* [NumForm]() and [NumType]() for [NUM]()
* [Polarity]() for negation (*ti*, *ndoo*, *ti-*)
* [Red]()=`Yes` for reduplication

* Not used: [Animacy](), [Case](), [Clusivity](), [Definite](), [Degree](), [Evident](), [Gender](), [Polite](), [Reflex](), [Typo]()


## Syntax

### Core Arguments and Adjuncts

* Subjects ([nsubj]()):
  * trigger agreement
  * typically do not take adpositions
  * typically clause-initial

* Direct objects ([obj](), [obj:appl](), [obj:caus]()):
  * may trigger agreement
  * typically do not take adpositions
  * follow the verb

* Indirect objects ([iobj](), [iobj:appl]()):
  * may trigger agreement
  * typically do not take adpositions
  * follow the verb

* Adjuncts ([obl]()):
  * typically adpositional phrases

* Locative enclitics attach via [advmod:loc]().

### Non-verbal Clauses

* Ruuli uses:
  * zero copula
  * copulas *li*, *ta*, *ni* (tagged [AUX]())
  * negative elements *ti*, *ndoo* (tagged [ADV]())
  * semi-copular verb *bba* (tagged [VERB]())

* Clauses of proper inclusion, equation, and attribution may use copulas *li*, *ta*, *ni*, or zero copula (the latter only in the present tense with a non-pronominal subject).
  * *Omukali musomesya.* "The woman is a teacher."
  * *Omukali ali/ati/niye musomesya.* "The woman is a teacher."

* Locative and possessive predication may use copulas *li*, *ta*, *ni* or the semi-copular verb *bba*.
  * *Omukali ali/ati/niye mu Kampala.* "The woman is in Kampala."
  * *Omukali abba mu Kampala.* "The woman stays in Kampala."

* <!--TODO @Anna: Benefaction: "the book is for her" -->

* Existential predication is expressed by a construction with the copula *li* and a locative enclitic.
  * *Waliwo omuzumu.* "There is a devil."

* In negative non-verbal clauses:
  * Negative prefix *ti-* is added.
    * *Omukali tali musomesya.* "The woman is not a teacher."
  * *ti* can be used in present-tense clauses of proper inclusion, equation, and attribution with non-pronominal subjects.
    * *Omukali ti musomesya.* "The woman is not a teacher."
  * *ndoo* can be used in existential negation.
    * *Ndoowo mugaso.* "There is no importance."

* Annotation:
  * copulas *li*, *ta*, *ni* in non-existential clauses → [cop]()
  * *li* and *ndoo* in existential clauses → root
  * *ti* → [advmod:cop]()
  * *bba* → root

### Relations Overview

* Subtypes used:

    * [acl:relcl]()
    * [advcl:relcl]()
    * [advmod:cop]()
    * [advmod:emph]()
    * [advmod:loc]()
    * [csubj:outer]()
    * [flat:foreign]()
    * [flat:name]()
    * [flat:num]()
    * [flat:redup]()
    * [iobj:appl]()
    * [nmod:desc]()
    * [nmod:poss]()
    * [nsubj:outer]()
    * [obj:appl]()
    * [obj:caus]()
    * [obl:agent]()

* Not used: [clf](), [compound](), [dep](), [expl](), [goeswith](), [list](), [orphan]()


## Treebanks

There is one Ruuli UD treebanks:

  * [Ruuli-RDT](../treebanks/ruc_rdt/index.html)

