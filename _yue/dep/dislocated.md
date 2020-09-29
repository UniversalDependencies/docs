---
layout: relation
title: 'dislocated'
shortdef: 'dislocated elements'
udver: '2'
---

The `dislocated` relation is used for elements that have been displaced from its regular syntactic position, often to the very front or back of the clause it resides within or of the whole sentence. This applies often to an argument of a clause that has been moved to the periphery for topic, focus, or similar types of effects. However, this relation is also used generally for topic elements that otherwise do not fulfill any core grammatical relation of a sentence, except for temporal nouns (see [obl:tmod]()) or locational nouns (see [obl]()) functioning as adjuncts.

~~~ conllu
# visual-style 6 4 dislocated	color:blue
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
1	我	_	PRON	_	_	4	nmod	_	1SG
2	封	_	NOUN	_	_	1	clf	_	CL:letter
3	辭職	_	NOUN	_	_	4	compound	_	resignation
4	信	_	NOUN	_	_	6	dislocated	_	letter
5	會	_	AUX	_	_	6	aux	_	will
6	擺	_	VERB	_	_	0	root	_	put
7	喺	_	ADP	_	_	9	case	_	on
8	你	_	PRON	_	_	9	nmod	_	2SG
9	枱	_	NOUN	_	_	6	obl	_	table
10	度	_	ADP	_	_	9	case:loc	_	place

1	"My	_	_	_	_	0	_	_	_
2	resignation	_	_	_	_	0	_	_	_
3	letter,	_	_	_	_	0	_	_	_
4	I	_	_	_	_	0	_	_	_
5	will	_	_	_	_	0	_	_	_
6	put	_	_	_	_	0	_	_	_
7	it	_	_	_	_	0	_	_	_
8	on	_	_	_	_	0	_	_	_
9	your	_	_	_	_	0	_	_	_
10	desk."	_	_	_	_	0	_	_	_

~~~

This relation is also used for topicalized and dislocated subjects (followed by a pronoun functioning as the syntactic subject of the sentence and referring back to topicalized subject). 

~~~ conllu
# visual-style 9 2 dislocated	color:blue
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
1	我	_	PRON	_	_	2	nmod	_	1SG
2	老闆	_	NOUN	_	_	6	dislocated	_	boss
3	佢	_	PRON	_	_	6	nsubj	_	3SG
4	係	_	AUX	_	_	6	cop	_	be
5	個	_	NOUN	_	_	6	det	_	CL:generic
6	搞屎棍	_	NOUN	_	_	0	root	_	troublemaker

1	My	_	_	_	_	0	_	_	_
2	boss,	_	_	_	_	0	_	_	_
3	he's	_	_	_	_	0	_	_	_
4	a	_	_	_	_	0	_	_	_
5	troublemaker."	_	_	_	_	0	_	_	_

~~~

Below is an example of a topic phrase that is not an argument of the main verb, but still labeled `dislocated`.

~~~ conllu
# visual-style 5 3 dislocated	color:blue
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
1	今晚	_	NOUN	_	_	3	nmod	_	tonight
2	嗰	_	DET	_	_	1	det	_	that
3	餐	_	NOUN	_	_	5	dislocated	_	CL:meal
4	我	_	PRON	_	_	5	nsubj	_	1SG
5	請	_	VERB	_	_	0	root	_	invite

1	"As	_	_	_	_	0	_	_	_
2	for	_	_	_	_	0	_	_	_
3	dinner	_	_	_	_	0	_	_	_
4	tonight,	_	_	_	_	0	_	_	_
5	I'm	_	_	_	_	0	_	_	_
6	inviting	_	_	_	_	0	_	_	_
7	(you,	_	_	_	_	0	_	_	_
8	and	_	_	_	_	0	_	_	_
9	paying)."	_	_	_	_	0	_	_	_

~~~

However, this relation does not apply to arguments that appear in non-canonical positions due to valence-changing function words such as 將 _zoeng1_ or 畀 _bei2_, which are treated as prepositions instead (see [obl:patient]()).

**Right dislocation** is also possible:

~~~ conllu
# visual-style 1 7 dislocated	color:blue
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
1	嚟	_	VERB	_	_	0	root	_	come
2	咗	_	AUX	_	_	1	aux	_	PERF
3	未	_	ADV	_	_	1	advmod	_	yet
4	呀	_	PUNCT	_	_	1	discourse:sp	_	SP
5	，	_	PUNCT	_	_	7	punct	_	_
6	你	_	PRON	_	_	7	nmod	_	2SG
7	細佬	_	NOUN	_	_	1	dislocated	_	younger-brother
8	？	_	PUNCT	_	_	1	punct	_	_

1	"Has	_	_	_	_	0	_	_	_
2	he	_	_	_	_	0	_	_	_
3	arrived	_	_	_	_	0	_	_	_
4	yet,	_	_	_	_	0	_	_	_
5	your	_	_	_	_	0	_	_	_
6	younger	_	_	_	_	0	_	_	_
7	brother?"	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 2 5 dislocated	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
1	我哋	_	PRON	_	_	2	nsubj	_	1PL
2	去	_	VERB	_	_	0	root	_	go
3	啦	_	PART	_	_	2	discourse:sp	_	SP
4	，	_	PUNCT	_	_	5	punct	_	_
5	而家	_	NOUN	_	_	2	dislocated	_	now

1	"Let's	_	_	_	_	0	_	_	_
2	go	_	_	_	_	0	_	_	_
3	--	_	_	_	_	0	_	_	_
4	now."	_	_	_	_	0	_	_	_

~~~
<!-- Interlanguage links updated Út zář 29 20:43:17 CEST 2020 -->
