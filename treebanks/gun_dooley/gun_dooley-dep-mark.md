---
layout: base
title:  'Statistics of mark in UD_Mbya_Guarani-Dooley'
udver: '2'
---

## Treebank Statistics: UD_Mbya_Guarani-Dooley: Relations: `mark`

This relation is universal.

1119 nodes (10%) are attached to their parents as `mark`.

1118 instances of `mark` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.32529043789097.

The following 8 pairs of parts of speech are connected with `mark`: <tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt>-<tt><a href="gun_dooley-pos-SCONJ.html">SCONJ</a></tt> (602; 54% instances), <tt><a href="gun_dooley-pos-PRON.html">PRON</a></tt>-<tt><a href="gun_dooley-pos-SCONJ.html">SCONJ</a></tt> (413; 37% instances), <tt><a href="gun_dooley-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gun_dooley-pos-SCONJ.html">SCONJ</a></tt> (91; 8% instances), <tt><a href="gun_dooley-pos-ADV.html">ADV</a></tt>-<tt><a href="gun_dooley-pos-SCONJ.html">SCONJ</a></tt> (5; 0% instances), <tt><a href="gun_dooley-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gun_dooley-pos-ADP.html">ADP</a></tt> (3; 0% instances), <tt><a href="gun_dooley-pos-PRON.html">PRON</a></tt>-<tt><a href="gun_dooley-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt>-<tt><a href="gun_dooley-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="gun_dooley-pos-PART.html">PART</a></tt>-<tt><a href="gun_dooley-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 mark	color:blue
1	_	_	PUNCT	punct	_	2	punct	_	_
2	_	_	VERB	vt	Person[subj]=2|Subcat=Tran	11	parataxis:rep	_	_
3	_	_	NOUN	n	_	2	obj	_	_
4	_	_	PUNCT	punct	_	2	punct	_	_
5	_	_	ADV	adv	_	6	advmod	_	_
6	_	_	VERB	vi	Person[subj]=1|Subcat=Int	8	advcl	_	_
7	_	_	SCONJ	subordconn	_	6	mark	_	_
8	_	_	VERB	vi	Person[subj]=1|Subcat=Int	2	advcl	_	_
9	_	_	SCONJ	subordconn	_	8	mark	_	_
10	_	_	PUNCT	punct	_	2	punct	_	_
11	_	_	VERB	vt	Person[subj]=3|Subcat=Tran	0	root	_	_
12	_	_	PUNCT	punct	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 mark	color:blue
1	_	_	PRON	pro	Person=3|PronType=Prs	5	obl:sentcon	_	_
2	_	_	SCONJ	subordconn	_	1	mark	_	_
3	_	_	PART	illocprt	_	1	advmod	_	_
4	_	_	NOUN	n	_	5	nsubj	_	_
5	_	_	VERB	vt	Person[subj]=3|Subcat=Tran	0	root	_	_
6	_	_	PUNCT	punct	_	5	punct	_	_
7	_	_	PUNCT	punct	_	9	punct	_	_
8	_	_	PRON	pro	Number=Sing|Person=1|PronType=Prs	9	nsubj	_	_
9	_	_	VERB	vi	Person[subj]=1|Subcat=Int	5	parataxis:rep	_	_
10	_	_	PART	aspprt	_	9	advmod	_	_
11	_	_	PART	focprt	_	9	advmod	_	_
12	_	_	PUNCT	punct	_	9	punct	_	_
13	he'i	he'i	VERB	vt	Person[subj]=3|Subcat=Tran	9	parataxis	_	A3.say
14	_	_	PUNCT	punct	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 mark	color:blue
1	_	_	PRON	pro	Person=3|PronType=Prs	8	obl:sentcon	_	_
2	_	_	SCONJ	subordconn	_	1	mark	_	_
3	_	_	NOUN	n	_	8	nsubj	_	_
4	_	_	NOUN	n	_	3	compound	_	_
5	_	_	SCONJ	rel	_	3	mark	_	_
6	_	_	PART	discprt	_	3	advmod	_	_
7	_	_	PART	illocprt	_	3	advmod	_	_
8	_	_	NOUN	n	_	0	root	_	_
9	_	_	PART	illocprt	_	8	amod	_	_
10	_	_	PUNCT	punct	_	8	punct	_	_

~~~


