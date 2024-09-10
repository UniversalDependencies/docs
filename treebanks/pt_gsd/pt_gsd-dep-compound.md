---
layout: base
title:  'Statistics of compound in UD_Portuguese-GSD'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-GSD: Relations: `compound`

This relation is universal.

21 nodes (0%) are attached to their parents as `compound`.

19 instances of `compound` (90%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.47619047619048.

The following 5 pairs of parts of speech are connected with `compound`: <tt><a href="pt_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_gsd-pos-NOUN.html">NOUN</a></tt> (11; 52% instances), <tt><a href="pt_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_gsd-pos-ADP.html">ADP</a></tt> (6; 29% instances), <tt><a href="pt_gsd-pos-ADP.html">ADP</a></tt>-<tt><a href="pt_gsd-pos-NUM.html">NUM</a></tt> (2; 10% instances), <tt><a href="pt_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_gsd-pos-NOUN.html">NOUN</a></tt> (1; 5% instances), <tt><a href="pt_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_gsd-pos-PROPN.html">PROPN</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 13 compound	color:blue
1	Integrou	integrar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
2	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	Seleção	Seleção	PROPN	_	Gender=Fem|Number=Sing	1	obj	_	_
4	Brasileira	Brasileira	PROPN	_	Number=Sing	3	flat:name	_	_
5	de	de	ADP	_	_	6	case	_	_
6	Voleibol	Voleibol	PROPN	_	Number=Sing	3	nmod	_	_
7	Feminino	Feminino	PROPN	_	Number=Sing	6	flat:name	_	_
8	que	que	PRON	_	Gender=Fem|Number=Sing|PronType=Rel	9	nsubj	_	_
9	sagrou	sagrar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	3	acl:relcl	_	_
10	se	se	PRON	_	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs	9	expl	_	_
11	medalha	medalha	NOUN	_	Gender=Fem|Number=Sing	9	xcomp	_	_
12	de	de	ADP	_	_	13	case	_	_
13	ouro	ouro	NOUN	_	Gender=Masc|Number=Sing	11	compound	_	_
14	em	em	ADP	_	_	16	case	_	_
15	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	16	det	_	_
16	Olimpíada	olimpíada	NOUN	_	Gender=Fem|Number=Sing	9	obl	_	_
17	de	de	ADP	_	_	18	case	_	_
18	Londres	Londres	PROPN	_	Gender=Fem|Number=Sing	16	nmod	_	_
19	2012	2012	NUM	_	NumType=Card	18	flat:name	_	SpaceAfter=No
20	.	.	PUNCT	_	_	1	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 30	bgColor:blue
# visual-style 30	fgColor:white
# visual-style 29	bgColor:blue
# visual-style 29	fgColor:white
# visual-style 29 30 compound	color:blue
1	A	a	ADP	_	_	4	case	_	_
2	os	o	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	4	det	_	_
3	quatro	quatro	NUM	_	NumType=Card	4	nummod	_	_
4	minutos	minuto	NOUN	_	Gender=Masc|Number=Plur	13	obl	_	SpaceAfter=No
5	,	,	PUNCT	_	_	4	punct	_	_
6	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	África	África	PROPN	_	Gender=Fem|Number=Sing	11	nsubj	_	_
8	de	de	ADP	_	_	10	case	_	_
9	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	Sul	Sul	PROPN	_	Number=Sing	7	nmod	_	_
11	voltou	voltar	VERB	_	ExtPos=AUX|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
12	a	a	SCONJ	_	_	13	mark	_	_
13	assustar	assustar	VERB	_	VerbForm=Inf	11	xcomp	_	SpaceAfter=No
14	,	,	PUNCT	_	_	13	punct	_	_
15	quando	quando	ADV	_	_	17	advmod	_	_
16	Parker	Parker	PROPN	_	Gender=Masc|Number=Sing	17	nsubj	_	_
17	dominou	dominar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	13	advcl	_	_
18	por	por	ADP	_	_	20	case	_	_
19	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	20	det	_	_
20	direita	direita	NOUN	_	Gender=Fem|Number=Sing	17	obl	_	SpaceAfter=No
21	,	,	PUNCT	_	_	22	punct	_	_
22	driblou	driblar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	17	conj	_	_
23	David	David	PROPN	_	ExtPos=PROPN|Gender=Masc|Number=Sing	22	obj	_	_
24	Luiz	Luiz	PROPN	_	Number=Sing	23	flat:name	_	_
25	e	e	CCONJ	_	_	26	cc	_	_
26	cruzou	cruzar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	17	conj	_	_
27	de	de	ADP	_	_	29	case	_	_
28	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	29	det	_	_
29	linha	linha	NOUN	_	Gender=Fem|Number=Sing	26	obl	_	_
30	de	de	ADP	_	_	29	compound	_	_
31	fundo	fundo	NOUN	_	Gender=Masc|Number=Sing	29	nmod	_	_
32	para	para	SCONJ	_	_	35	mark	_	_
33	Dedé	Dedé	PROPN	_	Gender=Masc|Number=Sing	35	nsubj	_	_
34	quase	quase	ADV	_	_	35	advmod	_	_
35	marcar	marcar	VERB	_	VerbForm=Inf	26	advcl	_	_
36	contra	contra	ADV	_	_	35	advmod	_	SpaceAfter=No
37	.	.	PUNCT	_	_	13	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 compound	color:blue
1	"	"	PUNCT	_	_	12	punct	_	SpaceAfter=No
2	Sessenta	sessenta	NUM	_	NumType=Card	5	nummod	_	_
3	e	e	CCONJ	_	_	4	cc	_	_
4	quatro	quatro	NUM	_	NumType=Card	2	conj	_	_
5	por	por	ADP	_	ExtPos=NOUN	12	nsubj	_	_
6	cento	cento	NUM	_	Gender=Masc|Number=Sing|NumType=Mult	5	compound	_	_
7	de	de	ADP	_	_	9	case	_	_
8	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	dinheiro	dinheiro	NOUN	_	Gender=Masc|Number=Sing	5	nmod	_	_
10	liberado	liberar	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part	9	acl	_	_
11	estão	estar	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	12	aux	_	_
12	indo	ir	VERB	_	VerbForm=Ger	0	root	_	_
13	para	para	ADP	_	_	14	case	_	_
14	investimento	investimento	NOUN	_	Gender=Masc|Number=Sing	12	obl	_	SpaceAfter=No
15	.	.	PUNCT	_	_	12	punct	_	SpaceAfter=No

~~~


