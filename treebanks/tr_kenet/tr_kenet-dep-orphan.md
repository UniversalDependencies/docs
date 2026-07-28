---
layout: base
title:  'Statistics of orphan in UD_Turkish-Kenet'
udver: '2'
---

## Treebank Statistics: UD_Turkish-Kenet: Relations: `orphan`

This relation is universal.

15 nodes (0%) are attached to their parents as `orphan`.

8 instances of `orphan` (53%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.26666666666667.

The following 9 pairs of parts of speech are connected with `orphan`: <tt><a href="tr_kenet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_kenet-pos-ADJ.html">ADJ</a></tt> (3; 20% instances), <tt><a href="tr_kenet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_kenet-pos-NOUN.html">NOUN</a></tt> (3; 20% instances), <tt><a href="tr_kenet-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_kenet-pos-NOUN.html">NOUN</a></tt> (3; 20% instances), <tt><a href="tr_kenet-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_kenet-pos-NOUN.html">NOUN</a></tt> (1; 7% instances), <tt><a href="tr_kenet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_kenet-pos-DET.html">DET</a></tt> (1; 7% instances), <tt><a href="tr_kenet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_kenet-pos-VERB.html">VERB</a></tt> (1; 7% instances), <tt><a href="tr_kenet-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_kenet-pos-NUM.html">NUM</a></tt> (1; 7% instances), <tt><a href="tr_kenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_kenet-pos-PRON.html">PRON</a></tt> (1; 7% instances), <tt><a href="tr_kenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_kenet-pos-VERB.html">VERB</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 orphan	color:blue
1	Çoğundan	çoğu	PRON	_	Case=Abl|Number=Plur|Number[psor]=Plur|Person=3|Person[psor]=3|PronType=Ind	2	nmod	_	_
2	istiskal	istiskal	NOUN	_	Case=Nom|Number=Sing	7	obj	_	_
3	,	,	PUNCT	_	_	2	punct	_	_
4	pek	pek	ADV	_	_	5	amod	_	_
5	azından	az	ADJ	_	Case=Abl|Number=Sing|Number[psor]=Sing|Person[psor]=3	6	orphan	_	_
6	itibar	itibar	NOUN	_	Case=Nom|Number=Sing	2	conj	_	_
7	gördü	gör	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	0	root	_	_
8	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 orphan	color:blue
1	Yıllar	yıl	NOUN	_	Case=Nom|Number=Plur	6	nsubj	_	_
2	yârlerden	yâr	NOUN	_	Case=Abl|Number=Plur	6	obl	_	_
3	,	,	PUNCT	_	_	2	punct	_	_
4	yârler	yâr	NOUN	_	Case=Nom|Number=Plur	1	conj	_	_
5	yıllardan	yıl	NOUN	_	Case=Abl|Number=Plur	4	orphan	_	_
6	vefasız	vefa	NOUN	_	_	0	root	_	_
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 orphan	color:blue
1	Başkasını	başkası	PRON	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3|PronType=Ind	2	obj	_	_
2	seçselerdi	seç	VERB	_	Aspect=Perf|Evident=Fh|Mood=Cnd|Number=Plur|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	17	advcl	_	_
3	,	,	PUNCT	_	_	2	punct	_	_
4	o	o	DET	_	Definite=Def|PronType=Dem	17	nsubj	_	_
5	kaptan	kaptan	NOUN	_	Case=Nom|Number=Sing	7	orphan	_	_
6	,	,	PUNCT	_	_	5	punct	_	_
7	ben	ben	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	4	conj	_	_
8	de	de	CCONJ	_	_	7	case	_	_
9	seve	sev	VERB	_	Evident=Fh|Mood=Opt|Number=Sing|Person=3|Polarity=Pos|VerbForm=Fin	10	compound	_	_
10	seve	sev	VERB	_	Evident=Fh|Mood=Opt|Number=Sing|Person=3|Polarity=Pos|VerbForm=Fin	17	advcl	_	_
11	dalgıç	dalgıç	NOUN	_	Case=Nom|Number=Sing	17	obj	_	_
12	ya	ya	CCONJ	_	_	16	cc	_	_
13	da	da	CCONJ	_	_	16	advmod	_	_
14	hava	hava	NOUN	_	Case=Nom|Number=Sing	15	nmod	_	_
15	verici	verici	NOUN	_	Case=Nom|Number=Sing	16	nmod	_	_
16	makineci	makineci	NOUN	_	Case=Nom|Number=Sing	11	conj	_	_
17	olurdum	ol	VERB	_	Aspect=Hab|Evident=Fh|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Past|VerbForm=Fin	0	root	_	_
18	.	.	PUNCT	_	_	17	punct	_	_

~~~


