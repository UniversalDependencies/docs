---
layout: base
title:  'Statistics of compound:lvc in UD_Ottoman_Turkish-DUDU'
udver: '2'
---

## Treebank Statistics: UD_Ottoman_Turkish-DUDU: Relations: `compound:lvc`

This relation is a language-specific subtype of <tt><a href="ota_dudu-dep-compound.html">compound</a></tt>.
There are also 1 other language-specific subtypes of `compound`: <tt><a href="ota_dudu-dep-compound-redup.html">compound:redup</a></tt>.

518 nodes (5%) are attached to their parents as `compound:lvc`.

504 instances of `compound:lvc` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.20656370656371.

The following 4 pairs of parts of speech are connected with `compound:lvc`: <tt><a href="ota_dudu-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_dudu-pos-NOUN.html">NOUN</a></tt> (391; 75% instances), <tt><a href="ota_dudu-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_dudu-pos-ADJ.html">ADJ</a></tt> (125; 24% instances), <tt><a href="ota_dudu-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ota_dudu-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="ota_dudu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_dudu-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 compound:lvc	color:blue
1	ṭaʿâmı	ṭaʿâm	NOUN	_	Case=Acc|Number=Sing|Person=3	2	obj	_	_
2	hażm	hażm	NOUN	_	Case=Nom|Number=Sing|Person=3	3	compound:lvc	_	_
3	itdirir	et	VERB	_	Aspect=Hab|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Cau	0	root	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 compound:lvc	color:blue
1	oġuz	oġuz	NOUN	_	Case=Nom|Number=Sing|Person=3	2	nmod	_	_
2	begleri	beg	NOUN	_	Case=Nom|Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=3	4	nsubj	_	_
3	bunı	bu	PRON	Demons	Case=Acc|Number=Sing|Person=3|PronType=Dem	4	obj	_	_
4	eşitdiler	eşit	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	0	root	_	_
5	şâd	şâd	ADJ	Adj	_	7	compound:lvc	_	_
6	olup	ol	VERB	Conv	Polarity=Pos|VerbForm=Conv	7	advcl	_	_
7	sevindiler	sevin	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	4	conj	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 compound:lvc	color:blue
1	türkçemiz	türkçe	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Plur|Person=3|Person[psor]=1	3	nsubj	_	_
2	bir	bir	DET	Indef	Definite=Ind|PronType=Art	3	det	_	_
3	lisân	lisân	NOUN	_	Case=Nom|Number=Sing|Person=3	17	advcl	_	_
4	dır	i	AUX	Zero	Aspect=Perf|Number=Sing|Person=3|Tense=Pres	3	cop	_	_
5	ki	ki	SCONJ	_	_	3	mark	_	SpaceAfter=No
6	,	,	PUNCT	Comma	_	17	punct	_	_
7	bi'l-ḳuvve	bi'l-ḳuvve	ADV	_	_	8	advmod	_	_
8	şâmil	şâmil	ADJ	Ptcp	Case=Nom|Number=Sing|Person=3	10	acl	_	_
9	olduġu	ol	VERB	Ptcp	Aspect=Perf|Number[psor]=Sing|Person[psor]=3|Polarity=Pos|Tense=Past|VerbForm=Part	8	compound:lvc	_	_
10	muḥassenâta	muḥassen	ADJ	NAdj	Case=Dat|Gender=Fem|Number=Plur|Person=3	17	nmod	_	_
11	göre	göre	ADP	PCDat	_	10	case	_	SpaceAfter=No
12	,	,	PUNCT	Comma	_	17	punct	_	_
13	dünyâda	dünyâ	NOUN	_	Case=Loc|Number=Sing|Person=3	16	obl	_	_
14	en	en	ADV	_	Degree=Sup	15	advmod	_	_
15	birinci	bir	NUM	ANum	NumType=Ord	16	nummod	_	_
16	lisânlardan	lisân	NOUN	_	Case=Abl|Number=Plur|Person=3	17	nmod	_	_
17	addolunmaġa	addol	VERB	Vnoun	Case=Dat|Number=Sing|Person=3|Polarity=Pos|VerbForm=Vnoun|Voice=Pass	18	xcomp	_	_
18	şâyân	şâyân	ADJ	Adj	_	0	root	_	_
19	dır	i	AUX	Zero	Aspect=Perf|Number=Sing|Person=3|Tense=Pres	18	cop	_	_
20	.	.	PUNCT	Stop	_	18	punct	_	_

~~~


