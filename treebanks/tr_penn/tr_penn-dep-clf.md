---
layout: base
title:  'Statistics of clf in UD_Turkish-Penn'
udver: '2'
---

## Treebank Statistics: UD_Turkish-Penn: Relations: `clf`

This relation is universal.

20 nodes (0%) are attached to their parents as `clf`.

20 instances of `clf` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 6 pairs of parts of speech are connected with `clf`: <tt><a href="tr_penn-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_penn-pos-NOUN.html">NOUN</a></tt> (9; 45% instances), <tt><a href="tr_penn-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_penn-pos-NOUN.html">NOUN</a></tt> (4; 20% instances), <tt><a href="tr_penn-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_penn-pos-ADJ.html">ADJ</a></tt> (3; 15% instances), <tt><a href="tr_penn-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_penn-pos-PROPN.html">PROPN</a></tt> (2; 10% instances), <tt><a href="tr_penn-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_penn-pos-ADJ.html">ADJ</a></tt> (1; 5% instances), <tt><a href="tr_penn-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_penn-pos-NUM.html">NUM</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 clf	color:blue
1	İstifa	istifa	NOUN	_	Case=Nom|Number=Sing	2	clf	_	_
2	eden	et	VERB	_	Polarity=Pos|Tense=Pres|VerbForm=Part	12	acl	_	_
3	ancak	ancak	ADV	_	_	7	cc	_	_
4	yönetmen	yönetmen	NOUN	_	Case=Nom|Number=Sing	5	nsubj	_	_
5	olarak	ol	VERB	_	Aspect=Prog|Polarity=Pos|VerbForm=Conv	7	advcl	_	_
6	devam	devam	NOUN	_	Case=Nom|Number=Sing	7	compound	_	_
7	eden	et	VERB	_	Polarity=Pos|Tense=Pres|VerbForm=Part	2	conj	_	_
8	62	62	NUM	_	NumType=Card	9	nummod	_	_
9	yaşındaki	yaş	NOUN	_	_	12	amod	_	_
10	L.L.	L.L.	PROPN	_	Case=Nom|Number=Sing	13	nmod	_	_
11	White	white	PROPN	_	Case=Nom|Number=Sing	10	flat	_	_
12	Jr.'ın	Jr.'ın	PROPN	_	Case=Nom|Number=Sing	11	flat	_	_
13	yerine	yer	NOUN	_	Case=Dat|Number=Sing|Number[psor]=Sing|Person[psor]=3	14	compound	_	_
14	geçti	geç	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	0	root	_	_
15	.	.	PUNCT	_	_	14	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 clf	color:blue
1	Tahvil	tahvil	NOUN	_	Case=Nom|Number=Sing	5	nsubj	_	_
2	yatırım	yatırım	NOUN	_	Case=Nom|Number=Sing	3	nmod	_	_
3	fonları	fon	NOUN	_	Case=Nom|Number=Plur|Number[psor]=Sing|Person[psor]=3	4	nmod	_	_
4	çeşitlendirme	çeşit	NOUN	_	Case=Nom|Number=Sing	5	obj	_	_
5	sunar	sun	VERB	_	Evident=Fh|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_
6	ve	ve	CCONJ	_	_	9	cc	_	_
7	alım	alım	NOUN	_	Case=Nom|Number=Sing	8	clf	_	_
8	satımı	satım	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	9	nsubj	_	_
9	kolaydır	kolay	ADJ	_	Number=Sing|Person=3	5	conj	_	_
10	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 16 clf	color:blue
1	Bu	bu	DET	_	Definite=Def|ExtPos=ADV|PronType=Dem	17	discourse	_	_
2	arada	ara	NOUN	_	Case=Loc|Number=Sing	1	fixed	_	_
3	,	,	PUNCT	_	_	17	punct	_	_
4	Toshiba'nın	toshiba	PROPN	_	Case=Gen|Number=Sing	6	nmod	_	_
5	Japon	japon	NOUN	_	Case=Nom|Number=Sing	6	amod	_	_
6	rakipleri	rakip	NOUN	_	Case=Nom|Number=Plur|Number[psor]=Sing|Person[psor]=3	17	nsubj	_	_
7	,	,	PUNCT	_	_	8	punct	_	_
8	Hitachi	Hitachi	PROPN	_	Case=Nom|Number=Sing	6	appos	_	_
9	,	,	PUNCT	_	_	10	punct	_	_
10	Fujitsu	Fujitsu	PROPN	_	Case=Nom|Number=Sing	8	conj	_	_
11	Ltd.	Ltd.	PROPN	_	Case=Nom|Number=Sing	10	flat	_	_
12	ve	ve	CCONJ	_	_	14	cc	_	_
13	NEC	nec	PROPN	_	Case=Nom|Number=Sing	14	nmod	_	_
14	Şirketi	şirket	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	8	conj	_	_
15	,	,	PUNCT	_	_	17	punct	_	_
16	boşta	boş	ADJ	_	Case=Loc|Number=Sing	17	clf	_	_
17	durmuyor	dur	VERB	_	Aspect=Prog|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	0	root	_	_
18	.	.	PUNCT	_	_	17	punct	_	_

~~~


