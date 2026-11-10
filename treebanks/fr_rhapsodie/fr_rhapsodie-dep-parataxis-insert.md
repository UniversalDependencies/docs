---
layout: base
title:  'Statistics of parataxis:insert in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `parataxis:insert`

This relation is a language-specific subtype of <tt><a href="fr_rhapsodie-dep-parataxis.html">parataxis</a></tt>.
There are also 1 other language-specific subtypes of `parataxis`: <tt><a href="fr_rhapsodie-dep-parataxis-parenth.html">parataxis:parenth</a></tt>.

15 nodes (0%) are attached to their parents as `parataxis:insert`.

10 instances of `parataxis:insert` (67%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.73333333333333.

The following 3 pairs of parts of speech are connected with `parataxis:insert`: <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (10; 67% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (4; 27% instances), <tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 parataxis:insert	color:blue
1	sois	être	AUX	_	Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	2	aux:pass	_	WordAlignmentBegin=172082|WordAlignmentEnd=172357
2	purifié	purifier	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	Exponence[Gender]=Absent|Exponence[Number]=Absent|PastPartHasSpokenGender=NotInThisDialect|Reported=Yes|SpaceAfter=No|Status[Tense]=Denom|WordAlignmentBegin=172357|WordAlignmentEnd=173135
3	,	,	PUNCT	_	_	4	punct	_	WordAlignmentBegin=173135|WordAlignmentEnd=173604
4	entend	entendre	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	parataxis:insert	_	Exponence[Person]=Absent|SpaceAfter=No|WordAlignmentBegin=173604|WordAlignmentEnd=173999
5	-on	on	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Ind	4	nsubj	_	Exponence[Gender]=Absent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|WordAlignmentBegin=173999|WordAlignmentEnd=174169
6	dans	dans	ADP	_	_	8	case	_	WordAlignmentBegin=174169|WordAlignmentEnd=174299
7	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	8	det	_	HasSpokenGender=OnlySingExceptWithLiaison|LiaisonAfter=Yes|SpaceAfter=No|WordAlignmentBegin=174299|WordAlignmentEnd=174329
8	évangile	évangile	NOUN	_	Gender=Masc|Number=Sing	4	obl:mod	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|LiaisonPossibleBefore=Yes|SpaceAfter=No|WordAlignmentBegin=174329|WordAlignmentEnd=174914
9	.	.	PUNCT	_	_	2	punct	_	WordAlignmentBegin=174914|WordAlignmentEnd=174914

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 3 parataxis:insert	color:blue
1	vraiment	vraiment	ADV	_	_	15	advmod	_	SpaceAfter=No|WordAlignmentBegin=222566|WordAlignmentEnd=223111
2	,	,	PUNCT	_	_	3	punct	_	WordAlignmentBegin=223111|WordAlignmentEnd=223111
3	dit	dire	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	15	parataxis:insert	_	Exponence[Person]=Absent|WordAlignmentBegin=223111|WordAlignmentEnd=223251
4	Job	Job	PROPN	_	_	3	nsubj	_	SpaceAfter=No|WordAlignmentBegin=223251|WordAlignmentEnd=223731
5	,	,	PUNCT	_	_	3	punct	_	WordAlignmentBegin=223731|WordAlignmentEnd=224287
6	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	HasSpokenGender=OnlySingExceptWithLiaison|WordAlignmentBegin=224287|WordAlignmentEnd=224422
7	vie	vie	NOUN	_	Gender=Fem|Number=Sing	15	nsubj	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|WordAlignmentBegin=224422|WordAlignmentEnd=224612
8	de	de	ADP	_	_	10	case	_	WordAlignmentBegin=224612|WordAlignmentEnd=224752
9	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	10	det	_	HasSpokenGender=OnlySingExceptWithLiaison|LiaisonAfter=Yes|SpaceAfter=No|WordAlignmentBegin=224752|WordAlignmentEnd=224812
10	homme	homme	NOUN	_	Gender=Masc|Number=Sing	7	nmod	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|LiaisonPossibleBefore=Yes|WordAlignmentBegin=224812|WordAlignmentEnd=224992
11	sur	sur	ADP	_	_	12	case	_	WordAlignmentBegin=224992|WordAlignmentEnd=225322
12	terre	terre	NOUN	_	Gender=Fem|Number=Sing	10	nmod	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|WordAlignmentBegin=225322|WordAlignmentEnd=225632
13	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	15	cop	_	WordAlignmentBegin=225632|WordAlignmentEnd=225708
14	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	15	det	_	WordAlignmentBegin=225708|WordAlignmentEnd=225960
15	corvée	corvée	NOUN	_	Gender=Fem|Number=Sing	0	root	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|Reported=Yes|SpaceAfter=No|WordAlignmentBegin=225960|WordAlignmentEnd=226534
16	.	.	PUNCT	_	_	15	punct	_	WordAlignmentBegin=226534|WordAlignmentEnd=226534

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 parataxis:insert	color:blue
1	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	HasSpokenGender=OnlySingExceptWithLiaison|WordAlignmentBegin=14466|WordAlignmentEnd=14601
2	France	France	PROPN	_	_	4	nsubj	_	WordAlignmentBegin=14601|WordAlignmentEnd=14901
3	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	WordAlignmentBegin=14901|WordAlignmentEnd=14951
4	rose	rose	ADJ	_	Gender=Fem|Number=Sing	0	root	_	Exponence[Gender]=Absent|Exponence[Number]=Absent|HasSpokenGender=No|HasSpokenNumber=OnlyWithLiaison|Reported=Yes|SpaceAfter=No|WordAlignmentBegin=14951|WordAlignmentEnd=15311
5	,	,	PUNCT	_	_	6	punct	_	WordAlignmentBegin=15311|WordAlignmentEnd=15311
6	constate	constater	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	parataxis:insert	_	Exponence[Number]=Absent|Exponence[Person]=Absent|WordAlignmentBegin=15311|WordAlignmentEnd=15771
7	La	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	8	det	_	HasSpokenGender=OnlySingExceptWithLiaison|WordAlignmentBegin=15771|WordAlignmentEnd=15861
8	Voix	voix	NOUN	_	ExtPos=PROPN|Gender=Fem|Number=Sing	6	nsubj	_	Exponence[Gender]=Inherent|WordAlignmentBegin=15861|WordAlignmentEnd=16001
9	de	de	ADP	_	_	11	case	_	WordAlignmentBegin=16001|WordAlignmentEnd=16120
10	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
11	Nord	Nord	PROPN	_	_	8	nmod	_	SpaceAfter=No|WordAlignmentBegin=16120|WordAlignmentEnd=16440
12	.	.	PUNCT	_	_	4	punct	_	WordAlignmentBegin=16440|WordAlignmentEnd=16440

~~~


