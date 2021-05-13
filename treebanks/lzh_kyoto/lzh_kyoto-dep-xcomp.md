---
layout: base
title:  'Statistics of xcomp in UD_Classical_Chinese-Kyoto'
udver: '2'
---

## Treebank Statistics: UD_Classical_Chinese-Kyoto: Relations: `xcomp`

This relation is universal.

676 nodes (0%) are attached to their parents as `xcomp`.

676 instances of `xcomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.81656804733728.

The following 6 pairs of parts of speech are connected with `xcomp`: <tt><a href="lzh_kyoto-pos-VERB.html">VERB</a></tt>-<tt><a href="lzh_kyoto-pos-VERB.html">VERB</a></tt> (562; 83% instances), <tt><a href="lzh_kyoto-pos-VERB.html">VERB</a></tt>-<tt><a href="lzh_kyoto-pos-PRON.html">PRON</a></tt> (96; 14% instances), <tt><a href="lzh_kyoto-pos-VERB.html">VERB</a></tt>-<tt><a href="lzh_kyoto-pos-NOUN.html">NOUN</a></tt> (15; 2% instances), <tt><a href="lzh_kyoto-pos-VERB.html">VERB</a></tt>-<tt><a href="lzh_kyoto-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="lzh_kyoto-pos-VERB.html">VERB</a></tt>-<tt><a href="lzh_kyoto-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="lzh_kyoto-pos-VERB.html">VERB</a></tt>-<tt><a href="lzh_kyoto-pos-SYM.html">SYM</a></tt> (1; 0% instances).


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
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 xcomp	color:blue
1	齊	齊	PROPN	n,名詞,主体,国名	Case=Loc|NameType=Nat	2	nsubj	_	Gloss=[country-name]|SpaceAfter=No
2	使	使	VERB	v,動詞,行為,使役	_	0	root	_	Gloss=[make-to-do]|SpaceAfter=No
3	田	田	PROPN	n,名詞,人,姓氏	NameType=Sur	2	obj	_	Gloss=[surname]|SpaceAfter=No
4	忌	忌	PROPN	n,名詞,人,名	NameType=Giv	3	flat	_	Gloss=[given-name]|SpaceAfter=No
5	爲	爲	AUX	v,動詞,存在,存在	VerbType=Cop	6	cop	_	Gloss=be|SpaceAfter=No
6	將	將	NOUN	n,名詞,人,役割	_	2	xcomp	_	Gloss=general|SpaceAfter=No

~~~


