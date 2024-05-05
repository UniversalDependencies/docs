---
layout: base
title:  'Statistics of ccomp in UD_Classical_Chinese-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Classical_Chinese-TueCL: Relations: `ccomp`

This relation is universal.

4 nodes (1%) are attached to their parents as `ccomp`.

4 instances of `ccomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.

The following 2 pairs of parts of speech are connected with `ccomp`: <tt><a href="lzh_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="lzh_tuecl-pos-NOUN.html">NOUN</a></tt> (2; 50% instances), <tt><a href="lzh_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="lzh_tuecl-pos-VERB.html">VERB</a></tt> (2; 50% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 ccomp	color:blue
1	鯤	鯤	PROPN	_	NameType=Giv	3	nmod	_	Gloss=[given-name]|SpaceAfter=No
2	之	之	SCONJ	_	_	1	case	_	Gloss='s|SpaceAfter=No
3	大	大	VERB	_	Degree=Pos	5	dislocated	_	Gloss=big|SpaceAfter=No
4	不	不	ADV	_	Polarity=Neg	5	advmod	_	Gloss=not|SpaceAfter=No
5	知	知	VERB	_	_	0	root	_	Gloss=know|SpaceAfter=No
6	其	其	PRON	_	Person=3|PronType=Prs	9	nsubj	_	Gloss=[3PRON]|SpaceAfter=No
7	幾	幾	ADV	_	_	8	amod	_	Gloss=how-many|SpaceAfter=No|Translit=几
8	千	千	NUM	_	_	9	nummod	_	Gloss=thousand|SpaceAfter=No
9	里	里	NOUN	_	NounType=Clf	5	ccomp	_	Gloss=[distance-unit]|SpaceAfter=No
10	也	也	PART	_	_	9	discourse	_	Gloss=[final-particle]|SpaceAfter=No

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 ccomp	color:blue
1	奚	奚	PRON	_	PronType=Int	3	obj	_	Gloss=how|SpaceAfter=No
2	以	以	VERB	_	_	1	case	_	Gloss=use|SpaceAfter=No
3	知	知	VERB	_	_	0	root	_	Gloss=know|SpaceAfter=No
4	其	其	PRON	_	Person=3|PronType=Prs	5	nsubj	_	Gloss=[3PRON]|SpaceAfter=No
5	然	然	VERB	_	Degree=Pos	3	ccomp	_	Gloss=like-this|SpaceAfter=No
6	也	也	PART	_	_	3	discourse:sp	_	Gloss=[final-particle]|SpaceAfter=No

~~~


