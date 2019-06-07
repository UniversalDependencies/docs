---
layout: base
title:  'Statistics of nmod:arg in UD_Turkish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Turkish-PUD: Relations: `nmod:arg`

This relation is a language-specific subtype of <tt><a href="tr_pud-dep-nmod.html">nmod</a></tt>.
There are also 1 other language-specific subtypes of `nmod`: <tt><a href="tr_pud-dep-nmod-poss.html">nmod:poss</a></tt>.

107 nodes (1%) are attached to their parents as `nmod:arg`.

107 instances of `nmod:arg` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.44859813084112.

The following 8 pairs of parts of speech are connected with `nmod:arg`: <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (62; 58% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (36; 34% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt> (3; 3% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-PRON.html">PRON</a></tt> (2; 2% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="tr_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nmod:arg	color:blue
1	Bu	bu	PRON	PRI	Case=Nom|Definite=Def|Number=Sing|Polarity=Pos	8	nsubj	_	_
2	bazen	bazen	ADV	RB	_	6	advmod	_	_
3	süper	süper	ADJ	JJ	Number=Sing	5	amod	_	_
4	bir	bir	DET	DT	Definite=Ind|Number=Sing|Polarity=Pos	5	det	_	_
5	güce	güce	NOUN	NN	Case=Dat|Number=Sing	6	nmod:arg	_	_
6	sahip	sahip	ADJ	JJ	Number=Sing	8	obj	_	_
7	olmak	ol	AUX	VN	Aspect=Perf|Case=Nom|Mood=Ind|Tense=Pres|VerbForm=Ger	6	cop	_	ToDo=pcomp
8	gibi	gibi	ADP	IN	_	0	root	_	SpaceAfter=No
9	.	.	PUNCT	.	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 nmod:arg	color:blue
1	Sansür	Sansür	NOUN	NN	Case=Nom|Number=Sing	6	nsubj	_	SpaceAfter=No
2	,	,	PUNCT	,	_	1	punct	_	_
3	tüm	tüm	DET	DT	Definite=Def|Number=Sing|Polarity=Pos	5	det	_	_
4	istenmeyen	istenme	ADJ	VJ	Number=Sing|Polarity=Neg	5	acl:relcl	_	_
5	görüşleri	görüş	NOUN	VN	Case=Acc|Number=Plur	6	xcomp	_	_
6	susturdu	sus	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Cau	14	parataxis	_	SpaceAfter=No
7	;	;	PUNCT	,	_	6	punct	_	_
8	kamu	kamu	NOUN	NN	Number=Sing	9	compound	_	_
9	hayatına	hayat	NOUN	NN	Case=Dat|Number=Sing|Number[psor]=Sing|Person[psor]=3	10	nmod:arg	_	_
10	katılım	katılım	NOUN	NN	Case=Nom|Number=Sing	14	nsubj	_	_
11	neredeyse	neredeyse	ADV	RB	_	12	advmod	_	_
12	imkansız	_	ADJ	JJ	Number=Sing	13	amod	_	_
13	hale	hal	NOUN	NN	Case=Dat|Number=Sing	14	obl	_	_
14	geldi	gel	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No
15	.	.	PUNCT	.	_	14	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 nmod:arg	color:blue
1	Son	son	ADJ	JJ	Number=Sing	2	amod	_	_
2	romanı	roman	NOUN	NN	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	8	nsubj	_	SpaceAfter=No
3	,	,	PUNCT	,	_	2	punct	_	_
4	Lennox	Lennox	PROPN	PROPN	Number=Sing	5	compound	_	Proper=True
5	Kontesi	Konte	NOUN	NN	Number=Sing|Number[psor]=Sing|Person[psor]=3	6	compound	_	_
6	Margaret	Margaret	PROPN	PROPN	Number=Sing	8	nmod:arg	_	Proper=True
7	Douglas'la	Douglas	PROPN	PROPN	Case=Ins|Number=Sing	6	flat:name	_	Proper=True|ToDo=nmod
8	ilgili	ilgili	NOUN	NN	Number=Sing	0	root	_	_
9	dir	i	AUX	AUX	Aspect=Perf|Mood=Gen|Number=Sing|Person=3|Tense=Pres	8	cop	_	_
10	.	.	PUNCT	.	_	8	punct	_	_

~~~


