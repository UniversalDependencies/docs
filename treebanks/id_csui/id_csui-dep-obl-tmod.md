---
layout: base
title:  'Statistics of obl:tmod in UD_Indonesian-CSUI'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-CSUI: Relations: `obl:tmod`

This relation is a language-specific subtype of <tt><a href="id_csui-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="id_csui-dep-obl-agent.html">obl:agent</a></tt>.

394 nodes (1%) are attached to their parents as `obl:tmod`.

259 instances of `obl:tmod` (66%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.26903553299492.

The following 7 pairs of parts of speech are connected with `obl:tmod`: <tt><a href="id_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt> (215; 55% instances), <tt><a href="id_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="id_csui-pos-PROPN.html">PROPN</a></tt> (139; 35% instances), <tt><a href="id_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="id_csui-pos-NUM.html">NUM</a></tt> (24; 6% instances), <tt><a href="id_csui-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt> (9; 2% instances), <tt><a href="id_csui-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_csui-pos-PROPN.html">PROPN</a></tt> (3; 1% instances), <tt><a href="id_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="id_csui-pos-SCONJ.html">SCONJ</a></tt> (3; 1% instances), <tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 obl:tmod	color:blue
1	Impor	impor	NOUN	NN	Number=Sing	3	nsubj:pass	_	_
2	non-migas	non-migas	ADJ	JJ	_	1	amod	_	_
3	diprediksi	diprediksi	VERB	VB	Mood=Ind|Voice=Pass	0	root	_	_
4	tumbuh	tumbuh	VERB	VB	Mood=Ind|Voice=Act	3	ccomp	_	_
5	14,5	14,5	NUM	CD	NumType=Card	6	nummod	_	_
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
5	terjadi	jadi	VERB	VB	Mood=Ind|Voice=Pass	0	root	_	_
6	sejak	sejak	ADP	IN	_	7	case	_	_
7	Agustus	Agustus	PROPN	NNP	_	5	obl:tmod	_	_
8	2006	2006	NUM	CD	NumType=Card	7	nummod	_	SpaceAfter=No
9	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 obl:tmod	color:blue
1	Saya	saya	PRON	PRP	Number=Sing|Person=1|Polite=Form|PronType=Prs	3	nsubj	_	_
2	akan	akan	AUX	MD	_	3	aux	_	_
3	meninggalkan	tinggal	VERB	VB	Mood=Ind|Voice=Act	0	root	_	_
4	Indonesia	Indonesia	PROPN	NNP	_	3	obj	_	_
5	pada	pada	ADP	IN	_	6	case	_	_
6	28	28	NUM	CD	NumType=Card	3	obl:tmod	_	_
7	Februari	Februari	PROPN	NNP	_	6	flat	_	_
8	mendatang	datang	VERB	VB	Mood=Ind|Voice=Act	7	acl:relcl	_	_
9	ke	ke	ADP	IN	_	10	case	_	_
10	London	London	PROPN	NNP	_	3	obl	_	SpaceAfter=No
11	.	.	PUNCT	.	_	3	punct	_	_

~~~


