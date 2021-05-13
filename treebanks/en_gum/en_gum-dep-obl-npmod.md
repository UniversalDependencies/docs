---
layout: base
title:  'Statistics of obl:npmod in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `obl:npmod`

This relation is a language-specific subtype of <tt><a href="en_gum-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="en_gum-dep-obl-tmod.html">obl:tmod</a></tt>.

187 nodes (0%) are attached to their parents as `obl:npmod`.

127 instances of `obl:npmod` (68%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.04812834224599.

The following 23 pairs of parts of speech are connected with `obl:npmod`: <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (61; 33% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (30; 16% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (19; 10% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (19; 10% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (12; 6% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (11; 6% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (7; 4% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (4; 2% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (3; 2% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (3; 2% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-SYM.html">SYM</a></tt> (1; 1% instances), <tt><a href="en_gum-pos-AUX.html">AUX</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="en_gum-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gum-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="en_gum-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="en_gum-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 obl:npmod	color:blue
1	Well	well	INTJ	UH	_	4	discourse	4:discourse	Discourse=background:25->17|SpaceAfter=No
2	,	,	PUNCT	,	_	1	punct	1:punct	_
3	he	he	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	nsubj	4:nsubj	Entity=(person-12)
4	came	come	VERB	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	0:root	_
5	over	over	ADP	RP	_	4	compound:prt	4:compound:prt	_
6	to	to	ADP	IN	_	7	case	7:case	_
7	you	you	PRON	PRP	Case=Acc|Number=Sing|Person=2|PronType=Prs	4	obl	4:obl:to	Entity=(person-6)
8	all	all	ADV	RB	Degree=Pos	9	advmod	9:advmod	_
9	smiles	smile	NOUN	NNS	Number=Plur	4	obl:npmod	4:obl:npmod	Entity=(abstract-14)|SpaceAfter=No
10	,	,	PUNCT	,	_	12	punct	12:punct	_
11	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	12	nsubj	12:nsubj	Discourse=attribution:26->25|Entity=(person-11)
12	noticed	notice	VERB	VBD	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	4	parataxis	4:parataxis	SpaceAfter=No
13	.	.	PUNCT	.	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 obl:npmod	color:blue
1	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	3:nsubj	Discourse=background:130->134|Entity=(person-4)
2	was	be	AUX	VBD	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	3	cop	3:cop	_
3	tired	tired	ADJ	JJ	Degree=Pos	0	root	0:root	_
4	this	this	DET	DT	Number=Sing|PronType=Dem	5	det	5:det	Entity=(time-24
5	morning	morning	NOUN	NN	Number=Sing	3	obl:npmod	3:obl:npmod	Entity=time-24)|SpaceAfter=No
6	.	.	PUNCT	.	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 obl:npmod	color:blue
1	Pete	Pete	PROPN	NNP	Number=Sing	2	nsubj	2:nsubj	Discourse=evaluation:39->32|Entity=(person-25)
2	looked	look	VERB	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	0:root	_
3	at	at	ADP	IN	_	4	case	4:case	_
4	me	I	PRON	PRP	Case=Acc|Number=Sing|Person=1|PronType=Prs	2	obl	2:obl:at	Entity=(person-6)
5	sort	sort	NOUN	NN	Number=Sing	7	obl:npmod	7:obl:npmod	_
6	of	of	ADP	IN	_	5	fixed	5:fixed	_
7	sideways	sideways	ADV	RB	Degree=Pos	2	advmod	2:advmod	SpaceAfter=No
8	.	.	PUNCT	.	_	2	punct	2:punct	_

~~~


