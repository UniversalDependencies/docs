---
layout: base
title:  'Statistics of nmod in UD_Spanish-COSER'
udver: '2'
---

## Treebank Statistics: UD_Spanish-COSER: Relations: `nmod`

This relation is universal.

117 nodes (1%) are attached to their parents as `nmod`.

103 instances of `nmod` (88%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.74358974358974.

The following 19 pairs of parts of speech are connected with `nmod`: <tt><a href="es_coser-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_coser-pos-NOUN.html">NOUN</a></tt> (70; 60% instances), <tt><a href="es_coser-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_coser-pos-PRON.html">PRON</a></tt> (10; 9% instances), <tt><a href="es_coser-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_coser-pos-PROPN.html">PROPN</a></tt> (8; 7% instances), <tt><a href="es_coser-pos-PRON.html">PRON</a></tt>-<tt><a href="es_coser-pos-NOUN.html">NOUN</a></tt> (8; 7% instances), <tt><a href="es_coser-pos-NUM.html">NUM</a></tt>-<tt><a href="es_coser-pos-NOUN.html">NOUN</a></tt> (4; 3% instances), <tt><a href="es_coser-pos-ADV.html">ADV</a></tt>-<tt><a href="es_coser-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="es_coser-pos-NUM.html">NUM</a></tt>-<tt><a href="es_coser-pos-PRON.html">PRON</a></tt> (2; 2% instances), <tt><a href="es_coser-pos-PROPN.html">PROPN</a></tt>-<tt><a href="es_coser-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="es_coser-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_coser-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="es_coser-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_coser-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="es_coser-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_coser-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="es_coser-pos-DET.html">DET</a></tt>-<tt><a href="es_coser-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="es_coser-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_coser-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="es_coser-pos-PRON.html">PRON</a></tt>-<tt><a href="es_coser-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="es_coser-pos-PRON.html">PRON</a></tt>-<tt><a href="es_coser-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="es_coser-pos-PRON.html">PRON</a></tt>-<tt><a href="es_coser-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="es_coser-pos-PROPN.html">PROPN</a></tt>-<tt><a href="es_coser-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="es_coser-pos-PROPN.html">PROPN</a></tt>-<tt><a href="es_coser-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="es_coser-pos-VERB.html">VERB</a></tt>-<tt><a href="es_coser-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 nmod	color:blue
1	¿	¿	PUNCT	fia	PunctSide=Ini|PunctType=Qest	3	punct	_	SpaceAfter=No
2	Y	y	CCONJ	cc	_	3	cc	_	_
3	saben	saber	VERB	vmip3p0	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	diferentes	diferente	ADJ	aq0cp0	Number=Plur	3	advmod	_	Ortho=diferente
5	los	el	DET	da0mp0	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	6	det	_	_
6	huevos	huevo	NOUN	ncmp000	Gender=Masc|Number=Plur	3	obj	_	_
7	de	de	ADP	sps00	_	9	case	_	_
8	las	el	DET	da0fp0	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	9	det	_	_
9	gallinas	gallina	NOUN	ncfp000	Gender=Fem|Number=Plur	6	nmod	_	_
10	de	de	ADP	sps00	_	11	case	_	_
11	casa	casa	NOUN	ncfs000	Gender=Fem|Number=Sing	9	nmod	_	SpaceAfter=No
12	?	?	PUNCT	fit	PunctSide=Fin|PunctType=Qest	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nmod	color:blue
1	a	a	ADP	sps00	_	3	case	_	_
2	mí	yo	PRON	pp1cso00	Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	3	nmod	_	_
3	manera	manera	NOUN	ncfs000	Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
4	,	,	PUNCT	fc	PunctType=Comm	5	punct	_	_
5	No	no	ADV	rn	Polarity=Neg	3	advmod	_	SpaceAfter=No
6	.	.	PUNCT	fp	PunctType=Peri	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 nmod	color:blue
1	Tos	todo	DET	di0mp0	Gender=Masc|Number=Plur|PronType=Tot	3	det	_	Ortho=Todos
2	los	el	DET	da0mp0	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	3	det	_	_
3	carros	carro	NOUN	ncmp000	Gender=Masc|Number=Plur	7	obj	_	_
4	de	de	ADP	sps00	_	5	case	_	_
5	Lorquí	Lorquí	PROPN	np00000	_	3	nmod	_	_
6	los	él	PRON	da0mp0	Case=Acc|Gender=Masc|Number=Plur|Person=3|PrepCase=Npr|PronType=Prs	7	obj	_	_
7	metían	meter	VERB	vmii3p0	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
8	a	a	ADP	sps00	_	10	case	_	_
9	la	el	DET	da0fs0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
10	plaza	plaza	NOUN	ncfs000	Gender=Fem|Number=Sing	7	obl	_	SpaceAfter=No
11	.	.	PUNCT	fp	PunctType=Peri	7	punct	_	_

~~~


