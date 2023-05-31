---
layout: base
title:  'Statistics of punct in UD_Estonian'
udver: '2'
---

## Treebank Statistics: UD_Estonian: Relations: `punct`

This relation is universal.

19659 nodes (18%) are attached to their parents as `punct`.

11688 instances of `punct` (59%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.60486291266087.

The following 15 pairs of parts of speech are connected with `punct`: <tt><a href="et-pos-VERB.html">VERB</a></tt>-<tt><a href="et-pos-PUNCT.html">PUNCT</a></tt> (12689; 65% instances), <tt><a href="et-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et-pos-PUNCT.html">PUNCT</a></tt> (2953; 15% instances), <tt><a href="et-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et-pos-PUNCT.html">PUNCT</a></tt> (1362; 7% instances), <tt><a href="et-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et-pos-PUNCT.html">PUNCT</a></tt> (712; 4% instances), <tt><a href="et-pos-ADV.html">ADV</a></tt>-<tt><a href="et-pos-PUNCT.html">PUNCT</a></tt> (711; 4% instances), <tt><a href="et-pos-PRON.html">PRON</a></tt>-<tt><a href="et-pos-PUNCT.html">PUNCT</a></tt> (609; 3% instances), <tt><a href="et-pos-NUM.html">NUM</a></tt>-<tt><a href="et-pos-PUNCT.html">PUNCT</a></tt> (257; 1% instances), <tt><a href="et-pos-AUX.html">AUX</a></tt>-<tt><a href="et-pos-PUNCT.html">PUNCT</a></tt> (133; 1% instances), <tt><a href="et-pos-INTJ.html">INTJ</a></tt>-<tt><a href="et-pos-PUNCT.html">PUNCT</a></tt> (105; 1% instances), <tt><a href="et-pos-X.html">X</a></tt>-<tt><a href="et-pos-PUNCT.html">PUNCT</a></tt> (53; 0% instances), <tt><a href="et-pos-ADP.html">ADP</a></tt>-<tt><a href="et-pos-PUNCT.html">PUNCT</a></tt> (32; 0% instances), <tt><a href="et-pos-SYM.html">SYM</a></tt>-<tt><a href="et-pos-PUNCT.html">PUNCT</a></tt> (29; 0% instances), <tt><a href="et-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="et-pos-PUNCT.html">PUNCT</a></tt> (6; 0% instances), <tt><a href="et-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="et-pos-PUNCT.html">PUNCT</a></tt> (6; 0% instances), <tt><a href="et-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="et-pos-PUNCT.html">PUNCT</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 punct	color:blue
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
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 punct	color:blue
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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 punct	color:blue
1	Hea	hea	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	2	amod	_	_
2	mõte	mõte	NOUN	S	Case=Nom|Number=Sing	0	root	_	SpaceAfter=No
3	,	,	PUNCT	Z	_	6	punct	_	_
4	kõik	kõik	PRON	P	Case=Nom|Number=Sing|PronType=Tot	6	nsubj:cop	_	_
5	on	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	cop	_	_
6	korras	korras	ADJ	A	Degree=Pos	2	conj	_	SpaceAfter=No
7	,	,	PUNCT	Z	_	9	punct	_	_
8	naer	naer	NOUN	S	Case=Nom|Number=Sing	9	nsubj	_	_
9	tuleb	tulema	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	conj	_	_
10	terviseks	tervis	NOUN	S	Case=Tra|Number=Sing	9	obl	_	SpaceAfter=No
11	.	.	PUNCT	Z	_	2	punct	_	_

~~~


