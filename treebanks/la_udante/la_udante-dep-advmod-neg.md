---
layout: base
title:  'Statistics of advmod:neg in UD_Latin-UDante'
udver: '2'
---

## Treebank Statistics: UD_Latin-UDante: Relations: `advmod:neg`

This relation is a language-specific subtype of <tt><a href="la_udante-dep-advmod.html">advmod</a></tt>.
There are also 1 other language-specific subtypes of `advmod`: <tt><a href="la_udante-dep-advmod-emph.html">advmod:emph</a></tt>.

672 nodes (1%) are attached to their parents as `advmod:neg`.

627 instances of `advmod:neg` (93%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.76785714285714.

The following 12 pairs of parts of speech are connected with `advmod:neg`: <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-PART.html">PART</a></tt> (412; 61% instances), <tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_udante-pos-PART.html">PART</a></tt> (85; 13% instances), <tt><a href="la_udante-pos-ADV.html">ADV</a></tt>-<tt><a href="la_udante-pos-PART.html">PART</a></tt> (62; 9% instances), <tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_udante-pos-PART.html">PART</a></tt> (52; 8% instances), <tt><a href="la_udante-pos-DET.html">DET</a></tt>-<tt><a href="la_udante-pos-PART.html">PART</a></tt> (21; 3% instances), <tt><a href="la_udante-pos-AUX.html">AUX</a></tt>-<tt><a href="la_udante-pos-PART.html">PART</a></tt> (19; 3% instances), <tt><a href="la_udante-pos-PRON.html">PRON</a></tt>-<tt><a href="la_udante-pos-PART.html">PART</a></tt> (7; 1% instances), <tt><a href="la_udante-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_udante-pos-PART.html">PART</a></tt> (5; 1% instances), <tt><a href="la_udante-pos-ADP.html">ADP</a></tt>-<tt><a href="la_udante-pos-PART.html">PART</a></tt> (3; 0% instances), <tt><a href="la_udante-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="la_udante-pos-PART.html">PART</a></tt> (3; 0% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="la_udante-pos-PRON.html">PRON</a></tt>-<tt><a href="la_udante-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 advmod:neg	color:blue
1	Sed	sed	CCONJ	co	_	4	cc	_	_
2	an	an	PART	co	PartType=Int	4	discourse	_	_
3	non	non	PART	r	Polarity=Neg	4	advmod:neg	_	_
4	miserebitur	misereor	VERB	vd2ifs3	Aspect=Imp|InflClass=LatE|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Pass	0	root	_	_
5	cuiquam	quisquam	DET	dinsmd	Case=Dat|Compound=Yes|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Ind	4	obl	_	SpaceAfter=No
6	?	?	PUNCT	Pu	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 advmod:neg	color:blue
1	Et	et	CCONJ	co	_	4	cc	_	_
2	sic	sic	ADV	r	PronType=Dem	4	advmod	_	_
3	instantia	instantia	NOUN	sfs1n	Case=Nom|Gender=Fem|InflClass=IndEurA|Number=Sing	4	nsubj	_	_
4	videtur	uideo	VERB	vp2ips3	Aspect=Imp|InflClass=LatE|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
5	errare	erro	VERB	va1fp	Aspect=Imp|InflClass=LatA|InflClass[noun]=Ind|Tense=Pres|VerbForm=Inf|Voice=Act	4	csubj	_	_
6	secundum	secundum	ADP	e	AdpType=Prep|VerbForm=Gdv	9	case	_	_
7	“	“	PUNCT	Pu	_	9	punct	_	SpaceAfter=No
8	non	non	PART	r	Polarity=Neg	9	advmod:neg	_	_
9	causam	causa	NOUN	sfs1a	Case=Acc|Gender=Fem|InflClass=IndEurA|Number=Sing	5	obl	_	_
10	ut	ut	SCONJ	r	_	11	mark	_	_
11	causa	causa	NOUN	sfs1n	Case=Nom|Gender=Fem|InflClass=IndEurA|Number=Sing	9	advcl:cmpr	_	SpaceAfter=No
12	”	”	PUNCT	Pu	_	9	punct	_	SpaceAfter=No
13	.	.	PUNCT	Pu	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 advmod:neg	color:blue
1	Cur	cur	ADV	rt	PronType=Rel	0	root	_	_
2	non	non	PART	r	Polarity=Neg	1	advmod:neg	_	SpaceAfter=No
3	?	?	PUNCT	Pu	_	1	punct	_	_

~~~


