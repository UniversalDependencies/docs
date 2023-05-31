---
layout: base
title:  'Statistics of obl in UD_Indonesian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-PUD: Relations: `obl`

This relation is universal.
There are 2 language-specific subtypes of `obl`: <tt><a href="id_pud-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="id_pud-dep-obl-tmod.html">obl:tmod</a></tt>.

1048 nodes (5%) are attached to their parents as `obl`.

880 instances of `obl` (84%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.58206106870229.

The following 19 pairs of parts of speech are connected with `obl`: <tt><a href="id_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt> (728; 69% instances), <tt><a href="id_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="id_pud-pos-PROPN.html">PROPN</a></tt> (151; 14% instances), <tt><a href="id_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="id_pud-pos-PRON.html">PRON</a></tt> (75; 7% instances), <tt><a href="id_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt> (50; 5% instances), <tt><a href="id_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="id_pud-pos-SYM.html">SYM</a></tt> (7; 1% instances), <tt><a href="id_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_pud-pos-PRON.html">PRON</a></tt> (6; 1% instances), <tt><a href="id_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_pud-pos-PROPN.html">PROPN</a></tt> (6; 1% instances), <tt><a href="id_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="id_pud-pos-NUM.html">NUM</a></tt> (5; 0% instances), <tt><a href="id_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="id_pud-pos-X.html">X</a></tt> (5; 0% instances), <tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_pud-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_pud-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="id_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_pud-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="id_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="id_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_pud-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="id_pud-pos-DET.html">DET</a></tt>-<tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="id_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="id_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="id_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="id_pud-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="id_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="id_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 obl	color:blue
1	"	"	PUNCT	_	_	6	punct	_	SpaceAfter=No
2	Toh	toh	INTJ	_	_	6	discourse	_	_
3	saya	saya	PRON	_	Number=Sing|Person=1|Polite=Form|PronType=Prs	6	nsubj	_	_
4	tetap	tetap	ADV	_	_	6	advmod	_	_
5	akan	akan	AUX	_	_	6	aux	_	_
6	masuk	masuk	VERB	_	Mood=Ind|Voice=Act	0	root	_	_
7	penjara	penjara	NOUN	_	Number=Sing	6	obl	_	SpaceAfter=No
8	,	,	PUNCT	_	_	10	punct	_	_
9	semoga	moga	ADV	_	_	10	advmod	_	_
10	sepadan	padan	ADJ	_	_	6	parataxis	_	SpaceAfter=No
11	.	.	PUNCT	_	_	6	punct	_	SpaceAfter=No
12	"	"	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 obl	color:blue
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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 obl	color:blue
1	Orang-orang	orang	NOUN	_	Number=Plur	2	nsubj:pass	_	_
2	terbunuh	bunuh	VERB	_	Mood=Ind|Voice=Pass	0	root	_	_
3	di	di	ADP	_	_	4	case	_	_
4	sana	sana	PRON	_	PronType=Dem	2	obl	_	SpaceAfter=No
5	.	.	PUNCT	_	_	2	punct	_	_

~~~


