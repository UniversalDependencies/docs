---
layout: base
title:  'Statistics of mark in UD_Indonesian-CSUI'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-CSUI: Relations: `mark`

This relation is universal.

580 nodes (2%) are attached to their parents as `mark`.

576 instances of `mark` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.86034482758621.

The following 9 pairs of parts of speech are connected with `mark`: <tt><a href="id_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="id_csui-pos-SCONJ.html">SCONJ</a></tt> (441; 76% instances), <tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_csui-pos-SCONJ.html">SCONJ</a></tt> (69; 12% instances), <tt><a href="id_csui-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_csui-pos-SCONJ.html">SCONJ</a></tt> (39; 7% instances), <tt><a href="id_csui-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_csui-pos-SCONJ.html">SCONJ</a></tt> (20; 3% instances), <tt><a href="id_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="id_csui-pos-ADP.html">ADP</a></tt> (6; 1% instances), <tt><a href="id_csui-pos-X.html">X</a></tt>-<tt><a href="id_csui-pos-SCONJ.html">SCONJ</a></tt> (2; 0% instances), <tt><a href="id_csui-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_csui-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="id_csui-pos-AUX.html">AUX</a></tt>-<tt><a href="id_csui-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="id_csui-pos-NUM.html">NUM</a></tt>-<tt><a href="id_csui-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 mark	color:blue
1	Kera	kera	NOUN	NN	Number=Sing	0	root	_	_
2	untuk	untuk	SCONJ	IN	_	3	mark	_	_
3	amankan	aman	VERB	VB	Mood=Ind|Voice=Act	1	acl	_	_
4	pesta	pesta	NOUN	NN	Number=Sing	3	obj	_	_
5	olahraga	olahraga	NOUN	NN	Number=Sing	4	nmod	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 mark	color:blue
1	"	"	PUNCT	``	_	2	punct	_	SpaceAfter=No
2	Ini	ini	PRON	PRP	PronType=Dem	0	root	_	_
3	lah	lah	PART	RP	_	2	advmod:emph	_	_
4	yang	yang	PRON	IN	PronType=Rel	5	nsubj:pass	_	_
5	terjadi	jadi	VERB	VB	Mood=Ind|Voice=Pass	2	acl:relcl	_	_
6	kalau	kalau	SCONJ	IN	_	7	mark	_	_
7	siaran	siar	NOUN	NN	Number=Sing	5	advcl	_	_
8	TV	TV	NOUN	NN	Number=Sing	7	nmod	_	_
9	langsung	langsung	ADJ	JJ	_	7	amod	_	SpaceAfter=No
10	,	,	PUNCT	,	_	2	punct	_	SpaceAfter=No
11	"	"	PUNCT	''	_	2	punct	_	_
12	kata	kata	VERB	VB	Mood=Ind|Voice=Act	2	parataxis	_	_
13	Sarah	Sarah	PROPN	NNP	_	12	nsubj	_	_
14	Murdoch	Murdoch	PROPN	NNP	_	13	flat:name	_	SpaceAfter=No
15	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 11 mark	color:blue
1	Kita	kita	PRON	PRP	Clusivity=In|Number=Plur|Person=1|PronType=Prs	4	nsubj	_	_
2	kan	kan	ADV	RB	_	1	advmod	_	_
3	sudah	sudah	AUX	MD	_	4	aux	_	_
4	masuk	masuk	VERB	VB	Mood=Ind|Voice=Act	0	root	_	_
5	'	'	PUNCT	``	_	6	punct	_	SpaceAfter=No
6	middle	middle	X	FW	Foreign=Yes	4	obj	_	_
7	income	income	X	FW	Foreign=Yes	6	flat:foreign	_	_
8	countries	countries	X	FW	Foreign=Yes	6	flat:foreign	_	SpaceAfter=No
9	'	'	PUNCT	''	_	6	punct	_	SpaceAfter=No
10	,	,	PUNCT	,	_	4	punct	_	_
11	jadi	jadi	SCONJ	IN	_	13	mark	_	_
12	jangan-jangan	jangan	ADV	RB	_	13	advmod	_	_
13	susah	susah	ADJ	JJ	_	4	advcl	_	SpaceAfter=No
14	.	.	PUNCT	.	_	4	punct	_	_

~~~


