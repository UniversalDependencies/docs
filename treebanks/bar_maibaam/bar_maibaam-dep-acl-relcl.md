---
layout: base
title:  'Statistics of acl:relcl in UD_Bavarian-MaiBaam'
udver: '2'
---

## Treebank Statistics: UD_Bavarian-MaiBaam: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="bar_maibaam-dep-acl.html">acl</a></tt>.

88 nodes (1%) are attached to their parents as `acl:relcl`.

88 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.45454545454545.

The following 9 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="bar_maibaam-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bar_maibaam-pos-VERB.html">VERB</a></tt> (59; 67% instances), <tt><a href="bar_maibaam-pos-PRON.html">PRON</a></tt>-<tt><a href="bar_maibaam-pos-VERB.html">VERB</a></tt> (7; 8% instances), <tt><a href="bar_maibaam-pos-DET.html">DET</a></tt>-<tt><a href="bar_maibaam-pos-VERB.html">VERB</a></tt> (6; 7% instances), <tt><a href="bar_maibaam-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bar_maibaam-pos-ADJ.html">ADJ</a></tt> (4; 5% instances), <tt><a href="bar_maibaam-pos-PROPN.html">PROPN</a></tt>-<tt><a href="bar_maibaam-pos-VERB.html">VERB</a></tt> (4; 5% instances), <tt><a href="bar_maibaam-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bar_maibaam-pos-NOUN.html">NOUN</a></tt> (3; 3% instances), <tt><a href="bar_maibaam-pos-PROPN.html">PROPN</a></tt>-<tt><a href="bar_maibaam-pos-NOUN.html">NOUN</a></tt> (3; 3% instances), <tt><a href="bar_maibaam-pos-ADV.html">ADV</a></tt>-<tt><a href="bar_maibaam-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="bar_maibaam-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bar_maibaam-pos-ADV.html">ADV</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 11 acl:relcl	color:blue
1	Es	_	PRON	_	_	2	expl	_	GermanLemma=es
2	gibd	_	VERB	_	_	0	root	_	GermanLemma=geben
3	owa	_	ADV	_	_	2	advmod	_	GermanLemma=aber
4	a	_	DET	_	_	5	det	_	GermanLemma=auch
5	Fladnbrod	_	NOUN	_	_	2	obj	_	GermanLemma=Fladenbrot|SpaceAfter=No
6	,	_	PUNCT	_	_	11	punct	_	GermanLemma=,
7	des	_	PRON	_	_	11	nsubj:pass	_	GermanLemma=das
8	wos	_	SCONJ	_	_	11	mark	_	GermanLemma=was
9	ohne	_	ADP	_	_	10	case	_	GermanLemma=ohne
10	Treibmiddl	_	NOUN	_	_	11	obl	_	GermanLemma=Treibmittel
11	gmochd	_	VERB	_	_	5	acl:relcl	_	GermanLemma=machen
12	wiad	_	AUX	_	_	11	aux:pass	_	GermanLemma=werden|SpaceAfter=No
13	.	_	PUNCT	_	_	2	punct	_	GermanLemma=.

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 acl:relcl	color:blue
1	Des	_	PRON	_	_	7	obj	_	GermanLemma=das
2	konn	_	AUX	_	_	7	aux	_	GermanLemma=können
3	dea	_	PRON	_	_	7	nsubj	_	GermanLemma=der
4	wej	_	SCONJ	_	_	7	mark	_	GermanLemma=wo
5	voahea	_	ADV	_	_	6	advmod	_	GermanLemma=vorher
6	sitzt	_	VERB	_	_	3	acl:relcl	_	GermanLemma=sitzen
7	midgej	_	VERB	_	_	0	root	_	GermanLemma=mitgehen
8	oda	_	CCONJ	_	_	9	cc	_	GermanLemma=oder
9	ned	_	PART	_	_	7	conj	_	GermanLemma=nicht|SpaceAfter=No
10	.	_	PUNCT	_	_	7	punct	_	GermanLemma=.

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 acl:relcl	color:blue
1	I	_	PRON	_	_	4	nsubj	_	GermanLemma=ich
2	hob	_	AUX	_	_	4	aux	_	GermanLemma=haben
3	ois	_	DET	_	_	4	obj	_	GermanLemma=alles
4	kauft	_	VERB	_	_	0	root	_	GermanLemma=kaufen|SpaceAfter=No
5	,	_	PUNCT	_	_	9	punct	_	GermanLemma=,
6	wos	_	PRON	_	_	9	obj	_	GermanLemma=was|SpaceAfter=No
7	'd	_	PRON	_	_	9	nsubj	_	GermanLemma=du
8	ma	_	PRON	_	_	9	obl:arg	_	GermanLemma=ich
9	gsogt	_	VERB	_	_	3	acl:relcl	_	GermanLemma=sagen
10	host	_	AUX	_	_	9	aux	_	GermanLemma=haben|SpaceAfter=No
11	.	_	PUNCT	_	_	4	punct	_	GermanLemma=.

~~~


