---
layout: base
title:  'Statistics of obl in UD_Makurap-TuDeT'
udver: '2'
---

## Treebank Statistics: UD_Makurap-TuDeT: Relations: `obl`

This relation is universal.

7 nodes (4%) are attached to their parents as `obl`.

5 instances of `obl` (71%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.42857142857143.

The following 3 pairs of parts of speech are connected with `obl`: <tt><a href="mpu_tudet-pos-VERB.html">VERB</a></tt>-<tt><a href="mpu_tudet-pos-NOUN.html">NOUN</a></tt> (4; 57% instances), <tt><a href="mpu_tudet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mpu_tudet-pos-DET.html">DET</a></tt> (2; 29% instances), <tt><a href="mpu_tudet-pos-ADV.html">ADV</a></tt>-<tt><a href="mpu_tudet-pos-PART.html">PART</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 obl	color:blue
1	mokat	mokat	ADV	adv	_	2	advmod	_	_
2	etera	tet	VERB	vi	Aspect=Imp|Person=3	0	root	_	_
3	korop	korop	VERB	vi	Aspect=Perf	2	dep	_	_
4	noa	noa	NOUN	n	_	3	obl	_	_
5	pe	pe	ADP	posp	_	4	case	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 obl	color:blue
1	xop	xop	DET	dem	_	4	obl	_	_
2	me	me	ADP	posp	_	1	case	_	_
3	pote	pote	ADV	adv	_	4	advmod	_	_
4	worawiget	worawik	NOUN	n	Case=Gen|Rel=Cont	0	root	_	_
5	xop	xop	DET	dem	_	4	obl	_	_
6	me	me	ADP	posp	_	5	case	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 obl	color:blue
1	uro	uro	NOUN	_	_	3	nmod	_	_
2	weane	weane	ADV	_	_	3	advmod	_	_
3	kupngaporet	kupngapot	NOUN	_	Rel=Cont	7	nmod	_	_
4	yan	_	ADV	_	_	5	advmod	_	_
5	pet	pe	PART	_	_	7	obl	_	_
6	yan	yan	ADV	_	_	7	advmod	_	_
7	kurux	kurux	ADV	_	_	8	advmod	_	_
8	pixe	pixe	VERB	_	_	0	root	_	_
9	tuk	tuk	VERB	_	_	8	parataxis	_	_

~~~


