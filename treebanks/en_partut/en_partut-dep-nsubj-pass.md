---
layout: base
title:  'Statistics of nsubj:pass in UD_English-ParTUT'
udver: '2'
---

## Treebank Statistics: UD_English-ParTUT: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="en_partut-dep-nsubj.html">nsubj</a></tt>.

473 nodes (1%) are attached to their parents as `nsubj:pass`.

459 instances of `nsubj:pass` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.75052854122622.

The following 7 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="en_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt> (301; 64% instances), <tt><a href="en_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="en_partut-pos-PRON.html">PRON</a></tt> (127; 27% instances), <tt><a href="en_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="en_partut-pos-PROPN.html">PROPN</a></tt> (33; 7% instances), <tt><a href="en_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="en_partut-pos-ADJ.html">ADJ</a></tt> (9; 2% instances), <tt><a href="en_partut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_partut-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="en_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="en_partut-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="en_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="en_partut-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nsubj:pass	color:blue
1	This	this	DET	DD	Number=Sing|PronType=Dem	2	det	_	_
2	photograph	photograph	NOUN	S	Number=Sing	4	nsubj:pass	_	SpaceAfter=No
3	's	's	PART	PART	_	2	case	_	_
4	taken	take	VERB	V	Tense=Past|VerbForm=Part	0	root	_	_
5	1950	1950	NUM	N	NumType=Card	4	obl	_	SpaceAfter=No
6	s	s	X	X	_	5	dep	_	_
7	in	in	ADP	E	_	8	case	_	_
8	Saudi	Saudi	PROPN	SP	_	4	obl	_	_
9	Arabia	Arabia	PROPN	SP	_	8	flat	_	SpaceAfter=No
10	.	.	PUNCT	FS	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nsubj:pass	color:blue
1	This	this	PRON	PD	Number=Sing|PronType=Dem	4	nsubj:pass	_	_
2	was	be	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	4	aux:pass	_	_
3	first	first	ADJ	NO	Degree=Pos|NumType=Ord	4	amod	_	_
4	discovered	discover	VERB	V	Mood=Ind|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
5	in	in	ADP	E	_	6	case	_	_
6	1859	1859	NUM	N	NumType=Card	4	obl	_	SpaceAfter=No
7	.	.	PUNCT	FS	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 nsubj:pass	color:blue
1	Creative	Creative	PROPN	SP	_	5	nsubj:pass	_	_
2	Commons	Commons	PROPN	SP	_	1	flat	_	_
3	may	may	AUX	VM	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	5	aux	_	_
4	be	be	AUX	VA	VerbForm=Inf	5	aux:pass	_	_
5	contacted	contact	VERB	V	Tense=Past|VerbForm=Part	0	root	_	_
6	at	at	ADP	E	_	7	case	_	_
7	http	http	NOUN	S	Number=Sing	5	obl	_	SpaceAfter=No
8	:	:	PUNCT	FC	_	5	punct	_	_

~~~


