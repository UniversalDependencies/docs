---
layout: base
title:  'Statistics of obl:tmod in UD_English-GENTLE'
udver: '2'
---

## Treebank Statistics: UD_English-GENTLE: Relations: `obl:tmod`

This relation is a language-specific subtype of <tt><a href="en_gentle-dep-obl.html">obl</a></tt>.
There are also 2 other language-specific subtypes of `obl`: <tt><a href="en_gentle-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="en_gentle-dep-obl-npmod.html">obl:npmod</a></tt>.

40 nodes (0%) are attached to their parents as `obl:tmod`.

27 instances of `obl:tmod` (68%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.425.

The following 7 pairs of parts of speech are connected with `obl:tmod`: <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt> (20; 50% instances), <tt><a href="en_gentle-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt> (8; 20% instances), <tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt> (6; 15% instances), <tt><a href="en_gentle-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt> (2; 5% instances), <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-ADJ.html">ADJ</a></tt> (2; 5% instances), <tt><a href="en_gentle-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gentle-pos-PROPN.html">PROPN</a></tt> (1; 3% instances), <tt><a href="en_gentle-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 obl:tmod	color:blue
1	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	3:nsubj	Discourse=joint-list_m:84->82:1|Entity=(115-person-acc:com-cf1-1-sgl)|XML=<hi rend:::"italic">
2	'll	will	AUX	MD	VerbForm=Fin	3	aux	3:aux	_
3	know	know	VERB	VB	VerbForm=Inf	0	root	0:root	_
4	better	well	ADV	RBR	Degree=Cmp	3	advmod	3:advmod	_
5	next	next	ADJ	JJ	Degree=Pos	6	amod	6:amod	Entity=(116-time-new-cf2-2-sgl
6	time	time	NOUN	NN	Number=Sing	3	obl:tmod	3:obl:tmod	Entity=116)|SpaceAfter=No
7	.	.	PUNCT	.	_	3	punct	3:punct	XML=</hi>

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 obl:tmod	color:blue
1	2.	2.	X	LS	_	2	dep	2:dep	Discourse=joint-list_m:33->32:0
2	Metformin	Metformin	PROPN	NNP	Number=Sing	0	root	0:root	Entity=(40-substance-new-cf1-1-sgl-Metformin)
3	1000	1000	NUM	CD	NumForm=Digit|NumType=Card	4	nummod	4:nummod	Entity=(41-substance-new-cf2-2-sgl
4	mg	milligram	NOUN	NNS	Number=Plur	2	orphan	2:orphan	Entity=41)
5	twice	twice	ADV	RB	NumForm=Word|NumType=Mult	4	advmod	4:advmod	_
6	a	a	DET	DT	Definite=Ind|PronType=Art	7	det	7:det	Entity=(42-time-new-cf3-2-coref
7	day	day	NOUN	NN	Number=Sing	5	obl:tmod	5:obl:tmod	Entity=42)|SpaceAfter=No
8	.	.	PUNCT	.	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 obl:tmod	color:blue
1	Reminder	reminder	NOUN	NN	Number=Sing	0	root	0:root	Discourse=context-background:108->109:1
2	this	this	PRON	DT	Number=Sing|PronType=Dem	6	nsubj	6:nsubj	Entity=(4-event-giv:act-cf1*-1-ana)
3	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	6:cop	_
4	our	our	PRON	PRP$	Case=Gen|Number=Plur|Person=1|Poss=Yes|PronType=Prs	6	nmod:poss	6:nmod:poss	Entity=(4-event-giv:act-cf1*-3-coref(10-person-giv:act-cf2-1-ana)
5	final	final	ADJ	JJ	Degree=Pos	6	amod	6:amod	_
6	game	game	NOUN	NN	Number=Sing	1	parataxis	1:parataxis	Entity=4)
7	here	here	ADV	RB	PronType=Dem	6	advmod	6:advmod	Entity=(7-place-giv:inact-cf3-1-coref)
8	tonight	tonight	NOUN	NN	Number=Sing	6	obl:tmod	6:obl:tmod	Entity=(124-time-acc:com-cf4-1-sgl)|SpaceAfter=No
9	.	.	PUNCT	.	_	1	punct	1:punct	_

~~~


