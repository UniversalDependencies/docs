---
layout: base
title:  'Statistics of aux in UD_Turkish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Turkish-PUD: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="tr_pud-dep-aux-q.html">aux:q</a></tt>.

45 nodes (0%) are attached to their parents as `aux`.

45 instances of `aux` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.33333333333333.

The following 4 pairs of parts of speech are connected with `aux`: <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-AUX.html">AUX</a></tt> (19; 42% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-AUX.html">AUX</a></tt> (13; 29% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-AUX.html">AUX</a></tt> (12; 27% instances), <tt><a href="tr_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_pud-pos-AUX.html">AUX</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 aux	color:blue
1	Teoride	Teori	NOUN	NN	Case=Loc|Number=Sing	7	obl	_	SpaceAfter=No
2	,	,	PUNCT	,	_	1	punct	_	_
3	eğer	eğer	SCONJ	SCONJ	_	5	mark	_	_
4	doğru	doğru	ADV	RB	Number=Sing	5	advmod	_	_
5	yapılırsa	yap	VERB	VB	Aspect=Hab|Mood=CndGen|Number=Sing|Person=3|Tense=Pres|Voice=Pass	7	advcl	_	SpaceAfter=No
6	,	,	PUNCT	,	_	5	punct	_	_
7	anlaşılamaz	anlaşıla	VERB	VB	Aspect=Hab|Mood=GenPot|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|Voice=Pass	0	root	_	_
8	olmalı	ol	AUX	VB	Mood=Nec|Number=Sing|Person=3|Tense=Pres	7	aux	_	SpaceAfter=No
9	.	.	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 aux	color:blue
1	Sonuçta	Sonuçta	NOUN	NN	Case=Loc|Number=Sing	10	obl	_	SpaceAfter=No
2	,	,	PUNCT	,	_	1	punct	_	_
3	internet	internet	NOUN	NN	Case=Nom|Number=Sing	10	nsubj	_	_
4	bir	bir	DET	DT	Definite=Ind|Number=Sing|Polarity=Pos	5	det	_	_
5	lüks	lüks	NOUN	NN	Number=Sing	0	root	_	_
6	değil	değil	AUX	NOMP	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres	5	aux	_	SpaceAfter=No
7	;	;	PUNCT	,	_	10	punct	_	_
8	hayati	hayati	ADJ	JJ	Number=Sing	10	amod	_	_
9	bir	bir	DET	DT	Definite=Ind|Number=Sing|Polarity=Pos	10	det	_	_
10	araç	araç	NOUN	NN	Number=Sing	5	conj	_	SpaceAfter=No
11	.	.	PUNCT	.	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 aux	color:blue
1	Videonun	Videon	NOUN	NN	Case=Gen|Number=Sing	3	nmod:poss	_	_
2	Almanya'da	Almanya	PROPN	PROPN	Case=Loc|Number=Sing	3	obl	_	Proper=True
3	tanıtılmasının	tanıtılmas	NOUN	VN	Aspect=Perf|Case=Gen|Mood=Ind|Number[psor]=Sing|Person[psor]=3|Tense=Pres|VerbForm=Ger|Voice=Pass	4	nmod:poss	_	_
4	nedeni	neden	NOUN	NN	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	5	nsubj	_	_
5	belli	belli	ADJ	JJ	Number=Sing	0	root	_	_
6	değil	değil	AUX	NOMP	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres	5	aux	_	SpaceAfter=No
7	.	.	PUNCT	.	_	5	punct	_	_

~~~


