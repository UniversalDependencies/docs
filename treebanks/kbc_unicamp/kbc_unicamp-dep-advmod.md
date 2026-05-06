---
layout: base
title:  'Statistics of advmod in UD_Kadiweu-Unicamp'
udver: '2'
---

## Treebank Statistics: UD_Kadiweu-Unicamp: Relations: `advmod`

This relation is universal.

11 nodes (3%) are attached to their parents as `advmod`.

9 instances of `advmod` (82%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.27272727272727.

The following 5 pairs of parts of speech are connected with `advmod`: <tt><a href="kbc_unicamp-pos-VERB.html">VERB</a></tt>-<tt><a href="kbc_unicamp-pos-ADV.html">ADV</a></tt> (4; 36% instances), <tt><a href="kbc_unicamp-pos-VERB.html">VERB</a></tt>-<tt><a href="kbc_unicamp-pos-PART.html">PART</a></tt> (3; 27% instances), <tt><a href="kbc_unicamp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kbc_unicamp-pos-PART.html">PART</a></tt> (2; 18% instances), <tt><a href="kbc_unicamp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kbc_unicamp-pos-ADV.html">ADV</a></tt> (1; 9% instances), <tt><a href="kbc_unicamp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kbc_unicamp-pos-PART.html">PART</a></tt> (1; 9% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 advmod	color:blue
1	ajo	ijo	DET	D	Gender=Fem|Number=Sing|PronType=Dem	2	det	_	TokenRange=0:3
2	niwatece	watece	NOUN	N$	Gender=Fem|Number=Sing	3	nsubj	_	Gloss=canoe|MSeg=ni-watece|MGloss=ANT-canoe|TokenRange=4:12
3	etadi	etidi	VERB	VB	Gender=Fem|Person=3	0	root	_	TokenRange=13:18
4	digoida	digoida	ADV	ADV	AdvType=Loc|PronType=Dem	3	advmod	_	SpaceAfter=No|TokenRange=19:26
5	.	.	PUNCT	PUNCT	_	3	punct	_	SpaceAfter=No|TokenRange=26:27

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 advmod	color:blue
1	liGeladi	Geladi	NOUN	N$	Gender=Masc|Number=Sing|Person[psor]=3	4	nsubj	_	TokenRange=0:8
2	Maria	maria	PROPN	NPR	_	1	nmod:poss	_	TokenRange=9:14
3	aG	aG	PART	NEG	Polarity=Neg	4	advmod	_	_
4	ipegetege	pege	VERB	VBAPL	Gender[obj]=Fem|Mood=Ind|Person[erg]=3|Person[obj]=3|VerbForm=Fin|Voice=Appl	0	root	_	_
5	.	.	PUNCT	PUNCT	_	4	punct	_	SpaceAfter=No|TokenRange=26:27

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 advmod	color:blue
1	Etogo	etogo	NOUN	N	Gender=Fem|Number=Sing	5	dislocated	_	_
2	ane	ane	PRON	WPRO	PronType=Rel	3	nsubj	_	_
3	iwaGadi	waGadi	VERB	VB	Mood=Ind|Person=3|VerbForm=Fin	1	acl:relcl	_	_
4	aG	aG	PART	NEG	Polarity=Neg	5	advmod	_	_
5	dakake	dakake	ADJ	ADJ	_	0	root	_	_
6	lojedi	ojedi	NOUN	N$	Gender=Masc|Number=Sing|Person[psor]=3	5	nsubj	_	Lemma=loojedi|SpaceAfter=No
7	.	.	PUNCT	PUNCT	_	5	punct	_	SpaceAfter=No|TokenRange=31:32

~~~


