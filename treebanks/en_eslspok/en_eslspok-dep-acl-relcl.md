---
layout: base
title:  'Statistics of acl:relcl in UD_English-ESLSpok'
udver: '2'
---

## Treebank Statistics: UD_English-ESLSpok: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="en_eslspok-dep-acl.html">acl</a></tt>.

71 nodes (0%) are attached to their parents as `acl:relcl`.

71 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.35211267605634.

The following 12 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="en_eslspok-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_eslspok-pos-VERB.html">VERB</a></tt> (47; 66% instances), <tt><a href="en_eslspok-pos-PRON.html">PRON</a></tt>-<tt><a href="en_eslspok-pos-VERB.html">VERB</a></tt> (7; 10% instances), <tt><a href="en_eslspok-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_eslspok-pos-ADJ.html">ADJ</a></tt> (3; 4% instances), <tt><a href="en_eslspok-pos-VERB.html">VERB</a></tt>-<tt><a href="en_eslspok-pos-VERB.html">VERB</a></tt> (3; 4% instances), <tt><a href="en_eslspok-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_eslspok-pos-NOUN.html">NOUN</a></tt> (2; 3% instances), <tt><a href="en_eslspok-pos-NUM.html">NUM</a></tt>-<tt><a href="en_eslspok-pos-VERB.html">VERB</a></tt> (2; 3% instances), <tt><a href="en_eslspok-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_eslspok-pos-NOUN.html">NOUN</a></tt> (2; 3% instances), <tt><a href="en_eslspok-pos-ADV.html">ADV</a></tt>-<tt><a href="en_eslspok-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="en_eslspok-pos-ADV.html">ADV</a></tt>-<tt><a href="en_eslspok-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="en_eslspok-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_eslspok-pos-ADP.html">ADP</a></tt> (1; 1% instances), <tt><a href="en_eslspok-pos-PRON.html">PRON</a></tt>-<tt><a href="en_eslspok-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="en_eslspok-pos-VERB.html">VERB</a></tt>-<tt><a href="en_eslspok-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 acl:relcl	color:blue
1	something	_	NOUN	NN	_	0	root	_	_
2	I	_	PRON	PRP	_	5	nsubj	_	_
3	ca	_	AUX	MD	_	5	aux	_	_
4	n't	_	PART	RB	_	5	advmod	_	_
5	do	_	VERB	VB	_	1	acl:relcl	_	_
6	promise	_	VERB	VB	_	5	xcomp	_	_
7	it	_	PRON	PRP	_	6	obj	_	_
8	.	_	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 acl:relcl	color:blue
1	So	_	ADV	RB	_	4	advmod	_	_
2	that	_	PRON	DT	_	4	nsubj	_	_
3	's	_	AUX	VBZ	_	4	cop	_	_
4	what	_	PRON	WP	_	0	root	_	_
5	I	_	PRON	PRP	_	6	nsubj	_	_
6	teach	_	VERB	VBP	_	4	acl:relcl	_	_
7	my	_	PRON	PRP$	_	8	nmod:poss	_	_
8	students	_	NOUN	NNS	_	6	obj	_	_
9	,	_	PUNCT	,	_	6	punct	_	_
10	too	_	ADV	RB	_	6	advmod	_	_
11	,	_	PUNCT	,	_	14	punct	_	_
12	to	_	PART	TO	_	14	mark	_	_
13	be	_	AUX	VB	_	14	cop	_	_
14	punctual	_	ADJ	JJ	_	4	parataxis	_	_
15	.	_	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 11 acl:relcl	color:blue
1	So	_	ADV	RB	_	3	advmod	_	_
2	he	_	PRON	PRP	_	3	nsubj	_	_
3	has	_	VERB	VBZ	_	0	root	_	_
4	his	_	PRON	PRP$	_	6	nmod:poss	_	_
5	own	_	ADJ	JJ	_	6	amod	_	_
6	drink	_	NOUN	NN	_	3	obj	_	_
7	,	_	PUNCT	,	_	11	punct	_	_
8	which	_	PRON	WDT	_	11	nsubj	_	_
9	is	_	AUX	VBZ	_	11	cop	_	_
10	his	_	PRON	PRP$	_	11	nmod:poss	_	_
11	usual	_	ADJ	NN	_	6	acl:relcl	_	_

~~~


