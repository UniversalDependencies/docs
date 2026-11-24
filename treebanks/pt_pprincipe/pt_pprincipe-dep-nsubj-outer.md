---
layout: base
title:  'Statistics of nsubj:outer in UD_Portuguese-PPrincipe'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PPrincipe: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="pt_pprincipe-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="pt_pprincipe-dep-nsubj-pass.html">nsubj:pass</a></tt>.

5 nodes (0%) are attached to their parents as `nsubj:outer`.

5 instances of `nsubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 12.6.

The following 2 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="pt_pprincipe-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pprincipe-pos-PRON.html">PRON</a></tt> (4; 80% instances), <tt><a href="pt_pprincipe-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_pprincipe-pos-NOUN.html">NOUN</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 1 nsubj:outer	color:blue
1	O	o	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	11	nsubj:outer	_	_
2	que	que	PRON	_	PronType=Rel	4	obj	_	_
3	eu	eu	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	4	nsubj	_	_
4	gosto	gostar	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	1	acl:relcl	_	_
5	mais	mais	ADV	_	_	4	advmod	_	_
6	em	em	ADP	_	_	8	case	_	_
7	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	8	det	_	_
8	vida	vida	NOUN	_	Gender=Fem|Number=Sing	4	obl	_	_
9	é	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	cop	_	_
10	de	de	ADP	_	_	11	mark	_	_
11	dormir	dormir	VERB	_	VerbForm=Inf	0	root	_	SpaceAfter=No
12	.	.	PUNCT	_	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 10 nsubj:outer	color:blue
1	Assim	assim	ADV	_	_	7	advmod	_	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	_
3	se	se	SCONJ	_	_	7	mark	_	_
4	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	gente	gente	NOUN	_	Gender=Fem|Number=Sing	7	nsubj	_	_
6	lhes	lhe	PRON	_	Case=Dat|Number=Plur|Person=3|PronType=Prs	7	iobj	_	_
7	disser	dizer	VERB	_	Mood=Sub|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	0	root	_	SpaceAfter=No
8	:	:	PUNCT	_	_	20	punct	_	_
9	A	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
10	prova	prova	NOUN	_	Gender=Fem|Number=Sing	20	nsubj:outer	_	_
11	de	de	ADP	_	ExtPos=SCONJ	15	mark	_	_
12	que	que	SCONJ	_	_	11	fixed	_	_
13	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	14	det	_	_
14	principezinho	principezinho	NOUN	_	Gender=Masc|Number=Sing	15	nsubj	_	_
15	existia	existir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	10	acl	_	_
16	é	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	20	cop	_	_
17	que	que	SCONJ	_	_	20	mark	_	_
18	ele	ele	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	20	nsubj	_	_
19	era	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	20	cop	_	_
20	encantador	encantador	ADJ	_	Gender=Masc|Number=Sing	7	ccomp:speech	_	SpaceAfter=No
21	,	,	PUNCT	_	_	24	punct	_	_
22	que	que	SCONJ	_	_	24	mark	_	_
23	ele	ele	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	24	nsubj	_	_
24	ria	rr	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	20	conj	_	SpaceAfter=No
25	,	,	PUNCT	_	_	29	punct	_	_
26	e	e	CCONJ	_	_	29	cc	_	_
27	que	que	SCONJ	_	_	29	mark	_	_
28	ele	ele	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	29	nsubj	_	_
29	queria	querer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	20	conj	_	_
30	um	um	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	31	det	_	_
31	carneiro	carneiro	NOUN	_	Gender=Masc|Number=Sing	29	obj	_	SpaceAfter=No
32	.	.	PUNCT	_	_	7	punct	_	_

~~~


