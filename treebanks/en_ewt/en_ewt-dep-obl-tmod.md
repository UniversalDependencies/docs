---
layout: base
title:  'Statistics of obl:tmod in UD_English-EWT'
udver: '2'
---

## Treebank Statistics: UD_English-EWT: Relations: `obl:tmod`

This relation is a language-specific subtype of <tt><a href="en_ewt-dep-obl.html">obl</a></tt>.
There are also 2 other language-specific subtypes of `obl`: <tt><a href="en_ewt-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="en_ewt-dep-obl-npmod.html">obl:npmod</a></tt>.

693 nodes (0%) are attached to their parents as `obl:tmod`.

557 instances of `obl:tmod` (80%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.3030303030303.

The following 16 pairs of parts of speech are connected with `obl:tmod`: <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt> (507; 73% instances), <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt> (51; 7% instances), <tt><a href="en_ewt-pos-ADV.html">ADV</a></tt>-<tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt> (46; 7% instances), <tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt> (43; 6% instances), <tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt> (19; 3% instances), <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-NUM.html">NUM</a></tt> (7; 1% instances), <tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt> (4; 1% instances), <tt><a href="en_ewt-pos-AUX.html">AUX</a></tt>-<tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_ewt-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="en_ewt-pos-ADV.html">ADV</a></tt>-<tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_ewt-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="en_ewt-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 obl:tmod	color:blue
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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 obl:tmod	color:blue
1	Why	why	ADV	WRB	PronType=Int	5	advmod	5:advmod	_
2	were	be	AUX	VBD	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	5	aux:pass	5:aux:pass	_
3	they	they	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	5	nsubj:pass	5:nsubj:pass	_
4	suddenly	suddenly	ADV	RB	_	5	advmod	5:advmod	_
5	acted	act	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	0	root	0:root	_
6	on	on	ADP	IN	_	5	obl	5:obl	Promoted=Yes
7	Saturday	Saturday	PROPN	NNP	Number=Sing	5	obl:tmod	5:obl:tmod	SpaceAfter=No
8	?	?	PUNCT	.	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 obl:tmod	color:blue
1	Visit	visit	VERB	VB	Mood=Imp|VerbForm=Fin	0	root	0:root	_
2	people	people	NOUN	NNS	Number=Plur	1	obj	1:obj	_
3	only	only	ADV	RB	_	4	advmod	4:advmod	_
4	once	once	ADV	RB	NumForm=Word|NumType=Mult	1	advmod	1:advmod	_
5	a	a	DET	DT	Definite=Ind|PronType=Art	6	det	6:det	_
6	year	year	NOUN	NN	Number=Sing	4	obl:tmod	4:obl:tmod	SpaceAfter=No
7	.	.	PUNCT	.	_	1	punct	1:punct	_

~~~


