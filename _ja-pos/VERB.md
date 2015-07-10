---
layout: postag
title: 'VERB'
shortdef: 'verb'
---

### Definition

[VERB]() tag is used for words with one of Japanese verb inflection types.  
Basically it corresponds to PoS tag `verb` / 動詞 in UniDic.
A [VERB]() consists of the stem and inflection parts as below:

### Examples

- _<b>遊ぶ</b>&nbsp;_ “play” (`verb (general)` / 動詞-一般)
- _<b>遊ん</b> だ&nbsp;_ “play”+PAST : _だ_ is an auxiliary verb [AUX](), representing past tense.
- _<b>遊ば</b> ない&nbsp;_ “play”+NEG : _ない_ is an auxiliary verb [AUX](), representing negation.
- _<b>見</b> て いる&nbsp;_ “see”+PROGRESSIVE : a combination of _て_  [CONJ]() and _いる_ [AUX]() functions 
as adding progrsssive aspect.
- _<b>来る</b>&nbsp;_ “come” 
- _<b>勉強</b>する&nbsp;_ “study”: _する_ is an auxiliary verb [AUX](), forming a verb noun into a verb. 
 
The differences between [VERB]() tag and UniDic's `verb` / 動詞 tag are as follows:

* The stem of nominal verbs (so-called _suru_-verbs or サ変動詞) is also tagged as [VERB](), while in UniDic it is tagged as `noun (common.verbal_suru)` / 名詞-普通名詞-サ変動詞可能.
Note that such a nominal verb is tagged as [VERB]() when it behaves as a verb (typically followed by “する” or “できる”),
otherwise is tagged as [NOUN]() (e.g. _<b>勉強</b> が好きだ_ “(I) like studying”).
* [VERB]() is NOT used for non-content (functional) verbs, while they are taged as `verb (bound)` / 動詞- 非自立可能,
e.g. _食べて<b>いる</b>&nbsp;_ “eat”+PROGRESSIVE : such a functional verb (_いる_) is tagged with [AUX]().

