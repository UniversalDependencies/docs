---
layout: base
title:  'Statistics of aux:tense in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `aux:tense`

This relation is a language-specific subtype of <tt><a href="fr_rhapsodie-dep-aux.html">aux</a></tt>.
There are also 2 other language-specific subtypes of `aux`: <tt><a href="fr_rhapsodie-dep-aux-caus.html">aux:caus</a></tt>, <tt><a href="fr_rhapsodie-dep-aux-pass.html">aux:pass</a></tt>.

492 nodes (1%) are attached to their parents as `aux:tense`.

490 instances of `aux:tense` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.49390243902439.

The following 6 pairs of parts of speech are connected with `aux:tense`: <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-AUX.html">AUX</a></tt> (469; 95% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-AUX.html">AUX</a></tt> (10; 2% instances), <tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_rhapsodie-pos-AUX.html">AUX</a></tt> (6; 1% instances), <tt><a href="fr_rhapsodie-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_rhapsodie-pos-AUX.html">AUX</a></tt> (3; 1% instances), <tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_rhapsodie-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="fr_rhapsodie-pos-X.html">X</a></tt>-<tt><a href="fr_rhapsodie-pos-AUX.html">AUX</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 13 aux:tense	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 2 aux:tense	color:blue
1	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	10	nsubj	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|WordAlignmentBegin=73395|WordAlignmentEnd=73490
2	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	aux:tense	_	WordAlignmentBegin=73490|WordAlignmentEnd=73520
3	été	être	AUX	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	10	cop	_	Status[Tense]=Denom|WordAlignmentBegin=73520|WordAlignmentEnd=73680
4	vraiment	vraiment	ADV	_	_	10	advmod	_	WordAlignmentBegin=73680|WordAlignmentEnd=73960
5	pour	pour	ADP	_	_	6	case	_	WordAlignmentBegin=73960|WordAlignmentEnd=74150
6	lui	lui	PRON	_	Emph=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	10	obl:mod	_	Exponence[Person]=Inherent|WordAlignmentBegin=74150|WordAlignmentEnd=74410
7	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	9	reparandum	_	SpaceAfter=No|WordAlignmentBegin=74410|WordAlignmentEnd=74570
8	,	,	PUNCT	_	_	7	punct	_	WordAlignmentBegin=74570|WordAlignmentEnd=74570
9	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	10	det	_	WordAlignmentBegin=74570|WordAlignmentEnd=74780
10	révélation	révélation	NOUN	_	Gender=Fem|Number=Sing	0	root	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|SpaceAfter=No|WordAlignmentBegin=74780|WordAlignmentEnd=75300
11	.	.	PUNCT	_	_	10	punct	_	WordAlignmentBegin=75300|WordAlignmentEnd=75300

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 9 aux:tense	color:blue
1	et	et	CCONJ	_	_	6	cc	_	SpaceAfter=No|WordAlignmentBegin=65408|WordAlignmentEnd=65690
2	,	,	PUNCT	_	_	6	punct	_	WordAlignmentBegin=65690|WordAlignmentEnd=65690
3	euh	euh	INTJ	_	_	6	discourse:filler	_	SpaceAfter=No|WordAlignmentBegin=65690|WordAlignmentEnd=65990
4	,	,	PUNCT	_	_	3	punct	_	WordAlignmentBegin=65990|WordAlignmentEnd=65990
5	je	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	6	nsubj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|WordAlignmentBegin=65990|WordAlignmentEnd=66130
6	pense	penser	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	Exponence[Person]=Absent|WordAlignmentBegin=66130|WordAlignmentEnd=66370
7	que	que	SCONJ	_	_	12	mark	_	WordAlignmentBegin=66370|WordAlignmentEnd=66710
8	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	12	nsubj	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|Overlap=Rhap_D0006-23|WordAlignmentBegin=68055|WordAlignmentEnd=68184
9	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	aux:tense	_	Overlap=Rhap_D0006-23|WordAlignmentBegin=68184|WordAlignmentEnd=68214
10	été	être	AUX	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	12	cop	_	Overlap=Rhap_D0006-23|Status[Tense]=Denom|WordAlignmentBegin=68214|WordAlignmentEnd=68364
11	très	très	ADV	_	_	12	advmod	_	Overlap=Rhap_D0006-23|WordAlignmentBegin=68364|WordAlignmentEnd=68554
12	bénéfique	bénéfique	ADJ	_	Gender=Masc|Number=Sing	6	ccomp	_	Exponence[Gender]=Absent|Exponence[Number]=Absent|HasSpokenGender=No|HasSpokenNumber=OnlyWithLiaison|Overlap=Rhap_D0006-23|SpaceAfter=No|WordAlignmentBegin=68554|WordAlignmentEnd=69102
13	.	.	PUNCT	_	_	6	punct	_	Overlap=Rhap_D0006-16|WordAlignmentBegin=69553|WordAlignmentEnd=69553

~~~


