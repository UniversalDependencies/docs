---
layout: base
title:  'Statistics of ccomp in UD_Indonesian-CSUI'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-CSUI: Relations: `ccomp`

This relation is universal.

608 nodes (2%) are attached to their parents as `ccomp`.

597 instances of `ccomp` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.87993421052632.

The following 14 pairs of parts of speech are connected with `ccomp`: <tt><a href="id_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="id_csui-pos-VERB.html">VERB</a></tt> (304; 50% instances), <tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_csui-pos-VERB.html">VERB</a></tt> (180; 30% instances), <tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_csui-pos-ADJ.html">ADJ</a></tt> (51; 8% instances), <tt><a href="id_csui-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_csui-pos-VERB.html">VERB</a></tt> (42; 7% instances), <tt><a href="id_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="id_csui-pos-ADJ.html">ADJ</a></tt> (15; 2% instances), <tt><a href="id_csui-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_csui-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="id_csui-pos-AUX.html">AUX</a></tt>-<tt><a href="id_csui-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_csui-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="id_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="id_csui-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_csui-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="id_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="id_csui-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="id_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="id_csui-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 ccomp	color:blue
1	"	"	PUNCT	``	_	4	punct	_	SpaceAfter=No
2	Mereka	Mereka	PRON	PRP	_	4	nsubj	_	_
3	akan	akan	AUX	MD	_	4	aux	_	_
4	mulai	mulai	VERB	VB	Voice=Act	0	root	_	_
5	merokok	rokok	VERB	VB	Voice=Act	4	xcomp	_	_
6	kalau	kalau	SCONJ	IN	_	7	mark	_	_
7	melihat	lihat	VERB	VB	Voice=Act	5	advcl	_	_
8	idola	idola	NOUN	NN	Number=Sing	10	nsubj	_	_
9	mereka	mereka	PRON	PRP	Number=Plur|Person=3|PronType=Prs	8	nmod	_	_
10	merokok	rokok	VERB	VB	Voice=Act	7	ccomp	_	SpaceAfter=No
11	.	.	PUNCT	.	_	4	punct	_	SpaceAfter=No
12	"	"	PUNCT	''	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 ccomp	color:blue
1	Sedangkan	sedangkan	CCONJ	CC	_	13	cc	_	_
2	industri	industri	NOUN	NN	Number=Sing	13	nsubj	_	_
3	motor	motor	NOUN	NN	Number=Sing	2	nmod	_	_
4	yang	yang	SCONJ	IN	_	9	mark	_	_
5	tahun	tahun	NOUN	NN	Number=Sing	9	nmod	_	_
6	lalu	lalu	VERB	VB	Voice=Act	5	ccomp	_	_
7	minus	minus	ADJ	JJ	_	9	advmod	_	_
8	30	30	NUM	CD	_	9	nummod	_	_
9	persen	persen	NOUN	NN	Number=Sing	2	nmod	_	SpaceAfter=No
10	,	,	PUNCT	,	_	13	punct	_	_
11	tahun	tahun	NOUN	NN	Number=Sing	13	nmod:tmod	_	_
12	ini	ini	DET	DT	PronType=Dem	11	det	_	_
13	sudah	sudah	AUX	MD	_	0	root	_	_
14	positif	positif	ADJ	JJ	_	16	advmod	_	_
15	16	16	NUM	CD	_	16	nummod	_	_
16	persen	persen	NOUN	NN	Number=Sing	13	obj	_	SpaceAfter=No
17	.	.	PUNCT	.	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 ccomp	color:blue
1	Kami	kami	PRON	PRP	Clusivity=Ex|Number=Plur|Person=1|PronType=Prs	2	nsubj	_	_
2	kira	kira	VERB	VB	Voice=Act	0	root	_	_
3	itu	itu	DET	DT	PronType=Dem	5	det	_	SpaceAfter=No
4	,	,	PUNCT	,	_	5	punct	_	_
5	target	target	NOUN	NN	Number=Sing	2	obl	_	_
6	yang	yang	SCONJ	IN	_	7	mark	_	_
7	optimistis	optimistis	ADJ	JJ	_	5	ccomp	_	_

~~~


