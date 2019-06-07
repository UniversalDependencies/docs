---
layout: base
title:  'Statistics of aux:q in UD_Turkish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Turkish-PUD: Relations: `aux:q`

This relation is a language-specific subtype of <tt><a href="tr_pud-dep-aux.html">aux</a></tt>.

5 nodes (0%) are attached to their parents as `aux:q`.

5 instances of `aux:q` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.4.

The following 3 pairs of parts of speech are connected with `aux:q`: <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-AUX.html">AUX</a></tt> (3; 60% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-AUX.html">AUX</a></tt> (1; 20% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-AUX.html">AUX</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 aux:q	color:blue
1	Veya	veya	ADV	RB	_	8	advmod	_	_
2	pahalı	pahalı	ADJ	JJ	Number=Sing	4	amod	_	_
3	bir	bir	DET	DT	Definite=Ind|Number=Sing|Polarity=Pos	4	det	_	_
4	standart	standart	NOUN	NN	Number=Sing	8	amod	_	_
5	veya	veya	CCONJ	CCONJ	_	7	cc	_	_
6	ön	ön	NOUN	NN	Number=Sing	7	compound	_	_
7	ödemeli	öde	ADJ	JJ	Number=Sing	4	conj	_	_
8	tarife	tarife	NOUN	NN	Number=Sing	0	root	_	_
9	mi	mi	AUX	AUX	Number=Sing|Person=3	8	aux:q	_	SpaceAfter=No
10	?	?	PUNCT	.	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 aux:q	color:blue
1	Çalışanların	Çalışan	NOUN	VN	Case=Gen|Number=Plur	5	nmod:poss	_	_
2	masalarına	masa	NOUN	NN	Case=Dat|Number=Plur|Number[psor]=Sing|Person[psor]=3	5	iobj	_	_
3	dini	din	ADJ	JJ	Number=Sing|Number[psor]=Sing|Person[psor]=3	4	amod	_	_
4	nesneler	nesne	NOUN	NN	Number=Plur	5	obj	_	_
5	koyması	koy	NOUN	VN	Aspect=Perf|Case=Nom|Mood=Ind|Number[psor]=Sing|Person[psor]=3|Tense=Pres|VerbForm=Ger	6	csubj	_	_
6	serbest	serbest	ADJ	JJ	Number=Sing	0	root	_	_
7	mi	mi	AUX	AUX	Number=Sing|Person=3	6	aux:q	_	SpaceAfter=No
8	?	?	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 aux:q	color:blue
1	Çalar	Ça	ADJ	VJ	Aspect=Hab|Mood=Gen|Number=Sing|Person=3|Tense=Pres	2	acl:relcl	_	_
2	saatinizle	saatiniz	NOUN	NN	Case=Ins|Number=Sing|Number[psor]=Plur|Person[psor]=2	3	obl	_	_
3	tartışıyor	tartış	VERB	VB	Aspect=Prog|Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
4	musunuz	mu	AUX	AUX	Number=Plur|Person=2	3	aux:q	_	SpaceAfter=No
5	?	?	PUNCT	.	_	3	punct	_	_

~~~


