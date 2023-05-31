---
layout: base
title:  'Statistics of goeswith in UD_Serbian'
udver: '2'
---

## Treebank Statistics: UD_Serbian: Relations: `goeswith`

This relation is universal.

19 nodes (0%) are attached to their parents as `goeswith`.

13 instances of `goeswith` (68%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 8 pairs of parts of speech are connected with `goeswith`: <tt><a href="sr-pos-ADV.html">ADV</a></tt>-<tt><a href="sr-pos-ADP.html">ADP</a></tt> (8; 42% instances), <tt><a href="sr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr-pos-NOUN.html">NOUN</a></tt> (2; 11% instances), <tt><a href="sr-pos-NUM.html">NUM</a></tt>-<tt><a href="sr-pos-PUNCT.html">PUNCT</a></tt> (2; 11% instances), <tt><a href="sr-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sr-pos-PROPN.html">PROPN</a></tt> (2; 11% instances), <tt><a href="sr-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="sr-pos-SCONJ.html">SCONJ</a></tt> (2; 11% instances), <tt><a href="sr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sr-pos-ADV.html">ADV</a></tt> (1; 5% instances), <tt><a href="sr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sr-pos-NOUN.html">NOUN</a></tt> (1; 5% instances), <tt><a href="sr-pos-ADP.html">ADP</a></tt>-<tt><a href="sr-pos-NOUN.html">NOUN</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 goeswith	color:blue
1	To	taj	PRON	_	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	5	nsubj	_	_
2	je	biti	AUX	_	Number=Sing|Person=3|Tense=Pres	5	aux	_	_
3	bilo	biti	AUX	_	Gender=Neut|Number=Sing|VerbForm=Part	5	cop	_	_
4	najgore	zlo	ADJ	_	Case=Nom|Definite=Def|Degree=Sup|Gender=Neut|Number=Sing	5	amod	_	_
5	nasilje	nasilje	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	0	root	_	_
6	od	od	ADP	_	Case=Gen	7	goeswith	_	_
7	kada	kada	ADV	_	Degree=Pos	10	mark	_	_
8	je	biti	AUX	_	Number=Sing|Person=3|Tense=Pres	10	aux	_	_
9	Kosovo	Kosovo	PROPN	_	Case=Nom|Gender=Neut|Number=Sing	10	nsubj	_	_
10	proglasilo	proglasiti	VERB	_	Gender=Neut|Number=Sing|VerbForm=Part	5	advcl	_	_
11	nezavisnost	nezavisnost	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	10	obj	_	_
12	pre	pre	ADP	_	Case=Gen	14	case	_	_
13	četiri	četiri	NUM	_	NumType=Card	14	nummod	_	_
14	nedelje	nedelja	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	10	obl	_	SpaceAfter=No
15	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 goeswith	color:blue
1	Video	video	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	19	nsubj	_	_
2	spotovi	spot	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	1	goeswith	_	_
3	sa	sa	ADP	_	Case=Ins	5	case	_	_
4	sličnom	sličan	ADJ	_	Case=Ins|Definite=Def|Degree=Pos|Gender=Fem|Number=Sing	5	amod	_	_
5	porukom	poruka	NOUN	_	Case=Ins|Gender=Fem|Number=Sing	1	nmod	_	SpaceAfter=No
6	,	,	PUNCT	_	_	10	punct	_	_
7	u	u	ADP	_	Case=Loc	8	case	_	_
8	kojima	koji	PRON	_	Case=Loc|Gender=Masc|Number=Plur|PronType=Ind	10	obl	_	_
9	se	sebe	PRON	_	Case=Acc|Number=Sing|Reflex=Yes	10	compound	_	_
10	pojavljuju	pojavljivati	VERB	_	Number=Plur|Person=3|Tense=Pres	1	acl	_	_
11	glumci	glumac	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	10	nsubj	_	_
12	i	i	CCONJ	_	_	15	cc	_	_
13	druge	drugi	NUM	_	Case=Acc|Gender=Fem|Number=Plur|NumType=Ord	15	amod	_	_
14	poznate	poznat	ADJ	_	Case=Acc|Definite=Def|Degree=Pos|Gender=Fem|Number=Plur	15	amod	_	_
15	osobe	osoba	NOUN	_	Case=Acc|Gender=Fem|Number=Plur	11	conj	_	SpaceAfter=No
16	,	,	PUNCT	_	_	10	punct	_	_
17	redovno	redovno	ADV	_	Degree=Pos	19	advmod	_	_
18	se	sebe	PRON	_	Case=Acc|Number=Sing|Reflex=Yes	19	compound	_	_
19	emituju	emitovati	VERB	_	Number=Plur|Person=3|Tense=Pres	0	root	_	_
20	na	na	ADP	_	Case=Loc	21	case	_	_
21	televiziji	televizija	NOUN	_	Case=Loc|Gender=Fem|Number=Sing	19	obl	_	SpaceAfter=No
22	.	.	PUNCT	_	_	19	punct	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 19 goeswith	color:blue
1	Džavdžav	Džavdžav	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	3	nsubj	_	_
2	takođe	takođe	PRON	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Ind	3	obj	_	_
3	tvrdi	tvrditi	VERB	_	Number=Sing|Person=3|Tense=Pres	0	root	_	_
4	da	da	SCONJ	_	_	10	mark	_	_
5	su	biti	AUX	_	Number=Plur|Person=3|Tense=Pres	10	aux	_	_
6	dva	dva	NUM	_	NumType=Card	7	nummod	_	_
7	igrača	igrač	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	10	nsubj	_	_
8	Gendžlerbirligija	Gendžlerbirligi	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	7	nmod	_	_
9	bila	biti	AUX	_	Gender=Fem|Number=Sing|VerbForm=Part	10	aux	_	_
10	umešana	umešati	ADJ	_	Case=Nom|Definite=Def|Degree=Pos|Gender=Fem|Number=Sing|VerbForm=Part	3	ccomp	_	_
11	u	u	ADP	_	Case=Acc	12	case	_	_
12	nameštanje	nameštanje	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	10	obl	_	_
13	utakmica	utakmica	NOUN	_	Case=Gen|Gender=Fem|Number=Plur	12	obl	_	_
14	tokom	tokom	ADP	_	Case=Gen	15	case	_	_
15	sezone	sezona	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	10	obl	_	_
16	'	'	PUNCT	_	_	17	goeswith	_	SpaceAfter=No
17	85	85	NUM	_	NumType=Card	15	nummod	_	_
18	-	-	PUNCT	_	_	17	flat	_	SpaceAfter=No
19	'	'	PUNCT	_	_	20	goeswith	_	_
20	86.	86.	NUM	_	NumType=Ord	17	flat	_	_

~~~


