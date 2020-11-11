---
layout: base
title:  'Statistics of case in UD_French-Spoken'
udver: '2'
---

## Treebank Statistics: UD_French-Spoken: Relations: `case`

This relation is universal.

3543 nodes (10%) are attached to their parents as `case`.

3543 instances of `case` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.68924640135478.

The following 12 pairs of parts of speech are connected with `case`: <tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_spoken-pos-ADP.html">ADP</a></tt> (2716; 77% instances), <tt><a href="fr_spoken-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_spoken-pos-ADP.html">ADP</a></tt> (425; 12% instances), <tt><a href="fr_spoken-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_spoken-pos-ADP.html">ADP</a></tt> (204; 6% instances), <tt><a href="fr_spoken-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_spoken-pos-ADP.html">ADP</a></tt> (90; 3% instances), <tt><a href="fr_spoken-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_spoken-pos-ADP.html">ADP</a></tt> (37; 1% instances), <tt><a href="fr_spoken-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_spoken-pos-ADP.html">ADP</a></tt> (34; 1% instances), <tt><a href="fr_spoken-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_spoken-pos-SCONJ.html">SCONJ</a></tt> (12; 0% instances), <tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_spoken-pos-SCONJ.html">SCONJ</a></tt> (10; 0% instances), <tt><a href="fr_spoken-pos-X.html">X</a></tt>-<tt><a href="fr_spoken-pos-ADP.html">ADP</a></tt> (7; 0% instances), <tt><a href="fr_spoken-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_spoken-pos-ADP.html">ADP</a></tt> (5; 0% instances), <tt><a href="fr_spoken-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_spoken-pos-SCONJ.html">SCONJ</a></tt> (2; 0% instances), <tt><a href="fr_spoken-pos-X.html">X</a></tt>-<tt><a href="fr_spoken-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 case	color:blue
1	d'	d'	ADP	_	_	2	case	_	_
2	accord	accord	NOUN	_	Gender=Masc|Number=Sing	0	root	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 case	color:blue
1	vous	il	PRON	_	Number=Plur|Person=2|PronType=Prs	2	nsubj	_	_
2	allez	aller	VERB	ETRE	Number=Plur|Person=2	0	root	_	_
3	être	être	AUX	_	VerbForm=Inf	4	cop	_	_
4	médecin	médecin	NOUN	_	Gender=Masc|Number=Sing	2	xcomp:obj	_	_
5	en	en	ADP	_	_	6	case	_	_
6	France	France	PROPN	_	_	4	nmod	_	_
7	en	en	ADP	_	_	8	case	_	_
8	hôpital	hôpital	NOUN	_	Gender=Masc|Number=Sing	4	nmod	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 case	color:blue
1	vous	il	PRON	_	Number=Plur|Person=2|PronType=Prs	3	nsubj	_	_
2	n'	ne	ADV	_	Polarity=Neg	3	advmod	_	_
3	avez	avoir	VERB	_	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	_
4	pas	pas	ADV	_	Polarity=Neg	3	advmod	_	_
5	autour	autour	ADV	_	_	3	advmod	_	_
6	de	de	ADP	_	_	7	case	_	_
7	vous	lui	PRON	_	Number=Plur|Person=2|PronType=Prs	5	obl:arg	_	_
8	cette	ce	DET	_	Gender=Fem|Number=Sing|PronType=Dem	9	det	_	_
9	impression	impression	NOUN	_	Gender=Fem|Number=Sing	3	obj	_	_
10	que	que	SCONJ	_	_	9	dep	_	_

~~~


