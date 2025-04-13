---
layout: base
title:  'Statistics of nummod in UD_Classical_Chinese-Kyoto'
udver: '2'
---

## Treebank Statistics: UD_Classical_Chinese-Kyoto: Relations: `nummod`

This relation is universal.

5420 nodes (1%) are attached to their parents as `nummod`.

5003 instances of `nummod` (92%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.25184501845018.

The following 8 pairs of parts of speech are connected with `nummod`: <tt><a href="lzh_kyoto-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lzh_kyoto-pos-NUM.html">NUM</a></tt> (4310; 80% instances), <tt><a href="lzh_kyoto-pos-VERB.html">VERB</a></tt>-<tt><a href="lzh_kyoto-pos-NUM.html">NUM</a></tt> (745; 14% instances), <tt><a href="lzh_kyoto-pos-PROPN.html">PROPN</a></tt>-<tt><a href="lzh_kyoto-pos-NUM.html">NUM</a></tt> (162; 3% instances), <tt><a href="lzh_kyoto-pos-PART.html">PART</a></tt>-<tt><a href="lzh_kyoto-pos-NUM.html">NUM</a></tt> (135; 2% instances), <tt><a href="lzh_kyoto-pos-NUM.html">NUM</a></tt>-<tt><a href="lzh_kyoto-pos-NUM.html">NUM</a></tt> (54; 1% instances), <tt><a href="lzh_kyoto-pos-ADV.html">ADV</a></tt>-<tt><a href="lzh_kyoto-pos-NUM.html">NUM</a></tt> (7; 0% instances), <tt><a href="lzh_kyoto-pos-PRON.html">PRON</a></tt>-<tt><a href="lzh_kyoto-pos-NUM.html">NUM</a></tt> (5; 0% instances), <tt><a href="lzh_kyoto-pos-AUX.html">AUX</a></tt>-<tt><a href="lzh_kyoto-pos-NUM.html">NUM</a></tt> (2; 0% instances).


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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 nummod	color:blue
1	萬	萬	NUM	n,数詞,数字,*	_	2	nummod	_	Gloss=ten-thousand|SpaceAfter=No
2	室	室	NOUN	n,名詞,固定物,建造物	Case=Loc	4	nmod	_	Gloss=room|SpaceAfter=No
3	之	之	SCONJ	p,助詞,接続,属格	_	2	case	_	Gloss='s|SpaceAfter=No
4	國	國	NOUN	n,名詞,主体,集団	_	9	dislocated	_	Gloss=country|SpaceAfter=No
5	一	一	NUM	n,数詞,数字,*	_	7	nummod	_	Gloss=one|SpaceAfter=No
6	人	人	NOUN	n,名詞,人,人	_	5	clf	_	Gloss=person|SpaceAfter=No
7	陶	陶	PROPN	n,名詞,人,名	NameType=Giv	9	nsubj	_	Gloss=[given-name]|SpaceAfter=No
8	則	則	ADV	v,副詞,時相,緊接	AdvType=Tim	9	advmod	_	Gloss=then|SpaceAfter=No
9	可	可	AUX	v,助動詞,可能,*	Mood=Pot	0	root	_	Gloss=possible|SpaceAfter=No
10	乎	乎	PART	p,助詞,句末,*	_	9	discourse:sp	_	Gloss=[Q]|SpaceAfter=No

~~~


