---
layout: base
title:  'Statistics of aux in UD_French-Spoken'
udver: '2'
---

## Treebank Statistics: UD_French-Spoken: Relations: `aux`

This relation is universal.
There are 2 language-specific subtypes of `aux`: <tt><a href="fr_spoken-dep-aux-caus.html">aux:caus</a></tt>, <tt><a href="fr_spoken-dep-aux-pass.html">aux:pass</a></tt>.

677 nodes (2%) are attached to their parents as `aux`.

660 instances of `aux` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.40029542097489.

The following 5 pairs of parts of speech are connected with `aux`: <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (566; 84% instances), <tt><a href="fr_spoken-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (55; 8% instances), <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-AUX.html">AUX</a></tt> (53; 8% instances), <tt><a href="fr_spoken-pos-X.html">X</a></tt>-<tt><a href="fr_spoken-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="fr_spoken-pos-X.html">X</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (1; 0% instances).


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
9	a	avoir	VERB	_	_	10	aux	_	_
10	fait	faire	VERB	_	_	0	root	_	_
11	beaucoup	beaucoup	PRON	_	_	10	obj	_	_
12	de	de	ADP	_	_	13	case	_	_
13	bien	bien	NOUN	_	_	11	nmod	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 aux	color:blue
1	et	et	CCONJ	_	_	4	cc	_	_
2	euh	euh	INTJ	_	_	1	discourse	_	_
3	je	je	PRON	_	_	4	nsubj	_	_
4	pense	penser	VERB	_	_	0	root	_	_
5	que	que	SCONJ	_	_	10	mark	_	_
6	ça	ça	PRON	_	_	10	nsubj	_	_
7	a	avoir	VERB	_	_	8	aux	_	_
8	été	être	AUX	_	_	10	cop	_	_
9	très	très	ADV	_	_	10	advmod	_	_
10	bénéfique	bénéfique	ADJ	_	_	4	ccomp	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 aux	color:blue
1	il	il	PRON	_	_	4	nsubj:expl	_	_
2	il	il	PRON	conj:reform	_	1	conj:dicto	_	_
3	y	y	PRON	_	_	4	iobj	_	_
4	a	avoir	VERB	_	_	0	root	_	_
5	certains	certain	DET	_	_	6	det	_	_
6	métiers	métier	NOUN	_	_	4	obj	_	_
7	où	où	PRON	_	_	11	advmod	_	_
8	il	il	PRON	_	_	9	nsubj	_	_
9	f~	f~	X	_	_	6	dep	_	_
10	il	il	PRON	_	_	11	nsubj	_	_
11	faut	falloir	VERB	_	_	9	conj:dicto	_	_
12	être	être	AUX	DoubleAux	_	11	aux	_	_
13	né	naître	VERB	ETRE	_	11	xcomp	_	_

~~~


