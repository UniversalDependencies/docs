---
layout: base
title:  'Statistics of obl:npmod in UD_English-LittlePrince'
udver: '2'
---

## Treebank Statistics: UD_English-LittlePrince: Relations: `obl:npmod`

This relation is a language-specific subtype of <tt><a href="en_littleprince-dep-obl.html">obl</a></tt>.
There are also 3 other language-specific subtypes of `obl`: <tt><a href="en_littleprince-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="en_littleprince-dep-obl-tmod.html">obl:tmod</a></tt>, <tt><a href="en_littleprince-dep-obl-unmarked.html">obl:unmarked</a></tt>.

3 nodes (0%) are attached to their parents as `obl:npmod`.

3 instances of `obl:npmod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `obl:npmod`: <tt><a href="en_littleprince-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_littleprince-pos-ADJ.html">ADJ</a></tt> (2; 67% instances), <tt><a href="en_littleprince-pos-ADV.html">ADV</a></tt>-<tt><a href="en_littleprince-pos-ADJ.html">ADJ</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 obl:npmod	color:blue
1	That	that	PRON	DT	Number=Sing|PronType=Dem	2	nsubj	_	_
2	made	make	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
3	me	I	PRON	PRP	Case=Acc|Number=Sing|Person=1|PronType=Prs	2	obj	_	_
4	a	a	DET	DT	Definite=Ind|PronType=Art	5	det	_	_
5	little	little	ADJ	JJ	Degree=Pos	6	obl:npmod	_	_
6	ashamed	ashamed	ADJ	JJ	Degree=Pos	3	amod	_	_
7	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 obl:npmod	color:blue
1	And	and	CCONJ	CC	_	6	cc	_	_
2	a	a	DET	DT	Definite=Ind|PronType=Art	3	det	_	_
3	little	little	ADJ	JJ	Degree=Pos	4	obl:npmod	_	_
4	later	late	ADV	RBR	Degree=Cmp	6	advmod	_	_
5	you	you	PRON	PRP	Case=Nom|Person=2|PronType=Prs	6	nsubj	_	_
6	added	add	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
7	:	:	PUNCT	:	_	10	punct	_	_
8	"	"	PUNCT	``	_	10	punct	_	_
9	You	you	PRON	PRP	Case=Nom|Person=2|PronType=Prs	10	nsubj	_	_
10	know	know	VERB	VBP	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	6	ccomp	_	_
11	--	--	PUNCT	,	_	13	punct	_	_
12	one	one	PRON	PRP	_	13	nsubj	_	_
13	loves	love	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	ccomp	_	_
14	the	the	DET	DT	Definite=Def|PronType=Art	15	det	_	_
15	sunset	sunset	NOUN	NN	Number=Sing	13	obj	_	_
16	,	,	PUNCT	,	_	13	punct	_	_
17	when	when	SCONJ	WRB	_	21	mark	_	_
18	one	one	PRON	PRP	_	21	nsubj	_	_
19	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	21	cop	_	_
20	so	so	ADV	RB	_	21	advmod	_	_
21	sad	sad	ADJ	JJ	Degree=Pos	13	advcl	_	_
22	...	...	PUNCT	.	_	10	punct	_	_
23	"	"	PUNCT	''	_	10	punct	_	_

~~~


