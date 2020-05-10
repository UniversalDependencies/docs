---
layout: base
title:  'Statistics of xcomp in UD_Classical_Chinese-Kyoto'
udver: '2'
---

## Treebank Statistics: UD_Classical_Chinese-Kyoto: Relations: `xcomp`

This relation is universal.

280 nodes (0%) are attached to their parents as `xcomp`.

280 instances of `xcomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.69642857142857.

The following 3 pairs of parts of speech are connected with `xcomp`: <tt><a href="lzh_kyoto-pos-VERB.html">VERB</a></tt>-<tt><a href="lzh_kyoto-pos-VERB.html">VERB</a></tt> (184; 66% instances), <tt><a href="lzh_kyoto-pos-VERB.html">VERB</a></tt>-<tt><a href="lzh_kyoto-pos-PRON.html">PRON</a></tt> (85; 30% instances), <tt><a href="lzh_kyoto-pos-VERB.html">VERB</a></tt>-<tt><a href="lzh_kyoto-pos-NOUN.html">NOUN</a></tt> (11; 4% instances).


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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 xcomp	color:blue
1	季	季	PROPN	n,名詞,人,姓氏	NameType=Sur	3	nsubj	_	Gloss=[surname]|SpaceAfter=No
2	氏	氏	NOUN	n,名詞,不可譲,属性	_	1	flat	_	Gloss=lineage|SpaceAfter=No
3	使	使	VERB	v,動詞,行為,使役	_	0	root	_	Gloss=[make-to-do]|SpaceAfter=No
4	閔	閔	PROPN	n,名詞,人,姓氏	NameType=Sur	3	obj	_	Gloss=[surname]|SpaceAfter=No
5	子騫	子騫	PROPN	n,名詞,人,名	NameType=Giv	4	flat	_	Gloss=[given-name]|SpaceAfter=No
6	為	爲	AUX	v,動詞,存在,存在	VerbType=Cop	8	cop	_	Gloss=be|SpaceAfter=No
7	費	費	PROPN	n,名詞,固定物,地名	Case=Loc|NameType=Geo	8	nmod	_	Gloss=[place-name]|SpaceAfter=No
8	宰	宰	NOUN	n,名詞,人,役割	_	3	xcomp	_	Gloss=minister|SpaceAfter=No

~~~


