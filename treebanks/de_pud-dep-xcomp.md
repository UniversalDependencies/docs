---
layout: base
title:  'Statistics of xcomp in UD_German-PUD'
udver: '2'
---

## Treebank Statistics: UD_German-PUD: Relations: `xcomp`

This relation is universal.

122 nodes (1%) are attached to their parents as `xcomp`.

111 instances of `xcomp` (91%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.76229508196721.

The following 10 pairs of parts of speech are connected with `xcomp`: <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-VERB.html">VERB</a></tt> (77; 63% instances), <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-VERB.html">VERB</a></tt> (31; 25% instances), <tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_pud-pos-VERB.html">VERB</a></tt> (7; 6% instances), <tt><a href="de_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="de_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="de_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="de_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="de_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="de_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 xcomp	color:blue
1	Hong	_	PROPN	NNP	Case=Nom|Gender=Neut|Number=Sing|Person=3	3	nsubj	_	_
2	Kong	_	PROPN	NNP	Case=Nom|Gender=Neut|Number=Sing|Person=3	1	flat:name	_	_
3	scheint	_	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
4	sich	_	PRON	PRP	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Rcp	8	obj	_	_
5	auf	_	ADP	IN	_	7	case	_	_
6	eine	_	DET	DT	Case=Acc|Definite=Ind|Gender=Fem|Number=Sing|Person=3	7	det	_	_
7	Protestwelle	_	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing|Person=3	8	obl	_	_
8	vorzubereiten	_	VERB	VB	_	3	xcomp	_	SpaceAfter=No
9	.	_	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 xcomp	color:blue
1	Technologisch	_	ADV	RB	Degree=Pos	2	advmod	_	_
2	bemerkenswert	_	ADJ	JJ	Degree=Pos	0	root	_	_
3	ist	_	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	2	cop	_	_
4	überdies	_	ADV	RB	Degree=Pos	2	advmod	_	_
5	ihr	_	PRON	DTP$	Case=Nom|Gender=Neut|Number=Sing|Person=3|Person[psor]=3|PronType=Prs	6	nmod:poss	_	_
6	Verfahren	_	NOUN	NN	Case=Nom|Gender=Neut|Number=Sing|Person=3	2	nsubj	_	SpaceAfter=No
7	,	_	PUNCT	,	_	10	punct	_	_
8	Kupfer	_	NOUN	NN	Case=Acc|Gender=Neut|Number=Sing|Person=3	10	obj	_	_
9	zu	_	PART	RP	_	10	mark	_	_
10	vergolden	_	VERB	VB	VerbForm=Inf	6	xcomp	_	SpaceAfter=No
11	.	_	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 13 xcomp	color:blue
1	Platon	_	PROPN	NNP	Case=Nom|Gender=Masc|Number=Sing|Person=3	6	nsubj	_	_
2	hielt	_	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	6	cop	_	_
3	es	_	PRON	PRP	Case=Acc|Gender=Neut|Number=Sing|Person=3	6	obj	_	_
4	für	_	CCONJ	CC	_	6	cc	_	_
5	bedeutend	_	ADV	RB	Degree=Pos	6	advmod	_	_
6	sicherer	_	ADJ	JJ	Degree=Cmp|Person=3	0	root	_	SpaceAfter=No
7	,	_	PUNCT	,	_	13	punct	_	_
8	die	_	DET	DT	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|Person=3	9	det	_	_
9	Macht	_	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing|Person=3	13	obj	_	_
10	hoch	_	ADV	RB	Degree=Pos	11	advmod	_	_
11	gebildeten	_	ADJ	JJ	Case=Dat|Degree=Pos|Gender=Masc|Number=Plur|Person=3	12	amod	_	InflectionType=Strong
12	Wächtern	_	NOUN	NN	Case=Dat|Gender=Masc|Number=Plur|Person=3	13	iobj	_	_
13	anzuvertrauen	_	VERB	VB	_	6	xcomp	_	SpaceAfter=No
14	.	_	PUNCT	.	_	6	punct	_	_

~~~


