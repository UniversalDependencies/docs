---
layout: base
title:  'Statistics of nsubj:outer in UD_Portuguese-Alienista'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-Alienista: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="pt_alienista-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="pt_alienista-dep-nsubj-pass.html">nsubj:pass</a></tt>.

7 nodes (0%) are attached to their parents as `nsubj:outer`.

7 instances of `nsubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 13.1428571428571.

The following 3 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="pt_alienista-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_alienista-pos-NOUN.html">NOUN</a></tt> (4; 57% instances), <tt><a href="pt_alienista-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_alienista-pos-PRON.html">PRON</a></tt> (2; 29% instances), <tt><a href="pt_alienista-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_alienista-pos-NOUN.html">NOUN</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 2 nsubj:outer	color:blue
1	O	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	argumento	argumento	NOUN	_	Gender=Masc|Number=Sing	19	nsubj:outer	_	_
3	principal	principal	ADJ	_	Number=Sing	2	amod	_	_
4	de	de	ADP	_	_	6	case	_	_
5	este	este	DET	_	Gender=Masc|Number=Sing|PronType=Dem	6	det	_	_
6	magistrado	magistrado	NOUN	_	Gender=Masc|Number=Sing	2	nmod	_	_
7	é	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	19	cop	_	_
8	que	que	SCONJ	_	_	19	mark	_	_
9	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
10	Câmara	Câmara	PROPN	_	_	19	nsubj	_	SpaceAfter=No
11	,	,	PUNCT	_	_	12	punct	_	_
12	legislando	legislar	VERB	_	VerbForm=Ger	19	advcl	_	_
13	sobre	sobre	ADP	_	_	15	case	_	_
14	uma	um	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	15	det	_	_
15	experiência	experiência	NOUN	_	Gender=Fem|Number=Sing	12	obl	_	_
16	científica	científico	ADJ	_	Gender=Fem|Number=Sing	15	amod	_	SpaceAfter=No
17	,	,	PUNCT	_	_	12	punct	_	_
18	não	não	ADV	_	_	19	advmod	_	_
19	podia	poder	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
20	excluir	excluir	VERB	_	VerbForm=Inf	19	xcomp	_	_
21	as	o	DET	_	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	22	det	_	_
22	pessoas	pessoa	NOUN	_	Gender=Fem|Number=Plur	20	obj	_	_
23	de	de	ADP	_	_	26	case	_	_
24	os	o	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	26	det	_	_
25	seus	seu	DET	_	Gender=Masc|Number=Plur|Person=3|Poss=Yes|PronType=Prs	26	det	_	_
26	membros	membro	NOUN	_	Gender=Masc|Number=Plur	22	nmod	_	_
27	de	de	ADP	_	_	29	case	_	_
28	as	o	DET	_	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	29	det	_	_
29	consequências	consequência	NOUN	_	Gender=Fem|Number=Plur	20	obl	_	_
30	de	de	ADP	_	_	32	case	_	_
31	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	32	det	_	_
32	lei	lei	NOUN	_	Gender=Fem|Number=Sing	29	nmod	_	SpaceAfter=No
33	;	;	PUNCT	_	_	37	punct	_	_
34	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	35	det	_	_
35	exceção	exceção	NOUN	_	Gender=Fem|Number=Sing	37	nsubj	_	_
36	era	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	37	cop	_	_
37	odiosa	odioso	ADJ	_	Gender=Fem|Number=Sing	19	parataxis	_	_
38	e	e	CCONJ	_	_	39	cc	_	_
39	ridícula	ridículo	ADJ	_	Gender=Fem|Number=Sing	37	conj	_	SpaceAfter=No
40	.	.	PUNCT	_	_	19	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 1 nsubj:outer	color:blue
1	O	o	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	10	nsubj:outer	_	_
2	que	que	PRON	_	PronType=Rel	4	obj	_	_
3	lhe	lhe	PRON	_	Case=Dat|Number=Sing|Person=3|PronType=Prs	4	iobj	_	_
4	pede	pedir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	acl:relcl	_	_
5	é	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	cop	_	_
6	que	que	SCONJ	_	_	10	mark	_	_
7	de	de	ADP	_	_	9	case	_	_
8	certa	certo	DET	_	Gender=Fem|Number=Sing|PronType=Ind	9	det	_	_
9	maneira	maneira	NOUN	_	Gender=Fem|Number=Sing	10	obl	_	_
10	demos	dar	VERB	_	Mood=Ind|Number=Plur|Person=1|Tense=Past|VerbForm=Fin	0	root	_	_
11	alguma	algum	DET	_	Gender=Fem|Number=Sing|PronType=Ind	12	det	_	_
12	satisfação	satisfação	NOUN	_	Gender=Fem|Number=Sing	10	obj	_	_
13	a	a	ADP	_	_	15	case	_	_
14	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	15	det	_	_
15	povo	povo	NOUN	_	Gender=Masc|Number=Sing	10	obl	_	SpaceAfter=No
16	.	.	PUNCT	_	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 1 nsubj:outer	color:blue
1	Verdade	verdade	NOUN	_	Gender=Fem|Number=Sing	17	nsubj:outer	_	_
2	é	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	17	cop	_	_
3	que	que	SCONJ	_	_	17	mark	_	SpaceAfter=No
4	,	,	PUNCT	_	_	10	punct	_	_
5	se	se	SCONJ	_	_	10	mark	_	_
6	todos	todo	DET	_	Gender=Masc|Number=Plur|PronType=Ind	8	det	_	_
7	os	o	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	8	det	_	_
8	gostos	gosto	NOUN	_	Gender=Masc|Number=Plur	10	nsubj	_	_
9	fossem	ser	AUX	_	Mood=Sub|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	10	cop	_	_
10	iguais	igual	ADJ	_	Number=Plur	17	advcl	_	SpaceAfter=No
11	,	,	PUNCT	_	_	10	punct	_	_
12	o	o	PRON	_	ExtPos=PRON|Gender=Masc|Number=Sing|Person=3|PronType=Dem	17	nsubj	_	_
13	que	que	PRON	_	PronType=Int	12	fixed	_	_
14	seria	ser	AUX	_	Mood=Cnd|Number=Sing|Person=3|VerbForm=Fin	17	cop	_	_
15	de	de	ADP	_	_	17	case	_	_
16	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	17	det	_	_
17	amarelo	amarelo	NOUN	_	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
18	?	?	PUNCT	_	_	17	punct	_	_

~~~


