---
layout: base
title:  'Statistics of conj in UD_Mbya_Guarani-Thomas'
udver: '2'
---

## Treebank Statistics: UD_Mbya_Guarani-Thomas: Relations: `conj`

This relation is universal.

63 nodes (5%) are attached to their parents as `conj`.

63 instances of `conj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.68253968253968.

The following 8 pairs of parts of speech are connected with `conj`: <tt><a href="gun_thomas-pos-VERB.html">VERB</a></tt>-<tt><a href="gun_thomas-pos-VERB.html">VERB</a></tt> (44; 70% instances), <tt><a href="gun_thomas-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gun_thomas-pos-NOUN.html">NOUN</a></tt> (12; 19% instances), <tt><a href="gun_thomas-pos-PRON.html">PRON</a></tt>-<tt><a href="gun_thomas-pos-NOUN.html">NOUN</a></tt> (2; 3% instances), <tt><a href="gun_thomas-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gun_thomas-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="gun_thomas-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gun_thomas-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="gun_thomas-pos-VERB.html">VERB</a></tt>-<tt><a href="gun_thomas-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="gun_thomas-pos-VERB.html">VERB</a></tt>-<tt><a href="gun_thomas-pos-AUX.html">AUX</a></tt> (1; 2% instances), <tt><a href="gun_thomas-pos-VERB.html">VERB</a></tt>-<tt><a href="gun_thomas-pos-NOUN.html">NOUN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 conj	color:blue
1	Ha'e'i	ha'e	CCONJ	coordconn	_	3	cc	_	and-=DIM
2	ichyrã	chy	NOUN	n	_	3	nsubj	_	B3-mother-FUT
3	ou	u	VERB	vi:a	Mood=Ind|Person[subj]=3|Subcat=Intr|VerbForm=Fin	0	root	_	A3-come
4	,	,	PUNCT	punct	_	9	punct	_	_
5	ha'e	ha'e	PRON	pro	Person=3|PronType=Prs	9	nsubj	_	3
6	neĩ	neĩ	PART	focprt	_	9	dep:mod	_	not.even
7	rã	rã	PART	quantprt	_	6	dep:mod	_	FC
8	teri	teri	PART	focprt	_	9	dep:mod	_	still
9	oiko	iko	VERB	vi:a	Mood=Ind|Person[subj]=3|Subcat=Intr|VerbForm=Fin	3	conj	_	A3-live
10	.	.	PUNCT	punct	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 conj	color:blue
1	Porque	porque	CCONJ	coordconn	_	7	cc	_	because
2	ore	ore	PRON	pro	Clusivity=Ex|Number=Plur|Person=1|PronType=Prs	7	obj	_	1.PL.EXCL
3	upecha	upecha	ADV	dem	_	7	advmod	_	like.this
4	orechy	chy	NOUN	n	Clusivity[psor]=Ex|Number[psor]=Plur	7	nsubj	_	B1.PL.EXCL-mother
5	,	,	PUNCT	punct	_	6	punct	_	_
6	orejaryi	jaryi	NOUN	n	Clusivity[psor]=Ex|Number[psor]=Plur	4	conj	_	B1.PL.EXCL-grandmother
7	orereroayvu	eroayvu	VERB	vt	Clusivity[obj]=Ex|Mood=Ind|Person[obj]=1|Subcat=Tran|VerbForm=Fin	0	root	_	B1.PL.EXCL-R-COM-speak
8	va'ekue	va'e	SCONJ	rel	_	7	mark	_	REL-PAST
9	.	.	PUNCT	punct	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 conj	color:blue
1	Tupã	Tupã	PROPN	nprop	_	2	nsubj	_	Tupã
2	ojapo	apo	VERB	vt	Mood=Ind|Person[subj]=3|Subcat=Tran|VerbForm=Fin	0	root	_	A3-B3-do
3	va'ekue	va'e	SCONJ	rel	_	2	mark	_	REL-PAST
4	upea	upea	PRON	dem	PronType=Dem	2	obj	_	DEM
5	,	,	PUNCT	punct	_	6	punct	_	_
6	avachi	avachi	NOUN	n	_	4	conj	_	corn
7	ha'e	ha'e	CCONJ	coordconn	_	6	cc	_	and
8	avi	avi	PART	focprt	_	6	dep:mod	_	also
9	.	.	PUNCT	punct	_	6	punct	_	_

~~~


