---
layout: base
title:  'Statistics of iobj in UD_Czech-PUD'
udver: '2'
---

## Treebank Statistics: UD_Czech-PUD: Relations: `iobj`

This relation is universal.

13 nodes (0%) are attached to their parents as `iobj`.

8 instances of `iobj` (62%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.

The following 3 pairs of parts of speech are connected with `iobj`: <tt><a href="cs_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pud-pos-PROPN.html">PROPN</a></tt> (6; 46% instances), <tt><a href="cs_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pud-pos-PRON.html">PRON</a></tt> (4; 31% instances), <tt><a href="cs_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pud-pos-NOUN.html">NOUN</a></tt> (3; 23% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 iobj	color:blue
1	O	o	ADP	RR--6----------	AdpType=Prep|Case=Loc	2	case	2:case	LId=o-1
2	tom	ten	DET	PDZS6----------	Case=Loc|Gender=Masc,Neut|Number=Sing|PronType=Dem	9	nmod	9:nmod:o:loc	SpaceAfter=No
3	,	,	PUNCT	Z:-------------	_	4	punct	4:punct	_
4	jaké	jaký	DET	P4NS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Int,Rel	2	acl:relcl	2:acl:relcl|2:ref	_
5	to	ten	DET	PDNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	4	nsubj	2:nsubj|4:nsubj	_
6	bylo	být	AUX	VpNS---XR-AA---	Gender=Neut|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	4	cop	4:cop	SpaceAfter=No
7	,	,	PUNCT	Z:-------------	_	4	punct	4:punct	_
8	poskytla	poskytnout	VERB	VpQW---XR-AA--1	Aspect=Perf|Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	_
9	rozhovor	rozhovor	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	8	obj	8:obj	_
10	CNN	CNN	PROPN	NNNXX-----A---8	Abbr=Yes|Foreign=Yes|Gender=Neut|NameType=Com|Polarity=Pos	8	iobj	8:iobj	LId=CNN-1|LGloss=(Cable_News_Network,_USA_TV)
11	Style	Style	PROPN	NNISX-----A----	Animacy=Inan|Gender=Masc|NameType=Com|Number=Sing|Polarity=Pos	10	flat	10:flat	SpaceAfter=No
12	.	.	PUNCT	Z:-------------	_	8	punct	8:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 iobj	color:blue
1	To	ten	DET	PDNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	3	nsubj	3:nsubj	_
2	nás	já	PRON	PP-P4--1-------	Case=Acc|Number=Plur|Person=1|PronType=Prs	3	iobj	3:iobj|5:nsubj	_
3	nutí	nutit	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	neustále	neustále	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	5	advmod	5:advmod	LDeriv=neustálý
5	vyhledávat	vyhledávat	VERB	Vf--------A----	Aspect=Imp|Polarity=Pos|VerbForm=Inf	3	xcomp	3:xcomp	LDeriv=vyhledat
6	další	další	ADJ	AAFP4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	7	amod	7:amod	_
7	novinky	novinka	NOUN	NNFP4-----A----	Case=Acc|Gender=Fem|Number=Plur|Polarity=Pos	5	obj	5:obj	SpaceAfter=No
8	.	.	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 13 iobj	color:blue
1	V	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	3	case	3:case	LId=v-1
2	lepším	dobrý	ADJ	AAIS6----2A----	Animacy=Inan|Case=Loc|Degree=Cmp|Gender=Masc|Number=Sing|Polarity=Pos	3	amod	3:amod	_
3	případě	případ	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	6	obl	6:obl:v:loc	_
4	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	6:cop	_
5	to	ten	DET	PDNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	6	nsubj	6:nsubj	_
6	naivní	naivní	ADJ	AANS1----1A----	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	0	root	0:root	SpaceAfter=No
7	,	,	PUNCT	Z:-------------	_	14	punct	14:punct	_
8	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	10	case	10:case	LId=v-1
9	horším	špatný	ADJ	AAIS6----2A----	Animacy=Inan|Case=Loc|Degree=Cmp|Gender=Masc|Number=Sing|Polarity=Pos	10	amod	10:amod	_
10	případě	případ	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	14	obl	14:obl:v:loc	_
11	by	být	AUX	Vc-------------	Mood=Cnd|VerbForm=Fin	14	aux	14:aux	_
12	lovecké	lovecký	ADJ	AAFP3----1A----	Case=Dat|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	13	amod	13:amod	_
13	lobby	lobby	NOUN	NNFXX-----A----	Gender=Fem|Polarity=Pos	14	iobj	14:iobj	_
14	odpadly	odpadnout	VERB	VpTP---XR-AA--1	Animacy=Inan|Aspect=Perf|Gender=Fem,Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	6	conj	0:root|6:conj	_
15	veškeré	veškerý	PRON	PLFP1----------	Case=Nom|Gender=Fem|Number=Plur|PronType=Tot	16	nmod	16:nmod:nom	_
16	starosti	starost	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	14	nsubj	14:nsubj	SpaceAfter=No|LId=starost-1
17	.	.	PUNCT	Z:-------------	_	6	punct	6:punct	_

~~~


