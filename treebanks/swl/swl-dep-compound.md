---
layout: base
title:  'Statistics of compound in UD_Swedish_Sign_Language'
udver: '2'
---

## Treebank Statistics: UD_Swedish_Sign_Language: Relations: `compound`

This relation is universal.
There are 2 language-specific subtypes of `compound`: <tt><a href="swl-dep-compound-prt.html">compound:prt</a></tt>, <tt><a href="swl-dep-compound-svc.html">compound:svc</a></tt>.

26 nodes (2%) are attached to their parents as `compound`.

23 instances of `compound` (88%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.11538461538462.

The following 3 pairs of parts of speech are connected with `compound`: <tt><a href="swl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="swl-pos-NOUN.html">NOUN</a></tt> (17; 65% instances), <tt><a href="swl-pos-VERB.html">VERB</a></tt>-<tt><a href="swl-pos-NOUN.html">NOUN</a></tt> (8; 31% instances), <tt><a href="swl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="swl-pos-NUM.html">NUM</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 compound	color:blue
1	SEDAN(L)@z	_	ADV	AB	_	4	advmod	_	_
2	PRO1	_	PRON	PN	_	4	nsubj	_	_
3	tp@&	_	X	?	_	4	reparandum	_	_
4	TRÄNA	_	VERB	VB	_	0	root	_	_
5	BASKETBOLL	_	NOUN	NN	_	4	obj	_	_
6	FÖR	_	ADV	AB	_	8	case	_	_
7	HÖRANDE	_	NOUN	NN	_	8	compound	_	_
8	KLUBB	_	NOUN	NN	_	4	obl	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 compound	color:blue
1	GLAS	_	NOUN	NN	_	2	compound	_	_
2	FORM(YYb)+UTSTRÄCKNING@p	_	VERB	VBAV	_	3	nsubj	_	_
3	TRASIG	_	VERB	VBS	_	0	root	_	_
4	ENTITET(SS)+FÖRFLYTTA@p>huvud	_	VERB	VBAV	_	3	conj	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 compound	color:blue
1	PRO1	_	PRON	PN	_	2	nsubj	_	_
2	FÖDD	_	VERB	VB	_	0	root	_	_
3	HÖRANDE@rd	_	NOUN	NN	_	1	acl	_	_
4	PRO1	_	PRON	PN	_	1	conj	_	_
5	VÄXA-UPP	_	NOUN	NN	_	2	conj	_	_
6	TRE	_	NUM	RG	_	7	compound	_	_
7	HALV	_	ADJ	JJ	_	8	nummod	_	_
8	ÅR@b	_	NOUN	NN	_	5	obl	_	_
9	DÖV(Ao)	_	ADJ	JJ	_	4	acl	_	_

~~~


