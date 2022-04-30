---
layout: base
title:  'Statistics of obl:agent in UD_Old_East_Slavic-RNC'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-RNC: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="orv_rnc-dep-obl.html">obl</a></tt>.

16 nodes (0%) are attached to their parents as `obl:agent`.

10 instances of `obl:agent` (63%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.3125.

The following 3 pairs of parts of speech are connected with `obl:agent`: <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (11; 69% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-PRON.html">PRON</a></tt> (3; 19% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-PROPN.html">PROPN</a></tt> (2; 13% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 obl:agent	color:blue
1	Отпущена	отпустити	VERB	_	Aspect=Perf|Case=Nom|Gender=Fem|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	_
2	грамота	грамота	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	1	nsubj	_	_
3	к	къ	ADP	_	_	4	case	_	_
4	Макарью	Макарий	PROPN	_	Case=Dat|Gender=Masc|Number=Sing	1	obl	_	_
5	чюдотворцу	чудотворецъ	NOUN	_	Case=Dat|Gender=Masc|Number=Sing	4	appos	_	_
6	[с]старцом	старецъ	NOUN	_	Case=Ins|Gender=Masc|Number=Sing	1	obl:agent	_	_
7	Тимофеем	Тимофѣй	PROPN	_	Case=Ins|Gender=Masc|Number=Sing	6	appos	_	SpaceAfter=No
8	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 obl:agent	color:blue
1	Жалобы	жалоба	NOUN	_	Case=Nom|Gender=Fem|Number=Plur	0	root	_	Norm=Жалобы|_
2	на	на	ADP	_	_	3	case	_	Norm=на|_
3	Шавкунова	Шавкуновъ	PROPN	_	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	1	nmod	_	Norm=Шавкунова|_
4	на	на	ADP	_	_	9	case	_	Norm=на|_
5	сдѣланныя	сдѣлати	VERB	_	Aspect=Perf|Case=Acc|Gender=Neut|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	9	acl	_	Norm=сдѣланныя|_
6	имъ	онъ	PRON	_	Case=Ins|Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	obl:agent	_	Norm=имъ|_
7	разнымъ	разный	ADJ	_	Case=Dat|Degree=Pos|Gender=Neut|Number=Plur	8	amod	_	Norm=разнымъ|_
8	лицамъ	лицо	NOUN	_	Case=Dat|Gender=Neut|Number=Plur	5	iobj	_	Norm=лицамъ|_
9	притѣсненія	притѣснение	NOUN	_	Case=Acc|Gender=Neut|Number=Plur	1	nmod	_	Norm=притѣсненія|SpaceAfter=No
10	]	]	PUNCT	_	_	1	punct	_	Norm=]|SpaceAfter=No
11	.	.	PUNCT	_	_	1	punct	_	Norm=.

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 14 obl:agent	color:blue
1	По	по	ADP	_	_	2	case	_	Norm=По
2	лѣте	лѣто	NOUN	_	Case=Loc|Gender=Neut|Number=Sing	16	obl	_	Norm=лѣте
3	же	же	PART	_	_	2	advmod	_	Norm=же
4	единомъ	единый	NUM	_	Case=Loc|Gender=Masc|Number=Sing	2	nummod	_	Norm=единомъ
5	и	и	CCONJ	_	_	16	cc	_	Norm=и
6	церковь	церковь	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	16	nsubj:pass	_	Norm=церковь
7	Святыя	святой	ADJ	_	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	8	amod	_	Norm=Святыя
8	Богородица	Богородица	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	6	nmod	_	Norm=Богородица|SpaceAfter=No
9	,	,	PUNCT	_	_	12	punct	_	Norm=,
10	иже	иже	PRON	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	12	nsubj	_	Norm=иже
11	въ	въ	ADP	_	_	12	case	_	Norm=въ
12	Кіевѣ	Киевъ	PROPN	_	Case=Loc|Gender=Masc|Number=Sing	6	acl:relcl	_	Norm=Кіевѣ
13	{л._304}	_	X	_	_	14	dep	_	Norm={л._304}
14	Феопентомъ	Феопентъ	PROPN	_	Case=Ins|Gender=Masc|Number=Sing	16	obl:agent	_	Norm=Феопентомъ
15	митрополитомъ	митрополитъ	NOUN	_	Case=Ins|Gender=Masc|Number=Sing	14	appos	_	Norm=митрополитомъ
16	освящена	освятити	VERB	_	Aspect=Perf|Case=Nom|Gender=Fem|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	Norm=освящена
17	бысть	быти	AUX	Tense=Aor	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	16	aux:pass	_	Norm=бысть|SpaceAfter=No
18	,	,	PUNCT	_	_	27	punct	_	Norm=,
19	юже	иже	PRON	_	Case=Acc|Gender=Fem|Number=Sing|PronType=Rel	27	obj	_	Norm=юже
20	святый	святой	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	21	amod	_	Norm=святый
21	Владимеръ	Владимиръ	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	27	nsubj	_	Norm=Владимеръ|SpaceAfter=No
22	,	,	PUNCT	_	_	23	punct	_	Norm=,
23	отецъ	отецъ	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	21	appos	_	Norm=отецъ
24	Ярославль	ярославль	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Variant=Short	23	amod	_	Norm=Ярославль|SpaceAfter=No
25	,	,	PUNCT	_	_	23	punct	_	Norm=,
26	велику	великий	ADJ	_	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Variant=Short	19	amod	_	Norm=велику
27	созда	создати	VERB	Tense=Aor	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	16	acl:relcl	_	Norm=созда|SpaceAfter=No
28	.	.	PUNCT	_	_	16	punct	_	Norm=.

~~~


