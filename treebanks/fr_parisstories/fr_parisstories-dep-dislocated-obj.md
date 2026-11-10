---
layout: base
title:  'Statistics of dislocated:obj in UD_French-ParisStories'
udver: '2'
---

## Treebank Statistics: UD_French-ParisStories: Relations: `dislocated:obj`

This relation is a language-specific subtype of <tt><a href="fr_parisstories-dep-dislocated.html">dislocated</a></tt>.
There are also 3 other language-specific subtypes of `dislocated`: <tt><a href="fr_parisstories-dep-dislocated-mod.html">dislocated:mod</a></tt>, <tt><a href="fr_parisstories-dep-dislocated-obl.html">dislocated:obl</a></tt>, <tt><a href="fr_parisstories-dep-dislocated-subj.html">dislocated:subj</a></tt>.

32 nodes (0%) are attached to their parents as `dislocated:obj`.

22 instances of `dislocated:obj` (69%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.

The following 11 pairs of parts of speech are connected with `dislocated:obj`: <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt> (15; 47% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (7; 22% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (2; 6% instances), <tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="fr_parisstories-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="fr_parisstories-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="fr_parisstories-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-PROPN.html">PROPN</a></tt> (1; 3% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-X.html">X</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 dislocated:obj	color:blue
1	et	et	CCONJ	_	_	7	cc	_	WordAlignmentBegin=80715|WordAlignmentEnd=80880
2	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	3	det	_	WordAlignmentBegin=80880|WordAlignmentEnd=81045
3	pêche	pêche	NOUN	_	Gender=Fem|Number=Sing	7	dislocated:obj	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|SpaceAfter=No|WordAlignmentBegin=81045|WordAlignmentEnd=81210
4	,	,	PUNCT	_	_	3	punct	_	WordAlignmentBegin=81210|WordAlignmentEnd=81210
5	on	on	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Ind	7	nsubj	_	Exponence[Gender]=Absent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|WordAlignmentBegin=81210|WordAlignmentEnd=81337
6	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	aux:tense	_	WordAlignmentBegin=81337|WordAlignmentEnd=81464
7	essayé	essayer	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	Exponence[Gender]=Absent|Exponence[Number]=Absent|PastPartHasSpokenGender=NotInThisDialect|Status[Tense]=Denom|WordAlignmentBegin=81464|WordAlignmentEnd=81590
8	de	de	ADP	_	_	11	mark	_	WordAlignmentBegin=81590|WordAlignmentEnd=81717
9	lui	lui	PRON	_	Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Prs	11	iobj:agent	_	Exponence[Person]=Inherent|WordAlignmentBegin=81717|WordAlignmentEnd=81844
10	faire	faire	AUX	_	VerbForm=Inf	11	aux:caus	_	Subject=SubjRaising|WordAlignmentBegin=81844|WordAlignmentEnd=81971
11	manger	manger	VERB	_	VerbForm=Inf	7	xcomp	_	Subject=ObjRaising|WordAlignmentBegin=81971|WordAlignmentEnd=82097
12	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	13	det	_	WordAlignmentBegin=82097|WordAlignmentEnd=82224
13	pêche	pêche	NOUN	_	Gender=Fem|Number=Sing	11	obj	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|SpaceAfter=No|WordAlignmentBegin=82224|WordAlignmentEnd=82351
14	.	.	PUNCT	_	_	7	punct	_	WordAlignmentBegin=82351|WordAlignmentEnd=82351

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
10	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
11	début	début	NOUN	_	Gender=Masc|Number=Sing	7	obl:arg	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|SpaceAfter=No
12	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 12 dislocated:obj	color:blue
1	même	même	ADV	_	_	4	advmod	_	_
2	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	4	nsubj	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No
3	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
4	ce	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	0	root	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent
5	que	que	PRON	_	PronType=Rel	9	obj	_	_
6	tu	toi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=2|PronType=Prs	9	nsubj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent
7	m'	moi	PRON	_	Case=Dat|Emph=No|Number=Sing|Person=1|PronType=Prs	9	iobj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No
8	as	avoir	AUX	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	9	aux:tense	_	_
9	dit	dire	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	4	acl:relcl	_	Exponence[Number]=Absent|PastPartHasSpokenGender=Yes|Status[Tense]=Denom
10	qu'	que	SCONJ	_	_	12	mark	_	SpaceAfter=No
11	il	lui	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Prs	12	nsubj	_	Exponence[Person]=Inherent
12	avait	avoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	9	dislocated:obj	_	Exponence[Number]=Absent|Exponence[Person]=Absent
13	plein	plein	ADJ	_	Gender=Masc|Number=Sing	12	obj	_	Exponence[Number]=Absent|HasSpokenGender=YesExceptSingWithLiaison|HasSpokenNumber=OnlyWithLiaison
14	de	de	ADP	_	_	13	dep	_	Scrap=Yes|SpaceAfter=No
15	,	,	PUNCT	_	_	16	punct	_	_
16	bref	bref	INTJ	_	_	4	discourse	_	SpaceAfter=No
17	.	.	PUNCT	_	_	4	punct	_	_

~~~


