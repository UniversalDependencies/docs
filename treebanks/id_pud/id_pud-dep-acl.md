---
layout: base
title:  'Statistics of acl in UD_Indonesian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-PUD: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="id_pud-dep-acl-relcl.html">acl:relcl</a></tt>.

245 nodes (1%) are attached to their parents as `acl`.

242 instances of `acl` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.8.

The following 6 pairs of parts of speech are connected with `acl`: <tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_pud-pos-VERB.html">VERB</a></tt> (228; 93% instances), <tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_pud-pos-ADJ.html">ADJ</a></tt> (7; 3% instances), <tt><a href="id_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_pud-pos-VERB.html">VERB</a></tt> (7; 3% instances), <tt><a href="id_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="id_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="id_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="id_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="id_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 acl	color:blue
1	Mungkin	mungkin	ADV	_	_	6	advmod	_	_
2	kode	kode	NOUN	_	Number=Sing	6	nsubj	_	_
3	berpakaian	pakai	VERB	_	Mood=Ind|Voice=Act	2	acl	_	_
4	nya	nya	DET	_	Definite=Def|PronType=Art	2	det	_	_
5	terlalu	lalu	ADV	_	_	6	advmod	_	_
6	sesak	sesak	ADJ	_	_	0	root	_	SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 acl	color:blue
1	"	"	PUNCT	_	_	3	punct	_	SpaceAfter=No
2	Luar	luar	NOUN	_	Number=Sing	3	compound:a	_	_
3	biasa	biasa	ADJ	_	_	0	root	_	SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	SpaceAfter=No
5	"	"	PUNCT	_	_	3	punct	_	_
6	lapor	lapor	VERB	_	Mood=Ind|Voice=Act	3	parataxis	_	_
7	pelanggan	langgan	NOUN	_	Number=Sing	6	nsubj	_	_
8	data	data	NOUN	_	Number=Sing	7	nmod	_	_
9	tak	tak	PART	_	Polarity=Neg	10	advmod	_	_
10	terbatas	batas	ADJ	_	_	8	acl	_	_
11	SaskTel	SaskTel	PROPN	_	_	8	nmod:poss	_	SpaceAfter=No
12	,	,	PUNCT	_	_	13	punct	_	_
13	Lindsay	Lindsay	PROPN	_	_	7	appos	_	_
14	Gay	Gay	PROPN	_	_	13	flat:name	_	_
15	bulan	bulan	NOUN	_	Number=Sing	6	obl:tmod	_	_
16	lalu	lalu	VERB	_	Mood=Ind|Voice=Act	15	acl	_	SpaceAfter=No
17	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 acl	color:blue
1	Royal	Royal	PROPN	_	_	12	nsubj	_	_
2	National	National	PROPN	_	_	1	flat:name	_	_
3	Park	Park	PROPN	_	_	1	flat:name	_	_
4	Australia	Australia	PROPN	_	_	1	flat:name	_	SpaceAfter=No
5	,	,	PUNCT	_	_	6	punct	_	_
6	didirikan	diri	VERB	_	Mood=Ind|Voice=Pass	1	acl	_	_
7	pada	pada	ADP	_	_	8	case	_	_
8	tahun	tahun	NOUN	_	Number=Sing	6	obl:tmod	_	_
9	1879	1879	NUM	_	NumType=Card	8	nummod	_	SpaceAfter=No
10	,	,	PUNCT	_	_	6	punct	_	_
11	adalah	adalah	AUX	_	_	12	cop	_	_
12	taman	taman	NOUN	_	Number=Sing	0	root	_	_
13	nasional	nasional	ADJ	_	_	12	amod	_	_
14	kedua	dua	ADJ	_	NumType=Ord	12	amod	_	_
15	yang	yang	PRON	_	PronType=Rel	16	nsubj:pass	_	_
16	didirikan	diri	VERB	_	Mood=Ind|Voice=Pass	12	acl:relcl	_	_
17	secara	cara	ADP	_	_	18	case:adv	_	_
18	resmi	resmi	ADJ	_	_	16	advmod	_	SpaceAfter=No
19	.	.	PUNCT	_	_	12	punct	_	_

~~~


