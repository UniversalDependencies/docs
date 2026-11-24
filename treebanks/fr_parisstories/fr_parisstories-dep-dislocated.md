---
layout: base
title:  'Statistics of dislocated in UD_French-ParisStories'
udver: '2'
---

## Treebank Statistics: UD_French-ParisStories: Relations: `dislocated`

This relation is universal.
There are 4 language-specific subtypes of `dislocated`: <tt><a href="fr_parisstories-dep-dislocated-mod.html">dislocated:mod</a></tt>, <tt><a href="fr_parisstories-dep-dislocated-obj.html">dislocated:obj</a></tt>, <tt><a href="fr_parisstories-dep-dislocated-obl.html">dislocated:obl</a></tt>, <tt><a href="fr_parisstories-dep-dislocated-subj.html">dislocated:subj</a></tt>.

1 nodes (0%) are attached to their parents as `dislocated`.

1 instances of `dislocated` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 8.

The following 1 pairs of parts of speech are connected with `dislocated`: <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 9 dislocated	color:blue
1	donc	donc	ADV	_	_	17	advmod	_	_
2	moi	moi	PRON	_	Emph=Yes|Number=Sing|Person=1|PronType=Prs	6	reparandum	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent
3	en	en	ADP	_	ExtPos=ADV	17	discourse	_	Idiom=Yes
4	fait	fait	NOUN	_	Gender=Masc|Number=Sing	3	fixed	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|InIdiom=Yes|SpaceAfter=No
5	,	,	PUNCT	_	_	3	punct	_	_
6	moi	moi	PRON	_	Emph=Yes|Number=Sing|Person=1|PronType=Prs	17	dislocated:subj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent
7	je	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	8	nsubj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent
8	crois	croire	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	17	discourse	_	Exponence[Person]=Absent
9	ce	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	17	dislocated	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent
10	que	que	PRON	_	PronType=Rel	13	obj	_	_
11	j'	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	13	nsubj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No
12	avais	avoir	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Imp|VerbForm=Fin	13	aux:tense	_	_
13	fait	faire	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	9	acl:relcl	_	Exponence[Number]=Absent|PastPartHasSpokenGender=Yes|SpaceAfter=No|Status[Tense]=Denom
14	,	,	PUNCT	_	_	9	punct	_	_
15	j'	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	17	nsubj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No
16	avait	avoir	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Imp|VerbForm=Fin	17	aux:tense	_	_
17	acheté	acheter	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	Exponence[Gender]=Absent|Exponence[Number]=Absent|PastPartHasSpokenGender=NotInThisDialect|Status[Tense]=Denom
18	un	un	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Ind	22	reparandum	_	Exponence[Person]=Inherent|SpaceAfter=No
19	,	,	PUNCT	_	_	18	punct	_	_
20	il	lui	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Prs	22	expl:subj	_	Exponence[Person]=Inherent
21	y	y	PRON	_	Person=3|PronType=Prs	22	expl:comp	_	Exponence[Person]=Inherent
22	avait	avoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	17	ccomp	_	Exponence[Number]=Absent|Exponence[Person]=Absent|Graft=Yes
23	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	24	det	_	_
24	genre	genre	NOUN	_	Gender=Masc|Number=Sing	22	obj	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent
25	de	de	ADP	_	_	30	mark	_	SpaceAfter=No
26	,	,	PUNCT	_	_	30	punct	_	_
27	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	30	nsubj	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No
28	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	30	cop	_	Graft=Yes
29	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	30	det	_	_
30	chapeau	chapeau	NOUN	_	Gender=Masc|Number=Sing	24	acl	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent
31	en	en	ADP	_	_	32	case	_	_
32	mousse	mousse	NOUN	_	Gender=Fem|Number=Sing	30	nmod	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent
33	de	de	ADP	_	_	34	case	_	_
34	pirate	pirate	NOUN	_	Gender=Masc|Number=Sing	30	nmod	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent
35	qu'	que	PRON	_	PronType=Rel	39	obj	_	SpaceAfter=No
36	on	on	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Ind	39	nsubj	_	Exponence[Gender]=Absent|Exponence[Number]=Inherent|Exponence[Person]=Inherent
37	lui	lui	PRON	_	Case=Dat|Emph=No|Number=Sing|Person=3|PronType=Prs	39	iobj	_	Exponence[Person]=Inherent
38	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	39	aux:tense	_	_
39	collé	coller	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	30	acl:relcl	_	Exponence[Gender]=Absent|Exponence[Number]=Absent|PastPartHasSpokenGender=NotInThisDialect|Status[Tense]=Denom
40	sur	sur	ADP	_	_	42	case	_	_
41	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	42	det	_	HasSpokenGender=OnlySingExceptWithLiaison
42	tête	tête	NOUN	_	Gender=Fem|Number=Sing	39	obl:mod	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|SpaceAfter=No
43	.	.	PUNCT	_	_	17	punct	_	_

~~~


