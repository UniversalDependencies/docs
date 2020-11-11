---
layout: base
title:  'Statistics of xcomp:ds in UD_Finnish-OOD'
udver: '2'
---

## Treebank Statistics: UD_Finnish-OOD: Relations: `xcomp:ds`

This relation is a language-specific subtype of <tt><a href="fi_ood-dep-xcomp.html">xcomp</a></tt>.

59 nodes (0%) are attached to their parents as `xcomp:ds`.

54 instances of `xcomp:ds` (92%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.03389830508475.

The following 7 pairs of parts of speech are connected with `xcomp:ds`: <tt><a href="fi_ood-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ood-pos-VERB.html">VERB</a></tt> (27; 46% instances), <tt><a href="fi_ood-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt> (12; 20% instances), <tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ood-pos-VERB.html">VERB</a></tt> (7; 12% instances), <tt><a href="fi_ood-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_ood-pos-VERB.html">VERB</a></tt> (5; 8% instances), <tt><a href="fi_ood-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ood-pos-ADJ.html">ADJ</a></tt> (5; 8% instances), <tt><a href="fi_ood-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ood-pos-ADV.html">ADV</a></tt> (2; 3% instances), <tt><a href="fi_ood-pos-ADV.html">ADV</a></tt>-<tt><a href="fi_ood-pos-VERB.html">VERB</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 xcomp:ds	color:blue
1	Nosturilla	nosturi	NOUN	_	Case=Ade|Number=Sing	2	obl	_	_
2	avustettu	avustaa	VERB	_	Case=Nom|Degree=Pos|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Pass	0	root	_	_
3	istumaan	istua	VERB	_	Case=Ill|InfForm=3|Number=Sing|VerbForm=Inf|Voice=Act	2	xcomp:ds	_	_
4	kuntotuoliin	kunto#tuoli	NOUN	_	Case=Ill|Number=Sing	3	obl	_	SpaceAfter=No
5	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 xcomp:ds	color:blue
1	Käykää	käydä	VERB	_	Mood=Imp|Number=Plur|Person=2|VerbForm=Fin|Voice=Act	0	root	_	_
2	pyytää	pyytää	VERB	_	InfForm=1|Number=Sing|VerbForm=Inf|Voice=Act	1	xcomp	_	_
3	kaveriksi	kaveri	NOUN	_	Case=Tra|Number=Sing	2	xcomp:ds	_	_
4	ja	ja	CCONJ	_	_	6	cc	_	_
5	sitten	sitten	ADV	_	_	6	advmod	_	_
6	juttelee	jutella	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	conj	_	_
7	😉	😉	SYM	_	_	1	discourse	_	SpaceAfter=No
8	.	.	PUNCT	_	_	1	punct	_	SpaceAfter=\s\s

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 xcomp:ds	color:blue
1	Nyt	nyt	ADV	_	_	3	advmod	_	_
2	on	olla	AUX	_	Mood=Ind|Number=Sing|Person=0|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	_	_
3	aika	aika	NOUN	_	Case=Nom|Number=Sing	0	root	_	_
4	tarttua	tarttua	VERB	_	InfForm=1|Number=Sing|VerbForm=Inf|Voice=Act	3	xcomp:ds	_	_
5	huipputeoksiin	huippu#teos	NOUN	_	Case=Ill|Number=Plur	4	obl	_	SpaceAfter=No
6	!	!	PUNCT	_	_	3	punct	_	_

~~~


