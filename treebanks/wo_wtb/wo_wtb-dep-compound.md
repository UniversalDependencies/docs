---
layout: base
title:  'Statistics of compound in UD_Wolof-WTB'
udver: '2'
---

## Treebank Statistics: UD_Wolof-WTB: Relations: `compound`

This relation is universal.
There are 2 language-specific subtypes of `compound`: <tt><a href="wo_wtb-dep-compound-prt.html">compound:prt</a></tt>, <tt><a href="wo_wtb-dep-compound-svc.html">compound:svc</a></tt>.

220 nodes (0%) are attached to their parents as `compound`.

185 instances of `compound` (84%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.17727272727273.

The following 6 pairs of parts of speech are connected with `compound`: <tt><a href="wo_wtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="wo_wtb-pos-NOUN.html">NOUN</a></tt> (106; 48% instances), <tt><a href="wo_wtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="wo_wtb-pos-PROPN.html">PROPN</a></tt> (71; 32% instances), <tt><a href="wo_wtb-pos-NUM.html">NUM</a></tt>-<tt><a href="wo_wtb-pos-NUM.html">NUM</a></tt> (36; 16% instances), <tt><a href="wo_wtb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="wo_wtb-pos-PROPN.html">PROPN</a></tt> (3; 1% instances), <tt><a href="wo_wtb-pos-VERB.html">VERB</a></tt>-<tt><a href="wo_wtb-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="wo_wtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="wo_wtb-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 compound	color:blue
1	Soxna	Soxna	PROPN	NAME	_	4	nsubj	_	_
2	Jaara	Jaara	PROPN	NAME	_	1	flat	_	_
3	nag	nag	ADV	ADV	_	1	advmod	_	_
4	bokkoon	bokk	VERB	VERB	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
5	ci	ci	ADP	PREP	_	6	case	_	_
6	askan	askan	NOUN	NOUN	_	4	obl	_	_
7	wu	bu	PRON	PRON	NounClass=Wol10|Number=Sing|Person=3|PronType=Rel	9	nsubj	_	_
8	di	di	AUX	COP	Aspect=Imp|Mood=Ind|Tense=Pres|VerbForm=Fin	9	cop	_	_
9	boroom	boroom	NOUN	NOUN	_	6	acl:relcl	_	_
10	barke	barke	NOUN	NOUN	_	9	compound	_	SpaceAfter=No
11	.	.	PUNCT	PERIOD	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 compound	color:blue
1	Am	am	VERB	VERB	Mood=Ind|VerbForm=Fin	0	root	_	_
2	na	na	AUX	INFL	Aspect=Perf|Mood=Ind|Number=Sing|Person=3	1	aux	_	_
3	ñu	mu	PRON	PRON	Case=Nom|Number=Plur|Person=3|PronType=Prs	4	nsubj	_	_
4	ne	ne	VERB	VERB	Mood=Ind|VerbForm=Fin	1	ccomp	_	SpaceAfter=No
5	,	,	PUNCT	COMMA	_	10	punct	_	_
6	lebu	lebu	PROPN	NAME	_	10	dislocated	_	_
7	yi	bi	DET	DET	Definite=Def|Deixis=Prox|NounClass=Wol8|Number=Plur|PronType=Art	6	det	_	_
8	ñu	mu	PRON	PRON	Case=Nom|Number=Plur|Person=3|PronType=Prs	10	nsubj	_	_
9	a	a	AUX	INFL	FocusType=Subj|Mood=Ind	10	aux	_	_
10	sos	sos	VERB	VERB	Mood=Ind|VerbForm=Fin	4	ccomp	_	_
11	làkk	làkk	NOUN	NOUN	_	10	obj	_	_
12	wolof	wolof	PROPN	NAME	_	11	compound	_	SpaceAfter=No
13	.	.	PUNCT	PERIOD	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 compound	color:blue
1	Ci	ci	ADP	PREP	_	2	case	_	_
2	xarnub	xarnu	NOUN	NOUN	Case=Gen|Number=Sing	11	obl	_	_
3	fukk	fukk	NUM	NUMBER	NumType=Card	2	nummod	_	_
4	ak	ak	CCONJ	CONJ	_	6	cc	_	_
5	juróom	juróom	NUM	NUMBER	NumType=Card	6	compound	_	_
6	ñeent	ñeent	NUM	NUMBER	NumType=Card	3	conj	_	_
7	g.j	g.j	NOUN	NOUN	_	2	nmod	_	SpaceAfter=No
8	,	,	PUNCT	COMMA	_	11	punct	_	_
9	la	la	AUX	INFL	FocusType=Compl|Mood=Ind|Number=Sing|Person=3	11	aux	_	_
10	Fuuta	Fuuta	PROPN	NAME	_	11	nsubj	_	_
11	tàmbali	tàmbali	VERB	VERB	Mood=Ind|VerbForm=Fin	0	root	_	_
12	a	a	PART	PART	_	13	mark	_	_
13	naaxsaay	naaxsaay	VERB	VERB	VerbForm=Inf	11	xcomp	_	SpaceAfter=No
14	.	.	PUNCT	PERIOD	_	11	punct	_	_

~~~


