---
layout: base
title:  'Statistics of nsubj:outer in UD_Old_East_Slavic-RNC'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-RNC: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="orv_rnc-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="orv_rnc-dep-nsubj-pass.html">nsubj:pass</a></tt>.

3 nodes (0%) are attached to their parents as `nsubj:outer`.

3 instances of `nsubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.66666666666667.

The following 2 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_rnc-pos-PRON.html">PRON</a></tt> (2; 67% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nsubj:outer	color:blue
1	Что	что	PRON	_	Case=Nom|Gender=Neut|Number=Sing|PronType=Int	4	nsubj:outer	_	_
2	же	же	PART	_	_	4	advmod	_	_
3	есть	быти	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	_	_
4	дивно	дивный	ADJ	_	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Variant=Short	0	root	_	SpaceAfter=No
5	,	,	PUNCT	_	_	15	punct	_	_
6	яко	яко	SCONJ	_	_	15	mark	_	_
7	Артаксеркс	Артаксерксъ	PROPN	_	Case=Nom|Gender=Masc|NameType=Giv|Number=Sing	15	nsubj	_	SpaceAfter=No
8	,	,	PUNCT	_	_	11	punct	_	_
9	аще	аще	SCONJ	_	_	11	mark	_	_
10	и	и	PART	_	_	11	advmod	_	_
11	мертв	мертвый	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Variant=Short	15	advcl	_	SpaceAfter=No
12	,	,	PUNCT	_	_	11	punct	_	_
13	повелению	повелѣние	NOUN	_	Case=Dat|Gender=Neut|Number=Sing	15	iobj	_	_
14	твоему	твой	DET	_	Case=Dat|Gender=Neut|Number=Sing|Poss=Yes|PronType=Prs	13	det	_	_
15	последует	послѣдовати	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	csubj	_	SpaceAfter=No
16	?	?	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 34	bgColor:blue
# visual-style 34	fgColor:white
# visual-style 38	bgColor:blue
# visual-style 38	fgColor:white
# visual-style 38 34 nsubj:outer	color:blue
1	А	а	CCONJ	_	_	26	cc	_	wf="А"|_
2	буде	буде	SCONJ	_	_	14	mark	_	wf="буде"|_
3	они	они	PRON	_	Case=Nom|Gender=Masc|Number=Plur|Person=3|PronType=Prs	14	nsubj	_	wf="они"
4	Оска	Оська	PROPN	_	Case=Nom|Gender=Masc|NameType=Giv|Number=Sing	3	appos	_	wf="Оска"|SpaceAfter=No
5	,	,	PUNCT	_	_	7	punct	_	wf=","|_
6	и	и	CCONJ	_	_	7	cc	_	wf="и"|_
7	Аѳонка	Афонка	PROPN	_	Case=Nom|Gender=Masc|NameType=Giv|Number=Sing	4	conj	_	wf="Аѳонка"|SpaceAfter=No
8	,	,	PUNCT	_	_	10	punct	_	wf=","|_
9	и	и	CCONJ	_	_	10	cc	_	wf="и"|_
10	Петрушка	Петрушка	PROPN	_	Case=Nom|Gender=Masc|NameType=Giv|Number=Sing	4	conj	_	wf="Петрушка"|SpaceAfter=No
11	,	,	PUNCT	_	_	13	punct	_	wf=","|_
12	и	и	CCONJ	_	_	13	cc	_	wf="и"|_
13	Архипко	Архипко	PROPN	_	Case=Nom|Gender=Masc|NameType=Giv|Number=Sing	4	conj	_	wf="Архипко"
14	учнутъ	учати	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	26	advcl	_	wf="учнутъ"
15	впредь	впредь	ADV	_	Degree=Pos	14	advmod	_	wf="впредь"|_
16	съ	съ	ADP	_	_	17	case	_	wf="съ"|_
17	кѣмъ	кто	PRON	_	Case=Ins|Gender=Masc|Number=Sing|PronType=Rel	18	obl	_	wf="кѣмъ"
18	дратца	дратися	VERB	_	VerbForm=Inf|Voice=Mid	14	xcomp	_	wf="дратца"
19	или	или	CCONJ	_	_	22	cc	_	wf="или"|_
20	какимъ	какой	DET	_	Case=Ins|Gender=Neut|Number=Sing|PronType=Int	21	det	_	wf="какимъ"
21	воровствомъ	воровство	NOUN	_	Case=Ins|Gender=Neut|Number=Sing	22	iobj	_	wf="воровствомъ"
22	воровать	воровати	VERB	_	VerbForm=Inf|Voice=Act	18	conj	_	wf="воровать"|SpaceAfter=No
23	,	,	PUNCT	_	_	14	punct	_	wf=","|_
24	и	и	CCONJ	_	_	26	cc	_	wf="и"|_
25	на	на	ADP	_	_	26	case	_	wf="на"|_
26	насъ	мы	PRON	_	Case=Acc|Number=Plur|Person=1|PronType=Prs	0	root	_	wf="насъ"
27	на	на	ADP	_	_	28	case	_	wf="на"|_
28	порутчикахъ	порутчикъ	NOUN	_	Case=Loc|Gender=Masc|Number=Plur	26	appos	_	wf="порутчикахъ"
29	великого	великий	ADJ	_	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	30	amod	_	wf="великого"
30	государя	государь	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	28	nmod	_	wf="государя"
31	пеня	пеня	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	26	nsubj	_	wf="пеня"|SpaceAfter=No
32	,	,	PUNCT	_	_	38	punct	_	wf=","|_
33	а	а	CCONJ	_	_	38	cc	_	wf="а"|_
34	пени	пеня	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	38	nsubj:outer	_	wf="пени"
35	что	что	PRON	_	Case=Acc|Gender=Neut|Number=Sing|PronType=Rel	38	obj	_	wf="что"
36	великій	великий	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	37	amod	_	wf="великій"
37	государь	государь	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	38	nsubj	_	wf="государь"
38	укажетъ	указати	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	26	conj	_	wf="укажетъ"|SpaceAfter=No
39	.	.	PUNCT	_	_	26	punct	_	wf="."|_

~~~


