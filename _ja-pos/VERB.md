---
layout: postag
title: 'VERB'
shortdef: 'verb'
---

`VERB` tag is used for words with one of Japanese verb inflection types.  Basically it corresponds to PoS tag "動詞 (verb)" in UniDic SUW (Short Unit Word).
A `VERB` consists of the stem and inflection parts as below:

<ul>
<li><b>遊ぶ</b> ('play') </li>
<li><b>遊ん</b>だ ('play' + PAST)   : "だ" is another word tagged as `AUX`</li>
<li><b>遊ば</b>ない ('play' + NEG)  : "ない" is another word tagged as `AUX`</li>
<li><b>見</b>ている ('see' + PROGRESSIVE) : "て" `CONJ', "いる" `AUX`</li>
<li><b>来る</b> ('come')</li>
<li><b>勉強</b>する ('study') : "する" is another word tagged as `AUX`</li>
<li><i>etc.</i></li>
</ul>
 
The differences between `VERB` tag and UniDic's "動詞 (verb)" are as follows:

* The stem of nominal verbs (so-called <i>suru</i>-verbs or サ変動詞) is also tagged as `VERB`, while in UniDic it is tagged as "名詞 (noun) - 普通名詞 (common noun) - サ変動詞可能 (possibly nominal verb)".  Note that such a nominal verb is tagged as `VERB` when it behaves as a verb (typically followed by "する").
* `VERB` is NOT used for non-content (functional) verbs, while they are taged as "動詞 (verb) - 非自立可能 (possibly non-content verbs)" <i>e.g.</i> 食べて<b>いる</b> ('eat' + PROGRESSIVE): `AUX` tag is used for them.
