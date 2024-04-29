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
* Double surnames such as _Vīke-Freiberga_ and words abbreviated with dashes such as _e-posts_ "e-mail", _k-dze_ "Ms." are tokenized as a single token.
* In Latgalian ordinal numerals are written with punctuation mark without whitespace like abbreviations (_1._), so we tokenize ordinal numeral together with punctuation mark as one token.
* Multiple dots (_..._ and _.._ ) are considered as one token. Multiple _?!_ are considered one token, _?!..._ is considered to be two tokens (_?!_ and _..._).

Paragraph borders from the original text is indicated by comment line `# newpar` in cases when paragraph borders aligns sentence borders and `MISC` value `NewPar=Yes` for the token following mid-sentence paragraph break. `MISC` value `SpaceAfter=No` is used to note tokens lacking any whitespace after.

## Morphology

### Tags

Latgalian uses all 17 universal POS categories.

#### Particles

[PART]() tag is used for following function words: _ar_, _ari_, _až_, _ba_, _da_, _dīvamžāļ_, _dīz_, _gon_, _ik_, _it_, _kab_, _kazyn_, _konče_, _koč_, _kod_, _kuo_, _lai_, _laikam_, _mošeit_, _mož_, _na_, _nabejs_, _naviņ_, _naz_, _nazyn_, _nui_, _nā_, _pat_, _prūtams_, _rikti_, _ta_, _tak_, _tik_, _tikai_, _to_, _tok_, _tože_, _varbyut_, _viņ_, _vys_, _vīneigi_. This list might be expanded in future.

#### Pronouns and Determiners

Effectively distinguishing [PRON]() and [DET]() categories in Latgalian (similarly as in Latvian) is very hard and currently no clear guidelines has been developed yet.

#### Auxiliary Verbs

Latgalian has one auxiliary verb [AUX](): _byut_ "to be". The auxiliary verb is used in several types of constructions:
* Analytic word forms of verbs.
* The copula in non-verbal predicates.
* The copula in infinitive predicates.

_Byut_ may still occur as normal [VERB]() if it is used in purely existential sentences or indicate location.

Verbs with modal meaning are not considered auxiliary in Latgalian.

#### Deverbal Nouns, Participles, Coverbs

Latgalian features rich set of deverbal derivations and not everything has been analized to align with UD guidelines yet. However, deverbal nouns with endings _-šona_, _-šonuos_ (_skrīšona_ "running") are tagged as [NOUN](). Most converbs with endings _-ūt_,  _-ūts_, _-ūte_, _-ūtīs_, _-om_, _-omīs_, _-dams_, _-dama_, _-damīs_, _-damuos_ are tagged as `VERB` or `AUX`. Most adjectival participles (_radzams_, _aizguojs_, _nagaideits_, _valkūšs_) are tagged as `VERB`.  Exceptions are lexicalized uses with separate meaning, like _prūtams_ "of course", _acimredzūt_ "obvious", which are tagged as `PART`, and _īspiejams_ "possible", which is tagged as `ADJ`.


### Features

#### Nominal Features

* Nominal words ([NOUN](), [PROPN]() and [PRON]()) have an inherent [Gender]() feature with one of two values: `Masc` or `Fem`.
* The following parts of speech inflect for `Gender` as they must agree with nouns: [ADJ](), [DET](), [NUM](), [VERB](), [AUX](). For verbs (including auxiliaries), only participles inflect for `Gender`. Finite verbs don’t.
* The two main values of the [Number]() feature are `Sing` and `Plur`. The following parts of speech inflect for number: `NOUN`, `PROPN`, `PRON`, `ADJ`, `DET`, `VERB`and `AUX` (finite, participles and verbal nouns), marginally `NUM`. Selected nouns are plurale tantum `Ptan` or singulare tantum `Coll`.
* [Case]() has 6 possible values: `Nom`, `Gen`, `Dat`, `Acc`, `Loc`, `Voc`. It occurs with the nominal words, i.e., `NOUN`, `PROPN`, `PRON`, `ADJ`, `DET`, `NUM`, `VERB` and `AUX` (participles and verbal nouns).
* [Definite]() has 2 possible values: `Ind` and `Def`. The following parts of speech inflect for definitnes: `ADJ`, `NUM`, `VERB` and `AUX` (participles).


#### Verbal Features

* There are five main (de)verbal form types, distinguished by the UPOS tag and the value of the [VerbForm]() feature:
    * Infinitive `Inf`, tagged [VERB]() or [AUX]().
    * Finite verb `Fin`, tagged `VERB` or `AUX`.
    * Supine form `Sup`, tagged `VERB` or `AUX`,
    * Participle `Part`, tagged `VERB` or `AUX`.
    * Converb `Conv`, tagged `VERB` or `AUX`.
    * Verbal noun `Vnoun`, tagged `NOUN`.
* [Aspect]() applies only to part of participles (`VERB`, `AUX`) and is either imperfective `Imp` or perfective `Perf`.
* Finite verbs always have one of five values of [Mood](): `Ind`, `Imp`, `Cnd`, `Qot` or `Nec`.
* [Tense]() is used for verbs and participles:
    * Verbs in the indicative mood always have one of three `Tense` values: `Past`, `Pres` or `Fut`.
    * Infinitive, imperative, conditional, quotative, and necessitative forms do not have the `Tense` feature.
    * The `Tense` feature is also used to distinguish declinable participles (tagged `VERB` or `AUX`) into two groups: present participles (_zīdūšs_ "[it is] flowering" and _skaitams_ "[it is] readable") and past participles (_darejs_ "[he has] been doing" and _pasaceits_ “[it has] been said”).
* There are two values used for the [Voice() feature: `Act` and `Pass`:
    * Passive participles (_skaitams_ "[it is] readable" and _pasaceits_ “[it has] been said”) has `Voice=Pass`.
    * Finite verb forms and active participles (_zīdūšs_ "[it is] flowering" and _darejs_ "[he has] been doing") have `Voice=Act`.
* [Evident]() applies to finite verb forms (`VERB`, `AUX`) and depends on value of `Mood`: quotatives have value `Nfh`, but indicative have value `Fh`.


#### Pronouns, Determiners, Quantifiers

* [PronType]() is used with pronouns [PRON](), determiners [DET]() and pronominal adverbs [ADV]() with 8 permissible values: `Prs`, `Rcp`, `Int`, `Rel`, `Dem`, `Tot`, `Neg`, `Ind`.
* [NumType]() is used with numerals (also cardinal numbers) NUM[](), ordinal numbers [ADJ](), and some adverbs [ADV]():
    * Numerals and ordinal numbers has one of three possible values: `Card`, `Ord` or `Frac`.
    * Adverbs _vīnreiz_ "once", _divreiz_ "twice", _treisreiz_ "thrice", _četrreiz_, _pīcreiz_, _sešreiz_, _septeņreiz_, _ostoņreiz_, _deveņreiz_, _desmitreiz_ "ten times" has `NumType=Mult`.
* The [Poss]() feature marks possessive personal pronouns and determiners (e.g., _muns_ "my") and possessive adjectives (e.g., _tovejs_ "yours") with value `Yes`.
* The [Reflex]() feature marks reflexive pronouns _seve_, _sevi_.
    * Reflexivity is also marked on reflexive verbs and participles ([VERB](), e.g., _apsamozguot_, _mozguotīs_, _apsavāruse_, _vārusīs_).
* [Person]() is marked for pronouns and finite verbs and has three values: `1`, `2` and `3`.
    * It is a lexical feature of personal pronouns `PRON` like _es_ "I", _tu_ "you" (singular), _jis_ "he", _jei_ "she", _mes_ "we", _jius_ "you" (plural), _jī_ "they" (plural, masculine), _juos_ "they" (plural, feminine).
    * It is a lexical feature of personal possessives `DET`/`PRON` _muns_, _munejs_, _munejais_ "my/mine", _tovs_, _tovejs_, _tovejais_ "your/yours" (singular), _myusejs_, _myusejais_ "our/ours", _jiusejs_, _jiusejais_ "your/yours" (plural).
    * `Person` is also marked on some demonstrative pronouns with value `3`.
    * As a cross-reference to subject, person is also marked on finite verbs (`VERB`, [AUX]()).
* [Foreign]() is annotated `Yes` for foreign words [X]().
* [Abbr]() is annotated `Yes` for abbreviations, which can be nouns [NOUN]() (_DJ_), [PROPN]() (_NATO_), `ADJ` (_gūd._ "honored"), `VERB` (_sal._ "compare"), `ADV` (_p.Kr._ "anno Domini"), `SYM` (_v.tml._ "etc.").


## Syntax

### Core Arguments

* Nominal subject ([nsubj]()) is a noun phrase usually in the nominative case. However:
    * If the noun phrase is quantified, it may be in the genitive, which is required by the quantifier.
    * With predicates _nabyut_, _tryukt_, _pītikt_, _natryukt_, _napītikt_ noun phrase can be in genitive.
    * A finite subordinate clause may serve as the subject and is labeled [csubj]().
    * The noun phrase may be in the dative, if the predicate is in the necessitative mood (_maņ juosaver spēle_ "I have to watch the game") or if the predicate is with modal meaning and has subordinated infinitive (_jam vajadzātu pasasteigt_ "he should hurry").
* Objects as defined in the Latgalian grammar may be either bare noun phrases in accusative, dative, or genitive, or prepositional phrases in accusative, dative, genitive. All objects are labeled as [obj]() or [iobj]().
    * However, if the predicate is in the necessitative mood, object may be in nominative (_puikam juoatnas iudiņs_ "the boy has to bring the water."), and it is labeled as `obj`.
    * Accusative objects are considered `obj`.
    * Objects in dative and genitive cases and prepositional objects are considered `iobj`.

### Non-verbal Clauses

The copula verb _byut_ "be" is used in equational and attributional nonverbal clauses. Purely existential clauses (also indicating location) use būt as well, but it is treated as the head of the clause and tagged [VERB]().

### Relations Overview

The following relation subtypes are used in Latgalian:
* [nsubj:pass]() for nominal subjects of passive verbs
* [csubj:pass]() for clausal subjects of passive verbs
* [aux:pass]() for passive auxiliaries
* [flat:foreign]() for non-first words in quoted foreign phrases
* [flat:name]() for exocentric complex name

The following relation types are not used for Latgalian: [clf](), [dislocated](), [list](), [reparandum](). However, `reparandum` should be introduced in future, as appropriate speech texts are annotated.


## Treebanks

There is [1](../treebanks/ltg-comparison.html) Latgalian UD treebank:

  * [Latgalian-Cairo](../treebanks/ltg_cairo/index.html)
