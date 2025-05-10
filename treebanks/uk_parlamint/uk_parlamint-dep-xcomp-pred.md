---
layout: base
title:  'Statistics of xcomp:pred in UD_Ukrainian-ParlaMint'
udver: '2'
---

## Treebank Statistics: UD_Ukrainian-ParlaMint: Relations: `xcomp:pred`

This relation is a language-specific subtype of <tt><a href="uk_parlamint-dep-xcomp.html">xcomp</a></tt>.

2 nodes (0%) are attached to their parents as `xcomp:pred`.

1 instances of `xcomp:pred` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.5.

The following 2 pairs of parts of speech are connected with `xcomp:pred`: <tt><a href="uk_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="uk_parlamint-pos-ADJ.html">ADJ</a></tt> (1; 50% instances), <tt><a href="uk_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 19 xcomp:pred	color:blue
1	Але	але	CCONJ	CCONJ	_	6	cc	_	_
2	це	це	PRON	PRON	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	6	nsubj	_	_
3	ще	ще	ADV	ADV	_	6	advmod	_	_
4	не	не	PART	PART	Polarity=Neg	6	advmod:neg	_	_
5	той	той	DET	DET	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	6	det	_	_
6	рівень	рівень	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
7	,	,	PUNCT	PUNCT	_	10	punct	_	_
8	який	який	DET	DET	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	10	nsubj	_	_
9	нам	ми	PRON	PRON	Animacy=Anim|Case=Dat|Number=Plur|Person=1|PronType=Prs	10	iobj	_	_
10	потрібен	потрібний	ADJ	ADJ	Case=Nom|Gender=Masc|Number=Sing|Variant=Short	6	acl:relcl	_	_
11	для	для	ADP	ADP	Case=Gen	12	case	_	_
12	того	те	PRON	PRON	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing|PronType=Dem	10	obl	_	SpaceAfter=No
13	,	,	PUNCT	PUNCT	_	16	punct	_	_
14	щоб	щоб	SCONJ	SCONJ	_	16	mark	_	_
15	ми	ми	PRON	PRON	Animacy=Anim|Case=Nom|Number=Plur|Person=1|PronType=Prs	16	nsubj	_	_
16	могли	могти	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	12	acl	_	_
17	стати	стати	VERB	VERB	Aspect=Perf|VerbForm=Inf	16	xcomp	_	_
18	більш-менш	більш-менш	ADV	ADV	_	19	advmod	_	_
19	незалежні	незалежний	ADJ	ADJ	Case=Nom|Degree=Pos|Number=Plur	17	xcomp:pred	_	_
20	в	в	ADP	ADP	Case=Loc	21	case	_	_
21	використанні	використання	NOUN	NOUN	Animacy=Inan|Case=Loc|Gender=Neut|Number=Sing	19	obl	_	_
22	своїх	свій	DET	DET	Case=Gen|Number=Plur|Poss=Yes|PronType=Prs|Reflex=Yes	24	det	_	_
23	природних	природний	ADJ	ADJ	Case=Gen|Degree=Pos|Number=Plur	24	amod	_	_
24	ресурсів	ресурс	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	21	nmod	_	SpaceAfter=No
25	.	.	PUNCT	PUNCT	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 xcomp:pred	color:blue
1	Стрижнем	стрижень	NOUN	ADJ	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Typo=Yes	2	nmod	_	_
2	моментом	момент	NOUN	NOUN	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	5	xcomp:pred	_	_
3	цих	цей	DET	DET	Case=Gen|Number=Plur|PronType=Dem	4	det	_	_
4	змін	зміна	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	2	nmod	_	_
5	стало	стати	VERB	VERB	Aspect=Perf|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	0	root	_	_
6	спрямування	спрямування	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	5	nsubj	_	_
7	до	до	ADP	ADP	Case=Gen	8	case	_	_
8	бюджетів	бюджет	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	6	nmod	_	_
9	малих	малий	ADJ	ADJ	Case=Gen|Degree=Pos|Number=Plur	10	amod	_	_
10	міст	місто	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Neut|Number=Plur	8	nmod	_	_
11	50	50	NUM	NUM	Case=Gen|NumType=Card	12	nummod:gov	_	_
12	відсотків	відсоток	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	6	nmod	_	_
13	відрахувань	відрахування	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Neut|Number=Plur	12	nmod	_	_
14	від	від	ADP	ADP	Case=Gen	15	case	_	_
15	податку	податок	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	13	nmod	_	_
16	на	на	ADP	ADP	Case=Acc	17	case	_	_
17	прибуток	прибуток	NOUN	NOUN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	15	nmod	_	_
18	підприємств	підприємство	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Neut|Number=Plur	17	nmod	_	_
19	і	і	CCONJ	CCONJ	_	21	cc	_	_
20	так	так	ADV	ADV	PronType=Dem	21	advmod	_	_
21	дальше	дальше	ADV	ADV	Degree=Cmp|Style=Arch	15	conj	_	SpaceAfter=No
22	.	.	PUNCT	PUNCT	_	5	punct	_	_

~~~


