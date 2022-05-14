---
layout: base
title:  'Statistics of fixed in UD_Italian-MarkIT'
udver: '2'
---

## Treebank Statistics: UD_Italian-MarkIT: Relations: `fixed`

This relation is universal.

193 nodes (0%) are attached to their parents as `fixed`.

193 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.02072538860104.

The following 19 pairs of parts of speech are connected with `fixed`: <tt><a href="it_markit-pos-ADV.html">ADV</a></tt>-<tt><a href="it_markit-pos-ADP.html">ADP</a></tt> (68; 35% instances), <tt><a href="it_markit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_markit-pos-ADP.html">ADP</a></tt> (40; 21% instances), <tt><a href="it_markit-pos-ADV.html">ADV</a></tt>-<tt><a href="it_markit-pos-SCONJ.html">SCONJ</a></tt> (24; 12% instances), <tt><a href="it_markit-pos-ADP.html">ADP</a></tt>-<tt><a href="it_markit-pos-ADP.html">ADP</a></tt> (22; 11% instances), <tt><a href="it_markit-pos-ADP.html">ADP</a></tt>-<tt><a href="it_markit-pos-ADV.html">ADV</a></tt> (10; 5% instances), <tt><a href="it_markit-pos-ADP.html">ADP</a></tt>-<tt><a href="it_markit-pos-NOUN.html">NOUN</a></tt> (8; 4% instances), <tt><a href="it_markit-pos-ADP.html">ADP</a></tt>-<tt><a href="it_markit-pos-SCONJ.html">SCONJ</a></tt> (5; 3% instances), <tt><a href="it_markit-pos-ADV.html">ADV</a></tt>-<tt><a href="it_markit-pos-ADV.html">ADV</a></tt> (3; 2% instances), <tt><a href="it_markit-pos-ADP.html">ADP</a></tt>-<tt><a href="it_markit-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="it_markit-pos-VERB.html">VERB</a></tt>-<tt><a href="it_markit-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="it_markit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_markit-pos-ADP.html">ADP</a></tt> (1; 1% instances), <tt><a href="it_markit-pos-ADP.html">ADP</a></tt>-<tt><a href="it_markit-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="it_markit-pos-ADV.html">ADV</a></tt>-<tt><a href="it_markit-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="it_markit-pos-ADV.html">ADV</a></tt>-<tt><a href="it_markit-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="it_markit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_markit-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="it_markit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_markit-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="it_markit-pos-PRON.html">PRON</a></tt>-<tt><a href="it_markit-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="it_markit-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="it_markit-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="it_markit-pos-VERB.html">VERB</a></tt>-<tt><a href="it_markit-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 fixed	color:blue
1	Fin	Fino	ADV	B	_	3	case	_	_
2	da	da	ADP	E	_	1	fixed	_	_
3	bambini	bambino	NOUN	S	Gender=Masc|Number=Plur	5	obl	_	_
4	si	si	PRON	PC	Clitic=Yes|Person=3|PronType=Prs	5	expl	_	_
5	impara	imparare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
6	a	a	ADP	E	_	7	mark	_	_
7	viver	vivere	VERB	V	VerbForm=Inf	5	ccomp	_	_
8	la	lo	PRON	PC	Clitic=Yes|Gender=Fem|Number=Sing|Person=3|PronType=Prs	7	obj	_	_
9	:	:	PUNCT	FC	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 fixed	color:blue
1	È	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
2	grazie	grazie	NOUN	S	Gender=Masc|Number=Sing	5	case	_	_
3	a	a	ADP	E	_	2	fixed	_	_
4	degli	dei	DET	RI	Definite=Ind|Gender=Masc|Number=Plur|PronType=Art	5	det	_	_
5	scienziati	scienziato	NOUN	S	Gender=Masc|Number=Plur	0	root	_	_
6	come	come	ADP	E	_	7	case	_	_
7	Galileo	Galileo	PROPN	SP	_	5	nmod	_	_
8	che	che	SCONJ	CS	_	15	mark	_	_
9	a	a	ADP	E	_	11	case	_	_
10	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
11	giorno	giorno	NOUN	S	Gender=Masc|Number=Sing	15	obl	_	_
12	d'	di	ADP	E	_	13	case	_	_
13	oggi	oggi	ADV	B	_	11	advmod	_	_
14	è	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	15	cop	_	_
15	possibile	possibile	ADJ	A	Gender=Masc|Number=Sing	5	acl	_	_
16	parlare	parlare	VERB	V	VerbForm=Inf	15	csubj	_	_
17	di	di	ADP	E	_	18	case	_	_
18	scienza	scienza	NOUN	S	Gender=Fem|Number=Sing	16	obl	_	_
19	;	;	PUNCT	FC	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 fixed	color:blue
1	Molti	molto	PRON	PI	Gender=Masc|Number=Plur|Person=3|PronType=Ind	7	nsubj	_	_
2	di	di	ADP	E	_	3	case	_	_
3	noi	noi	PRON	PE	Number=Plur|Person=1|PronType=Prs	1	nmod	_	_
4	lo	lo	PRON	PC	Clitic=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	7	obj	_	_
5	stanno	stare	AUX	VA	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	7	aux	_	_
6	già	già	ADV	B	_	7	advmod	_	_
7	facendo	fare	VERB	V	VerbForm=Ger	0	root	_	_
8	anche	anche	ADV	B	_	11	advmod	_	_
9	se	se	SCONJ	CS	_	8	fixed	_	_
10	in	in	ADP	E	_	11	case	_	_
11	modo	modo	NOUN	S	Gender=Masc|Number=Sing	7	obl	_	_
12	silenzioso	silenzioso	ADJ	A	Gender=Masc|Number=Sing	11	amod	_	_
13	.	.	PUNCT	FS	_	7	punct	_	_

~~~


