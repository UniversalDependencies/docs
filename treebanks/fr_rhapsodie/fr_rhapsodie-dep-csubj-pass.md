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
1	et	et	CCONJ	_	_	20	cc	_	WordAlignmentBegin=74482|WordAlignmentEnd=74702
2	en	en	ADP	_	_	3	case	_	WordAlignmentBegin=74702|WordAlignmentEnd=74822
3	plus	plus	ADV	_	_	20	advmod	_	SpaceAfter=No|WordAlignmentBegin=74822|WordAlignmentEnd=75172
4	,	,	PUNCT	_	_	3	punct	_	WordAlignmentBegin=75172|WordAlignmentEnd=75172
5	dans	dans	ADP	_	_	7	case	_	WordAlignmentBegin=75172|WordAlignmentEnd=75312
6	certains	certains	DET	_	Gender=Masc|Number=Plur|PronType=Ind	7	det	_	Exponence[Number]=Inherent|WordAlignmentBegin=75312|WordAlignmentEnd=75732
7	cas	cas	NOUN	_	Gender=Masc|Number=Plur	20	obl:mod	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|WordAlignmentBegin=75732|WordAlignmentEnd=76004
8	comme	comme	ADP	_	_	10	case	_	WordAlignmentBegin=76004|WordAlignmentEnd=76294
9	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	HasSpokenGender=OnlySingExceptWithLiaison|WordAlignmentBegin=76294|WordAlignmentEnd=76394
10	mien	mien	PRON	_	Gender=Masc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=1|PronType=Prs	7	nmod	_	Exponence[Person]=Inherent|SpaceAfter=No|WordAlignmentBegin=76394|WordAlignmentEnd=76821
11	,	,	PUNCT	_	_	12	punct	_	WordAlignmentBegin=76821|WordAlignmentEnd=77184
12	euh	euh	INTJ	_	_	10	discourse:filler	_	SpaceAfter=No|WordAlignmentBegin=77184|WordAlignmentEnd=77549
13	,	,	PUNCT	_	_	7	punct	_	WordAlignmentBegin=77549|WordAlignmentEnd=77549
14	penser	penser	VERB	_	VerbForm=Inf	20	csubj:pass	_	SpaceAfter=No|Subject=NoRaising|WordAlignmentBegin=77549|WordAlignmentEnd=78249
15	,	,	PUNCT	_	_	16	punct	_	WordAlignmentBegin=78249|WordAlignmentEnd=78249
16	euh	euh	INTJ	_	_	14	discourse:filler	_	SpaceAfter=No|WordAlignmentBegin=78249|WordAlignmentEnd=78559
17	,	,	PUNCT	_	_	14	punct	_	WordAlignmentBegin=78559|WordAlignmentEnd=78559
18	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	20	aux:pass	_	WordAlignmentBegin=78559|WordAlignmentEnd=78839
19	immédiatement	immédiatement	ADV	_	_	20	advmod	_	WordAlignmentBegin=78839|WordAlignmentEnd=79479
20	lié	lier	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	Exponence[Gender]=Absent|Exponence[Number]=Absent|PastPartHasSpokenGender=NotInThisDialect|Status[Tense]=Denom|WordAlignmentBegin=79479|WordAlignmentEnd=80004
21	à	à	ADP	_	_	23	case	_	WordAlignmentBegin=80275|WordAlignmentEnd=80530
22	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	23	det	_	WordAlignmentBegin=80530|WordAlignmentEnd=80740
23	forme	forme	NOUN	_	Gender=Fem|Number=Sing	20	obl:arg	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|WordAlignmentBegin=80740|WordAlignmentEnd=81140
24	que	que	PRON	_	PronType=Rel	35	obj	_	WordAlignmentBegin=81140|WordAlignmentEnd=81320
25	je	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	34	reparandum	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No|WordAlignmentBegin=81320|WordAlignmentEnd=81854
26	,	,	PUNCT	_	_	29	punct	_	WordAlignmentBegin=81854|WordAlignmentEnd=81987
27	si	si	SCONJ	_	_	29	mark	_	WordAlignmentBegin=81987|WordAlignmentEnd=82197
28	je	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	29	nsubj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|WordAlignmentBegin=82197|WordAlignmentEnd=82277
29	puis	pouvoir	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	35	discourse	_	Exponence[Person]=Absent|WordAlignmentBegin=82277|WordAlignmentEnd=82447
30	dire	dire	VERB	_	VerbForm=Inf	29	xcomp	_	SpaceAfter=No|Subject=SubjRaising|WordAlignmentBegin=82447|WordAlignmentEnd=82587
31	,	,	PUNCT	_	_	29	punct	_	WordAlignmentBegin=82587|WordAlignmentEnd=82587
32	je	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	34	reparandum	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No|WordAlignmentBegin=82587|WordAlignmentEnd=82747
33	,	,	PUNCT	_	_	32	punct	_	WordAlignmentBegin=82747|WordAlignmentEnd=82747
34	je	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	35	nsubj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|WordAlignmentBegin=82747|WordAlignmentEnd=82967
35	visualise	visualiser	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	23	acl:relcl	_	Exponence[Person]=Absent|WordAlignmentBegin=82967|WordAlignmentEnd=83647
36	déjà	déjà	ADV	_	_	35	advmod	_	WordAlignmentBegin=83647|WordAlignmentEnd=84067
37	comme	comme	ADP	_	_	39	case	_	WordAlignmentBegin=84067|WordAlignmentEnd=84297
38	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	39	det	_	WordAlignmentBegin=84297|WordAlignmentEnd=84397
39	forme	forme	NOUN	_	Gender=Fem|Number=Sing	35	obl:mod	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|WordAlignmentBegin=84397|WordAlignmentEnd=84707
40	écrite	écrit	ADJ	_	Gender=Fem|Number=Sing	39	amod	_	Exponence[Number]=Absent|HasSpokenGender=YesExceptSingWithLiaison|HasSpokenNumber=OnlyWithLiaison|SpaceAfter=No|WordAlignmentBegin=84707|WordAlignmentEnd=85177
41	,	,	PUNCT	_	_	42	punct	_	WordAlignmentBegin=85177|WordAlignmentEnd=85177
42	voyez	voir	VERB	_	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	40	discourse	_	SpaceAfter=No|WordAlignmentBegin=85177|WordAlignmentEnd=85457
43	-vous	vous	PRON	_	Case=Nom|Emph=No|Number=Plur|Person=2|PronType=Prs	42	nsubj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No|WordAlignmentBegin=85457|WordAlignmentEnd=85723
44	.	.	PUNCT	_	_	20	punct	_	WordAlignmentBegin=85723|WordAlignmentEnd=85723

~~~


