---
layout: base
title:  'Statistics of nmod:tmod in UD_Turkish-BOUN'
udver: '2'
---

## Treebank Statistics: UD_Turkish-BOUN: Relations: `nmod:tmod`

This relation is a language-specific subtype of <tt><a href="tr_boun-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="tr_boun-dep-nmod-part.html">nmod:part</a></tt>, <tt><a href="tr_boun-dep-nmod-poss.html">nmod:poss</a></tt>.

85 nodes (0%) are attached to their parents as `nmod:tmod`.

82 instances of `nmod:tmod` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.8.

The following 10 pairs of parts of speech are connected with `nmod:tmod`: <tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt> (69; 81% instances), <tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_boun-pos-NUM.html">NUM</a></tt> (3; 4% instances), <tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_boun-pos-PROPN.html">PROPN</a></tt> (3; 4% instances), <tt><a href="tr_boun-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt> (3; 4% instances), <tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_boun-pos-ADV.html">ADV</a></tt> (2; 2% instances), <tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_boun-pos-ADP.html">ADP</a></tt> (1; 1% instances), <tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_boun-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_boun-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="tr_boun-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="tr_boun-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 nmod:tmod	color:blue
1	Bu	bu	PRON	Demons	Case=Nom|Number=Sing|Person=3|PronType=Dem	7	nsubj	_	SpaceAfter=No
2	,	,	PUNCT	Comma	_	7	punct	_	_
3	akşamınan	akşamınan	NOUN	_	Case=Nom|Number=Sing|Person=3	5	nmod:tmod	_	typo=yes
4	bir	bir	DET	Indef	PronType=Ind	5	det	_	_
5	yel	yel	NOUN	_	Case=Nom|Number=Sing|Person=3	6	nsubj	_	_
6	çıkacağına	çık	VERB	Ptcp	Aspect=Imp|Case=Dat|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3|Polarity=Pos|Tense=Fut|VerbForm=Part	7	nmod	_	_
7	dalalet	dalalet	NOUN	_	Case=Nom|Number=Sing|Person=3	0	root	_	_
8	ti	y	AUX	Zero	Aspect=Perf|Evident=Fh|Number=Sing|Person=3|Tense=Past	7	cop	_	_
9	.	.	PUNCT	Stop	_	7	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 15 nmod:tmod	color:blue
1	Dolmabahçe'de	Dolmabahçe	PROPN	Place	Case=Loc|Number=Sing|Person=3	3	nmod	_	_
2	ki	ki	PART	Attr	_	1	dep:der	_	_
3	stadın	stat	NOUN	_	Case=Gen|Number=Sing|Person=3	4	nmod:poss	_	_
4	tarihçesi	tarihçe	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	8	nsubj	_	DerivedFrom=tarih
5	19	19	NUM	ANum	NumType=Card	7	nummod	_	_
6	Mayıs'a	mayıs	PROPN	_	Case=Dat|Number=Sing|Person=3	5	flat	_	_
7	nazaran	nazar	ADV	Adj	_	8	advmod	_	_
8	yeni	yeni	ADJ	Adj	_	0	root	_	SpaceAfter=No
9	:	:	PUNCT	Punc	_	8	punct	_	_
10	Beşiktaş	Beşiktaş	PROPN	Place	Case=Nom|Number=Sing|Person=3	14	nmod:poss	_	SpaceAfter=No
11	-	-	PUNCT	Punc	_	10	punct	_	_
12	AIK	AIK	PROPN	_	Case=Nom|Number=Sing|Person=3	10	flat	_	_
13	Stockholm	Stockholm	PROPN	_	Case=Nom|Number=Sing|Person=3	10	flat	_	_
14	maçıyla	maç	NOUN	_	Case=Ins|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	16	nmod	_	_
15	1947'de	1947	NUM	Year	Case=Loc|Number=Sing|Person=3	16	nmod:tmod	_	_
16	hizmete	hizmet	NOUN	_	Case=Dat|Number=Sing|Person=3	8	parataxis	_	_
17	açılmış	aç	VERB	Ptcp	Aspect=Perf|Polarity=Pos|VerbForm=Part	16	compound	_	_
18	tı	y	AUX	Zero	Evident=Fh|Number=Sing|Person=3|Polarity=Pos|Tense=Past	17	cop	_	_
19	.	.	PUNCT	Stop	_	16	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 nmod:tmod	color:blue
1	Bu	bu	DET	Det	PronType=Dem	2	det	_	_
2	yıl	yıl	NOUN	_	Case=Nom|Number=Sing|Person=3	12	obl:tmod	_	_
3	da	da	PART	Emph	_	2	advmod:emph	_	_
4	18	18	NUM	ANum	NumType=Card	7	nummod	_	SpaceAfter=No
5	-	-	PUNCT	Punc	_	4	punct	_	SpaceAfter=No
6	21	21	NUM	ANum	NumType=Card	4	flat	_	_
7	Haziran	Haziran	PROPN	_	Case=Nom|Number=Sing|Person=3	8	nmod:tmod	_	_
8	doğumlu	doğumlu	NOUN	_	Case=Nom|Number=Sing|Person=3	10	amod	_	DerivedFrom=doğum
9	İkizler	ikiz	NOUN	_	Case=Nom|Number=Plur|Person=3	10	nmod:poss	_	_
10	üyelerini	üye	NOUN	_	Case=Acc|Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=3	11	obj	_	_
11	etkilemeyi	etkile	VERB	Vnoun	Case=Acc|Number=Sing|Person=3|Polarity=Pos|VerbForm=Vnoun	12	ccomp	_	_
12	sürdürecek	sür	VERB	_	Aspect=Prosp|Number=Sing|Person=3|Polarity=Pos|Tense=Fut|Voice=Cau	0	root	_	SpaceAfter=No
13	.	.	PUNCT	Stop	_	12	punct	_	SpacesAfter=\n

~~~


