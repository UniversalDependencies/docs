---
layout: base
title:  'Statistics of compound:lvc in UD_Ottoman_Turkish-DUDU'
udver: '2'
---

## Treebank Statistics: UD_Ottoman_Turkish-DUDU: Relations: `compound:lvc`

This relation is a language-specific subtype of <tt><a href="ota_dudu-dep-compound.html">compound</a></tt>.

9 nodes (1%) are attached to their parents as `compound:lvc`.

7 instances of `compound:lvc` (78%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 3 pairs of parts of speech are connected with `compound:lvc`: <tt><a href="ota_dudu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_dudu-pos-VERB.html">VERB</a></tt> (6; 67% instances), <tt><a href="ota_dudu-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_dudu-pos-NOUN.html">NOUN</a></tt> (2; 22% instances), <tt><a href="ota_dudu-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ota_dudu-pos-VERB.html">VERB</a></tt> (1; 11% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 compound:lvc	color:blue
1	zîrâ	zîrâ	CCONJ	_	_	9	cc	_	_
2	ḥaḳîḳatde	ḥaḳîḳat	NOUN	_	Case=Loc|Number=Sing|Person=3	5	obl	_	_
3	bir	bir	DET	Indef	_	4	det	_	_
4	şeyʾi	şeyʾ	NOUN	_	Case=Acc|Number=Sing|Person=3	5	obj	_	_
5	idrâk	idrâk	NOUN	_	Case=Nom|Number=Sing|Person=3	9	nsubj	_	_
6	itmek	et	VERB	Vnoun	Case=Nom|Number=Sing|Person=3|Polarity=Pos	5	compound:lvc	_	_
7	ol	ol	DET	Demons	_	8	det	_	_
8	şeyʾe	şeyʾ	NOUN	_	Case=Dat|Number=Sing|Person=3	9	obl	_	_
9	yetişmekdür	yetiş	VERB	Vnoun	Case=Nom|Number=Sing|Person=3|Polarity=Pos|VerbForm=Vnoun	0	root	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 12 compound:lvc	color:blue
1	zîrâ	zîrâ	CCONJ	_	_	13	mark	_	_
2	bu	bu	DET	_	Definite=Def|PronType=Art	4	det	_	_
3	ṭarîḳ-i	ṭarîḳ	NOUN	_	_	13	acl	_	_
4	muʿammâda	muʿammâ	ADJ	_	Case=Loc|Number=Sing|Person=3	3	obl	_	_
5	bir	bir	DET	_	Definite=Ind|PronType=Art	6	det	_	_
6	kelimeniñ	kelime	NOUN	_	Case=Gen|Number=Sing|Person=3	7	nmod	_	_
7	âḫirine	âḫir	NOUN	_	Case=Dat|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	8	obl	_	_
8	gelen	gel	ADJ	_	_	9	acl	_	_
9	ḥarfe	ḥarf	NOUN	_	Case=Dat|Number=Sing|Person=3	10	nmod	_	_
10	ayaġı	ayak	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	13	obl	_	_
11	diyü	diye	ADP	_	_	10	case	_	_
12	ẕikr	ẕikr	NOUN	_	Case=Nom|Number=Sing|Person=3	13	compound:lvc	_	_
13	olunur	ol	VERB	_	Aspect=Hab|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 compound:lvc	color:blue
1	türkçemiz	türkçe	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Plur|Person=3|Person[psor]=1	3	nsubj	_	_
2	bir	bir	DET	Indef	_	3	det	_	_
3	lisân	lisân	NOUN	_	Case=Nom|Number=Sing|Person=3	17	advcl	_	_
4	dır	i	AUX	Zero	Aspect=Perf|Number=Sing|Person=3|Tense=Pres	2	cop	_	_
5	ki	ki	CCONJ	_	_	3	mark	_	SpaceAfter=No
6	,	,	PUNCT	Comma	_	17	punct	_	_
7	bi'l-ḳuvve	bi'l-ḳuvve	ADV	Adverb	_	8	advmod	_	_
8	şâmil	şâmil	ADJ	Ptcp	Case=Nom|Number=Sing|Person=3	10	acl	_	_
9	olduġu	ol	VERB	Ptcp	Aspect=Perf|Number[psor]=Sing|Person[psor]=3|Polarity=Pos|Tense=Past|VerbForm=Part	8	compound:lvc	_	_
10	muḥassenâta	muḥassenât	NOUN	_	Case=Dat|Number=Plur|Person=3	17	nmod	_	_
11	göre	göre	ADP	PCDat	_	10	case	_	SpaceAfter=No
12	,	,	PUNCT	Comma	_	17	punct	_	_
13	dünyâda	dünyâda	NOUN	_	Case=Loc|Number=Sing|Person=3	16	obl	_	_
14	en	en	ADV	_	_	15	advmod	_	_
15	birinci	bir	NUM	NNum	Case=Nom|Number=Sing|NumType=Ord|Person=3	16	amod	_	_
16	lisânlardan	lisân	NOUN	_	Case=Abl|Number=Plur|Person=3	17	nmod	_	_
17	addolunmaġa	addol	VERB	Vnoun	Case=Dat|Number=Sing|Person=3|Polarity=Pos|VerbForm=Vnoun|Voice=Pass	0	root	_	_
18	şâyân	şâyân	ADJ	Adj	Case=Nom|Number=Sing|Person=3	3	conj	_	_
19	dır	i	AUX	Zero	Aspect=Perf|Number=Sing|Person=3|Tense=Pres	17	cop	_	_
20	.	.	PUNCT	Stop	_	17	punct	_	_

~~~


