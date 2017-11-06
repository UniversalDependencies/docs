---
layout: base
title:  'Statistics of obl:tmod in UD_Turkish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Turkish-PUD: Relations: `obl:tmod`

This relation is a language-specific subtype of <tt><a href="tr_pud-dep-obl.html">obl</a></tt>.

232 nodes (1%) are attached to their parents as `obl:tmod`.

232 instances of `obl:tmod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.07327586206897.

The following 7 pairs of parts of speech are connected with `obl:tmod`: <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (112; 48% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (61; 26% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (51; 22% instances), <tt><a href="tr_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (5; 2% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 6 obl:tmod	color:blue
1	Başarılı	_	ADJ	JJ	Number=Sing	3	amod	_	_
2	bir	_	DET	DT	Definite=Ind|Number=Sing|Polarity=Pos	3	det	_	_
3	gitarcı	_	NOUN	NN	Number=Sing	10	advcl	_	_
4	olarak	_	AUX	CRB	Polarity=Pos	3	cop	_	_
5	aynı	_	ADJ	JJ	Number=Sing	6	amod	_	_
6	yıl	_	NOUN	NN	Number=Sing	10	obl:tmod	_	_
7	orada	_	PRON	PRD	Case=Loc|Number=Sing|Polarity=Pos	10	advmod	_	_
8	bir	_	DET	DT	Definite=Ind|Number=Sing|Polarity=Pos	9	det	_	_
9	konser	_	NOUN	NN	Number=Sing	10	obj	_	_
10	verdi	_	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No
11	.	_	PUNCT	.	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 obl:tmod	color:blue
1	1975	_	NUM	CD	Number=Sing	2	compound	_	_
2	yılında	_	NOUN	NN	Case=Loc|Number=Sing|Number[psor]=Sing|Person[psor]=3	5	obl:tmod	_	_
3	yaban	_	NOUN	NN	Number=Sing	4	compound	_	_
4	hayat	_	NOUN	NN	Number=Sing	5	compound	_	_
5	tapınağı	_	NOUN	NN	Number=Sing|Number[psor]=Sing|Person[psor]=3	0	root	_	_
6	ilan	_	NOUN	NN	Number=Sing	5	fixed	_	_
7	edilmiştir	_	AUX	VB	Aspect=Perf|Evident=Nfh|Mood=Gen|Number=Sing|Person=3|Tense=Past|Voice=Pass	5	cop	_	SpaceAfter=No
8	.	_	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 obl:tmod	color:blue
1	Çin	_	PROPN	PROPN	Case=Nom|Number=Sing	8	nsubj	_	Proper=True
2	yenildi	_	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Pass	0	root	_	_
3	ve	_	CCONJ	CCONJ	_	8	cc	_	_
4	1842'de	_	NOUN	NN	Case=Loc|Number=Sing	8	obl:tmod	_	_
5	Nanking	_	PROPN	PROPN	Number=Sing	6	compound	_	Proper=True
6	Antlaşması	_	NOUN	VN	Number=Sing|Number[psor]=Sing|Person[psor]=3	7	compound	_	Proper=True
7	hükümlerine	_	NOUN	NN	Case=Dat|Number=Plur|Number[psor]=Sing|Person[psor]=3	8	nmod:arg	_	_
8	razı	_	ADJ	JJ	Number=Sing	2	conj	_	_
9	oldu	_	AUX	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	8	cop	_	SpaceAfter=No
10	.	_	PUNCT	.	_	8	punct	_	_

~~~


