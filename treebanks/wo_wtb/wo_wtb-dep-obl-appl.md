---
layout: base
title:  'Statistics of obl:appl in UD_Wolof-WTB'
udver: '2'
---

## Treebank Statistics: UD_Wolof-WTB: Relations: `obl:appl`

This relation is a language-specific subtype of <tt><a href="wo_wtb-dep-obl.html">obl</a></tt>.

79 nodes (0%) are attached to their parents as `obl:appl`.

49 instances of `obl:appl` (62%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.44303797468354.

The following 4 pairs of parts of speech are connected with `obl:appl`: <tt><a href="wo_wtb-pos-VERB.html">VERB</a></tt>-<tt><a href="wo_wtb-pos-NOUN.html">NOUN</a></tt> (47; 59% instances), <tt><a href="wo_wtb-pos-VERB.html">VERB</a></tt>-<tt><a href="wo_wtb-pos-PROPN.html">PROPN</a></tt> (17; 22% instances), <tt><a href="wo_wtb-pos-VERB.html">VERB</a></tt>-<tt><a href="wo_wtb-pos-PRON.html">PRON</a></tt> (11; 14% instances), <tt><a href="wo_wtb-pos-VERB.html">VERB</a></tt>-<tt><a href="wo_wtb-pos-ADP.html">ADP</a></tt> (4; 5% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 11 obl:appl	color:blue
1	Askanoog	askanu	NOUN	NOUN	Case=Gen|Number=Sing	0	root	_	_
2	Kleopaatar	Kleopaatar	PROPN	NAME	_	1	nmod	_	_
3	ci	ci	ADP	PREP	_	4	case	_	_
4	Afrig	Afrig	PROPN	NAME	_	1	nmod	_	SpaceAfter=No
5	:	:	PUNCT	COLON	_	6	punct	_	_
6	firnde	firnde	NOUN	NOUN	_	1	parataxis	_	_
7	gu	bu	PRON	PRON	NounClass=Wol3|Number=Sing|Person=3|PronType=Rel	8	nsubj	_	_
8	tukkee	tukki	VERB	VERB	Aspect=Perf|Mood=Ind|VerbForm=Fin	6	acl:relcl	_	_
9	ci	ci	ADP	PREP	_	11	case	_	_
10	ay	ab	DET	DET	Definite=Ind|NounClass=Wol8|Number=Plur|PronType=Art	11	det	_	_
11	yax	yax	NOUN	NOUN	_	8	obl:appl	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 9 obl:appl	color:blue
1	Doorees	door	VERB	VERB	Mood=Ind|Person=0|VerbForm=Fin	0	root	_	_
2	na	na	AUX	INFL	Aspect=Perf|Mood=Ind|Number=Sing|Person=3	1	aux	_	_
3	ag	ag	DET	DET	Definite=Ind|NounClass=Wol3|Number=Sing|PronType=Art	4	det	_	_
4	gaaralu	gaaral	NOUN	NOUN	Case=Gen|Number=Sing	1	obj	_	_
5	Windows	Windows	PROPN	NAME	_	4	nmod	_	_
6	Phone	Phone	PROPN	NAME	_	5	flat	_	_
7	7	7	NUM	NUMBER	NumType=Card	5	nummod	_	_
8	ca	ca	ADP	PREP	_	9	case	_	_
9	New	New	PROPN	NAME	_	1	obl:appl	_	_
10	York	York	PROPN	NAME	_	9	flat	_	SpaceAfter=No
11	.	.	PUNCT	PERIOD	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 7 obl:appl	color:blue
1	Senegaal	Senegaal	PROPN	NAME	_	4	obj	_	SpaceAfter=No
2	,	,	PUNCT	COMMA	_	4	punct	_	_
3	lañu	la	AUX	INFL	FocusType=Compl|Mood=Ind|Number=Plur|Person=3	4	aux	_	_
4	agsi	agsi	VERB	VERB	Mood=Ind|VerbForm=Fin	0	root	_	SpaceAfter=No
5	,	,	PUNCT	COMMA	_	4	punct	_	_
6	jamono	jamono	NOUN	NOUN	_	4	obl	_	_
7	ja	ba	PRON	PRON	Definite=Def|Deixis=Remt|NounClass=Wol4|Number=Sing|Person=3|PronType=Rel	10	obl:appl	_	_
8	nguuru	nguur	NOUN	NOUN	Case=Gen|Number=Sing	10	nsubj	_	_
9	Tekuruur	Tekuruur	PROPN	NAME	_	8	nmod	_	_
10	ame	am	VERB	VERB	Mood=Ind|VerbForm=Fin	6	acl:relcl	_	SpaceAfter=No
11	.	.	PUNCT	PERIOD	_	4	punct	_	_

~~~


