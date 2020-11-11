---
layout: base
title:  'Statistics of nummod in UD_Finnish-OOD'
udver: '2'
---

## Treebank Statistics: UD_Finnish-OOD: Relations: `nummod`

This relation is universal.

218 nodes (1%) are attached to their parents as `nummod`.

180 instances of `nummod` (83%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.14220183486239.

The following 8 pairs of parts of speech are connected with `nummod`: <tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ood-pos-NUM.html">NUM</a></tt> (179; 82% instances), <tt><a href="fi_ood-pos-SYM.html">SYM</a></tt>-<tt><a href="fi_ood-pos-NUM.html">NUM</a></tt> (28; 13% instances), <tt><a href="fi_ood-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_ood-pos-NUM.html">NUM</a></tt> (4; 2% instances), <tt><a href="fi_ood-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_ood-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ood-pos-SYM.html">SYM</a></tt> (2; 1% instances), <tt><a href="fi_ood-pos-NUM.html">NUM</a></tt>-<tt><a href="fi_ood-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="fi_ood-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_ood-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="fi_ood-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ood-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 nummod	color:blue
1	Hb	Hb	NOUN	_	Abbr=Yes|Case=Nom|Number=Sing	2	nsubj:cop	_	Gen=Hemoglobiini|Gen_desc=rautapitoisuus
2	matala	matala	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	0	root	_	SpaceAfter=No
3	,	,	PUNCT	_	_	4	punct	_	_
4	saanut	saada	VERB	_	Case=Nom|Degree=Pos|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Act	2	conj	_	_
5	punasoluja	puna#solu	NOUN	_	Case=Par|Number=Plur	8	nmod	_	_
6	paineella	paine	NOUN	_	Case=Ade|Number=Sing	8	obl	_	_
7	8	8	NUM	_	NumType=Card	8	nummod	_	_
8	pussia	pussi	NOUN	_	Case=Par|Number=Sing	4	obj	_	_
9	sekä	sekä	CCONJ	_	_	10	cc	_	_
10	jääplasmaa	jää#plasma	NOUN	_	Case=Par|Number=Sing	8	conj	_	SpaceAfter=No
11	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nummod	color:blue
1	Drägerillä	Dräger	PROPN	_	Case=Ade|Number=Sing	6	obl	_	_
2	21	21	NUM	_	NumType=Card	3	nummod	_	SpaceAfter=No
3	%	%	SYM	_	_	4	nmod:poss	_	_
4	hapella	happi	NOUN	_	Case=Ade|Number=Sing	6	obl	_	_
5	SaO2	SaO2	NOUN	_	Abbr=Yes|Case=Nom|Number=Sing	6	nsubj	_	Gen=happisaturaatio
6	pysyy	pysyä	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
7	yli	yli	ADP	_	AdpType=Prep	8	case	_	_
8	90	90	NUM	_	NumType=Card	6	obl	_	_
9	2-3	2-3	NUM	_	NumType=Card	10	nummod	_	_
10	min	min	NOUN	_	Abbr=Yes|Case=Par|Number=Sing	6	obl	_	SpaceAfter=No
11	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 14 nummod	color:blue
1	Mutta	mutta	CCONJ	_	_	8	cc	_	_
2	miksi	miksi	ADV	_	_	8	advmod	_	_
3	nää	tämä	PRON	_	Case=Nom|Number=Plur|PronType=Dem|Style=Coll	8	nsubj:cop	_	_
4	ei	ei	AUX	_	Number=Plur|Person=3|Polarity=Neg|Style=Coll|VerbForm=Fin|Voice=Act	8	aux	_	_
5	voi	voida	AUX	_	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin	8	aux	_	_
6	olla	olla	AUX	_	InfForm=1|Number=Sing|VerbForm=Inf|Voice=Act	8	cop	_	_
7	vain	vain	ADV	_	_	8	advmod	_	_
8	Captain	Captain	PROPN	_	Case=Nom|Number=Sing	0	root	_	_
9	America	America	PROPN	_	Case=Nom|Number=Sing	8	flat:name	_	_
10	1	1	NUM	_	NumType=Card	8	nummod	_	_
11	ja	ja	CCONJ	_	_	12	cc	_	_
12	Captain	Captain	PROPN	_	Case=Nom|Number=Sing	8	conj	_	_
13	America	America	PROPN	_	Case=Nom|Number=Sing	12	flat:name	_	_
14	2	2	NUM	_	NumType=Card	12	nummod	_	_
15	jne.	jne.	ADV	_	Abbr=Yes	8	advmod	_	SpaceAfter=No
16	?	?	PUNCT	_	_	8	punct	_	SpacesAfter=\n

~~~


