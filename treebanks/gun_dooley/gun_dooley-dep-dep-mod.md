---
layout: base
title:  'Statistics of dep:mod in UD_Mbya_Guarani-Dooley'
udver: '2'
---

## Treebank Statistics: UD_Mbya_Guarani-Dooley: Relations: `dep:mod`

This relation is a language-specific subtype of <tt><a href="gun_dooley-dep-dep.html">dep</a></tt>.

2425 nodes (21%) are attached to their parents as `dep:mod`.

2386 instances of `dep:mod` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.87092783505155.

The following 9 pairs of parts of speech are connected with `dep:mod`: <tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt>-<tt><a href="gun_dooley-pos-PART.html">PART</a></tt> (1074; 44% instances), <tt><a href="gun_dooley-pos-PRON.html">PRON</a></tt>-<tt><a href="gun_dooley-pos-PART.html">PART</a></tt> (887; 37% instances), <tt><a href="gun_dooley-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gun_dooley-pos-PART.html">PART</a></tt> (283; 12% instances), <tt><a href="gun_dooley-pos-ADV.html">ADV</a></tt>-<tt><a href="gun_dooley-pos-PART.html">PART</a></tt> (119; 5% instances), <tt><a href="gun_dooley-pos-PART.html">PART</a></tt>-<tt><a href="gun_dooley-pos-PART.html">PART</a></tt> (52; 2% instances), <tt><a href="gun_dooley-pos-NUM.html">NUM</a></tt>-<tt><a href="gun_dooley-pos-PART.html">PART</a></tt> (4; 0% instances), <tt><a href="gun_dooley-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gun_dooley-pos-PART.html">PART</a></tt> (4; 0% instances), <tt><a href="gun_dooley-pos-ADJ.html">ADJ</a></tt>-<tt><a href="gun_dooley-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="gun_dooley-pos-INTJ.html">INTJ</a></tt>-<tt><a href="gun_dooley-pos-PART.html">PART</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 16 dep:mod	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 dep:mod	color:blue
1	_	_	PRON	pro	Person=3|PronType=Prs	5	nsubj	_	_
2	_	_	PART	quantprt	_	1	dep:mod	_	_
3	_	_	PART	discprt	_	1	dep:mod	_	_
4	_	_	PART	illocprt	_	1	dep:mod	_	_
5	_	_	VERB	vi:a	Mood=Ind|Person[subj]=3|Subcat=Intr|VerbForm=Fin	0	root	_	_
6	_	_	VERB	vs	Mood=Ind|Person=3|VerbForm=Ser	5	compound:svc	_	_
7	_	_	NUM	num	NumType=Card	8	nummod	_	_
8	_	_	NOUN	n	_	5	obl	_	_
9	_	_	ADP	post	_	8	case	_	_
10	_	_	PUNCT	punct	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 dep:mod	color:blue
1	_	_	PRON	pro	Person=3|PronType=Prs	8	obl:sentcon	_	_
2	_	_	SCONJ	subordconn	_	1	mark	_	_
3	_	_	PART	discprt	_	1	dep:mod	_	_
4	_	_	PART	illocprt	_	1	dep:mod	_	_
5	_	_	NOUN	n	_	6	nmod	_	_
6	_	_	NOUN	n	_	8	obl	_	_
7	_	_	PART	focprt	_	6	dep:mod	_	_
8	_	_	VERB	vi:a	Mood=Ind|Person[subj]=3|Subcat=Intr|VerbForm=Fin	0	root	_	_
9	_	_	VERB	vi:d	Mood=Ind|Person[subj]=3|Subcat=Intr|VerbForm=Fin	8	advcl	_	_
10	_	_	SCONJ	subordconn	_	9	mark	_	_
11	_	_	PUNCT	punct	_	8	punct	_	_

~~~


