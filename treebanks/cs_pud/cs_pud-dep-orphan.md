---
layout: base
title:  'Statistics of orphan in UD_Czech-PUD'
udver: '2'
---

## Treebank Statistics: UD_Czech-PUD: Relations: `orphan`

This relation is universal.

15 nodes (0%) are attached to their parents as `orphan`.

8 instances of `orphan` (53%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.33333333333333.

The following 12 pairs of parts of speech are connected with `orphan`: <tt><a href="cs_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pud-pos-NOUN.html">NOUN</a></tt> (2; 13% instances), <tt><a href="cs_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pud-pos-PRON.html">PRON</a></tt> (2; 13% instances), <tt><a href="cs_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_pud-pos-NOUN.html">NOUN</a></tt> (2; 13% instances), <tt><a href="cs_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pud-pos-PROPN.html">PROPN</a></tt> (1; 7% instances), <tt><a href="cs_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_pud-pos-ADV.html">ADV</a></tt> (1; 7% instances), <tt><a href="cs_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_pud-pos-NOUN.html">NOUN</a></tt> (1; 7% instances), <tt><a href="cs_pud-pos-DET.html">DET</a></tt>-<tt><a href="cs_pud-pos-NOUN.html">NOUN</a></tt> (1; 7% instances), <tt><a href="cs_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pud-pos-ADV.html">ADV</a></tt> (1; 7% instances), <tt><a href="cs_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pud-pos-PART.html">PART</a></tt> (1; 7% instances), <tt><a href="cs_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pud-pos-PROPN.html">PROPN</a></tt> (1; 7% instances), <tt><a href="cs_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="cs_pud-pos-ADV.html">ADV</a></tt> (1; 7% instances), <tt><a href="cs_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_pud-pos-ADV.html">ADV</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 14 orphan	color:blue
1	Federico	Federico	PROPN	NNMS1-----A----	Animacy=Anim|Case=Nom|Foreign=Yes|Gender=Masc|NameType=Giv|Number=Sing|Polarity=Pos	4	nsubj	4:nsubj	_
2	Fellini	Fellini	PROPN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Sur|Number=Sing|Polarity=Pos	1	flat	1:flat	_
3	jednou	jednou	ADV	Db-------------	_	4	advmod	4:advmod	LId=jednou-2
4	řekl	říci	VERB	VpYS---XR-AA---	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	SpaceAfter=No
5	:	:	PUNCT	Z:-------------	_	8	punct	8:punct	_
6	„	"	PUNCT	Z:-------------	_	8	punct	8:punct	SpaceAfter=No
7	Klaun	klaun	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	8	nsubj	8:nsubj	_
8	je	být	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	4	ccomp	4:ccomp	_
9	pro	pro	ADP	RR--4----------	AdpType=Prep|Case=Acc	10	case	10:case	LId=pro-1
10	lidstvo	lidstvo	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	8	obl	8:obl:pro:acc	_
11	jako	jako	SCONJ	J,-------------	_	12	mark	10.1:mark	LId=jako-1
12	stín	stín	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	8	advcl	10.1:dep	_
13	pro	pro	ADP	RR--4----------	AdpType=Prep|Case=Acc	14	case	14:case	LId=pro-1
14	člověka	člověk	NOUN	NNMS4-----A----	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	12	orphan	10.1:dep	SpaceAfter=No
15	“	"	PUNCT	Z:-------------	_	8	punct	8:punct	SpaceAfter=No
16	.	.	PUNCT	Z:-------------	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 orphan	color:blue
1	A	a	CCONJ	J^-------------	_	3	cc	0.1:cc	LId=a-1
2	co	co	PRON	PQ--1----------	Animacy=Inan|Case=Nom|PronType=Int,Rel	3	orphan	0.1:dep	LId=co-1
3	postoj	postoj	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	0	root	0.1:dep	_
4	Austrálie	Austrálie	PROPN	NNFS2-----A----	Case=Gen|Gender=Fem|NameType=Geo|Number=Sing|Polarity=Pos	3	nmod	3:nmod:gen	SpaceAfter=No
5	?	?	PUNCT	Z:-------------	_	3	punct	0.1:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 orphan	color:blue
1	Durán	Durán	PROPN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Sur|Number=Sing|Polarity=Pos	2	nsubj	2:nsubj	_
2	vystupuje	vystupovat	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	jako	jako	SCONJ	J,-------------	_	4	case	4:case	LId=jako-1
4	mluvčí	mluvčí	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	2	obl	2:obl:jako:nom	_
5	a	a	CCONJ	J^-------------	_	6	cc	4.1:cc	LId=a-1
6	Ángel	Ángel	PROPN	NNMS1-----A----	Animacy=Anim|Case=Nom|Foreign=Yes|Gender=Masc|NameType=Giv|Number=Sing|Polarity=Pos	2	conj	4.1:dep	_
7	Pintado	Pintado	PROPN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Sur|Number=Sing|Polarity=Pos	6	flat	6:flat	_
8	jako	jako	SCONJ	J,-------------	_	9	case	9:case	LId=jako-1
9	pokladník	pokladník	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	6	orphan	4.1:dep	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	2	punct	2:punct	_

~~~


