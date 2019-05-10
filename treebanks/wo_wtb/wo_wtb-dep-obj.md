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
1	Bu	bu	PRON	PRON	NounClass=Wol5|Number=Sing|Person=3|PronType=Rel	16	advmod	16:advmod	_
2	jëkk	jëkk	VERB	VERB	Mood=Ind|VerbForm=Fin	1	fixed	1:fixed	SpaceAfter=No
3	,	,	PUNCT	COMMA	_	4	punct	4:punct	_
4	nguur	nguur	NOUN	NOUN	_	16	dislocated	16:dislocated	_
5	googu	boobu	DET	DET	Deixis=Prox|DeixisRef=2|NounClass=Wol3|Number=Sing|PronType=Dem	4	det	4:det	SpaceAfter=No
6	,	,	PUNCT	COMMA	_	8	punct	8:punct	_
7	ay	ab	DET	DET	Definite=Ind|NounClass=Wol8|Number=Plur|PronType=Art	8	det	8:det	_
8	socé	socé	NOUN	NOUN	_	16	dislocated	16:dislocated	_
9	ak	ak	CCONJ	CONJ	_	11	cc	11:cc	_
10	ay	ab	DET	DET	Definite=Ind|NounClass=Wol8|Number=Plur|PronType=Art	11	det	11:det	_
11	séeréer	séeréer	NOUN	NOUN	_	8	conj	8:conj	SpaceAfter=No
12	,	,	PUNCT	COMMA	_	16	punct	16:punct	_
13	ñu	mu	PRON	PRON	Case=Nom|Number=Plur|Person=3|PronType=Prs	16	nsubj	16:nsubj	_
14	a	a	AUX	INFL	FocusType=Subj|Mood=Ind	16	aux	16:aux	_
15	ko	ko	PRON	CL	Case=Acc|Number=Sing|Person=3|PronType=Prs	16	obj	16:obj	_
16	yoroon	yor	VERB	VERB	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	0:root	SpaceAfter=No
17	.	.	PUNCT	PERIOD	_	16	punct	16:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 obj	color:blue
1	Boobu	boobu	DET	DET	Deixis=Prox|DeixisRef=2|NounClass=Wol5|Number=Sing|PronType=Dem	2	det	2:det	_
2	jamono	jamono	NOUN	NOUN	_	6	obl	6:obl	SpaceAfter=No
3	,	,	PUNCT	COMMA	_	4	punct	4:punct	_
4	Bawol	Bawol	PROPN	NAME	_	6	nsubj	6:nsubj	SpaceAfter=No
5	,	,	PUNCT	COMMA	_	6	punct	6:punct	_
6	amoon	am	VERB	VERB	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	0:root	_
7	na	na	AUX	INFL	Aspect=Perf|Mood=Ind|Number=Sing|Person=3	6	aux	6:aux	_
8	ndox	ndox	NOUN	NOUN	_	6	obj	6:obj	_
9	mu	bu	PRON	PRON	NounClass=Wol6|Number=Sing|Person=3|PronType=Rel	10	nsubj	10:nsubj	_
10	bare	bare	VERB	VERB	Mood=Ind|VerbForm=Fin	8	acl:relcl	8:acl:relcl	SpaceAfter=No
11	.	.	PUNCT	PERIOD	_	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 obj	color:blue
1	Mu	mu	PRON	PRON	Case=Nom|Number=Sing|Person=3|PronType=Prs	2	nsubj	2:nsubj	_
2	nangu	nangu	VERB	VERB	Mood=Ind|VerbForm=Fin	0	root	0:root	_
3	te	te	CCONJ	CONJ	_	4	cc	4:cc	_
4	seere	seere	VERB	VERB	Mood=Ind|VerbForm=Fin	2	conj	2:conj	_
5	ni	ni	SCONJ	COMP	_	7	mark	7:mark	SpaceAfter=No
6	:	:	PUNCT	COLON	_	7	punct	7:punct	_
7	Amul	am	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|VerbForm=Fin	4	ccomp	4:ccomp	_
8	jenn	benn	DET	DET	Definite=Ind|NounClass=Wol4|Number=Sing|PronType=Art	9	det	9:det	_
9	Yàlla	Yàlla	PROPN	NAME	_	7	obj	7:obj	_
10	ju	bu	PRON	PRON	NounClass=Wol4|Number=Sing|Person=3|PronType=Rel	12	nsubj	12:nsubj	_
11	dul	di	AUX	COP	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	12	cop	12:cop	_
12	Allaa	Allaa	PROPN	NAME	_	9	acl:relcl	9:acl:relcl	SpaceAfter=No
13	.	.	PUNCT	PERIOD	_	2	punct	2:punct	_

~~~


