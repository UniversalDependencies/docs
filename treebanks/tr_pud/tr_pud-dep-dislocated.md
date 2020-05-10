---
layout: base
title:  'Statistics of dislocated in UD_Turkish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Turkish-PUD: Relations: `dislocated`

This relation is universal.

5 nodes (0%) are attached to their parents as `dislocated`.

5 instances of `dislocated` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.4.

The following 4 pairs of parts of speech are connected with `dislocated`: <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (2; 40% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-VERB.html">VERB</a></tt> (1; 20% instances), <tt><a href="tr_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (1; 20% instances), <tt><a href="tr_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_pud-pos-VERB.html">VERB</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 16 dislocated	color:blue
1	Sahip	sahip	ADJ	JJ	Number=Sing	4	acl	_	_
2	olduğu	ol	AUX	VJ	Number=Sing|Number[psor]=Sing|Person[psor]=3|Polarity=Pos	1	cop	_	_
3	bu	bu	DET	DT	Definite=Def|Number=Sing|Polarity=Pos	4	det	_	_
4	enerjinin	enerji	NOUN	NN	Case=Gen|Number=Sing	5	nmod:poss	_	_
5	kaynağı	kaynağ	NOUN	NN	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	6	nsubj	_	_
6	ne	ne	PRON	WP	Number=Sing|PronType=Int	0	root	_	SpaceAfter=No
7	?	?	PUNCT	.	_	6	punct	_	_
8	Peki	peki	ADV	RB	_	16	advmod	_	_
9	ya	ya	ADV	RB	_	16	advmod	_	_
10	şok	şok	NOUN	NN	Number=Sing	11	nmod:poss	_	_
11	dalgalarını	dalga	NOUN	NN	Case=Acc|Number=Plur|Number[psor]=Sing|Person[psor]=3	12	obj	_	_
12	tetikleyecek	tetikley	NOUN	VN	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut	14	xcomp	_	_
13	kadar	kadar	ADP	IN	_	12	case	_	_
14	gür	gür	ADV	JJ	Number=Sing	15	advmod	_	_
15	çıkan	çık	VERB	VJ	Number=Sing|Polarity=Pos	16	acl	_	_
16	sesinin	ses	NOUN	NN	Case=Gen|Number=Sing|Number[psor]=Sing|Person[psor]=3	5	dislocated	_	SpaceAfter=No
17	?	?	PUNCT	.	_	16	punct	_	_

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 20 dislocated	color:blue
1	Facebook'ta	Facebook	NOUN	NN	Case=Loc|Number=Sing	5	amod	_	Proper=True
2	ki	ki	ADP	JJ	_	1	case	_	Proper=True
3	yas	yas	NOUN	NN	Number=Sing	5	acl	_	_
4	tutan	tut	ADJ	VJ	Number=Sing|Polarity=Pos	3	compound	_	_
5	yorumlardan	yorum	NOUN	NN	Case=Abl|Number=Plur	6	nmod:poss	_	_
6	birinde	bir	PRON	PRI	Case=Loc|Number=Sing|Polarity=Pos	13	obl	_	_
7	Chris'in	Chris	PROPN	PROPN	Case=Gen|Number=Sing	9	nmod:poss	_	Proper=True
8	çok	çok	ADV	RB	_	9	advmod	_	_
9	hoşuna	hoşuna	NOUN	NN	Case=Dat|Number=Sing	12	acl	_	_
10	gidecek	git	VERB	VJ	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut	9	compound:lvc	_	_
11	bir	bir	DET	DT	Definite=Ind|Number=Sing|Polarity=Pos	12	det	_	_
12	satır	satır	NOUN	NN	Case=Nom|Number=Sing	13	nsubj	_	_
13	var	_	ADJ	JJ	Polarity=Pos	0	root	_	_
14	dı	_	AUX	AUX	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	13	cop	_	_
15	:	:	PUNCT	:	_	20	punct	_	_
16	"	"	PUNCT	``	_	20	punct	_	SpaceAfter=No
17	Senden	senden	PRON	PRP	Case=Abl|Number=Sing|Person=2|Polarity=Pos	19	obl	_	_
18	daha	daha	ADV	RB	_	19	advmod	_	_
19	Afrikalısını	Afrikalı	NOUN	NN	Case=Acc|Number=Sing	20	obj	_	Proper=True
20	tanımadım	tanı	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Polarity=Neg|Tense=Past	13	dislocated	_	SpaceAfter=No
21	.	_	PUNCT	.	_	20	punct	_	SpaceAfter=No
22	"	_	PUNCT	''	_	20	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 18 dislocated	color:blue
1	BBC'nin	BBC	PROPN	PROPN	Case=Gen|Number=Sing	5	nmod:poss	_	Proper=True
2	Andrew	Andrew	PROPN	PROPN	Number=Sing	5	nmod:poss	_	Proper=True
3	Marr	Marr	PROPN	PROPN	Number=Sing	2	flat	_	Proper=True
4	Show	Show	PROPN	PROPN	Number=Sing	2	flat	_	Proper=True
5	programında	program	NOUN	NN	Case=Loc|Number=Sing|Number[psor]=Sing|Person[psor]=3	7	obl	_	_
6	şunları	şu	PRON	PRD	Case=Acc|Number=Plur|Polarity=Pos	7	obj	_	_
7	söyledi	söyle	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No
8	:	:	PUNCT	:	_	7	punct	_	_
9	"	"	PUNCT	``	_	18	punct	_	SpaceAfter=No
10	Açıkçası	Açıkça	NOUN	NN	Number=Sing	18	obl	_	_
11	bir	bir	DET	DT	Definite=Ind|Number=Sing|Polarity=Pos	13	det	_	_
12	genel	genel	ADJ	JJ	Number=Sing	13	amod	_	_
13	seçim	seçim	NOUN	NN	Case=Nom|Number=Sing	18	nsubj	_	_
14	hükumetin	hükumet	NOUN	NN	Case=Gen|Number=Sing	15	nmod:poss	_	_
15	istediği	iste	ADJ	VJ	Number=Sing|Number[psor]=Sing|Person[psor]=3|Polarity=Pos	18	acl	_	_
16	en	en	ADV	RB	_	17	advmod	_	_
17	son	son	ADJ	JJ	Number=Sing	18	amod	_	_
18	şey	şey	NOUN	NN	Number=Sing	6	dislocated	_	SpaceAfter=No
19	.	_	PUNCT	.	_	18	punct	_	SpaceAfter=No
20	"	_	PUNCT	''	_	18	punct	_	_

~~~


