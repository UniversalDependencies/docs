---
layout: base
title:  'Statistics of discourse in UD_Czech-CAC'
udver: '2'
---

## Treebank Statistics: UD_Czech-CAC: Relations: `discourse`

This relation is universal.

104 nodes (0%) are attached to their parents as `discourse`.

94 instances of `discourse` (90%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.99038461538462.

The following 23 pairs of parts of speech are connected with `discourse`: <tt><a href="cs_cac-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cac-pos-PRON.html">PRON</a></tt> (23; 22% instances), <tt><a href="cs_cac-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cac-pos-DET.html">DET</a></tt> (21; 20% instances), <tt><a href="cs_cac-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cac-pos-DET.html">DET</a></tt> (9; 9% instances), <tt><a href="cs_cac-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cac-pos-ADV.html">ADV</a></tt> (9; 9% instances), <tt><a href="cs_cac-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cac-pos-DET.html">DET</a></tt> (7; 7% instances), <tt><a href="cs_cac-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_cac-pos-DET.html">DET</a></tt> (7; 7% instances), <tt><a href="cs_cac-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_cac-pos-DET.html">DET</a></tt> (4; 4% instances), <tt><a href="cs_cac-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cac-pos-PART.html">PART</a></tt> (4; 4% instances), <tt><a href="cs_cac-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cac-pos-SCONJ.html">SCONJ</a></tt> (3; 3% instances), <tt><a href="cs_cac-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cac-pos-PRON.html">PRON</a></tt> (2; 2% instances), <tt><a href="cs_cac-pos-AUX.html">AUX</a></tt>-<tt><a href="cs_cac-pos-DET.html">DET</a></tt> (2; 2% instances), <tt><a href="cs_cac-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cac-pos-PRON.html">PRON</a></tt> (2; 2% instances), <tt><a href="cs_cac-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cac-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="cs_cac-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cac-pos-PART.html">PART</a></tt> (1; 1% instances), <tt><a href="cs_cac-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cac-pos-SCONJ.html">SCONJ</a></tt> (1; 1% instances), <tt><a href="cs_cac-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_cac-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="cs_cac-pos-AUX.html">AUX</a></tt>-<tt><a href="cs_cac-pos-PART.html">PART</a></tt> (1; 1% instances), <tt><a href="cs_cac-pos-DET.html">DET</a></tt>-<tt><a href="cs_cac-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="cs_cac-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cac-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="cs_cac-pos-NUM.html">NUM</a></tt>-<tt><a href="cs_cac-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="cs_cac-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_cac-pos-INTJ.html">INTJ</a></tt> (1; 1% instances), <tt><a href="cs_cac-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cac-pos-CCONJ.html">CCONJ</a></tt> (1; 1% instances), <tt><a href="cs_cac-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cac-pos-INTJ.html">INTJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 discourse	color:blue
1	Na	na	ADP	RR--6----------	AdpType=Prep|Case=Loc	2	case	2:case	LId=na-1
2	balkóně	balkón	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	6	obl	6:obl:na:loc	_
3	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	6	expl:pv	6:expl:pv	LGloss=(zvr._zájmeno/částice)
4	nám	já	PRON	PP-P3--1-------	Case=Dat|Number=Plur|Person=1|PronType=Prs	6	discourse	6:discourse	_
5	jich	on	PRON	PPXP2--3-------	Case=Gen|Number=Plur|Person=3|PrepCase=Npr|PronType=Prs	7	nmod	7:nmod:gen	LId=on-1
6	sejde	sejít	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
7	více	hodně	ADV	Dg-------2A----	Degree=Cmp|Polarity=Pos	6	nsubj	6:nsubj	_
8	než	než	SCONJ	J,-------------	_	9	mark	9:mark	LId=než-2
9	desítka	desítka	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing	7	obl	7:obl:než	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 discourse	color:blue
1	To	ten	DET	PDNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	4	discourse	4:discourse	_
2	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	11	expl:pv	11:expl:pv	LGloss=(zvr._zájmeno/částice)
3	ho	on	PRON	PHZS4--3-------	Case=Acc|Gender=Masc,Neut|Number=Sing|Person=3|PronType=Prs|Variant=Short	11	obj	11:obj	_
4	začaly	začít	VERB	VpTP---XR-AA---	Animacy=Inan|Gender=Fem,Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	LId=začít-1
5	bezmála	bezmála	ADV	Db-------------	_	6	advmod	6:advmod	_
6	#	&camount;	NUM	C=-------------	NumForm=Digit|NumType=Card	7	nummod:gov	7:nummod:gov	_
7	let	rok	NOUN	NNNP2-----A----	Case=Gen|Gender=Neut|Number=Plur	4	obl	4:obl	_
8	po	po	ADP	RR--6----------	AdpType=Prep|Case=Loc	10	case	10:case	LId=po-1
9	jeho	jeho	DET	PSXXXZS3-------	Gender[psor]=Masc,Neut|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	10	det	10:det	LGloss=(přivlast.)
10	*	&cwildcard;	SYM	Xx-------------	Abbr=Yes	7	nmod	7:nmod:po:loc	_
11	*	&cwildcard;	SYM	Xx-------------	Abbr=Yes	4	obj	4:obj	_
12	.	.	PUNCT	Z:-------------	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 discourse	color:blue
1	Z	z	ADP	RR--2----------	AdpType=Prep|Case=Gen	3	case	3:case	LId=z-1
2	jednoho	jeden	NUM	ClZS2----------	Case=Gen|Gender=Masc,Neut|Number=Sing|NumForm=Word|NumType=Card	3	nummod	3:nummod	LNumValue=1
3	konce	konec	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	0	root	0:root	_
4	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	5	case	5:case	LId=na-1
5	druhý	druhý	ADJ	AAIS4----1A----	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	3	dep	3:dep	LId=druhý-1|LGloss=(jiný)
6	je	být	AUX	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	3:cop	_
7	to	ten	DET	PDNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	3	discourse	3:discourse	_
8	čtyřicet	čtyřicet	NUM	Cn-S1----------	Case=Nom|Number=Sing|NumForm=Word|NumType=Card	9	nummod:gov	9:nummod:gov	LNumValue=40
9	kilometrů	kilometr	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	3	nsubj	3:nsubj	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


