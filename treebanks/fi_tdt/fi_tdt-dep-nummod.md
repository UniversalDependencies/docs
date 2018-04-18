---
layout: base
title:  'Statistics of nummod in UD_Finnish-TDT'
udver: '2'
---

## Treebank Statistics: UD_Finnish-TDT: Relations: `nummod`

This relation is universal.

3871 nodes (2%) are attached to their parents as `nummod`.

2903 instances of `nummod` (75%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.20537328855593.

The following 19 pairs of parts of speech are connected with `nummod`: <tt><a href="fi_tdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_tdt-pos-NUM.html">NUM</a></tt> (3128; 81% instances), <tt><a href="fi_tdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_tdt-pos-ADJ.html">ADJ</a></tt> (546; 14% instances), <tt><a href="fi_tdt-pos-SYM.html">SYM</a></tt>-<tt><a href="fi_tdt-pos-NUM.html">NUM</a></tt> (56; 1% instances), <tt><a href="fi_tdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_tdt-pos-NOUN.html">NOUN</a></tt> (27; 1% instances), <tt><a href="fi_tdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_tdt-pos-NUM.html">NUM</a></tt> (26; 1% instances), <tt><a href="fi_tdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_tdt-pos-NUM.html">NUM</a></tt> (25; 1% instances), <tt><a href="fi_tdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_tdt-pos-ADJ.html">ADJ</a></tt> (13; 0% instances), <tt><a href="fi_tdt-pos-ADV.html">ADV</a></tt>-<tt><a href="fi_tdt-pos-ADJ.html">ADJ</a></tt> (11; 0% instances), <tt><a href="fi_tdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_tdt-pos-PUNCT.html">PUNCT</a></tt> (9; 0% instances), <tt><a href="fi_tdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_tdt-pos-ADJ.html">ADJ</a></tt> (9; 0% instances), <tt><a href="fi_tdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_tdt-pos-SYM.html">SYM</a></tt> (4; 0% instances), <tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_tdt-pos-ADJ.html">ADJ</a></tt> (4; 0% instances), <tt><a href="fi_tdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_tdt-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="fi_tdt-pos-NUM.html">NUM</a></tt>-<tt><a href="fi_tdt-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="fi_tdt-pos-ADV.html">ADV</a></tt>-<tt><a href="fi_tdt-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="fi_tdt-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_tdt-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="fi_tdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_tdt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="fi_tdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_tdt-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_tdt-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nummod	color:blue
1	Yhdeksänkin	yhdeksän	NUM	Num	Case=Nom|Clitic=Kin|Number=Sing|NumType=Card	2	nummod	_	_
2	pinniä	pinni	NOUN	N	Case=Par|Number=Sing	4	nsubj:cop	_	_
3	on	olla	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	_	_
4	paljon	paljon	ADV	Adv	_	0	root	_	SpaceAfter=No
5	.	.	PUNCT	Punct	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nummod	color:blue
1	Toinen	toinen	ADJ	Num	Case=Nom|Derivation=Inen|Number=Sing|NumType=Ord	2	nummod	_	_
2	teema	teema	NOUN	N	Case=Nom|Number=Sing	7	nsubj:cop	_	_
3	on	olla	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	aux	_	_
4	sitten	sitten	ADV	Adv	_	7	advmod	_	_
5	ollut	olla	AUX	V	Case=Nom|Degree=Pos|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Act	7	cop	_	_
6	orastava	orastava	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	7	amod	_	_
7	juhlamekkopaniikki	juhla#mekko#paniikki	NOUN	N	Case=Nom|Number=Sing	0	root	_	SpaceAfter=No
8	.	.	PUNCT	Punct	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nummod	color:blue
1	Äänestysaktiivisuus	äänestys#aktiivisuus	NOUN	N	Case=Nom|Derivation=Vs|Number=Sing	3	nsubj:cop	_	_
2	oli	olla	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	3	cop	_	_
3	alhainen	alhainen	ADJ	A	Case=Nom|Degree=Pos|Derivation=Inen|Number=Sing	0	root	_	_
4	(	(	PUNCT	Punct	_	6	punct	_	SpaceAfter=No
5	40,3	40,3	NUM	Num	NumType=Card	6	nummod	_	_
6	%	%	SYM	Punct	_	3	appos	_	SpaceAfter=No
7	)	)	PUNCT	Punct	_	6	punct	_	SpaceAfter=No
8	.	.	PUNCT	Punct	_	3	punct	_	_

~~~


