---
layout: base
title:  'Statistics of obl:agent in UD_Old_East_Slavic-RNC'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-RNC: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="orv_rnc-dep-obl.html">obl</a></tt>.
There are also 4 other language-specific subtypes of `obl`: <tt><a href="orv_rnc-dep-obl-depict.html">obl:depict</a></tt>, <tt><a href="orv_rnc-dep-obl-float.html">obl:float</a></tt>, <tt><a href="orv_rnc-dep-obl-pronmod.html">obl:pronmod</a></tt>, <tt><a href="orv_rnc-dep-obl-tmod.html">obl:tmod</a></tt>.

51 nodes (0%) are attached to their parents as `obl:agent`.

32 instances of `obl:agent` (63%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.27450980392157.

The following 5 pairs of parts of speech are connected with `obl:agent`: <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (35; 69% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-PRON.html">PRON</a></tt> (6; 12% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-PROPN.html">PROPN</a></tt> (6; 12% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt> (2; 4% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-DET.html">DET</a></tt> (2; 4% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 obl:agent	color:blue
1	Отпущена	отпустити	VERB	_	Aspect=Perf|Case=Nom|Gender=Fem|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	_
2	грамота	грамота	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	1	nsubj:pass	_	_
3	к	къ	ADP	_	_	4	case	_	_
4	Макарью	Макарий	PROPN	_	Case=Dat|Gender=Masc|NameType=Giv|Number=Sing	1	obl	_	_
5	чюдотворцу	чудотворецъ	NOUN	_	Case=Dat|Gender=Masc|Number=Sing	4	appos	_	_
6	[с]старцом	старецъ	NOUN	_	Case=Ins|Gender=Masc|Number=Sing	1	obl:agent	_	_
7	Тимофеем	Тимофѣй	PROPN	_	Case=Ins|Gender=Masc|NameType=Giv|Number=Sing	6	appos	_	SpaceAfter=No
8	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 obl:agent	color:blue
1	Жалобы	жалоба	NOUN	_	Case=Nom|Gender=Fem|Number=Plur	0	root	_	Norm="Жалобы"
2	на	на	ADP	_	_	3	case	_	Norm="на"
3	Шавкунова	Шавкуновъ	PROPN	_	Animacy=Anim|Case=Acc|Gender=Masc|NameType=Sur|Number=Sing	1	nmod	_	Norm="Шавкунова"
4	на	на	ADP	_	_	9	case	_	Norm="на"
5	сдѣланныя	сдѣлати	VERB	_	Aspect=Perf|Case=Acc|Gender=Neut|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	9	acl	_	Norm="сдѣланныя"
6	имъ	онъ	PRON	_	Case=Ins|Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	obl:agent	_	Norm="имъ"
7	разнымъ	разный	ADJ	_	Case=Dat|Degree=Pos|Gender=Neut|Number=Plur	8	amod	_	Norm="разнымъ"
8	лицамъ	лицо	NOUN	_	Case=Dat|Gender=Neut|Number=Plur	5	iobj	_	Norm="лицамъ"
9	притѣсненія	притѣснение	NOUN	_	Case=Acc|Gender=Neut|Number=Plur	1	nmod	_	Norm="притѣсненія"|SpaceAfter=No
10	]	]	PUNCT	_	_	1	punct	_	Norm="]"|SpaceAfter=No
11	.	.	PUNCT	_	_	1	punct	_	Norm="."

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 obl:agent	color:blue
1	Да	да	CCONJ	_	_	2	cc	_	_
2	возлюблени	возлюбити	VERB	_	Case=Nom|Gender=Masc|Number=Plur|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	_
3	будете	быти	AUX	_	Mood=Ind|Number=Plur|Person=2|Tense=Fut|VerbForm=Fin|Voice=Act	2	aux:pass	_	_
4	от	отъ	ADP	_	_	5	case	_	_
5	Христа	Христосъ	PROPN	_	Case=Gen|Gender=Masc|NameType=Prs|Number=Sing	2	obl:agent	_	SpaceAfter=No
6	,	,	PUNCT	_	_	7	punct	_	_
7	исполнивайте	исполнивати	VERB	_	Mood=Imp|Number=Plur|Person=2|VerbForm=Fin|Voice=Act	2	conj	_	_
8	заповеди	заповѣдь	NOUN	_	Case=Acc|Gender=Fem|Number=Plur	7	obj	_	_
9	его	и	PRON	_	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	8	det	_	SpaceAfter=No
10	.	.	PUNCT	_	_	2	punct	_	_

~~~


