---
layout: base
title:  'Statistics of nmod:poss in UD_Swedish_Sign_Language'
udver: '2'
---

## Treebank Statistics: UD_Swedish_Sign_Language: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="swl-dep-nmod.html">nmod</a></tt>.

6 nodes (0%) are attached to their parents as `nmod:poss`.

6 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.33333333333333.

The following 2 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="swl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="swl-pos-PRON.html">PRON</a></tt> (5; 83% instances), <tt><a href="swl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="swl-pos-NOUN.html">NOUN</a></tt> (1; 17% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nmod:poss	color:blue
1	POSS1	_	PRON	PN	_	3	nmod:poss	_	_
2	EGEN	_	ADJ	JJ	_	3	amod	_	_
3	SPRÅK	_	NOUN	NN	_	4	obl	_	_
4	VETA-INTE	_	VERB	VB	_	0	root	_	_
5	PRO1	_	PRON	PN	_	4	nsubj	_	_

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
10	BAKOM	_	ADP	PP	_	11	advmod	_	_
11	SITTA(Vb)	_	VERB	VBAV	_	3	conj	_	_
12	SYNS	_	VERB	VB	_	13	cop	_	_
13	TJOCK	_	ADJ	JJ	_	9	acl:relcl	_	_
14	OMÖJLIG	_	ADV	AB	_	16	aux	_	_
15	SITTA(Vb)@hd	_	VERB	VBAV	_	3	conj	_	_
16	VARELSE(Vb)+HOPPA-UPP@p	_	VERB	VBAV	_	3	conj	_	_
17	PASSIVERAD@z	_	ADJ	JJ	_	3	conj	_	_

~~~


