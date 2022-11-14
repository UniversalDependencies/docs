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
1	et	et	CCONJ	_	_	8	cc	_	AlignBegin=60484|AlignEnd=60615
2	donc	donc	ADV	_	_	8	advmod	_	AlignBegin=60615|AlignEnd=60745|SpaceAfter=No
3	,	,	PUNCT	_	_	2	punct	_	AlignBegin=60745|AlignEnd=60745
4	je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	8	nsubj:caus	_	AlignBegin=61067|AlignEnd=61234
5	le	le	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	8	obj:agent	_	AlignBegin=61234|AlignEnd=61402
6	fais	faire	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	8	aux:caus	_	AlignBegin=61402|AlignEnd=61569
7	même	même	ADV	_	_	8	advmod	_	AlignBegin=61569|AlignEnd=61737
8	rentrer	rentrer	VERB	_	VerbForm=Inf	0	root	_	AlignBegin=61737|AlignEnd=61904|Subject=ObjRaising
9	dans	dans	ADP	_	_	11	case	_	AlignBegin=61904|AlignEnd=62071
10	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	11	det	_	AlignBegin=62071|AlignEnd=62239
11	maison	maison	NOUN	_	Gender=Fem|Number=Sing	8	obl:arg	_	AlignBegin=62239|AlignEnd=62406|SpaceAfter=No
12	.	.	PUNCT	_	_	8	punct	_	AlignBegin=62406|AlignEnd=62406

~~~


