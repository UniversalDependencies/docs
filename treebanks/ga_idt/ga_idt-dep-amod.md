---
layout: base
title:  'Statistics of amod in UD_Irish-IDT'
udver: '2'
---

## Treebank Statistics: UD_Irish-IDT: Relations: `amod`

This relation is universal.

4200 nodes (4%) are attached to their parents as `amod`.

3962 instances of `amod` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.26547619047619.

The following 19 pairs of parts of speech are connected with `amod`: <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt> (3715; 88% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-NUM.html">NUM</a></tt> (183; 4% instances), <tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt> (147; 4% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt> (36; 1% instances), <tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt> (31; 1% instances), <tt><a href="ga_idt-pos-PRON.html">PRON</a></tt>-<tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt> (27; 1% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-ADV.html">ADV</a></tt> (20; 0% instances), <tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_idt-pos-ADV.html">ADV</a></tt> (14; 0% instances), <tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_idt-pos-NUM.html">NUM</a></tt> (9; 0% instances), <tt><a href="ga_idt-pos-NUM.html">NUM</a></tt>-<tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt> (4; 0% instances), <tt><a href="ga_idt-pos-X.html">X</a></tt>-<tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="ga_idt-pos-ADV.html">ADV</a></tt>-<tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="ga_idt-pos-ADP.html">ADP</a></tt>-<tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ga_idt-pos-DET.html">DET</a></tt>-<tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ga_idt-pos-PART.html">PART</a></tt>-<tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 amod	color:blue
1	Bean	bean	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	0	root	_	_
2	shuidhte	suidhte	ADJ	Adj	Form=Len|VerbForm=Part	1	amod	_	_
3	dhéanta	déanta	ADJ	Adj	Degree=Pos|Form=Len	1	amod	_	SpaceAfter=No
4	...	...	PUNCT	...	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 amod	color:blue
1	Ar	ar	ADP	Simp	_	4	case	_	_
2	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	4	det	_	_
3	gcéad	céad	NUM	Num	Form=Ecl|NumType=Ord	4	amod	_	_
4	dul	dul	NOUN	Noun	Definite=Def|VerbForm=Inf	7	obl	_	_
5	síos	síos	ADV	Dir	_	4	advmod	_	SpaceAfter=No
6	,	,	PUNCT	Punct	_	4	punct	_	_
7	tá	bí	VERB	PresInd	Mood=Ind|Tense=Pres	0	root	_	_
8	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	9	det	_	_
9	Rialtas	rialtas	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Sing	7	nsubj	_	_
10	páirteach	páirteach	ADJ	Adj	Degree=Pos	7	xcomp:pred	_	_
11	ann	i	ADP	Prep	Gender=Masc|Number=Sing|Person=3	7	obl:prep	_	SpaceAfter=No
12	.	.	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 amod	color:blue
1	Slán	slán	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	0	root	_	_
2	leat	le	ADP	Prep	Number=Sing|Person=2	1	obl:prep	_	SpaceAfter=No
3	,	,	PUNCT	Punct	_	5	punct	_	_
4	a	a	PART	Voc	PartType=Voc	5	case:voc	_	_
5	Mhichíl	Micheál	PROPN	Noun	Case=Voc|Definite=Def|Form=Len|Gender=Masc|Number=Sing	1	vocative	_	_
6	ghrinn	grinn	ADJ	Adj	Form=Len|Gender=Masc|Number=Sing	5	amod	_	SpaceAfter=No
7	.	.	PUNCT	.	_	1	punct	_	_

~~~


