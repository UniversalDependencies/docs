---
layout: base
title:  'Statistics of amod in UD_Swedish_Sign_Language'
udver: '2'
---

## Treebank Statistics: UD_Swedish_Sign_Language: Relations: `amod`

This relation is universal.

16 nodes (1%) are attached to their parents as `amod`.

14 instances of `amod` (88%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 4 pairs of parts of speech are connected with `amod`: <tt><a href="swl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="swl-pos-ADJ.html">ADJ</a></tt> (12; 75% instances), <tt><a href="swl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="swl-pos-ADV.html">ADV</a></tt> (2; 13% instances), <tt><a href="swl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="swl-pos-PRON.html">PRON</a></tt> (1; 6% instances), <tt><a href="swl-pos-VERB.html">VERB</a></tt>-<tt><a href="swl-pos-ADJ.html">ADJ</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 amod	color:blue
1	POSS1	_	PRON	PN	_	3	nmod:poss	_	_
2	EGEN	_	ADJ	JJ	_	3	amod	_	_
3	SPRÅK	_	NOUN	NN	_	4	obl	_	_
4	VETA-INTE	_	VERB	VB	_	0	root	_	_
5	PRO1	_	PRON	PN	_	4	nsubj	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 amod	color:blue
1	PAPPA	_	NOUN	NN	_	2	nsubj	_	_
2	FÖRESLÅ	_	VERB	VB	_	0	root	_	_
3	PU@g	_	INTJ	G	_	2	discourse	_	_
4	VÄNERBORG@en*SKOLA	_	NOUN	NN	_	2	obj	_	_
5	PEK	_	PRON	PEK	_	6	case	_	_
6	UNGDOM^PRAKTIK	_	NOUN	NN	_	2	obl	_	_
7	PROVA	_	VERB	VB	_	6	acl	_	_
8	PÅ	_	ADP	PP	_	9	compound:prt	_	_
9	ETCETERA(L)	_	NOUN	NN	_	7	nmod	_	_
10	OLIKA	_	ADV	AB	_	11	amod	_	_
11	SAK.PL	_	NOUN	NN	_	7	obj	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 amod	color:blue
1	HUND	_	NOUN	NN	_	7	nsubj	_	_
2	PEK>pekf	_	PRON	PEK	_	6	cc	_	_
3	LISTBOJ.EN	_	X	BOJ	_	6	det	_	_
4	PEK>långf	_	DET	PEK	_	6	det	_	_
5	LISTBOJ.TVÅ	_	X	BOJ	_	6	det	_	_
6	TAX@b	_	NOUN	NN	_	1	conj	_	_
7	SOVA	_	VERB	VB	_	0	root	_	_
8	LIGGA(VV)	_	VERB	VB	_	7	compound:svc	_	_
9	SAMMA	_	PRON	PN	_	10	amod	_	_
10	SÄNG	_	NOUN	NN	_	7	obl	_	_
11	LIGGA(V)	_	VERB	VB	_	8	conj	_	_
12	GRODA	_	NOUN	NN	_	7	conj	_	_
13	FORM(YYb)+BESKRIVNING@p	_	VERB	VBAV	_	12	orphan	_	_
14	FÖNSTER(Y)	_	NOUN	NN	_	1	nsubj	_	_
15	FYRKANT@kl	_	NOUN	NNKL	_	14	clf	_	_

~~~


