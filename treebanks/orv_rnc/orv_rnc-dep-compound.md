---
layout: base
title:  'Statistics of compound in UD_Old_East_Slavic-RNC'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-RNC: Relations: `compound`

This relation is universal.

192 nodes (0%) are attached to their parents as `compound`.

192 instances of `compound` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.29166666666667.

The following 12 pairs of parts of speech are connected with `compound`: <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-PROPN.html">PROPN</a></tt> (64; 33% instances), <tt><a href="orv_rnc-pos-NUM.html">NUM</a></tt>-<tt><a href="orv_rnc-pos-NUM.html">NUM</a></tt> (59; 31% instances), <tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_rnc-pos-NUM.html">NUM</a></tt> (23; 12% instances), <tt><a href="orv_rnc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (10; 5% instances), <tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (9; 5% instances), <tt><a href="orv_rnc-pos-NUM.html">NUM</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (7; 4% instances), <tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_rnc-pos-PROPN.html">PROPN</a></tt> (6; 3% instances), <tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt> (5; 3% instances), <tt><a href="orv_rnc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="orv_rnc-pos-PROPN.html">PROPN</a></tt> (4; 2% instances), <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="orv_rnc-pos-ADV.html">ADV</a></tt>-<tt><a href="orv_rnc-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 compound	color:blue
1	Въ	въ	ADP	_	_	4	case	_	Norm="Въ"
2	Цари	Царь	PROPN	_	Case=Loc|Gender=Masc|NameType=Geo|Number=Sing	4	compound	_	Norm="Цари"
3	же	же	PART	_	_	2	advmod	_	Norm="же"
4	граде	градъ	NOUN	_	Case=Loc|Gender=Masc|Number=Sing	6	obl	_	Norm="граде"
5	тогда	тогда	ADV	_	Degree=Pos|PronType=Dem	6	advmod	_	Norm="тогда"
6	царствуя	царствовати	VERB	_	Tense=Pres|VerbForm=Conv|Voice=Act	0	root	_	Norm="царствуя"
7	Михаилъ	Михаилъ	PROPN	_	Case=Nom|Gender=Masc|NameType=Giv|Number=Sing	6	nsubj	_	Norm="Михаилъ"
8	Пафлегоненинъ	Пафлегоненинъ	PROPN	_	Case=Nom|Gender=Masc|NameType=Prs|Number=Sing	7	flat:name	_	Norm="Пафлегоненинъ"|SpaceAfter=No
9	.	.	PUNCT	_	_	6	punct	_	Norm="."

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 compound	color:blue
1	Да	да	CCONJ	_	_	4	cc	_	wf="Да"|_
2	пят(ь)сот	пятьсотъ	NUM	_	Case=Acc|NumForm=Word|NumType=Card	3	compound	_	wf="пятьсот"|_
3	дватцат(ь)	двадцать	NUM	_	Case=Acc|NumForm=Word|NumType=Card	4	nummod:gov	_	wf="дватцать"|_
4	скал	скала	NOUN	_	Case=Gen|Gender=Fem|Number=Plur	0	root	_	wf="скал"|SpaceAfter=No
5	.	.	PUNCT	_	_	4	punct	_	wf="."|_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 compound	color:blue
1	А	а	CCONJ	_	_	3	cc	_	norm="А"
2	купчюю	купчая	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	3	obj	_	norm="купчюю"|Decl=A|End=юю
3	писал	писати	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=PartRes|Voice=Act	0	root	_	norm="писал"|Decl=X|End=л
4	Чюдин	Чудинъ	PROPN	_	Case=Nom|Gender=Masc|NameType=Giv|Number=Sing	3	nsubj	_	norm="Чюдин"|Decl=Poss|End=0|[G]
5	Васильев	Васильевъ	PROPN	_	Case=Nom|Gender=Masc|NameType=Pat|Number=Sing	4	flat:name	_	norm="Васильев"|Decl=Poss|End=0|[G]
6	сын	сынъ	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	4	flat:name	_	norm="сын"|Decl=2|End=0|[G]
7	Охлебинина	Охлебининъ	PROPN	_	Case=Gen|Gender=Masc|NameType=Sur|Number=Sing	4	flat:name	_	norm="Охлебинина"|Decl=Poss|End=а
8	лета	лѣто	NOUN	_	Case=Gen|Gender=Neut|Number=Sing	3	obl:tmod	_	norm="лета"|Decl=2|End=а
9	7100	7100	NUM	_	Case=Nom|NumForm=Digit|NumType=Card	10	compound	_	norm="7100"|Decl=ANUM|End=_
10	втараго	второй	ADJ	ORD	Case=Gen|Gender=Neut|Number=Sing|NumForm=Word|NumType=Ord	8	amod	_	upos="ANUM"|norm="втараго"|Decl=ANUM|End=ога|SpaceAfter=No
11	.	.	PUNCT	_	_	3	punct	_	norm="."

~~~


