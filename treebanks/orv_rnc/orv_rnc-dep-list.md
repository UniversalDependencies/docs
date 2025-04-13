---
layout: base
title:  'Statistics of list in UD_Old_East_Slavic-RNC'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-RNC: Relations: `list`

This relation is universal.

105 nodes (0%) are attached to their parents as `list`.

105 instances of `list` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.8952380952381.

The following 17 pairs of parts of speech are connected with `list`: <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (49; 47% instances), <tt><a href="orv_rnc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (16; 15% instances), <tt><a href="orv_rnc-pos-NUM.html">NUM</a></tt>-<tt><a href="orv_rnc-pos-X.html">X</a></tt> (8; 8% instances), <tt><a href="orv_rnc-pos-NUM.html">NUM</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (7; 7% instances), <tt><a href="orv_rnc-pos-X.html">X</a></tt>-<tt><a href="orv_rnc-pos-NUM.html">NUM</a></tt> (5; 5% instances), <tt><a href="orv_rnc-pos-ADV.html">ADV</a></tt>-<tt><a href="orv_rnc-pos-X.html">X</a></tt> (4; 4% instances), <tt><a href="orv_rnc-pos-NUM.html">NUM</a></tt>-<tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt> (3; 3% instances), <tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="orv_rnc-pos-NUM.html">NUM</a></tt>-<tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="orv_rnc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="orv_rnc-pos-ADV.html">ADV</a></tt> (2; 2% instances), <tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_rnc-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="orv_rnc-pos-ADV.html">ADV</a></tt>-<tt><a href="orv_rnc-pos-PART.html">PART</a></tt> (1; 1% instances), <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="orv_rnc-pos-NUM.html">NUM</a></tt>-<tt><a href="orv_rnc-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="orv_rnc-pos-NUM.html">NUM</a></tt>-<tt><a href="orv_rnc-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="orv_rnc-pos-NUM.html">NUM</a></tt>-<tt><a href="orv_rnc-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 list	color:blue
1	Минея	минея	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	0	root	_	wf="Минея"
2	четь	четь	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	1	appos	_	wf="четь"|SpaceAfter=No
3	,	,	PUNCT	_	_	4	punct	_	wf=","
4	сентябрь	сентябрь	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	1	list	_	wf="сентябрь"
5	месяц	мѣсяцъ	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	4	appos	_	wf="месяц"|SpaceAfter=No
6	.	.	PUNCT	_	_	1	punct	_	wf="."

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 list	color:blue
1	[На	на	ADP	_	_	2	case	_	norm="На"|check=@
2	полях	поле	NOUN	_	Case=Loc|Gender=Neut|Number=Plur	4	parataxis	_	norm="полях"|Decl=2|End=хя|SpaceAfter=No|check=@
3	:	:	PUNCT	_	_	2	punct	_	norm=":"
4	Гвагнин	Гвагнинъ	PROPN	_	Case=Nom|Gender=Masc|NameType=Sur|Number=Sing	0	root	_	norm="Гвагнин"|Decl=Poss|End=0|SpaceAfter=No
5	,	,	PUNCT	_	_	4	punct	_	norm=","
6	О	о	ADP	_	_	7	case	_	norm="О"|check=@
7	татарех	татаринъ	NOUN	_	Case=Loc|Gender=Masc|Number=Plur	4	list	_	norm="татарех"|Decl=2|End=хе|SpaceAfter=No|check=@
8	,	,	PUNCT	_	_	4	punct	_	norm=","
9	лист	листъ	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	4	list	_	norm="лист"|Decl=2|End=0
10	1]	1	NUM	ANUM	Case=Nom|Gender=Masc|Number=Sing|NumForm=Digit|NumType=Card	9	appos	_	upos="ANUM"|norm="1"|Decl=X|End=_|SpaceAfter=No
11	.	.	PUNCT	_	_	4	punct	_	norm="."

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 list	color:blue
1	32979	32979	NUM	_	Case=Nom|NumForm=Digit|NumType=Card	0	root	_	wf="32979"
2	Н	Н	X	_	_	1	list	_	wf="Н"|SpaceAfter=No
3	.	.	PUNCT	_	_	1	punct	_	wf="."

~~~


