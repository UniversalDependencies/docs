---
layout: base
title:  'Statistics of cop in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `cop`

This relation is universal.

873 nodes (2%) are attached to their parents as `cop`.

833 instances of `cop` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.6930126002291.

The following 13 pairs of parts of speech are connected with `cop`: <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-AUX.html">AUX</a></tt> (338; 39% instances), <tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_rhapsodie-pos-AUX.html">AUX</a></tt> (303; 35% instances), <tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_rhapsodie-pos-AUX.html">AUX</a></tt> (99; 11% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-AUX.html">AUX</a></tt> (71; 8% instances), <tt><a href="fr_rhapsodie-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_rhapsodie-pos-AUX.html">AUX</a></tt> (20; 2% instances), <tt><a href="fr_rhapsodie-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_rhapsodie-pos-AUX.html">AUX</a></tt> (16; 2% instances), <tt><a href="fr_rhapsodie-pos-DET.html">DET</a></tt>-<tt><a href="fr_rhapsodie-pos-AUX.html">AUX</a></tt> (10; 1% instances), <tt><a href="fr_rhapsodie-pos-X.html">X</a></tt>-<tt><a href="fr_rhapsodie-pos-AUX.html">AUX</a></tt> (8; 1% instances), <tt><a href="fr_rhapsodie-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_rhapsodie-pos-AUX.html">AUX</a></tt> (3; 0% instances), <tt><a href="fr_rhapsodie-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="fr_rhapsodie-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="fr_rhapsodie-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_rhapsodie-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="fr_rhapsodie-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_rhapsodie-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="fr_rhapsodie-pos-INTJ.html">INTJ</a></tt>-<tt><a href="fr_rhapsodie-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 cop	color:blue
1	ou	ou	CCONJ	_	_	5	cc	_	Overlap=Rhap_D0006-24|WordAlignmentBegin=69992|WordAlignmentEnd=70184
2	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	5	nsubj	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No|WordAlignmentBegin=70190|WordAlignmentEnd=70439
3	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	WordAlignmentBegin=70439|WordAlignmentEnd=70719
4	l'	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	Exponence[Gender]=Absent|HasSpokenGender=OnlySingExceptWithLiaison|LiaisonAfter=Yes|SpaceAfter=No|WordAlignmentBegin=70719|WordAlignmentEnd=70759
5	argent	argent	NOUN	_	Gender=Masc|Number=Sing	0	root	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|LiaisonPossibleBefore=Yes|WordAlignmentBegin=70759|WordAlignmentEnd=71119
6	de	de	ADP	_	_	8	case	_	WordAlignmentBegin=71119|WordAlignmentEnd=71199
7	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	cinéma	cinéma	NOUN	_	Gender=Masc|Number=Sing	5	nmod	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|WordAlignmentBegin=71199|WordAlignmentEnd=71765
9	?	?	PUNCT	_	_	5	punct	_	WordAlignmentBegin=71765|WordAlignmentEnd=71765

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 10 cop	color:blue
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


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 cop	color:blue
1	ben	ben	INTJ	_	_	5	discourse	_	SpaceAfter=No|WordAlignmentBegin=85835|WordAlignmentEnd=85925
2	,	,	PUNCT	_	_	1	punct	_	WordAlignmentBegin=85925|WordAlignmentEnd=85925
3	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	5	expl:subj	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No|WordAlignmentBegin=85925|WordAlignmentEnd=86025
4	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	WordAlignmentBegin=86025|WordAlignmentEnd=86055
5	moi	moi	PRON	_	Emph=Yes|Number=Sing|Person=1|PronType=Prs	0	root	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|WordAlignmentBegin=86055|WordAlignmentEnd=86165
6	qui	qui	PRON	_	PronType=Rel	9	nsubj	_	WordAlignmentBegin=86165|WordAlignmentEnd=86295
7	les	lui	PRON	_	Case=Acc|Emph=No|Number=Plur|Person=3|PronType=Prs	9	obj	_	Exponence[Person]=Inherent|WordAlignmentBegin=86295|WordAlignmentEnd=86395
8	ai	avoir	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	9	aux:tense	_	Filler=subj|WordAlignmentBegin=86395|WordAlignmentEnd=86445
9	payés	payer	VERB	_	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part|Voice=Act	5	advcl:cleft	_	Exponence[Gender]=Absent|Exponence[Number]=Absent|PastPartHasSpokenGender=NotInThisDialect|SpaceAfter=No|Status[Tense]=Denom|WordAlignmentBegin=86445|WordAlignmentEnd=86946
10	.	.	PUNCT	_	_	5	punct	_	WordAlignmentBegin=86946|WordAlignmentEnd=86946

~~~


