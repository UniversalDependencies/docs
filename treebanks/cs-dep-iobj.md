---
layout: base
title:  'Statistics of iobj in UD_Czech'
udver: '2'
---

## Treebank Statistics: UD_Czech: Relations: `iobj`

This relation is universal.

5321 nodes (0%) are attached to their parents as `iobj`.

2856 instances of `iobj` (54%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.47603833865815.

The following 9 pairs of parts of speech are connected with `iobj`: <tt><a href="cs-pos-VERB.html">VERB</a></tt>-<tt><a href="cs-pos-NOUN.html">NOUN</a></tt> (2411; 45% instances), <tt><a href="cs-pos-VERB.html">VERB</a></tt>-<tt><a href="cs-pos-PRON.html">PRON</a></tt> (2021; 38% instances), <tt><a href="cs-pos-VERB.html">VERB</a></tt>-<tt><a href="cs-pos-PROPN.html">PROPN</a></tt> (558; 10% instances), <tt><a href="cs-pos-VERB.html">VERB</a></tt>-<tt><a href="cs-pos-DET.html">DET</a></tt> (185; 3% instances), <tt><a href="cs-pos-VERB.html">VERB</a></tt>-<tt><a href="cs-pos-ADJ.html">ADJ</a></tt> (106; 2% instances), <tt><a href="cs-pos-VERB.html">VERB</a></tt>-<tt><a href="cs-pos-ADV.html">ADV</a></tt> (21; 0% instances), <tt><a href="cs-pos-VERB.html">VERB</a></tt>-<tt><a href="cs-pos-NUM.html">NUM</a></tt> (17; 0% instances), <tt><a href="cs-pos-VERB.html">VERB</a></tt>-<tt><a href="cs-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="cs-pos-VERB.html">VERB</a></tt>-<tt><a href="cs-pos-SYM.html">SYM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 iobj	color:blue
1	Nenechat	nechat	VERB	Vf--------N----	Aspect=Imp|Polarity=Neg|VerbForm=Inf	0	root	_	_
2	náhodu	náhoda	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	1	obj	_	LGloss=(př._s_takovou_n._jsem_počítal,_n._tomu_chtěla)
3	náhodě	náhoda	NOUN	NNFS3-----A----	Case=Dat|Gender=Fem|Number=Sing|Polarity=Pos	1	iobj	_	LGloss=(př._s_takovou_n._jsem_počítal,_n._tomu_chtěla)

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 iobj	color:blue
1	Jemu	on	PRON	PPZS3--3-------	Case=Dat|Gender=Masc,Neut|Number=Sing|Person=3|PronType=Prs	3	iobj	_	LId=on-1
2	jsme	být	AUX	VB-P---1P-AA---	Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	3	aux	_	_
3	položili	položit	VERB	VpMP---XR-AA---	Animacy=Anim|Aspect=Perf|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
4	následující	následující	ADJ	AGFS4-----A----	Aspect=Imp|Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Act	5	amod	_	LDeriv=následovat
5	otázku	otázka	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	3	obj	_	SpaceAfter=No
6	:	:	PUNCT	Z:-------------	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 iobj	color:blue
1	LN	LN	PROPN	NNFPX-----A---8	Abbr=Yes|Gender=Fem|NameType=Pro|Number=Plur|Polarity=Pos	4	iobj	_	LId=LN-1|LGloss=(Lidové_noviny,_deník)
2	to	ten	DET	PDNS4----------	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	4	obj	_	_
3	včera	včera	ADV	Db-------------	_	4	advmod	_	_
4	řekl	říci	VERB	VpYS---XR-AA---	Aspect=Perf|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
5	místopředseda	místopředseda	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	11	nmod	_	_
6	sněmovny	sněmovna	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	5	nmod	_	_
7	a	a	CCONJ	J^-------------	_	8	cc	_	LId=a-1
8	KDU	KDU	PROPN	NNFXX-----A---8	Abbr=Yes|Gender=Fem|NameType=Com|Polarity=Pos	6	conj	_	SpaceAfter=No|LGloss=(Křesťansko-demokratická_unie)
9	-	-	PUNCT	Z:-------------	_	10	punct	_	SpaceAfter=No
10	ČSL	ČSL	PROPN	NNFXX-----A---8	Abbr=Yes|Gender=Fem|NameType=Com|Polarity=Pos	8	conj	_	LId=ČSL-1|LGloss=(Česká_[pův._Čsl.]_strana_lidová)
11	Jan	Jan	PROPN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Giv|Number=Sing|Polarity=Pos	4	nsubj	_	_
12	Kasal	Kasal	PROPN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Sur|Number=Sing|Polarity=Pos	11	flat	_	SpaceAfter=No
13	.	.	PUNCT	Z:-------------	_	4	punct	_	_

~~~


