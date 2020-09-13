---
layout: base
title:  'Indonesian UD'
udver: '2'
---

# UD for Indonesian <span class="flagspan"><img class="flag" src="../../flags/svg/ID.svg" /></span>

## Tokenization and Word Segmentation

* In general, words are delimited by whitespace characters. Special treatments are given to multiword tokens and punctuations.

* Special treatments for multiword tokens:
  * Multiword tokens that ended with particles of _-lah/-kah/-tah/-pun_ are split into two tokens. These particles are usually used to emphasize the word before them. Particles of -lah/-kah/-tah are clitics, while particle pun can be written as clitic or a single token. The examples of how to tokenize these clitic particles are as follows:
    * _baca**lah**_ is split into _baca_ "read" and _**lah**_
    * _dia**kah**_ is split into _dia_ "he/she" and _**kah**_
    * _apa**tah**_ is split into _apa_ "what" and _**tah**_
    * _walau**pun**_ is split into _walau_ "although" and _**pun**_
    
  * Multiword tokens that contains clitics of _-ku_ "me/my", _-mu_ "you/your", _-nya_ "he/him/she/her/it" are split into two tokens. For example: _mencintai**nya**_ "love him/her/it" is split into _mencintai_ "love" and _**nya**_ "him/her/it". However there are exceptions for words ending with _-nya_. All _-nya_ that has role as pronoun and determiner will be separated from the main word, but if the word ended with _-nya_ has a role as adverb or adjective, we let them unseparated. For example: 
    * words ended with _-nya_ as adverb: _khusus**nya**_ "especially", _awal**nya**_ "initially", _akhir**nya**_ "finally"
    * words ended with _-nya_ as adjective: _sebelum**nya**_ "previous", _sesudah**nya**_ "next"
    
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

* We refer to [KBBI](https://kbbi.kemdikbud.go.id/) (Kamus Besar Bahasa Indonesia/Indonesian Great Dictionary) as the reference dictionary. However, since this dictionary only defined 7 word classes: noun, verb, adjective, adverb, pronoun, particle and number, we need to make adjustments so that the tags conform to UDv2.
* Indonesian PUD uses all 17 universal POS categories. 
* PART is used for:
  * negation words: _tidak_ "no", _tak_ "no", _bukan_ "no"
  * particles of _-lah, -kah, -tah, pun_, that has been discussed in the previous section. 
* The auxiliary (AUX) vs. VERB distinction is based on examples for English treebank, since initially there is no AUX type in KBBI. We defined 12 Indonesian words as AUX as follows:
  * _akan_ “will” for the future tense.
  * _sedang_ “be” for the present tense.
  * _telah_ and _sudah_ “have” for the past tense.
  * _bisa, dapat_ and _mampu_ as the equivalents of modal “can”.
  * _boleh_ as the equivalent of modal “may”.
  * _mungkin_ as the equivalent of modal “might”.
  * _harus_ as the equivalent of modal “must”.
  * _adalah_ and _ialah_ “be” serve as copulas. Another copula in Indonesian KBBI, _merupakan_ (be), is tagged as VERB, not AUX since its morphology of using confix _me-kan_ is closer to VERB.
* The pronoun (PRON) vs. determiner (DET) distinction is also based on examples for English treebank, since DET word class also is not defined in KBBI.
  * The following word types are tagged as PRON:
    * personal pronouns, such as _saya/aku/ku_ "I", _kamu/mu/anda_ "you", _dia/ia/nya_ "he/she/it/him/her/its", _kami/kita_ "we/us/our", _mereka_ "they/them/their" 
    * interrogative pronouns, _apa_ "what", _siapa_ "who" as in _**Apa** yang kamu inginkan?_ "**What** do you want?"
    * relative pronouns: _apa_ "what", _siapa_ "who" as in _Saya tahu **siapa** yang kamu maksud._ "I know **who** you mean"
    * indefinite pronouns: _seseorang_ "seomeone/somebody", _sesuatu_ "something"
    * total pronouns, such as _semua_ "all" as in _**Semua** kecuali bukumu_ "**All** except your books". 
  * The following word types are tagged as DET:
    * possessive pronouns. All personal pronouns in Indonesian can also be used as possessive pronouns. For example:
      * _-nya_ as PRON as in _Aku membawa**nya** ke sini._ "I bring **it** here."
      * _-nya_ as DET as in _Rumah**nya** di Depok._ "**His/her** house is in Depok."
    * pronominal numerals: _beberapa_ "some/many", _semua_ "all" as in _**semua** siswa_ "**all** students"
* Indonesian has the following coordinating conjuncion words (CCONJ):
  * _dan, serta, maupun_ as the equivalents of "and" in English
  * _atau_ "or"
  * _tapi, tetapi, namun, melainkan_ as the equivalents of "but" in English
* Indonesian also has (de)verbal form as ADJ, ADV or NOUN
  * Verbal adjecive as in _pesawat **terbang**_ (plane). Word _terbang_ "fly" is a verb, but in this noun phrase it functions as an adjective.
  * Verbal adverb as in _secara **terpisah**_ "separately". Word _terpisah_ "separated" is a verb, but when used together with _secara_ "with", the two tokens serve as an adverb.
  * Verbal noun as in _Hobinya adalah **memancing**_ "His hobby is fishing". In this sentence, _memancing_ "fishing" functions as a noun.

---
**Instruction**: Specify any unused tags. Explain what words are tagged as PART. Describe how the AUX-VERB and DET-PRON distinctions are drawn, and specify whether there are (de)verbal forms tagged as ADJ, ADV or NOUN. Include links to language-specific tag definitions if any.

---

### Features

* We propose the use of 13 of 24 features defines in UDv2 that relevant to Indonesian grammar:
  * Abbr, with one possible value: Yes. This feature can be applied to all UPOS, except PUNCT and SYM. 
  * Clusivity, applies to PRON with two possible values: Ex and In.
    * Clusivity=Ex for _kami_ "we/our"
    * Clusivity=In for _kita_ "we/our"
  * Degree, applies to ADJ with two possible values: Pos and Sup.
    * Degree=Pos is used for _baik_ "good", _cantik_ "beautiful", etc.
    * Degree=Sup us used for _terbaik_ "best", _tercantik_ "most beautiful", etc.
  * Foreign, with one possible value: Yes. This feature only applies to X.
  * Number, applies to NOUN and PRON with two possible values: Sing or Plur.  
  * NumType, applies to NUM and ADJ, with two possible values: Card or Ord.
    * NumType=Card is used for NUM
    * NumType=Ord is used for ordinal numbers tagged as ADJ
  * Person, applies to PRON with three possible values: 1, 2, 3.
  * Polarity, with one possible value: Neg, applies to PART and INTJ.
    * Polarity=Neg for PART applies for negation words as in _Saya tidak menyukainya_ "I do not like him/her/it". Word _tidak_ "no" will be tagged with Polarity=Neg.
    * Polarity=Neg for INTJ as in _Tidak, terima kasih_ "No, thanks". Word _tidak_ "no" will be given feature Polarity=Neg.
  * Poss, applies to DET, with one possible value: Yes. This feature will be applied to all PRON that serve as possessive pronouns.
  * PronType, applies to PRON, DET, and ADV. For Indonesian, 7 possible values can be applied:
    1. PronType=Dem, applies to PRON such as for _itu_ "that" in _**Itu** masalahmu._ "That is your problem."
    2. PronType=Emp, applies to PRON such as for _sendiri_ "self" in _Kamu harus percaya pada dirimu **sendiri**_ "You have to believe in yourself".
    3. PronType=Ind, applies to PRON such as for _seseorang_ "someone/somebody" or _sesuatu_ "something" 
    4. PronType=Int, applies to PRON and ADV. 
      * PronType=Int for PRON, such as for _apa_ "what" and _siapa_ "who" in interrogative sentences
      * PronType=Int for ADV, such as for _bagaimana_ "how" and _kapan_ "when" in interrogative sentences
    5. PronType=Prs, applies to PRON or DET for all personal pronouns that serve as PRON or DET.
    6. PronType=Rel, applies to PRON and ADV.
      * PronType=Rel for PRON, such as for _apa_ "what", _siapa_ "who", _yang_ "that". 
      * PronType=Rel for ADV, such as for _bagaimana_ "how" and _kapan_ "when" in non-interrogative sentences  
    7. PronType=Tot, applies to PRON, DET, or ADV.
      * PronType=Tot for PRON, such as for _semua_ "all" in _**Semua** adalah milikmu._ "All is yours."
      * PronType=Tot for DET, such as for _semua_ "all" in _**Semua** siswa terlihat senang._ "All students look happy." 
      * PronType=Tot for ADV, such as for _selalu_ "always" in _Dia **selalu** terlambat_. "She is always late."
  * VerbForm, applies to ADJ, ADV, and NOUN, with 3 possible values: Conv, Part, and Vnoun.
    * VerbForm=Conv is applied to verbal adverb, such as for _terpisah_ "be separated" in _secara terpisah_ "separately"
    * VerbForm=Part is applied to verbal adjective, such as for _terbang_ "fly" in _kapal **terbang**_ "plane", _renang_ "swim" in _kolam **renang**_ "swimming pool" 
    * VerbForm=Vnoun is applied to verbal noun, such as for _memancing_ "fishing", _memasak_ "cooking" as nouns.
  * Voice, applies to VERB with two possible values: Act and Pass.
    * Voice=Act for active verbs that has characteristic of using base word, prefix _me-, ber
      * Active verbs without affix: _duduk_ "sit", _pergi_ "go"
      * Active verbs with prefix _me-_: _memperbaiki_ "fix", _mengakui_ "admit"
      * Active verbs with prefix _ber-_: _belajar_ "study", _bekerja_ "work"
    * Voice=Pass for passive verbs, that has characteristic of using prefix _di-, ter-_ or confix _ke-an_.
      * Passive verbs with prefix _di-_ : _dipublikasikan_ "be published", _dilepaskan_ "be released"
      * Passive verbs with prefix _ter-_: _terbakar_ "on fire", _terjatuh_ "fell", _terkejut_ "shocked"
      * Passive verbs with confix _ke-an_: _kehilangan_ "lost", _kecurian_ "be stolen"  
  * Typo, with one possible value, Yes. This feature can be applied to all UPOS, except PUNCT and SYM.

* These UDv2 features are not relevant to Indonesian grammar:
  * Gender. Indonesian words have no gender.
  * Animacy. Similar with Gender, there is no requirements of agreements between words in Indonesian.
  * NounClass, with the same reason for Gender and Animacy
  * Case, with the same reason for Gender, Animacy, and NounClass
  * Tense. Indonesian verbs have the same form in any tenses.
  * Aspect, with the same reason for Tense.
  
* These UDv2 might be relevant to Indonesian grammar, but as far as we know there is no Indonesian grammar reference that has discussed them:
  * Definite. Indonesian does not have articles like _a/an/the_ in English. Implicitly, a noun phrase can be determined whether it is infinite or definite. However, due to limited references, we will cover this in future work.
  * Mood
  * Polite

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

* The following 14 relation subtypes are used in Indonesian PUD:
  * acl:relcl
  * advmod:emph for particles (PART) _-lah, -kah, -tah, pun_ that emphasize other words that could be a NOUN, PRON, VERB, or SCONJ. For example, in _itu**lah**_ that in tokenization phase was split into _itu_ "that" and _**lah**_, _lah_ is annotated as the dependent of _itu_ and the dependency relation between them is advmod:emph.
  * case:adv for adposition (ADP) that together with its following word of ADJ/ADV/VERB serve as an adverb. In this case the ADP word is annotated as the dependent of ADJ/ADV/VERB and the deprel between them is case:adv, and the relation between the ADJ/ADV/VERB word with its head is advmod. For example:
    * ADP + ADJ as adverb, such as _secara hati-hati_ "carefully", that consists of _secara_ "with"_ (ADP) + _hati-hati_ "careful" (ADJ) 
    * ADP + ADV as adverb, such as _dengan sungguh-sungguh_ "seriously", that consists of _dengan_ "with" (ADP) + sungguh-sungguh "serious" (ADV) 
    * ADP + VERB as adverb, such as _secara terpisah_ "separately", that consists of _secara_ "with" (ADP) + _terpisah_ "separated" (VERB).
  * cc:preconj
  * csubj:pass for clausal subjects of passive verbs
  * flat:foreign
  * flat:range
  * nmod:npmod
  * nmod:poss
  * nmod:tmod
  * nsubj:pass for nominal subjects of passive verbs
  * obl:agent for agents of passive verbs
  * obl:mod
  * obl:tmod
* The following relation types are not used in Indonesian PUD:
  * clf
  * expl
  * reparandum

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
