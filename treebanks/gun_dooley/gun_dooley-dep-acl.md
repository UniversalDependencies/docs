---
layout: base
title:  'Statistics of acl in UD_Mbya_Guarani-Dooley'
udver: '2'
---

## Treebank Statistics: UD_Mbya_Guarani-Dooley: Relations: `acl`

This relation is universal.

69 nodes (1%) are attached to their parents as `acl`.

66 instances of `acl` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.59420289855072.

The following 6 pairs of parts of speech are connected with `acl`: <tt><a href="gun_dooley-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt> (58; 84% instances), <tt><a href="gun_dooley-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gun_dooley-pos-NOUN.html">NOUN</a></tt> (3; 4% instances), <tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt>-<tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt> (3; 4% instances), <tt><a href="gun_dooley-pos-PRON.html">PRON</a></tt>-<tt><a href="gun_dooley-pos-NOUN.html">NOUN</a></tt> (2; 3% instances), <tt><a href="gun_dooley-pos-PRON.html">PRON</a></tt>-<tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt> (2; 3% instances), <tt><a href="gun_dooley-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gun_dooley-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 acl	color:blue
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
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 acl	color:blue
1	_	_	VERB	vt	Person[subj]=3|Subcat=Tran	4	advcl	_	_
2	_	_	SCONJ	subordconn	_	1	mark	_	_
3	_	_	PART	illocprt	_	1	advmod	_	_
4	_	_	VERB	vt	Person[subj]=3|Subcat=Tran	0	root	_	_
5	_	_	NOUN	n	_	4	obj	_	_
6	_	_	NOUN	n	_	5	acl	_	_
7	_	_	PART	quantprt	_	6	amod	_	_
8	_	_	PART	intprt	_	6	amod	_	_
9	_	_	SCONJ	rel	_	6	mark	_	_
10	_	_	PUNCT	punct	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 11 acl	color:blue
1	_	_	PRON	pro	Person=3|PronType=Prs	5	obl:sentcon	_	_
2	_	_	SCONJ	subordconn	_	1	mark	_	_
3	_	_	PART	illocprt	_	1	advmod	_	_
4	_	_	NOUN	n	_	5	nsubj	_	_
5	_	_	VERB	vt	Person[subj]=3|Subcat=Tran	0	root	_	_
6	_	_	PART	discprt	_	5	advmod	_	_
7	_	_	PART	illocprt	_	5	advmod	_	_
8	_	_	VERB	vi	Subcat=Int	5	obj	_	_
9	_	_	SCONJ	rel	_	8	mark	_	_
10	_	_	ADV	adv	_	11	advmod	_	_
11	_	_	VERB	vi	Person[subj]=3|Subcat=Int	8	acl	_	_
12	_	_	SCONJ	rel	_	11	mark	_	_
13	_	_	PUNCT	punct	_	5	punct	_	_

~~~


