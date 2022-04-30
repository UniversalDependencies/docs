---
layout: base
title:  'Statistics of iobj in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `iobj`

This relation is universal.

154 nodes (0%) are attached to their parents as `iobj`.

153 instances of `iobj` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.28571428571429.

The following 5 pairs of parts of speech are connected with `iobj`: <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (104; 68% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (37; 24% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (11; 7% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-DET.html">DET</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 iobj	color:blue
1	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	2:nsubj|7:nsubj	Discourse=joint_m:14->2:3|Entity=(person-4-giv:act-1-ana)
2	came	come	VERB	VBD	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	0	root	0:root	_
3	home	home	ADV	RB	Degree=Pos	2	advmod	2:advmod	_
4	last	last	ADJ	JJ	Degree=Pos	5	amod	5:amod	Entity=(time-7-giv:act-2-coref
5	night	night	NOUN	NN	Number=Sing	2	obl:tmod	2:obl:tmod	Entity=7)
6	and	and	CCONJ	CC	_	7	cc	7:cc	Discourse=sequence_m:15->14:0
7	told	tell	VERB	VBD	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	2	conj	2:conj:and	_
8	you	you	PRON	PRP	Case=Acc|Number=Sing|Person=2|PronType=Prs	7	iobj	7:iobj	Entity=(person-12-giv:act-1-ana)|SpaceAfter=No
9	.	.	PUNCT	.	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 iobj	color:blue
1	Is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	4:cop	Discourse=question:130->138:1
2	n't	not	PART	RB	Polarity=Neg	4	advmod	4:advmod	_
3	that	that	PRON	DT	Number=Sing|PronType=Dem	4	nsubj	4:nsubj	Entity=(plant-49-giv:inact-1-ana)
4	what	what	PRON	WP	PronType=Rel	0	root	0:root	Entity=(plant-58-new-1-coref
5	you	you	PRON	PRP	Case=Nom|Number=Sing|Person=2|PronType=Prs	6	nsubj	6:nsubj	Entity=(person-48-giv:act-1-ana)
6	gave	give	VERB	VBD	Mood=Ind|Number=Sing|Person=2|Tense=Past|VerbForm=Fin	4	acl:relcl	4:acl:relcl	_
7	the	the	DET	DT	Definite=Def|PronType=Art	8	det	8:det	Entity=(person-59-new-2-coref
8	neighbor	neighbor	NOUN	NN	Number=Sing	6	iobj	6:iobj	Entity=59)
9	one	one	NUM	CD	NumForm=Word|NumType=Card	10	nummod	10:nummod	Entity=(time-60-new-2-sgl
10	time	time	NOUN	NN	Number=Sing	6	obl:tmod	6:obl:tmod	Entity=60)58)|SpaceAfter=No
11	?	?	PUNCT	.	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 iobj	color:blue
1	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	4	nsubj	4:nsubj|6:nsubj:xsubj	Discourse=evaluation:79->69:4|Entity=(person-6-giv:inact-1-ana)
2	ca	can	AUX	MD	VerbForm=Fin	4	aux	4:aux	_
3	n’t	not	PART	RB	Polarity=Neg	4	advmod	4:advmod	_
4	wait	wait	VERB	VB	VerbForm=Inf	0	root	0:root	_
5	to	to	PART	TO	_	6	mark	6:mark	_
6	show	show	VERB	VB	VerbForm=Inf	4	xcomp	4:xcomp	_
7	Toph	Toph	PROPN	NNP	Number=Sing	6	iobj	6:iobj	Entity=(person-42-new-1-coref)
8	and	and	CCONJ	CC	_	9	cc	9:cc	_
9	Len	Len	PROPN	NNP	Number=Sing	7	conj	6:iobj|7:conj:and	Entity=(person-43-new-1-coref)|SpaceAfter=No
10	.	.	PUNCT	.	_	4	punct	4:punct	_

~~~


