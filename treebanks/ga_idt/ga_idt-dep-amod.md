---
layout: base
title:  'Statistics of amod in UD_Irish-IDT'
udver: '2'
---

## Treebank Statistics: UD_Irish-IDT: Relations: `amod`

This relation is universal.

1184 nodes (3%) are attached to their parents as `amod`.

1157 instances of `amod` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.71199324324324.

The following 18 pairs of parts of speech are connected with `amod`: <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt> (1038; 88% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt> (45; 4% instances), <tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt> (31; 3% instances), <tt><a href="ga_idt-pos-PRON.html">PRON</a></tt>-<tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt> (22; 2% instances), <tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt> (21; 2% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (5; 0% instances), <tt><a href="ga_idt-pos-X.html">X</a></tt>-<tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt> (5; 0% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-ADV.html">ADV</a></tt> (3; 0% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-X.html">X</a></tt> (3; 0% instances), <tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_idt-pos-ADV.html">ADV</a></tt> (3; 0% instances), <tt><a href="ga_idt-pos-ADP.html">ADP</a></tt>-<tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ga_idt-pos-DET.html">DET</a></tt>-<tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="ga_idt-pos-X.html">X</a></tt>-<tt><a href="ga_idt-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 amod	color:blue
1	Bean	bean	NOUN	Noun	Gender=Fem|Number=Sing	0	root	_	_
2	shuidhte	suidhte	ADJ	Adj	Form=Len|VerbForm=Part	1	amod	_	_
3	dhéanta	déanta	ADJ	Adj	Degree=Pos|Form=Len	1	amod	_	SpaceAfter=No
4	...	...	PUNCT	...	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 amod	color:blue
1	Níor	níor	PART	Vb	PartType=Vb|Tense=Past	2	advmod	_	_
2	dhúirt	abair	VERB	VTI	Form=Len|Mood=Ind|Tense=Past	0	root	_	_
3	Mr.	Mr.	X	Abr	Abbr=Yes	2	nsubj	_	_
4	Mac	mac	PART	Pat	Gender=Masc|Number=Sing	3	flat:name	_	_
5	níos	níos	PART	Cmp	Number=Sing|PartType=Comp	6	mark:prt	_	_
6	mó	mór	ADJ	Adj	Degree=Cmp,Sup	2	amod	_	_
7	ach	ach	SCONJ	Subord	_	11	mark	_	_
8	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	9	det	_	_
9	doras	doras	NOUN	Noun	Definite=Def|Gender=Masc|Number=Sing	11	obj	_	_
10	a	a	PART	Inf	PartType=Inf	11	mark	_	_
11	dhúnadh	dúnadh	NOUN	Noun	Form=Len|VerbForm=Inf	2	advcl	_	_
12	amach	amach	ADV	Dir	_	11	advmod	_	_
13	air	ar	ADP	Prep	Gender=Masc|Number=Sing|Person=3	11	obl:prep	_	SpaceAfter=No
14	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 13 amod	color:blue
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


