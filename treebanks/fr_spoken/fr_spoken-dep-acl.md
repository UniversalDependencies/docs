---
layout: base
title:  'Statistics of acl in UD_French-Spoken'
udver: '2'
---

## Treebank Statistics: UD_French-Spoken: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="fr_spoken-dep-acl-relcl.html">acl:relcl</a></tt>.

166 nodes (0%) are attached to their parents as `acl`.

160 instances of `acl` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.84939759036145.

The following 5 pairs of parts of speech are connected with `acl`: <tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (152; 92% instances), <tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_spoken-pos-AUX.html">AUX</a></tt> (5; 3% instances), <tt><a href="fr_spoken-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (5; 3% instances), <tt><a href="fr_spoken-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (3; 2% instances), <tt><a href="fr_spoken-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 acl	color:blue
1	donc	donc	ADV	_	_	12	advmod:periph	_	_
2	la	le	DET	_	_	4	det	_	_
3	la	le	DET	conj:reform	_	2	conj:dicto	_	_
4	rencontre	rencontre	NOUN	_	_	12	dislocated	_	_
5	des	de+le	ADP	de	_	8	case	_	_
6	de	de	ADP	conj:reform	_	5	conj:dicto	_	_
7	la	le	DET	_	_	8	det	_	_
8	difficulté	difficulté	NOUN	_	_	4	nmod	_	_
9	à	à	ADP	_	_	10	mark	_	_
10	vivre	vivre	VERB	_	_	8	acl	_	_
11	c'	ce	PRON	_	_	12	nsubj	_	_
12	est	être	AUX	_	_	0	root	_	_
13	le	le	DET	_	_	12	advmod	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 acl	color:blue
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


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 acl	color:blue
1	merci	merci	NOUN	_	_	0	root	_	_
2	beaucoup	beaucoup	PRON	_	_	1	dep	_	_
3	d'	de	ADP	_	_	5	mark	_	_
4	être	être	AUX	_	_	5	aux:pass	_	_
5	venue	venir	VERB	_	_	2	acl	_	_
6	merci	merci	NOUN	_	_	1	conj:coord	_	_
7	Magalie	Magalie	PROPN	_	_	6	vocative	_	_
8	sur	sur	ADP	_	_	10	case	_	_
9	notre	son	DET	_	_	10	det	_	_
10	plateau	plateau	NOUN	_	_	5	obl:comp	_	_

~~~


