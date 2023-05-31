---
layout: base
title:  'Statistics of flat in UD_Czech-CAC'
udver: '2'
---

## Treebank Statistics: UD_Czech-CAC: Relations: `flat`

This relation is universal.
There are 1 language-specific subtypes of `flat`: <tt><a href="cs_cac-dep-flat-foreign.html">flat:foreign</a></tt>.

1527 nodes (0%) are attached to their parents as `flat`.

1527 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.76358873608382.

The following 9 pairs of parts of speech are connected with `flat`: <tt><a href="cs_cac-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cac-pos-PROPN.html">PROPN</a></tt> (855; 56% instances), <tt><a href="cs_cac-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_cac-pos-PROPN.html">PROPN</a></tt> (620; 41% instances), <tt><a href="cs_cac-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cac-pos-NOUN.html">NOUN</a></tt> (37; 2% instances), <tt><a href="cs_cac-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cac-pos-ADP.html">ADP</a></tt> (4; 0% instances), <tt><a href="cs_cac-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_cac-pos-ADP.html">ADP</a></tt> (4; 0% instances), <tt><a href="cs_cac-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_cac-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="cs_cac-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cac-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="cs_cac-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cac-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="cs_cac-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_cac-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 flat	color:blue
1	Dohoda	dohoda	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	0	root	0:root	_
2	se	s	ADP	RV--7----------	AdpType=Voc|Case=Ins	4	case	4:case	LId=s-1
3	*	&cwildcard;	SYM	Xx-------------	Abbr=Yes	4	nmod	4:nmod	_
4	ředitelem	ředitel	NOUN	NNMS7-----A----	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	1	nmod	1:nmod:s:ins	_
5	Tomkou	Tomka	PROPN	NNMS7-----A----	Animacy=Anim|Case=Ins|Gender=Masc|NameType=Sur|Number=Sing|Polarity=Pos	4	flat	4:flat	_
6	o	o	ADP	RR--6----------	AdpType=Prep|Case=Loc	7	case	7:case	LId=o-1
7	spolupráci	spolupráce	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	1	nmod	1:nmod:o:loc	_
8	na	na	ADP	RR--6----------	AdpType=Prep|Case=Loc	9	case	9:case	LId=na-1
9	Oravě	Orava	PROPN	NNFS6-----A----	Case=Loc|Gender=Fem|NameType=Geo|Number=Sing|Polarity=Pos	7	nmod	7:nmod:na:loc	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat	color:blue
1	Václav	Václav	PROPN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Giv|Number=Sing|Polarity=Pos	0	root	0:root	_
2	Koranda	Koranda	PROPN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Sur|Number=Sing|Polarity=Pos	1	flat	1:flat	SpaceAfter=No
3	,	,	PUNCT	Z:-------------	_	5	punct	5:punct	_
4	ekonomický	ekonomický	ADJ	AAMS1----1A----	Animacy=Anim|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	5	amod	5:amod	_
5	náměstek	náměstek	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	1	appos	1:appos	_
6	podnikového	podnikový	ADJ	AAMS2----1A----	Animacy=Anim|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	7	amod	7:amod	_
7	ředitele	ředitel	NOUN	NNMS2-----A----	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	5	nmod	5:nmod:gen	SpaceAfter=No
8	.	.	PUNCT	Z:-------------	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 flat	color:blue
1	Odpověď	odpověď	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	8	nsubj	8:nsubj	_
2	člena	člen	NOUN	NNMS2-----A----	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	1	nmod	1:nmod:gen	_
3	Rady	rada	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	2	nmod	2:nmod:gen	LId=rada-2|LGloss=(člověk;_např._soudní_rada)
4	KNV	KNV	PROPN	NNIXX-----A---8	Abbr=Yes|Animacy=Inan|Gender=Masc|NameType=Com|Polarity=Pos	3	nmod	3:nmod	LGloss=(Krajský_nár._výbor)
5	bratra	bratr	NOUN	NNMS2-----A----	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	2	flat	2:flat	_
6	Kozáka	Kozák	PROPN	NNMS2-----A----	Animacy=Anim|Case=Gen|Gender=Masc|NameType=Sur|Number=Sing|Polarity=Pos	2	flat	2:flat	_
7	to	ten	DET	PDNS4----------	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	8	obj	8:obj	_
8	vyřešila	vyřešit	VERB	VpQW---XR-AA---	Aspect=Perf|Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	SpaceAfter=No
9	.	.	PUNCT	Z:-------------	_	8	punct	8:punct	_

~~~


