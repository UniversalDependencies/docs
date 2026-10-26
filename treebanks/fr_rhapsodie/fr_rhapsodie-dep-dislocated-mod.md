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
Average distance between parent and child is 9.

The following 6 pairs of parts of speech are connected with `dislocated:mod`: <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt> (11; 61% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (3; 17% instances), <tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt> (1; 6% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (1; 6% instances), <tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (1; 6% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-PROPN.html">PROPN</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 dislocated:mod	color:blue
1	vraiment	vraiment	ADV	_	_	7	advmod	_	AlignBegin=239381|AlignEnd=239576|SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	AlignBegin=239576|AlignEnd=239576
3	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	_	AlignBegin=239576|AlignEnd=239656|HasSpokenGender=OnlySingExceptWithLiaison
4	psychiatrie	psychiatrie	NOUN	_	Gender=Fem|Number=Sing	7	dislocated:mod	_	AlignBegin=239656|AlignEnd=239997|Exponence[Gender]=Inherent|Exponence[Number]=Absent|SpaceAfter=No
5	,	,	PUNCT	_	_	4	punct	_	AlignBegin=239997|AlignEnd=239997
6	il	lui	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Prs	7	expl:subj	_	AlignBegin=239997|AlignEnd=240043|Exponence[Person]=Inherent
7	faut	falloir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	reparandum	_	AlignBegin=240043|AlignEnd=240161|Exponence[Person]=Absent
8	ê~	ê~	X	_	ExtPos=VERB	7	ccomp	_	AlignBegin=240161|AlignEnd=240253|Scrap=Yes|SpaceAfter=No
9	,	,	PUNCT	_	_	7	punct	_	AlignBegin=240253|AlignEnd=240253
10	il	lui	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Prs	11	expl:subj	_	AlignBegin=240253|AlignEnd=240367|Exponence[Person]=Inherent
11	faut	falloir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	AlignBegin=240367|AlignEnd=240551|Exponence[Person]=Absent
12	être	être	AUX	_	VerbForm=Inf	11	ccomp	_	AlignBegin=240551|AlignEnd=241190|Scrap=Yes|SpaceAfter=No|Subject=NoRaising
13	…	…	PUNCT	_	_	11	punct	_	AlignBegin=241190|AlignEnd=241190

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 dislocated:mod	color:blue
1	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	4	dislocated:mod	_	AlignBegin=273148|AlignEnd=273398|Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	AlignBegin=273398|AlignEnd=273398
3	j'	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	4	nsubj	_	AlignBegin=273398|AlignEnd=273518|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No
4	avoue	avouer	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	AlignBegin=273518|AlignEnd=273838|Exponence[Person]=Absent
5	qu'	que	SCONJ	_	_	7	mark	_	AlignBegin=273838|AlignEnd=273868|SpaceAfter=No
6	on	on	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Ind	7	nsubj	_	AlignBegin=273868|AlignEnd=273958|Exponence[Gender]=Absent|Exponence[Number]=Inherent|Exponence[Person]=Inherent
7	a	avoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	ccomp	_	AlignBegin=273958|AlignEnd=274068
8	du	du	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	9	det	_	AlignBegin=274068|AlignEnd=274168
9	mal	mal	NOUN	_	Gender=Masc|Number=Sing	7	obj:lvc	_	AlignBegin=274168|AlignEnd=274448|Exponence[Gender]=Inherent
10	quand	quand	SCONJ	_	_	12	mark	_	AlignBegin=274448|AlignEnd=274618
11	on	on	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Ind	12	nsubj	_	AlignBegin=274618|AlignEnd=274728|Exponence[Gender]=Absent|Exponence[Number]=Inherent|Exponence[Person]=Inherent
12	voit	voir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	advcl	_	AlignBegin=274728|AlignEnd=274928|Exponence[Number]=Absent|Exponence[Person]=Absent
13	que	que	SCONJ	_	_	16	mark	_	AlignBegin=274928|AlignEnd=275038
14	Paul	Paul	PROPN	_	_	16	nsubj	_	AlignBegin=275038|AlignEnd=275302
15	Valéry	Valéry	PROPN	_	_	14	flat:name	_	AlignBegin=275302|AlignEnd=275858
16	passe	passer	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part	12	ccomp	_	AlignBegin=275858|AlignEnd=276158|Exponence[Gender]=Absent|Exponence[Number]=Absent|PastPartHasSpokenGender=NotInThisDialect|Tense[denom]=Past
17	en	en	ADP	_	_	18	case	_	AlignBegin=276158|AlignEnd=276218
18	Zep	Zep	PROPN	_	_	16	obl:arg	_	AlignBegin=276218|AlignEnd=277019|SpaceAfter=No
19	.	.	PUNCT	_	_	4	punct	_	AlignBegin=277019|AlignEnd=277019

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 4 dislocated:mod	color:blue
1	et	et	CCONJ	_	ExtPos=CCONJ	15	cc	_	AlignBegin=108133|AlignEnd=108298|Idiom=Yes
2	puis	puis	CCONJ	_	_	1	fixed	_	AlignBegin=108298|AlignEnd=108458|InIdiom=Yes
3	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	4	det	_	AlignBegin=108458|AlignEnd=108638|HasSpokenGender=OnlySingExceptWithLiaison
4	lycées	lycée	NOUN	_	Gender=Masc|Number=Plur	15	dislocated:mod	_	AlignBegin=108638|AlignEnd=109108|Exponence[Gender]=Inherent|Exponence[Number]=Absent|SpaceAfter=No
5	,	,	PUNCT	_	_	8	punct	_	AlignBegin=109108|AlignEnd=109108
6	si	si	SCONJ	_	_	8	mark	_	AlignBegin=109108|AlignEnd=109308
7	vous	vous	PRON	_	Case=Nom|Emph=No|Number=Plur|Person=2|PronType=Prs	8	nsubj	_	AlignBegin=109308|AlignEnd=109388|Exponence[Number]=Inherent|Exponence[Person]=Inherent|Polite=Unknown
8	voulez	vouloir	VERB	_	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	4	discourse	_	AlignBegin=109388|AlignEnd=109938|SpaceAfter=No
9	,	,	PUNCT	_	_	4	punct	_	AlignBegin=109938|AlignEnd=109938
10	maintenant	maintenant	ADV	_	_	15	advmod	_	AlignBegin=109938|AlignEnd=110648|SpaceAfter=No
11	,	,	PUNCT	_	_	10	punct	_	AlignBegin=110648|AlignEnd=110648
12	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	13	det	_	AlignBegin=110648|AlignEnd=110848|HasSpokenGender=OnlySingExceptWithLiaison
13	livres	livre	NOUN	_	Gender=Masc|Number=Plur	15	nsubj	_	AlignBegin=110848|AlignEnd=111078|Exponence[Gender]=Inherent|Exponence[Number]=Absent
14	sont	être	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	15	cop	_	AlignBegin=111078|AlignEnd=111258
15	gratuits	gratuit	ADJ	_	Gender=Masc|Number=Plur	0	root	_	AlignBegin=111258|AlignEnd=111739|Exponence[Number]=Absent|HasSpokenGender=YesExceptSingWithLiaison|HasSpokenNumber=OnlyWithLiaison|SpaceAfter=No
16	.	.	PUNCT	_	_	15	punct	_	AlignBegin=111739|AlignEnd=111739

~~~


