---
layout: base
title:  'Statistics of obl:unmarked in UD_English-GENTLE'
udver: '2'
---

## Treebank Statistics: UD_English-GENTLE: Relations: `obl:unmarked`

This relation is a language-specific subtype of <tt><a href="en_gentle-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="en_gentle-dep-obl-agent.html">obl:agent</a></tt>.

100 nodes (1%) are attached to their parents as `obl:unmarked`.

65 instances of `obl:unmarked` (65%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.61.

The following 15 pairs of parts of speech are connected with `obl:unmarked`: <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt> (30; 30% instances), <tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt> (16; 16% instances), <tt><a href="en_gentle-pos-SYM.html">SYM</a></tt>-<tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt> (15; 15% instances), <tt><a href="en_gentle-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt> (14; 14% instances), <tt><a href="en_gentle-pos-SYM.html">SYM</a></tt>-<tt><a href="en_gentle-pos-NUM.html">NUM</a></tt> (8; 8% instances), <tt><a href="en_gentle-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt> (3; 3% instances), <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-ADJ.html">ADJ</a></tt> (3; 3% instances), <tt><a href="en_gentle-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gentle-pos-ADJ.html">ADJ</a></tt> (2; 2% instances), <tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gentle-pos-DET.html">DET</a></tt> (2; 2% instances), <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-NUM.html">NUM</a></tt> (2; 2% instances), <tt><a href="en_gentle-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gentle-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="en_gentle-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gentle-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="en_gentle-pos-AUX.html">AUX</a></tt>-<tt><a href="en_gentle-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="en_gentle-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gentle-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="en_gentle-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 obl:unmarked	color:blue
1	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	3:nsubj	Discourse=joint-list_m:84->82:1:_|Entity=(115-person-acc:com-cf1-1-sgl)|PDTB=NoRel:NoRel:_:_:382-391:392-398|XML=<hi rend:::"italic">
2	'll	will	AUX	MD	VerbForm=Fin	3	aux	3:aux	_
3	know	know	VERB	VB	VerbForm=Inf	0	root	0:root	_
4	better	well	ADV	RBR	Degree=Cmp	3	advmod	3:advmod	MSeg=bett-er
5	next	next	ADJ	JJ	Degree=Pos	6	amod	6:amod	Entity=(116-time-new-cf2-2-sgl
6	time	time	NOUN	NN	Number=Sing	3	obl:unmarked	3:obl:unmarked	Entity=116)|SpaceAfter=No
7	.	.	PUNCT	.	_	3	punct	3:punct	XML=</hi>

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 obl:unmarked	color:blue
1	Reminder	reminder	NOUN	NN	Number=Sing	0	root	0:root	Discourse=context-background:108->109:1:_
2	this	this	PRON	DT	Number=Sing|PronType=Dem	6	nsubj	6:nsubj	Entity=(4-event-giv:act-cf1*-1-ana)
3	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	6:cop	_
4	our	our	PRON	PRP$	Case=Gen|Number=Plur|Person=1|Poss=Yes|PronType=Prs	6	nmod:poss	6:nmod:poss	Entity=(4-event-giv:act-cf1*-3-coref(10-person-giv:act-cf2-1-ana)
5	final	final	ADJ	JJ	Degree=Pos	6	amod	6:amod	_
6	game	game	NOUN	NN	Number=Sing	1	parataxis	1:parataxis	Entity=4)
7	here	here	ADV	RB	PronType=Dem	6	advmod	6:advmod	Entity=(7-place-giv:inact-cf3-1-coref)
8	tonight	tonight	NOUN	NN	Number=Sing	6	obl:unmarked	6:obl:unmarked	Entity=(126-time-acc:com-cf4-1-sgl)|MSeg=to-night|SpaceAfter=No
9	.	.	PUNCT	.	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 obl:unmarked	color:blue
1	Let	let	VERB	VB	Mood=Imp|Person=2|VerbForm=Fin	0	root	0:root	Discourse=joint-list_m:4->2:1:syn-prl-2,17|PDTB=Implicit:Expansion.Conjunction:and:_:2-16:17-21
2	AC	AC	NOUN	NN	Number=Sing	1	obj	1:obj|3:nsubj:xsubj	Entity=(5-abstract-new-cf1-1-coref)
3	>	>	SYM	SYM	_	1	xcomp	1:xcomp	_
4	CB	CB	NOUN	NN	Number=Sing	3	obl:unmarked	3:obl:unmarked	Entity=(6-abstract-new-cf2-1-coref)|SpaceAfter=No
5	.	.	PUNCT	.	_	1	punct	1:punct	_

~~~


