---
layout: base
title:  'Statistics of acl in UD_Javanese-CSUI'
udver: '2'
---

## Treebank Statistics: UD_Javanese-CSUI: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="jv_csui-dep-acl-relcl.html">acl:relcl</a></tt>.

20 nodes (1%) are attached to their parents as `acl`.

20 instances of `acl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.55.

The following 4 pairs of parts of speech are connected with `acl`: <tt><a href="jv_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="jv_csui-pos-VERB.html">VERB</a></tt> (15; 75% instances), <tt><a href="jv_csui-pos-PROPN.html">PROPN</a></tt>-<tt><a href="jv_csui-pos-VERB.html">VERB</a></tt> (2; 10% instances), <tt><a href="jv_csui-pos-X.html">X</a></tt>-<tt><a href="jv_csui-pos-VERB.html">VERB</a></tt> (2; 10% instances), <tt><a href="jv_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="jv_csui-pos-NOUN.html">NOUN</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 acl	color:blue
1	Star	Star	PROPN	_	_	4	nsubj	_	_
2	Movies	Movies	PROPN	_	_	1	flat:name	_	_
3	yaiku	yaiku	AUX	_	Polite=Infm	4	cop	_	Level=Ngoko
4	saluran	saluran	NOUN	_	Number=Sing	0	root	_	_
5	mbayar	mbayar	VERB	_	Mood=Ind|Voice=Act	4	acl	_	_
6	kang	kang	PRON	_	Polite=Infm|PronType=Rel	7	nsubj	_	Level=Ngoko
7	pertama	pertama	ADJ	_	_	4	acl:relcl	_	_
8	ing	ing	ADP	_	_	9	case	_	_
9	India	India	PROPN	_	_	7	obl	_	SpaceAfter=No
10	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 acl	color:blue
1	Train	Train	PROPN	_	_	10	nsubj	_	_
2	à	à	PROPN	_	_	1	flat:name	_	_
3	Grande	Grande	PROPN	_	_	1	flat:name	_	_
4	Vitesse	Vitesse	PROPN	_	_	1	flat:name	_	_
5	(	(	PUNCT	_	_	6	punct	_	SpaceAfter=No
6	dicekak	cekak	VERB	_	Mood=Ind|Voice=Pass	1	acl	_	_
7	TGV	TGV	PROPN	_	_	6	obl	_	SpaceAfter=No
8	)	)	PUNCT	_	_	6	punct	_	_
9	iku	yaiku	AUX	_	Polite=Infm	10	cop	_	Level=Ngoko
10	sepur	sepur	NOUN	_	Number=Sing	0	root	_	_
11	rikat	rikat	ADJ	_	_	10	amod	_	_
12	Prancis	Prancis	PROPN	_	_	10	nmod	_	_
13	(	(	PUNCT	_	_	14	punct	_	SpaceAfter=No
14	basa	basa	NOUN	_	Number=Sing	10	appos	_	_
15	Prancis	Prancis	PROPN	_	_	14	nmod	_	SpaceAfter=No
16	:	:	PUNCT	_	_	14	punct	_	_
17	train	train	X	_	Foreign=Yes	14	nmod	_	_
18	à	à	X	_	Foreign=Yes	17	flat:foreign	_	_
19	grande	grande	X	_	Foreign=Yes	17	flat:foreign	_	_
20	vitesse	vitesse	X	_	Foreign=Yes	17	flat:foreign	_	SpaceAfter=No
21	,	,	PUNCT	_	_	23	punct	_	_
22	kang	kang	PRON	_	Polite=Infm|PronType=Rel	23	nsubj	_	Level=Ngoko
23	tegesé	tegesé	VERB	_	Mood=Ind|Voice=Act	17	acl:relcl	_	_
24	sepur	sepur	NOUN	_	Number=Sing	23	obl	_	_
25	rikat	rikat	ADJ	_	_	24	amod	_	SpaceAfter=No
26	)	)	PUNCT	_	_	14	punct	_	SpaceAfter=No
27	.	.	PUNCT	_	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 17 acl	color:blue
1	Maskapé	maskapé	NOUN	_	Number=Sing	3	nsubj	_	_
2	iki	iki	DET	_	Polite=Infm|PronType=Dem	1	det	_	Level=Ngoko
3	ngoperasikaké	operasi	VERB	_	Mood=Ind|Polite=Infm|Voice=Act	0	root	_	Level=Ngoko
4	jaringan	jaring	X	_	Foreign=Yes	3	dep	_	_
5	penerbangan	terbang	X	_	Foreign=Yes	4	flat:foreign	_	_
6	tumuju	tumuju	VERB	_	Mood=Ind|Voice=Act	3	advcl	_	_
7	50	50	NUM	_	NumType=Card	8	nummod	_	_
8	tujuan	tujuan	X	_	Foreign=Yes	6	obl	_	_
9	ing	ing	ADP	_	_	11	case	_	_
10	20	20	NUM	_	NumType=Card	11	nummod	_	_
11	nagara	nagara	NOUN	_	Number=Sing	8	nmod	_	SpaceAfter=No
12	,	,	PUNCT	_	_	13	punct	_	_
13	kalebu	kalebu	VERB	_	Mood=Ind|Polite=Infm|Voice=Act	6	advcl	_	Level=Ngoko
14	penerbangan	terbang	X	_	Foreign=Yes	13	obl	_	_
15	jarak	jarak	NOUN	_	Number=Sing	14	nmod	_	_
16	adoh	adoh	ADJ	_	Polite=Infm	15	amod	_	Level=Ngoko
17	tumuju	tumuju	VERB	_	Mood=Ind|Voice=Act	14	acl	_	_
18	Afrika	Afrika	PROPN	_	_	17	obj	_	_
19	Timur	Timur	PROPN	_	_	18	flat:name	_	SpaceAfter=No
20	,	,	PUNCT	_	_	21	punct	_	_
21	Tengah	Tengah	PROPN	_	_	19	conj	_	SpaceAfter=No
22	,	,	PUNCT	_	_	23	punct	_	_
23	lan	lan	CCONJ	_	Polite=Infm	24	cc	_	Level=Ngoko
24	Barat	Barat	PROPN	_	_	19	conj	_	SpaceAfter=No
25	.	.	PUNCT	_	_	3	punct	_	_

~~~


