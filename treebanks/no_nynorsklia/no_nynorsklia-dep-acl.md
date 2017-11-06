---
layout: base
title:  'Statistics of acl in UD_Norwegian-NynorskLIA'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-NynorskLIA: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="no_nynorsklia-dep-acl-relcl.html">acl:relcl</a></tt>.

17 nodes (0%) are attached to their parents as `acl`.

17 instances of `acl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.23529411764706.

The following 5 pairs of parts of speech are connected with `acl`: <tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt> (11; 65% instances), <tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt>-<tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt> (3; 18% instances), <tt><a href="no_nynorsklia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt> (1; 6% instances), <tt><a href="no_nynorsklia-pos-DET.html">DET</a></tt>-<tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt> (1; 6% instances), <tt><a href="no_nynorsklia-pos-NUM.html">NUM</a></tt>-<tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 acl	color:blue
1	femtiliteren	femtiliter	NOUN	_	Definite=Def|Gender=Masc|Number=Sing	0	root	_	_
2	for	for	ADP	_	_	4	mark	_	_
3	å	å	PART	_	_	4	mark	_	_
4	køyre	køyre	VERB	_	VerbForm=Inf	1	acl	_	_
5	mjølka	mjølk	NOUN	_	Definite=Def|Gender=Fem|Number=Sing	4	obj	_	_
6	.	$.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 acl	color:blue
1	nei	nei	INTJ	_	_	3	discourse	_	_
2	eg	eg	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
3	hadde	ha	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
4	da	da	ADV	_	_	3	advmod	_	_
5	noko	noko	PRON	_	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Ind,Prs	3	obj	_	_
6	å	å	PART	_	_	7	mark	_	_
7	gjere	gjere	VERB	_	VerbForm=Inf	5	acl	_	_
8	lell	lell	ADV	_	_	3	advmod	_	_
9	.	$.	PUNCT	_	_	3	punct	_	_

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


