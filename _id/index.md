---
layout: base
title:  'Indonesian UD'
udver: '2'
---

# UD for Indonesian <span class="flagspan"><img class="flag" src="../../flags/svg/ID.svg" /></span>

## Tokenization and Word Segmentation

* In general, words are delimited by whitespace characters. Special treatments are given to multiword tokens and punctuations.

* Special treatments of multiword tokens:
  * Multiword tokens that ended with particles _-lah/-kah/-tah/-pun_ are split into two tokens. These particles are usually used to emphasize the word before them. Particles of -lah/-kah/-tah are clitics, while particle pun can be written as clitic or a single token. The examples of how to tokenize these clitic particles are as follows:
    * _baca**lah**_ is split into _baca_ "read" and _**lah**_
    * _dia**kah**_ is split into _dia_ "he/she" and _**kah**_
    * _apa**tah**_ is split into _apa_ "what" and _**tah**_
    * _walau**pun**_ is split into _walau_ "although" and _**pun**_

  * Multiword tokens that contain clitics of _-ku_ "me/my", _-mu_ "you/your", _-nya_ "he/him/she/her/it" are split into two tokens, with exceptions for words ended with _-nya_. 
    * Words ended with _-nya_ where _-nya- itself serves as  a pronoun or determiner are split into two tokens. For example:
      * Word _-nya_ as pronoun, as in _mencintai**nya**_ "love **him/her/it**", this token is split into _mencintai_ "love" and _**nya**_ "him/her/it".
      * Word _-nya_ as posessive pronoun, as in _buku**nya**_ "**his/her/its** book", this token is split into _buku_ "book" and _**nya**_ "his/her/its".

    * Words ended with _-nya_ that functions as adverbs, adjectives or auxiliary are **not** split. For example:
      * adverbs ended with _-nya_: _khusus**nya**_ "especially", _awal**nya**_ "initially", _akhir**nya**_ "finally"
      * adjectives ended with _-nya_: _sebelum**nya**_ "previous", _sesudah**nya**_ "next", _berikutnya_ "next"
      * auxiliary ended with _-nya_: _seharus**nya**/sebaik**nya**_ "shall/should"

* Special treatments for punctuations. All punctuation symbols are separated from the words, except in two cases:
  * Hyphen in reduplicated words. Indonesian has many reduplicated words as nouns (both singular and plural), verbs, adjectives, adverbs, and so on. These reduplicated words are not split and remain one token. The examples of reduplicated words are:
    * Singular noun: _mata-mata_ "spy"
    * Plural noun: _anak-anak_ "children"
    * Verb: _merobek-robek_ "shredding"
    * Adjective: _hiruk-pikuk_ "noisy"
    * Adverb: _terus-menerus_ "continuously"
  * For abbreviations. All abbreviations such as Mr., M.Sc. Tn., are not split and remain one token.



## Morphology

### Tags

* We refer to [KBBI](https://kbbi.kemdikbud.go.id/) (Kamus Besar Bahasa Indonesia/Indonesian Great Dictionary) as the reference dictionary. However, since this dictionary only defines 7 word classes: noun, verb, adjective, adverb, pronoun, particle and number, we need to make adjustments so that the tags conform to UD v2.
* Indonesian PUD uses all 17 universal POS categories.
* [PART]() is used for:
  * negation words: _tidak_ "no", _tak_ "no", _bukan_ "no"
  * particles of _-lah, -kah, -tah, pun_, that have been discussed in the previous section.
* The auxiliary ([AUX]()) vs. [VERB]() distinction is based on examples for English treebank, since initially there is no AUX type in KBBI. We defined 14 Indonesian words as AUX as follows:
  * _adalah_ and _ialah_ “be” serve as copulas.
  * Tenses-related AUX:
    * _akan_ “will/would” for the future tense.
    * _sedang_ “be” for the present tense.
    * _telah_ and _sudah_ “have/has/had” for the past tense.
  * Modal-related AUX:
    * _harus, mesti, wajib_ as the equivalents of modal “must”.
    * _sebaiknya, seharusnya_ as the equivalents of modal 'shall/should'.
    * _bisa, dapat_ and _mampu_ as the equivalents of modal “can/could”.
    * _boleh_ as the equivalent of modal “may”.
    * _mungkin_ as the equivalent of modal “might”.
* The pronoun ([PRON]()) vs. determiner ([DET]()) distinction is also based on examples for English treebank, since DET word class also is not defined in KBBI.
  * The following word types are tagged as PRON:
    * personal pronouns, such as _saya/aku/ku_ "I", _kamu/mu/anda_ "you", _dia/ia/nya_ "he/she/it/him/her/its", _kami/kita_ "we/us/our", _mereka_ "they/them/their"
    * interrogative pronouns, _apa_ "what", _siapa_ "who" as in _**Apa** yang kamu inginkan?_ "**What** do you want?"
    * relative pronouns: _apa_ "what", _siapa_ "who" as in _Saya tahu **siapa** yang kamu maksud._ "I know **who** you mean"
    * indefinite pronouns: _seseorang_ "seomeone/somebody", _sesuatu_ "something"
    * total pronouns, such as _semua_ "all" as in _**Semua** kecuali bukumu_ "**All** except your books".
    * demonstrative pronouns: _ini_ "this" as in _**Ini** bukan salahmu._ "**This** is not your fault".
  * The following word types are tagged as DET:
    * demonstrative determiners: _ini_ "this" as in _Kota **ini** sangat indah_ "**This** city is beautiful"
    * pronominal numerals: _beberapa, berbagai, para_ "some/many", _semua_ "all" as in _**semua** siswa_ "**all** students"
* Indonesian has the following coordinating conjunction words ([CCONJ]()):
  * _dan, serta, maupun_ as the equivalents of "and" in English
  * _atau_ "or"
  * _tapi, tetapi, namun, melainkan_ as the equivalents of "but" in English

### Features

* We propose the use of 4 of 24 features defined in UD v2 that are relevant to Indonesian grammar:
  * [Abbr](), with one possible value: `Yes`. This feature can be applied to all UPOS categories, except [PUNCT]() and [SYM]().
  * [Clusivity](), applies to [PRON]() with two possible values: `Ex` and `In`.
    * `Clusivity=Ex` for _kami_ "we/our"
    * `Clusivity=In` for _kita_ "we/our"
  * [Degree](), applies to [ADJ]() with one possible value: `Sup`.
    * `Degree=Sup` for superlative adjectives, such as _terbaik_ "best", _tercantik_ "most beautiful", etc.
  * [Foreign](), with one possible value: `Yes`. This feature only applies to [X]().
  

## Syntax

### Core Arguments, Oblique Arguments and Adjuncts

* The default word order is SVO, so the subject ([nsubj]()) normally precedes and the object follows the verb (with the exception of inverted sentences).
* A verb may serve as the subject and is labeled as clausal subject, either as csubj or csubj:pass.
* Transitive verbs will have a noun phrase as the object ([obj]()). 
* Passive verbs could be followed by agent ([obl:agent]()), such as in _Pesan yang dikirimkan **presiden**_ "Messages sent by **president**", _presiden_ "president" is the agent of predicate _dikirimkan_ "be sent".
* Verbs can have oblique arguments ([obl]()). Special for temporal modifiers, we label it as [obl:tmod]().

### Non-verbal Clauses

* The copula _ialah_ or _adalah_ (be) is optionally used in equational, attributional, locative, possessive and benefactory nonverbal clauses. The two forms are interchangeable but _adalah_ is more common. For example: "This **is** my house.", in Indonesian can be written as:
  * _Ini rumahku._, without copula
  * _Ini **adalah** rumahku._, with copula _adalah_

### Relations Overview

* Indonesian PUD uses 32 of 37 main dependency relation defined in UD v2. The following relation types are not used:
  * `clf`
  * `dep`
  * `expl`
  * `list`
  * `reparandum`
* The following 15 relation subtypes are used in Indonesian PUD:
  * [acl:relcl]() for relative clauses that modify a noun phrase. In Indonesian, relative clauses usually use _yang_ as the subject of the clause.
  * [advmod:emph]() for particles ([PART]()) _-lah, -kah, -tah, pun_ that emphasize other words that could be a [NOUN](), [PRON](), [VERB](), or [SCONJ](). For example, token _itu**lah**_ "that" in tokenization phase was split into _itu_ "that" and _**lah**_, then _lah_ is annotated as the dependent of _itu_ and the relation between them is `advmod:emph`.
  * [case:adv]() for adposition ([ADP]()) that together with its following word of [ADJ]()/[ADV]()/[VERB]() serve as an adverb. In this case the `ADP` word is annotated as the dependent of `ADJ`/`ADV`/`VERB` and the dependency relation between them is `case:adv`, and the relation between the `ADJ/ADV/VERB` word and its parent is [advmod](). For example:
    * `ADP` + `ADJ` as adverb, such as _secara hati-hati_ "carefully", that consists of _secara_ "with"_ (`ADP`) + _hati-hati_ "careful" (`ADJ`)
    * `ADP` + `ADV` as adverb, such as _dengan sungguh-sungguh_ "seriously", that consists of _dengan_ "with" (`ADP`) + sungguh-sungguh "serious" (`ADV`)
    * `ADP` + `VERB` as adverb, such as _secara terpisah_ "separately", that consists of _secara_ "with" (`ADP`) + _terpisah_ "separated" (`VERB`).  
  * [cc:preconj](), such as in _baik Mongolia maupun Tingkok_ "both Mongolia and China", _baik_ "both" is considered as preconjunct.
  * [compound:a]() for adjective compounds, such as: _luar biasa_ "excellent", _besar hati_ "heartened"
  * [compound:n]() for noun compounds that does not consist of NOUN + NOUN words.
  * [compound:v]() for verb compounds, such as: _bertanggung jawab_ "be responsible", _mengambil alih_ "to take over" 
  * [csubj:pass]() for clausal subjects of passive verbs.
  * [flat:foreign]() to label sequences of foreign words.
  * [nmod:npmod]() for locative nouns. In Indonesian, _dalam_ "in/inside", _luar_ "out/outside" are considered as locative nouns. For noun phrases like _dalam ruangan_ "in a/the room", locative noun is annotated as the dependent of the noun phrase that it modify. This deprel has a _head-final_ direction, different with `nmod` that has a _head-initial_ direction.
  * [nmod:poss]() for possessive relationship between `NOUN/PROPN` and another `NOUN/PROPN`. For example, in _istri Trump_ "Trump's wife", token Trump will be given deprel `nmod:poss`.
  * [nmod:tmod]() for the head of time-related noun phrases that becomes dependent of a noun phrase. For example, in _pengeluaran **tahun ini**_ "**this year** spending", _tahun ini_ "this year" modifies _pengeluaran_ "spending", and the head of this phrase, _tahun_ "year" will be annotated as the dependent of _pengeluaran_ "spending" with the deprel `nmod:tmod`.
  * [nsubj:pass]() for nominal subjects of passive verbs
  * [obl:agent]() for agents of passive verbs
  * [obl:tmod]() for head of time-related noun phrases that depend on a `VERB/ADJ`. For example, in _**Kali ini** saya setuju._ "**This time** I agree.", _kali ini_ "this time" describes the predicate _setuju_ "agree", and the head of this noun phrase, _kali_ "time", will be annotated as the dependent of _setuju_ "agree" with the deprel `obl:tmod`
  
  
## Treebanks

There are [2](../treebanks/id-comparison.html) Indonesian UD treebanks:

  * [Indonesian-GSD](../treebanks/id_gsd/index.html)
  * [Indonesian-PUD](../treebanks/id_pud/index.html)
