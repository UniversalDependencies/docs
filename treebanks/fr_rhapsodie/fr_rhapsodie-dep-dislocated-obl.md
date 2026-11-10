---
layout: base
title:  'Statistics of dislocated:obl in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `dislocated:obl`

This relation is a language-specific subtype of <tt><a href="fr_rhapsodie-dep-dislocated.html">dislocated</a></tt>.
There are also 3 other language-specific subtypes of `dislocated`: <tt><a href="fr_rhapsodie-dep-dislocated-mod.html">dislocated:mod</a></tt>, <tt><a href="fr_rhapsodie-dep-dislocated-obj.html">dislocated:obj</a></tt>, <tt><a href="fr_rhapsodie-dep-dislocated-subj.html">dislocated:subj</a></tt>.

6 nodes (0%) are attached to their parents as `dislocated:obl`.

4 instances of `dislocated:obl` (67%) are right-to-left (child precedes parent).
Average distance between parent and child is 7.33333333333333.

The following 2 pairs of parts of speech are connected with `dislocated:obl`: <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (5; 83% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt> (1; 17% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 6 dislocated:obl	color:blue
1	je	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|WordAlignmentBegin=23980|WordAlignmentEnd=24095
2	vois	voir	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	14	discourse	_	Exponence[Person]=Absent|SpaceAfter=No|WordAlignmentBegin=24095|WordAlignmentEnd=24285
3	,	,	PUNCT	_	_	4	punct	_	WordAlignmentBegin=24285|WordAlignmentEnd=24285
4	euh	euh	INTJ	_	_	2	discourse:filler	_	SpaceAfter=No|WordAlignmentBegin=24285|WordAlignmentEnd=24745
5	,	,	PUNCT	_	_	2	punct	_	WordAlignmentBegin=24745|WordAlignmentEnd=24745
6	moi	moi	PRON	_	Emph=Yes|Number=Sing|Person=1|PronType=Prs	14	dislocated:obl	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No|WordAlignmentBegin=24745|WordAlignmentEnd=25095
7	,	,	PUNCT	_	_	6	punct	_	WordAlignmentBegin=25095|WordAlignmentEnd=25095
8	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	HasSpokenGender=OnlySingExceptWithLiaison|WordAlignmentBegin=25095|WordAlignmentEnd=25195
9	fac	fac	NOUN	_	Gender=Fem|Number=Sing	14	dislocated:subj	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|SpaceAfter=No|WordAlignmentBegin=25195|WordAlignmentEnd=25385
10	,	,	PUNCT	_	_	9	punct	_	WordAlignmentBegin=25385|WordAlignmentEnd=25385
11	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	14	nsubj	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|WordAlignmentBegin=25385|WordAlignmentEnd=25485
12	m'	moi	PRON	_	Case=Dat|Emph=No|Number=Sing|Person=1|PronType=Prs	14	iobj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No|WordAlignmentBegin=25485|WordAlignmentEnd=25535
13	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	aux:tense	_	WordAlignmentBegin=25535|WordAlignmentEnd=25565
14	fait	faire	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	Exponence[Number]=Absent|PastPartHasSpokenGender=Yes|Status[Tense]=Denom|WordAlignmentBegin=25565|WordAlignmentEnd=25685
15	beaucoup	beaucoup	ADV	_	_	14	obj	_	WordAlignmentBegin=25685|WordAlignmentEnd=25885
16	de	de	ADP	_	_	17	case	_	WordAlignmentBegin=25885|WordAlignmentEnd=25975
17	bien	bien	NOUN	_	Gender=Masc|Number=Sing	15	obl:arg	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|SpaceAfter=No|WordAlignmentBegin=25975|WordAlignmentEnd=26157
18	.	.	PUNCT	_	_	14	punct	_	WordAlignmentBegin=26157|WordAlignmentEnd=26157

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 2 dislocated:obl	color:blue
1	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	2	det	_	HasSpokenGender=OnlySingExceptWithLiaison|LiaisonAfter=Yes|WordAlignmentBegin=335956|WordAlignmentEnd=336151
2	animaux	animal	NOUN	_	Gender=Masc|Number=Plur	15	dislocated:obl	_	Exponence[Gender]=Inherent|LiaisonPossibleBefore=Yes|SpaceAfter=No|WordAlignmentBegin=336151|WordAlignmentEnd=336761
3	,	,	PUNCT	_	_	2	punct	_	WordAlignmentBegin=336761|WordAlignmentEnd=336761
4	dans	dans	ADP	_	_	5	case	_	WordAlignmentBegin=336761|WordAlignmentEnd=336931
5	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	9	reparandum	_	HasSpokenGender=OnlySingExceptWithLiaison|Scrap=Yes|SpaceAfter=No|WordAlignmentBegin=336931|WordAlignmentEnd=337204
6	,	,	PUNCT	_	_	5	punct	_	WordAlignmentBegin=337204|WordAlignmentEnd=337844
7	dans	dans	ADP	_	_	9	case	_	WordAlignmentBegin=337844|WordAlignmentEnd=338019
8	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	9	det	_	HasSpokenGender=OnlySingExceptWithLiaison|WordAlignmentBegin=338019|WordAlignmentEnd=338209
9	quartiers	quartier	NOUN	_	Gender=Masc|Number=Plur	15	obl:mod	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|WordAlignmentBegin=338209|WordAlignmentEnd=338699
10	de	de	ADP	_	_	11	case	_	WordAlignmentBegin=338699|WordAlignmentEnd=338729
11	Paris	Paris	PROPN	_	_	9	nmod	_	SpaceAfter=No|WordAlignmentBegin=338729|WordAlignmentEnd=339069
12	,	,	PUNCT	_	_	9	punct	_	WordAlignmentBegin=339069|WordAlignmentEnd=339069
13	vous	vous	PRON	_	Case=Nom|Emph=No|Number=Plur|Person=2|PronType=Prs	15	nsubj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|Polite=Unknown|WordAlignmentBegin=339069|WordAlignmentEnd=339289
14	en	en	PRON	_	Person=3|PronType=Prs	15	iobj	_	Exponence[Person]=Inherent|WordAlignmentBegin=339289|WordAlignmentEnd=339349
15	pensez	penser	VERB	_	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	WordAlignmentBegin=339349|WordAlignmentEnd=339739
16	quoi	quoi	PRON	_	Person=3|PronType=Int	15	obj	_	Exponence[Person]=Inherent|WordAlignmentBegin=339739|WordAlignmentEnd=340032
17	ici	ici	ADV	_	_	15	advmod	_	Overlap=Rhap_D0006-139|WordAlignmentBegin=341124|WordAlignmentEnd=341662
18	?	?	PUNCT	_	_	15	punct	_	Overlap=Rhap_D0006-105|WordAlignmentBegin=341662|WordAlignmentEnd=341662

~~~


