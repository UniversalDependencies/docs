---
layout: base
title:  'Statistics of obl:tmod in UD_Indonesian-CSUI'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-CSUI: Relations: `obl:tmod`

This relation is a language-specific subtype of <tt><a href="id_csui-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="id_csui-dep-obl-agent.html">obl:agent</a></tt>.

244 nodes (1%) are attached to their parents as `obl:tmod`.

181 instances of `obl:tmod` (74%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.5327868852459.

The following 5 pairs of parts of speech are connected with `obl:tmod`: <tt><a href="id_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt> (151; 62% instances), <tt><a href="id_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="id_csui-pos-PROPN.html">PROPN</a></tt> (84; 34% instances), <tt><a href="id_csui-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt> (5; 2% instances), <tt><a href="id_csui-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_csui-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt> (2; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 obl:tmod	color:blue
1	Impor	impor	NOUN	NN	Number=Sing	3	nsubj:pass	_	_
2	non-migas	non-migas	ADJ	JJ	_	1	amod	_	_
3	diprediksi	diprediksi	VERB	VB	Voice=Pass	0	root	_	_
4	tumbuh	tumbuh	VERB	VB	Voice=Act	3	ccomp	_	_
5	14,5	14,5	NUM	CD	_	6	nummod	_	_
6	persen	persen	NOUN	NN	Number=Sing	4	obj	_	_
7	pada	pada	ADP	IN	_	8	case	_	_
8	tahun	tahun	NOUN	NN	Number=Sing	4	obl:tmod	_	_
9	ini	ini	DET	DT	PronType=Dem	8	det	_	SpaceAfter=No
10	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 obl:tmod	color:blue
1	Pertumbuhan	tumbuh	NOUN	NN	Number=Sing	5	nsubj:pass	_	_
2	kredit	kredit	NOUN	NN	Number=Sing	1	nmod	_	_
3	perbankan	bank	NOUN	NN	Number=Sing	1	nmod	_	_
4	sudah	sudah	AUX	MD	_	5	aux	_	_
5	terjadi	jadi	VERB	VB	Voice=Pass	0	root	_	_
6	sejak	sejak	ADP	IN	_	7	case	_	_
7	Agustus	Agustus	PROPN	NNP	_	5	obl:tmod	_	_
8	2006	2006	NUM	CD	_	7	nummod	_	SpaceAfter=No
9	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 11 obl:tmod	color:blue
1	Tapi	tapi	CCONJ	CC	_	8	cc	_	_
2	(	(	PUNCT	-LRB-	_	3	punct	_	SpaceAfter=No
3	anggaran	anggar	NOUN	NN	Number=Sing	8	nsubj	_	_
4	-	-	PUNCT	:	_	3	punct	_	_
5	red	red	NOUN	NN	Number=Sing	3	nmod	_	SpaceAfter=No
6	)	)	PUNCT	-RRB-	_	3	punct	_	_
7	masih	masih	ADV	RB	_	8	advmod	_	_
8	aman	aman	ADJ	JJ	_	0	root	_	_
9	lah	lah	PART	RP	_	8	advmod:emph	_	_
10	sampai	sampai	ADP	IN	_	11	case	_	_
11	sekarang	sekarang	NOUN	NN	Number=Sing	8	obl:tmod	_	_
12	ini	ini	DET	DT	PronType=Dem	11	det	_	_
13	karena	karena	SCONJ	IN	_	17	mark	_	_
14	pengeluaran	keluar	NOUN	NN	Number=Sing	17	nsubj	_	_
15	nya	nya	PRON	PRP$	Number=Sing|Person=3|Poss=Yes|PronType=Prs	14	nmod:poss	_	_
16	masih	masih	ADV	RB	_	17	advmod	_	_
17	kecil	kecil	ADJ	JJ	_	8	advcl	_	SpaceAfter=No
18	.	.	PUNCT	.	_	8	punct	_	_

~~~


