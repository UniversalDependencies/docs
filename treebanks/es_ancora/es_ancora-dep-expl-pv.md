---
layout: base
title:  'Statistics of expl:pv in UD_Spanish-AnCora'
udver: '2'
---

## Treebank Statistics: UD_Spanish-AnCora: Relations: `expl:pv`

This relation is a language-specific subtype of <tt><a href="es_ancora-dep-expl.html">expl</a></tt>.
There are also 2 other language-specific subtypes of `expl`: <tt><a href="es_ancora-dep-expl-impers.html">expl:impers</a></tt>, <tt><a href="es_ancora-dep-expl-pass.html">expl:pass</a></tt>.

3214 nodes (1%) are attached to their parents as `expl:pv`.

2560 instances of `expl:pv` (80%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.15930304915993.

The following 4 pairs of parts of speech are connected with `expl:pv`: <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-PRON.html">PRON</a></tt> (3210; 100% instances), <tt><a href="es_ancora-pos-AUX.html">AUX</a></tt>-<tt><a href="es_ancora-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="es_ancora-pos-ADP.html">ADP</a></tt>-<tt><a href="es_ancora-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="es_ancora-pos-PRON.html">PRON</a></tt>-<tt><a href="es_ancora-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 expl:pv	color:blue
1	Y	y	CCONJ	_	_	3	advmod	_	_
2	nos	yo	PRON	_	Case=Acc|Number=Plur|Person=1|PrepCase=Npr|PronType=Prs|Reflex=Yes	3	expl:pv	_	_
3	quemamos	quemar	VERB	_	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
4	.	.	PUNCT	_	PunctType=Peri	3	punct	_	_

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 21 expl:pv	color:blue
1	"	"	PUNCT	_	PunctType=Quot	4	punct	_	SpaceAfter=No
2	Yo	yo	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	4	nsubj	_	_
3	no	no	ADV	_	Polarity=Neg	4	advmod	_	_
4	pido	pedir	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	11	ccomp	_	_
5	que	que	SCONJ	_	_	7	mark	_	_
6	me	yo	PRON	_	Case=Acc|Number=Sing|Person=1|PrepCase=Npr|PronType=Prs	7	obj	_	_
7	protejan	proteger	VERB	_	Mood=Sub|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	4	ccomp	_	SpaceAfter=No
8	"	"	PUNCT	_	PunctType=Quot	4	punct	_	SpaceAfter=No
9	,	,	PUNCT	_	PunctType=Comm	4	punct	_	_
10	le	él	PRON	_	Case=Dat|Number=Sing|Person=3|PronType=Prs	11	iobj	_	_
11	dijo	decir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
12	a	a	ADP	_	_	14	case	_	_
13	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	14	det	_	_
14	jefe	jefe	NOUN	_	Gender=Masc|Number=Sing	11	iobj	_	_
15	policial	policial	ADJ	_	Number=Sing	14	amod	_	_
16	que	que	PRON	_	PronType=Int,Rel	18	nsubj	_	_
17	le	él	PRON	_	Case=Dat|Number=Sing|Person=3|PronType=Prs	18	iobj	_	_
18	recomendaba	recomendar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	14	acl	_	_
19	que	que	SCONJ	_	_	22	mark	_	_
20	no	no	ADV	_	Polarity=Neg	22	advmod	_	_
21	se	él	PRON	_	Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	22	expl:pv	_	_
22	fuese	ser	AUX	_	Mood=Sub|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	18	ccomp	_	_
23	caminando	caminar	VERB	_	VerbForm=Ger	22	advcl	_	SpaceAfter=No
24	.	.	PUNCT	_	PunctType=Peri	11	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 expl:pv	color:blue
1	No	no	ADV	_	Polarity=Neg	7	advmod	_	_
2	se	él	PRON	_	Case=Acc|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	7	expl:pv	_	_
3	puede	poder	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	aux	_	_
4	estar	estar	AUX	_	VerbForm=Inf	7	cop	_	_
5	53	53	NUM	_	NumForm=Digit|NumType=Card	6	nummod	_	_
6	años	año	NOUN	_	Gender=Masc|Number=Plur	7	obl	_	_
7	a	a	ADP	_	_	0	root	_	MWE=al_pie_del_cañón|MWEPOS=ADV
8	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	fixed	_	_
9	pie	pie	NOUN	_	_	7	fixed	_	_
10	de	de	ADP	_	_	7	case	_	_
11	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
12	cañón	cañón	NOUN	_	_	7	fixed	_	_
13	sin	sin	ADP	_	_	15	case	_	_
14	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	15	det	_	_
15	apoyo	apoyo	NOUN	_	Gender=Masc|Number=Sing	7	obl	_	SpaceAfter=No
16	,	,	PUNCT	_	PunctType=Comm	18	punct	_	_
17	la	el	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	18	det	_	_
18	comprensión	comprensión	NOUN	_	Gender=Fem|Number=Sing	15	appos	_	_
19	y	y	CCONJ	_	_	21	cc	_	_
20	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	21	det	_	_
21	afecto	afecto	NOUN	_	Gender=Masc|Number=Sing	15	conj	_	_
22	de	de	ADP	_	_	24	case	_	_
23	los	el	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	24	det	_	_
24	tuyos	tuyo	PRON	_	Gender=Masc|Number=Plur|Person=2|Poss=Yes|PronType=Ind	15	nmod	_	SpaceAfter=No
25	,	,	PUNCT	_	PunctType=Comm	28	punct	_	_
26	y	y	CCONJ	_	_	28	cc	_	_
27	sin	sin	ADP	_	_	28	mark	_	_
28	compartir	compartir	VERB	_	VerbForm=Inf	15	conj	_	_
29	momentos	momento	NOUN	_	Gender=Masc|Number=Plur	28	obj	_	_
30	buenos	buen	ADJ	_	Gender=Masc|Number=Plur	29	amod	_	_
31	pero	pero	CCONJ	_	_	33	cc	_	_
32	también	también	ADV	_	_	33	advmod	_	_
33	malos	malo	ADJ	_	Gender=Masc|Number=Plur	30	conj	_	SpaceAfter=No
34	"	"	PUNCT	_	PunctType=Quot	7	punct	_	SpaceAfter=No
35	.	.	PUNCT	_	PunctType=Peri	7	punct	_	_

~~~


