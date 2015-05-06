---
layout: relation
title: 'vocative'
shortdef: 'vocative'
---

The `vocative` relation is used to mark a dialogue participant addressed in text (common in conversations, emails and newsgroup postings). The relation links the addressee’s name to its host sentence.

### Examples:

~~~ sdparse
Slán leat , a chara \n Goodbye , friend
vocative(Slán, chara)
vocative(Goodbye, friend)
~~~

_Is dóigh liom a Mháiréad, go bhfuil mé i ngrá leat_  `I think Mairead, that I'm in love with you'

~~~ conllx
10	Is	is	VERB	VERB	_	11	cop	_	_
11	dóigh	dóigh	NOUN	NOUN	_	6	ccomp	_	_
12	liom	le	ADP	ADP	_	11	nmod:prep	_	_
13	a	a	PART	PART	_	14	case:voc	_	_
14	Mháiréad	Máiréad	PROPN	PROPN	_	11	vocative	_	_
15	,	,	PUNCT	PUNCT	_	16	punct	_	_
16	go	go	PART	PART	_	17	mark:prt	_	_
17	bhfuil	bí	VERB	VERB	_	11	csubj:cop	_	_
18	mé	mé	PRON	PRON	_	17	nsubj	_	_
19	i	i	ADP	ADP	_	20	case	_	_
20	ngrá	grá	NOUN	NOUN	_	17	xcomp:pred	_	_
21	leat	le	ADP	ADP	_	20	nmod:prep	_	_
~~~
