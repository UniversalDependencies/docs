---
layout: base
title:  'Statistics of compound:svc in UD_Mbya_Guarani-Dooley'
udver: '2'
---

## Treebank Statistics: UD_Mbya_Guarani-Dooley: Relations: `compound:svc`

This relation is a language-specific subtype of <tt><a href="gun_dooley-dep-compound.html">compound</a></tt>.

263 nodes (2%) are attached to their parents as `compound:svc`.

263 instances of `compound:svc` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.79087452471483.

The following 2 pairs of parts of speech are connected with `compound:svc`: <tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt>-<tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt> (260; 99% instances), <tt><a href="gun_dooley-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt> (3; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 compound:svc	color:blue
1	_	_	PRON	pro	Person=3|PronType=Prs	5	nsubj	_	_
2	_	_	PART	quantprt	_	1	clf	_	_
3	_	_	PART	discprt	_	1	amod	_	_
4	_	_	PART	illocprt	_	1	amod	_	_
5	_	_	VERB	vt	Person[subj]=3|Subcat=Tran	0	root	_	_
6	_	_	VERB	vs	Person=3|VerbForm=Ser	5	compound:svc	_	_
7	_	_	NUM	num	_	8	nummod	_	_
8	_	_	NOUN	n	_	5	obl	_	_
9	_	_	ADP	post	_	8	case	_	_
10	_	_	PUNCT	punct	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 11 compound:svc	color:blue
1	_	_	NUM	num	_	2	nummod	_	_
2	_	_	NOUN	n	_	8	obl	_	_
3	_	_	ADP	post	_	2	case	_	_
4	_	_	VERB	vi	Person[subj]=3|Subcat=Int	8	advcl	_	_
5	_	_	SCONJ	subordconn	_	4	mark	_	_
6	_	_	PART	illocprt	_	4	advmod	_	_
7	_	_	NOUN	n	_	8	nsubj	_	_
8	_	_	NOUN	n	_	0	root	_	_
9	_	_	ADJ	vi:i	_	8	amod	_	_
10	_	_	PART	intprt	_	9	advmod	_	_
11	_	_	VERB	vs	Person=3|VerbForm=Ser	8	compound:svc	_	_
12	_	_	PUNCT	punct	_	8	punct	_	_

~~~


