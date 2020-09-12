---
layout: base
title:  'Indonesian UD'
udver: '2'
---

# UD for Indonesian <span class="flagspan"><img class="flag" src="../../flags/svg/ID.svg" /></span>

## Tokenization and Word Segmentation

* In general, words are delimited by whitespace characters. Special treatments are given to multiword tokens and punctuations.
* Special treatments for multiword tokens:
  * Multiword tokens that ended with particles of _lah/kah/pun_ are split into two tokens. For example, _bacalah_ "read" is split into _baca_ "read" and _lah_. 
  * Multiword tokens that contains clitics of _ku_ "me/my", _mu_ "you/your", _nya_ "he/him/she/her/it" are split into two tokens. For example: _mencintainya_ "love him/her/it" is split into _mencintai_ "love" and _nya_ "him/her/it". However there are exceptions for words ending with -nya. All _nya_ that has role as pronoun and determiner will be separated from the main word, but if the word ended with -nya has a role as adverb or adjective, we let them unseparated. For example: 
    * words ended with _nya_ as adverb: _khususnya_ "especially", _awalnya_ "initially", _akhirnya_ "finally"
    * words ended with _nya_ as adjective: _sebelumnya_ "previous", _sesudahnya_ "next"
* Special treatment for punctuations. All punctuations are separated from the words, except in two cases:
  * For reduplicated words. Indonesian has so many reduplicated words as noun (both singular and plural), verb, adjective, adverb, and so on. These reduplicated words are not split and remain one token. The examples of reduplicated words are:
    * Singular noun: _mata-mata_ "spy"
    * Plural noun: _anak-anak_ "children"
    * Verb: _merobek-robek_ "shredding"
    * Adjective: _hiruk-pikuk_ "noisy"
    * Adverb: _terus-menerus_ "continuously"
  * For abbreviations. All abbreviations such as Mr., M.Sc. Tn., are not split and remain one token.

---
**Instruction**: Describe the general rules for delimiting words (for example, based on whitespace and punctuation) and exceptions to these rules. Specify whether words with spaces and/or multiword tokens occur. Include links to further language-specific documentation if available.

---

## Morphology

### Tags

* Indonesian PUD uses all 17 universal POS categories. We refer to [KBBI](https://kbbi.kemdikbud.go.id/) (Kamus Besar Bahasa Indonesia/Indonesian Great Dictionary) as the reference dictionary. However, since this dictionary only defined 7 word classes: noun, verb, adjective, adverb, pronoun, particle and number, we need to make adjustments so that the tags conform to UDv2.
* PART is used for:
  * negation words: _tidak_ "no", _tak_ "no", _bukan_ "no"
  * particles of _lah, kah, pun_, that usually used to emphasize the word before them
* The auxiliary (AUX) vs. VERB distinction is based on examples for English treebank, since initially there is no AUX type in KBBI. We defined 12 Indonesian words as AUX as follows:
  * _akan_ “will” for the future tense.
  * _sedang_ “be” for the present tense.
  * _telah_ and _sudah_ “have” for the past tense.
  * _bisa, dapat_ and _mampu_ as the equivalents of modal “can”.
  * _boleh_ as the equivalent of modal “may”.
  * _mungkin_ as the equivalent of modal “might”.
  * _harus_ as the equivalent of modal “must”.
  * _adalah_ and _ialah_ “be” serve as copulas. Another copula in Indonesian KBBI, _merupakan_ (be), is tagged as VERB, not AUX since its morphology is closer to VERB.
* The pronoun (PRON) vs. determiner (DET) distinction is also based on examples for English treebank, since DET word class also is not defined in KBBI.
  * The following word types are tagged as PRON:
    * personal pronouns: _saya/aku/ku_ "I", _kamu/mu/anda_ "you", _dia/ia/nya_ "he/she/it/him/her/its", _kami/kita_ "we/us/our", _mereka_ "they/them/their" 
    * interrogative pronouns: _apa_ "what", _siapa_ "who" as in _Apa yang kamu inginkan?_ "What do you want?"
    * relative pronouns are tagged as PRON: _apa_ "what", _siapa_ "who" as in _Saya tahu siapa yang kamu maksud._ "I know who you mean"
    * indefinite pronouns: _seseorang_ "seomeone/somebody", _sesuatu_ "something"
    * total pronouns: _semua_ "all" as in _Semua kecuali kamu_ "All but you". 
  * The following word types are tagged as DET:
    * possessive pronouns. All personal pronouns in Indonesian can also be used as possessive pronouns. For example:
      * -nya as PRON as in _Aku membawanya ke sini._ "I bring it here."
      * -nya as DET as in _Rumahnya di Depok._ "His/her house is in Depok."
    * pronominal numerals: _beberapa_ "some/many", _semua_ "all" as in _semua siswa_ "all students"
* Indonesian has the following coordinating conjuncion words (CCONJ):
  * _dan, serta, maupun_ as the equivalents of "and" in English
  * _atau_ "or"
  * _tapi, tetapi, namun, melainkan_ as the equivalents of "but" in English
* Indonesian also has (de)verbal form as ADJ, ADV or NOUN
  * Verbal adjecive as in _pesawat terbang_ (plane). Word _terbang_ "fly" is a verb, but in this noun phrase it functions as an adjective.
  * Verbal adverb as in _secara terpisah_ "separately". Word _terpisah_ "separated" is a verb, but when used together with _secara_ "with", two tokens functions as an adverb.
  * Verbal noun as in _Hobinya adalah memancing_ "His hobby is fishing". In this sentence, _memancing_ "fishing" functions as a noun.

---
**Instruction**: Specify any unused tags. Explain what words are tagged as PART. Describe how the AUX-VERB and DET-PRON distinctions are drawn, and specify whether there are (de)verbal forms tagged as ADJ, ADV or NOUN. Include links to language-specific tag definitions if any.

---

### Features

* We propose the use of 13 of 24 features defines in UDv2 that relevant to Indonesian grammar:
  1. Abbr, with one possible value: Yes. This feature can be applied to all UPOS, except PUNCT and SYM. 
  
  2. Clusivity, applies to PRON with two possible values: Ex and In.
    * Clusivity=Ex for _kami_ "we/our"
    * Clusivity=In for _kita_ "we/our"
   
  3. Degree, applies to ADJ with two possible values: Pos and Sup.
    * Degree=Pos is used for _baik_ "good", _cantik_ "beautiful", etc.
    * Degree=Sup us used for _terbaik_ "best", _tercantik_ "most beautiful", etc.
   
  4. Foreign, with one possible value: Yes. This feature only applies to X.
 
  5. Number, applies to NOUN and PRON with two possible values: Sing and Plur.  
 
  6. NumType, applies to NUM and ADJ.
    * NumType=Card is used for NUM
    * NumType=Ord is used for ordinal numbers tagged as ADJ
   
  7. Person, applies to PRON with three possible values: 1, 2, 3.
 
  8. Polarity, with one possible value: Neg, applies to PART and INTJ.
    * Polarity=Neg for PART applies for negation words as in _Saya tidak menyukainya_ "I do not like him/her/it". Word _tidak_ "no" will be tagged with Polarity=Neg.
    * Polarity=Neg for INTJ as in _Tidak, terima kasih_ "No, thanks". Word _tidak_ "no" will be given feature Polarity=Neg.
   
  9. Poss, applies to DET, with one possible value: Yes. This feature will be applied to all PRON that serve as possessive pronouns.
 
  10. PronType, applies to PRON, DET, and ADV. For Indonesian, 7 possible values can be applied:
    * PronType=Dem, applies to PRON such as for _itu_ "that" in _Itu masalahmu._ "That is your problem."
    * PronType=Emp, applies to PRON such as for _sendiri_ "self" in _Kamu harus percaya pada dirimu sendiri_ "You have to believe in yourself".
    * PronType=Ind, applies to PRON such as for _seseorang_ "someone/somebody" or _sesuatu_ "something" 
    * PronType=Int, applies to PRON and ADV. 
      * PronType=Int for PRON, such as for _apa_ "what" and _siapa_ "who" in interrogative sentences
      * PronType=Int for ADV, such as for _bagaimana_ "how" and _kapan_ "when" in interrogative sentences
    * PronType=Prs, applies to PRON or DET for all personal pronouns that serve as PRON or DET.
    * PronType=Rel, applies to PRON and ADV.
      * PronType=Rel for PRON, such as for _apa_ "what", _siapa_ "who", _yang_ "that". 
      * PronType=Rel for ADV, such as for _bagaimana_ "how" and _kapan_ "when" in non-interrogative sentences  
    * PronType=Tot, applies to PRON, DET, or ADV.
      * PronType=Tot for PRON, such as for _semua_ "all" in _Semua adalah milikmu._ "All is yours."
      * PronType=Tot for DET, such as for _semua_ "all" in _Semua siswa terlihat senang._ "All student looks happy." 
      
  11. VerbForm
  
  12. Voice, applies to VERB with two possible values: Act and Pass.
    * Voice=Act for active verbs such as _mencintai_ "love", _berdiskusi_ "discuss"
    * Voice=Pass for passive verbs, that in Indonesian has characteristics of using prefix _di-, ter-_ or confix _ke-an_.
       * Passive verbs with prefix _di-_ : _dikatakan_ "be said", _dilepaskan_ "be released"
       * Passive verbs with prefix _ter-_: _terbakar_ "be burned", _terjatuh_ "fell"
       * Passive verbs with confix _ke-an_: _kehilangan_ "lost", _kecurian_ "be stolen" 
       
  13. Typo, with one possible value, Yes. This feature can be applied to all UPOS, except PUNCT and SYM.

 

---
**Instruction**: Describe inherent and inflectional features for major word classes (at least NOUN and VERB). Describe other noteworthy features. Include links to language-specific feature definitions if any.

---

## Syntax

### Core Arguments, Oblique Arguments and Adjuncts

* Nominal subject (nsubj) is a noun phrase in the nominative case, without preposition.
* Transitive verbs will have noun phrase as the object (obj)
* Passive verbs could be followed by agent (obl:agent)
* Verbs can have oblique arguments, if the argument with preposition, we label it as obl. However if without preposition, we label it as obl:mod

### Non-verbal Clauses

* The copula ialah or adalah (be) is used in equational, attributional, locative, possessive and benefactory nonverbal clauses. For example: _Ini adalah rumahku._ "This is my house."

### Relations Overview

* The following relation subtypes are used in Indonesian:
 1. acl:relcl
 2. advmod:emph for particles that emphasize noun phrases
 3. case:adv
 4. cc:preconj
 5. csubj:pass for clausal subjects of passive verbs
 6. flat:foreign
 7. flat:range
 8. nmod:npmod
 9. nmod:poss
 10. nmod:tmod
 11. nsubj:pass for nominal subjects of passive verbs
 12. obl:agent for agents of passive verbs
 13. obl:mod
 14. obl:tmod
* The following relation types are not used in Indonesian PUD: clf, expl, reparandum.

---
**Instruction**: Give criteria for identifying core arguments (subjects and objects), and describe the range of copula constructions in nonverbal clauses. List all subtype relations used. Include links to language-specific relations definitions if any.

---

## Treebanks

There are [N](../treebanks/LCODE-comparison.html) LANGUAGE UD treebanks:

  * [LANGUAGE-A](../treebanks/LCODE_a/index.html)
  * [LANGUAGE-B](../treebanks/LCODE_b/index.html)

---
**Instruction**: Treebank-specific pages are generated automatically from the README file in the treebank repository and
from the data in the latest release. Link to the respective `*-index.html` page in the `treebanks` folder, using the language code
and the treebank code in the file name.

---
