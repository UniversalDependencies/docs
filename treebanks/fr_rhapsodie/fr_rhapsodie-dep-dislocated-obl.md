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
1	je	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	AlignBegin=23980|AlignEnd=24095|Exponence[Number]=Inherent|Exponence[Person]=Inherent
2	vois	voir	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	14	discourse	_	AlignBegin=24095|AlignEnd=24285|Exponence[Person]=Absent|SpaceAfter=No
3	,	,	PUNCT	_	_	4	punct	_	AlignBegin=24285|AlignEnd=24285
4	euh	euh	INTJ	_	_	2	discourse	_	AlignBegin=24285|AlignEnd=24745|SpaceAfter=No
5	,	,	PUNCT	_	_	2	punct	_	AlignBegin=24745|AlignEnd=24745
6	moi	moi	PRON	_	Emph=Yes|Number=Sing|Person=1|PronType=Prs	14	dislocated:obl	_	AlignBegin=24745|AlignEnd=25095|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No
7	,	,	PUNCT	_	_	6	punct	_	AlignBegin=25095|AlignEnd=25095
8	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	AlignBegin=25095|AlignEnd=25195|HasSpokenGender=OnlySingExceptWithLiaison
9	fac	fac	NOUN	_	Gender=Fem|Number=Sing	14	dislocated:subj	_	AlignBegin=25195|AlignEnd=25385|Exponence[Gender]=Inherent|Exponence[Number]=Absent|SpaceAfter=No
10	,	,	PUNCT	_	_	9	punct	_	AlignBegin=25385|AlignEnd=25385
11	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	14	nsubj	_	AlignBegin=25385|AlignEnd=25485|Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent
12	m'	moi	PRON	_	Case=Dat|Emph=No|Number=Sing|Person=1|PronType=Prs	14	iobj	_	AlignBegin=25485|AlignEnd=25535|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No
13	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	aux:tense	_	AlignBegin=25535|AlignEnd=25565
14	fait	faire	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	0	root	_	AlignBegin=25565|AlignEnd=25685|Exponence[Number]=Absent|PastPartHasSpokenGender=Yes|Tense[denom]=Past
15	beaucoup	beaucoup	ADV	_	_	14	obj	_	AlignBegin=25685|AlignEnd=25885
16	de	de	ADP	_	_	17	case	_	AlignBegin=25885|AlignEnd=25975
17	bien	bien	NOUN	_	Gender=Masc|Number=Sing	15	obl:arg	_	AlignBegin=25975|AlignEnd=26157|Exponence[Gender]=Inherent|Exponence[Number]=Absent|SpaceAfter=No
18	.	.	PUNCT	_	_	14	punct	_	AlignBegin=26157|AlignEnd=26157

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 2 dislocated:obl	color:blue
1	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	2	det	_	AlignBegin=335956|AlignEnd=336151|HasSpokenGender=OnlySingExceptWithLiaison|LiaisonAfter=Yes
2	animaux	animal	NOUN	_	Gender=Masc|Number=Plur	15	dislocated:obl	_	AlignBegin=336151|AlignEnd=336761|Exponence[Gender]=Inherent|LiaisonPossibleBefore=Yes|SpaceAfter=No
3	,	,	PUNCT	_	_	2	punct	_	AlignBegin=336761|AlignEnd=336761
4	dans	dans	ADP	_	_	5	case	_	AlignBegin=336761|AlignEnd=336931
5	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	9	reparandum	_	AlignBegin=336931|AlignEnd=337204|HasSpokenGender=OnlySingExceptWithLiaison|Scrap=Yes|SpaceAfter=No
6	,	,	PUNCT	_	_	5	punct	_	AlignBegin=337204|AlignEnd=337844
7	dans	dans	ADP	_	_	9	case	_	AlignBegin=337844|AlignEnd=338019
8	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	9	det	_	AlignBegin=338019|AlignEnd=338209|HasSpokenGender=OnlySingExceptWithLiaison
9	quartiers	quartier	NOUN	_	Gender=Masc|Number=Plur	15	obl:mod	_	AlignBegin=338209|AlignEnd=338699|Exponence[Gender]=Inherent|Exponence[Number]=Absent
10	de	de	ADP	_	_	11	case	_	AlignBegin=338699|AlignEnd=338729
11	Paris	Paris	PROPN	_	_	9	nmod	_	AlignBegin=338729|AlignEnd=339069|SpaceAfter=No
12	,	,	PUNCT	_	_	9	punct	_	AlignBegin=339069|AlignEnd=339069
13	vous	vous	PRON	_	Case=Nom|Emph=No|Number=Plur|Person=2|PronType=Prs	15	nsubj	_	AlignBegin=339069|AlignEnd=339289|Exponence[Number]=Inherent|Exponence[Person]=Inherent|Polite=Unknown
14	en	en	PRON	_	Person=3|PronType=Prs	15	iobj	_	AlignBegin=339289|AlignEnd=339349|Exponence[Person]=Inherent
15	pensez	penser	VERB	_	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	AlignBegin=339349|AlignEnd=339739
16	quoi	quoi	PRON	_	Person=3|PronType=Int	15	obj	_	AlignBegin=339739|AlignEnd=340032|Exponence[Person]=Inherent
17	ici	ici	ADV	_	_	15	advmod	_	AlignBegin=341124|AlignEnd=341662|Overlap=Rhap_D0006-139
18	?	?	PUNCT	_	_	15	punct	_	AlignBegin=341662|AlignEnd=341662|Overlap=Rhap_D0006-105

~~~


