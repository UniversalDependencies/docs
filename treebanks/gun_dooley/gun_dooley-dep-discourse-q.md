---
layout: base
title:  'Statistics of discourse:q in UD_Mbya_Guarani-Dooley'
udver: '2'
---

## Treebank Statistics: UD_Mbya_Guarani-Dooley: Relations: `discourse:q`

This relation is a language-specific subtype of <tt><a href="gun_dooley-dep-discourse.html">discourse</a></tt>.

23 nodes (0%) are attached to their parents as `discourse:q`.

23 instances of `discourse:q` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.52173913043478.

The following 4 pairs of parts of speech are connected with `discourse:q`: <tt><a href="gun_dooley-pos-PRON.html">PRON</a></tt>-<tt><a href="gun_dooley-pos-PART.html">PART</a></tt> (10; 43% instances), <tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt>-<tt><a href="gun_dooley-pos-PART.html">PART</a></tt> (10; 43% instances), <tt><a href="gun_dooley-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gun_dooley-pos-PART.html">PART</a></tt> (2; 9% instances), <tt><a href="gun_dooley-pos-ADV.html">ADV</a></tt>-<tt><a href="gun_dooley-pos-PART.html">PART</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 discourse:q	color:blue
1	_	_	PUNCT	punct	_	5	punct	_	_
2	_	_	ADV	adv	_	5	advmod	_	_
3	_	_	PART	discprt	_	2	advmod	_	_
4	_	_	PRON	pro	Number=Sing|Person=1|PronType=Prs	5	nsubj	_	_
5	_	_	VERB	vi	Person[subj]=1|Subcat=Int	16	parataxis:rep	_	_
6	_	_	PART	aspprt	_	5	advmod	_	_
7	_	_	VERB	vt	Person[subj]=1|Subcat=Tran	5	compound:svc	_	_
8	_	_	PRON	interpron	PronType=Int	12	nsubj	_	_
9	_	_	PART	qprt	_	8	discourse:q	_	_
10	_	_	NOUN	n	Number[psor]=Sing	11	nmod	_	_
11	_	_	NOUN	n	_	12	obj	_	_
12	_	_	VERB	vt	Person[subj]=3|Subcat=Tran	7	ccomp	_	_
13	_	_	ADV	adv	_	12	advmod	_	_
14	_	_	PART	illocprt	_	12	advmod	_	_
15	_	_	PUNCT	punct	_	5	punct	_	_
16	_	_	VERB	vt	Person[subj]=3|Subcat=Tran	0	root	_	_
17	_	_	PUNCT	punct	_	16	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 discourse:q	color:blue
1	_	_	VERB	vi	Person[subj]=3|Subcat=Int	5	advcl	_	_
2	_	_	SCONJ	subordconn	_	1	mark	_	_
3	_	_	PART	illocprt	_	1	advmod	_	_
4	_	_	NOUN	n	_	5	nsubj	_	_
5	_	_	VERB	vt	Person[subj]=3|Subcat=Tran	0	root	_	_
6	_	_	PROPN	nprop	_	5	obl	_	_
7	_	_	ADP	post	_	6	case	_	_
8	_	_	PUNCT	punct	_	5	punct	_	_
9	_	_	PUNCT	punct	_	10	punct	_	_
10	_	_	VERB	vt	Person[subj]=2|Subcat=Tran	5	parataxis:rep	_	_
11	_	_	PART	aspprt	_	10	advmod	_	_
12	_	_	PART	qprt	_	10	discourse:q	_	_
13	_	_	NOUN	n	_	14	nmod	_	_
14	_	_	NOUN	n	_	15	nmod	_	_
15	_	_	NOUN	n	_	10	obj	_	_
16	_	_	PUNCT	punct	_	10	punct	_	_
17	_	_	VERB	vt	Person[subj]=3|Subcat=Tran	10	parataxis	_	_
18	_	_	PUNCT	punct	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 discourse:q	color:blue
1	_	_	PRON	pro	Person=3|PronType=Prs	3	nsubj	_	_
2	_	_	PART	quantprt	_	1	clf	_	_
3	_	_	VERB	vt	Person[subj]=3|Polarity=Neg|Subcat=Tran	0	root	_	_
4	_	_	PRON	interpron	PronType=Int	5	det	_	_
5	_	_	NOUN	n	_	3	ccomp	_	_
6	_	_	PART	qprt	_	5	discourse:q	_	_
7	_	_	NOUN	n	_	5	nsubj	_	_
8	_	_	PUNCT	punct	_	3	punct	_	_
9	_	_	PART	focprt	_	10	amod	_	_
10	_	_	NOUN	n	_	13	obj	_	_
11	_	_	PART	discprt	_	10	amod	_	_
12	_	_	PART	intprt	_	11	fixed	_	_
13	_	_	VERB	vt	Person[subj]=3|Polarity=Neg|Subcat=Tran	3	conj	_	_
14	_	_	VERB	vs	Person=3|VerbForm=Ser	13	compound:svc	_	_
15	_	_	PUNCT	punct	_	13	punct	_	_

~~~


