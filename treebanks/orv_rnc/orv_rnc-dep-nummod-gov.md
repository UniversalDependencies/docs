---
layout: base
title:  'Statistics of nummod:gov in UD_Old_East_Slavic-RNC'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-RNC: Relations: `nummod:gov`

This relation is a language-specific subtype of <tt><a href="orv_rnc-dep-nummod.html">nummod</a></tt>.

1692 nodes (2%) are attached to their parents as `nummod:gov`.

1628 instances of `nummod:gov` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.11052009456265.

The following 8 pairs of parts of speech are connected with `nummod:gov`: <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-NUM.html">NUM</a></tt> (1657; 98% instances), <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (17; 1% instances), <tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_rnc-pos-NUM.html">NUM</a></tt> (8; 0% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-NUM.html">NUM</a></tt> (4; 0% instances), <tt><a href="orv_rnc-pos-NUM.html">NUM</a></tt>-<tt><a href="orv_rnc-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="orv_rnc-pos-PRON.html">PRON</a></tt>-<tt><a href="orv_rnc-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="orv_rnc-pos-ADP.html">ADP</a></tt>-<tt><a href="orv_rnc-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="orv_rnc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="orv_rnc-pos-NUM.html">NUM</a></tt> (1; 0% instances).


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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nummod:gov	color:blue
1	<em>	<em>	X	_	_	4	dep	_	SpaceAfter=No
2	7	7	NUM	_	Case=Nom|NumForm=Digit|NumType=Card	4	nummod:gov	_	_
3	думных	думный	ADJ	_	Case=Gen|Degree=Pos|Gender=Masc|Number=Plur	4	amod	_	_
4	царевых	царевъ	ADJ	_	Case=Loc|Degree=Pos|Gender=Masc|Number=Plur	0	root	_	SpaceAfter=No
5	,	,	PUNCT	_	_	8	punct	_	_
6	их	они	PRON	_	Case=Gen|Gender=Masc|Number=Plur|Person=3|PronType=Prs	8	det	_	_
7	же	же	PART	_	_	6	advmod	_	_
8	имена	имя	NOUN	_	Case=Nom|Gender=Neut|Number=Plur	4	conj	_	SpaceAfter=No
9	:	:	PUNCT	_	_	8	punct	_	SpaceAfter=No
10	</em>	</em>	X	_	_	4	dep	_	NoIndex=Yes

~~~


