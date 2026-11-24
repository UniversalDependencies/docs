---
layout: base
title:  'Statistics of det in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `det`

This relation is universal.

4130 nodes (9%) are attached to their parents as `det`.

4130 instances of `det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.11016949152542.

The following 11 pairs of parts of speech are connected with `det`: <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-DET.html">DET</a></tt> (3771; 91% instances), <tt><a href="fr_rhapsodie-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_rhapsodie-pos-DET.html">DET</a></tt> (190; 5% instances), <tt><a href="fr_rhapsodie-pos-X.html">X</a></tt>-<tt><a href="fr_rhapsodie-pos-DET.html">DET</a></tt> (39; 1% instances), <tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_rhapsodie-pos-DET.html">DET</a></tt> (38; 1% instances), <tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_rhapsodie-pos-DET.html">DET</a></tt> (36; 1% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-ADP.html">ADP</a></tt> (21; 1% instances), <tt><a href="fr_rhapsodie-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_rhapsodie-pos-DET.html">DET</a></tt> (20; 0% instances), <tt><a href="fr_rhapsodie-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_rhapsodie-pos-DET.html">DET</a></tt> (11; 0% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="fr_rhapsodie-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_rhapsodie-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 det	color:blue
1	vous	vous	PRON	_	Case=Nom|Emph=No|Number=Plur|Person=2|PronType=Prs	3	nsubj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|Overlap=Rhap_D0006-7|Polite=Unknown|WordAlignmentBegin=18470|WordAlignmentEnd=18712
2	n'	ne	ADV	_	Polarity=Neg	3	advmod	_	Overlap=Rhap_D0006-7|SpaceAfter=No|WordAlignmentBegin=18712|WordAlignmentEnd=18756
3	avez	avoir	VERB	_	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	Overlap=Rhap_D0006-7|WordAlignmentBegin=18756|WordAlignmentEnd=19068
4	pas	pas	ADV	_	Polarity=Neg	3	advmod	_	WordAlignmentBegin=19068|WordAlignmentEnd=19203
5	autour	autour	ADV	_	_	3	advmod	_	WordAlignmentBegin=19203|WordAlignmentEnd=19493
6	de	de	ADP	_	_	7	case	_	WordAlignmentBegin=19493|WordAlignmentEnd=19603
7	vous	vous	PRON	_	Case=Acc|Emph=No|Number=Plur|Person=2|PronType=Prs	5	obl:arg	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|Polite=Unknown|WordAlignmentBegin=19603|WordAlignmentEnd=19981
8	cette	ce	DET	_	Gender=Fem|Number=Sing|PronType=Dem	9	det	_	Exponence[Gender]=Absent|HasSpokenGender=OnlySingExceptWithLiaison|LiaisonAfter=Yes|WordAlignmentBegin=19981|WordAlignmentEnd=20180
9	impression	impression	NOUN	_	Gender=Fem|Number=Sing	3	obj:lvc	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|LiaisonPossibleBefore=Yes|WordAlignmentBegin=20180|WordAlignmentEnd=20905
10	que	que	SCONJ	_	_	9	dep	_	Scrap=Yes|SpaceAfter=No|WordAlignmentBegin=20905|WordAlignmentEnd=21246
11	…	…	PUNCT	_	_	3	punct	_	WordAlignmentBegin=21246|WordAlignmentEnd=21246

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 det	color:blue
1	vous	vous	PRON	_	Case=Nom|Emph=No|Number=Plur|Person=2|PronType=Prs	3	nsubj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|Polite=Unknown|WordAlignmentBegin=321744|WordAlignmentEnd=321859
2	vous	vous	PRON	_	Case=Dat|Emph=No|Number=Plur|Person=2|PronType=Prs	3	iobj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|Polite=Unknown|WordAlignmentBegin=321859|WordAlignmentEnd=321960
3	trouvez	trouver	VERB	_	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	WordAlignmentBegin=321960|WordAlignmentEnd=322238
4	à	à	ADP	_	_	6	case	_	WordAlignmentBegin=322238|WordAlignmentEnd=322352
5	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	Gosier	Gosier	PROPN	_	_	3	obl:arg	_	SpaceAfter=No|WordAlignmentBegin=322352|WordAlignmentEnd=323006
7	.	.	PUNCT	_	_	3	punct	_	WordAlignmentBegin=323006|WordAlignmentEnd=323006

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 det	color:blue
1	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	2	det	_	HasSpokenGender=OnlySingExceptWithLiaison|WordAlignmentBegin=259455|WordAlignmentEnd=259575
2	spécialit~	spécialit~	X	_	ExtPos=NOUN	0	root	_	Scrap=Yes|SpaceAfter=No|WordAlignmentBegin=259575|WordAlignmentEnd=260105
3	…	…	PUNCT	_	_	2	punct	_	WordAlignmentBegin=260105|WordAlignmentEnd=260105

~~~


