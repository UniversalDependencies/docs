---
layout: base
title:  'Statistics of expl in UD_Portuguese-Alienista'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-Alienista: Relations: `expl`

This relation is universal.
There are 1 language-specific subtypes of `expl`: <tt><a href="pt_alienista-dep-expl-impers.html">expl:impers</a></tt>.

103 nodes (0%) are attached to their parents as `expl`.

75 instances of `expl` (73%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.01941747572816.

The following 2 pairs of parts of speech are connected with `expl`: <tt><a href="pt_alienista-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_alienista-pos-PRON.html">PRON</a></tt> (102; 99% instances), <tt><a href="pt_alienista-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_alienista-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 expl	color:blue
1	O	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	povo	povo	NOUN	_	Gender=Masc|Number=Sing	3	nsubj	_	_
3	indignou	indignar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
4	se	se	PRON	_	Case=Nom|Person=3|PronType=Prs	3	expl	_	_
5	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 43	bgColor:blue
# visual-style 43	fgColor:white
# visual-style 42	bgColor:blue
# visual-style 42	fgColor:white
# visual-style 42 43 expl	color:blue
1	Deram	dar	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
2	lhe	lhe	PRON	_	Case=Dat|Number=Sing|Person=3|PronType=Prs	1	iobj	_	_
3	cadeira	cadeira	NOUN	_	Gender=Fem|Number=Sing	1	obj	_	SpaceAfter=No
4	,	,	PUNCT	_	_	5	punct	_	_
5	refrescos	refresco	NOUN	_	Gender=Masc|Number=Plur	3	conj	_	SpaceAfter=No
6	,	,	PUNCT	_	_	7	punct	_	_
7	elogios	elogio	NOUN	_	Gender=Masc|Number=Plur	3	conj	_	SpaceAfter=No
8	;	;	PUNCT	_	_	9	punct	_	_
9	disseram	dizer	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	1	conj	_	_
10	lhe	lhe	PRON	_	Case=Dat|Number=Sing|Person=3|PronType=Prs	9	iobj	_	_
11	que	que	SCONJ	_	_	19	mark	_	_
12	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	13	det	_	_
13	causa	causa	NOUN	_	Gender=Fem|Number=Sing	19	nsubj	_	_
14	de	de	ADP	_	_	17	case	_	_
15	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	17	det	_	_
16	ilustre	ilustre	ADJ	_	Number=Sing	17	amod	_	_
17	Porfírio	Porfírio	PROPN	_	_	13	nmod	_	_
18	era	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	19	cop	_	_
19	a	o	PRON	_	Gender=Fem|Number=Sing|Person=3|PronType=Dem	9	ccomp	_	_
20	de	de	ADP	_	_	23	case	_	_
21	todos	todo	DET	_	Gender=Masc|Number=Plur|PronType=Ind	23	det	_	_
22	os	o	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	23	det	_	_
23	patriotas	patriota	NOUN	_	Number=Plur	19	nmod	_	SpaceAfter=No
24	;	;	PUNCT	_	_	31	punct	_	_
25	a	a	ADP	_	_	26	case	_	_
26	o	o	PRON	_	ExtPos=PRON|Gender=Masc|Number=Sing|Person=3|PronType=Dem	31	obl	_	_
27	que	que	PRON	_	PronType=Rel	26	fixed	_	_
28	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	29	det	_	_
29	boticário	boticário	NOUN	_	Gender=Masc|Number=Sing	31	nsubj	_	_
30	ia	ir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	31	aux	_	_
31	repetindo	repetir	VERB	_	VerbForm=Ger	19	acl:relcl	_	_
32	que	que	SCONJ	_	_	33	mark	_	_
33	sim	sim	ADV	_	_	31	ccomp	_	SpaceAfter=No
34	,	,	PUNCT	_	_	37	punct	_	_
35	que	que	SCONJ	_	_	37	mark	_	_
36	nunca	nunca	ADV	_	_	37	advmod	_	_
37	pensara	pensar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pqp|VerbForm=Fin	33	conj	_	_
38	outra	outro	DET	_	Gender=Fem|Number=Sing|PronType=Ind	39	det	_	_
39	cousa	cousa	NOUN	_	Gender=Fem|Number=Sing	37	obj	_	SpaceAfter=No
40	,	,	PUNCT	_	_	44	punct	_	_
41	que	que	SCONJ	_	_	44	mark	_	_
42	isso	isso	PRON	_	Gender=Masc|Number=Sing|PronType=Dem	45	obj	_	_
43	mesmo	mesmo	PRON	_	Gender=Masc|Number=Sing|PronType=Dem	42	expl	_	_
44	mandaria	mandar	VERB	_	Mood=Cnd|Number=Sing|Person=3|VerbForm=Fin	33	conj	_	_
45	declarar	declarar	VERB	_	VerbForm=Inf	44	xcomp	_	_
46	a	a	ADP	_	_	47	case	_	_
47	Sua	Sua	PROPN	_	_	45	obl	_	_
48	Majestade	Majestade	PROPN	_	_	47	flat:name	_	SpaceAfter=No
49	.	.	PUNCT	_	_	1	punct	_	_

~~~


