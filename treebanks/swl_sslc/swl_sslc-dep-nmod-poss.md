---
layout: base
title:  'Statistics of nmod:poss in UD_Swedish_Sign_Language-SSLC'
udver: '2'
---

## Treebank Statistics: UD_Swedish_Sign_Language-SSLC: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="swl_sslc-dep-nmod.html">nmod</a></tt>.

7 nodes (0%) are attached to their parents as `nmod:poss`.

7 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.28571428571429.

The following 2 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="swl_sslc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="swl_sslc-pos-PRON.html">PRON</a></tt> (6; 86% instances), <tt><a href="swl_sslc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="swl_sslc-pos-NOUN.html">NOUN</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nmod:poss	color:blue
1	VIKTIG	_	ADJ	JJ	_	6	ccomp	_	_
2	DÖV(L)	_	NOUN	NN	_	3	compound	_	_
3	FÖRENING	_	NOUN	NN	_	5	nmod	_	_
4	POSS	_	PRON	PN	_	5	nmod:poss	_	_
5	VERKSAMHET(J)^HET@b	_	NOUN	NN	_	1	nsubj	_	_
6	TYCKA	_	VERB	VB	_	0	root	_	_
7	PRO1	_	PRON	PN	_	6	nsubj	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod:poss	color:blue
1	GRODA	_	NOUN	NN	_	2	nmod:poss	_	_
2	MAMMA*PAPPA	_	NOUN	NN	_	3	nsubj	_	_
3	SITTA(VVb)	_	VERB	VBAV?/VB?	_	0	root	_	_
4	SITTA(Vb)@hd	_	VERB	VBAV	_	3	conj	_	_
5	UNGE	_	NOUN	NN	_	6	nsubj	_	_
6	SITTA(Vb).FL	_	VERB	VBAV	_	3	conj	_	_
7	HEJ-DÅ@g@z	_	X	G	_	3	conj	_	_
8	EN-TILL	_	NUM	RG	_	9	nummod	_	_
9	UNGE	_	NOUN	NN	_	11	nsubj	_	_
10	BAKOM	_	ADV	AB	_	11	advmod	_	_
11	SITTA(Vb)	_	VERB	VBAV	_	3	conj	_	_
12	SYNS	_	AUX	VB	_	13	cop	_	_
13	TJOCK	_	ADJ	JJ	_	9	acl:relcl	_	_
14	OMÖJLIG	_	AUX	VB	_	16	aux	_	_
15	SITTA(Vb)@hd	_	VERB	VBAV	_	3	conj	_	_
16	VARELSE(Vb)+HOPPA-UPP@p	_	VERB	VBAV	_	3	conj	_	_
17	PASSIVERAD@z	_	ADJ	JJ	_	3	conj	_	_

~~~


