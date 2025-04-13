---
layout: base
title:  'Statistics of case in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `case`

This relation is universal.

3494 nodes (8%) are attached to their parents as `case`.

3494 instances of `case` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.79622209502003.

The following 18 pairs of parts of speech are connected with `case`: <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-ADP.html">ADP</a></tt> (2622; 75% instances), <tt><a href="fr_rhapsodie-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_rhapsodie-pos-ADP.html">ADP</a></tt> (424; 12% instances), <tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_rhapsodie-pos-ADP.html">ADP</a></tt> (197; 6% instances), <tt><a href="fr_rhapsodie-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_rhapsodie-pos-ADP.html">ADP</a></tt> (76; 2% instances), <tt><a href="fr_rhapsodie-pos-DET.html">DET</a></tt>-<tt><a href="fr_rhapsodie-pos-ADP.html">ADP</a></tt> (49; 1% instances), <tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_rhapsodie-pos-ADP.html">ADP</a></tt> (38; 1% instances), <tt><a href="fr_rhapsodie-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_rhapsodie-pos-ADP.html">ADP</a></tt> (38; 1% instances), <tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_rhapsodie-pos-SCONJ.html">SCONJ</a></tt> (12; 0% instances), <tt><a href="fr_rhapsodie-pos-X.html">X</a></tt>-<tt><a href="fr_rhapsodie-pos-ADP.html">ADP</a></tt> (10; 0% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-SCONJ.html">SCONJ</a></tt> (9; 0% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (6; 0% instances), <tt><a href="fr_rhapsodie-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_rhapsodie-pos-ADP.html">ADP</a></tt> (5; 0% instances), <tt><a href="fr_rhapsodie-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_rhapsodie-pos-SCONJ.html">SCONJ</a></tt> (2; 0% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="fr_rhapsodie-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_rhapsodie-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="fr_rhapsodie-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="fr_rhapsodie-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_rhapsodie-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="fr_rhapsodie-pos-X.html">X</a></tt>-<tt><a href="fr_rhapsodie-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 case	color:blue
1	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	2	nsubj	_	SpaceAfter=No
2	est	être	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	plus	plus	ADV	_	_	6	advmod	_	_
4	à	à	ADP	_	_	6	case	_	_
5	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	niveau	niveau	NOUN	_	Gender=Masc|Number=Sing	2	obl:arg	_	_
7	de	de	ADP	_	_	9	case	_	_
8	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	fac	fac	NOUN	_	Gender=Fem|Number=Sing	6	nmod	_	SpaceAfter=No
10	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 case	color:blue
1	vous	vous	PRON	_	Number=Plur|Person=2|PronType=Prs	2	nsubj	_	_
2	allez	aller	VERB	_	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	_
3	être	être	AUX	_	VerbForm=Inf	4	cop	_	Subject=SubjRaising
4	médecin	médecin	NOUN	_	Gender=Masc|Number=Sing	2	xcomp	_	_
5	en	en	ADP	_	_	6	case	_	_
6	France	France	PROPN	_	_	4	nmod	_	_
7	en	en	ADP	_	_	8	case	_	_
8	hôpital	hôpital	NOUN	_	Gender=Masc|Number=Sing	4	nmod	_	SpaceAfter=No
9	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 case	color:blue
1	vous	vous	PRON	_	Number=Plur|Person=2|PronType=Prs	3	nsubj	_	Overlap=Rhap_D0006-5
2	n'	ne	ADV	_	Polarity=Neg	3	advmod	_	Overlap=Rhap_D0006-5|SpaceAfter=No
3	avez	avoir	VERB	_	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	Overlap=Rhap_D0006-5
4	pas	pas	ADV	_	Polarity=Neg	3	advmod	_	_
5	autour	autour	ADV	_	_	3	advmod	_	_
6	de	de	ADP	_	_	7	case	_	_
7	vous	vous	PRON	_	Number=Plur|Person=2|PronType=Prs	5	obl:arg	_	_
8	cette	ce	DET	_	Gender=Fem|Number=Sing|PronType=Dem	9	det	_	_
9	impression	impression	NOUN	_	Gender=Fem|Number=Sing	3	obj:lvc	_	_
10	que	que	SCONJ	_	_	9	dep	_	Scrap=Yes|SpaceAfter=No
11	…	…	PUNCT	_	_	3	punct	_	_

~~~


