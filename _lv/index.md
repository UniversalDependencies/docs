---
layout: base
title:  'Latvian UD'
udver: '2'
---

# UD for Latvian <span class="flagspan"><img class="flag" src="../../flags/svg/LV.svg" /></span>

## Tokenization and Word Segmentation

In general, words are delimited by whitespace characters and punctuation is separated. Description of exceptions follows:
* A whitespace separating digits in a large number is not treated as a word separator. For example, _1 000 000_ ("1,000,000" by English rules) is one token.
* Abbreviations without spaces are treated as single words and may contain punctuation (_utt._ "etc."). In following cases we treat abbreviation as a single token even if whitespace is used between part of abbreviation and punctuation mark: _u.t.jpr._, _u.c._, _u.tml._, _v.tml_, _u.t.t._, _N.B._, _P.S._ and _P.P.S._
* Double surnames such as _Vīķe-Freiberga_ and words abbreviated with dashes such as _e-pasts_ "e-mail", _k-dze_ "Ms." are tokenized as a single token.
* In Latvian ordinal numerals are written with punctuation mark without whitespace like abbreviations (_1._), so we tokenize ordinal numeral together with punctuation mark as one token.
* Multiple dots (_..._ and _.._ ) are considered as one token. Multiple _?!_ are considered one token, _?!..._ is considered to be two tokens (_?!_ and _..._).

Paragraph borders from the original text is indicated by comment line `# newpar` in cases when paragraph borders aligns sentence borders and `MISC` value `NewPar=Yes` for the token following mid-sentence paragraph break. `MISC` value `SpaceAfter=No` is used to note tokens lacking any whitespace after.


## Morphology

### Tags

Latvian uses all 17 universal POS categories.

#### Particles

[PART]() tag is used for following function words: _acīmredzot_, _ak_, _ar_, _arī_, _arīdzan_, _da_, _diemžēl_, _diez_, _diezin_, _droši_, _gan_, _i_, _ij_, _ik_, _ir_, _it_, _itin_, _ja_, _jau_, _jā_, _jel_, _jo_, _kaut_, _kā_, _lai_, _laikam_, _mjā_, _ne_, _nea_, _nebūt_, _nez_, _nezin_, _nē_, _nu_, _nudien_, _nujā_, _nū_, _nūja_, _nūjā_, _pat_, _patiesi_, _patiešām_, _protams_, _proti_, _taču_, _tad_, _tak_, _tā_, _tāpat_, _tātad_, _tiešām_, _tik_, _tikai_, _tikpat_, _tipa_, _tomēr_, _turklāt_, _vai_, _varbūt_, _vēl_, _vien_, _vienīgi_, _vis_.

Particles can be homonymous with other POS, most notably, conjunctions [CCONJ]() and [SCONJ](), interjections [INTJ](), and adjectives [ADJ](), correct POS is assigned based on sentence context.

#### Pronouns and Determiners

Effectively distinguishing [PRON]() and [DET]() categories in Latvian is very hard as words used as `DET` can also be used as `PRON`, and, thus, traditional Latvian grammar does not define determiners as a distinct POS. The pronoun (`PRON`) vs. determiner (`DET`) distinction is based on the role of the word in the UD tree: if the role in current sentence is [det]() the word is tagged as `DET`. In turn the role `det` is used for Latvian pronoun category, which modify nouns in the sentence and agree with this noun in gender, number and case. If these words are used independently in a given sentence, they are tagged as [PRON](). Pronominal quantifiers _daudzi_ "many" and _vairāki_ "several" , and personal possessives _manējais_, _tavējais_, _mūsējais_, _jūsējais_, _viņējais_ are `DET` as well if they modify the noun in the sentence, however in Latvian grammar they are described as adjectives.

#### Auxiliary Verbs

* Latvian has dour auxiliary verbs [AUX](): _būt_ "to be", _kļūt_ "to become", _tikt_ "to get", and _tapt_ "to become" (obsolete). The auxiliary verb is used in several types of constructions:
    * Analytic word forms of verbs (_būt_, _tikt_).
    * The copula in non-verbal predicates (_būt_, _kļūt_) .
    * The copula in infinitive predicates (_būt_).
* _Būt_, _tikt_ and _tapt_ may still occur as normal [VERB]() if they are used in purely existential sentences or indicate location. Word _kļūt_ always is tagged as [AUX]().
* Verbs with modal meaning are not considered auxiliary in Latvian.
* Deverbal nouns with endings _-šana_, _-šanās_ (_skriešana_ "running") are tagged as [NOUN](). Most converbs with endings _-ot_, _-oties_, _-am_, _-ām_, _-amies_, _-āmies_, _-dams_, _-damies_, _-damās_ are tagged as `VERB` or `AUX`. Most adjectival participles (_redzams_, _aizgājis_, _negaidīts_, _velkošs_) are tagged as `VERB`.  Exceptions are lexicalized uses with separate meaning, like _protams_ "of course", _acīmredzot_ "obvious", which are tagged as `PART`, and _iespējams_ "possible", which is tagged as `ADJ`.


### Features

#### Nominal Features

* Nominal words ([NOUN](), [PROPN]() and [PRON]()) have an inherent [Gender]() feature with one of two values: `Masc` or `Fem`.
* The following parts of speech inflect for `Gender` as they must agree with nouns: [ADJ](), [DET](), [NUM](), [VERB](), [AUX](). For verbs (including auxiliaries), only participles inflect for `Gender`. Finite verbs don’t.
* The two main values of the [Number]() feature are `Sing` and `Plur`. The following parts of speech inflect for number: `NOUN`, `PROPN`, `PRON`, `ADJ`, `DET`, `VERB`and `AUX` (finite, participles and verbal nouns), marginally `NUM`. Selected nouns are plurale tantum `Ptan` or singulare tantum `Coll`.
* [Case]() has 6 possible values: `Nom`, `Gen`, `Dat`, `Acc`, `Loc`, `Voc`. It occurs with the nominal words, i.e., `NOUN`, `PROPN`, `PRON`, `ADJ`, `DET`, `NUM`, `VERB` and `AUX` (participles and verbal nouns).
* [Definite]() has 2 possible values: `Ind` and `Def`. The following parts of speech inflect for definitnes: `ADJ`, `VERB` and `AUX` (participles).

#### Degree and Polarity

* [Degree]() applies to adjectives ([ADJ]()), adverbs ([ADV]()), and some participles ([VERB](), [AUX]()), and has one of three possible values: `Pos`, `Cmp`, `Sup`.
* [Polarity]() has two values, `Pos` and `Neg`, and applies to verbs ([VERB](), [AUX]()).
    * Words _ne_, _nē_ "no" occurs as independent negation particles ([PART]()) and are marked with `Polarity=Neg`.
    * Occasionaly _ne_ occurs as a part of correlative conjunction and is marked with `Polarity=Neg`.
    * Word _jā_ occurs as an independent affirmation particle ([PART]()) and is marked with `Polarity=Pos`.
    * The `Polarity` feature is not used with pronouns and determiners, although there is a subset of pronouns and determiners which are considered to be negated traditionally. The `PronType=Neg` feature is used there instead.

#### Verbal Features

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

#### Pronouns, Determiners, Quantifiers

* [PronType]() is used with pronouns [PRON](), determiners [DET]() and pronominal adverbs [ADV]() with 8 permissible values: `Prs`, `Rcp`, `Int`, `Rel`, `Dem`, `Tot`, `Neg`, `Ind`.
* [NumType]() is used with numerals (also cardinal numbers) NUM[](), ordinal numbers [ADJ](), and some adverbs [ADV]():
    * Numerals and ordinal numbers has one of three possible values: `Card`, `Ord` or `Frac`.
    * Adverbs _vienreiz_ "once", _divreiz_ "twice", _trīsreiz_ "thrice", _četreiz_, _piecreiz_, _sešreiz_, _septiņreiz_, _astoņreiz_, _deviņreiz_, _desmitreiz_ "ten times", _pusotrreiz_ "one and a half times" has `NumType=Mult`.
* The [Poss]() feature marks possessive personal pronouns and determiners (e.g., _mans_ "my") and possessive adjectives (e.g., _tavējais_ "yours") with value `Yes`.
* The [Reflex]() feature marks reflexive pronoun _sevis_.
    * Reflexivity is also marked on reflexive verbs and participles ([VERB](), e.g., _mazgāties_, _pusapģērbusies_).
* [Person]() is marked for pronouns and finite verbs and has three values: `1`, `2` and `3`.
    * It is a lexical feature of personal pronouns `PRON` like _es_ "I", _tu_ "you", _viņš_ "he", _viņa_ "she", _viņi_ "they" (plural, masculine), _viņas_ "they" (plural, feminine).
    * It is a lexical feature of personal possessives `DET`/`PRON` _mans_, _manējais_ "my/mine", _tavs_, _tavējais_ "your/yours" (singular), _mūsējais_ "our/ours", _jūsējais_ "your/yours" (plural), _viņējais_ "his/hers/theirs".
    * `Person` is also marked on some demonstrative pronouns with value `3`.
    * As a cross-reference to subject, person is also marked on finite verbs (`VERB`, [AUX]()).
* [Foreign]() is annotated `Yes` for foreign words [X]().
* [Abbr]() is annotated `Yes` for abbreviations, which can be nouns [NOUN]() (_DJ_), [PROPN]() (_NATO_), `ADJ` (_god._ "honored"), `VERB` (_skat._ "see"), `ADV` (_v.j.l._ "above sea level"), `SYM` (_utt._ "etc.").

#### Unused Features

Features not applicable for Latvian:
* [Animacy](),
* [Clusivity](),
* [NounClass](),
* [Polite]().


## Syntax

### Core Arguments

* Nominal subject ([nsubj]()) is a noun phrase usually in the nominative case. However:
    * If the noun phrase is quantified, it may be in the genitive, which is required by the quantifier.
    * With predicates _nebūt_, _trūkt_, _pietikt_, _netrūkt_, _nepietiek_ noun phrase can be in genitive.
    * A finite subordinate clause may serve as the subject and is labeled [csubj]().
    * The noun phrase may be in the dative, if the predicate is in the necessitative mood (_man jāskatās spēle_ "I have to watch the game") or if the predicate is with modal meaning and has subordinated infinitive (_viņam vajadzētu pasteigties_ "he should hurry").
* Objects as defined in the Latvian grammar may be either bare noun phrases in accusative, dative, or genitive, or prepositional phrases in accusative, dative, genitive. All objects are labeled as [obj]() or [iobj]().
    * However, if the predicate is in the necessitative mood, object may be in nominative (_zēnam jāuzraksta mājasdarbs_ "the boy has to write a homework."), and it is labeled as `obj`.
    * Accusative objects are considered `obj`.
    * Objects in dative and genitive cases and prepositional objects are considered `iobj`.

### Non-verbal Clauses

The copula verbs _būt_ "be" and _kļūt_ "become" is used in equational and attributional nonverbal clauses. Purely existential clauses (also indicating location) use būt as well, but it is treated as the head of the clause and tagged [VERB]().

### Relations Overview

The following relation subtypes are used in Latvian:
* [nsubj:pass]() for nominal subjects of passive verbs
* [csubj:pass]() for clausal subjects of passive verbs
* [aux:pass]() for passive auxiliaries
* [flat:foreign]() for non-first words in quoted foreign phrases
* [flat:name]() for exocentric complex name

The following relation types are not used for Latvian: [clf](), [dislocated](), [list](), [reparandum](). However, `reparandum` should be introduced in future, as appropriate speech texts are annotated.


## Annotating Textual Errors

Following `MISC` values can be used to annotate errors in the source text interfering with treebank annotation:
* `CorrectionType=Spelling` for typos (`FORM` is given as in text, while `LEMMA`, `UPOS`, `XPOS` and `FEATS` as for word without the error)
* `CorrectionType=Spacing` for missing or unnecessary whitespaces
* `CorrectionType=InsertedPunctAfter` for cases when there is missing punctuation mark (usually comma) after this token
* `CorrectionType=RemovedPunctuation` for unnecessary punctuation (usually comma)
* In case of `CorrectionType=Spelling` additional feature `CorrectedForm=`... gives the corrected form.


## Treebanks

There is [1](../treebanks/lv-comparison.html) Latvian UD treebank:

  * [Latvian-LVTB](../treebanks/lv_lvtb/index.html)
