---
layout: base
title:  'Statistics of aux in UD_French-Spoken'
udver: '2'
---

## Treebank Statistics: UD_French-Spoken: Relations: `aux`

This relation is universal.
There are 2 language-specific subtypes of `aux`: <tt><a href="fr_spoken-dep-aux-caus.html">aux:caus</a></tt>, <tt><a href="fr_spoken-dep-aux-pass.html">aux:pass</a></tt>.

507 nodes (1%) are attached to their parents as `aux`.

503 instances of `aux` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.55226824457594.

The following 6 pairs of parts of speech are connected with `aux`: <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-AUX.html">AUX</a></tt> (478; 94% instances), <tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_spoken-pos-AUX.html">AUX</a></tt> (12; 2% instances), <tt><a href="fr_spoken-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_spoken-pos-AUX.html">AUX</a></tt> (9; 2% instances), <tt><a href="fr_spoken-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_spoken-pos-AUX.html">AUX</a></tt> (5; 1% instances), <tt><a href="fr_spoken-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_spoken-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="fr_spoken-pos-X.html">X</a></tt>-<tt><a href="fr_spoken-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 aux	color:blue
1	je	je	PRON	_	_	2	nsubj	_	_
2	vois	voir	VERB	DISCOURSE	_	10	discourse	_	_
3	euh	euh	INTJ	_	_	2	discourse	_	_
4	moi	lui	PRON	_	_	10	dislocated	_	_
5	la	le	DET	_	_	6	det	_	_
6	fac	fac	NOUN	_	_	10	dislocated	_	_
7	ça	ça	PRON	_	_	10	nsubj	_	_
8	m'	me	PRON	_	_	10	iobj	_	_
9	a	avoir	AUX	_	_	10	aux	_	_
10	fait	faire	VERB	_	_	0	root	_	_
11	beaucoup	beaucoup	ADV	_	_	10	obj	_	_
12	de	de	ADP	_	_	13	case	_	_
13	bien	bien	NOUN	_	_	11	obl:arg	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 9 aux	color:blue
1	donc	donc	ADV	_	_	13	advmod	_	_
2	quand	quand	SCONJ	_	_	5	mark	_	_
3	je	je	PRON	_	_	5	nsubj:pass	_	_
4	suis	être	AUX	_	_	5	aux:pass	_	_
5	revenue	revenir	VERB	_	_	13	advcl	_	_
6	en	en	ADP	_	_	7	case	_	_
7	France	France	PROPN	_	_	5	obl:arg	_	_
8	ça	ça	PRON	_	_	13	nsubj	_	_
9	a	avoir	AUX	_	_	13	aux	_	_
10	été	être	AUX	_	_	13	cop	_	_
11	un	un	DET	_	_	13	det	_	_
12	grand	grand	ADJ	_	_	13	amod	_	_
13	soulagement	soulagement	NOUN	_	_	0	root	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 7 aux	color:blue
1	et	et	CCONJ	_	_	4	cc	_	_
2	euh	euh	INTJ	_	_	4	discourse	_	_
3	je	je	PRON	_	_	4	nsubj	_	_
4	pense	penser	VERB	_	_	0	root	_	_
5	que	que	SCONJ	_	_	10	mark	_	_
6	ça	ça	PRON	_	_	10	nsubj	_	_
7	a	avoir	AUX	_	_	10	aux	_	_
8	été	être	AUX	_	_	10	cop	_	_
9	très	très	ADV	_	_	10	advmod	_	_
10	bénéfique	bénéfique	ADJ	_	_	4	ccomp	_	_

~~~


