---
layout: base
title:  'Statistics of appos in UD_Ottoman_Turkish-DUDU'
udver: '2'
---

## Treebank Statistics: UD_Ottoman_Turkish-DUDU: Relations: `appos`

This relation is universal.

8 nodes (0%) are attached to their parents as `appos`.

8 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.75.

The following 4 pairs of parts of speech are connected with `appos`: <tt><a href="ota_dudu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_dudu-pos-NOUN.html">NOUN</a></tt> (4; 50% instances), <tt><a href="ota_dudu-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ota_dudu-pos-NOUN.html">NOUN</a></tt> (2; 25% instances), <tt><a href="ota_dudu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_dudu-pos-ADJ.html">ADJ</a></tt> (1; 13% instances), <tt><a href="ota_dudu-pos-PRON.html">PRON</a></tt>-<tt><a href="ota_dudu-pos-NOUN.html">NOUN</a></tt> (1; 13% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 10 appos	color:blue
1	evet	evet	INTJ	_	_	11	discourse	_	SpaceAfter=No
2	,	,	PUNCT	Comma	_	1	punct	_	_
3	biraz	biraz	ADV	_	_	5	amod	_	_
4	da	da	PART	Emph	_	3	advmod:emph	_	_
5	ʿaşḳtan	ʿaşḳ	NOUN	_	Case=Abl|Number=Sing|Person=3	11	obl	_	SpaceAfter=No
6	,	,	PUNCT	Comma	_	5	punct	_	_
7	daha	daha	ADV	_	Degree=Cmp	8	advmod	_	_
8	doġrusu	doġru	ADJ	NAdj	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	10	amod	_	_
9	yine	yine	ADV	_	_	10	advmod	_	_
10	ʿaşḳtan	ʿaşḳ	NOUN	_	Case=Abl|Number=Sing|Person=3	5	appos	_	_
11	baḥsedelim	baḥset	VERB	_	Mood=Opt|Number=Plur|Person=1|Polarity=Pos|VerbForm=Fin	0	root	_	SpaceAfter=No
12	.	.	PUNCT	Stop	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 17 appos	color:blue
1	pes	pes	ADV	_	_	11	advmod	_	_
2	zümre-i	zümre	NOUN	_	Case=Nom|Number=Sing|Person=3	11	nsubj	_	_
3	ḳızılbaş	ḳızılbaş	PROPN	_	Case=Nom|NameType=Com|Number=Sing|Person=3	2	nmod	_	_
4	ve	ve	CCONJ	_	_	5	cc	_	_
5	fırḳa-i	fırḳa	NOUN	_	Case=Nom|Gender=Fem|Number=Sing|Person=3	2	conj	_	_
6	ẕemīme-i	ẕemīme	NOUN	_	Case=Nom|Gender=Fem|Number=Sing|Person=3	5	nmod:poss	_	_
7	evbāş	vebeş	NOUN	_	Case=Nom|Number=Plur|Person=3	6	nmod	_	_
8	bu	bu	DET	Demons	Definite=Def|PronType=Art	9	det	_	_
9	aḥvāli	ḥāl	NOUN	_	Case=Acc|Gender=Fem|Number=Plur|Person=3	11	obj	_	_
10	ki	ki	SCONJ	_	_	24	mark	_	_
11	işitdiler	işit	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	0	root	_	_
12	maḳṣūd	maḳṣūd	PROPN	Pers	Case=Nom|Gender=Masc|NameType=Prs|Number=Sing|Person=3	14	nmod	_	_
13	ḫān	ḫān	NOUN	_	Case=Nom|Number=Sing|Person=3	12	flat	_	_
14	nām	nām	NOUN	_	Case=Nom|Number=Sing|Person=3	15	nmod	_	_
15	ādemlerini	ādem	NOUN	_	Case=Acc|Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=3	24	obj	_	_
16	ki	ki	SCONJ	_	_	17	mark	_	_
17	daruġalarından	daruġa	NOUN	_	Case=Abl|Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=3	12	appos	_	_
18	imiş	y	AUX	Overt	Aspect=Perf|Evident=Nfh|Number=Sing|Person=3|Polarity=Pos|Tense=Past	17	cop	_	_
19	ṣulḥ	ṣulḥ	NOUN	_	Case=Nom|Number=Sing|Person=3	20	nmod	_	_
20	istidʿāsı	istidʿā	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	24	obl	_	_
21	ile	ile	CCONJ	_	_	20	case	_	_
22	cenāb-ı	cenāb	NOUN	_	Case=Nom|Number=Sing|Person=3	24	obl	_	_
23	serdāra	serdār	NOUN	_	Case=Dat|Number=Sing|Person=3	22	nmod:poss	_	_
24	irsāl	irsāl	NOUN	_	Case=Nom|Number=Sing|Person=3	11	ccomp	_	_
25	itdiler	it	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	24	compound:lvc	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 appos	color:blue
1	1069da	1069	NUM	Year	Case=Loc|NumType=Card	2	obl:tmod	_	_
2	vefāt	vefāt	NOUN	_	Case=Nom|Number=Sing|Person=3	8	advcl	_	_
3	edip	et	VERB	Conv	Polarity=Pos|VerbForm=Conv	2	compound:lvc	_	_
4	pederi	peder	NOUN	_	Case=Acc|Number=Sing|Person=3	7	nmod	_	_
5	müşārün	müşār	ADJ	NAdj	Case=Nom|Number=Sing|Person=3	4	appos	_	_
6	ileyhiñ	ileyh	PRON	Demons	Case=Gen|Number=Sing|Person=3|PronType=Dem	5	nmod:poss	_	_
7	yanına	yan	NOUN	_	Case=Dat|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	8	obl	_	_
8	defnolundu	defnol	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	_

~~~


