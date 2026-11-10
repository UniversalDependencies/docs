---
layout: base
title:  'Statistics of xcomp in UD_Portuguese-PortJur'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PortJur: Relations: `xcomp`

This relation is universal.

880 nodes (1%) are attached to their parents as `xcomp`.

880 instances of `xcomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.74431818181818.

The following 8 pairs of parts of speech are connected with `xcomp`: <tt><a href="pt_portjur-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_portjur-pos-VERB.html">VERB</a></tt> (689; 78% instances), <tt><a href="pt_portjur-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_portjur-pos-ADJ.html">ADJ</a></tt> (140; 16% instances), <tt><a href="pt_portjur-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_portjur-pos-NOUN.html">NOUN</a></tt> (41; 5% instances), <tt><a href="pt_portjur-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_portjur-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="pt_portjur-pos-AUX.html">AUX</a></tt>-<tt><a href="pt_portjur-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="pt_portjur-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_portjur-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="pt_portjur-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_portjur-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="pt_portjur-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_portjur-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 xcomp	color:blue
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
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 14 xcomp	color:blue
1	O	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	adotante	adotante	NOUN	_	Number=Sing	3	nsubj	_	_
3	há	haver	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	de	de	ADP	_	_	14	mark	_	_
5	ser	ser	AUX	_	VerbForm=Inf	14	cop	_	SpaceAfter=No
6	,	,	PUNCT	_	_	7	punct	_	_
7	por	por	ADP	_	ExtPos=ADV	11	advmod	_	_
8	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	fixed	_	_
9	menos	menos	NOUN	_	Gender=Masc|Number=Sing	7	fixed	_	SpaceAfter=No
10	,	,	PUNCT	_	_	7	punct	_	_
11	dezesseis	dezesseis	NUM	_	NumType=Card	12	nummod	_	_
12	anos	ano	NOUN	_	Gender=Masc|Number=Plur	14	obl	_	_
13	mais	mais	ADV	_	_	14	advmod	_	_
14	velho	velho	ADJ	_	Gender=Masc|Number=Sing	3	xcomp	_	_
15	de	de	ADP	_	ExtPos=SCONJ	19	mark	_	_
16	o	o	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	15	fixed	_	_
17	que	que	PRON	_	PronType=Rel	15	fixed	_	_
18	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	19	det	_	_
19	adotando	adotando	NOUN	_	Gender=Masc|Number=Sing	14	advcl	_	SpaceAfter=No
20	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 12 xcomp	color:blue
1	Os	o	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	2	det	_	_
2	direitos	direito	NOUN	_	Gender=Masc|Number=Plur	4	nsubj	_	_
3	autorais	autoral	ADJ	_	Number=Plur	2	amod	_	_
4	reputam	reputar	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	se	se	PRON	_	Case=Nom|Person=3|PronType=Prs	4	expl	_	_
6	,	,	PUNCT	_	_	9	punct	_	_
7	para	para	ADP	_	_	9	case	_	_
8	os	o	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	9	det	_	_
9	efeitos	efeito	NOUN	_	Gender=Masc|Number=Plur	4	obl	_	_
10	legais	legal	ADJ	_	Number=Plur	9	amod	_	SpaceAfter=No
11	,	,	PUNCT	_	_	9	punct	_	_
12	bens	bem	NOUN	_	Gender=Masc|Number=Plur	4	xcomp	_	_
13	móveis	móvel	ADJ	_	Number=Plur	12	amod	_	SpaceAfter=No
14	.	.	PUNCT	_	_	4	punct	_	_

~~~


