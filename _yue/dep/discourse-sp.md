---
layout: relation
title: 'discourse:sp'
shortdef: 'sentence particle'
udver: '2'
---

Sentence particles, also commonly known as "sentence-final particles" in Chinese linguistics, occur at the end of clauses and sentences and have a wide range of functions including modifying the modality of a sentence or its proposition, and expressing discourse and pragmatic information. They are linked to the head of a sentence/utterance as `discourse:sp` dependents (we place them under an extension of `discourse` under a broad interpretation of the word "discourse").

Common sentence-final particles in Cantonese include: 嘅 _ge3_, 嘑 _laa3_, 喇 _laa1_, 囉 _lo4_, 唧 _zek1_, 吖 _aa1_, 喎 _wo3_, 呀嘛 _a1maa3_, 先 _sin1_, 添 _tim1_, among many others. Note that many sentence-final particles can be written in multiple ways and some characters can also represent different particles that differ only in tone; there is no official standard so the characters used here are not meant to be a definitive guide. 

For a list of tag particles that should not be confused with sentence-final particles, see [discourse]() and [PART]().

~~~ conllu
# visual-style 5 7 discourse:sp	color:blue
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
1	唔	_	ADV	_	_	2	advmod	_	NEG
2	識	_	VERB	_	_	5	advcl	_	know
3	拼	_	VERB	_	_	2	xcomp	_	spell
4	就	_	ADV	_	_	5	advmod	_	then
5	寫	_	VERB	_	_	0	root	_	write
6	中文	_	NOUN	_	_	5	obj	_	Chinese
7	喇	_	PART	_	_	5	discourse:sp	_	SP

1	"If	_	_	_	_	0	_	_	_
2	you	_	_	_	_	0	_	_	_
3	don't	_	_	_	_	0	_	_	_
4	know	_	_	_	_	0	_	_	_
5	how	_	_	_	_	0	_	_	_
6	to	_	_	_	_	0	_	_	_
7	spell	_	_	_	_	0	_	_	_
8	(it)	_	_	_	_	0	_	_	_
9	then	_	_	_	_	0	_	_	_
10	write	_	_	_	_	0	_	_	_
11	in	_	_	_	_	0	_	_	_
12	Chinese."	_	_	_	_	0	_	_	_

~~~

More than one sentence-final particles may appear at the end of the same clause or sentence.

~~~ conllu
# visual-style 2 4 discourse:sp	color:blue
# visual-style 2 5 discourse:sp	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
1	要	_	AUX	_	_	2	aux	_	need
2	收	_	VERB	_	_	0	root	_	take
3	錢	_	NOUN	_	_	2	obj	_	money
4	嘅	_	PART	_	_	2	discourse:sp	_	SP
5	咩	_	PART	_	_	2	discourse:sp	_	SP
6	？	_	PUNCT	_	_	2	punct	_	_

1	"It	_	_	_	_	0	_	_	_
2	costs?	_	_	_	_	0	_	_	_
3	/	_	_	_	_	0	_	_	_
4	One	_	_	_	_	0	_	_	_
5	has	_	_	_	_	0	_	_	_
6	to	_	_	_	_	0	_	_	_
7	pay?"	_	_	_	_	0	_	_	_

~~~
<!-- Interlanguage links updated Út zář 29 20:23:29 CEST 2020 -->
