---
layout: base
title:  'Statistics of parataxis in UD_Indonesian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-PUD: Relations: `parataxis`

This relation is universal.

114 nodes (1%) are attached to their parents as `parataxis`.

110 instances of `parataxis` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 10.8684210526316.

The following 11 pairs of parts of speech are connected with `parataxis`: <tt><a href="id_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="id_pud-pos-VERB.html">VERB</a></tt> (69; 61% instances), <tt><a href="id_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt> (14; 12% instances), <tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_pud-pos-VERB.html">VERB</a></tt> (9; 8% instances), <tt><a href="id_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_pud-pos-VERB.html">VERB</a></tt> (7; 6% instances), <tt><a href="id_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="id_pud-pos-ADJ.html">ADJ</a></tt> (6; 5% instances), <tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt> (3; 3% instances), <tt><a href="id_pud-pos-SYM.html">SYM</a></tt>-<tt><a href="id_pud-pos-ADJ.html">ADJ</a></tt> (2; 2% instances), <tt><a href="id_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_pud-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="id_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="id_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="id_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="id_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="id_pud-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 parataxis	color:blue
1	"	"	PUNCT	_	_	4	punct	_	SpaceAfter=No
2	Suara	suara	NOUN	_	Number=Sing	4	nsubj	_	_
3	nya	nya	PRON	_	Number=Sing|Person=3|PronType=Prs	2	nmod:poss	_	_
4	menjangkau	jangkau	VERB	_	Mood=Ind|Voice=Act	0	root	_	_
5	seluruh	seluruh	DET	_	PronType=Tot	6	det	_	_
6	dunia	dunia	NOUN	_	Number=Sing	4	obj	_	SpaceAfter=No
7	,	,	PUNCT	_	_	4	punct	_	SpaceAfter=No
8	"	"	PUNCT	_	_	4	punct	_	_
9	kata	kata	VERB	_	Mood=Ind|Voice=Act	4	parataxis	_	_
10	Leive	Leive	PROPN	_	_	9	nsubj	_	SpaceAfter=No
11	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 14 parataxis	color:blue
1	Federico	Federico	PROPN	_	_	4	nsubj	_	_
2	Fellini	Fellini	PROPN	_	_	1	flat:name	_	_
3	pernah	pernah	ADV	_	_	4	advmod	_	_
4	mengatakan	kata	VERB	_	Mood=Ind|Voice=Act	0	root	_	SpaceAfter=No
5	:	:	PUNCT	_	_	14	punct	_	_
6	"	"	PUNCT	_	_	14	punct	_	SpaceAfter=No
7	Seperti	seperti	ADP	_	_	8	case	_	_
8	badut	badut	NOUN	_	Number=Sing	14	nmod	_	_
9	bagi	bagi	ADP	_	_	10	case	_	_
10	kemanusiaan	manusia	NOUN	_	Number=Sing	8	nmod	_	SpaceAfter=No
11	,	,	PUNCT	_	_	14	punct	_	_
12	demikian	demikian	PRON	_	PronType=Dem	14	nmod	_	_
13	lah	lah	PART	_	_	12	advmod:emph	_	_
14	bayangan	bayang	NOUN	_	Number=Sing	4	parataxis	_	_
15	bagi	bagi	ADP	_	_	16	case	_	_
16	manusia	manusia	NOUN	_	Number=Sing	14	nmod	_	SpaceAfter=No
17	"	"	PUNCT	_	_	14	punct	_	SpaceAfter=No
18	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 13 parataxis	color:blue
1	Penangkapan	tangkap	NOUN	_	Number=Sing	6	nsubj	_	_
2	saat	saat	NOUN	_	Number=Sing	1	nmod:tmod	_	_
3	ini	ini	DET	_	PronType=Dem	2	det	_	_
4	adalah	adalah	AUX	_	_	6	cop	_	_
5	"	"	PUNCT	_	_	6	punct	_	SpaceAfter=No
6	kelanjutan	lanjut	NOUN	_	Number=Sing	0	root	_	_
7	dari	dari	ADP	_	_	8	case	_	_
8	permainan	main	NOUN	_	Number=Sing	6	nmod	_	_
9	terhadap	hadap	ADP	_	_	10	case	_	_
10	kami	kami	PRON	_	Clusivity=Ex|Number=Plur|Person=1|PronType=Prs	8	nmod	_	SpaceAfter=No
11	,	,	PUNCT	_	_	6	punct	_	SpaceAfter=No
12	"	"	PUNCT	_	_	6	punct	_	_
13	ujar	ujar	VERB	_	Mood=Ind|Voice=Act	6	parataxis	_	_
14	Dündar	Dündar	PROPN	_	_	13	nsubj	_	SpaceAfter=No
15	.	.	PUNCT	_	_	6	punct	_	_

~~~


