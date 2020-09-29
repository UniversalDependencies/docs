---
layout: relation
title: 'nsubj:pass'
shortdef: 'passive nominal subject'
udver: '2'
---
The `nsubj:pass` relation is used for the subject of a passive sentence. In Cantonese, the passive subject may be directly (1) or indirectly (2) affected by the action expressed by the verb; the latter case is known as an "indirect passive" (Matthews and Yip, 2011), where the verb can still have a direct object, as seen in (2).

~~~ conllu
# visual-style 4 1 nsubj:pass	color:blue
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
1	我	_	PRON	_	_	4	nsubj:pass	_	1SG
2	畀	_	ADP	_	_	3	case	_	AGT
3	校長	_	NOUN	_	_	4	obl:agent	_	school-principal
4	罰	_	VERB	_	_	0	root	_	punish

1	"I'm	_	_	_	_	0	_	_	_
2	being	_	_	_	_	0	_	_	_
3	punished	_	_	_	_	0	_	_	_
4	by	_	_	_	_	0	_	_	_
5	the	_	_	_	_	0	_	_	_
6	principal."	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 4 1 nsubj:pass	color:blue
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
1	我	_	PRON	_	_	4	nsubj:pass	_	1SG
2	畀	_	ADP	_	_	3	case	_	AGT
3	人	_	NOUN	_	_	4	obl:agent	_	person
4	偷	_	VERB	_	_	0	root	_	punish
5	咗	_	AUX	_	_	4	aux	_	PERF
6	錢	_	VERB	_	_	4	obj	_	money

1	"Somebody	_	_	_	_	0	_	_	_
2	stole	_	_	_	_	0	_	_	_
3	money	_	_	_	_	0	_	_	_
4	from	_	_	_	_	0	_	_	_
5	me	_	_	_	_	0	_	_	_
6	(lit.	_	_	_	_	0	_	_	_
7	I	_	_	_	_	0	_	_	_
8	by	_	_	_	_	0	_	_	_
9	someone	_	_	_	_	0	_	_	_
10	stole	_	_	_	_	0	_	_	_
11	(my)	_	_	_	_	0	_	_	_
12	money)."	_	_	_	_	0	_	_	_

~~~

### References

- Matthews, Stephen and Virginia Yip. 2011. Cantonese: A Comprehensive Grammar, 2nd ed. Routledge.
<!-- Interlanguage links updated Út zář 29 20:31:58 CEST 2020 -->
