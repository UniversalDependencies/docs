---
layout: base
title:  'Statistics of dep in UD_Javanese-CSUI'
udver: '2'
---

## Treebank Statistics: UD_Javanese-CSUI: Relations: `dep`

This relation is universal.

8 nodes (0%) are attached to their parents as `dep`.

7 instances of `dep` (88%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.125.

The following 3 pairs of parts of speech are connected with `dep`: <tt><a href="jv_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="jv_csui-pos-X.html">X</a></tt> (4; 50% instances), <tt><a href="jv_csui-pos-X.html">X</a></tt>-<tt><a href="jv_csui-pos-X.html">X</a></tt> (3; 38% instances), <tt><a href="jv_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="jv_csui-pos-X.html">X</a></tt> (1; 13% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 dep	color:blue
1	Euryarchaeota	Euryarchaeota	PROPN	_	_	3	nsubj	_	_
2	isa	bisa	AUX	_	Abbr=Yes|Polite=Infm	3	aux	_	Level=Ngoko
3	urip	urip	VERB	_	Mood=Ind|Polite=Infm|Voice=Act	0	root	_	Level=Ngoko
4	ing	ing	ADP	_	_	5	case	_	_
5	lingkungan	lingkungan	NOUN	_	Number=Sing	3	obl	_	_
6	ekstrem	ekstrem	X	_	Foreign=Yes	5	dep	_	SpaceAfter=No
7	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 14 dep	color:blue
1	Panjenenganipun	panjenenganipun	PRON	_	Number=Sing|Person=3|Polite=Elev|PronType=Prs	3	nsubj	_	Level=KramaInggil
2	terus	terus	ADV	_	Polite=Infm	3	advmod	_	Level=Ngoko
3	makarya	karya	VERB	_	Mood=Ind|Voice=Act	0	root	_	_
4	dugi	dugi	ADP	_	Polite=Form	6	case	_	Level=Krama
5	2	2	NUM	_	NumType=Card	6	nummod	_	_
6	taun	taun	NOUN	_	Number=Sing	3	obl	_	_
7	salajengipun	lajeng	ADJ	_	Polite=Form	6	amod	_	Level=Krama|SpaceAfter=No
8	,	,	PUNCT	_	_	11	punct	_	_
9	liwat	liwat	ADP	_	Polite=Infm	11	case	_	Level=Ngoko
10	3	3	NUM	_	NumType=Card	11	nummod	_	_
11	operasi	operasi	NOUN	_	Number=Sing	3	obl	_	_
12	lan	lan	CCONJ	_	Polite=Infm	13	cc	_	Level=Ngoko
13	kemoterapi	kemoterapi	X	_	Foreign=Yes	11	conj	_	_
14	eksperimental	eksperimental	X	_	Foreign=Yes	13	dep	_	_
15	lan	lan	CCONJ	_	Polite=Infm	16	cc	_	Level=Ngoko
16	remisi	remisi	X	_	Foreign=Yes	11	conj	_	_
17	10	10	NUM	_	NumType=Card	18	nummod	_	_
18	wulan	wulan	NOUN	_	Number=Sing|Polite=Form	16	nmod	_	Level=Krama|SpaceAfter=No
19	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 dep	color:blue
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


