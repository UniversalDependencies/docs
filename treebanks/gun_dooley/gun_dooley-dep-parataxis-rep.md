---
layout: base
title:  'Statistics of parataxis:rep in UD_Mbya_Guarani-Dooley'
udver: '2'
---

## Treebank Statistics: UD_Mbya_Guarani-Dooley: Relations: `parataxis:rep`

This relation is a language-specific subtype of <tt><a href="gun_dooley-dep-parataxis.html">parataxis</a></tt>.

292 nodes (2%) are attached to their parents as `parataxis:rep`.

156 instances of `parataxis:rep` (53%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.80479452054795.

The following 6 pairs of parts of speech are connected with `parataxis:rep`: <tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt>-<tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt> (262; 90% instances), <tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt>-<tt><a href="gun_dooley-pos-NOUN.html">NOUN</a></tt> (15; 5% instances), <tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt>-<tt><a href="gun_dooley-pos-PRON.html">PRON</a></tt> (9; 3% instances), <tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt>-<tt><a href="gun_dooley-pos-INTJ.html">INTJ</a></tt> (4; 1% instances), <tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt>-<tt><a href="gun_dooley-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt>-<tt><a href="gun_dooley-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 15 parataxis:rep	color:blue
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
15	_	_	VERB	vi:a	Mood=Ind|Person[subj]=1|Subcat=Intr|VerbForm=Fin	7	parataxis:rep	_	_
16	_	_	PART	aspprt	_	15	dep:mod	_	_
17	_	_	NOUN	n	_	15	obl	_	_
18	_	_	ADP	post	_	17	case	_	_
19	_	_	PUNCT	punct	_	15	punct	_	_
20	_	_	VERB	vt	Mood=Ind|Subcat=Tran|VerbForm=Inf	15	parataxis	_	_
21	_	_	PUNCT	punct	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 23 parataxis:rep	color:blue
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
16	_	_	VERB	inact	Mood=Ind|Subcat=Intr|VerbForm=Inf	15	acl	_	_
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 parataxis:rep	color:blue
1	_	_	PUNCT	punct	_	2	punct	_	_
2	_	_	PRON	interpron	PronType=Int	5	parataxis:rep	_	_
3	_	_	ADJ	inact	_	2	amod	_	_
4	_	_	PUNCT	punct	_	2	punct	_	_
5	_	_	VERB	vt	Mood=Ind|Subcat=Tran|VerbForm=Inf	8	advcl	_	_
6	_	_	SCONJ	subordconn	_	5	mark	_	_
7	_	_	PART	illocprt	_	5	dep:mod	_	_
8	_	_	VERB	vt	Mood=Ind|Person[subj]=3|Polarity=Neg|Subcat=Tran|VerbForm=Fin	0	root	_	_
9	_	_	VERB	vpos	Polarity=Neg|VerbForm=Post	8	compound:svc	_	_
10	_	_	PART	illocprt	_	8	dep:mod	_	_
11	_	_	PUNCT	punct	_	12	punct	_	_
12	_	_	VERB	vi:a	Mood=Ind|Person[subj]=3|Subcat=Intr|VerbForm=Fin	8	conj	_	_
13	_	_	PART	focprt	_	12	dep:mod	_	_
14	_	_	PUNCT	punct	_	8	punct	_	_

~~~


