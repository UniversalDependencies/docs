---
layout: base
title:  'Statistics of obl:prep in UD_Irish'
udver: '2'
---

## Treebank Statistics: UD_Irish: Relations: `obl:prep`

This relation is a language-specific subtype of <tt><a href="ga-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="ga-dep-obl-tmod.html">obl:tmod</a></tt>.

467 nodes (2%) are attached to their parents as `obl:prep`.

463 instances of `obl:prep` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.52248394004283.

The following 11 pairs of parts of speech are connected with `obl:prep`: <tt><a href="ga-pos-VERB.html">VERB</a></tt>-<tt><a href="ga-pos-ADP.html">ADP</a></tt> (259; 55% instances), <tt><a href="ga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga-pos-ADP.html">ADP</a></tt> (141; 30% instances), <tt><a href="ga-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga-pos-ADP.html">ADP</a></tt> (46; 10% instances), <tt><a href="ga-pos-ADV.html">ADV</a></tt>-<tt><a href="ga-pos-ADP.html">ADP</a></tt> (6; 1% instances), <tt><a href="ga-pos-ADP.html">ADP</a></tt>-<tt><a href="ga-pos-ADP.html">ADP</a></tt> (3; 1% instances), <tt><a href="ga-pos-PRON.html">PRON</a></tt>-<tt><a href="ga-pos-ADP.html">ADP</a></tt> (3; 1% instances), <tt><a href="ga-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga-pos-ADP.html">ADP</a></tt> (3; 1% instances), <tt><a href="ga-pos-DET.html">DET</a></tt>-<tt><a href="ga-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="ga-pos-X.html">X</a></tt>-<tt><a href="ga-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="ga-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="ga-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="ga-pos-NUM.html">NUM</a></tt>-<tt><a href="ga-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 obl:prep	color:blue
1	Ansin	ansin	ADV	Loc	_	6	advmod	_	_
2	nach	is	AUX	Cop	Mood=Int|Polarity=Neg|Tense=Pres|VerbForm=Cop	6	cop	_	_
3	deas	deas	ADJ	Adj	Degree=Pos	6	xcomp:pred	_	_
4	mar	mar	SCONJ	Subord	_	6	mark	_	_
5	a	a	PART	Vb	PartType=Vb|PronType=Rel	6	mark:prt	_	_
6	bheadh	bí	VERB	Cond	Form=Len|Mood=Cnd	0	root	_	_
7	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	8	det	_	_
8	scéal	scéal	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Sing	6	nsubj	_	_
9	a'm	ag	ADP	Prep	Number=Sing|Person=1	6	obl:prep	_	SpaceAfter=No
10	?	?	PUNCT	?	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 obl:prep	color:blue
1	Bhí	bí	VERB	PastInd	Form=Len|Mood=Ind|Tense=Past	0	root	_	_
2	a	a	DET	Det	Gender=Masc|Number=Sing|Person=3|Poss=Yes	3	nmod:poss	_	_
3	mhaide	maide	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Masc|Number=Sing	1	nsubj	_	_
4	siúil	siúl	NOUN	Noun	Case=Gen|Gender=Masc|Number=Sing	3	compound	_	_
5	ina	i	ADP	Poss	Gender=Masc|Number=Sing|Person=3|Poss=Yes	6	case	_	_
6	láimh	lámh	NOUN	Noun	Case=Dat|Gender=Fem|Number=Sing	1	xcomp:pred	_	_
7	aige	ag	ADP	Prep	Gender=Masc|Number=Sing|Person=3	6	obl:prep	_	SpaceAfter=No
8	...	...	PUNCT	Punct	_	9	punct	_	_
9	Bhí	bí	VERB	PastInd	Form=Len|Mood=Ind|Tense=Past	1	ccomp	_	_
10	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	11	det	_	_
11	áit	áit	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Fem|Number=Sing	9	nsubj	_	_
12	réabtha	réabtha	ADJ	Adj	VerbForm=Part	9	xcomp:pred	_	_
13	dóite	dóite	ADJ	Adj	VerbForm=Part	12	amod	_	SpaceAfter=No
14	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 obl:prep	color:blue
1	Ar	is	AUX	Cop	Tense=Past|VerbForm=Cop	2	cop	_	_
2	mhaith	maith	ADJ	Adj	Degree=Pos|Form=Len	0	root	_	_
3	leat	le	ADP	Prep	Number=Sing|Person=2	2	obl:prep	_	_
4	teach	teach	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	6	obj	_	_
5	a	a	PART	Inf	PartType=Inf	6	mark	_	_
6	cheannach	ceannach	NOUN	Noun	Form=Len|VerbForm=Inf	2	nsubj	_	SpaceAfter=No
7	.	.	PUNCT	.	_	2	punct	_	_

~~~


