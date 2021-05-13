---
layout: base
title:  'Statistics of nsubj:pass in UD_Indonesian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-PUD: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="id_pud-dep-nsubj.html">nsubj</a></tt>.

403 nodes (2%) are attached to their parents as `nsubj:pass`.

378 instances of `nsubj:pass` (94%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.73697270471464.

The following 8 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="id_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt> (176; 44% instances), <tt><a href="id_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="id_pud-pos-PRON.html">PRON</a></tt> (170; 42% instances), <tt><a href="id_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="id_pud-pos-PROPN.html">PROPN</a></tt> (47; 12% instances), <tt><a href="id_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_pud-pos-PRON.html">PRON</a></tt> (4; 1% instances), <tt><a href="id_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="id_pud-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="id_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="id_pud-pos-SYM.html">SYM</a></tt> (2; 0% instances), <tt><a href="id_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nsubj:pass	color:blue
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
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 nsubj:pass	color:blue
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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nsubj:pass	color:blue
1	Pertandingan	Pertandingan	PROPN	_	_	4	nsubj:pass	_	_
2	Olimpiade	Olimpiade	PROPN	_	_	1	flat:name	_	_
3	terakhir	akhir	ADJ	_	Degree=Sup	1	amod	_	_
4	diyakini	yakin	VERB	_	Mood=Ind|Voice=Pass	0	root	_	_
5	diadakan	ada	VERB	_	Mood=Ind|Voice=Pass	4	xcomp	_	_
6	pada	pada	ADP	_	_	7	case	_	_
7	tahun	tahun	NOUN	_	Number=Sing	5	obl:tmod	_	_
8	393	393	NUM	_	NumType=Card	7	nummod	_	SpaceAfter=No
9	.	.	PUNCT	_	_	4	punct	_	_

~~~


