---
layout: base
title:  'Statistics of parataxis:parenth in UD_French-ParisStories'
udver: '2'
---

## Treebank Statistics: UD_French-ParisStories: Relations: `parataxis:parenth`

This relation is a language-specific subtype of <tt><a href="fr_parisstories-dep-parataxis.html">parataxis</a></tt>.

30 nodes (0%) are attached to their parents as `parataxis:parenth`.

17 instances of `parataxis:parenth` (57%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.03333333333333.

The following 12 pairs of parts of speech are connected with `parataxis:parenth`: <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (10; 33% instances), <tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (8; 27% instances), <tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (2; 7% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt> (2; 7% instances), <tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_parisstories-pos-X.html">X</a></tt> (1; 3% instances), <tt><a href="fr_parisstories-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="fr_parisstories-pos-INTJ.html">INTJ</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="fr_parisstories-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="fr_parisstories-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt> (1; 3% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 parataxis:parenth	color:blue
1	mais	mais	CCONJ	_	_	4	cc	_	WordAlignmentBegin=88171|WordAlignmentEnd=88323
2	il	lui	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	expl:subj	_	Exponence[Person]=Inherent|WordAlignmentBegin=88323|WordAlignmentEnd=88474
3	y	y	PRON	_	Person=3|PronType=Prs	4	expl:comp	_	Exponence[Person]=Inherent|WordAlignmentBegin=88474|WordAlignmentEnd=88625
4	a	avoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No|WordAlignmentBegin=88625|WordAlignmentEnd=88776
5	,	,	PUNCT	_	_	6	punct	_	WordAlignmentBegin=88776|WordAlignmentEnd=88776
6	euh	euh	INTJ	_	_	4	discourse:filler	_	SpaceAfter=No|WordAlignmentBegin=88776|WordAlignmentEnd=88927
7	,	,	PUNCT	_	_	9	punct	_	WordAlignmentBegin=88927|WordAlignmentEnd=88927
8	tu	toi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=2|PronType=Prs	9	nsubj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|WordAlignmentBegin=88927|WordAlignmentEnd=89068
9	sais	savoir	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	4	parataxis:parenth	_	Exponence[Person]=Absent|WordAlignmentBegin=89068|WordAlignmentEnd=89210
10	ce	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	9	obj	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|WordAlignmentBegin=89210|WordAlignmentEnd=89351
11	que	que	PRON	_	PronType=Rel	10	acl:relcl	_	WordAlignmentBegin=89351|WordAlignmentEnd=89492
12	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	11	nsubj	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No|WordAlignmentBegin=89492|WordAlignmentEnd=89634
13	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	cop	_	SpaceAfter=No|WordAlignmentBegin=89634|WordAlignmentEnd=89775
14	,	,	PUNCT	_	_	16	punct	_	WordAlignmentBegin=89775|WordAlignmentEnd=89775
15	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	16	det	_	WordAlignmentBegin=89775|WordAlignmentEnd=89916
16	génération	génération	NOUN	_	Gender=Fem|Number=Sing	4	obj	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|SpaceAfter=No|WordAlignmentBegin=89916|WordAlignmentEnd=90058
17	.	.	PUNCT	_	_	4	punct	_	WordAlignmentBegin=90058|WordAlignmentEnd=90058

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 parataxis:parenth	color:blue
1	donc	donc	ADV	_	_	15	advmod	_	_
2	mon	son	DET	_	Gender=Masc|Number=Sing|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	3	det	_	HasSpokenGender=OnlySingExceptWithLiaison
3	frère	frère	NOUN	_	Gender=Masc|Number=Sing	15	nsubj	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	_
5	il	lui	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Prs	7	expl:subj	_	Exponence[Person]=Inherent
6	y	y	PRON	_	Person=3|PronType=Prs	7	expl:comp	_	Exponence[Person]=Inherent
7	a	avoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	parataxis:parenth	_	_
8	un	un	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Ind	7	obj	_	Exponence[Person]=Inherent
9	de	de	ADP	_	_	11	case	_	_
10	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	11	det	_	_
11	deux	deux	NUM	_	ExtPos=PRON	8	nmod	_	_
12	,	,	PUNCT	_	_	7	punct	_	_
13	était	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	15	aux:tense	_	_
14	déjà	déjà	ADV	_	_	15	advmod	_	_
15	braqué	braquer	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	Exponence[Gender]=Absent|Exponence[Number]=Absent|PastPartHasSpokenGender=NotInThisDialect|SpaceAfter=No|Status[Tense]=Denom
16	.	.	PUNCT	_	_	15	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 17 parataxis:parenth	color:blue
1	donc	donc	ADV	_	_	4	advmod	_	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	_
3	on	on	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Ind	4	nsubj	_	Exponence[Gender]=Absent|Exponence[Number]=Inherent|Exponence[Person]=Inherent
4	était	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	12	reparandum	_	_
5	tellement	tellement	ADV	_	_	4	advmod	_	SpaceAfter=No
6	,	,	PUNCT	_	_	4	punct	_	_
7	euh	euh	INTJ	_	_	12	discourse:filler	_	SpaceAfter=No
8	,	,	PUNCT	_	_	7	punct	_	_
9	on	on	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Ind	12	nsubj	_	Exponence[Gender]=Absent|Exponence[Number]=Inherent|Exponence[Person]=Inherent
10	s'	soi	PRON	_	Person=3|PronType=Prs|Reflex=Yes	12	iobj	_	Exponence[Person]=Inherent|SpaceAfter=No
11	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	aux:tense	_	_
12	dit	dire	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	Exponence[Number]=Absent|PastPartHasSpokenGender=Yes|SpaceAfter=No|Status[Tense]=Denom
13	,	,	PUNCT	_	_	20	punct	_	_
14	mais	mais	CCONJ	_	_	20	cc	_	_
15	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	17	nsubj	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent
16	se	soi	PRON	_	Person=3|PronType=Prs|Reflex=Yes	17	expl:pass	_	Exponence[Person]=Inherent
17	trouve	trouver	VERB	_	ExtPos=VERB|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	20	parataxis:parenth	_	Exponence[Number]=Absent|Exponence[Person]=Absent
18	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	20	nsubj	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No
19	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	20	cop	_	_
20	vrai	vrai	ADJ	_	Gender=Masc|Number=Sing	12	ccomp	_	Exponence[Gender]=Absent|Exponence[Number]=Absent|HasSpokenGender=NotInThisDialect|HasSpokenNumber=OnlyWithLiaison|Reported=Yes|SpaceAfter=No
21	,	,	PUNCT	_	_	22	punct	_	_
22	quoi	quoi	INTJ	_	_	20	discourse	_	SpaceAfter=No
23	.	.	PUNCT	_	_	12	punct	_	_

~~~


