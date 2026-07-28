---
layout: base
title:  'Statistics of obj:lvc in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `obj:lvc`

This relation is a language-specific subtype of <tt><a href="fr_rhapsodie-dep-obj.html">obj</a></tt>.

68 nodes (0%) are attached to their parents as `obj:lvc`.

68 instances of `obj:lvc` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.80882352941176.

The following 2 pairs of parts of speech are connected with `obj:lvc`: <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt> (66; 97% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-ADV.html">ADV</a></tt> (2; 3% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 obj:lvc	color:blue
1	vous	vous	PRON	_	Case=Nom|Emph=No|Number=Plur|Person=2|PronType=Prs	3	nsubj	_	AlignBegin=18470|AlignEnd=18712|Exponence[Number]=Inherent|Exponence[Person]=Inherent|Overlap=Rhap_D0006-7|Polite=Unknown
2	n'	ne	ADV	_	Polarity=Neg	3	advmod	_	AlignBegin=18712|AlignEnd=18756|Overlap=Rhap_D0006-7|SpaceAfter=No
3	avez	avoir	VERB	_	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	AlignBegin=18756|AlignEnd=19068|Overlap=Rhap_D0006-7
4	pas	pas	ADV	_	Polarity=Neg	3	advmod	_	AlignBegin=19068|AlignEnd=19203
5	autour	autour	ADV	_	_	3	advmod	_	AlignBegin=19203|AlignEnd=19493
6	de	de	ADP	_	_	7	case	_	AlignBegin=19493|AlignEnd=19603
7	vous	vous	PRON	_	Case=Acc|Emph=No|Number=Plur|Person=2|PronType=Prs	5	obl:arg	_	AlignBegin=19603|AlignEnd=19981|Exponence[Number]=Inherent|Exponence[Person]=Inherent|Polite=Unknown
8	cette	ce	DET	_	Gender=Fem|Number=Sing|PronType=Dem	9	det	_	AlignBegin=19981|AlignEnd=20180|Exponence[Gender]=Absent|HasSpokenGender=OnlySingExceptWithLiaison|LiaisonAfter=Yes
9	impression	impression	NOUN	_	Gender=Fem|Number=Sing	3	obj:lvc	_	AlignBegin=20180|AlignEnd=20905|Exponence[Gender]=Inherent|Exponence[Number]=Absent|LiaisonPossibleBefore=Yes
10	que	que	SCONJ	_	_	9	dep	_	AlignBegin=20905|AlignEnd=21246|Scrap=Yes|SpaceAfter=No
11	…	…	PUNCT	_	_	3	punct	_	AlignBegin=21246|AlignEnd=21246

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 obj:lvc	color:blue
1	parce	parce	ADV	_	ExtPos=SCONJ	8	mark	_	AlignBegin=274488|AlignEnd=274617|Idiom=Yes
2	que	que	SCONJ	_	_	1	fixed	_	AlignBegin=274617|AlignEnd=274840|InIdiom=Yes
3	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	4	det	_	AlignBegin=275442|AlignEnd=275687|HasSpokenGender=OnlySingExceptWithLiaison
4	mamans	maman	NOUN	_	Gender=Fem|Number=Plur	8	dislocated:subj	_	AlignBegin=275687|AlignEnd=276163|Exponence[Gender]=Inherent|Exponence[Number]=Absent
5	africaines	africain	ADJ	_	Gender=Fem|Number=Plur	4	amod	_	AlignBegin=276163|AlignEnd=276717|Exponence[Number]=Absent|HasSpokenGender=YesExceptSingWithLiaison|HasSpokenNumber=OnlyWithLiaison|SpaceAfter=No
6	,	,	PUNCT	_	_	4	punct	_	AlignBegin=276717|AlignEnd=276717
7	elles	lui	PRON	_	Case=Nom|Emph=No|Gender=Fem|Number=Plur|Person=3|PronType=Prs	8	nsubj	_	AlignBegin=276717|AlignEnd=276867|Exponence[Person]=Inherent
8	ont	avoir	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	AlignBegin=276867|AlignEnd=276957
9	beaucoup	beaucoup	ADV	_	ExtPos=PRON	8	obj:lvc	_	AlignBegin=276957|AlignEnd=277147
10	de	de	ADP	_	_	11	case	_	AlignBegin=277147|AlignEnd=277177
11	mal	mal	NOUN	_	Gender=Masc|Number=Sing	9	obl:arg	_	AlignBegin=277177|AlignEnd=277377|Exponence[Gender]=Inherent
12	à	à	ADP	_	_	14	mark	_	AlignBegin=277377|AlignEnd=277447
13	se	soi	PRON	_	Person=3|PronType=Prs|Reflex=Yes	14	obj	_	AlignBegin=277447|AlignEnd=277517|Exponence[Person]=Inherent
14	séparer	séparer	VERB	_	VerbForm=Inf	11	xcomp	_	AlignBegin=277517|AlignEnd=277917|Subject=SubjRaising
15	de	de	ADP	_	_	17	case	_	AlignBegin=277917|AlignEnd=277967
16	leurs	son	DET	_	Number=Plur|Number[psor]=Plur|Person[psor]=3|Poss=Yes|PronType=Prs	17	det	_	AlignBegin=277967|AlignEnd=278087|HasSpokenGender=OnlySingExceptWithLiaison
17	petits	petit	NOUN	_	Gender=Masc|Number=Plur	14	obl:arg	_	AlignBegin=278087|AlignEnd=278582|Exponence[Gender]=Inherent|Exponence[Number]=Absent|SpaceAfter=No
18	.	.	PUNCT	_	_	8	punct	_	AlignBegin=278582|AlignEnd=278582

~~~


