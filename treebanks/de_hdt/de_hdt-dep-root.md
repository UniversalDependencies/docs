---
layout: base
title:  'Statistics of root in UD_German-HDT'
udver: '2'
---

## Treebank Statistics: UD_German-HDT: Relations: `root`

This relation is universal.

34322 nodes (6%) are attached to their parents as `root`.

34322 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.70412563370433.

The following 13 pairs of parts of speech are connected with `root`: -<tt><a href="de_hdt-pos-VERB.html">VERB</a></tt> (27312; 80% instances), -<tt><a href="de_hdt-pos-NOUN.html">NOUN</a></tt> (3188; 9% instances), -<tt><a href="de_hdt-pos-ADJ.html">ADJ</a></tt> (1736; 5% instances), -<tt><a href="de_hdt-pos-AUX.html">AUX</a></tt> (772; 2% instances), -<tt><a href="de_hdt-pos-PROPN.html">PROPN</a></tt> (772; 2% instances), -<tt><a href="de_hdt-pos-PRON.html">PRON</a></tt> (309; 1% instances), -<tt><a href="de_hdt-pos-X.html">X</a></tt> (152; 0% instances), -<tt><a href="de_hdt-pos-ADV.html">ADV</a></tt> (63; 0% instances), -<tt><a href="de_hdt-pos-NUM.html">NUM</a></tt> (13; 0% instances), -<tt><a href="de_hdt-pos-CCONJ.html">CCONJ</a></tt> (2; 0% instances), -<tt><a href="de_hdt-pos-ADP.html">ADP</a></tt> (1; 0% instances), -<tt><a href="de_hdt-pos-INTJ.html">INTJ</a></tt> (1; 0% instances), -<tt><a href="de_hdt-pos-PART.html">PART</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 2 root	color:blue
1	Konkursgerüchte	Gerücht	NOUN	NN	Case=Nom|Gender=Neut|Number=Plur|Person=3	2	nsubj	_	_
2	drücken	drücken	VERB	VVFIN	Mood=Ind|Number=Plur|Person=3|Tense=Pres	0	root	_	_
3	Kurs	Kurs	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	2	obj	_	_
4	der	der	DET	ART	Case=Gen|Gender=Fem|Number=Sing	5	det:poss	_	_
5	Amazon-Aktie	Aktie	NOUN	NN	Case=Gen|Gender=Fem|Number=Sing|Person=3	3	nmod:poss	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 2 root	color:blue
1	Europäischer	europäisch	ADJ	ADJA	Case=Gen|Degree=Pos|Gender=Masc|Number=Plur	2	amod	_	_
2	Fernsehsender	Sender	NOUN	NN	Case=Nom|Gender=Masc|Number=Plur|Person=3	0	root	_	_
3	im	im	ADP	APPRART	Case=Dat	4	case	_	_
4	Internet	Internet	NOUN	NN	Case=Dat|Gender=Neut|Number=Sing|Person=3	2	nmod	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 6 root	color:blue
1	"	"	PUNCT	$(	_	6	punct	_	_
2	Die	Die	DET	ART	Case=Nom|Number=Plur	3	det	_	_
3	Eskalationsmechanismen	Mechanismus	NOUN	NN	Case=Nom|Gender=Masc|Number=Plur|Person=3	6	nsubj	_	_
4	sind	sein	AUX	VAFIN	Mood=Ind|Number=Plur|Person=3|Tense=Pres	6	cop	_	_
5	kaum	kaum	ADV	ADV	_	6	advmod	_	_
6	beherrschbar	beherrschbar	ADJ	ADJD	Degree=Pos	0	root	_	_
7	"	"	PUNCT	$(	_	6	punct	_	_
8	,	,	PUNCT	$,	_	9	punct	_	_
9	warnte	warnen	VERB	VVFIN	Mood=Ind|Number=Sing|Person=3|Tense=Past	6	parataxis	_	_
10	Rieger	Rieger	PROPN	NE	Case=Nom|Person=3	9	nsubj	_	_
11	.	.	PUNCT	$.	_	6	punct	_	_

~~~


