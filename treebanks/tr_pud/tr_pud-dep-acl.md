---
layout: base
title:  'Statistics of acl in UD_Turkish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Turkish-PUD: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="tr_pud-dep-acl-relcl.html">acl:relcl</a></tt>.

4 nodes (0%) are attached to their parents as `acl`.

4 instances of `acl` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.

The following 3 pairs of parts of speech are connected with `acl`: <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-AUX.html">AUX</a></tt> (2; 50% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (1; 25% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-VERB.html">VERB</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 acl	color:blue
1	Zodyak	Zodyak	NOUN	NN	Number=Sing	2	compound	_	_
2	hayvanı	hayvan	NOUN	NN	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	3	nsubj	_	_
3	Maymun	_	NOUN	NN	Number=Sing	13	parataxis	_	SpaceAfter=No
4	'dur	_	AUX	AUX	Aspect=Perf|Mood=Gen|Number=Sing|Person=3|Tense=Pres	3	cop	_	_
5	ve	ve	CCONJ	CCONJ	_	13	cc	_	_
6	geleneksel	geleneksel	ADJ	JJ	Number=Sing	8	amod	_	_
7	önem	önem	NOUN	NN	Number=Sing	8	obj	_	_
8	taşıyan	taşı	AUX	VJ	Number=Sing|Polarity=Pos	10	acl	_	_
9	altmışıncı	altmışıncı	NUM	CD	Number=Sing|NumType=Ord	10	amod	_	_
10	yıldönümü	yıldön	NOUN	NN	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	13	nsubj	_	_
11	1992'ye	1992	NOUN	NN	Case=Dat|Number=Sing	13	obl	_	_
12	denk	denk	ADJ	JJ	_	13	amod	_	_
13	gelmiştir	gel	VERB	VB	Aspect=Perf|Evident=Nfh|Mood=Gen|Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No
14	.	.	PUNCT	.	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 13 acl	color:blue
1	Eğer	eğer	SCONJ	SCONJ	_	7	mark	_	_
2	ki	ki	SCONJ	SCONJ	_	1	fixed	_	_
3	o	o	PRON	PRP	Case=Nom|Definite=Def|Number=Sing|Polarity=Pos	7	nsubj	_	SpaceAfter=No
4	,	,	PUNCT	,	_	3	punct	_	_
5	demokrat	demokrat	NOUN	NN	Number=Sing	6	compound	_	_
6	başkanlığına	başkanlık	NOUN	NN	Case=Dat|Number=Sing|Number[psor]=Sing|Person[psor]=3	7	obl	_	_
7	seçilecek	seç	VERB	VB	Number=Sing|Polarity=Pos	16	advcl	_	_
8	olursa	ol	AUX	VB	Aspect=Hab|Mood=CndGen|Number=Sing|Person=3|Tense=Pres	7	aux	_	SpaceAfter=No
9	,	,	PUNCT	,	_	7	punct	_	_
10	onun	o	PRON	PRP$	Case=Gen|Number=Sing|Polarity=Pos	13	nmod:poss	_	_
11	yıllarca	yıl	ADV	RB	_	13	advmod	_	_
12	soruşturma	soruşturma	NOUN	VN	Aspect=Perf|Case=Nom|Mood=Ind|Tense=Pres|VerbForm=Ger	13	compound	_	_
13	altında	alt	NOUN	NN	Case=Loc|Number=Sing|Number[psor]=Sing|Person[psor]=3	15	acl	_	_
14	olacağının	ol	AUX	VN	Case=Gen|Number=Sing|Number[psor]=Sing|Person[psor]=2|Polarity=Pos	13	cop	_	_
15	sözünü	söz	NOUN	NN	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3	16	obj	_	_
16	verdi	ver	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No
17	.	.	PUNCT	.	_	16	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 13 acl	color:blue
1	Bu	bu	DET	DT	Definite=Def|Number=Sing|Polarity=Pos	2	det	_	_
2	durum	durum	NOUN	NN	Case=Nom|Number=Sing	19	nsubj	_	_
3	en	en	ADV	RB	_	4	advmod	_	_
4	çok	çok	ADV	RB	_	19	advmod	_	_
5	şöhret	şöhret	NOUN	NN	Number=Sing	6	compound	_	_
6	sahibi	sahip	NOUN	NN	Number=Sing|Number[psor]=Sing|Person[psor]=3	8	compound	_	_
7	bir	bir	DET	DT	Definite=Ind|Number=Sing|Polarity=Pos	8	det	_	_
8	ünlünün	ünlü	NOUN	NN	Case=Gen|Number=Sing	9	nmod:poss	_	_
9	adı	ad	NOUN	NN	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	15	nsubj	_	_
10	başlangıçta	başlangıç	NOUN	NN	Case=Loc|Number=Sing	15	obl:tmod	_	_
11	oldukça	ol	ADV	CRB	_	12	advcl	_	_
12	nadir	nadir	ADJ	JJ	Number=Sing	13	xcomp	_	_
13	rastlanan	rastla	VERB	VJ	Number=Sing|Polarity=Pos	15	acl	_	_
14	bir	bir	DET	DT	Definite=Ind|Number=Sing|Polarity=Pos	15	det	_	_
15	isim	isim	NOUN	NN	Number=Sing	19	advcl	_	_
16	olduğunda	ol	AUX	VN	Case=Loc|Number=Sing|Number[psor]=Sing|Person[psor]=3|Polarity=Pos	15	cop	_	_
17	belirgin	belirgin	ADJ	JJ	Number=Sing	18	amod	_	_
18	hale	hal	NOUN	NN	Case=Dat|Number=Sing	19	obl	_	_
19	gelir	gel	VERB	VB	Person=3|Person[psor]=3|Tense=Aor	0	root	_	SpaceAfter=No
20	.	.	PUNCT	.	_	19	punct	_	_

~~~


