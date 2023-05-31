---
layout: base
title:  'Statistics of obl:agent in UD_Polish-PDB'
udver: '2'
---

## Treebank Statistics: UD_Polish-PDB: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="pl_pdb-dep-obl.html">obl</a></tt>.
There are also 3 other language-specific subtypes of `obl`: <tt><a href="pl_pdb-dep-obl-arg.html">obl:arg</a></tt>, <tt><a href="pl_pdb-dep-obl-cmpr.html">obl:cmpr</a></tt>, <tt><a href="pl_pdb-dep-obl-orphan.html">obl:orphan</a></tt>.

604 nodes (0%) are attached to their parents as `obl:agent`.

584 instances of `obl:agent` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.69039735099338.

The following 11 pairs of parts of speech are connected with `obl:agent`: <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt> (399; 66% instances), <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt> (80; 13% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-PROPN.html">PROPN</a></tt> (54; 9% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-PRON.html">PRON</a></tt> (47; 8% instances), <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-PROPN.html">PROPN</a></tt> (8; 1% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt> (5; 1% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-X.html">X</a></tt> (5; 1% instances), <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="pl_pdb-pos-X.html">X</a></tt>-<tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 obl:agent	color:blue
1	Konwojent	konwojent	NOUN	subst:sg:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing	9	nsubj:pass	9:nsubj:pass	SpaceAfter=No
2	,	,	PUNCT	interp	PunctType=Comm	3	punct	3:punct	_
3	delegowany	delegować	ADJ	ppas:sg:nom:m1:imperf:aff	Animacy=Hum|Aspect=Imp|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	1	acl	1:acl	_
4	przez	przez	ADP	prep:acc:nwok	AdpType=Prep|Variant=Short	5	case	5:case	Case=Acc
5	fabrykę	fabryka	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	3	obl:agent	3:obl:agent	SpaceAfter=No
6	,	,	PUNCT	interp	PunctType=Comm	3	punct	3:punct	_
7	został	zostać	AUX	praet:sg:m1:perf	Animacy=Hum|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	9	aux:pass	9:aux:pass	_
8	już	już	PART	part	_	9	advmod:emph	9:advmod:emph	_
9	obrobiony	obrobić	ADJ	ppas:sg:nom:m1:perf:aff	Animacy=Hum|Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	0	root	0:root	SpaceAfter=No
10	.	.	PUNCT	interp	PunctType=Peri	9	punct	9:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 obl:agent	color:blue
1	Użytkowanie	użytkować	NOUN	ger:sg:nom:n:imperf:aff	Aspect=Imp|Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Vnoun	7	nsubj	7:nsubj	_
2	przez	przez	ADP	prep:acc:nwok	AdpType=Prep|Variant=Short	3	case	3:case	Case=Acc
3	spółdzielnię	spółdzielnia	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	1	obl:agent	1:obl:agent	_
4	wkładów	wkład	NOUN	subst:pl:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	1	obj	1:obj	_
5	gruntowych	gruntowy	ADJ	adj:pl:gen:m3:pos	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur	4	amod	4:amod	_
6	jest	być	AUX	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	7:cop	_
7	odpłatne	odpłatny	ADJ	adj:sg:nom:n:pos	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	0	root	0:root	SpaceAfter=No
8	.	.	PUNCT	interp	PunctType=Peri	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 obl:agent	color:blue
1	Nie	nie	PART	part	Polarity=Neg	2	advmod:neg	2:advmod:neg	_
2	czuje	czuć	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	się	się	PRON	part	PronType=Prs|Reflex=Yes	2	expl:pv	2:expl:pv	_
4	pani	pani	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	2	nsubj	2:nsubj	_
5	trochę	trochę	ADV	adv	_	6	advmod	6:advmod	_
6	odsunięta	odsunąć	ADJ	ppas:sg:nom:f:perf:aff	Aspect=Perf|Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	2	xcomp	2:xcomp	_
7	przez	przez	ADP	prep:acc:nwok	AdpType=Prep|Variant=Short	8	case	8:case	Case=Acc
8	Leppera	Lepper	PROPN	subst:sg:acc:m1	Animacy=Hum|Case=Acc|Gender=Masc|Number=Sing	6	obl:agent	6:obl:agent	SpaceAfter=No
9	?	?	PUNCT	interp	PunctType=Qest	2	punct	2:punct	_

~~~


