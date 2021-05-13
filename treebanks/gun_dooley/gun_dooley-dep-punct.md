---
layout: base
title:  'Statistics of punct in UD_Mbya_Guarani-Dooley'
udver: '2'
---

## Treebank Statistics: UD_Mbya_Guarani-Dooley: Relations: `punct`

This relation is universal.

1878 nodes (16%) are attached to their parents as `punct`.

1486 instances of `punct` (79%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.83386581469649.

The following 7 pairs of parts of speech are connected with `punct`: <tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt>-<tt><a href="gun_dooley-pos-PUNCT.html">PUNCT</a></tt> (1785; 95% instances), <tt><a href="gun_dooley-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gun_dooley-pos-PUNCT.html">PUNCT</a></tt> (54; 3% instances), <tt><a href="gun_dooley-pos-PRON.html">PRON</a></tt>-<tt><a href="gun_dooley-pos-PUNCT.html">PUNCT</a></tt> (18; 1% instances), <tt><a href="gun_dooley-pos-INTJ.html">INTJ</a></tt>-<tt><a href="gun_dooley-pos-PUNCT.html">PUNCT</a></tt> (15; 1% instances), <tt><a href="gun_dooley-pos-ADV.html">ADV</a></tt>-<tt><a href="gun_dooley-pos-PUNCT.html">PUNCT</a></tt> (3; 0% instances), <tt><a href="gun_dooley-pos-X.html">X</a></tt>-<tt><a href="gun_dooley-pos-PUNCT.html">PUNCT</a></tt> (2; 0% instances), <tt><a href="gun_dooley-pos-NUM.html">NUM</a></tt>-<tt><a href="gun_dooley-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 punct	color:blue
1	_	_	ADV	inact	_	3	advmod	_	_
2	_	_	PART	illocprt	_	1	dep:mod	_	_
3	_	_	VERB	vi:a	Mood=Ind|Person[subj]=3|Subcat=Intr|VerbForm=Fin	0	root	_	_
4	_	_	NUM	num	NumType=Card	5	nummod	_	_
5	_	_	NOUN	n	Number=Plur	3	nsubj	_	_
6	_	_	PUNCT	punct	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 22 punct	color:blue
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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 punct	color:blue
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


