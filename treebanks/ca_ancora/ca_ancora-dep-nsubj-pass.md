---
layout: base
title:  'Statistics of nsubj:pass in UD_Catalan-AnCora'
udver: '2'
---

## Treebank Statistics: UD_Catalan-AnCora: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="ca_ancora-dep-nsubj.html">nsubj</a></tt>.

25 nodes (0%) are attached to their parents as `nsubj:pass`.

16 instances of `nsubj:pass` (64%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.44.

The following 3 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="ca_ancora-pos-NOUN.html">NOUN</a></tt> (19; 76% instances), <tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="ca_ancora-pos-PRON.html">PRON</a></tt> (4; 16% instances), <tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="ca_ancora-pos-PROPN.html">PROPN</a></tt> (2; 8% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 nsubj:pass	color:blue
1	La	el	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	dona	dona	NOUN	_	Gender=Fem|Number=Sing	6	nsubj:pass	_	_
3	va	anar	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux	_	_
4	poder	poder	AUX	_	Tense=Past|VerbForm=Part	6	aux	_	_
5	-se	ell	PRON	_	Case=Acc,Dat|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	6	expl:pass	_	_
6	escapolir	escapolir-se	VERB	_	VerbForm=Inf	0	root	_	_
7	amb	amb	ADP	_	_	9	case	_	_
8	l'	el	DET	_	Definite=Def|Number=Sing|PronType=Art	9	det	_	SpaceAfter=No
9	ajut	ajut	NOUN	_	Gender=Masc|Number=Sing	6	obl	_	_
10	d'	de	ADP	_	_	12	case	_	SpaceAfter=No
11	uns	un	DET	_	Gender=Masc|Number=Plur|PronType=Ind	12	det	_	_
12	veïns	veí	NOUN	_	Gender=Masc|Number=Plur	9	nmod	_	SpaceAfter=No
13	.	.	PUNCT	_	PunctType=Peri	6	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 17 nsubj:pass	color:blue
1	Tot	tot	PRON	_	Gender=Masc|Number=Sing|PronType=Tot	9	advmod	_	MWE=Tot_i_amb_això|MWEPOS=ADV
2	i	i	CCONJ	_	_	1	fixed	_	_
3	amb	amb	ADP	_	_	1	fixed	_	_
4	això	això	NOUN	_	_	1	fixed	_	SpaceAfter=No
5	,	,	PUNCT	_	PunctType=Comm	1	punct	_	_
6	aquesta	aquest	DET	_	Gender=Fem|Number=Sing|PronType=Dem	7	det	_	_
7	filosofia	filosofia	NOUN	_	Gender=Fem|Number=Sing	9	nsubj	_	_
8	no	no	ADV	_	Polarity=Neg	9	advmod	_	_
9	impedeix	impedir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
10	que	que	SCONJ	_	_	14	mark	_	_
11	a	a	ADP	_	_	12	case	_	_
12	Aznar	Aznar	PROPN	_	_	14	obj	_	_
13	li	ell	PRON	_	Case=Dat|Number=Sing|Person=3|PronType=Prs	14	obj	_	_
14	desagradi	desagradar	VERB	_	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	ccomp	_	_
15	l'	el	DET	_	Definite=Def|Number=Sing|PronType=Art	16	det	_	SpaceAfter=No
16	escena	escena	NOUN	_	Gender=Fem|Number=Sing	14	nsubj	_	_
17	que	que	PRON	_	PronType=Rel	20	nsubj:pass	_	_
18	es	ell	PRON	_	Case=Acc,Dat|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	20	expl:pass	_	_
19	va	anar	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	20	aux	_	_
20	viure	viure	VERB	_	VerbForm=Inf	16	acl	_	_
21	ahir	ahir	ADV	_	_	20	advmod	_	_
22	a	a	ADP	_	_	23	case	_	_
23	Pamplona	Pamplona	PROPN	_	_	20	obl	_	SpaceAfter=No
24	.	.	PUNCT	_	PunctType=Peri	9	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 nsubj:pass	color:blue
1	La	La	DET	_	Gender=Fem|Number=Sing|PronType=Art	2	det	_	MWE=La_hora_Warner|MWEPOS=PROPN
2	hora	hora	PROPN	_	_	6	nsubj:pass	_	_
3	Warner	Warner	PROPN	_	_	2	flat	_	_
4	es	ell	PRON	_	Case=Acc,Dat|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	6	expl:pass	_	_
5	va	anar	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux	_	_
6	estrenar	estrenar	VERB	_	VerbForm=Inf	0	root	_	_
7	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	7	7	NUM	_	NumForm=Digit|NumType=Card	6	obl	_	MWE=7_d'_octubre_del_2000|MWEPOS=NOUN
9	d'	d'	ADP	_	_	10	case	_	SpaceAfter=No
10	octubre	octubre	NOUN	_	_	8	compound	_	_
11	de	de	ADP	_	_	13	case	_	_
12	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	13	det	_	_
13	2000	2000	NUM	_	NumForm=Digit|NumType=Card	8	compound	_	SpaceAfter=No
14	.	.	PUNCT	_	PunctType=Peri	6	punct	_	_

~~~


