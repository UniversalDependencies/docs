---
layout: base
title:  'Statistics of csubj in UD_English-GENTLE'
udver: '2'
---

## Treebank Statistics: UD_English-GENTLE: Relations: `csubj`

This relation is universal.
There are 2 language-specific subtypes of `csubj`: <tt><a href="en_gentle-dep-csubj-outer.html">csubj:outer</a></tt>, <tt><a href="en_gentle-dep-csubj-pass.html">csubj:pass</a></tt>.

14 nodes (0%) are attached to their parents as `csubj`.

12 instances of `csubj` (86%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.07142857142857.

The following 6 pairs of parts of speech are connected with `csubj`: <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-ADJ.html">ADJ</a></tt> (5; 36% instances), <tt><a href="en_gentle-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gentle-pos-VERB.html">VERB</a></tt> (3; 21% instances), <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-VERB.html">VERB</a></tt> (3; 21% instances), <tt><a href="en_gentle-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gentle-pos-SYM.html">SYM</a></tt> (1; 7% instances), <tt><a href="en_gentle-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gentle-pos-VERB.html">VERB</a></tt> (1; 7% instances), <tt><a href="en_gentle-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gentle-pos-VERB.html">VERB</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 14 csubj	color:blue
1	Since	since	SCONJ	IN	_	5	mark	5:mark	Discourse=organization-preparation:75->85:3:_|SpaceAfter=No
2	:	:	PUNCT	:	_	1	punct	1:punct	_
3	AC2	AC2	NOUN	NN	Number=Sing	5	nsubj	5:nsubj	Discourse=context-background:76->78:1:_|Entity=(18-abstract-giv:inact-cf1-1-coref)
4	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	5:cop	_
5	commensurable	commensurable	ADJ	JJ	Degree=Pos	9	advcl	9:advcl:since	MSeg=commensur-able|XML=<ref target:::"https://proofwiki.org/wiki/Definition:Commensurable"></ref>
6	with	with	ADP	IN	_	7	case	7:case	_
7	CB2	CB2	NOUN	NN	Number=Sing	5	obl	5:obl:with	Entity=(69-abstract-giv:inact-cf3-1-coref)
8	it	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	9	expl	9:expl	Discourse=attribution-positive:77->78:0:_|Entity=(70-abstract-new-cf5-1-cata)
9	follows	follow	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	MSeg=follow-s
10	that	that	SCONJ	IN	_	14	mark	14:mark	Discourse=context-background:78->80:3:_|Entity=(70-abstract-acc:com-cf5-5-coref|SpaceAfter=No
11	:	:	PUNCT	:	_	10	punct	10:punct	_
12	DH	DH	NOUN	NN	Abbr=Yes|Number=Sing	14	nsubj	14:nsubj	Entity=(22-abstract-giv:inact-cf2-1-coref)
13	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	cop	14:cop	_
14	commensurable	commensurable	ADJ	JJ	Degree=Pos	9	csubj	9:csubj	MSeg=commensur-able|XML=<ref target:::"https://proofwiki.org/wiki/Definition:Commensurable"></ref>
15	with	with	ADP	IN	_	16	case	16:case	_
16	KL	KL	NOUN	NN	Number=Sing	14	obl	14:obl:with	Entity=(23-abstract-giv:inact-cf4-1-coref)70)|SpaceAfter=No
17	.	.	PUNCT	.	_	9	punct	9:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 csubj	color:blue
1	It	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	5	expl	5:expl	Discourse=explanation-motivation:90->88:1:_|Entity=(105-abstract-new-cf2-1-sgl)
2	's	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	5:cop	_
3	not	not	PART	RB	Polarity=Neg	5	advmod	5:advmod	_
4	too	too	ADV	RB	Degree=Pos	5	advmod	5:advmod	_
5	late	late	ADJ	JJ	Degree=Pos	0	root	0:root	_
6	to	to	PART	TO	_	7	mark	7:mark	Discourse=purpose-goal:91->90:0:_
7	change	change	VERB	VB	VerbForm=Inf	5	csubj	5:csubj	_
8	your	your	PRON	PRP$	Case=Gen|Number=Sing|Person=2|Poss=Yes|PronType=Prs	9	nmod:poss	9:nmod:poss	Entity=(106-abstract-new-cf3-2-sgl(1-person-giv:act-cf1*-1-ana)
9	mind	mind	NOUN	NN	Number=Sing	7	obj	7:obj	Entity=106)|SpaceAfter=No
10	.	.	PUNCT	.	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 csubj	color:blue
1	It	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	2	expl	2:expl	Discourse=organization-preparation:67->71:2:_|Entity=(63-abstract-new-cf2-1-sgl)
2	remains	remain	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	MSeg=remain-s
3	to	to	PART	TO	_	5	mark	5:mark	_
4	be	be	AUX	VB	VerbForm=Inf	5	aux:pass	5:aux:pass	_
5	proved	prove	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	2	csubj	2:csubj	_
6	that	that	SCONJ	IN	_	13	mark	13:mark	_
7	DG	DG	NOUN	NN	Number=Sing	13	nsubj	13:nsubj	Entity=(12-abstract-giv:act-cf1*-1-coref)
8	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	cop	13:cop	_
9	a	a	DET	DT	Definite=Ind|PronType=Art	13	det	13:det	Entity=(12-abstract-giv:act-cf1*-5-coref
10	third	third	ADJ	JJ	Degree=Pos|NumForm=Word|NumType=Ord	11	amod	11:amod	XML=<ref target:::"https://proofwiki.org/wiki/Definition:Third_Binomial">
11	binomial	binomial	NOUN	NN	Number=Sing	13	compound	13:compound	XML=</ref>
12	straight	straight	ADJ	JJ	Degree=Pos	13	amod	13:amod	XML=<ref target:::"https://proofwiki.org/wiki/Definition:Line_Segment">
13	line	line	NOUN	NN	Number=Sing	5	csubj:pass	5:csubj:pass	Entity=12)|SpaceAfter=No|XML=</ref>
14	.	.	PUNCT	.	_	2	punct	2:punct	_

~~~


