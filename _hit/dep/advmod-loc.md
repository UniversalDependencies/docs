---
layout: relation
title: 'advmod:loc'
shortdef: 'an adverbial local marker'
udver: '2'
---

This is used to subordinate the local particles *-šan, -kan,* and *-ašta* to the predicate in the clause. Each of these examples have a complex distribution.

~~~ conllu
# text = nu-u=š-ša-an ne-pí-ši ti-ya-ši
# translation = And you will step in the sky.
# source = KUB 6.45 iii 13-15 = KUB 6.46 iii 53-54 (NH)
1-2	nu-u=š-ša-an	_	_	_	_	_	_	_	_
1	nu-u	nu	CCONJ	_	_	4	cc	_	_
2	š-ša-an	-šan	PART	_	_	4	advmod:loc	_	_
3	ne-pí-ši	nepiš-	NOUN	_	Case=Dat|Gender=Com|Number=Sing	4	obl	_	_
4	ti-ya-ši	tiya-	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
~~~

~~~ conllu
# text = n=a-an=kán iš-tar-na ar-ḫa pa-a-un
# translation = and [so] I went across it
# source = KBo 5.8 i 26-27 (NH)
1-3	n=a-an=kán	_	_	_	_	_	_	_	_
1	n	nu	CCONJ	_	_	6	discourse:conn	_	_
2	a-an	-aš	PRON	_	Case=Acc|Gender=Com|Number=Sing|Person=3|PronType=Prs	6	obj	_	_
3	kán	-kan	PART	_	_	6	advmod:loc	_	_
4	iš-tar-na	ištarna	ADV	_	_	6	advmod	_	_
5	ar-ḫa	arḫa	ADV	_	_	6	advmod	_	_
6	pa-a-un	pai-#1-	VERB	_	Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
~~~

~~~ conllu
# text = ma-a-n=a-aš-ta MUL.ḪI.A-eš ú-en-zi nu=uš a-ap-pa iš-ḫi-i=š-ši pé-en-na-i
# translation = when the stars come out, he will drive them back to their master.
# source = KBo 6.2 iv 12-13 (OS) = Laws §79
1-2	ma-a-n=a-aš-ta	_	_	_	_	_	_	_	_
1	ma-a-n	mān	SCONJ	_	_	4	mark	_	_
2	a-aš-ta	-ašta	PART	_	_	4	advmod:loc	_	_
3	MUL.ḪI.A-eš	ḫašter-	NOUN	_	Case=Nom|Gender=Com|Number=Plur	4	nsubj	_	_
4	ú-en-zi	uwa-	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	10	advcl	_	_
5-6	nu=uš	_	_	_	_	_	_	_	_
5	nu	nu	PART	_	_	10	discourse:conn	_	_
6	uš	-at	PRON	_	Case=Acc|Gender=Com|Number=Plur|Person=3|PronType=Prs	10	obj	_	_
7	a-ap-pa	āppa	ADV	_	_	10	advmod	_	_
8-9	iš-ḫi-i=š-ši	_	_	_	_	_	_	_	_
8	iš-ḫi-i	išḫā-	NOUN	_	Case=Dat|Gender=Com|Number=Sing	10	iobj	_	_
9	š-ši	-šiš	PRON	_	Case=Dat|Number=Sing|Person=3|Poss=Yes|PronType=Prs	8	nmod	_	_
10	pé-en-na-i	penna/i-	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
~~~
<!-- Interlanguage links updated So kvě 14 19:02:57 CEST 2022 -->
