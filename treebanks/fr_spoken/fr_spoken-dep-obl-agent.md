---
layout: base
title:  'Statistics of obl:agent in UD_French-Spoken'
udver: '2'
---

## Treebank Statistics: UD_French-Spoken: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="fr_spoken-dep-obl.html">obl</a></tt>.
There are also 2 other language-specific subtypes of `obl`: <tt><a href="fr_spoken-dep-obl-arg.html">obl:arg</a></tt>, <tt><a href="fr_spoken-dep-obl-mod.html">obl:mod</a></tt>.

3 nodes (0%) are attached to their parents as `obl:agent`.

3 instances of `obl:agent` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.

The following 2 pairs of parts of speech are connected with `obl:agent`: <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt> (2; 67% instances), <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-PRON.html">PRON</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 19 obl:agent	color:blue
1	donc	donc	ADV	_	_	7	advmod	_	_
2	tout	tout	ADJ	_	Gender=Masc|Number=Sing	4	amod	_	_
3	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
4	monde	monde	NOUN	_	Gender=Masc|Number=Sing	7	nsubj	_	_
5	s'	se	PRON	_	Person=3|PronType=Prs	7	dep:comp	_	_
6	en	en	PRON	_	Person=3|PronType=Prs	7	obj	_	_
7	va	aller	VERB	ETRE	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
8	y	y	PRON	_	Person=3|PronType=Prs	9	dep:comp	_	_
9	compris	compris	VERB	_	_	11	acl	_	_
10	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	11	det	_	_
11	foule	foule	NOUN	_	Gender=Fem|Number=Sing	4	conj	_	_
12	puisque	puisque	SCONJ	_	_	16	mark	_	_
13	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	14	det	_	_
14	foule	foule	NOUN	_	Gender=Fem|Number=Sing	16	nsubj:pass	_	_
15	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	16	aux:pass	_	_
16	intéressée	intéresser	VERB	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	11	acl	_	_
17	par	par	ADP	_	_	19	case	_	_
18	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	19	det	_	_
19	flics	flic	NOUN	_	_	16	obl:agent	_	_
20	euh	euh	INTJ	_	_	19	discourse	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 17 obl:agent	color:blue
1	donc	donc	ADV	_	_	8	advmod	_	_
2	euh	euh	INTJ	_	_	1	discourse	_	_
3	bon	bon	INTJ	_	_	1	discourse	_	_
4	ben	ben	INTJ	_	_	1	discourse	_	_
5	là	là	ADV	_	_	1	discourse	_	_
6	maintenant	maintenant	ADV	_	_	8	advmod	_	_
7	je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	8	nsubj	_	_
8	s~	s~	VERB	_	Number=Sing|Person=1	0	root	_	_
9	je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	14	nsubj:pass	_	_
10	suis	être	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	14	aux:pass	_	_
11	plus	plus	ADV	_	_	14	advmod	_	_
12	ou	ou	CCONJ	_	_	13	cc	_	_
13	moins	moins	ADV	_	_	11	conj	_	_
14	aidé	aider	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	8	reparandum	_	_
15	euh	euh	INTJ	_	_	14	discourse	_	_
16	par	par	ADP	_	_	17	case	_	_
17	quelqu'un	quelqu'un	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Ind	14	obl:agent	_	_
18	à	à	ADP	_	_	19	case	_	_
19	mi-temps	mi-temps	NOUN	_	_	17	obl:arg	_	_
20	heureusement	heureusement	ADV	_	_	14	advmod	_	_

~~~


