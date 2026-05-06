---
layout: base
title:  'Statistics of dep:comp in UD_French-ParisStories'
udver: '2'
---

## Treebank Statistics: UD_French-ParisStories: Relations: `dep:comp`

This relation is a language-specific subtype of <tt><a href="fr_parisstories-dep-dep.html">dep</a></tt>.

26 nodes (0%) are attached to their parents as `dep:comp`.

18 instances of `dep:comp` (69%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.61538461538462.

The following 13 pairs of parts of speech are connected with `dep:comp`: <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-SCONJ.html">SCONJ</a></tt> (7; 27% instances), <tt><a href="fr_parisstories-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (3; 12% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (3; 12% instances), <tt><a href="fr_parisstories-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_parisstories-pos-ADP.html">ADP</a></tt> (2; 8% instances), <tt><a href="fr_parisstories-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (2; 8% instances), <tt><a href="fr_parisstories-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="fr_parisstories-pos-ADP.html">ADP</a></tt> (2; 8% instances), <tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_parisstories-pos-SCONJ.html">SCONJ</a></tt> (1; 4% instances), <tt><a href="fr_parisstories-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_parisstories-pos-ADV.html">ADV</a></tt> (1; 4% instances), <tt><a href="fr_parisstories-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_parisstories-pos-ADP.html">ADP</a></tt> (1; 4% instances), <tt><a href="fr_parisstories-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_parisstories-pos-DET.html">DET</a></tt> (1; 4% instances), <tt><a href="fr_parisstories-pos-DET.html">DET</a></tt>-<tt><a href="fr_parisstories-pos-SCONJ.html">SCONJ</a></tt> (1; 4% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-DET.html">DET</a></tt> (1; 4% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 dep:comp	color:blue
1	euh	euh	INTJ	_	_	2	discourse	_	_
2	qu'	que	PRON	_	PronType=Int	0	root	_	SpaceAfter=No
3	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	cop	_	SpaceAfter=No
4	-ce	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	2	expl:subj	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent
5	qu'	que	SCONJ	_	_	8	dep:comp	_	SpaceAfter=No
6	on	on	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Ind	8	nsubj	_	Exponence[Gender]=Absent|Exponence[Number]=Inherent|Exponence[Person]=Inherent
7	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	aux:tense	_	Filler=obj
8	fait	faire	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	2	advcl:cleft	_	Exponence[Number]=Absent|PastPartHasSpokenGender=Yes|Tense[denom]=Past
9	bah	bah	INTJ	_	_	2	discourse	_	SpaceAfter=No
10	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 dep:comp	color:blue
1	et	et	CCONJ	_	_	4	cc	_	AlignBegin=92634|AlignEnd=92816
2	on	on	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Ind	4	nsubj	_	AlignBegin=92816|AlignEnd=92999|Exponence[Gender]=Absent|Exponence[Number]=Inherent|Exponence[Person]=Inherent
3	s'	soi	PRON	_	Person=3|PronType=Prs|Reflex=Yes	4	dep:comp	_	AlignBegin=92999|AlignEnd=93181|Exponence[Person]=Inherent|Scrap=Yes|SpaceAfter=No
4	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	reparandum	_	AlignBegin=93181|AlignEnd=93363|SpaceAfter=No
5	,	,	PUNCT	_	_	4	punct	_	AlignBegin=93363|AlignEnd=93363
6	on	on	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Ind	8	nsubj	_	AlignBegin=93705|AlignEnd=93971|Exponence[Gender]=Absent|Exponence[Number]=Inherent|Exponence[Person]=Inherent
7	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	aux:tense	_	AlignBegin=93971|AlignEnd=94237
8	raconté	raconter	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	0	root	_	AlignBegin=94237|AlignEnd=94504|Exponence[Gender]=Absent|Exponence[Number]=Absent|PastPartHasSpokenGender=NotInThisDialect|Tense[denom]=Past
9	nos	son	DET	_	Number=Plur|Number[psor]=Plur|Person[psor]=1|Poss=Yes|PronType=Prs	10	det	_	AlignBegin=94504|AlignEnd=94770|HasSpokenGender=OnlySingExceptWithLiaison
10	vies	vie	NOUN	_	Gender=Fem|Number=Plur	8	obj	_	AlignBegin=94770|AlignEnd=95036|Exponence[Gender]=Inherent|Exponence[Number]=Absent|SpaceAfter=No
11	,	,	PUNCT	_	_	12	punct	_	AlignBegin=95036|AlignEnd=95036
12	normal	normal	ADJ	_	ExtPos=INTJ|Gender=Masc|Number=Sing	8	discourse	_	AlignBegin=95036|AlignEnd=95302|Exponence[Gender]=Absent|HasSpokenGender=OnlyPlur|HasSpokenNumber=AlwaysMasc|SpaceAfter=No
13	.	.	PUNCT	_	_	8	punct	_	AlignBegin=95302|AlignEnd=95302

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 dep:comp	color:blue
1	mais	mais	CCONJ	_	_	6	cc	_	_
2	à	à	ADP	_	_	3	case	_	_
3	Florence	Florence	PROPN	_	_	6	obl:mod	_	_
4	on	on	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Ind	6	nsubj	_	Exponence[Gender]=Absent|Exponence[Number]=Inherent|Exponence[Person]=Inherent
5	s'	soi	PRON	_	Person=3|PronType=Prs|Reflex=Yes	6	dep:comp	_	Exponence[Person]=Inherent|Scrap=Yes|SpaceAfter=No
6	était	être	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	14	reparandum	_	Exponence[Number]=Absent|Exponence[Person]=Absent|SpaceAfter=No
7	,	,	PUNCT	_	_	6	punct	_	_
8	euh	euh	INTJ	_	_	14	discourse	_	SpaceAfter=No
9	,	,	PUNCT	_	_	8	punct	_	_
10	on	on	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Ind	14	nsubj	_	Exponence[Gender]=Absent|Exponence[Number]=Inherent|Exponence[Person]=Inherent
11	était	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	14	cop	_	_
12	dans	dans	ADP	_	_	14	case	_	_
13	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	14	det	_	HasSpokenGender=OnlySingExceptWithLiaison
14	centre-ville	centre-ville	NOUN	_	Gender=Masc|Number=Sing	0	root	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|SpaceAfter=No
15	,	,	PUNCT	_	_	17	punct	_	_
16	on	on	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Ind	17	nsubj	_	Exponence[Gender]=Absent|Exponence[Number]=Inherent|Exponence[Person]=Inherent
17	marchait	marcher	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	14	conj	_	Exponence[Number]=Absent|Exponence[Person]=Absent|SpaceAfter=No
18	.	.	PUNCT	_	_	14	punct	_	_

~~~


