---
layout: base
title:  'Statistics of case:adv in UD_Indonesian-CSUI'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-CSUI: Relations: `case:adv`

This relation is a language-specific subtype of <tt><a href="id_csui-dep-case.html">case</a></tt>.

38 nodes (0%) are attached to their parents as `case:adv`.

38 instances of `case:adv` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.10526315789474.

The following 5 pairs of parts of speech are connected with `case:adv`: <tt><a href="id_csui-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_csui-pos-ADP.html">ADP</a></tt> (23; 61% instances), <tt><a href="id_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="id_csui-pos-ADP.html">ADP</a></tt> (7; 18% instances), <tt><a href="id_csui-pos-X.html">X</a></tt>-<tt><a href="id_csui-pos-ADP.html">ADP</a></tt> (5; 13% instances), <tt><a href="id_csui-pos-ADV.html">ADV</a></tt>-<tt><a href="id_csui-pos-ADP.html">ADP</a></tt> (2; 5% instances), <tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_csui-pos-ADP.html">ADP</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 case:adv	color:blue
1	Pinjaman	pinjam	NOUN	NN	Number=Sing	3	nsubj	_	_
2	LPBN	LPBN	PROPN	NNP	_	1	nmod	_	_
3	meningkat	tingkat	VERB	VB	Mood=Ind|Voice=Act	0	root	_	_
4	dengan	dengan	ADP	IN	_	5	case:adv	_	_
5	cepat	cepat	ADJ	JJ	_	3	advcl	_	_
6	di	di	ADP	IN	_	7	case	_	_
7	tahun	tahun	NOUN	NN	Number=Sing	3	obl:tmod	_	_
8	2005	2005	NUM	CD	NumType=Card	7	nummod	_	SpaceAfter=No
9	-	-	PUNCT	:	_	7	punct	_	SpaceAfter=No
10	2006	2006	NUM	CD	NumType=Card	7	nummod	_	_
11	namun	namun	CCONJ	CC	_	16	cc	_	_
12	kualitas	kualitas	NOUN	NN	Number=Sing	16	nsubj:pass	_	_
13	nya	nya	PRON	PRP$	Number=Sing|Person=3|PronType=Prs	12	nmod:poss	_	_
14	belum	belum	PART	RP	Polarity=Neg	16	advmod	_	_
15	cukup	cukup	ADV	RB	_	16	advmod	_	_
16	teruji	uji	VERB	VB	Mood=Ind|Voice=Pass	3	conj	_	SpaceAfter=No
17	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 15 case:adv	color:blue
1	Untuk	untuk	ADP	IN	_	2	case	_	_
2	itu	itu	PRON	PRP	PronType=Dem	11	obl	_	SpaceAfter=No
3	,	,	PUNCT	,	_	5	punct	_	_
4	ia	ia	PRON	PRP	Number=Sing|Person=3|PronType=Prs	5	nsubj	_	_
5	mengatakan	kata	VERB	VB	Mood=Ind|Voice=Act	11	parataxis	_	SpaceAfter=No
6	,	,	PUNCT	,	_	5	punct	_	_
7	saat	saat	NOUN	NN	Number=Sing	11	obl:tmod	_	_
8	ini	ini	DET	DT	PronType=Dem	7	det	_	_
9	pihak	pihak	NOUN	NN	Number=Sing	11	nsubj	_	_
10	nya	nya	PRON	PRP$	Number=Sing|Person=3|PronType=Prs	9	nmod:poss	_	_
11	menurunkan	turun	VERB	VB	Mood=Ind|Voice=Act	0	root	_	_
12	tingkat	tingkat	NOUN	NN	Number=Sing	11	obj	_	_
13	BI	BI	PROPN	NNP	_	12	nmod	_	_
14	rate	rate	X	FW	Foreign=Yes	13	nmod	_	_
15	secara	cara	ADP	IN	_	16	case:adv	_	_
16	bertahap	tahap	VERB	VB	Mood=Ind|Voice=Act	11	advcl	_	_
17	sebesar	sebesar	NOUN	NN	Number=Sing	11	obl	_	_
18	0,25	0,25	NUM	CD	NumType=Card	19	nummod	_	_
19	persen	persen	NOUN	NN	Number=Sing	17	nmod	_	SpaceAfter=No
20	.	.	PUNCT	.	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 12 case:adv	color:blue
1	Dalam	dalam	ADP	IN	_	2	case	_	_
2	RAPBN	RAPBN	NOUN	NN	Number=Sing	14	obl	_	_
3	2008	2008	NUM	CD	NumType=Card	2	nummod	_	SpaceAfter=No
4	,	,	PUNCT	,	_	14	punct	_	_
5	pembiayaan	biaya	NOUN	NN	Number=Sing	14	nsubj:pass	_	_
6	anggaran	anggar	NOUN	NN	Number=Sing	5	nmod	_	_
7	yang	yang	PRON	IN	PronType=Rel	8	nsubj	_	_
8	bersumber	sumber	VERB	VB	Mood=Ind|Voice=Act	5	acl:relcl	_	_
9	dari	dari	ADP	IN	_	11	case	_	_
10	dalam	dalam	NOUN	NN	Number=Sing	11	nmod:lmod	_	_
11	negeri	negeri	NOUN	NN	Number=Sing	8	obl	_	_
12	secara	cara	ADP	IN	_	13	case:adv	_	_
13	netto	netto	X	FW	Foreign=Yes	14	advcl	_	_
14	direncanakan	rencana	VERB	VB	Mood=Ind|Voice=Pass	0	root	_	_
15	mencapai	capai	VERB	VB	Mood=Ind|Voice=Act	14	ccomp	_	_
16	Rp	Rp	NOUN	NN	Number=Sing	15	obj	_	SpaceAfter=No
17	97,7	97,7	NUM	CD	NumType=Card	16	nummod	_	_
18	triliun	triliun	NUM	CD	NumType=Card	17	flat	_	SpaceAfter=No
19	.	.	PUNCT	.	_	14	punct	_	_

~~~


