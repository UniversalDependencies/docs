---
layout: base
title:  'Statistics of obj:appl in UD_Wolof-WTB'
udver: '2'
---

## Treebank Statistics: UD_Wolof-WTB: Relations: `obj:appl`

This relation is a language-specific subtype of <tt><a href="wo_wtb-dep-obj.html">obj</a></tt>.
There are also 1 other language-specific subtypes of `obj`: <tt><a href="wo_wtb-dep-obj-caus.html">obj:caus</a></tt>.

76 nodes (0%) are attached to their parents as `obj:appl`.

46 instances of `obj:appl` (61%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.01315789473684.

The following 3 pairs of parts of speech are connected with `obj:appl`: <tt><a href="wo_wtb-pos-VERB.html">VERB</a></tt>-<tt><a href="wo_wtb-pos-PRON.html">PRON</a></tt> (47; 62% instances), <tt><a href="wo_wtb-pos-VERB.html">VERB</a></tt>-<tt><a href="wo_wtb-pos-NOUN.html">NOUN</a></tt> (24; 32% instances), <tt><a href="wo_wtb-pos-VERB.html">VERB</a></tt>-<tt><a href="wo_wtb-pos-PROPN.html">PROPN</a></tt> (5; 7% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 14 obj:appl	color:blue
1	Nee	ne	VERB	VERB	Mood=Ind|VerbForm=Fin	0	root	_	_
2	na	na	AUX	INFL	Aspect=Perf|Mood=Ind|Number=Sing|Person=3	1	aux	_	SpaceAfter=No
3	:	:	PUNCT	COLON	_	11	punct	_	_
4	nag	nag	NOUN	NOUN	_	11	dislocated	_	_
5	woowee	boobale	DET	DET	Deixis=Med|DeixisRef=2|NounClass=Wol10|Number=Sing|PronType=Dem	4	det	_	_
6	góor	góor	NOUN	NOUN	_	11	dislocated	_	_
7	gii	bii	DET	DET	Deixis=Prox|DeixisRef=1|NounClass=Wol3|Number=Sing|PronType=Dem	6	det	_	_
8	mu	mu	PRON	PRON	Case=Nom|Number=Sing|Person=3|PronType=Prs	11	nsubj	_	_
9	a	a	AUX	INFL	FocusType=Subj|Mood=Ind	11	aux	_	_
10	ko	ko	PRON	CL	Case=Acc|Number=Sing|Person=3|PronType=Prs	11	obj	_	_
11	ni	ni	VERB	VERB	Mood=Ind|VerbForm=Fin	1	ccomp	_	_
12	man	man	VERB	VERB	Mood=Ind|VerbForm=Fin	11	ccomp	_	_
13	naa	na	AUX	INFL	Aspect=Perf|Mood=Ind|Number=Sing|Person=1	12	aux	_	_
14	la	ko	PRON	CL	Case=Acc|Number=Sing|Person=2|PronType=Prs	16	obj:appl	_	_
15	ko	ko	PRON	CL	Case=Acc|Number=Sing|Person=3|PronType=Prs	16	iobj	_	_
16	jiitalal	jiital	VERB	VERB	VerbForm=Inf	12	xcomp	_	SpaceAfter=No
17	.	.	PUNCT	PERIOD	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 obj:appl	color:blue
1	Buur	buur	NOUN	NOUN	_	7	dislocated	_	_
2	bi	bi	DET	DET	Definite=Def|Deixis=Prox|NounClass=Wol5|Number=Sing|PronType=Art	1	det	_	_
3	dàkkantalu	dàkkantal	NOUN	NOUN	Case=Gen|Number=Sing	7	obj:appl	_	_
4	Tunka	Tunka	PROPN	NAME	_	3	nmod	_	_
5	la	la	AUX	INFL	FocusType=Compl|Mood=Ind|Number=Sing|Person=3	7	aux	_	_
6	daan	di	AUX	AUX	Aspect=Hab|Mood=Ind|Tense=Past	7	aux	_	_
7	yore	yor	VERB	VERB	Mood=Ind|VerbForm=Fin	0	root	_	SpaceAfter=No
8	.	.	PUNCT	PERIOD	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 obj:appl	color:blue
1	Daan	di	AUX	AUX	Aspect=Hab|Mood=Ind|Tense=Past	3	aux	_	_
2	nañu	na	AUX	INFL	Aspect=Perf|Mood=Ind|Number=Plur|Person=3	3	aux	_	_
3	tabaxal	tabaxal	VERB	VERB	Mood=Ind|VerbForm=Fin	0	root	_	_
4	seen	sama	DET	DET	Number=Sing|Person=2,3|Poss=Yes|PronType=Prs	5	det	_	_
5	Yàlla	Yàlla	PROPN	NAME	_	3	obj:appl	_	_
6	yi	bi	DET	DET	Definite=Def|Deixis=Prox|NounClass=Wol8|Number=Plur|PronType=Art	5	det	_	_
7	ay	ab	DET	DET	Definite=Ind|NounClass=Wol8|Number=Plur|PronType=Art	8	det	_	_
8	jaamuwaay	jaamuwaay	NOUN	NOUN	_	3	iobj	_	_
9	(	(	PUNCT	PAREN	_	11	punct	_	SpaceAfter=No
10	ay	ab	DET	DET	Definite=Ind|NounClass=Wol8|Number=Plur|PronType=Art	11	det	_	_
11	temple	temple	NOUN	NOUN	_	8	appos	_	SpaceAfter=No
12	)	)	PUNCT	PAREN	_	11	punct	_	_
13	ngir	ngir	ADP	PREP	_	14	mark	_	_
14	màggale	màggale	VERB	VERB	VerbForm=Inf	3	advcl	_	_
15	leen	ko	PRON	CL	Case=Acc|Number=Plur|Person=2,3|PronType=Prs	14	obj	_	_
16	ko	ko	PRON	CL	Case=Acc|Number=Sing|Person=3|PronType=Prs	14	iobj	_	SpaceAfter=No
17	.	.	PUNCT	PERIOD	_	3	punct	_	_

~~~


