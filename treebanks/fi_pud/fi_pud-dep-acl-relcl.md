---
layout: base
title:  'Statistics of acl:relcl in UD_Finnish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Finnish-PUD: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="fi_pud-dep-acl.html">acl</a></tt>.

227 nodes (1%) are attached to their parents as `acl:relcl`.

227 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.53303964757709.

The following 19 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_pud-pos-VERB.html">VERB</a></tt> (141; 62% instances), <tt><a href="fi_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_pud-pos-VERB.html">VERB</a></tt> (16; 7% instances), <tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_pud-pos-ADJ.html">ADJ</a></tt> (14; 6% instances), <tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt> (13; 6% instances), <tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_pud-pos-PRON.html">PRON</a></tt> (11; 5% instances), <tt><a href="fi_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_pud-pos-VERB.html">VERB</a></tt> (7; 3% instances), <tt><a href="fi_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt> (5; 2% instances), <tt><a href="fi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_pud-pos-VERB.html">VERB</a></tt> (5; 2% instances), <tt><a href="fi_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_pud-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="fi_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_pud-pos-PRON.html">PRON</a></tt> (3; 1% instances), <tt><a href="fi_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="fi_pud-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="fi_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="fi_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="fi_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="fi_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="fi_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="fi_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="fi_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="fi_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_pud-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="fi_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="fi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="fi_pud-pos-X.html">X</a></tt>-<tt><a href="fi_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 10 acl:relcl	color:blue
1	Se	se	PRON	_	Case=Nom|Number=Sing|PronType=Dem	2	nsubj	2:nsubj	_
2	pitää	pitää	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	sisällään	sisällä	ADV	_	Person[psor]=3	2	advmod	2:advmod	_
4	pienen	pieni	ADJ	_	Case=Gen|Degree=Pos|Number=Sing	5	amod	5:amod	_
5	laguunin	laguuni	NOUN	_	Case=Gen|Number=Sing	2	obj	2:obj	SpaceAfter=No
6	,	,	PUNCT	_	_	10	punct	10:punct	_
7	joka	joka	PRON	_	Case=Nom|Number=Sing|PronType=Rel	10	nsubj	10:nsubj	_
8	on	olla	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	10	aux	10:aux	_
9	lähes	lähes	ADV	_	_	10	advmod	10:advmod	_
10	kuivunut	kuivua	VERB	_	Case=Nom|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Act	5	acl:relcl	5:acl:relcl	SpaceAfter=No
11	.	.	PUNCT	_	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 acl:relcl	color:blue
1	Ensimmäinen	ensimmäinen	ADJ	_	Case=Nom|Derivation=Inen|Number=Sing|NumType=Ord	0	root	0:root	_
2	ja	ja	CCONJ	_	_	3	cc	3:cc	_
3	tunnetuin	tunnettu	ADJ	_	Case=Nom|Degree=Sup|Number=Sing	1	conj	1:conj	_
4	oli	olla	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	1	cop	1:cop	_
5	Ohiojoki	Ohiojoki	PROPN	_	Case=Nom|Number=Sing	1	nsubj:cop	1:nsubj:cop	SpaceAfter=No
6	,	,	PUNCT	_	_	8	punct	8:punct	_
7	joka	joka	PRON	_	Case=Nom|Number=Sing|PronType=Rel	8	nsubj	8:nsubj	_
8	virtasi	virrata	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	5	acl:relcl	5:acl:relcl	_
9	Mississippiin	Mississippi	PROPN	_	Case=Ill|Number=Sing	8	obl	8:obl	SpaceAfter=No
10	.	.	PUNCT	_	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 8 acl:relcl	color:blue
1	Taso	taso	NOUN	_	Case=Nom|Number=Sing	0	root	0:root	SpaceAfter=No
2	,	,	PUNCT	_	_	8	punct	8:punct	_
3	joka	joka	PRON	_	Case=Nom|Number=Sing|PronType=Rel	8	nsubj:cop	8:nsubj:cop	_
4	molemmissa	molemmat	PRON	_	Case=Ine|Number=Plur|PronType=Ind	5	det	5:det	_
5	tapauksissa	tapaus	NOUN	_	Case=Ine|Number=Plur	8	obl	8:obl	_
6	on	olla	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	8	cop	8:cop	_
7	EU:n	EU	PROPN	_	Abbr=Yes|Case=Gen|Number=Sing	8	nmod:poss	8:nmod:poss	_
8	korkeimpia	korkea	ADJ	_	Case=Par|Degree=Sup|Number=Plur	1	acl:relcl	1:acl:relcl	SpaceAfter=No
9	.	.	PUNCT	_	_	1	punct	1:punct	_

~~~


