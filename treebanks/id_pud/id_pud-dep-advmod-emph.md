---
layout: base
title:  'Statistics of advmod:emph in UD_Indonesian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-PUD: Relations: `advmod:emph`

This relation is a language-specific subtype of <tt><a href="id_pud-dep-advmod.html">advmod</a></tt>.

48 nodes (0%) are attached to their parents as `advmod:emph`.

35 instances of `advmod:emph` (73%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.6875.

The following 8 pairs of parts of speech are connected with `advmod:emph`: <tt><a href="id_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="id_pud-pos-PART.html">PART</a></tt> (18; 38% instances), <tt><a href="id_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="id_pud-pos-PART.html">PART</a></tt> (12; 25% instances), <tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_pud-pos-PART.html">PART</a></tt> (6; 13% instances), <tt><a href="id_pud-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="id_pud-pos-PART.html">PART</a></tt> (6; 13% instances), <tt><a href="id_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="id_pud-pos-PART.html">PART</a></tt> (2; 4% instances), <tt><a href="id_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="id_pud-pos-PART.html">PART</a></tt> (2; 4% instances), <tt><a href="id_pud-pos-DET.html">DET</a></tt>-<tt><a href="id_pud-pos-PART.html">PART</a></tt> (1; 2% instances), <tt><a href="id_pud-pos-PART.html">PART</a></tt>-<tt><a href="id_pud-pos-PART.html">PART</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 advmod:emph	color:blue
1	Itu	itu	PRON	_	PronType=Dem	0	root	_	_
2	lah	lah	PART	_	_	1	advmod:emph	_	_
3	yang	yang	PRON	_	PronType=Rel	4	nsubj	_	_
4	membuat	buat	VERB	_	Mood=Ind|Voice=Act	1	csubj	_	_
5	kami	kami	PRON	_	Clusivity=Ex|Number=Plur|Person=1|PronType=Prs	4	obj	_	_
6	tetap	tetap	ADV	_	_	7	advmod	_	_
7	kembali	kembali	VERB	_	Mood=Ind|Voice=Act	4	xcomp	_	_
8	lagi	lagi	ADV	_	_	7	advmod	_	_
9	dan	dan	CCONJ	_	_	10	cc	_	_
10	lagi	lagi	ADV	_	_	8	conj	_	SpaceAfter=No
11	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 advmod:emph	color:blue
1	Katakan	kata	VERB	_	Mood=Ind|Voice=Act	0	root	_	_
2	lah	lah	PART	_	_	1	advmod:emph	_	_
3	dia	dia	PRON	_	Number=Sing|Person=3|PronType=Prs	4	nsubj	_	_
4	salah	salah	ADJ	_	_	1	ccomp	_	SpaceAfter=No
5	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 advmod:emph	color:blue
1	Atau	atau	CCONJ	_	_	4	cc	_	_
2	apa	apa	ADV	_	PronType=Int	5	advmod	_	_
3	kah	kah	PART	_	_	5	advmod:emph	_	_
4	itu	itu	PRON	_	PronType=Dem	5	nsubj	_	_
5	standar	standar	NOUN	_	Number=Sing	0	root	_	_
6	yang	yang	PRON	_	PronType=Rel	7	nsubj	_	_
7	mahal	mahal	ADJ	_	_	5	acl:relcl	_	_
8	atau	atau	CCONJ	_	_	9	cc	_	_
9	tarif	tarif	NOUN	_	Number=Sing	5	conj	_	_
10	prapembayaran	bayar	NOUN	_	Number=Sing	9	nmod	_	SpaceAfter=No
11	?	?	PUNCT	_	_	5	punct	_	_

~~~


