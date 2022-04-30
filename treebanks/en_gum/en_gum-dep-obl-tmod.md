---
layout: base
title:  'Statistics of obl:tmod in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `obl:tmod`

This relation is a language-specific subtype of <tt><a href="en_gum-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="en_gum-dep-obl-npmod.html">obl:npmod</a></tt>.

333 nodes (0%) are attached to their parents as `obl:tmod`.

195 instances of `obl:tmod` (59%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.71171171171171.

The following 17 pairs of parts of speech are connected with `obl:tmod`: <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (193; 58% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (39; 12% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (31; 9% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (23; 7% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (15; 5% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (12; 4% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-ADV.html">ADV</a></tt> (8; 2% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-DET.html">DET</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 obl:tmod	color:blue
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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 obl:tmod	color:blue
1	That	that	PRON	DT	Number=Sing|PronType=Dem	6	nsubj	6:nsubj	Discourse=background:74->72:0|Entity=(event-31-acc:com-1-ana)
2	was	be	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	6	cop	6:cop	_
3	a	a	DET	DT	Definite=Ind|PronType=Art	5	det	5:det	Entity=(time-32-new-3-sgl
4	long	long	ADJ	JJ	Degree=Pos	5	amod	5:amod	_
5	time	time	NOUN	NN	Number=Sing	6	obl:tmod	6:obl:tmod	Entity=32)
6	ago	ago	ADV	RB	Degree=Pos	0	root	0:root	SpaceAfter=No
7	.	.	PUNCT	.	_	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 obl:tmod	color:blue
1	Born	bear	VERB	VBN	Tense=Past|VerbForm=Part	0	root	0:root	Discourse=preparation:5->6:2|SpaceAfter=No
2	:	:	PUNCT	:	_	4	punct	4:punct	_
3	June	June	PROPN	NNP	Number=Sing	4	compound	4:compound	Discourse=joint_m:6->3:1|Entity=(time-4-new-2-coref|XML=<date when:::"1988-06-11">
4	11	11	NUM	CD	NumForm=Digit|NumType=Card	1	obl:tmod	1:obl:tmod	SpaceAfter=No
5	,	,	PUNCT	,	_	6	punct	6:punct	_
6	1988	1988	NUM	CD	NumForm=Digit|NumType=Card	4	nmod:tmod	4:nmod:tmod	Entity=(time-5-new-1-coref)4)|XML=</date>
7	(	(	PUNCT	-LRB-	_	9	punct	9:punct	Discourse=elaboration:7->6:0|SpaceAfter=No
8	age	age	NOUN	NN	Number=Sing	9	nsubj	9:nsubj	Entity=(abstract-6-new-2-sgl
9	30	30	NUM	CD	NumForm=Digit|NumType=Card	1	parataxis	1:parataxis	Entity=6)|SpaceAfter=No
10	)	)	PUNCT	-RRB-	_	9	punct	9:punct	_

~~~


