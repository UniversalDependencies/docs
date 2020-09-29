---
layout: relation
title: 'orphan'
shortdef: 'orphan'
udver: '2'
---

The `orphan` relation is used for verb ellipsis in Mandarin (specifically, gapping or gapping-like phenomena; see Tang, 2001). One of elements in the clause with the elided verb is promoted, and all other elements that would have been connected to the verb would now be connected to the promoted head as `orphan` dependents if their original relationship to the elided verb no longer applies in their current link to the promoted head.

~~~ conllu
# visual-style 8 11 orphan	color:blue
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
1	我	_	PRON	_	_	2	nsubj	_	1SG
2	喝	_	VERB	_	_	0	root	_	drink
3	了	_	AUX	_	_	2	aux	_	PERF
4	兩	_	NUM	_	_	6	nummod	_	two
5	杯	_	NOUN	_	_	4	clf	_	CL:cup
6	茶	_	NOUN	_	_	2	obj	_	tea
7	，	_	PUNCT	_	_	8	punct	_	_
8	他	_	PRON	_	_	2	conj	_	3SG.M
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

In the above example, the verb in the second clause is elided, and the subject 他 / _tā_ "he" is promoted to head position of the second clause, whereas the head of the object, 咖啡 / _kāfēi_ "coffee" in the noun phrase 三 杯 咖啡 / _sān bēi kāfēi_ "three cups of coffee", is connected to the promoted head as an `orphan` dependent, rather than [`obj`]() (since 咖啡 / _kāfēi_ "coffee" is not the object of 他 / _tā_ "he" but of the elided verb).

The prefered order of promotion is as follows, depending on the relation of a word to its elided verb: 

- `nsubj` > `obj` > `iobj` > `obl` > `advmod` > `csubj` > `xcomp` > `ccomp` > `advcl`.

Some other arguments, such as the subject in (2), may also be elided along with the verb in a subsequent clause. In the following example, the second clause only has the direct and indirect objects left. According to the promotion hierarchy above, the direct object 手機 / _shǒujī_ "mobile phone" is promoted to head and not the indirect object 奶奶 / _nǎinai_ "grandmother".

~~~ conllu
# visual-style 11 8 orphan	color:blue
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
1	他	_	PRON	_	_	2	nsubj	_	3SG.M
2	給	_	VERB	_	_	0	root	_	give
3	爺爺	_	NOUN	_	_	2	iobj	_	grandfather
4	一	_	NUM	_	_	6	nummod	_	one
5	個	_	NOUN	_	_	4	clf	_	CL:generic
6	手錶	_	NOUN	_	_	2	obj	_	watch
7	，	_	PUNCT	_	_	11	punct	_	_
8	奶奶	_	NOUN	_	_	11	orphan	_	grandmother
9	一	_	NUM	_	_	11	nummod	_	one
10	個	_	NOUN	_	_	9	clf	_	CL:generic
11	手機	_	NOUN	_	_	2	conj	_	mobile-phone
12	。	_	PUNCT	_	_	2	punct	_	_

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

Ellipsis of the verb may also occur in a main clause when it follows a subordinate clause. In the following example, according to the head promotion hierarchy the subject of the main clause, 我 / _wǒ_ "I", is promoted to root. The object 五 個 / _wǔ gè_ "five (of them)" as well as the adverb 也 / _yě_ "also" are connected to the subject as `orphan` dependents. However, the head of the subordinating clause is labelled an [`advcl`]() dependent of 我 / _wǒ_ "I" since its relation to the main clause is still as an adverbial clause.

~~~ conllu
# visual-style 8 9 orphan	color:blue
# visual-style 8 11 orphan	color:blue
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
1	ROOT	_	_	_	_	0	root	_	_
2	如果	_	SCONJ	_	_	4	mark	_	if
3	你	_	PRON	_	_	4	nsubj	_	2SG
4	吃	_	VERB	_	_	8	advcl	_	eat
5	五	_	NUM	_	_	6	nummod	_	five
6	個	_	NOUN	_	_	4	obj	_	CL:generic
7	，	_	PUNCT	_	_	4	punct	_	_
8	我	_	PRON	_	_	1	root	_	1SG
9	也	_	ADV	_	_	8	orphan	_	also
10	五	_	NUM	_	_	11	nummod	_	five
11	個	_	NOUN	_	_	8	orphan	_	CL:generic
12	。	_	PUNCT	_	_	8	punct	_	_

1	"If	_	_	_	_	0	_	_	_
2	you	_	_	_	_	0	_	_	_
3	eat	_	_	_	_	0	_	_	_
4	five,	_	_	_	_	0	_	_	_
5	I'll	_	_	_	_	0	_	_	_
6	also	_	_	_	_	0	_	_	_
7	(eat)	_	_	_	_	0	_	_	_
8	five."	_	_	_	_	0	_	_	_

~~~

### References

- Tang, Sze-Wing. 2001. 'The (Non-)Existence of Gapping in Chinese and Its Implications for the Theory of Gapping.' Journal of East Asian Linguistics 10: 201. doi:10.1023/A:1011250802691
<!-- Interlanguage links updated Út zář 29 20:32:00 CEST 2020 -->
