---
layout: relation
title: 'parataxis:conj'
shortdef: 'juxtaposed clause'
udver: '2'
---

The `parataxis:conj` relation is used between juxtaposed clauses. The clauses are juxtaposed when they are independant from one another. This relation is introduced to emphasize the similarities of this type of construction with other types of conjuncts.

~~~ conllu
# visual-style 3 9 parataxis:conj	color:blue
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
1	im	he	PRON	PRON	_	3	nsubj	_	_
2	fit	can	AUX	AUX	_	3	aux	_	_
3	make	let	VERB	VERB	_	0	root	_	_
4	you	you	PRON	PRON	_	3	obj	_	_
5	loose	loose	VERB	VERB	_	3	xcomp	_	_
6	control	control	NOUN	NOUN	_	5	obj	_	_
7	im	he	PRON	PRON	_	9	nsubj	_	_
8	fit	can	AUX	AUX	_	9	aux	_	_
9	scatter	scatter	VERB	VERB	_	3	parataxis:conj	_	_
10	your	your	PRON	PRON	_	11	nmod:poss	_	_
11	mind	mind	NOUN	NOUN	_	9	obj	_	_

1	it	_	_	_	_	0	_	_	_
2	can	_	_	_	_	0	_	_	_
3	make	_	_	_	_	0	_	_	_
4	you	_	_	_	_	0	_	_	_
5	loose	_	_	_	_	0	_	_	_
6	control	_	_	_	_	0	_	_	_
7	it	_	_	_	_	0	_	_	_
8	can	_	_	_	_	0	_	_	_
9	scatter	_	_	_	_	0	_	_	_
10	your	_	_	_	_	0	_	_	_
11	mind	_	_	_	_	0	_	_	_

1	It	_	_	_	_	0	_	_	_
2	may	_	_	_	_	0	_	_	_
3	make	_	_	_	_	0	_	_	_
4	you	_	_	_	_	0	_	_	_
5	loose	_	_	_	_	0	_	_	_
6	control	_	_	_	_	0	_	_	_
7	.	_	_	_	_	0	_	_	_
8	It	_	_	_	_	0	_	_	_
9	can	_	_	_	_	0	_	_	_
10	scatter	_	_	_	_	0	_	_	_
11	your	_	_	_	_	0	_	_	_
12	mind	_	_	_	_	0	_	_	_
~~~

### Parallel constructions

Parallel constructions are a special case of juxtaposed clauses, in which a single syntactic pattern is repeated several times. Parallel constructions often appear in Naija for sequential constructions.

~~~ conllu
# visual-style 4 8 parataxis:conj	color:blue
# visual-style 4 12 parataxis:conj	color:blue
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
1	hundred	hundred	NUM	NUM	_	2	nummod	_	_
2	level	level	NOUN	VERB	_	4	nsubj	_	_
3	don	PERF	AUX	AUX	_	4	aux	_	_
4	pass	pass	VERB	VERB	_	0	root	_	_
5	two	two	NUM	NUM	_	6	nummod	_	_
6	hundred	hundred	NOUN	NUM	_	8	nsubj	_	_
7	don	PERF	AUX	AUX	_	8	aux	_	_
8	pass	pass	VERB	VERB	_	4	parataxis:conj	_	_
9	three	three	NUM	NUM	_	10	nummod	_	_
10	hundred	hundred	NOUN	NUM	_	12	nsubj	_	_
11	don	PERF	AUX	AUX	_	12	aux	_	_
12	pass	pass	VERB	VERB	_	4	parataxis:conj	_	_

1	hundred	_	_	_	_	0	_	_	_
2	level	_	_	_	_	0	_	_	_
3	PERF	_	_	_	_	0	_	_	_
4	exceed	_	_	_	_	0	_	_	_
5	two	_	_	_	_	0	_	_	_
6	hundred	_	_	_	_	0	_	_	_
7	PERF	_	_	_	_	0	_	_	_
8	exceed	_	_	_	_	0	_	_	_
9	three	_	_	_	_	0	_	_	_
10	hundred	_	_	_	_	0	_	_	_
11	PERF	_	_	_	_	0	_	_	_
12	exceed	_	_	_	_	0	_	_	_

1	One	_	_	_	_	0	_	_	_
2	hundred	_	_	_	_	0	_	_	_
3	level	_	_	_	_	0	_	_	_
4	has	_	_	_	_	0	_	_	_
5	passed	_	_	_	_	0	_	_	_
6	,	_	_	_	_	0	_	_	_
7	two	_	_	_	_	0	_	_	_
8	hundred	_	_	_	_	0	_	_	_
9	has	_	_	_	_	0	_	_	_
10	passed	_	_	_	_	0	_	_	_
11	,	_	_	_	_	0	_	_	_
12	three	_	_	_	_	0	_	_	_
13	hundred	_	_	_	_	0	_	_	_
14	has	_	_	_	_	0	_	_	_
15	passed	_	_	_	_	0	_	_	_
~~~
<!-- Interlanguage links updated Út zář 29 18:41:34 CEST 2020 -->
