---
layout: base
title:  'Statistics of cop in UD_Spanish-AnCora'
udver: '2'
---

## Treebank Statistics: UD_Spanish-AnCora: Relations: `cop`

This relation is universal.

5538 nodes (1%) are attached to their parents as `cop`.

5353 instances of `cop` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.89346334416757.

The following 13 pairs of parts of speech are connected with `cop`: <tt><a href="es_ancora-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_ancora-pos-AUX.html">AUX</a></tt> (2408; 43% instances), <tt><a href="es_ancora-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_ancora-pos-AUX.html">AUX</a></tt> (2396; 43% instances), <tt><a href="es_ancora-pos-PRON.html">PRON</a></tt>-<tt><a href="es_ancora-pos-AUX.html">AUX</a></tt> (283; 5% instances), <tt><a href="es_ancora-pos-PROPN.html">PROPN</a></tt>-<tt><a href="es_ancora-pos-AUX.html">AUX</a></tt> (126; 2% instances), <tt><a href="es_ancora-pos-ADV.html">ADV</a></tt>-<tt><a href="es_ancora-pos-AUX.html">AUX</a></tt> (123; 2% instances), <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-AUX.html">AUX</a></tt> (73; 1% instances), <tt><a href="es_ancora-pos-NUM.html">NUM</a></tt>-<tt><a href="es_ancora-pos-AUX.html">AUX</a></tt> (45; 1% instances), <tt><a href="es_ancora-pos-DET.html">DET</a></tt>-<tt><a href="es_ancora-pos-AUX.html">AUX</a></tt> (40; 1% instances), <tt><a href="es_ancora-pos-ADP.html">ADP</a></tt>-<tt><a href="es_ancora-pos-AUX.html">AUX</a></tt> (29; 1% instances), <tt><a href="es_ancora-pos-SYM.html">SYM</a></tt>-<tt><a href="es_ancora-pos-AUX.html">AUX</a></tt> (12; 0% instances), <tt><a href="es_ancora-pos-PART.html">PART</a></tt>-<tt><a href="es_ancora-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="es_ancora-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="es_ancora-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="es_ancora-pos-X.html">X</a></tt>-<tt><a href="es_ancora-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 cop	color:blue
1	Estabas	estar	AUX	vmii2s0	Mood=Ind|Number=Sing|Person=2|Tense=Imp|VerbForm=Fin	5	cop	5:cop	_
2	arriba	arriba	ADV	rg	_	5	obj	5:obj	ArgTem=arg2:loc
3	con	con	ADP	sps00	_	5	case	5:case	_
4	el	el	DET	da0ms0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	5:det	_
5	gozo	gozo	NOUN	ncms000	Gender=Masc|Number=Sing	0	root	0:root	ArgTem=arg2:atr
6	puesto	puesto	ADJ	aq0msp	Gender=Masc|Number=Sing|VerbForm=Part	5	amod	5:amod	_
7	y	y	CCONJ	cc	_	11	cc	11:cc	_
8	a	a	ADP	sps00	_	11	mark	11:mark	MWE=a_punto_de|MWEPOS=ADP
9	punto	punto	NOUN	_	_	8	fixed	8:fixed	_
10	de	de	ADP	_	_	8	fixed	8:fixed	_
11	ganar	ganar	VERB	vmn0000	VerbForm=Inf	5	conj	5:conj	SpaceAfter=No
12	.	.	PUNCT	fp	PunctType=Peri	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 cop	color:blue
1	Resultaban	resultar	VERB	vmii3p0	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	0	root	0:root	_
2	demasiado	demasiado	ADV	rg	_	3	advmod	3:advmod	_
3	baratos	barato	ADJ	aq0mp0	Gender=Masc|Number=Plur	1	obj	1:obj	ArgTem=arg2:atr
4	para	para	ADP	sps00	_	6	mark	6:mark	_
5	ser	ser	AUX	vsn0000	VerbForm=Inf	6	cop	6:cop	ArgTem=argM:fin
6	buenos	buen	ADJ	aq0mp0	Gender=Masc|Number=Plur	1	advcl	1:advcl	SpaceAfter=No|ArgTem=arg2:atr
7	.	.	PUNCT	fp	PunctType=Peri	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 cop	color:blue
1	Todos	todo	PRON	pi0mp000	Gender=Masc|Number=Plur|PronType=Tot	4	nsubj	4:nsubj	ArgTem=arg1:tem
2	éramos	ser	AUX	vsii1p0	Mood=Ind|Number=Plur|Person=1|Tense=Imp|VerbForm=Fin	4	cop	4:cop	_
3	un	uno	DET	di0ms0	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	4	det	4:det	_
4	poco	poco	PRON	pi0ms000	Gender=Masc|Number=Sing|NumType=Card|PronType=Ind	0	root	0:root	ArgTem=arg2:atr
5	de	de	ADP	sps00	_	6	case	6:case	_
6	ti	tú	PRON	pp2cso00	Case=Acc|Number=Sing|Person=2|PrepCase=Pre|PronType=Prs	4	nmod	4:nmod	SpaceAfter=No
7	.	.	PUNCT	fp	PunctType=Peri	4	punct	4:punct	_

~~~


