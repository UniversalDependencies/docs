---
layout: postag
title: 'PART'
shortdef: 'particle'
udver: '2'
---

The tag `PART` is only used for ה, a clausal proclitic which marks polar questions.

<!-- genesis 423 -->
~~~ conllu
# sent_id = Masoretic-Genesis-18:17-hbo
# text = וַֽיהֹוָ֖ה אָמָ֑ר הַֽמְכַסֶּ֤ה אֲנִי֙ מֵֽאַבְרָהָ֔ם אֲשֶׁ֖ר אֲנִ֥י עֹשֶֽׂה׃
# translit = ṿaihoṿah ʼamar hamkaseh ʼani meʼavraham ʼasher ʼani ʻośeh
# visual-style 4 bgColor:blue
# visual-style 4 fgColor:white
1-2	וַֽיהֹוָ֖ה	_	_	_	_	_	_	_	_
1	וַֽ	ו	CCONJ	conj	_	3	cc	_	Gloss=and|Ref=GEN_18.17|Translit=ṿa
2	יהֹוָ֖ה	יהוה	PROPN	nmpr	Gender=Masc|Number=Sing	3	nsubj	_	Gloss=YHWH|Ref=GEN_18.17|Translit=hoṿah
3	אָמָ֑ר	אמר	VERB	verb	Aspect=Perf|Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin	0	root	_	Gloss=say|Ref=GEN_18.17|Translit=ʼamar
4-5	הַֽמְכַסֶּ֤ה	_	_	_	_	_	_	_	_
4	הַֽ	ה	PART	inrg	_	5	mark	_	Gloss=<interrogative>|Ref=GEN_18.17|Translit=ha
5	מְכַסֶּ֤ה	כסה	VERB	verb	Gender=Masc|HebBinyan=PIEL|Number=Sing|VerbForm=Part	3	ccomp	_	Gloss=cover|Ref=GEN_18.17|Translit=mekhaseh
6	אֲנִי֙	אני	PRON	prps	Number=Sing|Person=1|PronType=Prs	5	nsubj	_	Gloss=i|Ref=GEN_18.17|Translit=ʼani
7-8	מֵֽאַבְרָהָ֔ם	_	_	_	_	_	_	_	_
7	מֵֽ	מן	ADP	prep	_	8	case	_	Gloss=from|Ref=GEN_18.17|Translit=me
8	אַבְרָהָ֔ם	אברהם	PROPN	nmpr	Gender=Masc|Number=Sing	5	obl	_	Gloss=Abraham|Ref=GEN_18.17|Translit=ʼavraham
9	אֲשֶׁ֖ר	אשׁר	SCONJ	conj	_	11	mark	_	Gloss=<relative>|Ref=GEN_18.17|Translit=ʼasher
10	אֲנִ֥י	אני	PRON	prps	Number=Sing|Person=1|PronType=Prs	11	nsubj	_	Gloss=i|Ref=GEN_18.17|Translit=ʼani
11	עֹשֶֽׂה	עשׂה	VERB	verb	Gender=Masc|HebBinyan=PAAL|Number=Sing|VerbForm=Part	5	ccomp	_	Gloss=make|Ref=GEN_18.17|SpaceAfter=No|Translit=ʻośeh
12	׃	׃	PUNCT	punct	_	3	punct	_	Ref=GEN_18.17

~~~

_ויהוה אמר המכסה אני מאברהם אשר אני עשה׃_

_ṿaihoṿah ʼamar hamkaseh ʼani meʼavraham ʼasher ʼani ʻośeh_

_And The LORD said "Shall I prevent Abraham from knowing what I am doing?"._

## Features

Particles should not have any features.

## XPOS

Interrogative particles have the BHSA POS tag `inrg`.
<!-- Interlanguage links updated So 10. května 2025, 18:13:46 CEST -->
