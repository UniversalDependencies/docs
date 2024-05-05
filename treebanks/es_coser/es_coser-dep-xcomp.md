---
layout: base
title:  'Statistics of xcomp in UD_Spanish-COSER'
udver: '2'
---

## Treebank Statistics: UD_Spanish-COSER: Relations: `xcomp`

This relation is universal.

76 nodes (1%) are attached to their parents as `xcomp`.

75 instances of `xcomp` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.30263157894737.

The following 4 pairs of parts of speech are connected with `xcomp`: <tt><a href="es_coser-pos-VERB.html">VERB</a></tt>-<tt><a href="es_coser-pos-VERB.html">VERB</a></tt> (68; 89% instances), <tt><a href="es_coser-pos-AUX.html">AUX</a></tt>-<tt><a href="es_coser-pos-VERB.html">VERB</a></tt> (4; 5% instances), <tt><a href="es_coser-pos-VERB.html">VERB</a></tt>-<tt><a href="es_coser-pos-ADJ.html">ADJ</a></tt> (3; 4% instances), <tt><a href="es_coser-pos-AUX.html">AUX</a></tt>-<tt><a href="es_coser-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 xcomp	color:blue
1	¿	¿	PUNCT	fia	PunctSide=Ini|PunctType=Qest	5	punct	_	SpaceAfter=No
2	Que	que	SCONJ	pr0cn000	_	5	mark	_	_
3	te	tú	PRON	pc2cs000	Case=Dat|Number=Sing|Person=2|PrepCase=Npr|PronType=Prs	5	obl:arg	_	_
4	lo	él	PRON	pc3msa00	Case=Acc|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs	5	obj	_	_
5	quieres	querer	VERB	vmip2s0	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	_
6	comer	comer	VERB	vmn0000	VerbForm=Inf	5	xcomp	_	_
7	así	así	ADV	rg	_	6	advmod	_	SpaceAfter=No
8	?	?	PUNCT	fit	PunctSide=Fin|PunctType=Qest	5	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 xcomp	color:blue
1	Yo	yo	PRON	pp1csn00	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	es	ser	AUX	vsip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	que	que	SCONJ	cs	_	8	mark	_	_
4	en	en	ADP	sps00	_	5	case	_	_
5	casa	casa	NOUN	ncfs000	Gender=Fem|Number=Sing	8	obl	_	_
6	lo	él	PRON	pc3msa00	Case=Acc|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs	8	obj	_	_
7	he	haber	AUX	vmip1s0	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	8	aux:pass	_	_
8	oído	oír	VERB	vmp00sm	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	2	xcomp	_	_
9	hablar	hablar	VERB	_	VerbForm=Inf	8	xcomp	_	_
10	catón	catón	NOUN	ncms000	Gender=Masc|Number=Sing	9	obj	_	_
11	o	o	CCONJ	cc	_	13	cc	_	_
12	el	el	DET	da0ms0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	13	det	_	_
13	libro	libro	NOUN	ncms000	Gender=Masc|Number=Sing	10	conj	_	_
14	de	de	ADP	spc00	_	16	case	_	_
15	el	el	DET	da0ms0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	16	det	_	_
16	catón	catón	NOUN	ncms000	Gender=Masc|Number=Sing	13	nmod	_	SpaceAfter=No
17	.	.	PUNCT	fp	PunctType=Peri	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 xcomp	color:blue
1	El	el	DET	da0ms0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	rabo	rabo	NOUN	ncms000	Gender=Masc|Number=Sing	5	obj	_	_
3	los	él	PRON	pc1cp000	Case=Acc|Gender=Masc|Number=Plur|Person=3|PrepCase=Npr|PronType=Prs	4	reparandum	_	_
4	lo	él	PRON	pc3msa00	Case=Acc|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs	5	obl:arg	_	_
5	comíamos	comer	VERB	vmii1p0	Mood=Ind|Number=Plur|Person=1|Tense=Imp|VerbForm=Fin	0	root	_	_
6	asao	asado	ADJ	vmp00sm	Gender=Masc|Number=Sing|VerbForm=Part	5	xcomp	_	Ortho=asado|SpaceAfter=No
7	.	.	PUNCT	fp	PunctType=Peri	5	punct	_	_

~~~


