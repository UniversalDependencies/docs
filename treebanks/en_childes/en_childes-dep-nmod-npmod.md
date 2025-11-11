---
layout: base
title:  'Statistics of nmod:npmod in UD_English-CHILDES'
udver: '2'
---

## Treebank Statistics: UD_English-CHILDES: Relations: `nmod:npmod`

This relation is a language-specific subtype of <tt><a href="en_childes-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="en_childes-dep-nmod-poss.html">nmod:poss</a></tt>, <tt><a href="en_childes-dep-nmod-unmarked.html">nmod:unmarked</a></tt>.

15 nodes (0%) are attached to their parents as `nmod:npmod`.

14 instances of `nmod:npmod` (93%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.66666666666667.

The following 7 pairs of parts of speech are connected with `nmod:npmod`: <tt><a href="en_childes-pos-VERB.html">VERB</a></tt>-<tt><a href="en_childes-pos-NOUN.html">NOUN</a></tt> (8; 53% instances), <tt><a href="en_childes-pos-VERB.html">VERB</a></tt>-<tt><a href="en_childes-pos-ADJ.html">ADJ</a></tt> (2; 13% instances), <tt><a href="en_childes-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_childes-pos-NOUN.html">NOUN</a></tt> (1; 7% instances), <tt><a href="en_childes-pos-AUX.html">AUX</a></tt>-<tt><a href="en_childes-pos-NOUN.html">NOUN</a></tt> (1; 7% instances), <tt><a href="en_childes-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_childes-pos-ADV.html">ADV</a></tt> (1; 7% instances), <tt><a href="en_childes-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_childes-pos-NUM.html">NUM</a></tt> (1; 7% instances), <tt><a href="en_childes-pos-VERB.html">VERB</a></tt>-<tt><a href="en_childes-pos-PRON.html">PRON</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 nmod:npmod	color:blue
1	Let	let	VERB	VB	_	0	root	0:root	_
2	's	us	PRON	PRP	_	1	obj	1:obj|3:nsubj:xsubj	_
3	cool	cool	VERB	VB	_	1	xcomp	1:xcomp	_
4	that	that	DET	DT	_	5	det	5:det	_
5	time	time	NOUN	NN	_	3	nmod:npmod	3:nmod:npmod	SpaceAfter=No
6	?	?	PUNCT	.	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 nmod:npmod	color:blue
1	He	he	PRON	PRP	_	2	nsubj	2:nsubj	_
2	thinks	think	VERB	VBZ	_	0	root	0:root	_
3	he	he	PRON	PRP	_	5	nsubj	5:nsubj	_
4	's	be	AUX	VBZ	_	5	aux	5:aux	_
5	grown	grow	VERB	VBN	_	2	ccomp	2:ccomp	_
6	a	a	DET	DT	_	7	det	7:det	_
7	little	little	ADJ	JJ	_	5	nmod:npmod	5:nmod:npmod	SpaceAfter=No
8	.	.	PUNCT	.	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nmod:npmod	color:blue
1	Oh	oh	INTJ	UH	_	4	discourse	4:discourse	_
2	a	a	DET	DT	_	3	det	3:det	_
3	bit	bit	NOUN	NN	_	4	nmod:npmod	4:nmod:npmod	_
4	more	more	ADJ	JJR	_	0	root	0:root	SpaceAfter=No
5	.	.	PUNCT	.	_	4	punct	4:punct	_

~~~


