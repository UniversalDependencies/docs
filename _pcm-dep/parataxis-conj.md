---
layout: relation
title: 'parataxis:conj'
shortdef: 'juxtaposed clause'
udver: '2'
---

The `parataxis:conj` relation is used between juxtaposed clauses. The clauses are juxtaposed when they are independant from one another. This relation is introduced to emphasize the similarities of this type of construction with other types of conjuncts.

~~~ conllu
# visual-style 3 9 parataxis:conj	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
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
