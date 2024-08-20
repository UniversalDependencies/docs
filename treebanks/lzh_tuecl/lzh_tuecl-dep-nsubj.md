---
layout: base
title:  'Statistics of nsubj in UD_Classical_Chinese-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Classical_Chinese-TueCL: Relations: `nsubj`

This relation is universal.

72 nodes (11%) are attached to their parents as `nsubj`.

72 instances of `nsubj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.23611111111111.

The following 15 pairs of parts of speech are connected with `nsubj`: <tt><a href="lzh_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="lzh_tuecl-pos-NOUN.html">NOUN</a></tt> (29; 40% instances), <tt><a href="lzh_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="lzh_tuecl-pos-PRON.html">PRON</a></tt> (14; 19% instances), <tt><a href="lzh_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lzh_tuecl-pos-PRON.html">PRON</a></tt> (5; 7% instances), <tt><a href="lzh_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="lzh_tuecl-pos-PROPN.html">PROPN</a></tt> (4; 6% instances), <tt><a href="lzh_tuecl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="lzh_tuecl-pos-NOUN.html">NOUN</a></tt> (3; 4% instances), <tt><a href="lzh_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lzh_tuecl-pos-NOUN.html">NOUN</a></tt> (3; 4% instances), <tt><a href="lzh_tuecl-pos-PROPN.html">PROPN</a></tt>-<tt><a href="lzh_tuecl-pos-NOUN.html">NOUN</a></tt> (3; 4% instances), <tt><a href="lzh_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="lzh_tuecl-pos-PART.html">PART</a></tt> (3; 4% instances), <tt><a href="lzh_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lzh_tuecl-pos-PART.html">PART</a></tt> (2; 3% instances), <tt><a href="lzh_tuecl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="lzh_tuecl-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="lzh_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lzh_tuecl-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="lzh_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lzh_tuecl-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="lzh_tuecl-pos-PROPN.html">PROPN</a></tt>-<tt><a href="lzh_tuecl-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="lzh_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="lzh_tuecl-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="lzh_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="lzh_tuecl-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nsubj	color:blue
1	北	北	NOUN	_	Case=Loc	2	nmod	_	Gloss=north|SpaceAfter=No
2	冥	冥	NOUN	_	Degree=Pos	3	nsubj	_	Gloss=sea|SpaceAfter=No|Translit=通“溟”
3	有	有	VERB	_	_	0	root	_	Gloss=have|SpaceAfter=No
4	魚	魚	NOUN	_	_	3	obj	_	Gloss=fish|SpaceAfter=No

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj	color:blue
1	其	其	PRON	_	Person=3|PronType=Prs	2	nsubj	_	Gloss=[3PRON]|SpaceAfter=No
2	遠	遠	VERB	_	Degree=Pos	0	root	_	Gloss=distant|SpaceAfter=No
3	而	而	CCONJ	_	_	2	cc	_	Gloss=and|SpaceAfter=No
4	无	無	VERB	_	Polarity=Neg	7	acl	_	Gloss=not-have|SpaceAfter=No
5	所	所	PART	_	_	6	case	_	Gloss=that-which|SpaceAfter=No
6	至	至	VERB	_	_	4	obj	_	Gloss=arrive|SpaceAfter=No
7	極	極	NOUN	_	_	2	conj	_	Gloss=reach-the-end|SpaceAfter=No
8	邪	邪	PART	_	_	2	discourse:sp	_	Gloss=[Q]|SpaceAfter=No

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 nsubj	color:blue
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


