---
layout: base
title:  'Ruuli UD'
udver: '2'
---

# UD for Ruuli <span class="flagspan"><img class="flag" src="../../flags/svg/UG.svg" /></span>

## Tokenization and Word Segmentation

* Words are generally delimited by whitespace. Exceptions are described below.

* Multiword tokens in Ruuli are formed in the presence of clitics, which phonologically and orthographically attach to the neighboring word. The clitics are:

    * Locative enclitics =*wo* (16.LOC), =*ku* (17.LOC), =*mu* (18.LOC), =*yo* (23.LOC)
    * Comitative *n'=* (phonologically reduced form of *na*)
  	* Additive focus *n'=* (phonologically reduced form of *na*) and *=na*
    * Other focus clitics *=mbe*, *=te*	
    * Subordinate conjunction *n'=* (phonologically reduced form of *ni*)
    * Relative pronouns, e.g., *ky'* (reduced form of *kye*)

* According to typographical conventions, punctuation marks are attached to neighboring words. In annotation, they are tokenized as separate tokens, except for single quotation marks marking the phonologically reduced vowel of proclitics (e.g., *n'abaizukulu* "and the grandchildren").

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

  * Possessive pronouns (e.g., *wange* "my"), as they carry two noun classes rather than one
  * Interrogatives: *naani* "who", *(ki)ki* "what"
  * Relative pronoun *e* "which"

* There are three copulas, annotated with the universal tag [AUX]() and additionally with the language-specific tag `COP` in XPOS: 

	* The semantically empty copular verb *li*
	* The copula *ta*, in many uses equivalent with *li*; *ta* is common in locative predication and in a predicative possession construction with the adposition *na* "with".	
	* The copula *ni*, which is used for argument and adjunct focus.

* Four items can be used as auxiliaries, in which case they are tagged as [AUX](): 

	* The verbs *aba* "to go" and *iza* "to come" when immediately followed by an infinitive to form periphrastic future constructions; otherwise *aba* and *iza* are interpreted as lexical verbs and tagged as [VERB]() 
	* The verb *bba* "to be, to exist" when immediately followed by a finite verb and forms with it a complex temporal-aspectual construction; otherwise *bba* is interpreted as a lexical verb and tagged as [VERB]()
	* The copula *li* "to be" when followed by an infinitive or a finite verb to form a complex temporal-aspectual construction; otherwise *li* is used in non-verbal predication and tagged as the universal [AUX]() and the language-specific `COP` in XPOS

* Ruuli distinguishes three main verbal forms:

  * Finite (`VerbForm=Fin`), tagged [VERB]()/[AUX]()
  * Infinitive (`VerbForm=Inf`), tagged [VERB]()
  * Verbal noun (`VerbForm=Vnoun`), tagged [NOUN]()

### Features

#### Nominal Features

* Nominals ([NOUN](), [PROPN]()) carry [NounClass]() and may carry [Referent]()=`Yes` for augment prefix.
* Agreeing parts of speech ([ADJ](), [DET](), some [ADV](), [NUM](), genitive [PART](), [AUX](), [VERB]()) also carry nominal features.
* Locative [ADP]() may carry locative noun classes (`Bantu16`, `Bantu17`, `Bantu18`, `Bantu23`).
* Verbal nouns ([VerbForm]()=`Vnoun`) belong to `Bantu15`.

#### Pronouns, Determiners, and Adverbs

* [PronType]() (`Dem`, `Ind`, `Int`, `Prs`, `Rel`, `Tot`) is used with [PRON](), [DET](), and [ADV]().
* Personal pronouns inflect for [Person]() and either [Number]() (1/2 person) or [NounClass]() (3rd person).
* Possessive pronouns use layered features: [Person[psor]](), [Person[psed]](), or [NounClass[psor]](), [NounClass[psed]]().
* Demonstratives have [Deixis]() (`Prox`, `Med`, `Remt`) and noun class agreement.
* The interrogative adverb *tyai* "how" agrees with the subject.

#### Verbal Features

* [VERB]() may have:
  * [Aspect]() (`Hab`, `Perf`, `Pers`, `Prog`)
  * [Mood]() (`Imp`, `Ind`, `Sub`)
  * [Tense]() (`Fut`, `Nar`, `Past`, `Pres`)
  * [Voice]() (`Appl`, `Cau`, `Pass`, `Rcp`, `Rfl`)
  * [VerbForm]() (`Fin`, `Inf`)

* Multiple aspect or voice values are represented using layered features ([Aspect[add]]() and [Voice[add]]()).

* Verbs agree with arguments using layered features:
  * Subject: [Person](), [Number]()/[NounClass]()
  * Object: [Person[obj]](), [Number[obj]]()/[NounClass[obj]]()
  * Indirect object: [Person[iobj]](), [Number[iobj]]()/[NounClass[iobj]]()

* Auxiliary verbs (*aba*, *bba*, *iza*) and copulas (*li*, *ni*, *ta*) are tagged [AUX]() and carry tense/aspect and agreement.

#### Other Features

* [Abbr]()=`Yes` for abbreviated [PROPN]()
* [ExtPos]()=`CCONJ` for fixed expressions like *ate era* "and"
* [Foreign]()=`Yes` for [X]()
* [Hort]()=`Yes` for hortative *ka*
* [InfStruct]()=`Foc` for focus particles and the copula *ni*
* [NumForm]() and [NumType]() for [NUM]()
* [Polarity]() for negation (*ti*, *ndoo*, *ti-*)
* [Red]()=`Yes` for reduplication

* Not used: [Animacy](), [Case](), [Clusivity](), [Definite](), [Degree](), [Evident](), [Gender](), [Polite](), [Reflex](), [Typo]()

## Syntax

### Core Arguments and Adjuncts

* Subjects ([nsubj]()):
  * trigger agreement on the verb, realized as the subject prefix
  * do not take adpositions
  * typically clause-initial
  * correspond to semantic roles typical for subjects, such as the agent, the experiencer, the attitude holder

* Direct objects ([obj](), [obj:appl](), [obj:caus]()):
  * may trigger agreement on the verb, realized as the object prefix
  * do not take adpositions
  * often follow the verb and in most cases follow the subject
  * correspond to semantic roles typical for objects, such as the patient or the theme

* Indirect objects ([iobj](), [iobj:appl]()):
  * may trigger agreement on the verb, realized as the object prefix
  * do not take adpositions
  * typically follow the verb
  * the common semantic roles are the beneficiary or the recipient

* Adjuncts ([obl]()):
  * typically adpositional phrases
  * sometimes realized with adverbs modifying the predicate
  * common semantic roles are the source, the goal, and the instrument

* Locative enclitics attach via [advmod:loc]().

### Non-verbal Predication

* Ruuli uses:
  * zero copula
  * copulas *li*, *ta*, *ni* (tagged [AUX]())
  * negative elements *ti*, *ndoo* (tagged [ADV]())
  * semi-copular verb *bba* (tagged [VERB]())

* Clauses of proper inclusion, equation, and attribution may use copulas *li*, *ta*, *ni*, or zero copula (the latter only in the present tense with a non-pronominal subject).
  * *Omukali musomesya.* "The woman is a teacher." (no copula)
  * *Omukali a<b>li</b>/a<b>ta</b>/<b>ni</b>ye musomesya.* "The woman is a teacher."

* Locative and possessive predication may use copulas *li*, *ta*, *ni* or the semi-copular verb *bba*.
  * *Omukalia a<b>li</b>/a<b>ta</b>/<b>ni</b>ye mu Kampala.* "The woman is in Kampala."
  * *Omukali a<b>bba</b> mu Kampala.* "The woman stays in Kampala."

* Benefaction clauses do not use a copula in the present tense and take copula *li* in past and future clauses.
  * *Eitakali lya Banyala.* "This land is for Banyala." (no copula)
  * *Eitakali lyaa<b>li</b> lya Banyala.* "This land was for Banyala."

* Existential predication is expressed by a construction with the copula *li* and a locative enclitic.
  * *Wa<b>li</b>wo omuzumu.* "There is a devil."

* In negative non-verbal clauses:
  * Negative prefix *ti-* is added.
    * *Omukali <b>t</b>ali musomesya.* "The woman is not a teacher." (in *tali*, the /i/ of *ti* undergoes vowel elision)
  * *ti* can be used in present-tense clauses of proper inclusion, equation, and attribution with non-pronominal subjects.
    * *Omukali <b>ti</b> musomesya.* "The woman is not a teacher."
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
