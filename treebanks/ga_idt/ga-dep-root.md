---
layout: base
title:  'Statistics of root in UD_Irish'
udver: '2'
---

## Treebank Statistics: UD_Irish: Relations: `root`

This relation is universal.

1020 nodes (4%) are attached to their parents as `root`.

1020 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.40686274509804.

The following 14 pairs of parts of speech are connected with `root`: -<tt><a href="ga-pos-VERB.html">VERB</a></tt> (644; 63% instances), -<tt><a href="ga-pos-NOUN.html">NOUN</a></tt> (166; 16% instances), -<tt><a href="ga-pos-ADJ.html">ADJ</a></tt> (60; 6% instances), -<tt><a href="ga-pos-ADP.html">ADP</a></tt> (36; 4% instances), -<tt><a href="ga-pos-PRON.html">PRON</a></tt> (36; 4% instances), -<tt><a href="ga-pos-PROPN.html">PROPN</a></tt> (32; 3% instances), -<tt><a href="ga-pos-ADV.html">ADV</a></tt> (12; 1% instances), -<tt><a href="ga-pos-AUX.html">AUX</a></tt> (11; 1% instances), -<tt><a href="ga-pos-X.html">X</a></tt> (10; 1% instances), -<tt><a href="ga-pos-CCONJ.html">CCONJ</a></tt> (4; 0% instances), -<tt><a href="ga-pos-PUNCT.html">PUNCT</a></tt> (3; 0% instances), -<tt><a href="ga-pos-SCONJ.html">SCONJ</a></tt> (3; 0% instances), -<tt><a href="ga-pos-PART.html">PART</a></tt> (2; 0% instances), -<tt><a href="ga-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 6 root	color:blue
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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 1 root	color:blue
1	Limistéar	limistéar	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	0	root	_	_
2	na	na	DET	Art	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	Meánmhara	muir	NOUN	Noun	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	1	compound	_	_
4	is	is	AUX	Cop	Tense=Pres|VerbForm=Cop	5	cop	_	_
5	áit	áit	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	1	ccomp	_	_
6	dúcháis	dúchas	NOUN	Noun	Case=Gen|Gender=Masc|Number=Sing	5	compound	_	_
7	don	do	ADP	Art	Number=Sing|PronType=Art	9	case	_	_
8	Rós	Rós	PROPN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	9	compound	_	_
9	Mhuire	Muire	PROPN	Noun	Case=Gen|Gender=Fem|Number=Sing	5	nmod	_	SpaceAfter=No
10	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 2 root	color:blue
1	Ar	is	AUX	Cop	Tense=Past|VerbForm=Cop	2	cop	_	_
2	mhaith	maith	ADJ	Adj	Degree=Pos|Form=Len	0	root	_	_
3	leat	le	ADP	Prep	Number=Sing|Person=2	2	obl:prep	_	_
4	teach	teach	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	6	obj	_	_
5	a	a	PART	Inf	PartType=Inf	6	mark	_	_
6	cheannach	ceannach	NOUN	Noun	Form=Len|VerbForm=Inf	2	nsubj	_	SpaceAfter=No
7	.	.	PUNCT	.	_	2	punct	_	_

~~~


