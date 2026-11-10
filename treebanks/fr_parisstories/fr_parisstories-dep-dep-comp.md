---
layout: base
title:  'Statistics of dep:comp in UD_French-ParisStories'
udver: '2'
---

## Treebank Statistics: UD_French-ParisStories: Relations: `dep:comp`

This relation is a language-specific subtype of <tt><a href="fr_parisstories-dep-dep.html">dep</a></tt>.

27 nodes (0%) are attached to their parents as `dep:comp`.

21 instances of `dep:comp` (78%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.07407407407407.

The following 12 pairs of parts of speech are connected with `dep:comp`: <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-SCONJ.html">SCONJ</a></tt> (7; 26% instances), <tt><a href="fr_parisstories-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (4; 15% instances), <tt><a href="fr_parisstories-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="fr_parisstories-pos-ADP.html">ADP</a></tt> (3; 11% instances), <tt><a href="fr_parisstories-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_parisstories-pos-ADP.html">ADP</a></tt> (2; 7% instances), <tt><a href="fr_parisstories-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (2; 7% instances), <tt><a href="fr_parisstories-pos-DET.html">DET</a></tt>-<tt><a href="fr_parisstories-pos-ADP.html">ADP</a></tt> (2; 7% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (2; 7% instances), <tt><a href="fr_parisstories-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_parisstories-pos-DET.html">DET</a></tt> (1; 4% instances), <tt><a href="fr_parisstories-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_parisstories-pos-DET.html">DET</a></tt> (1; 4% instances), <tt><a href="fr_parisstories-pos-DET.html">DET</a></tt>-<tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt> (1; 4% instances), <tt><a href="fr_parisstories-pos-DET.html">DET</a></tt>-<tt><a href="fr_parisstories-pos-SCONJ.html">SCONJ</a></tt> (1; 4% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-DET.html">DET</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 dep:comp	color:blue
1	euh	euh	INTJ	_	_	2	discourse:filler	_	_
2	qu'	que	PRON	_	PronType=Int	0	root	_	SpaceAfter=No
3	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	cop	_	SpaceAfter=No
4	-ce	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	2	expl:subj	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent
5	qu'	que	SCONJ	_	_	8	dep:comp	_	SpaceAfter=No
6	on	on	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Ind	8	nsubj	_	Exponence[Gender]=Absent|Exponence[Number]=Inherent|Exponence[Person]=Inherent
7	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	aux:tense	_	Filler=obj
8	fait	faire	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	2	advcl:cleft	_	Exponence[Number]=Absent|PastPartHasSpokenGender=Yes|Status[Tense]=Denom
9	bah	bah	INTJ	_	_	2	discourse	_	SpaceAfter=No
10	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 dep:comp	color:blue
1	et	et	CCONJ	_	_	8	cc	_	WordAlignmentBegin=92634|WordAlignmentEnd=92816
2	on	on	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Ind	4	nsubj	_	Exponence[Gender]=Absent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|WordAlignmentBegin=92816|WordAlignmentEnd=92999
3	s'	soi	PRON	_	Person=3|PronType=Prs|Reflex=Yes	4	dep:comp	_	Exponence[Person]=Inherent|Scrap=Yes|SpaceAfter=No|WordAlignmentBegin=92999|WordAlignmentEnd=93181
4	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	reparandum	_	SpaceAfter=No|WordAlignmentBegin=93181|WordAlignmentEnd=93363
5	,	,	PUNCT	_	_	4	punct	_	WordAlignmentBegin=93363|WordAlignmentEnd=93363
6	on	on	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Ind	8	nsubj	_	Exponence[Gender]=Absent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|WordAlignmentBegin=93705|WordAlignmentEnd=93971
7	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	aux:tense	_	WordAlignmentBegin=93971|WordAlignmentEnd=94237
8	raconté	raconter	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	Exponence[Gender]=Absent|Exponence[Number]=Absent|PastPartHasSpokenGender=NotInThisDialect|Status[Tense]=Denom|WordAlignmentBegin=94237|WordAlignmentEnd=94504
9	nos	son	DET	_	Number=Plur|Number[psor]=Plur|Person[psor]=1|Poss=Yes|PronType=Prs	10	det	_	HasSpokenGender=OnlySingExceptWithLiaison|WordAlignmentBegin=94504|WordAlignmentEnd=94770
10	vies	vie	NOUN	_	Gender=Fem|Number=Plur	8	obj	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|SpaceAfter=No|WordAlignmentBegin=94770|WordAlignmentEnd=95036
11	,	,	PUNCT	_	_	12	punct	_	WordAlignmentBegin=95036|WordAlignmentEnd=95036
12	normal	normal	ADJ	_	ExtPos=INTJ|Gender=Masc|Number=Sing	8	discourse	_	Exponence[Gender]=Absent|HasSpokenGender=OnlyPlur|HasSpokenNumber=AlwaysMasc|SpaceAfter=No|WordAlignmentBegin=95036|WordAlignmentEnd=95302
13	.	.	PUNCT	_	_	8	punct	_	WordAlignmentBegin=95302|WordAlignmentEnd=95302

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 dep:comp	color:blue
1	moi	moi	PRON	_	Emph=Yes|Number=Sing|Person=1|PronType=Prs	14	dislocated:mod	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No|WordAlignmentBegin=106294|WordAlignmentEnd=106431
2	,	,	PUNCT	_	_	1	punct	_	WordAlignmentBegin=106431|WordAlignmentEnd=106431
3	dès	dès	ADP	_	_	4	dep:comp	_	WordAlignmentBegin=106431|WordAlignmentEnd=106569
4	que	que	SCONJ	_	_	10	reparandum	_	SpaceAfter=No|WordAlignmentBegin=106569|WordAlignmentEnd=106706
5	,	,	PUNCT	_	_	4	punct	_	WordAlignmentBegin=106706|WordAlignmentEnd=106706
6	dès	dès	ADP	_	_	10	mark	_	WordAlignmentBegin=106706|WordAlignmentEnd=106843
7	qu'	que	SCONJ	_	_	10	mark	_	SpaceAfter=No|WordAlignmentBegin=106843|WordAlignmentEnd=106980
8	on	on	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Ind	10	nsubj	_	Exponence[Gender]=Absent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|WordAlignmentBegin=106980|WordAlignmentEnd=107118
9	se	soi	PRON	_	Person=3|PronType=Prs|Reflex=Yes	10	obj	_	Exponence[Person]=Inherent|WordAlignmentBegin=107118|WordAlignmentEnd=107255
10	voit	voir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	advcl	_	Exponence[Number]=Absent|Exponence[Person]=Absent|SpaceAfter=No|WordAlignmentBegin=107255|WordAlignmentEnd=107392
11	,	,	PUNCT	_	_	10	punct	_	WordAlignmentBegin=107392|WordAlignmentEnd=107392
12	il	lui	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Prs	14	expl:subj	_	Exponence[Person]=Inherent|WordAlignmentBegin=107392|WordAlignmentEnd=107536
13	y	y	PRON	_	Person=3|PronType=Prs	14	expl:comp	_	Exponence[Person]=Inherent|WordAlignmentBegin=107536|WordAlignmentEnd=107680
14	a	avoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	WordAlignmentBegin=107680|WordAlignmentEnd=107824
15	mes	son	DET	_	Number=Plur|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	16	det	_	HasSpokenGender=OnlySingExceptWithLiaison|WordAlignmentBegin=107824|WordAlignmentEnd=107968
16	potes	pote	NOUN	_	Number=Plur	14	obj	_	Exponence[Number]=Absent|SpaceAfter=No|WordAlignmentBegin=107968|WordAlignmentEnd=108111
17	.	.	PUNCT	_	_	14	punct	_	WordAlignmentBegin=108111|WordAlignmentEnd=108111

~~~


