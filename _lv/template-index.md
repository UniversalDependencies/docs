---
layout: base
title:  'Latvian UD'
udver: '2'
---

# UD for Latvian <span class="flagspan"><img class="flag" src="../../flags/svg/LV.svg" /></span>

## Tokenization and Word Segmentation

In general, words are delimited by whitespace characters and punctuation is separated. Description of exceptions follows:
* A whitespace separating digits in a large number is not treated as a word separator. For example, _1 000 000_ ("1,000,000" by English rules) is one token.
* Abbreviations without spaces are treated as single words and may contain punctuation (_utt._ "etc."). In following cases we treat abbreviation as a single token even if whitespace is used between part of abbreviation and punctuation mark: _u.t.jpr._, _u.c._, _u.tml._, _v.tml_, _u.t.t._, _N.B._, _P.S._ and _P.P.S_.
* Double surnames such as _Vīķe-Freiberga_ and words abbreviated with dashes such as _e-pasts_ "e-mail", _k-dze_ "Ms." are tokenized as a single token.
* In Latvian ordinal numerals are written with punctuation mark without whitespace like abbreviations (_1._), so we tokenize ordinal numeral together with punctuation mark as one token.
* Multiple dots (_..._ and _.._ ) are considered as one token. Multiple _?!_ are considered one token, _?!..._ is considered to be two tokens (_?!_ and _..._).


## Morphology

### Tags

Latvian uses all 17 universal POS categories. 

* [PART]() tag is used for following function words: _acīmredzot_, _ak_, _ar_, _arī_, _arīdzan_, _da_, _diemžēl_, _diez_, _diezin_, _droši_, _gan_, _i_, _ij_, _ik_, _ir_, _it_, _itin_, _ja_, _jau_, _jā_, _jel_, _jo_, _kaut_, _kā_, _lai_, _laikam_, _mjā_, _ne_, _nea_, _nebūt_, _nez_, _nezin_, _nē_, _nu_, _nudien_, _nujā_, _nū_, _nūja_, _nūjā_, _pat_, _patiesi_, _patiešām_, _protams_, _proti_, _taču_, _tad_, _tak_, _tā_, _tāpat_, _tātad_, _tiešām_, _tik_, _tikai_, _tikpat_, _tipa_, _tomēr_, _turklāt_, _vai_, _varbūt_, _vēl_, _vien_, _vienīgi_, _vis_.
* Effectively distinguishing [PRON]() and [DET]() categories in Latvian is very hard as words used as `DET` can also be used as `PRON`, and, thus, traditional Latvian grammar does not define determiners as a distinct POS. The pronoun (`PRON`) vs. determiner (`DET`) distinction is based on the role of the word in the UD tree: if the role in current sentence is [det]() the word is tagged as DET. In turn the role `det` is used for Latvian pronoun category, which modify nouns in the sentence and agree with this noun in gender, number and case. If these words are used independently in a given sentence, they are tagged as [PRON](). Pronominal quantifiers _daudzi_ "many" and _vairāki_ "several" , and personal possessives _manējais_, _tavējais_, _mūsējais_, _jūsējais_, _viņējais_ are `DET` as well if they modify the noun in the sentence, however in Latvian grammar they are described as adjectives. 
* Latvian has dour auxiliary verbs [AUX](): _būt_ "to be", _kļūt_ "to become", _tikt_ "to get", and _tapt_ "to become" (obsolete). The auxiliary verb is used in several types of constructions:
    * Analytic word forms of verbs (_būt_, _tikt_).
    * The copula in non-verbal predicates (_būt_, _kļūt_) .
    * The copula in infinitive predicates (_būt_).
* _Būt_, _tikt_ and _tapt_ may still occur as normal [VERB]() if they are used in purely existential sentences or indicate location. Word _kļūt_ always is tagged as [AUX]().
* Verbs with modal meaning are not considered auxiliary in Latvian.
* Deverbal nouns with endings _-šana_, _-šanās_ (_skriešana_ "running") are tagged as [NOUN](). Most converbs with endings _-ot_, _-oties_, _-am_, _-ām_, _-amies_, _-āmies_, _-dams_, _-damies_, _-damās_ are tagged as `VERB` or `AUX`. Most adjectival participles (_redzams_, _aizgājis_, _negaidīts_, _velkošs_) are tagged as `VERB`.  Exceptions are lexicalized uses with separate meaning, like_protams_ "of course", _acīmredzot_ "obvious", which are tagged as `PART`, and _iespējams_ "possible", which is tagged as `ADJ`.


### Features

#### Nominal Features

* Nominal words ([NOUN](), [PROPN]() and [PRON]()) have an inherent `Gender` feature with one of two values: `Masc` or `Fem`. 
* The following parts of speech inflect for `Gender` as they must agree with nouns: [ADJ](), [DET](), [NUM](), [VERB](), [AUX](). For verbs (including auxiliaries), only participles inflect for `Gender`. Finite verbs don’t.
* The two main values of the `Number` feature are `Sing` and `Plur`. The following parts of speech inflect for number: `NOUN`, `PROPN`, `PRON`, `ADJ`, `DET`, `VERB`and `AUX` (finite, participles and verbal nouns), marginally `NUM`. Selected nouns are plurale tantum `Ptan` or singulare tantum `Coll`. 
* `Case` has 6 possible values: `Nom`, `Gen`, `Dat`, `Acc`, `Loc`, `Voc`. It occurs with the nominal words, i.e., `NOUN`, `PROPN`, `PRON`, `ADJ`, `DET`, `NUM`, `VERB` and `AUX` (participles and verbal nouns).
* `Definite` has 2 possible values: `Ind` and `Def`. The following parts of speech inflect for definitnes: `ADJ`, `VERB` and `AUX` (participles).

#### Degree and Polarity

* `Degree` applies to adjectives ([ADJ]()), adverbs ([ADV]()), and some participles ([VERB](), [AUX]()), and has one of three possible values: `Pos`, `Cmp`, `Sup`.
* `Polarity` has two values, `Pos` and `Neg`, and applies to verbs ([VERB](), [AUX]()).
    * Words _ne_, _nē_ "no" occurs as independent negation particles ([PART]()) and are marked with `Polarity=Neg`.
    * Occasionaly _ne_ occurs as a part of correlative conjunction and is marked with `Polarity=Neg`.
    * Word _jā_ occurs as an independent affirmation particle ([PART]()) and is marked with `Polarity=Pos`.
    * The `Polarity` feature is not used with pronouns and determiners, although there is a subset of pronouns and determiners which are considered to be negated traditionally. The `PronType=Neg` feature is used there instead.

#### Verbal Features

* There are five main (de)verbal form types, distinguished by the UPOS tag and the value of the `VerbForm` feature:
    * Infinitive `Inf`, tagged [VERB]() or [AUX]().
    * Finite verb `Fin`, tagged `VERB` or `AUX`.
    * Participle `Part`, tagged `VERB` or `AUX`.
    * Converb `Conv`, tagged `VERB` or `AUX`.
    * Verbal noun `Vnoun`, tagged `NOUN`.
* `Aspect` applies only to part of participles (`VERB`, `AUX`) and is either imperfective `Imp` or perfective `Perf`. 
* Finite verbs always have one of five values of `Mood`: `Ind`, `Imp`, `Cnd`, `Qot` or `Nec`. 
* Verbs in the indicative mood always have one of three `Tense` values: `Past`, `Pres` or `Fut`. 
    * Imperative, conditional, quotative, and necessitative forms do not have the `Tense` feature.
    * The `Tense` feature is also used to distinguish present and past declinable participles (_ziedošs_ "[it is] flowering" and _lasāms_ "[it is] readable" vs. _darījis_ "[he has] been doing" and _pateikts_ “[it is] said”; tagged `VERB` or `AUX`).  
* There are two values used for the `Voice` feature: `Act` and `Pass`.
    * Passive participles (_lasāms_ "[it is] readable" and_pateikts_ “[it is] said”) has `Voice=Pass`.
    * Finite verb forms and active participles (_ziedošs_ "[it is] flowering" and _darījis_ "[he has] been doing") have `Voice=Act`.
* `Evident` applies to finite verb forms (`VERB`, `AUX`) and depends on value of `Mood`: quotatives have value `Nfh`, but indicative have value `Fh`.

---
**Instruction**: Describe inherent and inflectional features for major word classes (at least NOUN and VERB). Describe other noteworthy features. Include links to language-specific feature definitions if any.

---

## Syntax

*

---
**Instruction**: Give criteria for identifying core arguments (subjects and objects), and describe the range of copula constructions in nonverbal clauses. List all subtype relations used. Include links to language-specific relations definitions if any.

---

## Treebanks

There is [1](../treebanks/lv-comparison.html) Latvian UD treebank:

  * [Latvian-LVTB](../treebanks/lv-lvtb/index.html)
