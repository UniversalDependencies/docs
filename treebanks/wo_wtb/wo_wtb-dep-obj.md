---
layout: base
title:  'Statistics of obj in UD_Wolof-WTB'
udver: '2'
---

## Treebank Statistics: UD_Wolof-WTB: Relations: `obj`

This relation is universal.
There are 2 language-specific subtypes of `obj`: <tt><a href="wo_wtb-dep-obj-appl.html">obj:appl</a></tt>, <tt><a href="wo_wtb-dep-obj-caus.html">obj:caus</a></tt>.

3319 nodes (7%) are attached to their parents as `obj`.

2329 instances of `obj` (70%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.67972280807472.

The following 5 pairs of parts of speech are connected with `obj`: <tt><a href="wo_wtb-pos-VERB.html">VERB</a></tt>-<tt><a href="wo_wtb-pos-PRON.html">PRON</a></tt> (1600; 48% instances), <tt><a href="wo_wtb-pos-VERB.html">VERB</a></tt>-<tt><a href="wo_wtb-pos-NOUN.html">NOUN</a></tt> (1499; 45% instances), <tt><a href="wo_wtb-pos-VERB.html">VERB</a></tt>-<tt><a href="wo_wtb-pos-PROPN.html">PROPN</a></tt> (206; 6% instances), <tt><a href="wo_wtb-pos-VERB.html">VERB</a></tt>-<tt><a href="wo_wtb-pos-NUM.html">NUM</a></tt> (13; 0% instances), <tt><a href="wo_wtb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="wo_wtb-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 15 obj	color:blue
1	Bu	bu	PRON	PRON	NounClass=Wol5|Number=Sing|Person=3|PronType=Rel	16	advmod	_	_
2	jëkk	jëkk	VERB	VERB	Mood=Ind|VerbForm=Fin	1	fixed	_	SpaceAfter=No
3	,	,	PUNCT	COMMA	_	4	punct	_	_
4	nguur	nguur	NOUN	NOUN	_	16	dislocated	_	_
5	googu	boobu	DET	DET	Deixis=Prox|DeixisRef=2|NounClass=Wol3|Number=Sing|PronType=Dem	4	det	_	SpaceAfter=No
6	,	,	PUNCT	COMMA	_	8	punct	_	_
7	ay	ab	DET	DET	Definite=Ind|NounClass=Wol8|Number=Plur|PronType=Art	8	det	_	_
8	socé	socé	NOUN	NOUN	_	16	dislocated	_	_
9	ak	ak	CCONJ	CONJ	_	11	cc	_	_
10	ay	ab	DET	DET	Definite=Ind|NounClass=Wol8|Number=Plur|PronType=Art	11	det	_	_
11	séeréer	séeréer	NOUN	NOUN	_	8	conj	_	SpaceAfter=No
12	,	,	PUNCT	COMMA	_	16	punct	_	_
13	ñu	mu	PRON	PRON	Case=Nom|Number=Plur|Person=3|PronType=Prs	16	nsubj	_	_
14	a	a	AUX	INFL	FocusType=Subj|Mood=Ind	16	aux	_	_
15	ko	ko	PRON	CL	Case=Acc|Number=Sing|Person=3|PronType=Prs	16	obj	_	_
16	yoroon	yor	VERB	VERB	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
17	.	.	PUNCT	PERIOD	_	16	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 obj	color:blue
1	Boobu	boobu	DET	DET	Deixis=Prox|DeixisRef=2|NounClass=Wol5|Number=Sing|PronType=Dem	2	det	_	_
2	jamono	jamono	NOUN	NOUN	_	6	obl	_	SpaceAfter=No
3	,	,	PUNCT	COMMA	_	4	punct	_	_
4	Bawol	Bawol	PROPN	NAME	_	6	nsubj	_	SpaceAfter=No
5	,	,	PUNCT	COMMA	_	6	punct	_	_
6	amoon	am	VERB	VERB	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
7	na	na	AUX	INFL	Aspect=Perf|Mood=Ind|Number=Sing|Person=3	6	aux	_	_
8	ndox	ndox	NOUN	NOUN	_	6	obj	_	_
9	mu	bu	PRON	PRON	NounClass=Wol6|Number=Sing|Person=3|PronType=Rel	10	nsubj	_	_
10	bare	bare	VERB	VERB	Mood=Ind|VerbForm=Fin	8	acl:relcl	_	SpaceAfter=No
11	.	.	PUNCT	PERIOD	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 obj	color:blue
1	Mu	mu	PRON	PRON	Case=Nom|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	nangu	nangu	VERB	VERB	Mood=Ind|VerbForm=Fin	0	root	_	_
3	te	te	CCONJ	CONJ	_	4	cc	_	_
4	seere	seere	VERB	VERB	Mood=Ind|VerbForm=Fin	2	conj	_	_
5	ni	ni	SCONJ	COMP	_	7	mark	_	SpaceAfter=No
6	:	:	PUNCT	COLON	_	7	punct	_	_
7	Amul	am	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|VerbForm=Fin	4	ccomp	_	_
8	jenn	benn	DET	DET	Definite=Ind|NounClass=Wol4|Number=Sing|PronType=Art	9	det	_	_
9	Yàlla	Yàlla	PROPN	NAME	_	7	obj	_	_
10	ju	bu	PRON	PRON	NounClass=Wol4|Number=Sing|Person=3|PronType=Rel	12	nsubj	_	_
11	dul	di	AUX	COP	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	12	cop	_	_
12	Allaa	Allaa	PROPN	NAME	_	9	acl:relcl	_	SpaceAfter=No
13	.	.	PUNCT	PERIOD	_	2	punct	_	_

~~~


