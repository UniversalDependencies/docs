---
layout: postag
title: 'CCONJ'
shortdef: 'coordinating conjunction'
udver: '2'
---

`CCONJ` is used to tag an Yupik enclitic (_=llu_ "and").

### Examples
```
Naakallu			nengyunllu
naa(N)-[Abs.1SgPoss.Sg]=llu	nengyugh(N)-[Abs.2SgPoss.Sg]=llu
"My mother and your grandmother"
```
~~~ conllu
1-3	Naakallu	_	_	_	_	_	_	_	Analysis=naa(N)^[Abs.1SgPoss.Sg]^\=llu|Gloss=my-mother-
1	Naa	naa	NOUN	_	_	8	nsubj	_	Analysis=naa(N)|Gloss=mother
2	ka	ka	X	_	Case=Abs|Number=Sing|Number[psor]=Sing|Person[psor]=1	1	dep:infl	_	Analysis=[Abs.1SgPoss.Sg]
3	llu	llu	CCONJ	_	_	1	cc	_	Analysis=\=llu|Gloss=and
4-6	nengyunllu	_	_	_	_	_	_	_	Analysis=nengyugh(N)^[Abs.2SgPoss.Sg]^\=llu|Gloss=your-grandmother
4	nengyu	nengyu	NOUN	_	_	1	conj	_	Analysis=nengyugh(N)|Gloss=grandmother
5	n	n	X	_	Case=Abs|Number=Sing|Number[psor]=Sing|Person[psor]=2	4	dep:infl	_	Analysis=[Abs.2SgPoss.Sg]
6	llu	llu	CCONJ	_	_	4	cc	_	Analysis=\=llu|Gloss=and
~~~