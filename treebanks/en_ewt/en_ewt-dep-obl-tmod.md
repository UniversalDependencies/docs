---
layout: base
title:  'Statistics of obl:tmod in UD_English-EWT'
udver: '2'
---

## Treebank Statistics: UD_English-EWT: Relations: `obl:tmod`

This relation is a language-specific subtype of <tt><a href="en_ewt-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="en_ewt-dep-obl-npmod.html">obl:npmod</a></tt>.

683 nodes (0%) are attached to their parents as `obl:tmod`.

553 instances of `obl:tmod` (81%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.25768667642753.

The following 20 pairs of parts of speech are connected with `obl:tmod`: <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt> (504; 74% instances), <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt> (54; 8% instances), <tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt> (42; 6% instances), <tt><a href="en_ewt-pos-ADV.html">ADV</a></tt>-<tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt> (28; 4% instances), <tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt> (18; 3% instances), <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-NUM.html">NUM</a></tt> (11; 2% instances), <tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt> (4; 1% instances), <tt><a href="en_ewt-pos-AUX.html">AUX</a></tt>-<tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="en_ewt-pos-ADV.html">ADV</a></tt>-<tt><a href="en_ewt-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_ewt-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_ewt-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="en_ewt-pos-ADV.html">ADV</a></tt>-<tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_ewt-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="en_ewt-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_ewt-pos-X.html">X</a></tt>-<tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 obl:tmod	color:blue
1	i	i	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	3:nsubj	_
2	am	be	AUX	VBP	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	3	aux	3:aux	_
3	going	go	VERB	VBG	VerbForm=Ger	0	root	0:root	_
4	out	out	ADV	RB	_	3	advmod	3:advmod	_
5	tonight	tonight	NOUN	NN	Number=Sing	3	obl:tmod	3:obl:tmod	_
6	to	to	PART	TO	_	8	mark	8:mark	_
7	get	get	AUX	VB	VerbForm=Inf	8	aux	8:aux	_
8	wasted	wasted	ADJ	JJ	Degree=Pos	3	advcl	3:advcl:to	_
9	if	if	SCONJ	IN	_	12	mark	12:mark	_
10	anyone	anyone	PRON	NN	Number=Sing	12	nsubj	12:nsubj	_
11	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	cop	12:cop	_
12	interested	interested	ADJ	JJ	Degree=Pos	3	advcl	3:advcl:if	SpaceAfter=No
13	.	.	PUNCT	.	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 obl:tmod	color:blue
1	Why	why	ADV	WRB	PronType=Int	5	advmod	5:advmod	_
2	were	be	AUX	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	5	aux:pass	5:aux:pass	_
3	they	they	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	5	nsubj:pass	5:nsubj:pass	_
4	suddenly	suddenly	ADV	RB	_	5	advmod	5:advmod	_
5	acted	act	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	0	root	0:root	_
6	on	on	ADP	IN	_	5	obl	5:obl	_
7	Saturday	Saturday	PROPN	NNP	Number=Sing	5	obl:tmod	5:obl:tmod	SpaceAfter=No
8	?	?	PUNCT	.	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 obl:tmod	color:blue
1	the	the	DET	DT	Definite=Def|PronType=Art	3	det	3:det	_
2	following	follow	VERB	VBG	VerbForm=Ger	3	amod	3:amod	_
3	weekend	weekend	NOUN	NN	Number=Sing	7	obl:tmod	7:obl:tmod	_
4	i	i	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	7	nsubj	7:nsubj|9:nsubj:xsubj	_
5	will	will	AUX	MD	VerbForm=Fin	7	aux	7:aux	_
6	be	be	AUX	VB	VerbForm=Inf	7	cop	7:cop	_
7	ready	ready	ADJ	JJ	Degree=Pos	0	root	0:root	_
8	to	to	PART	TO	_	9	mark	9:mark	_
9	rock	rock	VERB	VB	VerbForm=Inf	7	xcomp	7:xcomp	SpaceAfter=No
10	.	.	PUNCT	.	_	7	punct	7:punct	_

~~~


