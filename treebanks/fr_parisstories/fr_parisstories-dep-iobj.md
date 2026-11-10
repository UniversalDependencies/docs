---
layout: base
title:  'Statistics of iobj in UD_French-ParisStories'
udver: '2'
---

## Treebank Statistics: UD_French-ParisStories: Relations: `iobj`

This relation is universal.
There are 1 language-specific subtypes of `iobj`: <tt><a href="fr_parisstories-dep-iobj-agent.html">iobj:agent</a></tt>.

358 nodes (1%) are attached to their parents as `iobj`.

352 instances of `iobj` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.48603351955307.

The following 2 pairs of parts of speech are connected with `iobj`: <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (356; 99% instances), <tt><a href="fr_parisstories-pos-X.html">X</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (2; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 iobj	color:blue
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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 iobj	color:blue
1	mais	mais	CCONJ	_	_	10	cc	_	WordAlignmentBegin=33195|WordAlignmentEnd=33430
2	euh	euh	INTJ	_	_	10	discourse:filler	_	SpaceAfter=No|WordAlignmentBegin=33430|WordAlignmentEnd=33664
3	,	,	PUNCT	_	_	2	punct	_	WordAlignmentBegin=33664|WordAlignmentEnd=33664
4	je	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	6	nsubj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|WordAlignmentBegin=33664|WordAlignmentEnd=33899
5	me	moi	PRON	_	Case=Dat|Emph=No|Number=Sing|Person=1|PronType=Prs|Reflex=Yes	6	iobj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|WordAlignmentBegin=33899|WordAlignmentEnd=34133
6	s~	s~	X	_	ExtPos=VERB	10	reparandum	_	SpaceAfter=No|WordAlignmentBegin=34133|WordAlignmentEnd=34368
7	,	,	PUNCT	_	_	6	punct	_	WordAlignmentBegin=34368|WordAlignmentEnd=34368
8	j'	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	10	nsubj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No|WordAlignmentBegin=34368|WordAlignmentEnd=34603
9	aurais	avoir	AUX	_	Mood=Cnd|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	10	aux:tense	_	WordAlignmentBegin=34603|WordAlignmentEnd=34837
10	dû	devoir	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	Exponence[Gender]=Absent|Exponence[Number]=Absent|PastPartHasSpokenGender=NotInThisDialect|Status[Tense]=Denom|WordAlignmentBegin=34837|WordAlignmentEnd=35072
11	le	lui	PRON	_	Case=Acc|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Prs	12	obj	_	Exponence[Person]=Inherent|WordAlignmentBegin=35072|WordAlignmentEnd=35306
12	laisser	laisser	VERB	_	VerbForm=Inf	10	xcomp	_	Subject=SubjRaising|WordAlignmentBegin=35306|WordAlignmentEnd=35541
13	à	à	ADP	_	_	14	case	_	WordAlignmentBegin=35541|WordAlignmentEnd=35541
14	XXX	XXX	X	_	ExtPos=PROPN	12	obl:arg	_	SpaceAfter=No|WordAlignmentBegin=35541|WordAlignmentEnd=35775
15	,	,	PUNCT	_	_	16	punct	_	WordAlignmentBegin=35775|WordAlignmentEnd=35775
16	finalement	finalement	ADV	_	_	10	advmod	_	SpaceAfter=No|WordAlignmentBegin=35775|WordAlignmentEnd=36010
17	.	.	PUNCT	_	_	10	punct	_	WordAlignmentBegin=36010|WordAlignmentEnd=36010

~~~


