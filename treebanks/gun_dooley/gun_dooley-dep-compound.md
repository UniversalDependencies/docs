---
layout: base
title:  'Statistics of compound in UD_Mbya_Guarani-Dooley'
udver: '2'
---

## Treebank Statistics: UD_Mbya_Guarani-Dooley: Relations: `compound`

This relation is universal.
There are 1 language-specific subtypes of `compound`: <tt><a href="gun_dooley-dep-compound-svc.html">compound:svc</a></tt>.

25 nodes (0%) are attached to their parents as `compound`.

19 instances of `compound` (76%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 3 pairs of parts of speech are connected with `compound`: <tt><a href="gun_dooley-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gun_dooley-pos-NOUN.html">NOUN</a></tt> (15; 60% instances), <tt><a href="gun_dooley-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt> (8; 32% instances), <tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt>-<tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt> (2; 8% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 compound	color:blue
1	_	_	NOUN	n	_	2	compound	_	_
2	_	_	NOUN	n	_	6	obl	_	_
3	_	_	VERB	vi	Person[subj]=3|Subcat=Int	2	acl	_	_
4	_	_	SCONJ	rel	_	3	mark	_	_
5	_	_	ADP	post	_	2	case	_	_
6	_	_	VERB	vi	Person[subj]=3|Subcat=Int	10	advcl	_	_
7	_	_	SCONJ	rel	_	6	mark	_	_
8	_	_	PART	discprt	_	6	advmod	_	_
9	_	_	PART	illocprt	_	6	advmod	_	_
10	_	_	VERB	vi	Person[subj]=3|Subcat=Int	0	root	_	_
11	_	_	PART	aspprt	_	10	advmod	_	_
12	_	_	VERB	vs	Person=3|VerbForm=Ser	10	compound:svc	_	_
13	_	_	PUNCT	punct	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 compound	color:blue
1	_	_	PUNCT	punct	_	8	punct	_	_
2	_	_	NOUN	n	_	8	obl	_	_
3	_	_	VERB	vi:a	_	2	compound	_	_
4	_	_	VERB	vt	Person[subj]=2|Subcat=Tran	2	acl	_	_
5	_	_	SCONJ	rel	_	4	mark	_	_
6	_	_	ADP	post	_	2	case	_	_
7	ke	ke	PART	illocprt	_	2	advmod	_	IMP
8	_	_	VERB	vi	Person[subj]=2|Subcat=Int	10	parataxis:rep	_	_
9	_	_	PUNCT	punct	_	8	punct	_	_
10	_	_	VERB	vt	Person[subj]=3|Subcat=Tran	0	root	_	_
11	_	_	PUNCT	punct	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 15 compound	color:blue
1	_	_	PRON	pro	Person=3|PronType=Prs	11	obl:sentcon	_	_
2	_	_	ADP	post	_	1	case	_	_
3	_	_	PART	discprt	_	1	advmod	_	_
4	_	_	PART	illocprt	_	1	advmod	_	_
5	_	_	NUM	num	_	6	nummod	_	_
6	_	_	NOUN	n	_	11	obl	_	_
7	_	_	PART	discprt	_	6	amod	_	_
8	_	_	PART	illocprt	_	6	amod	_	_
9	_	_	NUM	num	_	10	nummod	_	_
10	_	_	NOUN	n	_	11	nsubj	_	_
11	_	_	VERB	vt	Person[subj]=3|Subcat=Tran	0	root	_	_
12	_	_	NOUN	n	_	13	nmod	_	_
13	_	_	NOUN	n	_	11	obj	_	_
14	_	_	ADJ	ptcp	VerbForm=Part	13	amod	_	_
15	_	_	VERB	vi	Person[subj]=3|Subcat=Int	16	compound	_	_
16	_	_	VERB	vi:i	_	13	acl	_	_
17	va'e	va'e	SCONJ	rel	_	16	mark	_	REL
18	_	_	PUNCT	punct	_	11	punct	_	_

~~~


