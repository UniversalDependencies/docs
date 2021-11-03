---
layout: base
title:  'Statistics of obl:tmod in UD_Classical_Chinese-Kyoto'
udver: '2'
---

## Treebank Statistics: UD_Classical_Chinese-Kyoto: Relations: `obl:tmod`

This relation is a language-specific subtype of <tt><a href="lzh_kyoto-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="lzh_kyoto-dep-obl-lmod.html">obl:lmod</a></tt>.

2661 nodes (1%) are attached to their parents as `obl:tmod`.

2589 instances of `obl:tmod` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.36151822623074.

The following 10 pairs of parts of speech are connected with `obl:tmod`: <tt><a href="lzh_kyoto-pos-VERB.html">VERB</a></tt>-<tt><a href="lzh_kyoto-pos-NOUN.html">NOUN</a></tt> (2420; 91% instances), <tt><a href="lzh_kyoto-pos-VERB.html">VERB</a></tt>-<tt><a href="lzh_kyoto-pos-NUM.html">NUM</a></tt> (104; 4% instances), <tt><a href="lzh_kyoto-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lzh_kyoto-pos-NOUN.html">NOUN</a></tt> (96; 4% instances), <tt><a href="lzh_kyoto-pos-NUM.html">NUM</a></tt>-<tt><a href="lzh_kyoto-pos-NOUN.html">NOUN</a></tt> (19; 1% instances), <tt><a href="lzh_kyoto-pos-PROPN.html">PROPN</a></tt>-<tt><a href="lzh_kyoto-pos-NOUN.html">NOUN</a></tt> (7; 0% instances), <tt><a href="lzh_kyoto-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lzh_kyoto-pos-NUM.html">NUM</a></tt> (6; 0% instances), <tt><a href="lzh_kyoto-pos-PART.html">PART</a></tt>-<tt><a href="lzh_kyoto-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="lzh_kyoto-pos-PROPN.html">PROPN</a></tt>-<tt><a href="lzh_kyoto-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="lzh_kyoto-pos-NUM.html">NUM</a></tt>-<tt><a href="lzh_kyoto-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="lzh_kyoto-pos-AUX.html">AUX</a></tt>-<tt><a href="lzh_kyoto-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 obl:tmod	color:blue
1	一	一	NUM	n,数詞,数字,*	_	2	nummod	_	Gloss=one|SpaceAfter=No
2	日	日	NOUN	n,名詞,時,*	Case=Tem	3	obl:tmod	_	Gloss=day|SpaceAfter=No
3	克	克	VERB	v,動詞,行為,動作	_	0	root	_	Gloss=conquer|SpaceAfter=No
4	己	己	PRON	n,代名詞,人称,他	PronType=Prs|Reflex=Yes	3	obj	_	Gloss=self|SpaceAfter=No
5	復	復	VERB	v,動詞,行為,動作	_	3	conj	_	Gloss=repeat|SpaceAfter=No
6	禮	禮	NOUN	n,名詞,制度,儀礼	_	5	obj	_	Gloss=ceremony|SpaceAfter=No

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 obl:tmod	color:blue
1	顯慶	顯慶	NOUN	n,名詞,時,*	Case=Tem	2	nmod	_	Gloss=[era-name]|SpaceAfter=No
2	四	四	NUM	n,数詞,数字,*	_	4	obl:tmod	_	Gloss=four|SpaceAfter=No
3	年	年	NOUN	n,名詞,時,*	Case=Tem	2	clf	_	Gloss=year|SpaceAfter=No
4	削	削	VERB	v,動詞,行為,動作	_	0	root	_	Gloss=pare|SpaceAfter=No
5	無忌	無忌	PROPN	n,名詞,人,名	NameType=Giv	6	nmod	_	Gloss=[given-name]|SpaceAfter=No
6	官	官	NOUN	n,名詞,人,役割	_	4	obj	_	Gloss=officer|SpaceAfter=No

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 1 obl:tmod	color:blue
1	今	今	NOUN	n,名詞,時,*	Case=Tem	8	obl:tmod	_	Gloss=now|SpaceAfter=No
2	夫	夫	PART	p,助詞,句頭,*	_	8	advmod	_	Gloss=[modal-particle]|SpaceAfter=No
3	弈	弈	NOUN	n,名詞,可搬,道具	_	6	nsubj	_	Gloss=board-game|SpaceAfter=No
4	之	之	SCONJ	p,助詞,接続,属格	_	3	case	_	Gloss='s|SpaceAfter=No
5	為	爲	AUX	v,動詞,存在,存在	VerbType=Cop	6	cop	_	Gloss=be|SpaceAfter=No
6	數	數	NOUN	n,名詞,数量,*	_	8	csubj	_	Gloss=number|SpaceAfter=No
7	小	小	VERB	v,動詞,描写,量	Degree=Pos|VerbForm=Part	8	amod	_	Gloss=small|SpaceAfter=No
8	數	數	NOUN	n,名詞,数量,*	_	0	root	_	Gloss=number|SpaceAfter=No
9	也	也	PART	p,助詞,句末,*	_	8	discourse:sp	_	Gloss=[final-particle]|SpaceAfter=No

~~~


