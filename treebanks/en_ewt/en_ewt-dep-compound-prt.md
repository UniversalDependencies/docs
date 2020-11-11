---
layout: base
title:  'Statistics of compound:prt in UD_English-EWT'
udver: '2'
---

## Treebank Statistics: UD_English-EWT: Relations: `compound:prt`

This relation is a language-specific subtype of <tt><a href="en_ewt-dep-compound.html">compound</a></tt>.

910 nodes (0%) are attached to their parents as `compound:prt`.

910 instances of `compound:prt` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.33296703296703.

The following 5 pairs of parts of speech are connected with `compound:prt`: <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-ADP.html">ADP</a></tt> (888; 98% instances), <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-ADV.html">ADV</a></tt> (18; 2% instances), <tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_ewt-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="en_ewt-pos-ADV.html">ADV</a></tt>-<tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 compound:prt	color:blue
1	We	we	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	3	nsubj	3:nsubj	_
2	've	have	AUX	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	3	aux	3:aux	_
3	grown	grow	VERB	VBN	Tense=Past|VerbForm=Part	0	root	0:root	_
4	up	up	ADP	RP	_	3	compound:prt	3:compound:prt	SpaceAfter=No
5	.	.	PUNCT	.	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 compound:prt	color:blue
1	Jacques	Jacques	PROPN	NNP	Number=Sing	3	nsubj	3:nsubj|5:nsubj:xsubj	_
2	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	3:cop	_
3	ready	ready	ADJ	JJ	Degree=Pos	0	root	0:root	_
4	to	to	PART	TO	_	5	mark	5:mark	_
5	drop	drop	VERB	VB	VerbForm=Inf	3	xcomp	3:xcomp	_
6	in	in	ADV	RP	_	5	compound:prt	5:compound:prt	_
7	a	a	DET	DT	Definite=Ind|PronType=Art	9	det	9:det	_
8	dollar	dollar	NOUN	NN	Number=Sing	9	compound	9:compound	_
9	amount	amount	NOUN	NN	Number=Sing	5	obj	5:obj	_
10	on	on	ADP	IN	_	12	case	12:case	_
11	the	the	DET	DT	Definite=Def|PronType=Art	12	det	12:det	_
12	release	release	NOUN	NN	Number=Sing	5	obl	5:obl:on	SpaceAfter=No
13	.	.	PUNCT	.	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 compound:prt	color:blue
1	Run	run	VERB	VB	Mood=Imp|VerbForm=Fin	0	root	0:root	_
2	for	for	ADP	IN	_	4	case	4:case	_
3	the	the	DET	DT	Definite=Def|PronType=Art	4	det	4:det	_
4	hills	hill	NOUN	NNS	Number=Plur	1	obl	1:obl:for	_
5	...	...	PUNCT	,	_	1	punct	1:punct	_
6	you	you	PRON	PRP	Case=Nom|Person=2|PronType=Prs	10	nsubj	10:nsubj	_
7	'll	will	AUX	MD	VerbForm=Fin	10	aux	10:aux	_
8	be	be	AUX	VB	VerbForm=Inf	10	cop	10:cop	_
9	much	much	ADV	RB	_	10	advmod	10:advmod	_
10	better	better	ADJ	JJR	Degree=Cmp	1	parataxis	1:parataxis	_
11	off	off	ADP	RP	_	10	compound:prt	10:compound:prt	SpaceAfter=No
12	!	!	PUNCT	.	_	1	punct	1:punct	_

~~~


