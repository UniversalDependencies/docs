---
layout: base
title:  'Statistics of dislocated:mod in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `dislocated:mod`

This relation is a language-specific subtype of <tt><a href="fr_rhapsodie-dep-dislocated.html">dislocated</a></tt>.
There are also 3 other language-specific subtypes of `dislocated`: <tt><a href="fr_rhapsodie-dep-dislocated-obj.html">dislocated:obj</a></tt>, <tt><a href="fr_rhapsodie-dep-dislocated-obl.html">dislocated:obl</a></tt>, <tt><a href="fr_rhapsodie-dep-dislocated-subj.html">dislocated:subj</a></tt>.

18 nodes (0%) are attached to their parents as `dislocated:mod`.

18 instances of `dislocated:mod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 9.44444444444444.

The following 6 pairs of parts of speech are connected with `dislocated:mod`: <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt> (11; 61% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (3; 17% instances), <tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt> (1; 6% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (1; 6% instances), <tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (1; 6% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-PROPN.html">PROPN</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 4 dislocated:mod	color:blue
1	vraiment	vraiment	ADV	_	_	11	advmod	_	SpaceAfter=No|WordAlignmentBegin=239381|WordAlignmentEnd=239576
2	,	,	PUNCT	_	_	1	punct	_	WordAlignmentBegin=239576|WordAlignmentEnd=239576
3	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	_	HasSpokenGender=OnlySingExceptWithLiaison|WordAlignmentBegin=239576|WordAlignmentEnd=239656
4	psychiatrie	psychiatrie	NOUN	_	Gender=Fem|Number=Sing	11	dislocated:mod	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|SpaceAfter=No|WordAlignmentBegin=239656|WordAlignmentEnd=239997
5	,	,	PUNCT	_	_	4	punct	_	WordAlignmentBegin=239997|WordAlignmentEnd=239997
6	il	lui	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Prs	7	expl:subj	_	Exponence[Person]=Inherent|WordAlignmentBegin=239997|WordAlignmentEnd=240043
7	faut	falloir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	reparandum	_	Exponence[Person]=Absent|WordAlignmentBegin=240043|WordAlignmentEnd=240161
8	ê~	ê~	X	_	ExtPos=VERB	7	ccomp	_	Scrap=Yes|SpaceAfter=No|WordAlignmentBegin=240161|WordAlignmentEnd=240253
9	,	,	PUNCT	_	_	7	punct	_	WordAlignmentBegin=240253|WordAlignmentEnd=240253
10	il	lui	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Prs	11	expl:subj	_	Exponence[Person]=Inherent|WordAlignmentBegin=240253|WordAlignmentEnd=240367
11	faut	falloir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Exponence[Person]=Absent|WordAlignmentBegin=240367|WordAlignmentEnd=240551
12	être	être	AUX	_	VerbForm=Inf	11	ccomp	_	Scrap=Yes|SpaceAfter=No|Subject=NoRaising|WordAlignmentBegin=240551|WordAlignmentEnd=241190
13	…	…	PUNCT	_	_	11	punct	_	WordAlignmentBegin=241190|WordAlignmentEnd=241190

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 dislocated:mod	color:blue
1	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	4	dislocated:mod	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No|WordAlignmentBegin=273148|WordAlignmentEnd=273398
2	,	,	PUNCT	_	_	1	punct	_	WordAlignmentBegin=273398|WordAlignmentEnd=273398
3	j'	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	4	nsubj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No|WordAlignmentBegin=273398|WordAlignmentEnd=273518
4	avoue	avouer	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	Exponence[Person]=Absent|WordAlignmentBegin=273518|WordAlignmentEnd=273838
5	qu'	que	SCONJ	_	_	7	mark	_	SpaceAfter=No|WordAlignmentBegin=273838|WordAlignmentEnd=273868
6	on	on	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Ind	7	nsubj	_	Exponence[Gender]=Absent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|WordAlignmentBegin=273868|WordAlignmentEnd=273958
7	a	avoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	ccomp	_	WordAlignmentBegin=273958|WordAlignmentEnd=274068
8	du	du	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	9	det	_	WordAlignmentBegin=274068|WordAlignmentEnd=274168
9	mal	mal	NOUN	_	Gender=Masc|Number=Sing	7	obj:lvc	_	Exponence[Gender]=Inherent|WordAlignmentBegin=274168|WordAlignmentEnd=274448
10	quand	quand	SCONJ	_	_	12	mark	_	WordAlignmentBegin=274448|WordAlignmentEnd=274618
11	on	on	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Ind	12	nsubj	_	Exponence[Gender]=Absent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|WordAlignmentBegin=274618|WordAlignmentEnd=274728
12	voit	voir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	advcl	_	Exponence[Number]=Absent|Exponence[Person]=Absent|WordAlignmentBegin=274728|WordAlignmentEnd=274928
13	que	que	SCONJ	_	_	16	mark	_	WordAlignmentBegin=274928|WordAlignmentEnd=275038
14	Paul	Paul	PROPN	_	_	16	nsubj	_	WordAlignmentBegin=275038|WordAlignmentEnd=275302
15	Valéry	Valéry	PROPN	_	_	14	flat:name	_	WordAlignmentBegin=275302|WordAlignmentEnd=275858
16	passe	passer	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	12	ccomp	_	Exponence[Gender]=Absent|Exponence[Number]=Absent|PastPartHasSpokenGender=NotInThisDialect|Status[Tense]=Denom|WordAlignmentBegin=275858|WordAlignmentEnd=276158
17	en	en	ADP	_	_	18	case	_	WordAlignmentBegin=276158|WordAlignmentEnd=276218
18	Zep	Zep	PROPN	_	_	16	obl:arg	_	SpaceAfter=No|WordAlignmentBegin=276218|WordAlignmentEnd=277019
19	.	.	PUNCT	_	_	4	punct	_	WordAlignmentBegin=277019|WordAlignmentEnd=277019

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 4 dislocated:mod	color:blue
1	et	et	CCONJ	_	ExtPos=CCONJ	15	cc	_	Idiom=Yes|WordAlignmentBegin=108133|WordAlignmentEnd=108298
2	puis	puis	CCONJ	_	_	1	fixed	_	InIdiom=Yes|WordAlignmentBegin=108298|WordAlignmentEnd=108458
3	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	4	det	_	HasSpokenGender=OnlySingExceptWithLiaison|WordAlignmentBegin=108458|WordAlignmentEnd=108638
4	lycées	lycée	NOUN	_	Gender=Masc|Number=Plur	15	dislocated:mod	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|SpaceAfter=No|WordAlignmentBegin=108638|WordAlignmentEnd=109108
5	,	,	PUNCT	_	_	8	punct	_	WordAlignmentBegin=109108|WordAlignmentEnd=109108
6	si	si	SCONJ	_	_	8	mark	_	WordAlignmentBegin=109108|WordAlignmentEnd=109308
7	vous	vous	PRON	_	Case=Nom|Emph=No|Number=Plur|Person=2|PronType=Prs	8	nsubj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|Polite=Unknown|WordAlignmentBegin=109308|WordAlignmentEnd=109388
8	voulez	vouloir	VERB	_	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	4	discourse	_	SpaceAfter=No|WordAlignmentBegin=109388|WordAlignmentEnd=109938
9	,	,	PUNCT	_	_	4	punct	_	WordAlignmentBegin=109938|WordAlignmentEnd=109938
10	maintenant	maintenant	ADV	_	_	15	advmod	_	SpaceAfter=No|WordAlignmentBegin=109938|WordAlignmentEnd=110648
11	,	,	PUNCT	_	_	10	punct	_	WordAlignmentBegin=110648|WordAlignmentEnd=110648
12	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	13	det	_	HasSpokenGender=OnlySingExceptWithLiaison|WordAlignmentBegin=110648|WordAlignmentEnd=110848
13	livres	livre	NOUN	_	Gender=Masc|Number=Plur	15	nsubj	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|WordAlignmentBegin=110848|WordAlignmentEnd=111078
14	sont	être	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	15	cop	_	WordAlignmentBegin=111078|WordAlignmentEnd=111258
15	gratuits	gratuit	ADJ	_	Gender=Masc|Number=Plur	0	root	_	Exponence[Number]=Absent|HasSpokenGender=YesExceptSingWithLiaison|HasSpokenNumber=OnlyWithLiaison|SpaceAfter=No|WordAlignmentBegin=111258|WordAlignmentEnd=111739
16	.	.	PUNCT	_	_	15	punct	_	WordAlignmentBegin=111739|WordAlignmentEnd=111739

~~~


