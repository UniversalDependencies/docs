---
layout: feature
title: 'Polarity'
shortdef: 'whether the word can be or is negated'
udver: '2'
---

In Slovenian, negation can be expressed in different ways. Syntactically, it can be marked by using negation particle _ne_ "not", as in _Tega <b>ne</b> vem_ "I do not know that." or _Šli smo na <b>ne</b> najbolj zanimivo predavanje._ "We attended a not too interesting lecture.", or by using special negated verb form, as in _To <b>ni</b> ona._ "This is not her." Morhplogically, negation is marked by prefix _ne-_, as in _<b>ne</b>pravičen_ "unfair", _<b>ne</b>želen_ "unwanted" etc.

In the Slovenian UD Treebank, we currently only mark negation as an inflectional feature of a limited set of [verbs](VERB) and [auxiliaries](AUX): _<b>biti</b>_ "to be", _<b>imeti</b>_ "to have", _<b>hoteti</b>_ "to want".

### <a name="Neg">`Neg`</a>: negative

`Polarity` is assigned to negated word forms of verbs _biti, imeti, hoteti_.

#### Examples

* _<b>nisem</b>_ “I am not”, _<b>nisi</b>_ "you are not", _<b>ni</b>_ "he/she/it is not" etc.
* _<b>nimam</b>_ "I do not have", _<b>nimaš</b>_ "you do not have", _<b>nima</b>_ "he/she/it does not have" etc.
* _<b>nočem</b>_ "I do not want", _<b>nočeš</b>_ "you do not want", _<b>nočemo</b>_ "he/she/it does not want" etc.

### <a name="Pos">`Pos`</a>: positive, affirmative

`Positive` is assigned to non-negated word forms of verbs _biti, imeti, hoteti_ with identical set of other grammatical features.

#### Examples

* _<b>sem</b>_ “I am”, _<b>nisi</b>_ "you are", _<b>je</b>_ "he/she/it is" etc.
* _<b>imam</b>_ "I have", _<b>imaš</b>_ "you have", _<b>ima</b>_ "he/she/it has" etc.
* _<b>hočem</b>_ "I want", _<b>hočeš</b>_ "you want", _<b>hočemo</b>_ "he/she/it wants" etc.

### Conversion from JOS

All verbs with feature Negative=no are converted to `Negative=Pos` and all verbs with feature Negative=yes are converted to `Negative=Neg`.
<!-- Interlanguage links updated St lis 3 20:58:27 CET 2021 -->
