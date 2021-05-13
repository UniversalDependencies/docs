---
layout: base
title:  'Statistics of cc in UD_Indonesian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-PUD: Relations: `cc`

This relation is universal.
There are 1 language-specific subtypes of `cc`: <tt><a href="id_pud-dep-cc-preconj.html">cc:preconj</a></tt>.

587 nodes (3%) are attached to their parents as `cc`.

587 instances of `cc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.24531516183986.

The following 10 pairs of parts of speech are connected with `cc`: <tt><a href="id_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="id_pud-pos-CCONJ.html">CCONJ</a></tt> (259; 44% instances), <tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_pud-pos-CCONJ.html">CCONJ</a></tt> (203; 35% instances), <tt><a href="id_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_pud-pos-CCONJ.html">CCONJ</a></tt> (78; 13% instances), <tt><a href="id_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_pud-pos-CCONJ.html">CCONJ</a></tt> (26; 4% instances), <tt><a href="id_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="id_pud-pos-CCONJ.html">CCONJ</a></tt> (11; 2% instances), <tt><a href="id_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="id_pud-pos-CCONJ.html">CCONJ</a></tt> (4; 1% instances), <tt><a href="id_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="id_pud-pos-CCONJ.html">CCONJ</a></tt> (2; 0% instances), <tt><a href="id_pud-pos-SYM.html">SYM</a></tt>-<tt><a href="id_pud-pos-CCONJ.html">CCONJ</a></tt> (2; 0% instances), <tt><a href="id_pud-pos-DET.html">DET</a></tt>-<tt><a href="id_pud-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="id_pud-pos-X.html">X</a></tt>-<tt><a href="id_pud-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 cc	color:blue
1	Namun	namun	CCONJ	_	_	4	cc	_	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	_
3	masih	masih	ADV	_	_	4	advmod	_	_
4	ada	ada	VERB	_	Mood=Ind|Voice=Act	0	root	_	_
5	pertanyaan	tanya	NOUN	_	Number=Sing	4	nsubj	_	_
6	yang	yang	PRON	_	PronType=Rel	8	nsubj:pass	_	_
7	tak	tak	PART	_	Polarity=Neg	8	advmod	_	_
8	terjawab	jawab	VERB	_	Mood=Ind|Voice=Pass	5	acl:relcl	_	SpaceAfter=No
9	.	.	PUNCT	_	_	4	punct	_	_

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


