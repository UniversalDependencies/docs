---
layout: base
title:  'Statistics of discourse in UD_Wolof-WTB'
udver: '2'
---

## Treebank Statistics: UD_Wolof-WTB: Relations: `discourse`

This relation is universal.

47 nodes (0%) are attached to their parents as `discourse`.

41 instances of `discourse` (87%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.53191489361702.

The following 4 pairs of parts of speech are connected with `discourse`: <tt><a href="wo_wtb-pos-VERB.html">VERB</a></tt>-<tt><a href="wo_wtb-pos-INTJ.html">INTJ</a></tt> (38; 81% instances), <tt><a href="wo_wtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="wo_wtb-pos-INTJ.html">INTJ</a></tt> (6; 13% instances), <tt><a href="wo_wtb-pos-PRON.html">PRON</a></tt>-<tt><a href="wo_wtb-pos-INTJ.html">INTJ</a></tt> (2; 4% instances), <tt><a href="wo_wtb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="wo_wtb-pos-INTJ.html">INTJ</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 6 discourse	color:blue
1	Sëriñ	Sëriñ	NOUN	NOUN	_	3	nsubj	_	_
2	bi	bi	DET	DET	Definite=Def|Deixis=Prox|NounClass=Wol5|Number=Sing|PronType=Art	1	det	_	_
3	ne	ne	VERB	VERB	Mood=Ind|VerbForm=Fin	0	root	_	_
4	ko	ko	PRON	CL	Case=Acc|Number=Sing|Person=3|PronType=Prs	3	obj	_	SpaceAfter=No
5	:	:	PUNCT	COLON	_	15	punct	_	_
6	aah	aah	INTJ	INTJ	_	15	discourse	_	SpaceAfter=No
7	,	,	PUNCT	COMMA	_	15	punct	_	_
8	aw	ab	DET	DET	Definite=Ind|NounClass=Wol10|Number=Sing|PronType=Art	9	det	_	_
9	nag	nag	NOUN	NOUN	_	15	dislocated	_	_
10	moom	moom	ADV	ADV	_	9	advmod	_	_
11	lu	bu	PRON	PRON	NounClass=Wol7|Number=Sing|Person=3|PronType=Rel	15	nsubj	_	_
12	ko	ko	PRON	CL	Case=Acc|Number=Sing|Person=3|PronType=Prs	13	obj	_	_
13	yobbu	yobbu	VERB	VERB	Mood=Ind|VerbForm=Fin	11	acl:relcl	_	_
14	dina	di	AUX	AUX	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Fut	15	aux	_	_
15	jafe	jafe	VERB	VERB	Mood=Ind|VerbForm=Fin	3	parataxis	_	SpaceAfter=No
16	.	.	PUNCT	PERIOD	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 discourse	color:blue
1	Xalaas	xalaas	INTJ	INTJ	_	6	discourse	_	SpaceAfter=No
2	,	,	PUNCT	COMMA	_	6	punct	_	_
3	loolu	boobu	PRON	PRON	Deixis=Prox|DeixisRef=2|NounClass=Wol7|Number=Sing|PronType=Dem	6	nsubj	_	_
4	de	de	ADV	ADV	_	3	advmod	_	_
5	du	di	AUX	COP	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	6	cop	_	_
6	ngoóora	ngoóora	NOUN	NOUN	_	0	root	_	SpaceAfter=No
7	!	!	PUNCT	EXCL-POINT	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 discourse	color:blue
1	Mbas	mbas	INTJ	INTJ	_	3	discourse	_	_
2	ci	ci	ADP	PREP	_	3	case	_	_
3	li	bi	PRON	PRON	Definite=Def|Deixis=Prox|NounClass=Wol7|Number=Sing|PronType=Rel	0	root	_	_
4	fi	fi	ADV	ADV	Deixis=Prox|NounClass=Wol11|PronType=Dem	9	advmod	_	_
5	"	"	PUNCT	QUOTE	_	9	punct	_	SpaceAfter=No
6	Jean	Jean	PROPN	NAME	_	9	nsubj	_	_
7	ak	ak	CCONJ	CONJ	_	8	cc	_	_
8	Paul	Paul	PROPN	NAME	_	6	conj	_	_
9	def	def	VERB	VERB	Mood=Ind|VerbForm=Fin	3	acl:relcl	_	SpaceAfter=No
10	"	"	PUNCT	QUOTE	_	9	punct	_	SpaceAfter=No
11	!	!	PUNCT	EXCL-POINT	_	3	punct	_	_

~~~


