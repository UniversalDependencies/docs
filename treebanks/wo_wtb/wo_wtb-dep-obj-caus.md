---
layout: base
title:  'Statistics of obj:caus in UD_Wolof-WTB'
udver: '2'
---

## Treebank Statistics: UD_Wolof-WTB: Relations: `obj:caus`

This relation is a language-specific subtype of <tt><a href="wo_wtb-dep-obj.html">obj</a></tt>.
There are also 1 other language-specific subtypes of `obj`: <tt><a href="wo_wtb-dep-obj-appl.html">obj:appl</a></tt>.

118 nodes (0%) are attached to their parents as `obj:caus`.

93 instances of `obj:caus` (79%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.51694915254237.

The following 3 pairs of parts of speech are connected with `obj:caus`: <tt><a href="wo_wtb-pos-VERB.html">VERB</a></tt>-<tt><a href="wo_wtb-pos-NOUN.html">NOUN</a></tt> (67; 57% instances), <tt><a href="wo_wtb-pos-VERB.html">VERB</a></tt>-<tt><a href="wo_wtb-pos-PRON.html">PRON</a></tt> (45; 38% instances), <tt><a href="wo_wtb-pos-VERB.html">VERB</a></tt>-<tt><a href="wo_wtb-pos-PROPN.html">PROPN</a></tt> (6; 5% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 obj:caus	color:blue
1	Yëngal	yëngu	VERB	VERB	VerbForm=Inf	4	csubj	_	_
2	sa	sama	DET	DET	Number=Sing|Person=2|Poss=Yes|PronType=Prs	3	det	_	_
3	yaram	yaram	NOUN	NOUN	_	1	obj:caus	_	_
4	lu	bu	PRON	PRON	NounClass=Wol7|Number=Sing|Person=3|PronType=Rel	0	root	_	_
5	war	war	VERB	VERB	Mood=Ind|VerbForm=Fin	4	acl:relcl	_	_
6	la	la	AUX	COP	Mood=Ind|Number=Sing|Person=3|VerbForm=Fin	4	cop	_	SpaceAfter=No
7	.	.	PUNCT	PERIOD	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 obj:caus	color:blue
1	Ñoom	moom	PRON	PRON	Number=Plur|Person=3|PronType=Prs	6	dislocated	_	_
2	nag	nag	ADV	ADV	_	6	advmod	_	_
3	ñu	mu	PRON	PRON	Number=Plur|Person=3|PronType=Prs	6	nsubj	_	_
4	ngi	ngi	AUX	AUX	Aspect=Prog	6	aux	_	_
5	leen	ko	PRON	CL	Case=Acc|Number=Plur|Person=2,3|PronType=Prs	6	obj:caus	_	_
6	taxawal	taxawal	VERB	VERB	Mood=Ind|VerbForm=Fin	0	root	_	_
7	ci	ci	ADP	PREP	_	8	case	_	_
8	xarnub	xarnu	NOUN	NOUN	Case=Gen|Number=Sing	6	obl	_	_
9	fukk	fukk	NUM	NUMBER	NumType=Card	8	nummod	_	_
10	ak	ak	CCONJ	CONJ	_	11	cc	_	_
11	ñeent	ñeent	NUM	NUMBER	NumType=Card	9	conj	_	_
12	g.j	g.j	NOUN	NOUN	_	9	nmod	_	SpaceAfter=No
13	.	.	PUNCT	PERIOD	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 obj:caus	color:blue
1	Waalo	waalo	NOUN	NOUN	_	5	nsubj	_	_
2	a	a	AUX	AUX	PronType=Prs	5	aux	_	_
3	ngi	ngi	AUX	AUX	Aspect=Prog	5	aux	_	_
4	di	di	AUX	AUX	Aspect=Imp|Mood=Ind|Tense=Pres	5	aux	_	_
5	wal-wali	wal-wali	VERB	VERB	Mood=Ind|VerbForm=Fin	0	root	_	_
6	di	di	AUX	AUX	Aspect=Imp|Mood=Ind|Tense=Pres	7	aux	_	_
7	gental	gent	VERB	VERB	Mood=Ind|VerbForm=Fin	5	conj	_	_
8	Waalo	Waalo	PROPN	NAME	_	7	obj:caus	_	SpaceAfter=No
9	.	.	PUNCT	PERIOD	_	5	punct	_	_

~~~


