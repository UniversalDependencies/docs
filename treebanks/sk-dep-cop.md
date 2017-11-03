---
layout: base
title:  'Statistics of cop in UD_Slovak'
udver: '2'
---

## Treebank Statistics: UD_Slovak: Relations: `cop`

This relation is universal.

1587 nodes (1%) are attached to their parents as `cop`.

1336 instances of `cop` (84%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.95400126023945.

The following 10 pairs of parts of speech are connected with `cop`: <tt><a href="sk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sk-pos-AUX.html">AUX</a></tt> (741; 47% instances), <tt><a href="sk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sk-pos-AUX.html">AUX</a></tt> (724; 46% instances), <tt><a href="sk-pos-NUM.html">NUM</a></tt>-<tt><a href="sk-pos-AUX.html">AUX</a></tt> (37; 2% instances), <tt><a href="sk-pos-DET.html">DET</a></tt>-<tt><a href="sk-pos-AUX.html">AUX</a></tt> (31; 2% instances), <tt><a href="sk-pos-PRON.html">PRON</a></tt>-<tt><a href="sk-pos-AUX.html">AUX</a></tt> (24; 2% instances), <tt><a href="sk-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sk-pos-AUX.html">AUX</a></tt> (19; 1% instances), <tt><a href="sk-pos-ADV.html">ADV</a></tt>-<tt><a href="sk-pos-AUX.html">AUX</a></tt> (8; 1% instances), <tt><a href="sk-pos-PART.html">PART</a></tt>-<tt><a href="sk-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="sk-pos-PRON.html">PRON</a></tt>-<tt><a href="sk-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="sk-pos-X.html">X</a></tt>-<tt><a href="sk-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 cop	color:blue
1	Prvou	prvý	ADJ	NAfs7	Case=Ins|Gender=Fem|Number=Sing|NumType=Ord	3	amod	_	_
2	Kimovou	kimov	ADJ	AFfs7x:r	Case=Ins|Degree=Pos|Gender=Fem|Number=Sing	3	amod	_	_
3	zástavkou	zástavka	NOUN	SSfs7	Case=Ins|Gender=Fem|Number=Sing	0	root	_	_
4	je	byť	AUX	VKesc+	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	3	cop	_	_
5	centrum	centrum	NOUN	SSns1	Case=Nom|Gender=Neut|Number=Sing	3	nsubj	_	_
6	čínskeho	čínsky	ADJ	AAis2x	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	7	amod	_	_
7	biznisu	biznis	NOUN	SSis2	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	5	nmod	_	_
8	-	-	PUNCT	ZIP	_	9	punct	_	_
9	Šanghaj	šanghaj	PROPN	SSis1:r	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	5	appos	_	SpaceAfter=No
10	.	.	PUNCT	ZIP	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 cop	color:blue
1	Po	po	ADP	Eu6	AdpType=Prep|Case=Loc	2	case	_	_
2	Silvestri	silvester	PROPN	SSis6:r	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	4	obl	_	_
3	sú	byť	AUX	VKepc+	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	4	cop	_	_
4	zničení	zničený	ADJ	AAmp1x	Animacy=Anim|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	0	root	_	_
5	aj	aj	CCONJ	O	_	6	cc	_	_
6	ľudia	človek	NOUN	SSmp1	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	4	nsubj	_	SpaceAfter=No
7	,	,	PUNCT	ZIP	_	9	punct	_	_
8	aj	aj	CCONJ	O	_	9	cc	_	_
9	zvieratá	zviera	NOUN	SSnp1	Case=Nom|Gender=Neut|Number=Plur	6	conj	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 cop	color:blue
1	Jeho	jeho	DET	PUip1	Animacy=Inan|Case=Nom|Gender=Masc|Gender[psor]=Masc,Neut|Number=Plur|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	2	det	_	_
2	preklady	preklad	NOUN	SSip1	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	4	nsubj	_	_
3	sú	byť	AUX	VKepc+	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	4	cop	_	_
4	jedny	jeden	NUM	NFip1	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	0	root	_	_
5	z	z	ADP	Eu2	AdpType=Prep|Case=Gen	6	case	_	_
6	najlepších	dobrý	ADJ	AAip2z	Animacy=Inan|Case=Gen|Degree=Sup|Gender=Masc|Number=Plur	4	amod	_	SpaceAfter=No
7	.	.	PUNCT	Z	_	4	punct	_	_

~~~


