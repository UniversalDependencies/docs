---
layout: base
title:  'Statistics of nmod:appos in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `nmod:appos`

This relation is a language-specific subtype of <tt><a href="fr_rhapsodie-dep-nmod.html">nmod</a></tt>.

121 nodes (0%) are attached to their parents as `nmod:appos`.

121 instances of `nmod:appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.5702479338843.

The following 6 pairs of parts of speech are connected with `nmod:appos`: <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-PROPN.html">PROPN</a></tt> (98; 81% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt> (11; 9% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-NUM.html">NUM</a></tt> (5; 4% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-X.html">X</a></tt> (3; 2% instances), <tt><a href="fr_rhapsodie-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_rhapsodie-pos-PROPN.html">PROPN</a></tt> (3; 2% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 nmod:appos	color:blue
1	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	AlignBegin=81375|AlignEnd=81510|HasSpokenGender=OnlySingExceptWithLiaison
2	foire	foire	NOUN	_	Gender=Fem|Number=Sing	0	root	_	AlignBegin=81510|AlignEnd=81732|Exponence[Gender]=Inherent|Exponence[Number]=Absent
3	d'	de	ADP	_	_	4	case	_	AlignBegin=81732|AlignEnd=81814|SpaceAfter=No
4	empoigne	empoigne	NOUN	_	Gender=Fem|Number=Sing	2	nmod	_	AlignBegin=81814|AlignEnd=82392|Exponence[Gender]=Inherent|Exponence[Number]=Absent|LiaisonPossibleBefore=Yes
5	à	à	ADP	_	_	7	case	_	AlignBegin=82392|AlignEnd=82567
6	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	AlignBegin=82392|AlignEnd=82567
7	procès	procès	NOUN	_	Gender=Masc|Number=Sing	2	nmod	_	AlignBegin=82567|AlignEnd=82970|Exponence[Gender]=Inherent|Exponence[Number]=Absent
8	Colonna	Colonna	PROPN	_	_	7	nmod:appos	_	AlignBegin=82970|AlignEnd=83410|SpaceAfter=No
9	.	.	PUNCT	_	_	2	punct	_	AlignBegin=83410|AlignEnd=83410

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 nmod:appos	color:blue
1	à	à	ADP	_	_	3	case	_	AlignBegin=313200|AlignEnd=313299
2	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	AlignBegin=313200|AlignEnd=313299
3	moins	moins	ADV	_	_	4	obl:mod	_	AlignBegin=313299|AlignEnd=313564
4	six	six	NUM	_	Number=Plur	5	nummod	_	AlignBegin=313564|AlignEnd=313812|Exponence[Number]=Inherent
5	blessés	blessé	NOUN	_	Gender=Masc|Number=Plur	0	root	_	AlignBegin=313812|AlignEnd=314498|Exponence[Gender]=Inherent|Exponence[Number]=Absent
6	légers	léger	ADJ	_	Gender=Masc|Number=Plur	5	amod	_	AlignBegin=314498|AlignEnd=315069|Exponence[Number]=Absent|HasSpokenGender=YesExceptSingWithLiaison|HasSpokenNumber=OnlyWithLiaison
7	des	un	DET	_	Definite=Ind|Number=Plur|PronType=Art	8	det	_	AlignBegin=315069|AlignEnd=315166
8	policiers	policier	NOUN	_	Gender=Masc|Number=Plur	5	nmod:appos	_	AlignBegin=315166|AlignEnd=315916|Exponence[Gender]=Inherent|Exponence[Number]=Absent|SpaceAfter=No
9	.	.	PUNCT	_	_	5	punct	_	AlignBegin=315916|AlignEnd=315916

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 13 nmod:appos	color:blue
1	on	on	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Ind	2	nsubj	_	AlignBegin=850662|AlignEnd=850794|Exponence[Gender]=Absent|Exponence[Number]=Inherent|Exponence[Person]=Inherent
2	jouait	jouer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	AlignBegin=850794|AlignEnd=851059|Exponence[Number]=Absent|Exponence[Person]=Absent
3	trois	trois	NUM	_	Number=Plur	4	nummod	_	AlignBegin=851059|AlignEnd=851271|Exponence[Number]=Inherent
4	matchs	match	NOUN	_	Gender=Masc|Number=Plur	2	obj	_	AlignBegin=851271|AlignEnd=851540|Exponence[Gender]=Inherent|Exponence[Number]=Absent
5	en	en	ADP	_	_	6	case	_	AlignBegin=851540|AlignEnd=851585
6	retard	retard	NOUN	_	Gender=Masc|Number=Sing	4	nmod	_	AlignBegin=851585|AlignEnd=851863|Exponence[Gender]=Inherent|Exponence[Number]=Absent
7	dans	dans	ADP	_	_	10	case	_	AlignBegin=851863|AlignEnd=852010
8	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	10	det	_	AlignBegin=852010|AlignEnd=852152|HasSpokenGender=OnlySingExceptWithLiaison
9	vingtième	vingtième	ADJ	_	Gender=Fem|Number=Sing	10	amod	_	AlignBegin=852152|AlignEnd=852598|Exponence[Gender]=Absent|Exponence[Number]=Absent|HasSpokenGender=No|HasSpokenNumber=OnlyWithLiaison
10	journée	journée	NOUN	_	Gender=Fem|Number=Sing	4	nmod	_	AlignBegin=852598|AlignEnd=852902|Exponence[Gender]=Inherent|Exponence[Number]=Absent
11	de	de	ADP	_	_	12	case	_	AlignBegin=852902|AlignEnd=853053
12	ligue	ligue	NOUN	_	Gender=Fem|Number=Sing	10	nmod	_	AlignBegin=853053|AlignEnd=853373|Exponence[Gender]=Inherent|Exponence[Number]=Absent
13	un	un	NUM	_	Number=Sing	12	nmod:appos	_	AlignBegin=853373|AlignEnd=853579|Exponence[Number]=Inherent
14	hier	hier	ADV	_	_	2	advmod	_	AlignBegin=853579|AlignEnd=854060|SpaceAfter=No
15	.	.	PUNCT	_	_	2	punct	_	AlignBegin=854060|AlignEnd=854060

~~~


