---
layout: base
title:  'Statistics of obl:agent in UD_Polish-LFG'
udver: '2'
---

## Treebank Statistics: UD_Polish-LFG: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="pl_lfg-dep-obl.html">obl</a></tt>.

77 nodes (0%) are attached to their parents as `obl:agent`.

75 instances of `obl:agent` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.31168831168831.

The following 3 pairs of parts of speech are connected with `obl:agent`: <tt><a href="pl_lfg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_lfg-pos-NOUN.html">NOUN</a></tt> (58; 75% instances), <tt><a href="pl_lfg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_lfg-pos-PROPN.html">PROPN</a></tt> (11; 14% instances), <tt><a href="pl_lfg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_lfg-pos-PRON.html">PRON</a></tt> (8; 10% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 obl:agent	color:blue
1	Konwojent	konwojent	NOUN	subst:sg:nom:m1	Case=Nom|Gender=Masc|Number=Sing|SubGender=Masc1	9	nsubj:pass	9:nsubj:pass	SpaceAfter=No
2	,	,	PUNCT	interp	PunctType=Comm	1	punct	1:punct	_
3	delegowany	delegować	ADJ	ppas:sg:nom:m1:imperf:aff	Aspect=Imp|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos|SubGender=Masc1|VerbForm=Part|Voice=Pass	1	acl	1:acl	_
4	przez	przez	ADP	prep:acc:nwok	AdpType=Prep|Variant=Short	5	case	5:case	Case=Acc
5	fabrykę	fabryka	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	3	obl:agent	3:obl:agent	SpaceAfter=No
6	,	,	PUNCT	interp	PunctType=Comm	1	punct	1:punct	_
7	został	zostać	AUX	praet:sg:m1:perf	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|SubGender=Masc1|Tense=Past|VerbForm=Fin|Voice=Act	9	aux:pass	9:aux:pass	_
8	już	już	PART	qub	_	9	advmod	9:advmod	_
9	obrobiony	obrobić	ADJ	ppas:sg:nom:m1:perf:aff	Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos|SubGender=Masc1|VerbForm=Part|Voice=Pass	0	root	0:root	SpaceAfter=No
10	.	.	PUNCT	interp	PunctType=Peri	9	punct	9:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 obl:agent	color:blue
1	Program	program	NOUN	subst:sg:nom:m3	Case=Nom|Gender=Masc|Number=Sing|SubGender=Masc3	3	nsubj:pass	3:nsubj:pass	_
2	jest	być	AUX	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	aux:pass	3:aux:pass	_
3	zalecany	zalecać	ADJ	ppas:sg:nom:m3:imperf:aff	Aspect=Imp|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos|SubGender=Masc3|VerbForm=Part|Voice=Pass	0	root	0:root	_
4	do	do	ADP	prep:gen	AdpType=Prep	5	case	5:case	Case=Gen
5	użytku	użytek	NOUN	subst:sg:gen:m3	Case=Gen|Gender=Masc|Number=Sing|SubGender=Masc3	3	obl	3:obl:do	_
6	szkolnego	szkolny	ADJ	adj:sg:gen:m3:pos	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|SubGender=Masc3	5	amod	5:amod	_
7	przez	przez	ADP	prep:acc:nwok	AdpType=Prep|Variant=Short	8	case	8:case	Case=Acc
8	MENiS	MENiS	PROPN	subst:sg:acc:n	Case=Acc|Gender=Neut|Number=Sing	3	obl:agent	3:obl:agent	SpaceAfter=No
9	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 obl:agent	color:blue
1	Proszę	prosić	VERB	fin:sg:pri:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
2	,	,	PUNCT	interp	PunctType=Comm	4	punct	4:punct	_
3	nie	nie	PART	qub	Polarity=Neg	4	advmod	4:advmod	_
4	podpisuj	podpisywać	VERB	impt:sg:sec:imperf	Aspect=Imp|Mood=Imp|Number=Sing|Person=2|VerbForm=Fin|Voice=Act	1	conj	1:conj	_
5	edytowanych	edytować	ADJ	ppas:pl:gen:m3:imperf:aff	Aspect=Imp|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos|SubGender=Masc3|VerbForm=Part|Voice=Pass	8	acl	8:acl	_
6	przez	przez	ADP	prep:acc:nwok	AdpType=Prep|Variant=Short	7	case	7:case	Case=Acc
7	Ciebie	ty	PRON	ppron12:sg:acc:m1:sec:akc	Case=Acc|Gender=Masc|Number=Sing|Person=2|PronType=Prs|SubGender=Masc1|Variant=Long	5	obl:agent	5:obl:agent	_
8	artykułów	artykuł	NOUN	subst:pl:gen:m3	Case=Gen|Gender=Masc|Number=Plur|SubGender=Masc3	4	obj	4:obj	SpaceAfter=No
9	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	_

~~~


