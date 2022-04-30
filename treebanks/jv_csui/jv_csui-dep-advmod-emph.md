---
layout: base
title:  'Statistics of advmod:emph in UD_Javanese-CSUI'
udver: '2'
---

## Treebank Statistics: UD_Javanese-CSUI: Relations: `advmod:emph`

This relation is a language-specific subtype of <tt><a href="jv_csui-dep-advmod.html">advmod</a></tt>.

2 nodes (0%) are attached to their parents as `advmod:emph`.

1 instances of `advmod:emph` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.5.

The following 2 pairs of parts of speech are connected with `advmod:emph`: <tt><a href="jv_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="jv_csui-pos-PART.html">PART</a></tt> (1; 50% instances), <tt><a href="jv_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="jv_csui-pos-PART.html">PART</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 advmod:emph	color:blue
1	Perusahaan	usaha	NOUN	_	Number=Sing	5	nsubj	_	_
2	Dodge	Dodge	PROPN	_	_	1	nmod	_	_
3	Bersaudara	saudara	PROPN	_	_	2	flat:name	_	_
4	pun	pun	PART	_	_	1	advmod:emph	_	_
5	ngerembag	rembag	VERB	_	Mood=Ind|Voice=Act	0	root	_	_
6	sukses	sukses	NOUN	_	Number=Sing	5	obj	_	_
7	amargi	amargi	SCONJ	_	_	9	mark	_	_
8	kualitas	kualitas	NOUN	_	Number=Sing	10	nsubj	_	_
9	ipun	ipun	PRON	_	Number=Sing|Person=3|Polite=Form|PronType=Prs	8	nmod:poss	_	Level=Krama
10	saé	saé	ADJ	_	_	5	advcl	_	_
11	,	,	PUNCT	_	_	16	punct	_	_
12	lan	lan	CCONJ	_	Polite=Infm	16	cc	_	Level=Ngoko
13	perusahaan	usaha	NOUN	_	Number=Sing	16	nsubj	_	_
14	punika	punika	DET	_	Polite=Form|PronType=Dem	13	det	_	Level=Krama
15	enggal	enggal	ADV	_	_	16	advmod	_	_
16	dados	dados	VERB	_	Mood=Ind|Polite=Form|Voice=Act	5	conj	_	Level=Krama
17	perusahaan	usaha	NOUN	_	Number=Sing	16	obl	_	_
18	ingkang	ingkang	PRON	_	Polite=Form|PronType=Rel	21	obl	_	Level=Krama
19	penjualan	jual	NOUN	_	Number=Sing	21	nsubj	_	_
20	ipun	ipun	PRON	_	Number=Sing|Person=3|Polite=Form|PronType=Prs	19	nmod:poss	_	Level=Krama
21	ageng	ageng	ADJ	_	Polite=Form	17	acl:relcl	_	Level=Krama
22	ing	ing	ADP	_	_	23	case	_	_
23	pasar	pasar	NOUN	_	Number=Sing	21	obl	_	_
24	AS	AS	PROPN	_	_	23	nmod	_	_
25	taun	taun	NOUN	_	_	21	obl:tmod	_	_
26	1916	1916	NUM	_	NumType=Card	25	nummod	_	SpaceAfter=No
27	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 12 advmod:emph	color:blue
1	Sira	sira	PRON	_	Number=Sing|Person=2|Polite=Form|PronType=Prs	3	nsubj:pass	_	Level=Krama
2	banjur	banjur	ADV	_	_	3	advmod	_	_
3	didangu	dangu	VERB	_	Mood=Ind|Voice=Pass	16	advcl	_	Level=Krama
4	sarupaning	rupa	NOUN	_	Number=Sing	3	obl	_	_
5	kabungahan	bungah	NOUN	_	Number=Sing	4	nmod	_	_
6	paparinging	paring	VERB	_	Mood=Ind|Voice=Pass	4	acl	_	_
7	Allah	Allah	PROPN	_	_	6	obl	_	_
8	nalika	nalika	ADP	_	Polite=Elev	10	case	_	Level=KramaInggil
9	ing	ing	ADP	_	_	10	case	_	_
10	donya	donya	NOUN	_	Number=Sing	6	obl	_	SpaceAfter=No
11	,	,	PUNCT	_	_	16	punct	_	_
12	ya	ya	PART	_	_	16	advmod:emph	_	_
13	gene	gene	PRON	_	PronType=Dem	16	obl	_	_
14	ora	ora	PART	_	Polarity=Neg|Polite=Infm	16	advmod	_	Level=Ngoko
15	padha	padha	ADV	_	Polite=Infm	16	advmod	_	Level=Ngoko
16	syukur	syukur	VERB	_	Mood=Ind|Voice=Act	0	root	_	SpaceAfter=No
17	?	?	PUNCT	_	_	16	punct	_	_

~~~


