---
layout: base
title:  'Statistics of det:poss in UD_German-HDT'
udver: '2'
---

## Treebank Statistics: UD_German-HDT: Relations: `det:poss`

This relation is a language-specific subtype of <tt><a href="de_hdt-dep-det.html">det</a></tt>.

13673 nodes (2%) are attached to their parents as `det:poss`.

13673 instances of `det:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.320119944416.

The following 11 pairs of parts of speech are connected with `det:poss`: <tt><a href="de_hdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_hdt-pos-DET.html">DET</a></tt> (9233; 68% instances), <tt><a href="de_hdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_hdt-pos-PRON.html">PRON</a></tt> (3271; 24% instances), <tt><a href="de_hdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_hdt-pos-DET.html">DET</a></tt> (683; 5% instances), <tt><a href="de_hdt-pos-X.html">X</a></tt>-<tt><a href="de_hdt-pos-DET.html">DET</a></tt> (380; 3% instances), <tt><a href="de_hdt-pos-X.html">X</a></tt>-<tt><a href="de_hdt-pos-PRON.html">PRON</a></tt> (43; 0% instances), <tt><a href="de_hdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_hdt-pos-DET.html">DET</a></tt> (29; 0% instances), <tt><a href="de_hdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_hdt-pos-PRON.html">PRON</a></tt> (29; 0% instances), <tt><a href="de_hdt-pos-PRON.html">PRON</a></tt>-<tt><a href="de_hdt-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="de_hdt-pos-NUM.html">NUM</a></tt>-<tt><a href="de_hdt-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="de_hdt-pos-NUM.html">NUM</a></tt>-<tt><a href="de_hdt-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="de_hdt-pos-VERB.html">VERB</a></tt>-<tt><a href="de_hdt-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 det:poss	color:blue
1	Konkursgerüchte	Gerücht	NOUN	NN	Case=Nom|Gender=Neut|Number=Plur|Person=3	2	nsubj	_	_
2	drücken	drücken	VERB	VVFIN	Mood=Ind|Number=Plur|Person=3|Tense=Pres	0	root	_	_
3	Kurs	Kurs	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	2	obj	_	_
4	der	der	DET	ART	Case=Gen|Gender=Fem|Number=Sing	5	det:poss	_	_
5	Amazon-Aktie	Aktie	NOUN	NN	Case=Gen|Gender=Fem|Number=Sing|Person=3	3	nmod:poss	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 det:poss	color:blue
1	Gestern	Gestern	ADV	ADV	_	2	advmod	_	_
2	Abend	Abend	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	6	obl	_	_
3	um	um	ADP	APPR	_	5	case	_	_
4	20.34	20.34	NUM	CARD	Number=Plur|Person=3	5	nummod	_	_
5	Uhr	Uhr	NOUN	NN	Gender=Fem|Number=Sing|Person=3	2	nmod	_	_
6	nahm	nehmen	VERB	VVFIN	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
7	das	das	DET	ART	Case=Nom|Gender=Neut|Number=Sing	8	det	_	_
8	Schicksal	Schicksal	NOUN	NN	Case=Nom|Gender=Neut|Number=Sing|Person=3	6	nsubj	_	_
9	seinen	seinen	PRON	PPOSAT	Case=Acc|Gender=Masc|Number=Sing|Person=3	10	det:poss	_	_
10	Lauf	Lauf	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	6	obj	_	_
11	:	:	PUNCT	$.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 det:poss	color:blue
1	Diese	Diese	DET	PDAT	Case=Nom|Gender=Fem|Number=Sing	2	det	_	_
2	Auskunft	Auskunft	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing|Person=3	3	nsubj	_	_
3	gab	geben	VERB	VVFIN	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
4	jedenfalls	jedenfalls	ADV	ADV	_	3	advmod	_	_
5	heute	heute	ADV	ADV	_	3	advmod	_	_
6	die	die	DET	ART	Case=Acc|Gender=Fem|Number=Sing	7	det	_	_
7	Hotline	Hotline	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing|Person=3	3	obj	_	_
8	der	der	DET	ART	Case=Gen|Gender=Fem|Number=Sing	9	det:poss	_	_
9	Telekom	Telekom	PROPN	NE	Case=Gen|Gender=Fem|Number=Sing|Person=3	7	nmod:poss	_	_
10	.	.	PUNCT	$.	_	3	punct	_	_

~~~


