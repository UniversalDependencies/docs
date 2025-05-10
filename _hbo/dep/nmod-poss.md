---
layout: relation
title: 'nmod:poss'
shortdef: 'possessive nominal modifier'
udver: '2'
---

The `nmod:poss` subtype of [nmod]() is used for pronominal suffixes on nouns.

~~~ sdparse
אבי ו \n father his
nmod:poss(אבי, ו)
~~~

אביו
"his father"

<!-- genesis 31 -->
~~~ conllu
# sent_id = Masoretic-Genesis-2:1-hbo
# text = וַיְכֻלּ֛וּ הַשָּׁמַ֥יִם וְהָאָ֖רֶץ וְכָל־צְבָאָֽם׃
# translit = ṿaykulu hashamayim ṿehaʼarets ṿekhal tsevaʼam
# visual-style 11 12 nmod:poss color:blue
1-2	וַיְכֻלּ֛וּ	_	_	_	_	_	_	_	_
1	וַ	ו	CCONJ	conj	_	2	cc	_	Gloss=and|Ref=GEN_2.1|Translit=ṿa
2	יְכֻלּ֛וּ	כלה	VERB	verb	Gender=Masc|HebBinyan=PUAL|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	0	root	_	Gloss=be.complete|Ref=GEN_2.1|Translit=yekhulu
3-4	הַשָּׁמַ֥יִם	_	_	_	_	_	_	_	_
3	הַ	ה	DET	art	PronType=Art	4	det	_	Gloss=the|Ref=GEN_2.1|Translit=ha
4	שָּׁמַ֥יִם	שׁמים	NOUN	subs	Gender=Masc|Number=Plur	2	nsubj	_	Gloss=heavens|Ref=GEN_2.1|Translit=shamayim
5-7	וְהָאָ֖רֶץ	_	_	_	_	_	_	_	_
5	וְ	ו	CCONJ	conj	_	7	cc	_	Gloss=and|Ref=GEN_2.1|Translit=ṿe
6	הָ	ה	DET	art	PronType=Art	7	det	_	Gloss=the|Ref=GEN_2.1|Translit=ha
7	אָ֖רֶץ	ארץ	NOUN	subs	Gender=Fem|Number=Sing	4	conj	_	Gloss=earth|Ref=GEN_2.1|Translit=ʼarets
8-9	וְכָל	_	_	_	_	_	_	_	_
8	וְ	ו	CCONJ	conj	_	9	cc	_	Gloss=and|Ref=GEN_2.1|Translit=ṿe
9	כָל	כל	NOUN	subs	Gender=Masc|Number=Sing	4	conj	_	Gloss=whole|Ref=GEN_2.1|Translit=kal
10	־	־	PUNCT	punct	_	11	punct	_	Ref=GEN_2.1|SpaceAfter=No
11-12	צְבָאָֽם	_	_	_	_	_	_	_	_
11	צְבָאָֽ	צבא	NOUN	subs	Gender=Masc|Number=Sing	9	compound:smixut	_	Gloss=service|Ref=GEN_2.1|Translit=tsevaʼa
12	ם	הם	PRON	prn	Gender=Masc|Number=Plur|Person=3|PronType=Prs	11	nmod:poss	_	Ref=GEN_2.1|Translit=m
13	׃	׃	PUNCT	punct	_	2	punct	_	Ref=GEN_2.1

~~~

_ויכלו השמים והארץ וכל־**צבאם**׃_

_ṿaykulu hashamayim ṿehaʼarets ṿekhal **tsevaʼam**_

_And the sky and the land and all **their host** were completed._

<!-- Interlanguage links updated So 10. května 2025, 18:15:45 CEST -->
