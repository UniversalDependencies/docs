---
layout: relation
title: 'conj:q'
shortdef: 'relation conjoining two interrogatives differing only in polarity'
udver: '2'
---

The `conj:q` relation conjoins two interrogative verbs that differ only in polarity (does or does not?), equivalent to an English “whether” subclause.

~~~ conllu
# text = Уигьы аҧшаара мариоу имариаму здырхуада ?
# text-transcription = Uig’ə apšaara mariou imariamu zdərxuada?
# translation = And who even knows whether it is easy (or not) to find this?
1	Уигьы	уи́	PRON	_	Number=Sing|PronType=Dem	2	nmod:poss	_	LMSeg:уи́
2	аҧшаара	а́-ҧшаара	NOUN	_	Animacy=Nhum|Gender[psor]=Neut|Number=Sing|Number[psor]=Sing|Person[psor]=3	3	nsubj	_	LMSeg:а́-ҧшаара
3	мариоу	а́-мариа	VERB	_	Mood=Int|Number=Sing|Person[subj]=3|Tense=Pres|VerbForm=NonFin	5	ccomp:obj	_	LMSeg:а́-мариа
4	имариаму	а́-мариа	VERB	_	Mood=Int|Number=Sing|Person[subj]=3|Polarity=Neg|Tense=Pres|VerbForm=NonFin	3	conj:q	_	LMSeg:а́-мариа
5	здырхуада	а-ды́рра	VERB	_	Dyn=Yes|Person[obj]=3|Person[subj]=Rel|Tense=Pres|Trans=Yes|VerbForm=NonFin	0	root	_	LMSeg:а-ды́р-ра
6	?	?	PUNCT	_	_	5	punct	_	LMSeg:?

~~~
<!-- Interlanguage links updated Po 11. listopadu 2024, 20:10:41 CET -->
