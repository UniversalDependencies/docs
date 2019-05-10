---
layout: base
title:  'Statistics of case in UD_German-HDT'
udver: '2'
---

## Treebank Statistics: UD_German-HDT: Relations: `case`

This relation is universal.

65985 nodes (11%) are attached to their parents as `case`.

65346 instances of `case` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.69881033568235.

The following 13 pairs of parts of speech are connected with `case`: <tt><a href="de_hdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_hdt-pos-ADP.html">ADP</a></tt> (51746; 78% instances), <tt><a href="de_hdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_hdt-pos-ADP.html">ADP</a></tt> (9027; 14% instances), <tt><a href="de_hdt-pos-PRON.html">PRON</a></tt>-<tt><a href="de_hdt-pos-ADP.html">ADP</a></tt> (1780; 3% instances), <tt><a href="de_hdt-pos-X.html">X</a></tt>-<tt><a href="de_hdt-pos-ADP.html">ADP</a></tt> (1432; 2% instances), <tt><a href="de_hdt-pos-NUM.html">NUM</a></tt>-<tt><a href="de_hdt-pos-ADP.html">ADP</a></tt> (702; 1% instances), <tt><a href="de_hdt-pos-ADV.html">ADV</a></tt>-<tt><a href="de_hdt-pos-ADP.html">ADP</a></tt> (609; 1% instances), <tt><a href="de_hdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_hdt-pos-ADP.html">ADP</a></tt> (440; 1% instances), <tt><a href="de_hdt-pos-ADP.html">ADP</a></tt>-<tt><a href="de_hdt-pos-ADP.html">ADP</a></tt> (216; 0% instances), <tt><a href="de_hdt-pos-VERB.html">VERB</a></tt>-<tt><a href="de_hdt-pos-ADP.html">ADP</a></tt> (23; 0% instances), <tt><a href="de_hdt-pos-DET.html">DET</a></tt>-<tt><a href="de_hdt-pos-ADP.html">ADP</a></tt> (7; 0% instances), <tt><a href="de_hdt-pos-AUX.html">AUX</a></tt>-<tt><a href="de_hdt-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="de_hdt-pos-INTJ.html">INTJ</a></tt>-<tt><a href="de_hdt-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="de_hdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_hdt-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 case	color:blue
1	CCC	CCC	PROPN	NE	Case=Nom|Person=3	2	nsubj	_	_
2	warnt	warnen	VERB	VVFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
3	vor	vor	ADP	APPR	Case=Dat	4	case	_	_
4	Cyber-Krieg	Krieg	NOUN	NN	Case=Dat|Gender=Masc|Number=Sing|Person=3	2	obl	_	_
5	gegen	gegen	ADP	APPR	Case=Acc	6	case	_	_
6	Jugoslawien	Jugoslawien	PROPN	NE	Case=Acc|Number=Sing|Person=3	4	nmod	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 case	color:blue
1	CCC	CCC	PROPN	NE	Case=Nom|Person=3	2	nsubj	_	_
2	warnt	warnen	VERB	VVFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
3	vor	vor	ADP	APPR	Case=Dat	4	case	_	_
4	Cyber-Krieg	Krieg	NOUN	NN	Case=Dat|Gender=Masc|Number=Sing|Person=3	2	obl	_	_
5	gegen	gegen	ADP	APPR	Case=Acc	6	case	_	_
6	Jugoslawien	Jugoslawien	PROPN	NE	Case=Acc|Number=Sing|Person=3	4	nmod	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 case	color:blue
1	"	"	PUNCT	$(	_	3	punct	_	_
2	Namen	Name	NOUN	NN	Case=Nom|Gender=Masc|Number=Plur|Person=3	3	nsubj	_	_
3	haben	haben	AUX	VAFIN	Mood=Ind|Number=Plur|Person=3|Tense=Pres	0	root	_	_
4	für	für	ADP	APPR	_	5	case	_	_
5	mich	mich	PRON	PPER	Case=Acc|Number=Sing|Person=1	3	obl	_	_
6	im	im	ADP	APPRART	Case=Dat	7	case	_	_
7	Internet	Internet	NOUN	NN	Case=Dat|Gender=Neut|Number=Sing|Person=3	3	obl	_	_
8	keine	kein	DET	PIAT	Case=Acc|Gender=Fem|Number=Sing|Person=3	9	det	_	_
9	Bedeutung	Bedeutung	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing|Person=3	3	obj	_	_
10	"	"	PUNCT	$(	_	3	punct	_	_
11	.	.	PUNCT	$.	_	3	punct	_	_

~~~


