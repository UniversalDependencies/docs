---
layout: base
title:  'Statistics of nmod:arg in UD_Turkish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Turkish-PUD: Relations: `nmod:arg`

This relation is a language-specific subtype of <tt><a href="tr_pud-dep-nmod.html">nmod</a></tt>.
There are also 1 other language-specific subtypes of `nmod`: <tt><a href="tr_pud-dep-nmod-poss.html">nmod:poss</a></tt>.

110 nodes (1%) are attached to their parents as `nmod:arg`.

110 instances of `nmod:arg` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.42727272727273.

The following 7 pairs of parts of speech are connected with `nmod:arg`: <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (66; 60% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (36; 33% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt> (3; 3% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-PRON.html">PRON</a></tt> (2; 2% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="tr_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nmod:arg	color:blue
1	Bu	_	PRON	PRI	Case=Nom|Definite=Def|Number=Sing|Polarity=Pos	8	nsubj	_	_
2	bazen	_	ADV	RB	_	6	advmod	_	_
3	süper	_	ADJ	JJ	Number=Sing	5	amod	_	_
4	bir	_	DET	DT	Definite=Ind|Number=Sing|Polarity=Pos	5	det	_	_
5	güce	_	NOUN	NN	Case=Dat|Number=Sing	6	nmod:arg	_	_
6	sahip	_	ADJ	JJ	Number=Sing	8	obj	_	_
7	olmak	_	AUX	VN	Aspect=Perf|Case=Nom|Mood=Ind|Tense=Pres|VerbForm=Ger	6	cop	_	ToDo=pcomp
8	gibi	_	ADP	IN	_	0	root	_	SpaceAfter=No
9	.	_	PUNCT	.	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 nmod:arg	color:blue
1	Sansür	_	NOUN	NN	Case=Nom|Number=Sing	6	nsubj	_	SpaceAfter=No
2	,	_	PUNCT	,	_	1	punct	_	_
3	tüm	_	DET	DT	Definite=Def|Number=Sing|Polarity=Pos	5	det	_	_
4	istenmeyen	_	ADJ	VJ	Number=Sing|Polarity=Neg	5	acl:relcl	_	_
5	görüşleri	_	NOUN	VN	Case=Acc|Number=Plur	6	xcomp	_	_
6	susturdu	_	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Cau	14	parataxis	_	SpaceAfter=No
7	;	_	PUNCT	,	_	6	punct	_	_
8	kamu	_	NOUN	NN	Number=Sing	9	compound	_	_
9	hayatına	_	NOUN	NN	Case=Dat|Number=Sing|Number[psor]=Sing|Person[psor]=3	10	nmod:arg	_	_
10	katılım	_	NOUN	NN	Case=Nom|Number=Sing	14	nsubj	_	_
11	neredeyse	_	ADV	RB	_	12	advmod	_	_
12	imkansız	_	ADJ	JJ	Number=Sing	13	amod	_	_
13	hale	_	NOUN	NN	Case=Dat|Number=Sing	14	advmod	_	_
14	geldi	_	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No
15	.	_	PUNCT	.	_	14	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 nmod:arg	color:blue
1	Son	_	ADJ	JJ	Number=Sing	2	amod	_	_
2	romanı	_	NOUN	NN	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	8	nsubj	_	SpaceAfter=No
3	,	_	PUNCT	,	_	2	punct	_	_
4	Lennox	_	PROPN	PROPN	Number=Sing	5	compound	_	Proper=True
5	Kontesi	_	NOUN	NN	Number=Sing|Number[psor]=Sing|Person[psor]=3	6	compound	_	_
6	Margaret	_	PROPN	PROPN	Number=Sing	8	nmod:arg	_	Proper=True
7	Douglas'la	_	PROPN	PROPN	Case=Ins|Number=Sing	6	flat:name	_	Proper=True|ToDo=nmod
8	ilgili	_	NOUN	NN	Number=Sing	0	root	_	_
9	dir	_	AUX	AUX	Aspect=Perf|Mood=Gen|Number=Sing|Person=3|Tense=Pres	8	cop	_	_
10	.	_	PUNCT	.	_	8	punct	_	_

~~~


