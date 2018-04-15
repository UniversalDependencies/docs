---
layout: base
title:  'Statistics of parataxis:parenth in UD_French-Spoken'
udver: '2'
---

## Treebank Statistics: UD_French-Spoken: Relations: `parataxis:parenth`

This relation is a language-specific subtype of .
There are also 3 other language-specific subtypes of `parataxis`: <tt><a href="fr_spoken-dep-parataxis-discourse.html">parataxis:discourse</a></tt>, <tt><a href="fr_spoken-dep-parataxis-insert.html">parataxis:insert</a></tt>, <tt><a href="fr_spoken-dep-parataxis-obj.html">parataxis:obj</a></tt>.

42 nodes (0%) are attached to their parents as `parataxis:parenth`.

39 instances of `parataxis:parenth` (93%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.02380952380952.

The following 16 pairs of parts of speech are connected with `parataxis:parenth`: <tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (7; 17% instances), <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (7; 17% instances), <tt><a href="fr_spoken-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (5; 12% instances), <tt><a href="fr_spoken-pos-INTJ.html">INTJ</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (4; 10% instances), <tt><a href="fr_spoken-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (4; 10% instances), <tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_spoken-pos-ADJ.html">ADJ</a></tt> (3; 7% instances), <tt><a href="fr_spoken-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_spoken-pos-ADJ.html">ADJ</a></tt> (2; 5% instances), <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt> (2; 5% instances), <tt><a href="fr_spoken-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_spoken-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="fr_spoken-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_spoken-pos-AUX.html">AUX</a></tt> (1; 2% instances), <tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_spoken-pos-AUX.html">AUX</a></tt> (1; 2% instances), <tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="fr_spoken-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="fr_spoken-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_spoken-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="fr_spoken-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_spoken-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-AUX.html">AUX</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 11 parataxis:parenth	color:blue
1	la	le	DET	_	_	2	det	_	_
2	tendance	tendance	NOUN	_	_	13	nsubj	_	_
3	dans	dans	ADP	_	_	5	case	_	_
4	les	le	DET	_	_	5	det	_	_
5	médias	média	NOUN	_	_	2	nmod	_	_
6	est	être	AUX	_	_	13	cop	_	_
7	plutôt	plutôt	ADV	_	_	13	advmod	_	_
8	vous	vous	PRON	_	_	11	nsubj	_	_
9	l'	le	PRON	_	_	11	obj	_	_
10	avez	avoir	VERB	_	_	11	aux	_	_
11	vu	voir	VERB	_	_	13	parataxis:parenth	_	_
12	du	de+le	ADP	_	_	13	case	_	_
13	côté	côté	NOUN	_	_	0	root	_	_
14	d'	d'	ADP	_	_	17	case	_	_
15	un	un	DET	_	_	17	det	_	_
16	léger	léger	ADJ	_	_	17	amod	_	_
17	assoupissement	assoupissement	NOUN	_	_	13	nmod	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 12 parataxis:parenth	color:blue
1	et	et	CCONJ	_	_	7	cc	_	_
2	à	à	ADP	_	_	1	dep	_	_
3	par	par	ADP	_	_	4	case	_	_
4	hasard	hasard	NOUN	_	_	7	obl:periph	_	_
5	je	je	PRON	_	_	7	nsubj	_	_
6	suis	être	AUX	_	_	7	aux	_	_
7	allée	aller	VERB	ETRE	_	0	root	_	_
8	en	en	ADP	_	_	9	case	_	_
9	quarante-neuf	quarante-neuf	NUM	_	_	7	nummod	_	_
10	à	à	ADP	_	_	7	dep	_	_
11	ayant	avoir	VERB	_	_	12	aux	_	_
12	fini	finir	VERB	_	_	7	parataxis:parenth	_	_
13	mon	son	DET	_	_	14	det	_	_
14	tour	tour	NOUN	_	_	12	obj	_	_
15	à	à	ADP	_	_	16	case	_	_
16	Aden	Aden	PROPN	_	_	14	nmod	_	_
17	à	à	ADP	_	_	7	obl:comp	_	_
18	ici	ici	ADV	_	_	17	conj:dicto	_	_
19	au	à+le	ADP	_	_	20	case	_	_
20	Kenya	Kenya	PROPN	_	_	18	appos:conj	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 parataxis:parenth	color:blue
1	ensuite	ensuite	ADV	_	_	12	advmod:periph	_	_
2	euh	euh	INTJ	_	_	1	discourse	_	_
3	disons	dire	VERB	_	_	1	parataxis:parenth	_	_
4	les	le	DET	_	_	5	det	_	_
5	mots	mots	NOUN	_	_	3	obj	_	_
6	comme	comme	SCONJ	_	_	8	mark	_	_
7	ils	il	PRON	_	_	8	nsubj	_	_
8	sont	être	AUX	_	_	5	acl	_	_
9	vous	vous	PRON	_	_	12	nsubj:pass	_	_
10	avez	avoir	VERB	_	_	12	aux	_	_
11	été	être	AUX	DoubleAux	_	12	aux:pass	_	_
12	ruinée	ruiner	VERB	DoubleAux	_	0	root	_	_

~~~


