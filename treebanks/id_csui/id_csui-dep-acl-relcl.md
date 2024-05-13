---
layout: base
title:  'Statistics of acl:relcl in UD_Indonesian-CSUI'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-CSUI: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="id_csui-dep-acl.html">acl</a></tt>.

752 nodes (3%) are attached to their parents as `acl:relcl`.

738 instances of `acl:relcl` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.40824468085106.

The following 18 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_csui-pos-VERB.html">VERB</a></tt> (503; 67% instances), <tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_csui-pos-ADJ.html">ADJ</a></tt> (131; 17% instances), <tt><a href="id_csui-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_csui-pos-VERB.html">VERB</a></tt> (58; 8% instances), <tt><a href="id_csui-pos-X.html">X</a></tt>-<tt><a href="id_csui-pos-VERB.html">VERB</a></tt> (11; 1% instances), <tt><a href="id_csui-pos-NUM.html">NUM</a></tt>-<tt><a href="id_csui-pos-ADJ.html">ADJ</a></tt> (10; 1% instances), <tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt> (8; 1% instances), <tt><a href="id_csui-pos-PRON.html">PRON</a></tt>-<tt><a href="id_csui-pos-VERB.html">VERB</a></tt> (7; 1% instances), <tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_csui-pos-X.html">X</a></tt> (4; 1% instances), <tt><a href="id_csui-pos-NUM.html">NUM</a></tt>-<tt><a href="id_csui-pos-VERB.html">VERB</a></tt> (4; 1% instances), <tt><a href="id_csui-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_csui-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="id_csui-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="id_csui-pos-PRON.html">PRON</a></tt>-<tt><a href="id_csui-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="id_csui-pos-PRON.html">PRON</a></tt>-<tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="id_csui-pos-X.html">X</a></tt>-<tt><a href="id_csui-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="id_csui-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_csui-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_csui-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="id_csui-pos-NUM.html">NUM</a></tt>-<tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="id_csui-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_csui-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 acl:relcl	color:blue
1	Tetapi	tetapi	CCONJ	CC	_	8	cc	_	_
2	langkah	langkah	NOUN	NN	Number=Sing	8	obl	_	_
3	dia	dia	PRON	PRP	Number=Sing|Person=3|PronType=Prs	2	nmod:poss	_	_
4	menuju	tuju	VERB	VB	Mood=Ind|Voice=Act	2	acl:relcl	_	_
5	kesuksesan	sukses	NOUN	NN	Number=Sing	4	obj	_	_
6	tidak	tidak	PART	RP	Polarity=Neg	8	advmod	_	_
7	lah	lah	PART	RP	_	6	advmod:emph	_	_
8	mulus	mulus	ADJ	JJ	_	0	root	_	SpaceAfter=No
9	.	.	PUNCT	.	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 acl:relcl	color:blue
1	Kami	kami	PRON	PRP	Clusivity=Ex|Number=Plur|Person=1|PronType=Prs	2	nsubj	_	_
2	kira	kira	VERB	VB	Mood=Ind|Voice=Act	0	root	_	_
3	itu	itu	DET	DT	PronType=Dem	5	det	_	SpaceAfter=No
4	,	,	PUNCT	,	_	5	punct	_	_
5	target	target	NOUN	NN	Number=Sing	2	obl	_	_
6	yang	yang	PRON	IN	PronType=Rel	7	nsubj	_	_
7	optimistis	optimistis	ADJ	JJ	_	5	acl:relcl	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 acl:relcl	color:blue
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


