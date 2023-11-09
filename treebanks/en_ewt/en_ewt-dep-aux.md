---
layout: base
title:  'Statistics of aux in UD_English-EWT'
udver: '2'
---

## Treebank Statistics: UD_English-EWT: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="en_ewt-dep-aux-pass.html">aux:pass</a></tt>.

8067 nodes (3%) are attached to their parents as `aux`.

8034 instances of `aux` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.72083798190157.

The following 11 pairs of parts of speech are connected with `aux`: <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-AUX.html">AUX</a></tt> (7256; 90% instances), <tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_ewt-pos-AUX.html">AUX</a></tt> (403; 5% instances), <tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ewt-pos-AUX.html">AUX</a></tt> (244; 3% instances), <tt><a href="en_ewt-pos-ADV.html">ADV</a></tt>-<tt><a href="en_ewt-pos-AUX.html">AUX</a></tt> (49; 1% instances), <tt><a href="en_ewt-pos-AUX.html">AUX</a></tt>-<tt><a href="en_ewt-pos-AUX.html">AUX</a></tt> (38; 0% instances), <tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_ewt-pos-AUX.html">AUX</a></tt> (30; 0% instances), <tt><a href="en_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="en_ewt-pos-AUX.html">AUX</a></tt> (27; 0% instances), <tt><a href="en_ewt-pos-NUM.html">NUM</a></tt>-<tt><a href="en_ewt-pos-AUX.html">AUX</a></tt> (10; 0% instances), <tt><a href="en_ewt-pos-ADP.html">ADP</a></tt>-<tt><a href="en_ewt-pos-AUX.html">AUX</a></tt> (7; 0% instances), <tt><a href="en_ewt-pos-DET.html">DET</a></tt>-<tt><a href="en_ewt-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="en_ewt-pos-SYM.html">SYM</a></tt>-<tt><a href="en_ewt-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 aux	color:blue
1	We	we	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	3	nsubj	3:nsubj	_
2	've	have	AUX	VBP	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	3	aux	3:aux	_
3	moved	move	VERB	VBN	Tense=Past|VerbForm=Part	0	root	0:root	_
4	on	on	ADV	RB	_	3	advmod	3:advmod	SpaceAfter=No
5	.	.	PUNCT	.	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 aux	color:blue
1	the	the	DET	DT	Definite=Def|PronType=Art	3	det	3:det	_
2	following	follow	VERB	VBG	VerbForm=Ger	3	amod	3:amod	_
3	weekend	weekend	NOUN	NN	Number=Sing	7	obl:tmod	7:obl:tmod	_
4	i	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	7	nsubj	7:nsubj|9:nsubj:xsubj	_
5	will	will	AUX	MD	VerbForm=Fin	7	aux	7:aux	_
6	be	be	AUX	VB	VerbForm=Inf	7	cop	7:cop	_
7	ready	ready	ADJ	JJ	Degree=Pos	0	root	0:root	_
8	to	to	PART	TO	_	9	mark	9:mark	_
9	rock	rock	VERB	VB	VerbForm=Inf	7	xcomp	7:xcomp	SpaceAfter=No
10	.	.	PUNCT	.	_	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 6 aux	color:blue
1	It	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	expl	3:expl	_
2	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	3:cop	_
3	true	true	ADJ	JJ	Degree=Pos	0	root	0:root	_
4	that	that	SCONJ	IN	_	10	mark	10:mark	_
5	Google	Google	PROPN	NNP	Number=Sing	10	nsubj	10:nsubj	_
6	has	have	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	aux	10:aux	_
7	been	be	AUX	VBN	Tense=Past|VerbForm=Part	10	cop	10:cop	_
8	in	in	ADP	IN	_	10	case	10:case	_
9	acquisition	acquisition	NOUN	NN	Number=Sing	10	compound	10:compound	_
10	mode	mode	NOUN	NN	Number=Sing	3	csubj	3:csubj	SpaceAfter=No
11	.	.	PUNCT	.	_	3	punct	3:punct	_

~~~


