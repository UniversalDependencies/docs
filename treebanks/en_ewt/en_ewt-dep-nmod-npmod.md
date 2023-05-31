---
layout: base
title:  'Statistics of nmod:npmod in UD_English-EWT'
udver: '2'
---

## Treebank Statistics: UD_English-EWT: Relations: `nmod:npmod`

This relation is a language-specific subtype of <tt><a href="en_ewt-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="en_ewt-dep-nmod-poss.html">nmod:poss</a></tt>, <tt><a href="en_ewt-dep-nmod-tmod.html">nmod:tmod</a></tt>.

143 nodes (0%) are attached to their parents as `nmod:npmod`.

91 instances of `nmod:npmod` (64%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.58041958041958.

The following 23 pairs of parts of speech are connected with `nmod:npmod`: <tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt> (49; 34% instances), <tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ewt-pos-PRON.html">PRON</a></tt> (21; 15% instances), <tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt> (18; 13% instances), <tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt> (8; 6% instances), <tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_ewt-pos-PRON.html">PRON</a></tt> (6; 4% instances), <tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ewt-pos-SYM.html">SYM</a></tt> (5; 3% instances), <tt><a href="en_ewt-pos-NUM.html">NUM</a></tt>-<tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt> (5; 3% instances), <tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt> (4; 3% instances), <tt><a href="en_ewt-pos-NUM.html">NUM</a></tt>-<tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt> (4; 3% instances), <tt><a href="en_ewt-pos-SYM.html">SYM</a></tt>-<tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt> (4; 3% instances), <tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_ewt-pos-NUM.html">NUM</a></tt> (3; 2% instances), <tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ewt-pos-DET.html">DET</a></tt> (2; 1% instances), <tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ewt-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="en_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="en_ewt-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="en_ewt-pos-ADV.html">ADV</a></tt>-<tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="en_ewt-pos-ADV.html">ADV</a></tt>-<tt><a href="en_ewt-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="en_ewt-pos-DET.html">DET</a></tt>-<tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="en_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="en_ewt-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_ewt-pos-SYM.html">SYM</a></tt> (1; 1% instances), <tt><a href="en_ewt-pos-SYM.html">SYM</a></tt>-<tt><a href="en_ewt-pos-DET.html">DET</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 nmod:npmod	color:blue
1	Thanks	thanks	NOUN	NN	Number=Sing	0	root	0:root	_
2	a	a	DET	DT	Definite=Ind|PronType=Art	3	det	3:det	_
3	lot	lot	NOUN	NN	Number=Sing	1	nmod:npmod	1:nmod:npmod	SpaceAfter=No
4	.	.	PUNCT	.	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 nmod:npmod	color:blue
1	The	the	DET	DT	Definite=Def|PronType=Art	2	det	2:det	_
2	test	test	NOUN	NN	Number=Sing	5	nsubj	5:nsubj	_
3	itself	itself	PRON	PRP	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Emp|Reflex=Yes	2	nmod:npmod	2:nmod:npmod	_
4	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	5:cop	_
5	what	what	PRON	WP	PronType=Rel	0	root	0:root|7:nsubj:pass|10:nsubj:xsubj	_
6	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	aux:pass	7:aux:pass	_
7	called	call	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	5	acl:relcl	5:acl:relcl	_
8	a	a	DET	DT	Definite=Ind|PronType=Art	10	det	10:det	_
9	substitution	substitution	NOUN	NN	Number=Sing	10	compound	10:compound	_
10	test	test	NOUN	NN	Number=Sing	7	xcomp	7:xcomp	SpaceAfter=No
11	.	.	PUNCT	.	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 nmod:npmod	color:blue
1	surprise	surprise	NOUN	NN	Number=Sing	5	compound	5:compound	_
2	romantic	romantic	ADJ	JJ	Degree=Pos	5	amod	5:amod	_
3	cheap	cheap	ADJ	JJ	Degree=Pos	4	amod	4:amod	_
4	date	date	NOUN	NN	Number=Sing	5	compound	5:compound	_
5	night	night	NOUN	NN	Number=Sing	0	root	0:root	_
6	san	San	PROPN	NNP	Number=Sing	5	nmod:npmod	5:nmod:npmod	_
7	francisco	Francisco	PROPN	NNP	Number=Sing	6	flat	6:flat	SpaceAfter=No
8	?	?	PUNCT	.	_	5	punct	5:punct	_

~~~


