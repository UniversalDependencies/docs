---
layout: relation
title: 'orphan'
shortdef: 'orphan'
udver: '2'
---

The `orphan` relation is used in cases of head ellipsis where simple promotion would result in unnatural and misleading dependency relation. An element belonging to the same clause as the elided head is promoted, and all other dependents of this elided head are considered as dependant of the promoted element with their original relations. 

### Disfluencies and reformulations

In order to have only one subtree for each pile of disluencies or reformulations we use the orphan relation if needed, and consider the absence of the predicate for the repeated element as an ellipsis.

~~~ conllu
# visual-style 7 5 orphan	color:blue
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
1	if	if	SCONJ	SCONJ	_	8	mark	_	_
2	di	the	DET	DET	_	3	det	_	_
3	enfor~	enfor~	X	X	_	8	nsubj	_	_
4	enf~	enf~	X	X	_	3	conj:dicto	_	_
5	if	if	SCONJ	SCONJ	_	7	orphan	_	_
6	di	the	DET	DET	_	7	det	_	_
7	enforcement	enforcement	NOUN	NOUN	_	3	conj:dicto	_	_
8	start	start	VERB	VERB	_	12	advcl	_	_
9	now	now	ADV	ADV	_	8	advmod	_	_
10	we	we	PRON	PRON	_	12	nsubj	_	_
11	go	will	AUX	AUX	_	12	aux	_	_
12	begin	begin	VERB	VERB	_	0	root	_	_
13	dey	be	AUX	AUX	_	14	aux	_	_
14	arrest	arrest	VERB	VERB	_	12	xcomp	_	_
15	una	you	PRON	PRON	_	16	nmod:poss	_	_
16	moto	moto	NOUN	NOUN	_	14	obj	_	_

1	if	_	_	_	_	0	_	_	_
2	the	_	_	_	_	0	_	_	_
3	X	_	_	_	_	0	_	_	_
4	X	_	_	_	_	0	_	_	_
5	if	_	_	_	_	0	_	_	_
6	the	_	_	_	_	0	_	_	_
7	enforcement	_	_	_	_	0	_	_	_
8	start	_	_	_	_	0	_	_	_
9	now	_	_	_	_	0	_	_	_
10	we	_	_	_	_	0	_	_	_
11	will	_	_	_	_	0	_	_	_
12	begin	_	_	_	_	0	_	_	_
13	CONT	_	_	_	_	0	_	_	_
14	arrest	_	_	_	_	0	_	_	_
15	you guys	_	_	_	_	0	_	_	_
16	moto	_	_	_	_	0	_	_	_

1	if	_	_	_	_	0	_	_	_
2	the	_	_	_	_	0	_	_	_
3	enforcement	_	_	_	_	0	_	_	_
4	starts	_	_	_	_	0	_	_	_
5	now	_	_	_	_	0	_	_	_
6	we	_	_	_	_	0	_	_	_
7	would	_	_	_	_	0	_	_	_
8	begin	_	_	_	_	0	_	_	_
9	to	_	_	_	_	0	_	_	_
10	arrest	_	_	_	_	0	_	_	_
11	your	_	_	_	_	0	_	_	_
12	vehicles	_	_	_	_	0	_	_	_
~~~
<!-- Interlanguage links updated Út zář 29 20:32:00 CEST 2020 -->
