---
layout: relation
title: 'nmod'
shortdef: 'nominal modifier'
---

The `nmod` relation is used for nominal modifiers of nouns or clausal predicates. `nmod` is typically a noun functioning as a non-core (oblique) argument or adjunct, and often marked by a preposition using `case`.

~~~ sdparse
Tá sé ráite ag tráchtairí áirithe \n It is said by some commentators
nmod(ráite, tráchtairí)
case(tráchtairí, ag)
~~~

~~~ sdparse
Tá an Roinn ag obair le réimse tionscadal \n The Department is working with a range of projects
nmod(obair,réimse)
case(réimse, le)
~~~



It is also used for attaching noun phrases, such as headings, to clauses:

_TOGRA IONAID - Eolas a chur ar fáil ar fholúntais fostaíochta le FÁS "CENTRE PROJECT_ - `To provide information on employment opportunities with FÁS.'

~~~ conllx
1	TOGRA	TOGRA	X	X	_	4	nmod	_	_
2	IONAID	ionad	NOUN	NOUN	_	1	compound	_	_
3	-	-	PUNCT	PUNCT	_	4	punct	_	_
4	Eolas	eolas	NOUN	NOUN	_	0	root	_	_
5	a	a	PART	PART	_	6	mark	_	_
6	chur	cur	NOUN	NOUN	_	4	xcomp	_	_
7	ar	ar	ADP	ADP	_	8	case	_	_
8	fáil	fáil	NOUN	NOUN	_	6	xcomp	_	_
9	ar	ar	ADP	ADP	_	10	case	_	_
10	fholúntais	folúntas	NOUN	NOUN	_	6	nmod	_	_
11	fostaíochta	fostaíocht	NOUN	NOUN	_	10	compound	_	_
12	le	le	ADP	ADP	_	13	case	_	_
13	FÁS	FÁS	X	X	_	10	nmod	_	_
~~~ 

It is also used to label the attachment of _augment pronouns_ to their nominal head:

~~~ sdparse
Comharsain aoibhne ab ea iad \n They were lovely neighbours
nmod(iad, ea)
~~~







