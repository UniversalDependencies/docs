---
layout: base
title:  'Statistics of nmod:npmod in UD_English-EWT'
udver: '2'
---

## Treebank Statistics: UD_English-EWT: Relations: `nmod:npmod`

This relation is a language-specific subtype of <tt><a href="en_ewt-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="en_ewt-dep-nmod-poss.html">nmod:poss</a></tt>, <tt><a href="en_ewt-dep-nmod-tmod.html">nmod:tmod</a></tt>.

167 nodes (0%) are attached to their parents as `nmod:npmod`.

115 instances of `nmod:npmod` (69%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.69461077844311.

The following 23 pairs of parts of speech are connected with `nmod:npmod`: <tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt> (68; 41% instances), <tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ewt-pos-PRON.html">PRON</a></tt> (21; 13% instances), <tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt> (19; 11% instances), <tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt> (8; 5% instances), <tt><a href="en_ewt-pos-NUM.html">NUM</a></tt>-<tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt> (7; 4% instances), <tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt> (5; 3% instances), <tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ewt-pos-SYM.html">SYM</a></tt> (5; 3% instances), <tt><a href="en_ewt-pos-NUM.html">NUM</a></tt>-<tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt> (5; 3% instances), <tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_ewt-pos-PRON.html">PRON</a></tt> (5; 3% instances), <tt><a href="en_ewt-pos-SYM.html">SYM</a></tt>-<tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt> (4; 2% instances), <tt><a href="en_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="en_ewt-pos-PRON.html">PRON</a></tt> (3; 2% instances), <tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_ewt-pos-NUM.html">NUM</a></tt> (3; 2% instances), <tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ewt-pos-DET.html">DET</a></tt> (2; 1% instances), <tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ewt-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="en_ewt-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="en_ewt-pos-SYM.html">SYM</a></tt> (1; 1% instances), <tt><a href="en_ewt-pos-DET.html">DET</a></tt>-<tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="en_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="en_ewt-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="en_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="en_ewt-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_ewt-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_ewt-pos-SYM.html">SYM</a></tt> (1; 1% instances), <tt><a href="en_ewt-pos-SYM.html">SYM</a></tt>-<tt><a href="en_ewt-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="en_ewt-pos-X.html">X</a></tt>-<tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 nmod:npmod	color:blue
1	We	we	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	2	nsubj	2:nsubj	_
2	go	go	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	0:root	_
3	over	over	ADV	RB	_	2	advmod	2:advmod	_
4	about	about	ADV	RB	_	5	advmod	5:advmod	_
5	5	5	NUM	CD	NumType=Card	6	nummod	6:nummod	_
6	times	time	NOUN	NNS	Number=Plur	2	obl:tmod	2:obl:tmod	_
7	a	a	DET	DT	Definite=Ind|PronType=Art	8	det	8:det	_
8	year	year	NOUN	NN	Number=Sing	6	nmod:npmod	6:nmod:npmod	SpaceAfter=No
9	.	.	PUNCT	.	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 nmod:npmod	color:blue
1	The	the	DET	DT	Definite=Def|PronType=Art	2	det	2:det	_
2	test	test	NOUN	NN	Number=Sing	5	nsubj	5:nsubj	_
3	itself	itself	PRON	PRP	Gender=Neut|Number=Sing|Person=3|PronType=Prs	2	nmod:npmod	2:nmod:npmod	_
4	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	5:cop	_
5	what	what	PRON	WP	PronType=Int	0	root	0:root	_
6	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	aux:pass	7:aux:pass	_
7	called	call	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	5	acl:relcl	5:acl:relcl	_
8	a	a	DET	DT	Definite=Ind|PronType=Art	10	det	10:det	_
9	substitution	substitution	NOUN	NN	Number=Sing	10	compound	10:compound	_
10	test	test	NOUN	NN	Number=Sing	7	xcomp	7:xcomp	SpaceAfter=No
11	.	.	PUNCT	.	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 nmod:npmod	color:blue
1	Steven	Steven	PROPN	NNP	Number=Sing	0	root	0:root	_
2	Vikash	Vikash	PROPN	NNP	Number=Sing	1	flat	1:flat	_
3	Chand	Chand	PROPN	NNP	Number=Sing	1	flat	1:flat	_
4	alias	alias	NOUN	NN	Number=Sing	1	acl	1:acl	_
5	Abdul	Abdul	PROPN	NNP	Number=Sing	4	nmod:npmod	4:nmod:npmod	_
6	Shakur	Shakur	PROPN	NNP	Number=Sing	5	flat	5:flat	SpaceAfter=No
7	,	,	PUNCT	,	_	1	punct	1:punct	_
8	25	25	NUM	CD	NumType=Card	1	list	1:list	SpaceAfter=No
9	,	,	PUNCT	,	_	1	punct	1:punct	_
10	Toronto	Toronto	PROPN	NNP	Number=Sing	1	list	1:list	SpaceAfter=No
11	;	;	PUNCT	,	_	1	punct	1:punct	_

~~~


