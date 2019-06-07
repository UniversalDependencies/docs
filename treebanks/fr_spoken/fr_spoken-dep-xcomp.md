---
layout: base
title:  'Statistics of xcomp in UD_French-Spoken'
udver: '2'
---

## Treebank Statistics: UD_French-Spoken: Relations: `xcomp`

This relation is universal.

371 nodes (1%) are attached to their parents as `xcomp`.

371 instances of `xcomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.05390835579515.

The following 9 pairs of parts of speech are connected with `xcomp`: <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (336; 91% instances), <tt><a href="fr_spoken-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (23; 6% instances), <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-AUX.html">AUX</a></tt> (5; 1% instances), <tt><a href="fr_spoken-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="fr_spoken-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="fr_spoken-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_spoken-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 xcomp	color:blue
1	là	là	ADV	_	_	3	advmod:periph	_	_
2	je	je	PRON	_	_	3	nsubj	_	_
3	viens	venir	VERB	_	_	0	root	_	_
4	de	de	ADP	_	_	5	mark	_	_
5	faire	faire	VERB	_	_	3	xcomp	_	_
6	mes	son	DET	_	_	8	det	_	_
7	des	de+le	ADP	de	_	6	conj:dicto	_	_
8	vaccins	vaccin	NOUN	_	_	5	obj	_	_
9	par	par	ADP	_	_	10	case	_	_
10	exemple	exemple	NOUN	_	_	3	obl:periph	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 xcomp	color:blue
1	mh	mh	INTJ	_	_	4	discourse	_	_
2	mh	mh	INTJ	_	_	4	discourse	_	_
3	c'	ce	PRON	_	_	4	nsubj	_	_
4	est	être	AUX	_	_	0	root	_	_
5	comme	comme	ADP	_	_	7	mark	_	_
6	comment	comment	PRON	_	_	7	obl:mod	_	_
7	dire	dire	VERB	_	_	4	xcomp	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 xcomp	color:blue
1	vraiment	vraiment	ADV	_	_	5	advmod:periph	_	_
2	la	le	DET	_	_	3	det	_	_
3	psychiatrie	psychiatrie	NOUN	_	_	5	dislocated	_	_
4	il	il	PRON	_	_	5	nsubj	_	_
5	faut	falloir	VERB	_	_	0	root	_	_
6	ê~	ê~	VERB	CCOMP	_	5	parataxis:obj	_	_
7	il	il	PRON	_	_	8	nsubj	_	_
8	faut	falloir	VERB	_	_	5	conj:dicto	_	_
9	être	être	AUX	conj:reform	_	8	xcomp	_	_

~~~


