---
layout: base
title:  'Statistics of expl:comp in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `expl:comp`

This relation is a language-specific subtype of .
There are also 2 other language-specific subtypes of `expl`: <tt><a href="fr_rhapsodie-dep-expl-pass.html">expl:pass</a></tt>, <tt><a href="fr_rhapsodie-dep-expl-subj.html">expl:subj</a></tt>.

293 nodes (1%) are attached to their parents as `expl:comp`.

292 instances of `expl:comp` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.11945392491468.

The following 1 pairs of parts of speech are connected with `expl:comp`: <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (293; 100% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 expl:comp	color:blue
1	il	lui	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	reparandum	_	AlignBegin=243922|AlignEnd=244017|SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	AlignBegin=244017|AlignEnd=244017
3	il	lui	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	expl:subj	_	AlignBegin=244017|AlignEnd=244057
4	y	y	PRON	_	Person=3|PronType=Prs	5	expl:comp	_	AlignBegin=244057|AlignEnd=244187
5	a	avoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	AlignBegin=244187|AlignEnd=244217
6	certains	certain	DET	_	Gender=Masc|Number=Plur|PronType=Ind	7	det	_	AlignBegin=244217|AlignEnd=244597
7	métiers	métier	NOUN	_	_	5	obj	_	AlignBegin=244597|AlignEnd=244957|Gender[lex]=Masc|Number[ctxt]=Plur
8	où	où	PRON	_	PronType=Rel	10	obl:mod	_	AlignBegin=244957|AlignEnd=245067
9	il	lui	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Prs	10	nsubj	_	AlignBegin=245067|AlignEnd=245187
10	f~	f~	X	_	ExtPos=VERB	13	reparandum	_	AlignBegin=245187|AlignEnd=245327|SpaceAfter=No
11	,	,	PUNCT	_	_	10	punct	_	AlignBegin=245327|AlignEnd=245327
12	il	lui	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Prs	13	expl:subj	_	AlignBegin=245327|AlignEnd=245407
13	faut	falloir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	acl:relcl	_	AlignBegin=245407|AlignEnd=245567
14	être	être	AUX	_	VerbForm=Inf	15	aux:tense	_	AlignBegin=245567|AlignEnd=245797|Subject=NoRaising
15	né	naître	VERB	_	VerbForm=Part|Voice=Act	13	ccomp	_	AlignBegin=245797|AlignEnd=246137|Gender[ctxt]=Masc|Number[ctxt]=Sing|SpaceAfter=No|Tense[denom]=Past
16	.	.	PUNCT	_	_	5	punct	_	AlignBegin=246137|AlignEnd=246137

~~~


