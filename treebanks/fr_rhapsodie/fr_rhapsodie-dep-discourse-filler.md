---
layout: base
title:  'Statistics of discourse:filler in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `discourse:filler`

This relation is a language-specific subtype of <tt><a href="fr_rhapsodie-dep-discourse.html">discourse</a></tt>.
There are also 1 other language-specific subtypes of `discourse`: <tt><a href="fr_rhapsodie-dep-discourse-tag.html">discourse:tag</a></tt>.

1009 nodes (2%) are attached to their parents as `discourse:filler`.

667 instances of `discourse:filler` (66%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.51337958374628.

The following 14 pairs of parts of speech are connected with `discourse:filler`: <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-INTJ.html">INTJ</a></tt> (326; 32% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-INTJ.html">INTJ</a></tt> (285; 28% instances), <tt><a href="fr_rhapsodie-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_rhapsodie-pos-INTJ.html">INTJ</a></tt> (139; 14% instances), <tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_rhapsodie-pos-INTJ.html">INTJ</a></tt> (67; 7% instances), <tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_rhapsodie-pos-INTJ.html">INTJ</a></tt> (42; 4% instances), <tt><a href="fr_rhapsodie-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_rhapsodie-pos-INTJ.html">INTJ</a></tt> (41; 4% instances), <tt><a href="fr_rhapsodie-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_rhapsodie-pos-INTJ.html">INTJ</a></tt> (30; 3% instances), <tt><a href="fr_rhapsodie-pos-DET.html">DET</a></tt>-<tt><a href="fr_rhapsodie-pos-INTJ.html">INTJ</a></tt> (23; 2% instances), <tt><a href="fr_rhapsodie-pos-X.html">X</a></tt>-<tt><a href="fr_rhapsodie-pos-INTJ.html">INTJ</a></tt> (16; 2% instances), <tt><a href="fr_rhapsodie-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_rhapsodie-pos-INTJ.html">INTJ</a></tt> (13; 1% instances), <tt><a href="fr_rhapsodie-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="fr_rhapsodie-pos-INTJ.html">INTJ</a></tt> (12; 1% instances), <tt><a href="fr_rhapsodie-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="fr_rhapsodie-pos-INTJ.html">INTJ</a></tt> (6; 1% instances), <tt><a href="fr_rhapsodie-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_rhapsodie-pos-INTJ.html">INTJ</a></tt> (5; 0% instances), <tt><a href="fr_rhapsodie-pos-INTJ.html">INTJ</a></tt>-<tt><a href="fr_rhapsodie-pos-INTJ.html">INTJ</a></tt> (4; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 discourse:filler	color:blue
1	je	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|WordAlignmentBegin=23980|WordAlignmentEnd=24095
2	vois	voir	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	14	discourse	_	Exponence[Person]=Absent|SpaceAfter=No|WordAlignmentBegin=24095|WordAlignmentEnd=24285
3	,	,	PUNCT	_	_	4	punct	_	WordAlignmentBegin=24285|WordAlignmentEnd=24285
4	euh	euh	INTJ	_	_	2	discourse:filler	_	SpaceAfter=No|WordAlignmentBegin=24285|WordAlignmentEnd=24745
5	,	,	PUNCT	_	_	2	punct	_	WordAlignmentBegin=24745|WordAlignmentEnd=24745
6	moi	moi	PRON	_	Emph=Yes|Number=Sing|Person=1|PronType=Prs	14	dislocated:obl	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No|WordAlignmentBegin=24745|WordAlignmentEnd=25095
7	,	,	PUNCT	_	_	6	punct	_	WordAlignmentBegin=25095|WordAlignmentEnd=25095
8	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	HasSpokenGender=OnlySingExceptWithLiaison|WordAlignmentBegin=25095|WordAlignmentEnd=25195
9	fac	fac	NOUN	_	Gender=Fem|Number=Sing	14	dislocated:subj	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|SpaceAfter=No|WordAlignmentBegin=25195|WordAlignmentEnd=25385
10	,	,	PUNCT	_	_	9	punct	_	WordAlignmentBegin=25385|WordAlignmentEnd=25385
11	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	14	nsubj	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|WordAlignmentBegin=25385|WordAlignmentEnd=25485
12	m'	moi	PRON	_	Case=Dat|Emph=No|Number=Sing|Person=1|PronType=Prs	14	iobj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No|WordAlignmentBegin=25485|WordAlignmentEnd=25535
13	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	aux:tense	_	WordAlignmentBegin=25535|WordAlignmentEnd=25565
14	fait	faire	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	Exponence[Number]=Absent|PastPartHasSpokenGender=Yes|Status[Tense]=Denom|WordAlignmentBegin=25565|WordAlignmentEnd=25685
15	beaucoup	beaucoup	ADV	_	_	14	obj	_	WordAlignmentBegin=25685|WordAlignmentEnd=25885
16	de	de	ADP	_	_	17	case	_	WordAlignmentBegin=25885|WordAlignmentEnd=25975
17	bien	bien	NOUN	_	Gender=Masc|Number=Sing	15	obl:arg	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|SpaceAfter=No|WordAlignmentBegin=25975|WordAlignmentEnd=26157
18	.	.	PUNCT	_	_	14	punct	_	WordAlignmentBegin=26157|WordAlignmentEnd=26157

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 3 discourse:filler	color:blue
1	mais	mais	CCONJ	_	_	9	cc	_	SpaceAfter=No|WordAlignmentBegin=80270|WordAlignmentEnd=80508
2	,	,	PUNCT	_	_	9	punct	_	WordAlignmentBegin=80508|WordAlignmentEnd=80508
3	euh	euh	INTJ	_	_	9	discourse:filler	_	SpaceAfter=No|WordAlignmentBegin=80508|WordAlignmentEnd=80949
4	,	,	PUNCT	_	_	3	punct	_	WordAlignmentBegin=80949|WordAlignmentEnd=81335
5	que	que	SCONJ	_	_	9	mark	_	WordAlignmentBegin=81335|WordAlignmentEnd=81380
6	ce	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	9	nsubj	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|WordAlignmentBegin=81380|WordAlignmentEnd=81440
7	soient	être	AUX	_	Mood=Sub|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	Scrap=Yes|WordAlignmentBegin=81440|WordAlignmentEnd=81580
8	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	9	det	_	HasSpokenGender=OnlySingExceptWithLiaison|LiaisonAfter=Yes|WordAlignmentBegin=81580|WordAlignmentEnd=81750
9	habits	habit	NOUN	_	Gender=Masc|Number=Plur	0	root	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|LiaisonPossibleBefore=Yes|SpaceAfter=No|WordAlignmentBegin=81750|WordAlignmentEnd=82180
10	,	,	PUNCT	_	_	12	punct	_	WordAlignmentBegin=82180|WordAlignmentEnd=82180
11	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	12	det	_	HasSpokenGender=OnlySingExceptWithLiaison|WordAlignmentBegin=82180|WordAlignmentEnd=82530
12	vacances	vacance	NOUN	_	Gender=Fem|Number=Plur	9	conj	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|SpaceAfter=No|WordAlignmentBegin=82530|WordAlignmentEnd=83195
13	,	,	PUNCT	_	_	14	punct	_	WordAlignmentBegin=83195|WordAlignmentEnd=83195
14	euh	euh	INTJ	_	_	12	discourse:filler	_	SpaceAfter=No|WordAlignmentBegin=83195|WordAlignmentEnd=83530
15	,	,	PUNCT	_	_	16	punct	_	WordAlignmentBegin=83530|WordAlignmentEnd=83990
16	euh	euh	INTJ	_	_	12	discourse:filler	_	SpaceAfter=No|WordAlignmentBegin=83990|WordAlignmentEnd=84365
17	…	…	PUNCT	_	_	9	punct	_	WordAlignmentBegin=84365|WordAlignmentEnd=84365

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 15 discourse:filler	color:blue
1	donc	donc	ADV	_	_	8	advmod	_	SpaceAfter=No|WordAlignmentBegin=158216|WordAlignmentEnd=158391
2	,	,	PUNCT	_	_	1	punct	_	WordAlignmentBegin=158391|WordAlignmentEnd=158391
3	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	8	dislocated:subj	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No|WordAlignmentBegin=158391|WordAlignmentEnd=158501
4	,	,	PUNCT	_	_	3	punct	_	WordAlignmentBegin=158501|WordAlignmentEnd=158501
5	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	8	nsubj	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No|WordAlignmentBegin=158501|WordAlignmentEnd=158651
6	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	WordAlignmentBegin=158651|WordAlignmentEnd=158811
7	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	8	det	_	LiaisonAfter=Yes|WordAlignmentBegin=158811|WordAlignmentEnd=159191
8	endroit	endroit	NOUN	_	Gender=Masc|Number=Sing	0	root	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|LiaisonPossibleBefore=Yes|WordAlignmentBegin=159191|WordAlignmentEnd=159391
9	que	que	PRON	_	PronType=Rel	11	obj	_	WordAlignmentBegin=159391|WordAlignmentEnd=159421
10	j'	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	11	nsubj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No|WordAlignmentBegin=159421|WordAlignmentEnd=159481
11	aime	aimer	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	8	acl:relcl	_	Exponence[Person]=Absent|WordAlignmentBegin=159481|WordAlignmentEnd=159581
12	pas	pas	ADV	_	Polarity=Neg	13	advmod	_	WordAlignmentBegin=159581|WordAlignmentEnd=159681
13	trop	trop	ADV	_	_	11	advmod	_	SpaceAfter=No|WordAlignmentBegin=159681|WordAlignmentEnd=159913
14	,	,	PUNCT	_	_	15	punct	_	WordAlignmentBegin=159913|WordAlignmentEnd=160794
15	euh	euh	INTJ	_	_	13	discourse:filler	_	SpaceAfter=No|WordAlignmentBegin=160794|WordAlignmentEnd=161609
16	.	.	PUNCT	_	_	8	punct	_	WordAlignmentBegin=161609|WordAlignmentEnd=161609

~~~


