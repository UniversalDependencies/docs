---
layout: base
title:  'Statistics of compound:svc in UD_Swedish_Sign_Language-SSLC'
udver: '2'
---

## Treebank Statistics: UD_Swedish_Sign_Language-SSLC: Relations: `compound:svc`

This relation is a language-specific subtype of <tt><a href="swl_sslc-dep-compound.html">compound</a></tt>.
There are also 1 other language-specific subtypes of `compound`: <tt><a href="swl_sslc-dep-compound-prt.html">compound:prt</a></tt>.

61 nodes (4%) are attached to their parents as `compound:svc`.

61 instances of `compound:svc` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.83606557377049.

The following 8 pairs of parts of speech are connected with `compound:svc`: <tt><a href="swl_sslc-pos-VERB.html">VERB</a></tt>-<tt><a href="swl_sslc-pos-VERB.html">VERB</a></tt> (48; 79% instances), <tt><a href="swl_sslc-pos-VERB.html">VERB</a></tt>-<tt><a href="swl_sslc-pos-X.html">X</a></tt> (5; 8% instances), <tt><a href="swl_sslc-pos-INTJ.html">INTJ</a></tt>-<tt><a href="swl_sslc-pos-X.html">X</a></tt> (2; 3% instances), <tt><a href="swl_sslc-pos-VERB.html">VERB</a></tt>-<tt><a href="swl_sslc-pos-ADJ.html">ADJ</a></tt> (2; 3% instances), <tt><a href="swl_sslc-pos-INTJ.html">INTJ</a></tt>-<tt><a href="swl_sslc-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="swl_sslc-pos-VERB.html">VERB</a></tt>-<tt><a href="swl_sslc-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="swl_sslc-pos-X.html">X</a></tt>-<tt><a href="swl_sslc-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="swl_sslc-pos-X.html">X</a></tt>-<tt><a href="swl_sslc-pos-VERB.html">VERB</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 compound:svc	color:blue
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
# visual-style 2 3 compound:svc	color:blue
1	PRO1	_	PRON	PN	_	2	nsubj	_	_
2	SLUTA(da)	_	VERB	VB	_	0	root	_	_
3	GLOSA:(AVGÅ)@z	_	X	?	_	2	compound:svc	_	_
4	LÄMNA	_	VERB	VB	_	2	conj	_	_
5	NY@b	_	ADJ	JJ	_	6	amod	_	_
6	LEDARE	_	NOUN	NN	_	4	obl	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 compound:svc	color:blue
1	PRO1	_	PRON	PN	_	3	nsubj	_	_
2	VAD	_	PRON	PN	_	3	obj	_	_
3	VAD-GÖRA	_	ADV	AB	_	0	root	_	_
4	PU@g	_	INTJ	G	_	3	discourse	_	_
5	PRO1	_	PRON	PN	_	1	conj	_	_
6	GLOSA:(PU)@z	_	X	?	_	4	compound:svc	_	_
7	PRO1	_	PRON	PN	_	1	conj	_	_
8	GLOSA:(PU)@z	_	X	?	_	4	compound:svc	_	_
9	BESTÄMMA-SIG	_	VERB	VB	_	4	conj	_	_
10	TILLBAKA	_	ADV	AB	_	9	xcomp	_	_
11	VÄNERSBORG@en	_	NOUN	NN	_	9	obl	_	_

~~~


