---
layout: base
title:  'Statistics of obl:sentcon in UD_Mbya_Guarani-Dooley'
udver: '2'
---

## Treebank Statistics: UD_Mbya_Guarani-Dooley: Relations: `obl:sentcon`

This relation is a language-specific subtype of <tt><a href="gun_dooley-dep-obl.html">obl</a></tt>.

681 nodes (6%) are attached to their parents as `obl:sentcon`.

681 instances of `obl:sentcon` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.87958883994126.

The following 4 pairs of parts of speech are connected with `obl:sentcon`: <tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt>-<tt><a href="gun_dooley-pos-PRON.html">PRON</a></tt> (676; 99% instances), <tt><a href="gun_dooley-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gun_dooley-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt>-<tt><a href="gun_dooley-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt>-<tt><a href="gun_dooley-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 obl:sentcon	color:blue
1	_	_	PRON	pro	Person=3|PronType=Prs	7	obl:sentcon	_	_
2	_	_	ADP	post	_	1	case	_	_
3	_	_	PART	discprt	_	1	dep:mod	_	_
4	_	_	PART	illocprt	_	1	dep:mod	_	_
5	_	_	NUM	num	NumType=Card	6	nummod	_	_
6	_	_	NOUN	n	_	7	obl	_	_
7	_	_	VERB	vt	Mood=Ind|Subcat=Tran|VerbForm=Inf	0	root	_	_
8	_	_	NOUN	n	_	7	obl	_	_
9	_	_	ADP	post	_	8	case	_	_
10	_	_	PUNCT	punct	_	7	punct	_	_
11	_	_	PUNCT	punct	_	15	punct	_	_
12	_	_	ADV	dem	_	15	advmod	_	_
13	_	_	PART	discprt	_	12	dep:mod	_	_
14	_	_	PRON	pro	Number=Sing|Person=1|PronType=Prs	15	nsubj	_	_
15	_	_	VERB	vi:a	Mood=Ind|Person[subj]=1|Subcat=Int|VerbForm=Fin	7	parataxis:rep	_	_
16	_	_	PART	aspprt	_	15	dep:mod	_	_
17	_	_	NOUN	n	_	15	obl	_	_
18	_	_	ADP	post	_	17	case	_	_
19	_	_	PUNCT	punct	_	15	punct	_	_
20	_	_	VERB	vt	Mood=Ind|Subcat=Tran|VerbForm=Inf	15	parataxis	_	_
21	_	_	PUNCT	punct	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 12 obl:sentcon	color:blue
1	_	_	NOUN	n	_	4	nsubj	_	_
2	_	_	PART	discprt	_	1	dep:mod	_	_
3	_	_	PART	illocprt	_	1	dep:mod	_	_
4	_	_	VERB	vt	Mood=Ind|Person[subj]=3|Subcat=Tran|VerbForm=Fin	0	root	_	_
5	_	_	NOUN	n	_	6	nmod	_	_
6	_	_	NOUN	n	_	4	obj	_	_
7	_	_	PUNCT	punct	_	10	punct	_	_
8	_	_	CCONJ	coordconn	_	10	cc	_	_
9	_	_	NOUN	n	_	10	nmod	_	_
10	_	_	NOUN	n	_	6	conj	_	_
11	_	_	PUNCT	punct	_	15	punct	_	_
12	_	_	PRON	pro	Person=3|PronType=Prs	15	obl:sentcon	_	_
13	_	_	ADP	post	_	12	case	_	_
14	_	_	NOUN	n	_	15	nmod	_	_
15	_	_	NOUN	n	_	6	conj	_	_
16	_	_	PUNCT	punct	_	22	punct	_	_
17	_	_	PRON	pro	Person=3|PronType=Prs	22	obl:sentcon	_	_
18	_	_	ADP	post	_	17	case	_	_
19	_	_	VERB	vt	Mood=Ind|Person[subj]=3|Subcat=Tran|VerbForm=Fin	22	obj	_	_
20	_	_	SCONJ	rel	_	19	mark	_	_
21	_	_	PART	intprt	_	19	dep:mod	_	_
22	_	_	VERB	vt	Mood=Ind|Person[subj]=3|Subcat=Tran|VerbForm=Fin	4	conj	_	_
23	_	_	PUNCT	punct	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 2 obl:sentcon	color:blue
1	_	_	PRON	pro	Person=3|PronType=Prs	2	nmod	_	_
2	ramigua	ramigua	NOUN	n	_	8	obl:sentcon	_	like-NMLZ
3	_	_	SCONJ	subordconn	_	2	mark	_	_
4	_	_	PART	discprt	_	2	dep:mod	_	_
5	_	_	PART	illocprt	_	2	dep:mod	_	_
6	_	_	PRON	pro	Person=3|PronType=Prs	8	nsubj	_	_
7	_	_	PART	quantprt	_	6	dep:mod	_	_
8	_	_	VERB	inact	Mood=Ind|Person[subj]=3|Polarity=Neg|Subcat=Int|VerbForm=Fin	0	root	_	_
9	_	_	SCONJ	rel	_	8	mark	_	_
10	_	_	PUNCT	punct	_	8	punct	_	_

~~~


