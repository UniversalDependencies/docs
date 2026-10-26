---
layout: base
title:  'Statistics of nsubj:pass in UD_English-CHILDES'
udver: '2'
---

## Treebank Statistics: UD_English-CHILDES: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="en_childes-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="en_childes-dep-nsubj-outer.html">nsubj:outer</a></tt>.

264 nodes (0%) are attached to their parents as `nsubj:pass`.

263 instances of `nsubj:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.34090909090909.

The following 9 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="en_childes-pos-VERB.html">VERB</a></tt>-<tt><a href="en_childes-pos-PRON.html">PRON</a></tt> (183; 69% instances), <tt><a href="en_childes-pos-VERB.html">VERB</a></tt>-<tt><a href="en_childes-pos-NOUN.html">NOUN</a></tt> (58; 22% instances), <tt><a href="en_childes-pos-VERB.html">VERB</a></tt>-<tt><a href="en_childes-pos-PROPN.html">PROPN</a></tt> (10; 4% instances), <tt><a href="en_childes-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_childes-pos-PRON.html">PRON</a></tt> (5; 2% instances), <tt><a href="en_childes-pos-VERB.html">VERB</a></tt>-<tt><a href="en_childes-pos-DET.html">DET</a></tt> (3; 1% instances), <tt><a href="en_childes-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_childes-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="en_childes-pos-AUX.html">AUX</a></tt>-<tt><a href="en_childes-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="en_childes-pos-AUX.html">AUX</a></tt>-<tt><a href="en_childes-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="en_childes-pos-VERB.html">VERB</a></tt>-<tt><a href="en_childes-pos-INTJ.html">INTJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nsubj:pass	color:blue
1	If	if	SCONJ	IN	_	4	mark	4:mark	_
2	it	it	PRON	PRP	_	4	nsubj:pass	4:nsubj:pass	_
3	gets	get	AUX	VBZ	_	4	aux:pass	4:aux:pass	_
4	broken	break	VERB	VBN	_	9	advcl	9:advcl:if	_
5	a	a	DET	DT	_	6	det	6:det	_
6	little	little	ADJ	JJ	_	4	obl:npmod	4:obl:npmod	_
7	she	she	PRON	PRP	_	9	nsubj	9:nsubj	_
8	will	will	AUX	MD	_	9	aux	9:aux	_
9	break	break	VERB	VB	_	0	root	0:root	_
10	it	it	PRON	PRP	_	9	obj	9:obj	_
11	a	a	DET	DT	_	12	det	12:det	_
12	lot	lot	NOUN	NN	_	9	obl:npmod	9:obl:npmod	SpaceAfter=No
13	.	.	PUNCT	.	_	9	punct	9:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj:pass	color:blue
1	Leopard	leopard	NOUN	NN	_	3	nsubj:pass	3:nsubj:pass|4:nsubj:xsubj|5:nsubj:xsubj|6:nsubj:xsubj|7:nsubj:xsubj|8:nsubj:xsubj|9:nsubj:xsubj|10:nsubj:xsubj	_
2	's	be	AUX	POS	_	3	aux:pass	3:aux:pass	_
3	spelled	spell	VERB	VBN	_	0	root	0:root	_
4	l	l	X	,	_	3	xcomp	3:xcomp	_
5	e	e	X	NN	_	4	conj	3:xcomp|4:conj	_
6	o	o	X	IN	_	4	conj	3:xcomp|4:conj	_
7	p	p	X	NN	_	4	conj	3:xcomp|4:conj	_
8	a	a	X	NN	_	4	conj	3:xcomp|4:conj	_
9	r	r	X	NN	_	4	conj	3:xcomp|4:conj	_
10	d	d	X	.	_	4	conj	3:xcomp|4:conj	SpaceAfter=No
11	.	.	PUNCT	.	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 10 nsubj:pass	color:blue
1	And	and	CCONJ	CC	_	7	cc	7:cc	_
2	it	it	PRON	PRP	_	7	nsubj	7:nsubj	_
3	should	should	AUX	MD	_	7	aux	7:aux	_
4	be	be	AUX	VB	_	7	cop	7:cop	_
5	three	three	NUM	CD	_	6	nummod	6:nummod	_
6	years	year	NOUN	NNS	_	7	obl:npmod	7:obl:npmod	_
7	ago	ago	ADV	RB	_	0	root	0:root	_
8	today	today	NOUN	NN	_	7	obl:unmarked	7:obl:unmarked	_
9	that	that	SCONJ	IN	_	12	mark	12:mark	_
10	Laura	Laura	PROPN	NNP	_	12	nsubj:pass	12:nsubj:pass	_
11	was	be	AUX	VBD	_	12	aux:pass	12:aux:pass	_
12	born	bear	VERB	VBN	_	7	ccomp	7:ccomp	SpaceAfter=No
13	.	.	PUNCT	.	_	7	punct	7:punct	_

~~~


