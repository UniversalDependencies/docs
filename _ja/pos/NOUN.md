---
layout: postag
title: 'NOUN'
shortdef: 'noun'
---

### Definition
Nouns are a part of speech typically denoting a person, place, thing, animal or idea.

The NOUN tag is intended for common nouns only. See [PROPN]() for proper nouns and [PRON]() for pronouns.

Stems of nominal verbs (e.g. _<b>質問</b>&nbsp;_ “question”) are also tagged with
[NOUN]() when they are used as nouns (e.g. _<b>質問</b> が ありません_
“there is no <b>question</b>”).
Note that they are tagged [VERB](), when they function as verbs in being followed by an auxiliary verb (e.g. する).

Prefixes, suffixes and numeral classifiers (e.g. _<b>匹</b>_ of _3<b>匹</b> の猫_ “three cats”) are also classified into [NOUN](), since they are the main notion of the noun phrases.


### Examples

- _<b>猫</b>&nbsp;_ “cat” `(noun (common.general)` / 名詞-普通名詞-一般)
- _<b>木</b>&nbsp;_ “tree” `(noun (common.general)` / 名詞-普通名詞-一般)
- _<b>質問</b>&nbsp;_ “question” `(noun (common.general)` / 名詞-普通名詞-一般)
- _<b>こと</b>&nbsp;_  formal noun `(noun (common.general)` / 名詞-普通名詞-一般)
- _<b>第一</b>&nbsp;_  "first" (`noun(common.adverbial)`/名詞-普通名詞-副詞可能)
- _<b>副</b>&nbsp; 社長&nbsp;_ “<b>vice</b> president” (`prefix` / 接頭辞)
- _付属&nbsp; <b>品</b>&nbsp;_ “accessory / _lit._ supplementary <b>parts</b>” (`suffix` / 接尾辞)
- _5&nbsp; <b>回</b>&nbsp;_ “5 <b>times</b>” (`noun (common.counter)` / 名詞-普通名詞-助数詞可能)
