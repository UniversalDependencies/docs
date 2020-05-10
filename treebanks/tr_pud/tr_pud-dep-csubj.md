---
layout: base
title:  'Statistics of csubj in UD_Turkish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Turkish-PUD: Relations: `csubj`

This relation is universal.

93 nodes (1%) are attached to their parents as `csubj`.

93 instances of `csubj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.55913978494624.

The following 7 pairs of parts of speech are connected with `csubj`: <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (37; 40% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (32; 34% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (18; 19% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt> (2; 2% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 csubj	color:blue
1	Son	son	ADJ	JJ	Number=Sing	3	amod	_	_
2	Olimpiyat	Olimpiyat	NOUN	NN	Number=Sing	3	nmod:poss	_	Proper=True
3	Oyunlarının	Oyun	NOUN	NN	Case=Gen|Number=Plur|Number[psor]=Sing|Person[psor]=3	5	nsubj	_	Proper=True
4	393'te	393	NOUN	NN	Case=Loc|Number=Sing	5	obl	_	_
5	yapıldığı	yap	NOUN	VN	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3|Polarity=Pos	6	csubj	_	_
6	düşünülüyor	düşün	VERB	VB	Aspect=Prog|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Pass	0	root	_	SpaceAfter=No
7	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 5 csubj	color:blue
1	İlk	ilk	ADJ	JJ	Number=Sing	2	amod	_	_
2	saatte	saat	NOUN	NN	Case=Loc|Number=Sing	3	obl	_	_
3	yapılan	yap	ADJ	VJ	Number=Sing|Polarity=Pos	5	acl	_	_
4	iş	iş	NOUN	NN	Number=Sing	5	compound	_	_
5	süresi	süre	NOUN	NN	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	9	csubj	_	_
6	ise	i	AUX	VB	Mood=Cnd|Number=Sing|Person=3|Polarity=Pos	5	cop	_	_
7	yaklaşık	yaklaşık	ADJ	JJ	Number=Sing	8	amod	_	_
8	45	45	NUM	CD	Number=Sing	9	nummod	_	_
9	dakika	_	NOUN	NN	Number=Sing	0	root	_	_
10	dır	_	AUX	AUX	Aspect=Perf|Mood=Gen|Number=Sing|Person=3|Tense=Pres	9	cop	_	_
11	.	.	PUNCT	.	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 10 csubj	color:blue
1	Oyun	oyun	NOUN	NN	Number=Sing	2	nmod:poss	_	_
2	tarzında	tarz	NOUN	NN	Case=Loc|Number=Sing|Number[psor]=Sing|Person[psor]=3	6	obl	_	_
3	sert	sert	ADJ	JJ	Number=Sing	5	amod	_	_
4	bir	bir	DET	DT	Definite=Ind|Number=Sing|Polarity=Pos	5	det	_	_
5	yan	yan	NOUN	NN	Case=Nom|Number=Sing	6	nsubj	_	_
6	olsa	ol	VERB	VB	Mood=Cnd|Number=Sing|Person=3|Tense=Pres	12	advcl	_	_
7	da	da	ADV	RB	_	6	advmod:emph	_	_
8	yumuşak	yumuşak	ADJ	JJ	Number=Sing	10	amod	_	_
9	bir	bir	DET	DT	Definite=Ind|Number=Sing|Polarity=Pos	10	det	_	_
10	tutuşu	tutuş	NOUN	VN	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3|Polarity=Pos	12	csubj	_	_
11	da	da	ADV	RB	_	10	advmod:emph	_	_
12	var	var	ADJ	JJ	Polarity=Pos	0	root	_	SpaceAfter=No
13	.	.	PUNCT	.	_	12	punct	_	_

~~~


