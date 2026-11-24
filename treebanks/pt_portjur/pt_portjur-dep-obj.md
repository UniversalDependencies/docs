---
layout: base
title:  'Statistics of obj in UD_Portuguese-PortJur'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PortJur: Relations: `obj`

This relation is universal.

2680 nodes (3%) are attached to their parents as `obj`.

2566 instances of `obj` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.7134328358209.

The following 7 pairs of parts of speech are connected with `obj`: <tt><a href="pt_portjur-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_portjur-pos-NOUN.html">NOUN</a></tt> (2405; 90% instances), <tt><a href="pt_portjur-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_portjur-pos-PRON.html">PRON</a></tt> (229; 9% instances), <tt><a href="pt_portjur-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_portjur-pos-PROPN.html">PROPN</a></tt> (29; 1% instances), <tt><a href="pt_portjur-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_portjur-pos-X.html">X</a></tt> (8; 0% instances), <tt><a href="pt_portjur-pos-AUX.html">AUX</a></tt>-<tt><a href="pt_portjur-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="pt_portjur-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_portjur-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="pt_portjur-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_portjur-pos-SYM.html">SYM</a></tt> (3; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 obj	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 obj	color:blue
1	Transcrevo	transcrever	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
2	os	o	PRON	_	Case=Acc|Gender=Masc|Number=Plur|Person=3|PronType=Prs	1	obj	_	_
3	(	(	PUNCT	_	_	5	punct	_	SpaceAfter=No
4	em	em	ADP	_	_	5	case	_	_
5	ordem	ordem	NOUN	_	Gender=Fem|Number=Sing	1	obl	_	_
6	cronológica	cronológico	ADJ	_	Gender=Fem|Number=Sing	5	amod	_	SpaceAfter=No
7	)	)	PUNCT	_	_	5	punct	_	SpaceAfter=No
8	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 12 obj	color:blue
1	Em	em	ADP	_	_	3	case	_	_
2	os	o	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	3	det	_	_
3	casos	caso	NOUN	_	Gender=Masc|Number=Plur	8	obl	_	_
4	expressos	expressar	VERB	_	Gender=Masc|Number=Plur|VerbForm=Part	3	acl	_	_
5	em	em	ADP	_	_	6	case	_	_
6	lei	lei	NOUN	_	Gender=Fem|Number=Sing	4	obl	_	SpaceAfter=No
7	,	,	PUNCT	_	_	3	punct	_	_
8	aplica	aplicar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
9	se	se	PRON	_	Case=Nom|Person=3|PronType=Prs	8	expl:impers	_	_
10	excepcionalmente	excepcionalmente	ADV	_	_	8	advmod	_	_
11	este	este	DET	_	Gender=Masc|Number=Sing|PronType=Dem	12	det	_	_
12	Estatuto	Estatuto	PROPN	_	_	8	obj	_	_
13	a	a	ADP	_	_	15	case	_	_
14	as	o	DET	_	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	15	det	_	_
15	pessoas	pessoa	NOUN	_	Gender=Fem|Number=Plur	8	obl	_	_
16	entre	entre	ADP	_	_	22	case	_	_
17	dezoito	dezoito	NUM	_	NumType=Card	22	nummod	_	_
18	e	e	CCONJ	_	_	19	cc	_	_
19	vinte	vinte	NUM	_	NumType=Card	17	conj	_	_
20	e	e	CCONJ	_	_	21	cc	_	_
21	um	um	NUM	_	Gender=Masc|NumType=Card	19	flat	_	_
22	anos	ano	NOUN	_	Gender=Masc|Number=Plur	15	nmod	_	_
23	de	de	ADP	_	_	24	case	_	_
24	idade	idade	NOUN	_	Gender=Fem|Number=Sing	22	nmod	_	SpaceAfter=No
25	.	.	PUNCT	_	_	8	punct	_	_

~~~


