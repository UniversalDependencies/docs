---
layout: base
title:  'Statistics of obl:tmod in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `obl:tmod`

This relation is a language-specific subtype of <tt><a href="en_gum-dep-obl.html">obl</a></tt>.
There are also 2 other language-specific subtypes of `obl`: <tt><a href="en_gum-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="en_gum-dep-obl-npmod.html">obl:npmod</a></tt>.

420 nodes (0%) are attached to their parents as `obl:tmod`.

256 instances of `obl:tmod` (61%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.79761904761905.

The following 16 pairs of parts of speech are connected with `obl:tmod`: <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (266; 63% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (48; 11% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (30; 7% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (28; 7% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (23; 5% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (12; 3% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-DET.html">DET</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 obl:tmod	color:blue
1	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	2:nsubj|7:nsubj	Discourse=joint-other_m:14->2:3|Entity=(4-person-giv:act-cf1*-1-ana)
2	came	come	VERB	VBD	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	0	root	0:root	_
3	home	home	ADV	RB	Degree=Pos	2	advmod	2:advmod	_
4	last	last	ADJ	JJ	Degree=Pos	5	amod	5:amod	Entity=(7-time-giv:act-cf3-2-coref
5	night	night	NOUN	NN	Number=Sing	2	obl:tmod	2:obl:tmod	Entity=7)
6	and	and	CCONJ	CC	_	7	cc	7:cc	Discourse=joint-sequence_m:15->14:0
7	told	tell	VERB	VBD	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	2	conj	2:conj:and	_
8	you	you	PRON	PRP	Case=Acc|Number=Sing|Person=2|PronType=Prs	7	iobj	7:iobj	Entity=(12-person-giv:act-cf2-1-ana)|SpaceAfter=No
9	.	.	PUNCT	.	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 obl:tmod	color:blue
1	That	that	PRON	DT	Number=Sing|PronType=Dem	6	nsubj	6:nsubj	Discourse=context-background:74->72:0|Entity=(31-event-acc:com-cf1-1-ana)
2	was	be	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	6	cop	6:cop	_
3	a	a	DET	DT	Definite=Ind|PronType=Art	5	det	5:det	Entity=(32-time-new-cf2-3-sgl
4	long	long	ADJ	JJ	Degree=Pos	5	amod	5:amod	_
5	time	time	NOUN	NN	Number=Sing	6	obl:tmod	6:obl:tmod	Entity=32)
6	ago	ago	ADV	RB	Degree=Pos	0	root	0:root	SpaceAfter=No
7	.	.	PUNCT	.	_	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 obl:tmod	color:blue
1	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	2:nsubj	Discourse=context-background:7->6:0|Entity=(3-person-giv:act-cf1*-1-ana)
2	took	take	VERB	VBD	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	0	root	0:root	_
3	the	the	DET	DT	Definite=Def|PronType=Art	4	det	4:det	Entity=(11-abstract-new-cf2-2-coref
4	Oath	oath	NOUN	NN	Number=Sing	2	obj	2:obj	_
5	to	to	ADP	IN	_	7	case	7:case	_
6	our	our	PRON	PRP$	Number=Plur|Person=1|Poss=Yes|PronType=Prs	7	nmod:poss	7:nmod:poss	Entity=(12-abstract-new-cf3-2-coref-Constitution_of_the_United_States
7	Constitution	Constitution	PROPN	NNP	Number=Sing	4	nmod	4:nmod:to	Entity=12)11)|XML=<ref></ref>
8	at	at	ADP	IN	_	11	case	11:case	_
9	22	22	NUM	CD	NumForm=Digit|NumType=Card	10	nummod	10:nummod	Entity=(13-time-new-cf4-2-sgl
10	years	year	NOUN	NNS	Number=Plur	11	obl:tmod	11:obl:tmod	Entity=13)
11	old	old	ADJ	JJ	Degree=Pos	2	obl	2:obl:at	SpaceAfter=No
12	.	.	PUNCT	.	_	2	punct	2:punct	_

~~~


