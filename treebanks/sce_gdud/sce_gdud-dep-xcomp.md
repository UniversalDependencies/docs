---
layout: base
title:  'Statistics of xcomp in UD_Dongxiang-GDUD'
udver: '2'
---

## Treebank Statistics: UD_Dongxiang-GDUD: Relations: `xcomp`

This relation is universal.

14 nodes (2%) are attached to their parents as `xcomp`.

9 instances of `xcomp` (64%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.85714285714286.

The following 7 pairs of parts of speech are connected with `xcomp`: <tt><a href="sce_gdud-pos-AUX.html">AUX</a></tt>-<tt><a href="sce_gdud-pos-NUM.html">NUM</a></tt> (4; 29% instances), <tt><a href="sce_gdud-pos-VERB.html">VERB</a></tt>-<tt><a href="sce_gdud-pos-VERB.html">VERB</a></tt> (4; 29% instances), <tt><a href="sce_gdud-pos-AUX.html">AUX</a></tt>-<tt><a href="sce_gdud-pos-ADJ.html">ADJ</a></tt> (2; 14% instances), <tt><a href="sce_gdud-pos-AUX.html">AUX</a></tt>-<tt><a href="sce_gdud-pos-VERB.html">VERB</a></tt> (1; 7% instances), <tt><a href="sce_gdud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sce_gdud-pos-VERB.html">VERB</a></tt> (1; 7% instances), <tt><a href="sce_gdud-pos-VERB.html">VERB</a></tt>-<tt><a href="sce_gdud-pos-ADJ.html">ADJ</a></tt> (1; 7% instances), <tt><a href="sce_gdud-pos-VERB.html">VERB</a></tt>-<tt><a href="sce_gdud-pos-NOUN.html">NOUN</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 xcomp	color:blue
1	gaga	gaga	NOUN	_	Case=Nom	6	nsubj	_	_
2	ʂini	ʂini	PRON	_	Case=Gen|Number=Sing|Person=2|PronType=Prs	1	nmod:poss	_	_
3	siʂi	siʂi	NUM	_	NumType=Card	6	xcomp	_	_
4	da	da	ADV	_	_	6	advmod	_	_
5	ulia	ulia	PART	_	Polarity=Neg	6	advmod	_	_
6	olu	olu	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
7	na	na	AUX	_	Tense=Pres	6	aux	_	SpaceAfter=No
8	,	,	PUNCT	_	_	6	punct	_	_
9	olu	olu	AUX	_	Aspect=Imp|Mood=Ind|VerbForm=Fin	6	parataxis	_	_
10	dʑi	dʑi	AUX	_	Aspect=Imp|Mood=Ind|VerbForm=Fin	9	aux	_	_
11	wo	wo	AUX	_	Mood=Int|VerbForm=Fin	9	aux	_	_
12	u	u	PART	_	Mood=Int	9	discourse	_	SpaceAfter=No
13	?	?	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 xcomp	color:blue
1	Nie	nie	NUM	_	NumType=Card	2	nummod	_	_
2	ganzi	ganzi	NOUN	_	_	4	obj	_	_
3	jiesung	jiesung	VERB	_	VerbForm=Conv	4	acl:relcl	_	_
4	wo	wo	PRON	_	PronType=Prs	5	nsubj	_	_
5	ibeizi	ibeizi	NOUN	_	_	6	obj	_	_
6	doyi-zhi	doyi-zhi	VERB	_	VerbForm=Conv	7	acl:relcl	_	_
7	siragva	siragva	VERB	_	Mood=Imp|VerbForm=Fin	0	root	_	SpaceAfter=No
8	da-ne	da-ne	VERB	_	Mood=Imp|VerbForm=Fin	7	xcomp	_	SpaceAfter=No
9	.	.	PUNCT	_	_	7	punct	_	_
10	Moran-ni	Moran	NOUN	_	Case=Gen	11	nmod	_	_
11	usu	usu	NOUN	_	_	7	parataxis	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 xcomp	color:blue
1	bi	bi	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
2	ulia	ulia	PART	_	Polarity=Neg	3	advmod	_	_
3	madʑia	madʑia	VERB	_	Tense=Pres	0	root	_	_
4	mini	mini	PRON	_	Person=1|Poss=Yes|PronType=Prs	5	nmod:poss	_	_
5	biau	biau	NOUN	_	Case=Nom	7	nsubj	_	_
6	gudula	gudula	ADJ	_	Aspect=Imp	7	xcomp	_	_
7	wo	wo	AUX	_	Mood=Ind|VerbForm=Fin	3	parataxis	_	_
8	tʂini	tʂini	PRON	_	Person=2|Poss=Yes|PronType=Prs	9	nmod:poss	_	_
9	biau	biau	NOUN	_	Case=Nom	11	nsubj	_	_
10	tanda	tanda	ADJ	_	Aspect=Imp	11	xcomp	_	_
11	wo	wo	AUX	_	Mood=Ind|VerbForm=Fin	7	conj	_	_

~~~


