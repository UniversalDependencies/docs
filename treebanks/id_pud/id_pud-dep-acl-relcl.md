---
layout: base
title:  'Statistics of acl:relcl in UD_Indonesian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-PUD: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="id_pud-dep-acl.html">acl</a></tt>.

502 nodes (3%) are attached to their parents as `acl:relcl`.

500 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.92231075697211.

The following 14 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_pud-pos-VERB.html">VERB</a></tt> (299; 60% instances), <tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_pud-pos-ADJ.html">ADJ</a></tt> (129; 26% instances), <tt><a href="id_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_pud-pos-VERB.html">VERB</a></tt> (34; 7% instances), <tt><a href="id_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="id_pud-pos-VERB.html">VERB</a></tt> (17; 3% instances), <tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt> (8; 2% instances), <tt><a href="id_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="id_pud-pos-ADJ.html">ADJ</a></tt> (4; 1% instances), <tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_pud-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="id_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="id_pud-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="id_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="id_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="id_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="id_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="id_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="id_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="id_pud-pos-X.html">X</a></tt>-<tt><a href="id_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 acl:relcl	color:blue
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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 acl:relcl	color:blue
1	Atau	atau	CCONJ	_	_	4	cc	_	_
2	apa	apa	PRON	_	PronType=Int	5	nmod	_	_
3	kah	kah	PART	_	_	2	advmod:emph	_	_
4	itu	itu	PRON	_	PronType=Dem	5	nsubj	_	_
5	standar	standar	NOUN	_	Number=Sing	0	root	_	_
6	yang	yang	PRON	_	PronType=Rel	7	nsubj	_	_
7	mahal	mahal	ADJ	_	_	5	acl:relcl	_	_
8	atau	atau	CCONJ	_	_	9	cc	_	_
9	tarif	tarif	NOUN	_	Number=Sing	5	conj	_	_
10	prapembayaran	bayar	NOUN	_	Number=Sing	9	nmod	_	SpaceAfter=No
11	?	?	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 acl:relcl	color:blue
1	Pastor	Pastor	PROPN	_	_	8	nsubj	_	_
2	Heinrich	Heinrich	PROPN	_	_	1	flat:name	_	_
3	Kramer	Kramer	PROPN	_	_	1	flat:name	_	_
4	yang	yang	PRON	_	PronType=Rel	5	nsubj	_	_
5	berkebangsaan	bangsa	VERB	_	Mood=Ind|Voice=Act	1	acl:relcl	_	_
6	Dominika	Dominika	PROPN	_	_	5	obl	_	_
7	adalah	adalah	AUX	_	_	8	cop	_	_
8	asisten	asisten	NOUN	_	Number=Sing	0	root	_	_
9	Uskup	Uskup	PROPN	_	_	8	nmod	_	_
10	Agung	Agung	PROPN	_	_	9	flat:name	_	_
11	Salzburg	Salzburg	PROPN	_	_	9	flat:name	_	SpaceAfter=No
12	.	.	PUNCT	_	_	8	punct	_	_

~~~


