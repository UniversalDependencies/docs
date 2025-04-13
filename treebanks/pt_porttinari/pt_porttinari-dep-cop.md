---
layout: base
title:  'Statistics of cop in UD_Portuguese-Porttinari'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-Porttinari: Relations: `cop`

This relation is universal.

2883 nodes (2%) are attached to their parents as `cop`.

2811 instances of `cop` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.85327783558793.

The following 9 pairs of parts of speech are connected with `cop`: <tt><a href="pt_porttinari-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_porttinari-pos-AUX.html">AUX</a></tt> (1272; 44% instances), <tt><a href="pt_porttinari-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_porttinari-pos-AUX.html">AUX</a></tt> (988; 34% instances), <tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_porttinari-pos-AUX.html">AUX</a></tt> (193; 7% instances), <tt><a href="pt_porttinari-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_porttinari-pos-AUX.html">AUX</a></tt> (166; 6% instances), <tt><a href="pt_porttinari-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_porttinari-pos-AUX.html">AUX</a></tt> (89; 3% instances), <tt><a href="pt_porttinari-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_porttinari-pos-AUX.html">AUX</a></tt> (87; 3% instances), <tt><a href="pt_porttinari-pos-NUM.html">NUM</a></tt>-<tt><a href="pt_porttinari-pos-AUX.html">AUX</a></tt> (61; 2% instances), <tt><a href="pt_porttinari-pos-SYM.html">SYM</a></tt>-<tt><a href="pt_porttinari-pos-AUX.html">AUX</a></tt> (22; 1% instances), <tt><a href="pt_porttinari-pos-X.html">X</a></tt>-<tt><a href="pt_porttinari-pos-AUX.html">AUX</a></tt> (5; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 cop	color:blue
1	Em	em	ADP	_	_	3	case	3:case	_
2	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	3:det	_
3	presidencialismo	presidencialismo	NOUN	_	Gender=Masc|Number=Sing	6	nmod	6:nmod:em	SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	3:punct	_
5	é	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	6:cop	_
6	crise	crise	NOUN	_	Gender=Fem|Number=Sing	0	root	0:root	SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	6:punct	SpaceAfter=No

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 cop	color:blue
1	Parecer	parecer	NOUN	_	Gender=Masc|Number=Sing	10	nsubj	10:nsubj	_
2	de	de	ADP	_	_	4	case	4:case	_
3	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	4:det	_
4	Advocacia-Geral	Advocacia-Geral	PROPN	_	_	1	nmod	1:nmod:de	_
5	enviado	enviar	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	1	acl	1:acl	_
6	a	a	ADP	_	_	8	case	8:case	_
7	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	8:det	_
8	STF	STF	PROPN	_	_	5	obl	5:obl:a	_
9	é	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	cop	10:cop	_
10	favorável	favorável	ADJ	_	Number=Sing	0	root	0:root	_
11	a	a	ADP	_	_	12	case	12:case	_
12	Aécio	Aécio	PROPN	_	_	10	obl	10:obl:a	SpaceAfter=No
13	.	.	PUNCT	_	_	10	punct	10:punct	SpaceAfter=No

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 cop	color:blue
1	Não	não	ADV	_	_	3	advmod	3:advmod	_
2	é	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	3:cop	_
3	nada	nada	PRON	_	Gender=Masc|Number=Sing|PronType=Ind	0	root	0:root	_
4	de	de	ADP	_	_	5	case	5:case	_
5	extraordinário	extraordinário	NOUN	_	Gender=Masc|Number=Sing	3	nmod	3:nmod:de	SpaceAfter=No
6	,	,	PUNCT	_	_	9	punct	9:punct	_
7	que	que	PRON	_	PronType=Rel	9	nsubj	9:nsubj	_
8	é	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	9:cop	_
9	fazer	fazer	VERB	_	VerbForm=Inf	3	parataxis	3:parataxis	_
10	o	o	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	9	obj	9:obj	_
11	melhor	melhor	ADJ	_	Number=Sing	10	amod	10:amod	SpaceAfter=No
12	.	.	PUNCT	_	_	3	punct	3:punct	SpaceAfter=No

~~~


