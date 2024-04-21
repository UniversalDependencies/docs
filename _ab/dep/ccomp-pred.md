---
layout: relation
title: 'ccomp:pred'
shortdef: 'a clausal complement which is the predicative complement of the main verb'
udver: '2'
---

The dependent of an `ccomp:pred` is clausal complement which is the predicative complement of the main verb.

~~~ conllu
# text = Сара соума хәарҭара злам ҳәа иуҧхьаӡо?
# text-transcription = Sara souma xʷartara zlam ḥʷa iupx’aʒo?
# translation = Am I the one you regard as having no benefit?
1	Сара	сара́	PRON	_	Number=Sing|Person=1|PronType=Prs	2	iobj:pred	_	_
2	соума	а́кә-заа-ра	VERB	_	Dyn=No|Mood=Int|Number[io]=Sing|Person[io]=1|Person[subj]=3|Tense=Pres|VerbForm=NonFin	0	root	_	_
3	хәарҭара	а-хәарҭара́	NOUN	_	Animacy=Nhum|Number=Sing	4	nsubj	_	_
4	злам	а́-ла-заа-ра	VERB	_	Dyn=No|Person[lo]=Rel|Person[subj]=3|Polarity=Neg|Tense=Pres|VerbForm=NonFin	6	ccomp:pred	_	_
5	ҳәа	ҳәа́	PART	_	_	4	mark	_	_
6	иуҧхьаӡо	а́-ҧхьаӡа-ра	VERB	_	Dyn=Yes|Gender[subj]=Masc|Number[subj]=Sing|Person[obj]=Rel|Person[subj]=2|Tense=Pres|Trans=Yes|VerbForm=NonFin	2	csubj	_	_
7	?	?	PUNCT	_	_	2	punct	_	_

~~~

