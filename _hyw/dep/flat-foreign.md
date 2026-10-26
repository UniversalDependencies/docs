---
layout: relation
title: 'flat:foreign'
shortdef: 'foreign words'
udver: '2'
---

Some treebanks use `flat:foreign` to label sequences of foreign words. These are given a linear analysis: the head is the first token in the foreign phrase.

`flat:foreign` does not apply to loanwords or to foreign [names](flat).
It applies to quoted foreign text incorporated in a sentence/discourse of the host language (unless we want to and know how to annotate the internal structure according to the syntax of the foreign language).

~~~ conllu
# visual-style 10 11 flat:foreign color:blue
# visual-style 10 12 flat:foreign color:blue
1	Ան	ան	PRON	_	Case=Nom|Deixis=Remt|Number=Sing|PronType=Dem	3	nsubj	_	Translit=An|LTranslit=an
2	կը	կը	AUX	_	Aspect=Imp|Mood=Ind	3	aux	_	Translit=kë|LTranslit=kë
3	կոչուի	կոչուիլ	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	Translit=kočowi|LTranslit=kočowil
4	«	«	PUNCT	_	_	7	punct	_	Translit=«|LTranslit=«|SpaceAfter=No
5	Սուրբ	սուրբ	ADJ	_	Degree=Pos	6	amod	_	Translit=Sowrb|LTranslit=sowrb
6	Ծննդեան	ծնունդ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	7	nmod:poss	_	Translit=Çnndean|LTranslit=çnownd
7	խոզը	խոզ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	3	xcomp	_	Translit=xozë|LTranslit=xoz|SpaceAfter=No
8	»	»	PUNCT	_	_	7	punct	_	Translit=»|LTranslit=»
9	(	(	PUNCT	_	_	10	punct	_	Translit=(|LTranslit=(|SpaceAfter=No
10	The	the	X	_	Foreign=Yes	7	appos	_	Translit=The|LTranslit=the
11	Christmas	Christmas	X	_	Foreign=Yes	10	flat:foreign	_	Translit=Christmas|LTranslit=Christmas
12	Pig	Pig	X	_	Foreign=Yes	10	flat:foreign	_	Translit=Pig|LTranslit=Pig|SpaceAfter=No
13	)	)	PUNCT	_	_	10	punct	_	Translit=)|LTranslit=)|SpaceAfter=No
14	։	։	PUNCT	_	_	3	punct	_	Translit=.|LTranslit=.
~~~

<!-- Interlanguage links updated Út 30. června 2026, 11:00:09 CEST -->
