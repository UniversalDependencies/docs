---
layout: base
title:  'Statistics of cop in UD_Swedish'
udver: '2'
---

## Treebank Statistics: UD_Swedish: Relations: `cop`

This relation is universal.

1619 nodes (2%) are attached to their parents as `cop`.

1456 instances of `cop` (90%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.33353922174182.

The following 9 pairs of parts of speech are connected with `cop`: <tt><a href="sv-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv-pos-AUX.html">AUX</a></tt> (958; 59% instances), <tt><a href="sv-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv-pos-AUX.html">AUX</a></tt> (562; 35% instances), <tt><a href="sv-pos-PRON.html">PRON</a></tt>-<tt><a href="sv-pos-AUX.html">AUX</a></tt> (61; 4% instances), <tt><a href="sv-pos-ADV.html">ADV</a></tt>-<tt><a href="sv-pos-AUX.html">AUX</a></tt> (13; 1% instances), <tt><a href="sv-pos-NUM.html">NUM</a></tt>-<tt><a href="sv-pos-AUX.html">AUX</a></tt> (10; 1% instances), <tt><a href="sv-pos-ADP.html">ADP</a></tt>-<tt><a href="sv-pos-AUX.html">AUX</a></tt> (7; 0% instances), <tt><a href="sv-pos-DET.html">DET</a></tt>-<tt><a href="sv-pos-AUX.html">AUX</a></tt> (3; 0% instances), <tt><a href="sv-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv-pos-AUX.html">AUX</a></tt> (3; 0% instances), <tt><a href="sv-pos-VERB.html">VERB</a></tt>-<tt><a href="sv-pos-AUX.html">AUX</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 cop	color:blue
1	Man	man	PRON	PN|UTR|SIN|IND|SUB	Case=Nom|Definite=Ind|Gender=Com|Number=Sing|PronType=Ind	2	nsubj	_	_
2	har	ha	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	anledning	anledning	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	2	obj	_	_
4	att	att	PART	IE	_	6	mark	_	_
5	vara	vara	AUX	VB|INF|AKT	VerbForm=Inf|Voice=Act	6	cop	_	_
6	pessimistisk	pessimistisk	ADJ	JJ|POS|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	3	acl	_	SpaceAfter=No
7	.	.	PUNCT	MAD	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 7 cop	color:blue
1	Sakta	sakta	ADJ	JJ|POS|UTR/NEU|SIN/PLU|IND/DEF|NOM	Case=Nom|Degree=Pos	10	nsubj	_	_
2	och	och	CCONJ	KN	_	6	cc	_	_
3	kanske	kanske	ADV	AB	_	6	advmod	_	_
4	rent	ren	ADV	AB|POS	Degree=Pos	6	advmod	_	_
5	av	av	ADP	PP	_	4	fixed	_	_
6	avsaktande	avsaktande	ADJ	JJ|POS|UTR/NEU|SIN/PLU|IND/DEF|NOM	Case=Nom|Degree=Pos	1	conj	_	_
7	är	vara	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	10	cop	_	_
8	det	en	DET	DT|NEU|SIN|DEF	Definite=Def|Gender=Neut|Number=Sing|PronType=Art	10	det	_	_
9	rätta	rätt	ADJ	JJ|POS|UTR/NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Degree=Pos|Number=Sing	10	amod	_	_
10	ordet	ord	NOUN	NN|NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Neut|Number=Sing	0	root	_	SpaceAfter=No
11	.	.	PUNCT	MAD	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 cop	color:blue
1	Annat	annan	PRON	PN|NEU|SIN|IND|SUB/OBJ	Definite=Ind|Gender=Neut|Number=Sing|PronType=Ind	0	root	_	_
2	var	vara	AUX	VB|PRT|AKT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	1	cop	_	_
3	det	den	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	1	nsubj	_	_
4	i	i	ADP	PP	_	5	case	_	_
5	bondesamhället	bondesamhälle	NOUN	NN|NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Neut|Number=Sing	1	obl	_	SpaceAfter=No
6	.	.	PUNCT	MAD	_	1	punct	_	_

~~~


