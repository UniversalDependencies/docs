---
layout: base
title:  'Statistics of xcomp in UD_Finnish-OOD'
udver: '2'
---

## Treebank Statistics: UD_Finnish-OOD: Relations: `xcomp`

This relation is universal.
There are 1 language-specific subtypes of `xcomp`: <tt><a href="fi_ood-dep-xcomp-ds.html">xcomp:ds</a></tt>.

271 nodes (1%) are attached to their parents as `xcomp`.

263 instances of `xcomp` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.44649446494465.

The following 9 pairs of parts of speech are connected with `xcomp`: <tt><a href="fi_ood-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ood-pos-VERB.html">VERB</a></tt> (223; 82% instances), <tt><a href="fi_ood-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ood-pos-ADJ.html">ADJ</a></tt> (30; 11% instances), <tt><a href="fi_ood-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt> (9; 3% instances), <tt><a href="fi_ood-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_ood-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="fi_ood-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ood-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ood-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="fi_ood-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ood-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="fi_ood-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ood-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="fi_ood-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ood-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 xcomp	color:blue
1	Natrium	natrium	NOUN	_	Case=Nom|Number=Sing	2	nsubj	_	_
2	lähtenyt	lähteä	VERB	_	Case=Nom|Degree=Pos|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Act	0	root	_	_
3	korjaantumaan	korjaantua	VERB	_	Case=Ill|InfForm=3|Number=Sing|VerbForm=Inf|Voice=Act	2	xcomp	_	_
4	keittosuolalla	keitto#suola	NOUN	_	Case=Ade|Number=Sing	3	obl	_	SpaceAfter=No
5	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 xcomp	color:blue
1	Verenpainetaso	veren#paine#taso	NOUN	_	Case=Nom|Number=Sing	2	nsubj	_	_
2	pysytellyt	pysytellä	VERB	_	Case=Nom|Degree=Pos|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Act	0	root	_	_
3	hyvänä	hyvä	ADJ	_	Case=Ess|Degree=Pos|Number=Sing	2	xcomp	_	SpaceAfter=No
4	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 xcomp	color:blue
1	Miksi	miksi	ADV	_	_	2	advmod	_	_
2	suostun	suostua	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	vain	vain	ADV	_	_	2	advmod	_	_
4	kodinhoitajaksi	kodin#hoitaja	NOUN	_	Case=Tra|Derivation=Ja|Number=Sing	2	xcomp	_	_
5	ym	ym.	ADV	_	Abbr=Yes	2	advmod	_	SpaceAfter=No
6	?	?	PUNCT	_	_	2	punct	_	_

~~~


