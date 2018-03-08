---
layout: base
title:  'Statistics of cop in UD_Irish'
udver: '2'
---

## Treebank Statistics: UD_Irish: Relations: `cop`

This relation is universal.

373 nodes (2%) are attached to their parents as `cop`.

368 instances of `cop` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.23592493297587.

The following 9 pairs of parts of speech are connected with `cop`: <tt><a href="ga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga-pos-AUX.html">AUX</a></tt> (144; 39% instances), <tt><a href="ga-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga-pos-AUX.html">AUX</a></tt> (129; 35% instances), <tt><a href="ga-pos-ADP.html">ADP</a></tt>-<tt><a href="ga-pos-AUX.html">AUX</a></tt> (47; 13% instances), <tt><a href="ga-pos-PRON.html">PRON</a></tt>-<tt><a href="ga-pos-AUX.html">AUX</a></tt> (35; 9% instances), <tt><a href="ga-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga-pos-AUX.html">AUX</a></tt> (10; 3% instances), <tt><a href="ga-pos-ADV.html">ADV</a></tt>-<tt><a href="ga-pos-AUX.html">AUX</a></tt> (4; 1% instances), <tt><a href="ga-pos-VERB.html">VERB</a></tt>-<tt><a href="ga-pos-AUX.html">AUX</a></tt> (2; 1% instances), <tt><a href="ga-pos-DET.html">DET</a></tt>-<tt><a href="ga-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="ga-pos-X.html">X</a></tt>-<tt><a href="ga-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 cop	color:blue
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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 cop	color:blue
1	Ar	is	AUX	Cop	Tense=Past|VerbForm=Cop	2	cop	_	_
2	mhaith	maith	ADJ	Adj	Degree=Pos|Form=Len	0	root	_	_
3	leat	le	ADP	Prep	Number=Sing|Person=2	2	obl:prep	_	_
4	teach	teach	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	6	obj	_	_
5	a	a	PART	Inf	PartType=Inf	6	mark	_	_
6	cheannach	ceannach	NOUN	Noun	Form=Len|VerbForm=Inf	2	nsubj	_	SpaceAfter=No
7	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 cop	color:blue
1	Is	is	AUX	Cop	Tense=Pres|VerbForm=Cop	2	cop	_	_
2	ag	ag	ADP	Simp	_	3	case	_	_
3	léamh	léamh	NOUN	Noun	VerbForm=Vnoun	0	root	_	_
4	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	5	det	_	_
5	nuachtáin	nuachtán	NOUN	Noun	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	3	obj	_	_
6	a	a	PART	Vb	PartType=Vb|PronType=Rel	7	mark:prt	_	_
7	bhí	bí	VERB	PastInd	Form=Len|Mood=Ind|Tense=Past	3	csubj:cleft	_	_
8	seisean	seisean	PRON	Pers	Gender=Masc|Number=Sing|Person=3|PronType=Emp	7	nsubj	_	SpaceAfter=No
9	.	.	PUNCT	.	_	3	punct	_	_

~~~


