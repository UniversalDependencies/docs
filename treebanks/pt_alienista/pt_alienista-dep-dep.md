---
layout: base
title:  'Statistics of dep in UD_Portuguese-Alienista'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-Alienista: Relations: `dep`

This relation is universal.

7 nodes (0%) are attached to their parents as `dep`.

7 instances of `dep` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.71428571428571.

The following 6 pairs of parts of speech are connected with `dep`: <tt><a href="pt_alienista-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_alienista-pos-PRON.html">PRON</a></tt> (2; 29% instances), <tt><a href="pt_alienista-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_alienista-pos-ADP.html">ADP</a></tt> (1; 14% instances), <tt><a href="pt_alienista-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_alienista-pos-CCONJ.html">CCONJ</a></tt> (1; 14% instances), <tt><a href="pt_alienista-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_alienista-pos-CCONJ.html">CCONJ</a></tt> (1; 14% instances), <tt><a href="pt_alienista-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_alienista-pos-NOUN.html">NOUN</a></tt> (1; 14% instances), <tt><a href="pt_alienista-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_alienista-pos-SCONJ.html">SCONJ</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 21 dep	color:blue
1	Seria	ser	AUX	_	Mood=Cnd|Number=Sing|Person=3|VerbForm=Fin	3	cop	_	_
2	de	de	ADP	_	_	3	case	_	_
3	ele	ele	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	0	root	_	_
4	mesmo	mesmo	DET	_	Gender=Masc|Number=Sing|PronType=Dem	3	det	_	_
5	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	ideia	ideia	NOUN	_	Gender=Fem|Number=Sing	3	nsubj	_	_
7	relativa	relativo	ADJ	_	Gender=Fem|Number=Sing	6	amod	_	_
8	a	a	ADP	_	_	10	case	_	_
9	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	nascimento	nascimento	NOUN	_	Gender=Masc|Number=Sing	7	obl	_	_
11	de	de	ADP	_	_	12	case	_	_
12	D.	D.	PROPN	_	_	10	nmod	_	_
13	Evarista	Evarista	PROPN	_	_	12	flat:name	_	_
14	ou	ou	CCONJ	_	_	17	cc	_	_
15	teria	ter	AUX	_	Mood=Cnd|Number=Sing|Person=3|VerbForm=Fin	17	aux	_	_
16	la	lo	PRON	_	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs	17	obj	_	_
17	encontrado	encontrar	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part	3	conj	_	_
18	em	em	ADP	_	_	20	case	_	_
19	algum	algum	DET	_	Gender=Masc|Number=Sing|PronType=Ind	20	det	_	_
20	autor	autor	NOUN	_	Gender=Masc|Number=Sing	17	obl	_	_
21	que	que	PRON	_	PronType=Rel	20	dep	_	SpaceAfter=No
22	?	?	PUNCT	_	_	3	punct	_	SpaceAfter=No
23	...	...	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 31	bgColor:blue
# visual-style 31	fgColor:white
# visual-style 29	bgColor:blue
# visual-style 29	fgColor:white
# visual-style 29 31 dep	color:blue
1	O	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	alienista	alienista	NOUN	_	Number=Sing	4	nsubj	_	_
3	mal	mal	ADV	_	_	4	advmod	_	_
4	podia	poder	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
5	dissimular	dissimular	VERB	_	VerbForm=Inf	4	xcomp	_	_
6	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	assombro	assombro	NOUN	_	Gender=Masc|Number=Sing	5	obj	_	SpaceAfter=No
8	;	;	PUNCT	_	_	9	punct	_	_
9	confessou	confessar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	4	parataxis	_	_
10	que	que	SCONJ	_	_	11	mark	_	_
11	esperava	esperar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	9	ccomp	_	_
12	outra	outro	DET	_	Gender=Fem|Number=Sing|PronType=Ind	13	det	_	_
13	cousa	cousa	NOUN	_	Gender=Fem|Number=Sing	11	obj	_	SpaceAfter=No
14	,	,	PUNCT	_	_	16	punct	_	_
15	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	16	det	_	_
16	arrasamento	arrasamento	NOUN	_	Gender=Masc|Number=Sing	13	appos	_	_
17	de	de	ADP	_	_	19	case	_	_
18	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	19	det	_	_
19	hospício	hospício	NOUN	_	Gender=Masc|Number=Sing	16	nmod	_	SpaceAfter=No
20	,	,	PUNCT	_	_	22	punct	_	_
21	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	22	det	_	_
22	prisão	prisão	NOUN	_	Gender=Fem|Number=Sing	16	conj	_	_
23	de	de	ADP	_	_	24	case	_	_
24	ele	ele	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	22	nmod	_	_
25	,	,	PUNCT	_	_	27	punct	_	_
26	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	27	det	_	_
27	desterro	desterro	NOUN	_	Gender=Masc|Number=Sing	16	conj	_	SpaceAfter=No
28	,	,	PUNCT	_	_	29	punct	_	_
29	tudo	tudo	PRON	_	PronType=Ind	16	conj	_	SpaceAfter=No
30	,	,	PUNCT	_	_	31	punct	_	_
31	menos	menos	ADP	_	_	29	dep	_	SpaceAfter=No
32	...	...	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 21 dep	color:blue
1	-	-	PUNCT	_	_	3	punct	_	_
2	O	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	albardeiro	albardeiro	NOUN	_	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
4	;	;	PUNCT	_	_	5	punct	_	_
5	está	estar	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	parataxis	_	_
6	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	Costa	Costa	PROPN	_	_	5	nsubj	_	SpaceAfter=No
8	,	,	PUNCT	_	_	10	punct	_	_
9	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
10	prima	primo	NOUN	_	Gender=Fem|Number=Sing	7	conj	_	_
11	de	de	ADP	_	_	13	case	_	_
12	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	13	det	_	_
13	Costa	Costa	PROPN	_	_	10	nmod	_	SpaceAfter=No
14	,	,	PUNCT	_	_	16	punct	_	_
15	e	e	CCONJ	_	_	16	cc	_	_
16	Fulano	Fulano	PROPN	_	_	7	conj	_	SpaceAfter=No
17	,	,	PUNCT	_	_	19	punct	_	_
18	e	e	CCONJ	_	_	19	cc	_	_
19	Sicrano	Sicrano	PROPN	_	_	7	conj	_	SpaceAfter=No
20	,	,	PUNCT	_	_	21	punct	_	_
21	e	e	CCONJ	_	_	7	dep	_	SpaceAfter=No
22	...	...	PUNCT	_	_	3	punct	_	_

~~~


