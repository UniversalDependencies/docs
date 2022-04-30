---
layout: base
title:  'Statistics of flat in UD_German-GSD'
udver: '2'
---

## Treebank Statistics: UD_German-GSD: Relations: `flat`

This relation is universal.

8204 nodes (3%) are attached to their parents as `flat`.

8204 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.68503169185763.

The following 19 pairs of parts of speech are connected with `flat`: <tt><a href="de_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_gsd-pos-PROPN.html">PROPN</a></tt> (7198; 88% instances), <tt><a href="de_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_gsd-pos-NOUN.html">NOUN</a></tt> (798; 10% instances), <tt><a href="de_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_gsd-pos-ADP.html">ADP</a></tt> (45; 1% instances), <tt><a href="de_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_gsd-pos-ADJ.html">ADJ</a></tt> (42; 1% instances), <tt><a href="de_gsd-pos-X.html">X</a></tt>-<tt><a href="de_gsd-pos-X.html">X</a></tt> (30; 0% instances), <tt><a href="de_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_gsd-pos-PROPN.html">PROPN</a></tt> (28; 0% instances), <tt><a href="de_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_gsd-pos-X.html">X</a></tt> (28; 0% instances), <tt><a href="de_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_gsd-pos-NUM.html">NUM</a></tt> (11; 0% instances), <tt><a href="de_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="de_gsd-pos-PROPN.html">PROPN</a></tt> (5; 0% instances), <tt><a href="de_gsd-pos-ADP.html">ADP</a></tt>-<tt><a href="de_gsd-pos-PROPN.html">PROPN</a></tt> (3; 0% instances), <tt><a href="de_gsd-pos-DET.html">DET</a></tt>-<tt><a href="de_gsd-pos-PROPN.html">PROPN</a></tt> (3; 0% instances), <tt><a href="de_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_gsd-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="de_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_gsd-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="de_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_gsd-pos-CCONJ.html">CCONJ</a></tt> (2; 0% instances), <tt><a href="de_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="de_gsd-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="de_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="de_gsd-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="de_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="de_gsd-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="de_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_gsd-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="de_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_gsd-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 flat	color:blue
1	Hierfür	hierfür	ADV	PAV	_	2	advmod	_	_
2	verdient	verdienen	VERB	VVFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	Torsten	Torsten	PROPN	NE	Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	NamedEntity=Yes
4	Burrichter	Burrichter	PROPN	NE	Case=Nom|Gender=Masc|Number=Sing	3	flat	_	NamedEntity=Yes
5	meinen	mein	DET	PPOSAT	Case=Acc|Gender=Masc|Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	7	det:poss	_	_
6	besonderen	besonder	ADJ	ADJA	Case=Acc|Gender=Masc|Number=Sing	7	amod	_	_
7	Respekt	Respekt	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing	2	obj	_	SpaceAfter=No
8	.	.	PUNCT	$.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 flat	color:blue
1	Habe	haben	AUX	VAFIN	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	9	aux	_	_
2	vergangene	vergangen	ADJ	ADJA	Case=Acc|Gender=Fem|Number=Sing	3	amod	_	_
3	Woche	Woche	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing	9	obl	_	_
4	einen	ein	DET	ART	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	NLP	NLP	PROPN	ADJA	Case=Acc|Gender=Masc|Number=Sing	9	obj	_	NamedEntity=Yes
6	Kurs	Kurs	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing	5	flat	_	_
7	bei	bei	ADP	APPR	_	8	case	_	_
8	diedenkweisen	diedenkweisen	PROPN	NN	VerbForm=Inf	9	obl	_	NamedEntity=Yes
9	besucht	besuchen	VERB	VVPP	VerbForm=Part	0	root	_	SpaceAfter=No
10	!	!	PUNCT	$.	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 flat	color:blue
1	Nie	nie	ADV	ADV	_	2	advmod	_	_
2	wieder	wieder	ADV	ADV	_	0	root	_	_
3	in	in	ADP	APPR	_	6	case	_	_
4	das	der	DET	ART	Case=Acc|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	6	det	_	_
5	"	"	PUNCT	$(	_	6	punct	_	SpaceAfter=No
6	Hotel	Hotel	PROPN	NN	Case=Acc|Gender=Neut|Number=Sing	2	nmod	_	NamedEntity=Yes
7	an	an	ADP	APPR	_	6	flat	_	NamedEntity=Yes
8	dem	der	DET	ART	Case=Dat|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	6	det	_	_
9	Rathaus	Rathaus	PROPN	NN	Case=Dat|Gender=Neut|Number=Sing	6	flat	_	SpaceAfter=No|NamedEntity=Yes
10	"	"	PUNCT	$(	_	6	punct	_	SpaceAfter=No
11	!	!	PUNCT	$.	_	2	punct	_	_

~~~


