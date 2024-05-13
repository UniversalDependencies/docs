---
layout: base
title:  'Statistics of aux in UD_Turkish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Turkish-PUD: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="tr_pud-dep-aux-q.html">aux:q</a></tt>.

30 nodes (0%) are attached to their parents as `aux`.

30 instances of `aux` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.3.

The following 5 pairs of parts of speech are connected with `aux`: <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-AUX.html">AUX</a></tt> (13; 43% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-AUX.html">AUX</a></tt> (12; 40% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-AUX.html">AUX</a></tt> (3; 10% instances), <tt><a href="tr_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_pud-pos-AUX.html">AUX</a></tt> (1; 3% instances), <tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_pud-pos-AUX.html">AUX</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 aux	color:blue
1	Sonuçta	Sonuçta	NOUN	NN	Case=Loc|Number=Sing	5	obl	_	SpaceAfter=No
2	,	,	PUNCT	,	_	1	punct	_	_
3	internet	internet	NOUN	NN	Case=Nom|Number=Sing	5	nsubj	_	_
4	bir	bir	DET	DT	Definite=Ind|Polarity=Pos	5	det	_	_
5	lüks	lüks	NOUN	NN	Number=Sing	0	root	_	_
6	değil	değil	AUX	NOMP	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres	5	aux	_	SpaceAfter=No
7	;	;	PUNCT	,	_	10	punct	_	_
8	hayati	hayati	ADJ	JJ	Number=Sing	10	amod	_	_
9	bir	bir	DET	DT	Definite=Ind|Polarity=Pos	10	det	_	_
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
3	tanıtılmasının	tanıtılmas	VERB	VN	Aspect=Perf|Case=Gen|Mood=Ind|Number[psor]=Sing|Person[psor]=3|Tense=Pres|VerbForm=Vnoun|Voice=Pass	4	nmod:poss	_	_
4	nedeni	neden	NOUN	NN	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	5	nsubj	_	_
5	belli	belli	ADJ	JJ	Number=Sing	0	root	_	_
6	değil	değil	AUX	NOMP	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres	5	aux	_	SpaceAfter=No
7	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 aux	color:blue
1	Çalar	Ça	VERB	VJ	Aspect=Hab|Mood=Gen|Number=Sing|Person=3|Tense=Pres|VerbForm=Part	2	compound	_	_
2	saatinizle	saatiniz	NOUN	NN	Case=Ins|Number=Sing|Number[psor]=Plur|Person[psor]=2	3	obl	_	_
3	tartışıyor	tartış	VERB	VB	Aspect=Prog|Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
4	musunuz	mi	AUX	AUX	Number=Plur|Person=2	3	aux	_	SpaceAfter=No
5	?	?	PUNCT	.	_	3	punct	_	_

~~~


