---
layout: base
title:  'Statistics of det in UD_Estonian'
udver: '2'
---

## Treebank Statistics: UD_Estonian: Relations: `det`

This relation is universal.

1522 nodes (1%) are attached to their parents as `det`.

1474 instances of `det` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.37910643889619.

The following 9 pairs of parts of speech are connected with `det`: <tt><a href="et-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et-pos-PRON.html">PRON</a></tt> (1383; 91% instances), <tt><a href="et-pos-PRON.html">PRON</a></tt>-<tt><a href="et-pos-PRON.html">PRON</a></tt> (71; 5% instances), <tt><a href="et-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et-pos-PRON.html">PRON</a></tt> (17; 1% instances), <tt><a href="et-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et-pos-DET.html">DET</a></tt> (16; 1% instances), <tt><a href="et-pos-NUM.html">NUM</a></tt>-<tt><a href="et-pos-PRON.html">PRON</a></tt> (12; 1% instances), <tt><a href="et-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et-pos-PRON.html">PRON</a></tt> (11; 1% instances), <tt><a href="et-pos-ADV.html">ADV</a></tt>-<tt><a href="et-pos-PRON.html">PRON</a></tt> (9; 1% instances), <tt><a href="et-pos-VERB.html">VERB</a></tt>-<tt><a href="et-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="et-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="et-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 det	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 det	color:blue
1	Seda	see	PRON	P	Case=Par|Number=Sing|PronType=Dem	2	det	_	_
2	kõike	kõik	PRON	P	Case=Par|Number=Sing|PronType=Tot	5	obj	_	_
3	Indrikson	Indrikson	PROPN	S	Case=Nom|Number=Sing	7	nsubj	_	_
4	enam	enam	ADV	D	_	7	advmod	_	_
5	näha	nägema	VERB	V	VerbForm=Inf	7	xcomp	_	_
6	ei	ei	AUX	V	Mood=Ind|Polarity=Neg|VerbForm=Fin	7	aux	_	_
7	jõudnud	jõudma	VERB	V	Connegative=Yes|Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
8	.	.	PUNCT	Z	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 det	color:blue
1	Jah	jah	ADV	D	_	4	advmod	_	SpaceAfter=No
2	,	,	PUNCT	Z	_	4	punct	_	_
3	sama	sama	PRON	P	Case=Nom|Number=Sing|PronType=Dem	4	det	_	_
4	Madis	Madis	PROPN	S	Case=Nom|Number=Sing	0	root	_	SpaceAfter=No
5	,	,	PUNCT	Z	_	7	punct	_	_
6	kes	kes	PRON	P	Case=Nom|Number=Sing|PronType=Int,Rel	7	nsubj	_	_
7	elab	elama	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	acl:relcl	_	_
8	erakas	erakas	NOUN	S	Case=Ine|Number=Sing	7	obl	_	_
9	-	-	PUNCT	Z	_	7	punct	_	_
10	prillidega	prill	NOUN	S	Case=Com|Number=Plur	4	nmod	_	SpaceAfter=No
11	.	.	PUNCT	Z	_	4	punct	_	_
12	"	"	PUNCT	Z	_	4	punct	_	_

~~~


