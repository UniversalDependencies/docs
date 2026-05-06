---
layout: base
title:  'Statistics of dislocated:obj in UD_French-ParisStories'
udver: '2'
---

## Treebank Statistics: UD_French-ParisStories: Relations: `dislocated:obj`

This relation is a language-specific subtype of <tt><a href="fr_parisstories-dep-dislocated.html">dislocated</a></tt>.
There are also 3 other language-specific subtypes of `dislocated`: <tt><a href="fr_parisstories-dep-dislocated-mod.html">dislocated:mod</a></tt>, <tt><a href="fr_parisstories-dep-dislocated-obl.html">dislocated:obl</a></tt>, <tt><a href="fr_parisstories-dep-dislocated-subj.html">dislocated:subj</a></tt>.

34 nodes (0%) are attached to their parents as `dislocated:obj`.

22 instances of `dislocated:obj` (65%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.52941176470588.

The following 11 pairs of parts of speech are connected with `dislocated:obj`: <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt> (15; 44% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (7; 21% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (4; 12% instances), <tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="fr_parisstories-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="fr_parisstories-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="fr_parisstories-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-PROPN.html">PROPN</a></tt> (1; 3% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-X.html">X</a></tt> (1; 3% instances), <tt><a href="fr_parisstories-pos-X.html">X</a></tt>-<tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 dislocated:obj	color:blue
1	et	et	CCONJ	_	_	7	cc	_	AlignBegin=80715|AlignEnd=80880
2	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	3	det	_	AlignBegin=80880|AlignEnd=81045
3	pêche	pêche	NOUN	_	Gender=Fem|Number=Sing	7	dislocated:obj	_	AlignBegin=81045|AlignEnd=81210|Exponence[Gender]=Inherent|Exponence[Number]=Absent|SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	AlignBegin=81210|AlignEnd=81210
5	on	on	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Ind	7	nsubj	_	AlignBegin=81210|AlignEnd=81337|Exponence[Gender]=Absent|Exponence[Number]=Inherent|Exponence[Person]=Inherent
6	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	aux:tense	_	AlignBegin=81337|AlignEnd=81464
7	essayé	essayer	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	0	root	_	AlignBegin=81464|AlignEnd=81590|Exponence[Gender]=Absent|Exponence[Number]=Absent|PastPartHasSpokenGender=NotInThisDialect|Tense[denom]=Past
8	de	de	ADP	_	_	11	mark	_	AlignBegin=81590|AlignEnd=81717
9	lui	lui	PRON	_	Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Prs	11	iobj:agent	_	AlignBegin=81717|AlignEnd=81844|Exponence[Person]=Inherent
10	faire	faire	AUX	_	VerbForm=Inf	11	aux:caus	_	AlignBegin=81844|AlignEnd=81971|Subject=SubjRaising
11	manger	manger	VERB	_	VerbForm=Inf	7	xcomp	_	AlignBegin=81971|AlignEnd=82097|Subject=ObjRaising
12	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	13	det	_	AlignBegin=82097|AlignEnd=82224
13	pêche	pêche	NOUN	_	Gender=Fem|Number=Sing	11	obj	_	AlignBegin=82224|AlignEnd=82351|Exponence[Gender]=Inherent|Exponence[Number]=Absent|SpaceAfter=No
14	.	.	PUNCT	_	_	7	punct	_	AlignBegin=82351|AlignEnd=82351

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 dislocated:obj	color:blue
1	non	non	ADV	_	ExtPos=INTJ	7	discourse	_	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	_
3	mais	mais	CCONJ	_	_	7	cc	_	_
4	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	7	dislocated:obj	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No
5	,	,	PUNCT	_	_	4	punct	_	_
6	on	on	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Ind	7	nsubj	_	Exponence[Gender]=Absent|Exponence[Number]=Inherent|Exponence[Person]=Inherent
7	savait	savoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	Exponence[Number]=Absent|Exponence[Person]=Absent
8	pas	pas	ADV	_	Polarity=Neg	7	advmod	_	_
9	à	à	ADP	_	_	11	case	_	_
10	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	_	HasSpokenGender=OnlySingExceptWithLiaison
11	début	début	NOUN	_	Gender=Masc|Number=Sing	7	obl:arg	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|SpaceAfter=No
12	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 dislocated:obj	color:blue
1	tu	toi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=2|PronType=Prs	3	nsubj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent
2	te	toi	PRON	_	Case=Acc|Emph=No|Number=Sing|Person=2|PronType=Prs	3	obj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent
3	rappelles	rappeler	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	Exponence[Person]=Absent
4	pas	pas	ADV	_	Polarity=Neg	3	advmod	_	SpaceAfter=No
5	,	,	PUNCT	_	_	7	punct	_	_
6	il	lui	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Prs	7	nsubj	_	Exponence[Person]=Inherent
7	avait	avoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	3	dislocated:obj	_	Exponence[Number]=Absent|Exponence[Person]=Absent
8	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	peu	peu	NOUN	_	Gender=Masc|Number=Sing	7	obl:mod	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent
10	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	11	det	_	HasSpokenGender=OnlySingExceptWithLiaison
11	cheveux	cheveu	NOUN	_	Gender=Masc|Number=Plur	7	obj	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent
12	courts	court	ADJ	_	Gender=Masc|Number=Plur	11	amod	_	Exponence[Number]=Absent|HasSpokenGender=YesExceptSingWithLiaison|HasSpokenNumber=OnlyWithLiaison|SpaceAfter=No
13	.	.	PUNCT	_	_	3	punct	_	_

~~~


