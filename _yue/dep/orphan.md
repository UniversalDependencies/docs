---
layout: relation
title: 'orphan'
shortdef: 'orphan'
udver: '2'
---

The `orphan` relation is used for verb ellipsis (specifically, gapping or gapping-like phenomena; see Tang, 2001). One of elements in the clause with the elided verb is promoted, and all other elements that would have been connected to the verb would now be connected to the promoted head as `orphan` dependents if their original relationship to the elided verb no longer applies in their current link to the promoted head.

~~~ conllu
# visual-style 8 11 orphan	color:blue
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
1	我	_	PRON	_	_	2	nsubj	_	1SG
2	飲	_	VERB	_	_	0	root	_	drink
3	咗	_	AUX	_	_	2	aux	_	PERF
4	兩	_	NUM	_	_	6	nummod	_	two
5	杯	_	NOUN	_	_	4	clf	_	CL:cup
6	茶	_	NOUN	_	_	2	obj	_	tea
7	，	_	PUNCT	_	_	8	punct	_	_
8	佢	_	PRON	_	_	2	conj	_	3SG
9	三	_	NUM	_	_	11	nummod	_	three
10	杯	_	NOUN	_	_	9	clf	_	CL:cup
11	咖啡	_	NOUN	_	_	8	orphan	_	coffee
12	。	_	PUNCT	_	_	2	punct	_	_

1	"I	_	_	_	_	0	_	_	_
2	drank	_	_	_	_	0	_	_	_
3	two	_	_	_	_	0	_	_	_
4	cups	_	_	_	_	0	_	_	_
5	of	_	_	_	_	0	_	_	_
6	tea,	_	_	_	_	0	_	_	_
7	and	_	_	_	_	0	_	_	_
8	he	_	_	_	_	0	_	_	_
9	three	_	_	_	_	0	_	_	_
10	cups	_	_	_	_	0	_	_	_
11	of	_	_	_	_	0	_	_	_
12	coffee."	_	_	_	_	0	_	_	_

~~~

In the above example, the verb in the second clause is elided, and the subject 佢 / _keoi5_ "he" is promoted to head position of the second clause, whereas the head of the object, 咖啡 / _gaa3fe1_ "coffee" in the noun phrase 三 杯 咖啡 / _saam1 bui1 gaa3fe1_ "three cups of coffee", is connected to the promoted head as an `orphan` dependent, rather than `obj` (since 咖啡 / _gaa3fe1_ "coffee" is not the object of 佢 / _keoi5_ "he" but of the elided verb).

The prefered order of promotion is as follows, depending on the relation of a word to its elided verb: 

- `nsubj` > `obj` > `iobj` > `obl` > `advmod` > `csubj` > `xcomp` > `ccomp` > `advcl`.

Some other arguments, such as the subject in (2), may also be elided along with the verb in a subsequent clause. In the following example, the second clause only has the direct and indirect objects left. According to the promotion hierarchy above, the direct object 手機 / _sau5gei1_ "mobile phone" is promoted to head and not the indirect object 嫲嫲 / _maa4maa4_ "grandmother".

~~~ conllu
# visual-style 12 14 orphan	color:blue
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
1	他	_	PRON	_	_	2	nsubj	_	3SG.M
2	買	_	VERB	_	_	0	root	_	give
3	咗	_	AUX	_	_	2	aux	_	PERF
4	一	_	NUM	_	_	6	nummod	_	one
5	個	_	NOUN	_	_	4	clf	_	CL:generic
6	手錶	_	NOUN	_	_	2	obj	_	watch
7	畀	_	ADP	_	_	8	case	_	to
8	爺爺	_	NOUN	_	_	2	obl	_	grandfather
9	，	_	PUNCT	_	_	12	punct	_	_
10	一	_	NUM	_	_	12	nummod	_	one
11	個	_	NOUN	_	_	10	clf	_	CL:generic
12	手機	_	NOUN	_	_	2	conj	_	mobile-phone
13	畀	_	ADP	_	_	14	case	_	to
14	嫲嫲	_	NOUN	_	_	12	orphan	_	grandmother
15	。	_	PUNCT	_	_	2	punct	_	_

1	"He	_	_	_	_	0	_	_	_
2	gave	_	_	_	_	0	_	_	_
3	grandpa	_	_	_	_	0	_	_	_
4	a	_	_	_	_	0	_	_	_
5	watch,	_	_	_	_	0	_	_	_
6	and	_	_	_	_	0	_	_	_
7	grandma	_	_	_	_	0	_	_	_
8	a	_	_	_	_	0	_	_	_
9	mobile	_	_	_	_	0	_	_	_
10	phone."	_	_	_	_	0	_	_	_

~~~

### References

- Tang, Sze-Wing. 2001. 'The (Non-)Existence of Gapping in Chinese and Its Implications for the Theory of Gapping.' Journal of East Asian Linguistics 10: 201. doi:10.1023/A:1011250802691
<!-- Interlanguage links updated Čt lis 12 09:43:37 CET 2020 -->
