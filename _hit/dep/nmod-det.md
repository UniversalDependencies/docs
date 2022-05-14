---
layout: relation
title: 'nmod:det'
shortdef: 'determinative'
udver: '2'
---

In Hittite, this relation is used for determinatives, which indicate the category that a modified word should be part of. Examples include *d* (indicates a god) and *URU* (indicates a city).
~~~ conllu
# sent_id = 6.7-2
# text = nu d-UTU ŠA-ME-E IGI.ḪI.A-it uš-ke-ez-zi NINDA-an-n=a-a=z TI-an-na-aš az-zi-ik-ke-ez-zi
# translation = She will continue to see the Sun-God of Heaven with [her] eyes and will continue to eat the bread of life.
# source = KBo 4.8 ii 10-12 (NH)
1	nu	nu	CCONJ	_	_	6	cc	_	_
2-3	d-UTU	_	_	_	_	_	_	_	_
2	d	d	NOUN	_	_	3	nmod:det	_	_
3	UTU	Ištanu-	PROPN	_	_	6	obj	_	_
4	ŠA-ME-E	nepiš-	NOUN	_	Case=Gen|Gender=Neut|Number=Sing	3	nmod	_	_
5	IGI.ḪI.A-it	šākuwa-	NOUN	_	Case=Ins|Gender=Com|Number=Plur	6	obl	_	_
6	uš-ke-ez-zi	au(š)-	VERB	_	Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
7-9	NINDA-an-n=a-a=z	_	_	_	_	_	_	_	_
7	NINDA-an-n	NINDA-a-	NOUN	_	Case=Acc|Gender=Com|Number=Sing	11	obj	_	_
8	a-a	-a	CCONJ	_	_	11	cc	_	_
9	z	-za	PART	_	_	11	expl:pass	_	_
10	TI-an-na-aš	ḫuišwatar	NOUN	_	Case=Gen|Gender=Neut|Number=Sing	7	nmod	_	_
11	az-zi-ik-ke-ez-zi	ēd-	VERB	_	Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	conj	_	_
~~~
~~~ conllu
# sent_id = 7.10-1
# text = KUR URU-Ḫa-pa-al-la=ma-a=z li-in-ki-ya kat-ta-an ki-iš-ša-an zi-ik-ke-eš
# translation = Thus you placed the land of Ḫapalla under oath.
# source = KUB 14.1 rev. 21-23 (MH/MS)
1	KUR	utnē-	NOUN	_	Gender=Neut	9	obj	_	_
2-5	URU-Ḫa-pa-al-la=ma-a=z	_	_	_	_	_	_	_	_
2	URU	URU	NOUN	_	_	3	nmod:det	_	_
3	Ḫa-pa-al-la	Ḫapalla	PROPN	_	_	1	nmod	_	_
4	ma-a	-ma	PART	_	_	3	discourse	_	_
5	z	-za	PART	_	_	9	expl:pass	_	_
6	li-in-ki-ya	lingai-	NOUN	_	Case=Dat|Gender=Com|Number=Sing	9	obl	_	_
7	kat-ta-an	kattan	ADP	_	_	6	case	_	_
8	ki-iš-ša-an	kiššan	ADV	_	_	9	advmod	_	_
9	zi-ik-ke-eš	zikke-	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
~~~
<!-- Interlanguage links updated So kvě 14 19:03:47 CEST 2022 -->
