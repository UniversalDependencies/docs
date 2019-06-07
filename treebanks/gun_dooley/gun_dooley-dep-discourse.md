---
layout: base
title:  'Statistics of discourse in UD_Mbya_Guarani-Dooley'
udver: '2'
---

## Treebank Statistics: UD_Mbya_Guarani-Dooley: Relations: `discourse`

This relation is universal.
There are 1 language-specific subtypes of `discourse`: <tt><a href="gun_dooley-dep-discourse-q.html">discourse:q</a></tt>.

4 nodes (0%) are attached to their parents as `discourse`.

4 instances of `discourse` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.75.

The following 2 pairs of parts of speech are connected with `discourse`: <tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt>-<tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt> (3; 75% instances), <tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt>-<tt><a href="gun_dooley-pos-INTJ.html">INTJ</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 11 discourse	color:blue
1	_	_	PRON	pro	Person=3|PronType=Prs	3	det	_	_
2	_	_	SCONJ	rel	_	1	mark	_	_
3	_	_	NOUN	n	_	8	nsubj	_	_
4	_	_	PART	illocprt	_	3	amod	_	_
5	_	_	PART	illocprt	_	3	amod	_	_
6	_	_	PRON	dem	PronType=Dem	8	obl	_	_
7	_	_	ADP	post	_	6	case	_	_
8	oporaei	poraei	VERB	vi	Person[subj]=3|Subcat=Int	0	root	_	A3-sing
9	_	_	PUNCT	punct	_	8	punct	_	_
10	_	_	PUNCT	punct	_	14	punct	_	_
11	_	_	VERB	prov	VerbForm=Prov	14	discourse	_	_
12	_	_	PUNCT	punct	_	13	punct	_	_
13	_	_	NOUN	n	Number[psor]=Sing	14	nmod	_	_
14	_	_	VERB	vi	Person[subj]=3|Polarity=Neg|Subcat=Int	8	parataxis:rep	_	_
15	_	_	PUNCT	punct	_	18	punct	_	_
16	_	_	ADV	adv	Polarity=Neg	18	advmod	_	_
17	_	_	PART	illocprt	_	16	advmod	_	_
18	_	_	VERB	vi	Person[subj]=2|Subcat=Int	14	parataxis	_	_
19	_	_	PUNCT	punct	_	14	punct	_	_
20	_	_	VERB	vt	Person[subj]=3|Subcat=Tran	14	parataxis	_	_
21	_	_	PUNCT	punct	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 discourse	color:blue
1	_	_	PRON	pro	Person=3|PronType=Prs	9	obl:sentcon	_	_
2	_	_	SCONJ	subordconn	_	1	mark	_	_
3	_	_	PART	illocprt	_	1	advmod	_	_
4	_	_	PUNCT	punct	_	7	punct	_	_
5	_	_	INTJ	interj	_	7	discourse	_	_
6	_	_	PART	illocprt	_	5	fixed	_	_
7	_	_	VERB	vi	Person[subj]=3|Subcat=Int	9	parataxis:rep	_	_
8	_	_	PUNCT	punct	_	7	punct	_	_
9	_	_	VERB	vt	Person[subj]=3|Subcat=Tran	0	root	_	_
10	_	_	NOUN	n	_	9	nsubj	_	_
11	_	_	NOUN	n	_	9	obl	_	_
12	_	_	ADP	post	_	11	case	_	_
13	_	_	PUNCT	punct	_	9	punct	_	_

~~~


