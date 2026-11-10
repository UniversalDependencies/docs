---
layout: base
title:  'Statistics of fixed in UD_Portuguese-Alienista'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-Alienista: Relations: `fixed`

This relation is universal.

172 nodes (1%) are attached to their parents as `fixed`.

172 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.18604651162791.

The following 15 pairs of parts of speech are connected with `fixed`: <tt><a href="pt_alienista-pos-ADP.html">ADP</a></tt>-<tt><a href="pt_alienista-pos-PRON.html">PRON</a></tt> (34; 20% instances), <tt><a href="pt_alienista-pos-ADP.html">ADP</a></tt>-<tt><a href="pt_alienista-pos-SCONJ.html">SCONJ</a></tt> (30; 17% instances), <tt><a href="pt_alienista-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_alienista-pos-PRON.html">PRON</a></tt> (23; 13% instances), <tt><a href="pt_alienista-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_alienista-pos-ADP.html">ADP</a></tt> (18; 10% instances), <tt><a href="pt_alienista-pos-ADP.html">ADP</a></tt>-<tt><a href="pt_alienista-pos-DET.html">DET</a></tt> (17; 10% instances), <tt><a href="pt_alienista-pos-DET.html">DET</a></tt>-<tt><a href="pt_alienista-pos-NOUN.html">NOUN</a></tt> (12; 7% instances), <tt><a href="pt_alienista-pos-ADP.html">ADP</a></tt>-<tt><a href="pt_alienista-pos-NOUN.html">NOUN</a></tt> (9; 5% instances), <tt><a href="pt_alienista-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_alienista-pos-SCONJ.html">SCONJ</a></tt> (9; 5% instances), <tt><a href="pt_alienista-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_alienista-pos-ADV.html">ADV</a></tt> (5; 3% instances), <tt><a href="pt_alienista-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="pt_alienista-pos-SCONJ.html">SCONJ</a></tt> (4; 2% instances), <tt><a href="pt_alienista-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_alienista-pos-SCONJ.html">SCONJ</a></tt> (4; 2% instances), <tt><a href="pt_alienista-pos-ADP.html">ADP</a></tt>-<tt><a href="pt_alienista-pos-ADP.html">ADP</a></tt> (3; 2% instances), <tt><a href="pt_alienista-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_alienista-pos-CCONJ.html">CCONJ</a></tt> (2; 1% instances), <tt><a href="pt_alienista-pos-ADP.html">ADP</a></tt>-<tt><a href="pt_alienista-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="pt_alienista-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_alienista-pos-AUX.html">AUX</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 17 fixed	color:blue
1	Simão	Simão	PROPN	_	_	3	nsubj	_	_
2	Bacamarte	Bacamarte	PROPN	_	_	1	flat:name	_	_
3	curvou	curvar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
4	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	cabeça	cabeça	NOUN	_	Gender=Fem|Number=Sing	3	obj	_	_
6	juntamente	juntamente	ADV	_	_	7	advmod	_	_
7	alegre	alegre	ADJ	_	Number=Sing	3	advcl	_	_
8	e	e	CCONJ	_	_	9	cc	_	_
9	triste	triste	ADJ	_	Number=Sing	7	conj	_	SpaceAfter=No
10	,	,	PUNCT	_	_	14	punct	_	_
11	e	e	CCONJ	_	_	14	cc	_	_
12	ainda	ainda	ADV	_	_	14	advmod	_	_
13	mais	mais	ADV	_	_	14	advmod	_	_
14	alegre	alegre	ADJ	_	Number=Sing	7	conj	_	_
15	de	de	ADP	_	ExtPos=SCONJ	18	mark	_	_
16	o	o	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	15	fixed	_	_
17	que	que	PRON	_	PronType=Rel	15	fixed	_	_
18	triste	triste	ADJ	_	Number=Sing	14	advcl	_	SpaceAfter=No
19	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 fixed	color:blue
1	João	João	PROPN	_	_	4	nsubj:pass	_	_
2	Pina	Pina	PROPN	_	_	1	flat:name	_	_
3	foi	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	4	aux:pass	_	_
4	absolvido	absolver	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	SpaceAfter=No
5	,	,	PUNCT	_	_	6	punct	_	_
6	atendendo	atender	VERB	_	VerbForm=Ger	4	advcl	_	_
7	se	se	PRON	_	Case=Nom|Person=3|PronType=Prs	6	expl:impers	_	_
8	a	a	ADP	_	ExtPos=SCONJ	11	mark	_	_
9	que	que	SCONJ	_	_	8	fixed	_	_
10	ele	ele	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	11	nsubj	_	_
11	derrocara	derrocar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pqp|VerbForm=Fin	6	ccomp	_	_
12	um	um	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	13	det	_	_
13	rebelde	rebelde	NOUN	_	Number=Sing	11	obj	_	SpaceAfter=No
14	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 fixed	color:blue
1	Tudo	tudo	PRON	_	ExtPos=PRON|PronType=Ind	6	nsubj	_	_
2	isso	isso	PRON	_	Gender=Masc|Number=Sing|PronType=Dem	1	fixed	_	_
3	era	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	6	cop	_	_
4	naturalmente	naturalmente	ADV	_	_	6	advmod	_	_
5	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	capa	capa	NOUN	_	Gender=Fem|Number=Sing	0	root	_	_
7	de	de	ADP	_	_	9	case	_	_
8	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	velhaco	velhaco	NOUN	_	Gender=Masc|Number=Sing	6	nmod	_	SpaceAfter=No
10	.	.	PUNCT	_	_	6	punct	_	_

~~~


