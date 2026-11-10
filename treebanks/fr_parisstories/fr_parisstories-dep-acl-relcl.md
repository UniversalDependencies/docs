---
layout: base
title:  'Statistics of acl:relcl in UD_French-ParisStories'
udver: '2'
---

## Treebank Statistics: UD_French-ParisStories: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="fr_parisstories-dep-acl.html">acl</a></tt>.

311 nodes (1%) are attached to their parents as `acl:relcl`.

311 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.66237942122186.

The following 20 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (174; 56% instances), <tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (77; 25% instances), <tt><a href="fr_parisstories-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (10; 3% instances), <tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt> (9; 3% instances), <tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt> (8; 3% instances), <tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_parisstories-pos-ADV.html">ADV</a></tt> (5; 2% instances), <tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (5; 2% instances), <tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt> (4; 1% instances), <tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt> (4; 1% instances), <tt><a href="fr_parisstories-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_parisstories-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_parisstories-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="fr_parisstories-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_parisstories-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="fr_parisstories-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_parisstories-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_parisstories-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="fr_parisstories-pos-X.html">X</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 13 acl:relcl	color:blue
1	donc	donc	ADV	_	_	4	advmod	_	_
2	il	lui	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	expl:subj	_	Exponence[Person]=Inherent
3	y	y	PRON	_	Person=3|PronType=Prs	4	expl:comp	_	Exponence[Person]=Inherent
4	a	avoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	plein	plein	ADV	_	_	7	advmod	_	_
6	de	de	ADP	_	_	5	obl:arg	_	_
7	trucs	truc	NOUN	_	Gender=Masc|Number=Plur	4	obj	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent
8	qu'	que	PRON	_	PronType=Rel	14	obj	_	SpaceAfter=No
9	on	on	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Ind	13	nsubj	_	Exponence[Gender]=Absent|Exponence[Number]=Inherent|Exponence[Person]=Inherent
10	n'	ne	ADV	_	Polarity=Neg	13	advmod	_	SpaceAfter=No
11	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	aux:tense	_	_
12	pas	pas	ADV	_	Polarity=Neg	13	advmod	_	_
13	pu	pouvoir	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	7	acl:relcl	_	Exponence[Gender]=Absent|Exponence[Number]=Absent|PastPartHasSpokenGender=NotInThisDialect|Status[Tense]=Denom
14	faire	faire	VERB	_	VerbForm=Inf	13	xcomp	_	SpaceAfter=No|Subject=SubjRaising
15	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 14 acl:relcl	color:blue
1	et	et	CCONJ	_	_	6	cc	_	WordAlignmentBegin=114541|WordAlignmentEnd=114737
2	d'	de	ADP	_	ExtPos=ADV	6	advmod	_	Idiom=Yes|SpaceAfter=No|WordAlignmentBegin=114737|WordAlignmentEnd=114933
3	ailleurs	ailleurs	ADV	_	_	2	fixed	_	InIdiom=Yes|SpaceAfter=No|WordAlignmentBegin=114933|WordAlignmentEnd=115129
4	,	,	PUNCT	_	_	2	punct	_	WordAlignmentBegin=115129|WordAlignmentEnd=115129
5	tu	toi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=2|PronType=Prs	6	nsubj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|WordAlignmentBegin=115129|WordAlignmentEnd=115325
6	sais	savoir	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	Exponence[Person]=Absent|SpaceAfter=No|WordAlignmentBegin=115325|WordAlignmentEnd=115521
7	,	,	PUNCT	_	_	8	punct	_	WordAlignmentBegin=115521|WordAlignmentEnd=115521
8	toi	toi	PRON	_	Emph=Yes|Number=Sing|Person=1|PronType=Prs	6	dislocated:subj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No|WordAlignmentBegin=115521|WordAlignmentEnd=115717
9	,	,	PUNCT	_	_	10	punct	_	WordAlignmentBegin=115717|WordAlignmentEnd=115717
10	ce	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	6	obj	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|WordAlignmentBegin=115717|WordAlignmentEnd=115912
11	qu'	que	PRON	_	PronType=Rel	14	obj	_	SpaceAfter=No|WordAlignmentBegin=115912|WordAlignmentEnd=116108
12	il	lui	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Prs	14	nsubj	_	Exponence[Person]=Inherent|WordAlignmentBegin=116108|WordAlignmentEnd=116304
13	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	aux:tense	_	WordAlignmentBegin=116304|WordAlignmentEnd=116500
14	devenu	devenir	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	10	acl:relcl	_	Exponence[Gender]=Absent|Exponence[Number]=Absent|PastPartHasSpokenGender=NotInThisDialect|Status[Tense]=Denom|WordAlignmentBegin=116500|WordAlignmentEnd=116696
15	Paul	Paul	PROPN	_	_	14	dislocated:subj	_	WordAlignmentBegin=116696|WordAlignmentEnd=116892
16	?	?	PUNCT	_	_	6	punct	_	WordAlignmentBegin=116892|WordAlignmentEnd=116892

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 acl:relcl	color:blue
1	et	et	CCONJ	_	_	6	cc	_	SpaceAfter=No|WordAlignmentBegin=5719|WordAlignmentEnd=6069
2	,	,	PUNCT	_	_	6	punct	_	WordAlignmentBegin=6069|WordAlignmentEnd=6069
3	là	là	ADV	_	_	6	advmod	_	SpaceAfter=No|WordAlignmentBegin=6069|WordAlignmentEnd=6418
4	,	,	PUNCT	_	_	3	punct	_	WordAlignmentBegin=6418|WordAlignmentEnd=6418
5	tu	toi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=2|PronType=Prs	6	nsubj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|WordAlignmentBegin=6725|WordAlignmentEnd=6988
6	as	avoir	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	WordAlignmentBegin=6988|WordAlignmentEnd=7250
7	Pauline	Pauline	PROPN	_	_	6	obj	_	WordAlignmentBegin=7250|WordAlignmentEnd=7513
8	qui	qui	PRON	_	PronType=Rel	9	nsubj	_	WordAlignmentBegin=7513|WordAlignmentEnd=7775
9	vient	venir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	acl:relcl	_	Exponence[Person]=Absent|SpaceAfter=No|WordAlignmentBegin=7775|WordAlignmentEnd=8038
10	.	.	PUNCT	_	_	6	punct	_	WordAlignmentBegin=8038|WordAlignmentEnd=8038

~~~


