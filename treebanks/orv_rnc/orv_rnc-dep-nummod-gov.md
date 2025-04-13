---
layout: base
title:  'Statistics of nummod:gov in UD_Old_East_Slavic-RNC'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-RNC: Relations: `nummod:gov`

This relation is a language-specific subtype of <tt><a href="orv_rnc-dep-nummod.html">nummod</a></tt>.

2574 nodes (2%) are attached to their parents as `nummod:gov`.

2440 instances of `nummod:gov` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.11849261849262.

The following 7 pairs of parts of speech are connected with `nummod:gov`: <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-NUM.html">NUM</a></tt> (2519; 98% instances), <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (21; 1% instances), <tt><a href="orv_rnc-pos-NUM.html">NUM</a></tt>-<tt><a href="orv_rnc-pos-NUM.html">NUM</a></tt> (13; 1% instances), <tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_rnc-pos-NUM.html">NUM</a></tt> (9; 0% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-NUM.html">NUM</a></tt> (5; 0% instances), <tt><a href="orv_rnc-pos-PRON.html">PRON</a></tt>-<tt><a href="orv_rnc-pos-NUM.html">NUM</a></tt> (4; 0% instances), <tt><a href="orv_rnc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="orv_rnc-pos-NUM.html">NUM</a></tt> (3; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nummod:gov	color:blue
1	Да	да	CCONJ	_	_	2	cc	_	wf="Да"|_
2	зделал	сдѣлати	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=PartRes|Voice=Act	0	root	_	wf="зделал"|_
3	4	4	NUM	_	Case=Nom|NumForm=Digit|NumType=Card	4	nummod:gov	_	wf="4"|_
4	росол(ь)ника	рассольникъ	NOUN	_	Case=Acc|Gender=Masc|Number=Count	2	obj	_	wf="росольника"|_
5	весу	вѣсъ	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	7	nmod	_	wf="весу"|_
6	3	3	NUM	_	Case=Nom|NumForm=Digit|NumType=Card	7	nummod:gov	_	wf="3"|_
7	фунта	фунтъ	NOUN	_	Case=Nom|Gender=Masc|Number=Count	4	nmod	_	wf="фунта"|_
8	3	3	NUM	_	Case=Nom|NumForm=Digit|NumType=Card	9	nummod:gov	_	wf="3"|_
9	чети	четь	NOUN	_	Case=Nom|Gender=Fem|Number=Count	7	nmod	_	wf="чети"|SpaceAfter=No
10	.	.	PUNCT	_	_	2	punct	_	wf="."|_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nummod:gov	color:blue
1	На	на	ADP	_	_	2	case	_	wf="На"|_
2	починку	починка	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	4	obl	_	wf="починку"|_
3	меди	мѣдь	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	2	nmod	_	wf="меди"|_
4	пошло	пойти	VERB	_	Aspect=Perf|Gender=Neut|Number=Sing|Tense=Past|VerbForm=PartRes|Voice=Act	0	root	_	wf="пошло"|_
5	чети	четь	NOUN	_	Case=Gen|Gender=Fem|Number=Plur	6	nummod:gov	_	wf="чети"|_
6	фунта	фунтъ	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	4	nsubj	_	wf="фунта"|SpaceAfter=No
7	.	.	PUNCT	_	_	4	punct	_	wf="."|_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 nummod:gov	color:blue
1	а	а	CCONJ	_	_	6	cc	_	norm="а"
2	я	я	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	6	nsubj	_	norm="я"|Decl=X|End=0
3	за	за	ADP	_	_	5	case	_	norm="за"|check=@
4	ту	тотъ	DET	_	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	5	det	_	norm="ту"|Decl=X|End=у|check=@
5	кѡрѡву	корова	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	6	obl	_	norm="кѡрѡву"|Decl=1a|End=у|check=@
6	взялъ	взяти	VERB	_	Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|VerbForm=PartRes|Voice=Act	0	root	_	norm="взялъ"|Decl=X|End=ъл
7	пол	полъ	NUM	_	Case=Acc|NumForm=Word|NumType=Frac	9	nummod:gov	_	norm="пол"|Decl=X|End=0
8	четверта	четвертый	NUM	ORD	Case=Gen|Gender=Masc|Number=Sing|NumForm=Word|NumType=Frac|Variant=Short	10	nummod:gov	_	upos="ANUM"|norm="четверта"|Decl=ANUM|End=а
9	десять	десять	NUM	_	Case=Acc|NumForm=Word|NumType=Card	8	flat	_	norm="десять"|Decl=X|End=ь0
10	алтынъ	алтынъ	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	6	obj	_	norm="алтынъ"|Decl=2|End=ъ0

~~~


