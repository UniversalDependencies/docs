---
layout: base
title:  'Statistics of root in UD_Estonian-EWT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EWT: Relations: `root`

This relation is universal.

5863 nodes (8%) are attached to their parents as `root`.

5863 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.18505884359543.

The following 14 pairs of parts of speech are connected with `root`: -<tt><a href="et_ewt-pos-VERB.html">VERB</a></tt> (3230; 55% instances), -<tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt> (1179; 20% instances), -<tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt> (522; 9% instances), -<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (272; 5% instances), -<tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt> (266; 5% instances), -<tt><a href="et_ewt-pos-PRON.html">PRON</a></tt> (221; 4% instances), -<tt><a href="et_ewt-pos-INTJ.html">INTJ</a></tt> (75; 1% instances), -<tt><a href="et_ewt-pos-NUM.html">NUM</a></tt> (55; 1% instances), -<tt><a href="et_ewt-pos-SYM.html">SYM</a></tt> (17; 0% instances), -<tt><a href="et_ewt-pos-X.html">X</a></tt> (13; 0% instances), -<tt><a href="et_ewt-pos-PUNCT.html">PUNCT</a></tt> (6; 0% instances), -<tt><a href="et_ewt-pos-AUX.html">AUX</a></tt> (3; 0% instances), -<tt><a href="et_ewt-pos-CCONJ.html">CCONJ</a></tt> (3; 0% instances), -<tt><a href="et_ewt-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 4 root	color:blue
1	onia	Onia	PROPN	S	Case=Gen|Number=Sing	2	nmod	2:nmod	_
2	fotopoe	foto_pood	NOUN	S	Case=Gen|Number=Sing	3	nmod	3:nmod	_
3	peded	pede	NOUN	S	Case=Nom|Number=Plur	4	nsubj	4:nsubj	_
4	korrutavad	korrutama	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
5	nagunii	nagu_nii	ADV	D	_	4	advmod	4:advmod	_
6	selle	see	DET	P	Case=Gen|Number=Sing|PronType=Dem	7	det	7:det	_
7	hinna	hind	NOUN	S	Case=Gen|Number=Sing	4	obj	4:obj	_
8	2X	2X	NOUN	Y	Abbr=Yes	4	obl	4:obl	SpaceAfter=No
9	.	.	PUNCT	Z	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 2 root	color:blue
1	Nuppude	nupp	NOUN	S	Case=Gen|Number=Plur	2	nmod	2:nmod	_
2	paigutused	paigutus	NOUN	S	Case=Nom|Number=Plur	0	root	0:root	_
3	jne	jne	ADV	Y	Abbr=Yes	2	conj	2:conj	SpaceAfter=No
4	.	.	PUNCT	Z	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 5 root	color:blue
1	Optika	optika	NOUN	S	Case=Nom|Number=Sing	5	nsubj:cop	5:nsubj	_
2	on	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	5:cop	_
3	ka	ka	ADV	D	_	5	advmod	5:advmod	_
4	märgatavalt	märgatavalt	ADV	D	_	5	advmod	5:advmod	_
5	kallim	kallim	ADJ	A	Case=Nom|Degree=Cmp|Number=Sing	0	root	0:root	_
6	-	-	PUNCT	Z	_	7	punct	7:punct	_
7	seega	seega	ADV	D	_	11	advmod	11:advmod	_
8	-	-	PUNCT	Z	_	11	punct	11:punct	_
9	suht	suht	ADV	D	_	10	advmod	10:advmod	_
10	lootusetu	lootusetu	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	11	amod	11:amod	_
11	üritus	üritus	NOUN	S	Case=Nom|Number=Sing	5	parataxis	5:parataxis	_
12	kahjuks	kahjuks	ADV	D	_	11	advmod	11:advmod	SpaceAfter=No
13	.	.	PUNCT	Z	_	5	punct	5:punct	_

~~~


