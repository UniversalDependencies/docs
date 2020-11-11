---
layout: base
title:  'Statistics of nmod:tmod in UD_Indonesian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-PUD: Relations: `nmod:tmod`

This relation is a language-specific subtype of <tt><a href="id_pud-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="id_pud-dep-nmod-lmod.html">nmod:lmod</a></tt>, <tt><a href="id_pud-dep-nmod-poss.html">nmod:poss</a></tt>.

145 nodes (1%) are attached to their parents as `nmod:tmod`.

141 instances of `nmod:tmod` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.62758620689655.

The following 10 pairs of parts of speech are connected with `nmod:tmod`: <tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt> (81; 56% instances), <tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_pud-pos-PROPN.html">PROPN</a></tt> (42; 29% instances), <tt><a href="id_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt> (9; 6% instances), <tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_pud-pos-NUM.html">NUM</a></tt> (4; 3% instances), <tt><a href="id_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_pud-pos-PROPN.html">PROPN</a></tt> (3; 2% instances), <tt><a href="id_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="id_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="id_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_pud-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="id_pud-pos-SYM.html">SYM</a></tt>-<tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="id_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 nmod:tmod	color:blue
1	Periode	periode	NOUN	_	Number=Sing	7	nsubj	_	_
2	tunggu	tunggu	VERB	_	Mood=Ind|Voice=Act	1	acl	_	_
3	saat	saat	NOUN	_	Number=Sing	1	nmod:tmod	_	_
4	ini	ini	DET	_	PronType=Dem	3	det	_	_
5	adalah	adalah	AUX	_	_	7	cop	_	_
6	delapan	delapan	NUM	_	NumType=Card	7	nummod	_	_
7	minggu	minggu	NOUN	_	Number=Sing	0	root	_	SpaceAfter=No
8	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 nmod:tmod	color:blue
1	Mereka	mereka	PRON	_	Number=Plur|Person=3|PronType=Prs	3	nsubj	_	_
2	akan	akan	AUX	_	_	3	aux	_	_
3	main	main	VERB	_	Mood=Ind|Voice=Act	0	root	_	_
4	pada	pada	ADP	_	_	5	case	_	_
5	hari	hari	NOUN	_	Number=Sing	3	obl:tmod	_	_
6	Sabtu	Sabtu	PROPN	_	_	5	nmod:tmod	_	SpaceAfter=No
7	,	,	PUNCT	_	_	8	punct	_	_
8	10	10	NUM	_	NumType=Card	5	appos	_	_
9	Juni	Juni	PROPN	_	_	8	flat	_	SpaceAfter=No
10	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 nmod:tmod	color:blue
1	Tentu	tentu	ADV	_	_	5	advmod	_	_
2	saja	saja	ADV	_	_	1	advmod	_	SpaceAfter=No
3	,	,	PUNCT	_	_	1	punct	_	_
4	saya	saya	PRON	_	Number=Sing|Person=1|PronType=Prs	5	nsubj	_	_
5	mengerti	arti	VERB	_	Mood=Ind|Voice=Act	0	root	_	_
6	bahwa	bahwa	SCONJ	_	_	11	mark	_	_
7	Jerman	Jerman	PROPN	_	_	11	nsubj:pass	_	_
8	masa	masa	NOUN	_	Number=Sing	7	nmod:tmod	_	_
9	kini	kini	NOUN	_	Number=Sing	8	nmod:tmod	_	_
10	harus	harus	AUX	_	_	11	aux	_	_
11	dipisahkan	pisah	VERB	_	Mood=Ind|Voice=Pass	5	ccomp	_	_
12	dari	dari	ADP	_	_	13	case	_	_
13	rezim	rezim	NOUN	_	Number=Sing	11	obl	_	_
14	Nazi	Nazi	PROPN	_	_	13	nmod	_	SpaceAfter=No
15	.	.	PUNCT	_	_	5	punct	_	_

~~~


