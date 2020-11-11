---
layout: base
title:  'Statistics of acl in UD_Breton-KEB'
udver: '2'
---

## Treebank Statistics: UD_Breton-KEB: Relations: `acl`

This relation is universal.
There are 2 language-specific subtypes of `acl`: <tt><a href="br_keb-dep-acl-focus.html">acl:focus</a></tt>, <tt><a href="br_keb-dep-acl-relcl.html">acl:relcl</a></tt>.

125 nodes (1%) are attached to their parents as `acl`.

123 instances of `acl` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.52.

The following 10 pairs of parts of speech are connected with `acl`: <tt><a href="br_keb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="br_keb-pos-VERB.html">VERB</a></tt> (98; 78% instances), <tt><a href="br_keb-pos-PRON.html">PRON</a></tt>-<tt><a href="br_keb-pos-VERB.html">VERB</a></tt> (10; 8% instances), <tt><a href="br_keb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="br_keb-pos-VERB.html">VERB</a></tt> (3; 2% instances), <tt><a href="br_keb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="br_keb-pos-ADJ.html">ADJ</a></tt> (3; 2% instances), <tt><a href="br_keb-pos-VERB.html">VERB</a></tt>-<tt><a href="br_keb-pos-ADJ.html">ADJ</a></tt> (3; 2% instances), <tt><a href="br_keb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="br_keb-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="br_keb-pos-NUM.html">NUM</a></tt>-<tt><a href="br_keb-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="br_keb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="br_keb-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="br_keb-pos-ADV.html">ADV</a></tt>-<tt><a href="br_keb-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="br_keb-pos-VERB.html">VERB</a></tt>-<tt><a href="br_keb-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 acl	color:blue
1	Baleadennoù	baleadenn	NOUN	n	Gender=Fem|Number=Plur	10	nsubj	_	_
2	kontet	kontañ	VERB	vblex	Tense=Past|VerbForm=Part	1	acl	_	_
3	hag	ha	CCONJ	cnjcoo	_	4	cc	_	_
4	heñchet	heñchañ	VERB	vblex	Tense=Past|VerbForm=Part	2	conj	_	_
5	e	e	ADP	pr	_	7	case	_	_
6	r	an	DET	det	_	7	det	_	_
7	c’hoadoù	koad	NOUN	n	Gender=Masc|Number=Plur	2	obl	_	_
8	a	a	AUX	vpart	_	10	aux	_	_
9	vo	bezañ	AUX	vblex	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	10	aux	_	_
10	aozet	aozañ	VERB	vblex	Tense=Past|VerbForm=Part	0	root	_	_
11	ivez	ivez	ADV	adv	_	10	advmod	_	SpaceAfter=No
12	.	.	PUNCT	sent	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 acl	color:blue
1	Klaseloc'h	klasel	ADJ	adj	Degree=Cmp	0	root	_	_
2	e	e	AUX	vpart	_	1	aux	_	_
3	oa	bezañ	AUX	vblex	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	1	cop	_	_
4	ar pezh	ar pezh a	PRON	prn	Number=Sing|PronType=Rel	1	nsubj	_	_
5	kinniget	kinnig	VERB	vblex	Tense=Past|VerbForm=Part	4	acl	_	_
6	e	e	ADP	pr	_	7	case	_	_
7	Kemper	Kemper	PROPN	np	Number=Sing	5	obl	_	_
8	d'	da	ADP	pr	_	10	case	_	_
9	ar	an	DET	det	_	10	det	_	_
10	mare	mare	NOUN	n	Gender=Masc|Number=Sing	5	obl	_	SpaceAfter=No
11	-mañ	mañ	ADV	adv	_	10	advmod	_	SpaceAfter=No
12	.	.	PUNCT	sent	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 acl	color:blue
1	Ral	ral	ADJ	adj	_	0	root	_	_
2	eo	bezañ	AUX	vblex	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	cop	_	_
3	da	da	ADP	pr	_	4	mark	_	_
4	gavout	kavout	VERB	vblex	VerbForm=Inf	1	acl	_	_
5	ur	un	DET	det	_	6	det	_	_
6	c'hoant	c’hoant	NOUN	n	Gender=Masc|Number=Sing	4	obj	_	_
7	gwirion	gwirion	ADJ	adj	_	6	amod	_	_
8	da	da	ADP	pr	_	9	mark	_	_
9	souten	souten	VERB	vblex	VerbForm=Inf	6	acl	_	_
10	ar	an	DET	det	_	11	det	_	_
11	yezh	yezh	NOUN	n	Gender=Fem|Number=Sing	9	obj	_	SpaceAfter=No
12	.	.	PUNCT	sent	_	1	punct	_	_

~~~


