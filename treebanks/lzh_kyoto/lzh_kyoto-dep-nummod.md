---
layout: base
title:  'Statistics of nummod in UD_Classical_Chinese-Kyoto'
udver: '2'
---

## Treebank Statistics: UD_Classical_Chinese-Kyoto: Relations: `nummod`

This relation is universal.

1557 nodes (1%) are attached to their parents as `nummod`.

1482 instances of `nummod` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.16955684007707.

The following 7 pairs of parts of speech are connected with `nummod`: <tt><a href="lzh_kyoto-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lzh_kyoto-pos-NUM.html">NUM</a></tt> (1223; 79% instances), <tt><a href="lzh_kyoto-pos-VERB.html">VERB</a></tt>-<tt><a href="lzh_kyoto-pos-NUM.html">NUM</a></tt> (217; 14% instances), <tt><a href="lzh_kyoto-pos-PART.html">PART</a></tt>-<tt><a href="lzh_kyoto-pos-NUM.html">NUM</a></tt> (89; 6% instances), <tt><a href="lzh_kyoto-pos-NUM.html">NUM</a></tt>-<tt><a href="lzh_kyoto-pos-NUM.html">NUM</a></tt> (12; 1% instances), <tt><a href="lzh_kyoto-pos-PROPN.html">PROPN</a></tt>-<tt><a href="lzh_kyoto-pos-NUM.html">NUM</a></tt> (12; 1% instances), <tt><a href="lzh_kyoto-pos-AUX.html">AUX</a></tt>-<tt><a href="lzh_kyoto-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="lzh_kyoto-pos-PRON.html">PRON</a></tt>-<tt><a href="lzh_kyoto-pos-NUM.html">NUM</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 nummod	color:blue
1	顏	顏	PROPN	n,名詞,人,姓氏	NameType=Sur	3	nmod	_	Gloss=[surname]|SpaceAfter=No
2	淵	淵	PROPN	n,名詞,人,名	NameType=Giv	1	flat	_	Gloss=[given-name]|SpaceAfter=No
3	篇	篇	NOUN	n,名詞,可搬,伝達	_	0	root	_	Gloss=section-of-a-book|SpaceAfter=No
4	第	第	NOUN	n,名詞,数量,*	_	3	list	_	Gloss=order-in-a-sequence|SpaceAfter=No
5	十二	十二	NUM	n,数詞,数,*	_	4	nummod	_	Gloss=twelve|SpacesAfter=\n

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 nummod	color:blue
1	二	二	NUM	n,数詞,数字,*	_	5	nummod	_	Gloss=two|SpaceAfter=No
2	吾	吾	PRON	n,代名詞,人称,起格	Person=1|PronType=Prs	5	nsubj	_	Gloss=[1PRON]|SpaceAfter=No
3	猶	猶	ADV	v,副詞,頻度,重複	_	5	advmod	_	Gloss=yet|SpaceAfter=No
4	不	不	ADV	v,副詞,否定,無界	Polarity=Neg	5	advmod	_	Gloss=not|SpaceAfter=No
5	足	足	VERB	v,動詞,描写,量	Degree=Pos	0	root	_	Gloss=sufficient|SpaceAfter=No

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nummod	color:blue
1	於	於	ADP	v,前置詞,基盤,*	_	4	case	_	Gloss=at|SpaceAfter=No
2	斯	斯	PRON	n,代名詞,指示,*	PronType=Dem	3	det	_	Gloss=this|SpaceAfter=No
3	三	三	NUM	n,数詞,数字,*	_	4	nummod	_	Gloss=three|SpaceAfter=No
4	者	者	PART	p,助詞,提示,*	_	6	obl	_	Gloss=that-which|SpaceAfter=No
5	何	何	PRON	n,代名詞,疑問,*	PronType=Int	6	nsubj	_	Gloss=what|SpaceAfter=No
6	先	先	VERB	v,動詞,行為,移動	_	0	root	_	Gloss=precede|SpaceAfter=No

~~~


