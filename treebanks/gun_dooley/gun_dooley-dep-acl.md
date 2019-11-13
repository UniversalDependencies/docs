---
layout: base
title:  'Statistics of acl in UD_Mbya_Guarani-Dooley'
udver: '2'
---

## Treebank Statistics: UD_Mbya_Guarani-Dooley: Relations: `acl`

This relation is universal.

60 nodes (1%) are attached to their parents as `acl`.

58 instances of `acl` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.48333333333333.

The following 6 pairs of parts of speech are connected with `acl`: <tt><a href="gun_dooley-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt> (52; 87% instances), <tt><a href="gun_dooley-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gun_dooley-pos-NOUN.html">NOUN</a></tt> (2; 3% instances), <tt><a href="gun_dooley-pos-PRON.html">PRON</a></tt>-<tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt> (2; 3% instances), <tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt>-<tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt> (2; 3% instances), <tt><a href="gun_dooley-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gun_dooley-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="gun_dooley-pos-PRON.html">PRON</a></tt>-<tt><a href="gun_dooley-pos-NOUN.html">NOUN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 acl	color:blue
1	_	_	NOUN	n	_	2	compound	_	_
2	_	_	NOUN	n	_	6	obl	_	_
3	_	_	VERB	vi:a	Mood=Ind|Person[subj]=3|Subcat=Int|VerbForm=Fin	2	acl	_	_
4	_	_	SCONJ	rel	_	3	mark	_	_
5	_	_	ADP	post	_	2	case	_	_
6	_	_	VERB	inact	Mood=Ind|Person[subj]=3|Subcat=Int|VerbForm=Fin	10	advcl	_	_
7	_	_	SCONJ	rel	_	6	mark	_	_
8	_	_	PART	discprt	_	6	dep:mod	_	_
9	_	_	PART	illocprt	_	6	dep:mod	_	_
10	_	_	VERB	inact	Mood=Ind|Person[subj]=3|Subcat=Int|VerbForm=Fin	0	root	_	_
11	_	_	PART	aspprt	_	10	dep:mod	_	_
12	_	_	VERB	vs	Mood=Ind|Person=3|VerbForm=Ser	10	compound:svc	_	_
13	_	_	PUNCT	punct	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 acl	color:blue
1	_	_	VERB	vt	Mood=Ind|Person[subj]=3|Subcat=Tran|VerbForm=Fin	4	advcl	_	_
2	_	_	SCONJ	subordconn	_	1	mark	_	_
3	_	_	PART	illocprt	_	1	dep:mod	_	_
4	_	_	VERB	vt	Mood=Ind|Person[subj]=3|Subcat=Tran|VerbForm=Fin	0	root	_	_
5	_	_	NOUN	n	_	4	obj	_	_
6	_	_	NOUN	n	_	5	acl	_	_
7	_	_	PART	focprt	_	6	dep:mod	_	_
8	_	_	PART	intprt	_	6	dep:mod	_	_
9	_	_	SCONJ	rel	_	6	mark	_	_
10	_	_	PUNCT	punct	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 acl	color:blue
1	_	_	VERB	n:pred	Mood=Ind|Subcat=Int|VerbForm=Vnoun	12	advcl	_	_
2	_	_	VERB	inact	Mood=Ind|Person[subj]=3|Subcat=Int|VerbForm=Fin	1	advcl	_	_
3	_	_	SCONJ	rel	_	2	mark	_	_
4	_	_	PART	intprt	_	1	dep:mod	_	_
5	_	_	SCONJ	subordconn	_	1	mark	_	_
6	_	_	PART	illocprt	_	1	dep:mod	_	_
7	_	_	PART	illocprt	_	1	dep:mod	_	_
8	_	_	PRON	quant	PronType=Ind	12	obj	_	_
9	_	_	VERB	inact	Mood=Ind|Person[subj]=3|Subcat=Int|VerbForm=Fin	8	acl	_	_
10	_	_	SCONJ	rel	_	9	mark	_	_
11	_	_	PART	focprt	_	8	dep:mod	_	_
12	_	_	VERB	vt	Mood=Ind|Person[subj]=3|Subcat=Tran|VerbForm=Fin	0	root	_	_
13	_	_	PUNCT	punct	_	12	punct	_	_

~~~


