---
layout: base
title:  'Statistics of xcomp in UD_Classical_Chinese-Kyoto'
udver: '2'
---

## Treebank Statistics: UD_Classical_Chinese-Kyoto: Relations: `xcomp`

This relation is universal.

1311 nodes (0%) are attached to their parents as `xcomp`.

1311 instances of `xcomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.95270785659802.

The following 9 pairs of parts of speech are connected with `xcomp`: <tt><a href="lzh_kyoto-pos-VERB.html">VERB</a></tt>-<tt><a href="lzh_kyoto-pos-VERB.html">VERB</a></tt> (1166; 89% instances), <tt><a href="lzh_kyoto-pos-VERB.html">VERB</a></tt>-<tt><a href="lzh_kyoto-pos-PRON.html">PRON</a></tt> (108; 8% instances), <tt><a href="lzh_kyoto-pos-VERB.html">VERB</a></tt>-<tt><a href="lzh_kyoto-pos-NOUN.html">NOUN</a></tt> (27; 2% instances), <tt><a href="lzh_kyoto-pos-VERB.html">VERB</a></tt>-<tt><a href="lzh_kyoto-pos-PROPN.html">PROPN</a></tt> (4; 0% instances), <tt><a href="lzh_kyoto-pos-VERB.html">VERB</a></tt>-<tt><a href="lzh_kyoto-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="lzh_kyoto-pos-NUM.html">NUM</a></tt>-<tt><a href="lzh_kyoto-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="lzh_kyoto-pos-VERB.html">VERB</a></tt>-<tt><a href="lzh_kyoto-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="lzh_kyoto-pos-VERB.html">VERB</a></tt>-<tt><a href="lzh_kyoto-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="lzh_kyoto-pos-VERB.html">VERB</a></tt>-<tt><a href="lzh_kyoto-pos-SYM.html">SYM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 xcomp	color:blue
1	使	使	VERB	v,動詞,行為,使役	_	0	root	_	Gloss=[make-to-do]|SpaceAfter=No
2	民	民	NOUN	n,名詞,人,人	_	1	obj	_	Gloss=people|SpaceAfter=No
3	如	如	VERB	v,動詞,行為,分類	Degree=Equ	1	xcomp	_	Gloss=be-like|SpaceAfter=No
4	承	承	VERB	v,動詞,行為,伝達	_	3	ccomp	_	Gloss=receive|SpaceAfter=No
5	大	大	VERB	v,動詞,描写,量	Degree=Pos|VerbForm=Part	6	amod	_	Gloss=big|SpaceAfter=No
6	祭	祭	NOUN	n,名詞,制度,儀礼	_	4	obj	_	Gloss=sacrifice|SpaceAfter=No

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 xcomp	color:blue
1	如	如	VERB	v,動詞,行為,分類	Degree=Equ	0	root	_	Gloss=be-like|SpaceAfter=No
2	之	之	PRON	n,代名詞,人称,止格	Person=3|PronType=Prs	1	obj	_	Gloss=[3PRON]|SpaceAfter=No
3	何	何	PRON	n,代名詞,疑問,*	PronType=Int	1	xcomp	_	Gloss=what|SpaceAfter=No

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 xcomp	color:blue
1	今	今	NOUN	n,名詞,時,*	Case=Tem	4	obl:tmod	_	Gloss=now|SpaceAfter=No
2	君	君	NOUN	n,名詞,人,役割	_	4	nsubj	_	Gloss=ruler|SpaceAfter=No
3	之	之	SCONJ	p,助詞,接続,属格	_	2	case	_	Gloss='s|SpaceAfter=No
4	使	使	VERB	v,動詞,行為,使役	_	12	csubj	_	Gloss=[make-to-do]|SpaceAfter=No
5	最	最	PROPN	n,名詞,人,名	NameType=Giv	4	obj	_	Gloss=[given-name]|SpaceAfter=No
6	為	爲	AUX	v,動詞,存在,存在	VerbType=Cop	8	cop	_	Gloss=be|SpaceAfter=No
7	太	太	VERB	v,動詞,描写,量	Degree=Pos|VerbForm=Part	8	amod	_	Gloss=very-great|SpaceAfter=No
8	子	子	NOUN	n,名詞,人,関係	_	4	xcomp	_	Gloss=child|SpaceAfter=No
9	獨	獨	ADV	v,動詞,描写,境遇	Degree=Pos|VerbForm=Conv	10	advmod	_	Gloss=alone|SpaceAfter=No
10	知	知	VERB	v,動詞,行為,動作	_	12	acl	_	Gloss=know|SpaceAfter=No
11	之	之	SCONJ	p,助詞,接続,属格	_	10	case	_	Gloss='s|SpaceAfter=No
12	契	契	NOUN	n,名詞,可搬,伝達	_	0	root	_	SpaceAfter=No
13	也	也	PART	p,助詞,句末,*	_	12	discourse:sp	_	Gloss=[final-particle]|SpaceAfter=No

~~~


