---
layout: base
title:  'Statistics of iobj in UD_Czech-PUD'
udver: '2'
---

## Treebank Statistics: UD_Czech-PUD: Relations: `iobj`

This relation is universal.

151 nodes (1%) are attached to their parents as `iobj`.

90 instances of `iobj` (60%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.52317880794702.

The following 14 pairs of parts of speech are connected with `iobj`: <tt><a href="cs_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pud-pos-NOUN.html">NOUN</a></tt> (54; 36% instances), <tt><a href="cs_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pud-pos-PRON.html">PRON</a></tt> (35; 23% instances), <tt><a href="cs_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pud-pos-PROPN.html">PROPN</a></tt> (22; 15% instances), <tt><a href="cs_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pud-pos-NOUN.html">NOUN</a></tt> (15; 10% instances), <tt><a href="cs_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pud-pos-DET.html">DET</a></tt> (8; 5% instances), <tt><a href="cs_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pud-pos-ADJ.html">ADJ</a></tt> (5; 3% instances), <tt><a href="cs_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pud-pos-PROPN.html">PROPN</a></tt> (3; 2% instances), <tt><a href="cs_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pud-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="cs_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_pud-pos-DET.html">DET</a></tt> (2; 1% instances), <tt><a href="cs_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pud-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="cs_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="cs_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="cs_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="cs_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="cs_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pud-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 iobj	color:blue
1	Svědek	svědek	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	3	nsubj	_	_
2	policii	policie	NOUN	NNFS3-----A----	Case=Dat|Gender=Fem|Number=Sing|Polarity=Pos	3	iobj	_	_
3	řekl	říci	VERB	VpYS---XR-AA---	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	SpaceAfter=No
4	,	,	PUNCT	Z:-------------	_	10	punct	_	_
5	že	že	SCONJ	J,-------------	_	10	mark	_	LId=že-1
6	oběť	oběť	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	10	nsubj	_	_
7	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	8	case	_	LId=v-1
8	srpnu	srpen	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	10	obl	_	_
9	podezřelého	podezřelý	ADJ	AAMS4----1A----	Animacy=Anim|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	10	obj	_	_
10	napadla	napadnout	VERB	VpQW---XR-AA--1	Aspect=Perf|Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	3	ccomp	_	SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 iobj	color:blue
1	To	ten	DET	PDNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	3	nsubj	_	_
2	nás	já	PRON	PP-P4--1-------	Case=Acc|Number=Plur|Person=1|PronType=Prs	3	iobj	_	_
3	nutí	nutit	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	neustále	neustále	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	5	advmod	_	LDeriv=neustálý
5	vyhledávat	vyhledávat	VERB	Vf--------A----	Aspect=Imp|Polarity=Pos|VerbForm=Inf	3	xcomp	_	LDeriv=vyhledat
6	další	další	ADJ	AAFP4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	7	amod	_	_
7	novinky	novinka	NOUN	NNFP4-----A----	Case=Acc|Gender=Fem|Number=Plur|Polarity=Pos	5	obj	_	SpaceAfter=No
8	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 iobj	color:blue
1	O	o	ADP	RR--6----------	AdpType=Prep|Case=Loc	2	case	_	LId=o-1
2	tom	ten	DET	PDZS6----------	Case=Loc|Gender=Masc,Neut|Number=Sing|PronType=Dem	9	nmod	_	SpaceAfter=No
3	,	,	PUNCT	Z:-------------	_	4	punct	_	_
4	jaké	jaký	DET	P4NS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Int,Rel	2	acl	_	_
5	to	ten	DET	PDNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	4	nsubj	_	_
6	bylo	být	AUX	VpNS---XR-AA---	Gender=Neut|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	4	cop	_	SpaceAfter=No
7	,	,	PUNCT	Z:-------------	_	4	punct	_	_
8	poskytla	poskytnout	VERB	VpQW---XR-AA--1	Aspect=Perf|Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
9	rozhovor	rozhovor	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	8	obj	_	_
10	CNN	CNN	PROPN	NNNXX-----A---8	Abbr=Yes|Foreign=Yes|Gender=Neut|NameType=Com|Polarity=Pos	8	iobj	_	LId=CNN-1|LGloss=(Cable_News_Network,_USA_TV)
11	Style	Style	PROPN	NNISX-----A----	Animacy=Inan|Gender=Masc|NameType=Com|Number=Sing|Polarity=Pos	10	flat	_	SpaceAfter=No
12	.	.	PUNCT	Z:-------------	_	8	punct	_	_

~~~


