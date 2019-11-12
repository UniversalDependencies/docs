---
layout: base
title:  'Statistics of nummod in UD_Dutch-Alpino'
udver: '2'
---

## Treebank Statistics: UD_Dutch-Alpino: Relations: `nummod`

This relation is universal.

1899 nodes (1%) are attached to their parents as `nummod`.

1743 instances of `nummod` (92%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.3522906793049.

The following 10 pairs of parts of speech are connected with `nummod`: <tt><a href="nl_alpino-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nl_alpino-pos-NUM.html">NUM</a></tt> (1706; 90% instances), <tt><a href="nl_alpino-pos-PROPN.html">PROPN</a></tt>-<tt><a href="nl_alpino-pos-NUM.html">NUM</a></tt> (84; 4% instances), <tt><a href="nl_alpino-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl_alpino-pos-NUM.html">NUM</a></tt> (39; 2% instances), <tt><a href="nl_alpino-pos-ADV.html">ADV</a></tt>-<tt><a href="nl_alpino-pos-NUM.html">NUM</a></tt> (21; 1% instances), <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-NUM.html">NUM</a></tt> (21; 1% instances), <tt><a href="nl_alpino-pos-X.html">X</a></tt>-<tt><a href="nl_alpino-pos-NUM.html">NUM</a></tt> (11; 1% instances), <tt><a href="nl_alpino-pos-SYM.html">SYM</a></tt>-<tt><a href="nl_alpino-pos-NUM.html">NUM</a></tt> (7; 0% instances), <tt><a href="nl_alpino-pos-NUM.html">NUM</a></tt>-<tt><a href="nl_alpino-pos-NUM.html">NUM</a></tt> (6; 0% instances), <tt><a href="nl_alpino-pos-PRON.html">PRON</a></tt>-<tt><a href="nl_alpino-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="nl_alpino-pos-ADP.html">ADP</a></tt>-<tt><a href="nl_alpino-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nummod	color:blue
1	Van	van	ADP	VZ|init	_	5	case	5:case	_
2	meer	veel	PRON	VNW|onbep|grad|stan|vrij|zonder|comp	PronType=Ind	4	amod	4:amod	_
3	dan	dan	SCONJ	VG|onder	_	2	fixed	2:fixed	_
4	twee	twee	NUM	TW|hoofd|prenom|stan	_	5	nummod	5:nummod	_
5	grastoernooien	grastoernooi	NOUN	N|soort|mv|basis	Number=Plur	8	obl	8:obl:van	_
6	op	op	ADP	VZ|init	_	7	case	7:case	_
7	rij	rij	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	5	nmod	5:nmod:op	_
8	wordt	worden	VERB	WW|pv|tgw|met-t	Number=Sing|Tense=Pres|VerbForm=Fin	0	root	0:root	_
9	hij	hij	PRON	VNW|pers|pron|nomin|vol|3|ev|masc	Case=Nom|Person=3|PronType=Prs	8	nsubj	8:nsubj	_
10	te	te	ADV	BW	_	11	advmod	11:advmod	_
11	moe	moe	ADJ	ADJ|vrij|basis|zonder	Degree=Pos	8	xcomp	8:xcomp	SpaceAfter=No
12	.	.	PUNCT	LET	_	8	punct	8:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nummod	color:blue
1	Vier	vier	NUM	TW|hoofd|prenom|stan	_	3	nummod	3:nummod	_
2	jonge	jong	ADJ	ADJ|prenom|basis|met-e|stan	Degree=Pos	3	amod	3:amod	_
3	Rotterdammers	Rotterdammer	PROPN	N|eigen|mv|basis	Number=Plur	4	nsubj	4:nsubj	_
4	willen	willen	VERB	WW|pv|tgw|mv	Number=Plur|Tense=Pres|VerbForm=Fin	0	root	0:root	_
5	deze	deze	DET	VNW|aanw|det|stan|prenom|met-e|rest	_	6	det	6:det	_
6	zomer	zomer	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	4	obl	4:obl	_
7	per	per	ADP	VZ|init	_	8	case	8:case	_
8	auto	auto	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	4	obl	4:obl:per	_
9	naar	naar	ADP	VZ|init	_	10	case	10:case	_
10	Japan	Japan	PROPN	N|eigen|ev|basis|onz|stan	Gender=Neut|Number=Sing	4	obl	4:obl:naar	SpaceAfter=No
11	.	.	PUNCT	LET	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nummod	color:blue
1	De	de	DET	LID|bep|stan|rest	Definite=Def	3	det	3:det	_
2	twee	twee	NUM	TW|hoofd|prenom|stan	_	3	nummod	3:nummod	_
3	anderen	ander	ADJ	ADJ|nom|basis|met-e|mv-n	Degree=Pos	4	nsubj	4:nsubj	_
4	stegen	stijgen	VERB	WW|pv|verl|mv	Number=Plur|Tense=Past|VerbForm=Fin	0	root	0:root	_
5	boven	boven	ADP	VZ|init	_	6	case	6:case	_
6	zichzelf	zichzelf	PRON	VNW|refl|pron|obl|nadr|3|getal	Case=Acc|Person=3|PronType=Prs|Reflex=Yes	4	obl	4:obl:boven	_
7	uit	uit	ADP	VZ|fin	_	4	compound:prt	4:compound:prt	SpaceAfter=No
8	.	.	PUNCT	LET	_	4	punct	4:punct	_

~~~


