---
layout: base
title:  'Statistics of acl:relcl in UD_Kadiweu-Unicamp'
udver: '2'
---

## Treebank Statistics: UD_Kadiweu-Unicamp: Relations: `acl:relcl`

This relation is a language-specific subtype of .

10 nodes (3%) are attached to their parents as `acl:relcl`.

10 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.

The following 3 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="kbc_unicamp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kbc_unicamp-pos-NOUN.html">NOUN</a></tt> (4; 40% instances), <tt><a href="kbc_unicamp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kbc_unicamp-pos-ADJ.html">ADJ</a></tt> (3; 30% instances), <tt><a href="kbc_unicamp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kbc_unicamp-pos-VERB.html">VERB</a></tt> (3; 30% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 acl:relcl	color:blue
1	eyodi	eyodi	NOUN	N$	_	0	root	_	_
2	me	me	SCONJ	C	_	1	mark	_	_
3	niganaGacanajo	niganagacanajo	NOUN	N	Gender=Masc|Number=Sing	1	acl:relcl	_	SpaceAfter=No
4	.	.	PUNCT	PUNCT	_	1	punct	_	SpaceAfter=No|TokenRange=23:24

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 acl:relcl	color:blue
1	iGeladi	Geladi	NOUN	N$	Gender=Masc|Number=Sing|Number[psor]=Sing|Person[psor]=1	2	nsubj	_	_
2	idei	dei	VERB	VB	Mood=Ind|Person[erg]=3|VerbForm=Fin	0	root	_	_
3	naigi	naigi	NOUN	N	Gender=Masc|Number=Sing	2	obj	_	_
4	ane	napioi	PRON	WPRO	PronType=Rel	5	nsubj	_	_
5	napioi	napioi	ADJ	ADJ	_	3	acl:relcl	_	_
6	.	.	PUNCT	PUNCT	_	2	punct	_	SpaceAfter=No|TokenRange=28:29

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 acl:relcl	color:blue
1	Etogo	etogo	NOUN	N	Gender=Fem|Number=Sing	5	dislocated	_	_
2	ane	ane	PRON	WPRO	PronType=Rel	3	nsubj	_	_
3	iwaGadi	waGadi	VERB	VB	Mood=Ind|Person=3|VerbForm=Fin	1	acl:relcl	_	_
4	aG	aG	PART	NEG	Polarity=Neg	5	advmod	_	_
5	dakake	dakake	ADJ	ADJ	_	0	root	_	_
6	lojedi	ojedi	NOUN	N$	Gender=Masc|Number=Sing|Person[psor]=3	5	nsubj	_	Lemma=loojedi|SpaceAfter=No
7	.	.	PUNCT	PUNCT	_	5	punct	_	SpaceAfter=No|TokenRange=31:32

~~~


