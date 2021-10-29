---
layout: base
title:  'Javanese UD'
udver: '2'
---

# UD for Javanese <span class="flagspan"><img class="flag" src="../../flags/svg/ID.svg" /></span>

* Javanese has several language levels: Krama, Krama Inggil, Madya, and Ngoko. For certain words, we will add information about its level: Kr. for Krama, KI for Krama Inggil, Md. for Madya, and Ng. for Ngoko.


## Tokenization and Word Segmentation

* In general, words are delimited by whitespace characters. Special treatments are given to multiword tokens and punctuations.

* Special treatments of multiword tokens:
  * Multiword tokens that contain clitics are split into two tokens.
    * _-ku_ (Ng.) "me/my"
    * _-mu_ (Ng.) "you/your",
    * _-é_ (Ng.) "he/him/she/her/it"
    * _-ipun_ (Kr.) "he/him/she/her/it"

* Special treatments for punctuations. All punctuation symbols are separated from the words, except in two cases:
  * Hyphen in reduplicated words. Javanese has many reduplicated words as nouns, verbs, and so on. These reduplicated words are not split and remain one token. The examples of reduplicated words are:
    * Plural noun: _bangsa-bangsa_ "nations"
    * Verb: _mlaku-laku_ "traveling"
    * Determiner: _pinten-pinten, pira-pira_ "several"
    * Adverb: _akèh-akèhan_ "much"
    
  * For abbreviations. All abbreviations such as Mr., M.Sc. Tn., are not split and remain one token.

## Morphology

### Tags

* UD Javanese treebank uses all UPOS tags.

* The auxiliary ([AUX]()). We defined these Javanese words as AUX:

  * _yaiku_ (Ng.) or _inggih punika_ (Kr.) “be” serve as copulas.

  * Tenses-related AUX:
    * _bakal_ (Ng.) or _bade_ (Kr.) “will/would” for the future tense.
    * _lagi_ (Ng.) “be” for the present tense.
    * _wis_ (Ng.) or _sampun_ (Kr.) “have/has/had” for the simple/past perfect tense.

  * Modal-related AUX:
    * _kudu_ (Ng.), _mesti_ (Kr.) as the equivalents of modal “must”.
    * _sekuduné/semestiné_ as the equivalents of modal 'shall/should'.
    * _bisa_ (Ng.), _saged_ (Kr.) as the equivalents of modal “can/could”.

* [PART]() is used for:
  * negation words: _ora_ (Ng.) or _boten_ (Kr.): "no/not" 
  * particles of _ko, mbok, tho, ya_

* Javanese has the following coordinating conjunction words ([CCONJ]()):
  * _lan/karo_ (Ng.), _kaliyan_ (Kr.): as the equivalents of "and" in English
  * _atawa_ (Ng.), _utawi_ (Kr.): as the equivalents of "or" in English
  * _nanging_ : as the equivalents of "but" in English

### Features

* We propose the use of 13 of 24 features defined in UD v2 that are relevant to Javanese grammar:
  * [Abbr](), with one possible value: `Yes`. This feature can be applied to all UPOS categories, except [PUNCT]() and [SYM]().

  * [Definite](), applies to [DET]() with two possible values: `Def` and `Ind` .

  * [Foreign](), with one possible value: `Yes`. This feature only applies to [X]().

  * [Mood](), applies to [VERB]() with two possible values: `Imp` and `Ind`.
    * `Mood=Imp` for imperative clauses
    * `Mood=Ind` for declarative clauses

  * [Number](), applies to [DET](), [NOUN](), and [PRON](), with two possible values: `Sing`, or `Plur`.

  * [NumType](), applies to [NUM]() and [ADJ](), with two possible values: `Card` or `Ord`.
    * `NumType=Card` is used for `NUM`.
    * `NumType=Ord` is used for ordinal numbers tagged as `ADJ`.

  * [Person](), applies to [PRON]() with three possible values: `1`, `2`, `3`.

  * [Polarity](), with one possible value: `Neg`, applies to [PART]() and [INTJ]().
    * `Polarity=Neg` for [PART]() applies for negating particles
    * `Polarity=Neg` for [INTJ]() as in _**Mboten**_ "**No**". The word _mboten_ "no" will be given feature `Polarity=Neg`.


  * [Polite]() with four possible values: `Infm`, `Form`, `Elev`, `Humb`
    1. `Polite=Infm` for words of Ngoko language
    2. `Polite=Form` for words of Krama and Madya languages
    3. `Polite=Elev` for words of Krama Inggil
    4. `Polite=Humb` for words of Krama Andhap


  * [PronType]() with eight possible values: `Art`, `Dem`, `Emp`, `Ind`, `Int`,  `Prs`, `Rel`, and `Tot`
    1. `PronType=Art` is used for [DET]() along with [Definite]() feature.
    2. `PronType=Dem` is used for [DET]() or [PRON](), such as for words _iki_ (Ng.), _punika_ (Kr.) "this" 
    3. `PronType=Emp` is used for [DET]() for word _piyambak_ "self"
    4. `PronType=Ind` is used for [DET]() such as for _akèh_ (Ng.) "many"
    5. `PronType=Int` is used for [ADV]() or [PRON](), such as _sapa_ (Ng.), _sinten_ (Kr.) "who", _opo_ (Ng.) "what"
    6. `PronType=Prs` is used for [PRON]() along with [Person]() feature.
    7. `PronType=Rel` is used for [PRON]() such as _kang, sing_ (Ng.),_ingkang_ (Kr.) "which/that"
    8. `PronType=Tot` is used for [PRON]() or [DET]() such as _sedaya_ (Kr) "all"

  * [Reflex]() with one possible value: `Yes`. For [PRON](), such as for word _dhèknè_ "self".

  * [Typo](), with one possible value, `Yes`. This feature can be applied to all UPOS categories except [PUNCT]() and [SYM]().

  * [Voice](), applies to [VERB]() with two possible values: `Act` and `Pass`.
    * `Voice=Act` for active verbs
    * `Voice=Pass` for passive verbs


## Syntax

* The default word order is SVO, so the subject ([nsubj]()) normally precedes and the object follows the verb (with the exception of inverted sentences).
* A verb may serve as the subject and is labeled as clausal subject, either as [csubj]() or [csubj:pass]().
* Transitive verbs will have a noun phrase as the object ([obj]()).
* Passive verbs could be followed by agent ([obl:agent]())
* Verbs can have oblique arguments ([obl]()). Special for temporal modifiers, we label it as [obl:tmod]().

### Non-verbal Clauses

* The copula _yaiku_ (Ng.) or _inggih punika_ (Kr.) (be) is optionally used in equational, attributional, locative, possessive and benefactory nonverbal clauses.

### Relations Overview

* The following 12 relation subtypes could be used in UD Javanese treebank:
  * [acl:relcl]() for relative clauses that modify a noun phrase.
  * [advmod:emph]() for particles ([PART]()) that emphasize other words.
  * [case:adv]() for case to ADJ/VERB that plays role as adverb.
  * [csubj:pass]() for clausal subjects of passive verbs.
  * [flat:foreign]() to label sequences of foreign words.
  * [flat:name]() to label sequences of names of PROPN-PROPN pairs.
  * [nmod:poss]() for possessive relationship.
  * [nmod:lmod]() for locative modifier of a noun phrase.
  * [nmod:tmod]() for temporal modifier of a noun phrase.
  * [nsubj:pass]() for nominal subjects of passive verbs.
  * [obl:agent]() for agents of passive verbs.
  * [obl:tmod]() for temporal modifier for a [VERB]()/[ADJ]().


## Treebanks

There is 1 Javanese UD treebank:

  * [Javanese-CSUI](../treebanks/jv_csui/index.html)
