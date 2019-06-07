---
layout: base
title:  'Statistics of nummod in UD_Finnish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Finnish-PUD: Relations: `nummod`

This relation is universal.

311 nodes (2%) are attached to their parents as `nummod`.

187 instances of `nummod` (60%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.16720257234727.

The following 4 pairs of parts of speech are connected with `nummod`: <tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_pud-pos-NUM.html">NUM</a></tt> (291; 94% instances), <tt><a href="fi_pud-pos-SYM.html">SYM</a></tt>-<tt><a href="fi_pud-pos-NUM.html">NUM</a></tt> (14; 5% instances), <tt><a href="fi_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_pud-pos-NUM.html">NUM</a></tt> (5; 2% instances), <tt><a href="fi_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_pud-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nummod	color:blue
1	5000	5000	NUM	_	NumType=Card	2	nummod	2:nummod	_
2	dollaria	dollari	NOUN	_	Case=Par|Number=Sing	7	nsubj:cop	7:nsubj:cop	_
3	henkeä	henki	NOUN	_	Case=Par|Number=Sing	2	nmod	2:nmod	_
4	kohden	kohden	ADP	_	AdpType=Post	3	case	3:case	_
5	on	olla	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	7:cop	_
6	sallittu	sallittu	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	7	amod	7:amod	_
7	maksimimäärä	maksimi#määrä	NOUN	_	Case=Nom|Number=Sing	0	root	0:root	SpaceAfter=No
8	.	.	PUNCT	_	_	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nummod	color:blue
1	80	80	NUM	_	NumType=Card	2	nummod	2:nummod	_
2	%	%	SYM	_	_	7	nsubj	7:nsubj	_
3	Milanon	Milano	PROPN	_	Case=Gen|Number=Sing	4	nmod:poss	4:nmod:poss	_
4	kaltaisten	kaltainen	ADJ	_	Case=Gen|Degree=Pos|Derivation=Inen|Number=Plur	5	amod	5:amod	_
5	kaupunkien	kaupunki	NOUN	_	Case=Gen|Number=Plur	6	nmod:poss	6:nmod:poss	_
6	vedentarpeesta	veden#tarve	NOUN	_	Case=Ela|Number=Sing	2	nmod	2:nmod	_
7	täyttyy	täyttyä	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
8	Alppien	Alpit	PROPN	_	Case=Gen|Number=Plur	9	nmod:poss	9:nmod:poss	_
9	valumasta	valuma	NOUN	_	Case=Ela|Number=Sing	7	obl	7:obl	SpaceAfter=No
10	.	.	PUNCT	_	_	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nummod	color:blue
1	”	”	PUNCT	_	_	4	punct	4:punct	SpaceAfter=No
2	Pelkästään	pelkästään	ADV	_	_	3	advmod	3:advmod	_
3	kulkueessa	kulkue	NOUN	_	Case=Ine|Number=Sing	4	obl	4:obl	_
4	työskentelee	työskennellä	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
5	1200	1200	NUM	_	NumType=Card	6	nummod	6:nummod	_
6	vapaaehtoista	vapaa#ehtoinen	ADJ	_	Case=Par|Degree=Pos|Derivation=Inen|Number=Sing	4	nsubj	4:nsubj	SpaceAfter=No
7	”	”	PUNCT	_	_	4	punct	4:punct	SpaceAfter=No
8	,	,	PUNCT	_	_	11	punct	11:punct	_
9	González	González	PROPN	_	Case=Nom|Number=Sing	11	nsubj	11:nsubj	_
10	Anaya	Anaya	PROPN	_	Case=Nom|Number=Sing	9	flat:name	9:flat:name	_
11	sanoo	sanoa	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	parataxis	4:parataxis	SpaceAfter=No
12	.	.	PUNCT	_	_	4	punct	4:punct	_

~~~


