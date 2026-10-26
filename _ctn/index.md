---
layout: base
title:  'Chintang UD'
udver: '2'
---

# UD for Chintang <span class="flagspan"><img class="flag" src="../../flags/svg/NP.svg" /></span>

## Tokenization and Word Segmentation

* Words in Chintang are generally delimited by whitespace or punctuation. Exceptions are listed below.
* Several cases of multiword tokens (clitics) occur:
  * Nominalizers *go* and *kha* are written immediately after the items over which they have scope without whitespace and can take case suffixes.
    Example: *mi<b>kha</b>be = mi + <b>kha</b>be* "on the small one".
  * Information structure particles -- focus (*ta*, *ai*), topic (*le*, *lo*, *yaŋ*), and unique delimiter (*te*) -- are written directly after the items over which they have scope without whitespace.
    Example: *menuwa<b>le</b> = menuwa + <b>le</b>* "only the cat".
  * Citative *mo* follows the quoted expression without whitespace.
    Example: *Bedi thuŋma<b>mo</b> mittaŋsehẽ.* "I thought of smoking a cigarette."
  * Reportative *pho* follows the reported clause without whitespace.
    Example: *Biu emadaŋse<b>pho</b>.* "I heard the seed has remained fruitless."
  * Neutral question *nchi* is written at the end of a clause without whitespace.
    Example: *Didiŋa nunu kok pide<b>nchi</b>?* "Did that girl give food to the baby or not?"
* No words with internal whitespace appear in the current data.

## Morphology

### Tags

* Chintang uses 16 universal tags; the current data does not contain any occurrences of the `SYM` category.
* There are three types of words tagged as [PART]():
  * Information structure particles: focus *ta*, *ai*; restrictive *le*; surprise *lo*; additive *yaŋ*; topic *na*, *bhane*; contrastive topic *caĩ*; and unique delimiter *te*.
  * Utterance particles: collaborative *aŋ*; contrastive question *enaŋ*; attentional *gonei*; emotional involvement *hou*; inquisitive *hoina*, *maha*; presumptive *hola*; neutral question *manchi*; insistive *na*; assertive *ni*; reconfirmative *o*; mirative *raicha*; informatory *them*.
  * Copular verboids: *mahãʔ* "be not", *manchiʔ* "be not there", *mane* "should not", and *phopheiʔ* "be no longer there".
* Chintang has just one auxiliary verb ([AUX]()), *lus* ('speak, feel, be felt'). The auxiliary combines with the dedicated reciprocal form of the verb.
* The [DET]() tag applies to words functioning as determiners, including:
  * Demonstratives: *ba*, *huĩ*, *mo*, *to*, *yo*
  * Indefinites: *arko*, *baddhe*, *jun*, *kun*, *miʔmuŋ*
  * Total *jammai*
  * Interrogatives *asuk*, *them*, *themma*
  Determiners do not have a [Case]() marking on them.
* Chintang distinguishes four main verbal forms based on the VerbForm (tagged [VERB]() or [AUX]()):
  * Finite verbs (`Fin`)
  * Infinitives (`Inf`)
  * Converbs (`Conv`)
  * Participles (`Part`)

### Features
<!-- TODO if lus is an AUX, add everywhere where verb is -->

#### Nominal Features

* Nominals ([NOUN](), [PRON](), [PROPN]()) carry [Case]() (`Abs`, `AbsErg`, `Cau`, `Com`, `Erg`, `Loc`, `LocCom`, `LocErg`, `LocLoc`, `LocPer`, `LocPerErg`, `Per`, `PerErg`) and [Number]() (`Sing`, `Dual`, `Plur`).
  * [NUM]() inherits nominal features when used as a nominal.
* [ADJ](), [ADV](), and infinitive [VERB]() ([VerbForm]()=`Inf`) may take possessive prefixes, which also introduce the [Number]() feature.
  * On [NOUN]() and [PROPN]() with possessive prefixes, the number of the possessor is annotated using [Number[psor]]() (`Sing`, `Dual`, `Plur`).
* Nominals with the possessive suffix *-ko* receive [Poss]() (`Yes`) feature.

#### Pronouns, Determiners and Adverbs

* [PronType]() (`Dem`, `Ind`, `Int`, `Prs`, `Rel`, `Tot`) is used with [PRON](), [DET](), and [ADV]().
* [ADV]() may carry [AdvType]() (`Ext`, `Loc`, `Man`, `Qua`).
* Personal pronouns ([PRON](), [PronType]()=`Prs`) inflects for [Person]() (`1`, `2`, `3`) and may have [Clusivity]() (`Ex`, `In`).
  * Other parts of speech may take possessive prefixes, introducing [Person](), [Number]() and [Clusivity]() features.
  * [VERB]() agree with their agents and patients in [Number](), [Person](), and [Clusivity]()
    * For patient agreements, layered features are used: [Number[p]](), [Person[p]](), [Clusivity[p]]().
* Demonstratives ([PronType]()=`Dem`) [PRON](), [DET](), and [ADV]() have the [Deixis]() (`Prox`, `Med`, `Remt`) feature.
* Demonstratives ([PronType]()=`Dem`) [ADV]() may have *a-* 'REMOTE' or *u-* 'ACCESS' annotated with [Reach]() (`Remote`, `Access`).

#### Verbal Features

* [VERB]() may have [Aspect]() (`ComplImp`, `ComplPerf`, `ComplPerfv`, `Imp`, `Perf`, `Perfv`), [Mood]() (`Imp`, `Ind`, `Opt`, `Sub`), [Tense]() (`Past`, `Pres`), [Voice]() (`Act`, `Rcp`, `Rfl`, `CauRcp`, `CauRfl`), and [VerbForm]() (`Conv`, `Fin`, `Inf`, `Part`).
  * Converbs ([VerbForm]()=`Conv`) additionally carry [ConvType]() (`Cntf`, `Coord`, `Purp`) feature.
* The reportative evidential *=pho* uses [Evident]()=`Nfh`.


#### Other Features

* [Animacy]() (`Hum`, `Nhum`) and [NumType]() (`Card`) are used with [NUM]().
* [Degree]() (`Dim`) is used with diminutive [NOUN]() and [PROPN]().
* [Foreign]() (`Yes`) is used with foreign words tagged as [X]().
* [InfStruct]() (`Foc`, `Top`, `Uniq`) is used with the information structure [PART]().
* [Polarity]() (`Neg`) is used for negative [CCONJ]() (*na* "nor"), [INTJ]() (e.g. *ahã* "no"), [PART]() (e.g. *mahãʔ* "be not"), and [VERB]().
  [Polarity]() (`Pos`) is used on positive [INTJ]() (e.g. *eiʔ* "yes").
* [Red]() (`Yes`) is used for morphologically reduplicated words.

* The following universal features are currently not used in Chintang: [Abbr](), [Definite](), [DeixisRef](), [ExtPos](), [Gender](), [NounClass](), [Polite](), [Reflex](), [Typo]().


## Syntax

### Core Arguments, Oblique Arguments and Adjuncts

* Nominal subjects ([nsubj]()) are noun phrases, typically in clause-initial position.
  * The sole argument of intransitive predicates (the intransitive subject) takes the Absolutive case (*-0*, [Case]()=`Abs`).
  * The agent argument of transitive predicates (the transitive subject) takes the Ergative case (*-ŋa*, [Case]()=`Erg`).
  * Subjects do not take postpositions.
  * Finite subordinate clauses functioning as subjects are labeled [csubj]().
* For transitive predicates, the patient (or the direct object [obj]()) typically occurs in second position. It has the Absolutive case marking and lacks postpositions.
* Indirect objects ([iobj]()) of ditransitive predicates may bear Absolutive or Ergative case depending on the valency frame of the predicate.
* Adjuncts ([obl]()) are postpositional phrases or bare nominals marked with cases other than Absolutive or Ergative.


### Non-verbal Clauses

* Positive identity, quality, locational, and existential clauses may be non-verbal, lacking an overt copula.
* Positive copular clauses of all types can use lis and yug, treated as heads of the clause and tagged [VERB]().
* Negative non-verbal clauses of all types are marked by negative verboids: *mahãʔ* "be not", *manchiʔ* "be not there", *mane* "should not", and *phopheiʔ* "be no longer there" (tagged [PART]() and annotated with [advmod:cop]()).

### Relations Overview

* The following 21 relation subtypes are used in Chintang:

    * [acl:nmlz]() clausal nominalization
    * [acl:relcl]() relative clause modifier
    * [advcl:cntf]() counterfactual comparison adverbial clause
    * [advcl:coord]() coordinated action adverbial clause
    * [advcl:emph]() emphasizing adverbial clause
    * [advcl:purp]() purposive adverbial clause
    * [advcl:sim]() simultaneous action adverbial clause
    * [advmod:cop]() copular use of adverbial modifier
    * [advmod:emph]() emphasizing word, intensifier
    * [advmod:nmlz]() adverbial nominalization
    * [amod:nmlz]() adjectival nominalization
    * [compound:lvc]() light verb construction
    * [det:nmlz]() determiner nominalization
    * [flat:foreign]() foreign words
    * [flat:name]() names
    * [flat:num]() flat multiword number
    * [nmod:nmlz]() nominal nominalization
    * [nmod:poss]() possessive nominal modifier
    * [nsubj:outer]() outer clause nominal subject
    * [obj:caus]() agentive object in causative construction
    * [xcomp:desid]() open clausal desiderative compliment

* The following relation types are not currently used in Chintang: [clf](), [cop](), [dep](), [dislocated](), [expl](), [fixed](), [goeswith](), [list]().

## Treebanks

There is 1 Chintang UD treebank:

  * [Chintang-CTNTB](../treebanks/ctn_ctntb/index.html)
