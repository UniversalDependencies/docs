---
layout: base
title:  'Statistics of xcomp in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `xcomp`

This relation is universal.

553 nodes (1%) are attached to their parents as `xcomp`.

550 instances of `xcomp` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.98372513562387.

The following 18 pairs of parts of speech are connected with `xcomp`: <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (463; 84% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt> (27; 5% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt> (17; 3% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (15; 3% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt> (4; 1% instances), <tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="fr_rhapsodie-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="fr_rhapsodie-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="fr_rhapsodie-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="fr_rhapsodie-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-X.html">X</a></tt> (2; 0% instances), <tt><a href="fr_rhapsodie-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 xcomp	color:blue
1	là	là	ADV	_	_	4	advmod	_	SpaceAfter=No|WordAlignmentBegin=84365|WordAlignmentEnd=84445
2	,	,	PUNCT	_	_	1	punct	_	WordAlignmentBegin=84445|WordAlignmentEnd=84445
3	je	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	4	nsubj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|WordAlignmentBegin=84445|WordAlignmentEnd=84475
4	viens	venir	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	Exponence[Person]=Absent|WordAlignmentBegin=84475|WordAlignmentEnd=84605
5	de	de	ADP	_	_	6	mark	_	WordAlignmentBegin=84605|WordAlignmentEnd=84685
6	faire	faire	VERB	_	VerbForm=Inf	4	xcomp	_	Subject=SubjRaising|WordAlignmentBegin=84685|WordAlignmentEnd=84855
7	mes	son	DET	_	Number=Plur|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	9	reparandum	_	HasSpokenGender=OnlySingExceptWithLiaison|SpaceAfter=No|WordAlignmentBegin=84855|WordAlignmentEnd=84995
8	,	,	PUNCT	_	_	7	punct	_	WordAlignmentBegin=84995|WordAlignmentEnd=84995
9	des	un	DET	_	Definite=Ind|Number=Plur|PronType=Art	10	det	_	WordAlignmentBegin=84995|WordAlignmentEnd=85095
10	vaccins	vaccin	NOUN	_	Gender=Masc|Number=Plur	6	obj	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|WordAlignmentBegin=85095|WordAlignmentEnd=85415
11	par	par	ADP	_	_	12	case	_	WordAlignmentBegin=85415|WordAlignmentEnd=85555
12	exemple	exemple	NOUN	_	Gender=Masc|Number=Sing	4	obl:mod	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|LiaisonPossibleBefore=Yes|SpaceAfter=No|WordAlignmentBegin=85555|WordAlignmentEnd=85835
13	.	.	PUNCT	_	_	4	punct	_	WordAlignmentBegin=85835|WordAlignmentEnd=85835

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 xcomp	color:blue
1	et	et	CCONJ	_	_	3	cc	_	WordAlignmentBegin=364743|WordAlignmentEnd=364788
2	je	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|WordAlignmentBegin=364788|WordAlignmentEnd=364848
3	trouve	trouver	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	Exponence[Person]=Absent|WordAlignmentBegin=364848|WordAlignmentEnd=364978
4	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	3	obj	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|WordAlignmentBegin=364978|WordAlignmentEnd=365098
5	sympa	sympa	ADJ	_	Gender=Masc|Number=Sing	3	xcomp	_	Exponence[Gender]=Absent|Exponence[Number]=Absent|HasSpokenGender=No|HasSpokenNumber=OnlyWithLiaison|WordAlignmentBegin=365098|WordAlignmentEnd=365448
6	d'	de	ADP	_	_	8	mark	_	SpaceAfter=No|WordAlignmentBegin=365448|WordAlignmentEnd=365478
7	en	en	PRON	_	Person=3|PronType=Prs	8	obj	_	Exponence[Person]=Inherent|WordAlignmentBegin=365478|WordAlignmentEnd=365558
8	voir	voir	VERB	_	VerbForm=Inf	3	xcomp	_	Subject=SubjRaising|WordAlignmentBegin=365558|WordAlignmentEnd=365768
9	dans	dans	ADP	_	_	10	case	_	WordAlignmentBegin=365768|WordAlignmentEnd=365848
10	Paris	Paris	PROPN	_	_	8	obl:mod	_	SpaceAfter=No|WordAlignmentBegin=365848|WordAlignmentEnd=366064
11	.	.	PUNCT	_	_	3	punct	_	WordAlignmentBegin=366064|WordAlignmentEnd=366064

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 xcomp	color:blue
1	vous	vous	PRON	_	Case=Nom|Emph=No|Number=Plur|Person=2|PronType=Prs	2	nsubj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|Polite=Unknown|WordAlignmentBegin=126949|WordAlignmentEnd=127124
2	allez	aller	VERB	_	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	WordAlignmentBegin=127124|WordAlignmentEnd=127244
3	être	être	AUX	_	VerbForm=Inf	4	cop	_	Subject=SubjRaising|WordAlignmentBegin=127244|WordAlignmentEnd=127444
4	médecin	médecin	NOUN	_	Gender=Masc|Number=Sing	2	xcomp	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|WordAlignmentBegin=127444|WordAlignmentEnd=128137
5	en	en	ADP	_	_	6	case	_	WordAlignmentBegin=128354|WordAlignmentEnd=128404
6	France	France	PROPN	_	_	4	nmod	_	WordAlignmentBegin=128404|WordAlignmentEnd=129034
7	en	en	ADP	_	_	8	case	_	WordAlignmentBegin=129034|WordAlignmentEnd=129547
8	hôpital	hôpital	NOUN	_	Gender=Masc|Number=Sing	4	nmod	_	Exponence[Gender]=Inherent|LiaisonPossibleBefore=Yes|SpaceAfter=No|WordAlignmentBegin=129609|WordAlignmentEnd=130794
9	.	.	PUNCT	_	_	2	punct	_	WordAlignmentBegin=130794|WordAlignmentEnd=130794

~~~


