---
layout: relation
title: 'obj:agent'
shortdef: 'agentive object'
udver: '2'
---

In a causative construction the `obj:agent` relation attaches the content verb to his agent, when the latter is the syntactical object of the sentence
(this initial agent has been demoted and became the object of the causative construction).
For example, in the following sentence, _ավարտը_ is the true agent of the verb "մոտեցնել" (_Մոտեցավ ավարտը։_).
This nominal phrase can be pronominalized as follows: _Վերակառուցման քաղաքականությունը մոտեցրեց այն։_ The use of the pronoun _այն_ clearly shows that _ավարտը_ is the syntactical object of the sentence.

~~~ conllu
# visual-style 4 5 flat:range color:blue
1	Վերակառուցման	վերակառուցում	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Coll	2	nmod:poss	_	_
2	քաղաքականությունը	քաղաքականություն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	3	nsubj:caus	_	_
3	մոտեցրեց	մոտեցնել	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Past|VerbForm=Fin|Voice=Cau	0	root	_	_
4	Սառը	սառը	ADJ	_	Degree=Pos	5	amod	_	_
5	պատերազմի	պատերազմ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	6	nmod:poss	_	_
6	ավարտը	ավարտ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	3	obj:agent	_	SpaceAfter=No
7	։	։	PUNCT	_	_	3	punct	_	_

~~~

The infinitive verb governs the syntactical subject of the sentence (i.e. the causer) with a [nsubj:caus]() relation.
<!-- Interlanguage links updated St lis 3 20:59:03 CET 2021 -->
