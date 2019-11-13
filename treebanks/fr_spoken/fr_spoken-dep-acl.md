---
layout: base
title:  'Statistics of acl in UD_French-Spoken'
udver: '2'
---

## Treebank Statistics: UD_French-Spoken: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="fr_spoken-dep-acl-relcl.html">acl:relcl</a></tt>.

109 nodes (0%) are attached to their parents as `acl`.

109 instances of `acl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.55963302752294.

The following 8 pairs of parts of speech are connected with `acl`: <tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (99; 91% instances), <tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt> (3; 3% instances), <tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_spoken-pos-AUX.html">AUX</a></tt> (2; 2% instances), <tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_spoken-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_spoken-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="fr_spoken-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_spoken-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="fr_spoken-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_spoken-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="fr_spoken-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 acl	color:blue
1	donc	donc	ADV	_	_	13	advmod	_	_
2	la	le	DET	_	_	3	reparandum	_	_
3	la	le	DET	conj:reform	_	4	det	_	_
4	rencontre	rencontre	NOUN	_	_	13	dislocated	_	_
5	de	de	ADP	de	_	6	dep	_	_
6	les	le	DET	_	_	7	reparandum	_	_
7	de	de	ADP	conj:reform	_	9	case	_	_
8	la	le	DET	_	_	9	det	_	_
9	difficulté	difficulté	NOUN	_	_	4	nmod	_	_
10	à	à	ADP	_	_	11	mark	_	_
11	vivre	vivre	VERB	_	_	9	acl	_	_
12	c'	ce	PRON	_	_	13	nsubj	_	_
13	est	être	AUX	_	_	0	root	_	_
14	le	le	DET	_	_	13	dep	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 14 acl	color:blue
1	oui	oui	INTJ	_	_	5	discourse	_	_
2	mais	mais	CCONJ	_	_	5	cc	_	_
3	ça	ça	PRON	_	_	5	nsubj	_	_
4	le	le	PRON	_	_	5	obj	_	_
5	déguise	déguiser	VERB	_	_	0	root	_	_
6	pas	pas	ADV	_	_	5	advmod	_	_
7	de	de	ADP	_	_	9	case	_	_
8	le	le	DET	_	_	9	det	_	_
9	fait	fait	NOUN	_	_	5	obl:mod	_	_
10	que	que	SCONJ	_	_	14	mark	_	_
11	c'	ce	PRON	_	_	14	nsubj	_	_
12	est	être	AUX	_	_	14	cop	_	_
13	un	un	DET	_	_	14	det	_	_
14	fauteuil	fauteuil	NOUN	_	_	9	acl	_	_
15	qui	qui	PRON	_	_	16	nsubj	_	_
16	a	avoir	VERB	_	_	14	acl:relcl	_	_
17	une	un	DET	_	_	18	det	_	_
18	époque	époque	NOUN	_	_	16	obj	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 acl	color:blue
1	ensuite	ensuite	ADV	_	_	12	advmod	_	_
2	euh	euh	INTJ	_	_	1	discourse	_	_
3	disons	dire	VERB	_	_	1	parataxis:parenth	_	_
4	les	le	DET	_	_	5	det	_	_
5	mots	mots	NOUN	_	_	3	obj	_	_
6	comme	comme	SCONJ	_	_	8	mark	_	_
7	ils	il	PRON	_	_	8	nsubj	_	_
8	sont	être	AUX	_	_	5	acl	_	_
9	vous	vous	PRON	_	_	12	nsubj:pass	_	_
10	avez	avoir	AUX	_	_	12	aux	_	_
11	été	être	AUX	DoubleAux	_	12	aux:pass	_	_
12	ruinée	ruiner	VERB	DoubleAux	_	0	root	_	_

~~~


