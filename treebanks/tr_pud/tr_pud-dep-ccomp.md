---
layout: base
title:  'Statistics of ccomp in UD_Turkish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Turkish-PUD: Relations: `ccomp`

This relation is universal.

173 nodes (1%) are attached to their parents as `ccomp`.

172 instances of `ccomp` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.08092485549133.

The following 14 pairs of parts of speech are connected with `ccomp`: <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (80; 46% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (36; 21% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-VERB.html">VERB</a></tt> (20; 12% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (12; 7% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt> (11; 6% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt> (5; 3% instances), <tt><a href="tr_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="tr_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="tr_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="tr_pud-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 ccomp	color:blue
1	Neden	ne	ADV	WRB	Number=Sing	3	advmod	_	_
2	onu	o	PRON	PRP	Case=Acc|Number=Sing|Polarity=Pos	3	obj	_	_
3	seçtiğimi	seç	NOUN	VN	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=1|Polarity=Pos	4	ccomp	_	_
4	bilmiyorum	bil	VERB	VB	Aspect=Prog|Mood=Ind|Number=Sing|Person=1|Polarity=Neg|Tense=Pres	0	root	_	SpaceAfter=No
5	...	...	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 ccomp	color:blue
1	İtalya'nın	İtalya	PROPN	PROPN	Case=Gen|Number=Sing	7	nmod:poss	_	Proper=True
2	Madrid'den	Madrid	PROPN	PROPN	Case=Abl|Number=Sing	4	obl	_	Proper=True
3	daha	daha	ADV	RB	_	4	advmod	_	_
4	kısa	kısa	ADJ	JJ	Number=Sing	7	amod	_	_
5	bir	bir	DET	DT	Definite=Ind|Number=Sing|Polarity=Pos	7	det	_	_
6	metro	metro	NOUN	NN	Number=Sing	7	nmod:poss	_	_
7	hattı	hat	NOUN	NN	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	8	nsubj	_	_
8	olduğunu	ol	NOUN	VN	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3|Polarity=Pos	9	ccomp	_	_
9	tasavvur	tasavvur	NOUN	NN	Number=Sing	11	csubj	_	_
10	etmek	et	NOUN	VN	Aspect=Perf|Case=Nom|Mood=Ind|Number=Sing|Person=3|Tense=Fut	9	compound:lvc	_	_
11	zor	zor	ADJ	JJ	Number=Sing	0	root	_	SpaceAfter=No
12	.	.	PUNCT	.	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 ccomp	color:blue
1	Ben	ben	PRON	PRP	Case=Nom|Number=Sing|Person=1|Polarity=Pos	5	nsubj	_	_
2	zaten	zaten	ADV	RB	_	5	advmod	_	_
3	her	her	DET	DT	Definite=Def|Number=Sing|Polarity=Pos	4	det	_	_
4	şekilde	şekil	NOUN	NN	Case=Loc|Number=Sing	5	obl	_	_
5	hapse	haps	NOUN	NN	Case=Dat|Number=Sing	0	root	_	_
6	gireceğim	gir	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Fut	5	compound	_	SpaceAfter=No
7	,	,	PUNCT	,	_	8	punct	_	_
8	umarım	um	VERB	VB	Number=Sing|Person=1|Tense=Aor	5	conj	_	_
9	buna	bu	PRON	PRD	Case=Dat|Number=Sing|Polarity=Pos	10	obl	_	_
10	değmiştir	değmiş	VERB	VB	Aspect=Perf|Evident=Nfh|Mood=Gen|Number=Sing|Person=3|Tense=Past	8	ccomp	_	SpaceAfter=No
11	.	.	PUNCT	.	_	8	punct	_	_

~~~


