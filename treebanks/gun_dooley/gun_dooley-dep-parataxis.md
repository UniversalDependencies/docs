---
layout: base
title:  'Statistics of parataxis in UD_Mbya_Guarani-Dooley'
udver: '2'
---

## Treebank Statistics: UD_Mbya_Guarani-Dooley: Relations: `parataxis`

This relation is universal.
There are 1 language-specific subtypes of `parataxis`: <tt><a href="gun_dooley-dep-parataxis-rep.html">parataxis:rep</a></tt>.

164 nodes (1%) are attached to their parents as `parataxis`.

164 instances of `parataxis` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.34756097560976.

The following 7 pairs of parts of speech are connected with `parataxis`: <tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt>-<tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt> (152; 93% instances), <tt><a href="gun_dooley-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt> (5; 3% instances), <tt><a href="gun_dooley-pos-INTJ.html">INTJ</a></tt>-<tt><a href="gun_dooley-pos-INTJ.html">INTJ</a></tt> (2; 1% instances), <tt><a href="gun_dooley-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gun_dooley-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="gun_dooley-pos-PRON.html">PRON</a></tt>-<tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt>-<tt><a href="gun_dooley-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="gun_dooley-pos-X.html">X</a></tt>-<tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 20 parataxis	color:blue
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
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 25 parataxis	color:blue
1	_	_	PRON	pro	Person=3|PronType=Prs	18	obl:sentcon	_	_
2	_	_	ADP	post	_	1	case	_	_
3	_	_	PART	aspprt	_	1	dep:mod	_	_
4	_	_	PART	illocprt	_	1	dep:mod	_	_
5	_	_	PUNCT	punct	_	18	punct	_	_
6	_	_	PRON	pro	Person=3|PronType=Prs	18	obl:sentcon	_	_
7	_	_	ADP	post	_	6	case	_	_
8	_	_	PART	aspprt	_	6	dep:mod	_	_
9	_	_	PART	aspprt	_	6	dep:mod	_	_
10	_	_	SCONJ	subordconn	_	6	mark	_	_
11	_	_	PART	illocprt	_	6	dep:mod	_	_
12	_	_	ADV	mod	_	18	advmod	_	_
13	_	_	PART	discprt	_	12	dep:mod	_	_
14	_	_	PART	illocprt	_	12	dep:mod	_	_
15	_	_	NOUN	n	_	18	nsubj	_	_
16	_	_	VERB	inact	Mood=Ind|Subcat=Int|VerbForm=Inf	15	acl	_	_
17	_	_	SCONJ	rel	_	16	mark	_	_
18	_	_	VERB	vt	Mood=Ind|Subcat=Tran|VerbForm=Inf	0	root	_	_
19	_	_	NOUN	n	_	18	obl	_	_
20	_	_	ADP	post	_	19	case	_	_
21	_	_	PUNCT	punct	_	18	punct	_	_
22	“	“	PUNCT	punct	_	23	punct	_	_
23	_	_	NOUN	n	_	18	parataxis:rep	_	_
24	_	_	PUNCT	punct	_	23	punct	_	_
25	_	_	VERB	vt	Mood=Ind|Subcat=Tran|VerbForm=Inf	23	parataxis	_	_
26	_	_	PUNCT	punct	_	18	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 parataxis	color:blue
1	_	_	PUNCT	punct	_	2	punct	_	_
2	_	_	INTJ	onom	_	6	parataxis:rep	_	_
3	_	_	PUNCT	punct	_	4	punct	_	_
4	_	_	INTJ	onom	_	2	parataxis	_	_
5	_	_	PUNCT	punct	_	2	punct	_	_
6	_	_	VERB	vt	Mood=Ind|Subcat=Tran|VerbForm=Inf	0	root	_	_
7	_	_	PART	intprt	_	6	dep:mod	_	_
8	_	_	VERB	vpos	VerbForm=Post	6	compound:svc	_	_
9	_	_	PUNCT	punct	_	6	punct	_	_

~~~


