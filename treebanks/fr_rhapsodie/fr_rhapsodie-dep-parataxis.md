---
layout: base
title:  'Statistics of parataxis in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `parataxis`

This relation is universal.
There are 2 language-specific subtypes of `parataxis`: <tt><a href="fr_rhapsodie-dep-parataxis-insert.html">parataxis:insert</a></tt>, <tt><a href="fr_rhapsodie-dep-parataxis-parenth.html">parataxis:parenth</a></tt>.

8 nodes (0%) are attached to their parents as `parataxis`.

8 instances of `parataxis` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.125.

The following 8 pairs of parts of speech are connected with `parataxis`: <tt><a href="fr_rhapsodie-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt> (1; 13% instances), <tt><a href="fr_rhapsodie-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (1; 13% instances), <tt><a href="fr_rhapsodie-pos-INTJ.html">INTJ</a></tt>-<tt><a href="fr_rhapsodie-pos-SCONJ.html">SCONJ</a></tt> (1; 13% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-INTJ.html">INTJ</a></tt> (1; 13% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt> (1; 13% instances), <tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (1; 13% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-AUX.html">AUX</a></tt> (1; 13% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt> (1; 13% instances).


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 15 parataxis	color:blue
1	non	non	ADV	_	Polarity=Neg	5	discourse	_	SpaceAfter=No|WordAlignmentBegin=223743|WordAlignmentEnd=223908
2	,	,	PUNCT	_	_	1	punct	_	WordAlignmentBegin=223908|WordAlignmentEnd=223908
3	mais	mais	CCONJ	_	_	5	cc	_	WordAlignmentBegin=223908|WordAlignmentEnd=224048
4	même	même	ADV	_	_	5	advmod	_	WordAlignmentBegin=224048|WordAlignmentEnd=224238
5	pas	pas	ADV	_	Polarity=Neg	0	root	_	WordAlignmentBegin=224238|WordAlignmentEnd=224388
6	dans	dans	ADP	_	_	8	case	_	WordAlignmentBegin=224388|WordAlignmentEnd=224528
7	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	HasSpokenGender=OnlySingExceptWithLiaison|WordAlignmentBegin=224528|WordAlignmentEnd=224601
8	fond	fond	NOUN	_	Gender=Masc|Number=Sing	15	obl:mod	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|SpaceAfter=No|WordAlignmentBegin=224601|WordAlignmentEnd=224868
9	,	,	PUNCT	_	_	8	punct	_	WordAlignmentBegin=224868|WordAlignmentEnd=224868
10	je	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	15	nsubj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|WordAlignmentBegin=224868|WordAlignmentEnd=224938
11	suis	être	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	15	cop	_	WordAlignmentBegin=224938|WordAlignmentEnd=225028
12	très	très	ADV	_	_	15	advmod	_	SpaceAfter=No|WordAlignmentBegin=225028|WordAlignmentEnd=225178
13	,	,	PUNCT	_	_	14	punct	_	WordAlignmentBegin=225178|WordAlignmentEnd=225178
14	très	très	ADV	_	_	12	conj	_	WordAlignmentBegin=225178|WordAlignmentEnd=225318
15	pudique	pudique	ADJ	_	Gender=Masc|Number=Sing	5	parataxis	_	Exponence[Gender]=Absent|Exponence[Number]=Absent|HasSpokenGender=No|HasSpokenNumber=OnlyWithLiaison|SpaceAfter=No|WordAlignmentBegin=225318|WordAlignmentEnd=225785
16	.	.	PUNCT	_	_	15	punct	_	WordAlignmentBegin=225785|WordAlignmentEnd=225785

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 21 parataxis	color:blue
1	mais	mais	CCONJ	_	_	13	cc	_	WordAlignmentBegin=66097|WordAlignmentEnd=66252
2	si	si	SCONJ	_	_	5	mark	_	WordAlignmentBegin=66252|WordAlignmentEnd=66411
3	je	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	10	reparandum	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|WordAlignmentBegin=66411|WordAlignmentEnd=66442
4	la	lui	PRON	_	Case=Acc|Emph=No|Gender=Fem|Number=Sing|Person=3|PronType=Prs	5	obj	_	Exponence[Person]=Inherent|WordAlignmentBegin=66442|WordAlignmentEnd=66582
5	passe	passer	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	13	advcl	_	Exponence[Person]=Absent|WordAlignmentBegin=66582|WordAlignmentEnd=66802
6	pas	pas	ADV	_	Polarity=Neg	5	advmod	_	SpaceAfter=No|WordAlignmentBegin=66802|WordAlignmentEnd=67082
7	,	,	PUNCT	_	_	8	punct	_	WordAlignmentBegin=66992|WordAlignmentEnd=67082
8	enfin	enfin	ADV	_	_	6	discourse	_	SpaceAfter=No|WordAlignmentBegin=67082|WordAlignmentEnd=67269
9	,	,	PUNCT	_	_	5	punct	_	WordAlignmentBegin=67269|WordAlignmentEnd=67269
10	je	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	5	nsubj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No|WordAlignmentBegin=67269|WordAlignmentEnd=67535
11	,	,	PUNCT	_	_	5	punct	_	WordAlignmentBegin=67535|WordAlignmentEnd=67745
12	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	13	nsubj	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No|WordAlignmentBegin=67745|WordAlignmentEnd=67840
13	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Scrap=Yes|SpaceAfter=No|WordAlignmentBegin=67840|WordAlignmentEnd=67990
14	,	,	PUNCT	_	_	13	punct	_	WordAlignmentBegin=67990|WordAlignmentEnd=67990
15	j'	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	16	nsubj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No|WordAlignmentBegin=67990|WordAlignmentEnd=68080
16	ai	avoir	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	21	reparandum	_	WordAlignmentBegin=68080|WordAlignmentEnd=68170
17	beau~	beau~	X	_	ExtPos=ADV	16	advmod	_	SpaceAfter=No|WordAlignmentBegin=68170|WordAlignmentEnd=68307
18	,	,	PUNCT	_	_	16	punct	_	WordAlignmentBegin=68307|WordAlignmentEnd=68307
19	j'	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	21	nsubj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No|WordAlignmentBegin=68307|WordAlignmentEnd=68342
20	ai	avoir	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	21	aux:tense	_	WordAlignmentBegin=68342|WordAlignmentEnd=68425
21	appris	apprendre	VERB	_	Gender=Masc|Tense=Past|VerbForm=Part|Voice=Act	13	parataxis	_	PastPartHasSpokenGender=Yes|Status[Tense]=Denom|WordAlignmentBegin=68425|WordAlignmentEnd=68650
22	beaucoup	beaucoup	ADV	_	_	21	obj	_	WordAlignmentBegin=68650|WordAlignmentEnd=68870
23	de	de	ADP	_	_	24	case	_	WordAlignmentBegin=68870|WordAlignmentEnd=68900
24	choses	chose	NOUN	_	Gender=Fem|Number=Plur	22	obl:arg	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|SpaceAfter=No|WordAlignmentBegin=68900|WordAlignmentEnd=69220
25	.	.	PUNCT	_	_	21	punct	_	WordAlignmentBegin=69220|WordAlignmentEnd=69220

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 parataxis	color:blue
1	oui	oui	INTJ	_	_	0	root	_	Coconstruct=parataxis:answer::Rhap_D0006-54::4|SpaceAfter=No|WordAlignmentBegin=136383|WordAlignmentEnd=136708
2	,	,	PUNCT	_	_	3	punct	_	WordAlignmentBegin=136708|WordAlignmentEnd=136708
3	si	si	SCONJ	_	_	1	parataxis	_	SpaceAfter=No|WordAlignmentBegin=136708|WordAlignmentEnd=136958
4	.	.	PUNCT	_	_	3	punct	_	WordAlignmentBegin=136958|WordAlignmentEnd=136958

~~~


