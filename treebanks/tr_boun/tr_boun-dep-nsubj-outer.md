---
layout: base
title:  'Statistics of nsubj:outer in UD_Turkish-BOUN'
udver: '2'
---

## Treebank Statistics: UD_Turkish-BOUN: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="tr_boun-dep-nsubj.html">nsubj</a></tt>.

28 nodes (0%) are attached to their parents as `nsubj:outer`.

27 instances of `nsubj:outer` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 9.5.

The following 12 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="tr_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt> (11; 39% instances), <tt><a href="tr_boun-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt> (3; 11% instances), <tt><a href="tr_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_boun-pos-PROPN.html">PROPN</a></tt> (3; 11% instances), <tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt> (2; 7% instances), <tt><a href="tr_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_boun-pos-PRON.html">PRON</a></tt> (2; 7% instances), <tt><a href="tr_boun-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_boun-pos-PROPN.html">PROPN</a></tt> (1; 4% instances), <tt><a href="tr_boun-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_boun-pos-PROPN.html">PROPN</a></tt> (1; 4% instances), <tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_boun-pos-VERB.html">VERB</a></tt> (1; 4% instances), <tt><a href="tr_boun-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="tr_boun-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="tr_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_boun-pos-ADJ.html">ADJ</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nsubj:outer	color:blue
1	Dağdan	dağ	NOUN	_	Case=Abl|Number=Sing|Person=3	2	obl	_	_
2	dağa	dağ	NOUN	_	Case=Dat|Number=Sing|Person=3	4	obl	_	_
3	urgan	urgan	NOUN	_	Case=Nom|Number=Sing|Person=3	4	nsubj:outer	_	_
4	gerilmez	ger	VERB	_	Aspect=Hab|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|Voice=Pass	0	root	_	_
5	Daha	daha	ADV	_	_	6	advmod	_	_
6	doğrusu	doğru	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	8	discourse	_	_
7	urgan	urgan	NOUN	_	Case=Nom|Number=Sing|Person=3	8	nsubj	_	_
8	yetişmez	yetiş	VERB	_	Aspect=Hab|Number=Sing|Person=3|Polarity=Neg|Tense=Pres	4	conj	_	SpaceAfter=No
9	.	.	PUNCT	Stop	_	8	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 nsubj:outer	color:blue
1	Delikanlı	delikanlı	NOUN	_	Case=Nom|Number=Sing|Person=3	2	nsubj	_	_
2	mırıldandı	mırılda	VERB	_	Aspect=Perf|Evident=Fh|Number=Sing|Person=3|Polarity=Pos|Tense=Past|Voice=Rfl	0	root	_	SpaceAfter=No
3	:	:	PUNCT	Punc	_	5	punct	_	SpacesAfter=\n
4	İnsanlar	insan	NOUN	_	Case=Nom|Number=Plur|Person=3	8	nsubj:outer	_	_
5	telaşlı	telaşlı	ADJ	Adj	_	2	parataxis	_	DerivedFrom=telaş|nullcop=3p|SpaceAfter=No
6	,	,	PUNCT	Comma	_	8	punct	_	_
7	duraklar	durak	NOUN	_	Case=Nom|Number=Plur|Person=3	8	nsubj	_	_
8	dolu	dolu	ADJ	Adj	_	5	conj	_	nullcop=3p|SpaceAfter=No
9	.	.	PUNCT	Stop	_	2	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 1 nsubj:outer	color:blue
1	YAŞAR	Yaşar	PROPN	_	Case=Nom|Number=Sing|Person=3	14	nsubj:outer	_	_
2	NE	ne	PRON	Ques	Case=Nom|Number=Sing|Person=3|PronType=Int	3	nmod	_	_
3	YOK	yok	NOUN	_	Case=Nom|Number=Sing|Person=3	1	conj	_	_
4	NE	ne	CCONJ	Ques	_	12	cc	_	_
5	DE	de	CCONJ	_	_	12	cc	_	_
6	VAR	Var	PROPN	_	Case=Nom|Number=Sing|Person=3	7	compound	_	SpacesAfter=\n
7	Şimdi	şimdi	ADV	_	_	12	advmod	_	_
8	beyaz	beyaz	ADJ	Adj	_	9	amod	_	_
9	ülkeden	ülke	NOUN	_	Case=Abl|Number=Sing|Person=3	12	obl	_	_
10	yeşil	yeşil	ADJ	Adj	_	11	amod	_	_
11	ülkeye	ülke	NOUN	_	Case=Dat|Number=Sing|Person=3	12	obl	_	_
12	geçiyoruz	geç	VERB	_	Aspect=Imp|Number=Plur|Person=1|Polarity=Pos|Tense=Pres	3	compound	_	SpaceAfter=No
13	,	,	PUNCT	Comma	_	12	punct	_	_
14	dedi	de	VERB	_	Aspect=Perf|Evident=Fh|Number=Sing|Person=3|Polarity=Pos|Tense=Past	0	root	_	_
15	rehberimiz	rehber	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Plur|Person=3|Person[psor]=1	14	nsubj	_	SpaceAfter=No
16	.	.	PUNCT	Stop	_	14	punct	_	SpacesAfter=\n

~~~


