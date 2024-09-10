---
layout: base
title:  'Statistics of ccomp in UD_Swedish_Sign_Language-SSLC'
udver: '2'
---

## Treebank Statistics: UD_Swedish_Sign_Language-SSLC: Relations: `ccomp`

This relation is universal.

32 nodes (2%) are attached to their parents as `ccomp`.

31 instances of `ccomp` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.28125.

The following 8 pairs of parts of speech are connected with `ccomp`: <tt><a href="swl_sslc-pos-VERB.html">VERB</a></tt>-<tt><a href="swl_sslc-pos-VERB.html">VERB</a></tt> (15; 47% instances), <tt><a href="swl_sslc-pos-VERB.html">VERB</a></tt>-<tt><a href="swl_sslc-pos-ADJ.html">ADJ</a></tt> (4; 13% instances), <tt><a href="swl_sslc-pos-VERB.html">VERB</a></tt>-<tt><a href="swl_sslc-pos-ADV.html">ADV</a></tt> (4; 13% instances), <tt><a href="swl_sslc-pos-INTJ.html">INTJ</a></tt>-<tt><a href="swl_sslc-pos-VERB.html">VERB</a></tt> (3; 9% instances), <tt><a href="swl_sslc-pos-VERB.html">VERB</a></tt>-<tt><a href="swl_sslc-pos-INTJ.html">INTJ</a></tt> (3; 9% instances), <tt><a href="swl_sslc-pos-INTJ.html">INTJ</a></tt>-<tt><a href="swl_sslc-pos-ADV.html">ADV</a></tt> (1; 3% instances), <tt><a href="swl_sslc-pos-VERB.html">VERB</a></tt>-<tt><a href="swl_sslc-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="swl_sslc-pos-VERB.html">VERB</a></tt>-<tt><a href="swl_sslc-pos-PRON.html">PRON</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 ccomp	color:blue
1	VARELSE(L)+@p	_	VERB	VBAV	_	0	root	_	_
2	KOMMA-HIT(L)	_	VERB	VBAV	_	1	compound:svc	_	_
3	SÄGA@z	_	VERB	VB	_	1	conj	_	_
4	VAD@z	_	PRON	PN	_	5	obj	_	_
5	VAD-ÖNSKAS@ca	_	VERB	VBCA	_	3	ccomp	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 ccomp	color:blue
1	PEK@z	_	PRON	PEK	_	2	nsubj	_	_
2	TRIVAS	_	VERB	VB	_	0	root	_	_
3	BRA	_	ADJ	JJ	_	2	ccomp	_	_
4	PEK	_	PRON	PEK	_	3	nsubj	_	_
5	BRA	_	ADJ	JJ	_	6	advmod	_	_
6	UMGÅS	_	VERB	VB	_	2	conj	_	_
7	VAD	_	PRON	PN	_	8	nsubj	_	_
8	HINDER	_	NOUN	NN	_	2	conj	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 ccomp	color:blue
1	GÅ-IN(L)	_	VERB	VB	_	0	root	_	_
2	TILL	_	ADP	PP	_	3	case	_	_
3	SKOG	_	NOUN	NN	_	1	obl	_	_
4	RÖST-ANVÄNDA	_	VERB	VB	_	1	conj	_	_
5	VAR	_	ADV	AB	_	4	ccomp	_	_
6	GLOSA:(PF)@z	_	X	?	_	1	dep	_	_
7	SÅG	_	VERB	VB	_	1	conj	_	_
8	HÅL@b	_	NOUN	NN	_	7	obj	_	_
9	RUND@kl	_	NOUN	NNKL	_	8	clf	_	_

~~~


