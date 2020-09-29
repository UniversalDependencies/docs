---
layout: relation
title: 'conj'
shortdef: 'conjunct'
udver: '2'
---

Naija does not uses `conj` as such, but splits it into three subrelations:

+ [conj:appos]() : apposed conjunct
+ [conj:coord]() : coordinated conjunct


~~~ conllu
# visual-style 4 5 conj:coord	color:blue
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
1	dem	they	PRON	PRON	_	3	nsubj	_	_
2	dey	be	AUX	AUX	_	3	aux	_	_
3	drink	drink	VERB	VERB	_	0	root	_	_
4	kainkain	kainkain	NOUN	NOUN	_	3	obj	_	_
5	ogogoro	ogogoro	NOUN	NOUN	_	4	conj:coord	_	_

1	them	_	_	_	_	0	_	_	_
2	be	_	_	_	_	0	_	_	_
3	drink	_	_	_	_	0	_	_	_
4	liquor	_	_	_	_	0	_	_	_
5	schnaps	_	_	_	_	0	_	_	_

1	they	_	_	_	_	0	_	_	_
2	drink	_	_	_	_	0	_	_	_
3	spirits	_	_	_	_	0	_	_	_
4	,	_	_	_	_	0	_	_	_
5	ogogoro	_	_	_	_	0	_	_	_
~~~


+ [conj:dicto]() : disfluency, reformulation, elaboration

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
<!-- Interlanguage links updated Út zář 29 20:23:25 CEST 2020 -->
