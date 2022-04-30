---
layout: relation
title: 'case'
shortdef: 'case marking'
udver: '2'
---

The case relation for Mandarin Chinese is applied to various particles that mark non-clausal dependents, including the genitive 的 _de_ (1); prepositions (2, 3), including "coverbs" (4); and the valence markers 把 _bǎ_ and 將 _jiāng_ (5) in "BA constructions" (see [obl:patient]()); the comparative 比 _bǐ_ (6); and 被 _bèi_ in "long passive" constructions where the agent is mentioned (7).

Note that 的 _de_ has other grammaticalized functions that require the [mark:rel]() relation instead.

Postpositions, also known as "localizers", are labeled with [case:loc]() instead. 

~~~ conllu
# visual-style 1 2 case	color:blue
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
1	你	_	PRON	_	_	3	nmod	_	2SG
2	的	_	PART	_	_	1	case	_	GEN
3	電話	_	NOUN	_	_	0	root	_	phone

1	"your	_	_	_	_	0	_	_	_
2	phone"	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 3 2 case	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
1	我	_	PRON	_	_	5	nsubj	_	1SG
2	在	_	ADP	_	_	3	case	_	at
3	公司	_	NOUN	_	_	5	obl	_	company
4	已經	_	ADV	_	_	5	advmod	_	already
5	完成	_	VERB	_	_	0	root	_	complete
6	了	_	PART	_	_	5	discourse:sp	_	SP

1	"I	_	_	_	_	0	_	_	_
2	already	_	_	_	_	0	_	_	_
3	completed	_	_	_	_	0	_	_	_
4	it	_	_	_	_	0	_	_	_
5	at	_	_	_	_	0	_	_	_
6	the	_	_	_	_	0	_	_	_
7	office."	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 3 2 case	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
1	戴	_	VERB	_	_	0	root	_	wear
2	在	_	ADP	_	_	3	case	_	on
3	手	_	NOUN	_	_	1	obl	_	hand
4	上	_	ADP	_	_	3	case:loc	_	above

1	"wear	_	_	_	_	0	_	_	_
2	it	_	_	_	_	0	_	_	_
3	on	_	_	_	_	0	_	_	_
4	the	_	_	_	_	0	_	_	_
5	hand"	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 2 1 case	color:blue
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
1	跟	_	ADP	_	_	2	case	_	with
2	我	_	PRON	_	_	3	obl	_	1SG
3	來	_	VERB	_	_	0	root	_	come

1	"Come	_	_	_	_	0	_	_	_
2	with	_	_	_	_	0	_	_	_
3	me."	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 2 1 case	color:blue
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
1	把	_	ADP	_	_	2	case	_	BA
2	他們	_	PRON	_	_	3	obl:patient	_	3PL
3	藏	_	VERB	_	_	0	root	_	hide
4	在	_	ADP	_	_	5	case	_	in
5	房	_	NOUN	_	_	3	obl	_	room
6	裡	_	ADP	_	_	5	case:loc	_	inside

1	"Hide	_	_	_	_	0	_	_	_
2	them	_	_	_	_	0	_	_	_
3	inside	_	_	_	_	0	_	_	_
4	the	_	_	_	_	0	_	_	_
5	room."	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 4 3 case	color:blue
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
1	我們	_	PRON	_	_	7	nsubj	_	1PL
2	應該	_	AUX	_	_	7	aux	_	should
3	比	_	ADP	_	_	4	case	_	COMP
4	他們	_	PRON	_	_	7	obl	_	3PL
5	更	_	ADV	_	_	6	advmod	_	more
6	早	_	ADJ	_	_	7	advmod	_	early
7	到達	_	VERB	_	_	0	root	_	arrive
8	公司	_	NOUN	_	_	7	obj	_	company

1	"We	_	_	_	_	0	_	_	_
2	may	_	_	_	_	0	_	_	_
3	arrive	_	_	_	_	0	_	_	_
4	at	_	_	_	_	0	_	_	_
5	the	_	_	_	_	0	_	_	_
6	company	_	_	_	_	0	_	_	_
7	before	_	_	_	_	0	_	_	_
8	(earlier	_	_	_	_	0	_	_	_
9	than)	_	_	_	_	0	_	_	_
10	them."	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 2 1 case	color:blue
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
1	被	_	ADP	_	_	2	case	_	by
2	你	_	PRON	_	_	3	obl:agent	_	2SG
3	偷	_	VERB	_	_	0	root	_	steal
4	了	_	PART	_	_	3	discourse:sp	_	SP

1	"It	_	_	_	_	0	_	_	_
2	was	_	_	_	_	0	_	_	_
3	stolen	_	_	_	_	0	_	_	_
4	by	_	_	_	_	0	_	_	_
5	you."	_	_	_	_	0	_	_	_

~~~
<!-- Interlanguage links updated St lis 3 20:58:42 CET 2021 -->
