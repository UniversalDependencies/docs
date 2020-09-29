---
layout: relation
title: 'conj:dicto'
shortdef: 'disfluency, reformulation, elaboration'
udver: '2'
---

The `conj:dicto` relation is used instead of the standard relation `reparandum` for disfluent elements and reformulations. This choice is meant to emphasize the similarity between reformulations, elaborations and ordinary coordinations. 

~~~ conllu
# visual-style 5 8 conj:dicto	color:blue
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
1	you	you	PRON	PRON	_	3	nsubj	_	_
2	don	PERF	AUX	AUX	_	3	aux	_	_
3	lose	lose	VERB	VERB	_	0	root	_	_
4	your	your	PRON	PRON	_	5	nmod:poss	_	_
5	think	think	NOUN	NOUN	_	3	obj	_	_
6	your	your	PRON	PRON	_	8	nmod:poss	_	_
7	think	think	NOUN	NOUN	_	8	compound	_	_
8	faculty	faculty	NOUN	NOUN	_	5	conj:dicto	_	_

1	you	_	_	_	_	0	_	_	_
2	have	_	_	_	_	0	_	_	_
3	lose	_	_	_	_	0	_	_	_
4	your	_	_	_	_	0	_	_	_
5	think	_	_	_	_	0	_	_	_
6	your	_	_	_	_	0	_	_	_
7	think	_	_	_	_	0	_	_	_
8	faculty	_	_	_	_	0	_	_	_

1	You	_	_	_	_	0	_	_	_
2	have	_	_	_	_	0	_	_	_
3	lost	_	_	_	_	0	_	_	_
4	your	_	_	_	_	0	_	_	_
5	rational	_	_	_	_	0	_	_	_
6	thinking	_	_	_	_	0	_	_	_
7	your	_	_	_	_	0	_	_	_
8	rational	_	_	_	_	0	_	_	_
9	thinking	_	_	_	_	0	_	_	_
10	faculty	_	_	_	_	0	_	_	_
~~~


Conjunctions are treated asymetrically with the first conjunct as the head, and all the other conjuncts as dependants of this element.


~~~ conllu
# visual-style 3 4 conj:dicto	color:blue
# visual-style 3 7 conj:dicto	color:blue
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
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
13	be	_	_	_	_	0	_	_	_
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
<!-- Interlanguage links updated Út zář 29 20:43:14 CEST 2020 -->
