---
layout: base
title:  'Statistics of csubj in UD_Portuguese-PortJur'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PortJur: Relations: `csubj`

This relation is universal.
There are 2 language-specific subtypes of `csubj`: <tt><a href="pt_portjur-dep-csubj-outer.html">csubj:outer</a></tt>, <tt><a href="pt_portjur-dep-csubj-pass.html">csubj:pass</a></tt>.

143 nodes (0%) are attached to their parents as `csubj`.

140 instances of `csubj` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.86713286713287.

The following 8 pairs of parts of speech are connected with `csubj`: <tt><a href="pt_portjur-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_portjur-pos-VERB.html">VERB</a></tt> (71; 50% instances), <tt><a href="pt_portjur-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_portjur-pos-VERB.html">VERB</a></tt> (43; 30% instances), <tt><a href="pt_portjur-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_portjur-pos-VERB.html">VERB</a></tt> (16; 11% instances), <tt><a href="pt_portjur-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_portjur-pos-ADJ.html">ADJ</a></tt> (6; 4% instances), <tt><a href="pt_portjur-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_portjur-pos-ADJ.html">ADJ</a></tt> (4; 3% instances), <tt><a href="pt_portjur-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_portjur-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="pt_portjur-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_portjur-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="pt_portjur-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_portjur-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 csubj	color:blue
1	Não	não	ADV	_	_	2	advmod	_	_
2	consta	constar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	ter	ter	AUX	_	VerbForm=Inf	4	aux	_	_
4	havido	haver	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part	2	csubj	_	_
5	monitoramento	monitoramento	NOUN	_	Gender=Masc|Number=Sing	4	obj	_	_
6	eletrônico	eletrônico	ADJ	_	Gender=Masc|Number=Sing	5	amod	_	SpaceAfter=No
7	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 csubj	color:blue
1	Portanto	portanto	CCONJ	_	_	12	cc	_	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	_
3	se	se	SCONJ	_	_	6	mark	_	_
4	não	não	ADV	_	_	6	advmod	_	_
5	era	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	6	cop	_	_
6	possível	possível	ADJ	_	Number=Sing	12	advcl	_	_
7	reconhecer	reconhecer	VERB	_	VerbForm=Inf	6	csubj	_	_
8	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	prescrição	prescrição	NOUN	_	Gender=Fem|Number=Sing	7	obj	_	SpaceAfter=No
10	,	,	PUNCT	_	_	6	punct	_	_
11	não	não	ADV	_	_	12	advmod	_	_
12	há	haver	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
13	falar	falar	VERB	_	VerbForm=Inf	12	xcomp	_	_
14	em	em	ADP	_	_	15	case	_	_
15	omissão	omissão	NOUN	_	Gender=Fem|Number=Sing	13	obl	_	_
16	de	de	ADP	_	_	18	case	_	_
17	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	18	det	_	_
18	acórdão	acórdão	NOUN	_	Gender=Masc|Number=Sing	15	nmod	_	_
19	embargado	embargar	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	18	acl	_	SpaceAfter=No
20	,	,	PUNCT	_	_	22	punct	_	_
21	a	a	ADP	_	_	22	mark	_	_
22	justificar	justificar	VERB	_	VerbForm=Inf	13	advcl	_	_
23	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	24	det	_	_
24	acolhimento	acolhimento	NOUN	_	Gender=Masc|Number=Sing	22	obj	_	_
25	de	de	ADP	_	_	26	case	_	_
26	embargos	embargo	NOUN	_	Gender=Masc|Number=Plur	24	nmod	_	_
27	de	de	ADP	_	_	28	case	_	_
28	declaração	declaração	NOUN	_	Gender=Fem|Number=Sing	26	nmod	_	SpaceAfter=No
29	.	.	PUNCT	_	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 csubj	color:blue
1	É	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	cop	_	_
2	dever	dever	NOUN	_	Gender=Masc|Number=Sing	0	root	_	_
3	de	de	ADP	_	_	4	case	_	_
4	todos	todo	PRON	_	Gender=Masc|Number=Plur|PronType=Ind	2	nmod	_	_
5	prevenir	prevenir	VERB	_	VerbForm=Inf	2	csubj	_	_
6	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	ameaça	ameaça	NOUN	_	Gender=Fem|Number=Sing	5	obj	_	_
8	ou	ou	CCONJ	_	_	9	cc	_	_
9	violação	violação	NOUN	_	Gender=Fem|Number=Sing	7	conj	_	_
10	a	a	ADP	_	_	12	case	_	_
11	os	o	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	12	det	_	_
12	direitos	direito	NOUN	_	Gender=Masc|Number=Plur	7	nmod	_	_
13	de	de	ADP	_	_	15	case	_	_
14	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	15	det	_	_
15	pessoa	pessoa	NOUN	_	Gender=Fem|Number=Sing	12	nmod	_	_
16	idosa	idoso	ADJ	_	Gender=Fem|Number=Sing	15	amod	_	SpaceAfter=No
17	.	.	PUNCT	_	_	2	punct	_	_

~~~


