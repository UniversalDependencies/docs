---
layout: base
title:  'Statistics of obj:agent in UD_French-ParisStories'
udver: '2'
---

## Treebank Statistics: UD_French-ParisStories: Relations: `obj:agent`

This relation is a language-specific subtype of <tt><a href="fr_parisstories-dep-obj.html">obj</a></tt>.
There are also 1 other language-specific subtypes of `obj`: <tt><a href="fr_parisstories-dep-obj-lvc.html">obj:lvc</a></tt>.

3 nodes (0%) are attached to their parents as `obj:agent`.

3 instances of `obj:agent` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.66666666666667.

The following 1 pairs of parts of speech are connected with `obj:agent`: <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (3; 100% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 obj:agent	color:blue
1	et	et	CCONJ	_	_	8	cc	_	WordAlignmentBegin=60484|WordAlignmentEnd=60615
2	donc	donc	ADV	_	_	8	advmod	_	SpaceAfter=No|WordAlignmentBegin=60615|WordAlignmentEnd=60745
3	,	,	PUNCT	_	_	2	punct	_	WordAlignmentBegin=60745|WordAlignmentEnd=60745
4	je	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	8	nsubj:caus	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|WordAlignmentBegin=61067|WordAlignmentEnd=61234
5	le	lui	PRON	_	Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Prs	8	obj:agent	_	Exponence[Person]=Inherent|WordAlignmentBegin=61234|WordAlignmentEnd=61402
6	fais	faire	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	8	aux:caus	_	WordAlignmentBegin=61402|WordAlignmentEnd=61569
7	même	même	ADV	_	_	8	advmod	_	WordAlignmentBegin=61569|WordAlignmentEnd=61737
8	rentrer	rentrer	VERB	_	VerbForm=Inf	0	root	_	Subject=ObjRaising|WordAlignmentBegin=61737|WordAlignmentEnd=61904
9	dans	dans	ADP	_	_	11	case	_	WordAlignmentBegin=61904|WordAlignmentEnd=62071
10	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	11	det	_	HasSpokenGender=OnlySingExceptWithLiaison|WordAlignmentBegin=62071|WordAlignmentEnd=62239
11	maison	maison	NOUN	_	Gender=Fem|Number=Sing	8	obl:arg	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|SpaceAfter=No|WordAlignmentBegin=62239|WordAlignmentEnd=62406
12	.	.	PUNCT	_	_	8	punct	_	WordAlignmentBegin=62406|WordAlignmentEnd=62406

~~~


