---
layout: base
title:  'Statistics of advmod in UD_Estonian'
udver: '2'
---

## Treebank Statistics: UD_Estonian: Relations: `advmod`

This relation is universal.
There are 1 language-specific subtypes of `advmod`: <tt><a href="et-dep-advmod-quant.html">advmod:quant</a></tt>.

8434 nodes (8%) are attached to their parents as `advmod`.

5820 instances of `advmod` (69%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.95328432534977.

The following 14 pairs of parts of speech are connected with `advmod`: <tt><a href="et-pos-VERB.html">VERB</a></tt>-<tt><a href="et-pos-ADV.html">ADV</a></tt> (4873; 58% instances), <tt><a href="et-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et-pos-ADV.html">ADV</a></tt> (1254; 15% instances), <tt><a href="et-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et-pos-ADV.html">ADV</a></tt> (1094; 13% instances), <tt><a href="et-pos-ADV.html">ADV</a></tt>-<tt><a href="et-pos-ADV.html">ADV</a></tt> (620; 7% instances), <tt><a href="et-pos-PRON.html">PRON</a></tt>-<tt><a href="et-pos-ADV.html">ADV</a></tt> (344; 4% instances), <tt><a href="et-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et-pos-ADV.html">ADV</a></tt> (96; 1% instances), <tt><a href="et-pos-NUM.html">NUM</a></tt>-<tt><a href="et-pos-ADV.html">ADV</a></tt> (87; 1% instances), <tt><a href="et-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="et-pos-ADV.html">ADV</a></tt> (29; 0% instances), <tt><a href="et-pos-AUX.html">AUX</a></tt>-<tt><a href="et-pos-ADV.html">ADV</a></tt> (22; 0% instances), <tt><a href="et-pos-ADP.html">ADP</a></tt>-<tt><a href="et-pos-ADV.html">ADV</a></tt> (9; 0% instances), <tt><a href="et-pos-DET.html">DET</a></tt>-<tt><a href="et-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="et-pos-X.html">X</a></tt>-<tt><a href="et-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="et-pos-NUM.html">NUM</a></tt>-<tt><a href="et-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="et-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="et-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 advmod	color:blue
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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 advmod	color:blue
1	Nüüd	nüüd	ADV	D	_	3	advmod	_	_
2	olen	olema	AUX	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	_	_
3	kiirem	kiirem	ADJ	A	Case=Nom|Degree=Cmp|Number=Sing	0	root	_	SpaceAfter=No
4	.	.	PUNCT	Z	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 advmod	color:blue
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


