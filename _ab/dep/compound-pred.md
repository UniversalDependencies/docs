---
layout: relation
title: 'compound:pred'
shortdef: 'compound predicate'
udver: '2'
---

The `compound:pred` relation connects two (or more) parts of a multi-word predicate whose first part carries argument prefixes and whose last part carries TAM suffixes.

~~~ conllu
# text = Баҭал дысҩыза бзиоуп.
# text-transcription = Batal dəsyʷəza bziouṗ.
# translation = Batal is my good friend.
1	Баҭал	Баҭал	PROPN	_	NameType=Geo	2	nsubj	_	_
2	дысҩыза	а-ҩы́за	VERB	_	Animacy=Hum|Number=Sing|Number[psor]=Sing|Person[psor]=1	0	root	_	_
3	бзиоуп	а-бзи́а	VERB	_	Number=Sing|Tense=Pres|VerbForm=Fin	2	compound:pred	_	_
4	.	.	PUNCT	_	_	3	punct	_	_

~~~

