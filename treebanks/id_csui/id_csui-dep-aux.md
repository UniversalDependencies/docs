---
layout: base
title:  'Statistics of aux in UD_Indonesian-CSUI'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-CSUI: Relations: `aux`

This relation is universal.

405 nodes (1%) are attached to their parents as `aux`.

404 instances of `aux` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.12592592592593.

The following 4 pairs of parts of speech are connected with `aux`: <tt><a href="id_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="id_csui-pos-AUX.html">AUX</a></tt> (378; 93% instances), <tt><a href="id_csui-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_csui-pos-AUX.html">AUX</a></tt> (22; 5% instances), <tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_csui-pos-AUX.html">AUX</a></tt> (4; 1% instances), <tt><a href="id_csui-pos-AUX.html">AUX</a></tt>-<tt><a href="id_csui-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux	color:blue
1	"	"	PUNCT	``	_	4	punct	_	SpaceAfter=No
2	Mereka	mereka	PRON	PRP	Number=Plur|Person=3|PronType=Prs	4	nsubj	_	_
3	akan	akan	AUX	MD	_	4	aux	_	_
4	mulai	mulai	VERB	VB	Mood=Ind|Voice=Act	0	root	_	_
5	merokok	rokok	VERB	VB	Mood=Ind|Voice=Act	4	xcomp	_	_
6	kalau	kalau	SCONJ	IN	_	7	mark	_	_
7	melihat	lihat	VERB	VB	Mood=Ind|Voice=Act	5	advcl	_	_
8	idola	idola	NOUN	NN	Number=Sing	10	nsubj	_	_
9	mereka	mereka	PRON	PRP	Number=Plur|Person=3|PronType=Prs	8	nmod:poss	_	_
10	merokok	rokok	VERB	VB	Mood=Ind|Voice=Act	7	ccomp	_	SpaceAfter=No
11	.	.	PUNCT	.	_	4	punct	_	SpaceAfter=No
12	"	"	PUNCT	''	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 13 aux	color:blue
1	Sedangkan	sedangkan	ADV	RB	_	2	advmod	_	_
2	industri	industri	NOUN	NN	Number=Sing	14	obl	_	_
3	motor	motor	NOUN	NN	Number=Sing	2	nmod	_	_
4	yang	yang	PRON	IN	PronType=Rel	7	nsubj	_	_
5	tahun	tahun	NOUN	NN	Number=Sing	9	nmod:tmod	_	_
6	lalu	lalu	VERB	VB	Mood=Ind|Voice=Act	5	acl	_	_
7	minus	minus	ADJ	JJ	_	2	acl:relcl	_	_
8	30	30	NUM	CD	NumType=Card	9	nummod	_	_
9	persen	persen	NOUN	NN	Number=Sing	7	obl	_	SpaceAfter=No
10	,	,	PUNCT	,	_	14	punct	_	_
11	tahun	tahun	NOUN	NN	Number=Sing	14	obl:tmod	_	_
12	ini	ini	DET	DT	PronType=Dem	11	det	_	_
13	sudah	sudah	AUX	MD	_	14	aux	_	_
14	positif	positif	ADJ	JJ	_	0	root	_	_
15	16	16	NUM	CD	NumType=Card	16	nummod	_	_
16	persen	persen	NOUN	NN	Number=Sing	14	obl	_	SpaceAfter=No
17	.	.	PUNCT	.	_	14	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 aux	color:blue
1	Tahun	tahun	NOUN	NN	Number=Sing	0	root	_	_
2	ini	ini	DET	DT	PronType=Dem	1	det	_	_
3	akan	akan	AUX	MD	_	5	aux	_	_
4	22	22	NUM	CD	NumType=Card	5	nummod	_	_
5	persen	persen	NOUN	NN	Number=Sing	1	orphan	_	SpaceAfter=No
6	.	.	PUNCT	.	_	5	punct	_	_

~~~


