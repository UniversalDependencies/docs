---
layout: base
title:  'Latgalian UD'
udver: '2'
---

# UD for Latgalian <span class="flagspan"><img class="flag" src="../../flags/svg/LV-LTG.svg" /></span>

It is important to note that currently UD guidelines for annotating Latgalian is in a very early stage as not much text has been annotated yet.


## Tokenization and Word Segmentation

In general, words are delimited by whitespace characters and punctuation is separated. Description of exceptions follows:
* A whitespace separating digits in a large number is not treated as a word separator. For example, _1 000 000_ ("1,000,000" by English rules) is one token.
* Abbreviations without spaces are treated as single words and may contain punctuation (_v.tml._ "etc."). In following cases we treat abbreviation as a single token even if whitespace is used between part of abbreviation and punctuation mark: _v.tml._, _N.B._, _P.S._ and _P.P.S._
* Double surnames such as _Vīķe-Freiberga_ and words abbreviated with dashes such as _e-posts_ "e-mail", _k-dze_ "Ms." are tokenized as a single token.
* In Latgalian ordinal numerals are written with punctuation mark without whitespace like abbreviations (_1._), so we tokenize ordinal numeral together with punctuation mark as one token.
* Multiple dots (_..._ and _.._ ) are considered as one token. Multiple _?!_ are considered one token, _?!..._ is considered to be two tokens (_?!_ and _..._).

Paragraph borders from the original text is indicated by comment line `# newpar` in cases when paragraph borders aligns sentence borders and `MISC` value `NewPar=Yes` for the token following mid-sentence paragraph break. `MISC` value `SpaceAfter=No` is used to note tokens lacking any whitespace after.

## Morphology

### Tags

Latgalian uses all 17 universal POS categories.

#### Particles

[PART]() tag is used for following function words: _ar_, _ari_, _až_, _ba_, _da_, _dīvamžāļ_, _dīz_, _gon_, _ik_, _it_, _kab_, _kazyn_, _konče_, _koč_, _kuo_, _lai_, _laikam_, _mošeit_, _mož_, _na_, _nabejs_, _naviņ_, _naz_, _nazyn_, _nui_, _nā_, _pat_, _prūtams_, _rikti_, _ta_, _tak_, _tik_, _tikai_, _to_, _tok_, _tože_, _varbyut_, _viņ_, _vys_, _vīneigi_. This list might be expanded in future.

#### Pronouns and Determiners

Effectively distinguishing [PRON]() and [DET]() categories in Latgalian (similarly as in Latvian) is very hard and currently no clear guidelines has been developed yet.

#### Auxiliary Verbs

Latgalian has one auxiliary verb [AUX](): _byut_ "to be". The auxiliary verb is used in several types of constructions:
* Analytic word forms of verbs.
* The copula in non-verbal predicates.
* The copula in infinitive predicates.

_Byut_ may still occur as normal [VERB]() if it is used in purely existential sentences or indicate location.

Verbs with modal meaning are not considered auxiliary in Latgalian.

#### Deverbal Nouns, Participles, Coverbs **TODO**

Latgalian features rich set of deverbal derivations and not everything has been analized to align with UD guidelines yet. However, deverbal nouns with endings _-šona_, _-šonuos_ (_skrīšona_ "running") are tagged as [NOUN](). Most converbs with endings _-ot_, _-oties_, _-am_, _-ām_, _-amies_, _-āmies_, _-dams_, _-damies_, _-damās_ are tagged as `VERB` or `AUX`. Most adjectival participles (_redzams_, _aizgājis_, _negaidīts_, _velkošs_) are tagged as `VERB`.  Exceptions are lexicalized uses with separate meaning, like _protams_ "of course", _acīmredzot_ "obvious", which are tagged as `PART`, and _iespējams_ "possible", which is tagged as `ADJ`.


*

---
**Instruction**: Specify any unused tags. Explain what words are tagged as PART. Describe how the AUX-VERB and DET-PRON distinctions are drawn, and specify whether there are (de)verbal forms tagged as ADJ, ADV or NOUN. Include links to language-specific tag definitions if any.

---

### Features

#### Nominal Features

* Nominal words ([NOUN](), [PROPN]() and [PRON]()) have an inherent [Gender]() feature with one of two values: `Masc` or `Fem`.
* The following parts of speech inflect for `Gender` as they must agree with nouns: [ADJ](), [DET](), [NUM](), [VERB](), [AUX](). For verbs (including auxiliaries), only participles inflect for `Gender`. Finite verbs don’t.
* The two main values of the [Number]() feature are `Sing` and `Plur`. The following parts of speech inflect for number: `NOUN`, `PROPN`, `PRON`, `ADJ`, `DET`, `VERB`and `AUX` (finite, participles and verbal nouns), marginally `NUM`. Selected nouns are plurale tantum `Ptan` or singulare tantum `Coll`.
* [Case]() has 6 possible values: `Nom`, `Gen`, `Dat`, `Acc`, `Loc`, `Voc`. It occurs with the nominal words, i.e., `NOUN`, `PROPN`, `PRON`, `ADJ`, `DET`, `NUM`, `VERB` and `AUX` (participles and verbal nouns).
* [Definite]() has 2 possible values: `Ind` and `Def`. The following parts of speech inflect for definitnes: `ADJ`, `VERB` and `AUX` (participles).


#### Verbal Features **TODO**

* There are five main (de)verbal form types, distinguished by the UPOS tag and the value of the [VerbForm]() feature:
    * Infinitive `Inf`, tagged [VERB]() or [AUX]().
    * Finite verb `Fin`, tagged `VERB` or `AUX`.
    * Participle `Part`, tagged `VERB` or `AUX`.
    * Converb `Conv`, tagged `VERB` or `AUX`.
    * Verbal noun `Vnoun`, tagged `NOUN`.
* [Aspect]() applies only to part of participles (`VERB`, `AUX`) and is either imperfective `Imp` or perfective `Perf`.
* Finite verbs always have one of five values of [Mood](): `Ind`, `Imp`, `Cnd`, `Qot` or `Nec`.
* [Tense]() is used for verbs and participles:
    * Verbs in the indicative mood always have one of three `Tense` values: `Past`, `Pres` or `Fut`.
    * Infinitive, imperative, conditional, quotative, and necessitative forms do not have the `Tense` feature.
    * The `Tense` feature is also used to distinguish declinable participles (tagged `VERB` or `AUX`) into two groups: present participles (_ziedošs_ "[it is] flowering" and _lasāms_ "[it is] readable") and past participles (_darījis_ "[he has] been doing" and _pateikts_ “[it is] said”).
* There are two values used for the [Voice() feature: `Act` and `Pass`:
    * Passive participles (_lasāms_ "[it is] readable" and _pateikts_ “[it is] said”) has `Voice=Pass`.
    * Finite verb forms and active participles (_ziedošs_ "[it is] flowering" and _darījis_ "[he has] been doing") have `Voice=Act`.
* [Evident]() applies to finite verb forms (`VERB`, `AUX`) and depends on value of `Mood`: quotatives have value `Nfh`, but indicative have value `Fh`.

*

---
**Instruction**: Describe inherent and inflectional features for major word classes (at least NOUN and VERB). Describe other noteworthy features. Include links to language-specific feature definitions if any.

---

## Syntax **TODO**

### Core Arguments

* Nominal subject ([nsubj]()) is a noun phrase usually in the nominative case. However:
    * If the noun phrase is quantified, it may be in the genitive, which is required by the quantifier.
    * With predicates _nebūt_, _trūkt_, _pietikt_, _netrūkt_, _nepietiek_ noun phrase can be in genitive.
    * A finite subordinate clause may serve as the subject and is labeled [csubj]().
    * The noun phrase may be in the dative, if the predicate is in the necessitative mood (_man jāskatās spēle_ "I have to watch the game") or if the predicate is with modal meaning and has subordinated infinitive (_viņam vajadzētu pasteigties_ "he should hurry").
* Objects as defined in the Latgalian grammar may be either bare noun phrases in accusative, dative, or genitive, or prepositional phrases in accusative, dative, genitive. All objects are labeled as [obj]() or [iobj]().
    * However, if the predicate is in the necessitative mood, object may be in nominative (_zēnam jāuzraksta mājasdarbs_ "the boy has to write a homework."), and it is labeled as `obj`.
    * Accusative objects are considered `obj`.
    * Objects in dative and genitive cases and prepositional objects are considered `iobj`.

### Non-verbal Clauses

The copula verb _būt_ "be" is used in equational and attributional nonverbal clauses. Purely existential clauses (also indicating location) use būt as well, but it is treated as the head of the clause and tagged [VERB]().

### Relations Overview

The following relation subtypes are used in Latgalian:
* [nsubj:pass]() for nominal subjects of passive verbs
* [csubj:pass]() for clausal subjects of passive verbs
* [aux:pass]() for passive auxiliaries
* [flat:foreign]() for non-first words in quoted foreign phrases
* [flat:name]() for exocentric complex name

The following relation types are not used for Latgalian: [clf](), [dislocated](), [list](), [reparandum](). However, `reparandum` should be introduced in future, as appropriate speech texts are annotated.

*

---
**Instruction**: Give criteria for identifying core arguments (subjects and objects), and describe the range of copula constructions in nonverbal clauses. List all subtype relations used. Include links to language-specific relations definitions if any.

---

## Treebanks

There is [1](../treebanks/ltg-comparison.html) Latgalian UD treebank:

  * [Latgalian-Cairo](../treebanks/ltg_cairo/index.html)

---
**Instruction**: Treebank-specific pages are generated automatically from the README file in the treebank repository and
from the data in the latest release. Link to the respective `*-index.html` page in the `treebanks` folder, using the language code
and the treebank code in the file name.

---
