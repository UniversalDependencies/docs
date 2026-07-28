---
layout: base
title:  'Statistics of csubj:pass in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="fr_rhapsodie-dep-csubj.html">csubj</a></tt>.

1 nodes (0%) are attached to their parents as `csubj:pass`.

1 instances of `csubj:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.

The following 1 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 14 csubj:pass	color:blue
1	et	et	CCONJ	_	_	20	cc	_	AlignBegin=74482|AlignEnd=74702
2	en	en	ADP	_	_	3	case	_	AlignBegin=74702|AlignEnd=74822
3	plus	plus	ADV	_	_	20	advmod	_	AlignBegin=74822|AlignEnd=75172|SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	AlignBegin=75172|AlignEnd=75172
5	dans	dans	ADP	_	_	7	case	_	AlignBegin=75172|AlignEnd=75312
6	certains	certains	DET	_	Gender=Masc|Number=Plur|PronType=Ind	7	det	_	AlignBegin=75312|AlignEnd=75732|Exponence[Number]=Inherent
7	cas	cas	NOUN	_	Gender=Masc|Number=Plur	20	obl:mod	_	AlignBegin=75732|AlignEnd=76004|Exponence[Gender]=Inherent|Exponence[Number]=Absent
8	comme	comme	ADP	_	_	10	case	_	AlignBegin=76004|AlignEnd=76294
9	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	AlignBegin=76294|AlignEnd=76394|HasSpokenGender=OnlySingExceptWithLiaison
10	mien	sien	PRON	_	Gender=Masc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=1|PronType=Prs	7	nmod	_	AlignBegin=76394|AlignEnd=76821|Exponence[Person]=Inherent|SpaceAfter=No
11	,	,	PUNCT	_	_	12	punct	_	AlignBegin=76821|AlignEnd=77184
12	euh	euh	INTJ	_	_	10	discourse	_	AlignBegin=77184|AlignEnd=77549|SpaceAfter=No
13	,	,	PUNCT	_	_	7	punct	_	AlignBegin=77549|AlignEnd=77549
14	penser	penser	VERB	_	VerbForm=Inf	20	csubj:pass	_	AlignBegin=77549|AlignEnd=78249|SpaceAfter=No|Subject=NoRaising
15	,	,	PUNCT	_	_	16	punct	_	AlignBegin=78249|AlignEnd=78249
16	euh	euh	INTJ	_	_	14	discourse	_	AlignBegin=78249|AlignEnd=78559|SpaceAfter=No
17	,	,	PUNCT	_	_	14	punct	_	AlignBegin=78559|AlignEnd=78559
18	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	20	aux:pass	_	AlignBegin=78559|AlignEnd=78839
19	immédiatement	immédiatement	ADV	_	_	20	advmod	_	AlignBegin=78839|AlignEnd=79479
20	lié	lier	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	AlignBegin=79479|AlignEnd=80004|Exponence[Gender]=Absent|Exponence[Number]=Absent|PastPartHasSpokenGender=NotInThisDialect|Tense[denom]=Past
21	à	à	ADP	_	_	23	case	_	AlignBegin=80275|AlignEnd=80530
22	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	23	det	_	AlignBegin=80530|AlignEnd=80740
23	forme	forme	NOUN	_	Gender=Fem|Number=Sing	20	obl:arg	_	AlignBegin=80740|AlignEnd=81140|Exponence[Gender]=Inherent|Exponence[Number]=Absent
24	que	que	PRON	_	PronType=Rel	35	obj	_	AlignBegin=81140|AlignEnd=81320
25	je	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	34	reparandum	_	AlignBegin=81320|AlignEnd=81854|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No
26	,	,	PUNCT	_	_	29	punct	_	AlignBegin=81854|AlignEnd=81987
27	si	si	SCONJ	_	_	29	mark	_	AlignBegin=81987|AlignEnd=82197
28	je	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	29	nsubj	_	AlignBegin=82197|AlignEnd=82277|Exponence[Number]=Inherent|Exponence[Person]=Inherent
29	puis	pouvoir	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	25	discourse	_	AlignBegin=82277|AlignEnd=82447|Exponence[Person]=Absent
30	dire	dire	VERB	_	VerbForm=Inf	29	xcomp	_	AlignBegin=82447|AlignEnd=82587|SpaceAfter=No|Subject=SubjRaising
31	,	,	PUNCT	_	_	25	punct	_	AlignBegin=82587|AlignEnd=82587
32	je	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	34	reparandum	_	AlignBegin=82587|AlignEnd=82747|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No
33	,	,	PUNCT	_	_	32	punct	_	AlignBegin=82747|AlignEnd=82747
34	je	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	35	nsubj	_	AlignBegin=82747|AlignEnd=82967|Exponence[Number]=Inherent|Exponence[Person]=Inherent
35	visualise	visualiser	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	23	acl:relcl	_	AlignBegin=82967|AlignEnd=83647|Exponence[Person]=Absent
36	déjà	déjà	ADV	_	_	35	advmod	_	AlignBegin=83647|AlignEnd=84067
37	comme	comme	ADP	_	_	39	case	_	AlignBegin=84067|AlignEnd=84297
38	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	39	det	_	AlignBegin=84297|AlignEnd=84397
39	forme	forme	NOUN	_	Gender=Fem|Number=Sing	35	obl:mod	_	AlignBegin=84397|AlignEnd=84707|Exponence[Gender]=Inherent|Exponence[Number]=Absent
40	écrite	écrit	ADJ	_	Gender=Fem|Number=Sing	39	amod	_	AlignBegin=84707|AlignEnd=85177|Exponence[Number]=Absent|HasSpokenGender=YesExceptSingWithLiaison|HasSpokenNumber=OnlyWithLiaison|SpaceAfter=No
41	,	,	PUNCT	_	_	42	punct	_	AlignBegin=85177|AlignEnd=85177
42	voyez	voir	VERB	_	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	40	discourse	_	AlignBegin=85177|AlignEnd=85457|SpaceAfter=No
43	-vous	vous	PRON	_	Case=Nom|Emph=No|Number=Plur|Person=2|PronType=Prs	42	nsubj	_	AlignBegin=85457|AlignEnd=85723|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No
44	.	.	PUNCT	_	_	20	punct	_	AlignBegin=85723|AlignEnd=85723

~~~


