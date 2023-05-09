---
layout: base
title:  'Statistics of xcomp in UD_Swedish_Sign_Language-SSLC'
udver: '2'
---

## Treebank Statistics: UD_Swedish_Sign_Language-SSLC: Relations: `xcomp`

This relation is universal.

10 nodes (1%) are attached to their parents as `xcomp`.

9 instances of `xcomp` (90%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.5.

The following 6 pairs of parts of speech are connected with `xcomp`: <tt><a href="swl_sslc-pos-VERB.html">VERB</a></tt>-<tt><a href="swl_sslc-pos-VERB.html">VERB</a></tt> (4; 40% instances), <tt><a href="swl_sslc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="swl_sslc-pos-NOUN.html">NOUN</a></tt> (2; 20% instances), <tt><a href="swl_sslc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="swl_sslc-pos-VERB.html">VERB</a></tt> (1; 10% instances), <tt><a href="swl_sslc-pos-VERB.html">VERB</a></tt>-<tt><a href="swl_sslc-pos-ADV.html">ADV</a></tt> (1; 10% instances), <tt><a href="swl_sslc-pos-VERB.html">VERB</a></tt>-<tt><a href="swl_sslc-pos-NOUN.html">NOUN</a></tt> (1; 10% instances), <tt><a href="swl_sslc-pos-VERB.html">VERB</a></tt>-<tt><a href="swl_sslc-pos-PRON.html">PRON</a></tt> (1; 10% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 xcomp	color:blue
1	SAMTALA	_	VERB	VB	_	2	xcomp	_	_
2	TA	_	VERB	VB	_	0	root	_	_
3	TOLK@rd	_	NOUN	NN	_	2	obj	_	_
4	FÄRDIG	_	ADJ	JJ	_	5	advmod	_	_
5	FÖLJA	_	VERB	VB	_	2	compound:svc	_	_
6	HAND(Q)+HANTERA@p	_	VERB	VBAV	_	2	compound:svc	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 13 xcomp	color:blue
1	EN	_	DET	DT	_	2	det	_	_
2	DÖV	_	NOUN	NN	_	3	nsubj	_	_
3	SÅG	_	VERB	VB	_	0	root	_	_
4	PEK	_	PRON	PEK	_	3	obj	_	_
5	PRO1	_	PRON	PN	_	6	nsubj	_	_
6	HA	_	VERB	VB	_	3	ccomp	_	_
7	HÅL@b	_	NOUN	NN	_	6	obj	_	_
8	HÅL>öra	_	NOUN	NNKL	_	7	clf	_	_
9	BESTÄMMA-SIG	_	VERB	VB	_	3	conj	_	_
10	PEK	_	PRON	PEK	_	9	nsubj	_	_
11	TEDDIE-SUNDQVIST@en	_	NOUN	NN	_	9	ccomp	_	_
12	ORSAK	_	CCONJ	KN	_	13	mark	_	_
13	TEDDIE-SUNDQVIST@en	_	NOUN	NN	_	11	xcomp	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 14 xcomp	color:blue
1	PRO1	_	PRON	PN	_	2	nsubj	_	_
2	VISUALISERA	_	VERB	VB	_	0	root	_	_
3	EN	_	DET	DT	_	4	det	_	_
4	FILM	_	NOUN	NN	_	2	obj	_	_
5	KORTVARIG(J)	_	ADJ	JJ	_	4	amod	_	_
6	FILM	_	NOUN	NN	_	4	conj	_	_
7	HUMOR(Lbs)	_	NOUN	NN	_	4	nmod	_	_
8	TILLÄGGA	_	VERB	VB	_	7	case	_	_
9	PRO1	_	PRON	PN	_	10	nsubj	_	_
10	SKULLE-VILJA(L)	_	VERB	VB	_	4	acl:relcl	_	_
11	NÄR	_	ADV	AB	_	14	advmod	_	_
12	TID-FRAMÅT	_	ADV	AB	_	11	conj	_	_
13	NÄR	_	ADV	AB	_	11	conj	_	_
14	KAN	_	VERB	VB	_	4	xcomp	_	_
15	ÅR-FRAMTID+EN	_	ADV	AB	_	11	conj	_	_
16	ÅR-FRAMTID+TVÅ	_	ADV	AB	_	11	conj	_	_
17	PU@g	_	INTJ	G	_	14	discourse	_	_

~~~


