---
layout: relation
title: 'compound:prt'
shortdef: 'particle compound'
udver: '2'
---

The `compound:prt` relation connects a particle to a verb.

~~~ conllu
# text = Абри иоуп бзиа избо.
# text-transcription = Abri iouṗ bzia izbo.
# translation = This is him whom I love (= see well).
1	Абри	абри́	PRON	_	Number=Sing|PronType=Dem	0	root	_	_
2	иоуп	а́кә-заа-ра	AUX	_	Dyn=No|Gender[io]=Masc|Number[io]=Sing|Person[io]=3|Person[subj]=3|Tense=Pres|VerbForm=Fin	1	cop	_	_
3	бзиа	бзи́а	ADV	_	_	4	compound:prt	_	_
4	избо	а-ба-ра́	VERB	_	Dyn=Yes|Number[subj]=Sing|Person[obj]=Rel|Person[subj]=1|Tense=Pres|Trans=Yes|VerbForm=NonFin	1	csubj	_	_
5	.	.	PUNCT	_	_	1	punct	_	_

~~~

