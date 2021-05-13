---
layout: base
title:  'Statistics of acl:relcl in UD_Wolof-WTB'
udver: '2'
---

## Treebank Statistics: UD_Wolof-WTB: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="wo_wtb-dep-acl.html">acl</a></tt>.

2337 nodes (5%) are attached to their parents as `acl:relcl`.

2336 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.71287976037655.

The following 17 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="wo_wtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="wo_wtb-pos-VERB.html">VERB</a></tt> (1361; 58% instances), <tt><a href="wo_wtb-pos-PRON.html">PRON</a></tt>-<tt><a href="wo_wtb-pos-VERB.html">VERB</a></tt> (804; 34% instances), <tt><a href="wo_wtb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="wo_wtb-pos-VERB.html">VERB</a></tt> (76; 3% instances), <tt><a href="wo_wtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="wo_wtb-pos-NOUN.html">NOUN</a></tt> (24; 1% instances), <tt><a href="wo_wtb-pos-ADV.html">ADV</a></tt>-<tt><a href="wo_wtb-pos-VERB.html">VERB</a></tt> (20; 1% instances), <tt><a href="wo_wtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="wo_wtb-pos-PROPN.html">PROPN</a></tt> (12; 1% instances), <tt><a href="wo_wtb-pos-PRON.html">PRON</a></tt>-<tt><a href="wo_wtb-pos-NOUN.html">NOUN</a></tt> (11; 0% instances), <tt><a href="wo_wtb-pos-VERB.html">VERB</a></tt>-<tt><a href="wo_wtb-pos-VERB.html">VERB</a></tt> (11; 0% instances), <tt><a href="wo_wtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="wo_wtb-pos-PRON.html">PRON</a></tt> (4; 0% instances), <tt><a href="wo_wtb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="wo_wtb-pos-NOUN.html">NOUN</a></tt> (4; 0% instances), <tt><a href="wo_wtb-pos-NUM.html">NUM</a></tt>-<tt><a href="wo_wtb-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="wo_wtb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="wo_wtb-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="wo_wtb-pos-ADP.html">ADP</a></tt>-<tt><a href="wo_wtb-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="wo_wtb-pos-DET.html">DET</a></tt>-<tt><a href="wo_wtb-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="wo_wtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="wo_wtb-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="wo_wtb-pos-PRON.html">PRON</a></tt>-<tt><a href="wo_wtb-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="wo_wtb-pos-PRON.html">PRON</a></tt>-<tt><a href="wo_wtb-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 acl:relcl	color:blue
1	Loolu	boobu	PRON	PRON	Deixis=Prox|DeixisRef=2|NounClass=Wol7|Number=Sing|PronType=Dem	3	nsubj	_	_
2	a	a	AUX	INFL	FocusType=Subj|Mood=Ind	3	aux	_	_
3	taxoon	tax	VERB	VERB	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
4	ñu	mu	PRON	PRON	Case=Nom|Number=Plur|Person=3|PronType=Prs	6	nsubj	_	_
5	di	di	AUX	COP	Aspect=Imp|Mood=Ind|Tense=Pres|VerbForm=Fin	6	cop	_	_
6	réew	réew	NOUN	NOUN	_	3	ccomp	_	_
7	yu	bu	PRON	PRON	NounClass=Wol8|Number=Plur|Person=3|PronType=Rel	8	nsubj	_	_
8	naat	naat	VERB	VERB	Mood=Ind|VerbForm=Fin	6	acl:relcl	_	SpaceAfter=No
9	.	.	PUNCT	PERIOD	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 acl:relcl	color:blue
1	Ndax	ndax	CCONJ	CONJ	_	5	cc	_	_
2	Bawol	Bawol	PROPN	NAME	_	5	nsubj	_	SpaceAfter=No
3	,	,	PUNCT	COMMA	_	5	punct	_	_
4	benn	benn	DET	DET	Definite=Ind|NounClass=Wol5|Number=Sing|PronType=Art	5	det	_	_
5	dex	dex	NOUN	NOUN	_	0	root	_	_
6	la	la	AUX	COP	Mood=Ind|Number=Sing|Person=3|VerbForm=Fin	5	cop	_	_
7	woon	woon	AUX	CL	Tense=Past	5	aux	_	_
8	foofu	foofu	ADV	ADV	Deixis=Prox|DeixisRef=2|NounClass=Wol11|PronType=Dem	5	advmod	_	_
9	ci	ci	ADP	PREP	_	10	case	_	_
10	lu	bu	PRON	PRON	NounClass=Wol7|Number=Sing|Person=3|PronType=Rel	5	obl	_	_
11	doog	doog	VERB	VERB	Mood=Ind|VerbForm=Fin	10	acl:relcl	_	_
12	a	a	PART	PART	_	13	mark	_	_
13	am	am	VERB	VERB	VerbForm=Inf	11	xcomp	_	SpaceAfter=No
14	.	.	PUNCT	PERIOD	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 15 acl:relcl	color:blue
1	Seen	sama	DET	DET	Number=Sing|Person=2,3|Poss=Yes|PronType=Prs	2	det	_	_
2	wolof	wolof	PROPN	NAME	_	5	dislocated	_	_
3	da	da	AUX	INFL	FocusType=Verb|Mood=Ind	5	aux	_	_
4	mu	mu	PRON	PRON	Case=Nom|Number=Sing|Person=3|PronType=Prs	5	nsubj	_	_
5	xaw	xaw	VERB	VERB	Mood=Ind|VerbForm=Fin	0	root	_	_
6	a	a	PART	PART	_	7	mark	_	_
7	wuute	wuute	VERB	VERB	VerbForm=Inf	5	xcomp	_	_
8	tuuti	tuuti	ADV	ADV	_	7	advmod	_	_
9	ak	ak	ADP	PREP	_	10	case	_	_
10	wolof	wolof	PROPN	NAME	_	7	obl	_	_
11	bi	bi	PRON	PRON	Definite=Def|Deixis=Prox|NounClass=Wol5|Number=Sing|Person=3|PronType=Rel	15	obj	_	_
12	ñeneen	beneen	PRON	PRON	NounClass=Wol2|Number=Plur|PronType=Ind	15	nsubj	_	_
13	ñi	bi	DET	DET	Definite=Def|Deixis=Prox|NounClass=Wol2|Number=Plur|PronType=Art	12	det	_	_
14	di	di	AUX	AUX	Aspect=Imp|Mood=Ind|Tense=Pres	15	aux	_	_
15	làkk	làkk	VERB	VERB	Mood=Ind|VerbForm=Fin	10	acl:relcl	_	SpaceAfter=No
16	.	.	PUNCT	PERIOD	_	5	punct	_	_

~~~


