---
layout: base
title:  'Statistics of nummod in UD_Dutch-Alpino'
udver: '2'
---

## Treebank Statistics: UD_Dutch-Alpino: Relations: `nummod`

This relation is universal.

1761 nodes (1%) are attached to their parents as `nummod`.

1608 instances of `nummod` (91%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.32935831913685.

The following 9 pairs of parts of speech are connected with `nummod`: <tt><a href="nl_alpino-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nl_alpino-pos-NUM.html">NUM</a></tt> (1581; 90% instances), <tt><a href="nl_alpino-pos-PROPN.html">PROPN</a></tt>-<tt><a href="nl_alpino-pos-NUM.html">NUM</a></tt> (84; 5% instances), <tt><a href="nl_alpino-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl_alpino-pos-NUM.html">NUM</a></tt> (32; 2% instances), <tt><a href="nl_alpino-pos-ADV.html">ADV</a></tt>-<tt><a href="nl_alpino-pos-NUM.html">NUM</a></tt> (21; 1% instances), <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-NUM.html">NUM</a></tt> (17; 1% instances), <tt><a href="nl_alpino-pos-X.html">X</a></tt>-<tt><a href="nl_alpino-pos-NUM.html">NUM</a></tt> (11; 1% instances), <tt><a href="nl_alpino-pos-SYM.html">SYM</a></tt>-<tt><a href="nl_alpino-pos-NUM.html">NUM</a></tt> (7; 0% instances), <tt><a href="nl_alpino-pos-NUM.html">NUM</a></tt>-<tt><a href="nl_alpino-pos-NUM.html">NUM</a></tt> (6; 0% instances), <tt><a href="nl_alpino-pos-PRON.html">PRON</a></tt>-<tt><a href="nl_alpino-pos-NUM.html">NUM</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nummod	color:blue
1	Twee	twee	NUM	TW|hoofd|nom|zonder-n|basis	_	6	nsubj	6:nsubj	_
2	van	van	ADP	VZ|init	_	5	case	5:case	_
3	de	de	DET	LID|bep|stan|rest	Definite=Def	5	det	5:det	_
4	drie	drie	NUM	TW|hoofd|prenom|stan	_	5	nummod	5:nummod	_
5	hindernissen	hindernis	NOUN	N|soort|mv|basis	Number=Plur	1	nmod	1:nmod:van	_
6	verloren	verliezen	VERB	WW|pv|verl|mv	Number=Plur|Tense=Past|VerbForm=Fin	0	root	0:root	_
7	hun	hun	PRON	VNW|bez|det|stan|vol|3|mv|prenom|zonder|agr	Person=3|PronType=Prs	8	nmod:poss	8:nmod:poss	_
8	balken	balk	NOUN	N|soort|mv|basis	Number=Plur	6	obj	6:obj	SpaceAfter=No
9	.	.	PUNCT	LET	_	6	punct	6:punct	_

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


