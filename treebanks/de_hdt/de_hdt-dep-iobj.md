---
layout: base
title:  'Statistics of iobj in UD_German-HDT'
udver: '2'
---

## Treebank Statistics: UD_German-HDT: Relations: `iobj`

This relation is universal.

6088 nodes (0%) are attached to their parents as `iobj`.

4208 instances of `iobj` (69%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.34296977660972.

The following 10 pairs of parts of speech are connected with `iobj`: <tt><a href="de_hdt-pos-VERB.html">VERB</a></tt>-<tt><a href="de_hdt-pos-NOUN.html">NOUN</a></tt> (3493; 57% instances), <tt><a href="de_hdt-pos-VERB.html">VERB</a></tt>-<tt><a href="de_hdt-pos-PRON.html">PRON</a></tt> (1937; 32% instances), <tt><a href="de_hdt-pos-VERB.html">VERB</a></tt>-<tt><a href="de_hdt-pos-PROPN.html">PROPN</a></tt> (574; 9% instances), <tt><a href="de_hdt-pos-VERB.html">VERB</a></tt>-<tt><a href="de_hdt-pos-X.html">X</a></tt> (55; 1% instances), <tt><a href="de_hdt-pos-VERB.html">VERB</a></tt>-<tt><a href="de_hdt-pos-NUM.html">NUM</a></tt> (10; 0% instances), <tt><a href="de_hdt-pos-VERB.html">VERB</a></tt>-<tt><a href="de_hdt-pos-ADJ.html">ADJ</a></tt> (9; 0% instances), <tt><a href="de_hdt-pos-AUX.html">AUX</a></tt>-<tt><a href="de_hdt-pos-NOUN.html">NOUN</a></tt> (4; 0% instances), <tt><a href="de_hdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_hdt-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="de_hdt-pos-AUX.html">AUX</a></tt>-<tt><a href="de_hdt-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="de_hdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_hdt-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 iobj	color:blue
1	Telekom	Telekom	PROPN	NE	Case=Nom|Gender=Fem|Number=Sing|Person=3	2	nsubj	_	_
2	berechnet	berechnen	VERB	VVFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	1&1-Kunden	Kunde	NOUN	NN	Case=Dat|Number=Plur|Person=3	2	iobj	_	_
4	zuviel	zuviel	X	FM	Foreign=Yes|Person=3	2	obj	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 iobj	color:blue
1	Gleiches	gleich	ADJ	ADJA	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing	2	obj	_	_
2	melden	melden	VERB	VVFIN	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	uns	uns	PRON	PPER	Case=Dat|Number=Plur|Person=1|PronType=Prs	2	iobj	_	_
4	Leser	Leser	NOUN	NN	Case=Nom|Gender=Masc|Number=Plur|Person=3	2	nsubj	_	_
5	aus	aus	ADP	APPR	AdpType=Prep|Case=Dat	8	case	_	_
6	dem	dem	DET	ART	Case=Dat|Gender=Neut|Number=Sing|PronType=Art	8	det	_	_
7	ganzen	ganz	ADJ	ADJA	Degree=Pos|Gender=Neut|Number=Sing	8	amod	_	_
8	Bundesgebiet	Gebiet	NOUN	NN	Case=Dat|Gender=Neut|Number=Sing|Person=3	4	nmod	_	_
9	.	.	PUNCT	$.	PunctType=Peri	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 iobj	color:blue
1	Cracker	Cracker	NOUN	NN	Gender=Masc|Number=Plur|Person=3	2	nsubj	_	_
2	erklären	erklären	VERB	VVFIN	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	China	China	PROPN	NE	Number=Sing|Person=3	2	iobj	_	_
4	und	und	CCONJ	KON	_	6	cc	_	_
5	dem	dem	DET	ART	Case=Dat|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	Irak	Irak	PROPN	NE	Gender=Masc|Number=Sing|Person=3	3	conj	_	_
7	den	den	DET	ART	Case=Acc|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	Cyberkrieg	Krieg	NOUN	NN	Gender=Masc|Number=Sing|Person=3	2	obj	_	_

~~~


