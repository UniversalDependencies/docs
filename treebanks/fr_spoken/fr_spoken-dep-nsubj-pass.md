---
layout: base
title:  'Statistics of nsubj:pass in UD_French-Spoken'
udver: '2'
---

## Treebank Statistics: UD_French-Spoken: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="fr_spoken-dep-nsubj.html">nsubj</a></tt>.
There are also 2 other language-specific subtypes of `nsubj`: <tt><a href="fr_spoken-dep-nsubj-caus.html">nsubj:caus</a></tt>, <tt><a href="fr_spoken-dep-nsubj-expl.html">nsubj:expl</a></tt>.

160 nodes (0%) are attached to their parents as `nsubj:pass`.

159 instances of `nsubj:pass` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.39375.

The following 3 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-PRON.html">PRON</a></tt> (121; 76% instances), <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt> (38; 24% instances), <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 nsubj:pass	color:blue
1	et	et	CCONJ	_	_	5	cc	_	_
2	on	on	PRON	_	_	5	nsubj:pass	_	_
3	sera	être	AUX	_	_	5	aux:pass	_	_
4	pas	pas	PART	_	_	5	advmod	_	_
5	payé	payer	VERB	_	_	0	root	_	_
6	en	en	ADP	_	_	5	advcl:periph	_	_
7	plus	plus	PART	_	_	6	dep	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 nsubj:pass	color:blue
1	la	le	DET	_	_	2	det	_	_
2	réunion	réunion	NOUN	_	_	5	nsubj:pass	_	_
3	est	être	AUX	_	_	5	aux:pass	_	_
4	savamment	savamment	ADV	_	_	5	advmod	_	_
5	minutée	minuter	VERB	_	_	0	root	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 nsubj:pass	color:blue
1	et	et	CCONJ	_	_	6	cc	_	_
2	euh	euh	INTJ	_	_	6	discourse	_	_
3	Charlot	Charlot	PROPN	_	_	6	nsubj:pass	_	_
4	s'	se	PRON	_	_	6	dep:obj	_	_
5	est	être	AUX	_	_	6	aux:pass	_	_
6	accusé	accuser	VERB	_	_	0	root	_	_
7	plutôt	plutôt	ADV	_	_	6	advmod	_	_
8	que	que	SCONJ	_	_	7	fixed	_	_
9	de	de	ADP	_	_	10	mark	_	_
10	laisser	laisser	VERB	_	_	7	advcl	_	_
11	la	le	DET	_	_	13	det	_	_
12	jeune	jeune	ADJ	_	_	13	amod	_	_
13	fille	fille	NOUN	_	_	10	obj	_	_
14	s'	se	PRON	_	_	15	dep:obj	_	_
15	accuser	accuser	VERB	_	_	10	xcomp	_	_

~~~


