---
layout: base
title:  'Statistics of nummod in UD_Turkish_German-SAGT'
udver: '2'
---

## Treebank Statistics: UD_Turkish_German-SAGT: Relations: `nummod`

This relation is universal.

239 nodes (1%) are attached to their parents as `nummod`.

220 instances of `nummod` (92%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.28870292887029.

The following 10 pairs of parts of speech are connected with `nummod`: <tt><a href="qtd_sagt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="qtd_sagt-pos-NUM.html">NUM</a></tt> (212; 89% instances), <tt><a href="qtd_sagt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="qtd_sagt-pos-NUM.html">NUM</a></tt> (12; 5% instances), <tt><a href="qtd_sagt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="qtd_sagt-pos-NUM.html">NUM</a></tt> (5; 2% instances), <tt><a href="qtd_sagt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="qtd_sagt-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="qtd_sagt-pos-NUM.html">NUM</a></tt>-<tt><a href="qtd_sagt-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="qtd_sagt-pos-ADV.html">ADV</a></tt>-<tt><a href="qtd_sagt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="qtd_sagt-pos-ADV.html">ADV</a></tt>-<tt><a href="qtd_sagt-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="qtd_sagt-pos-PRON.html">PRON</a></tt>-<tt><a href="qtd_sagt-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="qtd_sagt-pos-VERB.html">VERB</a></tt>-<tt><a href="qtd_sagt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="qtd_sagt-pos-VERB.html">VERB</a></tt>-<tt><a href="qtd_sagt-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nummod	color:blue
1	İki	iki	NUM	_	NumType=Card	2	nummod	_	LangID=TR
2	ta--	tane	NOUN	_	Case=Nom|Number=Sing	4	reparandum	_	LangID=TR|CorrectForm=tane
3	iki	iki	NUM	_	NumType=Card	4	nummod	_	LangID=TR
4	tane	tane	NOUN	_	Case=Nom|Number=Sing	5	nmod	_	LangID=TR
5	Lektüre	Lektüre	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	6	obj	_	LangID=DE
6	okumamız	oku	VERB	_	Case=Nom|Number=Sing|Number[psor]=Plur|Person[psor]=1|VerbForm=Vnoun	0	root	_	LangID=TR
7	lazım	lazım	ADJ	_	_	6	csubj	_	LangID=TR
8	dı	i	AUX	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Tense=Past	6	cop	_	LangID=TR
9	Almanca'da	Almanca	PROPN	_	Case=Loc|Number=Sing	6	obl	_	LangID=TR|SpaceAfter=No
10	.	.	PUNCT	_	_	6	punct	_	LangID=OTHER

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nummod	color:blue
1	22	22	NUM	_	_	2	nummod	_	LangID=DE
2	Februar	Februar	PROPN	_	Case=Dat|Gender=Masc|Number=Sing	8	obl	_	LangID=DE
3	nein	nein	INTJ	_	_	8	discourse	_	LangID=DE
4	28	28	NUM	_	_	5	nummod	_	LangID=DE
5	Februar	Februar	PROPN	_	Case=Dat|Gender=Masc|Number=Sing	8	obl	_	LangID=DE
6	mesleğim	meslek	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=1	8	obl	_	LangID=TR
7	ile	ile	ADP	_	_	6	case	_	LangID=TR
8	bitiyorum	bit	VERB	_	Aspect=Prog|Evident=Fh|Mood=Ind|Number=Sing|Person=1|Tense=Pres	0	root	_	LangID=TR|SpaceAfter=No
9	.	.	PUNCT	_	_	8	punct	_	LangID=OTHER

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nummod	color:blue
1	Ben	ben	PRON	_	Case=Nom|Number=Sing	3	nsubj	_	LangID=TR
2	de	de	ADV	_	_	1	advmod:emph	_	LangID=TR
3	hesapladım	hesapla	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=1|Tense=Past	0	root	_	LangID=TR
4	yirmi	yirmi	NUM	_	NumType=Card	6	nummod	_	LangID=TR
5	bir	bir	NUM	_	NumType=Card	6	nummod	_	LangID=TR
6	buçuk	buçuk	ADJ	_	_	9	advcl	_	LangID=TR
7	oder	oder	CCONJ	_	_	8	cc	_	LangID=DE
8	einundzwanzigle	einundzwanzig	NOUN	_	Case=Ins|Number=Sing	6	conj	_	CSPoint=einundzwanzig§le|DeCase=Dat|DeGender=Fem|LangID=MIXED
9	biteceğim	bit	VERB	_	Aspect=Perf|Case=Nom|Evident=Fh|Mood=Ind|Number=Sing|Number[psor]=Sing|Person[psor]=1|Tense=Fut	3	ccomp	_	LangID=TR
10	zaten	zaten	ADV	_	_	9	advmod	_	LangID=TR
11	Allah	Allah	PROPN	_	Case=Nom|Number=Sing	13	nsubj	_	LangID=TR
12	izin	izin	NOUN	_	Case=Nom|Number=Sing	13	obj	_	LangID=TR
13	verirse	ver	VERB	_	Aspect=Imp|Evident=Fh|Mood=Cnd|Number=Sing|Person=3|Tense=Pres	3	parataxis	_	LangID=TR
14	mesleğimle	meslek	NOUN	_	Case=Ins|Number=Sing|Number[psor]=Sing|Person[psor]=1	13	obl	_	LangID=TR|SpaceAfter=No
15	.	.	PUNCT	_	_	3	punct	_	LangID=OTHER

~~~


