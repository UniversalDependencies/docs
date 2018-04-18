---
layout: base
title:  'Statistics of root in UD_Croatian'
udver: '2'
---

## Treebank Statistics: UD_Croatian: Relations: `root`

This relation is universal.

8889 nodes (5%) are attached to their parents as `root`.

8889 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.66857914276072.

The following 13 pairs of parts of speech are connected with `root`: -<tt><a href="hr-pos-VERB.html">VERB</a></tt> (6212; 70% instances), -<tt><a href="hr-pos-ADJ.html">ADJ</a></tt> (1320; 15% instances), -<tt><a href="hr-pos-NOUN.html">NOUN</a></tt> (964; 11% instances), -<tt><a href="hr-pos-AUX.html">AUX</a></tt> (133; 1% instances), -<tt><a href="hr-pos-ADV.html">ADV</a></tt> (117; 1% instances), -<tt><a href="hr-pos-PROPN.html">PROPN</a></tt> (51; 1% instances), -<tt><a href="hr-pos-DET.html">DET</a></tt> (33; 0% instances), -<tt><a href="hr-pos-PRON.html">PRON</a></tt> (29; 0% instances), -<tt><a href="hr-pos-NUM.html">NUM</a></tt> (11; 0% instances), -<tt><a href="hr-pos-PART.html">PART</a></tt> (10; 0% instances), -<tt><a href="hr-pos-ADP.html">ADP</a></tt> (6; 0% instances), -<tt><a href="hr-pos-SCONJ.html">SCONJ</a></tt> (2; 0% instances), -<tt><a href="hr-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 3 root	color:blue
1	Bugarska	Bugarska	PROPN	_	Case=Nom|Gender=Fem|Number=Sing	2	amod	_	_
2	vojska	vojska	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	3	nsubj	_	_
3	pomaže	pomagati	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	u	u	ADP	_	Case=Loc	5	case	_	_
5	raščišćavanju	raščišćavanje	NOUN	_	Case=Loc|Gender=Neut|Number=Sing	3	obl	_	_
6	štete	šteta	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	5	nmod	_	_
7	prouzročene	prouzročiti	ADJ	_	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|VerbForm=Part	6	acl	_	_
8	poplavama	poplava	NOUN	_	Case=Ins|Gender=Fem|Number=Plur	7	obl	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 6 root	color:blue
1	Do	do	ADP	_	Case=Gen	2	case	_	_
2	sada	sada	ADV	_	Degree=Pos|PronType=Dem	6	advmod	_	_
3	je	biti	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux:pass	_	_
4	takav	takav	DET	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	5	det	_	_
5	tim	tim	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	6	nsubj:pass	_	_
6	ustrojen	ustrojiti	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	_
7	u	u	ADP	_	Case=Loc	8	case	_	_
8	Federaciji	federacija	NOUN	_	Case=Loc|Gender=Fem|Number=Sing	6	obl	_	_
9	BiH	BiH	PROPN	_	Case=Gen|Gender=Fem|Number=Sing	8	nmod	_	SpaceAfter=No
10	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 5 root	color:blue
1	"	"	PUNCT	_	_	5	punct	_	SpaceAfter=No
2	Ipak	ipak	ADV	_	Degree=Pos	5	discourse	_	SpaceAfter=No
3	,	,	PUNCT	_	_	2	punct	_	_
4	na	na	ADP	_	Case=Loc	5	case	_	_
5	popisu	popis	NOUN	_	Case=Loc|Gender=Masc|Number=Sing	0	root	_	_
6	je	biti	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
7	skoro	skoro	ADV	_	Degree=Pos	8	advmod	_	_
8	40	40	NUM	_	NumType=Card	9	nummod	_	_
9	kandidata	kandidat	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	5	nsubj	_	SpaceAfter=No
10	,	,	PUNCT	_	_	15	punct	_	_
11	a	a	CCONJ	_	_	15	cc	_	_
12	većina	većina	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	15	nsubj	_	_
13	ih	oni	PRON	_	Case=Gen|Number=Plur|Person=3|PronType=Prs	12	nmod	_	_
14	je	biti	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	15	cop	_	_
15	novih	nov	ADJ	_	Case=Gen|Degree=Pos|Gender=Masc|Number=Plur	5	conj	_	SpaceAfter=No
16	.	.	PUNCT	_	_	5	punct	_	_

~~~


