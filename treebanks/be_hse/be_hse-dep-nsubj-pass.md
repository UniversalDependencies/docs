---
layout: base
title:  'Statistics of nsubj:pass in UD_Belarusian-HSE'
udver: '2'
---

## Treebank Statistics: UD_Belarusian-HSE: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="be_hse-dep-nsubj.html">nsubj</a></tt>.

29 nodes (0%) are attached to their parents as `nsubj:pass`.

22 instances of `nsubj:pass` (76%) are right-to-left (child precedes parent).
Average distance between parent and child is 10.1034482758621.

The following 2 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="be_hse-pos-VERB.html">VERB</a></tt>-<tt><a href="be_hse-pos-NOUN.html">NOUN</a></tt> (27; 93% instances), <tt><a href="be_hse-pos-VERB.html">VERB</a></tt>-<tt><a href="be_hse-pos-PRON.html">PRON</a></tt> (2; 7% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 nsubj:pass	color:blue
1	Акрамя	акрамя	ADP	_	_	2	case	_	_
2	гэтага	гэта	PRON	_	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	5	parataxis	_	SpaceAfter=No
3	,	,	PUNCT	_	_	2	punct	_	_
4	спецыяліст	спецыяліст	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	5	nsubj	_	_
5	паведаміў	паведаміць	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
6	,	,	PUNCT	_	_	10	punct	_	_
7	што	што	SCONJ	_	_	10	mark	_	_
8	ў	ў	ADP	_	_	9	case	_	_
9	Беларусі	Беларусь	PROPN	_	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	10	obl	_	_
10	распрацаваны	распрацаваць	VERB	_	Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	5	ccomp	_	_
11	рэгламент	рэгламент	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	10	nsubj:pass	_	_
12	вакуумавання	вакуумаванне	NOUN	_	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	11	nmod	_	_
13	бульбы	бульба	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	12	nmod	_	SpaceAfter=No
14	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 17 nsubj:pass	color:blue
1	Абласныя	абласны	ADJ	_	Case=Nom|Degree=Pos|Number=Plur	5	amod	_	_
2	і	і	CCONJ	_	_	4	cc	_	_
3	Мiнскае	мiнскi	ADJ	_	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	4	amod	_	_
4	гарадское	гарадскi	ADJ	_	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	1	conj	_	_
5	ўпраўленнi	упраўленне	NOUN	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	9	nsubj	_	_
6	па	па	ADP	_	_	8	case	_	_
7	надзвычайных	надзвычайны	ADJ	_	Case=Loc|Degree=Pos|Number=Plur	8	amod	_	_
8	сiтуацыях	сiтуацыя	NOUN	_	Animacy=Inan|Case=Loc|Gender=Fem|Number=Plur	5	nmod	_	_
9	ажыццяўляюць	ажыццяўляць	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
10	сваю	свой	DET	_	Case=Acc|Gender=Fem|Number=Sing	11	det	_	_
11	дзейнасць	дзейнасць	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	9	obj	_	_
12	у	у	ADP	_	_	15	case	_	_
13	адпаведнасцi	адпаведнасць	NOUN	_	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	12	fixed	_	_
14	з	з	ADP	_	_	12	fixed	_	_
15	палажэннямi	палажэнне	NOUN	_	Animacy=Inan|Case=Gen|Gender=Neut|Number=Plur	9	obl	_	SpaceAfter=No
16	,	,	PUNCT	_	_	18	punct	_	_
17	якiя	якi	PRON	_	Case=Nom|Number=Plur	18	nsubj:pass	_	_
18	зацвярджаюцца	зацвярджацца	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Mid	15	acl:relcl	_	_
19	Мiнiстэрствам	мiнiстэрства	NOUN	_	Animacy=Inan|Case=Ins|Gender=Neut|Number=Sing	18	obl:agent	_	_
20	па	па	ADP	_	_	22	case	_	_
21	надзвычайных	надзвычайны	ADJ	_	Case=Loc|Degree=Pos|Number=Plur	22	amod	_	_
22	сiтуацыях	сiтуацыя	NOUN	_	Animacy=Inan|Case=Loc|Gender=Fem|Number=Plur	19	nmod	_	_
23	Рэспублiкi	рэспублiка	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	19	nmod	_	_
24	Беларусь	Беларусь	PROPN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	23	appos	_	SpaceAfter=No
25	.	.	PUNCT	_	_	9	punct	_	_

~~~


