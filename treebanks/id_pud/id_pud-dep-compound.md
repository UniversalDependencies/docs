---
layout: base
title:  'Statistics of compound in UD_Indonesian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-PUD: Relations: `compound`

This relation is universal.
There are 1 language-specific subtypes of `compound`: <tt><a href="id_pud-dep-compound-a.html">compound:a</a></tt>.

25 nodes (0%) are attached to their parents as `compound`.

25 instances of `compound` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `compound`: <tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt> (24; 96% instances), <tt><a href="id_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="id_pud-pos-ADJ.html">ADJ</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 compound	color:blue
1	Penjelasan	jelas	NOUN	_	Number=Sing	6	nsubj	_	_
2	tentang	tentang	ADP	_	_	3	case	_	_
3	asal	asal	NOUN	_	Number=Sing	1	nmod	_	_
4	usul	usul	NOUN	_	Number=Sing	3	compound	_	_
5	musik	musik	NOUN	_	Number=Sing	3	nmod	_	_
6	bergantung	gantung	VERB	_	Mood=Ind|Voice=Act	0	root	_	_
7	pada	pada	SCONJ	_	_	10	mark	_	_
8	bagaimana	bagaimana	ADV	_	PronType=Rel	10	advmod	_	_
9	musik	musik	NOUN	_	Number=Sing	10	nsubj:pass	_	_
10	didefinisikan	definisi	VERB	_	Mood=Ind|Voice=Pass	6	xcomp	_	SpaceAfter=No
11	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 13 compound	color:blue
1	Orang	orang	NOUN	_	Number=Sing	3	nsubj	_	_
2	tidak	tidak	PART	_	Polarity=Neg	3	advmod	_	_
3	tahu	tahu	VERB	_	Mood=Ind|Voice=Act	0	root	_	_
4	dengan	dengan	ADP	_	_	5	case	_	_
5	cara	cara	NOUN	_	Number=Sing	12	obl	_	_
6	apa	apa	PRON	_	PronType=Rel	5	nmod	_	_
7	kedua	dua	NUM	_	NumType=Card	8	nummod	_	_
8	penulis	tulis	NOUN	_	Number=Sing	12	nsubj	_	_
9	drama	drama	NOUN	_	Number=Sing	8	nmod	_	_
10	itu	itu	DET	_	PronType=Dem	8	det	_	_
11	telah	telah	AUX	_	_	12	aux	_	_
12	bekerja	kerja	VERB	_	Mood=Ind|Voice=Act	3	advcl	_	_
13	sama	sama	ADJ	_	_	12	compound	_	SpaceAfter=No
14	.	.	PUNCT	_	_	3	punct	_	_

~~~


