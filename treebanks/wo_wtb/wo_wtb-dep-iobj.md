---
layout: base
title:  'Statistics of iobj in UD_Wolof-WTB'
udver: '2'
---

## Treebank Statistics: UD_Wolof-WTB: Relations: `iobj`

This relation is universal.
There are 1 language-specific subtypes of `iobj`: <tt><a href="wo_wtb-dep-iobj-appl.html">iobj:appl</a></tt>.

298 nodes (1%) are attached to their parents as `iobj`.

243 instances of `iobj` (82%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.52348993288591.

The following 4 pairs of parts of speech are connected with `iobj`: <tt><a href="wo_wtb-pos-VERB.html">VERB</a></tt>-<tt><a href="wo_wtb-pos-NOUN.html">NOUN</a></tt> (170; 57% instances), <tt><a href="wo_wtb-pos-VERB.html">VERB</a></tt>-<tt><a href="wo_wtb-pos-PRON.html">PRON</a></tt> (76; 26% instances), <tt><a href="wo_wtb-pos-VERB.html">VERB</a></tt>-<tt><a href="wo_wtb-pos-PROPN.html">PROPN</a></tt> (51; 17% instances), <tt><a href="wo_wtb-pos-VERB.html">VERB</a></tt>-<tt><a href="wo_wtb-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 iobj	color:blue
1	Ndaw	ndaw	NOUN	NOUN	_	0	root	0:root	_
2	lu	bu	PRON	PRON	NounClass=Wol7|Number=Sing|Person=3|PronType=Rel	4	obj	4:obj	_
3	mu	mu	PRON	PRON	Case=Nom|Number=Sing|Person=3|PronType=Prs	4	nsubj	4:nsubj	_
4	jox	jox	VERB	VERB	Mood=Ind|VerbForm=Fin	1	acl:relcl	1:acl:relcl	_
5	Bataaxal	bataaxal	NOUN	NOUN	_	4	iobj	4:iobj	_
6	bu	bu	PRON	PRON	NounClass=Wol5|Number=Sing|Person=3|PronType=Rel	7	nsubj	7:nsubj	_
7	ñeel	ñeel	VERB	VERB	Mood=Ind|VerbForm=Fin	5	acl:relcl	5:acl:relcl	_
8	nit	nit	NOUN	NOUN	_	7	obj	7:obj	_
9	ak	ak	CCONJ	CONJ	_	10	cc	10:cc	_
10	jinne	jinne	NOUN	NOUN	_	8	conj	8:conj	SpaceAfter=No
11	.	.	PUNCT	PERIOD	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 15 iobj	color:blue
1	Nee	ne	VERB	VERB	Mood=Ind|VerbForm=Fin	0	root	0:root	_
2	na	na	AUX	INFL	Aspect=Perf|Mood=Ind|Number=Sing|Person=3	1	aux	1:aux	SpaceAfter=No
3	:	:	PUNCT	COLON	_	11	punct	11:punct	_
4	nag	nag	NOUN	NOUN	_	11	dislocated	11:dislocated	_
5	woowee	boobale	DET	DET	Deixis=Med|DeixisRef=2|NounClass=Wol10|Number=Sing|PronType=Dem	4	det	4:det	_
6	góor	góor	NOUN	NOUN	_	11	dislocated	11:dislocated	_
7	gii	bii	DET	DET	Deixis=Prox|DeixisRef=1|NounClass=Wol3|Number=Sing|PronType=Dem	6	det	6:det	_
8	mu	mu	PRON	PRON	Case=Nom|Number=Sing|Person=3|PronType=Prs	11	nsubj	11:nsubj	_
9	a	a	AUX	INFL	FocusType=Subj|Mood=Ind	11	aux	11:aux	_
10	ko	ko	PRON	CL	Case=Acc|Number=Sing|Person=3|PronType=Prs	11	obj	11:obj	_
11	ni	ni	VERB	VERB	Mood=Ind|VerbForm=Fin	1	ccomp	1:ccomp	_
12	man	man	VERB	VERB	Mood=Ind|VerbForm=Fin	11	ccomp	11:ccomp	_
13	naa	na	AUX	INFL	Aspect=Perf|Mood=Ind|Number=Sing|Person=1	12	aux	12:aux	_
14	la	ko	PRON	CL	Case=Acc|Number=Sing|Person=2|PronType=Prs	16	obj:appl	16:obj:appl	_
15	ko	ko	PRON	CL	Case=Acc|Number=Sing|Person=3|PronType=Prs	16	iobj	16:iobj	_
16	jiitalal	jiital	VERB	VERB	VerbForm=Inf	12	xcomp	12:xcomp	SpaceAfter=No
17	.	.	PUNCT	PERIOD	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 11 iobj	color:blue
1	Te	te	CCONJ	CONJ	_	16	cc	16:cc	_
2	buur	buur	NOUN	NOUN	_	16	dislocated	16:dislocated	_
3	ba	ba	PRON	PRON	Definite=Def|Deixis=Remt|NounClass=Wol5|Number=Sing|Person=3|PronType=Rel	6	obj	6:obj	_
4	ñu	mu	PRON	PRON	Case=Nom|Number=Plur|Person=3|PronType=Prs	6	nsubj	6:nsubj	_
5	daan	di	AUX	AUX	Aspect=Hab|Mood=Ind|Tense=Past	6	aux	6:aux	_
6	taan	taan	VERB	VERB	Mood=Ind|VerbForm=Fin	2	acl:relcl	2:acl:relcl	_
7	ci	ci	ADP	PREP	_	8	case	8:case	_
8	ñoom	moom	PRON	PRON	Number=Plur|Person=3|PronType=Prs	6	obl	6:obl	SpaceAfter=No
9	,	,	PUNCT	COMMA	_	16	punct	16:punct	_
10	"	"	PUNCT	QUOTE	_	11	punct	11:punct	SpaceAfter=No
11	Téeñ	Téeñ	PROPN	NAME	_	16	iobj	16:iobj	SpaceAfter=No
12	"	"	PUNCT	QUOTE	_	11	punct	11:punct	_
13	lañu	la	AUX	INFL	FocusType=Compl|Mood=Ind|Number=Plur|Person=3	16	aux	16:aux	_
14	ko	ko	PRON	CL	Case=Acc|Number=Sing|Person=3|PronType=Prs	16	obj	16:obj	_
15	daan	di	AUX	AUX	Aspect=Hab|Mood=Ind|Tense=Past	16	aux	16:aux	_
16	tudde	tudde	VERB	VERB	Mood=Ind|VerbForm=Fin	0	root	0:root	SpaceAfter=No
17	.	.	PUNCT	PERIOD	_	16	punct	16:punct	_

~~~


