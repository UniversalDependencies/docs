---
layout: base
title:  'Statistics of flat in UD_Galician-TreeGal'
udver: '2'
---

## Treebank Statistics: UD_Galician-TreeGal: Relations: `flat`

This relation is universal.
There are 2 language-specific subtypes of `flat`: <tt><a href="gl_treegal-dep-flat-foreign.html">flat:foreign</a></tt>, <tt><a href="gl_treegal-dep-flat-name.html">flat:name</a></tt>.

29 nodes (0%) are attached to their parents as `flat`.

29 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.96551724137931.

The following 5 pairs of parts of speech are connected with `flat`: <tt><a href="gl_treegal-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gl_treegal-pos-PROPN.html">PROPN</a></tt> (24; 83% instances), <tt><a href="gl_treegal-pos-NUM.html">NUM</a></tt>-<tt><a href="gl_treegal-pos-NUM.html">NUM</a></tt> (2; 7% instances), <tt><a href="gl_treegal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gl_treegal-pos-PROPN.html">PROPN</a></tt> (1; 3% instances), <tt><a href="gl_treegal-pos-NUM.html">NUM</a></tt>-<tt><a href="gl_treegal-pos-ADP.html">ADP</a></tt> (1; 3% instances), <tt><a href="gl_treegal-pos-NUM.html">NUM</a></tt>-<tt><a href="gl_treegal-pos-CCONJ.html">CCONJ</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat	color:blue
1	Lars	lars	PROPN	Spm0	Gender=Masc	0	root	_	_
2	Von	von	PROPN	Spm0	Gender=Masc	1	flat	_	_
3	Trier	trier	PROPN	Spm0	Gender=Masc	1	flat	_	_
4	con	con	ADP	P	AdpType=Prep	5	case	_	_
5	Europa	Europa	PROPN	Sp00	_	1	nmod	_	SpaceAfter=No
6	.	.	PUNCT	Q.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 flat	color:blue
1	Hai	haber	VERB	Vpi30s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	advcl	_	_
2	vinte	vinte	NUM	Ncdmp	Gender=Masc|Number=Plur|NumType=Card	5	nummod	_	_
3	e	e	CCONJ	Cc	_	2	flat	_	_
4	cinco	cinco	NUM	Ncdmp	Gender=Masc|Number=Sing|NumType=Card	2	flat	_	_
5	anos	ano	NOUN	Scmp	Gender=Masc|Number=Plur	1	obj	_	_
6	tiña	ter	VERB	Vii30s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
7	13.000	13.000	NUM	Ncnap	Gender=Com|Number=Plur|NumType=Card	6	obj	_	_
8	máis	máis	ADV	Wm	_	7	advmod	_	SpaceAfter=No
9	,	,	PUNCT	Q,	_	13	punct	_	_
10	e	e	CCONJ	Cc	_	13	cc	_	_
11	era	ser	AUX	Vii30s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	13	cop	_	_
12	a	o	DET	Ddfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	13	det	_	_
13	terceira	terceiro	NUM	Nonfs	Gender=Fem|Number=Sing|NumType=Ord	6	conj	_	_
14	de	de	ADP	P	AdpType=Prep	15	case	_	_
15	Galiza	Galiza	PROPN	Sp00	_	13	nmod	_	SpaceAfter=No
16	.	.	PUNCT	Q.	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 flat	color:blue
1	Quizá	quizá	ADV	Wn	_	3	advmod	_	_
2	as	o	DET	Ddfp	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	3	det	_	_
3	mulleres	muller	NOUN	Scfp	Gender=Fem|Number=Plur	0	root	_	_
4	de	de	ADP	P	AdpType=Prep	5	case	_	_
5	Abades	Abades	PROPN	Sp00	_	3	nmod	_	SpaceAfter=No
6	,	,	PUNCT	Q,	_	9	punct	_	_
7	ou	ou	CCONJ	Cc	_	9	cc	_	_
8	o	o	DET	Ddms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	crego	crego	NOUN	Scms	Gender=Masc|Number=Sing	3	conj	_	_
10	D.	D.	NOUN	Zams	Gender=Masc|Number=Sing	9	nmod	_	_
11	Osorio	Osorio	PROPN	Spms	Gender=Masc|Number=Sing	10	flat	_	SpaceAfter=No
12	.	.	PUNCT	Q.	_	3	punct	_	_

~~~


