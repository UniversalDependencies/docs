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

The following 4 pairs of parts of speech are connected with `expl:pv`: <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-PRON.html">PRON</a></tt> (3209; 100% instances), <tt><a href="es_ancora-pos-ADP.html">ADP</a></tt>-<tt><a href="es_ancora-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="es_ancora-pos-AUX.html">AUX</a></tt>-<tt><a href="es_ancora-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="es_ancora-pos-PRON.html">PRON</a></tt>-<tt><a href="es_ancora-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 expl:pv	color:blue
1	Y	y	CCONJ	CCONJ	_	3	advmod	_	_
2	nos	yo	PRON	PRON	Case=Acc|Number=Plur|Person=1|PrepCase=Npr|PronType=Prs|Reflex=Yes	3	expl:pv	_	_
3	quemamos	quemar	VERB	VERB	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
4	.	.	PUNCT	PUNCT	PunctType=Peri	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 expl:pv	color:blue
1	No	no	ADV	ADV	Polarity=Neg	7	advmod	_	_
2	se	él	PRON	PRON	Case=Acc|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	7	expl:pv	_	_
3	puede	poder	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	aux	_	_
4	estar	estar	AUX	AUX	VerbForm=Inf	7	cop	_	_
5	53	53	NUM	NUM	NumForm=Digit|NumType=Card	6	nummod	_	_
6	años	año	NOUN	NOUN	Gender=Masc|Number=Plur	7	obl	_	_
7	al	al	ADP	ADP	AdpType=Preppron	0	root	_	MWE=al_pie_del_cañón|MWEPOS=ADV
8	pie	pie	NOUN	NOUN	_	7	fixed	_	_
9	del	del	ADP	ADP	AdpType=Preppron	7	fixed	_	_
10	cañón	cañón	NOUN	NOUN	_	7	fixed	_	_
11	sin	sin	ADP	ADP	AdpType=Prep	13	case	_	_
12	el	el	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	13	det	_	_
13	apoyo	apoyo	NOUN	NOUN	Gender=Masc|Number=Sing	7	obl	_	SpaceAfter=No
14	,	,	PUNCT	PUNCT	PunctType=Comm	16	punct	_	_
15	la	el	DET	DET	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	16	det	_	_
16	comprensión	comprensión	NOUN	NOUN	Gender=Fem|Number=Sing	13	appos	_	_
17	y	y	CCONJ	CCONJ	_	19	cc	_	_
18	el	el	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	19	det	_	_
19	afecto	afecto	NOUN	NOUN	Gender=Masc|Number=Sing	13	conj	_	_
20	de	de	ADP	ADP	AdpType=Prep	22	case	_	_
21	los	el	DET	DET	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	22	det	_	_
22	tuyos	tuyo	PRON	PRON	Gender=Masc|Number=Plur|Person=2|Poss=Yes|PronType=Ind	13	nmod	_	SpaceAfter=No
23	,	,	PUNCT	PUNCT	PunctType=Comm	26	punct	_	_
24	y	y	CCONJ	CCONJ	_	26	cc	_	_
25	sin	sin	ADP	ADP	AdpType=Prep	26	mark	_	_
26	compartir	compartir	VERB	VERB	VerbForm=Inf	13	conj	_	_
27	momentos	momento	NOUN	NOUN	Gender=Masc|Number=Plur	26	obj	_	_
28	buenos	buen	ADJ	ADJ	Gender=Masc|Number=Plur	27	amod	_	_
29	pero	pero	CCONJ	CCONJ	_	31	cc	_	_
30	también	también	ADV	ADV	_	31	advmod	_	_
31	malos	malo	ADJ	ADJ	Gender=Masc|Number=Plur	28	conj	_	SpaceAfter=No
32	"	"	PUNCT	PUNCT	PunctType=Quot	7	punct	_	SpaceAfter=No
33	.	.	PUNCT	PUNCT	PunctType=Peri	7	punct	_	_

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 20 expl:pv	color:blue
1	"	"	PUNCT	PUNCT	PunctType=Quot	4	punct	_	SpaceAfter=No
2	Yo	yo	PRON	PRON	Case=Nom|Number=Sing|Person=1|PronType=Prs	4	nsubj	_	_
3	no	no	ADV	ADV	Polarity=Neg	4	advmod	_	_
4	pido	pedir	VERB	VERB	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	11	ccomp	_	_
5	que	que	SCONJ	SCONJ	_	7	mark	_	_
6	me	yo	PRON	PRON	Case=Acc|Number=Sing|Person=1|PrepCase=Npr|PronType=Prs	7	obj	_	_
7	protejan	proteger	VERB	VERB	Mood=Sub|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	4	ccomp	_	SpaceAfter=No
8	"	"	PUNCT	PUNCT	PunctType=Quot	4	punct	_	SpaceAfter=No
9	,	,	PUNCT	PUNCT	PunctType=Comm	4	punct	_	_
10	le	él	PRON	PRON	Case=Dat|Number=Sing|Person=3|PronType=Prs	11	iobj	_	_
11	dijo	decir	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
12	al	al	ADP	ADP	AdpType=Preppron	13	case	_	_
13	jefe	jefe	NOUN	NOUN	Gender=Masc|Number=Sing	11	iobj	_	_
14	policial	policial	ADJ	ADJ	Number=Sing	13	amod	_	_
15	que	que	PRON	PRON	PronType=Int,Rel	17	nsubj	_	_
16	le	él	PRON	PRON	Case=Dat|Number=Sing|Person=3|PronType=Prs	17	iobj	_	_
17	recomendaba	recomendar	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	13	acl	_	_
18	que	que	SCONJ	SCONJ	_	21	mark	_	_
19	no	no	ADV	ADV	Polarity=Neg	21	advmod	_	_
20	se	él	PRON	PRON	Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	21	expl:pv	_	_
21	fuese	ser	AUX	AUX	Mood=Sub|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	17	ccomp	_	_
22	caminando	caminar	VERB	VERB	VerbForm=Ger	21	advcl	_	SpaceAfter=No
23	.	.	PUNCT	PUNCT	PunctType=Peri	11	punct	_	_

~~~


