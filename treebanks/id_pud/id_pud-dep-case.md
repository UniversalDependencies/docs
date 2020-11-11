---
layout: base
title:  'Statistics of case in UD_Indonesian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-PUD: Relations: `case`

This relation is universal.
There are 1 language-specific subtypes of `case`: <tt><a href="id_pud-dep-case-adv.html">case:adv</a></tt>.

1839 nodes (9%) are attached to their parents as `case`.

1839 instances of `case` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.17346383904296.

The following 9 pairs of parts of speech are connected with `case`: <tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_pud-pos-ADP.html">ADP</a></tt> (1325; 72% instances), <tt><a href="id_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_pud-pos-ADP.html">ADP</a></tt> (363; 20% instances), <tt><a href="id_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="id_pud-pos-ADP.html">ADP</a></tt> (114; 6% instances), <tt><a href="id_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="id_pud-pos-ADP.html">ADP</a></tt> (25; 1% instances), <tt><a href="id_pud-pos-SYM.html">SYM</a></tt>-<tt><a href="id_pud-pos-ADP.html">ADP</a></tt> (3; 0% instances), <tt><a href="id_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="id_pud-pos-ADP.html">ADP</a></tt> (3; 0% instances), <tt><a href="id_pud-pos-X.html">X</a></tt>-<tt><a href="id_pud-pos-ADP.html">ADP</a></tt> (3; 0% instances), <tt><a href="id_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_pud-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="id_pud-pos-DET.html">DET</a></tt>-<tt><a href="id_pud-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 case	color:blue
1	Pengeluaran	keluar	NOUN	_	Number=Sing	4	nsubj:pass	_	_
2	baru	baru	ADJ	_	_	1	amod	_	_
3	ini	ini	DET	_	PronType=Dem	1	det	_	_
4	dipasok	pasok	VERB	_	Mood=Ind|Voice=Pass	0	root	_	_
5	oleh	oleh	ADP	_	_	6	case	_	_
6	rekening	rekening	NOUN	_	Number=Sing	4	obl:agent	_	_
7	bank	bank	NOUN	_	Number=Sing	6	nmod	_	_
8	gemuk	gemuk	ADJ	_	_	6	amod	_	_
9	Clinton	Clinton	PROPN	_	_	6	nmod:poss	_	SpaceAfter=No
10	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 case	color:blue
1	Ia	ia	PRON	_	Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
2	lalu	lalu	SCONJ	_	_	3	mark	_	_
3	bekerja	kerja	VERB	_	Mood=Ind|Voice=Act	0	root	_	_
4	empat	empat	NUM	_	NumType=Card	5	nummod	_	_
5	tahun	tahun	NOUN	_	Number=Sing	3	obl:tmod	_	_
6	di	di	ADP	_	_	7	case	_	_
7	BBC	BBC	PROPN	_	Abbr=Yes	3	obl	_	_
8	World	World	PROPN	_	_	7	flat:name	_	_
9	Service	Service	PROPN	_	_	7	flat:name	_	_
10	di	di	ADP	_	_	11	case	_	_
11	Bush	Bush	PROPN	_	_	3	obl	_	_
12	House	House	PROPN	_	_	11	flat:name	_	SpaceAfter=No
13	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 case	color:blue
1	Orang-orang	orang	NOUN	_	Number=Plur	2	nsubj:pass	_	_
2	terbunuh	bunuh	VERB	_	Mood=Ind|Voice=Pass	0	root	_	_
3	di	di	ADP	_	_	4	case	_	_
4	sana	sana	PRON	_	PronType=Dem	2	obl	_	SpaceAfter=No
5	.	.	PUNCT	_	_	2	punct	_	_

~~~


