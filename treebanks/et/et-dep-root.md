---
layout: base
title:  'Statistics of root in UD_Estonian'
udver: '2'
---

## Treebank Statistics: UD_Estonian: Relations: `root`

This relation is universal.

8675 nodes (8%) are attached to their parents as `root`.

8675 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.88299711815562.

The following 13 pairs of parts of speech are connected with `root`: -<tt><a href="et-pos-VERB.html">VERB</a></tt> (6342; 73% instances), -<tt><a href="et-pos-NOUN.html">NOUN</a></tt> (1022; 12% instances), -<tt><a href="et-pos-ADJ.html">ADJ</a></tt> (599; 7% instances), -<tt><a href="et-pos-ADV.html">ADV</a></tt> (281; 3% instances), -<tt><a href="et-pos-PRON.html">PRON</a></tt> (238; 3% instances), -<tt><a href="et-pos-PROPN.html">PROPN</a></tt> (92; 1% instances), -<tt><a href="et-pos-INTJ.html">INTJ</a></tt> (43; 0% instances), -<tt><a href="et-pos-NUM.html">NUM</a></tt> (33; 0% instances), -<tt><a href="et-pos-X.html">X</a></tt> (15; 0% instances), -<tt><a href="et-pos-AUX.html">AUX</a></tt> (3; 0% instances), -<tt><a href="et-pos-CCONJ.html">CCONJ</a></tt> (3; 0% instances), -<tt><a href="et-pos-SCONJ.html">SCONJ</a></tt> (2; 0% instances), -<tt><a href="et-pos-SYM.html">SYM</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 2 root	color:blue
1	Indrikson	Indrikson	PROPN	S	Case=Nom|Number=Sing	2	nsubj	_	_
2	teadis	teadma	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	ju	ju	ADV	D	_	2	advmod	_	SpaceAfter=No
4	,	,	PUNCT	Z	_	8	punct	_	_
5	millist	milline	PRON	P	Case=Par|Number=Sing|PronType=Int,Rel	6	det	_	_
6	palka	palk	NOUN	S	Case=Par|Number=Sing	8	obj	_	_
7	näitlejad	näitleja	NOUN	S	Case=Nom|Number=Plur	8	nsubj	_	_
8	saavad	saama	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	ccomp	_	SpaceAfter=No
9	.	.	PUNCT	Z	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 7 root	color:blue
1	Kas	kas	ADV	D	_	7	advmod	_	_
2	jälle	jälle	ADV	D	_	7	advmod	_	_
3	üks	üks	PRON	P	Case=Nom|Number=Sing|PronType=Ind	7	det	_	_
4	uus	uus	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	7	amod	_	_
5	ja	ja	CCONJ	J	_	6	cc	_	_
6	tundmatu	tundmatu	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	4	conj	_	_
7	põlvkond	põlvkond	NOUN	S	Case=Nom|Number=Sing	0	root	_	_
8	...	...	PUNCT	Z	_	7	punct	_	SpaceAfter=No
9	?	?	PUNCT	Z	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 4 root	color:blue
1	Indriksoni	Indrikson	PROPN	S	Case=Gen|Number=Sing	2	nmod	_	_
2	seksuaalkogemused	seksuaal_kogemus	NOUN	S	Case=Nom|Number=Plur	4	nsubj:cop	_	_
3	olid	olema	AUX	V	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	4	cop	_	_
4	kasinad	kasin	ADJ	A	Case=Nom|Degree=Pos|Number=Plur	0	root	_	_
5	ja	ja	CCONJ	J	_	9	cc	_	_
6	nagu	nagu	SCONJ	J	_	7	mark	_	_
7	selgus	selguma	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	4	advcl	_	SpaceAfter=No
8	,	,	PUNCT	Z	_	7	punct	_	_
9	monotoonsed	monotoonne	ADJ	A	Case=Nom|Degree=Pos|Number=Plur	4	conj	_	SpaceAfter=No
10	.	.	PUNCT	Z	_	4	punct	_	_

~~~


