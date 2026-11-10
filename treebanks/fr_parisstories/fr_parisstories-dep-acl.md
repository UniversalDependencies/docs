---
layout: base
title:  'Statistics of acl in UD_French-ParisStories'
udver: '2'
---

## Treebank Statistics: UD_French-ParisStories: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="fr_parisstories-dep-acl-relcl.html">acl:relcl</a></tt>.

138 nodes (0%) are attached to their parents as `acl`.

136 instances of `acl` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.76086956521739.

The following 10 pairs of parts of speech are connected with `acl`: <tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (121; 88% instances), <tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt> (6; 4% instances), <tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_parisstories-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_parisstories-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="fr_parisstories-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 acl	color:blue
1	et	et	CCONJ	_	_	4	cc	_	_
2	là	là	ADV	_	_	4	advmod	_	_
3	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	4	nsubj	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent
4	va	aller	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	être	être	AUX	_	VerbForm=Inf	7	cop	_	Subject=SubjRaising
6	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	HasSpokenGender=OnlySingExceptWithLiaison
7	galère	galère	NOUN	_	Gender=Fem|Number=Sing	4	xcomp	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent
8	pour	pour	ADP	_	_	9	mark	_	_
9	mélanger	mélanger	VERB	_	VerbForm=Inf	7	acl	_	Subject=NoRaising
10	et	et	CCONJ	_	_	12	cc	_	_
11	tout	tout	ADJ	_	Gender=Masc|Number=Sing	12	amod	_	Exponence[Number]=Absent|HasSpokenGender=YesExceptSingWithLiaison|HasSpokenNumber=OnlyWithLiaison
12	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	9	conj	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No
13	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 15 acl	color:blue
1	moi	moi	PRON	_	Emph=Yes|Number=Sing|Person=1|PronType=Prs	4	dislocated:subj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No|WordAlignmentBegin=36331|WordAlignmentEnd=36594
2	,	,	PUNCT	_	_	1	punct	_	WordAlignmentBegin=36594|WordAlignmentEnd=36594
3	je	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	4	nsubj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|WordAlignmentBegin=36594|WordAlignmentEnd=36858
4	savais	savoir	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Imp|VerbForm=Fin	0	root	_	Exponence[Person]=Absent|SpaceAfter=No|WordAlignmentBegin=36858|WordAlignmentEnd=37121
5	,	,	PUNCT	_	_	4	punct	_	WordAlignmentBegin=37121|WordAlignmentEnd=37121
6	j'	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	7	nsubj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No|WordAlignmentBegin=37121|WordAlignmentEnd=37384
7	avais	avoir	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Imp|VerbForm=Fin	4	conj:reform	_	Exponence[Person]=Absent|WordAlignmentBegin=37384|WordAlignmentEnd=37648
8	de	de	ADP	_	ExtPos=DET	10	det	_	Idiom=Yes|WordAlignmentBegin=37648|WordAlignmentEnd=37911
9	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	8	fixed	_	HasSpokenGender=OnlySingExceptWithLiaison|InIdiom=Yes|WordAlignmentBegin=37911|WordAlignmentEnd=38174
10	conscience	conscience	NOUN	_	Gender=Fem|Number=Sing	7	obj	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|WordAlignmentBegin=38174|WordAlignmentEnd=38438
11	que	que	SCONJ	_	_	15	mark	_	WordAlignmentBegin=38438|WordAlignmentEnd=38701
12	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	15	nsubj	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No|WordAlignmentBegin=38701|WordAlignmentEnd=38964
13	était	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	15	cop	_	WordAlignmentBegin=38964|WordAlignmentEnd=39228
14	mon	son	DET	_	Gender=Masc|Number=Sing|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	15	det	_	HasSpokenGender=OnlySingExceptWithLiaison|WordAlignmentBegin=39228|WordAlignmentEnd=39491
15	père	père	NOUN	_	Gender=Masc|Number=Sing	10	acl	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|SpaceAfter=No|WordAlignmentBegin=39491|WordAlignmentEnd=39754
16	.	.	PUNCT	_	_	4	punct	_	WordAlignmentBegin=39754|WordAlignmentEnd=39754

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 11 acl	color:blue
1	et	et	CCONJ	_	_	5	cc	_	_
2	je	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	5	nsubj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent
3	me	moi	PRON	_	Emph=No|Number=Sing|Person=1|PronType=Prs	5	expl:comp	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent
4	suis	être	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	5	aux:pass	_	_
5	rendu	rendre	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	Exponence[Gender]=Absent|Exponence[Number]=Absent|PastPartHasSpokenGender=NotInThisDialect|Status[Tense]=Denom
6	compte	compte	NOUN	_	Gender=Masc|Number=Sing	5	obj:lvc	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent
7	que	que	SCONJ	_	_	11	mark	_	_
8	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	11	nsubj	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No
9	était	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	11	cop	_	_
10	assez	assez	ADV	_	_	11	advmod	_	_
11	difficile	difficile	ADJ	_	Gender=Masc|Number=Sing	6	acl	_	Exponence[Gender]=Absent|Exponence[Number]=Absent|HasSpokenGender=No|HasSpokenNumber=OnlyWithLiaison
12	pour	pour	ADP	_	_	14	case	_	_
13	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	14	det	_	HasSpokenGender=OnlySingExceptWithLiaison
14	maîtresses	maîtresse	NOUN	_	Gender=Fem|Number=Plur	11	obl:mod	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|SpaceAfter=No
15	,	,	PUNCT	_	_	22	punct	_	_
16	parce	parce	ADV	_	ExtPos=SCONJ	22	mark	_	Idiom=Yes
17	que	que	SCONJ	_	_	16	fixed	_	InIdiom=Yes
18	euh	euh	INTJ	_	_	22	discourse:filler	_	_
19	elles	lui	PRON	_	Case=Nom|Emph=No|Gender=Fem|Number=Plur|Person=3|PronType=Prs	22	nsubj	_	Exponence[Person]=Inherent
20	sont	être	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	22	aux:pass	_	_
21	confron~	confron~	X	_	ExtPos=VERB	22	reparandum	_	_
22	confrontées	confronter	VERB	_	Gender=Fem|Number=Plur|Tense=Past|VerbForm=Part	11	advcl	_	Exponence[Gender]=Absent|Exponence[Number]=Absent|PastPartHasSpokenGender=NotInThisDialect|Status[Tense]=Denom
23	à	à	ADP	_	_	25	case	_	_
24	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	25	det	_	_
25	élèves	élève	NOUN	_	Gender=Masc|Number=Plur	22	obl:mod	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|LiaisonPossibleBefore=Yes
26	avec	avec	ADP	_	_	28	case	_	_
27	leurs	son	DET	_	Number=Plur|Number[psor]=Plur|Person[psor]=3|Poss=Yes|PronType=Prs	28	det	_	HasSpokenGender=OnlySingExceptWithLiaison
28	difficultés	difficulté	NOUN	_	Gender=Fem|Number=Plur	25	nmod	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|SpaceAfter=No
29	.	.	PUNCT	_	_	5	punct	_	_

~~~


