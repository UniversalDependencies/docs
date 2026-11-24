---
layout: base
title:  'Statistics of discourse:tag in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `discourse:tag`

This relation is a language-specific subtype of <tt><a href="fr_rhapsodie-dep-discourse.html">discourse</a></tt>.
There are also 1 other language-specific subtypes of `discourse`: <tt><a href="fr_rhapsodie-dep-discourse-filler.html">discourse:filler</a></tt>.

8 nodes (0%) are attached to their parents as `discourse:tag`.

8 instances of `discourse:tag` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.875.

The following 8 pairs of parts of speech are connected with `discourse:tag`: <tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_rhapsodie-pos-INTJ.html">INTJ</a></tt> (1; 13% instances), <tt><a href="fr_rhapsodie-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_rhapsodie-pos-ADV.html">ADV</a></tt> (1; 13% instances), <tt><a href="fr_rhapsodie-pos-INTJ.html">INTJ</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (1; 13% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-ADV.html">ADV</a></tt> (1; 13% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-AUX.html">AUX</a></tt> (1; 13% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-INTJ.html">INTJ</a></tt> (1; 13% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (1; 13% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-ADV.html">ADV</a></tt> (1; 13% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 discourse:tag	color:blue
1	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	4	nsubj	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|Overlap=Rhap_D2003-99|SpaceAfter=No|WordAlignmentBegin=209531|WordAlignmentEnd=211138
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	Overlap=Rhap_D2003-99|WordAlignmentBegin=209531|WordAlignmentEnd=211138
3	petit	petit	ADJ	_	Gender=Masc|Number=Sing	4	amod	_	Exponence[Number]=Absent|HasSpokenGender=YesExceptSingWithLiaison|HasSpokenNumber=OnlyWithLiaison|Overlap=Rhap_D2003-99|WordAlignmentBegin=209531|WordAlignmentEnd=211138
4	côté	côté	NOUN	_	Gender=Masc|Number=Sing	0	root	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|WordAlignmentBegin=211138|WordAlignmentEnd=211423
5	entre	entre	ADP	_	_	6	case	_	WordAlignmentBegin=211423|WordAlignmentEnd=211633
6	Mandanda	Mandanda	PROPN	_	_	4	obl:mod	_	WordAlignmentBegin=211633|WordAlignmentEnd=212073
7	et	et	CCONJ	_	_	9	cc	_	WordAlignmentBegin=212073|WordAlignmentEnd=212133
8	son	son	DET	_	Gender=Masc|Number=Sing|Number[psor]=Sing|Person[psor]=3|Poss=Yes|PronType=Prs	9	det	_	HasSpokenGender=OnlySingExceptWithLiaison|WordAlignmentBegin=212133|WordAlignmentEnd=212273
9	poteau	poteau	NOUN	_	Gender=Masc|Number=Sing	6	conj	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|WordAlignmentBegin=212273|WordAlignmentEnd=212533
10	droit	droit	ADJ	_	Gender=Masc|Number=Sing	9	amod	_	Exponence[Number]=Absent|HasSpokenGender=YesExceptSingWithLiaison|HasSpokenNumber=OnlyWithLiaison|SpaceAfter=No|WordAlignmentBegin=212533|WordAlignmentEnd=212764
11	,	,	PUNCT	_	_	12	punct	_	WordAlignmentBegin=212764|WordAlignmentEnd=212764
12	hein	hein	INTJ	_	_	10	discourse:tag	_	WordAlignmentBegin=212764|WordAlignmentEnd=212870
13	?	?	PUNCT	_	_	4	punct	_	WordAlignmentBegin=212870|WordAlignmentEnd=212870

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 discourse:tag	color:blue
1	trop	trop	ADV	_	_	5	dislocated:subj	_	SpaceAfter=No|WordAlignmentBegin=89161|WordAlignmentEnd=89306
2	,	,	PUNCT	_	_	1	punct	_	WordAlignmentBegin=89306|WordAlignmentEnd=89306
3	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	5	nsubj	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No|WordAlignmentBegin=89306|WordAlignmentEnd=89396
4	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	WordAlignmentBegin=89396|WordAlignmentEnd=89486
5	trop	trop	ADV	_	_	0	root	_	WordAlignmentBegin=89486|WordAlignmentEnd=89783
6	peut-être	peut-être	ADV	_	_	5	advmod	_	WordAlignmentBegin=90446|WordAlignmentEnd=90753
7	là	là	ADV	_	_	5	discourse	_	SpaceAfter=No|WordAlignmentBegin=90753|WordAlignmentEnd=90903
8	,	,	PUNCT	_	_	9	punct	_	WordAlignmentBegin=90903|WordAlignmentEnd=90903
9	non	non	ADV	_	Polarity=Neg	5	discourse:tag	_	WordAlignmentBegin=90903|WordAlignmentEnd=91086
10	?	?	PUNCT	_	_	5	punct	_	WordAlignmentBegin=91086|WordAlignmentEnd=91086

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 discourse:tag	color:blue
1	enfin	enfin	ADV	_	_	5	discourse	_	WordAlignmentBegin=252383|WordAlignmentEnd=252678
2	surtout	surtout	ADV	_	_	5	advmod	_	WordAlignmentBegin=252678|WordAlignmentEnd=252938
3	si	si	SCONJ	_	_	5	mark	_	WordAlignmentBegin=252938|WordAlignmentEnd=253048
4	elle	lui	PRON	_	Case=Nom|Emph=No|Gender=Fem|Number=Sing|Person=3|PronType=Prs	5	nsubj	_	Exponence[Person]=Inherent|WordAlignmentBegin=253048|WordAlignmentEnd=253128
5	dit	dire	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Exponence[Person]=Absent|WordAlignmentBegin=253128|WordAlignmentEnd=253229
6	oui	oui	INTJ	_	_	5	obj	_	Reported=Yes|SpaceAfter=No|WordAlignmentBegin=253229|WordAlignmentEnd=253448
7	,	,	PUNCT	_	_	9	punct	_	WordAlignmentBegin=253448|WordAlignmentEnd=253448
8	tu	toi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=2|PronType=Prs	9	nsubj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|WordAlignmentBegin=253448|WordAlignmentEnd=253553
9	imagines	imaginer	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	6	discourse:tag	_	Exponence[Person]=Absent|WordAlignmentBegin=253553|WordAlignmentEnd=254091
10	?	?	PUNCT	_	_	5	punct	_	WordAlignmentBegin=254091|WordAlignmentEnd=254091

~~~


