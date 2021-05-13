---
layout: base
title:  'Statistics of root in UD_Irish-IDT'
udver: '2'
---

## Treebank Statistics: UD_Irish-IDT: Relations: `root`

This relation is universal.

4910 nodes (4%) are attached to their parents as `root`.

4910 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.35071283095723.

The following 16 pairs of parts of speech are connected with `root`: -<tt><a href="ga_idt-pos-VERB.html">VERB</a></tt> (3480; 71% instances), -<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (811; 17% instances), -<tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt> (263; 5% instances), -<tt><a href="ga_idt-pos-PRON.html">PRON</a></tt> (152; 3% instances), -<tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt> (107; 2% instances), -<tt><a href="ga_idt-pos-ADP.html">ADP</a></tt> (22; 0% instances), -<tt><a href="ga_idt-pos-ADV.html">ADV</a></tt> (21; 0% instances), -<tt><a href="ga_idt-pos-NUM.html">NUM</a></tt> (12; 0% instances), -<tt><a href="ga_idt-pos-X.html">X</a></tt> (11; 0% instances), -<tt><a href="ga_idt-pos-PUNCT.html">PUNCT</a></tt> (10; 0% instances), -<tt><a href="ga_idt-pos-AUX.html">AUX</a></tt> (8; 0% instances), -<tt><a href="ga_idt-pos-INTJ.html">INTJ</a></tt> (5; 0% instances), -<tt><a href="ga_idt-pos-PART.html">PART</a></tt> (3; 0% instances), -<tt><a href="ga_idt-pos-CCONJ.html">CCONJ</a></tt> (2; 0% instances), -<tt><a href="ga_idt-pos-SCONJ.html">SCONJ</a></tt> (2; 0% instances), -<tt><a href="ga_idt-pos-SYM.html">SYM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 8 root	color:blue
1	'	'	PUNCT	Punct	_	2	punct	_	SpaceAfter=No
2	Dona	dona	ADJ	Adj	Degree=Pos	8	parataxis	_	_
3	go	go	ADV	Gn	_	2	advmod	_	_
4	leor	leor	ADJ	Adj	_	3	fixed	_	SpaceAfter=No
5	,	,	PUNCT	Punct	_	2	punct	_	SpaceAfter=No
6	'	'	PUNCT	Punct	_	2	punct	_	_
7	a	a	PART	Vb	Form=Direct|PartType=Vb|PronType=Rel	8	mark:prt	_	_
8	deir	abair	VERB	VTI	Mood=Ind|Tense=Pres	0	root	_	_
9	Tom	Tom	PROPN	Noun	Definite=Def|Gender=Masc|Number=Sing	8	nsubj	_	SpaceAfter=No
10	.	.	PUNCT	.	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 1 root	color:blue
1	Bean	bean	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	0	root	_	_
2	shuidhte	suidhte	ADJ	Adj	Form=Len|VerbForm=Part	1	amod	_	_
3	dhéanta	déanta	ADJ	Adj	Degree=Pos|Form=Len	1	amod	_	SpaceAfter=No
4	...	...	PUNCT	...	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 2 root	color:blue
1	Níorbh	is	AUX	Cop	Form=VF|Polarity=Neg|Tense=Past|VerbForm=Cop	2	cop	_	_
2	ionann	ionann	ADJ	Adj	Degree=Pos	0	root	_	_
3	tithe	teach	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Plur	2	nsubj	_	_
4	na	an	DET	Art	Case=Gen|Definite=Def|Number=Plur|PronType=Art	5	det	_	_
5	gcathracha	cathair	NOUN	Noun	Case=Gen|Definite=Def|Form=Ecl|Gender=Fem|NounType=Strong|Number=Plur	3	nmod	_	_
6	agus	agus	CCONJ	Coord	_	7	cc	_	_
7	tithe	teach	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Plur	3	conj	_	_
8	na	an	DET	Art	Case=Gen|Definite=Def|Number=Plur|PronType=Art	9	det	_	_
9	mbailte	baile	NOUN	Noun	Case=Gen|Definite=Def|Form=Ecl|Gender=Masc|NounType=Strong|Number=Plur	7	nmod	_	_
10	beaga	beag	ADJ	Adj	Case=Gen|Gender=Masc|NounType=Strong|Number=Plur	9	amod	_	SpaceAfter=No
11	.	.	PUNCT	.	_	2	punct	_	_

~~~


