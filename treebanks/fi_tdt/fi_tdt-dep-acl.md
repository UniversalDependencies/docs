---
layout: base
title:  'Statistics of acl in UD_Finnish-TDT'
udver: '2'
---

## Treebank Statistics: UD_Finnish-TDT: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="fi_tdt-dep-acl-relcl.html">acl:relcl</a></tt>.

3637 nodes (2%) are attached to their parents as `acl`.

3218 instances of `acl` (88%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.50426175419302.

The following 11 pairs of parts of speech are connected with `acl`: <tt><a href="fi_tdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt> (3387; 93% instances), <tt><a href="fi_tdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt> (185; 5% instances), <tt><a href="fi_tdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt> (25; 1% instances), <tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt> (21; 1% instances), <tt><a href="fi_tdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_tdt-pos-ADV.html">ADV</a></tt> (6; 0% instances), <tt><a href="fi_tdt-pos-ADV.html">ADV</a></tt>-<tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt> (4; 0% instances), <tt><a href="fi_tdt-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="fi_tdt-pos-NUM.html">NUM</a></tt>-<tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="fi_tdt-pos-SYM.html">SYM</a></tt>-<tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="fi_tdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_tdt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="fi_tdt-pos-X.html">X</a></tt>-<tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 acl	color:blue
1	Jumituin	jumittua	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	heti	heti	ADV	Adv	_	1	advmod	1:advmod	_
3	ensimmäiselle	ensimmäinen	ADJ	Num	Case=All|Derivation=Inen|Number=Sing|NumType=Ord	4	amod	4:amod	_
4	näkemälleni	nähdä	VERB	V	Case=All|Number=Sing|Number[psor]=Sing|PartForm=Agt|Person[psor]=1|VerbForm=Part|Voice=Act	5	acl	5:acl	_
5	seinälle	seinä	NOUN	N	Case=All|Number=Sing	1	obl	1:obl	SpaceAfter=No
6	.	.	PUNCT	Punct	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 acl	color:blue
1	Suurin	suuri	ADJ	A	Case=Nom|Degree=Sup|Number=Sing	2	amod	2:amod	_
2	pettymys	pettymys	NOUN	N	Case=Nom|Number=Sing	6	nsubj:cop	6:nsubj:cop	_
3	oli	olla	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	6	cop	6:cop	_
4	alkulohkoonsa	alku#lohko	NOUN	N	Case=Ill|Number=Sing|Person[psor]=3	5	obl	5:obl	_
5	jäänyt	jäädä	VERB	V	Case=Nom|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Act	6	acl	6:acl	_
6	Espanja	Espanja	PROPN	N	Case=Nom|Number=Sing	0	root	0:root	SpaceAfter=No
7	.	.	PUNCT	Punct	_	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 acl	color:blue
1	Se	se	PRON	Pron	Case=Nom|Number=Sing|PronType=Dem	3	det	3:det|5:det	_
2	vähäinenkin	vähäinen	ADJ	A	Case=Nom|Clitic=Kin|Degree=Pos|Derivation=Inen|Number=Sing	3	amod	3:amod|5:amod	_
3	seksi	seksi	NOUN	N	Case=Nom|Number=Sing	6	nsubj	6:nsubj	_
4	ja	ja	CCONJ	C	_	5	cc	5:cc	_
5	läheisyys	läheisyys	NOUN	N	Case=Nom|Number=Sing	3	conj	3:conj|6:nsubj	_
6	tulevat	tulla	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
7	vaikeammiksi	vaikea	ADJ	A	Case=Tra|Degree=Cmp|Number=Plur	6	xcomp	6:xcomp	_
8	toteuttaa	toteuttaa	VERB	V	InfForm=1|Number=Sing|VerbForm=Inf|Voice=Act	7	acl	7:acl	SpaceAfter=No
9	.	.	PUNCT	Punct	_	6	punct	6:punct	_

~~~


