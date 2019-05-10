---
layout: base
title:  'Statistics of aux in UD_French-Spoken'
udver: '2'
---

## Treebank Statistics: UD_French-Spoken: Relations: `aux`

This relation is universal.
There are 2 language-specific subtypes of `aux`: <tt><a href="fr_spoken-dep-aux-caus.html">aux:caus</a></tt>, <tt><a href="fr_spoken-dep-aux-pass.html">aux:pass</a></tt>.

671 nodes (2%) are attached to their parents as `aux`.

663 instances of `aux` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.54545454545455.

The following 7 pairs of parts of speech are connected with `aux`: <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-AUX.html">AUX</a></tt> (616; 92% instances), <tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_spoken-pos-AUX.html">AUX</a></tt> (24; 4% instances), <tt><a href="fr_spoken-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_spoken-pos-AUX.html">AUX</a></tt> (13; 2% instances), <tt><a href="fr_spoken-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_spoken-pos-AUX.html">AUX</a></tt> (10; 1% instances), <tt><a href="fr_spoken-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_spoken-pos-AUX.html">AUX</a></tt> (3; 0% instances), <tt><a href="fr_spoken-pos-X.html">X</a></tt>-<tt><a href="fr_spoken-pos-AUX.html">AUX</a></tt> (3; 0% instances), <tt><a href="fr_spoken-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_spoken-pos-AUX.html">AUX</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 aux	color:blue
1	je	je	PRON	_	_	2	nsubj	_	_
2	vois	voir	VERB	DISCOURSE	_	10	parataxis:discourse	_	_
3	euh	euh	INTJ	_	_	2	discourse	_	_
4	moi	lui	PRON	_	_	10	dislocated	_	_
5	la	le	DET	_	_	6	det	_	_
6	fac	fac	NOUN	_	_	10	dislocated	_	_
7	ça	ça	PRON	_	_	10	nsubj	_	_
8	m'	me	PRON	_	_	10	iobj	_	_
9	a	avoir	AUX	_	_	10	aux	_	_
10	fait	faire	VERB	_	_	0	root	_	_
11	beaucoup	beaucoup	PRON	_	_	10	obj	_	_
12	de	de	ADP	_	_	13	case	_	_
13	bien	bien	NOUN	_	_	11	nmod	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 aux	color:blue
1	vous	vous	PRON	_	_	4	nsubj	_	_
2	allez	aller	AUX	ETRE	_	4	aux	_	_
3	être	être	AUX	_	_	4	cop	_	_
4	médecin	médecin	NOUN	_	_	0	root	_	_
5	en	en	ADP	_	_	6	case	_	_
6	France	France	PROPN	_	_	4	nmod	_	_
7	en	en	ADP	_	_	8	case	_	_
8	hôpital	hôpital	NOUN	_	_	4	nmod	_	_

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


