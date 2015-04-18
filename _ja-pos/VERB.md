---
layout: postag
title: 'VERB'
shortdef: 'verb'
---

`VERB` tag is used for words with one of Japanese verb inflection types.  Basically it corresponds to PoS tag "動詞 (verb)" in UniDic SUW (Short Unit Word).
A `VERB` consists of the stem and inflection parts as below:

* <u>遊ぶ</u> ('play') 
* <u>遊ん</u>だ ('play' + PAST)   : "だ" is another word tagged by `AUX`
* <u>遊ば</u>ない ('play' + NEG)  : "ない" is another word tagged by `AUX`
* <u>来る</u> ('come')
* etc.
 
The differences from UniDic's "動詞 (verb)" are as follows:

* `VERB` is used for stem of nominal verbs (so-called <i>suru<i>-verbs or サ変動詞), while they are tagged as "名詞 (noun) - サ変動詞可能 (possibly nominal verb)" <i>e.g.</i> <u>勉強</u>する ('study') : "する" is another word tagged by `AUX`
* `VERB` is NOT used for non-content verbs, while they are taged as "動詞 (verb) - 非自立可能 (possibly non-content verbs)" <i>e.g.</i> 食べて<u>いる</u> ('eat' + PROGRESSIVE)
