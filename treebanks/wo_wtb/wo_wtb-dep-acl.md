---
layout: base
title:  'Statistics of acl in UD_Wolof-WTB'
udver: '2'
---

## Treebank Statistics: UD_Wolof-WTB: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="wo_wtb-dep-acl-relcl.html">acl:relcl</a></tt>.

123 nodes (0%) are attached to their parents as `acl`.

122 instances of `acl` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.97560975609756.

The following 8 pairs of parts of speech are connected with `acl`: <tt><a href="wo_wtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="wo_wtb-pos-VERB.html">VERB</a></tt> (88; 72% instances), <tt><a href="wo_wtb-pos-PRON.html">PRON</a></tt>-<tt><a href="wo_wtb-pos-VERB.html">VERB</a></tt> (12; 10% instances), <tt><a href="wo_wtb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="wo_wtb-pos-NOUN.html">NOUN</a></tt> (8; 7% instances), <tt><a href="wo_wtb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="wo_wtb-pos-VERB.html">VERB</a></tt> (8; 7% instances), <tt><a href="wo_wtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="wo_wtb-pos-PROPN.html">PROPN</a></tt> (3; 2% instances), <tt><a href="wo_wtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="wo_wtb-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="wo_wtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="wo_wtb-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="wo_wtb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="wo_wtb-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 12 acl	color:blue
1	Am	am	VERB	VERB	Mood=Ind|VerbForm=Fin	0	root	0:root	_
2	na	na	AUX	INFL	Aspect=Perf|Mood=Ind|Number=Sing|Person=3	1	aux	1:aux	_
3	bis	bis	NOUN	NOUN	_	1	obj	1:obj	_
4	am	am	VERB	VERB	Mood=Ind|VerbForm=Fin	1	parataxis	1:parataxis	_
5	góor	góor	NOUN	NOUN	_	4	obj	4:obj	_
6	gu	bu	PRON	PRON	NounClass=Wol3|Number=Sing|Person=3|PronType=Rel	7	nsubj	7:nsubj	_
7	ñëw	ñëw	VERB	VERB	Mood=Ind|VerbForm=Fin	5	acl:relcl	5:acl:relcl	_
8	ci	ci	ADP	PREP	_	9	case	9:case	_
9	Sëriñ	Sëriñ	PROPN	NAME	_	7	obl	7:obl	_
10	bi	bi	DET	DET	Definite=Def|Deixis=Prox|NounClass=Wol5|Number=Sing|PronType=Art	9	det	9:det	SpaceAfter=No
11	,	,	PUNCT	COMMA	_	12	punct	12:punct	_
12	mel	mel	VERB	VERB	Mood=Ind|VerbForm=Fin	5	acl	5:acl	_
13	ni	ni	ADP	PREP	_	14	case	14:case	_
14	ku	bu	PRON	PRON	NounClass=Wol1|Number=Sing|Person=3|PronType=Rel	12	obl	12:obl	_
15	yàkkamti	yàkkamti	VERB	VERB	Mood=Ind|VerbForm=Fin	14	acl:relcl	14:acl:relcl	_
16	lool	lool	ADV	ADV	_	15	advmod	15:advmod	SpaceAfter=No
17	.	.	PUNCT	PERIOD	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 13 acl	color:blue
1	Fànnu	fànn	NOUN	NOUN	Case=Gen|Number=Sing	3	nsubj	3:nsubj	_
2	Isipt	Isipt	PROPN	NAME	_	1	nmod	1:nmod	_
3	bokk	bokk	VERB	VERB	Mood=Ind|VerbForm=Fin	0	root	0:root	_
4	na	na	AUX	INFL	Aspect=Perf|Mood=Ind|Number=Sing|Person=3	3	aux	3:aux	_
5	ci	ci	ADP	PREP	_	6	case	6:case	_
6	fànn	fànn	NOUN	NOUN	_	3	obl	3:obl	_
7	yi	bi	PRON	PRON	Definite=Def|Deixis=Prox|NounClass=Wol8|Number=Plur|Person=3|PronType=Rel	8	nsubj	8:nsubj	_
8	gën	gën	VERB	VERB	Mood=Ind|VerbForm=Fin	6	acl:relcl	6:acl:relcl	_
9	a	a	PART	PART	_	10	mark	10:mark	_
10	rafet	rafet	VERB	VERB	VerbForm=Inf	8	xcomp	8:xcomp	_
11	ci	ci	ADP	PREP	_	12	case	12:case	_
12	yu	bu	PRON	PRON	NounClass=Wol8|Number=Plur|Person=3|PronType=Rel	8	obl	8:obl	_
13	yàgg	yàgg	VERB	VERB	Mood=Ind|VerbForm=Fin	12	acl	12:acl	_
14	ya	bi	DET	DET	Definite=Def|Deixis=Remt|NounClass=Wol8|Number=Plur|PronType=Art	12	det	12:det	SpaceAfter=No
15	.	.	PUNCT	PERIOD	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 acl	color:blue
1	Kooku	boobu	PRON	PRON	Deixis=Prox|DeixisRef=2|NounClass=Wol1|Number=Sing|PronType=Dem	4	nsubj	4:nsubj	_
2	a	a	AUX	INFL	FocusType=Subj|Mood=Ind	4	aux	4:aux	_
3	di	di	AUX	COP	Aspect=Imp|Mood=Ind|Tense=Pres|VerbForm=Fin	4	cop	4:cop	_
4	Fatumata	Fatumata	PROPN	NAME	_	0	root	0:root	_
5	Bensudaa	Bensudaa	PROPN	NAME	_	4	flat	4:flat	_
6	di	di	AUX	COP	Aspect=Imp|Mood=Ind|Tense=Pres|VerbForm=Fin	7	cop	7:cop	_
7	jiggéeni	jiggéen	NOUN	NOUN	Case=Gen|Number=Plur	4	acl	4:acl	_
8	réew	réew	NOUN	NOUN	_	7	nmod	7:nmod	_
9	mi	bi	DET	DET	Definite=Def|Deixis=Prox|NounClass=Wol6|Number=Sing|PronType=Art	8	det	8:det	SpaceAfter=No
10	,	,	PUNCT	COMMA	_	14	punct	14:punct	_
11	ndax	ndax	SCONJ	COMP	_	14	mark	14:mark	_
12	Gambi	Gambi	PROPN	NAME	_	14	obj	14:obj	_
13	la	la	AUX	INFL	FocusType=Compl|Mood=Ind|Number=Sing|Person=3	14	aux	14:aux	_
14	fekk	fekk	VERB	VERB	Mood=Ind|VerbForm=Fin	7	acl	7:acl	_
15	baax	baax	PART	PART	_	14	compound:prt	14:compound:prt	SpaceAfter=No
16	.	.	PUNCT	PERIOD	_	4	punct	4:punct	_

~~~


