---
layout: base
title:  'Indonesian UD'
udver: '2'
---

# UD for Indonesian <span class="flagspan"><img class="flag" src="../../flags/svg/ID.svg" /></span>

## Tokenization and Word Segmentation

* In general, words are delimited by whitespace characters. Special treatment is given to multiword tokens and punctuation.

* Special treatment of multiword tokens:
  * Multiword tokens that end with particles _-lah/-kah/-tah/-pun_ are split into two tokens. These particles are usually used to emphasize the word before them. Particles of -lah/-kah/-tah are clitics, while particle pun can be written as clitic or a single token. The examples of how to tokenize these clitic particles are as follows:
    * _baca**lah**_ is split into _baca_ "read" and _**lah**_
    * _dia**kah**_ is split into _dia_ "he/she" and _**kah**_
    * _apa**tah**_ is split into _apa_ "what" and _**tah**_
    * _walau**pun**_ is split into _walau_ "although" and _**pun**_

  * Multiword tokens that contain clitics of _-ku_ "me/my", _-mu_ "you/your", _-nya_ "he/him/she/her/it" are split into two tokens. For example: _mencintai**nya**_ "love him/her/it" is split into _mencintai_ "love" and _**nya**_ "him/her/it". However, there are exceptions for words ending with _-nya_. All _-nya_ that has role as pronoun and determiner will be separated from the main word, but if the word ending with _-nya_ has a role as an adverb or adjective, we keep them unseparated. For example:
    * adverbs ending with _-nya_: _khusus**nya**_ "especially", _awal**nya**_ "initially", _akhir**nya**_ "finally"
    * adjectives ending with _-nya_: _sebelum**nya**_ "previous", _sesudah**nya**_ "next"

* Special treatment for punctuation. All punctuation symbols are separated from the words, except in two cases:
  * Hyphen in reduplicated words. Indonesian has many reduplicated words as nouns (both singular and plural), verbs, adjectives, adverbs, and so on. These reduplicated words are not split and remain one token. The examples of reduplicated words are:
    * Singular noun: _mata-mata_ "spy"
    * Plural noun: _anak-anak_ "children"
    * Verb: _merobek-robek_ "shredding"
    * Adjective: _hiruk-pikuk_ "noisy"
    * Adverb: _terus-menerus_ "continuously"
  * For abbreviations. All abbreviations such as Mr., M.Sc. Tn., are not split and remain one token.



## Morphology

### Tags

* We refer to [KBBI](https://kbbi.kemdikbud.go.id/) (Kamus Besar Bahasa Indonesia/Indonesian Great Dictionary) as the reference dictionary. However, since this dictionary only defines 7 word classes: noun, verb, adjective, adverb, pronoun, particle and number, we need to make adjustments so that the tags conform to UDv2.
* Indonesian PUD uses all 17 universal POS categories.
* [PART]() is used for:
  * negation words: _tidak_ "no", _tak_ "no", _bukan_ "no"
  * particles of _-lah, -kah, -tah, pun_, that have been discussed in the previous section.
* The auxiliary ([AUX]()) vs. [VERB]() distinction is based on examples for English treebank, since initially there is no AUX type in KBBI. We defined 12 Indonesian words as AUX as follows:
  * _akan_ “will” for the future tense.
  * _sedang_ “be” for the present tense.
  * _telah_ and _sudah_ “have” for the past tense.
  * _bisa, dapat_ and _mampu_ as the equivalents of modal “can”.
  * _boleh_ as the equivalent of modal “may”.
  * _mungkin_ as the equivalent of modal “might”.
  * _harus_ as the equivalent of modal “must”.
  * _adalah_ and _ialah_ “be” serve as copulas. 
* The pronoun ([PRON]()) vs. determiner ([DET]()) distinction is also based on examples for English treebank, since DET word class also is not defined in KBBI.
  * The following word types are tagged as PRON:
    * personal pronouns, such as _saya/aku/ku_ "I", _kamu/mu/anda_ "you", _dia/ia/nya_ "he/she/it/him/her/its", _kami/kita_ "we/us/our", _mereka_ "they/them/their"
    * interrogative pronouns, _apa_ "what", _siapa_ "who" as in _**Apa** yang kamu inginkan?_ "**What** do you want?"
    * relative pronouns: _apa_ "what", _siapa_ "who" as in _Saya tahu **siapa** yang kamu maksud._ "I know **who** you mean"
    * indefinite pronouns: _seseorang_ "seomeone/somebody", _sesuatu_ "something"
    * total pronouns, such as _semua_ "all" as in _**Semua** kecuali bukumu_ "**All** except your books".
    * demonstrative pronouns: _ini_ "this" as in _**Ini** bukan salahmu._ "**This** is not your fault". 
  * The following word types are tagged as DET:
    * possessive pronouns. All personal pronouns in Indonesian can also be used as possessive pronouns. For example:
      * _-nya_ as PRON as in _Aku membawa**nya** ke sini._ "I bring **it** here."
      * _-nya_ as DET as in _Rumah**nya** di Depok._ "**His/her** house is in Depok."
    * pronominal numerals: _beberapa_ "some/many", _semua_ "all" as in _**semua** siswa_ "**all** students"
    * demonstrative determiners: _ini_ "this" as in _Kota **ini** sangat indah_ "**This** city is beautiful"
* Indonesian has the following coordinating conjunction words ([CCONJ]()):
  * _dan, serta, maupun_ as the equivalents of "and" in English
  * _atau_ "or"
  * _tapi, tetapi, namun, melainkan_ as the equivalents of "but" in English
* Indonesian also has (de)verbal form as ADJ, ADV or NOUN
  * Verbal adjecive as in _pesawat **terbang**_ (plane). Word _terbang_ "fly" is a verb, but in this noun phrase it functions as an adjective.
  * Verbal adverb as in _secara **terpisah**_ "separately". Word _terpisah_ "separated" is a verb, but when used together with _secara_ "with", the two tokens serve as an adverb.
  * Verbal noun as in _Hobinya adalah **memancing**_ "His hobby is fishing". In this sentence, _memancing_ "fishing" functions as a noun.


### Features

* We propose the use of 12 of 24 features defined in UDv2 that are relevant to Indonesian grammar:
  * [Abbr](), with one possible value: `Yes`. This feature can be applied to all UPOS categories, except [PUNCT]() and [SYM]().
  * [Clusivity](), applies to [PRON]() with two possible values: `Ex` and `In`.
    * `Clusivity=Ex` for _kami_ "we/our"
    * `Clusivity=In` for _kita_ "we/our"
  * [Degree](), applies to [ADJ]() with two possible values: `Pos` and `Sup`.
    * `Degree=Pos` is used for _baik_ "good", _cantik_ "beautiful", etc.
    * `Degree=Sup` us used for _terbaik_ "best", _tercantik_ "most beautiful", etc.
  * [Foreign](), with one possible value: `Yes`. This feature only applies to [X]().
  * [Number](), applies to [NOUN]() and [PRON]() with two possible values: `Sing` or `Plur`.
  * [NumType](), applies to [NUM]() and [ADJ](), with two possible values: `Card` or `Ord`.
    * `NumType=Card` is used for `NUM`.
    * `NumType=Ord` is used for ordinal numbers tagged as `ADJ`.
  * [Person](), applies to [PRON]() with three possible values: `1`, `2`, `3`.
  * [Polarity](), with one possible value: `Neg`, applies to [PART]() and [INTJ]().
    * `Polarity=Neg` for [PART]() applies for negation words as in _Saya **tidak** menyukainya_ "I do **not** like him/her/it". The word _tidak_ "no" will be tagged with `Polarity=Neg`.
    * `Polarity=Neg` for [INTJ]() as in _**Tidak**, terima kasih_ "**No**, thanks". The word _tidak_ "no" will be given feature `Polarity=Neg`.
  * [Poss](), applies to [DET](), with one possible value: `Yes`. This feature will be applied to all [DET]() that serve as possessive pronouns.
  * [PronType](), applies to [PRON](), [DET](), and [ADV](). For Indonesian, 7 possible values can be applied:
    1. `PronType=Dem`, applies to `PRON` such as for _itu_ "that" in _**Itu** masalahmu._ "**That** is your problem."
    2. `PronType=Emp`, applies to `DET` such as for _sendiri_ "self" in _Kamu harus percaya pada dirimu **sendiri**_ "You have to believe in your**self**".
    3. `PronType=Ind`, applies to `PRON` such as for _seseorang_ "someone/somebody" or _sesuatu_ "something"
    4. `PronType=Int`, applies to `PRON` and `ADV`.
      * `PronType=Int` for `PRON`, such as for _apa_ "what" and _siapa_ "who" in interrogative sentences
      * `PronType=Int` for `ADV`, such as for _bagaimana_ "how" and _kapan_ "when" in interrogative sentences
    5. `PronType=Prs`, applies to `PRON` or `DET` for all personal and possessive pronouns or determiners.
    6. `PronType=Rel`, applies to `PRON` and `ADV`.
      * `PronType=Rel` for `PRON`, such as for _apa_ "what", _siapa_ "who", _yang_ "that".
      * `PronType=Rel` for `ADV`, such as for _bagaimana_ "how" and _kapan_ "when" in non-interrogative sentences
    7. `PronType=Tot`, applies to `PRON`, `DET`, or `ADV`.
      * `PronType=Tot` for `PRON`, such as for _semua_ "all" in _**Semua** adalah milikmu._ "**All** is yours."
      * `PronType=Tot` for `DET`, such as for _semua_ "all" in _**Semua** siswa terlihat senang._ "**All** students look happy."
      * `PronType=Tot` for `ADV`, such as for _selalu_ "always" in _Dia **selalu** terlambat_. "She is **always** late."
  * [Reflex](), applies to [PRON]() with one possible value: Yes. 
  * [Typo](), with one possible value, `Yes`. This feature can be applied to all UPOS categories except [PUNCT]() and [SYM]().

  * [Voice](), applies to [VERB]() with two possible values: `Act` and `Pass`.
    * `Voice=Act` for active verbs that have characteristic of using base word, prefixes _me-, ber-_
      * Active verbs without affix: _duduk_ "sit", _pergi_ "go"
      * Active verbs with prefix _me-_: _memperbaiki_ "fix", _mengakui_ "admit"
      * Active verbs with prefix _ber-_: _belajar_ "study", _bekerja_ "work"
    * `Voice=Pass` for passive verbs that have characteristic of using prefixes _di-, ter-_ or circumfix _ke-an_.
      * Passive verbs with prefix _di-_ : _dipublikasikan_ "be published", _dilepaskan_ "be released"
      * Passive verbs with prefix _ter-_: _terbakar_ "on fire", _terjatuh_ "fell", _terkejut_ "shocked"
      * Passive verbs with confix _ke-an_: _ketinggalan_ "lag behind", _kecurian_ "be stolen"
* These UDv2 features are not relevant to Indonesian grammar:
  * `Gender`. Indonesian words have no gender.
  * `Animacy`. Similar with Gender, there is no requirements of agreements between words in Indonesian.
  * `NounClass`, with the same reason for Gender and Animacy
  * `Case`, with the same reason for Gender, Animacy, and NounClass
  * `Tense`. Indonesian verbs have the same form in all tenses.
  * `Aspect`, with the same reason for Tense.
  * `Evident`

* These UDv2 features might be relevant to Indonesian grammar, but due to limited references, we will cover them in future work:
  * [Definite](). Indonesian does not have articles like _a/an/the_ in English. Implicitly, a noun phrase can be determined whether it is infinite or definite.
  * [Mood]()
  * [Polite]()
  * [VerbForm](), could be applied to [ADJ](), [ADV](), and [NOUN](), with 3 possible values: `Conv`, `Part`, and `Vnoun`.
    * `VerbForm=Conv` is applied to verbal adverbs, such as for _terpisah_ "be separated" in _secara terpisah_ "separately"
    * `VerbForm=Part` is applied to verbal adjectives, such as for _terbang_ "fly" in _kapal **terbang**_ "plane", _renang_ "swim" in _kolam **renang**_ "swimming pool"
    * `VerbForm=Vnoun` is applied to verbal nouns, such as for _memancing_ "fishing", _memasak_ "cooking" as nouns.


## Syntax

### Core Arguments, Oblique Arguments and Adjuncts

* Nominal subject ([nsubj]()) is a noun phrase, without preposition.
* A verb may serve as the subject and is labeled as clausal subject, either as csubj or csubj:pass.
* Transitive verbs will have a noun phrase as the object ([obj]()).
* Passive verbs could be followed by agent ([obl:agent]()), such as in _Pesan yang dikirimkan **presiden**_ "Messages sent by **president**", _presiden_ "president" is the agent of predicate _dikirimkan_ "be sent".
* Verbs can have oblique arguments. If the argument includes a preposition, we label it as [obl](). However if it appears without preposition, we label it as [obl:mod](). Special for temporal modifiers, we label it as [obl:tmod]().

### Non-verbal Clauses

* The copula _ialah_ or _adalah_ (be) is optionally used in equational, attributional, locative, possessive and benefactory nonverbal clauses. For example: "This **is** my house.", in Indonesian can be written as:
  * _Ini rumahku._, without copula
  * _Ini **adalah** rumahku._, with copula _adalah_

### Relations Overview

* The following 14 relation subtypes are used in Indonesian PUD:
  * [acl:relcl]() for relative clauses that modify a noun phrase. In Indonesian, relative clauses usually use _yang_ as the subject of the clause.
  * [advmod:emph]() for particles ([PART]()) _-lah, -kah, -tah, pun_ that emphasize other words that could be a [NOUN](), [PRON](), [VERB](), or [SCONJ](). For example, token _itu**lah**_ "that" in tokenization phase was split into _itu_ "that" and _**lah**_, then _lah_ is annotated as the dependent of _itu_ and the relation between them is `advmod:emph`.
  * [case:adv]() for adposition ([ADP]()) that together with its following word of [ADJ]()/[ADV]()/[VERB]() serve as an adverb. In this case the `ADP` word is annotated as the dependent of `ADJ`/`ADV`/`VERB` and the dependency relation between them is `case:adv`, and the relation between the `ADJ/ADV/VERB` word and its parent is [advmod](). For example:
    * `ADP` + `ADJ` as adverb, such as _secara hati-hati_ "carefully", that consists of _secara_ "with"_ (`ADP`) + _hati-hati_ "careful" (`ADJ`)
    * `ADP` + `ADV` as adverb, such as _dengan sungguh-sungguh_ "seriously", that consists of _dengan_ "with" (`ADP`) + sungguh-sungguh "serious" (`ADV`)
    * `ADP` + `VERB` as adverb, such as _secara terpisah_ "separately", that consists of _secara_ "with" (`ADP`) + _terpisah_ "separated" (`VERB`).
  * [cc:preconj](), such as in _baik Mongolia maupun Tingkok_ "both Mongolia and China", _baik_ "both" is considered as preconjunct.
  * [csubj:pass]() for clausal subjects of passive verbs.
  * [det:poss]() for possessive relationship between `NOUN/PROPN` and possessive pronoun that tagged as (`DET`). For example, in _temanku_ "my friend" that is split into _teman_ "friend" and _ku_ "my", token _ku_ "my" will be given deprel `det:poss`.
  * [flat:foreign]() to label sequences of foreign words.
  * [flat:range]() for noun phrases that consist of range, such as _2019-2020_ will be separated into three tokens, and the relation between 2020 to 2019 is annotated as `flat:range`.
  * [nmod:poss]() for possessive relationship between `NOUN/PROPN` and another `NOUN/PROPN`. For example, in _istri Trump_ "Trump's wife", token Trump will be given deprel `nmod:poss`.
  * [nmod:tmod]() for the head of time-related noun phrases that becomes dependent of a noun phrase. For example, in _pengeluaran **tahun ini**_ "**this year** spending", _tahun ini_ "this year" modifies _pengeluaran_ "spending", and the head of this phrase, _tahun_ "year" will be annotated as the dependent of _pengeluaran_ "spending" with the deprel `nmod:tmod`.
  * [nsubj:pass]() for nominal subjects of passive verbs
  * [obl:agent]() for agents of passive verbs
  * [obl:mod]() for have oblique arguments of predicates with no preposition
  * [obl:tmod]() for head of time-related noun phrases that depend on a `VERB/ADJ`. For example, in _**Kali ini** saya setuju._ "**This time** I agree.", _kali ini_ "this time" describes the predicate _setuju_ "agree", and the head of this noun phrase, _kali_ "time", will be annotated as the dependent of _setuju_ "agree" with the deprel `obl:tmod`
* The following relation types are not used in Indonesian PUD:
  * `clf`
  * `expl`
  * `reparandum`

## Treebanks

There are [2](../treebanks/id-comparison.html) Indonesian UD treebanks:

  * [Indonesian-GSD](../treebanks/id_gsd/index.html)
  * [Indonesian-PUD](../treebanks/id_pud/index.html)
