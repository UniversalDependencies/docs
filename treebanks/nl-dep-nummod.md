---
layout: base
title:  'Statistics of nummod in UD_Dutch'
udver: '2'
---

## Treebank Statistics: UD_Dutch: Relations: `nummod`

This relation is universal.

1967 nodes (1%) are attached to their parents as `nummod`.

1589 instances of `nummod` (81%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.53431621759024.

The following 8 pairs of parts of speech are connected with `nummod`: <tt><a href="nl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nl-pos-NUM.html">NUM</a></tt> (1750; 89% instances), <tt><a href="nl-pos-PROPN.html">PROPN</a></tt>-<tt><a href="nl-pos-NUM.html">NUM</a></tt> (138; 7% instances), <tt><a href="nl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl-pos-NUM.html">NUM</a></tt> (25; 1% instances), <tt><a href="nl-pos-PRON.html">PRON</a></tt>-<tt><a href="nl-pos-NUM.html">NUM</a></tt> (21; 1% instances), <tt><a href="nl-pos-ADV.html">ADV</a></tt>-<tt><a href="nl-pos-NUM.html">NUM</a></tt> (17; 1% instances), <tt><a href="nl-pos-VERB.html">VERB</a></tt>-<tt><a href="nl-pos-NUM.html">NUM</a></tt> (11; 1% instances), <tt><a href="nl-pos-X.html">X</a></tt>-<tt><a href="nl-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="nl-pos-SYM.html">SYM</a></tt>-<tt><a href="nl-pos-NUM.html">NUM</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nummod	color:blue
1	Twee	twee	NUM	Num|hoofd|bep|zelfst|onverv	Definite=Def|NumType=Card	6	nsubj	_	_
2	van	van	ADP	Prep|voor	AdpType=Prep	5	case	_	_
3	de	de	DET	Art|bep|zijdofmv|neut	Definite=Def|PronType=Art	5	det	_	_
4	drie	drie	NUM	Num|hoofd|bep|attr|onverv	Definite=Def|NumType=Card	5	nummod	_	_
5	hindernissen	hindernis	NOUN	N|soort|mv|neut	Number=Plur	1	obl	_	_
6	verloren	verlies	VERB	V|trans|verldw|onverv	Subcat=Tran|Tense=Past|VerbForm=Part	0	root	_	_
7	hun	hun	PRON	Pron|bez|3|mv|neut|attr	Number=Plur|Person=3|Poss=Yes|PronType=Prs	8	nmod	_	_
8	balken	balk	NOUN	N|soort|mv|neut	Number=Plur	6	obj	_	SpaceAfter=No
9	.	.	PUNCT	Punc|punt	PunctType=Peri	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nummod	color:blue
1	BASISTAKENPAKKET	basis_taken_pakket	ADP	Prep|voor	AdpType=Prep	0	root	_	_
2	JEUGDGEZONDHEIDSZORG	jeugd_gezondheid_zorg	PROPN	N|eigen|ev|neut	Number=Sing	1	dep	_	_
3	0-19	0-19	NUM	Num|hoofd|bep|attr|onverv	Definite=Def|NumType=Card	4	nummod	_	_
4	JAAR	JAAR	PROPN	N|eigen|ev|neut	Number=Sing	1	dep	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nummod	color:blue
1	In	in	ADP	Prep|voor	AdpType=Prep	2	case	_	_
2	India	India	PROPN	N|eigen|ev|neut	Number=Sing	3	obl	_	_
3	werken	werk	VERB	V|intrans|ott|1of2of3|mv	Aspect=Imp|Mood=Ind|Number=Plur|Subcat=Intr|Tense=Pres|VerbForm=Fin	0	root	_	_
4	80000	80000	NUM	Num|hoofd|bep|zelfst|onverv	Definite=Def|NumType=Card	5	nummod	_	_
5	religieuzen	religieus	ADJ	Adj|zelfst|stell|vervmv	Degree=Pos|Number=Plur	3	nsubj	_	SpaceAfter=No
6	,	,	PUNCT	Punc|komma	PunctType=Comm	3	punct	_	_
7	vaak	vaak	ADV	Adv|gew|geenfunc|stell|onverv	Degree=Pos	3	dep	_	_
8	onder	onder	ADP	Prep|voor	AdpType=Prep	10	case	_	_
9	de	de	DET	Art|bep|zijdofmv|neut	Definite=Def|PronType=Art	10	det	_	_
10	allerarmsten	arm	NOUN	N|soort|mv|neut	Number=Plur	3	dep	_	SpaceAfter=No
11	.	.	PUNCT	Punc|punt	PunctType=Peri	3	punct	_	_

~~~


