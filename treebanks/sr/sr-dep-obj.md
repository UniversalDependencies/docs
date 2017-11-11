---
layout: base
title:  'Statistics of obj in UD_Serbian'
udver: '2'
---

## Treebank Statistics: UD_Serbian: Relations: `obj`

This relation is universal.

3064 nodes (4%) are attached to their parents as `obj`.

2695 instances of `obj` (88%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.92983028720627.

The following 23 pairs of parts of speech are connected with `obj`: <tt><a href="sr-pos-VERB.html">VERB</a></tt>-<tt><a href="sr-pos-NOUN.html">NOUN</a></tt> (2458; 80% instances), <tt><a href="sr-pos-VERB.html">VERB</a></tt>-<tt><a href="sr-pos-PRON.html">PRON</a></tt> (320; 10% instances), <tt><a href="sr-pos-ADV.html">ADV</a></tt>-<tt><a href="sr-pos-NOUN.html">NOUN</a></tt> (115; 4% instances), <tt><a href="sr-pos-VERB.html">VERB</a></tt>-<tt><a href="sr-pos-PROPN.html">PROPN</a></tt> (102; 3% instances), <tt><a href="sr-pos-ADV.html">ADV</a></tt>-<tt><a href="sr-pos-PROPN.html">PROPN</a></tt> (17; 1% instances), <tt><a href="sr-pos-AUX.html">AUX</a></tt>-<tt><a href="sr-pos-NOUN.html">NOUN</a></tt> (10; 0% instances), <tt><a href="sr-pos-ADV.html">ADV</a></tt>-<tt><a href="sr-pos-PRON.html">PRON</a></tt> (8; 0% instances), <tt><a href="sr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sr-pos-NOUN.html">NOUN</a></tt> (6; 0% instances), <tt><a href="sr-pos-VERB.html">VERB</a></tt>-<tt><a href="sr-pos-ADJ.html">ADJ</a></tt> (6; 0% instances), <tt><a href="sr-pos-VERB.html">VERB</a></tt>-<tt><a href="sr-pos-ADP.html">ADP</a></tt> (4; 0% instances), <tt><a href="sr-pos-VERB.html">VERB</a></tt>-<tt><a href="sr-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="sr-pos-VERB.html">VERB</a></tt>-<tt><a href="sr-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="sr-pos-VERB.html">VERB</a></tt>-<tt><a href="sr-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="sr-pos-VERB.html">VERB</a></tt>-<tt><a href="sr-pos-PART.html">PART</a></tt> (2; 0% instances), <tt><a href="sr-pos-VERB.html">VERB</a></tt>-<tt><a href="sr-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="sr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sr-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="sr-pos-ADV.html">ADV</a></tt>-<tt><a href="sr-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="sr-pos-AUX.html">AUX</a></tt>-<tt><a href="sr-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="sr-pos-AUX.html">AUX</a></tt>-<tt><a href="sr-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="sr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="sr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="sr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="sr-pos-PRON.html">PRON</a></tt>-<tt><a href="sr-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 obj	color:blue
1	"	"	PUNCT	_	_	3	punct	_	SpaceAfter=No
2	Ona	on	PRON	_	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
3	voli	voleti	VERB	_	Number=Sing|Person=3|Tense=Pres	0	root	_	_
4	blato	blato	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	3	obj	_	_
5	više	mnogo	ADV	_	Degree=Cmp	3	advmod	_	_
6	nego	nego	CCONJ	_	_	8	cc	_	_
7	sam	sam	ADJ	_	Animacy=Inan|Case=Acc|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	8	amod	_	_
8	život	život	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	5	conj	_	SpaceAfter=No
9	"	"	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 obj	color:blue
1	"	"	PUNCT	_	_	5	punct	_	SpaceAfter=No
2	Nikica	Nikica	PROPN	_	Case=Nom|Gender=Fem|Number=Sing	5	nsubj	_	_
3	ga	on	PRON	_	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	obj	_	_
4	je	biti	AUX	_	Number=Sing|Person=3|Tense=Pres	5	aux	_	_
5	odbila	odbiti	VERB	_	Gender=Fem|Number=Sing|VerbForm=Part	0	root	_	_
6	od	od	ADP	_	Case=Gen	8	case	_	_
7	samog	sam	ADJ	_	Case=Gen|Definite=Def|Degree=Pos|Gender=Masc|Number=Sing	8	amod	_	_
8	početka	početak	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	5	obl	_	SpaceAfter=No
9	,	,	PUNCT	_	_	14	punct	_	_
10	ali	ali	CCONJ	_	_	14	cc	_	_
11	je	biti	AUX	_	Number=Sing|Person=3|Tense=Pres	14	aux	_	_
12	on	on	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	14	nsubj	_	_
13	bio	biti	AUX	_	Gender=Masc|Number=Sing|VerbForm=Part	14	cop	_	_
14	uporan	uporan	ADJ	_	Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	5	conj	_	SpaceAfter=No
15	"	"	PUNCT	_	_	5	punct	_	SpaceAfter=No
16	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 obj	color:blue
1	Čekajući	čekati	ADV	_	VerbForm=Part	0	root	_	_
2	dugu	duga	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	1	obj	_	_
3	u	u	ADP	_	Case=Loc	5	case	_	_
4	Crnoj	crn	ADJ	_	Case=Loc|Definite=Def|Degree=Pos|Gender=Fem|Number=Sing	5	amod	_	_
5	Gori	gora	NOUN	_	Case=Loc|Gender=Fem|Number=Sing	1	obl	_	_

~~~


