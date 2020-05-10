---
layout: base
title:  'Statistics of discourse in UD_Czech-CAC'
udver: '2'
---

## Treebank Statistics: UD_Czech-CAC: Relations: `discourse`

This relation is universal.

104 nodes (0%) are attached to their parents as `discourse`.

95 instances of `discourse` (91%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.90384615384615.

The following 18 pairs of parts of speech are connected with `discourse`: <tt><a href="cs_cac-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cac-pos-DET.html">DET</a></tt> (32; 31% instances), <tt><a href="cs_cac-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cac-pos-PRON.html">PRON</a></tt> (24; 23% instances), <tt><a href="cs_cac-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cac-pos-ADV.html">ADV</a></tt> (9; 9% instances), <tt><a href="cs_cac-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cac-pos-DET.html">DET</a></tt> (7; 7% instances), <tt><a href="cs_cac-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cac-pos-DET.html">DET</a></tt> (7; 7% instances), <tt><a href="cs_cac-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_cac-pos-DET.html">DET</a></tt> (5; 5% instances), <tt><a href="cs_cac-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cac-pos-PART.html">PART</a></tt> (5; 5% instances), <tt><a href="cs_cac-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cac-pos-SCONJ.html">SCONJ</a></tt> (3; 3% instances), <tt><a href="cs_cac-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cac-pos-PRON.html">PRON</a></tt> (2; 2% instances), <tt><a href="cs_cac-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cac-pos-PRON.html">PRON</a></tt> (2; 2% instances), <tt><a href="cs_cac-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cac-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="cs_cac-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cac-pos-PART.html">PART</a></tt> (1; 1% instances), <tt><a href="cs_cac-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cac-pos-SCONJ.html">SCONJ</a></tt> (1; 1% instances), <tt><a href="cs_cac-pos-AUX.html">AUX</a></tt>-<tt><a href="cs_cac-pos-INTJ.html">INTJ</a></tt> (1; 1% instances), <tt><a href="cs_cac-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cac-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="cs_cac-pos-NUM.html">NUM</a></tt>-<tt><a href="cs_cac-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="cs_cac-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cac-pos-CCONJ.html">CCONJ</a></tt> (1; 1% instances), <tt><a href="cs_cac-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cac-pos-INTJ.html">INTJ</a></tt> (1; 1% instances).


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
7	let	rok	NOUN	NNNP2-----A----	Case=Gen|Gender=Neut|Number=Plur|Polarity=Pos	4	obl	4:obl	_
8	po	po	ADP	RR--6----------	AdpType=Prep|Case=Loc	10	case	10:case	LId=po-1
9	jeho	jeho	DET	PSXXXZS3-------	Gender[psor]=Masc,Neut|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	10	det	10:det	LGloss=(přivlast.)
10	*	*	SYM	Xx-------------	Abbr=Yes	7	nmod	7:nmod:po	_
11	*	*	SYM	Xx-------------	Abbr=Yes	4	obj	4:obj	_
12	.	.	PUNCT	Z:-------------	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 discourse	color:blue
1	Na	na	ADP	RR--6----------	AdpType=Prep|Case=Loc	2	case	2:case	LId=na-1
2	balkóně	balkón	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	6	obl	6:obl:na:loc	_
3	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	6	expl:pv	6:expl:pv	LGloss=(zvr._zájmeno/částice)
4	nám	já	PRON	PP-P3--1-------	Case=Dat|Number=Plur|Person=1|PronType=Prs	6	discourse	6:discourse	_
5	jich	on	PRON	PPXP2--3-------	Case=Gen|Number=Plur|Person=3|PronType=Prs	7	nmod	7:nmod:gen	LId=on-1
6	sejde	sejít	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
7	více	hodně	ADV	Dg-------2A----	Degree=Cmp|Polarity=Pos	6	nsubj	6:nsubj	_
8	než	než	SCONJ	J,-------------	_	9	mark	9:mark	LId=než-2
9	desítka	desítka	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	7	obl	7:obl:než:nom	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 discourse	color:blue
1	Kolik	kolik	DET	C?--4----------	Case=Acc|NumType=Card|PronType=Int,Rel	4	nsubj:pass	4:nsubj:pass	_
2	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	4	expl:pass	4:expl:pass	LGloss=(zvr._zájmeno/částice)
3	tak	tak	ADV	Db-------------	PronType=Dem	4	discourse	4:discourse	LId=tak-3
4	dává	dávat	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No|LDeriv=dát
5	.	.	PUNCT	Z:-------------	_	4	punct	4:punct	_

~~~


