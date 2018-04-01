---
layout: base
title:  'Statistics of iobj in UD_Swedish_Sign_Language'
udver: '2'
---

## Treebank Statistics: UD_Swedish_Sign_Language: Relations: `iobj`

This relation is universal.

4 nodes (0%) are attached to their parents as `iobj`.

4 instances of `iobj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.25.

The following 3 pairs of parts of speech are connected with `iobj`: <tt><a href="swl-pos-VERB.html">VERB</a></tt>-<tt><a href="swl-pos-NOUN.html">NOUN</a></tt> (2; 50% instances), <tt><a href="swl-pos-VERB.html">VERB</a></tt>-<tt><a href="swl-pos-PRON.html">PRON</a></tt> (1; 25% instances), <tt><a href="swl-pos-X.html">X</a></tt>-<tt><a href="swl-pos-NOUN.html">NOUN</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 iobj	color:blue
1	FRÅGA	_	VERB	VB	_	0	root	_	_
2	GRODA	_	NOUN	NN	_	3	compound	_	_
3	PAPPA	_	NOUN	NN	_	1	iobj	_	_
4	FÅ	_	VERB	VB	_	1	ccomp	_	_
5	PRO1	_	PRON	PN	_	4	nsubj	_	_
6	TA*MED@z	_	VERB	VB	_	1	conj	_	_
7	ADOPTERA	_	VERB	VB	_	6	compound:svc	_	_
8	EN	_	NUM	RG	_	9	det	_	_
9	GRODA	_	NOUN	NN	_	7	obj	_	_
10	JA@ub@z	_	INTJ	INTERJ	_	1	discourse	_	_
11	HAND(SJ)+HANTERA@p	_	VERB	VBAV	_	1	conj	_	_
12	BEGE-SIG-HEM	_	VERB	VB	_	1	conj	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 iobj	color:blue
1	KOM-HIT@rd	_	VERB	VB	_	0	root	_	_
2	SNÖ^GUBBE	_	NOUN	NN	_	1	nsubj	_	_
3	PRO1	_	PRON	PN	_	2	conj	_	_
4	VISA	_	VERB	VB	_	1	conj	_	_
5	OBJPRO	_	PRON	PN	_	4	iobj	_	_
6	NU@b	_	ADV	AB	_	4	advmod	_	_
7	UTE	_	ADV	AB	_	4	advmod	_	_
8	PRO1@z	_	PRON	PN	_	3	conj	_	_
9	KOM-HIT@rd	_	VERB	VB	_	1	conj	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 iobj	color:blue
1	VARELSE(Vb)+FÖRFLYTTA@p	_	VERB	VBAV	_	0	root	_	_
2	PÅKALLA-UPPMÄRKSAMHET@g	_	X	G	_	1	conj	_	_
3	MAMMA	_	NOUN	NN	_	2	iobj	_	_
4	PRO1	_	PRON	PN	_	1	nsubj	_	_
5	UTE	_	ADV	AB	_	2	ccomp	_	_
6	PRO1(J)	_	PRON	PN	_	4	conj	_	_
7	HAND(JJb)+HANTERA@p	_	VERB	VBAV	_	1	ccomp	_	_
8	SNÖ^GUBBE	_	NOUN	NN	_	7	obj	_	_

~~~


