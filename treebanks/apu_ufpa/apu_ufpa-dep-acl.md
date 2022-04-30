---
layout: base
title:  'Statistics of acl in UD_Apurina-UFPA'
udver: '2'
---

## Treebank Statistics: UD_Apurina-UFPA: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="apu_ufpa-dep-acl-relcl.html">acl:relcl</a></tt>.

10 nodes (1%) are attached to their parents as `acl`.

5 instances of `acl` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.2.

The following 3 pairs of parts of speech are connected with `acl`: <tt><a href="apu_ufpa-pos-NOUN.html">NOUN</a></tt>-<tt><a href="apu_ufpa-pos-VERB.html">VERB</a></tt> (7; 70% instances), <tt><a href="apu_ufpa-pos-VERB.html">VERB</a></tt>-<tt><a href="apu_ufpa-pos-VERB.html">VERB</a></tt> (2; 20% instances), <tt><a href="apu_ufpa-pos-NOUN.html">NOUN</a></tt>-<tt><a href="apu_ufpa-pos-DET.html">DET</a></tt> (1; 10% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 acl	color:blue
1	Uwa	uwa	PRON	Pron	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	gloss[pt]=3SG.F
2	ũtanyrykata	tanyry	NOUN	N	Case=Com|Gender=Masc|Gender[psor]=Fem|Number=Sing|Number[psor]=Sing|Person[psor]=3	1	conj	_	gloss[pt]=3SG.F-esposo.de-ASSOC
3	awa	awa	VERB	XPOS=ter	_	0	root	_	gloss[pt]=ter
4	ũaapuku	awapukutxi	NOUN	N	Case=Nom|Gender=Masc|Gender[psor]=Fem|Number=Sing|Number[psor]=Sing|Possessed=Yes	3	obj	_	gloss[pt]=3SG.F-casa.de
5	'amarekatãĩ	'amarekatãĩ	VERB	V	_	4	acl	_	gloss[pt]=?ser.grande|SpaceAfter=No
6	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 acl	color:blue
1	Txamary	txamary	CCONJ	XPOS=AUX-FRUST	Gender[obj]=Masc|Number[obj]=Sing|Person[obj]=3	4	cc	_	gloss[pt]=AUX-FRUST-3SG.M.O
2	nynuwa	nynuwa	PRON	Pron	Case=Nom|Number=Plur|Person=3|PronType=Prs	4	nsubj	_	gloss[pt]=3PL
3	kuna	kuna	PART	XPOS=não	_	4	advmod:neg	_	gloss[pt]=não
4	kadinhẽrutene	dinhẽru	NOUN	XPOS=ATRIB-dinheiro-POSSD-3PL	_	0	root	_	gloss[pt]=ATRIB-dinheiro-POSSD-3PL|SpaceAfter=No
5	,	,	PUNCT	_	_	10	punct	_	_
6	txamary	txamary	CCONJ	XPOS=AUX-FRUSTR	Gender[obj]=Masc|Number[obj]=Sing|Person[obj]=3	10	cc	_	gloss[pt]=AUX-FRUSTR-3SG.M.O
7	nynuwa	nynuwa	PRON	Pron	Case=Nom|Number=Plur|Person=3|PronType=Prs	10	nsubj	_	gloss[pt]=3PL
8	kaiãapukury	kaiãapukury	VERB	XPOS=muito-DISTR-M	_	10	acl	_	gloss[pt]=muito-DISTR-M
9	nhipukury	nhipukury	VERB	XPOS=comida	Possessed=No	10	obj	_	gloss[pt]=comida-N.POSSD
10	awa	awa	VERB	V	_	4	conj	_	gloss[pt]=ter|SpaceAfter=No
11	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 acl	color:blue
1	Kaiãapukury	kaiãapuku	DET	Det	_	2	acl	_	gloss[pt]=muito-DISTR-M
2	apanakyny	apanakyny	NOUN	XPOS=resto	_	3	nsubj	_	gloss[pt]=resto
3	awa	awa	VERB	XPOS=existir	_	0	root	_	gloss[pt]=existir|SpaceAfter=No
4	.	.	PUNCT	_	_	3	punct	_	_

~~~


