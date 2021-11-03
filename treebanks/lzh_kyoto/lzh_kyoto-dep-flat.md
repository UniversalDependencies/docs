---
layout: base
title:  'Statistics of flat in UD_Classical_Chinese-Kyoto'
udver: '2'
---

## Treebank Statistics: UD_Classical_Chinese-Kyoto: Relations: `flat`

This relation is universal.
There are 1 language-specific subtypes of `flat`: <tt><a href="lzh_kyoto-dep-flat-vv.html">flat:vv</a></tt>.

7630 nodes (3%) are attached to their parents as `flat`.

7630 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.17732634338139.

The following 17 pairs of parts of speech are connected with `flat`: <tt><a href="lzh_kyoto-pos-PROPN.html">PROPN</a></tt>-<tt><a href="lzh_kyoto-pos-PROPN.html">PROPN</a></tt> (3384; 44% instances), <tt><a href="lzh_kyoto-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lzh_kyoto-pos-NOUN.html">NOUN</a></tt> (2132; 28% instances), <tt><a href="lzh_kyoto-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lzh_kyoto-pos-PROPN.html">PROPN</a></tt> (1670; 22% instances), <tt><a href="lzh_kyoto-pos-PROPN.html">PROPN</a></tt>-<tt><a href="lzh_kyoto-pos-NOUN.html">NOUN</a></tt> (317; 4% instances), <tt><a href="lzh_kyoto-pos-PART.html">PART</a></tt>-<tt><a href="lzh_kyoto-pos-PROPN.html">PROPN</a></tt> (50; 1% instances), <tt><a href="lzh_kyoto-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lzh_kyoto-pos-PRON.html">PRON</a></tt> (32; 0% instances), <tt><a href="lzh_kyoto-pos-NUM.html">NUM</a></tt>-<tt><a href="lzh_kyoto-pos-NUM.html">NUM</a></tt> (17; 0% instances), <tt><a href="lzh_kyoto-pos-PRON.html">PRON</a></tt>-<tt><a href="lzh_kyoto-pos-NOUN.html">NOUN</a></tt> (7; 0% instances), <tt><a href="lzh_kyoto-pos-PRON.html">PRON</a></tt>-<tt><a href="lzh_kyoto-pos-PROPN.html">PROPN</a></tt> (6; 0% instances), <tt><a href="lzh_kyoto-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lzh_kyoto-pos-NUM.html">NUM</a></tt> (5; 0% instances), <tt><a href="lzh_kyoto-pos-PART.html">PART</a></tt>-<tt><a href="lzh_kyoto-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="lzh_kyoto-pos-PRON.html">PRON</a></tt>-<tt><a href="lzh_kyoto-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="lzh_kyoto-pos-PROPN.html">PROPN</a></tt>-<tt><a href="lzh_kyoto-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="lzh_kyoto-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lzh_kyoto-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="lzh_kyoto-pos-NUM.html">NUM</a></tt>-<tt><a href="lzh_kyoto-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="lzh_kyoto-pos-PRON.html">PRON</a></tt>-<tt><a href="lzh_kyoto-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="lzh_kyoto-pos-PROPN.html">PROPN</a></tt>-<tt><a href="lzh_kyoto-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat	color:blue
1	顏	顏	PROPN	n,名詞,人,姓氏	NameType=Sur	3	nmod	_	Gloss=[surname]|SpaceAfter=No
2	淵	淵	PROPN	n,名詞,人,名	NameType=Giv	1	flat	_	Gloss=[given-name]|SpaceAfter=No
3	篇	篇	NOUN	n,名詞,可搬,伝達	_	0	root	_	Gloss=section-of-a-book|SpaceAfter=No
4	第	第	NOUN	n,名詞,数量,*	_	3	list	_	Gloss=order-in-a-sequence|SpaceAfter=No
5	十二	十二	NUM	n,数詞,数,*	_	4	nummod	_	Gloss=twelve|SpacesAfter=\n

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 flat	color:blue
1	人	人	NOUN	n,名詞,人,人	_	3	nsubj	_	Gloss=person|SpaceAfter=No
2	皆	皆	ADV	v,副詞,範囲,総括	_	3	advmod	_	Gloss=all|SpaceAfter=No
3	有	有	VERB	v,動詞,存在,存在	_	0	root	_	Gloss=have|SpaceAfter=No
4	兄	兄	NOUN	n,名詞,人,関係	_	3	obj	_	Gloss=elder-brother|SpaceAfter=No
5	弟	弟	NOUN	n,名詞,人,関係	_	4	flat	_	Gloss=younger-brother|SpaceAfter=No

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 flat	color:blue
1	子	子	NOUN	n,名詞,人,人	_	2	nsubj	_	Gloss=master|SpaceAfter=No
2	謂	謂	VERB	v,動詞,行為,伝達	_	0	root	_	Gloss=speak-to|SpaceAfter=No
3	衛	衞	PROPN	n,名詞,主体,国名	Case=Loc|NameType=Nat	5	nmod	_	Gloss=[country-name]|SpaceAfter=No
4	公	公	NOUN	n,名詞,人,役割	_	5	nmod	_	Gloss=duke|SpaceAfter=No
5	子	子	NOUN	n,名詞,人,関係	_	2	obj	_	Gloss=child|SpaceAfter=No
6	荊	荊	PROPN	n,名詞,人,名	NameType=Giv	5	flat	_	Gloss=[given-name]|SpaceAfter=No

~~~


