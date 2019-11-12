---
layout: base
title:  'Statistics of compound:svc in UD_Mbya_Guarani-Dooley'
udver: '2'
---

## Treebank Statistics: UD_Mbya_Guarani-Dooley: Relations: `compound:svc`

This relation is a language-specific subtype of <tt><a href="gun_dooley-dep-compound.html">compound</a></tt>.

259 nodes (2%) are attached to their parents as `compound:svc`.

259 instances of `compound:svc` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.72586872586873.

The following 2 pairs of parts of speech are connected with `compound:svc`: <tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt>-<tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt> (258; 100% instances), <tt><a href="gun_dooley-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 compound:svc	color:blue
1	_	_	PRON	pro	Person=3|PronType=Prs	5	nsubj	_	_
2	_	_	PART	quantprt	_	1	dep:mod	_	_
3	_	_	PART	discprt	_	1	dep:mod	_	_
4	_	_	PART	illocprt	_	1	dep:mod	_	_
5	_	_	VERB	vi:a	Mood=Ind|Person[subj]=3|Subcat=Int|VerbForm=Fin	0	root	_	_
6	_	_	VERB	vs	Mood=Ind|Person=3|VerbForm=Ser	5	compound:svc	_	_
7	_	_	NUM	num	NumType=Card	8	nummod	_	_
8	_	_	NOUN	n	_	5	obl	_	_
9	_	_	ADP	post	_	8	case	_	_
10	_	_	PUNCT	punct	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 compound:svc	color:blue
1	_	_	PUNCT	punct	_	5	punct	_	_
2	_	_	PRON	dem	PronType=Dem	5	obl	_	_
3	_	_	ADP	post	_	2	case	_	_
4	_	_	PART	intprt	_	2	dep:mod	_	_
5	_	_	NOUN	n	Number[psor]=Sing	10	parataxis:rep	_	_
6	_	_	PART	intprt	_	5	dep:mod	_	_
7	_	_	VERB	vs	Mood=Ind|Person=2|VerbForm=Ser	5	compound:svc	_	_
8	_	_	SCONJ	subordconn	_	5	mark	_	_
9	_	_	PUNCT	punct	_	5	punct	_	_
10	_	_	VERB	vt	Mood=Ind|Subcat=Tran|VerbForm=Inf	0	root	_	_
11	_	_	PUNCT	punct	_	10	punct	_	_

~~~


