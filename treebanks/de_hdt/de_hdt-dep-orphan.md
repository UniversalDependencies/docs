---
layout: base
title:  'Statistics of orphan in UD_German-HDT'
udver: '2'
---

## Treebank Statistics: UD_German-HDT: Relations: `orphan`

This relation is universal.

54 nodes (0%) are attached to their parents as `orphan`.

54 instances of `orphan` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.94444444444444.

The following 20 pairs of parts of speech are connected with `orphan`: <tt><a href="de_hdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_hdt-pos-NOUN.html">NOUN</a></tt> (15; 28% instances), <tt><a href="de_hdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_hdt-pos-VERB.html">VERB</a></tt> (7; 13% instances), <tt><a href="de_hdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_hdt-pos-PROPN.html">PROPN</a></tt> (4; 7% instances), <tt><a href="de_hdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_hdt-pos-NOUN.html">NOUN</a></tt> (3; 6% instances), <tt><a href="de_hdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_hdt-pos-PROPN.html">PROPN</a></tt> (3; 6% instances), <tt><a href="de_hdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_hdt-pos-ADJ.html">ADJ</a></tt> (2; 4% instances), <tt><a href="de_hdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_hdt-pos-ADV.html">ADV</a></tt> (2; 4% instances), <tt><a href="de_hdt-pos-PRON.html">PRON</a></tt>-<tt><a href="de_hdt-pos-NOUN.html">NOUN</a></tt> (2; 4% instances), <tt><a href="de_hdt-pos-PRON.html">PRON</a></tt>-<tt><a href="de_hdt-pos-VERB.html">VERB</a></tt> (2; 4% instances), <tt><a href="de_hdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_hdt-pos-ADJ.html">ADJ</a></tt> (2; 4% instances), <tt><a href="de_hdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_hdt-pos-VERB.html">VERB</a></tt> (2; 4% instances), <tt><a href="de_hdt-pos-X.html">X</a></tt>-<tt><a href="de_hdt-pos-VERB.html">VERB</a></tt> (2; 4% instances), <tt><a href="de_hdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_hdt-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="de_hdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_hdt-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="de_hdt-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="de_hdt-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="de_hdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_hdt-pos-NUM.html">NUM</a></tt> (1; 2% instances), <tt><a href="de_hdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_hdt-pos-X.html">X</a></tt> (1; 2% instances), <tt><a href="de_hdt-pos-PRON.html">PRON</a></tt>-<tt><a href="de_hdt-pos-PROPN.html">PROPN</a></tt> (1; 2% instances), <tt><a href="de_hdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_hdt-pos-NUM.html">NUM</a></tt> (1; 2% instances), <tt><a href="de_hdt-pos-X.html">X</a></tt>-<tt><a href="de_hdt-pos-PROPN.html">PROPN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 orphan	color:blue
1	Per	Per	ADP	APPR	_	2	case	_	_
2	Sprache	Sprache	NOUN	NN	Gender=Fem|Number=Sing|Person=3	0	root	_	_
3	durchs	durchs	ADP	APPRART	Case=Acc|Gender=Neut	4	case	_	_
4	Web	Web	NOUN	NN	Case=Acc|Gender=Neut|Number=Sing|Person=3	2	orphan	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 orphan	color:blue
1	Roter	rot	ADJ	ADJA	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	2	amod	_	_
2	Punkt	Punkt	NOUN	NN	Gender=Masc|Number=Sing|Person=3	0	root	_	_
3	zu	zu	PART	PTKZU	_	4	mark	_	_
4	vermieten	vermieten	VERB	VVINF	_	2	orphan	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 orphan	color:blue
1	Zwischen	Zwischen	ADP	APPR	Case=Dat	3	case	_	_
2	den	den	DET	ART	Case=Dat|Number=Plur	3	det	_	_
3	Zeilen	Zeile	NOUN	NN	Case=Dat|Gender=Fem|Number=Plur|Person=3	0	root	_	_
4	(	(	PUNCT	$(	_	5	punct	_	_
5	Janko	Janko	PROPN	NE	Number=Sing|Person=3	3	orphan	_	_
6	Röttgers	Röttgers	PROPN	NE	Case=Gen|Number=Sing|Person=3	5	flat:name	_	_
7	)	)	PUNCT	$(	_	5	punct	_	_

~~~


