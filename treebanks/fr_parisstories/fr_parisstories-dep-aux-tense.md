---
layout: base
title:  'Statistics of aux:tense in UD_French-ParisStories'
udver: '2'
---

## Treebank Statistics: UD_French-ParisStories: Relations: `aux:tense`

This relation is a language-specific subtype of .
There are also 2 other language-specific subtypes of `aux`: <tt><a href="fr_parisstories-dep-aux-caus.html">aux:caus</a></tt>, <tt><a href="fr_parisstories-dep-aux-pass.html">aux:pass</a></tt>.

1012 nodes (2%) are attached to their parents as `aux:tense`.

1012 instances of `aux:tense` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.27766798418972.

The following 6 pairs of parts of speech are connected with `aux:tense`: <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-AUX.html">AUX</a></tt> (991; 98% instances), <tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_parisstories-pos-AUX.html">AUX</a></tt> (10; 1% instances), <tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_parisstories-pos-AUX.html">AUX</a></tt> (5; 0% instances), <tt><a href="fr_parisstories-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_parisstories-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="fr_parisstories-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_parisstories-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="fr_parisstories-pos-X.html">X</a></tt>-<tt><a href="fr_parisstories-pos-AUX.html">AUX</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 aux:tense	color:blue
1	je	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent
2	sais	savoir	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	8	discourse	_	Exponence[Person]=Absent
3	plus	plus	ADV	_	_	2	advmod	_	SpaceAfter=No
4	,	,	PUNCT	_	_	2	punct	_	_
5	on	on	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Ind	8	nsubj	_	Exponence[Gender]=Absent|Exponence[Number]=Inherent|Exponence[Person]=Inherent
6	en	en	PRON	_	Person=3|PronType=Prs	8	iobj	_	Exponence[Person]=Inherent
7	avait	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	8	aux:tense	_	_
8	fait	faire	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	Exponence[Number]=Absent|PastPartHasSpokenGender=Yes|Status[Tense]=Denom
9	une	un	DET	_	Definite=Ind|ExtPos=ADV|Gender=Fem|Number=Sing|PronType=Art	8	advmod	_	Idiom=Yes
10	fois	fois	NOUN	_	Gender=Fem|Number=Sing	9	fixed	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|InIdiom=Yes
11	ensemble	ensemble	ADV	_	_	8	advmod	_	_
12	?	?	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 9 aux:tense	color:blue
1	elle	lui	PRON	_	Case=Nom|Emph=No|Gender=Fem|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	Exponence[Person]=Inherent|WordAlignmentBegin=24658|WordAlignmentEnd=24892
2	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux:tense	_	WordAlignmentBegin=24892|WordAlignmentEnd=25125
3	vu	voir	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	Exponence[Gender]=Absent|Exponence[Number]=Absent|PastPartHasSpokenGender=NotInThisDialect|Status[Tense]=Denom|WordAlignmentBegin=25125|WordAlignmentEnd=25359
4	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	HasSpokenGender=OnlySingExceptWithLiaison|WordAlignmentBegin=25359|WordAlignmentEnd=25593
5	monde	monde	NOUN	_	Gender=Masc|Number=Sing	3	obj	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|WordAlignmentBegin=25593|WordAlignmentEnd=25826
6	arriver	arriver	VERB	_	VerbForm=Inf	3	xcomp	_	SpaceAfter=No|Subject=SubjRaising|WordAlignmentBegin=25826|WordAlignmentEnd=26060
7	,	,	PUNCT	_	_	11	punct	_	WordAlignmentBegin=26060|WordAlignmentEnd=26060
8	elle	lui	PRON	_	Case=Nom|Emph=No|Gender=Fem|Number=Sing|Person=3|PronType=Prs	11	nsubj	_	Exponence[Person]=Inherent|WordAlignmentBegin=26248|WordAlignmentEnd=26490
9	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	aux:tense	_	WordAlignmentBegin=26490|WordAlignmentEnd=26732
10	été	être	AUX	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	11	cop	_	Status[Tense]=Denom|WordAlignmentBegin=26732|WordAlignmentEnd=26975
11	incapable	incapable	ADJ	_	Gender=Fem|Number=Sing	3	conj	_	Exponence[Gender]=Absent|Exponence[Number]=Absent|HasSpokenGender=No|HasSpokenNumber=OnlyWithLiaison|WordAlignmentBegin=26975|WordAlignmentEnd=27217
12	de	de	ADP	_	_	13	mark	_	WordAlignmentBegin=27217|WordAlignmentEnd=27459
13	produire	produire	VERB	_	VerbForm=Inf	11	advcl	_	SpaceAfter=No|Subject=SubjRaising|WordAlignmentBegin=27459|WordAlignmentEnd=27701
14	.	.	PUNCT	_	_	3	punct	_	WordAlignmentBegin=27701|WordAlignmentEnd=27701

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 aux:tense	color:blue
1	on	on	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Ind	3	nsubj	_	Exponence[Gender]=Absent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|WordAlignmentBegin=89650|WordAlignmentEnd=89922
2	avait	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	3	aux:tense	_	WordAlignmentBegin=89922|WordAlignmentEnd=90195
3	spé	spé	NOUN	_	Gender=Fem|Number=Sing	0	root	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|WordAlignmentBegin=90195|WordAlignmentEnd=90467
4	maths	math	NOUN	_	Gender=Fem|Number=Plur	3	nmod	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|WordAlignmentBegin=90467|WordAlignmentEnd=90740
5	ensemble	ensemble	ADV	_	_	3	advmod	_	SpaceAfter=No|WordAlignmentBegin=90740|WordAlignmentEnd=91012
6	.	.	PUNCT	_	_	3	punct	_	WordAlignmentBegin=91012|WordAlignmentEnd=91012

~~~


