---
layout: base
title:  'Statistics of cc in UD_Indonesian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-PUD: Relations: `cc`

This relation is universal.
There are 1 language-specific subtypes of `cc`: <tt><a href="id_pud-dep-cc-preconj.html">cc:preconj</a></tt>.

559 nodes (3%) are attached to their parents as `cc`.

559 instances of `cc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.09838998211091.

The following 10 pairs of parts of speech are connected with `cc`: <tt><a href="id_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="id_pud-pos-CCONJ.html">CCONJ</a></tt> (233; 42% instances), <tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_pud-pos-CCONJ.html">CCONJ</a></tt> (201; 36% instances), <tt><a href="id_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_pud-pos-CCONJ.html">CCONJ</a></tt> (78; 14% instances), <tt><a href="id_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_pud-pos-CCONJ.html">CCONJ</a></tt> (26; 5% instances), <tt><a href="id_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="id_pud-pos-CCONJ.html">CCONJ</a></tt> (11; 2% instances), <tt><a href="id_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="id_pud-pos-CCONJ.html">CCONJ</a></tt> (4; 1% instances), <tt><a href="id_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="id_pud-pos-CCONJ.html">CCONJ</a></tt> (2; 0% instances), <tt><a href="id_pud-pos-SYM.html">SYM</a></tt>-<tt><a href="id_pud-pos-CCONJ.html">CCONJ</a></tt> (2; 0% instances), <tt><a href="id_pud-pos-DET.html">DET</a></tt>-<tt><a href="id_pud-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="id_pud-pos-X.html">X</a></tt>-<tt><a href="id_pud-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 cc	color:blue
1	Dan	dan	CCONJ	_	_	6	cc	_	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	_
3	tentu	tentu	ADV	_	_	6	advmod	_	_
4	saja	saja	ADV	_	_	3	advmod	_	SpaceAfter=No
5	,	,	PUNCT	_	_	3	punct	_	_
6	ada	ada	VERB	_	Mood=Ind|Voice=Act	0	root	_	_
7	Bob	Bob	PROPN	_	_	6	nsubj	_	SpaceAfter=No
8	,	,	PUNCT	_	_	9	punct	_	_
9	sumber	sumber	NOUN	_	Number=Sing	7	appos	_	_
10	tetap	tetap	ADJ	_	_	9	amod	_	_
11	hiburan	hibur	NOUN	_	Number=Sing	9	nmod	_	SpaceAfter=No
12	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 cc	color:blue
1	Skema	skema	NOUN	_	Number=Sing	3	nsubj	_	_
2	ini	ini	DET	_	PronType=Dem	1	det	_	_
3	menghasilkan	hasil	VERB	_	Mood=Ind|Voice=Act	0	root	_	_
4	uang	uang	NOUN	_	Number=Sing	3	obj	_	_
5	melalui	lalu	ADP	_	_	6	case	_	_
6	sponsor	sponsor	NOUN	_	Number=Sing	3	obl	_	_
7	dan	dan	CCONJ	_	_	8	cc	_	_
8	iklan	iklan	NOUN	_	Number=Sing	6	conj	_	SpaceAfter=No
9	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 cc	color:blue
1	Di	di	ADP	_	_	3	case	_	_
2	antara	antara	NOUN	_	Number=Sing	3	nmod:lmod	_	_
3	nya	nya	PRON	_	Number=Sing|Person=3|PronType=Prs	6	obl	_	_
4	adalah	adalah	AUX	_	_	6	cop	_	_
5	bekas	bekas	ADJ	_	_	6	amod	_	_
6	biara	biara	NOUN	_	Number=Sing	0	root	_	_
7	dari	dari	ADP	_	_	8	case	_	_
8	Biara	Biara	PROPN	_	_	5	nmod	_	_
9	St.	St.	PROPN	_	_	8	nmod	_	_
10	Peter	Peter	PROPN	_	_	9	flat:name	_	_
11	dan	dan	CCONJ	_	_	12	cc	_	_
12	Paul	Paul	PROPN	_	_	10	conj	_	SpaceAfter=No
13	.	.	PUNCT	_	_	6	punct	_	_

~~~


