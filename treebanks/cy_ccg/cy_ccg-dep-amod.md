---
layout: base
title:  'Statistics of amod in UD_Welsh-CCG'
udver: '2'
---

## Treebank Statistics: UD_Welsh-CCG: Relations: `amod`

This relation is universal.

1743 nodes (5%) are attached to their parents as `amod`.

1437 instances of `amod` (82%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.14629948364888.

The following 16 pairs of parts of speech are connected with `amod`: <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt> (1653; 95% instances), <tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt> (25; 1% instances), <tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt> (22; 1% instances), <tt><a href="cy_ccg-pos-NUM.html">NUM</a></tt>-<tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt> (18; 1% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-ADV.html">ADV</a></tt> (6; 0% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (6; 0% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="cy_ccg-pos-PRON.html">PRON</a></tt>-<tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cy_ccg-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="cy_ccg-pos-ADV.html">ADV</a></tt>-<tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="cy_ccg-pos-ADV.html">ADV</a></tt>-<tt><a href="cy_ccg-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cy_ccg-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 amod	color:blue
1	Yr	y	PART	aff	_	2	advmod	_	_
2	ydym	bod	VERB	verb	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
3	yn	yn	AUX	impf	_	4	aux	_	_
4	llithro	llithro	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	2	xcomp	_	_
5	i	i	ADP	prep	_	6	case	_	_
6	le	lle	NOUN	noun	Gender=Masc|Mutation=SM|Number=Sing	4	obl	_	_
7	tywyll	tywyll	ADJ	pos	Degree=Pos	6	amod	_	_
8	dros	dros	ADP	prep	_	9	case	_	_
9	ben	pen	NOUN	noun	Gender=Masc|Mutation=SM|Number=Sing	4	obl	_	SpaceAfter=No
10	.	.	PUNCT	punct	_	2	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 amod	color:blue
1	Ychydig	ychydig	NOUN	noun	Gender=Masc|Number=Sing	0	root	_	_
2	iawn	iawn	ADV	adv	_	1	advmod	_	_
3	o	o	ADP	prep	_	4	case	_	_
4	dystiolaeth	tystiolaeth	NOUN	noun	Gender=Fem|Mutation=SM|Number=Sing	1	nmod	_	_
5	a	a	PRON	rel	PronType=Rel	6	obj	_	_
6	welir	gweld	VERB	verb	Mood=Ind|Mutation=SM|Person=0|Tense=Fut|VerbForm=Fin	4	acl:relcl	_	_
7	o	o	ADP	prep	_	8	case	_	_
8	fywyd	bywyd	NOUN	noun	Gender=Masc|Mutation=SM|Number=Sing	6	obl	_	_
9	canol	canol	ADJ	pos	Degree=Pos	8	amod	_	_
10	oesol	oesol	ADJ	pos	Degree=Pos	9	amod	_	_
11	Abertawe	Abertawe	PROPN	place	_	8	nmod	_	SpaceAfter=No
12	.	.	PUNCT	punct	_	6	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 amod	color:blue
1	Mae	bod	AUX	aux	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
2	'r	y	DET	art	_	3	det	_	_
3	rhybudd	rhybudd	NOUN	noun	Gender=Masc|Number=Sing	1	nsubj	_	_
4	yn	yn	ADP	prep	_	6	case	_	_
5	ei	ef	PRON	dep	Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	6	nmod:poss	_	_
6	le	lle	NOUN	noun	Gender=Masc|Mutation=SM|Number=Sing	1	obl	_	_
7	drwy	trwy	ADP	prep	Mutation=SM	8	case	_	_
8	Gymru	Cymru	PROPN	place	Gender=Fem|Mutation=SM|Number=Sing	6	nmod	_	_
9	gyfan	cyfan	ADJ	pos	Degree=Pos|Mutation=SM	8	amod	_	SpaceAfter=No
10	.	.	PUNCT	punct	_	1	punct	_	SpacesAfter=\n

~~~


