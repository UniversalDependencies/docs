---
layout: relation
title: 'conj:dicto'
shortdef: 'conj:dicto'
udver: '2'
---

The `conj:dicto` relation is used instead of `reparandum` for disfluent elements. This choice is meant to emphasize the similarity between reformulations, elaborations and ordinary coordinations.

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
2	PERF	_	_	_	_	0	_	_	_
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
