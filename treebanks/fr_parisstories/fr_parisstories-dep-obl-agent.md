---
layout: base
title:  'Statistics of obl:agent in UD_French-ParisStories'
udver: '2'
---

## Treebank Statistics: UD_French-ParisStories: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="fr_parisstories-dep-obl.html">obl</a></tt>.
There are also 2 other language-specific subtypes of `obl`: <tt><a href="fr_parisstories-dep-obl-arg.html">obl:arg</a></tt>, <tt><a href="fr_parisstories-dep-obl-mod.html">obl:mod</a></tt>.

2 nodes (0%) are attached to their parents as `obl:agent`.

2 instances of `obl:agent` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.5.

The following 2 pairs of parts of speech are connected with `obl:agent`: <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt> (1; 50% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 obl:agent	color:blue
1	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	4	nsubj:pass	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|WordAlignmentBegin=49795|WordAlignmentEnd=49995
2	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux:tense	_	WordAlignmentBegin=49995|WordAlignmentEnd=50194
3	été	être	AUX	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	4	aux:pass	_	Status[Tense]=Denom|WordAlignmentBegin=50194|WordAlignmentEnd=50394
4	organisé	organiser	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	Exponence[Gender]=Absent|Exponence[Number]=Absent|PastPartHasSpokenGender=NotInThisDialect|Status[Tense]=Denom|WordAlignmentBegin=50394|WordAlignmentEnd=50593
5	par	par	ADP	_	_	7	case	_	WordAlignmentBegin=50593|WordAlignmentEnd=50793
6	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	HasSpokenGender=OnlySingExceptWithLiaison|WordAlignmentBegin=50793|WordAlignmentEnd=50992
7	prof	prof	NOUN	_	Gender=Masc|Number=Sing	4	obl:agent	_	CorrectForm=profs|CorrectNumber=Plur|Exponence[Gender]=Inherent|Exponence[Number]=Absent|SpaceAfter=No|WordAlignmentBegin=50992|WordAlignmentEnd=51192
8	.	.	PUNCT	_	_	4	punct	_	WordAlignmentBegin=51192|WordAlignmentEnd=51192

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 obl:agent	color:blue
1	donc	donc	ADV	_	_	6	advmod	_	WordAlignmentBegin=64048|WordAlignmentEnd=64281
2	ok	ok	ADV	_	_	1	discourse	_	SpaceAfter=No|WordAlignmentBegin=64281|WordAlignmentEnd=64515
3	,	,	PUNCT	_	_	1	punct	_	WordAlignmentBegin=64515|WordAlignmentEnd=64515
4	j'	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	6	nsubj:pass	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No|WordAlignmentBegin=64515|WordAlignmentEnd=64748
5	étais	être	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Imp|VerbForm=Fin	6	aux:tense	_	WordAlignmentBegin=64748|WordAlignmentEnd=64982
6	attirée	attirer	VERB	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	Exponence[Gender]=Absent|Exponence[Number]=Absent|PastPartHasSpokenGender=NotInThisDialect|Status[Tense]=Denom|WordAlignmentBegin=64982|WordAlignmentEnd=65215
7	par	par	ADP	_	_	8	case	_	WordAlignmentBegin=65215|WordAlignmentEnd=65448
8	lui	lui	PRON	_	Emph=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	obl:agent	_	Exponence[Person]=Inherent|WordAlignmentBegin=65448|WordAlignmentEnd=65682
9	à	à	ADP	_	_	11	case	_	WordAlignmentBegin=65682|WordAlignmentEnd=65915
10	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
11	début	début	NOUN	_	Gender=Masc|Number=Sing	6	obl:mod	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|SpaceAfter=No|WordAlignmentBegin=65915|WordAlignmentEnd=66149
12	,	,	PUNCT	_	_	13	punct	_	WordAlignmentBegin=66149|WordAlignmentEnd=66149
13	physiquement	physiquement	ADV	_	_	6	advmod	_	SpaceAfter=No|WordAlignmentBegin=66149|WordAlignmentEnd=66382
14	.	.	PUNCT	_	_	6	punct	_	WordAlignmentBegin=66382|WordAlignmentEnd=66382

~~~


