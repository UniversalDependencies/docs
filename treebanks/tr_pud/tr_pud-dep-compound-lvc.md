---
layout: base
title:  'Statistics of compound:lvc in UD_Turkish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Turkish-PUD: Relations: `compound:lvc`

This relation is a language-specific subtype of <tt><a href="tr_pud-dep-compound.html">compound</a></tt>.
There are also 1 other language-specific subtypes of `compound`: <tt><a href="tr_pud-dep-compound-redup.html">compound:redup</a></tt>.

201 nodes (1%) are attached to their parents as `compound:lvc`.

201 instances of `compound:lvc` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.00995024875622.

The following 6 pairs of parts of speech are connected with `compound:lvc`: <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-VERB.html">VERB</a></tt> (123; 61% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt> (38; 19% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-VERB.html">VERB</a></tt> (17; 8% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (12; 6% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-ADV.html">ADV</a></tt> (10; 5% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 compound:lvc	color:blue
1	Eşi	eş	NOUN	NN	Number=Sing|Number[psor]=Sing|Person[psor]=3	12	nsubj	_	_
2	Alice	_	PROPN	PROPN	_	1	appos	_	Proper=True|SpaceAfter=No
3	,	,	PUNCT	,	_	2	punct	_	_
4	"	"	PUNCT	``	_	8	punct	_	SpaceAfter=No
5	Kendi	kendi	PRON	PRR	Number=Sing|Reflex=Yes	6	amod	_	_
6	sağlığını	sağlık	NOUN	NN	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3	8	obj	_	_
7	tamamen	tamamen	ADV	RB	_	8	advmod	_	_
8	ihmal	ihmal	NOUN	NN	Number=Sing	12	xcomp	_	_
9	etmesi	et	VERB	VN	Aspect=Perf|Case=Nom|Mood=Ind|Number[psor]=Sing|Person[psor]=3|Tense=Pres|VerbForm=Vnoun	8	compound:lvc	_	SpaceAfter=No
10	.	_	PUNCT	.	_	8	punct	_	SpaceAfter=No
11	"	_	PUNCT	''	_	8	punct	_	_
12	dedi	de	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No
13	.	.	PUNCT	.	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 compound:lvc	color:blue
1	Tatil	Tatil	NOUN	NN	Number=Sing	2	nmod:poss	_	_
2	sırasında	sıra	NOUN	NN	Case=Loc|Number=Sing|Number[psor]=Sing|Person[psor]=3	15	obl	_	SpaceAfter=No
3	,	,	PUNCT	,	_	2	punct	_	_
4	genç	genç	ADJ	JJ	Number=Sing	5	amod	_	_
5	kızla	kız	NOUN	NN	Case=Ins|Number=Sing	15	obl	_	_
6	kısa	kısa	ADJ	JJ	Number=Sing	7	amod	_	_
7	süre	süre	NOUN	NN	Number=Sing	9	nmod	_	ToDo=nmod
8	sonra	sonra	ADP	IN	_	7	case	_	_
9	itiraf	itiraf	NOUN	NN	Number=Sing	14	acl	_	_
10	ettiği	et	ADJ	VJ	Number=Sing|Number[psor]=Sing|Person[psor]=3|Polarity=Pos	9	compound:lvc	_	_
11	evlilik	evlilik	NOUN	NN	Number=Sing	12	nmod:poss	_	_
12	dışı	dış	NOUN	NN	Number=Sing|Number[psor]=Sing|Person[psor]=3	14	compound	_	_
13	bir	bir	DET	DT	Definite=Ind|Polarity=Pos	14	det	_	_
14	ilişkiye	ilişki	NOUN	NN	Case=Dat|Number=Sing	15	obj	_	_
15	başladı	başla	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No
16	.	.	PUNCT	.	_	15	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 compound:lvc	color:blue
1	Rupertsberg	Rupertsberg	PROPN	PROPN	Number=Sing	2	nmod:poss	_	Proper=True
2	manastırı	manastır	NOUN	NN	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	11	nsubj	_	Proper=True|SpaceAfter=No
3	,	,	PUNCT	,	_	2	punct	_	_
4	1632'de	1632	NOUN	NN	Case=Loc|Number=Sing	11	obl	_	_
5	Otuz	otuz	NUM	CD	Number=Sing	6	nummod	_	Proper=True
6	Yıl	yıl	NOUN	NN	Number=Sing	7	nmod:poss	_	Proper=True
7	Savaşı	savaş	NOUN	NN	Number=Sing|Number[psor]=Sing|Person[psor]=3	8	nmod:poss	_	Proper=True
8	sırasında	sıra	NOUN	NN	Case=Loc|Number=Sing|Number[psor]=Sing|Person[psor]=3	11	obl	_	_
9	İsveç	İsveç	PROPN	PROPN	Number=Sing	10	nmod:poss	_	Proper=True
10	birliklerince	birliklerince	ADV	RB	_	11	advmod	_	_
11	yok	yok	ADJ	JJ	Polarity=Neg	0	root	_	_
12	edildi	et	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Pass	11	compound:lvc	_	SpaceAfter=No
13	.	.	PUNCT	.	_	11	punct	_	_

~~~


