---
layout: base
title:  'Statistics of obl:agent in UD_Old_East_Slavic-RNC'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-RNC: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="orv_rnc-dep-obl.html">obl</a></tt>.
There are also 4 other language-specific subtypes of `obl`: <tt><a href="orv_rnc-dep-obl-depict.html">obl:depict</a></tt>, <tt><a href="orv_rnc-dep-obl-float.html">obl:float</a></tt>, <tt><a href="orv_rnc-dep-obl-pronmod.html">obl:pronmod</a></tt>, <tt><a href="orv_rnc-dep-obl-tmod.html">obl:tmod</a></tt>.

89 nodes (0%) are attached to their parents as `obl:agent`.

52 instances of `obl:agent` (58%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.73033707865169.

The following 6 pairs of parts of speech are connected with `obl:agent`: <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (65; 73% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-PRON.html">PRON</a></tt> (10; 11% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-PROPN.html">PROPN</a></tt> (9; 10% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt> (2; 2% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-DET.html">DET</a></tt> (2; 2% instances), <tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_rnc-pos-PRON.html">PRON</a></tt> (1; 1% instances).


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
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 obl:agent	color:blue
1	О	о	ADP	_	_	2	case	_	norm="О"|check=@
2	Махомете	Махометъ	PROPN	_	Case=Loc|Gender=Masc|NameType=Giv|Number=Sing	0	root	_	norm="Махомете"|Decl=2|End=е|check=@
3	прелестнике	прелестникъ	NOUN	_	Case=Loc|Gender=Masc|Number=Sing	2	appos	_	norm="прелестнике"|Decl=2|End=е|check=@
4	агарянском	агарянский	ADJ	_	Case=Loc|Degree=Pos|Gender=Masc|Number=Sing	3	amod	_	norm="агарянском"|Decl=X|End=мо|check=@
5	и	и	CCONJ	_	_	7	cc	_	norm="и"
6	о	о	ADP	_	_	7	case	_	norm="о"|check=@
7	прелести	прелесть	NOUN	_	Case=Loc|Gender=Fem|Number=Sing	2	conj	_	norm="прелести"|Decl=3|End=и|SpaceAfter=No|check=@
8	,	,	PUNCT	_	_	9	punct	_	norm=","
9	вымышленной	вымыслити	VERB	_	Aspect=Perf|Case=Loc|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	7	acl	_	norm="вымышленной"|Decl=X|End=йо
10	от	отъ	ADP	_	_	11	case	_	norm="от"|check=@
11	него	онъ	PRON	_	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	9	obl:agent	_	norm="него"|Decl=X|End=оге|SpaceAfter=No|check=@
12	.	.	PUNCT	_	_	2	punct	_	norm="."

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


