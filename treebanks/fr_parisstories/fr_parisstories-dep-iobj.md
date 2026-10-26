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
8	fait	faire	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	0	root	_	Exponence[Number]=Absent|PastPartHasSpokenGender=Yes|Tense[denom]=Past
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
1	mais	mais	CCONJ	_	_	6	cc	_	AlignBegin=33195|AlignEnd=33430
2	euh	euh	INTJ	_	_	6	discourse	_	AlignBegin=33430|AlignEnd=33664|SpaceAfter=No
3	,	,	PUNCT	_	_	2	punct	_	AlignBegin=33664|AlignEnd=33664
4	je	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	6	nsubj	_	AlignBegin=33664|AlignEnd=33899|Exponence[Number]=Inherent|Exponence[Person]=Inherent
5	me	moi	PRON	_	Case=Dat|Emph=No|Number=Sing|Person=1|PronType=Prs|Reflex=Yes	6	iobj	_	AlignBegin=33899|AlignEnd=34133|Exponence[Number]=Inherent|Exponence[Person]=Inherent
6	s~	s~	X	_	ExtPos=VERB	10	reparandum	_	AlignBegin=34133|AlignEnd=34368|SpaceAfter=No
7	,	,	PUNCT	_	_	6	punct	_	AlignBegin=34368|AlignEnd=34368
8	j'	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	10	nsubj	_	AlignBegin=34368|AlignEnd=34603|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No
9	aurais	avoir	AUX	_	Mood=Cnd|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	10	aux:tense	_	AlignBegin=34603|AlignEnd=34837
10	dû	devoir	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	0	root	_	AlignBegin=34837|AlignEnd=35072|Exponence[Gender]=Absent|Exponence[Number]=Absent|PastPartHasSpokenGender=NotInThisDialect|Tense[denom]=Past
11	le	lui	PRON	_	Case=Acc|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Prs	12	obj	_	AlignBegin=35072|AlignEnd=35306|Exponence[Person]=Inherent
12	laisser	laisser	VERB	_	VerbForm=Inf	10	xcomp	_	AlignBegin=35306|AlignEnd=35541|Subject=SubjRaising
13	à	à	ADP	_	_	14	case	_	AlignBegin=35541|AlignEnd=35541
14	XXX	XXX	X	_	ExtPos=PROPN	12	obl:arg	_	AlignBegin=35541|AlignEnd=35775|SpaceAfter=No
15	,	,	PUNCT	_	_	16	punct	_	AlignBegin=35775|AlignEnd=35775
16	finalement	finalement	ADV	_	_	10	advmod	_	AlignBegin=35775|AlignEnd=36010|SpaceAfter=No
17	.	.	PUNCT	_	_	10	punct	_	AlignBegin=36010|AlignEnd=36010

~~~


