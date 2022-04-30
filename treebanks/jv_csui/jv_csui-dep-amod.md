---
layout: base
title:  'Statistics of amod in UD_Javanese-CSUI'
udver: '2'
---

## Treebank Statistics: UD_Javanese-CSUI: Relations: `amod`

This relation is universal.

52 nodes (3%) are attached to their parents as `amod`.

48 instances of `amod` (92%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.23076923076923.

The following 7 pairs of parts of speech are connected with `amod`: <tt><a href="jv_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="jv_csui-pos-ADJ.html">ADJ</a></tt> (36; 69% instances), <tt><a href="jv_csui-pos-X.html">X</a></tt>-<tt><a href="jv_csui-pos-ADJ.html">ADJ</a></tt> (7; 13% instances), <tt><a href="jv_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="jv_csui-pos-X.html">X</a></tt> (5; 10% instances), <tt><a href="jv_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="jv_csui-pos-DET.html">DET</a></tt> (1; 2% instances), <tt><a href="jv_csui-pos-PROPN.html">PROPN</a></tt>-<tt><a href="jv_csui-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="jv_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="jv_csui-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="jv_csui-pos-X.html">X</a></tt>-<tt><a href="jv_csui-pos-X.html">X</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 amod	color:blue
1	Panjenenganipun	panjenenganipun	PRON	_	Number=Sing|Person=3|Polite=Elev|PronType=Prs	2	nsubj:pass	_	Level=KramaInggil
2	miyos	miyos	VERB	_	Polite=Elev|Voice=Pass	0	root	_	Level=KramaInggil
3	kanthi	kanthi	ADP	_	_	4	case	_	_
4	asma	asma	NOUN	_	Number=Sing|Polite=Form	2	obl	_	Level=Krama
5	asli	asli	ADJ	_	_	4	amod	_	_
6	Joko	Joko	PROPN	_	_	4	nmod	_	_
7	Widodo	Widodo	PROPN	_	_	6	flat:name	_	SpaceAfter=No
8	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 amod	color:blue
1	Panambahan	tambah	NOUN	_	_	0	root	_	_
2	poin	poin	X	_	Foreign=Yes	1	nmod	_	_
3	75	75	NUM	_	NumType=Card	4	nummod	_	SpaceAfter=No
4	%	%	SYM	_	_	1	nmod	_	_
5	ing	ing	ADP	_	_	6	case	_	_
6	turnamèn	turnamèn	X	_	Foreign=Yes	1	nmod	_	_
7	paling	paling	ADV	_	_	8	advmod	_	_
8	apik	apik	ADJ	_	Polite=Form	6	amod	_	Level=Ngoko
9	ing	ing	ADP	_	_	10	case	_	_
10	lumah	lumah	NOUN	_	_	6	nmod	_	_
11	suket	suket	NOUN	_	Number=Sing	10	nmod	_	_
12	12	12	NUM	_	NumType=Card	13	nummod	_	_
13	wulan	wulan	NOUN	_	Number=Sing	1	nmod:tmod	_	_
14	sakdurunge	sakdurunge	ADV	_	Polite=Infm	13	advmod	_	Level=Ngoko|SpaceAfter=No
15	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 amod	color:blue
1	Permainan	main	NOUN	_	Number=Sing	9	nsubj	_	_
2	kibor	kibor	X	_	Foreign=Yes	1	nmod	_	_
3	kang	kang	PRON	_	Polite=Infm|PronType=Rel	4	nsubj	_	Level=Ngoko
4	dadi	dadi	VERB	_	Mood=Ind|Polite=Form|Voice=Act	1	acl:relcl	_	Level=Ngoko
5	suara	suara	NOUN	_	Number=Sing	4	obl	_	_
6	khas	khas	ADJ	_	_	5	amod	_	_
7	The	The	PROPN	_	_	5	nmod	_	_
8	Doors	Doors	PROPN	_	_	7	flat:name	_	_
9	asalipun	asalipun	VERB	_	Mood=Ind|Voice=Act	0	root	_	_
10	saka	saka	ADP	_	Polite=Infm	11	case	_	Ngoko
11	organ	organ	NOUN	_	Number=Sing	9	obl	_	_
12	combo	combo	X	_	Foreign=Yes	11	amod	_	_
13	Vox	Vox	PROPN	_	_	11	nmod	_	_
14	Continental	Continental	PROPN	_	_	13	flat:name	_	_
15	kang	kang	PRON	_	Polite=Infm|PronType=Rel	19	nsubj	_	Level=Ngoko
16	uga	uga	ADV	_	Polite=Infm	19	advmod	_	Level=Ngoko
17	minangka	minangka	ADP	_	_	19	case	_	_
18	akèh	akèh	DET	_	Number=Plur|Polite=Infm|PronType=Ind	19	amod	_	Level=Ngoko
19	grup	grup	NOUN	_	Number=Sing	11	acl	_	_
20	rock	rock	X	_	Foreign=Yes	19	nmod	_	_
21	psychedelic	psychedelic	X	_	Foreign=Yes	20	amod	_	_
22	ing	ing	ADP	_	_	23	case	_	_
23	era	era	NOUN	_	Number=Sing	19	nmod	_	_
24	mau	mau	DET	_	Polite=Infm|PronType=Dem	23	det	_	Level=Ngoko|SpaceAfter=No
25	.	.	PUNCT	_	_	9	punct	_	_

~~~


