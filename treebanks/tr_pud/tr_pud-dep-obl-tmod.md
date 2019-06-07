---
layout: base
title:  'Statistics of obl:tmod in UD_Turkish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Turkish-PUD: Relations: `obl:tmod`

This relation is a language-specific subtype of <tt><a href="tr_pud-dep-obl.html">obl</a></tt>.

232 nodes (1%) are attached to their parents as `obl:tmod`.

232 instances of `obl:tmod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.08620689655172.

The following 8 pairs of parts of speech are connected with `obl:tmod`: <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (114; 49% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (58; 25% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (46; 20% instances), <tt><a href="tr_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (6; 3% instances), <tt><a href="tr_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (5; 2% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 6 obl:tmod	color:blue
1	Başarılı	başarılı	ADJ	JJ	Number=Sing	3	amod	_	_
2	bir	bir	DET	DT	Definite=Ind|Number=Sing|Polarity=Pos	3	det	_	_
3	gitarcı	gitarcı	NOUN	NN	Number=Sing	10	advcl	_	_
4	olarak	ol	AUX	CRB	Polarity=Pos	3	cop	_	_
5	aynı	aynı	ADJ	JJ	Number=Sing	6	amod	_	_
6	yıl	yıl	NOUN	NN	Number=Sing	10	obl:tmod	_	_
7	orada	ora	PRON	PRD	Case=Loc|Number=Sing|Polarity=Pos	10	nmod	_	_
8	bir	bir	DET	DT	Definite=Ind|Number=Sing|Polarity=Pos	9	det	_	_
9	konser	konser	NOUN	NN	Number=Sing	10	obj	_	_
10	verdi	ver	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No
11	.	.	PUNCT	.	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 obl:tmod	color:blue
1	1975	1975	NUM	CD	Number=Sing	2	compound	_	_
2	yılında	yıl	NOUN	NN	Case=Loc|Number=Sing|Number[psor]=Sing|Person[psor]=3	5	obl:tmod	_	_
3	yaban	yaban	NOUN	NN	Number=Sing	4	compound	_	_
4	hayat	hayat	NOUN	NN	Number=Sing	5	compound	_	_
5	tapınağı	tapınağ	NOUN	NN	Number=Sing|Number[psor]=Sing|Person[psor]=3	7	nsubj	_	_
6	ilan	ilan	NOUN	NN	Number=Sing	7	compound	_	_
7	edilmiştir	et	AUX	VB	Aspect=Perf|Evident=Nfh|Mood=Gen|Number=Sing|Person=3|Tense=Past|Voice=Pass	0	root	_	SpaceAfter=No
8	.	.	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 obl:tmod	color:blue
1	Çin	Çin	PROPN	PROPN	Case=Nom|Number=Sing	8	nsubj	_	Proper=True
2	yenildi	yenil	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Pass	0	root	_	_
3	ve	ve	CCONJ	CCONJ	_	8	cc	_	_
4	1842'de	1842	NOUN	NN	Case=Loc|Number=Sing	8	obl:tmod	_	_
5	Nanking	Nanking	PROPN	PROPN	Number=Sing	6	compound	_	Proper=True
6	Antlaşması	Antlaş	NOUN	VN	Number=Sing|Number[psor]=Sing|Person[psor]=3	7	compound	_	Proper=True
7	hükümlerine	hüküm	NOUN	NN	Case=Dat|Number=Plur|Number[psor]=Sing|Person[psor]=3	8	nmod:arg	_	_
8	razı	razı	ADJ	JJ	Number=Sing	2	conj	_	_
9	oldu	ol	AUX	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	8	cop	_	SpaceAfter=No
10	.	.	PUNCT	.	_	8	punct	_	_

~~~


