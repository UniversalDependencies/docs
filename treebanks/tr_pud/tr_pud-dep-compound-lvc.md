---
layout: base
title:  'Statistics of compound:lvc in UD_Turkish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Turkish-PUD: Relations: `compound:lvc`

This relation is a language-specific subtype of <tt><a href="tr_pud-dep-compound.html">compound</a></tt>.
There are also 1 other language-specific subtypes of `compound`: <tt><a href="tr_pud-dep-compound-redup.html">compound:redup</a></tt>.

203 nodes (1%) are attached to their parents as `compound:lvc`.

203 instances of `compound:lvc` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.00985221674877.

The following 8 pairs of parts of speech are connected with `compound:lvc`: <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-VERB.html">VERB</a></tt> (87; 43% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (44; 22% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt> (43; 21% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-VERB.html">VERB</a></tt> (14; 7% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-ADV.html">ADV</a></tt> (11; 5% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 compound:lvc	color:blue
1	Haksız	haksız	ADJ	JJ	Number=Sing	3	ccomp	_	_
2	olduğunu	ol	AUX	VN	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3|Polarity=Pos	1	cop	_	_
3	farz	farz	NOUN	NN	Number=Sing	0	root	_	_
4	edelim	et	VERB	VB	Mood=Opt|Number=Plur|Person=1|Tense=Pres	3	compound:lvc	_	SpaceAfter=No
5	.	.	PUNCT	.	_	3	punct	_	_

~~~


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
9	etmesi	et	NOUN	VN	Aspect=Perf|Case=Nom|Mood=Ind|Number[psor]=Sing|Person[psor]=3|Tense=Pres|VerbForm=Ger	8	compound:lvc	_	SpaceAfter=No
10	.	_	PUNCT	.	_	8	punct	_	SpaceAfter=No
11	"	_	PUNCT	''	_	8	punct	_	_
12	dedi	de	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No
13	.	.	PUNCT	.	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 compound:lvc	color:blue
1	Tema	Tema	NOUN	NN	Case=Nom|Number=Sing	14	nsubj	_	SpaceAfter=No
2	,	,	PUNCT	,	_	1	punct	_	_
3	Palma'da	Palma	PROPN	PROPN	Case=Loc|Number=Sing	4	obl	_	Proper=True
4	yaşayan	yaşa	ADJ	VJ	Number=Sing|Polarity=Pos	9	acl	_	_
5	çok	çok	ADV	RB	_	6	advmod	_	_
6	sayıda	sayı	NOUN	NN	Case=Loc|Number=Sing	9	amod	_	_
7	ahdet	ahdet	NOUN	NN	Mood=Imp|Number=Sing|Person=2|Tense=Pres	9	acl	_	_
8	etmiş	et	ADJ	VJ	Aspect=Perf|Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Past	7	compound:lvc	_	_
9	Yahudi'den	Yahudi	NOUN	NN	Case=Abl|Number=Sing	14	obl	_	_
10	ötürü	ötürü	ADP	IN	_	9	case	_	_
11	geleneksel	geleneksel	ADJ	JJ	Number=Sing	14	advcl	_	_
12	olarak	ol	AUX	CRB	Polarity=Pos	11	cop	_	_
13	bilinçli	bilinçli	ADJ	JJ	Number=Sing	14	advmod	_	_
14	seçilirdi	seç	VERB	VB	Aspect=Hab|Mood=Gen|Number=Sing|Person=3|Tense=Past|Voice=Pass	0	root	_	SpaceAfter=No
15	.	.	PUNCT	.	_	14	punct	_	_

~~~


