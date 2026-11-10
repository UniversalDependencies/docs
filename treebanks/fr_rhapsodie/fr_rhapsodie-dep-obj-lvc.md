---
layout: base
title:  'Statistics of obj:lvc in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `obj:lvc`

This relation is a language-specific subtype of <tt><a href="fr_rhapsodie-dep-obj.html">obj</a></tt>.

68 nodes (0%) are attached to their parents as `obj:lvc`.

68 instances of `obj:lvc` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.67647058823529.

The following 2 pairs of parts of speech are connected with `obj:lvc`: <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt> (66; 97% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-ADV.html">ADV</a></tt> (2; 3% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 obj:lvc	color:blue
1	vous	vous	PRON	_	Case=Nom|Emph=No|Number=Plur|Person=2|PronType=Prs	3	nsubj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|Overlap=Rhap_D0006-7|Polite=Unknown|WordAlignmentBegin=18470|WordAlignmentEnd=18712
2	n'	ne	ADV	_	Polarity=Neg	3	advmod	_	Overlap=Rhap_D0006-7|SpaceAfter=No|WordAlignmentBegin=18712|WordAlignmentEnd=18756
3	avez	avoir	VERB	_	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	Overlap=Rhap_D0006-7|WordAlignmentBegin=18756|WordAlignmentEnd=19068
4	pas	pas	ADV	_	Polarity=Neg	3	advmod	_	WordAlignmentBegin=19068|WordAlignmentEnd=19203
5	autour	autour	ADV	_	_	3	advmod	_	WordAlignmentBegin=19203|WordAlignmentEnd=19493
6	de	de	ADP	_	_	7	case	_	WordAlignmentBegin=19493|WordAlignmentEnd=19603
7	vous	vous	PRON	_	Case=Acc|Emph=No|Number=Plur|Person=2|PronType=Prs	5	obl:arg	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|Polite=Unknown|WordAlignmentBegin=19603|WordAlignmentEnd=19981
8	cette	ce	DET	_	Gender=Fem|Number=Sing|PronType=Dem	9	det	_	Exponence[Gender]=Absent|HasSpokenGender=OnlySingExceptWithLiaison|LiaisonAfter=Yes|WordAlignmentBegin=19981|WordAlignmentEnd=20180
9	impression	impression	NOUN	_	Gender=Fem|Number=Sing	3	obj:lvc	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|LiaisonPossibleBefore=Yes|WordAlignmentBegin=20180|WordAlignmentEnd=20905
10	que	que	SCONJ	_	_	9	dep	_	Scrap=Yes|SpaceAfter=No|WordAlignmentBegin=20905|WordAlignmentEnd=21246
11	…	…	PUNCT	_	_	3	punct	_	WordAlignmentBegin=21246|WordAlignmentEnd=21246

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 obj:lvc	color:blue
1	parce	parce	ADV	_	ExtPos=SCONJ	8	mark	_	Automated=Yes|Idiom=Yes|SingleSpeaker=Yes|WordAlignmentBegin=274488|WordAlignmentEnd=274617
2	que	que	SCONJ	_	_	1	fixed	_	InIdiom=Yes|WordAlignmentBegin=274617|WordAlignmentEnd=274840
3	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	4	det	_	HasSpokenGender=OnlySingExceptWithLiaison|WordAlignmentBegin=275442|WordAlignmentEnd=275687
4	mamans	maman	NOUN	_	Gender=Fem|Number=Plur	8	dislocated:subj	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|WordAlignmentBegin=275687|WordAlignmentEnd=276163
5	africaines	africain	ADJ	_	Gender=Fem|Number=Plur	4	amod	_	Exponence[Number]=Absent|HasSpokenGender=YesExceptSingWithLiaison|HasSpokenNumber=OnlyWithLiaison|SpaceAfter=No|WordAlignmentBegin=276163|WordAlignmentEnd=276717
6	,	,	PUNCT	_	_	4	punct	_	WordAlignmentBegin=276717|WordAlignmentEnd=276717
7	elles	lui	PRON	_	Case=Nom|Emph=No|Gender=Fem|Number=Plur|Person=3|PronType=Prs	8	nsubj	_	Exponence[Person]=Inherent|WordAlignmentBegin=276717|WordAlignmentEnd=276867
8	ont	avoir	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Coconstruct=mod::Rhap_D0002-108::4|WordAlignmentBegin=276867|WordAlignmentEnd=276957
9	beaucoup	beaucoup	ADV	_	ExtPos=PRON	8	obj:lvc	_	WordAlignmentBegin=276957|WordAlignmentEnd=277147
10	de	de	ADP	_	_	11	case	_	WordAlignmentBegin=277147|WordAlignmentEnd=277177
11	mal	mal	NOUN	_	Gender=Masc|Number=Sing	9	obl:arg	_	Exponence[Gender]=Inherent|WordAlignmentBegin=277177|WordAlignmentEnd=277377
12	à	à	ADP	_	_	14	mark	_	WordAlignmentBegin=277377|WordAlignmentEnd=277447
13	se	soi	PRON	_	Person=3|PronType=Prs|Reflex=Yes	14	obj	_	Exponence[Person]=Inherent|WordAlignmentBegin=277447|WordAlignmentEnd=277517
14	séparer	séparer	VERB	_	VerbForm=Inf	11	xcomp	_	Subject=SubjRaising|WordAlignmentBegin=277517|WordAlignmentEnd=277917
15	de	de	ADP	_	_	17	case	_	WordAlignmentBegin=277917|WordAlignmentEnd=277967
16	leurs	son	DET	_	Number=Plur|Number[psor]=Plur|Person[psor]=3|Poss=Yes|PronType=Prs	17	det	_	HasSpokenGender=OnlySingExceptWithLiaison|WordAlignmentBegin=277967|WordAlignmentEnd=278087
17	petits	petit	NOUN	_	Gender=Masc|Number=Plur	14	obl:arg	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|SpaceAfter=No|WordAlignmentBegin=278087|WordAlignmentEnd=278582
18	.	.	PUNCT	_	_	8	punct	_	WordAlignmentBegin=278582|WordAlignmentEnd=278582

~~~


