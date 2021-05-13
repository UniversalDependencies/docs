---
layout: base
title:  'Statistics of nmod in UD_Classical_Chinese-Kyoto'
udver: '2'
---

## Treebank Statistics: UD_Classical_Chinese-Kyoto: Relations: `nmod`

This relation is universal.

20232 nodes (8%) are attached to their parents as `nmod`.

20198 instances of `nmod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.39299130090945.

The following 14 pairs of parts of speech are connected with `nmod`: <tt><a href="lzh_kyoto-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lzh_kyoto-pos-NOUN.html">NOUN</a></tt> (13658; 68% instances), <tt><a href="lzh_kyoto-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lzh_kyoto-pos-PROPN.html">PROPN</a></tt> (4482; 22% instances), <tt><a href="lzh_kyoto-pos-PROPN.html">PROPN</a></tt>-<tt><a href="lzh_kyoto-pos-NOUN.html">NOUN</a></tt> (780; 4% instances), <tt><a href="lzh_kyoto-pos-PART.html">PART</a></tt>-<tt><a href="lzh_kyoto-pos-NOUN.html">NOUN</a></tt> (524; 3% instances), <tt><a href="lzh_kyoto-pos-PROPN.html">PROPN</a></tt>-<tt><a href="lzh_kyoto-pos-PROPN.html">PROPN</a></tt> (317; 2% instances), <tt><a href="lzh_kyoto-pos-NUM.html">NUM</a></tt>-<tt><a href="lzh_kyoto-pos-NOUN.html">NOUN</a></tt> (300; 1% instances), <tt><a href="lzh_kyoto-pos-PART.html">PART</a></tt>-<tt><a href="lzh_kyoto-pos-PROPN.html">PROPN</a></tt> (62; 0% instances), <tt><a href="lzh_kyoto-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lzh_kyoto-pos-PART.html">PART</a></tt> (52; 0% instances), <tt><a href="lzh_kyoto-pos-PRON.html">PRON</a></tt>-<tt><a href="lzh_kyoto-pos-NOUN.html">NOUN</a></tt> (21; 0% instances), <tt><a href="lzh_kyoto-pos-NUM.html">NUM</a></tt>-<tt><a href="lzh_kyoto-pos-PROPN.html">PROPN</a></tt> (14; 0% instances), <tt><a href="lzh_kyoto-pos-NUM.html">NUM</a></tt>-<tt><a href="lzh_kyoto-pos-PART.html">PART</a></tt> (13; 0% instances), <tt><a href="lzh_kyoto-pos-PROPN.html">PROPN</a></tt>-<tt><a href="lzh_kyoto-pos-PART.html">PART</a></tt> (5; 0% instances), <tt><a href="lzh_kyoto-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lzh_kyoto-pos-SYM.html">SYM</a></tt> (3; 0% instances), <tt><a href="lzh_kyoto-pos-PRON.html">PRON</a></tt>-<tt><a href="lzh_kyoto-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nmod	color:blue
1	四	四	NUM	n,数詞,数字,*	_	2	nummod	_	Gloss=four|SpaceAfter=No
2	海	海	NOUN	n,名詞,固定物,地形	Case=Loc	4	nmod	_	Gloss=sea|SpaceAfter=No
3	之	之	SCONJ	p,助詞,接続,属格	_	2	case	_	Gloss='s|SpaceAfter=No
4	內	內	NOUN	n,名詞,固定物,関係	Case=Loc	6	nsubj	_	Gloss=inside|SpaceAfter=No
5	皆	皆	ADV	v,副詞,範囲,総括	_	6	advmod	_	Gloss=all|SpaceAfter=No
6	兄	兄	NOUN	n,名詞,人,関係	_	0	root	_	Gloss=elder-brother|SpaceAfter=No
7	弟	弟	NOUN	n,名詞,人,関係	_	6	flat	_	Gloss=younger-brother|SpaceAfter=No
8	也	也	PART	p,助詞,句末,*	_	6	discourse:sp	_	Gloss=[final-particle]|SpaceAfter=No

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nmod	color:blue
1	顏	顏	PROPN	n,名詞,人,姓氏	NameType=Sur	3	nmod	_	Gloss=[surname]|SpaceAfter=No
2	淵	淵	PROPN	n,名詞,人,名	NameType=Giv	1	flat	_	Gloss=[given-name]|SpaceAfter=No
3	篇	篇	NOUN	n,名詞,可搬,伝達	_	0	root	_	Gloss=section-of-a-book|SpaceAfter=No
4	第	第	NOUN	n,名詞,数量,*	_	3	list	_	Gloss=order-in-a-sequence|SpaceAfter=No
5	十二	十二	NUM	n,数詞,数,*	_	4	nummod	_	Gloss=twelve|SpacesAfter=\n

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod	color:blue
1	弈	弈	NOUN	n,名詞,可搬,道具	_	2	nmod	_	Gloss=board-game|SpaceAfter=No
2	秋	秋	PROPN	n,名詞,人,名	NameType=Giv	8	nsubj	_	Gloss=[given-name]|SpaceAfter=No
3	通	通	VERB	v,動詞,行為,移動	_	6	advcl	_	Gloss=go-through|SpaceAfter=No
4	國	國	NOUN	n,名詞,主体,集団	_	3	obj	_	Gloss=country|SpaceAfter=No
5	之	之	SCONJ	p,助詞,接続,属格	_	3	mark	_	Gloss='s|SpaceAfter=No
6	善	善	VERB	v,動詞,描写,態度	Degree=Pos	8	acl	_	Gloss=good|SpaceAfter=No
7	弈	弈	NOUN	n,名詞,可搬,道具	_	6	obj	_	Gloss=board-game|SpaceAfter=No
8	者	者	PART	p,助詞,提示,*	_	0	root	_	Gloss=that-which|SpaceAfter=No
9	也	也	PART	p,助詞,句末,*	_	8	discourse:sp	_	Gloss=[final-particle]|SpaceAfter=No

~~~


