---
layout: base
title:  'Statistics of acl:relcl in UD_Old_Russian-RNC'
udver: '2'
---

## Treebank Statistics: UD_Old_Russian-RNC: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="orv_rnc-dep-acl.html">acl</a></tt>.

71 nodes (0%) are attached to their parents as `acl:relcl`.

56 instances of `acl:relcl` (79%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.71830985915493.

The following 16 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt> (35; 49% instances), <tt><a href="orv_rnc-pos-DET.html">DET</a></tt>-<tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt> (6; 8% instances), <tt><a href="orv_rnc-pos-PRON.html">PRON</a></tt>-<tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt> (6; 8% instances), <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (5; 7% instances), <tt><a href="orv_rnc-pos-PRON.html">PRON</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (3; 4% instances), <tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt> (2; 3% instances), <tt><a href="orv_rnc-pos-DET.html">DET</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (2; 3% instances), <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt> (2; 3% instances), <tt><a href="orv_rnc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt> (2; 3% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt> (2; 3% instances), <tt><a href="orv_rnc-pos-ADV.html">ADV</a></tt>-<tt><a href="orv_rnc-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="orv_rnc-pos-DET.html">DET</a></tt>-<tt><a href="orv_rnc-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="orv_rnc-pos-DET.html">DET</a></tt>-<tt><a href="orv_rnc-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="orv_rnc-pos-PRON.html">PRON</a></tt>-<tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="orv_rnc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 acl:relcl	color:blue
1	Роспись	роспись	NOUN	OOV	Case=Nom|Gender=Masc|Number=Sing	0	root	_	SpaceAfter=Yes
2	рыбе	рыба	NOUN	_	Case=Dat|Gender=Fem|Number=Sing	1	nmod	_	SpaceAfter=No
3	,	,	PUNCT	_	_	5	punct	_	SpaceAfter=Yes
4	что	что	PRON	_	Case=Nom|Gender=Neut|Number=Sing|PronType=Rel	5	nsubj:pass	_	SpaceAfter=Yes
5	прислана	прислати	VERB	OOV	Aspect=Perf|Case=Nom|Gender=Fem|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	2	acl:relcl	_	SpaceAfter=Yes
6	ис	изъ	ADP	_	_	8	case	_	SpaceAfter=Yes
7	Селецкой	селецкий	ADJ	OOV	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Variant=Long	8	amod	_	SpaceAfter=Yes
8	слободки	слободка	NOUN	OOV	Case=Gen|Gender=Fem|Number=Sing	5	obl	_	SpaceAfter=Yes
9	с	съ	ADP	_	_	10	case	_	SpaceAfter=Yes
10	Ларионом	Ларионъ	PROPN	OOV	Case=Ins|Gender=Masc|Number=Sing	5	obl	_	SpaceAfter=Yes
11	Офонасьевым	Офонасьевъ	PROPN	OOV	Case=Ins|Gender=Masc|Number=Sing	10	flat:name	_	SpaceAfter=No
12	.	.	PUNCT	_	_	1	punct	_	SpaceAfter=Yes

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 acl:relcl	color:blue
1	Разумѣй	разумѣти	VERB	_	Aspect=Imp|Mood=Imp|Number=Sing|Person=2|VerbForm=Fin	0	root	_	_
2	же	же	PART	_	_	9	advmod	_	_
3	сие	сей	DET	_	Case=Acc|Gender=Neut|Number=Sing	1	obj	_	SpaceAfter=No
4	,	,	PUNCT	_	_	9	punct	_	_
5	к	къ	ADP	_	_	6	case	_	_
6	чему	что	PRON	_	Case=Dat|Gender=Neut|Number=Sing|PronType=Rel	9	obl	_	_
7	тебя	ты	PRON	_	Case=Acc|Number=Sing|Person=2|PronType=Prs	9	obj	_	_
8	Курбской	Курбский	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	9	nsubj	_	_
9	претворил	претворити	VERB	_	Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|VerbForm=PartRes	3	acl:relcl	_	SpaceAfter=No
10	,	,	PUNCT	_	_	13	punct	_	_
11	чтоб	чтобы	SCONJ	_	Mood=Cnd	13	mark	_	_
12	нас	мы	PRON	_	Case=Acc|Number=Plur|Person=1|PronType=Prs	13	obj	_	_
13	погубити	погубити	VERB	_	Aspect=Perf|VerbForm=Inf	9	advcl	_	SpaceAfter=No
14	!	!	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 4 acl:relcl	color:blue
1	А	а	CCONJ	_	_	4	cc	_	SpaceAfter=Yes
2	лошади	лошадь	NOUN	_	Case=Nom|Gender=Fem|Number=Plur	4	nsubj	_	SpaceAfter=Yes
3	досель	досель	ADV	OOV	Degree=Pos	4	advmod	_	SpaceAfter=Yes
4	хоживали	хоживати	VERB	OOV	Number=Plur|Tense=Past|VerbForm=PartRes|Voice=Act	10	acl:relcl	_	SpaceAfter=Yes
5	на	на	ADP	_	_	7	case	_	SpaceAfter=Yes
6	коих	кой	DET	_	Case=Loc|Gender=Masc|Number=Plur|PronType=Int	7	det	_	SpaceAfter=Yes
7	пустошах	пустошь	NOUN	OOV	Case=Loc|Gender=Fem|Number=Plur	4	obl	_	SpaceAfter=No
8	,	,	PUNCT	_	_	4	punct	_	SpaceAfter=Yes
9	и	и	CCONJ	_	_	16	cc	_	SpaceAfter=Yes
10	те	тотъ	PRON	_	Case=Nom|Gender=Fem|Number=Plur|PronType=Dem	16	nsubj	_	SpaceAfter=Yes
11	им	имъ	PRON	_	Case=Dat|Gender=Masc|Number=Plur|Person=3|PronType=Prs	16	iobj	_	SpaceAfter=Yes
12	же	же	PART	_	_	11	advmod	_	SpaceAfter=No
13	,	,	PUNCT	_	_	14	punct	_	SpaceAfter=Yes
14	корелам	корела	NOUN	OOV	Case=Dat|Gender=Fem|Number=Plur	11	appos	_	SpaceAfter=No
15	,	,	PUNCT	_	_	14	punct	_	SpaceAfter=Yes
16	оданы	отдати	VERB	OOV	Case=Acc|Gender=Masc|Number=Plur|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	SpaceAfter=Yes
17	под	подъ	ADP	_	_	18	case	_	SpaceAfter=Yes
18	пашню	пашня	NOUN	OOV	Case=Ins|Gender=Fem|Number=Sing	16	obl	_	SpaceAfter=No
19	.	.	PUNCT	_	_	16	punct	_	SpaceAfter=Yes

~~~


