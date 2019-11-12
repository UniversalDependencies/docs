---
layout: base
title:  'Statistics of parataxis in UD_French-Spoken'
udver: '2'
---

## Treebank Statistics: UD_French-Spoken: Relations: `parataxis`

This relation is universal.
There are 2 language-specific subtypes of `parataxis`: <tt><a href="fr_spoken-dep-parataxis-insert.html">parataxis:insert</a></tt>, <tt><a href="fr_spoken-dep-parataxis-parenth.html">parataxis:parenth</a></tt>.

43 nodes (0%) are attached to their parents as `parataxis`.

42 instances of `parataxis` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.37209302325581.

The following 6 pairs of parts of speech are connected with `parataxis`: <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (34; 79% instances), <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt> (4; 9% instances), <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-ADJ.html">ADJ</a></tt> (2; 5% instances), <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-AUX.html">AUX</a></tt> (1; 2% instances), <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-INTJ.html">INTJ</a></tt> (1; 2% instances), <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-PRON.html">PRON</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 parataxis	color:blue
1	vraiment	vraiment	ADV	_	_	5	advmod	_	_
2	la	le	DET	_	_	3	det	_	_
3	psychiatrie	psychiatrie	NOUN	_	_	5	dislocated	_	_
4	il	il	PRON	_	_	5	nsubj	_	_
5	faut	falloir	VERB	_	_	8	reparandum	_	_
6	ê~	ê~	VERB	CCOMP	_	5	parataxis	_	_
7	il	il	PRON	_	_	8	nsubj	_	_
8	faut	falloir	VERB	_	_	0	root	_	_
9	être	être	AUX	conj:reform	_	8	xcomp	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 14 parataxis	color:blue
1	vous	vous	PRON	_	_	8	nsubj	_	_
2	l'	le	PRON	_	_	8	obj	_	_
3	avez	avoir	AUX	_	_	8	aux	_	_
4	m~	m~	X	_	_	6	reparandum	_	_
5	peut-être	peut-être	ADV	_	_	6	advmod	_	_
6	mieux	mieux	ADV	_	_	8	advmod	_	_
7	euh	euh	INTJ	_	_	6	discourse	_	_
8	explicité	expliciter	VERB	_	_	0	root	_	_
9	en	en	ADP	_	_	10	mark	_	_
10	disant	dire	VERB	_	_	8	advcl	_	_
11	c'	ce	PRON	_	_	14	nsubj	_	_
12	est	être	AUX	_	_	14	cop	_	_
13	un	un	DET	_	_	14	det	_	_
14	scénario	scénario	NOUN	_	_	10	parataxis	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 parataxis	color:blue
1	tu	tu	PRON	_	_	2	nsubj	_	_
2	dis	dire	VERB	_	_	0	root	_	_
3	mais	mais	CCONJ	_	_	6	cc	_	_
4	il	il	PRON	_	_	6	nsubj	_	_
5	est	être	AUX	_	_	6	cop	_	_
6	con	con	ADJ	_	_	2	parataxis	_	_
7	ou	ou	CCONJ	_	_	8	cc	_	_
8	quoi	quoi	PRON	_	_	6	conj	_	_

~~~


