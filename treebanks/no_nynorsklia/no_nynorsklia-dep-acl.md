---
layout: base
title:  'Statistics of acl in UD_Norwegian-NynorskLIA'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-NynorskLIA: Relations: `acl`

This relation is universal.
There are 2 language-specific subtypes of `acl`: <tt><a href="no_nynorsklia-dep-acl-cleft.html">acl:cleft</a></tt>, <tt><a href="no_nynorsklia-dep-acl-relcl.html">acl:relcl</a></tt>.

17 nodes (0%) are attached to their parents as `acl`.

17 instances of `acl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.23529411764706.

The following 5 pairs of parts of speech are connected with `acl`: <tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt> (11; 65% instances), <tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt>-<tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt> (3; 18% instances), <tt><a href="no_nynorsklia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt> (1; 6% instances), <tt><a href="no_nynorsklia-pos-DET.html">DET</a></tt>-<tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt> (1; 6% instances), <tt><a href="no_nynorsklia-pos-NUM.html">NUM</a></tt>-<tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 acl	color:blue
1	når	når	SCONJ	_	_	2	mark	_	_
2	dei	dei	PRON	_	Animacy=Hum|Case=Nom|Number=Plur|Person=3|PronType=Prs	4	parataxis:deletion	_	_
3	s-	s-	X	_	_	4	discourse:filler	_	_
4	var	vere	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
5	jo	jo	ADV	_	_	4	advmod	_	_
6	ingen	ingen	DET	_	Gender=Masc|Number=Sing|Polarity=Neg|PronType=Neg	8	det	_	_
7	annan	annan	DET	_	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing|PronType=Dem	8	det	_	_
8	måte	måte	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	4	nsubj	_	_
9	å	å	PART	_	_	10	mark	_	_
10	komme	komme	VERB	_	VerbForm=Inf	8	acl	_	_
11	til	til	ADP	_	_	12	case	_	_
12	byen	by	NOUN	_	Definite=Def|Gender=Masc|Number=Sing	10	obl	_	_
13	på	på	ADP	_	_	10	compound:prt	_	_
14	.	$.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 13 acl	color:blue
1	men	men	CCONJ	_	_	5	cc	_	_
2	eg	eg	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|Person=1|PronType=Prs	5	nsubj	_	_
3	var	vere	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin	5	cop	_	_
4	jo	jo	ADV	_	_	5	advmod	_	_
5	heldig	heldig	ADJ	_	Definite=Ind|Degree=Pos|Number=Sing	0	root	_	_
6	for	for	ADP	_	_	8	case	_	_
7	så	så	ADV	_	_	8	advmod	_	_
8	vidt	vid	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	5	advmod	_	_
9	for	for	CCONJ	_	_	10	cc	_	_
10	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	5	conj	_	_
11	at	at	SCONJ	_	_	13	mark	_	_
12	eg	eg	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|Person=1|PronType=Prs	13	nsubj	_	_
13	køyrde	køyre	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	10	acl	_	_
14	på	på	ADP	_	_	15	case	_	_
15	diesel	diesel	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	13	obl	_	_
16	.	$.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 acl	color:blue
1	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	expl	_	_
2	var	vere	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin	3	cop	_	_
3	hardt	hard	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	_
4	å	å	PART	_	_	5	mark	_	_
5	vere	vere	VERB	_	VerbForm=Inf	3	acl	_	_
6	sjømann	sjømann	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	5	obj	_	_
7	under	under	ADP	_	_	8	case	_	_
8	krigen	krig	NOUN	_	Definite=Def|Gender=Masc|Number=Sing	5	obl	_	_
9	.	$.	PUNCT	_	_	3	punct	_	_

~~~


