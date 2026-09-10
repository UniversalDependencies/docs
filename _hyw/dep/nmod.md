---
layout: relation
title: 'nmod'
shortdef: 'nominal modifier'
udver: '2'
---

The `nmod` relation is used for nominal dependents of another noun or noun phrase. We use the following language-specific subtypes:

* `nmod`: a noun modifier that functionally corresponds to an attribute,
* [nmod:poss](): a noun modifier that functionally corresponds to a possessive complement,
* [nmod:npmod](): a noun phrase functioning as a nominal modifier.

In Western Armenian `nmod` is used:

* for noun-noun modification with an attributive or associative relations between them: `nmod` nouns attached to nouns are usually in the nominative [Case]() and precede the modified noun. There are alternations in ablative or instrumental cases.

~~~ conllu
# visual-style 3 2 nmod color:blue
1	Լիբանանի	Լիբանան	PROPN	_	Animacy=Nhum|Case=Dat|Definite=Ind|NameType=Geo|Number=Sing	2	nmod:poss	_	Translit=Libanani|LTranslit=Libanan
2	մայրաքաղաք	մայրաքաղաք	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	3	nmod	_	Translit=mayrak’aġak’|LTranslit=mayrak’aġak’
3	Պէյրութի	Պէյրութ	PROPN	_	Animacy=Nhum|Case=Dat|Definite=Ind|NameType=Geo|Number=Sing	0	root	_	Translit=Pēyrowt’i|LTranslit=Pēyrowt’
4	մէջ	մէջ	ADP	_	AdpType=Post	3	case	_	Translit=mēǰ|LTranslit=mēǰ
~~~

~~~ conllu
# visual-style 4 2 nmod color:blue
1	հաստ	հաստ	ADJ	_	Degree=Pos	2	amod	_	Translit=hast|LTranslit=hast
2	պեխերով	պեխ	NOUN	_	Animacy=Nhum|Case=Ins|Definite=Ind|Number=Plur	4	nmod	_	Translit=pexerov|LTranslit=pex
3	գիրուկ	գիրուկ	ADJ	_	Degree=Pos	4	amod	_	Translit=girowk|LTranslit=girowk
4	տղամարդ	տղամարդ	NOUN	_	Animacy=Hum|Case=Nom|Definite=Ind|Number=Sing	0	root	_	Translit=tġamard|LTranslit=tġamard
5	մը	մը	DET	_	PronType=Art	4	det	_	Translit=më|LTranslit=më|SpaceAfter=No
~~~

Standard `nmod` relation is used even when things are being counted in groups (with “massifiers”):

~~~ conllu
# visual-style 3 1 nmod color:blue
1	Խումբ	խումբ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	3	nmod	_	Translit=Xowmb|LTranslit=xowmb
2	մը	մը	DET	_	PronType=Art	1	det	_	Translit=më|LTranslit=më
3	գայլեր	գայլ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Plur	0	root	_	Translit=gayler|LTranslit=gayl
~~~

~~~ conllu
# visual-style 3 2 nmod color:blue
1	18	18	NUM	_	NumForm=Digit|NumType=Card	2	nummod	_	Translit=18|LTranslit=18
2	տարեկան	տարեկան	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Coll	3	nmod	_	Translit=tarekan|LTranslit=tarekan
3	տղայ	տղայ	NOUN	_	Animacy=Hum|Case=Nom|Definite=Ind|Number=Sing	0	root	_	Translit=tġay|LTranslit=tġay
4	մը	մը	DET	_	PronType=Art	3	det	_	Translit=më|LTranslit=më
~~~

The `nmod` relation is further specified by the [case]() relation (associative modfication).

~~~ conllu
# visual-style 3 1 nmod color:blue
1	ցուցասրահի	ցուցասրահ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	3	nmod	_	Translit=c’owc’asrahi|LTranslit=c’owc’asrah
2	նման	նման	ADP	_	AdpType=Post	1	case	_	Translit=nman|LTranslit=nman
3	վայրեր	վայր	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Plur	0	root	_	Translit=vayrer|LTranslit=vayr
~~~

* for an explicative attribute of a noun or for noun modifier specifying the whole-part relation: a typical example is a title/profession attached to a name of a person. The relation is similar to the [flat]() relation that links the first and the last name, but it is not labeled `flat` because the title is not part of the name:

~~~ conllu
# visual-style 2 1 nmod color:blue
1	Տոքթոր	տոքթոր	NOUN	_	Animacy=Hum|Case=Nom|Definite=Ind|Number=Sing	2	nmod	_	Translit=Tok’t’or|LTranslit=tok’t’or
2	Քեաթիպեան	Քեաթիպեան	PROPN	_	Animacy=Hum|Case=Nom|Definite=Ind|NameType=Sur|Number=Sing	0	root	_	Translit=K’eat’ipean|LTranslit=K’eat’ipean|SpaceAfter=No
~~~

~~~ conllu
# visual-style 4 1 nmod color:blue
# visual-style 4 2 nmod color:blue
1	Երեսփոխան	երեսփոխան	NOUN	_	Animacy=Hum|Case=Nom|Definite=Ind|Number=Sing	4	nmod	_	Translit=Eresp’oxan|LTranslit=eresp’oxan
2	դոկտ	դոկտ.	NOUN	_	Abbr=Yes|Animacy=Hum|Case=Nom|Definite=Ind|Number=Sing	4	nmod	_	Translit=dokt|LTranslit=dokt.|SpaceAfter=No
3	.	.	PUNCT	_	_	2	punct	_	Translit=.|LTranslit=.
4	Նորա	Նորա	PROPN	_	Animacy=Hum|Case=Nom|Definite=Ind|NameType=Giv|Number=Sing	29	nsubj	_	Translit=Nora|LTranslit=Nora
5	Արիսեան	Արիսեան	PROPN	_	Animacy=Hum|Case=Nom|Definite=Ind|NameType=Sur|Number=Sing	4	flat:name	_	Translit=Arisean|LTranslit=Arisean
~~~

Note that the same thing can be also expressed using an [apposition](appos).
In the case of apposition, the title follows the modified name and is separated by a punctuation symbol:

~~~ conllu
# visual-style 3 5 appos color:blue
1	Երկրորդ	երկրորդ	ADJ	_	NumForm=Word|NumType=Ord	3	amod	_	Translit=Erkrord|LTranslit=erkrord
2	հաւանական	հաւանական	ADJ	_	Degree=Pos	3	amod	_	Translit=hawanakan|LTranslit=hawanakan
3	թեկնածուն	թեկնածու	NOUN	_	Animacy=Hum|Case=Nom|Definite=Def|Number=Sing	10	nsubj	_	Translit=t’eknaçown|LTranslit=t’eknaçow|SpaceAfter=No
4	՝	՝	PUNCT	_	_	5	punct	_	Translit=,|LTranslit=,
5	Կոմիտաս	Կոմիտաս	PROPN	_	Animacy=Hum|Case=Nom|Definite=Ind|NameType=Giv|Number=Sing	3	appos	_	Translit=Komitas|LTranslit=Komitas
6	վրդ	վրդ.	NOUN	_	Abbr=Yes|Animacy=Hum|Case=Nom|Definite=Ind|Number=Sing	5	flat:name	_	Translit=vrd|LTranslit=vrd.|SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	_	Translit=.|LTranslit=.
8	Յովնանեանը	Յովնանեան	PROPN	_	Animacy=Hum|Case=Nom|Definite=Def|NameType=Sur|Number=Sing	5	flat:name	_	Translit=Yovnaneanë|LTranslit=Yovnanean
~~~

<!-- Interlanguage links updated Út 30. června 2026, 11:00:16 CEST -->

