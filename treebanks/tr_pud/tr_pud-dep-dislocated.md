---
layout: base
title:  'Statistics of dislocated in UD_Turkish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Turkish-PUD: Relations: `dislocated`

This relation is universal.

2 nodes (0%) are attached to their parents as `dislocated`.

2 instances of `dislocated` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.5.

The following 2 pairs of parts of speech are connected with `dislocated`: <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-VERB.html">VERB</a></tt> (1; 50% instances), <tt><a href="tr_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 20 dislocated	color:blue
1	Facebook'ta	Facebook	NOUN	NN	Case=Loc|Number=Sing	5	amod	_	Proper=True
2	ki	ki	ADP	JJ	_	1	case	_	Proper=True
3	yas	yas	NOUN	NN	Number=Sing	4	obj	_	_
4	tutan	tut	ADJ	VJ	Number=Sing|Polarity=Pos	5	acl:relcl	_	_
5	yorumlardan	yorum	NOUN	NN	Case=Abl|Number=Plur	6	compound	_	_
6	birinde	bir	PRON	PRI	Case=Loc|Number=Sing|Polarity=Pos	13	nmod	_	_
7	Chris'in	Chris	PROPN	PROPN	Case=Gen|Number=Sing	10	nmod:poss	_	Proper=True
8	çok	çok	ADV	RB	_	10	advmod	_	_
9	hoşuna	hoşuna	NOUN	NN	Case=Dat|Number=Sing	10	compound	_	_
10	gidecek	git	AUX	VJ	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut	12	acl:relcl	_	_
11	bir	bir	DET	DT	Definite=Ind|Number=Sing|Polarity=Pos	12	det	_	_
12	satır	satır	NOUN	NN	Case=Nom|Number=Sing	13	nsubj	_	_
13	var	_	ADJ	JJ	Polarity=Pos	0	root	_	_
14	dı	_	AUX	AUX	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	13	cop	_	_
15	:	:	PUNCT	:	_	20	punct	_	_
16	"	"	PUNCT	``	_	20	punct	_	SpaceAfter=No
17	Senden	senden	PRON	PRP	Case=Abl|Number=Sing|Person=2|Polarity=Pos	19	compound	_	_
18	daha	daha	ADV	RB	_	19	advmod	_	_
19	Afrikalısını	Afrikalı	NOUN	NN	Case=Acc|Number=Sing	20	obj	_	Proper=True
20	tanımadım	tanı	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Polarity=Neg|Tense=Past	13	dislocated	_	SpaceAfter=No
21	.	_	PUNCT	.	_	20	punct	_	SpaceAfter=No
22	"	_	PUNCT	''	_	20	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 16 dislocated	color:blue
1	Sahip	sahip	ADJ	JJ	Number=Sing	4	acl:relcl	_	_
2	olduğu	ol	AUX	VJ	Number=Sing|Number[psor]=Sing|Person[psor]=3|Polarity=Pos	1	cop	_	_
3	bu	bu	DET	DT	Definite=Def|Number=Sing|Polarity=Pos	4	det	_	_
4	enerjinin	enerji	NOUN	NN	Case=Gen|Number=Sing	5	nmod:poss	_	_
5	kaynağı	kaynağ	NOUN	NN	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	6	nsubj	_	_
6	ne	ne	PRON	WP	Number=Sing|PronType=Int	0	root	_	SpaceAfter=No
7	?	?	PUNCT	.	_	6	punct	_	_
8	Peki	peki	ADV	RB	_	16	advmod	_	_
9	ya	ya	ADV	RB	_	16	advmod	_	_
10	şok	şok	NOUN	NN	Number=Sing	11	compound	_	_
11	dalgalarını	dalga	NOUN	NN	Case=Acc|Number=Plur|Number[psor]=Sing|Person[psor]=3	12	obj	_	_
12	tetikleyecek	tetikley	NOUN	VN	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut	15	xcomp	_	_
13	kadar	kadar	ADP	IN	_	12	case	_	_
14	gür	gür	ADJ	JJ	Number=Sing	15	xcomp	_	_
15	çıkan	çık	AUX	VJ	Number=Sing|Polarity=Pos	16	acl:relcl	_	_
16	sesinin	ses	NOUN	NN	Case=Gen|Number=Sing|Number[psor]=Sing|Person[psor]=3	6	dislocated	_	SpaceAfter=No
17	?	?	PUNCT	.	_	16	punct	_	_

~~~


