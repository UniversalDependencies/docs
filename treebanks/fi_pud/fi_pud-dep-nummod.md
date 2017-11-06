---
layout: base
title:  'Statistics of nummod in UD_Finnish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Finnish-PUD: Relations: `nummod`

This relation is universal.

360 nodes (2%) are attached to their parents as `nummod`.

235 instances of `nummod` (65%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.2.

The following 10 pairs of parts of speech are connected with `nummod`: <tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_pud-pos-NUM.html">NUM</a></tt> (283; 79% instances), <tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_pud-pos-ADJ.html">ADJ</a></tt> (50; 14% instances), <tt><a href="fi_pud-pos-SYM.html">SYM</a></tt>-<tt><a href="fi_pud-pos-NUM.html">NUM</a></tt> (14; 4% instances), <tt><a href="fi_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_pud-pos-NUM.html">NUM</a></tt> (5; 1% instances), <tt><a href="fi_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="fi_pud-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_pud-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_pud-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="fi_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_pud-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="fi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_pud-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nummod	color:blue
1	5000	5000	NUM	_	NumType=Card	2	nummod	_	_
2	dollaria	dollari	NOUN	_	Case=Par|Number=Sing	7	nsubj:cop	_	_
3	henkeä	henki	NOUN	_	Case=Par|Number=Sing	2	nmod	_	_
4	kohden	kohden	ADP	_	AdpType=Post	3	case	_	_
5	on	olla	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	_	_
6	sallittu	sallittu	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	7	amod	_	_
7	maksimimäärä	maksimi#määrä	NOUN	_	Case=Nom|Number=Sing	0	root	_	SpaceAfter=No
8	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nummod	color:blue
1	Kolmantena	kolmas	ADJ	_	Case=Ess|Number=Sing|NumType=Ord	2	nummod	_	_
2	päivänä	päivä	NOUN	_	Case=Ess|Number=Sing	4	obl	_	_
3	olin	olla	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	4	aux	_	_
4	palannut	palata	VERB	_	Case=Nom|Degree=Pos|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Act	0	root	_	_
5	EMicron	EMicro	PROPN	_	Case=Gen|Number=Sing	4	obl	_	_
6	pariin	pariin	ADP	_	AdpType=Post	5	case	_	SpaceAfter=No
7	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nummod	color:blue
1	80	80	NUM	_	NumType=Card	2	nummod	_	_
2	%	%	SYM	_	_	7	nsubj	_	_
3	Milanon	Milano	PROPN	_	Case=Gen|Number=Sing	4	nmod:poss	_	_
4	kaltaisten	kaltainen	ADJ	_	Case=Gen|Degree=Pos|Derivation=Inen|Number=Plur	5	amod	_	_
5	kaupunkien	kaupunki	NOUN	_	Case=Gen|Number=Plur	6	nmod:poss	_	_
6	vedentarpeesta	veden#tarve	NOUN	_	Case=Ela|Number=Sing	2	nmod	_	_
7	täyttyy	täyttyä	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
8	Alppien	Alpit	PROPN	_	Case=Gen|Number=Plur	9	nmod:poss	_	_
9	valumasta	valuma	NOUN	_	Case=Ela|Number=Sing	7	obl	_	SpaceAfter=No
10	.	.	PUNCT	_	_	7	punct	_	_

~~~


