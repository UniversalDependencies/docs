---
layout: base
title:  'Statistics of appos in UD_Portuguese-Alienista'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-Alienista: Relations: `appos`

This relation is universal.

86 nodes (0%) are attached to their parents as `appos`.

86 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.22093023255814.

The following 12 pairs of parts of speech are connected with `appos`: <tt><a href="pt_alienista-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_alienista-pos-NOUN.html">NOUN</a></tt> (46; 53% instances), <tt><a href="pt_alienista-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_alienista-pos-NOUN.html">NOUN</a></tt> (11; 13% instances), <tt><a href="pt_alienista-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_alienista-pos-NOUN.html">NOUN</a></tt> (6; 7% instances), <tt><a href="pt_alienista-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_alienista-pos-PROPN.html">PROPN</a></tt> (5; 6% instances), <tt><a href="pt_alienista-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_alienista-pos-PRON.html">PRON</a></tt> (4; 5% instances), <tt><a href="pt_alienista-pos-NUM.html">NUM</a></tt>-<tt><a href="pt_alienista-pos-NOUN.html">NOUN</a></tt> (4; 5% instances), <tt><a href="pt_alienista-pos-NUM.html">NUM</a></tt>-<tt><a href="pt_alienista-pos-PRON.html">PRON</a></tt> (3; 3% instances), <tt><a href="pt_alienista-pos-NUM.html">NUM</a></tt>-<tt><a href="pt_alienista-pos-PROPN.html">PROPN</a></tt> (2; 2% instances), <tt><a href="pt_alienista-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_alienista-pos-PROPN.html">PROPN</a></tt> (2; 2% instances), <tt><a href="pt_alienista-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_alienista-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="pt_alienista-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_alienista-pos-X.html">X</a></tt> (1; 1% instances), <tt><a href="pt_alienista-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_alienista-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 appos	color:blue
1	Bajulador	bajulador	NOUN	_	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
2	,	,	PUNCT	_	_	4	punct	_	_
3	torpe	torpe	ADJ	_	Number=Sing	4	amod	_	_
4	bajulador	bajulador	NOUN	_	Gender=Masc|Number=Sing	1	appos	_	SpaceAfter=No
5	!	!	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 11 appos	color:blue
1	-	-	PUNCT	_	_	5	punct	_	_
2	De	de	ADP	_	_	5	case	_	_
3	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
4	verdadeiro	verdadeiro	ADJ	_	Gender=Masc|Number=Sing	5	amod	_	_
5	médico	médico	NOUN	_	Gender=Masc|Number=Sing	7	ccomp:speech	_	_
6	-	-	PUNCT	_	_	5	punct	_	_
7	emendou	emendar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
8	Crispim	Crispim	PROPN	_	_	7	nsubj	_	_
9	Soares	Soares	PROPN	_	_	8	flat:name	_	SpaceAfter=No
10	,	,	PUNCT	_	_	11	punct	_	_
11	boticário	boticário	NOUN	_	Gender=Masc|Number=Sing	8	appos	_	_
12	de	de	ADP	_	_	14	case	_	_
13	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	14	det	_	_
14	vila	vila	NOUN	_	Gender=Fem|Number=Sing	11	nmod	_	SpaceAfter=No
15	,	,	PUNCT	_	_	17	punct	_	_
16	e	e	CCONJ	_	_	17	cc	_	_
17	um	um	NUM	_	Gender=Masc|NumType=Card	11	conj	_	_
18	de	de	ADP	_	_	21	case	_	_
19	os	o	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	21	det	_	_
20	seus	seu	DET	_	Gender=Masc|Number=Plur|Person=3|Poss=Yes|PronType=Prs	21	det	_	_
21	amigos	amigo	NOUN	_	Gender=Masc|Number=Plur	17	nmod	_	_
22	e	e	CCONJ	_	_	23	cc	_	_
23	comensais	comensal	NOUN	_	Number=Plur	21	conj	_	SpaceAfter=No
24	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 11 appos	color:blue
1	-	-	PUNCT	_	_	5	punct	_	_
2	Sem	sem	ADP	_	_	3	case	_	_
3	dúvida	dúvida	NOUN	_	Gender=Fem|Number=Sing	5	obl	_	SpaceAfter=No
4	:	:	PUNCT	_	_	3	punct	_	_
5	vá	ir	VERB	_	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
6	,	,	PUNCT	_	_	7	punct	_	_
7	confesse	confessar	VERB	_	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	conj	_	_
8	tudo	tudo	PRON	_	PronType=Ind	7	obj	_	SpaceAfter=No
9	,	,	PUNCT	_	_	11	punct	_	_
10	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	11	det	_	_
11	verdade	verdade	NOUN	_	Gender=Fem|Number=Sing	8	appos	_	_
12	inteira	inteiro	ADJ	_	Gender=Fem|Number=Sing	11	amod	_	SpaceAfter=No
13	,	,	PUNCT	_	_	15	punct	_	_
14	seja	ser	AUX	_	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	15	discourse	_	_
15	qual	qual	PRON	_	Number=Sing|PronType=Int	11	parataxis	_	_
16	for	ser	AUX	_	Mood=Sub|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	15	cop	_	SpaceAfter=No
17	,	,	PUNCT	_	_	19	punct	_	_
18	e	e	CCONJ	_	_	19	cc	_	_
19	confie	confiar	VERB	_	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	conj	_	_
20	lhe	lhe	PRON	_	Case=Dat|Number=Sing|Person=3|PronType=Prs	19	iobj	_	_
21	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	22	det	_	_
22	causa	causa	NOUN	_	Gender=Fem|Number=Sing	19	obj	_	SpaceAfter=No
23	.	.	PUNCT	_	_	5	punct	_	_

~~~


