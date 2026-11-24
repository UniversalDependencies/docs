---
layout: base
title:  'Statistics of cop in UD_Portuguese-PortJur'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PortJur: Relations: `cop`

This relation is universal.

609 nodes (1%) are attached to their parents as `cop`.

595 instances of `cop` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.5320197044335.

The following 8 pairs of parts of speech are connected with `cop`: <tt><a href="pt_portjur-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_portjur-pos-AUX.html">AUX</a></tt> (339; 56% instances), <tt><a href="pt_portjur-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_portjur-pos-AUX.html">AUX</a></tt> (225; 37% instances), <tt><a href="pt_portjur-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_portjur-pos-AUX.html">AUX</a></tt> (20; 3% instances), <tt><a href="pt_portjur-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_portjur-pos-AUX.html">AUX</a></tt> (6; 1% instances), <tt><a href="pt_portjur-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_portjur-pos-AUX.html">AUX</a></tt> (6; 1% instances), <tt><a href="pt_portjur-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_portjur-pos-AUX.html">AUX</a></tt> (6; 1% instances), <tt><a href="pt_portjur-pos-X.html">X</a></tt>-<tt><a href="pt_portjur-pos-AUX.html">AUX</a></tt> (4; 1% instances), <tt><a href="pt_portjur-pos-NUM.html">NUM</a></tt>-<tt><a href="pt_portjur-pos-AUX.html">AUX</a></tt> (3; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 cop	color:blue
1	Ou	ou	CCONJ	_	ExtPos=CCONJ	6	cc	_	_
2	seja	ser	AUX	_	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	fixed	_	SpaceAfter=No
3	,	,	PUNCT	_	_	1	punct	_	_
4	não	não	ADV	_	_	6	advmod	_	_
5	está	estar	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
6	configurado	configurado	ADJ	_	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
7	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	dolo	dolo	NOUN	_	Gender=Masc|Number=Sing	6	nsubj	_	_
9	direto	direto	ADJ	_	Gender=Masc|Number=Sing	8	amod	_	SpaceAfter=No
10	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 cop	color:blue
1	É	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
2	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
3	breve	breve	ADJ	_	Number=Sing	4	amod	_	_
4	relato	relato	NOUN	_	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
5	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 cop	color:blue
1	Um	um	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	exemplo	exemplo	NOUN	_	Gender=Masc|Number=Sing	7	nsubj	_	_
3	não	não	ADV	_	_	5	advmod	_	_
4	menos	menos	ADV	_	_	5	advmod	_	_
5	clássico	clássico	ADJ	_	Gender=Masc|Number=Sing	2	amod	_	_
6	é	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	_
7	o	o	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	0	root	_	_
8	de	de	ADP	_	_	10	case	_	_
9	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
10	condução	condução	NOUN	_	Gender=Fem|Number=Sing	7	nmod	_	_
11	de	de	ADP	_	_	13	case	_	_
12	um	um	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	13	det	_	_
13	veículo	veículo	NOUN	_	Gender=Masc|Number=Sing	10	nmod	_	_
14	em	em	ADP	_	_	15	case	_	_
15	velocidade	velocidade	NOUN	_	Gender=Fem|Number=Sing	10	nmod	_	_
16	superior	superior	ADJ	_	Number=Sing	15	amod	_	_
17	a	a	ADP	_	_	18	case	_	_
18	a	o	PRON	_	Gender=Fem|Number=Sing|Person=3|PronType=Dem	16	obl	_	_
19	permitida	permitir	VERB	_	Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	18	acl	_	_
20	para	para	ADP	_	_	22	case	_	_
21	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	22	det	_	_
22	via	via	NOUN	_	Gender=Fem|Number=Sing	19	obl	_	SpaceAfter=No
23	.	.	PUNCT	_	_	7	punct	_	_

~~~


