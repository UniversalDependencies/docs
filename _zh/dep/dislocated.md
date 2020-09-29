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
2	的	_	PART	_	_	1	case	_	GEN
3	辭職	_	NOUN	_	_	4	compound	_	resignation
4	信	_	NOUN	_	_	6	dislocated	_	letter
5	會	_	AUX	_	_	6	aux	_	will
6	放	_	VERB	_	_	0	root	_	put
7	在	_	ADP	_	_	9	case	_	on
8	你	_	PRON	_	_	9	nmod	_	2SG
9	桌子	_	NOUN	_	_	6	obl	_	table
10	上	_	ADP	_	_	9	case:loc	_	above

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
1	龍	_	PROPN	_	_	2	compound	_	Long
2	先生	_	NOUN	_	_	9	dislocated	_	Mr.
3	我	_	PRON	_	_	5	nmod	_	1SG
4	的	_	PART	_	_	3	case	_	GEN
5	老闆	_	NOUN	_	_	2	appos	_	boss
6	他	_	PRON	_	_	9	nsubj	_	3SG.M
7	是	_	VERB	_	_	9	cop	_	be
8	個	_	NOUN	_	_	9	det	_	CL:generic
9	搗蛋鬼	_	NOUN	_	_	0	root	_	troublemaker

1	"Peter,	_	_	_	_	0	_	_	_
2	my	_	_	_	_	0	_	_	_
3	boss	_	_	_	_	0	_	_	_
4	--	_	_	_	_	0	_	_	_
5	he	_	_	_	_	0	_	_	_
6	is	_	_	_	_	0	_	_	_
7	a	_	_	_	_	0	_	_	_
8	troublemaker."	_	_	_	_	0	_	_	_

~~~

Below is an example of a topic phrase that is not an argument of the main verb, but still labeled `dislocated`.

~~~ conllu
# visual-style 5 3 dislocated	color:blue
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
1	今天	_	NOUN	_	_	3	nmod	_	today
2	的	_	PART	_	_	1	case	_	GEN
3	午餐	_	NOUN	_	_	5	dislocated	_	lunch
4	我	_	PRON	_	_	5	nsubj	_	1SG
5	請客	_	VERB	_	_	0	root	_	invite

1	"As	_	_	_	_	0	_	_	_
2	for	_	_	_	_	0	_	_	_
3	lunch	_	_	_	_	0	_	_	_
4	today,	_	_	_	_	0	_	_	_
5	I'm	_	_	_	_	0	_	_	_
6	paying"	_	_	_	_	0	_	_	_

~~~

However, this relation does not apply to arguments that appear in non-canonical positions due to valence-changing function words such as 把 _bǎ_ or 给 _gěi_, which are treated as prepositions instead (see [obl:patient]()).

**Right dislocation** is also possible but occurs more frequently in spoken data:

~~~ conllu
# visual-style 1 6 dislocated	color:blue
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
1	來	_	VERB	_	_	0	root	_	come
2	了	_	PART	_	_	1	discourse:sp	_	SP
3	嗎	_	PART	_	_	1	discourse:sp	_	SP:Q
4	，	_	PUNCT	_	_	6	punct	_	_
5	你	_	PRON	_	_	6	nmod	_	2SG
6	哥哥	_	NOUN	_	_	1	dislocated	_	elder-brother
7	？	_	PUNCT	_	_	1	punct	_	_

1	"Has	_	_	_	_	0	_	_	_
2	he	_	_	_	_	0	_	_	_
3	arrived,	_	_	_	_	0	_	_	_
4	your	_	_	_	_	0	_	_	_
5	brother?"	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 2 5 dislocated	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
1	我們	_	PRON	_	_	2	nsubj	_	1PL
2	去	_	VERB	_	_	0	root	_	go
3	吧	_	PART	_	_	2	discourse:sp	_	SP
4	，	_	PUNCT	_	_	5	punct	_	_
5	現在	_	NOUN	_	_	2	dislocated	_	now

1	"Let's	_	_	_	_	0	_	_	_
2	go	_	_	_	_	0	_	_	_
3	--	_	_	_	_	0	_	_	_
4	now."	_	_	_	_	0	_	_	_

~~~
<!-- Interlanguage links updated Út zář 29 20:31:51 CEST 2020 -->
