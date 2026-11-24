---
layout: base
title:  'Statistics of acl in UD_Old_Occitan-CorAG'
udver: '2'
---

## Treebank Statistics: UD_Old_Occitan-CorAG: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="pro_corag-dep-acl-relcl.html">acl:relcl</a></tt>.

470 nodes (1%) are attached to their parents as `acl`.

467 instances of `acl` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.26382978723404.

The following 12 pairs of parts of speech are connected with `acl`: <tt><a href="pro_corag-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pro_corag-pos-VERB.html">VERB</a></tt> (413; 88% instances), <tt><a href="pro_corag-pos-PRON.html">PRON</a></tt>-<tt><a href="pro_corag-pos-VERB.html">VERB</a></tt> (27; 6% instances), <tt><a href="pro_corag-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pro_corag-pos-NOUN.html">NOUN</a></tt> (13; 3% instances), <tt><a href="pro_corag-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pro_corag-pos-ADJ.html">ADJ</a></tt> (6; 1% instances), <tt><a href="pro_corag-pos-ADV.html">ADV</a></tt>-<tt><a href="pro_corag-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="pro_corag-pos-NUM.html">NUM</a></tt>-<tt><a href="pro_corag-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="pro_corag-pos-PRON.html">PRON</a></tt>-<tt><a href="pro_corag-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="pro_corag-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pro_corag-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="pro_corag-pos-ADV.html">ADV</a></tt>-<tt><a href="pro_corag-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="pro_corag-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pro_corag-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="pro_corag-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pro_corag-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="pro_corag-pos-VERB.html">VERB</a></tt>-<tt><a href="pro_corag-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 acl	color:blue
1	mes	_	CCONJ	_	_	2	cc	_	_
2	reserueran	_	VERB	_	Number=Plur|Person=3|VerbForm=Fin	0	root	_	_
3	las	_	DET	_	_	4	det	_	_
4	raisons	_	NOUN	_	_	2	obj	_	_
5	à	_	ADP	_	_	6	mark	_	_
6	diser	_	VERB	_	VerbForm=Inf	4	acl	_	_
7	quand	_	SCONJ	_	_	8	mark	_	_
8	viendra	_	VERB	_	Number=Sing|Person=3|VerbForm=Fin	2	advcl	_	_
9	lor	_	DET	_	_	10	det	_	_
10	opiniō	_	NOUN	_	_	8	nsubj	_	_
11	.	_	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 acl	color:blue
1	E	_	CCONJ	_	_	5	cc	_	_
2	no	_	ADV	_	Polarity=Neg	5	advmod	_	_
3	tant	_	ADV	_	_	5	advmod	_	_
4	solament	_	ADV	_	_	5	advmod	_	_
5	fay	_	VERB	_	Number=Sing|Person=3|VerbForm=Fin	0	root	_	_
6	benjanssa	_	NOUN	_	_	5	obj	_	_
7	de-	_	ADP	_	_	8	case	_	_
8	-los	_	PRON	_	Gender=Masc|Number=Plur|Person=3|PronType=Prs	5	obl	_	_
9	perpetrant	_	VERB	_	Gender=Masc|Number=Sing|Tense=Pres|VerbForm=Part	8	acl	_	_
10	tals	_	DET	_	_	11	det	_	_
11	causas	_	NOUN	_	_	9	obj	_	SpaceAfter=No
12	,	_	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 10 acl	color:blue
1	Mes	_	CCONJ	_	_	14	cc	_	_
2	de	_	ADP	_	_	5	case	_	_
3	las	_	DET	_	_	5	det	_	_
4	autres	_	ADJ	_	_	5	amod	_	_
5	causes	_	NOUN	_	_	14	obl	_	_
6	reaus	_	ADJ	_	_	5	amod	_	SpaceAfter=No
7	,	_	PUNCT	_	_	5	punct	_	_
8	cum	_	SCONJ	_	_	10	mark	_	_
9	son	_	AUX	_	Number=Plur|Person=3|VerbForm=Fin	10	cop	_	_
10	terres	_	NOUN	_	_	5	acl	_	_
11	et	_	CCONJ	_	_	12	cc	_	_
12	heretadges	_	NOUN	_	_	10	conj	_	SpaceAfter=No
13	,	_	PUNCT	_	_	10	punct	_	_
14	conexen	_	VERB	_	Number=Plur|Person=3|VerbForm=Fin	0	root	_	_
15	cavers	_	NOUN	_	_	14	nsubj	_	_
16	et	_	CCONJ	_	_	17	cc	_	_
17	bayles	_	NOUN	_	_	15	conj	_	_

~~~


