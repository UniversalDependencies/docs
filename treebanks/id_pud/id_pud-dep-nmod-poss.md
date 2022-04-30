---
layout: base
title:  'Statistics of nmod:poss in UD_Indonesian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-PUD: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="id_pud-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="id_pud-dep-nmod-lmod.html">nmod:lmod</a></tt>, <tt><a href="id_pud-dep-nmod-tmod.html">nmod:tmod</a></tt>.

327 nodes (2%) are attached to their parents as `nmod:poss`.

327 instances of `nmod:poss` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.43425076452599.

The following 7 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_pud-pos-PRON.html">PRON</a></tt> (256; 78% instances), <tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_pud-pos-PROPN.html">PROPN</a></tt> (38; 12% instances), <tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt> (18; 6% instances), <tt><a href="id_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="id_pud-pos-PRON.html">PRON</a></tt> (9; 3% instances), <tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_pud-pos-DET.html">DET</a></tt> (3; 1% instances), <tt><a href="id_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_pud-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="id_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 nmod:poss	color:blue
1	"	"	PUNCT	_	_	4	punct	_	SpaceAfter=No
2	Suara	suara	NOUN	_	Number=Sing	4	nsubj	_	_
3	nya	nya	PRON	_	Number=Sing|Person=3|PronType=Prs	2	nmod:poss	_	_
4	menjangkau	jangkau	VERB	_	Mood=Ind|Voice=Act	0	root	_	_
5	seluruh	seluruh	DET	_	PronType=Tot	6	det	_	_
6	dunia	dunia	NOUN	_	Number=Sing	4	obj	_	SpaceAfter=No
7	,	,	PUNCT	_	_	4	punct	_	SpaceAfter=No
8	"	"	PUNCT	_	_	4	punct	_	_
9	kata	kata	VERB	_	Mood=Ind|Voice=Act	4	parataxis	_	_
10	Leive	Leive	PROPN	_	_	9	nsubj	_	SpaceAfter=No
11	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 nmod:poss	color:blue
1	Pengeluaran	keluar	NOUN	_	Number=Sing	4	nsubj:pass	_	_
2	baru	baru	ADJ	_	_	1	amod	_	_
3	ini	ini	DET	_	PronType=Dem	1	det	_	_
4	dipasok	pasok	VERB	_	Mood=Ind|Voice=Pass	0	root	_	_
5	oleh	oleh	ADP	_	_	6	case	_	_
6	rekening	rekening	NOUN	_	Number=Sing	4	obl:agent	_	_
7	bank	bank	NOUN	_	Number=Sing	6	nmod	_	_
8	gemuk	gemuk	ADJ	_	_	6	amod	_	_
9	Clinton	Clinton	PROPN	_	_	6	nmod:poss	_	SpaceAfter=No
10	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 nmod:poss	color:blue
1	Paling	paling	ADV	_	_	2	advmod	_	_
2	nyata	nyata	ADJ	_	_	0	root	_	_
3	saat	saat	ADV	_	PronType=Rel	9	advmod	_	_
4	nama	nama	NOUN	_	Number=Sing	9	nsubj	_	_
5	seorang	orang	DET	_	Definite=Ind|PronType=Art	6	det	_	_
6	selebriti	selebritas	NOUN	_	Number=Sing	4	nmod:poss	_	_
7	awalnya	awal	ADV	_	_	9	advmod	_	_
8	cukup	cukup	ADV	_	_	9	advmod	_	_
9	langka	langka	ADJ	_	_	2	advcl	_	SpaceAfter=No
10	.	.	PUNCT	_	_	2	punct	_	_

~~~


