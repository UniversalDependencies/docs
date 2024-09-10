---
layout: base
title:  'Statistics of xcomp in UD_English-EWT'
udver: '2'
---

## Treebank Statistics: UD_English-EWT: Relations: `xcomp`

This relation is universal.

3824 nodes (2%) are attached to their parents as `xcomp`.

3814 instances of `xcomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.3548640167364.

The following 19 pairs of parts of speech are connected with `xcomp`: <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-VERB.html">VERB</a></tt> (2548; 67% instances), <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt> (682; 18% instances), <tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_ewt-pos-VERB.html">VERB</a></tt> (243; 6% instances), <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt> (192; 5% instances), <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt> (72; 2% instances), <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-ADV.html">ADV</a></tt> (25; 1% instances), <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-PART.html">PART</a></tt> (13; 0% instances), <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-PRON.html">PRON</a></tt> (11; 0% instances), <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-NUM.html">NUM</a></tt> (10; 0% instances), <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-AUX.html">AUX</a></tt> (8; 0% instances), <tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt> (4; 0% instances), <tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_ewt-pos-PART.html">PART</a></tt> (4; 0% instances), <tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="en_ewt-pos-AUX.html">AUX</a></tt>-<tt><a href="en_ewt-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="en_ewt-pos-SYM.html">SYM</a></tt>-<tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-SYM.html">SYM</a></tt> (2; 0% instances), <tt><a href="en_ewt-pos-AUX.html">AUX</a></tt>-<tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="en_ewt-pos-SYM.html">SYM</a></tt>-<tt><a href="en_ewt-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 13 xcomp	color:blue
1	When	when	ADV	WRB	PronType=Int	3	advmod	3:advmod	_
2	they	they	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	3	nsubj	3:nsubj	_
3	saw	see	VERB	VBD	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	11	advcl	11:advcl:when	_
4	a	a	DET	DT	Definite=Ind|PronType=Art	5	det	5:det	_
5	cartoon	cartoon	NOUN	NN	Number=Sing	3	obj	3:obj	_
6	of	of	ADP	IN	_	8	case	8:case	_
7	their	their	PRON	PRP$	Case=Gen|Number=Plur|Person=3|Poss=Yes|PronType=Prs	8	nmod:poss	8:nmod:poss	_
8	prophet	prophet	NOUN	NN	Number=Sing	5	nmod	5:nmod:of	SpaceAfter=No
9	,	,	PUNCT	,	_	3	punct	3:punct	_
10	people	people	NOUN	NNS	Number=Plur	11	nsubj	11:nsubj|13:nsubj:xsubj	_
11	had	have	VERB	VBD	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	0	root	0:root	_
12	to	to	PART	TO	_	13	mark	13:mark	_
13	die	die	VERB	VB	VerbForm=Inf	11	xcomp	11:xcomp	SpaceAfter=No
14	.	.	PUNCT	.	_	11	punct	11:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 xcomp	color:blue
1	i	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	3:nsubj	_
2	am	be	AUX	VBP	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	3	aux	3:aux	_
3	going	go	VERB	VBG	Tense=Pres|VerbForm=Part	0	root	0:root	_
4	out	out	ADV	RB	_	3	advmod	3:advmod	_
5	tonight	tonight	NOUN	NN	Number=Sing	3	obl:tmod	3:obl:tmod	_
6	to	to	PART	TO	_	8	mark	8:mark	_
7	get	get	VERB	VB	VerbForm=Inf	3	advcl	3:advcl:to	_
8	wasted	wasted	ADJ	JJ	Degree=Pos	7	xcomp	7:xcomp	_
9	if	if	SCONJ	IN	_	12	mark	12:mark	_
10	anyone	anyone	PRON	NN	Number=Sing|PronType=Ind	12	nsubj	12:nsubj	_
11	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	cop	12:cop	_
12	interested	interested	ADJ	JJ	Degree=Pos	3	advcl	3:advcl:if	SpaceAfter=No
13	.	.	PUNCT	.	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 xcomp	color:blue
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


