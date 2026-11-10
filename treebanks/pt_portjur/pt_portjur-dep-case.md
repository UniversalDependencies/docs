---
layout: base
title:  'Statistics of case in UD_Portuguese-PortJur'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PortJur: Relations: `case`

This relation is universal.

17667 nodes (17%) are attached to their parents as `case`.

17667 instances of `case` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.68127016471387.

The following 11 pairs of parts of speech are connected with `case`: <tt><a href="pt_portjur-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_portjur-pos-ADP.html">ADP</a></tt> (14660; 83% instances), <tt><a href="pt_portjur-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_portjur-pos-ADP.html">ADP</a></tt> (1897; 11% instances), <tt><a href="pt_portjur-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_portjur-pos-ADP.html">ADP</a></tt> (625; 4% instances), <tt><a href="pt_portjur-pos-NUM.html">NUM</a></tt>-<tt><a href="pt_portjur-pos-ADP.html">ADP</a></tt> (281; 2% instances), <tt><a href="pt_portjur-pos-SYM.html">SYM</a></tt>-<tt><a href="pt_portjur-pos-ADP.html">ADP</a></tt> (104; 1% instances), <tt><a href="pt_portjur-pos-X.html">X</a></tt>-<tt><a href="pt_portjur-pos-ADP.html">ADP</a></tt> (40; 0% instances), <tt><a href="pt_portjur-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_portjur-pos-ADV.html">ADV</a></tt> (35; 0% instances), <tt><a href="pt_portjur-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_portjur-pos-ADP.html">ADP</a></tt> (17; 0% instances), <tt><a href="pt_portjur-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_portjur-pos-ADP.html">ADP</a></tt> (6; 0% instances), <tt><a href="pt_portjur-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_portjur-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="pt_portjur-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_portjur-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 9 case	color:blue
1	O	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	credor	credor	NOUN	_	Gender=Masc|Number=Sing	5	nsubj	_	_
3	não	não	ADV	_	_	4	advmod	_	_
4	comerciante	comerciante	ADJ	_	Number=Sing	2	amod	_	_
5	pode	poder	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
6	requerer	requerer	VERB	_	VerbForm=Inf	5	xcomp	_	_
7	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	8	det	_	_
8	quebra	quebra	NOUN	_	Gender=Fem|Number=Sing	6	obj	_	_
9	de	de	ADP	_	_	11	case	_	_
10	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
11	devedor	devedor	NOUN	_	Gender=Masc|Number=Sing	8	nmod	_	SpaceAfter=No
12	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 case	color:blue
1	Não	não	ADV	_	_	3	advmod	_	_
2	se	se	PRON	_	Case=Nom|Person=3|PronType=Prs	3	expl:impers	_	_
3	imporá	impor	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	0	root	_	_
4	sucumbência	sucumbência	NOUN	_	Gender=Fem|Number=Sing	3	obj	_	_
5	a	a	ADP	_	_	7	case	_	_
6	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	Ministério	Ministério	PROPN	_	_	3	obl	_	_
8	Público	Público	PROPN	_	_	7	flat:name	_	SpaceAfter=No
9	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 case	color:blue
1	Agravo	agravo	NOUN	_	Gender=Masc|Number=Sing	0	root	_	_
2	em	em	ADP	_	_	3	case	_	_
3	recurso	recurso	NOUN	_	Gender=Masc|Number=Sing	1	nmod	_	_
4	especial	especial	ADJ	_	Number=Sing	3	amod	_	_
5	eleitoral	eleitoral	ADJ	_	Number=Sing	3	amod	_	_
6	a	a	ADP	_	_	7	case	_	_
7	que	que	PRON	_	PronType=Rel	9	obl	_	_
8	se	se	PRON	_	Case=Nom|Person=3|PronType=Prs	9	expl:impers	_	_
9	nega	negar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	acl:relcl	_	_
10	provimento	provimento	NOUN	_	Gender=Masc|Number=Sing	9	obj	_	SpaceAfter=No
11	.	.	PUNCT	_	_	1	punct	_	_

~~~


